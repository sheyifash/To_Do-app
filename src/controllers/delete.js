const ToDo = require("../model/To_Do_Model")

const deleteTask = async(req, res) => {
    try {
        const{_id} =req.params
        if (!_id) {
           return res.status(400).json("Not found!") 
        }
        const deletedTask = await ToDo.findByIdAndDelete(_id)
        if (!deletedTask) {
            return res.status(400).json("Task does not exist!")
        }
        res.status(200).json("success!")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = deleteTask