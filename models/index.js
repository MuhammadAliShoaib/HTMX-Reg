const mongoose = require("mongoose");
const {Course} = require("./course");
const {Grade} = require("./grade");
const {Registration} = require("./registration");
const {Student} = require("./student");

(async ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/registrationsheet")
})();

module.exports ={
    Course,
    Grade,
    Registration,
    Student
}