const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const registrationSchema = new Schema({
        gradeid: Number,
        start: Number,
        end: Number,
        grade: String,
        gpa: Number
})

exports.Registration = model('Registration', registrationSchema);