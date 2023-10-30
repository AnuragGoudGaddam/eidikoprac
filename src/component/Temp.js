import React from "react";
import { useParams } from "react-router-dom";

function Temp() {
  let { id } = useParams();
  return (
    <div className='text-center'>
      <h1>Temporary React component with ID: {id}</h1>
    </div>
  );
}

export default Temp;
