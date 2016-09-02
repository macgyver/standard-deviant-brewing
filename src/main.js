// todo: maybe rename to `index.js` or `make.js` or something..
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import IndexPage from './pages/index';
import MenuPage from './pages/menu';
import PhotosPage from './pages/photos';

// import {paths} from './sdb';

// todo: fancier/colorful output
console.log('generating html\n');

[{
	Page: IndexPage,
	path: 'index'
}, {
	Page: MenuPage,
	path: 'menu'
}, {
	Page: PhotosPage,
	path: 'photos'
}].forEach(function(spec) {
	let {Page, path: name} = spec;
	let html = (
		<Page path={name}/>
	);
	let fileName = path.join(__dirname, '..', 'dst', `${name}.html`);
	let fileContents = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(html);

	fs.writeFile(fileName, fileContents, function(err) {
		if (err) {
			return console.log(err);
		}
		// todo: pretty html print this output
		console.log(`saved ${fileName}\n${fileContents}\n`);
	});
});

// todo: optimize/copy css and images
