const api = require("../api/api");

exports.getStudentByRegno = async (req,res)=>{
    const studentRegno = req.query.regno;
    const student = await api.get(`/api/student/${studentRegno}`);
    const semesters = await api.get("/api/courses/semesters");
    res.render("student",{student:student.data,semesters:semesters.data})
};