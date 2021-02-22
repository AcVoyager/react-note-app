import React, { useState, useEffect } from 'react'
import ValidatableTextInput from './ValidatableTextInput';

function CreatingProjectForm(props) {

  /**
   * props.projectArray
   * props.onSubmitClick()
   * props.onCancelClick()
   */
  
  const [ifEnableButton, setIfEnableButton] = useState(false);
  const [ifInputValid, setIfInputValid] = useState(false);
  const [isJustOpen, setIsJustOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  /**
   * The reason I use `useEffect` here instead of simply passing the `setIfEnableButton` as
   * callback, is because for this form, the button only depends on one text input, but sometimes it 
   * depends on multiple text inputs. For example, when creating a note, there will be two 
   * input fields, and the button will be enabled as long as one of them is valid. In this case, 
   * I will put two indicators to monitor and change the button status with indicator1 || indicator2.
   */
  useEffect(() => {
    setIfInputValid(validateAndSetMessage(text));
    setIfEnableButton(ifInputValid); // Here the button only depends on one input field.
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

        <button type="button" className="btn btn-primary me-3" disabled={!ifEnableButton}
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