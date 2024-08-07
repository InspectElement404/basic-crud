const express = require("express"); // just a fancy way to import express
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const Employee = require("./models/employee.model.js");
const Student = require("./models/student.model.js");
const studentRoute = require("./routes/student.routes.js");
const employeeRoute = require("./routes/employee.routes.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // use true if we have complex data structures i.e., we have
// a nested form. Use false if we only have simple data structure

//routes
app.use("/employee", employeeRoute);
app.use("/students", studentRoute);

app.get("/asim", (req, resp) => {
  resp.send("Hello from Node API using Daeomon");
});

app.post("/api/products", async (req, resp) => {
  try {
    const product = await Product.create(req.body);
    resp.send(`This is what I got! ${product}`);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://mzporazo:qR1TKMfj24uVyfn9@crud.0srqjby.mongodb.net/Node-api?retryWrites=true&w=majority&appName=CRUD"
  )
  .then(() => {
    console.log("Successfully Connected to the database"); // we use mongodb as our database
    app.listen(3000, () => {
      console.log(`Server is running in port ${3000}`); // then we run our server
    });
  })
  .catch(() => {
    console.log("Failure");
  });
