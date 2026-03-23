-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Batch v1alpha API - Class CancelJobRequest (1.0.0-alpha30) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-alpha30keyboard\_arrow\_down

-   [1.0.0-alpha33 (latest)](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.CancelJobRequest)
-   [1.0.0-alpha32](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha32/Google.Cloud.Batch.V1Alpha.CancelJobRequest)

```
public sealed class CancelJobRequest : IMessage<CancelJobRequest>, IEquatable<CancelJobRequest>, IDeepCloneable<CancelJobRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Batch v1alpha API class CancelJobRequest.

CancelJob Request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CancelJobRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CancelJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.CancelJobRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CancelJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.CancelJobRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CancelJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.CancelJobRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Batch.V1Alpha](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha)

## Assembly

Google.Cloud.Batch.V1Alpha.dll

## Constructors

### CancelJobRequest()

```
public CancelJobRequest()
```

### CancelJobRequest(CancelJobRequest)

```
public CancelJobRequest(CancelJobRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CancelJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.CancelJobRequest)`  

## Properties

### JobName

```
public JobName JobName { get; set; }
```

[JobName](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.JobName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.CancelJobRequest#Google_Cloud_Batch_V1Alpha_CancelJobRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[JobName](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha30/Google.Cloud.Batch.V1Alpha.JobName)`

### Name

```
public string Name { get; set; }
```

Required. Job name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RequestId

```
public string RequestId { get; set; }
```

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
