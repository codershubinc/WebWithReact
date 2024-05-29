import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setLoading(false)
                setPosts(posts.documents)
            }else{
                return <div>Something went wrong ... Please try again</div>
            }
        })
    }, [])

    return (
        <div className='w-full py-8 '>
            {loading ?
                <div
                    className="fixed flex gap-3 top-[50%] left-[35%] bg-black w-max p-5 rounded-3xl text-white  z-10">
                    Uploading Please Wait ......
                    <div
                        className="w-6 h-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" >
                    </div>
                </div> : ""}
            <Container>
                <div className='flex flex-wrap  justify-center '>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 m-[10px] w-[207px] flex flex-wrap '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts