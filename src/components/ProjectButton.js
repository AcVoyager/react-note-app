import React from 'react'

function ProjectButton(props) {
  return (
    <button className={"btn " + props.btnClass} type="button">{props.projectName}</button>
  )
}

export default ProjectButton;