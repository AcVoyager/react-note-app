import React from 'react'
import Note from './Note'

function ProjectArea(props) {

  /**
   * props.projectName
   * props.noteArray
   */

  return (
    <div className="row project-area">
      
      <div>
        <h4>{props.projectName}</h4>
      </div>

      <hr/>

      <div>
        {
          props.noteArray.map((note, index) => 
            <Note key={index} noteInfo={note}/>
          )
        }
      </div>
      
    </div>
  )
}

export default ProjectArea;