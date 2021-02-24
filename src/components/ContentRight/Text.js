import React from 'react'

function Text(props) {

  /**
   * props.title
   * props.text
   */

  return (
    <div className="note note-text p-2">

      <div className="note-type note-type-text text-muted pt-1">
        {/* <h6>Text</h6> */}
        <span className="h6">Text</span>
        <hr className="my-1"/>
      </div>

      <div className="note-text-title">
        <h4>{props.title}</h4>
      </div>

      <div className="note-text-content">
        {props.text}
      </div>
      
    </div>
  )
}

export default Text;