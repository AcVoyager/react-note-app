import React, { useEffect, useState } from 'react';
import CreatingProjectForm from './CreatingProjectForm';

function CollapseProjectsMenu(props) {

  /**
   * props.data
   */

  const drawItem = (projectName, num, key) => 
    <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
      <div>
        <input className="form-check-input me-1" type="checkbox" value="" aria-label={projectName} />
        <span>{projectName}</span>
      </div>
      <span className="badge bg-primary rounded-pill">{num}</span>
    </li>

  const [ifShowForm, setIfShowForm] = useState(false);

  return (
    <div className="collapse show mx-1 mt-1" id="collapseProjectsMenu">

      <div className="div-create-project">

        <button type="button" className="btn btn-outline-primary my-2" id="create-new-button"
          onClick={() => {setIfShowForm(!ifShowForm)}}>
          Create a new project
        </button>

        {ifShowForm? <CreatingProjectForm data={props.data}/> : null}
        
      </div>

      <ul className="list-group">
        {
          Object.entries(props.data).map(([projectName, value], index) => {
            return drawItem(projectName, value.length, index);
          })
        }
      </ul>

    </div>
  )
}

export default CollapseProjectsMenu;