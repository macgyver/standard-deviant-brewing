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
				{/* <p itemProp="description">FPO description goes here FPO</p> */}

				<Contact/>

				<News />

				<MailingList/>

				<Map/>
			</main>

			<footer>
				<Elsewhere/>
			</footer>
		</Html>
	);
}

IndexPage.propTypes = {
	path: React.PropTypes.string
};
