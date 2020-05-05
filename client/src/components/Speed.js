// Neccessary imports
import React from 'react';
// Speedf comp that takes prop from parent
const Speed = (props) => {

    if (props.symbols !== 0 && props.timeElapsed !== 0) {
        const cpm = (props.symbols) / (props.timeElapsed/60000);
        //Return div of words
        return (
        <div> {Math.round(cpm)} cpm </div> 
        ) 
    }

    else {
        const cpm = 0
        return (
            <div> {Math.round(cpm)} cpm </div> 
         ) 
    }
}
// export component for import to preload in app.js
export default Speed;