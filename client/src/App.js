
// import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';
import TextareaAutosize from 'react-autosize-textarea';
import Preview from './components/Preview';
import Speed from './components/Speed';
import Navbar from './components/Navbar';
import {content, randomProperty, inputStyleStart, inputStyleWin, countCorrectSymbols,} from './utils.js';
import './styles/index.css'; 
import {BrowserRouter} from 'react-router-dom'

function initializeReactGA() {
  ReactGA.initialize('UA-166307178-2');
  ReactGA.pageview('/homepage');
}
initializeReactGA()

const App = () =>  {

const [text,setText] = useState(randomProperty(content))
const [userInput,setUserInput] = useState("")
const [symbols,setSymbols] = useState(0)
const [timeElapsed, setElapsedTime] = useState(0)
const [isFinished, setisFinished] = useState(false)
const [inputStyle, setInputStyle] = useState(inputStyleStart)
const TAB_EVENT = 9

  const onRestart = () => {
    setText(randomProperty(content))
    setUserInput("")
    setSymbols(0)
    setElapsedTime(0)
    setisFinished(false)
  }

  const errorHandling = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  }
  const errorHandling2 = (e) => {
    e.preventDefault();
    return "false"
  }
  
  const onUserInputChange = (e) => {
    if (symbols + 2 < text.length) {
      if (e.keyCode !== TAB_EVENT) {
        const v = e.target.value;
        setUserInput(v)
        setSymbols(countCorrectSymbols(v,text))
          if (userInput.length+1 === 1) {
            setElapsedTime(0)
          }
      }
    else {
      e.preventDefault();
      const v = userInput + "    "
      setUserInput(v)
      setSymbols(countCorrectSymbols(v,text))
      console.log(userInput.length)
        if (userInput.length === 0) {
          setElapsedTime(0)
        }
    }
    }

    else {
      if(symbols + 2 === text.length) {
        const v = e.target.value
        setUserInput(v)
      }
      const v = e.target.value;
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

useEffect( () => {
  let nt = text.split('$').join('\n')
  let nt2 = nt.split('`').join("    ")
  setText(nt2)
}, [text]);

return(
      <BrowserRouter>
      <Navbar>
      </Navbar>
      <div className="container mt-5 mb-5">
        <div className="row">
        {/* <img src={ require('./assets/title.png') } alt="Title" /> */}
          <div className="col-md-6 offset-md-3">
            <Preview text={text} userInput={userInput} symbols={symbols}/>
            {/* <Input userInput={userInput} onChange={onUserInputChange} /> */}
             <TextareaAutosize
              onPaste={errorHandling} 
              onDragOver = {errorHandling2}
              style = {inputStyle}
              value={userInput} 
              onChange={onUserInputChange}
              onKeyDown={onUserInputChange}  
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
      </BrowserRouter>
    );
    };
export default App;
