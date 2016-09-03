import React from 'react';
import {map} from '../sdb';

export default function Contact(props) {
	return (
		<div className="contact">
			<address itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				<span itemProp="streetAddress">280 14th Street</span>{' '}
				<span itemProp="addressLocality">San Francisco</span>,{' '}
				<span itemProp="addressRegion">CA</span>{' '}
				<span itemProp="addressCountry">USA</span>{' '}
				<span itemProp="postalCode">94103</span>
			</address>
			{' '}
			<a
				itemProp="hasMap"
				href={map.linkUrl}
				target="_blank"
				rel="noopener"
			>Google maps</a>
			<br/>
			<time itemProp="openingHours" dateTime="Fri 16:00-23:00">Fri 4-11</time>,{' '}
			<time itemProp="openingHours" dateTime="Sat 12:00-23:00">Sat 12-11</time>,{' '}
			<time itemProp="openingHours" dateTime="Sun 12:00-21:00">Sun 12-9</time>
			<br/>
			<a itemProp="telephone" href="tel:+14155902250">(415) 590-2550</a>
		</div>
	);
}
