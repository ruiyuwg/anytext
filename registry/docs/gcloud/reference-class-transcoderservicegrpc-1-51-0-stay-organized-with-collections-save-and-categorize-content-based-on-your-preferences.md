-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TranscoderServiceGrpc (1.51.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.5 1.0.4 0.4.3

```
public final class TranscoderServiceGrpc
```

Using the Transcoder API, you can queue asynchronous jobs for transcoding media into various output formats. Output formats may include different streaming standards such as HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH). You can also customize jobs using advanced features such as Digital Rights Management (DRM), audio equalization, content concatenation, and digital ad-stitch ready content generation.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TranscoderServiceGrpc

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

### bindService(TranscoderServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(TranscoderServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[TranscoderServiceGrpc.AsyncService](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.TranscoderServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getCreateJobMethod()

```
public static MethodDescriptor<CreateJobRequest,Job> getCreateJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.CreateJobRequest),[Job](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.Job)>`

### getCreateJobTemplateMethod()

```
public static MethodDescriptor<CreateJobTemplateRequest,JobTemplate> getCreateJobTemplateMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.CreateJobTemplateRequest),[JobTemplate](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.JobTemplate)>`

### getDeleteJobMethod()

```
public static MethodDescriptor<DeleteJobRequest,Empty> getDeleteJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.DeleteJobRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteJobTemplateMethod()

```
public static MethodDescriptor<DeleteJobTemplateRequest,Empty> getDeleteJobTemplateMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.DeleteJobTemplateRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetJobMethod()

```
public static MethodDescriptor<GetJobRequest,Job> getGetJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.GetJobRequest),[Job](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.Job)>`

### getGetJobTemplateMethod()

```
public static MethodDescriptor<GetJobTemplateRequest,JobTemplate> getGetJobTemplateMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.GetJobTemplateRequest),[JobTemplate](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.JobTemplate)>`

### getListJobTemplatesMethod()

```
public static MethodDescriptor<ListJobTemplatesRequest,ListJobTemplatesResponse> getListJobTemplatesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListJobTemplatesRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.ListJobTemplatesRequest),[ListJobTemplatesResponse](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.ListJobTemplatesResponse)>`

### getListJobsMethod()

```
public static MethodDescriptor<ListJobsRequest,ListJobsResponse> getListJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListJobsRequest](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.ListJobsRequest),[ListJobsResponse](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.ListJobsResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### newBlockingStub(Channel channel)

```
public static TranscoderServiceGrpc.TranscoderServiceBlockingStub newBlockingStub(Channel channel)
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

`[TranscoderServiceGrpc.TranscoderServiceBlockingStub](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.TranscoderServiceGrpc.TranscoderServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static TranscoderServiceGrpc.TranscoderServiceFutureStub newFutureStub(Channel channel)
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

`[TranscoderServiceGrpc.TranscoderServiceFutureStub](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.TranscoderServiceGrpc.TranscoderServiceFutureStub)`

### newStub(Channel channel)

```
public static TranscoderServiceGrpc.TranscoderServiceStub newStub(Channel channel)
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

`[TranscoderServiceGrpc.TranscoderServiceStub](/java/docs/reference/google-cloud-video-transcoder/1.51.0/com.google.cloud.video.transcoder.v1.TranscoderServiceGrpc.TranscoderServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
