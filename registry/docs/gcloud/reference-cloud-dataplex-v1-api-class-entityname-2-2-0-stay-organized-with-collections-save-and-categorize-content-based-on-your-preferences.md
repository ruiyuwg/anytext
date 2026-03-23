-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class EntityName (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class EntityName : IResourceName, IEquatable<EntityName>
```

Reference documentation and code samples for the Cloud Dataplex v1 API class EntityName.

Resource name for the `Entity` resource.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> EntityName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)\>

## Inherited Members

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### EntityName(String, String, String, String, String)

```
public EntityName(string projectId, string locationId, string lakeId, string zoneId, string entityId)
```

Constructs a new instance of a [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) class from the component parts of pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`lakeId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Lake` ID. Must not be `null` or empty.

`zoneId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Zone` ID. Must not be `null` or empty.

`entityId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Entity` ID. Must not be `null` or empty.

## Properties

### EntityId

```
public string EntityId { get; }
```

The `Entity` ID. Will not be `null`, unless this instance contains an unparsed resource name.

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

### LakeId

```
public string LakeId { get; }
```

The `Lake` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

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

### Type

```
public EntityName.ResourceNameType Type { get; }
```

The [EntityName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[EntityName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName.ResourceNameType)`

### UnparsedResource

```
public UnparsedResourceName UnparsedResource { get; }
```

The contained [UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html). Only non-`null` if this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`

### ZoneId

```
public string ZoneId { get; }
```

The `Zone` ID. Will not be `null`, unless this instance contains an unparsed resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### Format(String, String, String, String, String)

```
public static string Format(string projectId, string locationId, string lakeId, string zoneId, string entityId)
```

Formats the IDs into the string representation of this [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) with pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`lakeId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Lake` ID. Must not be `null` or empty.

`zoneId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Zone` ID. Must not be `null` or empty.

`entityId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Entity` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) with pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`.

### FormatProjectLocationLakeZoneEntity(String, String, String, String, String)

```
public static string FormatProjectLocationLakeZoneEntity(string projectId, string locationId, string lakeId, string zoneId, string entityId)
```

Formats the IDs into the string representation of this [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) with pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`lakeId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Lake` ID. Must not be `null` or empty.

`zoneId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Zone` ID. Must not be `null` or empty.

`entityId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Entity` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) with pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`.

### FromProjectLocationLakeZoneEntity(String, String, String, String, String)

```
public static EntityName FromProjectLocationLakeZoneEntity(string projectId, string locationId, string lakeId, string zoneId, string entityId)
```

Creates a [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) with the pattern `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`.

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`locationId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Location` ID. Must not be `null` or empty.

`lakeId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Lake` ID. Must not be `null` or empty.

`zoneId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Zone` ID. Must not be `null` or empty.

`entityId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Entity` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`

A new instance of [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static EntityName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`

A new instance of [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) containing the provided `unparsedResourceName`.

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
public static EntityName Parse(string entityName)
```

Parses the given resource name string into a new [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) instance.

**Parameter**

**Name**

**Description**

`entityName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`

The parsed [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`

### Parse(String, Boolean)

```
public static EntityName Parse(string entityName, bool allowUnparsed)
```

Parses the given resource name string into a new [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`entityName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName#Google_Cloud_Dataplex_V1_EntityName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`

The parsed [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`

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

### TryParse(String, out EntityName)

```
public static bool TryParse(string entityName, out EntityName result)
```

Tries to parse the given resource name string into a new [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) instance.

**Parameters**

**Name**

**Description**

`entityName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

When this method returns, the parsed [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`

### TryParse(String, Boolean, out EntityName)

```
public static bool TryParse(string entityName, bool allowUnparsed, out EntityName result)
```

Tries to parse the given resource name string into a new [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`entityName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName#Google_Cloud_Dataplex_V1_EntityName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

When this method returns, the parsed [EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### Equality(EntityName, EntityName)

```
public static bool operator ==(EntityName a, EntityName b)
```

**Parameters**

**Name**

**Description**

`a`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

`b`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Inequality(EntityName, EntityName)

```
public static bool operator !=(EntityName a, EntityName b)
```

**Parameters**

**Name**

**Description**

`a`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

`b`

`[EntityName](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.2.0/Google.Cloud.Dataplex.V1.EntityName)`  

**Returns**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
