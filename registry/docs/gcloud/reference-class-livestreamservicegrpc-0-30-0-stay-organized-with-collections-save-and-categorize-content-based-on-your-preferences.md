-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LivestreamServiceGrpc (0.30.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public final class LivestreamServiceGrpc
```

Using Live Stream API, you can generate live streams in the various renditions and streaming formats. The streaming format include HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH). You can send a source stream in the various ways, including Real-Time Messaging Protocol (RTMP) and Secure Reliable Transport (SRT).

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> LivestreamServiceGrpc

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(LivestreamServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(LivestreamServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[LivestreamServiceGrpc.AsyncService](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.LivestreamServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateAssetMethod()

```
public static MethodDescriptor<CreateAssetRequest,Operation> getCreateAssetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateAssetRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.CreateAssetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateChannelMethod()

```
public static MethodDescriptor<CreateChannelRequest,Operation> getCreateChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.CreateChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateEventMethod()

```
public static MethodDescriptor<CreateEventRequest,Event> getCreateEventMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateEventRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.CreateEventRequest),[Event](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Event)>`

### getCreateInputMethod()

```
public static MethodDescriptor<CreateInputRequest,Operation> getCreateInputMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateInputRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.CreateInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteAssetMethod()

```
public static MethodDescriptor<DeleteAssetRequest,Operation> getDeleteAssetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteAssetRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.DeleteAssetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteChannelMethod()

```
public static MethodDescriptor<DeleteChannelRequest,Operation> getDeleteChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.DeleteChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteEventMethod()

```
public static MethodDescriptor<DeleteEventRequest,Empty> getDeleteEventMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteEventRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.DeleteEventRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteInputMethod()

```
public static MethodDescriptor<DeleteInputRequest,Operation> getDeleteInputMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteInputRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.DeleteInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetAssetMethod()

```
public static MethodDescriptor<GetAssetRequest,Asset> getGetAssetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetAssetRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.GetAssetRequest),[Asset](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Asset)>`

### getGetChannelMethod()

```
public static MethodDescriptor<GetChannelRequest,Channel> getGetChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.GetChannelRequest),[Channel](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Channel)>`

### getGetEventMethod()

```
public static MethodDescriptor<GetEventRequest,Event> getGetEventMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetEventRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.GetEventRequest),[Event](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Event)>`

### getGetInputMethod()

```
public static MethodDescriptor<GetInputRequest,Input> getGetInputMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetInputRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.GetInputRequest),[Input](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Input)>`

### getGetPoolMethod()

```
public static MethodDescriptor<GetPoolRequest,Pool> getGetPoolMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetPoolRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.GetPoolRequest),[Pool](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.Pool)>`

### getListAssetsMethod()

```
public static MethodDescriptor<ListAssetsRequest,ListAssetsResponse> getListAssetsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListAssetsRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListAssetsRequest),[ListAssetsResponse](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListAssetsResponse)>`

### getListChannelsMethod()

```
public static MethodDescriptor<ListChannelsRequest,ListChannelsResponse> getListChannelsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListChannelsRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListChannelsRequest),[ListChannelsResponse](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListChannelsResponse)>`

### getListEventsMethod()

```
public static MethodDescriptor<ListEventsRequest,ListEventsResponse> getListEventsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListEventsRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListEventsRequest),[ListEventsResponse](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListEventsResponse)>`

### getListInputsMethod()

```
public static MethodDescriptor<ListInputsRequest,ListInputsResponse> getListInputsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListInputsRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListInputsRequest),[ListInputsResponse](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.ListInputsResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getStartChannelMethod()

```
public static MethodDescriptor<StartChannelRequest,Operation> getStartChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StartChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.StartChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getStopChannelMethod()

```
public static MethodDescriptor<StopChannelRequest,Operation> getStopChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StopChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.StopChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateChannelMethod()

```
public static MethodDescriptor<UpdateChannelRequest,Operation> getUpdateChannelMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.UpdateChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateInputMethod()

```
public static MethodDescriptor<UpdateInputRequest,Operation> getUpdateInputMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateInputRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.UpdateInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdatePoolMethod()

```
public static MethodDescriptor<UpdatePoolRequest,Operation> getUpdatePoolMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdatePoolRequest](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.UpdatePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static LivestreamServiceGrpc.LivestreamServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LivestreamServiceGrpc.LivestreamServiceBlockingStub](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.LivestreamServiceGrpc.LivestreamServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static LivestreamServiceGrpc.LivestreamServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LivestreamServiceGrpc.LivestreamServiceFutureStub](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.LivestreamServiceGrpc.LivestreamServiceFutureStub)`

### newStub(Channel channel)

```
public static LivestreamServiceGrpc.LivestreamServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LivestreamServiceGrpc.LivestreamServiceStub](/java/docs/reference/google-cloud-live-stream/0.30.0/com.google.cloud.video.livestream.v1.LivestreamServiceGrpc.LivestreamServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
