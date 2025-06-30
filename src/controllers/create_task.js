const express = require("express")
const ToDo = require("../model/To_Do_Model")
const newTask = async(req, res) => {
    try {
        console.log("Request Body:", req.body)
const {title, description, status, duration, email, deadline, priority} = req.body
const existingTask = await ToDo.findOne({title})
if (existingTask) {
    return res.status(400).json( "Existing task title!")
}
const task = new ToDo({
    title,
    description,
    status, 
    duration,
    email,
    deadline,
    priority
})
await task.save()
res.status(200).json({message:"Task created successfully!",
task
})
    } catch (error) {
        console.log(error.message)
      res.status(500).json({error:error.message})  
    }
}

module.exports = newTask