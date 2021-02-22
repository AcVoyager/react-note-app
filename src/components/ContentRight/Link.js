import React from 'react'

function Link(props) {

  /**
   * props.url
   * props.text
   */

  return (
    <div>
      
      <div>
        {props.url}
      </div>

      <div>
        {props.text}
      </div>

    </div>
  )

}

export default Link;