import React from 'react';
import Html from '../components/html';
import Header from '../components/header';
import Contact from '../components/contact';
import Elsewhere from '../components/elsewhere';

export default function PhotosPage(props) {
	return (
		<Html {...props}>
			<Header {...props}/>
			<main>
				photos coming soon
			</main>
			<footer>
				<Contact/>
				<Elsewhere/>
			</footer>
		</Html>
	);
}

PhotosPage.propTypes = {
	path: React.PropTypes.string
};
