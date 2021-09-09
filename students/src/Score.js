import React from "react";

function Score(props){
    return(
        <div>
            <h4>Test scores</h4>
            <p>On {props.score.date} student received {props.score.score}</p>
        </div>
    );
}

export default Score