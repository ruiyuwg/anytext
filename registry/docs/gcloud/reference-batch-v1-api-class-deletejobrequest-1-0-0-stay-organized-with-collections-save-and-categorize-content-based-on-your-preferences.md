-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Batch v1 API - Class DeleteJobRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.Batch.V1/latest/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.14.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.13.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.12.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.10.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.9.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.8.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.7.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.6.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.5.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.4.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.3.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.2.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.1.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.3.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.2.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.1.0/Google.Cloud.Batch.V1.DeleteJobRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)

```
public sealed class DeleteJobRequest : IMessage<DeleteJobRequest>, IEquatable<DeleteJobRequest>, IDeepCloneable<DeleteJobRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Batch v1 API class DeleteJobRequest.

DeleteJob Request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteJobRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Batch.V1](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1)

## Assembly

Google.Cloud.Batch.V1.dll

## Constructors

### DeleteJobRequest()

```
public DeleteJobRequest()
```

### DeleteJobRequest(DeleteJobRequest)

```
public DeleteJobRequest(DeleteJobRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteJobRequest](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.DeleteJobRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Job name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Reason

```
public string Reason { get; set; }
```

Optional. Reason for this deletion.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### RequestId

```
public string RequestId { get; set; }
```

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
