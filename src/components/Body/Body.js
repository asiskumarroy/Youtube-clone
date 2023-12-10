import React from "react"
import Sidebar from "./SideBar/Sidebar";
import BodyLayout from "./Body.style";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = (props) => {


  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  return (
    <BodyLayout>
      <div className="body">
        {isMenuOpen && <Sidebar/>}
       <Outlet/>
      </div>
    </BodyLayout>
  )
};

export default Body;
