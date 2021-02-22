import React, { useEffect, useState } from 'react';
import CreatingProjectForm from './CreatingProjectForm';
import ProjectItem from './ProjectItem';

function CollapseProjectsMenu(props) {

  /**
   * props.data
   * props.setData()
   */

  /**
   * `projectArray`:
   * [
   *   {
   *    projectName: xxx,
   *    noteNum: 0
   *   },
   * ]
   */
  const getProjectArray = () => {
    const entries = Object.entries(props.data);
    const arr =  entries.map((entry, index) => {
      const resultObj = {}
      const [name, value] = entry;
      resultObj.projectName = name;
      resultObj.noteNum = value.length;
      return resultObj;
    });
    // console.log(arr); // debug
    return arr;
  }

  const addToData = (newProjectName) => {
    const newData = Object.assign(props.data);
    newData[newProjectName] = [];
    props.setData(newData);
  }

  const [ifShowForm, setIfShowForm] = useState(false);

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
            data={props.data}
            onSubmitClick={ (name) => {
              // console.log(name); //debug
              addToData(name);
              setIfShowForm(false);
            } }
            onCancelClick={ () => setIfShowForm(false) }/> 
          : null
        }
        
      </div>

      <ul className="list-group mb-3">
        {
          getProjectArray().map((project, index) => 
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