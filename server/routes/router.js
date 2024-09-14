const express = require('express')
const router = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')
router.get('/',services.homePage)

/*
Student GET/POST  |METHOD  ||Routes
*/
router.get('/student',services.studentPage)
router.get('/student/register',services.registerPage)

/*
* Student GET/POST  |METHOD  || Controller
*/
router.post('/student/register',controller.register)

module.exports = router