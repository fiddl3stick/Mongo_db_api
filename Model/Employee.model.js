const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const StudentSchema = new Schema ({
        student_id:{
            type: Number,
            required: true
        },
        name:{
            fname:{
            type: String,
            required: true
        },
        mname:{
            type: String,
        },
        lname:{
            type: String,
            required: true
        }},
        course:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            min: 18,
            max: 69,
            required: true
        },
        date_Created:{
            type: Date,
            default: Date.now
        }
    });

const Students = mongoose.model('student_information', StudentSchema);
module.exports = Students;