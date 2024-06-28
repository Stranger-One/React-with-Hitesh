import React, { useEffect, useState } from 'react'

const Github = () => {
    const [proImg, setproImg] = useState()
    const [name, setName] = useState()
    const [bio, setBio] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/stranger-one')
        .then(response => response.json())
        .then(resData => {
            setproImg(resData.avatar_url)
            setName(resData.name)
            setBio(resData.bio)
        })
    }, [])
  return (
    <div className='text-center flex flex-col items-center justify-center bg-slate-500 my-4 w-full text-white'>
       <div className="profile size-40 rounded-full bg-cover" style={{backgroundImage : `url(${proImg})`}}></div> 
       <h3 className='text-lg'>{bio}</h3>
       <h1 className='text-2xl'>{name}</h1>
    </div>
  )
}

export default Github