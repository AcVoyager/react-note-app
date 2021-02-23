import React from 'react'

function SelectInput(props) {

  /**
   * props.options
   * props.className
   * props.selectID
   * props.labelText
   * props.defaultOption
   */

  return (
    <div className={props.className}>
      <label htmlFor={props.selectID} className="form-label">{props.labelText}</label>
      <select className="form-select" id={props.selectID} aria-label="{props.labelText}}">
        <option defaultValue={props.defaultOption}>{props.defaultOption}</option>
        {
          props.options.map((option, index) => {
            if(option == props.defaultOption)
              return null;
            return <option key={index} value={option}>{option}</option>;
          })
        }
      </select>
  </div>
  )
}

export default SelectInput;