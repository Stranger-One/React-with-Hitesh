import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config.js'
import Container from '../components/container/Container.jsx'
import  PostCard  from '../components/PostCard.jsx'
import Loader from '../components/Loader.jsx';


function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        appwriteService.getAllPost([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
        // console.log("all post", posts);
        setLoading(false)
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                     {/* <Loader /> */}
                    {loading ? <Loader /> : posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts