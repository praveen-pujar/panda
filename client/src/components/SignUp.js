import React,{Component} from 'react';
import axios from "axios";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// import { createUser } from '../services/UserService';

import {Link} from "react-router-dom"; 
import './signup.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
       panda
      {/* </Link>*/}
      {' '} 
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname : "",
      lastname : "",
      email : "",
      password : "",
      password2 : ""
    }

    this.validateform = this.validateform.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  validateform(){
    // console.log("--------form-------");
    const firstname   = this.state.firstname;
    const lastname    = this.state.lastname;
    const email       = this.state.email;
    const password    = this.state.password;
    const password2   = this.state.password2;

// Constructing form data
  var signupFormData = {
    firstname   : firstname,
    lastname    : lastname,
    email       : email,
    password    : password,
    password2   : password2

  }

console.log("-------signupFormData--------",signupFormData);

  // Creating POST request
    axios.post('http://localhost:3080/signup', signupFormData)
    .then(function (response) {
      console.log("response:", response);
      alert("Signup Successful");
      // this.props.history.push('/login');
    })
    .catch(function (error) {
      console.log(error);
    });

    // End of validation form function 
  }


// Handlechange function
  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name] : value});
  }


render(){
  return (
    <div>
      <div class="register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src={require("../img/panda_logo.png")} alt="logo" class="rounded-circle" width="300px" />
                        <h3>Welcome </h3>
                        <p>You are 30 seconds away from joining our cool club!</p>
                        
                        {/* <span>
                          Already have an account?
                        <input type="submit" name="" value="Login"/>
                        </span> */}
                        
                        
                       <br/>
                    </div>
                    <div class="col-md-9 register-right">
              
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Create Account</h3>
                                     <div class="row register-form">
                                    <div class="col-md-9" >
                                    {/* <h4 class="card-title mt-3 text-center">Create Account</h4> */}
                                        <p class="text-center">Get started with your free account</p>
                                        <div class="col">
                                          {/* <a href="#" class="fb btn">
                                            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                                           </a>
                                     
                                          <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                                            </i> Login with Google+
                                          </a> */}
{/* 
                                          <a href="#" class="twitter btn">
                                            <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                                          </a> */}
                                        </div>
                                        {/* <p class="divider-text">
                                            <span class="bg-light">OR</span>
                                        </p> */}

                                        {/* <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Password *" value="" />
                                        </div> */}

<Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextField
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstname"
                autoFocus
                value={this.state.firstname}
                onChange={(e) => this.handleChange(e)} 
              /> 
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastame"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                value={this.state.lastname}
                onChange={(e) => this.handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                value={this.state.password2}
                onChange={(e) => this.handleChange(e)} 
              />
            </Grid>

          </Grid>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            // onClick= {createUser}
          >
            
         */}
          <Button type="submit" color="primary" class="btnRegister"  onClick={this.validateform}>
          Sign Up
          </Button> 
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

          <Box mt={5}>
        <Copyright />
      </Box>
                                     
                                    

                                      </div>

                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>

            </div>
      


      {/* End tag */}
    </div>
    
  )
}
}

export default withStyles(useStyles)(SignUp)