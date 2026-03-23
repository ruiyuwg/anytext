-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

Version 3.17.0keyboard\_arrow\_down

-   [3.31.0 (latest)](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/latest)
-   [3.30.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.30.0)
-   [3.29.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.29.0)
-   [3.28.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.28.0)
-   [3.27.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.27.0)
-   [3.26.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.26.0)
-   [3.25.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.25.0)
-   [3.24.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.24.0)
-   [3.23.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.23.0)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.22.0)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.21.0)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.20.0)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.19.0)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.18.0)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.17.0)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.16.0)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.15.0)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.14.0)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.13.0)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.12.0)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.11.0)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.10.0)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.9.0)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.8.0)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.7.0)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.6.0)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.5.0)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.4.0)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.3.0)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.2.0)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.1.0)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.0.0)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.9.0)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.8.0)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.7.0)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.6.0)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.5.0)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/2.4.0)

# Google.Cloud.Bigtable.Admin.V2

`Google.Cloud.Bigtable.Admin.V2` is a.NET client library for the [Google Cloud Bigtable Administration API](https://cloud.google.com/bigtable/).

Note: This documentation is for version `3.17.0` of the library. Some samples may not work with other versions.

## Installation

Install the `Google.Cloud.Bigtable.Admin.V2` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages...").

## Authentication

When running on Google Cloud, no action needs to be taken to authenticate.

Otherwise, the simplest way of authenticating your API calls is to set up Application Default Credentials. The credentials will automatically be used to authenticate. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) for more details.

## Getting started

All operations are performed through the following client classes:

-   [BigtableInstanceAdminClient](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.17.0/Google.Cloud.Bigtable.Admin.V2.BigtableInstanceAdminClient)
-   [BigtableTableAdminClient](/dotnet/docs/reference/Google.Cloud.Bigtable.Admin.V2/3.17.0/Google.Cloud.Bigtable.Admin.V2.BigtableTableAdminClient)

Create a client instance by calling the static `Create` or `CreateAsync` methods. Alternatively, use the builder class associated with each client class (e.g. BigtableInstanceAdminClientBuilder for BigtableInstanceAdminClient) as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe, and we recommend using a single instance across your entire application unless you have a particular need to configure multiple client objects separately.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
