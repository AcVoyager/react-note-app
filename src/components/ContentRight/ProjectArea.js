import React, { useState } from 'react'
import Note from './Note'

function ProjectArea(props) {

  /**
   * props.projectID
   * props.projectName
   * props.noteArray
   * props.noteTypes
   */

  const BUTTON_TEXT = {
    TOSHOW: "Show",
    TOHIDE: "Hide"
  }

  const [ifShow, setIfShow] = useState(true);

  const getNoteAreaID = () => "NoteArea" + props.projectID;

  return (
    <div className="container-fluid project-area mt-3">
      
      <div className="project-area-head d-flex align-items-center">

        <span className="h3 mb-0 me-3">{props.projectName}</span>

        <button className="btn btn-secondary" type="button" 
          data-bs-toggle="collapse" data-bs-target={"#"+getNoteAreaID()} aria-expanded="true" aria-controls={getNoteAreaID()}
          onClick={() => {setIfShow(!ifShow)}}>
          {ifShow? BUTTON_TEXT.TOHIDE : BUTTON_TEXT.TOSHOW}
        </button>

      </div>

      <hr/>

      <div className="project-area-notes row collapse show" id={getNoteAreaID()}>
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