-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcGenerativeQuestionServiceStub (2.55.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public class GrpcGenerativeQuestionServiceStub extends GenerativeQuestionServiceStub
```

gRPC stub implementation for the GenerativeQuestionService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [GenerativeQuestionServiceStub](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub) \> GrpcGenerativeQuestionServiceStub

## Inherited Members

[GenerativeQuestionServiceStub.batchUpdateGenerativeQuestionConfigsCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_batchUpdateGenerativeQuestionConfigsCallable__)

[GenerativeQuestionServiceStub.close()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_close__)

[GenerativeQuestionServiceStub.getGenerativeQuestionsFeatureConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_getGenerativeQuestionsFeatureConfigCallable__)

[GenerativeQuestionServiceStub.listGenerativeQuestionConfigsCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_listGenerativeQuestionConfigsCallable__)

[GenerativeQuestionServiceStub.updateGenerativeQuestionConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_updateGenerativeQuestionConfigCallable__)

[GenerativeQuestionServiceStub.updateGenerativeQuestionsFeatureConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_updateGenerativeQuestionsFeatureConfigCallable__)

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
public static final GrpcGenerativeQuestionServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcGenerativeQuestionServiceStub](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GrpcGenerativeQuestionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcGenerativeQuestionServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcGenerativeQuestionServiceStub](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GrpcGenerativeQuestionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(GenerativeQuestionServiceStubSettings settings)

```
public static final GrpcGenerativeQuestionServiceStub create(GenerativeQuestionServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[GenerativeQuestionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcGenerativeQuestionServiceStub](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GrpcGenerativeQuestionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcGenerativeQuestionServiceStub(GenerativeQuestionServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcGenerativeQuestionServiceStub(GenerativeQuestionServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcGenerativeQuestionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[GenerativeQuestionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcGenerativeQuestionServiceStub(GenerativeQuestionServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcGenerativeQuestionServiceStub(GenerativeQuestionServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcGenerativeQuestionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[GenerativeQuestionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

## Methods

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

### batchUpdateGenerativeQuestionConfigsCallable()

```
public UnaryCallable<BatchUpdateGenerativeQuestionConfigsRequest,BatchUpdateGenerativeQuestionConfigsResponse> batchUpdateGenerativeQuestionConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchUpdateGenerativeQuestionConfigsRequest](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.BatchUpdateGenerativeQuestionConfigsRequest),[BatchUpdateGenerativeQuestionConfigsResponse](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.BatchUpdateGenerativeQuestionConfigsResponse)>`

**Overrides**

[GenerativeQuestionServiceStub.batchUpdateGenerativeQuestionConfigsCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_batchUpdateGenerativeQuestionConfigsCallable__)

### close()

```
public final void close()
```

**Overrides**

[GenerativeQuestionServiceStub.close()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_close__)

### getGenerativeQuestionsFeatureConfigCallable()

```
public UnaryCallable<GetGenerativeQuestionsFeatureConfigRequest,GenerativeQuestionsFeatureConfig> getGenerativeQuestionsFeatureConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetGenerativeQuestionsFeatureConfigRequest](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.GetGenerativeQuestionsFeatureConfigRequest),[GenerativeQuestionsFeatureConfig](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.GenerativeQuestionsFeatureConfig)>`

**Overrides**

[GenerativeQuestionServiceStub.getGenerativeQuestionsFeatureConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_getGenerativeQuestionsFeatureConfigCallable__)

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

### listGenerativeQuestionConfigsCallable()

```
public UnaryCallable<ListGenerativeQuestionConfigsRequest,ListGenerativeQuestionConfigsResponse> listGenerativeQuestionConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListGenerativeQuestionConfigsRequest](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.ListGenerativeQuestionConfigsRequest),[ListGenerativeQuestionConfigsResponse](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.ListGenerativeQuestionConfigsResponse)>`

**Overrides**

[GenerativeQuestionServiceStub.listGenerativeQuestionConfigsCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_listGenerativeQuestionConfigsCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateGenerativeQuestionConfigCallable()

```
public UnaryCallable<UpdateGenerativeQuestionConfigRequest,GenerativeQuestionConfig> updateGenerativeQuestionConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateGenerativeQuestionConfigRequest](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.UpdateGenerativeQuestionConfigRequest),[GenerativeQuestionConfig](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.GenerativeQuestionConfig)>`

**Overrides**

[GenerativeQuestionServiceStub.updateGenerativeQuestionConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_updateGenerativeQuestionConfigCallable__)

### updateGenerativeQuestionsFeatureConfigCallable()

```
public UnaryCallable<UpdateGenerativeQuestionsFeatureConfigRequest,GenerativeQuestionsFeatureConfig> updateGenerativeQuestionsFeatureConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateGenerativeQuestionsFeatureConfigRequest](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.UpdateGenerativeQuestionsFeatureConfigRequest),[GenerativeQuestionsFeatureConfig](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.GenerativeQuestionsFeatureConfig)>`

**Overrides**

[GenerativeQuestionServiceStub.updateGenerativeQuestionsFeatureConfigCallable()](/java/docs/reference/google-cloud-retail/2.55.0/com.google.cloud.retail.v2.stub.GenerativeQuestionServiceStub#com_google_cloud_retail_v2_stub_GenerativeQuestionServiceStub_updateGenerativeQuestionsFeatureConfigCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
