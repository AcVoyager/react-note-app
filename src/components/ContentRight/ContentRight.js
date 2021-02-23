import React from 'react';
import ProjectArea from './ProjectArea';

function ContentRight(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
   * props.noteTypes
   */
  
  const createReversedCopy = () => props.checkedProjects.slice().reverse()

  return (

    <div className="container-fluid d-flex flex-column">
      {
        createReversedCopy().map((projectName, index) => 
          <ProjectArea // The way to treat key here is to make sure the key of old one never changes
            key={props.checkedProjects.length - index} projectID={index}
            projectName={projectName} noteArray={props.data[projectName]}
            noteTypes={props.noteTypes}/>
        )
      }
    </div>
    
  );

}

export default ContentRight;