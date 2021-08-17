console.clear();
const express=require('express')
require ('dotenv').config()
const app=express();
//midlleware
app.use(express.json());

const authRoute= require('./routes/auth')
const userRoute=require ('./routes/users')
const postRoute= require('./routes/posts')
const categoryRoute=require('./routes/categories')
const multer = require("multer");

//Data base connection
const connection=require ('./Connection/connection')
connection()
//upload images using multer
/*const storage= multer.memoryStorage({
    destination:(req,file,cb)=>{
        cb(null,"./images")
    },filename:(req,file,cb)=>{
        cb(null,'hello.jpg');
    },
});
const upload= multer({storage:storage,limits:{fileSize:1000000}});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json({msg:'File has been uploaded'});
});*/
//router

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/categories',categoryRoute)

const Port =process.env.PORT


//create a server
app.listen(Port,(err)=>{err ? console.log(err):console.log("server is runing ")})