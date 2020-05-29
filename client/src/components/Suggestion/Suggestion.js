import React, {useState} from 'react';
import Config from '../../config/env';
import TextareaAutosize from 'react-autosize-textarea';
import Navbar from '../Navbar/Navbar.js';
import './styles.css'
const Suggestion = (props) => {
const [userInput,setUserInput] = useState("")
      const submit = async () => {
         try {
            console.log(Config.API_URL)
            let response = await fetch(Config.API_URL + "/suggestions", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: userInput })
          });
          console.log(response.json());
          } catch (err) {
            console.log(err);
          }
         setUserInput("");
      }
   
    const onUserInputChange = (e) => {
      const v = e.target.value;
      setUserInput(v)
      console.log(userInput)

    }





    return (
      <div>
      <Navbar></Navbar>
      <div className="text-center">
         <div className="suggestion-text">
            <h2>Suggestion Box</h2>
         </div>
      </div>

        <div className="container mt-4 mb-5">
        
          
               <div className="mx-auto suggestion border rounded p-3 mb-4 mh-100 ">
                  
             
                  <div className = "text-center">
                     <div className = "box-text">Have a suggestion? Any comments? Any bugs you ran into while playing CodeRace?</div>
                  </div>
               </div>
             

               <TextareaAutosize
               className="mx-auto suggestion form-control p-3 mb-3"
               placeholder="It would be really cool if you could add..." 
               value={userInput} 
               onChange={onUserInputChange}
               >
                   
               </TextareaAutosize> 
            
              
            
               <div className="suggestion-button"> <button className="btn btn-light" onClick = {submit} >Submit</button></div>
            </div>
         
          </div> 
      
    );
  }

  export default Suggestion;