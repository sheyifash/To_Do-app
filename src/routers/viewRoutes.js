const express = require("express")
const allTask = require("../controllers/all_tasks")
const viewTask = require("../controllers/view_task")
const pendingTask = require("../controllers/pending")
const completedTask = require("../controllers/completed")
const processingTask = require("../controllers/processing")
const router = express.Router()
router.get("/all-tasks", allTask)
router.get("/my-task/:_id", viewTask)
router.get("/pending", pendingTask)
router.get("/completed", completedTask)
router.get("/processing", processingTask)

module.exports = router
