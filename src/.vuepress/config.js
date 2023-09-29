module.exports = {
  	title: 'Documentation',
  	description: "Witivio's documentation for any users who want to learn a bit about our product",

	head: [
    	['meta', { name: 'theme-color', content: '#3eaf7c' }],
	    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	],

	themeConfig: {
   		smoothScroll: true,
   		repo: '',
		logo: '/witivio.png',
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
                    { text: '📚 Documentation', link: '/documentation/apps/' },
					//{ text: '🧑‍🎓 Academy', link: '/academy/overview/' },
					{ text: '🔒 Trust Center', link: '/documentation/trust/center/' },
                    { text: '🔋 Status', link: 'https://status.witivio.com' },
                    { text: 'Witivio', link: 'https://www.witivio.com' },
					{ text: '🌎 Change language', link: '/documentation/translator/' },					
                ]
            }
        },
   		sidebar: {
   			"/documentation/": [
				{
					title: 'Documentation',
					collapsable: true,
					children: [
						['/documentation/apps/', "Overview"],
						{
							title: 'Virtual Agent Studio',
							collapsable: true,
							path: '/documentation/apps/virtual-agent-studio/chatbot/build_your_chatbot/',
							children: [
								{
									title: "Home",
									path: '/documentation/apps/virtual-agent-studio/chatbot/home/home',
									collapsable: true,
									children: [
									  	['/documentation/apps/virtual-agent-studio/chatbot/home/home.md', "Home"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/home/information.md', "Information"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/home/audit.md', "Audit"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/home/Catalog.md', "Teams Catalog"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/home/privacypolicies.md', "Privacy policies"],
									]
								},
								{
									title: 'Build your chatbot',
									path: '/documentation/apps/virtual-agent-studio/chatbot/build_your_chatbot',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/build_your_chatbot.md', 'Build your chatbot'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/build_your_chatbot/skype.md', 'Skype for Business Online prerequisites'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/build_your_chatbot/requisites.md', 'Teams prerequisites']
									]
								},
								{
									title: 'Inbox',
									path: '/documentation/apps/virtual-agent-studio/chatbot/inbox',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/inbox.md', 'Overview Inbox'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/inbox/unanswered_questions.md', 'Unanswered Questions'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/inbox/low_score.md', 'Low Score'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/inbox/suggested_questions.md', 'Suggested Questions'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/inbox/negative_feedbacks.md', 'Negative Feedbacks'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/inbox/scoring_rules.md', 'Scoring Rules'],
									]
								},
								{
									title: 'Dashboards',
									collapsable: true,
									path: '/documentation/apps/virtual-agent-studio/chatbot/dashboards',
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/dashboards.md', 'Overview Dashboard'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/dashboards/performance.md', 'Performance Dashboard'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/dashboards/usage.md', 'Usage Dashboard'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/dashboards/power_bi.md', 'Power Bi Dashboard'],
									]
								},
								{
									title: 'Knowledge',
									path: '/documentation/apps/virtual-agent-studio/chatbot/knowledge/creation_process',
									collapsable: true,
									sidebarDepth: 3,
									children: [
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/creation_process.md', 'Creation Process'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/messages.md', 'Messages'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/categories.md', 'Categories'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/kb.md', 'KB'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/learninggpt.md', 'GPT learning'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/entities.md', 'Entities'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/synonyms.md', 'Synonyms'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/test_plan.md', 'Test Plan'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/knowledge/configuration.md', 'Configuration'],
									]
								},
								{
									title: 'Tools',
									path: '/documentation/apps/virtual-agent-studio/chatbot/tools',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/tools.md', "Overview Tools"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/starting_flow.md', 'Starting Flow'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/escalation.md', 'Escalation'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/active_learning.md', 'Active Learning'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/feedback.md', 'Feedback'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/image_gallery.md', 'Image Gallery'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/recommendation.md', 'Recommendation'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/tools/history.md', 'History'],
									]
								},
								{
									title: 'Communication',
									path: '/documentation/apps/virtual-agent-studio/chatbot/communication',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/communication.md', "Overview Communication"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/communication/user_lists.md', 'User Lists'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/communication/campaign.md', 'Campaign'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/communication/survey.md', 'Survey'],
									]
								},
								{
									title: 'Profile',
									path: '/documentation/apps/virtual-agent-studio/chatbot/profile',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/profile.md', "Overview Profile"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/profile/api_profile.md', 'API Profile with SharedPoint and MS Flow'],
									]
								},
								{
									title: 'Settings',
									path: '/documentation/apps/virtual-agent-studio/chatbot/settings',
									collapsable: true,
									children: [
										['/documentation/apps/virtual-agent-studio/chatbot/settings.md', "Overview Settings"],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/privacy.md', 'Privacy policies'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/chatbot.md', 'Chatbot accessibility'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/multilingual.md', 'Languages'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/user_list.md', 'User List'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/channels.md', 'Channels'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/coach.md', 'Coach'],
									  	['/documentation/apps/virtual-agent-studio/chatbot/settings/settings.md', 'Settings'],
									]
								},
								{
									title: 'Licence Administrators',
									path: '/documentation/apps/virtual-agent-studio/chatbot/licence_administrators',
									collapsable: true,
									// children: [
									//   ['/documentation/apps/virtual-agent-studio/chatbot/licence_administrators.md', 'Licence administrators'],
									// ]
								},
								{
									title: 'Notification bar',
									path: '/documentation/apps/virtual-agent-studio/chatbot/notification_bar',
									collapsable: true,
									// children: [
									//   ['/documentation/apps/virtual-agent-studio/chatbot/notification_bar.md', 'Home'],
									// ]
								},
								{
									title: 'Limitations',
									path: '/documentation/apps/virtual-agent-studio/chatbot/limitations',
									collapsable: true,
									// children: [
									//   ['/documentation/apps/virtual-agent-studio/chatbot/limitations.md', 'Limitations'],
									// ]
								},
								{
									title: 'Teams Features',
									path: '/documentation/apps/virtual-agent-studio/chatbot/teams_features',
									collapsable: true,
									// children: [
									//   ['/documentation/apps/virtual-agent-studio/chatbot/teams_features.md', 'Teams Features'],
									// ]
								},
								{
									title: 'Webchat V1 (obsolete)',
									path: '/documentation/apps/virtual-agent-studio/chatbot/webchat_v1',
									collapsable: true,
									// children: [
									//   ['/documentation/apps/virtual-agent-studio/chatbot/webchat_v1.md', 'Webchat V1 (obsolete)'],
									// ]
								},
								{
									title: 'MetaBot',
									path: '/documentation/apps/virtual-agent-studio/chatbot/metabot_en',
									collapsable: true,
									// children: [
									//     ['/documentation/apps/virtual-agent-studio/chatbot/metabot_en.md', 'MetaBot'],
									// ]
								}
									
							]
						},
						{
							title: 'Meta Office Pro',
							collapsable: true,
							path: "/documentation/apps/meta-office-pro/overview/",
							children: [
								['/documentation/apps/meta-office-pro/overview.md', "Overview"],
								['/documentation/apps/meta-office-pro/get-started.md', "Get Started !"],
								['/documentation/apps/meta-office-pro/fundamentals.md', "Fundamentals"],
								['/documentation/apps/meta-office-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/meta-office-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/meta-office-pro/limits.md', "Limits"],
								['/documentation/apps/meta-office-pro/changelog.md', "Changelog​"],
							]
						},
						/*{
							title: 'GPT Pro',
							collapsable: true,
							path: "/documentation/apps/gpt-pro/overview/",
							children: [
								['/documentation/apps/gpt-pro/overview.md', "GPT Pro - Overview"],
								['/documentation/apps/gpt-pro/get-started.md', "GPT Pro - Get Started !"],
								['/documentation/apps/gpt-pro/fundamentals.md', "GPT Pro - Fundamentals"],
								['/documentation/apps/gpt-pro/whats-new.md', "GPT Pro - What’s new​"],
								['/documentation/apps/gpt-pro/tutorials.md', "GPT Pro - Tutorials"],
								['/documentation/apps/gpt-pro/limits.md', "GPT Pro - Limits"],
								['/documentation/apps/gpt-pro/changelog.md', "GPT Pro - Change log​"],
							]
						},*/
						{
							title: 'Booking Room Pro',
							collapsable: true,
							path: "/documentation/apps/booking-room-pro/overview/",
							children: [
								['/documentation/apps/booking-room-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md', "How to add Booking Room Pro to my team/channel in MS Teams ?"],
										['/documentation/apps/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md', "How to find the Booking Room Pro ID ?"],
										['/documentation/apps/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md', "How to install Booking Room Pro to my Microsoft Teams Application ?"],
										['/documentation/apps/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md', "Who is the creator/owner of the Booking Room Pro tab ?"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md', "How can I change the view and day of the week ?"],
										['/documentation/apps/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md', "How can I change the view and day of the week ?"],
										['/documentation/apps/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md', "How to change the permission to edit the events ?"],
										['/documentation/apps/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md', "Do all channel users need a Booking Room Pro license ?"],
										['/documentation/apps/booking-room-pro/pricing-and-licensing-booking-room-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/apps/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md', "What is the difference between Booking Room Pro Premium vs free model ?"],
										['/documentation/apps/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md', "How to print my planning for Booking Room Pro ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md', "How can I edit/modify an occurrence in recurrent event ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md', "How to create recurring events in Booking Room Pro ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md', "How to delete a recurrent event ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md', "How to delete an event ?"],
										['/documentation/apps/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md', "How to get the event info ?"],
										['/documentation/apps/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md', "How to use tags in Booking Room Pro ?"],
										['/documentation/apps/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md', "How to change the time zone ?"],
									]
								},
								['/documentation/apps/booking-room-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/booking-room-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/booking-room-pro/limits.md', "Limits"],
								['/documentation/apps/booking-room-pro/changelog.md', "Changelog​"],
							]
						},
						{
							title: 'Calendar Pro',
							collapsable: true,
							path: "/documentation/apps/calendar-pro/overview/",
							children: [
								['/documentation/apps/calendar-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/calendar-pro/getting-started-with-calendar-pro/how-can-i-change-the-name-of-the-calendar-pro-tab-.md', "How can I change the name of the Calendar Pro tab ?"],
										['/documentation/apps/calendar-pro/getting-started-with-calendar-pro/how-can-i-connect-my-calendar-pro-with-map-pro-.md', "How can I connect my Calendar Pro with Map Pro ?"],
										['/documentation/apps/calendar-pro/getting-started-with-calendar-pro/how-to-check-the-calendar-id-.md', "How to check the Calendar ID ?"],
										['/documentation/apps/calendar-pro/getting-started-with-calendar-pro/how-to-get-the-calendar-pro-version-.md', "How to get the Calendar Pro version ?"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/calendar-pro/calendar-pro-view/how-can-i-change-the-first-day-of-the-week-in-calendar-pro-.md', "How can I change the first day of the week in Calendar Pro ?"],
										['/documentation/apps/calendar-pro/calendar-pro-view/how-can-i-change-the-view-of-the-calendar-pro-to-day-week-monthly-.md', "How can I change the view of the Calendar Pro to day/week/monthly ?"],
										['/documentation/apps/calendar-pro/calendar-pro-view/i-want-calendar-pro-to-reflect-my-business-days-and-hours.md', "I want Calendar Pro to reflect my business days and hours"],
										['/documentation/apps/calendar-pro/calendar-pro-view/show-and-hide-weekends-and-the-number-of-the-week.md', "Show and hide weekends and the number of the week"],
										['/documentation/apps/calendar-pro/calendar-pro-view/view-customized-public-holidays-in-calendar-pro.md', "View customized public holidays in Calendar Pro"],
										['/documentation/apps/calendar-pro/permisssions-in-calendar-pro/can-guest-member-in-teams-be-a-user-of-the-calendar-pro-subscription-.md', "Can guest member in teams be a user of the Calendar Pro subscription ?"],
										['/documentation/apps/calendar-pro/permisssions-in-calendar-pro/how-to-change-the-permission-to-make-changes-to-calendar-pro-.md', "How to change the permission to make changes to Calendar Pro ?"],
										['/documentation/apps/calendar-pro/permisssions-in-calendar-pro/how-to-share-all-the-resources-as-a-licensed-user-with-other-non-licensed-users-.md', "How to share all the resources as a licensed user with other non-licensed users ?"],
										['/documentation/apps/calendar-pro/power-automate-connector-calendar-pro/how-to-synchronize-outlook-with-calendar-pro-.md', "How to synchronize Outlook with Calendar Pro ?"],
										['/documentation/apps/calendar-pro/power-automate-connector-calendar-pro/is-calendar-pro-integrated-with-power-bi-.md', "Is Calendar Pro integrated with Power BI ?"],
										['/documentation/apps/calendar-pro/pricing-calendar-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/apps/calendar-pro/pricing-calendar-pro/what-is-the-difference-between-calendar-pro-premium-vs-free-.md', "What is the difference between Calendar Pro Premium vs free ?"],
										['/documentation/apps/calendar-pro/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md', "How can I print my Calendar Pro ?"],
										['/documentation/apps/calendar-pro/printing-calendar-pro/i-can-t-see-the-print-option.md', "I can’t see the print option."],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-a-recurrent-event-.md', "How can I add a recurrent event ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-links-to-my-events-.md', "How can I add links to my events ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-delete-an-event-.md', "How can I delete an event ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-a-recurrent-events-.md', "How can I edit/modify a recurrent events ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-event-id-in-calendar-pro-.md', "How to see the Event ID in Calendar Pro ?"],
										['/documentation/apps/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro-.md', "How to see the series Id of a recurrent event series in Calendar Pro ?"],
										['/documentation/apps/calendar-pro/tags-in-calendar-pro/how-can-i-add-tags-to-my-events-.md', "How can I add tags to my events ?"],
										['/documentation/apps/calendar-pro/timezones-in-calendar-pro/how-can-i-change-the-time-zone-.md', "How can I change the time zone ?"],
										['/documentation/apps/calendar-pro/troubleshooting-in-calendar-pro/how-to-clean-the-microsoft-teams-cache-.md', "How to clean the Microsoft Teams cache ?"],
										['/documentation/apps/calendar-pro/troubleshooting-in-calendar-pro/i-accidentally-deleted-my-calendar,-or-somebody-deleted-it--how-can-i-restore-it-.md', "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it ?"],
									],
								},
								['/documentation/apps/calendar-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/calendar-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/calendar-pro/limits.md', "Limits"],
								['/documentation/apps/calendar-pro/changelog.md', "Changelog​"],
							]
						},
						{
							title: 'Contacts Pro',
							collapsable: true,
							path: "/documentation/apps/contacts-pro/overview/",
							children: [
								['/documentation/apps/contacts-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-contact-.md', "How can I add a new contact ?"],
										['/documentation/apps/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-group-.md', "How can I add a new group ?"],
										['/documentation/apps/contacts-pro/getting-started-with-contacts-pro/how-can-i-select-the-display-mode-.md', "How can I select the display mode ?"],
										['/documentation/apps/contacts-pro/getting-started-with-contacts-pro/how-to-get-the-contacts-pro-id-.md', "How to get the Contacts Pro id?"],
										['/documentation/apps/contacts-pro/getting-started-with-contacts-pro/how-to-install-contacts-pro-to-my-teams-application-.md', "How to install Contacts Pro to my Teams Application ?"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/contacts-pro/managing-contacts-in-contacts-pro/how-can-i-connect-with-the-contacts-.md', "How can I connect with the contacts ?"],
										['/documentation/apps/contacts-pro/managing-contacts-in-contacts-pro/how-to-assign-group-to-a-contact-.md', "How to assign group to a contact ?"],
										['/documentation/apps/contacts-pro/managing-contacts-in-contacts-pro/how-to-connect-contacts-pro-with-map-pro-.md', "How to connect Contacts Pro with Map Pro ?"],
										['/documentation/apps/contacts-pro/managing-contacts-in-contacts-pro/how-to-delete-a-contact-in-contacts-pro-.md', "How to delete a contact in Contacts Pro ?"],
										['/documentation/apps/contacts-pro/managing-contacts-in-contacts-pro/how-to-edit-a-contact-.md', "How to edit a contact ?"],
										['/documentation/apps/contacts-pro/transferring-contacts-through-contacts-pro/can-we-share-the-contacts-from-contacts-pro-through-outlook-.md', "Can we share the contacts from Contacts Pro through Outlook ?"],
										['/documentation/apps/contacts-pro/transferring-contacts-through-contacts-pro/how-to-export-contacts-.md', "How to export contacts ?"],
										['/documentation/apps/contacts-pro/transferring-contacts-through-contacts-pro/how-to-import-contacts-.md', "How to import contacts ?"],
										['/documentation/apps/contacts-pro/transferring-contacts-through-contacts-pro/how-to-share-contacts-through-contacts-pro-.md', "How to share contacts through Contacts Pro ?"],
									],
								},
								['/documentation/apps/contacts-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/contacts-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/contacts-pro/limits.md', "Limits"],
								['/documentation/apps/contacts-pro/changelog.md', "Changelog​"],
							]
						},
						/*{
							title: 'Distribution List Pro',
							collapsable: true,
							path: "/documentation/apps/distribution-list-pro/overview/",
							children: [
								['/documentation/apps/distribution-list-pro/overview.md', "Distribution List Pro - Overview"],
								['/documentation/apps/distribution-list-pro/get-started.md', "Distribution List Pro - Get Started !"],
								['/documentation/apps/distribution-list-pro/fundamentals.md', "Distribution List Pro - Fundamentals"],
								['/documentation/apps/distribution-list-pro/whats-new.md', "Distribution List Pro - What’s new​"],
								['/documentation/apps/distribution-list-pro/tutorials.md', "Distribution List Pro - Tutorials"],
								['/documentation/apps/distribution-list-pro/limits.md', "Distribution List Pro - Limits"],
								['/documentation/apps/distribution-list-pro/changelog.md', "Distribution List Pro - Change log​"],
								{
									title: 'Get to know your Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/apps/distribution-list-pro/get-to-know-your-distribution-lists-pro/how-can-i-be-a-part-of-the-distribution-list--where-can-i-add-a-distribution-list-.md', "How can I be a part of the Distribution List ? Where can I add a distribution list ?"],
										['/documentation/apps/distribution-list-pro/get-to-know-your-distribution-lists-pro/who-can-assign-the-distribution-list-.md', "Who can assign the Distribution list ?"],
									],
								},
								{
									title: 'Getting started with Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/apps/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-install-distribution-lists-pro-to-my-microsoft-teams-application-.md', "How to install Distribution Lists Pro to my Microsoft Teams Application ?"],
										['/documentation/apps/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-pin-distribution-lists-pro-at-the-navigation-panel-of-your-ms-teams-.md', "How to pin Distribution Lists Pro at the Navigation Panel of your MS Teams ?"],
										['/documentation/apps/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-synchronize-outlook-lists-to-distribution-lists-pro-.md', "How to synchronize Outlook lists to Distribution Lists Pro ?"],
									],
								},
								{
									title: 'Manage your Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/how-to-add-distribution-lists-to-my-distribution-lists-pro-.md', "How to add distribution lists to my Distribution Lists Pro ?"],
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/how-to-chat-with-a-person-.md', "How to chat with a person?"],
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/how-to-delete-a-distribution-list-from-distribution-lists-pro-.md', "How to delete a distribution list from Distribution Lists Pro ?"],
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/how-to-pin-a-distribution-list-in-distribution-lists-pro-.md', "How to pin a distribution list in Distribution Lists Pro ?"],
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/how-to-start-a-group-chat-.md', "How to start a group chat ?"],
										['/documentation/apps/distribution-list-pro/manage-your-distribution-lists-pro/where-can-i-search-for-a-distribution-list-in-distribution-lists-pro-.md', "Where can I search for a distribution list in Distribution Lists Pro ?"],
									],
								},
							]
						},*/
						{
							title: 'Gantt Chart Pro',
							collapsable: true,
							path: "/documentation/apps/gantt-chart-pro/overview/",
							children: [
								['/documentation/apps/gantt-chart-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/gantt-chart-pro/getting-started-with-gantt-chart-pro/how-to-set-up-gantt-chart-pro-.md', "How to Set Up Gantt Chart Pro ?"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/gantt-chart-pro/participants-gantt-chart-pro/how-to-add-or-remove-participants-from-gantt-chart-pro-.md', "How to Add or Remove Participants from Gantt Chart Pro?"],
										['/documentation/apps/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-all-channel-users-need-a-gantt-chart-pro-license-.md', "Do all channel users need a Gantt Chart Pro license ?"],
										['/documentation/apps/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/apps/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/what-s-the-difference-between-free-and-premium-gantt-chart-pro-.md', "What’s the difference between free and premium Gantt Chart Pro ?"],
									],
								},
								['/documentation/apps/gantt-chart-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/gantt-chart-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/gantt-chart-pro/limits.md', "Limits"],
								['/documentation/apps/gantt-chart-pro/changelog.md', "Changelog​"],
							]
						},
						{
							title: 'Home Pro',
							collapsable: true,
							path: "/documentation/apps/home-pro/overview/",
							children: [
								['/documentation/apps/home-pro/overview.md', "Overview"],
								['/documentation/apps/home-pro/get-started.md', "Get Started !"],
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-add-widget-to-the-home-pro-dashboard-.md', "How can I add Widget to the Home Pro Dashboard ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-configure-a-widget-.md', "How can I configure a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-hide-a-widget-.md', "How can I hide a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-navigate-through-a-widget-.md', "How can I navigate through a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-rename-a-widget-.md', "How can I Rename a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-reset-a-widget-.md', "How can I reset a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-can-i-resize-a-widget-.md', "How can I resize a widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-do-i-change-the-unique-id-in-the-widget-.md', "How do I change the Unique ID in the widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/how-many-widgets-can-i-add-.md', "How many widgets can I add ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/what-is-a-widget-.md', "What is a Widget ?"],
										['/documentation/apps/home-pro/get-to-know-your-widgets/where-can-i-get-the-settings-of-the-widgets-.md', "Where can I get the settings of the widgets ?"],
									],
								},
								['/documentation/apps/home-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/home-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/home-pro/limits.md', "Limits"],
								['/documentation/apps/home-pro/changelog.md', "Changelog​"],
								
							]
						},
						{
							title: 'KeePass Pro',
							collapsable: true,
							path: "/documentation/apps/keepass-pro/overview/",
							children: [
								['/documentation/apps/keepass-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/can-an-external-teams-user-have-access-to-keepass-pro-in-private-channel-.md', "Can an external Teams user have access to KeePass Pro in private channel ?"],
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-i-copy-password-.md', "How can I copy password ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-i-create-a-new-password-.md', "How can I create a new password ?"],
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-i-delete-a-password-.md', "How can I delete a password ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-i-modify-a-password-.md', "How can I modify a password ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-i-share-a-password-.md', "How can I share a password?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-can-we-generate-a-password-.md', "How can we generate a password ?"],
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-to-add-keepass-pro-to-a-channel-.md', "How to add KeePass Pro to a channel ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-to-pin-the-keepass-pro-to-navigation-bar-.md', "How to pin the KeePass Pro to navigation bar ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/how-to-set-up-a-keepass-pro-tab-.md', "How to pin the KeePass Pro to navigation bar ?"],	
										['/documentation/apps/keepass-pro/getting-started-with-keepass-pro/where-are-the-settings--how-can-we-change-it-.md', "Where are the settings ? How can we change it ?"],		
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/keepass-pro/import-and-export-keepass-pro-passwords/how-to-import-a-keepass-pro-.kdbx-file-into-a-new-keepass-pro-channel-tab-.md', "How to import a KeePass Pro .KDBX file into a new KeePass Pro channel tab ?"],
										['/documentation/apps/keepass-pro/master-password-keepass-pro/how-to-access-keepass-pro-master-password-.md', "How to access KeePass Pro master password ?"],
										['/documentation/apps/keepass-pro/recycle-bin-keepass-pro/how-can-i-retrieve-my-password-through-recycle-bin-.md', "How can I retrieve my password through Recycle Bin ?"],	
										['/documentation/apps/keepass-pro/recycle-bin-keepass-pro/what-is-the-time-frame-for-retrieving-a-password-from-the-recycle-bin-.md', "What is the time frame for retrieving a password from the Recycle Bin ?"],	
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/how-and-where-can-i-create-the-folders-on-the-vault-.md', "How and where can I create the folders on the vault ?"],
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/how-to-change-the-name-the-of-the-keepass-pro-s-vault-.md', "How to change the name the of the KeePass Pro’s vault ?"],
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/how-to-choose-vault-location-.md', "How to choose vault location ?"],
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/how-to-import-a-kdbx-file-in-keepass-pro-.md', "How to import a KDBX file in KeePass Pro ?"],
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/how-to-keep-a-keepass-pro-vault-private-.md', "How to keep a KeePass Pro Vault private ?"],
										['/documentation/apps/keepass-pro/vault-management-keepass-pro/what-is-a-keepass-pro-vault-.md', "What is a KeePass Pro vault ?"],
									],
								},
								['/documentation/apps/keepass-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/keepass-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/keepass-pro/limits.md', "Limits"],
								['/documentation/apps/keepass-pro/changelog.md', "Change log​"],
							]
						},
						{
							title: 'Map Pro',
							collapsable: true,
							path: "/documentation/apps/map-pro/overview/",
							children: [
								['/documentation/apps/map-pro/overview.md', "Overview"],
								{
									title: 'Getting started with Map Pro',
									collapsable: true,
									children: [
										['/documentation/apps/map-pro/getting-started-with-map-pro/how-can-i-switch-to-map-satellite-view-mode-.md', "How can I switch to Map/Satellite view mode ?"],
										['/documentation/apps/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-.md', "How to add Map Pro to my team ?"],
										['/documentation/apps/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-s-channel-.md', "How to add Map Pro to my team’s channel ?"],
										['/documentation/apps/map-pro/getting-started-with-map-pro/how-to-install-map-pro-to-my-teams-application-.md', "How to install Map Pro to my Teams Application ?"],
										['/documentation/apps/map-pro/getting-started-with-map-pro/how-to-set-up-a-tab-for-map-pro-.md', "How to set up a tab for Map Pro ?"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/map-pro/getting-to-know-your-map-pro/how-can-i-rename-the-map-pro-tab-.md', "How can I rename the Map Pro Tab ?"],
										['/documentation/apps/map-pro/getting-to-know-your-map-pro/how-to-copy-the-id-for-my-map-pro-.md', "How can I rename the Map Pro Tab ?"],
										['/documentation/apps/map-pro/getting-to-know-your-map-pro/how-to-find-the-id-(unique-identifier)-for-my-map-pro-.md', "How to find the ID (unique identifier) for my Map Pro ?"],
										['/documentation/apps/map-pro/getting-to-know-your-map-pro/how-to-find-the-version-of-my-map-pro-.md', "How to find the version of my Map Pro ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/connect-teamspro-apps-with-map-pro.md', "Connect TeamsPro apps with Map Pro"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-add-places-to-map-pro-.md', "How to add places to Map Pro ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-add-trips-to-map-pro-.md', "How to add trips to Map Pro ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-delete-the-place-added-.md', "How to delete the Place added ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-delete-the-trips-added-.md', "How to delete the Trips added ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-edit-the-place-added-.md', "How to edit the Place added ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/how-to-edit-the-trips-added-.md', "How to edit the Trips added ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/where-to-find-the-places-added-.md', "Where to find the Places added ?"],
										['/documentation/apps/map-pro/managing-your-map-pro/where-to-find-the-trips-added-.md', "Where to find the Trips added ?"],
									],
								},
								['/documentation/apps/map-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/map-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/map-pro/limits.md', "Limits"],
								['/documentation/apps/map-pro/changelog.md', "Changelog​"],
							]
						},
						{
							title: 'Parking Pro',
							collapsable: true,
							path: "/documentation/apps/parking-pro/overview/",
							children: [
								['/documentation/apps/parking-pro/overview.md', "Overview"],
								{
									title: 'Get started !',
									collapsable: true,
									children: [
										['/documentation/apps/parking-pro/getting-started-with-parking-pro/how-to-check-the-parking-pro-unique-identifier-(id)-.md', "How to check the Parking Pro Unique Identifier (ID) ?"],
										['/documentation/apps/parking-pro/getting-started-with-parking-pro/how-to-get-parking-pro-version-.md', "How to get Parking Pro version ?"],
										['/documentation/apps/parking-pro/getting-started-with-parking-pro/parking-pro-basic-set-up.md', "Parking Pro Basic Set Up"],
									],
								},
								{
									title: 'Fundamentals',
									collapsable: true,
									children: [
										['/documentation/apps/parking-pro/permissions-in-parking-pro/how-to-change-the-permission-to-make-changes-to-parking-pro-.md', "How to change the permission to make changes to Parking Pro ?"],
										['/documentation/apps/parking-pro/pricing-and-licensing-parking-pro/how-to-use-tags-to-manage-and-filter-parking-spaces-in-parking-pro-.md', "How to use tags to manage and filter parking spaces in Parking Pro ?"],
										['/documentation/apps/parking-pro/printing-parking-pro/how-can-i-print-parking-pro-reservation-schedule-.md', "How can I print Parking Pro reservation schedule ?"],
										['/documentation/apps/parking-pro/tags-in-parking-pro/how-to-use-tags-to-manage-and-filter-parking-spaces-in-parking-pro-.md', "How to use tags to manage and filter parking spaces in Parking Pro ?"],
										['/documentation/apps/parking-pro/timezone-in-parking-pro/how-can-i-change-parking-pro-time-zone-.md', "How can I change Parking Pro time zone ?"],
									],
								},
								['/documentation/apps/parking-pro/whats-new.md', "What’s new​"],
								['/documentation/apps/parking-pro/tutorials.md', "Tutorials"],
								['/documentation/apps/parking-pro/limits.md', "Limits"],
								['/documentation/apps/parking-pro/changelog.md', "Change log​"],
							]
						},
						
					],
				},
				{
					title: "Trust Center",
					collapsable: true,
					children: [
						["/documentation/trust/center/", "Overview"],
						['/documentation/trust/center/supported-clients/', "Supported Clients"],
						['/documentation/trust/center/authentication-single-sign-on/', "Authentication & Single Sign On"],
						['/documentation/trust/center/communication-network-security/', 'Communication & Network Security'],
						['/documentation/trust/center/infrastructure-services/', 'Infrastructure Services'],
						['/documentation/trust/center/microsoft-graph-permissions/', 'Microsoft Graph Permissions'],
						['/documentation/trust/center/data-management-practices/', 'Data Management Practices'],
						['/documentation/trust/center/secure-development/', 'Secure Development'],
						['/documentation/trust/center/privacy-and-compliance/', 'Privacy and Compliance'],
						['/documentation/trust/center/security-policy/', 'Security Policy'],
						['/documentation/trust/center/classification-labels/', 'Classification Labels']
					]

				},
				{
					title: "Architecture & Security",
					collapsable: true,
					children: [
						['/documentation/trust/architecture-security/overview/', 'Overview'],
						['/documentation/trust/architecture-security/bookingroom-pro/', 'BookingRoom Pro'],
						['/documentation/trust/architecture-security/calendar-pro/', 'Calendar Pro'],
						['/documentation/trust/architecture-security/parking-pro/', 'Parking Pro'],
						['/documentation/trust/architecture-security/company-communicator-pro/', 'Company Communicator Pro'],
						['/documentation/trust/architecture-security/contact-pro/', 'Contact Pro'],
						['/documentation/trust/architecture-security/distribution-list-pro/', 'Distribution List Pro'],
						['/documentation/trust/architecture-security/keepass-pro/', 'Keepass Pro'],
						['/documentation/trust/architecture-security/map-pro/', 'Map Pro'],
						['/documentation/trust/architecture-security/gantt-chart-pro/', 'Gantt Chart Pro'],
						['/documentation/trust/architecture-security/metaoffice-pro/', 'MetaOffice Pro']
					]

				}
			],
			
   		}
  	},

	plugins: {
    	'@vuepress/plugin-back-to-top': true,
    	'@vuepress/plugin-medium-zoom': true,
		'@vuepress/active-header-links': true,
		'@vuepress/register-components': true
	}
}
