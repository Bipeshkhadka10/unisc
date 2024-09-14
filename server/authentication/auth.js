const passport = require('passport');
const student = require('../model/student');
const LocalStratergy = require('passport-local').Strategy;

/*
* Authentication login Students
*/

passport.use(new LocalStratergy(async(username,password,done)=>{
    // authentication logic
    try {
        console.log('login credentials : ',username,password);
        const user = await student.findOne({username:username})
        if(!user)
            {
                return done(null,false,{message:'invalid username'})
            }
            const ispassword = (user.password === password ? true:false);
            console.log(ispassword)
            if(ispassword)
            {
                return done(null,user)
            }
            else{
                return done(null,false,{message:'invalid password'})
            }
        
    } catch (error) {
        done(error);
    }
}))



module.exports = passport;
