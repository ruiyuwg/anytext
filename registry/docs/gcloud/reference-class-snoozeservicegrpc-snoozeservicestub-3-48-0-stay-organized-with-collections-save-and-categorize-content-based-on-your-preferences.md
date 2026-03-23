-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SnoozeServiceGrpc.SnoozeServiceStub (3.48.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public static final class SnoozeServiceGrpc.SnoozeServiceStub extends AbstractAsyncStub<SnoozeServiceGrpc.SnoozeServiceStub>
```

A stub to allow clients to do asynchronous rpc calls to service SnoozeService.

The SnoozeService API is used to temporarily prevent an alert policy from generating alerts. A Snooze is a description of the criteria under which one or more alert policies should not fire alerts for the specified duration.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> SnoozeServiceGrpc.SnoozeServiceStub

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
protected SnoozeServiceGrpc.SnoozeServiceStub build(Channel channel, CallOptions callOptions)
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

`[SnoozeServiceGrpc.SnoozeServiceStub](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.SnoozeServiceGrpc.SnoozeServiceStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createSnooze(CreateSnoozeRequest request, StreamObserver<Snooze> responseObserver)

```
public void createSnooze(CreateSnoozeRequest request, StreamObserver<Snooze> responseObserver)
```

Creates a `Snooze` that will prevent alerts, which match the provided criteria, from being opened. The `Snooze` applies for a specific time interval.

**Parameters**

**Name**

**Description**

`request`

`[CreateSnoozeRequest](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.CreateSnoozeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Snooze](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.Snooze)>`  

### getSnooze(GetSnoozeRequest request, StreamObserver<Snooze> responseObserver)

```
public void getSnooze(GetSnoozeRequest request, StreamObserver<Snooze> responseObserver)
```

Retrieves a `Snooze` by `name`.

**Parameters**

**Name**

**Description**

`request`

`[GetSnoozeRequest](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.GetSnoozeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Snooze](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.Snooze)>`  

### listSnoozes(ListSnoozesRequest request, StreamObserver<ListSnoozesResponse> responseObserver)

```
public void listSnoozes(ListSnoozesRequest request, StreamObserver<ListSnoozesResponse> responseObserver)
```

Lists the `Snooze`s associated with a project. Can optionally pass in `filter`, which specifies predicates to match `Snooze`s.

**Parameters**

**Name**

**Description**

`request`

`[ListSnoozesRequest](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.ListSnoozesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListSnoozesResponse](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.ListSnoozesResponse)>`  

### updateSnooze(UpdateSnoozeRequest request, StreamObserver<Snooze> responseObserver)

```
public void updateSnooze(UpdateSnoozeRequest request, StreamObserver<Snooze> responseObserver)
```

Updates a `Snooze`, identified by its `name`, with the parameters in the given `Snooze` object.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSnoozeRequest](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.UpdateSnoozeRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Snooze](/java/docs/reference/google-cloud-monitoring/3.48.0/com.google.monitoring.v3.Snooze)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
