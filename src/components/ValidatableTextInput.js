import React, { useState } from 'react'

function ValidatableTextInput(props) {

  /**
   * props.inputID
   * props.inputName
   * props.helpID
   * props.helpInfo
   * props.message
   * props.validateAndSetMessage(str)
   * props.tellParentIfValid(ifValid)
   */

  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState("");
  const COLOR = {
    SUCCESS: "#00B74A",
    ERROR: "#F93154" 
  };
  
  return (
    <div>

      <label for={props.inputID} className="form-label">{props.inputName}</label>
        <input type="text" className="form-control" id={props.inputID} aria-describedby={props.helpID}
          value={text}
          onChange={e => {
            setText(e.target.value);
            setIsValid(props.validateAndSetMessage(e.target.value));
            props.tellParentIfValid(isValid);
        }}/>
        <div id={props.helpID} className="form-text">{props.helpInfo}</div>
        {
          <p style={{color: isValid ? COLOR.SUCCESS : COLOR.ERROR}}>{props.message}</p>
        }
      
    </div>
  )
}

export default ValidatableTextInput;