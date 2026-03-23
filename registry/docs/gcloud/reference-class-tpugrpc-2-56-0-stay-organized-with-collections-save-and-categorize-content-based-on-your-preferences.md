-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TpuGrpc (2.56.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public final class TpuGrpc
```

Manages TPU nodes and other resources TPU API v1

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

`[TpuGrpc.AsyncService](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.TpuGrpc.AsyncService)`  

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

`io.grpc.MethodDescriptor<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.CreateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteNodeMethod()

```
public static MethodDescriptor<DeleteNodeRequest,Operation> getDeleteNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.DeleteNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetAcceleratorTypeMethod()

```
public static MethodDescriptor<GetAcceleratorTypeRequest,AcceleratorType> getGetAcceleratorTypeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetAcceleratorTypeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.GetAcceleratorTypeRequest),[AcceleratorType](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.AcceleratorType)>`

### getGetNodeMethod()

```
public static MethodDescriptor<GetNodeRequest,Node> getGetNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.GetNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.Node)>`

### getGetTensorFlowVersionMethod()

```
public static MethodDescriptor<GetTensorFlowVersionRequest,TensorFlowVersion> getGetTensorFlowVersionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetTensorFlowVersionRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.GetTensorFlowVersionRequest),[TensorFlowVersion](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.TensorFlowVersion)>`

### getListAcceleratorTypesMethod()

```
public static MethodDescriptor<ListAcceleratorTypesRequest,ListAcceleratorTypesResponse> getListAcceleratorTypesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListAcceleratorTypesRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListAcceleratorTypesRequest),[ListAcceleratorTypesResponse](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListAcceleratorTypesResponse)>`

### getListNodesMethod()

```
public static MethodDescriptor<ListNodesRequest,ListNodesResponse> getListNodesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListNodesRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListNodesRequest),[ListNodesResponse](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListNodesResponse)>`

### getListTensorFlowVersionsMethod()

```
public static MethodDescriptor<ListTensorFlowVersionsRequest,ListTensorFlowVersionsResponse> getListTensorFlowVersionsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListTensorFlowVersionsRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListTensorFlowVersionsRequest),[ListTensorFlowVersionsResponse](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ListTensorFlowVersionsResponse)>`

### getReimageNodeMethod()

```
public static MethodDescriptor<ReimageNodeRequest,Operation> getReimageNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ReimageNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.ReimageNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getStartNodeMethod()

```
public static MethodDescriptor<StartNodeRequest,Operation> getStartNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.StartNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getStopNodeMethod()

```
public static MethodDescriptor<StopNodeRequest,Operation> getStopNodeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.StopNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

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

`[TpuGrpc.TpuBlockingStub](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.TpuGrpc.TpuBlockingStub)`

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

`[TpuGrpc.TpuFutureStub](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.TpuGrpc.TpuFutureStub)`

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

`[TpuGrpc.TpuStub](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v1.TpuGrpc.TpuStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
