

const mongoose = require('mongoose')


const EmployeeSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true 
    }, 
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true 
    },
    city: {
        type: String,
        required: false 
    }
}, {
    timestamp: true
}

)

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;