import React from 'react';
import Html from '../components/html';
import Header from '../components/header';
import Contact from '../components/contact';
import News from '../components/news';
import MailingList from '../components/mailing-list';
import Map from '../components/map';
import Elsewhere from '../components/elsewhere';

export default function IndexPage(props) {
	return (
		<Html {...props}>
			<Header {...props}/>
			<main>
				<p itemProp="description">FPO description goes here FPO</p>

				<Contact/>

				<News hidden/>

				<MailingList/>

				<Map/>
			</main>

			<footer>
				<Elsewhere/>
			</footer>
			{/*<script src="js/main.js"></script>*/}

			{/*Google Analytics: change UA-XXXXX-Y to be your site's ID.
			<script>
				window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
				ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
			</script>
			<script src="https://www.google-analytics.com/analytics.js" async defer></script>
			 */}
		</Html>
	);
}

IndexPage.propTypes = {
	path: React.PropTypes.string
};
