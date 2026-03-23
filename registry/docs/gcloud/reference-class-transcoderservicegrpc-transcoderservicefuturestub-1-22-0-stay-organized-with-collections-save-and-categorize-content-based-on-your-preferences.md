-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TranscoderServiceGrpc.TranscoderServiceFutureStub (1.22.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.5 1.0.4 0.4.3

```
public static final class TranscoderServiceGrpc.TranscoderServiceFutureStub extends AbstractFutureStub<TranscoderServiceGrpc.TranscoderServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service TranscoderService.

Using the Transcoder API, you can queue asynchronous jobs for transcoding media into various output formats. Output formats may include different streaming standards such as HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH). You can also customize jobs using advanced features such as Digital Rights Management (DRM), audio equalization, content concatenation, and digital ad-stitch ready content generation.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> TranscoderServiceGrpc.TranscoderServiceFutureStub

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
protected TranscoderServiceGrpc.TranscoderServiceFutureStub build(Channel channel, CallOptions callOptions)
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

`[TranscoderServiceGrpc.TranscoderServiceFutureStub](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.TranscoderServiceGrpc.TranscoderServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createJob(CreateJobRequest request)

```
public ListenableFuture<Job> createJob(CreateJobRequest request)
```

Creates a job in the specified region.

**Parameter**

**Name**

**Description**

`request`

`[CreateJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.CreateJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.Job)>`

### createJobTemplate(CreateJobTemplateRequest request)

```
public ListenableFuture<JobTemplate> createJobTemplate(CreateJobTemplateRequest request)
```

Creates a job template in the specified region.

**Parameter**

**Name**

**Description**

`request`

`[CreateJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.CreateJobTemplateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[JobTemplate](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.JobTemplate)>`

### deleteJob(DeleteJobRequest request)

```
public ListenableFuture<Empty> deleteJob(DeleteJobRequest request)
```

Deletes a job.

**Parameter**

**Name**

**Description**

`request`

`[DeleteJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.DeleteJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteJobTemplate(DeleteJobTemplateRequest request)

```
public ListenableFuture<Empty> deleteJobTemplate(DeleteJobTemplateRequest request)
```

Deletes a job template.

**Parameter**

**Name**

**Description**

`request`

`[DeleteJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.DeleteJobTemplateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getJob(GetJobRequest request)

```
public ListenableFuture<Job> getJob(GetJobRequest request)
```

Returns the job data.

**Parameter**

**Name**

**Description**

`request`

`[GetJobRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.GetJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.Job)>`

### getJobTemplate(GetJobTemplateRequest request)

```
public ListenableFuture<JobTemplate> getJobTemplate(GetJobTemplateRequest request)
```

Returns the job template data.

**Parameter**

**Name**

**Description**

`request`

`[GetJobTemplateRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.GetJobTemplateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[JobTemplate](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.JobTemplate)>`

### listJobTemplates(ListJobTemplatesRequest request)

```
public ListenableFuture<ListJobTemplatesResponse> listJobTemplates(ListJobTemplatesRequest request)
```

Lists job templates in the specified region.

**Parameter**

**Name**

**Description**

`request`

`[ListJobTemplatesRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.ListJobTemplatesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListJobTemplatesResponse](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.ListJobTemplatesResponse)>`

### listJobs(ListJobsRequest request)

```
public ListenableFuture<ListJobsResponse> listJobs(ListJobsRequest request)
```

Lists jobs in the specified region.

**Parameter**

**Name**

**Description**

`request`

`[ListJobsRequest](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.ListJobsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListJobsResponse](/java/docs/reference/google-cloud-video-transcoder/1.22.0/com.google.cloud.video.transcoder.v1.ListJobsResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
