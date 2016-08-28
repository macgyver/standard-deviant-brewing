module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always",
			{"omitLastInOneLineBlock": true}
		],
		"no-unused-vars": ["error", {
			// this is an easy optimization uglifyjs could make for us,
			// and seeing args even if they're not used can be helpful
			"args": "none"
		}]
	}
};
