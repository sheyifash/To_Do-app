const ToDo = require("../model/To_Do_Model")

const updateTask = async(req, res) => {
    try {
        const{_id} = req.params
if (!_id) {
    return res.status(400).json("Not found!")
}
        const {status, title, description, deadline, duration, email, priority} = req.body
        const updatedTasks = await ToDo.findByIdAndUpdate(_id, {status, title, description, deadline, duration, email, priority},
            {new:true}
        )
        await updatedTasks.save()
        res.status(200).json({message:"updated successfully",
            updatedTasks
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = updateTask