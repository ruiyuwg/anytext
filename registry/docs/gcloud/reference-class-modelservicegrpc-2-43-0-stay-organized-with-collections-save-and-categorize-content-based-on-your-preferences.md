-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ModelServiceGrpc (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public final class ModelServiceGrpc
```

Service for performing CRUD operations on models. Recommendation models contain all the metadata necessary to generate a set of models for the `Predict()` API. A model is queried indirectly via a ServingConfig, which associates a model with a given Placement (e.g. Frequently Bought Together on Home Page). This service allows you to do the following:

-   Initiate training of a model.
-   Pause training of an existing model.
-   List all the available models along with their metadata.
-   Control their tuning schedule.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ModelServiceGrpc

## Inherited Members

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(ModelServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(ModelServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[ModelServiceGrpc.AsyncService](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ModelServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateModelMethod()

```
public static MethodDescriptor<CreateModelRequest,Operation> getCreateModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.CreateModelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteModelMethod()

```
public static MethodDescriptor<DeleteModelRequest,Empty> getDeleteModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.DeleteModelRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetModelMethod()

```
public static MethodDescriptor<GetModelRequest,Model> getGetModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.GetModelRequest),[Model](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Model)>`

### getListModelsMethod()

```
public static MethodDescriptor<ListModelsRequest,ListModelsResponse> getListModelsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListModelsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ListModelsRequest),[ListModelsResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ListModelsResponse)>`

### getPauseModelMethod()

```
public static MethodDescriptor<PauseModelRequest,Model> getPauseModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[PauseModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.PauseModelRequest),[Model](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Model)>`

### getResumeModelMethod()

```
public static MethodDescriptor<ResumeModelRequest,Model> getResumeModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ResumeModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ResumeModelRequest),[Model](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Model)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getTuneModelMethod()

```
public static MethodDescriptor<TuneModelRequest,Operation> getTuneModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[TuneModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.TuneModelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateModelMethod()

```
public static MethodDescriptor<UpdateModelRequest,Model> getUpdateModelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateModelRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.UpdateModelRequest),[Model](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Model)>`

### newBlockingStub(Channel channel)

```
public static ModelServiceGrpc.ModelServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[ModelServiceGrpc.ModelServiceBlockingStub](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ModelServiceGrpc.ModelServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static ModelServiceGrpc.ModelServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[ModelServiceGrpc.ModelServiceFutureStub](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ModelServiceGrpc.ModelServiceFutureStub)`

### newStub(Channel channel)

```
public static ModelServiceGrpc.ModelServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[ModelServiceGrpc.ModelServiceStub](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ModelServiceGrpc.ModelServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
