const express =require("express")
const router =express.Router();
const Category=require("../models/Category")
 

// create category
router.post('/',async (req,res)=>{
    const newCat=new Category({name:req.body.name});
   try {
     const savedCat=await newCat.save()
        res.status(200).json({msg:'category created successfully',savedCat}) 
   } catch (error) {
       res.status(500).json({msg: "can not create category",error })
   } 
});
// get all categories
router.get('/',async (req,res)=>{
    
   try {
     const cats=await Category.find();
        res.status(200).json({msg:'get categories successfully',cats}) 
   } catch (error) {
       res.status(500).json({msg: "can not create category",error })
   } 
});



















module.exports=router