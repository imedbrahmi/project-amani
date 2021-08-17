import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            <span className="headerTitleSm">FOODY</span>
            <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/02/creative-food-photography-ideas-11.jpg?resize=1500%2C1000&ssl=1" alt="food"/>
        </div>
    )
}
