import React from 'react'
import PageMainHeading from './PageMainHeading'

function PageMain(props) {



	return (
		<main className="d-flex flex-column">

			<PageMainHeading />

			<div className="main-content">
				This is the content.
			</div>

		</main>
	);

}

export default PageMain;