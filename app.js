const express = require("express")
const studentRouter = require("./Student/StudentRouter")
const ConnectDb = require("./Connection")
const subjectRouter = require("./Subject/SubjectRouter")
const MartksRouter = require("./Marks/MarksRouter")

const app = express()
app.use(express.json())
ConnectDb()

app.get("/", (req,res)=> {
    return res.status(200).send({message:"Sucess"})
})

app.use("/view",express.static("Views"))

app.use("/student", studentRouter)
app.use("/subject", subjectRouter)
app.use("/marks", MartksRouter)


app.listen(5100,()=> {
    console.log("Server stared")
})