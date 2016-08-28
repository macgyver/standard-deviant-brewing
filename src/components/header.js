import React from 'react';

export default function Header(props) {
	return (
		<header>
			<a className="logo" href="index.html">
				<img itemProp="logo" width="350" height="429" src="img/SDBLogoBIG_YellowOnBlack.png" alt="Standard Deviant Brewing"/>
				<h1 itemProp="name" hidden>Standard Deviant Brewing</h1>
			</a>

			<nav>
				<a href="index.html" className="active">Home</a>
				<a href="menu.html">Menu</a>
				{/*<a href="photos.html">Photos</a>*/}
			</nav>
		</header>
	);
}
