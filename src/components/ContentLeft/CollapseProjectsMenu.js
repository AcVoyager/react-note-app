import React, { useEffect, useState } from 'react';
import CreatingProjectForm from './CreatingProjectForm';
import ProjectItem from './ProjectItem';

function CollapseProjectsMenu(props) {

  /**
   * props.data
   */

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

      <ul className="list-group mb-3">
        {
          projectArray.map((project, index) => 
            project.projectName?
            <ProjectItem key={index} projectName={project.projectName} num={project.noteNum}/>
            : null
          )
        }
      </ul>

    </div>
  )
}

export default CollapseProjectsMenu;