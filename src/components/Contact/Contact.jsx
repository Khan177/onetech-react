import React from 'react';
import './Contact.css';

export default function Contact({name,phone,id,deleteUser}){
	return (
		<div className="contact">
			<div className="user-image">
				<div className="img">
					
				</div>
			</div>
			<div className="user-info">
				<h1>{name}</h1>
				<p>{phone}</p>
			</div>
			<div className="buttons">
				<button onClick={()=>deleteUser()}>
					Delete
				</button>
			</div>
		</div>
	);
}