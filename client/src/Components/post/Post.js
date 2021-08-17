import React from 'react'
import "./post.css"
import { getPost } from '../../Redux/actions/postActions'

export default function Post() {
    
    return (
        <div className="post">
        <img   className="postImg" src="https://www.santamariaworld.com/optimized/maximum/globalassets/netherlands/recepten/85.-gemengde-visschotel-geserveerd-met-een-frisse-groene-salsa.jpg"alt=""/>
            <div className="postInfo">
            <div className="postCats">
            <span className="postCat">SALADS</span>
            <span className="postCat">DESSERT</span>
            </div>
            <span className="postTitle">Le Lorem Ipsum est </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Le Lorem Ipsum est simplement 
            la comp
            

            </p>
        </div>
    )
}
