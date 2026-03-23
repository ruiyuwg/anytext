-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Channel v1 API - Class ReportName (2.13.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.13.0keyboard\_arrow\_down

-   [2.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.Channel.V1/latest/Google.Cloud.Channel.V1.ReportName)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.16.0/Google.Cloud.Channel.V1.ReportName)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.15.0/Google.Cloud.Channel.V1.ReportName)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.14.0/Google.Cloud.Channel.V1.ReportName)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.12.0/Google.Cloud.Channel.V1.ReportName)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.11.0/Google.Cloud.Channel.V1.ReportName)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.10.0/Google.Cloud.Channel.V1.ReportName)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.9.0/Google.Cloud.Channel.V1.ReportName)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.8.0/Google.Cloud.Channel.V1.ReportName)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.7.0/Google.Cloud.Channel.V1.ReportName)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.6.0/Google.Cloud.Channel.V1.ReportName)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.5.0/Google.Cloud.Channel.V1.ReportName)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.4.0/Google.Cloud.Channel.V1.ReportName)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ReportName)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.2.0/Google.Cloud.Channel.V1.ReportName)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.1.0/Google.Cloud.Channel.V1.ReportName)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.0.0/Google.Cloud.Channel.V1.ReportName)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ReportName)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.6.0/Google.Cloud.Channel.V1.ReportName)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.5.0/Google.Cloud.Channel.V1.ReportName)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.4.0/Google.Cloud.Channel.V1.ReportName)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.3.0/Google.Cloud.Channel.V1.ReportName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.2.0/Google.Cloud.Channel.V1.ReportName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.1.0/Google.Cloud.Channel.V1.ReportName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.0.0/Google.Cloud.Channel.V1.ReportName)

```
public sealed class ReportName : IResourceName, IEquatable<ReportName>
```

Reference documentation and code samples for the Cloud Channel v1 API class ReportName.

Resource name for the `Report` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ReportName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.Channel.V1](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1)

## Assembly

Google.Cloud.Channel.V1.dll

## Constructors

### ReportName(string, string)

```
public ReportName(string accountId, string reportId)
```

Constructs a new instance of a [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) class from the component parts of pattern `accounts/{account}/reports/{report}`

**Parameters**

**Name**

**Description**

`accountId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Account` ID. Must not be `null` or empty.

`reportId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Report` ID. Must not be `null` or empty.

## Properties

### AccountId

```
public string AccountId { get; }
```

The `Account` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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

### ReportId

```
public string ReportId { get; }
```

The `Report` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public ReportName.ResourceNameType Type { get; }
```

The [ReportName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName.ResourceNameType)`

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
public static string Format(string accountId, string reportId)
```

Formats the IDs into the string representation of this [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) with pattern `accounts/{account}/reports/{report}`.

**Parameters**

**Name**

**Description**

`accountId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Account` ID. Must not be `null` or empty.

`reportId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Report` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) with pattern `accounts/{account}/reports/{report}`.

### FormatAccountReport(string, string)

```
public static string FormatAccountReport(string accountId, string reportId)
```

Formats the IDs into the string representation of this [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) with pattern `accounts/{account}/reports/{report}`.

**Parameters**

**Name**

**Description**

`accountId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Account` ID. Must not be `null` or empty.

`reportId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Report` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) with pattern `accounts/{account}/reports/{report}`.

### FromAccountReport(string, string)

```
public static ReportName FromAccountReport(string accountId, string reportId)
```

Creates a [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) with the pattern `accounts/{account}/reports/{report}`.

**Parameters**

**Name**

**Description**

`accountId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Account` ID. Must not be `null` or empty.

`reportId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Report` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`

A new instance of [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ReportName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`

A new instance of [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) containing the provided `unparsedResourceName`.

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
public static ReportName Parse(string reportName)
```

Parses the given resource name string into a new [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) instance.

**Parameter**

**Name**

**Description**

`reportName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`

The parsed [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `accounts/{account}/reports/{report}`

### Parse(string, bool)

```
public static ReportName Parse(string reportName, bool allowUnparsed)
```

Parses the given resource name string into a new [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`reportName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName#Google_Cloud_Channel_V1_ReportName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`

The parsed [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `accounts/{account}/reports/{report}`

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

### TryParse(string, out ReportName)

```
public static bool TryParse(string reportName, out ReportName result)
```

Tries to parse the given resource name string into a new [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) instance.

**Parameters**

**Name**

**Description**

`reportName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

When this method returns, the parsed [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `accounts/{account}/reports/{report}`

### TryParse(string, bool, out ReportName)

```
public static bool TryParse(string reportName, bool allowUnparsed, out ReportName result)
```

Tries to parse the given resource name string into a new [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`reportName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName#Google_Cloud_Channel_V1_ReportName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

When this method returns, the parsed [ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `accounts/{account}/reports/{report}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(ReportName, ReportName)

```
public static bool operator ==(ReportName a, ReportName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

The first resource name to compare, or null.

`b`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(ReportName, ReportName)

```
public static bool operator !=(ReportName a, ReportName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

The first resource name to compare, or null.

`b`

`[ReportName](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ReportName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
