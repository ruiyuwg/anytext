-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcImageVersionsStub (1.21.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

```
public class GrpcImageVersionsStub extends ImageVersionsStub
```

gRPC stub implementation for the ImageVersions service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ImageVersionsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub) \> GrpcImageVersionsStub

## Inherited Members

[ImageVersionsStub.close()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_close__)

[ImageVersionsStub.listImageVersionsCallable()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_listImageVersionsCallable__)

[ImageVersionsStub.listImageVersionsPagedCallable()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_listImageVersionsPagedCallable__)

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
public static final GrpcImageVersionsStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcImageVersionsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.GrpcImageVersionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcImageVersionsStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcImageVersionsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.GrpcImageVersionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ImageVersionsStubSettings settings)

```
public static final GrpcImageVersionsStub create(ImageVersionsStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[ImageVersionsStubSettings](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcImageVersionsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.GrpcImageVersionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcImageVersionsStub(ImageVersionsStubSettings settings, ClientContext clientContext)

```
protected GrpcImageVersionsStub(ImageVersionsStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcImageVersionsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ImageVersionsStubSettings](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcImageVersionsStub(ImageVersionsStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcImageVersionsStub(ImageVersionsStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcImageVersionsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ImageVersionsStubSettings](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStubSettings)`  

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

### close()

```
public final void close()
```

**Overrides**

[ImageVersionsStub.close()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_close__)

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

### listImageVersionsCallable()

```
public UnaryCallable<ListImageVersionsRequest,ListImageVersionsResponse> listImageVersionsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListImageVersionsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest),[ListImageVersionsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse)>`

**Overrides**

[ImageVersionsStub.listImageVersionsCallable()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_listImageVersionsCallable__)

### listImageVersionsPagedCallable()

```
public UnaryCallable<ListImageVersionsRequest,ImageVersionsClient.ListImageVersionsPagedResponse> listImageVersionsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListImageVersionsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest),[ListImageVersionsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.ImageVersionsClient.ListImageVersionsPagedResponse)>`

**Overrides**

[ImageVersionsStub.listImageVersionsPagedCallable()](/java/docs/reference/google-cloud-orchestration-airflow/1.21.0/com.google.cloud.orchestration.airflow.service.v1.stub.ImageVersionsStub#com_google_cloud_orchestration_airflow_service_v1_stub_ImageVersionsStub_listImageVersionsPagedCallable__)

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
