-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Bare Metal Solution v2 API - Class VolumeSnapshotName (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/latest/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.7.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.5.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.4.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.1.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.0.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)

```
public sealed class VolumeSnapshotName : IResourceName, IEquatable<VolumeSnapshotName>
```

Reference documentation and code samples for the Bare Metal Solution v2 API class VolumeSnapshotName.

Resource name for the `VolumeSnapshot` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> VolumeSnapshotName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.BareMetalSolution.V2](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2)

## Assembly

Google.Cloud.BareMetalSolution.V2.dll

## Constructors

### VolumeSnapshotName(string, string, string, string)

```
public VolumeSnapshotName(string projectId, string locationId, string volumeId, string snapshotId)
```

Constructs a new instance of a [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) class from the component parts of pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`volumeId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Volume` ID. Must not be `null` or empty.

`snapshotId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Snapshot` ID. Must not be `null` or empty.

## Properties

### IsKnownPattern

```
public bool IsKnownPattern { get; }
```

Whether this instance contains a resource name with a known pattern.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### LocationId

```
public string LocationId { get; }
```

The `Location` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ProjectId

```
public string ProjectId { get; }
```

The `Project` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SnapshotId

```
public string SnapshotId { get; }
```

The `Snapshot` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public VolumeSnapshotName.ResourceNameType Type { get; }
```

The [VolumeSnapshotName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName.ResourceNameType)`

### UnparsedResource

```
public UnparsedResourceName UnparsedResource { get; }
```

The contained [UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs). Only non-`null` if this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs)`

### VolumeId

```
public string VolumeId { get; }
```

The `Volume` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### Format(string, string, string, string)

```
public static string Format(string projectId, string locationId, string volumeId, string snapshotId)
```

Formats the IDs into the string representation of this [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) with pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`volumeId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Volume` ID. Must not be `null` or empty.

`snapshotId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Snapshot` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) with pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`.

### FormatProjectLocationVolumeSnapshot(string, string, string, string)

```
public static string FormatProjectLocationVolumeSnapshot(string projectId, string locationId, string volumeId, string snapshotId)
```

Formats the IDs into the string representation of this [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) with pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`volumeId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Volume` ID. Must not be `null` or empty.

`snapshotId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Snapshot` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) with pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`.

### FromProjectLocationVolumeSnapshot(string, string, string, string)

```
public static VolumeSnapshotName FromProjectLocationVolumeSnapshot(string projectId, string locationId, string volumeId, string snapshotId)
```

Creates a [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) with the pattern `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`volumeId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Volume` ID. Must not be `null` or empty.

`snapshotId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Snapshot` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`

A new instance of [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static VolumeSnapshotName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`

A new instance of [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) containing the provided `unparsedResourceName`.

### GetHashCode()

```
public override int GetHashCode()
```

Returns a hash code for this resource name.

**Returns**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

**Overrides**

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

### Parse(string)

```
public static VolumeSnapshotName Parse(string volumeSnapshotName)
```

Parses the given resource name string into a new [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) instance.

**Parameter**

**Name**

**Description**

`volumeSnapshotName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`

The parsed [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`

### Parse(string, bool)

```
public static VolumeSnapshotName Parse(string volumeSnapshotName, bool allowUnparsed)
```

Parses the given resource name string into a new [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`volumeSnapshotName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName#Google_Cloud_BareMetalSolution_V2_VolumeSnapshotName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`

The parsed [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`

Or may be in any format if `allowUnparsed` is `true`.

### ToString()

```
public override string ToString()
```

The string representation of the resource name.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of the resource name.

**Overrides**

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

### TryParse(string, out VolumeSnapshotName)

```
public static bool TryParse(string volumeSnapshotName, out VolumeSnapshotName result)
```

Tries to parse the given resource name string into a new [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) instance.

**Parameters**

**Name**

**Description**

`volumeSnapshotName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

When this method returns, the parsed [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`

### TryParse(string, bool, out VolumeSnapshotName)

```
public static bool TryParse(string volumeSnapshotName, bool allowUnparsed, out VolumeSnapshotName result)
```

Tries to parse the given resource name string into a new [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`volumeSnapshotName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName#Google_Cloud_BareMetalSolution_V2_VolumeSnapshotName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

When this method returns, the parsed [VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(VolumeSnapshotName, VolumeSnapshotName)

```
public static bool operator ==(VolumeSnapshotName a, VolumeSnapshotName b)
```

**Parameters**

**Name**

**Description**

`a`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

`b`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### operator !=(VolumeSnapshotName, VolumeSnapshotName)

```
public static bool operator !=(VolumeSnapshotName a, VolumeSnapshotName b)
```

**Parameters**

**Name**

**Description**

`a`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

`b`

`[VolumeSnapshotName](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VolumeSnapshotName)`  

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
