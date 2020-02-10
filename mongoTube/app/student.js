const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const StudentScehma = new Schema({
    name: String
});

const Student = mongoose.model('student', StudentScehma);

//export

module.exports = Student;
