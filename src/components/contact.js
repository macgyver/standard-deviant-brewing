import React from 'react';
import {map, contactEmail} from '../sdb';

export default function Contact(props) {
	return (
		<section className="contact">
			<address itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				<span itemProp="streetAddress">280 14th Street</span>{' '}
				<span itemProp="addressLocality">San Francisco</span>
				<span itemProp="addressRegion" hidden>CA</span>
				<span itemProp="addressCountry" hidden>USA</span>
				<span itemProp="postalCode" hidden>94103</span>
			</address>
			{' '}
			<a
				itemProp="hasMap"
				href={map.linkUrl}
				target="_blank"
				rel="noopener"
			>map</a>
			<div className="hours">
				<time itemProp="openingHours" dateTime="Thu 16:00-22:00">Thu 4-10</time>
				<time itemProp="openingHours" dateTime="Fri 16:00-24:00">Fri 4-12</time>
				<time itemProp="openingHours" dateTime="Sat 13:00-24:00">Sat 1-12</time>
				<time itemProp="openingHours" dateTime="Sun 12:00-21:00">Sun 12-9</time>
			</div>
			<a itemProp="telephone" href="tel:+14155902250">(415) 590-2550</a>
			<small>
				for inquires contact{' '}
				<a itemProp="email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
			</small>
		</section>
	);
}
