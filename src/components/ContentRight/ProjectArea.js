import React from 'react'
import Note from './Note'

function ProjectArea(props) {

  /**
   * props.projectName
   * props.noteArray
   * props.noteTypes
   */

  return (
    <div className="container-fluid project-area">
      
      <div>
        <h4>{props.projectName}</h4>
      </div>

      <hr/>

      <div className="notes-area row">
        {
          props.noteArray.map((note, index) => 
            <Note key={index} noteInfo={note} noteTypes={props.noteTypes}/>
          )
        }
      </div>
      
    </div>
  )
}

export default ProjectArea;