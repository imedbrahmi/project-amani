const express =require("express")
const router =express.Router();
const isAuth=require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')

const Post=require('../models/Post')
//ADD NEW POST
router.post('/',isAuth,async(req,res)=>{
   
    try {
        const{title,desc,photo,categories,user}=req.body
        const newPost= await new Post({title,desc,photo,categories,user})
        await newPost.save()
        res.status(200).send({msg:'Post added successfully',newPost})
    } catch (error) {
        res.status(400).send({msg:'can not add Post',error})
    }
}) 
// GET ALL POSTS
router.get('/',isAdmin,isAuth, async(req,res)=>{
    try {
        const postList=await Post.find()
        res.status(200).send({msg:'Get all posts successfully',postList}) 
    } catch (error) {
       res.status(400).send({msg:'can not get posts'}) 
    }
})  
//GET POST BY ID
router.get('/:id',isAuth,isAdmin,async(req,res)=>{
    try {
     const postGet=await Post.findById({_id:req.params.id})
     res.status(200).send({msg:'get post successfully',postGet}) 
    } catch (error) {
    res.status(400).send({msg:'can not get post with this id',error})    
    }
}) 
//DELETE POST
router.delete('/:id',isAuth,isAdmin,async(req,res)=>{
    try {
      const postDelete= await Post.deleteOne({_id:req.params.id})  
      
      res.status(200).send({msg:'Post has been deleted successfully'})
    } catch (error) {
        res.status(400).send({msg:'can not delete post',error})
    }
}) 
//UPDATE POST
router.put('/:id',isAuth,async(req,res)=>{
    try {
        const postUpdate=await Post.updateOne({_id:req.params.id},{$set:{...req.body}}) 
        res.status(200).send({msg:'post updated successfully',postUpdate}) 
    } catch (error) {
        res.status(400).send({msg:'can not update post'})
    }
})

module.exports=router