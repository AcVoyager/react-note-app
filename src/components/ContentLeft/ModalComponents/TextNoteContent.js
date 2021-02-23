import React, { useState, useEffect } from 'react'
import ValidatableTextInput from '../../utilities/ValidatableTextInput'

function TextNoteContent(props) {
  
  /**
   * props.setIfEmpty();
   * props.ifInputValid
   * props.setIfInputValid()
   */

  const [isJustOpen, setIsJustOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const validateAndSetMessage = str => {
    if(isJustOpen){
      setMessage("");
      setIsJustOpen(false);
      props.setIfEmpty(true);
      return true;
    }
    if(str.length === 0){
      setMessage("");
      props.setIfEmpty(true);
    }
    else {
      props.setIfEmpty(false);
      let reg = /^[a-zA-Z]+$/;
      if(!reg.test(str[0])){
        setMessage(`The first character has to be a letter.`);
        return false;
      }
      else {
        setMessage(`Content: ${str}`);
      }
    }
    return true;
  }

  useEffect(() => {
    props.setIfInputValid(validateAndSetMessage(text));
  }, [text]);

  return (
    <ValidatableTextInput
        className="my-1"
        inputID="notetext-input-content"
        inputName="Please enter the note content (optional)"
        helpID="notetext-input-content-help"
        helpInfo="Enter the content here."
        message={message}
        text={text}
        setText={setText}
        isValid={props.ifInputValid}/>
  );
}

export default TextNoteContent;

