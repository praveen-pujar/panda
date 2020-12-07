import React, { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./components/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";
import Routes from "./components/Routes";


// import authService from "../services/auth.service";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import { AppContext } from "./libs/contextLib";


const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);
  
  

export default function App(){
  const history = useHistory();
  // const [isAuthenticated, userHasAuthenticated] = React.useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  const styles = {
    borderRadius : "25px",
    height : "60px",
    width : "60px",
    margin: "5px"
}




// useEffect( () =>{
//   getUser();
// }, [])


// function getUser(){
//   const user = localStorage.getItem('user');

//     if (user) {
//       setCurrentUser({
//         currentUser : user
//       });
// }
// }


// function handleLogout() {
//   // userHasAuthenticated(false);
//   history.push("/signin");
//   setCurrentUser({
//     currentUser : undefined
//   })
  
//   localStorage.removeItem("user");
  
// }

    return (
      <div className="App">

        <div className="header">
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              {/* <!-- Brand/logo --> */}
            
              <Link to="/" >
                <li a className="navbar-brand">
                <img className="img-fluid" src={require("./img/panda_logo.png")} alt="logo" style={styles} />
                 panda
                </li>
                </Link>
              
              
              {/* <!-- Links --> */}
                
            
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarCollapse">

            
                            <div className="navbar-nav ml-auto">
                            {/* {currentUser
                          ?
                          <Link to="/"> 
                          <li style ={{margin:"10px"}} onClick={handleLogout} className="nav-item nav-link">
                                Logout
                            </li>
                            </Link> 
                       
                          : <> */}
                            <Link to="/host"> 
                            <button type="button" style ={{margin:"10px"}} className="btn btn-success">
                                Host Meeting
                                </button>
                                </Link>
                            
                            <Link to="/join">
                              <button type="button" style ={{margin:"10px"}} className="btn btn-danger">
                                Join Meeting
                                </button>
                                </Link>
                            
                            
                            <Link to="/signin">
                              <li style ={{margin:"10px"}} className="nav-item nav-link">
                                  Sign In
                              </li>
                              </Link>
                            
                            <LightTooltip title="It's free!">
                            <Link to="signup"> 
                            <li style ={{margin:"10px"}} className="nav-item nav-link">
                                  Sign Up
                              </li>
                                </Link>
                            </LightTooltip>
            
                         
                              {/* </> */}
                            {/* } */}
                        </div>
                    </div>
                   </nav>
                </div>

                <Routes />
                
        {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        
        </AppContext.Provider> */}
      
      </div>
    );
  
}
