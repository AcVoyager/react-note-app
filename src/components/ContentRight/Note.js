import React from 'react';
import Text from './Text';
import Link from './Link';

function Note(props) {

	/**
	 * props.noteInfo
	 * props.noteTypes
	 */

	const getSubComponent = () => {
		if(props.noteInfo.type === props.noteTypes.TEXT) {
			return (
				<Text title={props.noteInfo.title} text={props.noteInfo.text}/>
			);
		}
	
		if(props.noteInfo.type === props.noteTypes.LINK) {
			return (
				<Link url={props.noteInfo.url} text={props.noteInfo.text}/>
			);
		}
	}

	return (

		// <div className="note-div col-md-6 col-lg-4 col-xl-3 col-xxl-2">
		<div className="col-md-6 col-xl-4 p-2">
			{getSubComponent()}
		</div>

	)

}

export default Note;