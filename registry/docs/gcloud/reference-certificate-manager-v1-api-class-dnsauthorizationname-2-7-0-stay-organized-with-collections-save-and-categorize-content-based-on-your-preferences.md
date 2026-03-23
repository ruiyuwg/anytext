-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Certificate Manager v1 API - Class DnsAuthorizationName (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/latest/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.8.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.6.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.5.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.4.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.3.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.2.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.1.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/1.0.0-beta02/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)

```
public sealed class DnsAuthorizationName : IResourceName, IEquatable<DnsAuthorizationName>
```

Reference documentation and code samples for the Certificate Manager v1 API class DnsAuthorizationName.

Resource name for the `DnsAuthorization` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DnsAuthorizationName

## Implements

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/IResourceName.cs), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.CertificateManager.V1](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1)

## Assembly

Google.Cloud.CertificateManager.V1.dll

## Constructors

### DnsAuthorizationName(string, string, string)

```
public DnsAuthorizationName(string projectId, string locationId, string dnsAuthorizationId)
```

Constructs a new instance of a [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) class from the component parts of pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`dnsAuthorizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `DnsAuthorization` ID. Must not be `null` or empty.

## Properties

### DnsAuthorizationId

```
public string DnsAuthorizationId { get; }
```

The `DnsAuthorization` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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
public DnsAuthorizationName.ResourceNameType Type { get; }
```

The [DnsAuthorizationName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName.ResourceNameType)`

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
public static string Format(string projectId, string locationId, string dnsAuthorizationId)
```

Formats the IDs into the string representation of this [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) with pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`dnsAuthorizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `DnsAuthorization` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) with pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`.

### FormatProjectLocationDnsAuthorization(string, string, string)

```
public static string FormatProjectLocationDnsAuthorization(string projectId, string locationId, string dnsAuthorizationId)
```

Formats the IDs into the string representation of this [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) with pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`dnsAuthorizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `DnsAuthorization` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) with pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`.

### FromProjectLocationDnsAuthorization(string, string, string)

```
public static DnsAuthorizationName FromProjectLocationDnsAuthorization(string projectId, string locationId, string dnsAuthorizationId)
```

Creates a [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) with the pattern `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`dnsAuthorizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `DnsAuthorization` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`

A new instance of [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static DnsAuthorizationName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/UnparsedResourceName.cs)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`

A new instance of [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) containing the provided `unparsedResourceName`.

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
public static DnsAuthorizationName Parse(string dnsAuthorizationName)
```

Parses the given resource name string into a new [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) instance.

**Parameter**

**Name**

**Description**

`dnsAuthorizationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`

The parsed [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`

### Parse(string, bool)

```
public static DnsAuthorizationName Parse(string dnsAuthorizationName, bool allowUnparsed)
```

Parses the given resource name string into a new [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`dnsAuthorizationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName#Google_Cloud_CertificateManager_V1_DnsAuthorizationName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`

The parsed [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`

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

### TryParse(string, out DnsAuthorizationName)

```
public static bool TryParse(string dnsAuthorizationName, out DnsAuthorizationName result)
```

Tries to parse the given resource name string into a new [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) instance.

**Parameters**

**Name**

**Description**

`dnsAuthorizationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

When this method returns, the parsed [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`

### TryParse(string, bool, out DnsAuthorizationName)

```
public static bool TryParse(string dnsAuthorizationName, bool allowUnparsed, out DnsAuthorizationName result)
```

Tries to parse the given resource name string into a new [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`dnsAuthorizationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName#Google_Cloud_CertificateManager_V1_DnsAuthorizationName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

When this method returns, the parsed [DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(DnsAuthorizationName, DnsAuthorizationName)

```
public static bool operator ==(DnsAuthorizationName a, DnsAuthorizationName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

The first resource name to compare, or null.

`b`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(DnsAuthorizationName, DnsAuthorizationName)

```
public static bool operator !=(DnsAuthorizationName a, DnsAuthorizationName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

The first resource name to compare, or null.

`b`

`[DnsAuthorizationName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DnsAuthorizationName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
