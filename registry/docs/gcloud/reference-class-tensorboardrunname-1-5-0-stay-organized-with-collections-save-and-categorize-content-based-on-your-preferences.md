-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class TensorboardRunName (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class TensorboardRunName : IResourceName, IEquatable<TensorboardRunName>
```

Resource name for the `TensorboardRun` resource.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TensorboardRunName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)\>

## Inherited Members

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### TensorboardRunName(String, String, String, String, String)

```
public TensorboardRunName(string projectId, string locationId, string tensorboardId, string experimentId, string runId)
```

Constructs a new instance of a [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) class from the component parts of pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`tensorboardId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Tensorboard` ID. Must not be `null` or empty.

`experimentId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Experiment` ID. Must not be `null` or empty.

`runId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Run` ID. Must not be `null` or empty.

## Properties

### ExperimentId

```
public string ExperimentId { get; }
```

The `Experiment` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### IsKnownPattern

```
public bool IsKnownPattern { get; }
```

Whether this instance contains a resource name with a known pattern.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### LocationId

```
public string LocationId { get; }
```

The `Location` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProjectId

```
public string ProjectId { get; }
```

The `Project` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### RunId

```
public string RunId { get; }
```

The `Run` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### TensorboardId

```
public string TensorboardId { get; }
```

The `Tensorboard` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public TensorboardRunName.ResourceNameType Type { get; }
```

The [TensorboardRunName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[TensorboardRunName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName.ResourceNameType)`

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

### Format(String, String, String, String, String)

```
public static string Format(string projectId, string locationId, string tensorboardId, string experimentId, string runId)
```

Formats the IDs into the string representation of this [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) with pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` .

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`tensorboardId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Tensorboard` ID. Must not be `null` or empty.

`experimentId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Experiment` ID. Must not be `null` or empty.

`runId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Run` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) with pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` .

### FormatProjectLocationTensorboardExperimentRun(String, String, String, String, String)

```
public static string FormatProjectLocationTensorboardExperimentRun(string projectId, string locationId, string tensorboardId, string experimentId, string runId)
```

Formats the IDs into the string representation of this [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) with pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` .

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`tensorboardId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Tensorboard` ID. Must not be `null` or empty.

`experimentId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Experiment` ID. Must not be `null` or empty.

`runId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Run` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) with pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` .

### FromProjectLocationTensorboardExperimentRun(String, String, String, String, String)

```
public static TensorboardRunName FromProjectLocationTensorboardExperimentRun(string projectId, string locationId, string tensorboardId, string experimentId, string runId)
```

Creates a [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) with the pattern `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}` .

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`tensorboardId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Tensorboard` ID. Must not be `null` or empty.

`experimentId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Experiment` ID. Must not be `null` or empty.

`runId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Run` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`

A new instance of [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static TensorboardRunName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`

A new instance of [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) containing the provided `unparsedResourceName`.

### GetHashCode()

```
public override int GetHashCode()
```

Returns a hash code for this resource name.

**Returns**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

**Overrides**

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

### Parse(String)

```
public static TensorboardRunName Parse(string tensorboardRunName)
```

Parses the given resource name string into a new [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) instance.

**Parameter**

**Name**

**Description**

`tensorboardRunName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`

The parsed [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`

### Parse(String, Boolean)

```
public static TensorboardRunName Parse(string tensorboardRunName, bool allowUnparsed)
```

Parses the given resource name string into a new [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`tensorboardRunName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName#Google_Cloud_AIPlatform_V1_TensorboardRunName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`

The parsed [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`

Or may be in any format if `allowUnparsed` is `true`.

### ToString()

```
public override string ToString()
```

The string representation of the resource name.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of the resource name.

**Overrides**

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

### TryParse(String, out TensorboardRunName)

```
public static bool TryParse(string tensorboardRunName, out TensorboardRunName result)
```

Tries to parse the given resource name string into a new [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) instance.

**Parameters**

**Name**

**Description**

`tensorboardRunName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

When this method returns, the parsed [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`

### TryParse(String, Boolean, out TensorboardRunName)

```
public static bool TryParse(string tensorboardRunName, bool allowUnparsed, out TensorboardRunName result)
```

Tries to parse the given resource name string into a new [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`tensorboardRunName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName#Google_Cloud_AIPlatform_V1_TensorboardRunName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

When this method returns, the parsed [TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### Equality(TensorboardRunName, TensorboardRunName)

```
public static bool operator ==(TensorboardRunName a, TensorboardRunName b)
```

**Parameters**

**Name**

**Description**

`a`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

`b`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Inequality(TensorboardRunName, TensorboardRunName)

```
public static bool operator !=(TensorboardRunName a, TensorboardRunName b)
```

**Parameters**

**Name**

**Description**

`a`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

`b`

`[TensorboardRunName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.5.0/Google.Cloud.AIPlatform.V1.TensorboardRunName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
