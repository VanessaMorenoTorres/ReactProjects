import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
    <div className="Kitchen">
      <h4>Kitchen</h4>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;
