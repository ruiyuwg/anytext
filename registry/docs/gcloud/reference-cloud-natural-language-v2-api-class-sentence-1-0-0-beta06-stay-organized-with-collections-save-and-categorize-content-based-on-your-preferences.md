-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Natural Language v2 API - Class Sentence (1.0.0-beta06) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta06 (latest)](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentence)
-   [1.0.0-beta05](/dotnet/docs/reference/Google.Cloud.Language.V2/1.0.0-beta05/Google.Cloud.Language.V2.Sentence)

```
public sealed class Sentence : IMessage<Sentence>, IEquatable<Sentence>, IDeepCloneable<Sentence>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Natural Language v2 API class Sentence.

Represents a sentence in the input document.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Sentence

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Sentence](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentence), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Sentence](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentence), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Sentence](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentence), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Language.V2](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2)

## Assembly

Google.Cloud.Language.V2.dll

## Constructors

### Sentence()

```
public Sentence()
```

### Sentence(Sentence)

```
public Sentence(Sentence other)
```

**Parameter**

**Name**

**Description**

`other`

`[Sentence](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentence)`  

## Properties

### Sentiment

```
public Sentiment Sentiment { get; set; }
```

For calls to \[AnalyzeSentiment\]\[\] or if \[AnnotateTextRequest.Features.extract\_document\_sentiment\]\[google.cloud.language.v2.AnnotateTextRequest.Features.extract\_document\_sentiment\] is set to true, this field will contain the sentiment for the sentence.

**Property Value**

**Type**

**Description**

`[Sentiment](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.Sentiment)`

### Text

```
public TextSpan Text { get; set; }
```

The sentence text.

**Property Value**

**Type**

**Description**

`[TextSpan](/dotnet/docs/reference/Google.Cloud.Language.V2/latest/Google.Cloud.Language.V2.TextSpan)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
