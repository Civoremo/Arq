import { Auth0Lock } from 'auth0-lock';

// 'options' object contains Auth0 Lock-specific features to customize the Auth0 widget.
const options = {
	languageDictionary: {
		title: 'TeamHome'
	},
	auth: {
		sso: false,
		audience: 'http://team-home.herokuapp.com/'
	}
};

/**
 * Auth0 {class}:
 * creates an instance of Auth0Lock, using the Auth0 ClientID and Auth0 domain.
 * login() / signUp() - call the Auth0 Lock 'show()' method with their respective default screens, while displaying the listed social connections options.
 */

export default class Auth0 {
	lock = new Auth0Lock(
		process.env.REACT_APP_AUTH0_CLIENT_ID,
		process.env.REACT_APP_AUTH0_DOMAIN,
		options
	);

	login() {
		this.lock.show({
			allowedConnections: ['facebook', 'linkedin', 'google-oauth2'],
			initialScreen: 'login',
			sso: false
		});
	}

	signUp() {
		this.lock.show({
			allowedConnections: ['facebook', 'linkedin', 'google-oauth2'],
			initialScreen: 'signUp',
			sso: false
		});
	}
}
