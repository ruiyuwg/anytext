-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LanguageServiceGrpc.LanguageServiceBlockingStub (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.1 2.3.4 2.2.0 2.1.10

```
public static final class LanguageServiceGrpc.LanguageServiceBlockingStub extends AbstractBlockingStub<LanguageServiceGrpc.LanguageServiceBlockingStub>
```

Provides text analysis operations such as sentiment analysis and entity recognition.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> LanguageServiceGrpc.LanguageServiceBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### analyzeEntities(AnalyzeEntitiesRequest request)

```
public AnalyzeEntitiesResponse analyzeEntities(AnalyzeEntitiesRequest request)
```

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

**Parameter**

**Name**

**Description**

request

`[AnalyzeEntitiesRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeEntitiesRequest)`  

**Returns**

**Type**

**Description**

[AnalyzeEntitiesResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeEntitiesResponse)

### analyzeEntitySentiment(AnalyzeEntitySentimentRequest request)

```
public AnalyzeEntitySentimentResponse analyzeEntitySentiment(AnalyzeEntitySentimentRequest request)
```

Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.

**Parameter**

**Name**

**Description**

request

`[AnalyzeEntitySentimentRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest)`  

**Returns**

**Type**

**Description**

[AnalyzeEntitySentimentResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse)

### analyzeSentiment(AnalyzeSentimentRequest request)

```
public AnalyzeSentimentResponse analyzeSentiment(AnalyzeSentimentRequest request)
```

Analyzes the sentiment of the provided text.

**Parameter**

**Name**

**Description**

request

`[AnalyzeSentimentRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeSentimentRequest)`  

**Returns**

**Type**

**Description**

[AnalyzeSentimentResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeSentimentResponse)

### analyzeSyntax(AnalyzeSyntaxRequest request)

```
public AnalyzeSyntaxResponse analyzeSyntax(AnalyzeSyntaxRequest request)
```

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

**Parameter**

**Name**

**Description**

request

`[AnalyzeSyntaxRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeSyntaxRequest)`  

**Returns**

**Type**

**Description**

[AnalyzeSyntaxResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnalyzeSyntaxResponse)

### annotateText(AnnotateTextRequest request)

```
public AnnotateTextResponse annotateText(AnnotateTextRequest request)
```

A convenience method that provides all syntax, sentiment, entity, and classification features in one call.

**Parameter**

**Name**

**Description**

request

`[AnnotateTextRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnnotateTextRequest)`  

**Returns**

**Type**

**Description**

[AnnotateTextResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.AnnotateTextResponse)

### build(Channel channel, CallOptions callOptions)

```
protected LanguageServiceGrpc.LanguageServiceBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

channel

`io.grpc.Channel`  

callOptions

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

[LanguageServiceGrpc.LanguageServiceBlockingStub](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.LanguageServiceGrpc.LanguageServiceBlockingStub)

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### classifyText(ClassifyTextRequest request)

```
public ClassifyTextResponse classifyText(ClassifyTextRequest request)
```

Classifies a document into categories.

**Parameter**

**Name**

**Description**

request

`[ClassifyTextRequest](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.ClassifyTextRequest)`  

**Returns**

**Type**

**Description**

[ClassifyTextResponse](/java/docs/reference/google-cloud-language/2.7.0/com.google.cloud.language.v1beta2.ClassifyTextResponse)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
