const express = require("express")
const subjectController = require("./SubjectController")

const subjectRouter = express.Router()

subjectRouter.post("/insert", subjectController.addSubject)
subjectRouter.get("/getSubject", subjectController.getSubject)

module.exports = subjectRouter