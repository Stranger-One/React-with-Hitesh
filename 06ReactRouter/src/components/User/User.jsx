import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userId} = useParams()
  return (
    <div className='w-full flex items-center justify-center'>User: {userId} </div>
  )
}

export default User