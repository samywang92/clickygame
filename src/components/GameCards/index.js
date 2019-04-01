import React from "react";

export function GameCards({ children }) {
    return <div className="row">
        {children}
    </div>;
}

export function GameCard(props) {
    return <div className="col m4">
        <img src={props.img} className="imgcards" alt="gamecard" onClick={props.onClick}/>
    </div>
}


