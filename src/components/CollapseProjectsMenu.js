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
  const [newProjectName, setNewProjectName] = useState("");
  /**
   * `projectArray`:
   * [
   *   {
   *    projectName: xxx,
   *    noteNum: 0
   *   },
   * ]
   */
  const [projectArray, setProjectArray] = useState(() => {
    const entries = Object.entries(props.data);
    return entries.map((entry, index) => {
      const resultObj = {}
      const [name, value] = entry;
      resultObj.projectName = name;
      resultObj.noteNum = value.length;
      return resultObj;
    });
  });

  useEffect(() => {
    const tempArr = projectArray.slice();
    tempArr.push({
      projectName: newProjectName,
      noteNum: 0
    });
    setProjectArray(tempArr);
  }, [newProjectName])

  return (
    <div className="collapse show mx-1 mt-1" id="collapseProjectsMenu">

      <div className="div-create-project">

        <button type="button" className="btn btn-outline-primary my-2" id="create-new-button"
          onClick={() => {setIfShowForm(!ifShowForm)}}>
          Create a new project
        </button>

        {
        ifShowForm? 
          <CreatingProjectForm 
            projectArray={projectArray}
            onSubmitClick={ (name) => {
              // console.log(name); //debug
              setNewProjectName(name);
              setIfShowForm(false);
            } }
            onCancelClick={ () => setIfShowForm(false) }/> 
          : null
        }
        
      </div>

      <ul className="list-group">
        {
          projectArray.map((project, index) => {
            return project.projectName? 
              drawItem(project.projectName, project.noteNum, index) : null;
          })
        }
      </ul>

    </div>
  )
}

export default CollapseProjectsMenu;