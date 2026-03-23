-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Dialogflow v2beta1 API - Class KnowledgeAssistAnswer.Types.KnowledgeAnswer (1.0.0-beta28) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta28 (latest)](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)
-   [1.0.0-beta27](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/1.0.0-beta27/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)

```
public sealed class KnowledgeAssistAnswer.Types.KnowledgeAnswer : IMessage<KnowledgeAssistAnswer.Types.KnowledgeAnswer>, IEquatable<KnowledgeAssistAnswer.Types.KnowledgeAnswer>, IDeepCloneable<KnowledgeAssistAnswer.Types.KnowledgeAnswer>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Dialogflow v2beta1 API class KnowledgeAssistAnswer.Types.KnowledgeAnswer.

Represents an answer from Knowledge. Currently supports FAQ and Generative answers.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> KnowledgeAssistAnswer.Types.KnowledgeAnswer

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dialogflow.V2Beta1](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1)

## Assembly

Google.Cloud.Dialogflow.V2Beta1.dll

## Constructors

### KnowledgeAnswer()

```
public KnowledgeAnswer()
```

### KnowledgeAnswer(KnowledgeAnswer)

```
public KnowledgeAnswer(KnowledgeAssistAnswer.Types.KnowledgeAnswer other)
```

**Parameter**

**Name**

**Description**

`other`

`[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)`  

## Properties

### AnswerText

```
public string AnswerText { get; set; }
```

The piece of text from the `source` that answers this suggested query.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### FaqSource

```
public KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types.FaqSource FaqSource { get; set; }
```

Populated if the prediction came from FAQ.

**Property Value**

**Type**

**Description**

`[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types)[FaqSource](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types.FaqSource)`

### GenerativeSource

```
public KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types.GenerativeSource GenerativeSource { get; set; }
```

Populated if the prediction was Generative.

**Property Value**

**Type**

**Description**

`[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types)[GenerativeSource](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer.Types.GenerativeSource)`

### SourceCase

```
public KnowledgeAssistAnswer.Types.KnowledgeAnswer.SourceOneofCase SourceCase { get; }
```

**Property Value**

**Type**

**Description**

`[KnowledgeAssistAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer)[Types](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types)[KnowledgeAnswer](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer)[SourceOneofCase](/dotnet/docs/reference/Google.Cloud.Dialogflow.V2Beta1/latest/Google.Cloud.Dialogflow.V2Beta1.KnowledgeAssistAnswer.Types.KnowledgeAnswer.SourceOneofCase)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
