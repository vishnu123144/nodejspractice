var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', (req, res, next)  => {
  //res.render('index', { title: 'Customer App', company:"IBM"});
  res.redirect("/login");
});

router.get('/login', (req, res, next) => {
  delete(req.session.user);
  //res.send(""); //data
  //res.send({result:'success', msg:""}); //data
  res.render('login', { title: 'Login'});
});


module.exports = router;
