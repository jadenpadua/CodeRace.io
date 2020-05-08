
// import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import Preview from './components/Preview';
import Speed from './components/Speed';
import {content, randomProperty, inputStyleStart, inputStyleWin, countCorrectSymbols,} from './utils.js';
import './styles/index.css'; 

const App = () =>  {

const [text,setText] = useState(content.test)
const [userInput,setUserInput] = useState("")
const [symbols,setSymbols] = useState(0)
const [timeElapsed, setElapsedTime] = useState(0)
const [isFinished, setisFinished] = useState(false)
const [inputStyle, setInputStyle] = useState(inputStyleStart)

  const onRestart = () => {
    setText(randomProperty(content))
    setUserInput("")
    setSymbols(0)
    setElapsedTime(0)
    setisFinished(false)
  }

  const onUserInputChange = (e) => {

    if (userInput.length < text.length-1) {
      const v = e.target.value;
      setUserInput(v)
      setSymbols(countCorrectSymbols(v,text))

      if (userInput.length+1 === 1) {
        console.log("Hello")
        setElapsedTime(0)
      }
    }

    else {
      if(userInput.length === text.length-1) {
        const v = e.target.value
        setUserInput(v)
      } 
      const v = e.target.value
      setisFinished(true)
      setInputStyle(inputStyleWin)
      setSymbols(countCorrectSymbols(v,text))
    }

  }
  
 useEffect( () => {
    const interval = setInterval(() => {
      if(isFinished) {}
      else {
        setElapsedTime(timeElapsed => 1000 + timeElapsed)
      }
    }, 1000);
    return () => clearInterval(interval);
}, [isFinished]);

return(
      <div className="container mt-5 mb-5">
        <div className="row">
        {/* <img src={ require('./assets/title.png') } alt="Title" /> */}
          <h1>CodeRace.io</h1>
          <div className="col-md-6 offset-md-3">
            <Preview text={text} userInput={userInput}/>
            {/* <Input userInput={userInput} onChange={onUserInputChange} /> */}
             <TextareaAutosize
              style = {inputStyle}
              value={userInput} 
              onChange={onUserInputChange}
              className="form-control p-3 mb-3"
              placeholder="Start Typing..."
            ></TextareaAutosize> 
            <Speed timeElapsed={timeElapsed} symbols={symbols}/>
            <div className="text-right">
              <button className="btn btn-light" onClick={onRestart}>Restart</button>
            </div>
          </div>
        </div> 
      </div>
    );
    };
export default App;
