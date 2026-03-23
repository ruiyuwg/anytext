-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Bare Metal Solution v2 API - Class GetVolumeSnapshotRequest (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/latest/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.7.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.5.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.4.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.1.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.0.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)

```
public sealed class GetVolumeSnapshotRequest : IMessage<GetVolumeSnapshotRequest>, IEquatable<GetVolumeSnapshotRequest>, IDeepCloneable<GetVolumeSnapshotRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Bare Metal Solution v2 API class GetVolumeSnapshotRequest.

Message for requesting volume snapshot information.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetVolumeSnapshotRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BareMetalSolution.V2](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2)

## Assembly

Google.Cloud.BareMetalSolution.V2.dll

## Constructors

### GetVolumeSnapshotRequest()

```
public GetVolumeSnapshotRequest()
```

### GetVolumeSnapshotRequest(GetVolumeSnapshotRequest)

```
public GetVolumeSnapshotRequest(GetVolumeSnapshotRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetVolumeSnapshotRequest](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The name of the snapshot.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### VolumeSnapshotName

```
public VolumeSnapshotName VolumeSnapshotName { get; set; }
```

[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.GetVolumeSnapshotRequest#Google_Cloud_BareMetalSolution_V2_GetVolumeSnapshotRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
