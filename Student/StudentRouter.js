const express = require("express")
const studentController = require("./StudentController")

const studentRouter = express.Router()

studentRouter.post("/insert", studentController.addStudent)
studentRouter.get("/getStudent", studentController.getStudent)

module.exports = studentRouter