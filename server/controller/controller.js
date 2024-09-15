/*
*       Student controller register
 */

const pendingCollege = require("../model/pending");
const student = require("../model/student")


exports.register = async( req, res)=>{
    try {
        //logic for register student 
        const data = req.body
        if(!data){
            res.status(400).send({message:`content can't be empty`})
            return;
        }
        const student_details = new student(data);
        const response = await student_details.save();
        console.log('register successfully ' +response)
        res.status(200);
        res.redirect('/student/login');
    } catch (error) {
        res.status(500).json({message:' server side error '+error})
    }
}




exports.collegeRegister = async( req, res)=>{
    try {
        //logic for register college 
        const data = req.body
        if(!data){
            res.status(400).send({message:`content can't be empty`})
            return;
        }
        const college_details = new pendingCollege(data);
        const response = await college_details.save();
        console.log('register successfully ' +response)
        res.status(200);
        res.redirect('/college/login');
    } catch (error) {
        res.status(500).json({message:' server side error '+error})
    }
}