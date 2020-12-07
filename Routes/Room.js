const express = require('express');
const router = express.Router();
// User Randomatic module to create unique meeting ID and passcode
// const randomize = require('randomatic');
// Requiring AuthSchema for form validation
// const { signinAuthSchema } = require('../helpers/validation_schema');
// Getting User Model into the file
const Meeting = require('../Models/Meeting.model');
// Handling Errors
const createError = require('http-errors');
// Handling JWT access token
const { verifyAccessToken } = require('../helpers/jwt_helper');

// router.get('/', (req, res, next) => {
//     res.send('This is user signup GET method route');
// })

router.post('/', async(req, res, next) => {
    try {
     console.log('this is Room Route post try block console...');
     // console.log("Sign in form data : ", req.body);
     //  Form Validator
     // const result = await signinAuthSchema.validateAsync(req.body);
     console.log("Post request data : ",req.body);
     
      // Creating new user
      const newMeeting = new Meeting({
     
        meetingid   : req.body.meetingId,
        passcode    : req.body.passcode,
        roomid      : req.body.roomID     
    })

    const meeting = new Meeting(newMeeting);
    const savedmeeting = await meeting.save();
    console.log("saved meeting details : ", savedmeeting);
    res.status(200).send({
      message : "Meeting is set successfully!"
    })


 
    //  res.status(200).send({
    //     message : "Meeting is set successfully!"
    // //    id: user._id,
    // //    email : user.email,
    // //    accessToken: accessToken
    //  });
     

 
    } catch (error) {
       
       // next(error)
       console.log("post request error", error.message)
        
    }
 
 })


router.get('/:id',verifyAccessToken, async(req, res, next) => {
   try {
    console.log('this is Room Route  get try block console...');
    const ID = req.params.id;
    
    console.log("Room id : ", ID);
    // res.send("Room page");
    const meeting = await Meeting.findOne({roomid: ID});
    if(!meeting) throw createError.NotFound("Meeting Room not found!");

    res.send({
      message : "Room is set successfully!"
    })


    // res.status(200).send({
    //   id: user._id,
    //   email : user.email,
    //   accessToken: accessToken
    // });
   

   } catch (error) {
    //   if(error.isJoi === true) 
    //     return next(createError.BadRequest("Invalid Username / Password!"));
      // next(error)
      console.log(error.message)
       
   }

})

module.exports = router;