-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

Version 5.10.0keyboard\_arrow\_down

-   [5.23.0 (latest)](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/latest)
-   [5.22.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.22.0)
-   [5.21.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.21.0)
-   [5.20.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.20.0)
-   [5.19.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.19.0)
-   [5.18.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.18.0)
-   [5.17.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.17.0)
-   [5.16.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.16.0)
-   [5.15.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.15.0)
-   [5.14.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.14.0)
-   [5.13.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.13.0)
-   [5.12.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.12.0)
-   [5.11.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.11.0)
-   [5.10.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0)
-   [5.9.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.9.0)
-   [5.8.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.8.0)
-   [5.7.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.7.0)
-   [5.6.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.6.0)
-   [5.5.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.5.0)
-   [5.4.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.4.0)
-   [5.3.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.3.0)
-   [5.2.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.2.0)
-   [5.1.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.1.0)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.0.0)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/4.0.0)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.3.0)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.2.0)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.1.0)

# Google.Cloud.Dataproc.V1

`Google.Cloud.Dataproc.V1` is a.NET client library for the [Google Cloud Dataproc API](https://cloud.google.com/dataproc/docs/concepts/overview).

Note: This documentation is for version `5.10.0` of the library. Some samples may not work with other versions.

## Installation

Install the `Google.Cloud.Dataproc.V1` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages...").

## Authentication

When running on Google Cloud, no action needs to be taken to authenticate.

Otherwise, the simplest way of authenticating your API calls is to set up Application Default Credentials. The credentials will automatically be used to authenticate. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) for more details.

## Getting started

All operations are performed through the following client classes:

-   [AutoscalingPolicyServiceClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.AutoscalingPolicyServiceClient)
-   [BatchControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.BatchControllerClient)
-   [ClusterControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.ClusterControllerClient)
-   [JobControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.JobControllerClient)
-   [NodeGroupControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.NodeGroupControllerClient)
-   [SessionControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.SessionControllerClient)
-   [SessionTemplateControllerClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.SessionTemplateControllerClient)
-   [WorkflowTemplateServiceClient](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.WorkflowTemplateServiceClient)

Create a client instance by calling the static `Create` or `CreateAsync` methods. Alternatively, use the builder class associated with each client class (e.g. AutoscalingPolicyServiceClientBuilder for AutoscalingPolicyServiceClient) as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe, and we recommend using a single instance across your entire application unless you have a particular need to configure multiple client objects separately.

### Using the REST (HTTP/1.1) transport

This library defaults to performing RPCs using [gRPC](https://grpc.io/) using the binary [Protocol Buffer](https://protobuf.dev) wire format. However, it also supports HTTP/1.1 and JSON, for situations where gRPC doesn't work as desired. (This is typically due to an incompatible proxy or other network issue.) To create a client using HTTP/1.1, specify a `RestGrpcAdapter` reference for the `GrpcAdapter` property in the client builder. Sample code:

```
var client = new AutoscalingPolicyServiceClientBuilder
{
    GrpcAdapter = RestGrpcAdapter.Default
}.Build();
```

For more details, see the [transport selection](https://cloud.google.com/dotnet/docs/reference/help/transports) page.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
