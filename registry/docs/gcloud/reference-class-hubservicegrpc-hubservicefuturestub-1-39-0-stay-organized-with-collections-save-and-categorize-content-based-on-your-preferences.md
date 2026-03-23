-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HubServiceGrpc.HubServiceFutureStub (1.39.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public static final class HubServiceGrpc.HubServiceFutureStub extends AbstractFutureStub<HubServiceGrpc.HubServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service HubService.

Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> HubServiceGrpc.HubServiceFutureStub

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

### acceptHubSpoke(AcceptHubSpokeRequest request)

```
public ListenableFuture<Operation> acceptHubSpoke(AcceptHubSpokeRequest request)
```

Accepts a proposal to attach a Network Connectivity Center spoke to a hub.

**Parameter**

**Name**

**Description**

`request`

`[AcceptHubSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### build(Channel channel, CallOptions callOptions)

```
protected HubServiceGrpc.HubServiceFutureStub build(Channel channel, CallOptions callOptions)
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

`[HubServiceGrpc.HubServiceFutureStub](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.HubServiceGrpc.HubServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createHub(CreateHubRequest request)

```
public ListenableFuture<Operation> createHub(CreateHubRequest request)
```

Creates a new Network Connectivity Center hub in the specified project.

**Parameter**

**Name**

**Description**

`request`

`[CreateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.CreateHubRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createSpoke(CreateSpokeRequest request)

```
public ListenableFuture<Operation> createSpoke(CreateSpokeRequest request)
```

Creates a Network Connectivity Center spoke.

**Parameter**

**Name**

**Description**

`request`

`[CreateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.CreateSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteHub(DeleteHubRequest request)

```
public ListenableFuture<Operation> deleteHub(DeleteHubRequest request)
```

Deletes a Network Connectivity Center hub.

**Parameter**

**Name**

**Description**

`request`

`[DeleteHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.DeleteHubRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteSpoke(DeleteSpokeRequest request)

```
public ListenableFuture<Operation> deleteSpoke(DeleteSpokeRequest request)
```

Deletes a Network Connectivity Center spoke.

**Parameter**

**Name**

**Description**

`request`

`[DeleteSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.DeleteSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGroup(GetGroupRequest request)

```
public ListenableFuture<Group> getGroup(GetGroupRequest request)
```

Gets details about a Network Connectivity Center group.

**Parameter**

**Name**

**Description**

`request`

`[GetGroupRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.GetGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Group](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.Group)>`

### getHub(GetHubRequest request)

```
public ListenableFuture<Hub> getHub(GetHubRequest request)
```

Gets details about a Network Connectivity Center hub.

**Parameter**

**Name**

**Description**

`request`

`[GetHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.GetHubRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.Hub)>`

### getRoute(GetRouteRequest request)

```
public ListenableFuture<Route> getRoute(GetRouteRequest request)
```

Gets details about the specified route.

**Parameter**

**Name**

**Description**

`request`

`[GetRouteRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.GetRouteRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Route](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.Route)>`

### getRouteTable(GetRouteTableRequest request)

```
public ListenableFuture<RouteTable> getRouteTable(GetRouteTableRequest request)
```

Gets details about a Network Connectivity Center route table.

**Parameter**

**Name**

**Description**

`request`

`[GetRouteTableRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.GetRouteTableRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[RouteTable](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.RouteTable)>`

### getSpoke(GetSpokeRequest request)

```
public ListenableFuture<Spoke> getSpoke(GetSpokeRequest request)
```

Gets details about a Network Connectivity Center spoke.

**Parameter**

**Name**

**Description**

`request`

`[GetSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.GetSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.Spoke)>`

### listGroups(ListGroupsRequest request)

```
public ListenableFuture<ListGroupsResponse> listGroups(ListGroupsRequest request)
```

Lists groups in a given hub.

**Parameter**

**Name**

**Description**

`request`

`[ListGroupsRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListGroupsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListGroupsResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListGroupsResponse)>`

### listHubSpokes(ListHubSpokesRequest request)

```
public ListenableFuture<ListHubSpokesResponse> listHubSpokes(ListHubSpokesRequest request)
```

Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted.

**Parameter**

**Name**

**Description**

`request`

`[ListHubSpokesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListHubSpokesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListHubSpokesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListHubSpokesResponse)>`

### listHubs(ListHubsRequest request)

```
public ListenableFuture<ListHubsResponse> listHubs(ListHubsRequest request)
```

Lists the Network Connectivity Center hubs associated with a given project.

**Parameter**

**Name**

**Description**

`request`

`[ListHubsRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListHubsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListHubsResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListHubsResponse)>`

### listRouteTables(ListRouteTablesRequest request)

```
public ListenableFuture<ListRouteTablesResponse> listRouteTables(ListRouteTablesRequest request)
```

Lists route tables in a given project.

**Parameter**

**Name**

**Description**

`request`

`[ListRouteTablesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListRouteTablesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListRouteTablesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListRouteTablesResponse)>`

### listRoutes(ListRoutesRequest request)

```
public ListenableFuture<ListRoutesResponse> listRoutes(ListRoutesRequest request)
```

Lists routes in a given project.

**Parameter**

**Name**

**Description**

`request`

`[ListRoutesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListRoutesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListRoutesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListRoutesResponse)>`

### listSpokes(ListSpokesRequest request)

```
public ListenableFuture<ListSpokesResponse> listSpokes(ListSpokesRequest request)
```

Lists the Network Connectivity Center spokes in a specified project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListSpokesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListSpokesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListSpokesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.ListSpokesResponse)>`

### rejectHubSpoke(RejectHubSpokeRequest request)

```
public ListenableFuture<Operation> rejectHubSpoke(RejectHubSpokeRequest request)
```

Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub.

**Parameter**

**Name**

**Description**

`request`

`[RejectHubSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.RejectHubSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateHub(UpdateHubRequest request)

```
public ListenableFuture<Operation> updateHub(UpdateHubRequest request)
```

Updates the description and/or labels of a Network Connectivity Center hub.

**Parameter**

**Name**

**Description**

`request`

`[UpdateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.UpdateHubRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSpoke(UpdateSpokeRequest request)

```
public ListenableFuture<Operation> updateSpoke(UpdateSpokeRequest request)
```

Updates the parameters of a Network Connectivity Center spoke.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.39.0/com.google.cloud.networkconnectivity.v1.UpdateSpokeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
