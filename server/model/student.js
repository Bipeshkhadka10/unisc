const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

//we should be using arrow function where this is used which may lead to unexpected behaviours
studentSchema.pre('save',async function(next){
    const studentDetail = this;

    //checks either password is modified or not
    if(!studentDetail.isModified('password')) return next();

    try {
        
        //Generating a salt
        const salt =await bcrypt.genSalt(10);
        //hashing password
        const hashedPassword = await bcrypt.hash(studentDetail.password,salt);

        //storing hashed password in post request to db
        studentDetail.password = hashedPassword;
        return next();


    } catch (error) {
        return next(error);
    }

})


// compares the login details with the database for auth
// we can't use arrow function in (this) as it dosen't point to current document or json data
studentSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}


const student = mongoose.model('student',studentSchema)
module.exports = student;