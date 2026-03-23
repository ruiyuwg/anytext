-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonFleetRoutingStub (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public class HttpJsonFleetRoutingStub extends FleetRoutingStub
```

REST stub implementation for the FleetRouting service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [FleetRoutingStub](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub) \> HttpJsonFleetRoutingStub

## Inherited Members

[FleetRoutingStub.batchOptimizeToursCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_batchOptimizeToursCallable__)

[FleetRoutingStub.batchOptimizeToursOperationCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_batchOptimizeToursOperationCallable__)

[FleetRoutingStub.close()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_close__)

[FleetRoutingStub.getHttpJsonOperationsStub()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_getHttpJsonOperationsStub__)

[FleetRoutingStub.getOperationsStub()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_getOperationsStub__)

[FleetRoutingStub.optimizeToursCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_optimizeToursCallable__)

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
public static final HttpJsonFleetRoutingStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[HttpJsonFleetRoutingStub](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.HttpJsonFleetRoutingStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonFleetRoutingStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

callableFactory

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

[HttpJsonFleetRoutingStub](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.HttpJsonFleetRoutingStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(FleetRoutingStubSettings settings)

```
public static final HttpJsonFleetRoutingStub create(FleetRoutingStubSettings settings)
```

**Parameter**

**Name**

**Description**

settings

`[FleetRoutingStubSettings](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStubSettings)`  

**Returns**

**Type**

**Description**

[HttpJsonFleetRoutingStub](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.HttpJsonFleetRoutingStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)\>

## Constructors

### HttpJsonFleetRoutingStub(FleetRoutingStubSettings settings, ClientContext clientContext)

```
protected HttpJsonFleetRoutingStub(FleetRoutingStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonFleetRoutingStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

settings

`[FleetRoutingStubSettings](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStubSettings)`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonFleetRoutingStub(FleetRoutingStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonFleetRoutingStub(FleetRoutingStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonFleetRoutingStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

settings

`[FleetRoutingStubSettings](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStubSettings)`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

callableFactory

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### batchOptimizeToursCallable()

```
public UnaryCallable<BatchOptimizeToursRequest,Operation> batchOptimizeToursCallable()
```

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchOptimizeToursRequest](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

**Overrides**

[FleetRoutingStub.batchOptimizeToursCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_batchOptimizeToursCallable__)

### batchOptimizeToursOperationCallable()

```
public OperationCallable<BatchOptimizeToursRequest,BatchOptimizeToursResponse,AsyncModelMetadata> batchOptimizeToursOperationCallable()
```

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchOptimizeToursRequest](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest),[BatchOptimizeToursResponse](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.BatchOptimizeToursResponse),[AsyncModelMetadata](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.AsyncModelMetadata)\>

**Overrides**

[FleetRoutingStub.batchOptimizeToursOperationCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_batchOptimizeToursOperationCallable__)

### close()

```
public final void close()
```

**Overrides**

[FleetRoutingStub.close()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_close__)

### getHttpJsonOperationsStub()

```
public HttpJsonOperationsStub getHttpJsonOperationsStub()
```

**Returns**

**Type**

**Description**

[HttpJsonOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.stub.HttpJsonOperationsStub.html)

**Overrides**

[FleetRoutingStub.getHttpJsonOperationsStub()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_getHttpJsonOperationsStub__)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### optimizeToursCallable()

```
public UnaryCallable<OptimizeToursRequest,OptimizeToursResponse> optimizeToursCallable()
```

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[OptimizeToursRequest](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.OptimizeToursRequest),[OptimizeToursResponse](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.OptimizeToursResponse)\>

**Overrides**

[FleetRoutingStub.optimizeToursCallable()](/java/docs/reference/google-cloud-optimization/1.2.0/com.google.cloud.optimization.v1.stub.FleetRoutingStub#com_google_cloud_optimization_v1_stub_FleetRoutingStub_optimizeToursCallable__)

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
