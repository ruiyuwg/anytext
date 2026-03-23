-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcImageAnnotatorStub (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public class GrpcImageAnnotatorStub extends ImageAnnotatorStub
```

gRPC stub implementation for the ImageAnnotator service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub) \> GrpcImageAnnotatorStub

## Inherited Members

[ImageAnnotatorStub.asyncBatchAnnotateFilesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateFilesCallable__)

[ImageAnnotatorStub.asyncBatchAnnotateFilesOperationCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateFilesOperationCallable__)

[ImageAnnotatorStub.asyncBatchAnnotateImagesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateImagesCallable__)

[ImageAnnotatorStub.asyncBatchAnnotateImagesOperationCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateImagesOperationCallable__)

[ImageAnnotatorStub.batchAnnotateFilesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_batchAnnotateFilesCallable__)

[ImageAnnotatorStub.batchAnnotateImagesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_batchAnnotateImagesCallable__)

[ImageAnnotatorStub.close()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_close__)

[ImageAnnotatorStub.getHttpJsonOperationsStub()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_getHttpJsonOperationsStub__)

[ImageAnnotatorStub.getOperationsStub()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_getOperationsStub__)

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
public static final GrpcImageAnnotatorStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.GrpcImageAnnotatorStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcImageAnnotatorStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.GrpcImageAnnotatorStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ImageAnnotatorStubSettings settings)

```
public static final GrpcImageAnnotatorStub create(ImageAnnotatorStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[ImageAnnotatorStubSettings](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.GrpcImageAnnotatorStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcImageAnnotatorStub(ImageAnnotatorStubSettings settings, ClientContext clientContext)

```
protected GrpcImageAnnotatorStub(ImageAnnotatorStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcImageAnnotatorStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ImageAnnotatorStubSettings](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcImageAnnotatorStub(ImageAnnotatorStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcImageAnnotatorStub(ImageAnnotatorStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcImageAnnotatorStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ImageAnnotatorStubSettings](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

## Methods

### asyncBatchAnnotateFilesCallable()

```
public UnaryCallable<AsyncBatchAnnotateFilesRequest,Operation> asyncBatchAnnotateFilesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AsyncBatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateFilesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

**Overrides**

[ImageAnnotatorStub.asyncBatchAnnotateFilesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateFilesCallable__)

### asyncBatchAnnotateFilesOperationCallable()

```
public OperationCallable<AsyncBatchAnnotateFilesRequest,AsyncBatchAnnotateFilesResponse,OperationMetadata> asyncBatchAnnotateFilesOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[AsyncBatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateFilesRequest),[AsyncBatchAnnotateFilesResponse](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateFilesResponse),[OperationMetadata](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.OperationMetadata)>`

**Overrides**

[ImageAnnotatorStub.asyncBatchAnnotateFilesOperationCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateFilesOperationCallable__)

### asyncBatchAnnotateImagesCallable()

```
public UnaryCallable<AsyncBatchAnnotateImagesRequest,Operation> asyncBatchAnnotateImagesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AsyncBatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateImagesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

**Overrides**

[ImageAnnotatorStub.asyncBatchAnnotateImagesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateImagesCallable__)

### asyncBatchAnnotateImagesOperationCallable()

```
public OperationCallable<AsyncBatchAnnotateImagesRequest,AsyncBatchAnnotateImagesResponse,OperationMetadata> asyncBatchAnnotateImagesOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[AsyncBatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateImagesRequest),[AsyncBatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.AsyncBatchAnnotateImagesResponse),[OperationMetadata](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.OperationMetadata)>`

**Overrides**

[ImageAnnotatorStub.asyncBatchAnnotateImagesOperationCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_asyncBatchAnnotateImagesOperationCallable__)

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

### batchAnnotateFilesCallable()

```
public UnaryCallable<BatchAnnotateFilesRequest,BatchAnnotateFilesResponse> batchAnnotateFilesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BatchAnnotateFilesRequest),[BatchAnnotateFilesResponse](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BatchAnnotateFilesResponse)>`

**Overrides**

[ImageAnnotatorStub.batchAnnotateFilesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_batchAnnotateFilesCallable__)

### batchAnnotateImagesCallable()

```
public UnaryCallable<BatchAnnotateImagesRequest,BatchAnnotateImagesResponse> batchAnnotateImagesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BatchAnnotateImagesRequest),[BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BatchAnnotateImagesResponse)>`

**Overrides**

[ImageAnnotatorStub.batchAnnotateImagesCallable()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_batchAnnotateImagesCallable__)

### close()

```
public final void close()
```

**Overrides**

[ImageAnnotatorStub.close()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_close__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

**Overrides**

[ImageAnnotatorStub.getOperationsStub()](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.stub.ImageAnnotatorStub#com_google_cloud_vision_v1p4beta1_stub_ImageAnnotatorStub_getOperationsStub__)

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
