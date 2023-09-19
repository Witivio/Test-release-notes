module.exports = {
  	title: 'Documentation by Witivio',
  	description: "Witivio's documentation for any users who want to learn a bit about our product",

	head: [
    	['meta', { name: 'theme-color', content: '#3eaf7c' }],
	    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
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
                    { text: '📚 Documentation', link: '/documentation/overview/' },
					{ text: '🧑‍🎓 Academy', link: '/academy/overview/' },
					{ text: '🔒 Trust Center', link: 'https://trust.teams-pro.com/' },
                    { text: '🔋 Status', link: 'https://status.witivio.com' },
                    { text: 'Witivio', link: 'https://www.witivio.com' }
                ]
            }
        },
   		sidebar: {
   			"/documentation/": [
				{
					title: 'Documentation',
					collapsable: false,
					path: "/documentation/overview/",
					children: [
						['/documentation/overview.md', "Overview"],
						{
							title: 'Virtual Agent Studio',
							collapsable: true,
							path: "/documentation/virtual-agent-studio/overview/",
							children: [
								['/documentation/virtual-agent-studio/overview.md', "VAS - Overview"],
								['/documentation/virtual-agent-studio/get-started.md', "VAS - Get Started !"],
								['/documentation/virtual-agent-studio/fundamentals.md', "VAS - Fundamentals"],
								['/documentation/virtual-agent-studio/whats-new.md', "VAS - What’s new​"],
								['/documentation/virtual-agent-studio/tutorials.md', "VAS - Tutorials"],
								['/documentation/virtual-agent-studio/limits.md', "VAS - Limits"],
								['/documentation/virtual-agent-studio/changelog.md', "VAS - Change log​"],
							]
						},
						{
							title: 'Teams Pro',
							collapsable: true,
							path: "/documentation/teams-pro/overview/",
							children: [
								['/documentation/teams-pro/overview.md', "Teams Pro - Overview"],
								['/documentation/teams-pro/get-started.md', "Teams Pro - Get Started !"],
								['/documentation/teams-pro/fundamentals.md', "Teams Pro - Fundamentals"],
								['/documentation/teams-pro/whats-new.md', "Teams Pro - What’s new​"],
								['/documentation/teams-pro/tutorials.md', "Teams Pro - Tutorials"],
								['/documentation/teams-pro/limits.md', "Teams Pro - Limits"],
								['/documentation/teams-pro/changelog.md', "Teams Pro - Change log​"],
							]
						},
						{
							title: 'Meta Office Pro',
							collapsable: true,
							path: "/documentation/meta-office-pro/overview/",
							children: [
								['/documentation/meta-office-pro/overview.md', "MOP - Overview"],
								['/documentation/meta-office-pro/get-started.md', "MOP - Get Started !"],
								['/documentation/meta-office-pro/fundamentals.md', "MOP - Fundamentals"],
								['/documentation/meta-office-pro/whats-new.md', "MOP - What’s new​"],
								['/documentation/meta-office-pro/tutorials.md', "MOP - Tutorials"],
								['/documentation/meta-office-pro/limits.md', "MOP - Limits"],
								['/documentation/meta-office-pro/changelog.md', "MOP - Change log​"],
							]
						},
						{
							title: 'GPT Pro',
							collapsable: true,
							path: "/documentation/gpt-pro/overview/",
							children: [
								['/documentation/gpt-pro/overview.md', "GPT Pro - Overview"],
								['/documentation/gpt-pro/get-started.md', "GPT Pro - Get Started !"],
								['/documentation/gpt-pro/fundamentals.md', "GPT Pro - Fundamentals"],
								['/documentation/gpt-pro/whats-new.md', "GPT Pro - What’s new​"],
								['/documentation/gpt-pro/tutorials.md', "GPT Pro - Tutorials"],
								['/documentation/gpt-pro/limits.md', "GPT Pro - Limits"],
								['/documentation/gpt-pro/changelog.md', "GPT Pro - Change log​"],
							]
						}
					],
				},
   			]
   		}
  	},

	plugins: {
    	'@vuepress/plugin-back-to-top': true,
    	'@vuepress/plugin-medium-zoom': true,
		'@vuepress/active-header-links': true,
		'@vuepress/register-components': true
	}
}
