import React from 'react';
import ProjectArea from './ProjectArea';

import "../../styles/rightMainContent.css";

function ContentRight(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   * props.noteTypes
   */

  return (

    <div className="container-fluid d-flex flex-column">
      {
        props.checkedProjects.map((projectName, index) => 
          <ProjectArea key={index}
            projectName={projectName} noteArray={props.data[projectName]}
            noteTypes={props.noteTypes}/>
        )
      }
    </div>

    // test for checkbox logic only
    // <div>
    //   {props.checkedProjects.map((value, index) => <p key={index}>{value}</p>)}
    // </div>
    
  );

}

export default ContentRight;