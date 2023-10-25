const api = require("../api/api");

exports.registerCourses = async (req,res)=>{
    // console.log(req.body)
    const courses = await api.post(`/api/courses/register`, { ...req.body });
    console.log(courses);
    // res.render("courses",{courses:courses.data});
};