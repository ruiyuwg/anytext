-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Live Stream v1 API - Class ElementaryStream (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.7.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/latest/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.10.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.9.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.8.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.5.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.3.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.2.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.1.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.0.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)

```
public sealed class ElementaryStream : IMessage<ElementaryStream>, IEquatable<ElementaryStream>, IDeepCloneable<ElementaryStream>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Live Stream v1 API class ElementaryStream.

Encoding of an input element such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ElementaryStream

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ElementaryStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ElementaryStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ElementaryStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Video.LiveStream.V1](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1)

## Assembly

Google.Cloud.Video.LiveStream.V1.dll

## Constructors

### ElementaryStream()

```
public ElementaryStream()
```

### ElementaryStream(ElementaryStream)

```
public ElementaryStream(ElementaryStream other)
```

**Parameter**

**Name**

**Description**

`other`

`[ElementaryStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)`  

## Properties

### AudioStream

```
public AudioStream AudioStream { get; set; }
```

Encoding of an audio stream.

**Property Value**

**Type**

**Description**

`[AudioStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.AudioStream)`

### ElementaryStreamCase

```
public ElementaryStream.ElementaryStreamOneofCase ElementaryStreamCase { get; }
```

**Property Value**

**Type**

**Description**

`[ElementaryStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream)[ElementaryStreamOneofCase](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ElementaryStream.ElementaryStreamOneofCase)`

### Key

```
public string Key { get; set; }
```

A unique key for this elementary stream.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TextStream

```
public TextStream TextStream { get; set; }
```

Encoding of a text stream. For example, closed captions or subtitles.

**Property Value**

**Type**

**Description**

`[TextStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.TextStream)`

### VideoStream

```
public VideoStream VideoStream { get; set; }
```

Encoding of a video stream.

**Property Value**

**Type**

**Description**

`[VideoStream](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.VideoStream)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
