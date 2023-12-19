﻿# Booking Room Pro

We understand that our customers need to be confident using Booking Room Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Booking Room Pro access, processes and stores several kind of data:
- Room reservation
- Rooms
- Booking Room Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Booking Room Configuration | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Room reservation | ✔ | 🚫 | ✔ | Accessed and updated of using the Booking Room.<br/>Stored as long as the organization is active. |
| Rooms | ✔ | 🚫 | ✔ | Accessed and updated of using the Booking Room.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Booking Room Pro to read user information and to display it in the UI.** | No |

::: tip
The Azure AD App ID is: **984562b3-6a46-4a7f-a19b-681442b0cdc0**
:::

## Architecture and flow diagram

![Booking Room Pro architecture](/assets/img/booking-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

::: tip Note
[Microsoft 365 App Compliance for Booking Room Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-booking-room-pro)
:::

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
|bookingroom.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |

## Dependencies

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
| Swashbuckle.AspNetCore.SwaggerUI            | 5.6.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE     