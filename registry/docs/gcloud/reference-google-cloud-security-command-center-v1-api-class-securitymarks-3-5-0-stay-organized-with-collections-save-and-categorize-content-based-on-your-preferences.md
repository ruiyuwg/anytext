-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Security Command Center v1 API - Class SecurityMarks (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.5.0keyboard\_arrow\_down

-   [3.25.0 (latest)](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/latest/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.24.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.24.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.23.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.23.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.22.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.21.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.20.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.19.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.18.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.17.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.16.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.15.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.14.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.13.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.12.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.11.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.10.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.8.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.7.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.6.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.4.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.3.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.2.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.1.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.0.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.13.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.12.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.11.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.10.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.9.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.8.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.7.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.6.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.4.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.3.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.2.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)

```
public sealed class SecurityMarks : IMessage<SecurityMarks>, IEquatable<SecurityMarks>, IDeepCloneable<SecurityMarks>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Security Command Center v1 API class SecurityMarks.

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SecurityMarks

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SecurityMarks](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SecurityMarks](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SecurityMarks](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.SecurityCenter.V1](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1)

## Assembly

Google.Cloud.SecurityCenter.V1.dll

## Constructors

### SecurityMarks()

```
public SecurityMarks()
```

### SecurityMarks(SecurityMarks)

```
public SecurityMarks(SecurityMarks other)
```

**Parameter**

**Name**

**Description**

`other`

`[SecurityMarks](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)`  

## Properties

### CanonicalName

```
public string CanonicalName { get; set; }
```

The canonical name of the marks. Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "folders/{folder\_id}/assets/{asset\_id}/securityMarks" "projects/{project\_number}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "folders/{folder\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "projects/{project\_number}/sources/{source\_id}/findings/{finding\_id}/securityMarks"

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Marks

```
public MapField<string, string> Marks { get; }
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

### Name

```
public string Name { get; set; }
```

The relative resource name of the SecurityMarks. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks".

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SecurityMarksName

```
public SecurityMarksName SecurityMarksName { get; set; }
```

[SecurityMarksName](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarksName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarks#Google_Cloud_SecurityCenter_V1_SecurityMarks_Name) resource name property.

**Property Value**

**Type**

**Description**

`[SecurityMarksName](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.SecurityMarksName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
