import React , {Component} from 'react';

import { Modal, Button, DatePicker, message  } from 'antd';
import {ShareAltOutlined } from '@ant-design/icons';

// import Modal from 'react-bootstrap/Modal';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import Button from 'react-bootstrap/Button';
// import { DatePicker, Space } from 'antd';
import './host.css';
import axios from "axios";

import 'antd/dist/antd.css';
import authHeader from "../services/auth-header";
var randomize = require('randomatic');

// const { RangePicker } = DatePicker;


 

class Host extends Component{
  constructor(props){
    super(props)
    this.state = {
      message : '',
      loading: false,
      createNowvisible: false,
      createLatervisible : false,
      roomID :  randomize('Aa0',4)
     }
     this.showCreateNowModal = this.showCreateNowModal.bind(this);
     this.createNowhandleOk = this.createNowhandleOk.bind(this);
     this.createNowhandleCancel = this.createNowhandleCancel.bind(this);
    
     this.showcreateLaterModal = this.showcreateLaterModal.bind(this);
     this.createLaterhandleCancel = this.createLaterhandleCancel.bind(this);
     this.createLaterhandleOk = this.createLaterhandleOk.bind(this);
     
     this.handleDateChange = this.handleDateChange.bind(this);
     this.handleDateValue = this.handleDateValue.bind(this);


     this.share = this.share.bind(this);
     this.createRoom = this.createRoom.bind(this);
    //  this.getRoom = this.getRoom.bind(this);
     

  }
  
  
  showCreateNowModal = () => {
    this.setState({
      createNowvisible: true,
    });
  };

  showcreateLaterModal = () => {
    this.setState({
      createLatervisible: true,
    });
    
  };


  createRoom = async (meetingid, passcode, roomID) => {
    try {
        const data = await axios.post('http://localhost:3080/room/' ,
        {
          meetingId : meetingid,
          passcode : passcode,
          roomID :  roomID
        });
        return data;
    } catch (err) {
        console.log("Post Request error : ",err.message);
    }
  }

//   getRoom = async (roomID) => {
//     try {
//         const data = await axios.get('http://localhost:3080/room/', roomID,{headers : authHeader()});
//         return data;    
//     } catch (err) {
//         console.log("Get Request error : ",err.message);
//     }   
// }
  
  createNowhandleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, createNowvisible: false });
          
      // const currentUser  = JSON.parse(localStorage.getItem('user'));
      axios.get('http://localhost:3080/room/' + this.state.roomID, {headers : authHeader()} ) 
    .then(
        response => {
          console.log("this is user get req console.");
          console.log("Response data :", response.data);
         this.props.history.push('/room');
        },
        error => {
          this.setState({
            message:
              (error.response && error.response.data) ||
              error.message ||
              error.toString()
          });
          console.log("error message from  get req :", this.state.message);
        }
      );
       

    }, 3000);
  };

  createNowhandleCancel = () => {
    this.setState({ createNowvisible: false });
  };

  createLaterhandleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, createLatervisible: false });
    }, 3000);
  };

  createLaterhandleCancel = () => {
    this.setState({ createLatervisible: false });
  };


  handleDateChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  handleDateValue(value) {
    console.log('onOk: ', value);
  }


  share = () => {
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      
      message.success({ content: 'Loaded!', key, duration: 2 });
    }, 1000);
  };


  componentDidMount() {
    const currentUser  = JSON.parse(localStorage.getItem('user'));
    console.log("This is data from currentUser variable from host page: ", currentUser.email);
   

    const postReq =  this.createRoom(currentUser.meetingid,currentUser.passcode,this.state.roomID);
    
    console.log("Post Request response :", postReq);
      
  }

