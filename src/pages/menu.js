import React from 'react';
import Html from '../components/html';
import Header from '../components/header';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Elsewhere from '../components/elsewhere';

export default function MenuPage(props) {
	return (
		<Html {...props}>
			<Header {...props}/>
			<main>
				<Menu/>
			</main>
			<footer>
				<Contact/>
				<Elsewhere/>
			</footer>
		</Html>
	);
}

MenuPage.propTypes = {
	path: React.PropTypes.string
};
