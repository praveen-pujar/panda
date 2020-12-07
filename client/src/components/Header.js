import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


import { Link } from "react-router-dom";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);
  
  

export const Header = () => {
    const styles = {
        borderRadius : "25px",
        height : "60px",
        width : "60px"
    }
    return(
        <div className="header">
            
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  {/* <!-- Brand/logo --> */}

  <Link to="/" >
    <li a className="navbar-brand">
    <img className="img-fluid" src={require("../img/panda_logo.png")} alt="logo" style={styles} /> panda
    </li>
    </Link>
  
  
  {/* <!-- Links --> */}
    

  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
           
            <div className="navbar-nav">
            <Link to="/"> 
            <li className="nav-item nav-link active"> Home</li>
            </Link>
           
            </div>

                <div className="navbar-nav ml-auto">
               
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

                <Link to="/"> 
                <li style ={{margin:"10px"}} className="nav-item nav-link">
                      Logout
                  </li>
                  </Link>
     

            </div>
          
        </div>



</nav>

        </div>
    )
}