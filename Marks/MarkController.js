const markModel = require("./MarkModel");

class MarkController {
    async addMarks(req,res){
        try {
            const {marks,student,subject} = req.body

            if(!marks) return res.status(400).send({message:"Missing Dependency Marks"})
            if(!student) return res.status(400).send({message:"Missing Dependency Student"})
            if(!subject) return res.status(400).send({message:"Missing Dependency Subject"})

            const result = await markModel.InsertMarks(req.body)

            if(!result) return res.status(500).send({message:"Something Went Wrong"})

            return res.status(200).send({message:"Sucess"})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal Server Error"})
        }
    }


    async showResult (req,res){
        try {
            const {id} = req.params

            if(!id) return res.status(400).send({message:"Bad Request"})

            const result = await markModel.GetResult(id)
            console.log(result)
            if(result) res.status(200).send({message:"Sucess", result})
            if(!result) return res.status(500).send({message:"Something Went Wrong"})


        } catch (error) {
            res.status(500).send({message:"Internal Server Error"})
        }
    }
}

const markController = new MarkController()

module.exports = markController