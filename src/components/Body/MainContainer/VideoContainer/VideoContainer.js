import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../../../utils/uiconfig";
import VideoCard from "./VideoCard";
import VideoContainerWrapper from "./videoContainer.style";
import { Link } from "react-router-dom";


const VideoContainer = (props) => {

  const[videos,setVideos]=useState([]);

  useEffect(()=>{

    getVideos();

  },[])

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json();
    console.log(json.items);
    setVideos(json.items);
  }




  return (
    <VideoContainerWrapper>
    
      <div className="videoContainer">
        {
          videos.map((item)=><Link to={`watch?v=${item.id}`}><VideoCard info={item}/></Link>)
        }
        
      </div>
    </VideoContainerWrapper>
   
  )
};

export default VideoContainer;
