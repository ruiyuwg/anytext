-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class Disk (3.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class Disk : IMessage<Disk>, IEquatable<Disk>, IDeepCloneable<Disk>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class Disk.

Represents a Persistent Disk resource.

Google Compute Engine has two Disk resources:

-   [Zonal](/compute/docs/reference/rest/v1/disks)
-   [Regional](/compute/docs/reference/rest/v1/regionDisks)

Persistent disks are required for running your VM instances. Create both boot and non-boot (data) persistent disks. For more information, read Persistent Disks. For more storage options, read Storage options.

The disks resource represents a zonal persistent disk. For more information, readZonal persistent disks.

The regionDisks resource represents a regional persistent disk. For more information, read Regional resources.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Disk

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Disk](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.Disk), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Disk](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.Disk), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Disk](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.Disk), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### Disk()

```
public Disk()
```

### Disk(Disk)

```
public Disk(Disk other)
```

**Parameter**

**Name**

**Description**

`other`

`[Disk](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.Disk)`  

## Properties

### AccessMode

```
public string AccessMode { get; set; }
```

The access mode of the disk.

 ```
 - READ_WRITE_SINGLE: The default AccessMode, means the
 disk can be attached to single instance in RW mode.
 - READ_WRITE_MANY: The AccessMode means the disk can be
 attached to multiple instances in RW mode.
 - READ_ONLY_MANY: The AccessMode means the disk can be
 attached to multiple instances in RO mode.
```

The AccessMode is only valid for Hyperdisk disk types. Check the AccessMode enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Architecture

```
public string Architecture { get; set; }
```

The architecture of the disk. Valid values are ARM64 or X86\_64. Check the Architecture enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### AsyncPrimaryDisk

```
public DiskAsyncReplication AsyncPrimaryDisk { get; set; }
```

Disk asynchronously replicated into this disk.

**Property Value**

**Type**

**Description**

`[DiskAsyncReplication](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.DiskAsyncReplication)`

### AsyncSecondaryDisks

```
public MapField<string, DiskAsyncReplicationList> AsyncSecondaryDisks { get; }
```

Output only. \[Output Only\] A list of disks this disk is asynchronously replicated to.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[DiskAsyncReplicationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.DiskAsyncReplicationList)`

### CreationTimestamp

```
public string CreationTimestamp { get; set; }
```

Output only. \[Output Only\] Creation timestamp inRFC3339 text format.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Description

```
public string Description { get; set; }
```

An optional description of this resource. Provide this property when you create the resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DiskEncryptionKey

```
public CustomerEncryptionKey DiskEncryptionKey { get; set; }
```

Encrypts the disk using a customer-supplied encryption key or a customer-managed encryption key.

Encryption keys do not protect access to metadata of the disk.

After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later. For example, to create a disk snapshot, to create a disk image, to create a machine image, or to attach the disk to a virtual machine.

After you encrypt a disk with a customer-managed key, thediskEncryptionKey.kmsKeyName is set to a key _version_ name once the disk is created. The disk is encrypted with this version of the key. In the response, diskEncryptionKey.kmsKeyName appears in the following format:

"diskEncryptionKey.kmsKeyName": "projects/kms\_project\_id/locations/region/keyRings/ key\_region/cryptoKeys/key /cryptoKeysVersions/version

If you do not provide an encryption key when creating the disk, then the disk is encrypted using an automatically generated key and you don't need to provide a key to use the disk later.

**Property Value**

**Type**

**Description**

`[CustomerEncryptionKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.CustomerEncryptionKey)`

### EnableConfidentialCompute

```
public bool EnableConfidentialCompute { get; set; }
```

Whether this disk is using confidential compute mode.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### GuestOsFeatures

```
public RepeatedField<GuestOsFeature> GuestOsFeatures { get; }
```

A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[GuestOsFeature](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.GuestOsFeature)`

### HasAccessMode

```
public bool HasAccessMode { get; }
```

Gets whether the "access\_mode" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasArchitecture

```
public bool HasArchitecture { get; }
```

Gets whether the "architecture" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasCreationTimestamp

```
public bool HasCreationTimestamp { get; }
```

Gets whether the "creation\_timestamp" field is set

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

### HasEnableConfidentialCompute

```
public bool HasEnableConfidentialCompute { get; }
```

Gets whether the "enable\_confidential\_compute" field is set

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

### HasLabelFingerprint

```
public bool HasLabelFingerprint { get; }
```

Gets whether the "label\_fingerprint" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasLastAttachTimestamp

```
public bool HasLastAttachTimestamp { get; }
```

Gets whether the "last\_attach\_timestamp" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasLastDetachTimestamp

```
public bool HasLastDetachTimestamp { get; }
```

Gets whether the "last\_detach\_timestamp" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasLocationHint

```
public bool HasLocationHint { get; }
```

Gets whether the "location\_hint" field is set

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

### HasOptions

```
public bool HasOptions { get; }
```

Gets whether the "options" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasPhysicalBlockSizeBytes

```
public bool HasPhysicalBlockSizeBytes { get; }
```

