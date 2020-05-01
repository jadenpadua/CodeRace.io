// Neccessary imports
import React from 'react';
// Preview comp getting props passed in by App.js
 const Preview = (props) => {
//Split text passed in
  const text = props.text.split('');
// Return JSX object
  return (
    <div className="border rounded p-3 mb-4">
      {
// Map an index to every s (character) in string
        text.map((s,i) => {
          let color;
// only if our index is less than our text length
          if (i < props.userInput.length) {
// olor dependent on if our character in text is equal to userInput of index i
            color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
          }
          console.log("Hello")
          // if (s === "`") {
          //   console.log("Found")
          // }
// Now return that specific index of s in the text, either green or red
          return <span key={i} style={{backgroundColor: color}}>{s}</span>
        })
      }
    </div>
  )
}

// export component for import to preload in app.js
export default Preview;
