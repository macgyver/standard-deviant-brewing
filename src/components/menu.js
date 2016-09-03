import React from 'react';

export default function Menu(props) {
	return (
		<div itemProp="menu">
			<h2 hidden>Menu</h2>
			We have 5 beers, with new beers coming every couple weeks.
			<ul>
				<li>Kolsch</li>
				<li>Belgian Blonde</li>
				<li>Extra Pale Ale</li>
				<li>Porter</li>
				<li>IPA</li>
			</ul>
			$6/pint or $3/half-pint
		</div>
	);
}
