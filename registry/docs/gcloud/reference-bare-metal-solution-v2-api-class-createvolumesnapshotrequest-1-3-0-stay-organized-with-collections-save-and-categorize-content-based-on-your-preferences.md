-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Bare Metal Solution v2 API - Class CreateVolumeSnapshotRequest (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/latest/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.7.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.5.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.4.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.1.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.0.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)

```
public sealed class CreateVolumeSnapshotRequest : IMessage<CreateVolumeSnapshotRequest>, IEquatable<CreateVolumeSnapshotRequest>, IDeepCloneable<CreateVolumeSnapshotRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Bare Metal Solution v2 API class CreateVolumeSnapshotRequest.

Message for creating a volume snapshot.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateVolumeSnapshotRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BareMetalSolution.V2](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2)

## Assembly

Google.Cloud.BareMetalSolution.V2.dll

## Constructors

### CreateVolumeSnapshotRequest()

```
public CreateVolumeSnapshotRequest()
```

### CreateVolumeSnapshotRequest(CreateVolumeSnapshotRequest)

```
public CreateVolumeSnapshotRequest(CreateVolumeSnapshotRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest)`  

## Properties

### Parent

```
public string Parent { get; set; }
```

Required. The volume to snapshot.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsVolumeName

```
public VolumeName ParentAsVolumeName { get; set; }
```

[VolumeName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.CreateVolumeSnapshotRequest#Google_Cloud_BareMetalSolution_V2_CreateVolumeSnapshotRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[VolumeName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeName)`

### VolumeSnapshot

```
public VolumeSnapshot VolumeSnapshot { get; set; }
```

Required. The snapshot to create.

**Property Value**

**Type**

**Description**

`[VolumeSnapshot](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshot)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
