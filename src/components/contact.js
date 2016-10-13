import React from 'react';
import {map, contactEmail} from '../sdb';

export default function Contact(props) {
	return (
		<section className="contact">
			<address>
				<span>280 14th Street</span>{' '}
				<span>San Francisco</span>
				<span hidden>CA</span>
				<span hidden>USA</span>
				<span hidden>94103</span>
			</address>
			{' '}
			<a
				href={map.linkUrl}
				target="_blank"
				rel="noopener"
			>map</a>
			<div className="hours">
				<time dateTime="Thu 16:00-22:00">Thu 4-10</time>
				<time dateTime="Fri 16:00-24:00">Fri 4-12</time>
				<time dateTime="Sat 13:00-24:00">Sat 1-12</time>
				<time dateTime="Sun 12:00-21:00">Sun 12-9</time>
			</div>
			<a className='tel' href="tel:+14155902250">(415) 590-2550</a>
			<small>
				for inquires contact{' '}
				<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
			</small>
		</section>
	);
}
