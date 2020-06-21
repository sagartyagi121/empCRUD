const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  team: { type: String, required: true, max: 50 },
  age: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);
