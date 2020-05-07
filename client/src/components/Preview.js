
import React from 'react';
import '.././styles/index.css'; 

const Preview = (props) => {

  if (props.userInput.length >= props.text.length) {
    return (
      <div>You won</div>
    )
  }
  const text = props.text.split('');

  return (
    <div className="border rounded border-primary p-3 mb-4">
      {
        text.map((s,i) => {
          let color;
          if (i < props.userInput.length) {
            color = s === props.userInput[i] ? '#4cf2c9' : '#eda5ff';
          }
          return <span key={i} style={{backgroundColor: color}}>{s}</span>
        })
      }
    </div>
  )
}
export default Preview;
