const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
      min: 3,
      max: 1000,
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);