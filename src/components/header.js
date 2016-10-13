import React from 'react';
// todo: `npm install` this
import classnames from 'classnames';
import {paths} from '../sdb';

export default function Header(props) {
	// map of path key to link text (for nav)
	const linkText = {
		index: 'Home',
		menu: 'Menu',
		photos: 'Photos'
	};
	let links = paths.map(p => {
		let linkProps = {
			href: p === 'index' ? '.' : `${p}.html`,
			className: classnames({active: p === props.path})
		};
		return (
			<a key={p} {...linkProps}>{linkText[p]}</a>
		);
	});

	return (
		<header>
			<a className="logo" href=".">
				<img width="350" height="429" src="img/SDBLogoBIG_YellowOnBlack.png" alt="Standard Deviant Brewing"/>
				<h1 hidden={true}>Standard Deviant Brewing</h1>
			</a>

			<nav>
				{links}
			</nav>
		</header>
	);
}

Header.propTypes = {
	path: React.PropTypes.string
};
