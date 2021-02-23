import React, { useState, useEffect } from 'react'
import ValidatableTextInput from '../../utilities/ValidatableTextInput'

function TextNoteTitle(props) {

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
      else{
        setMessage(`Title: ${str}`);
      }
    }
    return true;
  }

  useEffect(() => {
    props.setInputText(text);
    props.setIfInputValid(validateAndSetMessage(text));
  }, [text]);

  return (
    <ValidatableTextInput
        className="my-1"
        inputID="notetext-input-title"
        inputName="Please enter the note title (optional)"
        helpID="notetext-input-title-help"
        helpInfo="Enter the title here."
        message={message}
        text={text}
        setText={setText}
        isValid={props.ifInputValid}/>
  );
}

export default TextNoteTitle;