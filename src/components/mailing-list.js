import React from 'react';

export default function MailingList(props) {
	return (
		<div className="signup" id="mc_embed_signup" {...props}>
			<form action="//standarddeviantbrewing.us8.list-manage.com/subscribe/post?u=373229c092a7c67afd678cbf5&amp;id=d1363a877c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="noValidate">
				<label htmlFor="mce-EMAIL">Signup for news &amp; events </label>
				<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email" required="" aria-required="true"/>
				<input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe" className="button"/>
				<div id="mce-responses" className="clear">
					<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
					<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
				</div>
				<div style={{position: 'absolute', left: '-5000px'}}><input type="text" name="b_373229c092a7c67afd678cbf5_d1363a877c" tabIndex="-1" value=""/></div>
			</form>
			<script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
		</div>
	);
}
