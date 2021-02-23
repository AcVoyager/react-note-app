import React, { useState, useEffect } from 'react'
import LinkNoteURL from './LinkNoteURL'
import LinkNoteContent from './LinkNoteContent'

function AddingLinkForm(props) {

  /**
   * props.setIfFormValid()
   */
  
  const WARNING_COLOR = "#FF7700";
  
  const [ifURLEmpty, setIfURLEmpty] = useState(true);
  const [ifURLValid, setIfURLValid] = useState(false);
  // const [ifContentEmpty, setIfContentEmpty] = useState(true);
  const [ifContentValid, setIfContentValid] = useState(true);

  useEffect(() => {
    props.setIfFormValid(!ifURLEmpty && ifURLValid && ifContentValid);
  }, [ifURLEmpty, ifURLValid, ifContentValid])
  
  /*
    Do not do this: 
    props.setIfFormValid(!ifURLEmpty && ifURLValid && ifContentValid);
    It will cause an error(warning): "Cannot update a component from inside the function body of a different component."
  */

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