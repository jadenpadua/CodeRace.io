// Neccessary component imports
import React, {useState, useEffect} from 'react';
import Preview from './Preview';
import Speed from './Speed';
import {content} from './content';
// Parent app Component
const App = () =>  {
// Stores arr with direct variable reference, method to modify that reference
const [text,setText] = useState(content.text[0])
const [userInput,setUserInput] = useState("")
const [symbols,setSymbols] = useState(0)
const [timeElapsed, setElapsedTime] = useState(0)

// onRestart is a const calls the setText and setUsermethod, thus resetting to original state.
  const onRestart = () => {
    setText(content.text[0])
    setUserInput("")
  }
// this const is equal to an arrow function that updates our events and sets user input to that
  const onUserInputChange = (e) => {
    const v = e.target.value;
    setUserInput(v)

    setSymbols(countCorrectSymbols(v))

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
    setElapsedTime(timeElapsed => 1000 + timeElapsed)
    console.log(timeElapsed)
  }, 1000);

  return () => clearInterval(interval);
}, []);

// Return JSX
return(
/* Designating spot in webpage to place our information*/
      <div className="container mt-5 mb-5">
      
{/* Box for holding text field and form box*/}
        <div className="row">
{/* Text field for our designated phrase */}
          <div className="col-md-6 offset-md-3">
{/* Preview component with parameters text, and userInput, can use direct reference here*/}
            <Preview text={text} userInput={userInput}/>
{/* Define area box where you start typing, set value to input of user and change user input to target value of event*/}
            <textarea
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
