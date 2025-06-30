const express = require("express");
const newTask = require("../controllers/create_task");
const router = express.Router();

router.post("/new-task", newTask);

module.exports = router;