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
								{
									title: 'Booking Rooom Pro',
									collapsable: true,
									path: "/documentation/teams-pro/booking-room-pro/overview/",
									children: [
										['/documentation/teams-pro/booking-room-pro/overview.md', "Booking Room Pro - Overview"],
										['/documentation/teams-pro/booking-room-pro/get-started.md', "Booking Room Pro - Get Started !"],
										['/documentation/teams-pro/booking-room-pro/fundamentals.md', "Booking Room Pro - Fundamentals"],
										['/documentation/teams-pro/booking-room-pro/whats-new.md', "Booking Room Pro - What’s new​"],
										['/documentation/teams-pro/booking-room-pro/tutorials.md', "Booking Room Pro - Tutorials"],
										['/documentation/teams-pro/booking-room-pro/limits.md', "Booking Room Pro - Limits"],
										['/documentation/teams-pro/booking-room-pro/changelog.md', "Booking Room Pro - Change log​"],
									]
								},
								{
									title: 'Calendar Pro',
									collapsable: true,
									path: "/documentation/teams-pro/calendar-pro/overview/",
									children: [
										['/documentation/teams-pro/calendar-pro/overview.md', "Calendar Pro - Overview"],
										['/documentation/teams-pro/calendar-pro/get-started.md', "Calendar Pro - Get Started !"],
										['/documentation/teams-pro/calendar-pro/fundamentals.md', "Calendar Pro - Fundamentals"],
										['/documentation/teams-pro/calendar-pro/whats-new.md', "Calendar Pro - What’s new​"],
										['/documentation/teams-pro/calendar-pro/tutorials.md', "Calendar Pro - Tutorials"],
										['/documentation/teams-pro/calendar-pro/limits.md', "Calendar Pro - Limits"],
										['/documentation/teams-pro/calendar-pro/changelog.md', "Calendar Pro - Change log​"],
									]
								},
								{
									title: 'Contacts Pro',
									collapsable: true,
									path: "/documentation/teams-pro/contacts-pro/overview/",
									children: [
										['/documentation/teams-pro/contacts-pro/overview.md', "Contacts Pro - Overview"],
										['/documentation/teams-pro/contacts-pro/get-started.md', "Contacts Pro - Get Started !"],
										['/documentation/teams-pro/contacts-pro/fundamentals.md', "Contacts Pro - Fundamentals"],
										['/documentation/teams-pro/contacts-pro/whats-new.md', "Contacts Pro - What’s new​"],
										['/documentation/teams-pro/contacts-pro/tutorials.md', "Contacts Pro - Tutorials"],
										['/documentation/teams-pro/contacts-pro/limits.md', "Contacts Pro - Limits"],
										['/documentation/teams-pro/contacts-pro/changelog.md', "Contacts Pro - Change log​"],
									]
								},
								{
									title: 'Distribution List Pro',
									collapsable: true,
									path: "/documentation/teams-pro/distribution-list-pro/overview/",
									children: [
										['/documentation/teams-pro/distribution-list-pro/overview.md', "Distribution List Pro - Overview"],
										['/documentation/teams-pro/distribution-list-pro/get-started.md', "Distribution List Pro - Get Started !"],
										['/documentation/teams-pro/distribution-list-pro/fundamentals.md', "Distribution List Pro - Fundamentals"],
										['/documentation/teams-pro/distribution-list-pro/whats-new.md', "Distribution List Pro - What’s new​"],
										['/documentation/teams-pro/distribution-list-pro/tutorials.md', "Distribution List Pro - Tutorials"],
										['/documentation/teams-pro/distribution-list-pro/limits.md', "Distribution List Pro - Limits"],
										['/documentation/teams-pro/distribution-list-pro/changelog.md', "Distribution List Pro - Change log​"],
									]
								},
								{
									title: 'Gantt Chart Pro',
									collapsable: true,
									path: "/documentation/teams-pro/gantt-chart-pro/overview/",
									children: [
										['/documentation/teams-pro/gantt-chart-pro/overview.md', "Gantt Chart Pro - Overview"],
										['/documentation/teams-pro/gantt-chart-pro/get-started.md', "Gantt Chart Pro - Get Started !"],
										['/documentation/teams-pro/gantt-chart-pro/fundamentals.md', "Gantt Chart Pro - Fundamentals"],
										['/documentation/teams-pro/gantt-chart-pro/whats-new.md', "Gantt Chart Pro - What’s new​"],
										['/documentation/teams-pro/gantt-chart-pro/tutorials.md', "Gantt Chart Pro - Tutorials"],
										['/documentation/teams-pro/gantt-chart-pro/limits.md', "Gantt Chart Pro - Limits"],
										['/documentation/teams-pro/gantt-chart-pro/changelog.md', "Gantt Chart Pro - Change log​"],
									]
								},
								{
									title: 'Home Pro',
									collapsable: true,
									path: "/documentation/teams-pro/home-pro/overview/",
									children: [
										['/documentation/teams-pro/home-pro/overview.md', "Home Pro - Overview"],
										['/documentation/teams-pro/home-pro/get-started.md', "Home Pro - Get Started !"],
										['/documentation/teams-pro/home-pro/fundamentals.md', "Home Pro - Fundamentals"],
										['/documentation/teams-pro/home-pro/whats-new.md', "Home Pro - What’s new​"],
										['/documentation/teams-pro/home-pro/tutorials.md', "Home Pro - Tutorials"],
										['/documentation/teams-pro/home-pro/limits.md', "Home Pro - Limits"],
										['/documentation/teams-pro/home-pro/changelog.md', "Home Pro - Change log​"],
									]
								},
								{
									title: 'KeePass Pro',
									collapsable: true,
									path: "/documentation/teams-pro/keepass-pro/overview/",
									children: [
										['/documentation/teams-pro/keepass-pro/overview.md', "KeePass Pro - Overview"],
										['/documentation/teams-pro/keepass-pro/get-started.md', "KeePass Pro - Get Started !"],
										['/documentation/teams-pro/keepass-pro/fundamentals.md', "KeePass Pro - Fundamentals"],
										['/documentation/teams-pro/keepass-pro/whats-new.md', "KeePass Pro - What’s new​"],
										['/documentation/teams-pro/keepass-pro/tutorials.md', "KeePass Pro - Tutorials"],
										['/documentation/teams-pro/keepass-pro/limits.md', "KeePass Pro - Limits"],
										['/documentation/teams-pro/keepass-pro/changelog.md', "KeePass Pro - Change log​"],
									]
								},
								{
									title: 'Map Pro',
									collapsable: true,
									path: "/documentation/teams-pro/map-pro/overview/",
									children: [
										['/documentation/teams-pro/map-pro/overview.md', "Map Pro - Overview"],
										['/documentation/teams-pro/map-pro/get-started.md', "Map Pro - Get Started !"],
										['/documentation/teams-pro/map-pro/fundamentals.md', "Map Pro - Fundamentals"],
										['/documentation/teams-pro/map-pro/whats-new.md', "Map Pro - What’s new​"],
										['/documentation/teams-pro/map-pro/tutorials.md', "Map Pro - Tutorials"],
										['/documentation/teams-pro/map-pro/limits.md', "Map Pro - Limits"],
										['/documentation/teams-pro/map-pro/changelog.md', "Map Pro - Change log​"],
									]
								},
								{
									title: 'Parking Pro',
									collapsable: true,
									path: "/documentation/teams-pro/parking-pro/overview/",
									children: [
										['/documentation/teams-pro/parking-pro/overview.md', "Parking Pro - Overview"],
										['/documentation/teams-pro/parking-pro/get-started.md', "Parking Pro - Get Started !"],
										['/documentation/teams-pro/parking-pro/fundamentals.md', "Parking Pro - Fundamentals"],
										['/documentation/teams-pro/parking-pro/whats-new.md', "Parking Pro - What’s new​"],
										['/documentation/teams-pro/parking-pro/tutorials.md', "Parking Pro - Tutorials"],
										['/documentation/teams-pro/parking-pro/limits.md', "Parking Pro - Limits"],
										['/documentation/teams-pro/parking-pro/changelog.md', "Parking Pro - Change log​"],
									]
								},
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
