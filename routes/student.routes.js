const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Student = require("../models/student.model.js");
const {
  getStudentList,
  addStudent,
  removeStudentbyName,
  getStudentInfo,
  modifyStudentInfo,
} = require("../controller/student.controller.js");

router.get("/", getStudentList);
router.post("/", addStudent);
router.delete("/name=:name", removeStudentbyName);
router.put("/name=:name", modifyStudentInfo);
router.get("/name=:name", getStudentInfo);

module.exports = router;
