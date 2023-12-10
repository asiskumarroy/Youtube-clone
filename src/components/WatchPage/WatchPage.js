import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { closeMenu} from "../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchPageLayout from "./WatchPage.style";

const WatchPage = (props) => {

const dispatch=useDispatch();
const [searchParams]=useSearchParams();


useEffect(()=>{
    dispatch(closeMenu());
},[])



  return (
    <WatchPageLayout>
        <div className="watchPage">
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </WatchPageLayout>
  )
};

export default WatchPage;
