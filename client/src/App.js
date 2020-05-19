
// import Input from './components/Input';
import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';
import TextareaAutosize from 'react-autosize-textarea';

import {content, randomProperty, inputStyleStart, inputStyleWin, countCorrectSymbols,} from './utils.js';
import './styles/index.css'; 
import {BrowserRouter, Redirect, Link, Switch,Route} from 'react-router-dom'
import home from './components/home.png'
import car from './components/car.png'
import Suggestion from './components/Suggestion'
import Home from './components/Home'
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
        <Route path = "/" exact component = {Home} timeElapsed = {timeElapsed} />
        <Route path = "/suggestion" exact component={Suggestion} />
      </BrowserRouter>
    );
    };
export default App;
