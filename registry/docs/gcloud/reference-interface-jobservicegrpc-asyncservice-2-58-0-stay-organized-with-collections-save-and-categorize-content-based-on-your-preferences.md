-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface JobServiceGrpc.AsyncService (2.58.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public static interface JobServiceGrpc.AsyncService
```

A service handles job management, including job CRUD, enumeration and search.

## Methods

### batchCreateJobs(BatchCreateJobsRequest request, StreamObserver<Operation> responseObserver)

```
public default void batchCreateJobs(BatchCreateJobsRequest request, StreamObserver<Operation> responseObserver)
```

Begins executing a batch create jobs operation.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.BatchCreateJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### batchDeleteJobs(BatchDeleteJobsRequest request, StreamObserver<Operation> responseObserver)

```
public default void batchDeleteJobs(BatchDeleteJobsRequest request, StreamObserver<Operation> responseObserver)
```

Begins executing a batch delete jobs operation.

**Parameters**

**Name**

**Description**

`request`

`[BatchDeleteJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.BatchDeleteJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### batchUpdateJobs(BatchUpdateJobsRequest request, StreamObserver<Operation> responseObserver)

```
public default void batchUpdateJobs(BatchUpdateJobsRequest request, StreamObserver<Operation> responseObserver)
```

Begins executing a batch update jobs operation.

**Parameters**

**Name**

**Description**

`request`

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createJob(CreateJobRequest request, StreamObserver<Job> responseObserver)

```
public default void createJob(CreateJobRequest request, StreamObserver<Job> responseObserver)
```

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

**Parameters**

**Name**

**Description**

`request`

`[CreateJobRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.CreateJobRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Job](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.Job)>`  

### deleteJob(DeleteJobRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteJob(DeleteJobRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

**Parameters**

**Name**

**Description**

`request`

`[DeleteJobRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.DeleteJobRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getJob(GetJobRequest request, StreamObserver<Job> responseObserver)

```
public default void getJob(GetJobRequest request, StreamObserver<Job> responseObserver)
```

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

**Parameters**

**Name**

**Description**

`request`

`[GetJobRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.GetJobRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Job](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.Job)>`  

### listJobs(ListJobsRequest request, StreamObserver<ListJobsResponse> responseObserver)

```
public default void listJobs(ListJobsRequest request, StreamObserver<ListJobsResponse> responseObserver)
```

Lists jobs by filter.

**Parameters**

**Name**

**Description**

`request`

`[ListJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.ListJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListJobsResponse](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.ListJobsResponse)>`  

### searchJobs(SearchJobsRequest request, StreamObserver<SearchJobsResponse> responseObserver)

```
public default void searchJobs(SearchJobsRequest request, StreamObserver<SearchJobsResponse> responseObserver)
```

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

**Parameters**

**Name**

**Description**

`request`

`[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.SearchJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.SearchJobsResponse)>`  

### searchJobsForAlert(SearchJobsRequest request, StreamObserver<SearchJobsResponse> responseObserver)

```
public default void searchJobsForAlert(SearchJobsRequest request, StreamObserver<SearchJobsResponse> responseObserver)
```

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

**Parameters**

**Name**

**Description**

`request`

`[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.SearchJobsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.SearchJobsResponse)>`  

### updateJob(UpdateJobRequest request, StreamObserver<Job> responseObserver)

```
public default void updateJob(UpdateJobRequest request, StreamObserver<Job> responseObserver)
```

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

**Parameters**

**Name**

**Description**

`request`

`[UpdateJobRequest](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.UpdateJobRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Job](/java/docs/reference/google-cloud-talent/2.58.0/com.google.cloud.talent.v4.Job)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
