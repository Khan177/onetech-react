import React from 'react';

import './Note.css';

export default function Note({text}){
	return(
		<div className="note">
			{text}
		</div>
	);
}