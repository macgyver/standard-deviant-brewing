import React from 'react';
import ReactDOMServer from 'react-dom/server';

import IndexPage from './pages/index';
import MenuPage from './pages/menu';
import PhotosPage from './pages/photos';

[IndexPage, MenuPage, PhotosPage].forEach(function(Page){
	let html = (
		<Page/>
	);
	console.log('<!doctype html>' + ReactDOMServer.renderToStaticMarkup(html) + '\n');
});
