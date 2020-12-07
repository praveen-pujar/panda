import React from 'react';
import { useAppContext } from "../libs/contextLib";
import axios from "axios";
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';


import {Link} from 'react-router-dom';

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

const useStyles = makeStyles((theme) => ({
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

const signinValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter Email Id'),
    password: Yup.string()
      .required('Please Enter password')
  });



export default function UserSignIn()  {
  const classes = useStyles();
  const { userHasAuthenticated } = useAppContext();
  // constructor(props){
  //   super(props);
    const [state, setState] = React.useState({
      email : "",
      password : "",
      loading: false,
      message: ""
    }) 

  //   this.validateform = this.validateform.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   // this.signinValidationSchema = this.signinValidationSchema.bind(this);
  // }


async function validateform(e){
  e.preventDefault();
    // console.log("--------form-------");
    // const email       = this.state.email;
    // const password    = this.state.password;
var flag;

try{
  await signinValidationSchema.isValid({
    email : state.email,
    password : state.password
  })
  userHasAuthenticated(true);

}
catch(err){
  console.log('error message in submitting signin Form :', err.message);
}
    

    // .then( function (valid){
    //   console.log('Form is valid :', valid);
    //   if(valid){
    //     flag = valid;
    //     // this.props.history.push('/user')
    //   }
    // else{
    //   flag = valid;
    //   alert('The form can not be empty!')
    // }
 
    // })

 

 // Constructing form data
 var signinFormData = {
  email       : state.email,
  password    : state.password
}
 console.log("-------signinFormData--------",signinFormData);
// Creating POST request
 axios.post('http://localhost:3080/signin', signinFormData)
 .then(function (response) {
   console.log("response:", response);
   console.log("response access Token : ", response.data.accessToken);
   alert("logged in");
 })
 .catch(function (error) {
   console.log(error);
 });


    // End of validation form function 
  }


// Handlechange function
function  handleChange(event){
  const value = event.target.value;
  setState({
    ...state,
    [event.target.name]: value
  });
  }

// render() {
  // const { classes } = this.props;

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
          {/* <Form > */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handleChange} 
            />
            {/* <ErrorMessage
              name="email"
              component="div"
            /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handleChange} 
            />
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validateform}
            >
              Sign In
            </Button>
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
          {/* </Form>
           )}
          </Formik> */}
        </div>
      </Grid>
    </Grid>
  );
// }
}

// export default withStyles(useStyles)(SignIn)
