import React from "react";
import posed from "react-pose";

const Holder = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});

export function GameCards({ children }) {
    return <div className="row">
        {children}
    </div>;
}

export function GameCard(props) {
    return <div className="col m4">
        <Holder className="card card-holder"><img src={props.img} className="imgcards" alt="gamecard" onClick={props.onClick}/></Holder>
    </div>
}


