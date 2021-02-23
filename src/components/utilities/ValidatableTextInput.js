import React from 'react'

function ValidatableTextInput(props) {

  /**
   * props.inputID
   * props.inputName
   * props.helpID
   * props.helpInfo
   * props.message
   * props.text
   * props.setText()
   * props.isValid
   */

  const COLOR = {
    SUCCESS: "#00B74A",
    ERROR: "#F93154" 
  };
  
  return (
    <div>

      <label htmlFor={props.inputID} className="form-label">{props.inputName}</label>
        <input type="text" className="form-control" id={props.inputID} aria-describedby={props.helpID}
          value={props.text}
          onChange={e => {
            props.setText(e.target.value);
        }}/>

        <div id={props.helpID} className="form-text">{props.helpInfo}</div>
        {
          <p style={{color: props.isValid ? COLOR.SUCCESS : COLOR.ERROR}}>{props.message}</p>
        }
      
    </div>
  )
}

export default ValidatableTextInput;