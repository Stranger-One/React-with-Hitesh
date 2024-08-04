import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"


export class AuthService {
    client = new Client(); 
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // Login User
                console.log("Account Created",userAccount)
                return this.login({ email, password})
            } else {
                return userAccount
            }

        } catch (error) {
            console.log("Appwrite :: create account :: error", error)
        }
    }

    async login({ email, password }) {
        try {
            const result = await this.account.createEmailPasswordSession(email, password)
            result && console.log("login successfully", result)
            return result
        } catch (error) {
            console.log("Appwrite :: login :: error", error)
        }
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get()
            // console.log(currentUser);
            return currentUser
        } catch (error) {
            console.log("Appwrite :: current user :: error", error)
            return false
        }

        // return null;
    }

    async checkUserSession(){
        try {
            const response = await this.account.get();
            if(response) return true
        } catch (error) {
            return false
        }
    } 

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite :: logout :: error", error)
        }
    }

}

const authService = new AuthService()

export default authService;