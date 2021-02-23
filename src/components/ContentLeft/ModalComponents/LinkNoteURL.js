import React, {useState, useEffect} from 'react'
import ValidatableTextInput from '../../utilities/ValidatableTextInput'

function LinkNoteURL(props) {
  
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
      return false;
    }
    if(str.length === 0){
      setMessage("");
      props.setIfEmpty(true);
      return false;
    }
    else {
      props.setIfEmpty(false);
      let reg = /^[a-zA-Z]+$/;
      if(!reg.test(str[0])){
        setMessage(`The first character has to be a letter.`);
        return false;
      }
      else{
        setMessage(`URL: ${str}`);
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
        inputID="notelink-input-url"
        inputName="Please enter the URL (required)"
        helpID="notelink-input-url-help"
        helpInfo="Enter the URL here."
        message={message}
        text={text}
        setText={setText}
        isValid={props.ifInputValid}/>
  );
}

export default LinkNoteURL;