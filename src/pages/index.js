import React from 'react';
import Html from '../components/html';

export default function IndexPage(props) {
	return (
		<Html {...props}>index</Html>
	);
}

IndexPage.propTypes = {
	urlPath: React.PropTypes.string
};
