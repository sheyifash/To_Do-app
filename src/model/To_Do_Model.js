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
deadline:{type:Date}
},{timestamps:true})
const ToDo = new mongoose.model("ToDo", toDoSchema)
module.exports = ToDo