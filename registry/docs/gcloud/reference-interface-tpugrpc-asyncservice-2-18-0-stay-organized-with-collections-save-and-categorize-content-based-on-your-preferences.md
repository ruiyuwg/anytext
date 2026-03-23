-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TpuGrpc.AsyncService (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public static interface TpuGrpc.AsyncService
```

Manages TPU nodes and other resources TPU API v2

## Methods

### createNode(CreateNodeRequest request, StreamObserver<Operation> responseObserver)

```
public default void createNode(CreateNodeRequest request, StreamObserver<Operation> responseObserver)
```

Creates a node.

**Parameters**

**Name**

**Description**

`request`

`[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.CreateNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteNode(DeleteNodeRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteNode(DeleteNodeRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a node.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.DeleteNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### generateServiceIdentity(GenerateServiceIdentityRequest request, StreamObserver<GenerateServiceIdentityResponse> responseObserver)

```
public default void generateServiceIdentity(GenerateServiceIdentityRequest request, StreamObserver<GenerateServiceIdentityResponse> responseObserver)
```

Generates the Cloud TPU service identity for the project.

**Parameters**

**Name**

**Description**

`request`

`[GenerateServiceIdentityRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GenerateServiceIdentityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GenerateServiceIdentityResponse](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GenerateServiceIdentityResponse)>`  

### getAcceleratorType(GetAcceleratorTypeRequest request, StreamObserver<AcceleratorType> responseObserver)

```
public default void getAcceleratorType(GetAcceleratorTypeRequest request, StreamObserver<AcceleratorType> responseObserver)
```

Gets AcceleratorType.

**Parameters**

**Name**

**Description**

`request`

`[GetAcceleratorTypeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GetAcceleratorTypeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[AcceleratorType](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.AcceleratorType)>`  

### getGuestAttributes(GetGuestAttributesRequest request, StreamObserver<GetGuestAttributesResponse> responseObserver)

```
public default void getGuestAttributes(GetGuestAttributesRequest request, StreamObserver<GetGuestAttributesResponse> responseObserver)
```

Retrieves the guest attributes for the node.

**Parameters**

**Name**

**Description**

`request`

`[GetGuestAttributesRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GetGuestAttributesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GetGuestAttributesResponse](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GetGuestAttributesResponse)>`  

### getNode(GetNodeRequest request, StreamObserver<Node> responseObserver)

```
public default void getNode(GetNodeRequest request, StreamObserver<Node> responseObserver)
```

Gets the details of a node.

**Parameters**

**Name**

**Description**

`request`

`[GetNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GetNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Node](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.Node)>`  

### getRuntimeVersion(GetRuntimeVersionRequest request, StreamObserver<RuntimeVersion> responseObserver)

```
public default void getRuntimeVersion(GetRuntimeVersionRequest request, StreamObserver<RuntimeVersion> responseObserver)
```

Gets a runtime version.

**Parameters**

**Name**

**Description**

`request`

`[GetRuntimeVersionRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.GetRuntimeVersionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[RuntimeVersion](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.RuntimeVersion)>`  

### listAcceleratorTypes(ListAcceleratorTypesRequest request, StreamObserver<ListAcceleratorTypesResponse> responseObserver)

```
public default void listAcceleratorTypes(ListAcceleratorTypesRequest request, StreamObserver<ListAcceleratorTypesResponse> responseObserver)
```

Lists accelerator types supported by this API.

**Parameters**

**Name**

**Description**

`request`

`[ListAcceleratorTypesRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListAcceleratorTypesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListAcceleratorTypesResponse](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListAcceleratorTypesResponse)>`  

### listNodes(ListNodesRequest request, StreamObserver<ListNodesResponse> responseObserver)

```
public default void listNodes(ListNodesRequest request, StreamObserver<ListNodesResponse> responseObserver)
```

Lists nodes.

**Parameters**

**Name**

**Description**

`request`

`[ListNodesRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListNodesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListNodesResponse](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListNodesResponse)>`  

### listRuntimeVersions(ListRuntimeVersionsRequest request, StreamObserver<ListRuntimeVersionsResponse> responseObserver)

```
public default void listRuntimeVersions(ListRuntimeVersionsRequest request, StreamObserver<ListRuntimeVersionsResponse> responseObserver)
```

Lists runtime versions supported by this API.

**Parameters**

**Name**

**Description**

`request`

`[ListRuntimeVersionsRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListRuntimeVersionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListRuntimeVersionsResponse](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.ListRuntimeVersionsResponse)>`  

### startNode(StartNodeRequest request, StreamObserver<Operation> responseObserver)

```
public default void startNode(StartNodeRequest request, StreamObserver<Operation> responseObserver)
```

Starts a node.

**Parameters**

**Name**

**Description**

`request`

`[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.StartNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### stopNode(StopNodeRequest request, StreamObserver<Operation> responseObserver)

```
public default void stopNode(StopNodeRequest request, StreamObserver<Operation> responseObserver)
```

Stops a node. This operation is only available with single TPU nodes.

**Parameters**

**Name**

**Description**

`request`

`[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.StopNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateNode(UpdateNodeRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateNode(UpdateNodeRequest request, StreamObserver<Operation> responseObserver)
```

Updates the configurations of a node.

**Parameters**

**Name**

**Description**

`request`

`[UpdateNodeRequest](/java/docs/reference/google-cloud-tpu/2.18.0/com.google.cloud.tpu.v2.UpdateNodeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
