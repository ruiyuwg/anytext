-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DashboardsServiceGrpc.DashboardsServiceStub (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.0 2.3.0 2.2.6

```
public static final class DashboardsServiceGrpc.DashboardsServiceStub extends AbstractAsyncStub<DashboardsServiceGrpc.DashboardsServiceStub>
```

Manages Stackdriver dashboards. A dashboard is an arrangement of data display widgets in a specific layout.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> DashboardsServiceGrpc.DashboardsServiceStub

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
protected DashboardsServiceGrpc.DashboardsServiceStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

channel

`io.grpc.Channel`  

callOptions

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

[DashboardsServiceGrpc.DashboardsServiceStub](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.DashboardsServiceGrpc.DashboardsServiceStub)

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createDashboard(CreateDashboardRequest request, StreamObserver<Dashboard> responseObserver)

```
public void createDashboard(CreateDashboardRequest request, StreamObserver<Dashboard> responseObserver)
```

Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see [Managing dashboards by API](https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the `monitoring.dashboards.create` permission on the specified project. For more information about permissions, see [Cloud Identity and Access Management](https://cloud.google.com/iam).

**Parameters**

**Name**

**Description**

request

`[CreateDashboardRequest](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.CreateDashboardRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Dashboard](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.Dashboard)>`  

### deleteDashboard(DeleteDashboardRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteDashboard(DeleteDashboardRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an existing custom dashboard. This method requires the `monitoring.dashboards.delete` permission on the specified dashboard. For more information, see [Cloud Identity and Access Management](https://cloud.google.com/iam).

**Parameters**

**Name**

**Description**

request

`[DeleteDashboardRequest](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.DeleteDashboardRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getDashboard(GetDashboardRequest request, StreamObserver<Dashboard> responseObserver)

```
public void getDashboard(GetDashboardRequest request, StreamObserver<Dashboard> responseObserver)
```

Fetches a specific dashboard. This method requires the `monitoring.dashboards.get` permission on the specified dashboard. For more information, see [Cloud Identity and Access Management](https://cloud.google.com/iam).

**Parameters**

**Name**

**Description**

request

`[GetDashboardRequest](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.GetDashboardRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Dashboard](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.Dashboard)>`  

### listDashboards(ListDashboardsRequest request, StreamObserver<ListDashboardsResponse> responseObserver)

```
public void listDashboards(ListDashboardsRequest request, StreamObserver<ListDashboardsResponse> responseObserver)
```

Lists the existing dashboards. This method requires the `monitoring.dashboards.list` permission on the specified project. For more information, see [Cloud Identity and Access Management](https://cloud.google.com/iam).

**Parameters**

**Name**

**Description**

request

`[ListDashboardsRequest](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.ListDashboardsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListDashboardsResponse](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.ListDashboardsResponse)>`  

### updateDashboard(UpdateDashboardRequest request, StreamObserver<Dashboard> responseObserver)

```
public void updateDashboard(UpdateDashboardRequest request, StreamObserver<Dashboard> responseObserver)
```

Replaces an existing custom dashboard with a new definition. This method requires the `monitoring.dashboards.update` permission on the specified dashboard. For more information, see [Cloud Identity and Access Management](https://cloud.google.com/iam).

**Parameters**

**Name**

**Description**

request

`[UpdateDashboardRequest](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.UpdateDashboardRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Dashboard](/java/docs/reference/google-cloud-monitoring-dashboard/2.10.0/com.google.monitoring.dashboard.v1.Dashboard)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
