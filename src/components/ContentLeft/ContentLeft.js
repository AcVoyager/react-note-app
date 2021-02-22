import React from 'react';
import CollapseProjectsMenu from './CollapseProjectsMenu'

import "../../styles/leftMainContent.css";

function ContentLeft(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   */

  return (

    <div className="d-flex flex-column content-left">
      
      <div className="mx-auto my-3">
        {/* use padding to adjust the w and h of the button */}
        <button type="button" className="btn btn-outline-success btn-add px-4 py-3"> 
          <span>Add a note</span>
        </button>
      </div>

      <div className="d-flex flex-column">

        <hr className="mt-0"/>

        <button className="btn btn-outline-secondary mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectsMenu" 
          aria-expanded="true" aria-controls="collapseProjectsMenu">
          <span>Toggle projects panel</span>
        </button>

        <CollapseProjectsMenu 
          data={props.data} setData={props.setData}
          checkedProjects={props.checkedProjects} setCheckedProjects={props.setCheckedProjects}/>

      </div>
      
    </div>

  );

}

export default ContentLeft;
