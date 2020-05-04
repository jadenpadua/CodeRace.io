import React, {useState} from 'react';

const Input = (props) => {
    // const [disabled, setDisabled] = useState(false);
  
    // function handleGameClick() {
    //   setDisabled(!disabled);
    // }

    // const onUserInputChange = (e) => {
    //     const v = e.target.value;
    //     props.userInput = v;
    //   }

    console.log(props.userInput);
    return (

        <textarea
        className="form-control mb-3"
        placeholder = "Start Typing..."
        value={props.userInput}
      ></textarea> 
    );
  }

  export default Input;