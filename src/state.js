var Freezer = require('freezer-js');

var state = {
	session: {
		connected: false,
		state: ""

	},

	connection: {
		page: null,
		summonerLevel: 0
	},

	current: {
		champion: null,
		champ_data: {
			fav: null,
			pages: {},
		},
	},

	tab: {
		active: "local",
		loaded: true,
	},

	lastuploadedpage: {
		champion: null,
		page: null,
		valid: false,
		loading: false
	},

	lastbookmarkedpage: {
		champion: null,
		page: null
	},

	lastsyncedpage: {
		champion: null,
		page: null,
		loading: false
	},

	plugins: {},

	updateready: false,

	lang: 'en',

	configfile: {
		name: "config.json",
		cwd: "[default path]"
	},

	championsinfo: {},

	lolversions: [],

	champselect: false,
	autochamp: false,

	tooltips: {
		rune: null
	},

	showchangelog: false
};

module.exports = new Freezer(state);