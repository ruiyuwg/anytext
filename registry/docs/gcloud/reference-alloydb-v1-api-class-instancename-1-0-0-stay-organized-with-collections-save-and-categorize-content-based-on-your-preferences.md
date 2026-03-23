-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1 API - Class InstanceName (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/latest/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.13.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.13.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.12.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.11.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.10.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.9.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.8.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.7.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.6.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.5.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.4.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.3.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.InstanceName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)

```
public sealed class InstanceName : IResourceName, IEquatable<InstanceName>
```

Reference documentation and code samples for the AlloyDB v1 API class InstanceName.

Resource name for the `Instance` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> InstanceName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.AlloyDb.V1](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1)

## Assembly

Google.Cloud.AlloyDb.V1.dll

## Constructors

### InstanceName(string, string, string, string)

```
public InstanceName(string projectId, string locationId, string clusterId, string instanceId)
```

Constructs a new instance of a [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) class from the component parts of pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`clusterId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Cluster` ID. Must not be `null` or empty.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Instance` ID. Must not be `null` or empty.

## Properties

### ClusterId

```
public string ClusterId { get; }
```

The `Cluster` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### InstanceId

```
public string InstanceId { get; }
```

The `Instance` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

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

### Type

```
public InstanceName.ResourceNameType Type { get; }
```

The [InstanceName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName.ResourceNameType)`

### UnparsedResource

```
public UnparsedResourceName UnparsedResource { get; }
```

The contained [UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs). Only non-`null` if this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs)`

## Methods

### Format(string, string, string, string)

```
public static string Format(string projectId, string locationId, string clusterId, string instanceId)
```

Formats the IDs into the string representation of this [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) with pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`clusterId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Cluster` ID. Must not be `null` or empty.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Instance` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) with pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`.

### FormatProjectLocationClusterInstance(string, string, string, string)

```
public static string FormatProjectLocationClusterInstance(string projectId, string locationId, string clusterId, string instanceId)
```

Formats the IDs into the string representation of this [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) with pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`clusterId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Cluster` ID. Must not be `null` or empty.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Instance` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) with pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`.

### FromProjectLocationClusterInstance(string, string, string, string)

```
public static InstanceName FromProjectLocationClusterInstance(string projectId, string locationId, string clusterId, string instanceId)
```

Creates a [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) with the pattern `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`clusterId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Cluster` ID. Must not be `null` or empty.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Instance` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`

A new instance of [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static InstanceName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`

A new instance of [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) containing the provided `unparsedResourceName` .

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
public static InstanceName Parse(string instanceName)
```

Parses the given resource name string into a new [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) instance.

**Parameter**

**Name**

**Description**

`instanceName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`

The parsed [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`

### Parse(string, bool)

```
public static InstanceName Parse(string instanceName, bool allowUnparsed)
```

Parses the given resource name string into a new [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`instanceName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName#Google_Cloud_AlloyDb_V1_InstanceName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`

The parsed [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`

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

### TryParse(string, out InstanceName)

```
public static bool TryParse(string instanceName, out InstanceName result)
```

Tries to parse the given resource name string into a new [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) instance.

**Parameters**

**Name**

**Description**

`instanceName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

When this method returns, the parsed [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`

### TryParse(string, bool, out InstanceName)

```
public static bool TryParse(string instanceName, bool allowUnparsed, out InstanceName result)
```

Tries to parse the given resource name string into a new [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`instanceName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName#Google_Cloud_AlloyDb_V1_InstanceName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

When this method returns, the parsed [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(InstanceName, InstanceName)

```
public static bool operator ==(InstanceName a, InstanceName b)
```

**Parameters**

**Name**

**Description**

`a`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

`b`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### operator !=(InstanceName, InstanceName)

```
public static bool operator !=(InstanceName a, InstanceName b)
```

**Parameters**

**Name**

**Description**

`a`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

`b`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.InstanceName)`  

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
