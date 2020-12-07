const Joi  = require('@hapi/joi');


const signupAuthSchema = Joi.object({
    firstname : Joi.string().min(3).required().error(new Error('First Name is required & can be of 3 characters!')),
    lastname : Joi.string().min(3).required().error(new Error('Last Name is required & can be of 3 characters!')),
    email : Joi.string().email().lowercase().required().error(new Error('Email is required!')),
    password : Joi.string().required().error(new Error('Password is required!')),
    password2 : Joi.any().valid(Joi.ref('password')).required().error(new Error('Password should match!'))
})

const signinAuthSchema = Joi.object({
    email : Joi.string().email().lowercase().required().error(new Error('Email is required!')),
    password : Joi.string().required().error(new Error('Password is required!'))
})


module.exports = { 
    signupAuthSchema,
    signinAuthSchema
}


// password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().error(new Error('Password is required!')),
    