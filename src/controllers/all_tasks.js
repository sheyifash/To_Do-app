const express = require("express")
const ToDo = require("../model/To_Do_Model")
const allTask = async(req, res) => {
    try {
    const viewTasks = await ToDo.find()
if ((!viewTasks)) {
    return res.status(500).json("No task found!")
}
res.status(201).json(viewTasks)
  
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = allTask