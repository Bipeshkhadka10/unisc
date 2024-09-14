const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    collegeName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const student = mongoose.model('student',studentSchema)
module.exports = student;