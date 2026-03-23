-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Organization Policy v2 API - Class ConstraintName (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.8.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.7.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.6.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.5.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.4.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.3.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.2.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.1.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.0.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.2.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.1.0/Google.Cloud.OrgPolicy.V2.ConstraintName)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.0.0/Google.Cloud.OrgPolicy.V2.ConstraintName)

```
public sealed class ConstraintName : IResourceName, IEquatable<ConstraintName>
```

Reference documentation and code samples for the Organization Policy v2 API class ConstraintName.

Resource name for the `Constraint` resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ConstraintName

## Implements

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)

## Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Namespace

[Google.Cloud.OrgPolicy.V2](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2)

## Assembly

Google.Cloud.OrgPolicy.V2.dll

## Constructors

### ConstraintName(string, string)

```
public ConstraintName(string projectId, string constraintId)
```

Constructs a new instance of a [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) class from the component parts of pattern `projects/{project}/constraints/{constraint}`

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

## Properties

### ConstraintId

```
public string ConstraintId { get; }
```

The `Constraint` ID. May be `null`, depending on which resource name is contained by this instance.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### FolderId

```
public string FolderId { get; }
```

The `Folder` ID. May be `null`, depending on which resource name is contained by this instance.

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

### OrganizationId

```
public string OrganizationId { get; }
```

The `Organization` ID. May be `null`, depending on which resource name is contained by this instance.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ProjectId

```
public string ProjectId { get; }
```

The `Project` ID. May be `null`, depending on which resource name is contained by this instance.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public ConstraintName.ResourceNameType Type { get; }
```

The [ConstraintName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName.ResourceNameType) of the contained resource name.

**Property Value**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)[ResourceNameType](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName.ResourceNameType)`

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

### Format(string, string)

```
public static string Format(string projectId, string constraintId)
```

Formats the IDs into the string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `projects/{project}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `projects/{project}/constraints/{constraint}`.

### FormatFolderConstraint(string, string)

```
public static string FormatFolderConstraint(string folderId, string constraintId)
```

Formats the IDs into the string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `folders/{folder}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`folderId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Folder` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `folders/{folder}/constraints/{constraint}`.

### FormatOrganizationConstraint(string, string)

```
public static string FormatOrganizationConstraint(string organizationId, string constraintId)
```

Formats the IDs into the string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `organizations/{organization}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`organizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Organization` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `organizations/{organization}/constraints/{constraint}`.

### FormatProjectConstraint(string, string)

```
public static string FormatProjectConstraint(string projectId, string constraintId)
```

Formats the IDs into the string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `projects/{project}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

The string representation of this [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with pattern `projects/{project}/constraints/{constraint}`.

### FromFolderConstraint(string, string)

```
public static ConstraintName FromFolderConstraint(string folderId, string constraintId)
```

Creates a [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with the pattern `folders/{folder}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`folderId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Folder` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

A new instance of [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) constructed from the provided ids.

### FromOrganizationConstraint(string, string)

```
public static ConstraintName FromOrganizationConstraint(string organizationId, string constraintId)
```

Creates a [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with the pattern `organizations/{organization}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`organizationId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Organization` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

A new instance of [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) constructed from the provided ids.

### FromProjectConstraint(string, string)

```
public static ConstraintName FromProjectConstraint(string projectId, string constraintId)
```

Creates a [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) with the pattern `projects/{project}/constraints/{constraint}`.

**Parameters**

**Name**

**Description**

`projectId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Project` ID. Must not be `null` or empty.

`constraintId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The `Constraint` ID. Must not be `null` or empty.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

A new instance of [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) constructed from the provided ids.

### FromUnparsed(UnparsedResourceName)

```
public static ConstraintName FromUnparsed(UnparsedResourceName unparsedResourceName)
```

Creates a [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) containing an unparsed resource name.

**Parameter**

**Name**

**Description**

`unparsedResourceName`

`[UnparsedResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.UnparsedResourceName.html)`  

The unparsed resource name. Must not be `null`.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

A new instance of [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) containing the provided `unparsedResourceName`.

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
public static ConstraintName Parse(string constraintName)
```

Parses the given resource name string into a new [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) instance.

**Parameter**

**Name**

**Description**

`constraintName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

The parsed [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/constraints/{constraint}`
-   `folders/{folder}/constraints/{constraint}`
-   `organizations/{organization}/constraints/{constraint}`

### Parse(string, bool)

```
public static ConstraintName Parse(string constraintName, bool allowUnparsed)
```

Parses the given resource name string into a new [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`constraintName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName#Google_Cloud_OrgPolicy_V2_ConstraintName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

**Returns**

**Type**

**Description**

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`

The parsed [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) if successful.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/constraints/{constraint}`
-   `folders/{folder}/constraints/{constraint}`
-   `organizations/{organization}/constraints/{constraint}`

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

### TryParse(string, out ConstraintName)

```
public static bool TryParse(string constraintName, out ConstraintName result)
```

Tries to parse the given resource name string into a new [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) instance.

**Parameters**

**Name**

**Description**

`constraintName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`result`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

When this method returns, the parsed [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/constraints/{constraint}`
-   `folders/{folder}/constraints/{constraint}`
-   `organizations/{organization}/constraints/{constraint}`

### TryParse(string, bool, out ConstraintName)

```
public static bool TryParse(string constraintName, bool allowUnparsed, out ConstraintName result)
```

Tries to parse the given resource name string into a new [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName) instance; optionally allowing an unparseable resource name.

**Parameters**

**Name**

**Description**

`constraintName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name in string form. Must not be `null`.

`allowUnparsed`

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`  

If `true` will successfully store an unparseable resource name into the [UnparsedResource](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName#Google_Cloud_OrgPolicy_V2_ConstraintName_UnparsedResource) property; otherwise will throw an [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) if an unparseable resource name is specified.

`result`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

When this method returns, the parsed [ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName), or `null` if parsing failed.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

`true` if the name was parsed successfully; `false` otherwise.

**Remarks**

To parse successfully, the resource name must be formatted as one of the following:

-   `projects/{project}/constraints/{constraint}`
-   `folders/{folder}/constraints/{constraint}`
-   `organizations/{organization}/constraints/{constraint}`

Or may be in any format if `allowUnparsed` is `true`.

## Operators

### operator ==(ConstraintName, ConstraintName)

```
public static bool operator ==(ConstraintName a, ConstraintName b)
```

Determines whether two specified resource names have the same value.

**Parameters**

**Name**

**Description**

`a`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

The first resource name to compare, or null.

`b`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is the same as the value of `b`; otherwise, false.

### operator !=(ConstraintName, ConstraintName)

```
public static bool operator !=(ConstraintName a, ConstraintName b)
```

Determines whether two specified resource names have different values.

**Parameters**

**Name**

**Description**

`a`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

The first resource name to compare, or null.

`b`

`[ConstraintName](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ConstraintName)`  

The second resource name to compare, or null.

**Returns**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

true if the value of `a` is different from the value of `b`; otherwise, false.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
