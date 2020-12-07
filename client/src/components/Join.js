import React from "react";
// import { Header } from './Header';
import './host.css';

function Join(){
    return(      
<div>
  <div class="container">
  <form>
    <div class=" container row">
      <h3>Join a Meeting</h3>
        <div class="top ">
        <h6>Join a meeting now.</h6>
        <div class="input-group">
            <input type="text" placeholder="Enter Meeting ID" />
            <input type="text" placeholder="Enter Passcode" />

        </div>
        <div class="input-icon">
        <button type="button"  class="join btn btn-outline-success">Join Room </button>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
);
}

export default Join;