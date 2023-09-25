# Gantt Chart Pro

We understand that our customers need to be confident using Gantt Chart Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Gantt Chart Pro access, processes and stores several kind of data:
- Gantt Chart
- Tasks
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Tasks | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Gantt Chart | ✔ | 🚫 | ✔ | Accessed of using the app.<br/>No storage. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Gantt Chart Pro to read user information and to display it in the UI.** | No |
| ```User.ReadBasic.All ``` | Retrieve the properties and relationships of user object. | **Allows Gantt Chart Pro to read user information and to display it in the UI.** | Yes |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives thee app access to resources on behalf of the user for an extended time. | When a user approves the offline_access scope, Gantt Chart Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Gantt Chart Pro can get new access tokens as older ones expire. | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |




::: tip
The Azure AD App ID is: **447c7fc5-2c51-4c7b-a315-3ece4ad3154f**
:::

## Architecture and flow diagram

![Gantt Chart architecture](/assets/img/gantt-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

<!-- ::: tip Note
[Microsoft 365 App Compliance for Gantt Chart Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-distribution-lists-pro)
::: -->

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
|gantt.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |
|graph.microsoft.com | for Microsoft Graph API access |

## Dependencies

### Server

| Name                                        | Version | Url                                                                                                                                                                                | License    |
| ------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| AspNetCore.HealthChecks.Publisher.ApplicationInsights | 5.0.1 | https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks | MIT |
| AutoMapper | 10.1.1" | https://github.com/AutoMapper/AutoMapper | MIT |
| AutoMapper.Extensions.Microsoft.DependencyInjection | 8.1.1 | https://github.com/AutoMapper/AutoMapper.Extensions.Microsoft.DependencyInjection | MIT |
| Microsoft.ApplicationInsights | 2.19.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.AspNetCore | 2.19.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.SnapshotCollector | 1.4.2 | https://www.nuget.org/packages/Microsoft.ApplicationInsights.SnapshotCollector/1.4.4/License |  |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 6.0.1 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.AspNetCore.SpaProxy | 6.0.0 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.Bot.Builder.Integration.AspNet.Core | 4.16.0 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Microsoft.EntityFrameworkCore.Cosmos | 6.0.1 | https://github.com/dotnet/efcore | MIT |
| Microsoft.Extensions.HealthChecks | 1.0.0 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.Identity.Web | 1.4.1 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.MicrosoftGraph | 1.4.1 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.TeamFoundationServer.Client | 16.170.0 | https://go.microsoft.com/fwlink/?LinkId=613084 |  |
| Newtonsoft.Json | 13.0.1 | https://github.com/JamesNK/Newtonsoft.Json |  |
| Syncfusion.AspNet | 19.4.0.56 | https://www.nuget.org/packages/Syncfusion.AspNet/22.1.34/License |  |
| Syncfusion.AspNet.Mvc5 | 19.4.0.56 | https://www.nuget.org/packages/Syncfusion.AspNet.Mvc5/20.4.0.44/License |  |
| Syncfusion.EJ.AspNet.Core | 19.4.0.56 | https://www.nuget.org/packages/Syncfusion.EJ.AspNet.Core/20.4.0.44/License |  |
| Syncfusion.EJ2.AspNet.Core | 19.4.0.56 | https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/22.2.5/License |  |