render(){
  const { createNowvisible,createLatervisible, loading } = this.state;
  const { RangePicker } = DatePicker;

   
  return(
  
    <div>
  <div class="container">
  <form>
    <div class=" container scheduleRow">
      <h3>Schedule Meeting</h3>
        <div class="top ">
        <h6>Host a meeting right now.</h6>
        <div class="input-group">
        </div>
        <div class="input-icon">
        <button type="button" onClick={this.showCreateNowModal} class="createNow btn btn-outline-success">Create Room </button>
        <Modal
      title="Schedule your meeting room now"
        centered
      visible={createNowvisible}
      onOk={this.createNowhandleOk}
      onCancel={this.createNowhandleCancel}
      footer={[
        <Button key="back" onClick={this.createNowhandleCancel}>
          Cancel
        </Button>,
         <Button key="submit" type="primary" onClick={this.share}>
           <ShareAltOutlined />
         Share
       </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={this.createNowhandleOk}>
          Create
        </Button>,
      ]}
      >
  <p>some contents...</p>
  <p>Room Link :</p>
  <p>Meeting Organizer Details :</p>
  <p>Meeting ID and Passcode</p>
  
  <p>Panda logo and details (company details)</p>
  
  <p>some contents...</p>
  
  <p>some contents...</p>

</Modal>
        </div>
      </div>
    </div>
    <div className="separator">
      Or
    </div>
    <div class="container row">
      <div class="bottom col-half">
        <h4>Schedule for Later</h4>
        <div class="input-group">
          <div class="col-third">
          
          {/* <input type="datetime-local"  placeholder="Select Date and time" id="eventTime" name="eventTime"/> */}
        
            {/* <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
            </Space> */}
          </div>
        </div>
        <div class="input-icon">
         <button type="button"  onClick={this.showcreateLaterModal} class="createLater btn btn-outline-danger">Create Room Later</button> 
        {/* // <Button onClick={info}>Info</Button> */}
        <Modal
      title="Schedule your Room"
        centered
      visible={createLatervisible}
      onOk={this.createLaterhandleOk}
      onCancel={this.createLaterhandleCancel}
      footer={[
        <Button key="back" onClick={this.createNowhandleCancel}>
          Cancel
        </Button>,
        // <a
        // href="mailto:?subject=important!&body=<h1>Hi</h1>"
        // target="_blank" rel="noopener noreferrer"
        // >
        <Button
        
         key="submit" type="primary" >
          <ShareAltOutlined />
         Share
       </Button>
      //  </a>
       ,
        <Button key="submit" type="primary" loading={loading} onClick={this.createNowhandleOk}>
          Create
        </Button>,
      ]}
      >
  <p>some contents...</p>
 <span> <label htmlfor="event">Meeting (date and time):</label>
  
  <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={this.handleDateChange}
      onOk={this.handleDateValue}
    /> </span>
    </Modal>
        </div>
      </div>
    </div>
  </form>



</div>


{/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
  </div>




  )
}

  
  
  // function onChange(value, dateString) {
  //   console.log('Selected Time: ', value);
  //   console.log('Formatted Selected Time: ', dateString);
  // }
  
  // function onOk(value) {
  //   console.log('onOk: ', value);
  // }
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

}
  


export default Host;


// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div>
//         <h4>Schedule your meeting</h4>
//         <p>
         
//         </p>
//         <table style={{align:"center", cellpadding:0, cellspacing:0}}  >
//           <tr>
//             <td>
//             <b>
//             <a href='[ROOMLINK]' 
//             style={{color: "#FFFFFF", fontSize: "20px", backgroundColor: "#83C36D", borderRadius: "4px", border: "8px solid #83C36D"}}> 
//                 Join the meeting    
//                  </a>
//                  </b>
//             </td>
//           </tr>
//         </table>
//         <p style={{margin: '24px 0 8px 0'}}><span class='small'>Meeting link: <a href='[ROOMLINK]'>[ROOMLINK]</a></span></p>
       
//         <table width='100%'>
//   <tr>
//     <td colspan='3' align='center'>
//       <table align="center" cellpadding="0" cellspacing='0'>
//         <tr>
//           <td><b><a href='[ROOMLINK]' >     Join the meeting     </a></b></td>
//         </tr>
//       </table>
//       <p ><span class='small'>Meeting link: <a href='[ROOMLINK]'>[ROOMLINK]</a></span></p>
//       <pin-section>
//         <table>
//           <tr>
//             <td valign='middle'> <img src='[ROOM_PIN]' width='18' height='18'/> </td>
//             <td valign='middle' >
//             MEETING ACCESS CODE: <b >[PIN_ONLY]</b>
//             </td>
//           </tr>
//         </table>
//       </pin-section>
//     </td>
//   </tr>

  
//   </table>
 
// </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <button style={{cursor:"pointer"}} onClick={props.onHide}>Close</button>
//       </Modal.Footer>
//     </Modal>
//   );
// }