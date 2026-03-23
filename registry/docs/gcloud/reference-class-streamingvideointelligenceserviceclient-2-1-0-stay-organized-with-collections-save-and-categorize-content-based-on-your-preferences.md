-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class StreamingVideoIntelligenceServiceClient (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public class StreamingVideoIntelligenceServiceClient implements BackgroundResource
```

Service Description: Service that implements streaming Video Intelligence API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (StreamingVideoIntelligenceServiceClient streamingVideoIntelligenceServiceClient =
     StreamingVideoIntelligenceServiceClient.create()) {
   BidiStream<StreamingAnnotateVideoRequest, StreamingAnnotateVideoResponse> bidiStream =
       streamingVideoIntelligenceServiceClient.streamingAnnotateVideoCallable().call();
   StreamingAnnotateVideoRequest request = StreamingAnnotateVideoRequest.newBuilder().build();
   bidiStream.send(request);
   for (StreamingAnnotateVideoResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

Note: close() needs to be called on the StreamingVideoIntelligenceServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of StreamingVideoIntelligenceServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 StreamingVideoIntelligenceServiceSettings streamingVideoIntelligenceServiceSettings =
     StreamingVideoIntelligenceServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 StreamingVideoIntelligenceServiceClient streamingVideoIntelligenceServiceClient =
     StreamingVideoIntelligenceServiceClient.create(streamingVideoIntelligenceServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 StreamingVideoIntelligenceServiceSettings streamingVideoIntelligenceServiceSettings =
     StreamingVideoIntelligenceServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 StreamingVideoIntelligenceServiceClient streamingVideoIntelligenceServiceClient =
     StreamingVideoIntelligenceServiceClient.create(streamingVideoIntelligenceServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> StreamingVideoIntelligenceServiceClient

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.core.BackgroundResource.html)

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

## Static Methods

### create()

```
public static final StreamingVideoIntelligenceServiceClient create()
```

Constructs an instance of StreamingVideoIntelligenceServiceClient with default settings.

**Returns**

**Type**

**Description**

[StreamingVideoIntelligenceServiceClient](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(StreamingVideoIntelligenceServiceSettings settings)

```
public static final StreamingVideoIntelligenceServiceClient create(StreamingVideoIntelligenceServiceSettings settings)
```

Constructs an instance of StreamingVideoIntelligenceServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[StreamingVideoIntelligenceServiceSettings](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceSettings)`  

**Returns**

**Type**

**Description**

[StreamingVideoIntelligenceServiceClient](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(StreamingVideoIntelligenceServiceStub stub)

```
public static final StreamingVideoIntelligenceServiceClient create(StreamingVideoIntelligenceServiceStub stub)
```

Constructs an instance of StreamingVideoIntelligenceServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(StreamingVideoIntelligenceServiceSettings).

**Parameter**

**Name**

**Description**

stub

`[StreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub)`  

**Returns**

**Type**

**Description**

[StreamingVideoIntelligenceServiceClient](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceClient)

## Constructors

### StreamingVideoIntelligenceServiceClient(StreamingVideoIntelligenceServiceSettings settings)

```
protected StreamingVideoIntelligenceServiceClient(StreamingVideoIntelligenceServiceSettings settings)
```

Constructs an instance of StreamingVideoIntelligenceServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[StreamingVideoIntelligenceServiceSettings](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceSettings)`  

### StreamingVideoIntelligenceServiceClient(StreamingVideoIntelligenceServiceStub stub)

```
protected StreamingVideoIntelligenceServiceClient(StreamingVideoIntelligenceServiceStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[StreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### close()

```
public final void close()
```

### getSettings()

```
public final StreamingVideoIntelligenceServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

[StreamingVideoIntelligenceServiceSettings](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceServiceSettings)

### getStub()

```
public StreamingVideoIntelligenceServiceStub getStub()
```

**Returns**

**Type**

**Description**

[StreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### streamingAnnotateVideoCallable()

```
public final BidiStreamingCallable<StreamingAnnotateVideoRequest,StreamingAnnotateVideoResponse> streamingAnnotateVideoCallable()
```

Performs video annotation with bidirectional streaming: emitting results while sending video/audio bytes. This method is only available via the gRPC API (not REST).

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (StreamingVideoIntelligenceServiceClient streamingVideoIntelligenceServiceClient =
     StreamingVideoIntelligenceServiceClient.create()) {
   BidiStream<StreamingAnnotateVideoRequest, StreamingAnnotateVideoResponse> bidiStream =
       streamingVideoIntelligenceServiceClient.streamingAnnotateVideoCallable().call();
   StreamingAnnotateVideoRequest request = StreamingAnnotateVideoRequest.newBuilder().build();
   bidiStream.send(request);
   for (StreamingAnnotateVideoResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.BidiStreamingCallable.html)<[StreamingAnnotateVideoRequest](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest),[StreamingAnnotateVideoResponse](/java/docs/reference/google-cloud-video-intelligence/2.1.0/com.google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
