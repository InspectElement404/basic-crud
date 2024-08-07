const Student = require("../models/student.model.js");

const getStudentList = async (req, resp) => {
  try {
    const studentry = await Student.find();
    resp.status(200).json(studentry);
  } catch (error) {
    const Student = require("./models/student.model.js");
    resp.status(500).json({ message: error.message });
  }
};

const addStudent = async (req, resp) => {
  try {
    const student_name = await Student.findOne({
      name: req.body.name,
    });

    if (student_name) {
      return resp.status(500).json({
        msg: "Student already in the database",
      });
    }
    const student_info = await Student.create(req.body);
    resp.status(200).json(student_info);
  } catch (e) {
    resp.status(500).json({
      msg: e.message,
    });
  }
};

const removeStudentbyName = async (req, resp) => {
  try {
    const name_query = req.params.name;
    const remove = await Student.findOneAndDelete({ name: name_query });
    if (!remove) {
      resp.status(500).json({ message: "Student not in the database" });
    } else {
      const student_list = await Student.find();
      resp.status(200).json(student_list);
    }
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};

const getStudentInfo = async (req, resp) => {
  try {
    const student_info = await Student.findOne({
      name: req.params.name,
    });
    if (!student_info) {
      return resp.status(500).json({ message: "Student not in the database!" });
    }
    resp.status(200).json(student_info);
  } catch (e) {
    resp.status(500).json({ message: e.message });
  }
};

const modifyStudentInfo = async (req, resp) => {
  try {
    const student_name = req.params.name;
    const info = await Student.findOneAndUpdate(
      { name: student_name },
      {
        name: req.body.name,
        student_no: req.body.student_no,
      }
    );

    if (!info) {
      return resp.status(500).json({ message: "Student Not Found" });
    }

    const updatedInfo = await Student.find({ name: student_name });
    resp.status(200).json(updatedInfo);
  } catch (e) {
    resp.status(500).json({ message: e.message });
  }
};

module.exports = {
  getStudentList,
  addStudent,
  removeStudentbyName,
  getStudentInfo,
  modifyStudentInfo,
};
