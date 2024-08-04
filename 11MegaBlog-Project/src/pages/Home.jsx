import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config.js'
import Container from '../components/container/Container.jsx'
import PostCard from '../components/PostCard.jsx'
import { LuLoader } from "react-icons/lu";
import authService from '../appwrite/auth.js';
import Loader from '../components/Loader.jsx';
import { useSelector } from 'react-redux';



function Home() {
    const userStatus = useSelector((state) => state.auth.status)
    // const [curUser, setCurUser] = useState()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    // console.log(userStatus);

    useEffect(() => {
        setLoading(true)
        if (userStatus) {
            appwriteService.getAllPost().then((post) => {
                // console.log("Home", post.documents);
                setPosts(post.documents)
            })

        }



        setLoading(false)
    }, [])
    // console.log("Home", posts);


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {loading ? <Loader /> :
                        userStatus ?
                            posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            )) :
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to see posts
                            </h1>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home