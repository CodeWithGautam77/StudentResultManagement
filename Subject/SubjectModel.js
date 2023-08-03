const { Schema, default: mongoose } = require("mongoose");

class SubjectModel {
    constructor(){
        this.schema = new Schema({
            name:{type:String, require:true}
        })
        this.subject = mongoose.model("tbl_subject", this.schema)
    }

    InsertSubject(data){
        return this.subject.create(data)
    }

    user()
    {
        return this.subject.find({})
    }
}

const subjectModel = new SubjectModel()

module.exports = subjectModel

