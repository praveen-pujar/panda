const { string } = require('@hapi/joi');
var mongoose = require('mongoose');
const Schema = mongoose.Schema

// using Bcrypt to hash the password into DB
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
   profileimage : {
       type : String
   },
   meetingid : {
       type : Number
   },
   passcode : {
       type : Number
   },
   mobile : {
       type : Number
   },
   address : {
       type : String
   },
   accountCreatedAt : {
       type : Date,
       default : Date.now()
   }
});

UserSchema.pre('save', async function(next) {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }
    catch(error){
        console.log('This is the password hash console :', error.message);
    }
})


UserSchema.methods.isValidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error
    }
}


const User = module.exports = mongoose.model('user', UserSchema );


      // Working code below
// module.exports.createUser = function(newUser, callback){

//     // Bcryting the password
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//         newUser.password = hash;
//         newUser.save(callback);
//         });
//     }); 
// }