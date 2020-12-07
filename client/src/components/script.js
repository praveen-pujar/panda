function loadCall() {
    const videoGrid = document.getElementById('video-grid');
    console.log('video-grid :', videoGrid);
    const myVideo = document.createElement('video');
    
    myVideo.muted = true;
    
    myVideoStream
}

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


const loadMyScript = () => window.addEventListener('load', () => loadCall());

export default loadMyScript;