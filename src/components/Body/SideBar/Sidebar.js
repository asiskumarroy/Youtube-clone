import React from "react"
import Sidebarwrapper from "./Sidebar.style";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <Sidebarwrapper>
      <div className="contentBox">

        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>

        <p className="subscriptions"><b>Subscriptions</b></p>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        
          <p className="watch later"><b>Watch Later</b></p>
          <ul>
            <li>Dance</li>
            <li>Adventure</li>
            <li>comedy</li>
            <li>drama</li>
          </ul>
        
      </div>
    </Sidebarwrapper>
  )
};

export default Sidebar;
