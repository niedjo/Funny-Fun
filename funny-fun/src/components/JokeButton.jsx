import React from "react";
import { Colors } from "./colors";

export default function JokeButton(props) {
    return (
        <button
            style={{
                borderColor : props.bg,
                color : !props.clique ? props.bg : Colors.white,
                padding : 10,
                background : !props.clique ? Colors.white : props.bg,
                borderRadius : 100
            }}
        >{props.buttonName}</button>
    )
};
