const express = require('express')
const router = require('./server/routes/router')
const path = require('path')
const db = require('./server/database/database')
const app = express()


const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(express.urlencoded({extended:false}))
require('dotenv').config();

const ejs = require('ejs')
app.set('view engine','ejs')


app.use('/',router)



app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/image',express.static(path.resolve(__dirname,'/assets/image')))
app.use('/js',express.static(path.resolve(__dirname,'/assets/js')))

const PORT = process.env.PORT||8080
app.listen(PORT, ()=>{
    console.log('server is listen at PORT ' +PORT )
})