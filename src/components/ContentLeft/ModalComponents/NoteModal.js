import React, { useState } from 'react'
import SelectInput from '../../utilities/SelectInput'
import AddingTextForm from './AddingTextForm'
import AddingLinkForm from './AddingLinkForm'

function NoteModal(props) {

  /**
   * props.data
   * props.noteTypes
   * props.setData()
   * props.pushToData()
   */
  
  const NO_PROJECT = "no project"; 

  const [formInfo, setFormInfo] = useState({});
  const [ifFormValid, setIfFormValid] = useState(false);
  const [noteTypes, setNoteTypes] = useState(Object.values(props.noteTypes));
  const [chosenNoteType, setChosenNoteType] = useState(Object.values(props.noteTypes)[0]);
  const [chosenProject, setChosenProject] = useState(NO_PROJECT);

  const getNoteForm = () => {
    if(chosenNoteType === props.noteTypes.TEXT)
      return <AddingTextForm setIfFormValid={setIfFormValid} setFormInfo={setFormInfo}/>;
    
    if(chosenNoteType === props.noteTypes.LINK)
      return <AddingLinkForm setIfFormValid={setIfFormValid} setFormInfo={setFormInfo}/>;
  }
  
  const saveNote = () => props.pushToData(chosenProject, formInfo)
  
  return (
    <div className="modal fade" id="noteModal" tabIndex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="noteModalLabel">Create a note</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">

            <SelectInput 
              options={Object.keys(props.data)}
              className="my-2"
              selectID="select-input-project"
              labelText="Select a project where the note will be added"
              currentOption={chosenProject}
              setOption={(option) => setChosenProject(option)}
              />

            <SelectInput 
              options={noteTypes}
              className="my-2"
              selectID="select-input-note"
              labelText="Select a note type"
              currentOption={chosenNoteType}
              setOption={(option) => setChosenNoteType(option)}
              />

            {getNoteForm()}

          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              disabled={!ifFormValid}
              onClick={saveNote}>
              Save Note
            </button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteModal;