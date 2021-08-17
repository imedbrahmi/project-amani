import React from 'react'
import Post from "../post/Post"
import "./posts.css"
import {getAllPosts}from '../../Redux/actions/postActions'

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post/>
            <Post/>
            <Post />

        </div>
    )
}
