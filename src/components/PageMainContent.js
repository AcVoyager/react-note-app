import React, { useState } from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

import '../styles/mainContent.css';
import originalData from "../data/data";

function PageMainContent(props) {

  const [data, setData] = useState(originalData);

  return (
    <div className="row main-content flex-grow-1">
				
				{/* left part for projects and buttons */}
				<div className="col-md-3 main-content-left">
          <ContentLeft data={data} setData={setData}/>
				</div>

				{/* right part for notes */}
				<div className="col-md-9 main-content-right">
          <ContentRight data={data} setData={setData}/>
				</div>

    </div>
  );

}

export default PageMainContent;