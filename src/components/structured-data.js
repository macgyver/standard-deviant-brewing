import React from 'react';

let data = {
	'@type': 'Brewery',
	'logo': 'http://standarddeviantbrewing.com/img/SDBLogoBIG_YellowOnBlack.png',
	'name': 'Standard Deviant Brewing',
	'hasMap': 'https://www.google.com/maps/place/Standard+Deviant+Brewing/@37.768473,-122.421649,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e21474dc681:0xcab142f3b60e8df3!8m2!3d37.768473!4d-122.419455',
	'openingHours': [
		'Thu 16:00-22:00',
		'Fri 16:00-24:00',
		'Sat 13:00-24:00',
		'Sun 12:00-21:00'
	],
	'email': 'info@standarddeviantbrewing.com',
	'url': 'http://standarddeviantbrewing.com/',
	'sameAs': [
		'https://www.instagram.com/standarddeviantbrewing/',
		'https://www.facebook.com/standarddeviantbrewing/',
		'https://www.yelp.com/biz/standard-deviant-brewing-san-francisco',
		'https://foursquare.com/v/standard-deviant-brewing/575730a3498e1522af37082a',
		'https://untappd.com/w/standard-deviant-brewing/287511',
		'http://www.ratebeer.com/brewers/standard-deviant-brewing/28194/',
	],
	'address': {
		'@type': 'PostalAddress',
		'streetAddress': '280 14th Street',
		'addressLocality': 'San Francisco',
		'addressRegion': 'CA',
		'postalCode': 94103,
		'addressCountry': {
			'@type': 'Country',
			'name': 'USA'
		}
	},
	'geo': {
		'@type': 'GeoCoordinates',
		'latitude': 37.768473,
		'longitude': -122.421649
	}
};

export default function StructuredData(props) {
	return (
		<script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
	);
}
