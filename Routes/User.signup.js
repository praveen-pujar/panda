const express = require('express');
const router = express.Router();
// User Randomatic module to create unique meeting ID and passcode
const randomize = require('randomatic');
// Requiring AuthSchema for form validation
const { signupAuthSchema } = require('../helpers/validation_schema');
// Getting User Model into the file
const User = require('../Models/User.model');
// Handling Errors
const createError = require('http-errors');
// Handling JWT access token
// const { signAccessToken } = require('../helpers/jwt_helper');

// router.get('/', (req, res, next) => {
//     res.send('This is user signup GET method route');
// })


router.post('/', async(req, res, next) => {
    try{
      console.log("This is post method try block");
      console.log("=-=-==-=-Signup post method data=-=-=-=--=-=-", req.body);


  // Form Validator
  const result = await signupAuthSchema.validateAsync(req.body);
  console.log("The authenticated result : ",result);

   // checking if the user is already registered
   const doesExist = await User.findOne({ email : result.email})
   if(doesExist)
      throw createError.Conflict(`${result.email} is already been registered!`);

    // Creating new user
      const newUser = new User({
        firstname   : req.body.firstname,
        lastname    : req.body.lastname,
        email       : req.body.email,
        password    : req.body.password,
        meetingid   : randomize('0', 12),
        passcode    : randomize('0',8)
      })

  // const savedUser = await User.createUser(newUser, function(err, user){
  //     if(err) 
  //       throw err;
  // const accessToken = await signAccessToken(user.id);
  // console.log("Saved Data :", user);
  // res.send({accessToken});
  // });
      

  const user = new User(newUser);
  const savedUser = await user.save();
  console.log("saved User details : ", savedUser);

  res.status({message : "user was registered successfully!"});
  // const accessToken = await signAccessToken(savedUser.id);
  
  // res.send({accessToken});
// Redirecting the page to signin with flash message
// req.flash("success", "Welcome to Panda Club" + savedUser.username);
// res.redirect("/signin");



  
}
catch(error){
  console.log(error.message);

  // if(error.isJoi === true)
  //   error.status = 422;
  // next(error);
  
  // return res.render("/signup");
}
})

module.exports = router;