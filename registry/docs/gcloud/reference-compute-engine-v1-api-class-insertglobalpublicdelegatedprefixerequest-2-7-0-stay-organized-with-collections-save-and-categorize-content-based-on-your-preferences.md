-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class InsertGlobalPublicDelegatedPrefixeRequest (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class InsertGlobalPublicDelegatedPrefixeRequest : IMessage<InsertGlobalPublicDelegatedPrefixeRequest>, IEquatable<InsertGlobalPublicDelegatedPrefixeRequest>, IDeepCloneable<InsertGlobalPublicDelegatedPrefixeRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class InsertGlobalPublicDelegatedPrefixeRequest.

A request message for GlobalPublicDelegatedPrefixes.Insert. See the method description for details.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> InsertGlobalPublicDelegatedPrefixeRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[InsertGlobalPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1.InsertGlobalPublicDelegatedPrefixeRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[InsertGlobalPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1.InsertGlobalPublicDelegatedPrefixeRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[InsertGlobalPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1.InsertGlobalPublicDelegatedPrefixeRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.Compute[V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### InsertGlobalPublicDelegatedPrefixeRequest()

```
public InsertGlobalPublicDelegatedPrefixeRequest()
```

### InsertGlobalPublicDelegatedPrefixeRequest(InsertGlobalPublicDelegatedPrefixeRequest)

```
public InsertGlobalPublicDelegatedPrefixeRequest(InsertGlobalPublicDelegatedPrefixeRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[InsertGlobalPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1.InsertGlobalPublicDelegatedPrefixeRequest)`  

## Properties

### HasRequestId

```
public bool HasRequestId { get; }
```

Gets whether the "request\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Project

```
public string Project { get; set; }
```

Project ID for this request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PublicDelegatedPrefixResource

```
public PublicDelegatedPrefix PublicDelegatedPrefixResource { get; set; }
```

The body resource for this request

**Property Value**

**Type**

**Description**

`[PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.7.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix)`

### RequestId

```
public string RequestId { get; set; }
```

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