Gets whether the "physical\_block\_size\_bytes" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasProvisionedIops

```
public bool HasProvisionedIops { get; }
```

Gets whether the "provisioned\_iops" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasProvisionedThroughput

```
public bool HasProvisionedThroughput { get; }
```

Gets whether the "provisioned\_throughput" field is set

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

### HasSatisfiesPzi

```
public bool HasSatisfiesPzi { get; }
```

Gets whether the "satisfies\_pzi" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSatisfiesPzs

```
public bool HasSatisfiesPzs { get; }
```

Gets whether the "satisfies\_pzs" field is set

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

### HasSizeGb

```
public bool HasSizeGb { get; }
```

Gets whether the "size\_gb" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceConsistencyGroupPolicy

```
public bool HasSourceConsistencyGroupPolicy { get; }
```

Gets whether the "source\_consistency\_group\_policy" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceConsistencyGroupPolicyId

```
public bool HasSourceConsistencyGroupPolicyId { get; }
```

Gets whether the "source\_consistency\_group\_policy\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceDisk

```
public bool HasSourceDisk { get; }
```

Gets whether the "source\_disk" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceDiskId

```
public bool HasSourceDiskId { get; }
```

Gets whether the "source\_disk\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceImage

```
public bool HasSourceImage { get; }
```

Gets whether the "source\_image" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceImageId

```
public bool HasSourceImageId { get; }
```

Gets whether the "source\_image\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceInstantSnapshot

```
public bool HasSourceInstantSnapshot { get; }
```

Gets whether the "source\_instant\_snapshot" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceInstantSnapshotId

```
public bool HasSourceInstantSnapshotId { get; }
```

Gets whether the "source\_instant\_snapshot\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceSnapshot

```
public bool HasSourceSnapshot { get; }
```

Gets whether the "source\_snapshot" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceSnapshotId

```
public bool HasSourceSnapshotId { get; }
```

Gets whether the "source\_snapshot\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSourceStorageObject

```
public bool HasSourceStorageObject { get; }
```

Gets whether the "source\_storage\_object" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStatus

```
public bool HasStatus { get; }
```

Gets whether the "status" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStoragePool

```
public bool HasStoragePool { get; }
```

Gets whether the "storage\_pool" field is set

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

