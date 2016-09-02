import React from 'react';
import {baseUrl} from '../sdb';

function Html(props) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8"/>
				<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
				<title>Standard Deviant Brewing</title>
				<meta name="description" content=""/>
				<meta name="viewport" content="width=device-width"/>

				<link rel="icon" href="img/SDBLogo_SDBsigmaBlack.png"/>
				<link rel="canonical" href={`${baseUrl}/${props.path}`}/>
				<link rel="stylesheet" href="css/main.css"/>
			</head>
			<body itemScope itemType="http://schema.org/Brewery">
				{props.children}
			</body>
		</html>
	);
}

Html.propTypes = {
	children: React.PropTypes.node,
	path: React.PropTypes.string
};

export default Html;
