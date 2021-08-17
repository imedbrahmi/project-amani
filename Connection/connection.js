const mongoose =require('mongoose')
const connection=async()=>{
    try {
        await mongoose.connect("mongodb+srv://Amani:mongoose2021@cluster0.xzmui.mongodb.net/BlogProject?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    console.log("connected")
    } catch (error) {
        console.log(error)
    }
};
module.exports =connection;