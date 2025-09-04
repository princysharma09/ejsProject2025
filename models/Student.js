const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    rollNo : {type : Number, required : true},
    name : {type: String , required : true},
    fatherName : {type: String ,required : true },
    motherName : {type: String },
    course: {type: String , required : true},
    branch : {type: String , required : true},
    yearOfAdmission : {type : String},
    studentImage : {type : String},
    createAt : Date,
    updateAt : Date
})

studentSchema.plugin(timestamps , {index : true});
module.exports = mongoose.model('Student' , studentSchema);