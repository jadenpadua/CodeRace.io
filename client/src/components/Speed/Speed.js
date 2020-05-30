// Neccessary imports
import React from 'react';
import '../../styles/index.css';
import './styles.css';
// Speedf comp that takes prop from parent


const Speed = (props) => {
  if (props.symbols !== 0 && props.timeElapsed !== 0) {
    const cpm = (props.symbols) / (props.timeElapsed / 60000);
    // Return div of words
    return (
      <div className="cpm">
        {' '}
        {Math.round(cpm)}
        {' '}
        cpm
        {' '}
      </div>
    );
  }


  const cpm = 0;
  return (
    <div className="cpm">

      {Math.round(cpm)}
      {' '}
      cpm

    </div>
  );
};
// export component for import to preload in app.js
export default Speed;
