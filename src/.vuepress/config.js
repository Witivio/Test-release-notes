const { description } = require('../../package')

module.exports = {
  	title: 'Documentation by Witivio',
  	description: description,

	head: [
    	['meta', { name: 'theme-color', content: '#3eaf7c' }],
	    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],

	themeConfig: {
   		smoothScroll: true,
   		repo: '',
   		editLinks: false,
   		docsDir: '',
   		editLinkText: '',
   		lastUpdated: false,
		locales: {
            '/': {
                lang: 'en',
                searchPlaceholder: 'search...',
                algolia: {},
                nav: [
                    { text: '📚 Documenation', link: '/documentation/overview/' },
					{ text: '🧑‍🎓 Academy', link: '/academy/' },
					{ text: '🔒 Trust Center', link: 'https://trust.teams-pro.com/' },
                    { text: '🔋 Status', link: 'https://status.witivio.com' },
                    { text: 'Witivio', link: 'https://www.witivio.com' }
                ]
            }
        },
   		sidebar: {
   			"/documentation/": [
   			{
   		      	title: 'Doumentation',
   		      	collapsable: true,
				path: "/documenation/overview",
				children: [
					['/documenation/overview', "Overview"],

				]
   		    }
   			],
   		}
  	},

	plugins: [
    	'@vuepress/plugin-back-to-top',
    	'@vuepress/plugin-medium-zoom',
	]
}
