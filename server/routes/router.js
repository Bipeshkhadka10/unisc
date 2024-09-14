const express = require('express')
const router = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')
router.get('/',services.homePage)

/*
Student GET/POST  |METHOD
*/

router.post('/student/login',controller.register)

module.exports = router