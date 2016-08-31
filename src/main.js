import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import IndexPage from './pages/index';
import MenuPage from './pages/menu';
import PhotosPage from './pages/photos';

[{
	Page: IndexPage,
	urlPath: ''
}, {
	Page: MenuPage,
	urlPath: 'menu.html'
}, {
	Page: PhotosPage,
	urlPath: 'photos.html'
}].forEach(function(spec) {
	let {Page, urlPath} = spec;
	let html = (
		<Page urlPath={urlPath}/>
	);
	let fileName = path.join(__dirname, '..', 'dst', urlPath||'index.html');
	let fileContents = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(html);

	fs.writeFile(fileName, fileContents, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log(`saved ${fileName}\n${fileContents}\n`);
	});
});
