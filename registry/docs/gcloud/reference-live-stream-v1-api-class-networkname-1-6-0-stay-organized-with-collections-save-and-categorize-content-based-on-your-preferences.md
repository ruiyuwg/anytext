-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Live Stream v1 API - Class NetworkName (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.6.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/latest/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.10.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.9.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.8.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.5.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.3.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.2.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.1.0/Google.Cloud.Video.LiveStream.V1.NetworkName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.0.0/Google.Cloud.Video.LiveStream.V1.NetworkName)

```
public sealed class NetworkName : IResourceName, IEquatable<NetworkName>
```

Reference documentation and code samples for the Live Stream v1 API class NetworkName.

Resource name for the `Network` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NetworkName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.Video.LiveStream.V1](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1)

## Assembly

Google.Cloud.Video.LiveStream.V1.dll

## Constructors

### NetworkName(string, string)

```
public NetworkName(string projectId, string networkId)
```

Constructs a new instance of a [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) class from the component parts of pattern `projects/{project}/global/networks/{network}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`networkId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Network` ID. Must not be `null` or empty.

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

### NetworkId

```
public string NetworkId { get; }
```

The `Network` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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
public NetworkName.ResourceNameType Type { get; }
```

The [NetworkName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName.ResourceNameType)`

### UnparsedResource

```
public UnparsedResourceName UnparsedResource { get; }
```

The contained [UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs). Only non-`null` if this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs)`

## Methods

### Format(string, string)

```
public static string Format(string projectId, string networkId)
```

Formats the IDs into the string representation of this [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) with pattern `projects/{project}/global/networks/{network}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`networkId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Network` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) with pattern `projects/{project}/global/networks/{network}`.

### FormatProjectNetwork(string, string)

```
public static string FormatProjectNetwork(string projectId, string networkId)
```

Formats the IDs into the string representation of this [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) with pattern `projects/{project}/global/networks/{network}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`networkId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Network` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) with pattern `projects/{project}/global/networks/{network}`.

### FromProjectNetwork(string, string)

```
public static NetworkName FromProjectNetwork(string projectId, string networkId)
```

Creates a [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) with the pattern `projects/{project}/global/networks/{network}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`networkId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Network` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`

A new instance of [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static NetworkName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`

A new instance of [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) containing the provided `unparsedResourceName`.

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
public static NetworkName Parse(string networkName)
```

Parses the given resource name string into a new [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) instance.

**Parameter**

**Name**

**Description**

`networkName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`

The parsed [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/global/networks/{network}`

### Parse(string, bool)

```
public static NetworkName Parse(string networkName, bool allowUnparsed)
```

Parses the given resource name string into a new [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`networkName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName#Google_Cloud_Video_LiveStream_V1_NetworkName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`

The parsed [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/global/networks/{network}`

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

### TryParse(string, out NetworkName)

```
public static bool TryParse(string networkName, out NetworkName result)
```

Tries to parse the given resource name string into a new [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) instance.

**Parameters**

**Name**

**Description**

`networkName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

When this method returns, the parsed [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/global/networks/{network}`

### TryParse(string, bool, out NetworkName)

```
public static bool TryParse(string networkName, bool allowUnparsed, out NetworkName result)
```

Tries to parse the given resource name string into a new [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`networkName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName#Google_Cloud_Video_LiveStream_V1_NetworkName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

When this method returns, the parsed [NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/global/networks/{network}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(NetworkName, NetworkName)

```
public static bool operator ==(NetworkName a, NetworkName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

The first resource name to compare, or null.

`b`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(NetworkName, NetworkName)

```
public static bool operator !=(NetworkName a, NetworkName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

The first resource name to compare, or null.

`b`

`[NetworkName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.NetworkName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
