import React from "react"
import ButtonWrapper from "./Button.style";

const Button = (props) => {
    const {name}=props;
  return (
    <ButtonWrapper>
        <div className="button">
        <button>{name}</button>
        </div>
    </ButtonWrapper>
  )
};

export default Button;
