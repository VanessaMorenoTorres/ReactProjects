import React from "react";
import Score from "./Score";

function Student(props){
    return(
        <div>
            <h3>{props.student.name}</h3>
            <p>{props.student.bio}</p>
            <p>{props.student.scores.map((scores, index) => (
                <Score score={scores} key={index} />
            ))}
            </p>
        </div>
    );
}

export default Student