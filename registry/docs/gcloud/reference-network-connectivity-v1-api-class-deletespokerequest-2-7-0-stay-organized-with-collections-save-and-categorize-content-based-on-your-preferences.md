-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Network Connectivity v1 API - Class DeleteSpokeRequest (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.13.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.12.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.11.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.10.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.9.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.8.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.6.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.5.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.4.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.3.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.2.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.1.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.0.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.2.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.1.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.0.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)

```
public sealed class DeleteSpokeRequest : IMessage<DeleteSpokeRequest>, IEquatable<DeleteSpokeRequest>, IDeepCloneable<DeleteSpokeRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Network Connectivity v1 API class DeleteSpokeRequest.

The request for \[HubService.DeleteSpoke\]\[google.cloud.networkconnectivity.v1.HubService.DeleteSpoke\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteSpokeRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DeleteSpokeRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DeleteSpokeRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DeleteSpokeRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.NetworkConnectivity.V1](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1)

## Assembly

Google.Cloud.NetworkConnectivity.V1.dll

## Constructors

### DeleteSpokeRequest()

```
public DeleteSpokeRequest()
```

### DeleteSpokeRequest(DeleteSpokeRequest)

```
public DeleteSpokeRequest(DeleteSpokeRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteSpokeRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The name of the spoke to delete.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RequestId

```
public string RequestId { get; set; }
```

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments.

The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SpokeName

```
public SpokeName SpokeName { get; set; }
```

[SpokeName](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.SpokeName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.DeleteSpokeRequest#Google_Cloud_NetworkConnectivity_V1_DeleteSpokeRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[SpokeName](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.SpokeName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
