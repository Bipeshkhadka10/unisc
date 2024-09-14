const mongoose = require('mongoose')

const pendingSchema = new mongoose.Schema({
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
    },
    action:{
        type:String
    }

})

const pendingCollege = mongoose.model('pendingCollege',pendingSchema)
module.exports = pendingCollege;