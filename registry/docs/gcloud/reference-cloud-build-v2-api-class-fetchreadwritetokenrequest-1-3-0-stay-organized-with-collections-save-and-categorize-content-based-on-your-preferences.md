-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Build v2 API - Class FetchReadWriteTokenRequest (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/latest/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.4.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.2.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.1.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.0.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)

```
public sealed class FetchReadWriteTokenRequest : IMessage<FetchReadWriteTokenRequest>, IEquatable<FetchReadWriteTokenRequest>, IDeepCloneable<FetchReadWriteTokenRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Build v2 API class FetchReadWriteTokenRequest.

Message for fetching SCM read/write token.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> FetchReadWriteTokenRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[FetchReadWriteTokenRequest](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[FetchReadWriteTokenRequest](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[FetchReadWriteTokenRequest](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CloudBuild.V2](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2)

## Assembly

Google.Cloud.CloudBuild.V2.dll

## Constructors

### FetchReadWriteTokenRequest()

```
public FetchReadWriteTokenRequest()
```

### FetchReadWriteTokenRequest(FetchReadWriteTokenRequest)

```
public FetchReadWriteTokenRequest(FetchReadWriteTokenRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[FetchReadWriteTokenRequest](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest)`  

## Properties

### Repository

```
public string Repository { get; set; }
```

Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RepositoryAsRepositoryName

```
public RepositoryName RepositoryAsRepositoryName { get; set; }
```

[RepositoryName](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.RepositoryName)\-typed view over the [Repository](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.FetchReadWriteTokenRequest#Google_Cloud_CloudBuild_V2_FetchReadWriteTokenRequest_Repository) resource name property.

**Property Value**

**Type**

**Description**

`[RepositoryName](/dotnet/docs/reference/Google.Cloud.CloudBuild.V2/1.3.0/Google.Cloud.CloudBuild.V2.RepositoryName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
