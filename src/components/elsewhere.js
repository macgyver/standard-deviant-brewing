import React from 'react';
import {baseUrl, elsewhere} from '../sdb';

export default function Elsewhere(props) {
	return (
		<div className="elsewhere">
			<link itemProp="url" href={`${baseUrl}/`}/>
			{elsewhere.map((e, i) => [
				<span aria-hidden={true}>{i !== 0 ? ' • ' : null}</span>, // delimiter
				<a href={e.href} itemProp="sameAs" target="_blank" rel="noopener">{e.text}</a>
			])}
		</div>
	);
}

Map.propTypes = {
	link: React.PropTypes.bool,
	iframe: React.PropTypes.bool
};
