-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AsyncAnnotateFileRequest (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.0.0keyboard\_arrow\_down

-   [3.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Vision.V1/latest/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.7.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.6.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.5.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.4.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.3.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.2.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.1.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.5.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.3.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)

```
public sealed class AsyncAnnotateFileRequest : IMessage<AsyncAnnotateFileRequest>, IEquatable<AsyncAnnotateFileRequest>, IDeepCloneable<AsyncAnnotateFileRequest>, IBufferMessage, IMessage
```

An offline file annotation request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AsyncAnnotateFileRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[AsyncAnnotateFileRequest](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[AsyncAnnotateFileRequest](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[AsyncAnnotateFileRequest](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Vision.V1](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1)

## Assembly

Google.Cloud.Vision.V1.dll

## Constructors

### AsyncAnnotateFileRequest()

```
public AsyncAnnotateFileRequest()
```

### AsyncAnnotateFileRequest(AsyncAnnotateFileRequest)

```
public AsyncAnnotateFileRequest(AsyncAnnotateFileRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[AsyncAnnotateFileRequest](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.AsyncAnnotateFileRequest)`  

## Properties

### Features

```
public RepeatedField<Feature> Features { get; }
```

Required. Requested features.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[Feature](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.Feature)>`

### ImageContext

```
public ImageContext ImageContext { get; set; }
```

Additional context that may accompany the image(s) in the file.

**Property Value**

**Type**

**Description**

`[ImageContext](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.ImageContext)`

### InputConfig

```
public InputConfig InputConfig { get; set; }
```

Required. Information about the input file.

**Property Value**

**Type**

**Description**

`[InputConfig](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.InputConfig)`

### OutputConfig

```
public OutputConfig OutputConfig { get; set; }
```

Required. The desired output location and metadata (e.g. format).

**Property Value**

**Type**

**Description**

`[OutputConfig](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.OutputConfig)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
