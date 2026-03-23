-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Translation v3 API - Class FileInputSource (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.7.0keyboard\_arrow\_down

-   [3.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.Translate.V3/latest/Google.Cloud.Translate.V3.FileInputSource)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.9.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.8.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.6.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.5.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.4.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.3.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.2.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.1.0/Google.Cloud.Translate.V3.FileInputSource)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.0.0/Google.Cloud.Translate.V3.FileInputSource)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/2.4.0/Google.Cloud.Translate.V3.FileInputSource)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/2.3.0/Google.Cloud.Translate.V3.FileInputSource)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Translate.V3/2.2.0/Google.Cloud.Translate.V3.FileInputSource)

```
public sealed class FileInputSource : IMessage<FileInputSource>, IEquatable<FileInputSource>, IDeepCloneable<FileInputSource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Translation v3 API class FileInputSource.

An inlined file.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> FileInputSource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[FileInputSource](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3.FileInputSource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[FileInputSource](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3.FileInputSource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[FileInputSource](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3.FileInputSource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Translate.V3](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3)

## Assembly

Google.Cloud.Translate.V3.dll

## Constructors

### FileInputSource()

```
public FileInputSource()
```

### FileInputSource(FileInputSource)

```
public FileInputSource(FileInputSource other)
```

**Parameter**

**Name**

**Description**

`other`

`[FileInputSource](/dotnet/docs/reference/Google.Cloud.Translate.V3/3.7.0/Google.Cloud.Translate.V3.FileInputSource)`  

## Properties

### Content

```
public ByteString Content { get; set; }
```

Required. The file's byte contents.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

### DisplayName

```
public string DisplayName { get; set; }
```

Required. The file's display name.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MimeType

```
public string MimeType { get; set; }
```

Required. The file's mime type.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
