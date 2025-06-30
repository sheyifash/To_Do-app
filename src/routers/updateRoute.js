const express = require("express")
const updateTask = require("../controllers/update_task")
const router = express.Router()

router.patch("/update-task/:_id", updateTask)

module.exports = router