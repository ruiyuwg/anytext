-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Bare Metal Solution v2 API - Class Volume (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/latest/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.7.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.5.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.4.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.1.0/Google.Cloud.BareMetalSolution.V2.Volume)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.0.0/Google.Cloud.BareMetalSolution.V2.Volume)

```
public sealed class Volume : IMessage<Volume>, IEquatable<Volume>, IDeepCloneable<Volume>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Bare Metal Solution v2 API class Volume.

A storage volume.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Volume

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BareMetalSolution.V2](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2)

## Assembly

Google.Cloud.BareMetalSolution.V2.dll

## Constructors

### Volume()

```
public Volume()
```

### Volume(Volume)

```
public Volume(Volume other)
```

**Parameter**

**Name**

**Description**

`other`

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)`  

## Properties

### Attached

```
public bool Attached { get; set; }
```

Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### AutoGrownSizeGib

```
public long AutoGrownSizeGib { get; set; }
```

The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### BootVolume

```
public bool BootVolume { get; set; }
```

Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### CurrentSizeGib

```
public long CurrentSizeGib { get; set; }
```

The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### EmergencySizeGib

```
public long EmergencySizeGib { get; set; }
```

Additional emergency size that was requested for this Volume, in GiB. current\_size\_gib includes this value.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### ExpireTime

```
public Timestamp ExpireTime { get; set; }
```

Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Id

```
public string Id { get; set; }
```

An identifier for the `Volume`, generated by the backend.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Instances

```
public RepeatedField<string> Instances { get; }
```

Output only. Instances this Volume is attached to. This field is set only in Get requests.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### InstancesAsInstanceNames

```
public ResourceNameList<InstanceName> InstancesAsInstanceNames { get; }
```

[InstanceName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.InstanceName)\-typed view over the [Instances](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume#Google_Cloud_BareMetalSolution_V2_Volume_Instances) resource name property.

**Property Value**

**Type**

**Description**

`[ResourceNameList](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNameList.cs)[InstanceName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.InstanceName)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Labels as key value pairs.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MaxSizeGib

```
public long MaxSizeGib { get; set; }
```

Maximum size volume can be expanded to in case of evergency, in GiB.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). Format: `projects/{project}/locations/{location}/volumes/{volume}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Notes

```
public string Notes { get; set; }
```

Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OriginallyRequestedSizeGib

```
public long OriginallyRequestedSizeGib { get; set; }
```

Originally requested size, in GiB.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### PerformanceTier

```
public VolumePerformanceTier PerformanceTier { get; set; }
```

Immutable. Performance tier of the Volume. Default is SHARED.

**Property Value**

**Type**

**Description**

`[VolumePerformanceTier](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumePerformanceTier)`

### Pod

```
public string Pod { get; set; }
```

Immutable. Pod name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Protocol

```
public Volume.Types.Protocol Protocol { get; set; }
```

Output only. Storage protocol for the Volume.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[Protocol](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.Protocol)`

### RemainingSpaceGib

```
public long RemainingSpaceGib { get; set; }
```

The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### RequestedSizeGib

```
public long RequestedSizeGib { get; set; }
```

The requested size of this storage volume, in GiB.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### SnapshotAutoDeleteBehavior

```
public Volume.Types.SnapshotAutoDeleteBehavior SnapshotAutoDeleteBehavior { get; set; }
```

The behavior to use when snapshot reserved space is full.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[SnapshotAutoDeleteBehavior](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.SnapshotAutoDeleteBehavior)`

### SnapshotEnabled

```
public bool SnapshotEnabled { get; set; }
```

Whether snapshots are enabled.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SnapshotReservationDetail

```
public Volume.Types.SnapshotReservationDetail SnapshotReservationDetail { get; set; }
```

Details about snapshot space reservation and usage on the storage volume.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[SnapshotReservationDetail](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.SnapshotReservationDetail)`

### State

```
public Volume.Types.State State { get; set; }
```

The state of this storage volume.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[State](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.State)`

### StorageType

```
public Volume.Types.StorageType StorageType { get; set; }
```

The storage type for this volume.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[StorageType](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.StorageType)`

### VolumeName

```
public VolumeName VolumeName { get; set; }
```

[VolumeName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume#Google_Cloud_BareMetalSolution_V2_Volume_Name) resource name property.

**Property Value**

**Type**

**Description**

`[VolumeName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeName)`

### WorkloadProfile

```
public Volume.Types.WorkloadProfile WorkloadProfile { get; set; }
```

The workload profile for the volume.

**Property Value**

**Type**

**Description**

`[Volume](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types)[WorkloadProfile](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.Volume.Types.WorkloadProfile)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
