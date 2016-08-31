import React from 'react';
import Html from '../components/html';

export default function MenuPage(props) {
	return (
		<Html {...props}>menu</Html>
	);
}

MenuPage.propTypes = {
	urlPath: React.PropTypes.string
};
