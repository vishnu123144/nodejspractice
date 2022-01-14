var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // this is used to access cookie
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var securedRouter = require('./routes/secured-pages');
var usersRouter = require('./routes/users');
var apiCustomer = require('./routes/api-customer');
const mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var sess = {
  secret: 'key ibm pro#$#$#@#',
  cookie: {},
  proxy: true,
  resave: true,
  saveUninitialized: true
}
app.use(session(sess));

  
var dbName = 'nodejs';
const url = 'mongodb://localhost:27017';
const mongoUri = url + '/'+ dbName;

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true,keepAlive: 1});
mongoose.connection.on('error', () => {
   throw new Error(`unable to connect to database: ${config.db}`);
 });

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter); // if condition 
app.use('/users', usersRouter);

app.use(function(req, res, next) {
	if(typeof(req.session.user) == 'string'){
		console.log("session exist");
		next();
	}else{
		res.redirect("/login");
		console.log("session not exist");
	}
  //console.log('control stops here... wont go further..');
});

app.use('/', securedRouter);
//  /users  + / = /users
//  /users  + /autheticate = /users/authenticate
app.use('/api/customer', apiCustomer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
