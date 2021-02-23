import React, { useState } from 'react'
import TextNoteTitle from './TextNoteTitle'
import TextNoteContent from './TextNoteContent'

function AddingTextForm(props) {
  
  const WARNING_COLOR = "#FF7700";
  
  const [ifTitleEmpty, setIfTitleEmpty] = useState(true);
  const [ifTitleValid, setIfTitleValid] = useState(true);
  const [ifContentEmpty, setIfContentEmpty] = useState(true);
  const [ifContentValid, setIfContentValid] = useState(true);

  return (
    <div className="my-2">
      <TextNoteTitle setIfEmpty={setIfTitleEmpty} 
        ifInputValid={ifTitleValid} setIfInputValid={setIfTitleValid}/>
      <TextNoteContent setIfEmpty={setIfContentEmpty} 
        ifInputValid={ifContentValid} setIfInputValid={setIfContentValid}/>
      <div>
        <p style={{color: WARNING_COLOR}}>
          {ifTitleEmpty && ifContentEmpty ?
            "Note: Either title or content should be filled." 
            : ifTitleValid && ifContentValid ? null : "Note: All input fields need to be valid!"
          }
        </p>
      </div>
    </div>
  );
    
}

export default AddingTextForm;