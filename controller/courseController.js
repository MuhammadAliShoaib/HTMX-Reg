const api = require("../api/api");

exports.getSemesterCourses = async (req,res)=>{
    const courses = await api.get(`/api/courses/${req.query.semester}`);
    res.render("courses",{courses:courses.data});
};