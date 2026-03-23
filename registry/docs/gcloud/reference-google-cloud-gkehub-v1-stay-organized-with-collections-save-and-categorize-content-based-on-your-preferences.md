-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google.Cloud.GkeHub.V1 Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/latest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.7.0)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.6.0)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.5.0)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.4.0)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.3.0)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.2.0)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.1.0)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/2.0.0)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/1.2.0)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/1.1.0)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/1.0.0)

`Google.Cloud.GkeHub.V1` is a.NET client library for the [GKE Hub API](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster).

Note: This documentation is for version `2.8.0` of the library. Some samples may not work with other versions.

## Installation

Install the `Google.Cloud.GkeHub.V1` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages...").

## Authentication

When running on Google Cloud, no action needs to be taken to authenticate.

Otherwise, the simplest way of authenticating your API calls is to set up Application Default Credentials. The credentials will automatically be used to authenticate. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) for more details.

## Getting started

All operations are performed through [GkeHubClient](/dotnet/docs/reference/Google.Cloud.GkeHub.V1/latest/Google.Cloud.GkeHub.V1.GkeHubClient).

Create a client instance by calling the static `Create` or `CreateAsync` methods. Alternatively, use the builder class associated with each client class (e.g. GkeHubClientBuilder for GkeHubClient) as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe, and we recommend using a single instance across your entire application unless you have a particular need to configure multiple client objects separately.

### Using the REST (HTTP/1.1) transport

This library defaults to performing RPCs using [gRPC](https://grpc.io/) using the binary [Protocol Buffer](https://protobuf.dev) wire format. However, it also supports HTTP/1.1 and JSON, for situations where gRPC doesn't work as desired. (This is typically due to an incompatible proxy or other network issue.) To create a client using HTTP/1.1, specify a `RestGrpcAdapter` reference for the `GrpcAdapter` property in the client builder. Sample code:

```
var client = new GkeHubClientBuilder
{
    GrpcAdapter = RestGrpcAdapter.Default
}.Build();
```

For more details, see the [transport selection](https://cloud.google.com/dotnet/docs/reference/help/transports) page.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
