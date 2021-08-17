import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
           <img width="200px" src="https://cdn-pi.niceshops.com/upload/image/fullbanner/medium/default/34108_b219a08c.png" alt=""/>
           <p>I am Foody, a food blog where you can share your passion of cooking,
           and making recipes with other people</p>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
           <li className="sidebarListItem">Salads</li>
           <li className="sidebarListItem">Appetizers</li>
           <li className="sidebarListItem">Entrées</li>
           <li className="sidebarListItem">Breakfast</li>
           <li className="sidebarListItem">Dessert</li>
           <li className="sidebarListItem">Beverage</li>
           </ul>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
           <i className="sidebarIcon  fab fa-twitter-square"></i>
           <i className="sidebarIcon  fab fa-pinterest-square"></i>
           <i className="sidebarIcon  fab fa-instagram-square"></i>
           </div>
           </div>
        </div>
    )
}
