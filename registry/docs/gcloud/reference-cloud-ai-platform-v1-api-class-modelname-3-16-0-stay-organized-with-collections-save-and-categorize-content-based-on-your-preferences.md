-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class ModelName (3.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ModelName : IResourceName, IEquatable<ModelName>
```

Reference documentation and code samples for the Cloud AI Platform v1 API class ModelName.

Resource name for the `Model` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ModelName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ModelName(string, string, string)

```
public ModelName(string projectId, string locationId, string modelId)
```

Constructs a new instance of a [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) class from the component parts of pattern `projects/{project}/locations/{location}/models/{model}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`modelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Model` ID. Must not be `null` or empty.

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

### ModelId

```
public string ModelId { get; }
```

The `Model` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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
public ModelName.ResourceNameType Type { get; }
```

The [ModelName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName.ResourceNameType)`

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

### Format(string, string, string)

```
public static string Format(string projectId, string locationId, string modelId)
```

Formats the IDs into the string representation of this [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) with pattern `projects/{project}/locations/{location}/models/{model}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`modelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Model` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) with pattern `projects/{project}/locations/{location}/models/{model}`.

### FormatProjectLocationModel(string, string, string)

```
public static string FormatProjectLocationModel(string projectId, string locationId, string modelId)
```

Formats the IDs into the string representation of this [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) with pattern `projects/{project}/locations/{location}/models/{model}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`modelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Model` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) with pattern `projects/{project}/locations/{location}/models/{model}`.

### FromProjectLocationModel(string, string, string)

```
public static ModelName FromProjectLocationModel(string projectId, string locationId, string modelId)
```

Creates a [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) with the pattern `projects/{project}/locations/{location}/models/{model}` .

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`modelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Model` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`

A new instance of [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ModelName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`

A new instance of [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) containing the provided `unparsedResourceName`.

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
public static ModelName Parse(string modelName)
```

Parses the given resource name string into a new [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) instance.

**Parameter**

**Name**

**Description**

`modelName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`

The parsed [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/models/{model}`

### Parse(string, bool)

```
public static ModelName Parse(string modelName, bool allowUnparsed)
```

Parses the given resource name string into a new [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`modelName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName#Google_Cloud_AIPlatform_V1_ModelName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`

The parsed [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/models/{model}`

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

### TryParse(string, out ModelName)

```
public static bool TryParse(string modelName, out ModelName result)
```

Tries to parse the given resource name string into a new [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) instance.

**Parameters**

**Name**

**Description**

`modelName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

When this method returns, the parsed [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/models/{model}`

### TryParse(string, bool, out ModelName)

```
public static bool TryParse(string modelName, bool allowUnparsed, out ModelName result)
```

Tries to parse the given resource name string into a new [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`modelName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName#Google_Cloud_AIPlatform_V1_ModelName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

When this method returns, the parsed [ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/models/{model}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(ModelName, ModelName)

```
public static bool operator ==(ModelName a, ModelName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

The first resource name to compare, or null.

`b`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(ModelName, ModelName)

```
public static bool operator !=(ModelName a, ModelName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

The first resource name to compare, or null.

`b`

`[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.16.0/Google.Cloud.AIPlatform.V1.ModelName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
