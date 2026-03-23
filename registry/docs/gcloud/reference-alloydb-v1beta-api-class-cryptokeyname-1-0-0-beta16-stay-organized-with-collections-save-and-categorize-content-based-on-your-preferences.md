-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1beta API - Class CryptoKeyName (1.0.0-beta16) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta16 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)
-   [1.0.0-beta15](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/1.0.0-beta15/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)

```
public sealed class CryptoKeyName : IResourceName, IEquatable<CryptoKeyName>
```

Reference documentation and code samples for the AlloyDB v1beta API class CryptoKeyName.

Resource name for the `CryptoKey` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CryptoKeyName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.AlloyDb.V1Beta](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta)

## Assembly

Google.Cloud.AlloyDb.V1Beta.dll

## Constructors

### CryptoKeyName(string, string, string, string)

```
public CryptoKeyName(string projectId, string locationId, string keyRingId, string cryptoKeyId)
```

Constructs a new instance of a [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) class from the component parts of pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`keyRingId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `KeyRing` ID. Must not be `null` or empty.

`cryptoKeyId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `CryptoKey` ID. Must not be `null` or empty.

## Properties

### CryptoKeyId

```
public string CryptoKeyId { get; }
```

The `CryptoKey` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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

### KeyRingId

```
public string KeyRingId { get; }
```

The `KeyRing` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

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
public CryptoKeyName.ResourceNameType Type { get; }
```

The [CryptoKeyName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName.ResourceNameType)`

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

### Format(string, string, string, string)

```
public static string Format(string projectId, string locationId, string keyRingId, string cryptoKeyId)
```

Formats the IDs into the string representation of this [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) with pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`keyRingId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `KeyRing` ID. Must not be `null` or empty.

`cryptoKeyId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `CryptoKey` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) with pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.

### FormatProjectLocationKeyRingCryptoKey(string, string, string, string)

```
public static string FormatProjectLocationKeyRingCryptoKey(string projectId, string locationId, string keyRingId, string cryptoKeyId)
```

Formats the IDs into the string representation of this [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) with pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`keyRingId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `KeyRing` ID. Must not be `null` or empty.

`cryptoKeyId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `CryptoKey` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) with pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.

### FromProjectLocationKeyRingCryptoKey(string, string, string, string)

```
public static CryptoKeyName FromProjectLocationKeyRingCryptoKey(string projectId, string locationId, string keyRingId, string cryptoKeyId)
```

Creates a [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) with the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`keyRingId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `KeyRing` ID. Must not be `null` or empty.

`cryptoKeyId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `CryptoKey` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`

A new instance of [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static CryptoKeyName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`

A new instance of [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) containing the provided `unparsedResourceName`.

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
public static CryptoKeyName Parse(string cryptoKeyName)
```

Parses the given resource name string into a new [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) instance.

**Parameter**

**Name**

**Description**

`cryptoKeyName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`

The parsed [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`

### Parse(string, bool)

```
public static CryptoKeyName Parse(string cryptoKeyName, bool allowUnparsed)
```

Parses the given resource name string into a new [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`cryptoKeyName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName#Google_Cloud_AlloyDb_V1Beta_CryptoKeyName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`

The parsed [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`

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

### TryParse(string, out CryptoKeyName)

```
public static bool TryParse(string cryptoKeyName, out CryptoKeyName result)
```

Tries to parse the given resource name string into a new [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) instance.

**Parameters**

**Name**

**Description**

`cryptoKeyName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

When this method returns, the parsed [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`

### TryParse(string, bool, out CryptoKeyName)

```
public static bool TryParse(string cryptoKeyName, bool allowUnparsed, out CryptoKeyName result)
```

Tries to parse the given resource name string into a new [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`cryptoKeyName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName#Google_Cloud_AlloyDb_V1Beta_CryptoKeyName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

When this method returns, the parsed [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(CryptoKeyName, CryptoKeyName)

```
public static bool operator ==(CryptoKeyName a, CryptoKeyName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

The first resource name to compare, or null.

`b`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(CryptoKeyName, CryptoKeyName)

```
public static bool operator !=(CryptoKeyName a, CryptoKeyName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

The first resource name to compare, or null.

`b`

`[CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
