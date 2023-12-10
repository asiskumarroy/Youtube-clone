import React from "react";
import VideocardWrapper from "./VideoCard.style";

const VideoCard = ({info}) => {

    const{snippet,statistics}=info;
    const{channelTitle, title, thumbnails}=snippet;


  return (
    <VideocardWrapper>
        <div className="videoCard">
        <img src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
        </div>
    </VideocardWrapper>
  )
};

export default VideoCard;
