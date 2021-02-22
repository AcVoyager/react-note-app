import React, { useState, useEffect } from 'react'
import ValidatableTextInput from '../ValidatableTextInput';

function CreatingProjectForm(props) {

  /**
   * props.projectArray
   * props.onSubmitClick()
   * props.onCancelClick()
   */
  
  const [ifInputValid, setIfInputValid] = useState(false);
  const [isJustOpen, setIsJustOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setIfInputValid(validateAndSetMessage(text));
  }, [text]);

  const validateAndSetMessage = str => {
    if(isJustOpen){
      setMessage("");
      setIsJustOpen(false);
      return false;
    }
    // console.log(str); // debug
    if(str.length === 0){
      setMessage("The name of the new project cannot be empty!");
    }
    else if(props.projectArray.map(value => value.projectName).includes(str)) {
      setMessage(`Name "${str}" is already used!`);
    }
    else {
      setMessage(`Name "${str}" is valid!`);
      return true;
    }
    return false;
  }

  return (
    <form className="m-2">
      <div className="mb-3">
        <ValidatableTextInput
          inputID="inputProjectName"
          inputName="Project Name"
          helpID="createHelp"
          helpInfo="Enter the new project name here."
          message={message}
          text={text}
          setText={setText}
          isValid={ifInputValid}
        />
      </div>

      <div className="d-flex justify-content-end">

        <button type="button" className="btn btn-primary me-3" disabled={!ifInputValid}
          onClick={e => props.onSubmitClick(text)}>
          Submit
        </button>

        <button type="button" className="btn btn-danger"
          onClick={props.onCancelClick}>
          Cancel
        </button>

      </div>
    </form>
  )
}

export default CreatingProjectForm;