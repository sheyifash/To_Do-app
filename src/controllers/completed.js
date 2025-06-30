const ToDo = require("../model/To_Do_Model")

const completedTask = async(req, res)=>{
    try {
      
      const task = await ToDo.find({status:"completed"})
      if (!task) {
        return res.status(400).json("No completed tasks!")
      }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = completedTask