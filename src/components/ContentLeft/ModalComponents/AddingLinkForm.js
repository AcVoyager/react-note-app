import React, { useState } from 'react'
import LinkNoteURL from './LinkNoteURL'
import LinkNoteContent from './LinkNoteContent'

function AddingLinkForm(props) {
  
  const WARNING_COLOR = "#FF7700";
  
  const [ifURLEmpty, setIfURLEmpty] = useState(true);
  const [ifURLValid, setIfURLValid] = useState(false);
  // const [ifContentEmpty, setIfContentEmpty] = useState(true);
  const [ifContentValid, setIfContentValid] = useState(true);

  return (
    <div className="my-2">
      <LinkNoteURL setIfEmpty={setIfURLEmpty} 
        ifInputValid={ifURLValid} setIfInputValid={setIfURLValid}/>
      <LinkNoteContent
        ifInputValid={ifContentValid} setIfInputValid={setIfContentValid}/>
      <div>
        <p style={{color: WARNING_COLOR}}>
          {ifURLEmpty?
            "Note: The URL cannot be empty!" 
            : ifURLValid && ifContentValid ? null : "Note: All input fields need to be valid!"
          }
        </p>
      </div>
    </div>
  );
    
}

export default AddingLinkForm;