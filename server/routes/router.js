const express = require('express')
const router = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')
const passport = require('../authentication/auth')

router.get('/',services.homePage)

/*
Student GET/POST  |METHOD  ||Routes
*/
router.get('/student',services.studentPage)
router.get('/student/register',services.registerPage)

/*
College GET/POST  |METHOD  ||Routes
*/
router.get('/college/register',services.registerCollegePage)


//initalizing for authenticaiton

router.get('/student/login',services.loginPage);

const AutheMiddleware = passport.authenticate('local',{session:false});
router.post('/student/login',AutheMiddleware,(req,res)=>{
    res.redirect('/')
})

/*
* Student GET/POST  |METHOD  || Controller
*/
router.post('/student/register',controller.register)

/*
* College GET/POST  |METHOD  || Controller
*/
router.get('/college/login',services.loginCollegePage);
router.post('/college/register',controller.collegeRegister)

/*
* Pending GET/POST  |METHOD  || Controller
*/
router.get('/college/pending',services.pendingPage);
//router.post('/college/register',controller.collegePending)
//router.get('/college/register',controller.collegePending)

module.exports = router