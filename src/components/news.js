import React from 'react';
import {news} from '../sdb';

// todo:
// - some microformat for this?
// - target _blank rel noopener?

export default function News(props) {
	return (
		<div className='news' {...props}>
			<h2>News</h2>
			{news.map((n, i) => (
				<a key={i} href={n.url}>
					<span className='headline'>{n.headline}</span>{' '}
					<span className='source'>{n.source}</span>{' '}
					<span className='published'>{n.published}</span>
				</a>
			))}
		</div>
	);
}
