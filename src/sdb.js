// todo: get from environment
export const baseUrl = 'http://standarddeviantbrewing.com';

export const paths = ['index', 'menu'/*, 'photos'*/]; // todo: put photos back when we get photos

export const map = {
	linkUrl: 'https://www.google.com/maps/place/Standard+Deviant+Brewing/@37.768473,-122.421649,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e21474dc681:0xcab142f3b60e8df3!8m2!3d37.768473!4d-122.419455',
	iframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9200423402776!2d-122.42164368468259!3d37.768472979760666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e21474dc681%3A0xcab142f3b60e8df3!2sStandard+Deviant+Brewing!5e0!3m2!1sen!2sus!4v1471896422236'
};

export const elsewhere = [{
	href: 'https://www.instagram.com/standarddeviantbrewing/',
	text: 'Instagram',
},{
	href: 'https://www.facebook.com/standarddeviantbrewing/',
	text: 'Facebook',
},{
	href: 'https://www.yelp.com/biz/standard-deviant-brewing-san-francisco',
	text: 'Yelp',
},{
	href: 'https://foursquare.com/v/standard-deviant-brewing/575730a3498e1522af37082a',
	text: 'Foursquare',
},{
	href: 'https://untappd.com/w/standard-deviant-brewing/287511',
	text: 'untapped',
},{
	href: 'http://www.ratebeer.com/brewers/standard-deviant-brewing/28194/',
	text: 'ratebeer',
}/*Twitter*/];

// todo: store dates as unix timestamps?
export const news = [{
	url: 'http://sfist.com/2016/08/31/go_drink_this_standard_deviant_brew.php',
	headline: 'Go Drink This: Standard Deviant Brewing Extra Pale Ale',
	published: 'AUG 31, 2016 12:40 PM PST',
	source: 'sfist'
},{
	url: 'http://sf.eater.com/2016/8/2/12359304/standard-deviant-brewing-open-mission',
	headline: 'Standard Deviant Brewing Now Softly Open in the Mission',
	published: 'Aug 2, 2016, 11:45a PST',
	source: 'Eater SF'
},{
	url: 'http://hoodline.com/2016/08/now-open-in-the-mission-standard-deviant-a-craft-brewery',
	headline: 'Now Open In The Mission: Standard Deviant, A Craft Brewery',
	published: 'Mon. August 1, 2016, 3:39pm PST',
	source: 'Hoodline'
},{
	url: 'http://hoodline.com/2016/06/standard-deviant-brewing-opening-14th-and-mission',
	headline: 'Standard Deviant Brewing To Open Soon At 14th & Mission',
	published: 'Mon. June 6, 2016, 12:48pm PST',
	source: 'Hoodline'
}].map(n => {
	n.timestamp = Date.parse(n.published);
	return n;
}).sort(function(a, b) {
	return a.timestamp > b.timestamp ? 1 : -1;
});

export default {baseUrl, paths, map, elsewhere, news};
