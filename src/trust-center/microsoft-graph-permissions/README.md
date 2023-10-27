# Microsoft Graph Permissions

## Admin-restricted permissions
Depending on the permission type (Delegated or Application), some high-privilege permissions in the Microsoft ecosystem are set to admin-restricted.  
Examples of these kinds of permissions include the following:
* Read all user's full profiles by using ```User.Read.All```
* Write data to an organization's directory by using ```Directory.ReadWrite.All```
* Read all groups in an organization's directory by using ```Groups.Read.All```

For TeamsPro to access data in Microsoft Graph, your administrator must grant it the correct permissions via a consent process.  

Learn more:
* [TeamsPro Install and Setup Guide](https://help.TeamsPro.com/articles/3505270-install-TeamsPro-app-on-microsoft-teams)
* [Azure AD application consent experience...](https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience)

## Required Permissions

For TeamsPro to work properly and perform some administrative operations, it requires the following permissions.

### OpenId standard scopes
The OpenID scopes represents the basics required for any OAuth authentication:

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```email``` | View users' email address. | **Microsoft Teams SSO.** | No |
| ```offline_access``` | Maintain access to data you have given it access to. | **Microsoft Teams SSO.** | No |
| ```openid``` | Sign users in. | **Microsoft Teams SSO.** | No |
| ```profile``` | View users' basic profile. | **Microsoft Teams SSO.** | No |

### Microsoft Graph Scopes
The Microsoft Graph scopes are specific to the Microsoft platform:

Learn more with [Microsoft Graph permissions reference...](https://docs.microsoft.com/en-us/graph/permissions-reference)

Learn more about [Authentication and authorization basics for Microsoft Graph...](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions)


#### Calendar Pro

* Learn more for [Calendar Pro...](/architecture-security/calendar-pro/#microsoft-graph)

#### Contact Pro

* Learn more for [Contact Pro...](/architecture-security/contact-pro/#microsoft-graph)

#### Distribution List Pro

* Learn more for [Distribution List Pro...](/architecture-security/distribution-list-pro/#microsoft-graph)

#### Keepass Pro

* Learn more for [Keepass Pro...](/architecture-security/keepass-pro/#microsoft-graph)

#### Home Pro

* Under development 🏗

#### Map Pro

* Learn more for [Map Pro...](/architecture-security/map-pro/#microsoft-graph)

#### Booking Room Pro

* Learn more for [Booking Room Pro...](/architecture-security/bookingroom-pro/#microsoft-graph)

#### Parking Pro

* Learn more for [Parking Pro...](/architecture-security/parking-pro/#microsoft-graph)


#### Company Communicator Pro

* Learn more for [Company Communicator Pro...](/architecture-security/company-communicator-pro/#microsoft-graph)

#### MetaOffice Pro

* Learn more for [MetaOffice Pro...](/architecture-security/metaoffice-pro/#microsoft-graph)

<Classification label="public" />