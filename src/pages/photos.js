import React from 'react';
import Html from '../components/html';

export default function PhotosPage(props) {
	return (
		<Html {...props}>photos</Html>
	);
}

PhotosPage.propTypes = {
	urlPath: React.PropTypes.string
};
