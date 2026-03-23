-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServingConfigServiceGrpc.ServingConfigServiceStub (2.54.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class ServingConfigServiceGrpc.ServingConfigServiceStub extends AbstractAsyncStub<ServingConfigServiceGrpc.ServingConfigServiceStub>
```

A stub to allow clients to do asynchronous rpc calls to service ServingConfigService.

Service for modifying ServingConfig.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> ServingConfigServiceGrpc.ServingConfigServiceStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

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

### addControl(AddControlRequest request, StreamObserver<ServingConfig> responseObserver)

```
public void addControl(AddControlRequest request, StreamObserver<ServingConfig> responseObserver)
```

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY\_EXISTS error if the control has already been applied. Returns a FAILED\_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

**Parameters**

**Name**

**Description**

`request`

`[AddControlRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.AddControlRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ServingConfig](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfig)>`  

### build(Channel channel, CallOptions callOptions)

```
protected ServingConfigServiceGrpc.ServingConfigServiceStub build(Channel channel, CallOptions callOptions)
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

`[ServingConfigServiceGrpc.ServingConfigServiceStub](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfigServiceGrpc.ServingConfigServiceStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createServingConfig(CreateServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)

```
public void createServingConfig(CreateServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)
```

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED\_PRECONDITION error is returned.

**Parameters**

**Name**

**Description**

`request`

`[CreateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.CreateServingConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ServingConfig](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfig)>`  

### deleteServingConfig(DeleteServingConfigRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteServingConfig(DeleteServingConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

**Parameters**

**Name**

**Description**

`request`

`[DeleteServingConfigRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.DeleteServingConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getServingConfig(GetServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)

```
public void getServingConfig(GetServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)
```

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

**Parameters**

**Name**

**Description**

`request`

`[GetServingConfigRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.GetServingConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ServingConfig](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfig)>`  

### listServingConfigs(ListServingConfigsRequest request, StreamObserver<ListServingConfigsResponse> responseObserver)

```
public void listServingConfigs(ListServingConfigsRequest request, StreamObserver<ListServingConfigsResponse> responseObserver)
```

Lists all ServingConfigs linked to this catalog.

**Parameters**

**Name**

**Description**

`request`

`[ListServingConfigsRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ListServingConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListServingConfigsResponse](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ListServingConfigsResponse)>`  

### removeControl(RemoveControlRequest request, StreamObserver<ServingConfig> responseObserver)

```
public void removeControl(RemoveControlRequest request, StreamObserver<ServingConfig> responseObserver)
```

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT\_FOUND error if the Control is not enabled for the ServingConfig.

**Parameters**

**Name**

**Description**

`request`

`[RemoveControlRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.RemoveControlRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ServingConfig](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfig)>`  

### updateServingConfig(UpdateServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)

```
public void updateServingConfig(UpdateServingConfigRequest request, StreamObserver<ServingConfig> responseObserver)
```

Updates a ServingConfig.

**Parameters**

**Name**

**Description**

`request`

`[UpdateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.UpdateServingConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ServingConfig](/java/docs/reference/google-cloud-retail/2.54.0/com.google.cloud.retail.v2beta.ServingConfig)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
