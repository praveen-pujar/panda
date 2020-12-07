import React,{Component} from 'react';
// React Notification
import { NotificationManager } from 'react-notifications';

// import axios from 'axios';
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


import {Link} from 'react-router-dom';

import { useAppContext } from "../libs/contextLib";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
        panda
      {/* </Link> */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = ((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const signinValidationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email')
//       .required('Please Enter Email Id'),
//     password: Yup.string()
//       .required('Please Enter password')
//   });

  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

class Login extends Component {
  static contextType = useAppContext
  constructor(props){
    super(props);
    this.state = {
      email : "",
      password : "",
      loading: false,
      message: ""
        }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // const {isAuthenticated, userHasAuthenticated} = this.context;

    // this.signinValidationSchema = this.signinValidationSchema.bind(this);
  }


  handleLogin(e){
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });
    
    this.form.validateAll();

    console.log("--------Signin form-------");
    // const email       = this.state.email;
    // const password    = this.state.password;
// Constructing form data
  var signinFormData = {
    email       : this.state.email,
    password    : this.state.password
  }

console.log("-------signinFormData--------",signinFormData);

    if (this.checkBtn.context._errors.length === 0) {

      AuthService.login(this.state.email, this.state.password)
      .then(
          (response) => {
            console.log("response:", response);
       
          const data = localStorage.getItem('item');
          this.props.history.push("/user");
        
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
   
            this.setState({
              loading: false,
              message: resMessage

            });
          
         
            NotificationManager.error('Error while Logging In!', 'Error!');
    
       
          }
        );
      } else {
        this.setState({
          loading: false
        });
      }
    
  }


// Handlechange function
  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name] : value});
  }

render() {
  const { classes } = this.props;
      // userHasAuthenticated : useAppContext()
    
  return (
    <Grid container component="main"  className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={classes.Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

            
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
      
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              validations={[required]}
            />
       
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)} 
              validations={[required]}
            />
   
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={this.validateform}
              disabled={this.state.loading}
            >
              {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
              <span>Sign In</span>
            </Button>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
    
          </Form>
        </div>
      </Grid>
    </Grid>
  );
}
}

export default withStyles(useStyles)(Login)