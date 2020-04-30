// Neccessary component imports
import React, {useState, useEffect} from 'react';
import Preview from './Preview';
import Speed from './Speed';

// Parent app Component
const App = () =>  {
// Stores arr with direct variable reference, method to modify that reference
const [text,setText] = useState('System.out.println("Hello World";')
const [userInput,setUserInput] = useState("")  

// onRestart is a const calls the setText and setUsermethod, thus resetting to original state.
  const onRestart = () => {
    setText('System.out.println("Hello World";')
    setUserInput("")
  }
// this const is equal to an arrow function that updates our events and sets user input to that
  const onUserInputChange = (e) => {
    const v = e.target.value;
    setUserInput(v)

  }
// For later use with API calls
useEffect( () => {

}, [])

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
            <Speed/>

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
