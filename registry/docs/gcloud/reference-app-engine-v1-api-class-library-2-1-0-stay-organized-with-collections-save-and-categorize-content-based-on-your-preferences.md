-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# App Engine v1 API - Class Library (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/latest/Google.Cloud.AppEngine.V1.Library)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.4.0/Google.Cloud.AppEngine.V1.Library)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.Library)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.2.0/Google.Cloud.AppEngine.V1.Library)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.Library)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.0.0/Google.Cloud.AppEngine.V1.Library)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.Library)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.3.0/Google.Cloud.AppEngine.V1.Library)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.2.0/Google.Cloud.AppEngine.V1.Library)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.1.0/Google.Cloud.AppEngine.V1.Library)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.0.0/Google.Cloud.AppEngine.V1.Library)

```
public sealed class Library : IMessage<Library>, IEquatable<Library>, IDeepCloneable<Library>, IBufferMessage, IMessage
```

Reference documentation and code samples for the App Engine v1 API class Library.

Third-party Python runtime library that is required by the application.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> Library

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[Library](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.Library)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[Library](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.Library)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[Library](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.Library)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AppEngine.V1](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1)

## Assembly

Google.Cloud.AppEngine.V1.dll

## Constructors

### Library()

```
public Library()
```

### Library(Library)

```
public Library(Library other)
```

**Parameter**

**Name**

**Description**

`other`

`[Library](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.Library)`  

## Properties

### Name

```
public string Name { get; set; }
```

Name of the library. Example: "django".

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Version

```
public string Version { get; set; }
```

Version of the library to select, or "latest".

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
