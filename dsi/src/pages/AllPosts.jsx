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