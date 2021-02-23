import React, { useState } from 'react';
import ContentLeft from '../components/ContentLeft/ContentLeft';
import ContentRight from '../components/ContentRight/ContentRight';

import originalData, {NOTE_TYPE} from "../data/data";

function PageMainContent(props) {

  const [data, setData] = useState(originalData);
  const [checkedProjects, setCheckedProjects] = useState(Object.keys(data));
  const [noteTypes, setNoteTypes] = useState(NOTE_TYPE);

  return (
    <div className="row main-content">
				
				{/* left part for projects and buttons */}
				<div className="col-md-3 main-content-left">
          <ContentLeft 
            data={data} setData={setData}
            checkedProjects={checkedProjects} setCheckedProjects={setCheckedProjects}/>
				</div>

				{/* right part for notes */}
				<div className="col-md-9 main-content-right">
          <ContentRight 
            data={data} setData={setData}
            checkedProjects={checkedProjects} setCheckedProjects={setCheckedProjects}
            noteTypes={noteTypes}/>
				</div>

    </div>
  );

}

export default PageMainContent;