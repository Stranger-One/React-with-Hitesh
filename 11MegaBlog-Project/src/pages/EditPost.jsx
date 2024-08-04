import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config.js'
import Container from '../components/container/Container.jsx'
import PostForm from '../components/post-form/PostForm.jsx'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [posts, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=> {
                if(post){
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
        
    }, [slug, navigate])
    // console.log("EditPost", posts);

  return posts ? (
    <div className="py-8">
        <Container>
            <PostForm post={posts} />
        </Container>
    </div>
  ) : null
}

export default EditPost