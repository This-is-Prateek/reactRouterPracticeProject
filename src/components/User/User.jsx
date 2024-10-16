import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();

  return (
    <div className='flex justify-center items-center p-4 bg-gray-400 text-white'>
      UserID:{userId}
    </div>
  )
}

export default User
