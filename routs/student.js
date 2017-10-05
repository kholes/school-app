const express = require('express')
const router = express.Router()
const model = require('../models')
router.get('/', (req,res) => {
	model.Student.findAll().then(students => {
		res.render('student', {data:students})
	})
})
router.get('/add', (req,res) => {
	res.render('student_add', {msg:''})
})
router.post('/add', (req,res) => {
	model.Student.create(req.body).then(add => {
		res.redirect('/students')
	}).catch(err => {
		model.Student.findAll().then(students => {
			res.render('student_add', {data:students,msg:err.errors[0].message})
		})
	})
})
router.post('/edit/:id', (req,res) => {
	model.Student.update(req.body,{where:{'id':req.params.id}}).then(update => {
		res.redirect('/students')
	}).catch(err => {
	})
})
router.get('/delete/:id', (req,res) => {
	model.Student.destroy({where:{'id':req.params.id}}).then(student => {
		res.redirect('/students')
	})
})

module.exports = router