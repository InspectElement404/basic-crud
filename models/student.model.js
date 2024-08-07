const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide a name!"],
    },
    student_no: {
      type: String,
      requried: [true, "Provide a valid student number"],
    },
  },
  {
    timpestamps: true,
  }
);

const Student = mongoose.model("Students", StudentSchema);

module.exports = Student;
