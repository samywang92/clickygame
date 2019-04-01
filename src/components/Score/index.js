import React from "react";

export function ScoreBoard(props) {
    return <div className="scoreboard">
        <div id="score"><p>Score: {props.score}</p></div>
        <div id="hscore"><p>Highscore: {props.highscore}</p></div>
    </div>
}


export default ScoreBoard;



