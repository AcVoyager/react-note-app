import React, { useState, useEffect } from 'react';
import CreatingProjectForm from './CreatingProjectForm';
import ProjectItem from './ProjectItem';

function CollapseProjectsMenu(props) {

  /**
   * props.data
   * props.setData()
   * props.checkedProjects
   * props.setCheckedProjects()
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

  // when creating a new project, update props.data
  const addToData = (newProjectName) => {
    const newData = Object.assign(props.data);
    newData[newProjectName] = [];
    props.setData(newData);
  }

  // when creating a new project, update props.checkedProjects
  const addToCheckedProjects = (newProjectName) => {
    const newCheckedProjects = props.checkedProjects.slice();
    newCheckedProjects.push(newProjectName);
    props.setCheckedProjects(newCheckedProjects);
  }

  const [ifShowForm, setIfShowForm] = useState(false);

  return (
    <div className="collapse show mx-1 mt-1" id="collapseProjectsMenu">

      <div className="div-create-project">

        {/* simple indicator for debugging */}
        {/* <p>{"Indicator for props.data change: " + props.data["Learn React"].length}</p> */}

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
              addToCheckedProjects(name);
              setIfShowForm(false);
            } }
            onCancelClick={ () => setIfShowForm(false) }/> 
          : null
        }
        
      </div>

      <ul className="list-group mb-3">
        { 
          // The way to treat key here is to make sure the key of old one never changes
          getProjectArray().slice().reverse().map((project, index) => 
            project.projectName?
            <ProjectItem key={Object.keys(props.data).length - index} 
              projectName={project.projectName} num={project.noteNum}
              checkedProjects={props.checkedProjects} setCheckedProjects={props.setCheckedProjects}/>
            : null
          )
        }
      </ul>

    </div>
  )
}

export default CollapseProjectsMenu;