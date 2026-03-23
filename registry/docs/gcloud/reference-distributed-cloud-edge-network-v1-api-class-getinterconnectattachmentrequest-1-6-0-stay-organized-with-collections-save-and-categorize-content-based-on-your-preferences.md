-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Distributed Cloud Edge Network v1 API - Class GetInterconnectAttachmentRequest (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.5.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.4.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.2.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.1.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.0.0/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)

```
public sealed class GetInterconnectAttachmentRequest : IMessage<GetInterconnectAttachmentRequest>, IEquatable<GetInterconnectAttachmentRequest>, IDeepCloneable<GetInterconnectAttachmentRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Distributed Cloud Edge Network v1 API class GetInterconnectAttachmentRequest.

Message for getting a InterconnectAttachment

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetInterconnectAttachmentRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetInterconnectAttachmentRequest](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetInterconnectAttachmentRequest](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetInterconnectAttachmentRequest](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.EdgeNetwork.V1](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1)

## Assembly

Google.Cloud.EdgeNetwork.V1.dll

## Constructors

### GetInterconnectAttachmentRequest()

```
public GetInterconnectAttachmentRequest()
```

### GetInterconnectAttachmentRequest(GetInterconnectAttachmentRequest)

```
public GetInterconnectAttachmentRequest(GetInterconnectAttachmentRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetInterconnectAttachmentRequest](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest)`  

## Properties

### InterconnectAttachmentName

```
public InterconnectAttachmentName InterconnectAttachmentName { get; set; }
```

[InterconnectAttachmentName](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.InterconnectAttachmentName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.GetInterconnectAttachmentRequest#Google_Cloud_EdgeNetwork_V1_GetInterconnectAttachmentRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[InterconnectAttachmentName](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.InterconnectAttachmentName)`

### Name

```
public string Name { get; set; }
```

Required. Name of the resource

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
