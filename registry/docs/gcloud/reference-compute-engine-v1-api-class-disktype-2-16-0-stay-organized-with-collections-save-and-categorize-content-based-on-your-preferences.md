-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class DiskType (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class DiskType : IMessage<DiskType>, IEquatable<DiskType>, IDeepCloneable<DiskType>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class DiskType.

Represents a Disk Type resource. Google Compute Engine has two Disk Type resources: \* [Regional](/compute/docs/reference/rest/v1/regionDiskTypes) \* [Zonal](/compute/docs/reference/rest/v1/diskTypes) You can choose from a variety of disk types based on your needs. For more information, read Storage options. The diskTypes resource represents disk types for a zonal persistent disk. For more information, read Zonal persistent disks. The regionDiskTypes resource represents disk types for a regional persistent disk. For more information, read Regional persistent disks.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DiskType

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DiskType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.DiskType), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DiskType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.DiskType), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DiskType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.DiskType), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### DiskType()

```
public DiskType()
```

### DiskType(DiskType)

```
public DiskType(DiskType other)
```

**Parameter**

**Name**

**Description**

`other`

`[DiskType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.DiskType)`  

## Properties

### CreationTimestamp

```
public string CreationTimestamp { get; set; }
```

\[Output Only\] Creation timestamp in RFC3339 text format.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultDiskSizeGb

```
public long DefaultDiskSizeGb { get; set; }
```

\[Output Only\] Server-defined default disk size in GB.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### Deprecated

```
public DeprecationStatus Deprecated { get; set; }
```

\[Output Only\] The deprecation status associated with this disk type.

**Property Value**

**Type**

**Description**

`[DeprecationStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.DeprecationStatus)`

### Description

```
public string Description { get; set; }
```

\[Output Only\] An optional description of this resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasCreationTimestamp

```
public bool HasCreationTimestamp { get; }
```

Gets whether the "creation\_timestamp" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDefaultDiskSizeGb

```
public bool HasDefaultDiskSizeGb { get; }
```

Gets whether the "default\_disk\_size\_gb" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDescription

```
public bool HasDescription { get; }
```

Gets whether the "description" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasId

```
public bool HasId { get; }
```

Gets whether the "id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasKind

```
public bool HasKind { get; }
```

Gets whether the "kind" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasName

```
public bool HasName { get; }
```

Gets whether the "name" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasRegion

```
public bool HasRegion { get; }
```

Gets whether the "region" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSelfLink

```
public bool HasSelfLink { get; }
```

Gets whether the "self\_link" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasValidDiskSize

```
public bool HasValidDiskSize { get; }
```

Gets whether the "valid\_disk\_size" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasZone

```
public bool HasZone { get; }
```

Gets whether the "zone" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Id

```
public ulong Id { get; set; }
```

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Property Value**

**Type**

**Description**

`[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)`

### Kind

```
public string Kind { get; set; }
```

\[Output Only\] Type of the resource. Always compute#diskType for disk types.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

\[Output Only\] Name of the resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Region

```
public string Region { get; set; }
```

\[Output Only\] URL of the region where the disk type resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SelfLink

```
public string SelfLink { get; set; }
```

\[Output Only\] Server-defined URL for the resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ValidDiskSize

```
public string ValidDiskSize { get; set; }
```

\[Output Only\] An optional textual description of the valid disk size, such as "10GB-10TB".

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Zone

```
public string Zone { get; set; }
```

\[Output Only\] URL of the zone where the disk type resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
