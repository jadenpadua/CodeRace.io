// Neccessary component imports
import Input from './Input';
import React, {useState, useEffect} from 'react';
import Preview from './Preview';
import Speed from './Speed';
import {content} from './content';
import './index.css'; 
// Parent app Component

const App = () =>  {
// Stores arr with direct variable reference, method to modify that reference
const [text,setText] = useState(content.text3)
const [userInput,setUserInput] = useState("")
const [symbols,setSymbols] = useState(0)
const [timeElapsed, setElapsedTime] = useState(0)
const [isFinished, setisFinished] = useState(false)

const inputStyleStart = {
  backgroundColor: 'black',
  color: 'white',

}

const inputStyleWin = {
  backgroundColor: 'black',
  color: '#dfffa0',
  disabled: true
}
const [inputStyle, setInputStyle] = useState(inputStyleStart)

// onRestart is a const calls the setText and setUsermethod, thus resetting to original state.
  const onRestart = () => {
    setText(content.text2)
    setUserInput("")
  }

// this const is equal to an arrow function that updates our events and sets user input to that
  const onUserInputChange = (e) => {
    if (userInput.length >= text.length - 1) {
      setisFinished(true)
      setInputStyle(inputStyleWin)
    }

    const v = e.target.value;
    setSymbols(countCorrectSymbols(v))

    setUserInput(v)

 

    if (userInput.length === 1) {
      setElapsedTime(0)
    }
  }

 

  const countCorrectSymbols = (userInput) => {
// // // Parse text and remove white space
     const parsedText = text.replace(' ','')
     return userInput.replace( ' ', '').split('').filter((s,i) => s === parsedText[i]).length;
  }
// // For later use with API calls
 useEffect( () => {
    const interval = setInterval(() => {

      if(isFinished) {
      }
      else {
      setElapsedTime(timeElapsed => 1000 + timeElapsed)
      }
    }, 1000);
  
    return () => clearInterval(interval);
}, [isFinished]);



// useEffect(() => {

// }
// Return JSX
return(
/* Designating spot in webpage to place our information*/
      <div className="container mt-5 mb-5">
      
{/* Box for holding text field and form box*/}
        <div className="row">
        <img src={ require('./img.png') } />
{/* Text field for our designated phrase */}
          <div className="col-md-6 offset-md-3">
         
{/* Preview component with parameters text, and userInput, can use direct reference here*/}
            <Preview text={text} userInput={userInput}/>
{/* Define area box where you start typing, set value to input of user and change user input to target value of event*/}
            {/* <Input userInput={userInput} onChange={onUserInputChange} /> */}


             <textarea
              style = {inputStyle}
              value={userInput} 
              onChange={onUserInputChange}
              className="form-control mb-3"
              placeholder="Start Typing..."
            ></textarea> 
{/* Speed Component*/}
            <Speed timeElapsed={timeElapsed} symbols={symbols}/>

            <div className="text-right">
{/* Restart button on click event sets state to initial state*/}
              <button className="btn btn-light" onClick={onRestart}>Restart</button>
            </div>
          </div>
        </div> 
      </div>
    );
    };
export default App;
