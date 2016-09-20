import React from 'react';
import {beers} from '../sdb';

export default function Menu(props) {
	return (
		<div itemProp="menu">
			<h2 hidden>Menu</h2>
			We have {beers.length} beers on tap, with new beers coming soon.
			<ul>
				{beers.map(b => <li key={b}>{b}</li>)}
			</ul>
		</div>
	);
}
