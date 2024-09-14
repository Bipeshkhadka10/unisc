const mongoose = require('mongoose')

const college_detail_Schema = new mongoose.Schema({
    collegeName:{
        type:String,
        required:true
    },
    collegeAddress:{
        type:String,
        required:true
    },
    collegeEmail:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const college_detail = mongoose.model('college_detail',college_detail_Schema)
module.exports = college_detail;