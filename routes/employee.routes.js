const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/employee.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', employee_controller.test);

// create
router.post('/create', employee_controller.employee_create);

// read
router.get('/:id', employee_controller.employee_details);

// update
router.put('/:id/update', employee_controller.employee_update);

// delete
router.delete('/:id/delete', employee_controller.employee_delete);

module.exports = router;
