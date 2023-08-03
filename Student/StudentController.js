const studentModel = require("./StudentModel")

class StudentController{
   async addStudent(req,res){
        try {
            let {name,std} = req.body
            if(!name) return res.status(400).send({message:"Missing dependncy name"})
            if(!std) return res.status(400).send({message:"Missing dependncy std"})
            const result = await studentModel.creatStudent(req.body)
            if(result){
                return res.status(200).send({message:"Sucess"})
            }
            return res.status(500).send({message:"Somthing went wrong"})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal server error"})
        }
    }

    async getStudent(req,res){
        try {
            const student = await studentModel.user()
            if(student) return res.status(200).send({message:"Sucess" , student})
            return res.status(500).send({message:"Something went wrong"})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal server Error"})
            
        }
    }
}

const studentController = new StudentController()

module.exports = studentController