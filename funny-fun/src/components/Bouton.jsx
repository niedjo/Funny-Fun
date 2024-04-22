import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "./colors";

export default function Bouton(props) {
    return (
        <Link 
            to={props.url}
            style={{
                textDecoration : "none",
                width : props.width,
                height : props.height,
                background : props.color,
                display : "flex",
                justifyContent : "center",
                textAlign : 'center',
                alignItems : 'center',
                borderRadius : 100,
                fontWeight : 700,
                fontSize : 22,
                color : Colors.white,
            }}
            onClick = {props.handleClick}
        >{props.content}</Link>
    )
};