Output only. \[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Property Value**

**Type**

**Description**

`[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)`

### Kind

```
public string Kind { get; set; }
```

Output only. \[Output Only\] Type of the resource. Always compute#disk for disks.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LabelFingerprint

```
public string LabelFingerprint { get; set; }
```

A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error412 conditionNotMet.

To see the latest fingerprint, make a get() request to retrieve a disk.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Labels to apply to this disk. These can be later modified by the setLabels method.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LastAttachTimestamp

```
public string LastAttachTimestamp { get; set; }
```

Output only. \[Output Only\] Last attach timestamp inRFC3339 text format.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LastDetachTimestamp

```
public string LastDetachTimestamp { get; set; }
```

Output only. \[Output Only\] Last detach timestamp inRFC3339 text format.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LicenseCodes

```
public RepeatedField<long> LicenseCodes { get; }
```

Integer license codes indicating which licenses are attached to this disk.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### Licenses

```
public RepeatedField<string> Licenses { get; }
```

A list of publicly visible licenses. Reserved for Google's use.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LocationHint

```
public string LocationHint { get; set; }
```

An opaque location hint used to place the disk close to other resources. This field is for use by internal tools that use the public API.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Options

```
public string Options { get; set; }
```

Internal use only.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Params

```
public DiskParams Params { get; set; }
```

Input only. \[Input Only\] Additional params passed with the request, but not persisted as part of resource payload.

**Property Value**

**Type**

**Description**

`[DiskParams](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.DiskParams)`

### PhysicalBlockSizeBytes

```
public long PhysicalBlockSizeBytes { get; set; }
```

Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. The currently supported size is 4096, other sizes may be added in the future. If an unsupported value is requested, the error message will list the supported values for the caller's project.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### ProvisionedIops

```
public long ProvisionedIops { get; set; }
```

Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see theExtreme persistent disk documentation.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### ProvisionedThroughput

```
public long ProvisionedThroughput { get; set; }
```

Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### Region

```
public string Region { get; set; }
```

Output only. \[Output Only\] URL of the region where the disk resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ReplicaZones

```
public RepeatedField<string> ReplicaZones { get; }
```

URLs of the zones where the disk should be replicated to. Only applicable for regional resources.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ResourcePolicies

```
public RepeatedField<string> ResourcePolicies { get; }
```

Resource policies applied to this disk for automatic snapshot creations.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ResourceStatus

```
public DiskResourceStatus ResourceStatus { get; set; }
```

Output only. \[Output Only\] Status information for the disk resource.

**Property Value**

**Type**

**Description**

`[DiskResourceStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.DiskResourceStatus)`

### SatisfiesPzi

```
public bool SatisfiesPzi { get; set; }
```

Output only. Reserved for future use.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SatisfiesPzs

```
public bool SatisfiesPzs { get; set; }
```

Output only. \[Output Only\] Reserved for future use.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SelfLink

```
public string SelfLink { get; set; }
```

Output only. \[Output Only\] Server-defined fully-qualified URL for this resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SizeGb

```
public long SizeGb { get; set; }
```

Size, in GB, of the persistent disk. You can specify this field when creating a persistent disk using thesourceImage, sourceSnapshot, orsourceDisk parameter, or specify it alone to create an empty persistent disk.

If you specify this field along with a source, the value ofsizeGb must not be less than the size of the source. Acceptable values are greater than 0.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### SourceConsistencyGroupPolicy

```
public string SourceConsistencyGroupPolicy { get; set; }
```

Output only. \[Output Only\] URL of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceConsistencyGroupPolicyId

```
public string SourceConsistencyGroupPolicyId { get; set; }
```

Output only. \[Output Only\] ID of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceDisk

```
public string SourceDisk { get; set; }
```

The source disk used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:

 ```
 -
   https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk

 -
   https://www.googleapis.com/compute/v1/projects/project/regions/region/disks/disk

 -
   projects/project/zones/zone/disks/disk

 -
   projects/project/regions/region/disks/disk

 -
   zones/zone/disks/disk

 -
   regions/region/disks/disk
```

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceDiskId

```
public string SourceDiskId { get; set; }
```

Output only. \[Output Only\] The unique ID of the disk used to create this disk. This value identifies the exact disk that was used to create this persistent disk. For example, if you created the persistent disk from a disk that was later deleted and recreated under the same name, the source disk ID would identify the exact version of the disk that was used.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceImage

```
public string SourceImage { get; set; }
```

The source image used to create this disk. If the source image is deleted, this field will not be set.

To create a disk with one of the public operating system images, specify the image by its family name. For example, specifyfamily/debian-9 to use the latest Debian 9 image:

projects/debian-cloud/global/images/family/debian-9

Alternatively, use a specific version of a public operating system image:

projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD

To create a disk with a custom image that you created, specify the image name in the following format:

global/images/my-custom-image

You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name:

global/images/family/my-image-family

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceImageEncryptionKey

```
public CustomerEncryptionKey SourceImageEncryptionKey { get; set; }
```

Thecustomer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.

**Property Value**

**Type**

**Description**

`[CustomerEncryptionKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.CustomerEncryptionKey)`

### SourceImageId

```
public string SourceImageId { get; set; }
```

Output only. \[Output Only\] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceInstantSnapshot

```
public string SourceInstantSnapshot { get; set; }
```

The source instant snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:

 ```
 - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot
 - projects/project/zones/zone/instantSnapshots/instantSnapshot
```

-   zones/zone/instantSnapshots/instantSnapshot

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceInstantSnapshotId

```
public string SourceInstantSnapshotId { get; set; }
```

Output only. \[Output Only\] The unique ID of the instant snapshot used to create this disk. This value identifies the exact instant snapshot that was used to create this persistent disk. For example, if you created the persistent disk from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact version of the instant snapshot that was used.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceSnapshot

```
public string SourceSnapshot { get; set; }
```

The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:

 ```
 - https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot
```

-   projects/project/global/snapshots/snapshot
    -   global/snapshots/snapshot

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceSnapshotEncryptionKey

```
public CustomerEncryptionKey SourceSnapshotEncryptionKey { get; set; }
```

Thecustomer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.

**Property Value**

**Type**

**Description**

`[CustomerEncryptionKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.CustomerEncryptionKey)`

### SourceSnapshotId

```
public string SourceSnapshotId { get; set; }
```

Output only. \[Output Only\] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SourceStorageObject

```
public string SourceStorageObject { get; set; }
```

The full Google Cloud Storage URI where the disk image is stored. This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk. Valid URIs may start with gs:// or [https://storage.googleapis.com/](https://storage.googleapis.com/). This flag is not optimized for creating multiple disks from a source storage object. To create many disks from a source storage object, use gcloud compute images import instead.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Status

```
public string Status { get; set; }
```

Output only. \[Output Only\] The status of disk creation.

 ```
 - CREATING: Disk is provisioning.
 - RESTORING: Source data is being copied into the
 disk.
 - FAILED: Disk creation failed.
 - READY: Disk is ready for use.
 - DELETING: Disk is deleting.
```

Check the Status enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### StoragePool

```
public string StoragePool { get; set; }
```

The storage pool in which the new disk is created. You can provide this as a partial or full URL to the resource. For example, the following are valid values:

 ```
 - https://www.googleapis.com/compute/v1/projects/project/zones/zone/storagePools/storagePool
 - projects/project/zones/zone/storagePools/storagePool
```

-   zones/zone/storagePools/storagePool

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public string Type { get; set; }
```

URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk. For example:projects/project/zones/zone/diskTypes/pd-ssd. See Persistent disk types.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Users

```
public RepeatedField<string> Users { get; }
```

Output only. \[Output Only\] Links to the users of the disk (attached instances) in form:projects/project/zones/zone/instances/instance

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Zone

```
public string Zone { get; set; }
```

Output only. \[Output Only\] URL of the zone where the disk resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
