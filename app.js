const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
let index = require('./routs/index')
let teacher = require('./routs/teacher')
let student = require('./routs/student')
let subject = require('./routs/subject')
app.use('/', index)
app.use('/teachers', teacher)
app.use('/students', student)
app.use('/subjects', subject)
app.listen(3000)