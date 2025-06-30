const ToDo = require("../model/To_Do_Model")

const processingTask = async(req, res)=>{
    try {
      
      const task = await ToDo.find({status:"processing"})
      if (!task) {
        return res.status(400).json("No processing tasks!")
      }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = processingTask