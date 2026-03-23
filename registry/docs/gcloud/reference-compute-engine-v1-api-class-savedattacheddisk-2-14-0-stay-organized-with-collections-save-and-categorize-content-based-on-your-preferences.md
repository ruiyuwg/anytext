-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class SavedAttachedDisk (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class SavedAttachedDisk : IMessage<SavedAttachedDisk>, IEquatable<SavedAttachedDisk>, IDeepCloneable<SavedAttachedDisk>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class SavedAttachedDisk.

DEPRECATED: Please use compute#savedDisk instead. An instance-attached disk resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SavedAttachedDisk

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SavedAttachedDisk](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.SavedAttachedDisk), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SavedAttachedDisk](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.SavedAttachedDisk), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SavedAttachedDisk](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.SavedAttachedDisk), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### SavedAttachedDisk()

```
public SavedAttachedDisk()
```

### SavedAttachedDisk(SavedAttachedDisk)

```
public SavedAttachedDisk(SavedAttachedDisk other)
```

**Parameter**

**Name**

**Description**

`other`

`[SavedAttachedDisk](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.SavedAttachedDisk)`  

## Properties

### AutoDelete

```
public bool AutoDelete { get; set; }
```

Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Boot

```
public bool Boot { get; set; }
```

Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### DeviceName

```
public string DeviceName { get; set; }
```

Specifies the name of the disk attached to the source instance.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DiskEncryptionKey

```
public CustomerEncryptionKey DiskEncryptionKey { get; set; }
```

The encryption key for the disk.

**Property Value**

**Type**

**Description**

`[CustomerEncryptionKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.CustomerEncryptionKey)`

### DiskSizeGb

```
public long DiskSizeGb { get; set; }
```

The size of the disk in base-2 GB.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### DiskType

```
public string DiskType { get; set; }
```

\[Output Only\] URL of the disk type resource. For example: projects/project /zones/zone/diskTypes/pd-standard or pd-ssd

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### GuestOsFeatures

```
public RepeatedField<GuestOsFeature> GuestOsFeatures { get; }
```

A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[GuestOsFeature](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.GuestOsFeature)`

### HasAutoDelete

```
public bool HasAutoDelete { get; }
```

Gets whether the "auto\_delete" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasBoot

```
public bool HasBoot { get; }
```

Gets whether the "boot" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDeviceName

```
public bool HasDeviceName { get; }
```

Gets whether the "device\_name" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDiskSizeGb

```
public bool HasDiskSizeGb { get; }
```

Gets whether the "disk\_size\_gb" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDiskType

```
public bool HasDiskType { get; }
```

Gets whether the "disk\_type" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasIndex

```
public bool HasIndex { get; }
```

Gets whether the "index" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasInterface

```
public bool HasInterface { get; }
```

Gets whether the "interface" field is set

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

### HasMode

```
public bool HasMode { get; }
```

Gets whether the "mode" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSource

```
public bool HasSource { get; }
```

Gets whether the "source" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStorageBytes

```
public bool HasStorageBytes { get; }
```

Gets whether the "storage\_bytes" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStorageBytesStatus

```
public bool HasStorageBytesStatus { get; }
```

Gets whether the "storage\_bytes\_status" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasType

```
public bool HasType { get; }
```

Gets whether the "type" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Index

```
public int Index { get; set; }
```

Specifies zero-based index of the disk that is attached to the source instance.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### Interface

```
public string Interface { get; set; }
```

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. Check the Interface enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Kind

```
public string Kind { get; set; }
```

\[Output Only\] Type of the resource. Always compute#attachedDisk for attached disks.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Licenses

```
public RepeatedField<string> Licenses { get; }
```

\[Output Only\] Any valid publicly visible licenses.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Mode

```
public string Mode { get; set; }
```

The mode in which this disk is attached to the source instance, either READ\_WRITE or READ\_ONLY. Check the Mode enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Source

```
public string Source { get; set; }
```

Specifies a URL of the disk attached to the source instance.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### StorageBytes

```
public long StorageBytes { get; set; }
```

\[Output Only\] A size of the storage used by the disk's snapshot by this machine image.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### StorageBytesStatus

```
public string StorageBytesStatus { get; set; }
```

\[Output Only\] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP\_TO\_DATE, meaning the size of the snapshot is up-to-date. Check the StorageBytesStatus enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public string Type { get; set; }
```

Specifies the type of the attached disk, either SCRATCH or PERSISTENT. Check the Type enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
