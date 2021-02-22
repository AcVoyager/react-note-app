import React from 'react';
import ProjectButton from './ProjectButton'
import CollapseProjectsMenu from './CollapseProjectsMenu'

import "../styles/leftMainContent.css";

function ContentLeft(props) {

  /**
   * props.data
   */

  return (

    <div className="d-flex flex-column">
      
      <div className="mx-auto my-3">
        {/* use padding to adjust the w and h of the button */}
        <button type="button" className="btn btn-outline-success btn-add px-4 py-3"> 
          <span>Add a note</span>
        </button>
      </div>

      <div className="d-flex flex-column">

        <hr className="mt-0"/>

        <button className="btn btn-outline-secondary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProjectsMenu" 
          aria-expanded="true" aria-controls="collapseProjectsMenu">
          <span>Select Project</span>
        </button>

        <CollapseProjectsMenu data={props.data} setData={props.setData}/>

      </div>
      
    </div>

  );

}

export default ContentLeft;

const MOCKBUTTONS = [
  {
    projectName: "project1",
    btnClass: "btn-outline-primary"
  },
  {
    projectName: "project2",
    btnClass: "btn-outline-secondary"
    // btnStyle: {
    //   opacity: "0.4",
    //   backgroundColor: "orange"
    // }
  },
  {
    projectName: "project3",
    btnClass: "btn-outline-success"
    // btnStyle: {
    //   opacity: "0.5",
    //   backgroundColor: "yellow"
    // }
  },
  {
    projectName: "project4",
    btnClass: "btn-outline-danger"
    // btnStyle: {
    //   opacity: "0.6",
    //   backgroundColor: "blue"
    // }
  },
  {
    projectName: "project5",
    btnClass: "btn-outline-info"
    // btnStyle: {
    //   opacity: "0.7",
    //   backgroundColor: "purple"
    // }
  },
];