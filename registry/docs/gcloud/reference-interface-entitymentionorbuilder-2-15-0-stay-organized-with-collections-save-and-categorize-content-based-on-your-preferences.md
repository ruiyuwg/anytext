-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EntityMentionOrBuilder (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.1 2.3.4 2.2.0 2.1.10

```
public interface EntityMentionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getSentiment()

```
public abstract Sentiment getSentiment()
```

For calls to \[AnalyzeEntitySentiment\]\[\] or if AnnotateTextRequest.Features.extract\_entity\_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document.

`.google.cloud.language.v1beta2.Sentiment sentiment = 3;`

**Returns**

**Type**

**Description**

`[Sentiment](/java/docs/reference/google-cloud-language/2.15.0/com.google.cloud.language.v1beta2.Sentiment)`

The sentiment.

### getSentimentOrBuilder()

```
public abstract SentimentOrBuilder getSentimentOrBuilder()
```

For calls to \[AnalyzeEntitySentiment\]\[\] or if AnnotateTextRequest.Features.extract\_entity\_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document.

`.google.cloud.language.v1beta2.Sentiment sentiment = 3;`

**Returns**

**Type**

**Description**

`[SentimentOrBuilder](/java/docs/reference/google-cloud-language/2.15.0/com.google.cloud.language.v1beta2.SentimentOrBuilder)`

### getText()

```
public abstract TextSpan getText()
```

The mention text.

`.google.cloud.language.v1beta2.TextSpan text = 1;`

**Returns**

**Type**

**Description**

`[TextSpan](/java/docs/reference/google-cloud-language/2.15.0/com.google.cloud.language.v1beta2.TextSpan)`

The text.

### getTextOrBuilder()

```
public abstract TextSpanOrBuilder getTextOrBuilder()
```

The mention text.

`.google.cloud.language.v1beta2.TextSpan text = 1;`

**Returns**

**Type**

**Description**

`[TextSpanOrBuilder](/java/docs/reference/google-cloud-language/2.15.0/com.google.cloud.language.v1beta2.TextSpanOrBuilder)`

### getType()

```
public abstract EntityMention.Type getType()
```

The type of the entity mention.

`.google.cloud.language.v1beta2.EntityMention.Type type = 2;`

**Returns**

**Type**

**Description**

`[EntityMention.Type](/java/docs/reference/google-cloud-language/2.15.0/com.google.cloud.language.v1beta2.EntityMention.Type)`

The type.

### getTypeValue()

```
public abstract int getTypeValue()
```

The type of the entity mention.

`.google.cloud.language.v1beta2.EntityMention.Type type = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for type.

### hasSentiment()

```
public abstract boolean hasSentiment()
```

For calls to \[AnalyzeEntitySentiment\]\[\] or if AnnotateTextRequest.Features.extract\_entity\_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document.

`.google.cloud.language.v1beta2.Sentiment sentiment = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sentiment field is set.

### hasText()

```
public abstract boolean hasText()
```

The mention text.

`.google.cloud.language.v1beta2.TextSpan text = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the text field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
