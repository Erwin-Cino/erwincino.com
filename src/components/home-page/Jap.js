import React from "react";

const Jap = props => (
  <div className='jap-div'>
    <div className='two-text'>
      <h3 className='jap-text'>{props.japName}</h3>
      <p className='name'>{props.name}</p>
    </div>
  </div>
);

export default Jap;
