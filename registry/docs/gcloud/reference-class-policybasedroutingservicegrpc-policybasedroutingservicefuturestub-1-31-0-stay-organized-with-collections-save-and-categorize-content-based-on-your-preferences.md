-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub (1.31.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public static final class PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub extends AbstractFutureStub<PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service PolicyBasedRoutingService.

Policy-Based Routing allows GCP customers to specify flexibile routing policies for Layer 4 traffic traversing through the connected service.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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

### build(Channel channel, CallOptions callOptions)

```
protected PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub build(Channel channel, CallOptions callOptions)
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

`[PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.PolicyBasedRoutingServiceGrpc.PolicyBasedRoutingServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createPolicyBasedRoute(CreatePolicyBasedRouteRequest request)

```
public ListenableFuture<Operation> createPolicyBasedRoute(CreatePolicyBasedRouteRequest request)
```

Creates a new PolicyBasedRoute in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreatePolicyBasedRouteRequest](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deletePolicyBasedRoute(DeletePolicyBasedRouteRequest request)

```
public ListenableFuture<Operation> deletePolicyBasedRoute(DeletePolicyBasedRouteRequest request)
```

Deletes a single PolicyBasedRoute.

**Parameter**

**Name**

**Description**

`request`

`[DeletePolicyBasedRouteRequest](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getPolicyBasedRoute(GetPolicyBasedRouteRequest request)

```
public ListenableFuture<PolicyBasedRoute> getPolicyBasedRoute(GetPolicyBasedRouteRequest request)
```

Gets details of a single PolicyBasedRoute.

**Parameter**

**Name**

**Description**

`request`

`[GetPolicyBasedRouteRequest](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[PolicyBasedRoute](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.PolicyBasedRoute)>`

### listPolicyBasedRoutes(ListPolicyBasedRoutesRequest request)

```
public ListenableFuture<ListPolicyBasedRoutesResponse> listPolicyBasedRoutes(ListPolicyBasedRoutesRequest request)
```

Lists PolicyBasedRoutes in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListPolicyBasedRoutesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPolicyBasedRoutesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.31.0/com.google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
