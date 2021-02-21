import React from 'react'
import PageMainHeading from './PageMainHeading'
import PageMainContent from './PageMainContent'

function PageMain(props) {



	return (
		<main className="d-flex flex-column page-main">

			<PageMainHeading />

			<PageMainContent />

		</main>
	);

}

export default PageMain;