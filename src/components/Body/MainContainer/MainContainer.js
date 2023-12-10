import React from "react"
import ButtonList from "./ButtonList/ButtonList";
import VideoContainer from "./VideoContainer/VideoContainer";
import MainContainerLayout from "./MainContainer.style";

const MainContainer = (props) => {
  return (
    <MainContainerLayout>
      <div className="mainContainer">
        <ButtonList/>
        <VideoContainer/>
      </div>
    </MainContainerLayout>
  )
};

export default MainContainer;
