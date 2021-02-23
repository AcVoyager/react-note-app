import React from 'react'

function SelectInput(props) {

  /**
   * props.options
   * props.className
   * props.selectID
   * props.labelText
   * props.currentOption
   * props.setOption(option)
   */

  return (
    <div className={props.className}>
      <label htmlFor={props.selectID} className="form-label">{props.labelText}</label>
      <select className="form-select" id={props.selectID} aria-label="{props.labelText}}"
        onChange={(event) => {props.setOption(event.target.value)}}>
        <option defaultValue={props.currentOption}>{props.currentOption}</option>
        {
          props.options.map((option, index) => {
            if(option === props.currentOption)
              return null;
            return <option key={index} value={option}>{option}</option>;
          })
        }
      </select>
  </div>
  )
}

export default SelectInput;