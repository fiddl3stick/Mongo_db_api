const express = require('express');
const router = express.Router();

const Students = require('../Model/Employee.model');

//Post Student
router.post('/', async (req, res, next) => {
    try {
        const student = new Students(req.body);
        const result = await student.save();
        res.send(result);
    } catch (error) {
        res.send(err.message);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const result = await Students.find({}, {__v:0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Students.findById(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatebody = req.body;
        const result = await Students.findByIdAndUpdate(id, updatebody)
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Students.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;