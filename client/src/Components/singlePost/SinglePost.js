import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img src="https://e7.pngegg.com/pngimages/125/779/png-clipart-eatsa-fast-food-restaurant-hamburger-choripan-leaf-vegetable-food.png" alt="" 
            className="singlePostImg"/>
            <h1 className="singlePostTitle">
            Le Lorem Ipsum
            <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
            <i className=" singlePostIcon fas fa-heart"></i>
            </div>
            </h1>
            <div className=" singlePostInfo">
            <span className="singlePostAuther">Auther: <b> Amani</b></span>
            <span className="singlePostDate">Auther: <b> 1 houre ago</b></span>
          </div>
          <p className="singlePostDesc">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
            </div>
        </div>
    )
}
