-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1beta1 API - Class RagEngineConfigName (1.0.0-beta74) Stay organized with collections Save and categorize content based on your preferences.

1.0.0-beta74 (latest) 1.0.0-beta73

```
public sealed class RagEngineConfigName : IResourceName, IEquatable<RagEngineConfigName>
```

Reference documentation and code samples for the Vertex AI v1beta1 API class RagEngineConfigName.

Resource name for the `RagEngineConfig` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RagEngineConfigName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.AIPlatform.V1Beta1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1)

## Assembly

Google.Cloud.AIPlatform.V1Beta1.dll

## Constructors

### RagEngineConfigName(string, string)

```
public RagEngineConfigName(string projectId, string locationId)
```

Constructs a new instance of a [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) class from the component parts of pattern `projects/{project}/locations/{location}/ragEngineConfig`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

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

### Type

```
public RagEngineConfigName.ResourceNameType Type { get; }
```

The [RagEngineConfigName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName.ResourceNameType)`

### UnparsedResource

```
public UnparsedResourceName UnparsedResource { get; }
```

The contained [UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html). Only non-`null` if this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`

## Methods

### Format(string, string)

```
public static string Format(string projectId, string locationId)
```

Formats the IDs into the string representation of this [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) with pattern `projects/{project}/locations/{location}/ragEngineConfig`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) with pattern `projects/{project}/locations/{location}/ragEngineConfig`.

### FormatProjectLocation(string, string)

```
public static string FormatProjectLocation(string projectId, string locationId)
```

Formats the IDs into the string representation of this [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) with pattern `projects/{project}/locations/{location}/ragEngineConfig`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) with pattern `projects/{project}/locations/{location}/ragEngineConfig`.

### FromProjectLocation(string, string)

```
public static RagEngineConfigName FromProjectLocation(string projectId, string locationId)
```

Creates a [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) with the pattern `projects/{project}/locations/{location}/ragEngineConfig`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`

A new instance of [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static RagEngineConfigName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`

A new instance of [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) containing the provided `unparsedResourceName`.

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
public static RagEngineConfigName Parse(string ragEngineConfigName)
```

Parses the given resource name string into a new [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) instance.

**Parameter**

**Name**

**Description**

`ragEngineConfigName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`

The parsed [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/ragEngineConfig`

### Parse(string, bool)

```
public static RagEngineConfigName Parse(string ragEngineConfigName, bool allowUnparsed)
```

Parses the given resource name string into a new [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`ragEngineConfigName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName#Google_Cloud_AIPlatform_V1Beta1_RagEngineConfigName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`

The parsed [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/ragEngineConfig`

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

### TryParse(string, out RagEngineConfigName)

```
public static bool TryParse(string ragEngineConfigName, out RagEngineConfigName result)
```

Tries to parse the given resource name string into a new [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) instance.

**Parameters**

**Name**

**Description**

`ragEngineConfigName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

When this method returns, the parsed [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/ragEngineConfig`

### TryParse(string, bool, out RagEngineConfigName)

```
public static bool TryParse(string ragEngineConfigName, bool allowUnparsed, out RagEngineConfigName result)
```

Tries to parse the given resource name string into a new [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`ragEngineConfigName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName#Google_Cloud_AIPlatform_V1Beta1_RagEngineConfigName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

When this method returns, the parsed [RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/ragEngineConfig`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(RagEngineConfigName, RagEngineConfigName)

```
public static bool operator ==(RagEngineConfigName a, RagEngineConfigName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

The first resource name to compare, or null.

`b`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(RagEngineConfigName, RagEngineConfigName)

```
public static bool operator !=(RagEngineConfigName a, RagEngineConfigName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

The first resource name to compare, or null.

`b`

`[RagEngineConfigName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.RagEngineConfigName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
