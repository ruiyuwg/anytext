-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class JobServiceGrpc (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public final class JobServiceGrpc
```

A service handles job management, including job CRUD, enumeration and search.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> JobServiceGrpc

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

### bindService(JobServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(JobServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[JobServiceGrpc.AsyncService](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.JobServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getBatchCreateJobsMethod()

```
public static MethodDescriptor<BatchCreateJobsRequest,Operation> getBatchCreateJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BatchCreateJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.BatchCreateJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getBatchDeleteJobsMethod()

```
public static MethodDescriptor<BatchDeleteJobsRequest,Operation> getBatchDeleteJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BatchDeleteJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.BatchDeleteJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getBatchUpdateJobsMethod()

```
public static MethodDescriptor<BatchUpdateJobsRequest,Operation> getBatchUpdateJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateJobMethod()

```
public static MethodDescriptor<CreateJobRequest,Job> getCreateJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateJobRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.CreateJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.Job)>`

### getDeleteJobMethod()

```
public static MethodDescriptor<DeleteJobRequest,Empty> getDeleteJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteJobRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.DeleteJobRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetJobMethod()

```
public static MethodDescriptor<GetJobRequest,Job> getGetJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetJobRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.GetJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.Job)>`

### getListJobsMethod()

```
public static MethodDescriptor<ListJobsRequest,ListJobsResponse> getListJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.ListJobsRequest),[ListJobsResponse](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.ListJobsResponse)>`

### getSearchJobsForAlertMethod()

```
public static MethodDescriptor<SearchJobsRequest,SearchJobsResponse> getSearchJobsForAlertMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.SearchJobsRequest),[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.SearchJobsResponse)>`

### getSearchJobsMethod()

```
public static MethodDescriptor<SearchJobsRequest,SearchJobsResponse> getSearchJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.SearchJobsRequest),[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.SearchJobsResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateJobMethod()

```
public static MethodDescriptor<UpdateJobRequest,Job> getUpdateJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateJobRequest](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.UpdateJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.Job)>`

### newBlockingStub(Channel channel)

```
public static JobServiceGrpc.JobServiceBlockingStub newBlockingStub(Channel channel)
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

`[JobServiceGrpc.JobServiceBlockingStub](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.JobServiceGrpc.JobServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static JobServiceGrpc.JobServiceFutureStub newFutureStub(Channel channel)
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

`[JobServiceGrpc.JobServiceFutureStub](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.JobServiceGrpc.JobServiceFutureStub)`

### newStub(Channel channel)

```
public static JobServiceGrpc.JobServiceStub newStub(Channel channel)
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

`[JobServiceGrpc.JobServiceStub](/java/docs/reference/google-cloud-talent/2.17.0/com.google.cloud.talent.v4.JobServiceGrpc.JobServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
