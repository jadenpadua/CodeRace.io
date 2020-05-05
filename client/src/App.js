
// import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import Preview from './components/Preview';
import Speed from './components/Speed';
import {content, randomProperty, inputStyleStart, inputStyleWin} from './utils.js';
import './styles/index.css'; 

const App = () =>  {

const [text,setText] = useState(randomProperty(content))
const [userInput,setUserInput] = useState("")
const [symbols,setSymbols] = useState(0)
const [timeElapsed, setElapsedTime] = useState(0)
const [isFinished, setisFinished] = useState(false)
const [inputStyle, setInputStyle] = useState(inputStyleStart)

  const onRestart = () => {
    setText(randomProperty(content))
    setUserInput("")
  }
  
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

     const parsedText = text.replace(' ','')
     return userInput.replace( ' ', '').split('').filter((s,i) => s === parsedText[i]).length;
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
        <img src={ require('./assets/title.png') } alt="Title" />
          <div className="col-md-6 offset-md-3">
            <Preview text={text} userInput={userInput}/>
            {/* <Input userInput={userInput} onChange={onUserInputChange} /> */}
             <textarea
              style = {inputStyle}
              value={userInput} 
              onChange={onUserInputChange}
              className="form-control mb-3"
              placeholder="Start Typing..."
            ></textarea> 
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
