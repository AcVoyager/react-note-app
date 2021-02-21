import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

function PageMainContent(props) {

  return (
    <div className="row main-content">
				
				{/* left part for projects and buttons */}
				<div className="col-md-3">
          <ContentLeft />
				</div>

				{/* right part for notes */}
				<div className="col-md-9">
          <ContentRight />
				</div>

    </div>
  );

}

export default PageMainContent;