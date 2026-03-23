-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Transcoder v1 API - Class TextStream (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.8.0keyboard\_arrow\_down

-   [2.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/latest/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.11.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.10.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.9.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.7.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.6.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.5.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.4.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.3.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.2.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.1.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.0.0/Google.Cloud.Video.Transcoder.V1.TextStream)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/1.0.0/Google.Cloud.Video.Transcoder.V1.TextStream)

```
public sealed class TextStream : IMessage<TextStream>, IEquatable<TextStream>, IDeepCloneable<TextStream>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Transcoder v1 API class TextStream.

Encoding of a text stream. For example, closed captions or subtitles.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TextStream

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[TextStream](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[TextStream](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[TextStream](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Video.Transcoder.V1](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1)

## Assembly

Google.Cloud.Video.Transcoder.V1.dll

## Constructors

### TextStream()

```
public TextStream()
```

### TextStream(TextStream)

```
public TextStream(TextStream other)
```

**Parameter**

**Name**

**Description**

`other`

`[TextStream](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream)`  

## Properties

### Codec

```
public string Codec { get; set; }
```

The codec for this text stream. The default is `webvtt`.

Supported text codecs:

-   `srt`
-   `ttml`
-   `cea608`
-   `cea708`
-   `webvtt`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LanguageCode

```
public string LanguageCode { get; set; }
```

The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see [https://www.unicode.org/reports/tr35/#Unicode\_locale\_identifier](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier). Not supported in MP4 files.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Mapping

```
public RepeatedField<TextStream.Types.TextMapping> Mapping { get; }
```

The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[TextStream](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream)[Types](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream.Types)[TextMapping](/dotnet/docs/reference/Google.Cloud.Video.Transcoder.V1/2.8.0/Google.Cloud.Video.Transcoder.V1.TextStream.Types.TextMapping)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
