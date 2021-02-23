import React, { useState } from 'react';
import CollapseProjectsMenu from './CollapseProjectsMenu'
import NoteModal from './ModalComponents/NoteModal';


function ContentLeft(props) {

  /**
   * props.data
   * props.noteTypes
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   */

  const BUTTON_TEXT = {
    TOSHOW: "Show project panel",
    TOHIDE: "Hide project panel"
  }

  const [ifShow, setIfShow] = useState(true);

  return (

    <div className="container-fluid d-flex flex-column">
      
      <div className="mx-auto my-3">
        {/* use padding to adjust the w and h of the button */}
        <button type="button" className="btn btn-outline-success btn-add px-4 py-3"
          data-bs-toggle="modal" data-bs-target="#noteModal"> 
          <span>Add a note</span>
        </button>
      </div>

      <NoteModal data={props.data} setData={props.setData} noteTypes={props.noteTypes} 
        pushToData={props.pushToData}/>

      <div className="d-flex flex-column">

        <hr className="mt-0"/>

        <button className="btn btn-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectsMenu" 
          aria-expanded="true" aria-controls="collapseProjectsMenu"
          onClick={() => {setIfShow(!ifShow)}}>
          <span>{ifShow ? BUTTON_TEXT.TOHIDE : BUTTON_TEXT.TOSHOW}</span>
        </button>

        <CollapseProjectsMenu 
          data={props.data} setData={props.setData}
          checkedProjects={props.checkedProjects} setCheckedProjects={props.setCheckedProjects}/>

      </div>
      
    </div>

  );

}

export default ContentLeft;
