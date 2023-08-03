const subjectModel = require("./SubjectModel")

class SubjectController{
   async  addSubject(req,res){
        try {
            if(!req.body?.name){
               return res.status(400).send({message:"Missing dependency name"})
            }

            const result = await subjectModel.InsertSubject(req.body) 
            
            if(!result){
                return res.status(500).send({message:"Somthing went wrong"})
            }
            return res.status(200).send({message:"Sucess"})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal server error"})
        }
    }

    async getSubject(req,res){
        try {
            const subjects = await subjectModel.user()
            if(subjects) return res.status(200).send({message:"Sucess",subjects})
            return res.status(400).send({message:"Somthing went wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal server Error"})
        }
    }
}

const subjectController = new SubjectController()

module.exports = subjectController