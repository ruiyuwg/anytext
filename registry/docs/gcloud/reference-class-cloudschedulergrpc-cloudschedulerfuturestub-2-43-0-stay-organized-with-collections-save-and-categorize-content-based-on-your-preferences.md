-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudSchedulerGrpc.CloudSchedulerFutureStub (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.13 2.2.0 2.1.23

```
public static final class CloudSchedulerGrpc.CloudSchedulerFutureStub extends AbstractFutureStub<CloudSchedulerGrpc.CloudSchedulerFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service CloudScheduler.

The Cloud Scheduler API allows external entities to reliably schedule asynchronous jobs.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> CloudSchedulerGrpc.CloudSchedulerFutureStub

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
protected CloudSchedulerGrpc.CloudSchedulerFutureStub build(Channel channel, CallOptions callOptions)
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

`[CloudSchedulerGrpc.CloudSchedulerFutureStub](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.CloudSchedulerGrpc.CloudSchedulerFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createJob(CreateJobRequest request)

```
public ListenableFuture<Job> createJob(CreateJobRequest request)
```

Creates a job.

**Parameter**

**Name**

**Description**

`request`

`[CreateJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.CreateJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

### deleteJob(DeleteJobRequest request)

```
public ListenableFuture<Empty> deleteJob(DeleteJobRequest request)
```

Deletes a job.

**Parameter**

**Name**

**Description**

`request`

`[DeleteJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.DeleteJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getJob(GetJobRequest request)

```
public ListenableFuture<Job> getJob(GetJobRequest request)
```

Gets a job.

**Parameter**

**Name**

**Description**

`request`

`[GetJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.GetJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

### listJobs(ListJobsRequest request)

```
public ListenableFuture<ListJobsResponse> listJobs(ListJobsRequest request)
```

Lists jobs.

**Parameter**

**Name**

**Description**

`request`

`[ListJobsRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.ListJobsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListJobsResponse](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.ListJobsResponse)>`

### pauseJob(PauseJobRequest request)

```
public ListenableFuture<Job> pauseJob(PauseJobRequest request)
```

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

**Parameter**

**Name**

**Description**

`request`

`[PauseJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.PauseJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

### resumeJob(ResumeJobRequest request)

```
public ListenableFuture<Job> resumeJob(ResumeJobRequest request)
```

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

**Parameter**

**Name**

**Description**

`request`

`[ResumeJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.ResumeJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

### runJob(RunJobRequest request)

```
public ListenableFuture<Job> runJob(RunJobRequest request)
```

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

**Parameter**

**Name**

**Description**

`request`

`[RunJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.RunJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

### updateJob(UpdateJobRequest request)

```
public ListenableFuture<Job> updateJob(UpdateJobRequest request)
```

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE\_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

**Parameter**

**Name**

**Description**

`request`

`[UpdateJobRequest](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.UpdateJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Job](/java/docs/reference/google-cloud-scheduler/2.43.0/com.google.cloud.scheduler.v1beta1.Job)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
