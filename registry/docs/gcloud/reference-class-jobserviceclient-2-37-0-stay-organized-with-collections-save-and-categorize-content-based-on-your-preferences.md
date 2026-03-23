-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class JobServiceClient (2.37.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-talent/google-cloud-talent/src/main/java/com/google/cloud/talent/v4/JobServiceClient.java)

[Product Reference](https://cloud.google.com/solutions/talent-solution/)

Service Description: A service handles job management, including job CRUD, enumeration and search.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   Job job = Job.newBuilder().build();
   Job response = jobServiceClient.createJob(parent, job);
 }
 
```
 

Note: close() needs to be called on the JobServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

CreateJob

Creates a new job.

Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createJob(CreateJobRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   createJob(TenantName parent, Job job)
    
-   createJob(String parent, Job job)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createJobCallable()
    

BatchCreateJobs

Begins executing a batch create jobs operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchCreateJobsAsync(BatchCreateJobsRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchCreateJobsAsync(TenantName parent, List<Job> jobs)
    
-   batchCreateJobsAsync(String parent, List<Job> jobs)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchCreateJobsOperationCallable()
    
-   batchCreateJobsCallable()
    

GetJob

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getJob(GetJobRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getJob(JobName name)
    
-   getJob(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getJobCallable()
    

UpdateJob

Updates specified job.

Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateJob(UpdateJobRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updateJob(Job job, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateJobCallable()
    

BatchUpdateJobs

Begins executing a batch update jobs operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchUpdateJobsAsync(BatchUpdateJobsRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchUpdateJobsAsync(TenantName parent, List<Job> jobs)
    
-   batchUpdateJobsAsync(String parent, List<Job> jobs)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchUpdateJobsOperationCallable()
    
-   batchUpdateJobsCallable()
    

DeleteJob

Deletes the specified job.

Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteJob(DeleteJobRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deleteJob(JobName name)
    
-   deleteJob(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteJobCallable()
    

BatchDeleteJobs

Begins executing a batch delete jobs operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchDeleteJobsAsync(BatchDeleteJobsRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchDeleteJobsAsync(TenantName parent, List<String> names)
    
-   batchDeleteJobsAsync(String parent, List<String> names)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchDeleteJobsOperationCallable()
    
-   batchDeleteJobsCallable()
    

ListJobs

Lists jobs by filter.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listJobs(ListJobsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listJobs(TenantName parent, String filter)
    
-   listJobs(String parent, String filter)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listJobsPagedCallable()
    
-   listJobsCallable()
    

SearchJobs

Searches for jobs using the provided SearchJobsRequest.

This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   searchJobs(SearchJobsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   searchJobsCallable()
    

SearchJobsForAlert

Searches for jobs using the provided SearchJobsRequest.

This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers.

This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   searchJobsForAlert(SearchJobsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   searchJobsForAlertCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of JobServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 JobServiceSettings jobServiceSettings =
     JobServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 JobServiceClient jobServiceClient = JobServiceClient.create(jobServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 JobServiceSettings jobServiceSettings =
     JobServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 JobServiceClient jobServiceClient = JobServiceClient.create(jobServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 JobServiceSettings jobServiceSettings = JobServiceSettings.newHttpJsonBuilder().build();
 JobServiceClient jobServiceClient = JobServiceClient.create(jobServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> JobServiceClient

## Static Methods

### create()

```
public static final JobServiceClient create()
```

Constructs an instance of JobServiceClient with default settings.

**Returns**

**Type**

**Description**

`[JobServiceClient](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(JobServiceSettings settings)

```
public static final JobServiceClient create(JobServiceSettings settings)
```

Constructs an instance of JobServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[JobServiceSettings](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceSettings)`  

**Returns**

**Type**

**Description**

`[JobServiceClient](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(JobServiceStub stub)

```
public static final JobServiceClient create(JobServiceStub stub)
```

Constructs an instance of JobServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(JobServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[JobServiceStub](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.stub.JobServiceStub)`  

**Returns**

**Type**

**Description**

`[JobServiceClient](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient)`

## Constructors

### JobServiceClient(JobServiceSettings settings)

```
protected JobServiceClient(JobServiceSettings settings)
```

Constructs an instance of JobServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[JobServiceSettings](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceSettings)`  

### JobServiceClient(JobServiceStub stub)

```
protected JobServiceClient(JobServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[JobServiceStub](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.stub.JobServiceStub)`  

## Methods

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

### batchCreateJobsAsync(BatchCreateJobsRequest request)

```
public final OperationFuture<BatchCreateJobsResponse,BatchOperationMetadata> batchCreateJobsAsync(BatchCreateJobsRequest request)
```

Begins executing a batch create jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchCreateJobsRequest request =
       BatchCreateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .build();
   BatchCreateJobsResponse response = jobServiceClient.batchCreateJobsAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchCreateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchCreateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchCreateJobsAsync(TenantName parent, List<Job> jobs)

```
public final OperationFuture<BatchCreateJobsResponse,BatchOperationMetadata> batchCreateJobsAsync(TenantName parent, List<Job> jobs)
```

Begins executing a batch create jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   List<Job> jobs = new ArrayList<>();
   BatchCreateJobsResponse response = jobServiceClient.batchCreateJobsAsync(parent, jobs).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[TenantName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`jobs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`  

Required. The jobs to be created. A maximum of 200 jobs can be created in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchCreateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchCreateJobsAsync(String parent, List<Job> jobs)

```
public final OperationFuture<BatchCreateJobsResponse,BatchOperationMetadata> batchCreateJobsAsync(String parent, List<Job> jobs)
```

Begins executing a batch create jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String parent = TenantName.of("[PROJECT]", "[TENANT]").toString();
   List<Job> jobs = new ArrayList<>();
   BatchCreateJobsResponse response = jobServiceClient.batchCreateJobsAsync(parent, jobs).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`jobs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`  

Required. The jobs to be created. A maximum of 200 jobs can be created in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchCreateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchCreateJobsCallable()

```
public final UnaryCallable<BatchCreateJobsRequest,Operation> batchCreateJobsCallable()
```

Begins executing a batch create jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchCreateJobsRequest request =
       BatchCreateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .build();
   ApiFuture<Operation> future = jobServiceClient.batchCreateJobsCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchCreateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchCreateJobsOperationCallable()

```
public final OperationCallable<BatchCreateJobsRequest,BatchCreateJobsResponse,BatchOperationMetadata> batchCreateJobsOperationCallable()
```

Begins executing a batch create jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchCreateJobsRequest request =
       BatchCreateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .build();
   OperationFuture<BatchCreateJobsResponse, BatchOperationMetadata> future =
       jobServiceClient.batchCreateJobsOperationCallable().futureCall(request);
   // Do something.
   BatchCreateJobsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchCreateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsRequest),[BatchCreateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchCreateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchDeleteJobsAsync(BatchDeleteJobsRequest request)

```
public final OperationFuture<BatchDeleteJobsResponse,BatchOperationMetadata> batchDeleteJobsAsync(BatchDeleteJobsRequest request)
```

Begins executing a batch delete jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchDeleteJobsRequest request =
       BatchDeleteJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllNames(new ArrayList<String>())
           .build();
   BatchDeleteJobsResponse response = jobServiceClient.batchDeleteJobsAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchDeleteJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchDeleteJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchDeleteJobsAsync(TenantName parent, List<String> names)

```
public final OperationFuture<BatchDeleteJobsResponse,BatchOperationMetadata> batchDeleteJobsAsync(TenantName parent, List<String> names)
```

Begins executing a batch delete jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   List<String> names = new ArrayList<>();
   BatchDeleteJobsResponse response = jobServiceClient.batchDeleteJobsAsync(parent, names).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[TenantName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

The parent of all of the jobs specified in `names` must match this field.

`names`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The names of the jobs to delete.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

A maximum of 200 jobs can be deleted in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchDeleteJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchDeleteJobsAsync(String parent, List<String> names)

```
public final OperationFuture<BatchDeleteJobsResponse,BatchOperationMetadata> batchDeleteJobsAsync(String parent, List<String> names)
```

Begins executing a batch delete jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String parent = TenantName.of("[PROJECT]", "[TENANT]").toString();
   List<String> names = new ArrayList<>();
   BatchDeleteJobsResponse response = jobServiceClient.batchDeleteJobsAsync(parent, names).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

The parent of all of the jobs specified in `names` must match this field.

`names`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The names of the jobs to delete.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

A maximum of 200 jobs can be deleted in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchDeleteJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchDeleteJobsCallable()

```
public final UnaryCallable<BatchDeleteJobsRequest,Operation> batchDeleteJobsCallable()
```

Begins executing a batch delete jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchDeleteJobsRequest request =
       BatchDeleteJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllNames(new ArrayList<String>())
           .build();
   ApiFuture<Operation> future = jobServiceClient.batchDeleteJobsCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchDeleteJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchDeleteJobsOperationCallable()

```
public final OperationCallable<BatchDeleteJobsRequest,BatchDeleteJobsResponse,BatchOperationMetadata> batchDeleteJobsOperationCallable()
```

Begins executing a batch delete jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchDeleteJobsRequest request =
       BatchDeleteJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllNames(new ArrayList<String>())
           .build();
   OperationFuture<BatchDeleteJobsResponse, BatchOperationMetadata> future =
       jobServiceClient.batchDeleteJobsOperationCallable().futureCall(request);
   // Do something.
   BatchDeleteJobsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchDeleteJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsRequest),[BatchDeleteJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchDeleteJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchUpdateJobsAsync(BatchUpdateJobsRequest request)

```
public final OperationFuture<BatchUpdateJobsResponse,BatchOperationMetadata> batchUpdateJobsAsync(BatchUpdateJobsRequest request)
```

Begins executing a batch update jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchUpdateJobsRequest request =
       BatchUpdateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   BatchUpdateJobsResponse response = jobServiceClient.batchUpdateJobsAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchUpdateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchUpdateJobsAsync(TenantName parent, List<Job> jobs)

```
public final OperationFuture<BatchUpdateJobsResponse,BatchOperationMetadata> batchUpdateJobsAsync(TenantName parent, List<Job> jobs)
```

Begins executing a batch update jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   List<Job> jobs = new ArrayList<>();
   BatchUpdateJobsResponse response = jobServiceClient.batchUpdateJobsAsync(parent, jobs).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[TenantName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`jobs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`  

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchUpdateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchUpdateJobsAsync(String parent, List<Job> jobs)

```
public final OperationFuture<BatchUpdateJobsResponse,BatchOperationMetadata> batchUpdateJobsAsync(String parent, List<Job> jobs)
```

Begins executing a batch update jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String parent = TenantName.of("[PROJECT]", "[TENANT]").toString();
   List<Job> jobs = new ArrayList<>();
   BatchUpdateJobsResponse response = jobServiceClient.batchUpdateJobsAsync(parent, jobs).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`jobs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`  

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchUpdateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### batchUpdateJobsCallable()

```
public final UnaryCallable<BatchUpdateJobsRequest,Operation> batchUpdateJobsCallable()
```

Begins executing a batch update jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchUpdateJobsRequest request =
       BatchUpdateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Operation> future = jobServiceClient.batchUpdateJobsCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchUpdateJobsOperationCallable()

```
public final OperationCallable<BatchUpdateJobsRequest,BatchUpdateJobsResponse,BatchOperationMetadata> batchUpdateJobsOperationCallable()
```

Begins executing a batch update jobs operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   BatchUpdateJobsRequest request =
       BatchUpdateJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .addAllJobs(new ArrayList<Job>())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   OperationFuture<BatchUpdateJobsResponse, BatchOperationMetadata> future =
       jobServiceClient.batchUpdateJobsOperationCallable().futureCall(request);
   // Do something.
   BatchUpdateJobsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest),[BatchUpdateJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchUpdateJobsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.BatchOperationMetadata)>`

### close()

```
public final void close()
```

### createJob(CreateJobRequest request)

```
public final Job createJob(CreateJobRequest request)
```

Creates a new job.

Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   CreateJobRequest request =
       CreateJobRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setJob(Job.newBuilder().build())
           .build();
   Job response = jobServiceClient.createJob(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.CreateJobRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### createJob(TenantName parent, Job job)

```
public final Job createJob(TenantName parent, Job job)
```

Creates a new job.

Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   Job job = Job.newBuilder().build();
   Job response = jobServiceClient.createJob(parent, job);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[TenantName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`job`

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`  

Required. The Job to be created.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### createJob(String parent, Job job)

```
public final Job createJob(String parent, Job job)
```

Creates a new job.

Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String parent = TenantName.of("[PROJECT]", "[TENANT]").toString();
   Job job = Job.newBuilder().build();
   Job response = jobServiceClient.createJob(parent, job);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`job`

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`  

Required. The Job to be created.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### createJobCallable()

```
public final UnaryCallable<CreateJobRequest,Job> createJobCallable()
```

Creates a new job.

Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   CreateJobRequest request =
       CreateJobRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setJob(Job.newBuilder().build())
           .build();
   ApiFuture<Job> future = jobServiceClient.createJobCallable().futureCall(request);
   // Do something.
   Job response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.CreateJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`

### deleteJob(DeleteJobRequest request)

```
public final void deleteJob(DeleteJobRequest request)
```

Deletes the specified job.

Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   DeleteJobRequest request =
       DeleteJobRequest.newBuilder()
           .setName(JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString())
           .build();
   jobServiceClient.deleteJob(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.DeleteJobRequest)`  

The request object containing all of the parameters for the API call.

### deleteJob(JobName name)

```
public final void deleteJob(JobName name)
```

Deletes the specified job.

Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   JobName name = JobName.of("[PROJECT]", "[TENANT]", "[JOB]");
   jobServiceClient.deleteJob(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[JobName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobName)`  

Required. The resource name of the job to be deleted.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

### deleteJob(String name)

```
public final void deleteJob(String name)
```

Deletes the specified job.

Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String name = JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString();
   jobServiceClient.deleteJob(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the job to be deleted.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

### deleteJobCallable()

```
public final UnaryCallable<DeleteJobRequest,Empty> deleteJobCallable()
```

Deletes the specified job.

Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   DeleteJobRequest request =
       DeleteJobRequest.newBuilder()
           .setName(JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString())
           .build();
   ApiFuture<Empty> future = jobServiceClient.deleteJobCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.DeleteJobRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)`

### getJob(GetJobRequest request)

```
public final Job getJob(GetJobRequest request)
```

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   GetJobRequest request =
       GetJobRequest.newBuilder()
           .setName(JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString())
           .build();
   Job response = jobServiceClient.getJob(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.GetJobRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### getJob(JobName name)

```
public final Job getJob(JobName name)
```

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   JobName name = JobName.of("[PROJECT]", "[TENANT]", "[JOB]");
   Job response = jobServiceClient.getJob(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[JobName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobName)`  

Required. The resource name of the job to retrieve.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### getJob(String name)

```
public final Job getJob(String name)
```

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String name = JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString();
   Job response = jobServiceClient.getJob(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the job to retrieve.

The format is "projects/{project\_id}/tenants/{tenant\_id}/jobs/{job\_id}". For example, "projects/foo/tenants/bar/jobs/baz".

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### getJobCallable()

```
public final UnaryCallable<GetJobRequest,Job> getJobCallable()
```

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   GetJobRequest request =
       GetJobRequest.newBuilder()
           .setName(JobName.of("[PROJECT]", "[TENANT]", "[JOB]").toString())
           .build();
   ApiFuture<Job> future = jobServiceClient.getJobCallable().futureCall(request);
   // Do something.
   Job response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.GetJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)`

### getSettings()

```
public final JobServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[JobServiceSettings](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceSettings)`

### getStub()

```
public JobServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[JobServiceStub](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.stub.JobServiceStub)`

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

### listJobs(ListJobsRequest request)

```
public final JobServiceClient.ListJobsPagedResponse listJobs(ListJobsRequest request)
```

Lists jobs by filter.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   ListJobsRequest request =
       ListJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .setJobView(JobView.forNumber(0))
           .build();
   for (Job element : jobServiceClient.listJobs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.ListJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[JobServiceClient.ListJobsPagedResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient.ListJobsPagedResponse)`

### listJobs(TenantName parent, String filter)

```
public final JobServiceClient.ListJobsPagedResponse listJobs(TenantName parent, String filter)
```

Lists jobs by filter.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   TenantName parent = TenantName.of("[PROJECT]", "[TENANT]");
   String filter = "filter-1274492040";
   for (Job element : jobServiceClient.listJobs(parent, filter).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[TenantName](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`filter`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The filter string specifies the jobs to be enumerated.

Supported operator: =, AND

The fields eligible for filtering are:

-   `companyName`
-   `requisitionId`
-   `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified.

At least one of `companyName` and `requisitionId` must present or an INVALID\_ARGUMENT error is thrown.

Sample Query:

-   companyName = "projects/foo/tenants/bar/companies/baz"
-   companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1"
-   companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED"
-   requisitionId = "req-1"
-   requisitionId = "req-1" AND status = "EXPIRED"

**Returns**

**Type**

**Description**

`[JobServiceClient.ListJobsPagedResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient.ListJobsPagedResponse)`

### listJobs(String parent, String filter)

```
public final JobServiceClient.ListJobsPagedResponse listJobs(String parent, String filter)
```

Lists jobs by filter.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   String parent = TenantName.of("[PROJECT]", "[TENANT]").toString();
   String filter = "filter-1274492040";
   for (Job element : jobServiceClient.listJobs(parent, filter).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`filter`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The filter string specifies the jobs to be enumerated.

Supported operator: =, AND

The fields eligible for filtering are:

-   `companyName`
-   `requisitionId`
-   `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified.

At least one of `companyName` and `requisitionId` must present or an INVALID\_ARGUMENT error is thrown.

Sample Query:

-   companyName = "projects/foo/tenants/bar/companies/baz"
-   companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1"
-   companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED"
-   requisitionId = "req-1"
-   requisitionId = "req-1" AND status = "EXPIRED"

**Returns**

**Type**

**Description**

`[JobServiceClient.ListJobsPagedResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient.ListJobsPagedResponse)`

### listJobsCallable()

```
public final UnaryCallable<ListJobsRequest,ListJobsResponse> listJobsCallable()
```

Lists jobs by filter.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   ListJobsRequest request =
       ListJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .setJobView(JobView.forNumber(0))
           .build();
   while (true) {
     ListJobsResponse response = jobServiceClient.listJobsCallable().call(request);
     for (Job element : response.getJobsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.ListJobsRequest),[ListJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.ListJobsResponse)>`

### listJobsPagedCallable()

```
public final UnaryCallable<ListJobsRequest,JobServiceClient.ListJobsPagedResponse> listJobsPagedCallable()
```

Lists jobs by filter.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   ListJobsRequest request =
       ListJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .setJobView(JobView.forNumber(0))
           .build();
   ApiFuture<Job> future = jobServiceClient.listJobsPagedCallable().futureCall(request);
   // Do something.
   for (Job element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.ListJobsRequest),[ListJobsPagedResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.JobServiceClient.ListJobsPagedResponse)>`

### searchJobs(SearchJobsRequest request)

```
public final SearchJobsResponse searchJobs(SearchJobsRequest request)
```

Searches for jobs using the provided SearchJobsRequest.

This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   SearchJobsRequest request =
       SearchJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setRequestMetadata(RequestMetadata.newBuilder().build())
           .setJobQuery(JobQuery.newBuilder().build())
           .setEnableBroadening(true)
           .addAllHistogramQueries(new ArrayList<HistogramQuery>())
           .setJobView(JobView.forNumber(0))
           .setOffset(-1019779949)
           .setMaxPageSize(524069526)
           .setPageToken("pageToken873572522")
           .setOrderBy("orderBy-1207110587")
           .setCustomRankingInfo(SearchJobsRequest.CustomRankingInfo.newBuilder().build())
           .setDisableKeywordMatch(true)
           .build();
   SearchJobsResponse response = jobServiceClient.searchJobs(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsResponse)`

### searchJobsCallable()

```
public final UnaryCallable<SearchJobsRequest,SearchJobsResponse> searchJobsCallable()
```

Searches for jobs using the provided SearchJobsRequest.

This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   SearchJobsRequest request =
       SearchJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setRequestMetadata(RequestMetadata.newBuilder().build())
           .setJobQuery(JobQuery.newBuilder().build())
           .setEnableBroadening(true)
           .addAllHistogramQueries(new ArrayList<HistogramQuery>())
           .setJobView(JobView.forNumber(0))
           .setOffset(-1019779949)
           .setMaxPageSize(524069526)
           .setPageToken("pageToken873572522")
           .setOrderBy("orderBy-1207110587")
           .setCustomRankingInfo(SearchJobsRequest.CustomRankingInfo.newBuilder().build())
           .setDisableKeywordMatch(true)
           .build();
   ApiFuture<SearchJobsResponse> future =
       jobServiceClient.searchJobsCallable().futureCall(request);
   // Do something.
   SearchJobsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsRequest),[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsResponse)>`

### searchJobsForAlert(SearchJobsRequest request)

```
public final SearchJobsResponse searchJobsForAlert(SearchJobsRequest request)
```

Searches for jobs using the provided SearchJobsRequest.

This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers.

This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   SearchJobsRequest request =
       SearchJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setRequestMetadata(RequestMetadata.newBuilder().build())
           .setJobQuery(JobQuery.newBuilder().build())
           .setEnableBroadening(true)
           .addAllHistogramQueries(new ArrayList<HistogramQuery>())
           .setJobView(JobView.forNumber(0))
           .setOffset(-1019779949)
           .setMaxPageSize(524069526)
           .setPageToken("pageToken873572522")
           .setOrderBy("orderBy-1207110587")
           .setCustomRankingInfo(SearchJobsRequest.CustomRankingInfo.newBuilder().build())
           .setDisableKeywordMatch(true)
           .build();
   SearchJobsResponse response = jobServiceClient.searchJobsForAlert(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsResponse)`

### searchJobsForAlertCallable()

```
public final UnaryCallable<SearchJobsRequest,SearchJobsResponse> searchJobsForAlertCallable()
```

Searches for jobs using the provided SearchJobsRequest.

This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers.

This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   SearchJobsRequest request =
       SearchJobsRequest.newBuilder()
           .setParent(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .setRequestMetadata(RequestMetadata.newBuilder().build())
           .setJobQuery(JobQuery.newBuilder().build())
           .setEnableBroadening(true)
           .addAllHistogramQueries(new ArrayList<HistogramQuery>())
           .setJobView(JobView.forNumber(0))
           .setOffset(-1019779949)
           .setMaxPageSize(524069526)
           .setPageToken("pageToken873572522")
           .setOrderBy("orderBy-1207110587")
           .setCustomRankingInfo(SearchJobsRequest.CustomRankingInfo.newBuilder().build())
           .setDisableKeywordMatch(true)
           .build();
   ApiFuture<SearchJobsResponse> future =
       jobServiceClient.searchJobsForAlertCallable().futureCall(request);
   // Do something.
   SearchJobsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchJobsRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsRequest),[SearchJobsResponse](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.SearchJobsResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateJob(Job job, FieldMask updateMask)

```
public final Job updateJob(Job job, FieldMask updateMask)
```

Updates specified job.

Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   Job job = Job.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Job response = jobServiceClient.updateJob(job, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`job`

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`  

Required. The Job to be updated.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Strongly recommended for the best service experience.

If update\_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### updateJob(UpdateJobRequest request)

```
public final Job updateJob(UpdateJobRequest request)
```

Updates specified job.

Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   UpdateJobRequest request =
       UpdateJobRequest.newBuilder()
           .setJob(Job.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Job response = jobServiceClient.updateJob(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.UpdateJobRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)`

### updateJobCallable()

```
public final UnaryCallable<UpdateJobRequest,Job> updateJobCallable()
```

Updates specified job.

Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
   UpdateJobRequest request =
       UpdateJobRequest.newBuilder()
           .setJob(Job.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Job> future = jobServiceClient.updateJobCallable().futureCall(request);
   // Do something.
   Job response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateJobRequest](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.UpdateJobRequest),[Job](/java/docs/reference/google-cloud-talent/2.37.0/com.google.cloud.talent.v4.Job)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
