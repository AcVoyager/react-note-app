import React from 'react'

function Text(props) {

  /**
   * props.title
   * props.text
   */

  return (
    <div>

      <div>
        {props.title}
      </div>

      <div>
        {props.text}
      </div>
      
    </div>
  )
}

export default Text;