-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TranslationServiceGrpc.TranslationServiceFutureStub (2.55.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public static final class TranslationServiceGrpc.TranslationServiceFutureStub extends AbstractFutureStub<TranslationServiceGrpc.TranslationServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service TranslationService.

Provides natural language translation operations.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> TranslationServiceGrpc.TranslationServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

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

### batchTranslateDocument(BatchTranslateDocumentRequest request)

```
public ListenableFuture<Operation> batchTranslateDocument(BatchTranslateDocumentRequest request)
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

**Parameter**

**Name**

**Description**

`request`

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchTranslateText(BatchTranslateTextRequest request)

```
public ListenableFuture<Operation> batchTranslateText(BatchTranslateTextRequest request)
```

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

**Parameter**

**Name**

**Description**

`request`

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.BatchTranslateTextRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### build(Channel channel, CallOptions callOptions)

```
protected TranslationServiceGrpc.TranslationServiceFutureStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[TranslationServiceGrpc.TranslationServiceFutureStub](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.TranslationServiceGrpc.TranslationServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createGlossary(CreateGlossaryRequest request)

```
public ListenableFuture<Operation> createGlossary(CreateGlossaryRequest request)
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

**Parameter**

**Name**

**Description**

`request`

`[CreateGlossaryRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.CreateGlossaryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteGlossary(DeleteGlossaryRequest request)

```
public ListenableFuture<Operation> deleteGlossary(DeleteGlossaryRequest request)
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

**Parameter**

**Name**

**Description**

`request`

`[DeleteGlossaryRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.DeleteGlossaryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### detectLanguage(DetectLanguageRequest request)

```
public ListenableFuture<DetectLanguageResponse> detectLanguage(DetectLanguageRequest request)
```

Detects the language of text within a request.

**Parameter**

**Name**

**Description**

`request`

`[DetectLanguageRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.DetectLanguageRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[DetectLanguageResponse](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.DetectLanguageResponse)>`

### getGlossary(GetGlossaryRequest request)

```
public ListenableFuture<Glossary> getGlossary(GetGlossaryRequest request)
```

Gets a glossary. Returns NOT\_FOUND, if the glossary doesn't exist.

**Parameter**

**Name**

**Description**

`request`

`[GetGlossaryRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.GetGlossaryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Glossary](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.Glossary)>`

### getSupportedLanguages(GetSupportedLanguagesRequest request)

```
public ListenableFuture<SupportedLanguages> getSupportedLanguages(GetSupportedLanguagesRequest request)
```

Returns a list of supported languages for translation.

**Parameter**

**Name**

**Description**

`request`

`[GetSupportedLanguagesRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.GetSupportedLanguagesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[SupportedLanguages](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.SupportedLanguages)>`

### listGlossaries(ListGlossariesRequest request)

```
public ListenableFuture<ListGlossariesResponse> listGlossaries(ListGlossariesRequest request)
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

**Parameter**

**Name**

**Description**

`request`

`[ListGlossariesRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.ListGlossariesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListGlossariesResponse](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.ListGlossariesResponse)>`

### translateDocument(TranslateDocumentRequest request)

```
public ListenableFuture<TranslateDocumentResponse> translateDocument(TranslateDocumentRequest request)
```

Translates documents in synchronous mode.

**Parameter**

**Name**

**Description**

`request`

`[TranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.TranslateDocumentRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[TranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.TranslateDocumentResponse)>`

### translateText(TranslateTextRequest request)

```
public ListenableFuture<TranslateTextResponse> translateText(TranslateTextRequest request)
```

Translates input text and returns translated text.

**Parameter**

**Name**

**Description**

`request`

`[TranslateTextRequest](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.TranslateTextRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.55.0/com.google.cloud.translate.v3beta1.TranslateTextResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
