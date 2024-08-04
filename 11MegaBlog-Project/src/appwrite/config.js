import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"



export class StorageServices{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, featuredImage, content, status, userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    featuredImage,
                    content,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Appwrite :: create post :: error", error)
        }
    }

    async updatePost( slug, {title, featuredImage, content, status} ){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite :: update post :: error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite :: delete :: error", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: get post :: error", error)
        }
    }

    async getAllPost( query = [Query.equal("status", "active")] ){
        try {
            const allPost = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query
            )
            // console.log("all posts", allPost);
            return allPost
        } catch (error) {
            console.log("Appwrite :: get all post :: error", error)
        }
    }

    // file upload services
    async uploadFile(file){
        console.log("upload", file)
        try {
            const result = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            console.log("file uploaded successfully", result)
            return result;
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite :: delete file :: error", error)
            return false
        }
    }

    async getImagePreview(fileId){
        try {
            const imageUlr =  this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
            // console.log(imageUlr.href);
            return imageUlr.href
        } catch (error) {
            console.log("Appwrite :: get file preview :: error", error)
        }
    }

}

const storage = new StorageServices()

export default storage