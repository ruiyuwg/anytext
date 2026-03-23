-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Eventarc v1 API - Class ProviderName (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/latest/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.8.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.7.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.6.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.5.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.4.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.3.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.2.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.0.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.3.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.1.0/Google.Cloud.Eventarc.V1.ProviderName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.0.0/Google.Cloud.Eventarc.V1.ProviderName)

```
public sealed class ProviderName : IResourceName, IEquatable<ProviderName>
```

Reference documentation and code samples for the Eventarc v1 API class ProviderName.

Resource name for the `Provider` resource.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ProviderName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)\>

## Inherited Members

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

## Namespace

[Google.Cloud.Eventarc.V1](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1)

## Assembly

Google.Cloud.Eventarc.V1.dll

## Constructors

### ProviderName(String, String, String)

```
public ProviderName(string projectId, string locationId, string providerId)
```

Constructs a new instance of a [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) class from the component parts of pattern `projects/{project}/locations/{location}/providers/{provider}`

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`providerId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Provider` ID. Must not be `null` or empty.

## Properties

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

### ProviderId

```
public string ProviderId { get; }
```

The `Provider` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public ProviderName.ResourceNameType Type { get; }
```

The [ProviderName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ProviderName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName.ResourceNameType)`

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

### Format(String, String, String)

```
public static string Format(string projectId, string locationId, string providerId)
```

Formats the IDs into the string representation of this [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) with pattern `projects/{project}/locations/{location}/providers/{provider}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`providerId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Provider` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) with pattern `projects/{project}/locations/{location}/providers/{provider}`.

### FormatProjectLocationProvider(String, String, String)

```
public static string FormatProjectLocationProvider(string projectId, string locationId, string providerId)
```

Formats the IDs into the string representation of this [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) with pattern `projects/{project}/locations/{location}/providers/{provider}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`providerId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Provider` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) with pattern `projects/{project}/locations/{location}/providers/{provider}`.

### FromProjectLocationProvider(String, String, String)

```
public static ProviderName FromProjectLocationProvider(string projectId, string locationId, string providerId)
```

Creates a [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) with the pattern `projects/{project}/locations/{location}/providers/{provider}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`providerId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Provider` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`

A new instance of [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ProviderName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`

A new instance of [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) containing the provided `unparsedResourceName` .

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
public static ProviderName Parse(string providerName)
```

Parses the given resource name string into a new [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) instance.

**Parameter**

**Name**

**Description**

`providerName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`

The parsed [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/providers/{provider}`

### Parse(String, Boolean)

```
public static ProviderName Parse(string providerName, bool allowUnparsed)
```

Parses the given resource name string into a new [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`providerName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName#Google_Cloud_Eventarc_V1_ProviderName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`

The parsed [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/providers/{provider}`

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

### TryParse(String, out ProviderName)

```
public static bool TryParse(string providerName, out ProviderName result)
```

Tries to parse the given resource name string into a new [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) instance.

**Parameters**

**Name**

**Description**

`providerName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

When this method returns, the parsed [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/providers/{provider}`

### TryParse(String, Boolean, out ProviderName)

```
public static bool TryParse(string providerName, bool allowUnparsed, out ProviderName result)
```

Tries to parse the given resource name string into a new [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`providerName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName#Google_Cloud_Eventarc_V1_ProviderName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

When this method returns, the parsed [ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/providers/{provider}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### Equality(ProviderName, ProviderName)

```
public static bool operator ==(ProviderName a, ProviderName b)
```

**Parameters**

**Name**

**Description**

`a`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

`b`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Inequality(ProviderName, ProviderName)

```
public static bool operator !=(ProviderName a, ProviderName b)
```

**Parameters**

**Name**

**Description**

`a`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

`b`

`[ProviderName](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ProviderName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
