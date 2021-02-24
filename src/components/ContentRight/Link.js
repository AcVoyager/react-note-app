import React from 'react'

function Link(props) {

  /**
   * props.url
   * props.text
   */

  return (
    <div className="note note-link p-2">

      <div className="note-type note-type-link text-muted pt-1">
        {/* <h6>Link</h6> */}
        <span className="h6">Link</span>
        <hr className="my-1"/>
      </div>

      <div>
      {
        props.text ?
        <a className="note-link-displayed h4" href={props.url} alt={props.text}>{props.text}</a> :
        <a className="note-link-raw" href={props.url} alt={props.url}>{props.url}</a>
      }
      </div>

    </div>
  )

}

export default Link;