const { default: mongoose } = require("mongoose");

class StudentModel{
    constructor(){
        this.schema = new mongoose.Schema({
            name:{type:String, require:true},
            std:{type:Number,require:true}
        })
        this.student = mongoose.model("tbl_students",this.schema)
    }

    creatStudent(data){
        return this.student.create(data)
    }

    user()
    {return this.student.find({})}
}


const studentModel = new StudentModel()
module.exports = studentModel