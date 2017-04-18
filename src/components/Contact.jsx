import React from 'react';

function Contact(props) {
  return (
    <li>
			<img src={props.image} />
			<div>
				<h1>{props.name}</h1>
				<span>{props.phoneNumber}</span>
			</div>
		</li>
  )
};

export default Contact;
