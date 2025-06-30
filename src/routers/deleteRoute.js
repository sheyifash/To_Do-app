const express = require("express")
const deleteTask = require("../controllers/delete")
const router = express.Router()

router.delete("/delete-task/:_id", deleteTask)

module.exports = router