import React, {useState, useEffect} from 'react';
import Preview from '../Preview/Preview';
import Speed from '../Speed/Speed';
import Navbar from '../Navbar/Navbar';
import TextareaAutosize from 'react-autosize-textarea';
import {content, randomProperty, inputStyleStart, inputStyleWin, countCorrectSymbols,} from '../../utils.js';
import {Link} from 'react-router-dom'
import '../.././styles/buttons/styles.css'

const Home = (props) => {

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

          if (isFinished) {
            e.preventDefault()
          }


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

    return (
        <div>
          <Navbar></Navbar>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className= "text-right"> <Speed timeElapsed={timeElapsed} symbols={symbols} /></div>
                  <Preview text={text} userInput={userInput} symbols={symbols}/>
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
                  <div className="text-left"> <button className="btn btn-light" onClick={onRestart}>Restart</button></div>
                  <div className="text-center">
                    <Link to="/suggestion"> <button className="btn btn-dark">Have a suggestion?<br/>Drop a note here!</button> </Link>
                  </div>
                </div>
              </div> 
            </div>
        </div>
    )
  }

  export default Home;