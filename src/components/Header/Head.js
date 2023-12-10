import React from "react"
import HeaderWrapper from "./Header.style";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Head = (props) => {

  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }


  return (
    <HeaderWrapper>
      <div className="headerDiv">
        <div className="leftPanel">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/28px-Hamburger_icon.svg.png" alt="menuIcon" className="hamburger" onClick={toggleMenuHandler}></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/256px-YouTube_Logo_2017.svg.png" alt="youtube-logo" className="youtubeLogo"></img>
        </div>
        <div className="searchBar">
          <input type="text" className="searchField"></input>
          <button className="searchButton">🔍</button>
        </div>
        <div className="rightPanel">
          <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userIcon" className="userLogin"></img>
        </div>
        
        
      </div>
    </HeaderWrapper>
  )
};

export default Head;
