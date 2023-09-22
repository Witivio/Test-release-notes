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
					collapsable: true,
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
						},
						{
							title: 'Booking Room Pro',
							collapsable: true,
							path: "/documentation/booking-room-pro/overview/",
							children: [
								['/documentation/booking-room-pro/overview.md', "Booking Room Pro - Overview"],
								['/documentation/booking-room-pro/get-started.md', "Booking Room Pro - Get Started !"],
								['/documentation/booking-room-pro/fundamentals.md', "Booking Room Pro - Fundamentals"],
								['/documentation/booking-room-pro/whats-new.md', "Booking Room Pro - What’s new​"],
								['/documentation/booking-room-pro/tutorials.md', "Booking Room Pro - Tutorials"],
								['/documentation/booking-room-pro/limits.md', "Booking Room Pro - Limits"],
								['/documentation/booking-room-pro/changelog.md', "Booking Room Pro - Change log​"],
								{
									title: 'Booking Room Pro View Options',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md', "How can I change the view and day of the week ?"],
									]
								},
								{
									title: 'Getting started with Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md', "How to add Booking Room Pro to my team/channel in MS Teams ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md', "How to find the Booking Room Pro ID ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md', "How to install Booking Room Pro to my Microsoft Teams Application ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md', "Who is the creator/owner of the Booking Room Pro tab ?"],
									],
								},
								{
									title: 'Permissions in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md', "How to change the permission to edit the events ?"],
									],
								},
								{
									title: 'Pricing and Licensing Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md', "Do all channel users need a Booking Room Pro license ?"],
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md', "What is the difference between Booking Room Pro Premium vs free model ?"],
									],
								},
								{
									title: 'Printing Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md', "How to print my planning for Booking Room Pro ?"],
									],
								},
								{
									title: 'Single and Recurrent bookings in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md', "How can I edit/modify an occurrence in recurrent event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md', "How to create recurring events in Booking Room Pro ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md', "How to delete a recurrent event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md', "How to delete an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md', "How to get the event info ?"]
									],
								},
								{
									title: 'Tags in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md', "How to use tags in Booking Room Pro ?"],
									],
								},
								{
									title: 'Time zones in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md', "How to change the time zone ?"],
									],
								},
							]
						},
						{
							title: 'Calendar Pro',
							collapsable: true,
							path: "/documentation/calendar-pro/overview/",
							children: [
								['/documentation/calendar-pro/overview.md', "Calendar Pro - Overview"],
								['/documentation/calendar-pro/get-started.md', "Calendar Pro - Get Started !"],
								['/documentation/calendar-pro/fundamentals.md', "Calendar Pro - Fundamentals"],
								['/documentation/calendar-pro/whats-new.md', "Calendar Pro - What’s new​"],
								['/documentation/calendar-pro/tutorials.md', "Calendar Pro - Tutorials"],
								['/documentation/calendar-pro/limits.md', "Calendar Pro - Limits"],
								['/documentation/calendar-pro/changelog.md', "Calendar Pro - Change log​"],
								{
									title: 'Calendar Pro view',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/calendar-pro-view/how-can-i-change-the-first-day-of-the-week-in-calendar-pro-.md', "How can I change the first day of the week in Calendar Pro ?"],
										['/documentation/calendar-pro/calendar-pro-view/how-can-i-change-the-view-of-the-calendar-pro-to-day-week-monthly-.md', "How can I change the view of the Calendar Pro to day/week/monthly ?"],
										['/documentation/calendar-pro/calendar-pro-view/i-want-calendar-pro-to-reflect-my-business-days-and-hours.md', "I want Calendar Pro to reflect my business days and hours"],
										['/documentation/calendar-pro/calendar-pro-view/show-and-hide-weekends-and-the-number-of-the-week.md', "Show and hide weekends and the number of the week"],
										['/documentation/calendar-pro/calendar-pro-view/view-customized-public-holidays-in-calendar-pro.md', "View customized public holidays in Calendar Pro"],
									],
								},
								{
									title: 'Getting started with Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/getting-started-with-calendar-pro/how-can-i-change-the-first-day-of-the-week-in-calendar-pro-.md', "How can I change the first day of the week in Calendar Pro ?"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/how-can-i-change-the-view-of-the-calendar-pro-to-day-week-monthly-.md', "How can I change the view of the Calendar Pro to day/week/monthly ?"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/i-want-calendar-pro-to-reflect-my-business-days-and-hours.md', "I want Calendar Pro to reflect my business days and hours"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/show-and-hide-weekends-and-the-number-of-the-week.md', "Show and hide weekends and the number of the week"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/view-customized-public-holidays-in-calendar-pro.md', "View customized public holidays in Calendar Pro"],
									],
								},
								{
									title: 'Permissions in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/permisssions-in-calendar-pro/can-guest-member-in-teams-be-a-user-of-the-calendar-pro-subscription-.md', "Can guest member in teams be a user of the Calendar Pro subscription ?"],
										['/documentation/calendar-pro/permisssions-in-calendar-pro/how-to-change-the-permission-to-make-changes-to-calendar-pro-.md', "How to change the permission to make changes to Calendar Pro ?"],
										['/documentation/calendar-pro/permisssions-in-calendar-pro/how-to-share-all-the-resources-as-a-licensed-user-with-other-non-licensed-users-.md', "How to share all the resources as a licensed user with other non-licensed users ?"],
									],
								},
								{
									title: 'Power automate connector Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/power-automate-connector-calendar-pro/how-to-synchronize-outlook-with-calendar-pro-.md', "How to synchronize Outlook with Calendar Pro ?"],
										['/documentation/calendar-pro/power-automate-connector-calendar-pro/is-calendar-pro-integrated-with-power-bi-.md', "Is Calendar Pro integrated with Power BI ?"],
									],
								},
								{
									title: 'Pricing Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/pricing-calendar-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/calendar-pro/pricing-calendar-pro/what-is-the-difference-between-calendar-pro-premium-vs-free-.md', "What is the difference between Calendar Pro Premium vs free ?"],
									],
								},
								{
									title: 'Printing Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md', "How can I print my Calendar Pro ?"],
										['/documentation/calendar-pro/printing-calendar-pro/i-can’t-see-the-print-option..md', "I can’t see the print option."],
									],
								},
								{
									title: 'Single and Recurrent events in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-a-recurrent-event-.md', "How can I add a recurrent event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-links-to-my-events-.md', "How can I add links to my events ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-delete-an-event-.md', "How can I delete an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-a-recurrent-events-.md', "How can I edit/modify a recurrent events ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-event-id-in-calendar-pro-.md', "How to see the Event ID in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro-.md', "How to see the series Id of a recurrent event series in Calendar Pro ?"],
									],
								},
								{
									title: 'Tags in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/tags-in-calendar-pro/how-can-i-add-tags-to-my-events-.md', "How can I add tags to my events ?"],
									],
								},
								{
									title: 'Timezones in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/timezones-in-calendar-pro/how-can-i-change-the-time-zone-.md', "How can I change the time zone ?"],
									],
								},
								{
									title: 'Troubleshooting in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/troubleshooting-in-calendar-pro/how-to-clean-the-microsoft-teams-cache-.md', "How to clean the Microsoft Teams cache ?"],
										['/documentation/calendar-pro/troubleshooting-in-calendar-pro/i-accidentally-deleted-my-calendar,-or-somebody-deleted-it--how-can-i-restore-it-.md', "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it ?"],
									],
								},
							]
						},
						{
							title: 'Contacts Pro',
							collapsable: true,
							path: "/documentation/contacts-pro/overview/",
							children: [
								['/documentation/contacts-pro/overview.md', "Contacts Pro - Overview"],
								['/documentation/contacts-pro/get-started.md', "Contacts Pro - Get Started !"],
								['/documentation/contacts-pro/fundamentals.md', "Contacts Pro - Fundamentals"],
								['/documentation/contacts-pro/whats-new.md', "Contacts Pro - What’s new​"],
								['/documentation/contacts-pro/tutorials.md', "Contacts Pro - Tutorials"],
								['/documentation/contacts-pro/limits.md', "Contacts Pro - Limits"],
								['/documentation/contacts-pro/changelog.md', "Contacts Pro - Change log​"],
								{
									title: 'Getting started with Contacts Pro',
									collapsable: true,
									children: [
										['/documentation/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-contact-.md', "How can I add a new contact ?"],
										['/documentation/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-group-.md', "How can I add a new group ?"],
										['/documentation/contacts-pro/getting-started-with-contacts-pro/how-can-i-select-the-display-mode-.md', "How can I select the display mode ?"],
										['/documentation/contacts-pro/getting-started-with-contacts-pro/how-to-get-the-contacts-pro-id-.md', "How to get the Contacts Pro id?"],
										['/documentation/contacts-pro/getting-started-with-contacts-pro/how-to-install-contacts-pro-to-my-teams-application-.md', "How to install Contacts Pro to my Teams Application ?"],
									],
								},
								{
									title: 'Managing contacts in Contacts Pro',
									collapsable: true,
									children: [
										['/documentation/contacts-pro/managing-contacts-in-contacts-pro/how-can-i-connect-with-the-contacts-.md', "How can I connect with the contacts ?"],
										['/documentation/contacts-pro/managing-contacts-in-contacts-pro/how-to-assign-group-to-a-contact-.md', "How to assign group to a contact ?"],
										['/documentation/contacts-pro/managing-contacts-in-contacts-pro/how-to-connect-contacts-pro-with-map-pro-.md', "How to connect Contacts Pro with Map Pro ?"],
										['/documentation/contacts-pro/managing-contacts-in-contacts-pro/how-to-delete-a-contact-in-contacts-pro-.md', "How to delete a contact in Contacts Pro ?"],
										['/documentation/contacts-pro/managing-contacts-in-contacts-pro/how-to-edit-a-contact-.md', "How to edit a contact ?"],
									],
								},
								{
									title: 'Transferring contacts through Contacts Pro',
									collapsable: true,
									children: [
										['/documentation/contacts-pro/transferring-contacts-through-contacts-pro/can-we-share-the-contacts-from-contacts-pro-through-outlook-.md', "Can we share the contacts from Contacts Pro through Outlook ?"],
										['/documentation/contacts-pro/transferring-contacts-through-contacts-pro/how-to-export-contacts-.md', "How to export contacts ?"],
										['/documentation/contacts-pro/transferring-contacts-through-contacts-pro/how-to-import-contacts-.md', "How to import contacts ?"],
										['/documentation/contacts-pro/transferring-contacts-through-contacts-pro/how-to-share-contacts-through-contacts-pro-.md', "How to share contacts through Contacts Pro ?"],
									],
								},
							]
						},
						{
							title: 'Distribution List Pro',
							collapsable: true,
							path: "/documentation/distribution-list-pro/overview/",
							children: [
								['/documentation/distribution-list-pro/overview.md', "Distribution List Pro - Overview"],
								['/documentation/distribution-list-pro/get-started.md', "Distribution List Pro - Get Started !"],
								['/documentation/distribution-list-pro/fundamentals.md', "Distribution List Pro - Fundamentals"],
								['/documentation/distribution-list-pro/whats-new.md', "Distribution List Pro - What’s new​"],
								['/documentation/distribution-list-pro/tutorials.md', "Distribution List Pro - Tutorials"],
								['/documentation/distribution-list-pro/limits.md', "Distribution List Pro - Limits"],
								['/documentation/distribution-list-pro/changelog.md', "Distribution List Pro - Change log​"],
								{
									title: 'Get to know your Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/distribution-list-pro/get-to-know-your-distribution-lists-pro/how-can-i-be-a-part-of-the-distribution-list--where-can-i-add-a-distribution-list-.md', "How can I be a part of the Distribution List ? Where can I add a distribution list ?"],
										['/documentation/distribution-list-pro/get-to-know-your-distribution-lists-pro/who-can-assign-the-distribution-list-.md', "Who can assign the Distribution list ?"],
									],
								},
								{
									title: 'Getting started with Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-install-distribution-lists-pro-to-my-microsoft-teams-application-.md', "How to install Distribution Lists Pro to my Microsoft Teams Application ?"],
										['/documentation/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-pin-distribution-lists-pro-at-the-navigation-panel-of-your-ms-teams-.md', "How to pin Distribution Lists Pro at the Navigation Panel of your MS Teams ?"],
										['/documentation/distribution-list-pro/getting-started-with-distribution-lists-pro/how-to-synchronize-outlook-lists-to-distribution-lists-pro-.md', "How to synchronize Outlook lists to Distribution Lists Pro ?"],
									],
								},
								{
									title: 'Manage your Ditribution List Pro',
									collapsable: true,
									children: [
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/how-to-add-distribution-lists-to-my-distribution-lists-pro-.md', "How to add distribution lists to my Distribution Lists Pro ?"],
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/how-to-chat-with-a-person-.md', "How to chat with a person?"],
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/how-to-delete-a-distribution-list-from-distribution-lists-pro-.md', "How to delete a distribution list from Distribution Lists Pro ?"],
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/how-to-pin-a-distribution-list-in-distribution-lists-pro-.md', "How to pin a distribution list in Distribution Lists Pro ?"],
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/how-to-start-a-group-chat-.md', "How to start a group chat ?"],
										['/documentation/distribution-list-pro/manage-your-distribution-lists-pro/where-can-i-search-for-a-distribution-list-in-distribution-lists-pro-.md', "Where can I search for a distribution list in Distribution Lists Pro ?"],
									],
								},
							]
						},
						{
							title: 'Gantt Chart Pro',
							collapsable: true,
							path: "/documentation/gantt-chart-pro/overview/",
							children: [
								['/documentation/gantt-chart-pro/overview.md', "Gantt Chart Pro - Overview"],
								['/documentation/gantt-chart-pro/get-started.md', "Gantt Chart Pro - Get Started !"],
								['/documentation/gantt-chart-pro/fundamentals.md', "Gantt Chart Pro - Fundamentals"],
								['/documentation/gantt-chart-pro/whats-new.md', "Gantt Chart Pro - What’s new​"],
								['/documentation/gantt-chart-pro/tutorials.md', "Gantt Chart Pro - Tutorials"],
								['/documentation/gantt-chart-pro/limits.md', "Gantt Chart Pro - Limits"],
								['/documentation/gantt-chart-pro/changelog.md', "Gantt Chart Pro - Change log​"],
								{
									title: 'Getting started with Gantt Chart Pro',
									collapsable: true,
									children: [
										['/documentation/gantt-chart-pro/getting-started-with-gantt-chart-pro/how-to-set-up-gantt-chart-pro-.md', "How to Set Up Gantt Chart Pro ?"],
									],
								},
								{
									title: 'Participants Gantt Chart Pro',
									collapsable: true,
									children: [
										['/documentation/gantt-chart-pro/participants-gantt-chart-pro/how-to-add-or-remove-participants-from-gantt-chart-pro-.md', "How to Add or Remove Participants from Gantt Chart Pro?"],
									],
								},
								{
									title: 'Pricing and Licensing Gantt of Chart Pro',
									collapsable: true,
									children: [
										['/documentation/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-all-channel-users-need-a-gantt-chart-pro-license-.md', "Do all channel users need a Gantt Chart Pro license ?"],
										['/documentation/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/what’s-the-difference-between-free-and-premium-gantt-chart-pro-.md', "What’s the difference between free and premium Gantt Chart Pro ?"],
									],
								},
							]
						},
						{
							title: 'Home Pro',
							collapsable: true,
							path: "/documentation/home-pro/overview/",
							children: [
								['/documentation/home-pro/overview.md', "Home Pro - Overview"],
								['/documentation/home-pro/get-started.md', "Home Pro - Get Started !"],
								['/documentation/home-pro/fundamentals.md', "Home Pro - Fundamentals"],
								['/documentation/home-pro/whats-new.md', "Home Pro - What’s new​"],
								['/documentation/home-pro/tutorials.md', "Home Pro - Tutorials"],
								['/documentation/home-pro/limits.md', "Home Pro - Limits"],
								['/documentation/home-pro/changelog.md', "Home Pro - Change log​"],
								{
									title: 'Get to know your widgets',
									collapsable: true,
									children: [
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-add-widget-to-the-home-pro-dashboard-.md', "How can I add Widget to the Home Pro Dashboard ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-configure-a-widget-.md', "How can I configure a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-hide-a-widget-.md', "How can I hide a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-navigate-through-a-widget-.md', "How can I navigate through a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-rename-a-widget-.md', "How can I Rename a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-reset-a-widget-.md', "How can I reset a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-can-i-resize-a-widget-.md', "How can I resize a widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-do-i-change-the-unique-id-in-the-widget-.md', "How do I change the Unique ID in the widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/how-many-widgets-can-i-add-.md', "How many widgets can I add ?"],
										['/documentation/home-pro/get-to-know-your-widgets/what-is-a-widget-.md', "What is a Widget ?"],
										['/documentation/home-pro/get-to-know-your-widgets/where-can-i-get-the-settings-of-the-widgets-.md', "Where can I get the settings of the widgets ?"],
									],
								},
							]
						},
						{
							title: 'KeePass Pro',
							collapsable: true,
							path: "/documentation/keepass-pro/overview/",
							children: [
								['/documentation/keepass-pro/overview.md', "KeePass Pro - Overview"],
								['/documentation/keepass-pro/get-started.md', "KeePass Pro - Get Started !"],
								['/documentation/keepass-pro/fundamentals.md', "KeePass Pro - Fundamentals"],
								['/documentation/keepass-pro/whats-new.md', "KeePass Pro - What’s new​"],
								['/documentation/keepass-pro/tutorials.md', "KeePass Pro - Tutorials"],
								['/documentation/keepass-pro/limits.md', "KeePass Pro - Limits"],
								['/documentation/keepass-pro/changelog.md', "KeePass Pro - Change log​"],
								{
									title: 'Getting started with KeePass Pro',
									collapsable: true,
									children: [
										['/documentation/keepass-pro/getting-started-with-keepass-pro/can-an-external-teams-user-have-access-to-keepass-pro-in-private-channel-.md', "Can an external Teams user have access to KeePass Pro in private channel ?"],
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-i-copy-password-.md', "How can I copy password ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-i-create-a-new-password-.md', "How can I create a new password ?"],
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-i-delete-a-password-.md', "How can I delete a password ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-i-modify-a-password-.md', "How can I modify a password ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-i-share-a-password-.md', "How can I share a password?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-can-we-generate-a-password-.md', "How can we generate a password ?"],
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-to-add-keepass-pro-to-a-channel-.md', "How to add KeePass Pro to a channel ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-to-pin-the-keepass-pro-to-navigation-bar-.md', "How to pin the KeePass Pro to navigation bar ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/how-to-set-up-a-keepass-pro-tab-.md', "How to pin the KeePass Pro to navigation bar ?"],	
										['/documentation/keepass-pro/getting-started-with-keepass-pro/where-are-the-settings--how-can-we-change-it-.md', "Where are the settings ? How can we change it ?"],		
									],
								},
							]
						},
						{
							title: 'Map Pro',
							collapsable: true,
							path: "/documentation/map-pro/overview/",
							children: [
								['/documentation/map-pro/overview.md', "Map Pro - Overview"],
								['/documentation/map-pro/get-started.md', "Map Pro - Get Started !"],
								['/documentation/map-pro/fundamentals.md', "Map Pro - Fundamentals"],
								['/documentation/map-pro/whats-new.md', "Map Pro - What’s new​"],
								['/documentation/map-pro/tutorials.md', "Map Pro - Tutorials"],
								['/documentation/map-pro/limits.md', "Map Pro - Limits"],
								['/documentation/map-pro/changelog.md', "Map Pro - Change log​"],
							]
						},
						{
							title: 'Parking Pro',
							collapsable: true,
							path: "/documentation/parking-pro/overview/",
							children: [
								['/documentation/parking-pro/overview.md', "Parking Pro - Overview"],
								['/documentation/parking-pro/get-started.md', "Parking Pro - Get Started !"],
								['/documentation/parking-pro/fundamentals.md', "Parking Pro - Fundamentals"],
								['/documentation/parking-pro/whats-new.md', "Parking Pro - What’s new​"],
								['/documentation/parking-pro/tutorials.md', "Parking Pro - Tutorials"],
								['/documentation/parking-pro/limits.md', "Parking Pro - Limits"],
								['/documentation/parking-pro/changelog.md', "Parking Pro - Change log​"],
							]
						},
						
					],
				},
				{
					title: "Trust Center",
					collapsable: true,
					children: [
						["/trust/center/overview/", "Overview"],
						['/trust/center/supported-clients/', "Supported Clients"],
						['/trust/center/authentication-single-sign-on/', "Authentication & Single Sign On"],
						['/trust/center/communication-network-security/', 'Communication & Network Security'],
						['/trust/center/infrastructure-services/', 'Infrastructure Services'],
						['/trust/center/microsoft-graph-permissions/', 'Microsoft Graph Permissions'],
						['/trust/center/data-management-practices/', 'Data Management Practices'],
						['/trust/center/secure-development/', 'Secure Development'],
						['/trust/center/privacy-and-compliance/', 'Privacy and Compliance'],
						['/trust/center/security-policy/', 'Security Policy'],
						['/trust/center/classification-labels/', 'Classification Labels']
					]

				},
				{
					title: "Architecture & Security",
					collapsable: true,
					children: [
						['/trust/architecture-security/overview/', 'Overview'],
						['/trust/architecture-security/bookingroom-pro/', 'BookingRoom Pro'],
						['/trust/architecture-security/calendar-pro/', 'Calendar Pro'],
						['/trust/architecture-security/parking-pro/', 'Parking Pro'],
						['/trust/architecture-security/company-communicator-pro/', 'Company Communicator Pro'],
						['/trust/architecture-security/contact-pro/', 'Contact Pro'],
						['/trust/architecture-security/distribution-list-pro/', 'Distribution List Pro'],
						['/trust/architecture-security/keepass-pro/', 'Keepass Pro'],
						['/trust/architecture-security/map-pro/', 'Map Pro'],
						['/trust/architecture-security/gantt-chart-pro/', 'Gantt Chart Pro'],
						['/trust/architecture-security/metaoffice-pro/', 'MetaOffice Pro']
					]

				}
			],
			"/trust/": [
				{
					title: 'Documentation',
					collapsable: true,
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
						},
						{
							title: 'Booking Room Pro',
							collapsable: true,
							path: "/documentation/booking-room-pro/overview/",
							children: [
								['/documentation/booking-room-pro/overview.md', "Booking Room Pro - Overview"],
								['/documentation/booking-room-pro/get-started.md', "Booking Room Pro - Get Started !"],
								['/documentation/booking-room-pro/fundamentals.md', "Booking Room Pro - Fundamentals"],
								['/documentation/booking-room-pro/whats-new.md', "Booking Room Pro - What’s new​"],
								['/documentation/booking-room-pro/tutorials.md', "Booking Room Pro - Tutorials"],
								['/documentation/booking-room-pro/limits.md', "Booking Room Pro - Limits"],
								['/documentation/booking-room-pro/changelog.md', "Booking Room Pro - Change log​"],
								{
									title: 'Booking Room Pro View Options',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md', "How can I change the view and day of the week ?"],
									]
								},
								{
									title: 'Getting started with Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md', "How to add Booking Room Pro to my team/channel in MS Teams ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md', "How to find the Booking Room Pro ID ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md', "How to install Booking Room Pro to my Microsoft Teams Application ?"],
										['/documentation/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md', "Who is the creator/owner of the Booking Room Pro tab ?"],
									],
								},
								{
									title: 'Permissions in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md', "How to change the permission to edit the events ?"],
									],
								},
								{
									title: 'Pricing and Licensing Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md', "Do all channel users need a Booking Room Pro license ?"],
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md', "What is the difference between Booking Room Pro Premium vs free model ?"],
									],
								},
								{
									title: 'Printing Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md', "How to print my planning for Booking Room Pro ?"],
									],
								},
								{
									title: 'Single and Recurrent bookings in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md', "How can I edit/modify an occurrence in recurrent event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md', "How to create recurring events in Booking Room Pro ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md', "How to delete a recurrent event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md', "How to delete an event ?"],
										['/documentation/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md', "How to get the event info ?"]
									],
								},
								{
									title: 'Tags in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md', "How to use tags in Booking Room Pro ?"],
									],
								},
								{
									title: 'Time zones in Booking Room Pro',
									collapsable: true,
									children: [
										['/documentation/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md', "How to change the time zone ?"],
									],
								},
							]
						},
						{
							title: 'Calendar Pro',
							collapsable: true,
							path: "/documentation/calendar-pro/overview/",
							children: [
								['/documentation/calendar-pro/overview.md', "Calendar Pro - Overview"],
								['/documentation/calendar-pro/get-started.md', "Calendar Pro - Get Started !"],
								['/documentation/calendar-pro/fundamentals.md', "Calendar Pro - Fundamentals"],
								['/documentation/calendar-pro/whats-new.md', "Calendar Pro - What’s new​"],
								['/documentation/calendar-pro/tutorials.md', "Calendar Pro - Tutorials"],
								['/documentation/calendar-pro/limits.md', "Calendar Pro - Limits"],
								['/documentation/calendar-pro/changelog.md', "Calendar Pro - Change log​"],
								{
									title: 'Calendar Pro view',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/calendar-pro-view/how-can-i-change-the-first-day-of-the-week-in-calendar-pro-.md', "How can I change the first day of the week in Calendar Pro ?"],
										['/documentation/calendar-pro/calendar-pro-view/how-can-i-change-the-view-of-the-calendar-pro-to-day-week-monthly-.md', "How can I change the view of the Calendar Pro to day/week/monthly ?"],
										['/documentation/calendar-pro/calendar-pro-view/i-want-calendar-pro-to-reflect-my-business-days-and-hours.md', "I want Calendar Pro to reflect my business days and hours"],
										['/documentation/calendar-pro/calendar-pro-view/show-and-hide-weekends-and-the-number-of-the-week.md', "Show and hide weekends and the number of the week"],
										['/documentation/calendar-pro/calendar-pro-view/view-customized-public-holidays-in-calendar-pro.md', "View customized public holidays in Calendar Pro"],
									],
								},
								{
									title: 'Getting started with Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/getting-started-with-calendar-pro/how-can-i-change-the-first-day-of-the-week-in-calendar-pro-.md', "How can I change the first day of the week in Calendar Pro ?"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/how-can-i-change-the-view-of-the-calendar-pro-to-day-week-monthly-.md', "How can I change the view of the Calendar Pro to day/week/monthly ?"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/i-want-calendar-pro-to-reflect-my-business-days-and-hours.md', "I want Calendar Pro to reflect my business days and hours"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/show-and-hide-weekends-and-the-number-of-the-week.md', "Show and hide weekends and the number of the week"],
										['/documentation/calendar-pro/getting-started-with-calendar-pro/view-customized-public-holidays-in-calendar-pro.md', "View customized public holidays in Calendar Pro"],
									],
								},
								{
									title: 'Permissions in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/permisssions-in-calendar-pro/can-guest-member-in-teams-be-a-user-of-the-calendar-pro-subscription-.md', "Can guest member in teams be a user of the Calendar Pro subscription ?"],
										['/documentation/calendar-pro/permisssions-in-calendar-pro/how-to-change-the-permission-to-make-changes-to-calendar-pro-.md', "How to change the permission to make changes to Calendar Pro ?"],
										['/documentation/calendar-pro/permisssions-in-calendar-pro/how-to-share-all-the-resources-as-a-licensed-user-with-other-non-licensed-users-.md', "How to share all the resources as a licensed user with other non-licensed users ?"],
									],
								},
								{
									title: 'Power automate connector Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/power-automate-connector-calendar-pro/how-to-synchronize-outlook-with-calendar-pro-.md', "How to synchronize Outlook with Calendar Pro ?"],
										['/documentation/calendar-pro/power-automate-connector-calendar-pro/is-calendar-pro-integrated-with-power-bi-.md', "Is Calendar Pro integrated with Power BI ?"],
									],
								},
								{
									title: 'Pricing Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/pricing-calendar-pro/do-you-offer-educational-or-nonprofit-plans-.md', "Do you offer educational or nonprofit plans ?"],
										['/documentation/calendar-pro/pricing-calendar-pro/what-is-the-difference-between-calendar-pro-premium-vs-free-.md', "What is the difference between Calendar Pro Premium vs free ?"],
									],
								},
								{
									title: 'Printing Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md', "How can I print my Calendar Pro ?"],
										['/documentation/calendar-pro/printing-calendar-pro/i-can’t-see-the-print-option..md', "I can’t see the print option."],
									],
								},
								{
									title: 'Single and Recurrent events in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro-.md', "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-a-recurrent-event-.md', "How can I add a recurrent event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-an-event-.md', "How can I add an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-add-links-to-my-events-.md', "How can I add links to my events ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-delete-an-event-.md', "How can I delete an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-a-recurrent-events-.md', "How can I edit/modify a recurrent events ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-can-i-edit-modify-an-event-.md', "How can I edit/modify an event ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-event-id-in-calendar-pro-.md', "How to see the Event ID in Calendar Pro ?"],
										['/documentation/calendar-pro/single-and-recurrent-events-in-calendar-pro/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro-.md', "How to see the series Id of a recurrent event series in Calendar Pro ?"],
									],
								},
								{
									title: 'Tags in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/tags-in-calendar-pro/how-can-i-add-tags-to-my-events-.md', "How can I add tags to my events ?"],
									],
								},
								{
									title: 'Timezones in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/timezones-in-calendar-pro/how-can-i-change-the-time-zone-.md', "How can I change the time zone ?"],
									],
								},
								{
									title: 'Troubleshooting in Calendar Pro',
									collapsable: true,
									children: [
										['/documentation/calendar-pro/troubleshooting-in-calendar-pro/how-to-clean-the-microsoft-teams-cache-.md', "How to clean the Microsoft Teams cache ?"],
										['/documentation/calendar-pro/troubleshooting-in-calendar-pro/i-accidentally-deleted-my-calendar,-or-somebody-deleted-it--how-can-i-restore-it-.md', "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it ?"],
									],
								},
							]
						},
						{
							title: 'Contacts Pro',
							collapsable: true,
							path: "/documentation/contacts-pro/overview/",
							children: [
								['/documentation/contacts-pro/overview.md', "Contacts Pro - Overview"],
								['/documentation/contacts-pro/get-started.md', "Contacts Pro - Get Started !"],
								['/documentation/contacts-pro/fundamentals.md', "Contacts Pro - Fundamentals"],
								['/documentation/contacts-pro/whats-new.md', "Contacts Pro - What’s new​"],
								['/documentation/contacts-pro/tutorials.md', "Contacts Pro - Tutorials"],
								['/documentation/contacts-pro/limits.md', "Contacts Pro - Limits"],
								['/documentation/contacts-pro/changelog.md', "Contacts Pro - Change log​"],
							]
						},
						{
							title: 'Distribution List Pro',
							collapsable: true,
							path: "/documentation/distribution-list-pro/overview/",
							children: [
								['/documentation/distribution-list-pro/overview.md', "Distribution List Pro - Overview"],
								['/documentation/distribution-list-pro/get-started.md', "Distribution List Pro - Get Started !"],
								['/documentation/distribution-list-pro/fundamentals.md', "Distribution List Pro - Fundamentals"],
								['/documentation/distribution-list-pro/whats-new.md', "Distribution List Pro - What’s new​"],
								['/documentation/distribution-list-pro/tutorials.md', "Distribution List Pro - Tutorials"],
								['/documentation/distribution-list-pro/limits.md', "Distribution List Pro - Limits"],
								['/documentation/distribution-list-pro/changelog.md', "Distribution List Pro - Change log​"],
							]
						},
						{
							title: 'Gantt Chart Pro',
							collapsable: true,
							path: "/documentation/gantt-chart-pro/overview/",
							children: [
								['/documentation/gantt-chart-pro/overview.md', "Gantt Chart Pro - Overview"],
								['/documentation/gantt-chart-pro/get-started.md', "Gantt Chart Pro - Get Started !"],
								['/documentation/gantt-chart-pro/fundamentals.md', "Gantt Chart Pro - Fundamentals"],
								['/documentation/gantt-chart-pro/whats-new.md', "Gantt Chart Pro - What’s new​"],
								['/documentation/gantt-chart-pro/tutorials.md', "Gantt Chart Pro - Tutorials"],
								['/documentation/gantt-chart-pro/limits.md', "Gantt Chart Pro - Limits"],
								['/documentation/gantt-chart-pro/changelog.md', "Gantt Chart Pro - Change log​"],
							]
						},
						{
							title: 'Home Pro',
							collapsable: true,
							path: "/documentation/home-pro/overview/",
							children: [
								['/documentation/home-pro/overview.md', "Home Pro - Overview"],
								['/documentation/home-pro/get-started.md', "Home Pro - Get Started !"],
								['/documentation/home-pro/fundamentals.md', "Home Pro - Fundamentals"],
								['/documentation/home-pro/whats-new.md', "Home Pro - What’s new​"],
								['/documentation/home-pro/tutorials.md', "Home Pro - Tutorials"],
								['/documentation/home-pro/limits.md', "Home Pro - Limits"],
								['/documentation/home-pro/changelog.md', "Home Pro - Change log​"],
							]
						},
						{
							title: 'KeePass Pro',
							collapsable: true,
							path: "/documentation/keepass-pro/overview/",
							children: [
								['/documentation/keepass-pro/overview.md', "KeePass Pro - Overview"],
								['/documentation/keepass-pro/get-started.md', "KeePass Pro - Get Started !"],
								['/documentation/keepass-pro/fundamentals.md', "KeePass Pro - Fundamentals"],
								['/documentation/keepass-pro/whats-new.md', "KeePass Pro - What’s new​"],
								['/documentation/keepass-pro/tutorials.md', "KeePass Pro - Tutorials"],
								['/documentation/keepass-pro/limits.md', "KeePass Pro - Limits"],
								['/documentation/keepass-pro/changelog.md', "KeePass Pro - Change log​"],
							]
						},
						{
							title: 'Map Pro',
							collapsable: true,
							path: "/documentation/map-pro/overview/",
							children: [
								['/documentation/map-pro/overview.md', "Map Pro - Overview"],
								['/documentation/map-pro/get-started.md', "Map Pro - Get Started !"],
								['/documentation/map-pro/fundamentals.md', "Map Pro - Fundamentals"],
								['/documentation/map-pro/whats-new.md', "Map Pro - What’s new​"],
								['/documentation/map-pro/tutorials.md', "Map Pro - Tutorials"],
								['/documentation/map-pro/limits.md', "Map Pro - Limits"],
								['/documentation/map-pro/changelog.md', "Map Pro - Change log​"],
							]
						},
						{
							title: 'Parking Pro',
							collapsable: true,
							path: "/documentation/parking-pro/overview/",
							children: [
								['/documentation/parking-pro/overview.md', "Parking Pro - Overview"],
								['/documentation/parking-pro/get-started.md', "Parking Pro - Get Started !"],
								['/documentation/parking-pro/fundamentals.md', "Parking Pro - Fundamentals"],
								['/documentation/parking-pro/whats-new.md', "Parking Pro - What’s new​"],
								['/documentation/parking-pro/tutorials.md', "Parking Pro - Tutorials"],
								['/documentation/parking-pro/limits.md', "Parking Pro - Limits"],
								['/documentation/parking-pro/changelog.md', "Parking Pro - Change log​"],
							]
						},
					],
				},
				{
					title: "Trust Center",
					collapsable: true,
					children: [
						["/trust/center/overview/", "Overview"],
						['/trust/center/supported-clients/', "Supported Clients"],
						['/trust/center/authentication-single-sign-on/', "Authentication & Single Sign On"],
						['/trust/center/communication-network-security/', 'Communication & Network Security'],
						['/trust/center/infrastructure-services/', 'Infrastructure Services'],
						['/trust/center/microsoft-graph-permissions/', 'Microsoft Graph Permissions'],
						['/trust/center/data-management-practices/', 'Data Management Practices'],
						['/trust/center/secure-development/', 'Secure Development'],
						['/trust/center/privacy-and-compliance/', 'Privacy and Compliance'],
						['/trust/center/security-policy/', 'Security Policy'],
						['/trust/center/classification-labels/', 'Classification Labels']
					]

				},
				{
					title: "Architecture & Security",
					collapsable: true,
					children: [
						['/trust/architecture-security/overview/', 'Overview'],
						['/trust/architecture-security/bookingroom-pro/', 'BookingRoom Pro'],
						['/trust/architecture-security/calendar-pro/', 'Calendar Pro'],
						['/trust/architecture-security/parking-pro/', 'Parking Pro'],
						['/trust/architecture-security/company-communicator-pro/', 'Company Communicator Pro'],
						['/trust/architecture-security/contact-pro/', 'Contact Pro'],
						['/trust/architecture-security/distribution-list-pro/', 'Distribution List Pro'],
						['/trust/architecture-security/keepass-pro/', 'Keepass Pro'],
						['/trust/architecture-security/map-pro/', 'Map Pro'],
						['/trust/architecture-security/gantt-chart-pro/', 'Gantt Chart Pro'],
						['/trust/architecture-security/metaoffice-pro/', 'MetaOffice Pro']
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
