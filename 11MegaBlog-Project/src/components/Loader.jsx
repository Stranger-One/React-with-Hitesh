import { LuLoader } from "react-icons/lu";
import React from 'react'

function Loader() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <LuLoader className={`animate-spin text-[22px]`} />
    </div>
  )
}

export default Loader