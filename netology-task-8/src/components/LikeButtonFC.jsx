import React from 'react'
import { useState } from 'react'
export const LikeButtonFC = () => {

    const initialLike = {
        title: 'Like',
        likes: 0,
        dislike: 0
    }
    
    const [post, setPost] = useState(initialLike)

    const handlerLike = (a) => {
        setPost({...post, likes: post.likes + 1})
    }
    const handlerDisLike = (a) => {
        setPost({...post, dislike: post.dislike + 1})
    }
    return (
        <>
            <h2>{post.title}</h2>
            <button onClick={handlerLike}>{`Like: ${post.likes}`}</button>
            <button onClick={handlerDisLike}>{`Dislike: ${post.dislike}`}</button>
        </>
  )
}
