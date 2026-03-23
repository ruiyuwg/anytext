-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WorkerPoolsClient (0.87.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-run/google-cloud-run/src/main/java/com/google/cloud/run/v2/WorkerPoolsClient.java)

[Product Reference](https://cloud.google.com/run/docs)

[REST Documentation](https://cloud.google.com/run/docs/reference/rest)

[RPC Documentation](https://cloud.google.com/run/docs/reference/rpc)

Service Description: Cloud Run WorkerPool Control Plane API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   WorkerPoolName name = WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]");
   WorkerPool response = workerPoolsClient.getWorkerPool(name);
 }
 
```
 

Note: close() needs to be called on the WorkerPoolsClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

CreateWorkerPool

Creates a new WorkerPool in a given project and location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createWorkerPoolAsync(CreateWorkerPoolRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createWorkerPoolAsync(LocationName parent, WorkerPool workerPool, String workerPoolId)
    
-   createWorkerPoolAsync(String parent, WorkerPool workerPool, String workerPoolId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createWorkerPoolOperationCallable()
    
-   createWorkerPoolCallable()
    

GetWorkerPool

Gets information about a WorkerPool.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getWorkerPool(GetWorkerPoolRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getWorkerPool(WorkerPoolName name)
    
-   getWorkerPool(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getWorkerPoolCallable()
    

ListWorkerPools

Lists WorkerPools. Results are sorted by creation time, descending.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listWorkerPools(ListWorkerPoolsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listWorkerPools(LocationName parent)
    
-   listWorkerPools(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listWorkerPoolsPagedCallable()
    
-   listWorkerPoolsCallable()
    

UpdateWorkerPool

Updates a WorkerPool.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateWorkerPoolAsync(UpdateWorkerPoolRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateWorkerPoolAsync(WorkerPool workerPool)
    
-   updateWorkerPoolAsync(WorkerPool workerPool, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateWorkerPoolOperationCallable()
    
-   updateWorkerPoolCallable()
    

DeleteWorkerPool

Deletes a WorkerPool.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteWorkerPoolAsync(DeleteWorkerPoolRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteWorkerPoolAsync(WorkerPoolName name)
    
-   deleteWorkerPoolAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteWorkerPoolOperationCallable()
    
-   deleteWorkerPoolCallable()
    

GetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getIamPolicy(GetIamPolicyRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getIamPolicyCallable()
    

SetIamPolicy

Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   setIamPolicy(SetIamPolicyRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   setIamPolicyCallable()
    

TestIamPermissions

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   testIamPermissions(TestIamPermissionsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   testIamPermissionsCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of WorkerPoolsSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkerPoolsSettings workerPoolsSettings =
     WorkerPoolsSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create(workerPoolsSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkerPoolsSettings workerPoolsSettings =
     WorkerPoolsSettings.newBuilder().setEndpoint(myEndpoint).build();
 WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create(workerPoolsSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkerPoolsSettings workerPoolsSettings = WorkerPoolsSettings.newHttpJsonBuilder().build();
 WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create(workerPoolsSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WorkerPoolsClient

## Static Methods

### create()

```
public static final WorkerPoolsClient create()
```

Constructs an instance of WorkerPoolsClient with default settings.

**Returns**

**Type**

**Description**

`[WorkerPoolsClient](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WorkerPoolsSettings settings)

```
public static final WorkerPoolsClient create(WorkerPoolsSettings settings)
```

Constructs an instance of WorkerPoolsClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[WorkerPoolsSettings](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsSettings)`  

**Returns**

**Type**

**Description**

`[WorkerPoolsClient](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WorkerPoolsStub stub)

```
public static final WorkerPoolsClient create(WorkerPoolsStub stub)
```

Constructs an instance of WorkerPoolsClient, using the given stub for making calls. This is for advanced usage - prefer using create(WorkerPoolsSettings).

**Parameter**

**Name**

**Description**

`stub`

`[WorkerPoolsStub](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.stub.WorkerPoolsStub)`  

**Returns**

**Type**

**Description**

`[WorkerPoolsClient](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient)`

## Constructors

### WorkerPoolsClient(WorkerPoolsSettings settings)

```
protected WorkerPoolsClient(WorkerPoolsSettings settings)
```

Constructs an instance of WorkerPoolsClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[WorkerPoolsSettings](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsSettings)`  

### WorkerPoolsClient(WorkerPoolsStub stub)

```
protected WorkerPoolsClient(WorkerPoolsStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[WorkerPoolsStub](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.stub.WorkerPoolsStub)`  

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

### close()

```
public final void close()
```

### createWorkerPoolAsync(CreateWorkerPoolRequest request)

```
public final OperationFuture<WorkerPool,WorkerPool> createWorkerPoolAsync(CreateWorkerPoolRequest request)
```

Creates a new WorkerPool in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   CreateWorkerPoolRequest request =
       CreateWorkerPoolRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setWorkerPoolId("workerPoolId-46320779")
           .setValidateOnly(true)
           .build();
   WorkerPool response = workerPoolsClient.createWorkerPoolAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CreateWorkerPoolRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### createWorkerPoolAsync(LocationName parent, WorkerPool workerPool, String workerPoolId)

```
public final OperationFuture<WorkerPool,WorkerPool> createWorkerPoolAsync(LocationName parent, WorkerPool workerPool, String workerPoolId)
```

Creates a new WorkerPool in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   WorkerPool workerPool = WorkerPool.newBuilder().build();
   String workerPoolId = "workerPoolId-46320779";
   WorkerPool response =
       workerPoolsClient.createWorkerPoolAsync(parent, workerPool, workerPoolId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.LocationName)`  

Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens.

`workerPool`

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`  

Required. The WorkerPool instance to create.

`workerPoolId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### createWorkerPoolAsync(String parent, WorkerPool workerPool, String workerPoolId)

```
public final OperationFuture<WorkerPool,WorkerPool> createWorkerPoolAsync(String parent, WorkerPool workerPool, String workerPoolId)
```

Creates a new WorkerPool in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   WorkerPool workerPool = WorkerPool.newBuilder().build();
   String workerPoolId = "workerPoolId-46320779";
   WorkerPool response =
       workerPoolsClient.createWorkerPoolAsync(parent, workerPool, workerPoolId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens.

`workerPool`

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`  

Required. The WorkerPool instance to create.

`workerPoolId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### createWorkerPoolCallable()

```
public final UnaryCallable<CreateWorkerPoolRequest,Operation> createWorkerPoolCallable()
```

Creates a new WorkerPool in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   CreateWorkerPoolRequest request =
       CreateWorkerPoolRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setWorkerPoolId("workerPoolId-46320779")
           .setValidateOnly(true)
           .build();
   ApiFuture<Operation> future =
       workerPoolsClient.createWorkerPoolCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CreateWorkerPoolRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createWorkerPoolOperationCallable()

```
public final OperationCallable<CreateWorkerPoolRequest,WorkerPool,WorkerPool> createWorkerPoolOperationCallable()
```

Creates a new WorkerPool in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   CreateWorkerPoolRequest request =
       CreateWorkerPoolRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setWorkerPoolId("workerPoolId-46320779")
           .setValidateOnly(true)
           .build();
   OperationFuture<WorkerPool, WorkerPool> future =
       workerPoolsClient.createWorkerPoolOperationCallable().futureCall(request);
   // Do something.
   WorkerPool response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CreateWorkerPoolRequest),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### deleteWorkerPoolAsync(DeleteWorkerPoolRequest request)

```
public final OperationFuture<WorkerPool,WorkerPool> deleteWorkerPoolAsync(DeleteWorkerPoolRequest request)
```

Deletes a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   DeleteWorkerPoolRequest request =
       DeleteWorkerPoolRequest.newBuilder()
           .setName(WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   WorkerPool response = workerPoolsClient.deleteWorkerPoolAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.DeleteWorkerPoolRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### deleteWorkerPoolAsync(WorkerPoolName name)

```
public final OperationFuture<WorkerPool,WorkerPool> deleteWorkerPoolAsync(WorkerPoolName name)
```

Deletes a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   WorkerPoolName name = WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]");
   WorkerPool response = workerPoolsClient.deleteWorkerPoolAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkerPoolName](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolName)`  

Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### deleteWorkerPoolAsync(String name)

```
public final OperationFuture<WorkerPool,WorkerPool> deleteWorkerPoolAsync(String name)
```

Deletes a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   String name = WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString();
   WorkerPool response = workerPoolsClient.deleteWorkerPoolAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### deleteWorkerPoolCallable()

```
public final UnaryCallable<DeleteWorkerPoolRequest,Operation> deleteWorkerPoolCallable()
```

Deletes a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   DeleteWorkerPoolRequest request =
       DeleteWorkerPoolRequest.newBuilder()
           .setName(WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future =
       workerPoolsClient.deleteWorkerPoolCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.DeleteWorkerPoolRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteWorkerPoolOperationCallable()

```
public final OperationCallable<DeleteWorkerPoolRequest,WorkerPool,WorkerPool> deleteWorkerPoolOperationCallable()
```

Deletes a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   DeleteWorkerPoolRequest request =
       DeleteWorkerPoolRequest.newBuilder()
           .setName(WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<WorkerPool, WorkerPool> future =
       workerPoolsClient.deleteWorkerPoolOperationCallable().futureCall(request);
   // Do something.
   WorkerPool response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.DeleteWorkerPoolRequest),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

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

`[OperationsClient](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)`

### getIamPolicy(GetIamPolicyRequest request)

```
public final Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = workerPoolsClient.getIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getIamPolicyCallable()

```
public final UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future = workerPoolsClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)`

### getSettings()

```
public final WorkerPoolsSettings getSettings()
```

**Returns**

**Type**

**Description**

`[WorkerPoolsSettings](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsSettings)`

### getStub()

```
public WorkerPoolsStub getStub()
```

**Returns**

**Type**

**Description**

`[WorkerPoolsStub](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.stub.WorkerPoolsStub)`

### getWorkerPool(GetWorkerPoolRequest request)

```
public final WorkerPool getWorkerPool(GetWorkerPoolRequest request)
```

Gets information about a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   GetWorkerPoolRequest request =
       GetWorkerPoolRequest.newBuilder()
           .setName(WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .build();
   WorkerPool response = workerPoolsClient.getWorkerPool(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.GetWorkerPoolRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`

### getWorkerPool(WorkerPoolName name)

```
public final WorkerPool getWorkerPool(WorkerPoolName name)
```

Gets information about a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   WorkerPoolName name = WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]");
   WorkerPool response = workerPoolsClient.getWorkerPool(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkerPoolName](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolName)`  

Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`

### getWorkerPool(String name)

```
public final WorkerPool getWorkerPool(String name)
```

Gets information about a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   String name = WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString();
   WorkerPool response = workerPoolsClient.getWorkerPool(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`

### getWorkerPoolCallable()

```
public final UnaryCallable<GetWorkerPoolRequest,WorkerPool> getWorkerPoolCallable()
```

Gets information about a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   GetWorkerPoolRequest request =
       GetWorkerPoolRequest.newBuilder()
           .setName(WorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .build();
   ApiFuture<WorkerPool> future = workerPoolsClient.getWorkerPoolCallable().futureCall(request);
   // Do something.
   WorkerPool response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.GetWorkerPoolRequest),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

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

### listWorkerPools(ListWorkerPoolsRequest request)

```
public final WorkerPoolsClient.ListWorkerPoolsPagedResponse listWorkerPools(ListWorkerPoolsRequest request)
```

Lists WorkerPools. Results are sorted by creation time, descending.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   ListWorkerPoolsRequest request =
       ListWorkerPoolsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   for (WorkerPool element : workerPoolsClient.listWorkerPools(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListWorkerPoolsRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.ListWorkerPoolsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkerPoolsClient.ListWorkerPoolsPagedResponse](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient.ListWorkerPoolsPagedResponse)`

### listWorkerPools(LocationName parent)

```
public final WorkerPoolsClient.ListWorkerPoolsPagedResponse listWorkerPools(LocationName parent)
```

Lists WorkerPools. Results are sorted by creation time, descending.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (WorkerPool element : workerPoolsClient.listWorkerPools(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.LocationName)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[WorkerPoolsClient.ListWorkerPoolsPagedResponse](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient.ListWorkerPoolsPagedResponse)`

### listWorkerPools(String parent)

```
public final WorkerPoolsClient.ListWorkerPoolsPagedResponse listWorkerPools(String parent)
```

Lists WorkerPools. Results are sorted by creation time, descending.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (WorkerPool element : workerPoolsClient.listWorkerPools(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number.

**Returns**

**Type**

**Description**

`[WorkerPoolsClient.ListWorkerPoolsPagedResponse](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient.ListWorkerPoolsPagedResponse)`

### listWorkerPoolsCallable()

```
public final UnaryCallable<ListWorkerPoolsRequest,ListWorkerPoolsResponse> listWorkerPoolsCallable()
```

Lists WorkerPools. Results are sorted by creation time, descending.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   ListWorkerPoolsRequest request =
       ListWorkerPoolsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   while (true) {
     ListWorkerPoolsResponse response =
         workerPoolsClient.listWorkerPoolsCallable().call(request);
     for (WorkerPool element : response.getWorkerPoolsList()) {
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

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkerPoolsRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.ListWorkerPoolsRequest),[ListWorkerPoolsResponse](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.ListWorkerPoolsResponse)>`

### listWorkerPoolsPagedCallable()

```
public final UnaryCallable<ListWorkerPoolsRequest,WorkerPoolsClient.ListWorkerPoolsPagedResponse> listWorkerPoolsPagedCallable()
```

Lists WorkerPools. Results are sorted by creation time, descending.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   ListWorkerPoolsRequest request =
       ListWorkerPoolsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   ApiFuture<WorkerPool> future =
       workerPoolsClient.listWorkerPoolsPagedCallable().futureCall(request);
   // Do something.
   for (WorkerPool element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkerPoolsRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.ListWorkerPoolsRequest),[ListWorkerPoolsPagedResponse](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPoolsClient.ListWorkerPoolsPagedResponse)>`

### setIamPolicy(SetIamPolicyRequest request)

```
public final Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = workerPoolsClient.setIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### setIamPolicyCallable()

```
public final UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future = workerPoolsClient.setIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### testIamPermissions(TestIamPermissionsRequest request)

```
public final TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = workerPoolsClient.testIamPermissions(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

### testIamPermissionsCallable()

```
public final UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               BuildWorkerPoolName.of("[PROJECT]", "[LOCATION]", "[WORKER_POOL]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       workerPoolsClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateWorkerPoolAsync(UpdateWorkerPoolRequest request)

```
public final OperationFuture<WorkerPool,WorkerPool> updateWorkerPoolAsync(UpdateWorkerPoolRequest request)
```

Updates a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   UpdateWorkerPoolRequest request =
       UpdateWorkerPoolRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setForceNewRevision(true)
           .build();
   WorkerPool response = workerPoolsClient.updateWorkerPoolAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.UpdateWorkerPoolRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### updateWorkerPoolAsync(WorkerPool workerPool)

```
public final OperationFuture<WorkerPool,WorkerPool> updateWorkerPoolAsync(WorkerPool workerPool)
```

Updates a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   WorkerPool workerPool = WorkerPool.newBuilder().build();
   WorkerPool response = workerPoolsClient.updateWorkerPoolAsync(workerPool).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`workerPool`

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`  

Required. The WorkerPool to be updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### updateWorkerPoolAsync(WorkerPool workerPool, FieldMask updateMask)

```
public final OperationFuture<WorkerPool,WorkerPool> updateWorkerPoolAsync(WorkerPool workerPool, FieldMask updateMask)
```

Updates a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   WorkerPool workerPool = WorkerPool.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   WorkerPool response = workerPoolsClient.updateWorkerPoolAsync(workerPool, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`workerPool`

`[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)`  

Required. The WorkerPool to be updated.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Optional. The list of fields to be updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

### updateWorkerPoolCallable()

```
public final UnaryCallable<UpdateWorkerPoolRequest,Operation> updateWorkerPoolCallable()
```

Updates a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   UpdateWorkerPoolRequest request =
       UpdateWorkerPoolRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setForceNewRevision(true)
           .build();
   ApiFuture<Operation> future =
       workerPoolsClient.updateWorkerPoolCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.UpdateWorkerPoolRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateWorkerPoolOperationCallable()

```
public final OperationCallable<UpdateWorkerPoolRequest,WorkerPool,WorkerPool> updateWorkerPoolOperationCallable()
```

Updates a WorkerPool.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkerPoolsClient workerPoolsClient = WorkerPoolsClient.create()) {
   UpdateWorkerPoolRequest request =
       UpdateWorkerPoolRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setWorkerPool(WorkerPool.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setForceNewRevision(true)
           .build();
   OperationFuture<WorkerPool, WorkerPool> future =
       workerPoolsClient.updateWorkerPoolOperationCallable().futureCall(request);
   // Do something.
   WorkerPool response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateWorkerPoolRequest](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.UpdateWorkerPoolRequest),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool),[WorkerPool](/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.WorkerPool)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
