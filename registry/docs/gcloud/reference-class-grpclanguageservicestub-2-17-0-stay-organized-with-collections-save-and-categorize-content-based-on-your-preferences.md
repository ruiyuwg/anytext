-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcLanguageServiceStub (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.1 2.3.4 2.2.0 2.1.10

```
public class GrpcLanguageServiceStub extends LanguageServiceStub
```

gRPC stub implementation for the LanguageService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [LanguageServiceStub](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub) \> GrpcLanguageServiceStub

## Inherited Members

[LanguageServiceStub.analyzeEntitiesCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeEntitiesCallable__)

[LanguageServiceStub.analyzeEntitySentimentCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeEntitySentimentCallable__)

[LanguageServiceStub.analyzeSentimentCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeSentimentCallable__)

[LanguageServiceStub.analyzeSyntaxCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeSyntaxCallable__)

[LanguageServiceStub.annotateTextCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_annotateTextCallable__)

[LanguageServiceStub.classifyTextCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_classifyTextCallable__)

[LanguageServiceStub.close()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_close__)

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

## Static Methods

### create(ClientContext clientContext)

```
public static final GrpcLanguageServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcLanguageServiceStub](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.GrpcLanguageServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcLanguageServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[GrpcLanguageServiceStub](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.GrpcLanguageServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(LanguageServiceStubSettings settings)

```
public static final GrpcLanguageServiceStub create(LanguageServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[LanguageServiceStubSettings](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcLanguageServiceStub](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.GrpcLanguageServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcLanguageServiceStub(LanguageServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcLanguageServiceStub(LanguageServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcLanguageServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[LanguageServiceStubSettings](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcLanguageServiceStub(LanguageServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcLanguageServiceStub(LanguageServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcLanguageServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[LanguageServiceStubSettings](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

## Methods

### analyzeEntitiesCallable()

```
public UnaryCallable<AnalyzeEntitiesRequest,AnalyzeEntitiesResponse> analyzeEntitiesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnalyzeEntitiesRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeEntitiesRequest),[AnalyzeEntitiesResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeEntitiesResponse)>`

**Overrides**

[LanguageServiceStub.analyzeEntitiesCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeEntitiesCallable__)

### analyzeEntitySentimentCallable()

```
public UnaryCallable<AnalyzeEntitySentimentRequest,AnalyzeEntitySentimentResponse> analyzeEntitySentimentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnalyzeEntitySentimentRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest),[AnalyzeEntitySentimentResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse)>`

**Overrides**

[LanguageServiceStub.analyzeEntitySentimentCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeEntitySentimentCallable__)

### analyzeSentimentCallable()

```
public UnaryCallable<AnalyzeSentimentRequest,AnalyzeSentimentResponse> analyzeSentimentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnalyzeSentimentRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeSentimentRequest),[AnalyzeSentimentResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeSentimentResponse)>`

**Overrides**

[LanguageServiceStub.analyzeSentimentCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeSentimentCallable__)

### analyzeSyntaxCallable()

```
public UnaryCallable<AnalyzeSyntaxRequest,AnalyzeSyntaxResponse> analyzeSyntaxCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnalyzeSyntaxRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeSyntaxRequest),[AnalyzeSyntaxResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnalyzeSyntaxResponse)>`

**Overrides**

[LanguageServiceStub.analyzeSyntaxCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_analyzeSyntaxCallable__)

### annotateTextCallable()

```
public UnaryCallable<AnnotateTextRequest,AnnotateTextResponse> annotateTextCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnnotateTextRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnnotateTextRequest),[AnnotateTextResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.AnnotateTextResponse)>`

**Overrides**

[LanguageServiceStub.annotateTextCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_annotateTextCallable__)

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### classifyTextCallable()

```
public UnaryCallable<ClassifyTextRequest,ClassifyTextResponse> classifyTextCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ClassifyTextRequest](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.ClassifyTextRequest),[ClassifyTextResponse](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.ClassifyTextResponse)>`

**Overrides**

[LanguageServiceStub.classifyTextCallable()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_classifyTextCallable__)

### close()

```
public final void close()
```

**Overrides**

[LanguageServiceStub.close()](/java/docs/reference/google-cloud-language/2.17.0/com.google.cloud.language.v1beta2.stub.LanguageServiceStub#com_google_cloud_language_v1beta2_stub_LanguageServiceStub_close__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
