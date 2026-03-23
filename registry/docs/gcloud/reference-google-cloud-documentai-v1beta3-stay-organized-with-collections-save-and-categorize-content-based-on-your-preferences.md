-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google.Cloud.DocumentAI.V1Beta3 Stay organized with collections Save and categorize content based on your preferences.

2.0.0-beta30 (latest) 2.0.0-beta29 1.0.0-beta04

`Google.Cloud.DocumentAI.V1Beta3` is a.NET client library for the [Cloud Document AI API](https://cloud.google.com/solutions/document-ai).

Note: This documentation is for version `2.0.0-beta30` of the library. Some samples may not work with other versions.

## Installation

Install the `Google.Cloud.DocumentAI.V1Beta3` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages..."). Please ensure you enable pre-release packages (for example, in the Visual Studio NuGet user interface, check the "Include prerelease" box). Some of the following samples might only work with the latest pre-release version (`2.0.0-beta30`) of `Google.Cloud.DocumentAI.V1Beta3`.

## Authentication

When running on Google Cloud, no action needs to be taken to authenticate.

Otherwise, the simplest way of authenticating your API calls is to set up Application Default Credentials. The credentials will automatically be used to authenticate. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) for more details.

## Getting started

All operations are performed through the following client classes:

-   [DocumentProcessorServiceClient](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/latest/Google.Cloud.DocumentAI.V1Beta3.DocumentProcessorServiceClient)
-   [DocumentServiceClient](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/latest/Google.Cloud.DocumentAI.V1Beta3.DocumentServiceClient)

Create a client instance by calling the static `Create` or `CreateAsync` methods. Alternatively, use the builder class associated with each client class (e.g. DocumentProcessorServiceClientBuilder for DocumentProcessorServiceClient) as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe, and we recommend using a single instance across your entire application unless you have a particular need to configure multiple client objects separately.

### Using the REST (HTTP/1.1) transport

This library defaults to performing RPCs using [gRPC](https://grpc.io/) using the binary [Protocol Buffer](https://protobuf.dev) wire format. However, it also supports HTTP/1.1 and JSON, for situations where gRPC doesn't work as desired. (This is typically due to an incompatible proxy or other network issue.) To create a client using HTTP/1.1, specify a `RestGrpcAdapter` reference for the `GrpcAdapter` property in the client builder. Sample code:

```
var client = new DocumentProcessorServiceClientBuilder
{
    GrpcAdapter = RestGrpcAdapter.Default
}.Build();
```

For more details, see the [transport selection](https://cloud.google.com/dotnet/docs/reference/help/transports) page.

Note that if you wish to use processors other than in the US, you must specify the endpoint when you construct the client. The endpoint is of the form `{location}-documentai.googleapis.com`, e.g. `eu-documentai.googleapis.com`. The simplest way to specify the endpoint is to use `DocumentProcessorServiceClientBuilder`:

```
DocumentProcessorServiceClient client = new DocumentProcessorServiceClientBuilder
{
    Endpoint = "eu-documentai.googleapis.com"
}.Build();
// Now use the client to access EU document processors.
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
