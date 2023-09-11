import React from "react";
import "./button.css"

function Button(props){

    return(
        <div className="button-component" >
            <button className={"calc-btn " + props.btnStyle} onClick={props.onButtonClick}>{props.content}</button>
        </div>
    );
}

export default Button;