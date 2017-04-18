import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import contacts from './ContactsList/contactsList.js';
import Contact from './components/Contact.jsx';


class ContactsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayedContacts: contacts
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		let searchQuery = event.target.value.toLowerCase();
		let displayedContactsChange = contacts.filter(el => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		})
		this.setState({ displayedContacts: displayedContactsChange});
	}

	render() {
		return (
			<div className="contacts">
				<input type="text" className="search" onChange={this.handleSearch} />
				<ul>
					{
						this.state.displayedContacts.map(el => {
							return <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image} />
						})
					}
				</ul>
			</div>
		)
	}
};

ReactDOM.render(<ContactsList />, document.getElementById('root'));
