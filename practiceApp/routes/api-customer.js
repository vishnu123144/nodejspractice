var express = require('express');
var router = express.Router();

var customerService = require('../service/customerData');

router.get('/', function(req, res, next) {
  res.send(customerService.getCustomers());
});

router.post('/', function(req, res, next) { //add
  let customer = req.body;
  customerService.addCustomer(customer);
  res.send({msg:"customer added successfully", result:'ok'});
});

router.put('/', function(req, res, next) { //add
  res.send(customerService.updateCustomer(customer));
});

router.delete('/', function(req, res, next) { //add
  let customer = req.body;
  res.send(customerService.deleteCustomer(customer));
});

router.get('/:id', function(req, res, next) { //add
  res.send(customerService.getCustomerById(req.params.id));
});

module.exports = router;