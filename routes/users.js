const express =require("express")
const router =express.Router();
const User=require('../models/User')
const isAuth=require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')


//get all users
router.get("/",isAdmin,async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({msg:'Get all users successfully',users})
    } catch (error) {
      res.status(400).send({msg:'can not get users',error})  
    }
})

//delete user
router.delete("/:id",isAuth,async(req,res)=>{
    try {
        const {_id}=req.params
        const user=await User.findOneAndDelete({_id})
        res.status(200).send({msg:'user has been deleted'})
    } catch (error) {
        res.status(400).send({msg:'can not delete user'})
    }

})
//get user by id
router.get("/:id",isAdmin,isAuth,async(req,res)=>{
    try {
        const {_id}=req.params
        const user=await User.findById({_id})
        res.status(200).send({msg:'get user successully',user})
    } catch (error) {
        res.status(400).send({msg:'can not get user with this id'})
    } 
    
})
//update user
router.put('/:id',isAuth,async(req,res)=>{
    try {
        const userUpdate=await User.updateOne({_id:req.params.id},{$set:{...req.body}}) 
        res.status(200).send({msg:'user updated successfully'}) 
    } catch (error) {
        res.status(400).send({msg:'can not update user'})
    }
})

module.exports=router