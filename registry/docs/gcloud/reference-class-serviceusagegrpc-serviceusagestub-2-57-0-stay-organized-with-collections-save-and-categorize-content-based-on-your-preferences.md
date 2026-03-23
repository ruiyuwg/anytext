-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceUsageGrpc.ServiceUsageStub (2.57.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.8

```
public static final class ServiceUsageGrpc.ServiceUsageStub extends AbstractAsyncStub<ServiceUsageGrpc.ServiceUsageStub>
```

A stub to allow clients to do asynchronous rpc calls to service ServiceUsage.

Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use. See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> ServiceUsageGrpc.ServiceUsageStub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

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

### batchEnableServices(BatchEnableServicesRequest request, StreamObserver<Operation> responseObserver)

```
public void batchEnableServices(BatchEnableServicesRequest request, StreamObserver<Operation> responseObserver)
```

Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.

**Parameters**

**Name**

**Description**

`request`

`[BatchEnableServicesRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.BatchEnableServicesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### batchGetServices(BatchGetServicesRequest request, StreamObserver<BatchGetServicesResponse> responseObserver)

```
public void batchGetServices(BatchGetServicesRequest request, StreamObserver<BatchGetServicesResponse> responseObserver)
```

Returns the service configurations and enabled states for a given list of services.

**Parameters**

**Name**

**Description**

`request`

`[BatchGetServicesRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.BatchGetServicesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BatchGetServicesResponse](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.BatchGetServicesResponse)>`  

### build(Channel channel, CallOptions callOptions)

```
protected ServiceUsageGrpc.ServiceUsageStub build(Channel channel, CallOptions callOptions)
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

`[ServiceUsageGrpc.ServiceUsageStub](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.ServiceUsageGrpc.ServiceUsageStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### disableService(DisableServiceRequest request, StreamObserver<Operation> responseObserver)

```
public void disableService(DisableServiceRequest request, StreamObserver<Operation> responseObserver)
```

Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.

**Parameters**

**Name**

**Description**

`request`

`[DisableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.DisableServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### enableService(EnableServiceRequest request, StreamObserver<Operation> responseObserver)

```
public void enableService(EnableServiceRequest request, StreamObserver<Operation> responseObserver)
```

Enable a service so that it can be used with a project.

**Parameters**

**Name**

**Description**

`request`

`[EnableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.EnableServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getService(GetServiceRequest request, StreamObserver<Service> responseObserver)

```
public void getService(GetServiceRequest request, StreamObserver<Service> responseObserver)
```

Returns the service configuration and enabled state for a given service.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.GetServiceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Service](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.Service)>`  

### listServices(ListServicesRequest request, StreamObserver<ListServicesResponse> responseObserver)

```
public void listServices(ListServicesRequest request, StreamObserver<ListServicesResponse> responseObserver)
```

List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

**Parameters**

**Name**

**Description**

`request`

`[ListServicesRequest](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.ListServicesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListServicesResponse](/java/docs/reference/google-cloud-service-usage/2.57.0/com.google.api.serviceusage.v1.ListServicesResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
