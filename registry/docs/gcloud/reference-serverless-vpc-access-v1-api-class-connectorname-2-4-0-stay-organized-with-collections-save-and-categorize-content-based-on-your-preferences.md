-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Serverless VPC Access v1 API - Class ConnectorName (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/latest/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.5.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.3.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.2.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.1.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.0.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/1.1.0/Google.Cloud.VpcAccess.V1.ConnectorName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/1.0.0/Google.Cloud.VpcAccess.V1.ConnectorName)

```
public sealed class ConnectorName : IResourceName, IEquatable<ConnectorName>
```

Reference documentation and code samples for the Serverless VPC Access v1 API class ConnectorName.

Resource name for the `Connector` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ConnectorName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.VpcAccess.V1](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1)

## Assembly

Google.Cloud.VpcAccess.V1.dll

## Constructors

### ConnectorName(string, string, string)

```
public ConnectorName(string projectId, string locationId, string connectorId)
```

Constructs a new instance of a [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) class from the component parts of pattern `projects/{project}/locations/{location}/connectors/{connector}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`connectorId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Connector` ID. Must not be `null` or empty.

## Properties

### ConnectorId

```
public string ConnectorId { get; }
```

The `Connector` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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
public ConnectorName.ResourceNameType Type { get; }
```

The [ConnectorName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName.ResourceNameType)`

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

### Format(string, string, string)

```
public static string Format(string projectId, string locationId, string connectorId)
```

Formats the IDs into the string representation of this [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) with pattern `projects/{project}/locations/{location}/connectors/{connector}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`connectorId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Connector` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) with pattern `projects/{project}/locations/{location}/connectors/{connector}`.

### FormatProjectLocationConnector(string, string, string)

```
public static string FormatProjectLocationConnector(string projectId, string locationId, string connectorId)
```

Formats the IDs into the string representation of this [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) with pattern `projects/{project}/locations/{location}/connectors/{connector}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`connectorId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Connector` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) with pattern `projects/{project}/locations/{location}/connectors/{connector}`.

### FromProjectLocationConnector(string, string, string)

```
public static ConnectorName FromProjectLocationConnector(string projectId, string locationId, string connectorId)
```

Creates a [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) with the pattern `projects/{project}/locations/{location}/connectors/{connector}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`connectorId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Connector` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`

A new instance of [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ConnectorName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`

A new instance of [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) containing the provided `unparsedResourceName`.

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
public static ConnectorName Parse(string connectorName)
```

Parses the given resource name string into a new [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) instance.

**Parameter**

**Name**

**Description**

`connectorName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`

The parsed [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/connectors/{connector}`

### Parse(string, bool)

```
public static ConnectorName Parse(string connectorName, bool allowUnparsed)
```

Parses the given resource name string into a new [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`connectorName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName#Google_Cloud_VpcAccess_V1_ConnectorName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`

The parsed [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/connectors/{connector}`

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

### TryParse(string, out ConnectorName)

```
public static bool TryParse(string connectorName, out ConnectorName result)
```

Tries to parse the given resource name string into a new [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) instance.

**Parameters**

**Name**

**Description**

`connectorName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

When this method returns, the parsed [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/connectors/{connector}`

### TryParse(string, bool, out ConnectorName)

```
public static bool TryParse(string connectorName, bool allowUnparsed, out ConnectorName result)
```

Tries to parse the given resource name string into a new [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`connectorName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName#Google_Cloud_VpcAccess_V1_ConnectorName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

When this method returns, the parsed [ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/connectors/{connector}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(ConnectorName, ConnectorName)

```
public static bool operator ==(ConnectorName a, ConnectorName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

The first resource name to compare, or null.

`b`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(ConnectorName, ConnectorName)

```
public static bool operator !=(ConnectorName a, ConnectorName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

The first resource name to compare, or null.

`b`

`[ConnectorName](/dotnet/docs/reference/Google.Cloud.VpcAccess.V1/2.4.0/Google.Cloud.VpcAccess.V1.ConnectorName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
