import React from 'react'

function ProjectItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input className="form-check-input me-1" type="checkbox" value="" aria-label={props.projectName} />
        <span>{props.projectName}</span>
      </div>
      <span className="badge bg-primary rounded-pill">{props.num}</span>
    </li>
  )
}

export default ProjectItem;