import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='  bg-gray-100 rounded-xl p-4 m-3 w-[270px] h-[300px] flex flex-col justify-center dark:bg-[#212121] dark:text-white'>
        <div className='w-full justify-center mb-4 flex flex-row items-center'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl w-[200px]' />

        </div>
        <h2
          className='text-xl font-bold'
        >{title}</h2>
        <p className='text-sm text-blue-700'>
          click to read
        </p>
      </div>
    </Link>
  )
}


export default PostCard