var mongoose = require('mongoose');
const Schema = mongoose.Schema

// using Bcrypt to hash the password into DB
const bcrypt = require('bcryptjs');

const MeetingSchema = new Schema({
    // users : {
    //     type : Object,
    //     firstname : {
    //         type : String
    //     },
    //     lastname : {
    //         type : String,
    //     },
    //     email : {
    //         type : String,
    //         lowercase : true,
    //         unique : true
    //     },
    //     profileimage : {
    //         type : String
    //     },
    // },

   meetingid : {
       type : Number
   },
   passcode : {
       type : Number
   },
   roomid : {
       type : String
   }

});


const Meeting = module.exports = mongoose.model('meeting', MeetingSchema );
