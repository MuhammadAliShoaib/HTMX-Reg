const router = require("express").Router();
const ctrl = require("../controller");

router.get("/student/regno",ctrl.StudentCtrl.getStudentByRegno);
router.get("/semester/courses",ctrl.CourseCtrl.getSemesterCourses);
router.post("/course/register",ctrl.RegisterCtrl.registerCourses);

module.exports = router;