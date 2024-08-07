const express = require("express");
const mongoose = require("mongoose");
const Employee = require("../models/employee.model.js");
const router = express.Router();

router.get("/", async (req, resp) => {
  try {
    const employee_info = await Employee.find();
    resp.status(200).json(employee_info);
  } catch (e) {
    resp.status(500).json({
      message: e.message,
    });
  }
});

router.post("/", async (req, resp) => {
  try {
    const existing = await Employee.findOne({ name: req.body.name });

    if (existing) {
      return resp.status(500).json({
        msg: "Employee already in the database!",
      });
    }

    const employee = await Employee.create(req.body);
    resp.status(200).json(employee);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
});

router.delete("/name=:name", async (req, resp) => {
  try {
    const names = req.params.name;
    const employed = await Employee.findOneAndDelete({
      name: names,
    });
    if (!employed) {
      return resp.status(500).json({
        message: "Employee not Found!",
      });
    }
  } catch (e) {
    resp.status(500).json({ msg: e.message });
  }
});

module.exports = router;
