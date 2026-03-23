-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NetworkAttachmentConnectedEndpoint (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class NetworkAttachmentConnectedEndpoint : IMessage<NetworkAttachmentConnectedEndpoint>, IEquatable<NetworkAttachmentConnectedEndpoint>, IDeepCloneable<NetworkAttachmentConnectedEndpoint>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class NetworkAttachmentConnectedEndpoint.

\[Output Only\] A connection connected to this network attachment.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> NetworkAttachmentConnectedEndpoint

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[NetworkAttachmentConnectedEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.NetworkAttachmentConnectedEndpoint)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[NetworkAttachmentConnectedEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.NetworkAttachmentConnectedEndpoint)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[NetworkAttachmentConnectedEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.NetworkAttachmentConnectedEndpoint)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### NetworkAttachmentConnectedEndpoint()

```
public NetworkAttachmentConnectedEndpoint()
```

### NetworkAttachmentConnectedEndpoint(NetworkAttachmentConnectedEndpoint)

```
public NetworkAttachmentConnectedEndpoint(NetworkAttachmentConnectedEndpoint other)
```

**Parameter**

**Name**

**Description**

`other`

`[NetworkAttachmentConnectedEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.NetworkAttachmentConnectedEndpoint)`  

## Properties

### HasIpAddress

```
public bool HasIpAddress { get; }
```

Gets whether the "ip\_address" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasProjectIdOrNum

```
public bool HasProjectIdOrNum { get; }
```

Gets whether the "project\_id\_or\_num" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStatus

```
public bool HasStatus { get; }
```

Gets whether the "status" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSubnetwork

```
public bool HasSubnetwork { get; }
```

Gets whether the "subnetwork" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### IpAddress

```
public string IpAddress { get; set; }
```

The IP address assigned to the producer instance network interface. This value will be a range in case of Serverless.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProjectIdOrNum

```
public string ProjectIdOrNum { get; set; }
```

The project id or number of the interface to which the IP was assigned.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SecondaryIpCidrRanges

```
public RepeatedField<string> SecondaryIpCidrRanges { get; }
```

Alias IP ranges from the same subnetwork

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### Status

```
public string Status { get; set; }
```

The status of a connected endpoint to this network attachment. Check the Status enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Subnetwork

```
public string Subnetwork { get; set; }
```

The subnetwork used to assign the IP to the producer instance network interface.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
