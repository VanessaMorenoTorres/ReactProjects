import React from "react";

function Score(props){
    return(
        <div>
            <p>{props.score.date}: student received {props.score.score}</p>
        </div>
    );
}

export default Score