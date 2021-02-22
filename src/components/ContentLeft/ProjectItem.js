import React, { useState } from 'react'

function ProjectItem(props) {

  /**
   * props.projectName
   * props.num
   * props.checkedProjects
   * props.setCheckedProjects()
   */

  const [isChecked, setIsChecked] = useState(true);

  const toggleChecked = (event) => {
    const newCheckedStatus = !isChecked;
    const newCheckedProjects = props.checkedProjects.slice();
    if(newCheckedStatus){ // add
      newCheckedProjects.unshift(props.projectName);
    }
    else { // remove
      const index = newCheckedProjects.indexOf(props.projectName);
      newCheckedProjects.splice(index, 1);
    }
    props.setCheckedProjects(newCheckedProjects);
    setIsChecked(newCheckedStatus);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input className="form-check-input me-1" type="checkbox" value="" aria-label={props.projectName}
          checked={isChecked} onChange={toggleChecked}/>
        <span>{props.projectName}</span>
      </div>
      <span className="badge bg-primary rounded-pill">{props.num}</span>
    </li>
  )
}

export default ProjectItem;