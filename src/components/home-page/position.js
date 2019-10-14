import React from "react";

class Position extends React.Component {
  render() {
    return (
      <div className='position-main'>
        <div className='position-title'>
          <p className='name-simple'>{this.props.name}</p>
          <h1 className='osaka'>{this.props.position}</h1>
        </div>
        <div className='beige-lines-div'>
          <div className='indi-lines'>
            <hr className='beige-lines'></hr>
          </div>
          <div className='indi-lines'>
            <hr className='beige-lines-1'></hr>
          </div>
          <div className='indi-lines'>
            <hr className='beige-lines-2'></hr>
          </div>
        </div>
        <div className='mini-intro'>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Position;
