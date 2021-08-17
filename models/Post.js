const  mongoose  = require("mongoose");
const PostSchema= new mongoose.Schema({
    title:{
        type :String,
        required:true,
        
    },
    desc:{
        type :String,
        required:true,
    
    },
    photo:{
        type :String,
        required:false,
    },
    categories:{
        type :String,
        required:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
{ timestamps: true }
);

module.exports= mongoose.model('Post',PostSchema)