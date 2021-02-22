import React from 'react';
import Text from './Text';
import Link from './Link';

function Note(props) {

	/**
	 * props.noteInfo
	 */

	return (
		<div>
			{props.noteInfo.type}
		</div>
	);

}

export default Note;