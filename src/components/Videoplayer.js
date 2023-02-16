import React from "react";
// import Timer from "./Timer";
import video from "../assests/test.mp4";
// import { ReactVideo } from "reactjs-media";



const VideoApp = () => {
    const start = () =>{
        alert("Start")
    }
    const stop =()=>{
        alert("Stop")
    }

    return (

        <div>
            {/* <video width="1500" height="500" style={{ margin: "10px 10px 10px 10px" }} controls> */}

            <video width="1500" height="500" style={{ margin: "10px 10px 10px 10px" }} src={video} type="video/mp4" controls>
                {/* <source src="https://file-examples.com/storage/fe88dacf086398d1c98749c/2017/04/file_example_MP4_1920_18MG.mp4" type="video/mp4" /> */}

            </video>
            <div><button onClick={start}> Start</button>
            <button onClick={stop}>Stop</button>
            </div>
            <br/>
            {/* <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' /> */}
            
            {/* <ReactVideo

                src="https://www.example.com/url_to_video.mp4"

                poster="https://www.example.com/posterImage.png"

                primaryColor="red"

                // other props can be passed by you
            /> */}

        </div>

    );

};

export default VideoApp;

// import React, { Component } from 'react';
// import VideoPlayer from 'react-video-js-player'

// class VideoApp extends Component {
// 	player = {}
// 	state = {
// 		video: {
// 			src: "/video.mp4",
// 			poster: "/1.png"
// 		}
// 	}

// 	onPlayerReady(player){
// 		this.player = player;	}

// 	render() {
// 		return (
// 			<div>
// 				<VideoPlayer
// 					controls={true}
// 					src={this.state.video.src}
// 					poster={this.state.video.poster}
// 					width="720"
// 					height="420"
// 					onReady={this.onPlayerReady.bind(this)}
// 				/>
// 			</div>
// 		);
// 	}
// }
// export default VideoApp;
