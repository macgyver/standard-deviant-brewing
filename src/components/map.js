import React from 'react';
import {map} from '../sdb';

export default function Map(props) {
	return (
		<div className="map">
			<div itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates">
				<meta itemProp="latitude" content="37.768473"/>
				<meta itemProp="longitude" content="-122.421649"/>
			</div>
			<iframe
				src={map.iframeUrl}
				width="100%"
				height="350"
				frameBorder="0"
				style={{border:0}}
				allowFullScreen
			></iframe>
		</div>
	);
}
