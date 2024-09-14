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

//initalizing for authenticaiton

router.get('/student/login',services.loginPage)
router.post('/student/login',passport.authenticate('local',{session:false}),(req,res)=>{
    res.redirect('/')
})

/*
* Student GET/POST  |METHOD  || Controller
*/
router.post('/student/register',controller.register)

module.exports = router