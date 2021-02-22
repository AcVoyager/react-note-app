import React, { useState } from 'react';

function CollapseProjectsMenu(props) {

  const drawItem = (projectName, num, key) => 
    <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
      <div>
        <input className="form-check-input me-1" type="checkbox" value="" aria-label={projectName} />
        <span>{projectName}</span>
      </div>
      <span className="badge bg-primary rounded-pill">{num}</span>
    </li>

  const [ifShowForm, setIfShowForm] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [text, setText] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const COLOR = {
    SUCCESS: "#00B74A",
    ERROR: "#F93154" 
  };

  const validate = str => {
    if(str.length == 0){
      setErrMsg("The name of the new project cannot be empty!");
    }
    else if(Object.keys(props.data).includes(str)) {
      setErrMsg(`Name "${str}" is already used!`);
    }
    else {
      setErrMsg(`Name "${str}" is valid!`);
      return true;
    }
    return false;
  }

  const createProjectForm = () => 
    <form>
      <div className="mb-3">
        <label for="inputProjectName" className="form-label">Project Name</label>
        <input type="text" className="form-control" id="inputProjectName" aria-describedby="createHelp"
          value={text}
          onChange={e => {
            setText(e.target.value);
            setCanSubmit(validate(e.target.value));
        }}/>
        <div id="createHelp" className="form-text">Enter the new project name here.</div>
        {
          <p style={{color: canSubmit ? COLOR.SUCCESS : COLOR.ERROR}}>{errMsg}</p>
        }
      </div>
      <div className="d-flex justify-content-start">
        <button type="button" className="btn btn-primary me-3" disabled={!canSubmit}>Submit</button>
        <button type="button" className="btn btn-danger">Cancel</button>
      </div>
    </form>

  return (
    <div className="collapse show mx-1 mt-1" id="collapseProjectsMenu">

      <div className="div-create-project">
        <button type="button" className="btn btn-outline-primary my-2" id="create-new-button"
          onClick={() => {setIfShowForm(!ifShowForm)}}>
          Create a new project
        </button>

        {ifShowForm? createProjectForm() : null}
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