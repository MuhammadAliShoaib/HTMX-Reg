const router = require("express").Router();
const db = require("../models");

router.get("/students",async (req,res)=>{
    const students= await db.Student.find();
    res.status(200).json(students);
});

router.get("/student/:regno",async (req,res)=>{
    const student= await db.Student.findOne({regno:req.params.regno});
    res.status(200).json(student);
});

router.get("/courses/semesters",async (req,res)=>{
    const result = await db.Course.distinct("semester");
    res.status(200).json(result);
});

router.get("/courses/:semester",async (req,res)=>{
    const result = await db.Course.find({semester:req.params.semester});
    res.status(200).json(result);
});

router.post("/courses/register",async (req,res)=>{
  console.log(req.body);
});


module.exports = router;