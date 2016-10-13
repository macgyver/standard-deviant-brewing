import React from 'react';
import {map} from '../sdb';

export default function Map(props) {
	return (
		<iframe
			src={map.iframeUrl}
			width="100%"
			height="350"
			frameBorder="0"
			style={{border:0}}
			allowFullScreen
		></iframe>
	);
}
