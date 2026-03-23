-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class StreamingServiceClient (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-visionai/google-cloud-visionai/src/main/java/com/google/cloud/visionai/v1/StreamingServiceClient.java)

[Product Reference](https://cloud.google.com/vision-ai/docs)

[RPC Documentation](https://cloud.google.com/vision-ai/docs/reference/rpc)

Service Description: Streaming service for receiving and sending packets.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   AcquireLeaseRequest request =
       AcquireLeaseRequest.newBuilder()
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .setTerm(Duration.newBuilder().build())
           .setLeaseType(LeaseType.forNumber(0))
           .build();
   Lease response = streamingServiceClient.acquireLease(request);
 }
 
```
 

Note: close() needs to be called on the StreamingServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

SendPackets

Send packets to the series.

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   sendPacketsCallable()
    

ReceivePackets

Receive packets from the series.

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   receivePacketsCallable()
    

ReceiveEvents

Receive events given the stream name.

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   receiveEventsCallable()
    

AcquireLease

AcquireLease acquires a lease.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   acquireLease(AcquireLeaseRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   acquireLeaseCallable()
    

RenewLease

RenewLease renews a lease.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   renewLease(RenewLeaseRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   renewLeaseCallable()
    

ReleaseLease

RleaseLease releases a lease.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   releaseLease(ReleaseLeaseRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   releaseLeaseCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of StreamingServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StreamingServiceSettings streamingServiceSettings =
     StreamingServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 StreamingServiceClient streamingServiceClient =
     StreamingServiceClient.create(streamingServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StreamingServiceSettings streamingServiceSettings =
     StreamingServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 StreamingServiceClient streamingServiceClient =
     StreamingServiceClient.create(streamingServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StreamingServiceSettings streamingServiceSettings =
     StreamingServiceSettings.newHttpJsonBuilder().build();
 StreamingServiceClient streamingServiceClient =
     StreamingServiceClient.create(streamingServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> StreamingServiceClient

## Static Methods

### create()

```
public static final StreamingServiceClient create()
```

Constructs an instance of StreamingServiceClient with default settings.

**Returns**

**Type**

**Description**

`[StreamingServiceClient](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(StreamingServiceSettings settings)

```
public static final StreamingServiceClient create(StreamingServiceSettings settings)
```

Constructs an instance of StreamingServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[StreamingServiceSettings](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceSettings)`  

**Returns**

**Type**

**Description**

`[StreamingServiceClient](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(StreamingServiceStub stub)

```
public static final StreamingServiceClient create(StreamingServiceStub stub)
```

Constructs an instance of StreamingServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(StreamingServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[StreamingServiceStub](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.stub.StreamingServiceStub)`  

**Returns**

**Type**

**Description**

`[StreamingServiceClient](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceClient)`

## Constructors

### StreamingServiceClient(StreamingServiceSettings settings)

```
protected StreamingServiceClient(StreamingServiceSettings settings)
```

Constructs an instance of StreamingServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[StreamingServiceSettings](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceSettings)`  

### StreamingServiceClient(StreamingServiceStub stub)

```
protected StreamingServiceClient(StreamingServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[StreamingServiceStub](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.stub.StreamingServiceStub)`  

## Methods

### acquireLease(AcquireLeaseRequest request)

```
public final Lease acquireLease(AcquireLeaseRequest request)
```

AcquireLease acquires a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   AcquireLeaseRequest request =
       AcquireLeaseRequest.newBuilder()
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .setTerm(Duration.newBuilder().build())
           .setLeaseType(LeaseType.forNumber(0))
           .build();
   Lease response = streamingServiceClient.acquireLease(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[AcquireLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.AcquireLeaseRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Lease](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.Lease)`

### acquireLeaseCallable()

```
public final UnaryCallable<AcquireLeaseRequest,Lease> acquireLeaseCallable()
```

AcquireLease acquires a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   AcquireLeaseRequest request =
       AcquireLeaseRequest.newBuilder()
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .setTerm(Duration.newBuilder().build())
           .setLeaseType(LeaseType.forNumber(0))
           .build();
   ApiFuture<Lease> future = streamingServiceClient.acquireLeaseCallable().futureCall(request);
   // Do something.
   Lease response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AcquireLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.AcquireLeaseRequest),[Lease](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.Lease)>`

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### close()

```
public final void close()
```

### getSettings()

```
public final StreamingServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[StreamingServiceSettings](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.StreamingServiceSettings)`

### getStub()

```
public StreamingServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[StreamingServiceStub](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.stub.StreamingServiceStub)`

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### receiveEventsCallable()

```
public final BidiStreamingCallable<ReceiveEventsRequest,ReceiveEventsResponse> receiveEventsCallable()
```

Receive events given the stream name.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   BidiStream<ReceiveEventsRequest, ReceiveEventsResponse> bidiStream =
       streamingServiceClient.receiveEventsCallable().call();
   ReceiveEventsRequest request = ReceiveEventsRequest.newBuilder().build();
   bidiStream.send(request);
   for (ReceiveEventsResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<[ReceiveEventsRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReceiveEventsRequest),[ReceiveEventsResponse](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReceiveEventsResponse)>`

### receivePacketsCallable()

```
public final BidiStreamingCallable<ReceivePacketsRequest,ReceivePacketsResponse> receivePacketsCallable()
```

Receive packets from the series.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   BidiStream<ReceivePacketsRequest, ReceivePacketsResponse> bidiStream =
       streamingServiceClient.receivePacketsCallable().call();
   ReceivePacketsRequest request = ReceivePacketsRequest.newBuilder().build();
   bidiStream.send(request);
   for (ReceivePacketsResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<[ReceivePacketsRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReceivePacketsRequest),[ReceivePacketsResponse](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReceivePacketsResponse)>`

### releaseLease(ReleaseLeaseRequest request)

```
public final ReleaseLeaseResponse releaseLease(ReleaseLeaseRequest request)
```

RleaseLease releases a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   ReleaseLeaseRequest request =
       ReleaseLeaseRequest.newBuilder()
           .setId("id3355")
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .build();
   ReleaseLeaseResponse response = streamingServiceClient.releaseLease(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ReleaseLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReleaseLeaseRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReleaseLeaseResponse](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReleaseLeaseResponse)`

### releaseLeaseCallable()

```
public final UnaryCallable<ReleaseLeaseRequest,ReleaseLeaseResponse> releaseLeaseCallable()
```

RleaseLease releases a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   ReleaseLeaseRequest request =
       ReleaseLeaseRequest.newBuilder()
           .setId("id3355")
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .build();
   ApiFuture<ReleaseLeaseResponse> future =
       streamingServiceClient.releaseLeaseCallable().futureCall(request);
   // Do something.
   ReleaseLeaseResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ReleaseLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReleaseLeaseRequest),[ReleaseLeaseResponse](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.ReleaseLeaseResponse)>`

### renewLease(RenewLeaseRequest request)

```
public final Lease renewLease(RenewLeaseRequest request)
```

RenewLease renews a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   RenewLeaseRequest request =
       RenewLeaseRequest.newBuilder()
           .setId("id3355")
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .setTerm(Duration.newBuilder().build())
           .build();
   Lease response = streamingServiceClient.renewLease(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[RenewLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.RenewLeaseRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Lease](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.Lease)`

### renewLeaseCallable()

```
public final UnaryCallable<RenewLeaseRequest,Lease> renewLeaseCallable()
```

RenewLease renews a lease.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   RenewLeaseRequest request =
       RenewLeaseRequest.newBuilder()
           .setId("id3355")
           .setSeries("series-905838985")
           .setOwner("owner106164915")
           .setTerm(Duration.newBuilder().build())
           .build();
   ApiFuture<Lease> future = streamingServiceClient.renewLeaseCallable().futureCall(request);
   // Do something.
   Lease response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RenewLeaseRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.RenewLeaseRequest),[Lease](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.Lease)>`

### sendPacketsCallable()

```
public final BidiStreamingCallable<SendPacketsRequest,SendPacketsResponse> sendPacketsCallable()
```

Send packets to the series.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StreamingServiceClient streamingServiceClient = StreamingServiceClient.create()) {
   BidiStream<SendPacketsRequest, SendPacketsResponse> bidiStream =
       streamingServiceClient.sendPacketsCallable().call();
   SendPacketsRequest request = SendPacketsRequest.newBuilder().build();
   bidiStream.send(request);
   for (SendPacketsResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<[SendPacketsRequest](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.SendPacketsRequest),[SendPacketsResponse](/java/docs/reference/google-cloud-visionai/0.2.0/com.google.cloud.visionai.v1.SendPacketsResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
