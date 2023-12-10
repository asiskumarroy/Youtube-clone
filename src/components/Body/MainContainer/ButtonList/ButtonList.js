import React from "react"
import Button from "../Button/Button";
import buttons from "../../../../utils/uiconfig";
import ButtonListWrapper from "./ButtonList.style";

const ButtonList = (props) => {


  return (
    <ButtonListWrapper>
      <div className="buttons">
        {
          buttons.map((item,index)=><Button name={item} key={index}></Button>)
        }
      </div>
    </ButtonListWrapper>
  )
};

export default ButtonList;
