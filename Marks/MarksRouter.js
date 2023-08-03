const express = require("express")
const markController = require("./MarkController")

const MartksRouter = express.Router()

MartksRouter.post("/", markController.addMarks)
MartksRouter.get("/:id", markController.showResult)

module.exports = MartksRouter