import React, { useEffect, useState } from 'react'
import TextNoteTitle from './TextNoteTitle'
import TextNoteContent from './TextNoteContent'

function AddingTextForm(props) {

  /**
   * props.setIfFormValid()
   */
  
  const WARNING_COLOR = "#FF7700";
  
  const [title, setTitle] = useState("");
  const [ifTitleEmpty, setIfTitleEmpty] = useState(true);
  const [ifTitleValid, setIfTitleValid] = useState(true);
  const [content, setContent] = useState("");
  const [ifContentEmpty, setIfContentEmpty] = useState(true);
  const [ifContentValid, setIfContentValid] = useState(true);

  useEffect(() => {
    props.setIfFormValid(!(ifTitleEmpty && ifContentEmpty) && ifTitleValid && ifContentValid);
  }, [ifTitleEmpty, ifContentEmpty, ifTitleValid, ifContentValid])

  useEffect(() => {
    const newFormInfo = {
      type: "text",
      title: title,
      text: content,
    };
    props.setFormInfo(newFormInfo);
  }, [title, content])
  
  /*
    Do not do this: 
    props.setIfFormValid(!(ifTitleEmpty && ifContentEmpty) && ifTitleValid && ifContentValid);
    It will cause an error(warning): "Cannot update a component from inside the function body of a different component."
  */

  return (
    <div className="my-2">
      <TextNoteTitle setIfEmpty={setIfTitleEmpty} 
        ifInputValid={ifTitleValid} setIfInputValid={setIfTitleValid} setInputText={setTitle}/>
      <TextNoteContent setIfEmpty={setIfContentEmpty} 
        ifInputValid={ifContentValid} setIfInputValid={setIfContentValid} setInputText={setContent}/>
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