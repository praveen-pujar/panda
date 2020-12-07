const express = require('express');
const router = express.Router();
// User Randomatic module to create unique meeting ID and passcode
const randomize = require('randomatic');
// Requiring AuthSchema for form validation
const { signinAuthSchema } = require('../helpers/validation_schema');
// Getting User Model into the file
const User = require('../Models/User.model');
// Handling Errors
const createError = require('http-errors');
// Handling JWT access token
const { signAccessToken } = require('../helpers/jwt_helper');

// router.get('/', (req, res, next) => {
//     res.send('This is user signup GET method route');
// })


router.post('/', async(req, res, next) => {
   try {
    console.log('this is signin try block console...');
    // console.log("Sign in form data : ", req.body);
    //  Form Validator
    const result = await signinAuthSchema.validateAsync(req.body);
    console.log("Authentication is successful and data is : ",result);
    
    // check if user is registered
    const user = await User.findOne({email : result.email});
    if(!user) throw createError.NotFound("User is not registered!");

    const isMatch = await user.isValidPassword(result.password)
    if(!isMatch) 
      throw createError.Unauthorized('Username/password not valid')

    // if !isMatch is false i.e; user is valid then, we create access token
    const accessToken = await signAccessToken(user.id);

    res.status(200).send({
      id: user._id,
      email : user.email,
      meetingid : user.meetingid,
      passcode : user.passcode,
      accessToken: accessToken
    });

   } catch (error) {
      if(error.isJoi === true) 
        return next(createError.BadRequest("Invalid Username / Password!"));
      // next(error)
      console.log(error.message)

   }

})

module.exports = router;