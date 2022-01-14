var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/authenticate', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  if(req.body.username != undefined && req.body.username!="" 
  	&& req.body.username == req.body.password){
  	//adding username to seesion
  	req.session.user = req.body.username;
  	res.send({result:'success', msg:"login successful" });
  }else{
  	res.send({result:'fail', msg:"Incorrect uername or password." });
  }
});

module.exports = router;
