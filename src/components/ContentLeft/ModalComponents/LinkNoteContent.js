import React, {useState, useEffect} from 'react'
import ValidatableTextInput from '../../utilities/ValidatableTextInput'

function LinkNoteContent(props) {
  
  /**
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
      return true;
    }
    if(str.length === 0){
      setMessage("");
    }
    else {
      let reg = /^[a-zA-Z]+$/;
      if(!reg.test(str[0])){
        setMessage(`The first character has to be a letter.`);
        return false;
      }
      else {
        setMessage(`Display name: ${str}`);
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
        inputID="notelink-input-content"
        inputName="Please enter the link display text (optional)"
        helpID="notelink-input-content-help"
        helpInfo="Enter the text here."
        message={message}
        text={text}
        setText={setText}
        isValid={props.ifInputValid}/>
  );
}

export default LinkNoteContent;