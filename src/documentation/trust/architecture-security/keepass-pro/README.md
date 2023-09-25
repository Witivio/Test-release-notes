# Keepass Pro

We understand that our customers need to be confident using Keepass Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Keepass Pro access, processes and stores several kind of data:
- Login
- Password 
- Keepass Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Keepass Configuration | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Keepass KDBX | ✔ | 🚫 | 🚫 | KDBX file never transit in Witivio infrastructure. The file stay between the app and SharePoint<br/>. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Keepass Pro to read user information and to display it in the UI.** | No |
| ```Files.ReadWrite.All``` | Read and Write file. / onedrive. | *Read and Write the kbdx file in user sharepoint / onedrive.** | No |

::: tip
The Azure AD App ID is: **597cc93d-8951-4f62-b549-eca97ba5c042**
:::

## Architecture and flow diagram

![KeePass Pro architecture](/assets/img/keepass-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

<!-- ::: tip Note
[Microsoft 365 App Compliance for Keepass Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-keepass-pro)
::: -->

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| keepass.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |
|.windows.net | for blob cache storage |
|graph.microsoft.com | for Microsoft Graph API access |

## Dependencies

### Client

| Name                                    | Version | Repository                                                                                                           | Publisher                           | NpmLink                                                                      | License     |
| ---------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------- | ------------ |
| @azure/msal-browser@2.18.0               | 2.18.0  | https://github.com/AzureAD/microsoft-authentication-library-for-js                                                   | Microsoft                           | https://www.npmjs.com/package/@azure/msal-browser                            | MIT          |
| @microsoft/applicationinsights-web@2.7.0 | 2.7.0   | https://github.com/microsoft/ApplicationInsights-JS                                                                  | Microsoft Application Insights Team | https://www.npmjs.com/package/@microsoft/applicationinsights-web             | MIT          |
| @microsoft/microsoft-graph-client@3.0.0  | 3.0.0   | https://github.com/microsoftgraph/msgraph-sdk-javascript | Microsoft                           | https://www.npmjs.com/package/@microsoft/microsoft-graph-client              | MIT          |
| @microsoft/teams-js@1.11.0               | 1.11.0  | https://github.com/OfficeDev/microsoft-teams-library-js                                                              | Microsoft Teams                     | https://www.npmjs.com/package/@microsoft/teams-js                            | MIT          |
| axios@0.21.4                             | @0.21.4 | https://github.com/axios/axios                                                                                       | Matt Zabriskie                      | https://www.npmjs.com/package/axios                                          | MIT          |
| copy-to-clipboard@3.3.1                  | @3.3.1  | https://github.com/sudodoki/copy-to-clipboard                                                                        | sudodoki                            | https://www.npmjs.com/package/copy-to-clipboard                              | MIT          |
| env-cmd@10.1.0                           | @10.1.0 | https://github.com/toddbluhm/env-cmd                                                                                 | Todd Bluhm                          | https://www.npmjs.com/package/env-cmd                                        | MIT          |
| randomatic@3.1.1                         | @3.1.1  | https://github.com/jonschlinkert/randomatic                                                                          | Jon Schlinkert                      | https://www.npmjs.com/package/randomatic                                     | MIT          |
| react-clear-cache@1.4.12                 | @1.4.12 | https://github.com/noahjohn9259/react-clear-cache                                                                    | noahjohn9259                        | https://www.npmjs.com/package/react-clear-cache                              | MIT          |
| react-dom@17.0.2                         | @17.0.2 | https://github.com/facebook/react                                                                                    | Facebook                            | https://www.npmjs.com/package/react-dom                                      | MIT          |
| react-intl@5.21.0                        | @5.21.0 | https://github.com/formatjs/formatjs                                                                                 | Eric Ferraiuolo                     | https://www.npmjs.com/package/react-intl                                     | BSD-3-Clause |
| react-router-dom@5.3.0                   | @5.3.0  | https://github.com/ReactTraining/react-router                                                                        | React Training                      | https://www.npmjs.com/package/react-router-dom                               | MIT          |
| react-router@5.2.1                       | @5.2.1  | https://github.com/ReactTraining/react-router                                                                        | React Training                      | https://www.npmjs.com/package/react-router                                   | MIT          |
| react-scripts@4.0.3                      | @4.0.3  | https://github.com/facebook/create-react-app                                                                         | Facebook                            | https://www.npmjs.com/package/react-scripts                                  | MIT          |
| react@17.0.2                             | @17.0.2 | https://github.com/facebook/react                                                                                    | Facebook                            | https://www.npmjs.com/package/react                                          | MIT          |
| sass@1.43.4                              | @1.43.4 | https://github.com/sass/dart-sass                                                                                    | Natalie Weizenbaum                  | https://www.npmjs.com/package/sass                                           | MIT          |
| typescript@4.4.4                         | @4.4.4  | https://github.com/Microsoft/TypeScript                                                                              | Microsoft Corp.                     | https://www.npmjs.com/package/typescript                                     | Apache-2.0   |
| use-file-picker@0.2.5                    | @0.2.5  | https://github.com/Jaaneek/useFilePicker                                                                             | Milosz Jankiewicz                   | https://www.npmjs.com/package/use-file-picker                                | MIT          |
| uuidv4@6.2.12                            | @6.2.12 | https://github.com/thenativeweb/uuidv4                                                                               | /                                   | https://www.npmjs.com/package/uuidv4 | MIT          |
| web-vitals@1.1.2                         | @1.1.2  | https://github.com/GoogleChrome/web-vitals                                                                           | Philip Walton                       | https://www.npmjs.com/package/web-vitals                                     | Apache-2.0   |

### Server

| Name                                        | Version | Url                                                                                                                                                                                | License    |
| ------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Microsoft.ApplicationInsights.AspNetCore    | 2.17.0  | https://licenses.nuget.org/MIT                                                                                                                                                     | MIT        |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson     | 3.1.11  | https://licenses.nuget.org/Apache-2.0                                                                                                                                              | Apache-2.0 |
| Microsoft.AspNetCore.SpaServices.Extensions | 3.1.13  | https://licenses.nuget.org/Apache-2.0                                                                                                                                              | Apache-2.0 |
| Microsoft.Azure.DocumentDB                  | 2.14.1  | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB/2.16.2/License                               | MIT        |
| Microsoft.Azure.DocumentDB.Core             | 2.14.1  | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB/2.16.2/License                               | MIT        |
| Microsoft.Extensions.HealthChecks           | 1.0.0   | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB/2.16.2/License                              | MIT        |
| Microsoft.Identity.Web                      | 1.9.2   | https://licenses.nuget.org/MIT                                                                                                                                                     | MIT        |
| Microsoft.Identity.Web.MicrosoftGraph       | 1.9.2   | https://licenses.nuget.org/MIT                                                                                                                                                     | MIT        |
| Newtonsoft.Json                             | 12.0.3  | https://licenses.nuget.org/MIT                                                                                                                                                     | MIT        |
| Swashbuckle.AspNetCore                      | 5.6.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Swashbuckle.AspNetCore.Swagger              | 5.6.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE                                                                                            | MIT        |
| Swashbuckle.AspNetCore.SwaggerGen           | 5.6.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE                                                                                            | MIT        |
| Swashbuckle.AspNetCore.SwaggerUI            | 5.6.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE                                                                                            | MIT        |