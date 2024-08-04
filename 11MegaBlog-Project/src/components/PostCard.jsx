import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config.js"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  // console.log(featuredImage);
  const [ url , setUrl ] = useState('')
  useEffect(() => {
    appwriteService.getImagePreview(featuredImage).then((url) => {
      // console.log(url);
      setUrl(url)
    })
  })
  
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={url} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard