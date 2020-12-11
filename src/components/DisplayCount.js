import React, { useState } from "react";

function Description(props) {
  return (
    <div>
      {props.name}: {props.count}
    </div>
  );
}

export default Description;
