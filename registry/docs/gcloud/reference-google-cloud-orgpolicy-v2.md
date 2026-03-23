-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.8.0)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.7.0)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.6.0)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.5.0)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.4.0)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.3.0)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.2.0)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.1.0)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.0.0)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.2.0)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.1.0)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.0.0)

# Google.Cloud.OrgPolicy.V2

`Google.Cloud.OrgPolicy.V2` is a.NET client library for the [Organization Policy API](https://cloud.google.com/resource-manager/docs/organization-policy/overview).

Note: This documentation is for version `2.0.0` of the library. Some samples may not work with other versions.

## Installation

Install the `Google.Cloud.OrgPolicy.V2` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages...").

## Authentication

When running on Google Cloud Platform, no action needs to be taken to authenticate.

Otherwise, the simplest way of authenticating your API calls is to download a service account JSON file then set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to refer to it. The credentials will automatically be used to authenticate. See the [Getting Started With Authentication](https://cloud.google.com/docs/authentication/getting-started) guide for more details.

## Getting started

All operations are performed through [OrgPolicyClient](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.0.0/Google.Cloud.OrgPolicy.V2.OrgPolicyClient).

Create a client instance by calling the static `Create` or `CreateAsync` methods. Alternatively, use the builder class associated with each client class (e.g. OrgPolicyClientBuilder for OrgPolicyClient) as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe, and we recommend using a single instance across your entire application unless you have a particular need to configure multiple client objects separately.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
