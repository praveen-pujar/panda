import React, { Component } from 'react';
import './room.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Helmet} from "react-helmet";
// import './script.js';


class Room extends Component{
    state = {
        audioClicked : false,
        videoClicked : false,
        screenClicked : false,
        chatClicked : false,
        myVideoStream : ''
    }


    


     muteUnmute = () => {
            this.setState({
                audioClicked: !this.state.audioClicked
        })
     
      }



    // playStop = () => {
    //     this.setState({
    //         videoClicked: !this.state.videoClicked
    //     })
    //   }

    shareScreen = () => {
        this.setState({
            screenClicked : !this.state.screenClicked
        })
    }

    chatScreen = () => {
        this.setState({
            chatClicked : !this.state.chatClicked
        })

        // e.target.className
    }

    render(){
        
      
        var audioClicked = this.state.audioClicked
        var videoClicked = this.state.videoClicked
        var screenClicked = this.state.screenClicked
        var chatClicked = this.state.chatClicked
        // var videoGrid = this.state.videoGrid
        // var myVideo = this.state.myVideo
        
  
        
        const videoGrid = document.getElementById("video-grid")
        console.log('video-grid', videoGrid)
        const  myVideo = document.createElement('video')

        myVideo.muted = true;
        let myVideoStream = this.state.myVideoStream
        navigator.mediaDevices.getUserMedia({
            video : true,
            audio : true
        })
        .then(stream => {
            myVideoStream = stream;
            addVideoStream(myVideo, stream);
        })
        
        
        const addVideoStream = ( video , stream) => {
             video.srcObject = stream;
             video.addEventListener('loadedmetadata' , () =>{
                 video.play();
             })
             videoGrid.append(video);
        }



        return(
            <div className="main">
            <div className="main__left">
               <div className="main__videos">
                  <div id="video-grid">
            
                  </div>
               </div>


               {/* Left Buttons  */}
               <div className="main__controls">
                  <div className="main__controls__block">
                     <div onClick={this.muteUnmute} className=" btn btn-dark main__controls__button main__mute_button">
                     {
                         audioClicked ? 
                         <div>
                             <FontAwesomeIcon icon={"microphone" }  color="green"/> 
                             <span> Mute </span>
                         </div>
                         :
                         <div>
                         <FontAwesomeIcon icon={"microphone-slash"} color="red"/>   
                         <span> Unmute </span>
                         </div>              
                    
                    }
                     
                     </div>


                     {/* <div onClick={this.playStop} className="btn btn-dark main__controls__button main__video_button" >
                        
                     {
                         videoClicked ? 
                         <div>
                             <FontAwesomeIcon icon={"video"}  color="green"/> 
                             <span>Stop Video</span>
                         </div>
                         :
                         <div>
                         <FontAwesomeIcon icon={"video-slash"}  color="red"/>   
                         <span> Start Video </span>
                         </div>              
                    
                    }

   
                     </div> */}
                  </div>

                  {/* Middle Buttons */}
                  
                  <div className="main__controls__block">
                    
                  <div onClick={this.shareScreen} className="btn btn-dark main__controls__button " >
                        
                        {
                            screenClicked ? 
                            <div>
                                <FontAwesomeIcon icon={"desktop"}  color="green"/> 
                                <span>Stop Sharing</span>
                            </div>
                            :
                            <div>
                            <FontAwesomeIcon icon={"desktop"}  color="red"/>   
                            <span> Start Sharing </span>
                            </div>              
                       
                       }

                    </div>

                     <div className="main__controls__button">
                     <FontAwesomeIcon icon="user-friends" />
                        {/* <i className="fas fa-user-friends"></i> */}
                        <span>Participants</span>
                     </div>

                     <div onClick={this.chatScreen} className="btn btn-dark main__controls__button " >
                        
                        {
                            chatClicked ? 
                            <div>
                                <FontAwesomeIcon icon={"comment-alt"}  color="green"/> 
                                <span>Chat</span>
                            </div>
                            :
                            <div>
                            <FontAwesomeIcon icon={"comment-slash"}  color="red"/>   
                            <span>Chat</span>
                            </div>              
                       
                       }

                    </div>
                  </div>
                  

                  {/* Right Button */}
                  <div className="main__controls__block">
                     <div className="main__controls__button">
                        <span className="leave_meeting">Leave Meeting</span>
                     </div>
                  </div>
               </div>
            </div>
    
    {
        chatClicked 
        ? 
        <div className="main__right">
        <div className="main__header">
           <h6>Chat</h6>
        </div>
        <div className="main__chat_window">
           <ul className="messages">
              
           </ul>

        </div>
        <div className="main__message_container">
           <input id="chat_message" type="text" placeholder="Type message here..." />
        </div>
     </div> 
     :
     null
     
        
    }
        {/* <Helmet>
            <script src="./script.js" type="text/javascript" />
        </Helmet> */}
         </div>
        );

        
     


    }
    
}

export default Room;