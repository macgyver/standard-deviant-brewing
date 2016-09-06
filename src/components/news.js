import React from 'react';
import {news} from '../sdb';

// todo:
// - some microformat for this? at least for the published timestamp..
// - target _blank rel noopener etc..?
// - safer sorting? I feel like `Date.parse` might break down w/ some inputs..

export default function News(props) {
	return (
		<section className='news' {...props}>
			<h2>News</h2>
			{news.map((n, i) => [
				i === 0 ? null : <br/>,
				<a key={i} href={n.url}>
					<span className='headline'>{n.headline}</span>{' '}
					<nobr>
						<span className='source'>{n.source}</span>{' '}
						<time className='published'>{n.published}</time>
					</nobr>
				</a>
			])}
		</section>
	);
}
