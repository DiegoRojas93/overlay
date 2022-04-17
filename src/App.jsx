import React from 'react';
import VideoRecorder from 'react-video-recorder';
import Actions from './utils/Actions';

export const App = () => {
  return (
    <div className="container">
      <VideoRecorder
        // wrapperClassName = 'overlay'
        // videoClassName = 'overlay'
        // cameraViewClassName = 'overlay'
        showReplayControls = {true}


        renderActions={(props) =><Actions {...props}/>}
        onRecordingComplete={(videoBlob) => {
          // Do something with the video...
          console.log('videoBlob', videoBlob)
        }}
      />
    </div>
  )
}



// import React from 'react';


// import { ReactMediaRecorder } from "react-media-recorder";

// const mediaRecorderOptions = {
//   mimeType: "video/webm;codecs=h264"
// };

// function renderVideo({ status, startRecording, stopRecording, mediaBlob }) {
//   return (
//     <div>
//       <p>{status}</p>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <video src={mediaBlob} controls />
//     </div>
//   );
// }

// export const App = () => {
//   return (
//     <ReactMediaRecorder
//       video
//       mediaRecorderOptions={mediaRecorderOptions}
//       render={renderVideo}
//     />
//   );
// }