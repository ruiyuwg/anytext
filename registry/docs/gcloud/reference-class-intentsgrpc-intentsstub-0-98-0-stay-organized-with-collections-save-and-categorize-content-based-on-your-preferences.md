-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class IntentsGrpc.IntentsStub (0.98.0) Stay organized with collections Save and categorize content based on your preferences.

0.98.0 (latest) 0.96.0 0.94.0 0.93.0 0.92.0 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.83.0 0.81.0 0.79.0 0.78.0 0.75.0 0.74.0 0.73.0 0.71.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.7 0.13.1 0.12.1 0.11.5

```
public static final class IntentsGrpc.IntentsStub extends AbstractAsyncStub<IntentsGrpc.IntentsStub>
```

A stub to allow clients to do asynchronous rpc calls to service Intents.

Service for managing Intents.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> IntentsGrpc.IntentsStub

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

### build(Channel channel, CallOptions callOptions)

```
protected IntentsGrpc.IntentsStub build(Channel channel, CallOptions callOptions)
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

`[IntentsGrpc.IntentsStub](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.IntentsGrpc.IntentsStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createIntent(CreateIntentRequest request, StreamObserver<Intent> responseObserver)

```
public void createIntent(CreateIntentRequest request, StreamObserver<Intent> responseObserver)
```

Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[CreateIntentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.CreateIntentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Intent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Intent)>`  

### deleteIntent(DeleteIntentRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteIntent(DeleteIntentRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[DeleteIntentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.DeleteIntentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### exportIntents(ExportIntentsRequest request, StreamObserver<Operation> responseObserver)

```
public void exportIntents(ExportIntentsRequest request, StreamObserver<Operation> responseObserver)
```

Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields:

-   `metadata`: ExportIntentsMetadata
-   `response`: ExportIntentsResponse

**Parameters**

**Name**

**Description**

`request`

`[ExportIntentsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ExportIntentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getIntent(GetIntentRequest request, StreamObserver<Intent> responseObserver)

```
public void getIntent(GetIntentRequest request, StreamObserver<Intent> responseObserver)
```

Retrieves the specified intent.

**Parameters**

**Name**

**Description**

`request`

`[GetIntentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GetIntentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Intent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Intent)>`  

### importIntents(ImportIntentsRequest request, StreamObserver<Operation> responseObserver)

```
public void importIntents(ImportIntentsRequest request, StreamObserver<Operation> responseObserver)
```

Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields:

-   `metadata`: ImportIntentsMetadata
-   `response`: ImportIntentsResponse

**Parameters**

**Name**

**Description**

`request`

`[ImportIntentsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ImportIntentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### listIntents(ListIntentsRequest request, StreamObserver<ListIntentsResponse> responseObserver)

```
public void listIntents(ListIntentsRequest request, StreamObserver<ListIntentsResponse> responseObserver)
```

Returns the list of all intents in the specified agent.

**Parameters**

**Name**

**Description**

`request`

`[ListIntentsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ListIntentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListIntentsResponse](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ListIntentsResponse)>`  

### updateIntent(UpdateIntentRequest request, StreamObserver<Intent> responseObserver)

```
public void updateIntent(UpdateIntentRequest request, StreamObserver<Intent> responseObserver)
```

Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[UpdateIntentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.UpdateIntentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Intent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Intent)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
