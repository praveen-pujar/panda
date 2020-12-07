const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3080;
const app = express();
const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const {check, validationResult} = require('express-validator');
// const multer = require('multer');
// var upload = multer({dest: './uploads'});
const flash = require('connect-flash');
// const mongo = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const createError = require('http-errors');
const morgan = require('morgan');


// Handle CORS
app.use(cors());

// use morgan logger
app.use(morgan('dev'));

// Handle Sessions
app.use(session({
    secret:'secret',
    saveUninitialized : true,
    resave : true
}));

// Handle Passport 
// app.use(passport.initialize());
// app.use(passport.session());


// Handle Connect flash
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// Connecting to mongoDB Atlas
mongoose.connect('mongodb+srv://praveen:praveen1@cluster0.pjlvs.mongodb.net/panda?retryWrites=true&w=majority',
{
  useNewUrlParser : true,
  useUnifiedTopology : true
}
)
.then( () => {
  console.log("MongoDB connected.....");
});

// Error Handler
app.use(async (req, res, next) => {
  next(createError.error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

// Handling HTTP requests
app.get('/', (req, res, next) => {
  // res.send("Hello from express, Its working!");
  res.render('')
})

const UserSignup = require('./Routes/User.signup');
app.use('/signup', UserSignup);

const UserSignIn = require('./Routes/User.signin');
app.use('/signin', UserSignIn);

const UserPage = require('./Routes/UserPage');
app.use('/user', UserPage);

const Room = require('./Routes/Room');
app.use('/room', Room);



// app.use(express.static("../client/build"));
// Production ready code
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static("../client/build"));
  
  
//   app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, "client","build","index.html"));
//   });
// }




app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});