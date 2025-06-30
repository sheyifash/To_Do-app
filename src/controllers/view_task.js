const ToDo = require("../model/To_Do_Model")

const viewTask = async(req, res) => {
    try {
        const {_id} = req.params
        if (!_id) {
          return res.status(500).json("Task doesn't exist!")
        }
        const thisTask = await ToDo.findById(_id)
        res.status(200).json(thisTask)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = viewTask