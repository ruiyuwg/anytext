-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ApplianceVersion (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/latest/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.8.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.7.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.6.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.5.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.4.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.3.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.2.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.0.0/Google.Cloud.VMMigration.V1.ApplianceVersion)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/1.0.0/Google.Cloud.VMMigration.V1.ApplianceVersion)

```
public sealed class ApplianceVersion : IMessage<ApplianceVersion>, IEquatable<ApplianceVersion>, IDeepCloneable<ApplianceVersion>, IBufferMessage, IMessage
```

Describes an appliance version.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ApplianceVersion

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ApplianceVersion](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1.ApplianceVersion)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ApplianceVersion](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1.ApplianceVersion)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ApplianceVersion](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1.ApplianceVersion)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.VMMigration.V1](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1)

## Assembly

Google.Cloud.VMMigration.V1.dll

## Constructors

### ApplianceVersion()

```
public ApplianceVersion()
```

### ApplianceVersion(ApplianceVersion)

```
public ApplianceVersion(ApplianceVersion other)
```

**Parameter**

**Name**

**Description**

`other`

`[ApplianceVersion](/dotnet/docs/reference/Google.Cloud.VMMigration.V1/2.1.0/Google.Cloud.VMMigration.V1.ApplianceVersion)`  

## Properties

### Critical

```
public bool Critical { get; set; }
```

Determine whether it's critical to upgrade the appliance to this version.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### ReleaseNotesUri

```
public string ReleaseNotesUri { get; set; }
```

Link to a page that contains the version release notes.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Uri

```
public string Uri { get; set; }
```

A link for downloading the version.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Version

```
public string Version { get; set; }
```

The appliance version.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
