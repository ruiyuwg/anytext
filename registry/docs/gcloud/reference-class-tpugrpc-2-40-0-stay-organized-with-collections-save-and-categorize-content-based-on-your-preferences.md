-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TpuGrpc (2.40.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public final class TpuGrpc
```

Manages TPU nodes and other resources TPU API v2alpha1

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TpuGrpc

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

### bindService(TpuGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(TpuGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[TpuGrpc.AsyncService](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.TpuGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateNodeMethod()

```
public static MethodDescriptor<CreateNodeRequest,Operation> getCreateNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.CreateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateQueuedResourceMethod()

```
public static MethodDescriptor<CreateQueuedResourceRequest,Operation> getCreateQueuedResourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateQueuedResourceRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteNodeMethod()

```
public static MethodDescriptor<DeleteNodeRequest,Operation> getDeleteNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.DeleteNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteQueuedResourceMethod()

```
public static MethodDescriptor<DeleteQueuedResourceRequest,Operation> getDeleteQueuedResourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteQueuedResourceRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGenerateServiceIdentityMethod()

```
public static MethodDescriptor<GenerateServiceIdentityRequest,GenerateServiceIdentityResponse> getGenerateServiceIdentityMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GenerateServiceIdentityRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest),[GenerateServiceIdentityResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse)>`

### getGetAcceleratorTypeMethod()

```
public static MethodDescriptor<GetAcceleratorTypeRequest,AcceleratorType> getGetAcceleratorTypeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetAcceleratorTypeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest),[AcceleratorType](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.AcceleratorType)>`

### getGetGuestAttributesMethod()

```
public static MethodDescriptor<GetGuestAttributesRequest,GetGuestAttributesResponse> getGetGuestAttributesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetGuestAttributesRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetGuestAttributesRequest),[GetGuestAttributesResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetGuestAttributesResponse)>`

### getGetNodeMethod()

```
public static MethodDescriptor<GetNodeRequest,Node> getGetNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.Node)>`

### getGetQueuedResourceMethod()

```
public static MethodDescriptor<GetQueuedResourceRequest,QueuedResource> getGetQueuedResourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetQueuedResourceRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetQueuedResourceRequest),[QueuedResource](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.QueuedResource)>`

### getGetRuntimeVersionMethod()

```
public static MethodDescriptor<GetRuntimeVersionRequest,RuntimeVersion> getGetRuntimeVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetRuntimeVersionRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest),[RuntimeVersion](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.RuntimeVersion)>`

### getListAcceleratorTypesMethod()

```
public static MethodDescriptor<ListAcceleratorTypesRequest,ListAcceleratorTypesResponse> getListAcceleratorTypesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListAcceleratorTypesRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest),[ListAcceleratorTypesResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse)>`

### getListNodesMethod()

```
public static MethodDescriptor<ListNodesRequest,ListNodesResponse> getListNodesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListNodesRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListNodesRequest),[ListNodesResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListNodesResponse)>`

### getListQueuedResourcesMethod()

```
public static MethodDescriptor<ListQueuedResourcesRequest,ListQueuedResourcesResponse> getListQueuedResourcesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListQueuedResourcesRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest),[ListQueuedResourcesResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse)>`

### getListRuntimeVersionsMethod()

```
public static MethodDescriptor<ListRuntimeVersionsRequest,ListRuntimeVersionsResponse> getListRuntimeVersionsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListRuntimeVersionsRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest),[ListRuntimeVersionsResponse](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse)>`

### getResetQueuedResourceMethod()

```
public static MethodDescriptor<ResetQueuedResourceRequest,Operation> getResetQueuedResourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ResetQueuedResourceRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.ResetQueuedResourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getSimulateMaintenanceEventMethod()

```
public static MethodDescriptor<SimulateMaintenanceEventRequest,Operation> getSimulateMaintenanceEventMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SimulateMaintenanceEventRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getStartNodeMethod()

```
public static MethodDescriptor<StartNodeRequest,Operation> getStartNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.StartNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getStopNodeMethod()

```
public static MethodDescriptor<StopNodeRequest,Operation> getStopNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.StopNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateNodeMethod()

```
public static MethodDescriptor<UpdateNodeRequest,Operation> getUpdateNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateNodeRequest](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.UpdateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static TpuGrpc.TpuBlockingStub newBlockingStub(Channel channel)
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

`[TpuGrpc.TpuBlockingStub](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.TpuGrpc.TpuBlockingStub)`

### newFutureStub(Channel channel)

```
public static TpuGrpc.TpuFutureStub newFutureStub(Channel channel)
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

`[TpuGrpc.TpuFutureStub](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.TpuGrpc.TpuFutureStub)`

### newStub(Channel channel)

```
public static TpuGrpc.TpuStub newStub(Channel channel)
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

`[TpuGrpc.TpuStub](/java/docs/reference/google-cloud-tpu/2.40.0/com.google.cloud.tpu.v2alpha1.TpuGrpc.TpuStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
