-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ServiceName (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.4.0keyboard\_arrow\_down

-   [5.23.0 (latest)](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/latest/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.22.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.22.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.21.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.21.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.20.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.20.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.19.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.19.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.18.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.18.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.17.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.17.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.16.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.16.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.15.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.15.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.14.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.14.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.13.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.13.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.12.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.12.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.11.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.11.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.10.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.10.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.9.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.9.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.8.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.8.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.7.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.7.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.6.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.6.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.5.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.5.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.4.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.4.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.3.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.3.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.2.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.2.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.1.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.1.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/5.0.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/4.0.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.3.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.2.0/Google.Cloud.Dataproc.V1.ServiceName)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.1.0/Google.Cloud.Dataproc.V1.ServiceName)

```
public sealed class ServiceName : IResourceName, IEquatable<ServiceName>
```

Resource name for the `Service` resource.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ServiceName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)\>

## Inherited Members

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

## Namespace

[Google.Cloud.Dataproc.V1](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1)

## Assembly

Google.Cloud.Dataproc.V1.dll

## Constructors

### ServiceName(String, String, String)

```
public ServiceName(string projectId, string locationId, string serviceId)
```

Constructs a new instance of a [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) class from the component parts of pattern `projects/{project}/locations/{location}/services/{service}`

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`serviceId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Service` ID. Must not be `null` or empty.

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

### ServiceId

```
public string ServiceId { get; }
```

The `Service` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public ServiceName.ResourceNameType Type { get; }
```

The [ServiceName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ServiceName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName.ResourceNameType)`

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
public static string Format(string projectId, string locationId, string serviceId)
```

Formats the IDs into the string representation of this [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) with pattern `projects/{project}/locations/{location}/services/{service}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`serviceId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Service` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) with pattern `projects/{project}/locations/{location}/services/{service}`.

### FormatProjectLocationService(String, String, String)

```
public static string FormatProjectLocationService(string projectId, string locationId, string serviceId)
```

Formats the IDs into the string representation of this [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) with pattern `projects/{project}/locations/{location}/services/{service}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`serviceId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Service` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) with pattern `projects/{project}/locations/{location}/services/{service}`.

### FromProjectLocationService(String, String, String)

```
public static ServiceName FromProjectLocationService(string projectId, string locationId, string serviceId)
```

Creates a [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) with the pattern `projects/{project}/locations/{location}/services/{service}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`serviceId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Service` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`

A new instance of [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ServiceName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`

A new instance of [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) containing the provided `unparsedResourceName`.

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
public static ServiceName Parse(string serviceName)
```

Parses the given resource name string into a new [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) instance.

**Parameter**

**Name**

**Description**

`serviceName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`

The parsed [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/services/{service}`

### Parse(String, Boolean)

```
public static ServiceName Parse(string serviceName, bool allowUnparsed)
```

Parses the given resource name string into a new [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`serviceName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName#Google_Cloud_Dataproc_V1_ServiceName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`

The parsed [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/services/{service}`

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

### TryParse(String, out ServiceName)

```
public static bool TryParse(string serviceName, out ServiceName result)
```

Tries to parse the given resource name string into a new [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) instance.

**Parameters**

**Name**

**Description**

`serviceName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

When this method returns, the parsed [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/services/{service}`

### TryParse(String, Boolean, out ServiceName)

```
public static bool TryParse(string serviceName, bool allowUnparsed, out ServiceName result)
```

Tries to parse the given resource name string into a new [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`serviceName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName#Google_Cloud_Dataproc_V1_ServiceName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

When this method returns, the parsed [ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/services/{service}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### Equality(ServiceName, ServiceName)

```
public static bool operator ==(ServiceName a, ServiceName b)
```

**Parameters**

**Name**

**Description**

`a`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

`b`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Inequality(ServiceName, ServiceName)

```
public static bool operator !=(ServiceName a, ServiceName b)
```

**Parameters**

**Name**

**Description**

`a`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

`b`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Dataproc.V1/3.4.0/Google.Cloud.Dataproc.V1.ServiceName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
