-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class DiskMoveRequest (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class DiskMoveRequest : IMessage<DiskMoveRequest>, IEquatable<DiskMoveRequest>, IDeepCloneable<DiskMoveRequest>, IBufferMessage, IMessage
```

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DiskMoveRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DiskMoveRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DiskMoveRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DiskMoveRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DiskMoveRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DiskMoveRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DiskMoveRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

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

### DiskMoveRequest()

```
public DiskMoveRequest()
```

### DiskMoveRequest(DiskMoveRequest)

```
public DiskMoveRequest(DiskMoveRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DiskMoveRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DiskMoveRequest)`  

## Properties

### DestinationZone

```
public string DestinationZone { get; set; }
```

The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) - projects/project/zones/zone - zones/zone

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### HasDestinationZone

```
public bool HasDestinationZone { get; }
```

Gets whether the "destination\_zone" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasTargetDisk

```
public bool HasTargetDisk { get; }
```

Gets whether the "target\_disk" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### TargetDisk

```
public string TargetDisk { get; set; }
```

The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /disks/disk - projects/project/zones/zone/disks/disk - zones/zone/disks/disk

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
