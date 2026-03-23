-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class UrlSigner.Options (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.6.0keyboard\_arrow\_down

-   [4.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Storage.V1/latest/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.13.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.11.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.10.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.9.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.8.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.7.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.5.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.4.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.3.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.2.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.1.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.0.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.7.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.5.0/Google.Cloud.Storage.V1.UrlSigner.Options)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.4.0/Google.Cloud.Storage.V1.UrlSigner.Options)

```
public sealed class Options
```

Options for the UrlSigner. Options can be duration or expiration based regarding the validity of the signed URL.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> UrlSigner.Options

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Storage.V1](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1)

## Assembly

Google.Cloud.Storage.V1.dll

## Properties

### BucketBoundHostname

```
public string BucketBoundHostname { get; }
```

A bucket bound host to use for generating the signed URL. If [UrlStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_UrlStyle) is [BucketBoundHostname](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_BucketBoundHostname) this won't be null. It will be null otherwise. Use [WithBucketBoundHostname(String)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_WithBucketBoundHostname_System_String_) to set.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

When using [V2](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion#Google_Cloud_Storage_V1_SigningVersion_V2) bucket bound host names are not supported and [Sign(UrlSigner.RequestTemplate, UrlSigner.Options)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner#Google_Cloud_Storage_V1_UrlSigner_Sign_Google_Cloud_Storage_V1_UrlSigner_RequestTemplate_Google_Cloud_Storage_V1_UrlSigner_Options_) and [SignAsync(UrlSigner.RequestTemplate, UrlSigner.Options, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner#Google_Cloud_Storage_V1_UrlSigner_SignAsync_Google_Cloud_Storage_V1_UrlSigner_RequestTemplate_Google_Cloud_Storage_V1_UrlSigner_Options_System_Threading_CancellationToken_) will throw [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if [BucketBoundHostname](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_BucketBoundHostname) is not null.

### Duration

```
public TimeSpan? Duration { get; }
```

The length of time for which the signed URL should remain usable, counting from the moment the signed URL is created. Exactly one of [Duration](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_Duration) and [Expiration](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_Expiration) will be set.

**Property Value**

**Type**

**Description**

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)>`

### Expiration

```
public DateTimeOffset? Expiration { get; }
```

The point in time after which the signed URL will be invalid. Exactly one of [Duration](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_Duration) and [Expiration](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_Expiration) will be set.

**Property Value**

**Type**

**Description**

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)>`

### Scheme

```
public string Scheme { get; }
```

The Scheme to use for the request. Only http or https supported. This will never be null. If null is specified in [WithScheme(String)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_WithScheme_System_String_) then https will be used. Defaults to https.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SigningVersion

```
public SigningVersion SigningVersion { get; }
```

The signing version to use for generating the signed URL. This will default to [Default](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion#Google_Cloud_Storage_V1_SigningVersion_Default) which is currently the same as [V4](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion#Google_Cloud_Storage_V1_SigningVersion_V4).

**Property Value**

**Type**

**Description**

`[SigningVersion](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion)`

### UrlStyle

```
public UrlSigner.UrlStyle UrlStyle { get; }
```

The style of signed URL to generate. Defaults to [PathStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_PathStyle).

**Property Value**

**Type**

**Description**

`[UrlSigner.UrlStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle)`

**Remarks**

When using [V2](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion#Google_Cloud_Storage_V1_SigningVersion_V2) only [PathStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_PathStyle) and [VirtualHostedStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_VirtualHostedStyle) are supported and [Sign(UrlSigner.RequestTemplate, UrlSigner.Options)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner#Google_Cloud_Storage_V1_UrlSigner_Sign_Google_Cloud_Storage_V1_UrlSigner_RequestTemplate_Google_Cloud_Storage_V1_UrlSigner_Options_) and [SignAsync(UrlSigner.RequestTemplate, UrlSigner.Options, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner#Google_Cloud_Storage_V1_UrlSigner_SignAsync_Google_Cloud_Storage_V1_UrlSigner_RequestTemplate_Google_Cloud_Storage_V1_UrlSigner_Options_System_Threading_CancellationToken_) will throw [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if [UrlStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_UrlStyle) is other than one of these two values.

## Methods

### FromDuration(TimeSpan)

```
public static UrlSigner.Options FromDuration(TimeSpan duration)
```

Creates a new [UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options) from the given duration.

**Parameter**

**Name**

**Description**

`duration`

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`  

The duration to create these options with.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new options set.

### FromExpiration(DateTimeOffset)

```
public static UrlSigner.Options FromExpiration(DateTimeOffset expiration)
```

Creates a new [UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options) from the given expiration.

**Parameter**

**Name**

**Description**

`expiration`

`[DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)`  

The expiration to create these options with.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new options set.

### WithBucketBoundHostname(String)

```
public UrlSigner.Options WithBucketBoundHostname(string bucketBoundHostname)
```

Returns a new set of options with the same values as this one except for bucket bound domain and the url style which will be set to [BucketBoundHostname](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_BucketBoundHostname).

**Parameter**

**Name**

**Description**

`bucketBoundHostname`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The new bucket bound domain.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new set of options with the given bucket bound domain and the url style set to [BucketBoundHostname](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle#Google_Cloud_Storage_V1_UrlSigner_UrlStyle_BucketBoundHostname).

### WithDuration(TimeSpan)

```
public UrlSigner.Options WithDuration(TimeSpan duration)
```

Returns a new set of options with the same values as this one but duration based.

**Parameter**

**Name**

**Description**

`duration`

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`  

The new duration.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new set of options with the given duration.

### WithExpiration(DateTimeOffset)

```
public UrlSigner.Options WithExpiration(DateTimeOffset expiration)
```

Returns a new set of options with the same values as this one but expiration based.

**Parameter**

**Name**

**Description**

`expiration`

`[DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)`  

The new expiration.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new set of options with the given expiration.

### WithScheme(String)

```
public UrlSigner.Options WithScheme(string scheme)
```

Returns a new set of options with the same values as this one except for the scheme.

**Parameter**

**Name**

**Description**

`scheme`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The new scheme. May be null in which case https will be used.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new set of options with the given scheme.

### WithSigningVersion(SigningVersion)

```
public UrlSigner.Options WithSigningVersion(SigningVersion version)
```

Returns a new set of options with the same values as this one except for the signing version.

**Parameter**

**Name**

**Description**

`version`

`[SigningVersion](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.SigningVersion)`  

The new signing version.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A set of options with the given signing version.

### WithUrlStyle(UrlSigner.UrlStyle)

```
public UrlSigner.Options WithUrlStyle(UrlSigner.UrlStyle urlStyle)
```

Returns a new set of options with the same values as this one except for the [UrlStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options#Google_Cloud_Storage_V1_UrlSigner_Options_UrlStyle) value.

**Parameter**

**Name**

**Description**

`urlStyle`

`[UrlSigner.UrlStyle](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.UrlStyle)`  

The new url style.

**Returns**

**Type**

**Description**

`[UrlSigner.Options](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.UrlSigner.Options)`

A new set ofoptions with the given url style.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
