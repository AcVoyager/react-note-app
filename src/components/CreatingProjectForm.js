import React, { useState, useEffect } from 'react'
import ValidatableTextInput from './ValidatableTextInput';

function CreatingProjectForm(props) {

  /**
   * props.data
   */
  
  const [ifEnableButton, setIfEnableButton] = useState(false);
  const [ifInputValid, setIfInputValid] = useState(false);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    setIfEnableButton(ifInputValid); // Here the button only depends on one input field.
  }, [ifInputValid]);

  const validateAndSetMessage = str => {
    if(str.length == 0){
      setMessage("The name of the new project cannot be empty!");
    }
    else if(Object.keys(props.data).includes(str)) {
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
          validateAndSetMessage={(str) => validateAndSetMessage(str)}
          tellParentIfValid={(isValid) => setIfInputValid(isValid)}
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary me-3" disabled={!ifEnableButton}>Submit</button>
        <button type="button" className="btn btn-danger">Cancel</button>
      </div>
    </form>
  )
}

export default CreatingProjectForm;