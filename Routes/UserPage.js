const express = require('express');
const router = express.Router();
// // User Randomatic module to create unique meeting ID and passcode
// const randomize = require('randomatic');
// // Requiring AuthSchema for form validation
// const { signinAuthSchema } = require('../helpers/validation_schema');
// // Getting User Model into the file
const User = require('../Models/User.model');
// // Handling Errors
const createError = require('http-errors');
// Handling JWT access token
const { verifyAccessToken } = require('../helpers/jwt_helper');

router.get('/:email',verifyAccessToken, async(req, res, next) => {
  try {
    const emailid = req.params.email;
    // res.send("user page");
    console.log("user Email id : ", emailid);
  
    // console.log("authorization header : ", req.headers['authorization']);
    // // res.send("This is userPage!");
    // if(mongoose.Types.ObjectId.isValid(req.params.id)) {

      const user = await User.findOne({email: emailid});
      if(!user) throw createError.NotFound("User is not registered!");

      // } else {
      //     console.log('Error from id!");
      // }
     
  
      console.log("This is user page, accessible with only authorised access token!");
      res.status(200).send({
          id: user._id,
          email : user.email,
          firstname : user.firstname,
          lastname : user.lastname,
          meetingid : user.meetingid,
          passcode : user.passcode,
          // accessToken: req.headers['authorization']
        });
  } catch (error) {
    console.log('error message from user fetch api : ',error.message );
    
  }
 
    // res.render('/user');
})

module.exports = router;