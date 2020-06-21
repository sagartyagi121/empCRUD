const Employee = require('../models/employee.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

// create employee
exports.employee_create = function (req, res) {
  console.log(req.body);
  let employee = new Employee(
    {
      id: req.body.id,
      name: req.body.name,
      team: req.body.team,
      age: req.body.age
    }
  );

  employee.save(function (err) {
    if (err) return next(err);
    res.send('Employee Created successfully');
  });
};

// controllers/products.controller.js
exports.employee_details = function (req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if (err) return next(err);
    res.send(employee);
  });
};

exports.employee_update = function (req, res) {
  Employee.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send('Product udpated.');
  });
};

exports.employee_delete = function (req, res) {
  Employee.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
