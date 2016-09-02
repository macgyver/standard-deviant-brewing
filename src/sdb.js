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

export default {baseUrl, paths, map, elsewhere};
