-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonStreamingVideoIntelligenceServiceStub (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public class HttpJsonStreamingVideoIntelligenceServiceStub extends StreamingVideoIntelligenceServiceStub
```

REST stub implementation for the StreamingVideoIntelligenceService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub) \> HttpJsonStreamingVideoIntelligenceServiceStub

## Inherited Members

[StreamingVideoIntelligenceServiceStub.close()](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub#com_google_cloud_videointelligence_v1p3beta1_stub_StreamingVideoIntelligenceServiceStub_close__)

[StreamingVideoIntelligenceServiceStub.streamingAnnotateVideoCallable()](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub#com_google_cloud_videointelligence_v1p3beta1_stub_StreamingVideoIntelligenceServiceStub_streamingAnnotateVideoCallable__)

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

### create(ClientContext clientContext)

```
public static final HttpJsonStreamingVideoIntelligenceServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[HttpJsonStreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.HttpJsonStreamingVideoIntelligenceServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonStreamingVideoIntelligenceServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

callableFactory

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

[HttpJsonStreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.HttpJsonStreamingVideoIntelligenceServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(StreamingVideoIntelligenceServiceStubSettings settings)

```
public static final HttpJsonStreamingVideoIntelligenceServiceStub create(StreamingVideoIntelligenceServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

settings

`[StreamingVideoIntelligenceServiceStubSettings](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStubSettings)`  

**Returns**

**Type**

**Description**

[HttpJsonStreamingVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.HttpJsonStreamingVideoIntelligenceServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)\>

## Constructors

### HttpJsonStreamingVideoIntelligenceServiceStub(StreamingVideoIntelligenceServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonStreamingVideoIntelligenceServiceStub(StreamingVideoIntelligenceServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonStreamingVideoIntelligenceServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

settings

`[StreamingVideoIntelligenceServiceStubSettings](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStubSettings)`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonStreamingVideoIntelligenceServiceStub(StreamingVideoIntelligenceServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonStreamingVideoIntelligenceServiceStub(StreamingVideoIntelligenceServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonStreamingVideoIntelligenceServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

settings

`[StreamingVideoIntelligenceServiceStubSettings](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStubSettings)`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

callableFactory

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

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

**Overrides**

[StreamingVideoIntelligenceServiceStub.close()](/java/docs/reference/google-cloud-video-intelligence/2.3.0/com.google.cloud.videointelligence.v1p3beta1.stub.StreamingVideoIntelligenceServiceStub#com_google_cloud_videointelligence_v1p3beta1_stub_StreamingVideoIntelligenceServiceStub_close__)

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

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
