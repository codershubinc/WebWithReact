import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='  bg-gray-100 rounded-xl p-4 w-[207px]'>
            <div className='w-full justify-center mb-4 flex flex-row items-center'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-[200px]' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
