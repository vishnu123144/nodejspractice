var express = require('express');
var model = require('../service/customer');
var mongoCustomer = require('../service/customer-mongo');
// Type Script
var router = express.Router();

// end point is  /api/customer
// method get ==>  get records
router.get('/', function(req, res, next) {
  var callback = function (result) {
    res.send(result);
  }
  mongoCustomer.getCustomer(callback);
});

// method post ==>  add record
router.post('/', function(req, res, next) {
    //req.body.id = parseInt(Math.random() * 100000);
    var callback = function(){
      res.send({result:'success', msg:"customer added successfully"});
    }
    mongoCustomer.addCustomer(req.body).then(callback);
  });

// method delete ==>  delete record
router.delete('/', function(req, res, next) {
    var callback = function(){
       res.send({result:'success', msg:"customer deleted successfully"});
    }
    mongoCustomer.deleteCustomer(req.body.id).then(callback);
  });

// method put ==>  update record
router.put('/', function(req, res, next) {
      //req.body.id = parseInt(Math.random() * 100000);
    var callback = function(){
      res.send({result:'success', msg:"customer updated successfully"});
    }
    mongoCustomer.updateCustomer(req.body).then(callback);
  });
  
module.exports = router;
