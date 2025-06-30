const mongoose = require("mongoose")
const toDoSchema = new mongoose.Schema({
title:{type:String, required:true},
description:{type:String, default:""},
status:{
    type:String,
    enum:["pending", "processing", "completed"],
    default:"pending"
},
email:{type:String, default:""},
duration:{type:Number, default:0},
deadline:{type:Date},
 priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  }
},{timestamps:true})
const ToDo = new mongoose.model("ToDo", toDoSchema)
module.exports = ToDo