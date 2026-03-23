-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WorkstationsClient (0.39.0) Stay organized with collections Save and categorize content based on your preferences.

0.75.0 (latest) 0.73.0 0.71.0 0.70.0 0.68.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.58.0 0.56.0 0.55.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-workstations/google-cloud-workstations/src/main/java/com/google/cloud/workstations/v1/WorkstationsClient.java)

[Product Reference](https://cloud.google.com/workstations)

[REST Documentation](https://cloud.google.com/workstations/docs/reference/rest)

[RPC Documentation](https://cloud.google.com/workstations/docs/reference/rpc)

Service Description: Service for interacting with Cloud Workstations.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName name =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   WorkstationCluster response = workstationsClient.getWorkstationCluster(name);
 }
 
```
 

Note: close() needs to be called on the WorkstationsClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

GetWorkstationCluster

Returns the requested workstation cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getWorkstationCluster(GetWorkstationClusterRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getWorkstationCluster(WorkstationClusterName name)
    
-   getWorkstationCluster(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getWorkstationClusterCallable()
    

ListWorkstationClusters

Returns all workstation clusters in the specified location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listWorkstationClusters(ListWorkstationClustersRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listWorkstationClusters(LocationName parent)
    
-   listWorkstationClusters(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listWorkstationClustersPagedCallable()
    
-   listWorkstationClustersCallable()
    

CreateWorkstationCluster

Creates a new workstation cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createWorkstationClusterAsync(CreateWorkstationClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createWorkstationClusterAsync(LocationName parent, WorkstationCluster workstationCluster, String workstationClusterId)
    
-   createWorkstationClusterAsync(String parent, WorkstationCluster workstationCluster, String workstationClusterId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createWorkstationClusterOperationCallable()
    
-   createWorkstationClusterCallable()
    

UpdateWorkstationCluster

Updates an existing workstation cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateWorkstationClusterAsync(UpdateWorkstationClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateWorkstationClusterAsync(WorkstationCluster workstationCluster, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateWorkstationClusterOperationCallable()
    
-   updateWorkstationClusterCallable()
    

DeleteWorkstationCluster

Deletes the specified workstation cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteWorkstationClusterAsync(DeleteWorkstationClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteWorkstationClusterAsync(WorkstationClusterName name)
    
-   deleteWorkstationClusterAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteWorkstationClusterOperationCallable()
    
-   deleteWorkstationClusterCallable()
    

GetWorkstationConfig

Returns the requested workstation configuration.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getWorkstationConfig(GetWorkstationConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getWorkstationConfig(WorkstationConfigName name)
    
-   getWorkstationConfig(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getWorkstationConfigCallable()
    

ListWorkstationConfigs

Returns all workstation configurations in the specified cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listWorkstationConfigs(ListWorkstationConfigsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listWorkstationConfigs(WorkstationClusterName parent)
    
-   listWorkstationConfigs(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listWorkstationConfigsPagedCallable()
    
-   listWorkstationConfigsCallable()
    

ListUsableWorkstationConfigs

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listUsableWorkstationConfigs(ListUsableWorkstationConfigsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listUsableWorkstationConfigs(WorkstationClusterName parent)
    
-   listUsableWorkstationConfigs(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listUsableWorkstationConfigsPagedCallable()
    
-   listUsableWorkstationConfigsCallable()
    

CreateWorkstationConfig

Creates a new workstation configuration.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createWorkstationConfigAsync(CreateWorkstationConfigRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createWorkstationConfigAsync(WorkstationClusterName parent, WorkstationConfig workstationConfig, String workstationConfigId)
    
-   createWorkstationConfigAsync(String parent, WorkstationConfig workstationConfig, String workstationConfigId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createWorkstationConfigOperationCallable()
    
-   createWorkstationConfigCallable()
    

UpdateWorkstationConfig

Updates an existing workstation configuration.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateWorkstationConfigAsync(UpdateWorkstationConfigRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateWorkstationConfigAsync(WorkstationConfig workstationConfig, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateWorkstationConfigOperationCallable()
    
-   updateWorkstationConfigCallable()
    

DeleteWorkstationConfig

Deletes the specified workstation configuration.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteWorkstationConfigAsync(DeleteWorkstationConfigRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteWorkstationConfigAsync(WorkstationConfigName name)
    
-   deleteWorkstationConfigAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteWorkstationConfigOperationCallable()
    
-   deleteWorkstationConfigCallable()
    

GetWorkstation

Returns the requested workstation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getWorkstation(GetWorkstationRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getWorkstation(WorkstationName name)
    
-   getWorkstation(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getWorkstationCallable()
    

ListWorkstations

Returns all Workstations using the specified workstation configuration.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listWorkstations(ListWorkstationsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listWorkstations(WorkstationConfigName parent)
    
-   listWorkstations(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listWorkstationsPagedCallable()
    
-   listWorkstationsCallable()
    

ListUsableWorkstations

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listUsableWorkstations(ListUsableWorkstationsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listUsableWorkstations(WorkstationConfigName parent)
    
-   listUsableWorkstations(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listUsableWorkstationsPagedCallable()
    
-   listUsableWorkstationsCallable()
    

CreateWorkstation

Creates a new workstation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createWorkstationAsync(CreateWorkstationRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createWorkstationAsync(WorkstationConfigName parent, Workstation workstation, String workstationId)
    
-   createWorkstationAsync(String parent, Workstation workstation, String workstationId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createWorkstationOperationCallable()
    
-   createWorkstationCallable()
    

UpdateWorkstation

Updates an existing workstation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateWorkstationAsync(UpdateWorkstationRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateWorkstationAsync(Workstation workstation, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateWorkstationOperationCallable()
    
-   updateWorkstationCallable()
    

DeleteWorkstation

Deletes the specified workstation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteWorkstationAsync(DeleteWorkstationRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteWorkstationAsync(WorkstationName name)
    
-   deleteWorkstationAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteWorkstationOperationCallable()
    
-   deleteWorkstationCallable()
    

StartWorkstation

Starts running a workstation so that users can connect to it.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   startWorkstationAsync(StartWorkstationRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   startWorkstationAsync(WorkstationName name)
    
-   startWorkstationAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   startWorkstationOperationCallable()
    
-   startWorkstationCallable()
    

StopWorkstation

Stops running a workstation, reducing costs.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   stopWorkstationAsync(StopWorkstationRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   stopWorkstationAsync(WorkstationName name)
    
-   stopWorkstationAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   stopWorkstationOperationCallable()
    
-   stopWorkstationCallable()
    

GenerateAccessToken

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   generateAccessToken(GenerateAccessTokenRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   generateAccessToken(WorkstationName workstation)
    
-   generateAccessToken(String workstation)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   generateAccessTokenCallable()
    

SetIamPolicy

Sets the access control policy on the specified resource. Replacesany existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED`errors.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   setIamPolicy(SetIamPolicyRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   setIamPolicyCallable()
    

GetIamPolicy

Gets the access control policy for a resource. Returns an empty policyif the resource exists and does not have a policy set.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getIamPolicy(GetIamPolicyRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getIamPolicyCallable()
    

TestIamPermissions

Returns permissions that a caller has on the specified resource. If theresource does not exist, this will return an empty set ofpermissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for buildingpermission-aware UIs and command-line tools, not for authorizationchecking. This operation may "fail open" without warning.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   testIamPermissions(TestIamPermissionsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   testIamPermissionsCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of WorkstationsSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkstationsSettings workstationsSettings =
     WorkstationsSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 WorkstationsClient workstationsClient = WorkstationsClient.create(workstationsSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkstationsSettings workstationsSettings =
     WorkstationsSettings.newBuilder().setEndpoint(myEndpoint).build();
 WorkstationsClient workstationsClient = WorkstationsClient.create(workstationsSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WorkstationsSettings workstationsSettings = WorkstationsSettings.newHttpJsonBuilder().build();
 WorkstationsClient workstationsClient = WorkstationsClient.create(workstationsSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WorkstationsClient

## Static Methods

### create()

```
public static final WorkstationsClient create()
```

Constructs an instance of WorkstationsClient with default settings.

**Returns**

**Type**

**Description**

`[WorkstationsClient](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WorkstationsSettings settings)

```
public static final WorkstationsClient create(WorkstationsSettings settings)
```

Constructs an instance of WorkstationsClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[WorkstationsSettings](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsSettings)`  

**Returns**

**Type**

**Description**

`[WorkstationsClient](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WorkstationsStub stub)

```
public static final WorkstationsClient create(WorkstationsStub stub)
```

Constructs an instance of WorkstationsClient, using the given stub for making calls. This is for advanced usage - prefer using create(WorkstationsSettings).

**Parameter**

**Name**

**Description**

`stub`

`[WorkstationsStub](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.stub.WorkstationsStub)`  

**Returns**

**Type**

**Description**

`[WorkstationsClient](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient)`

## Constructors

### WorkstationsClient(WorkstationsSettings settings)

```
protected WorkstationsClient(WorkstationsSettings settings)
```

Constructs an instance of WorkstationsClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[WorkstationsSettings](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsSettings)`  

### WorkstationsClient(WorkstationsStub stub)

```
protected WorkstationsClient(WorkstationsStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[WorkstationsStub](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.stub.WorkstationsStub)`  

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

### createWorkstationAsync(CreateWorkstationRequest request)

```
public final OperationFuture<Workstation,OperationMetadata> createWorkstationAsync(CreateWorkstationRequest request)
```

Creates a new workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationRequest request =
       CreateWorkstationRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setWorkstationId("workstationId560540030")
           .setWorkstation(Workstation.newBuilder().build())
           .setValidateOnly(true)
           .build();
   Workstation response = workstationsClient.createWorkstationAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationAsync(WorkstationConfigName parent, Workstation workstation, String workstationId)

```
public final OperationFuture<Workstation,OperationMetadata> createWorkstationAsync(WorkstationConfigName parent, Workstation workstation, String workstationId)
```

Creates a new workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfigName parent =
       WorkstationConfigName.of(
           "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]");
   Workstation workstation = Workstation.newBuilder().build();
   String workstationId = "workstationId560540030";
   Workstation response =
       workstationsClient.createWorkstationAsync(parent, workstation, workstationId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[WorkstationConfigName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfigName)`  

Required. Parent resource name.

`workstation`

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`  

Required. Workstation to create.

`workstationId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationAsync(String parent, Workstation workstation, String workstationId)

```
public final OperationFuture<Workstation,OperationMetadata> createWorkstationAsync(String parent, Workstation workstation, String workstationId)
```

Creates a new workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationConfigName.of(
               "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]")
           .toString();
   Workstation workstation = Workstation.newBuilder().build();
   String workstationId = "workstationId560540030";
   Workstation response =
       workstationsClient.createWorkstationAsync(parent, workstation, workstationId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

`workstation`

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`  

Required. Workstation to create.

`workstationId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationCallable()

```
public final UnaryCallable<CreateWorkstationRequest,Operation> createWorkstationCallable()
```

Creates a new workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationRequest request =
       CreateWorkstationRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setWorkstationId("workstationId560540030")
           .setWorkstation(Workstation.newBuilder().build())
           .setValidateOnly(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.createWorkstationCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createWorkstationClusterAsync(CreateWorkstationClusterRequest request)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> createWorkstationClusterAsync(CreateWorkstationClusterRequest request)
```

Creates a new workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationClusterRequest request =
       CreateWorkstationClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkstationClusterId("workstationClusterId351421170")
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setValidateOnly(true)
           .build();
   WorkstationCluster response = workstationsClient.createWorkstationClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationClusterAsync(LocationName parent, WorkstationCluster workstationCluster, String workstationClusterId)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> createWorkstationClusterAsync(LocationName parent, WorkstationCluster workstationCluster, String workstationClusterId)
```

Creates a new workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   WorkstationCluster workstationCluster = WorkstationCluster.newBuilder().build();
   String workstationClusterId = "workstationClusterId351421170";
   WorkstationCluster response =
       workstationsClient
           .createWorkstationClusterAsync(parent, workstationCluster, workstationClusterId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.LocationName)`  

Required. Parent resource name.

`workstationCluster`

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`  

Required. Workstation cluster to create.

`workstationClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation cluster.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationClusterAsync(String parent, WorkstationCluster workstationCluster, String workstationClusterId)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> createWorkstationClusterAsync(String parent, WorkstationCluster workstationCluster, String workstationClusterId)
```

Creates a new workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   WorkstationCluster workstationCluster = WorkstationCluster.newBuilder().build();
   String workstationClusterId = "workstationClusterId351421170";
   WorkstationCluster response =
       workstationsClient
           .createWorkstationClusterAsync(parent, workstationCluster, workstationClusterId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

`workstationCluster`

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`  

Required. Workstation cluster to create.

`workstationClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation cluster.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationClusterCallable()

```
public final UnaryCallable<CreateWorkstationClusterRequest,Operation> createWorkstationClusterCallable()
```

Creates a new workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationClusterRequest request =
       CreateWorkstationClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkstationClusterId("workstationClusterId351421170")
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setValidateOnly(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.createWorkstationClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createWorkstationClusterOperationCallable()

```
public final OperationCallable<CreateWorkstationClusterRequest,WorkstationCluster,OperationMetadata> createWorkstationClusterOperationCallable()
```

Creates a new workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationClusterRequest request =
       CreateWorkstationClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setWorkstationClusterId("workstationClusterId351421170")
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setValidateOnly(true)
           .build();
   OperationFuture<WorkstationCluster, OperationMetadata> future =
       workstationsClient.createWorkstationClusterOperationCallable().futureCall(request);
   // Do something.
   WorkstationCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationClusterRequest),[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationConfigAsync(CreateWorkstationConfigRequest request)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> createWorkstationConfigAsync(CreateWorkstationConfigRequest request)
```

Creates a new workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationConfigRequest request =
       CreateWorkstationConfigRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setWorkstationConfigId("workstationConfigId798542368")
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setValidateOnly(true)
           .build();
   WorkstationConfig response = workstationsClient.createWorkstationConfigAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationConfigAsync(WorkstationClusterName parent, WorkstationConfig workstationConfig, String workstationConfigId)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> createWorkstationConfigAsync(WorkstationClusterName parent, WorkstationConfig workstationConfig, String workstationConfigId)
```

Creates a new workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   WorkstationConfig workstationConfig = WorkstationConfig.newBuilder().build();
   String workstationConfigId = "workstationConfigId798542368";
   WorkstationConfig response =
       workstationsClient
           .createWorkstationConfigAsync(parent, workstationConfig, workstationConfigId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[WorkstationClusterName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationClusterName)`  

Required. Parent resource name.

`workstationConfig`

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`  

Required. Config to create.

`workstationConfigId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation configuration.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationConfigAsync(String parent, WorkstationConfig workstationConfig, String workstationConfigId)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> createWorkstationConfigAsync(String parent, WorkstationConfig workstationConfig, String workstationConfigId)
```

Creates a new workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]").toString();
   WorkstationConfig workstationConfig = WorkstationConfig.newBuilder().build();
   String workstationConfigId = "workstationConfigId798542368";
   WorkstationConfig response =
       workstationsClient
           .createWorkstationConfigAsync(parent, workstationConfig, workstationConfigId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

`workstationConfig`

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`  

Required. Config to create.

`workstationConfigId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. ID to use for the workstation configuration.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationConfigCallable()

```
public final UnaryCallable<CreateWorkstationConfigRequest,Operation> createWorkstationConfigCallable()
```

Creates a new workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationConfigRequest request =
       CreateWorkstationConfigRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setWorkstationConfigId("workstationConfigId798542368")
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setValidateOnly(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.createWorkstationConfigCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createWorkstationConfigOperationCallable()

```
public final OperationCallable<CreateWorkstationConfigRequest,WorkstationConfig,OperationMetadata> createWorkstationConfigOperationCallable()
```

Creates a new workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationConfigRequest request =
       CreateWorkstationConfigRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setWorkstationConfigId("workstationConfigId798542368")
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setValidateOnly(true)
           .build();
   OperationFuture<WorkstationConfig, OperationMetadata> future =
       workstationsClient.createWorkstationConfigOperationCallable().futureCall(request);
   // Do something.
   WorkstationConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationConfigRequest),[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### createWorkstationOperationCallable()

```
public final OperationCallable<CreateWorkstationRequest,Workstation,OperationMetadata> createWorkstationOperationCallable()
```

Creates a new workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   CreateWorkstationRequest request =
       CreateWorkstationRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setWorkstationId("workstationId560540030")
           .setWorkstation(Workstation.newBuilder().build())
           .setValidateOnly(true)
           .build();
   OperationFuture<Workstation, OperationMetadata> future =
       workstationsClient.createWorkstationOperationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.CreateWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationAsync(DeleteWorkstationRequest request)

```
public final OperationFuture<Workstation,OperationMetadata> deleteWorkstationAsync(DeleteWorkstationRequest request)
```

Deletes the specified workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationRequest request =
       DeleteWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   Workstation response = workstationsClient.deleteWorkstationAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationAsync(WorkstationName name)

```
public final OperationFuture<Workstation,OperationMetadata> deleteWorkstationAsync(WorkstationName name)
```

Deletes the specified workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationName name =
       WorkstationName.of(
           "[PROJECT]",
           "[LOCATION]",
           "[WORKSTATION_CLUSTER]",
           "[WORKSTATION_CONFIG]",
           "[WORKSTATION]");
   Workstation response = workstationsClient.deleteWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationName)`  

Required. Name of the workstation to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationAsync(String name)

```
public final OperationFuture<Workstation,OperationMetadata> deleteWorkstationAsync(String name)
```

Deletes the specified workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationName.of(
               "[PROJECT]",
               "[LOCATION]",
               "[WORKSTATION_CLUSTER]",
               "[WORKSTATION_CONFIG]",
               "[WORKSTATION]")
           .toString();
   Workstation response = workstationsClient.deleteWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationCallable()

```
public final UnaryCallable<DeleteWorkstationRequest,Operation> deleteWorkstationCallable()
```

Deletes the specified workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationRequest request =
       DeleteWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future =
       workstationsClient.deleteWorkstationCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteWorkstationClusterAsync(DeleteWorkstationClusterRequest request)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> deleteWorkstationClusterAsync(DeleteWorkstationClusterRequest request)
```

Deletes the specified workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationClusterRequest request =
       DeleteWorkstationClusterRequest.newBuilder()
           .setName(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   WorkstationCluster response = workstationsClient.deleteWorkstationClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationClusterAsync(WorkstationClusterName name)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> deleteWorkstationClusterAsync(WorkstationClusterName name)
```

Deletes the specified workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName name =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   WorkstationCluster response = workstationsClient.deleteWorkstationClusterAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationClusterName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationClusterName)`  

Required. Name of the workstation cluster to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationClusterAsync(String name)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> deleteWorkstationClusterAsync(String name)
```

Deletes the specified workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]").toString();
   WorkstationCluster response = workstationsClient.deleteWorkstationClusterAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation cluster to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationClusterCallable()

```
public final UnaryCallable<DeleteWorkstationClusterRequest,Operation> deleteWorkstationClusterCallable()
```

Deletes the specified workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationClusterRequest request =
       DeleteWorkstationClusterRequest.newBuilder()
           .setName(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.deleteWorkstationClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteWorkstationClusterOperationCallable()

```
public final OperationCallable<DeleteWorkstationClusterRequest,WorkstationCluster,OperationMetadata> deleteWorkstationClusterOperationCallable()
```

Deletes the specified workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationClusterRequest request =
       DeleteWorkstationClusterRequest.newBuilder()
           .setName(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   OperationFuture<WorkstationCluster, OperationMetadata> future =
       workstationsClient.deleteWorkstationClusterOperationCallable().futureCall(request);
   // Do something.
   WorkstationCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationClusterRequest),[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationConfigAsync(DeleteWorkstationConfigRequest request)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> deleteWorkstationConfigAsync(DeleteWorkstationConfigRequest request)
```

Deletes the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationConfigRequest request =
       DeleteWorkstationConfigRequest.newBuilder()
           .setName(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   WorkstationConfig response = workstationsClient.deleteWorkstationConfigAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationConfigAsync(WorkstationConfigName name)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> deleteWorkstationConfigAsync(WorkstationConfigName name)
```

Deletes the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfigName name =
       WorkstationConfigName.of(
           "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]");
   WorkstationConfig response = workstationsClient.deleteWorkstationConfigAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationConfigName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfigName)`  

Required. Name of the workstation configuration to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationConfigAsync(String name)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> deleteWorkstationConfigAsync(String name)
```

Deletes the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationConfigName.of(
               "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]")
           .toString();
   WorkstationConfig response = workstationsClient.deleteWorkstationConfigAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation configuration to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationConfigCallable()

```
public final UnaryCallable<DeleteWorkstationConfigRequest,Operation> deleteWorkstationConfigCallable()
```

Deletes the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationConfigRequest request =
       DeleteWorkstationConfigRequest.newBuilder()
           .setName(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.deleteWorkstationConfigCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteWorkstationConfigOperationCallable()

```
public final OperationCallable<DeleteWorkstationConfigRequest,WorkstationConfig,OperationMetadata> deleteWorkstationConfigOperationCallable()
```

Deletes the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationConfigRequest request =
       DeleteWorkstationConfigRequest.newBuilder()
           .setName(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .setForce(true)
           .build();
   OperationFuture<WorkstationConfig, OperationMetadata> future =
       workstationsClient.deleteWorkstationConfigOperationCallable().futureCall(request);
   // Do something.
   WorkstationConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationConfigRequest),[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### deleteWorkstationOperationCallable()

```
public final OperationCallable<DeleteWorkstationRequest,Workstation,OperationMetadata> deleteWorkstationOperationCallable()
```

Deletes the specified workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   DeleteWorkstationRequest request =
       DeleteWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<Workstation, OperationMetadata> future =
       workstationsClient.deleteWorkstationOperationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.DeleteWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### generateAccessToken(GenerateAccessTokenRequest request)

```
public final GenerateAccessTokenResponse generateAccessToken(GenerateAccessTokenRequest request)
```

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GenerateAccessTokenRequest request =
       GenerateAccessTokenRequest.newBuilder()
           .setWorkstation(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .build();
   GenerateAccessTokenResponse response = workstationsClient.generateAccessToken(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GenerateAccessTokenRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenResponse)`

### generateAccessToken(WorkstationName workstation)

```
public final GenerateAccessTokenResponse generateAccessToken(WorkstationName workstation)
```

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationName workstation =
       WorkstationName.of(
           "[PROJECT]",
           "[LOCATION]",
           "[WORKSTATION_CLUSTER]",
           "[WORKSTATION_CONFIG]",
           "[WORKSTATION]");
   GenerateAccessTokenResponse response = workstationsClient.generateAccessToken(workstation);
 }
 
```
 

**Parameter**

**Name**

**Description**

`workstation`

`[WorkstationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationName)`  

Required. Name of the workstation for which the access token should be generated.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenResponse)`

### generateAccessToken(String workstation)

```
public final GenerateAccessTokenResponse generateAccessToken(String workstation)
```

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String workstation =
       WorkstationName.of(
               "[PROJECT]",
               "[LOCATION]",
               "[WORKSTATION_CLUSTER]",
               "[WORKSTATION_CONFIG]",
               "[WORKSTATION]")
           .toString();
   GenerateAccessTokenResponse response = workstationsClient.generateAccessToken(workstation);
 }
 
```
 

**Parameter**

**Name**

**Description**

`workstation`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation for which the access token should be generated.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenResponse)`

### generateAccessTokenCallable()

```
public final UnaryCallable<GenerateAccessTokenRequest,GenerateAccessTokenResponse> generateAccessTokenCallable()
```

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GenerateAccessTokenRequest request =
       GenerateAccessTokenRequest.newBuilder()
           .setWorkstation(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .build();
   ApiFuture<GenerateAccessTokenResponse> future =
       workstationsClient.generateAccessTokenCallable().futureCall(request);
   // Do something.
   GenerateAccessTokenResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAccessTokenRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenRequest),[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GenerateAccessTokenResponse)>`

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

### getIamPolicy(GetIamPolicyRequest request)

```
public final Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy for a resource. Returns an empty policyif the resource exists and does not have a policy set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = workstationsClient.getIamPolicy(request);
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

Gets the access control policy for a resource. Returns an empty policyif the resource exists and does not have a policy set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future = workstationsClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

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
public final WorkstationsSettings getSettings()
```

**Returns**

**Type**

**Description**

`[WorkstationsSettings](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsSettings)`

### getStub()

```
public WorkstationsStub getStub()
```

**Returns**

**Type**

**Description**

`[WorkstationsStub](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.stub.WorkstationsStub)`

### getWorkstation(GetWorkstationRequest request)

```
public final Workstation getWorkstation(GetWorkstationRequest request)
```

Returns the requested workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationRequest request =
       GetWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .build();
   Workstation response = workstationsClient.getWorkstation(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`

### getWorkstation(WorkstationName name)

```
public final Workstation getWorkstation(WorkstationName name)
```

Returns the requested workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationName name =
       WorkstationName.of(
           "[PROJECT]",
           "[LOCATION]",
           "[WORKSTATION_CLUSTER]",
           "[WORKSTATION_CONFIG]",
           "[WORKSTATION]");
   Workstation response = workstationsClient.getWorkstation(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationName)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`

### getWorkstation(String name)

```
public final Workstation getWorkstation(String name)
```

Returns the requested workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationName.of(
               "[PROJECT]",
               "[LOCATION]",
               "[WORKSTATION_CLUSTER]",
               "[WORKSTATION_CONFIG]",
               "[WORKSTATION]")
           .toString();
   Workstation response = workstationsClient.getWorkstation(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`

### getWorkstationCallable()

```
public final UnaryCallable<GetWorkstationRequest,Workstation> getWorkstationCallable()
```

Returns the requested workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationRequest request =
       GetWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .build();
   ApiFuture<Workstation> future =
       workstationsClient.getWorkstationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)>`

### getWorkstationCluster(GetWorkstationClusterRequest request)

```
public final WorkstationCluster getWorkstationCluster(GetWorkstationClusterRequest request)
```

Returns the requested workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationClusterRequest request =
       GetWorkstationClusterRequest.newBuilder()
           .setName(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .build();
   WorkstationCluster response = workstationsClient.getWorkstationCluster(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`

### getWorkstationCluster(WorkstationClusterName name)

```
public final WorkstationCluster getWorkstationCluster(WorkstationClusterName name)
```

Returns the requested workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName name =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   WorkstationCluster response = workstationsClient.getWorkstationCluster(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationClusterName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationClusterName)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`

### getWorkstationCluster(String name)

```
public final WorkstationCluster getWorkstationCluster(String name)
```

Returns the requested workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]").toString();
   WorkstationCluster response = workstationsClient.getWorkstationCluster(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`

### getWorkstationClusterCallable()

```
public final UnaryCallable<GetWorkstationClusterRequest,WorkstationCluster> getWorkstationClusterCallable()
```

Returns the requested workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationClusterRequest request =
       GetWorkstationClusterRequest.newBuilder()
           .setName(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .build();
   ApiFuture<WorkstationCluster> future =
       workstationsClient.getWorkstationClusterCallable().futureCall(request);
   // Do something.
   WorkstationCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationClusterRequest),[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)>`

### getWorkstationConfig(GetWorkstationConfigRequest request)

```
public final WorkstationConfig getWorkstationConfig(GetWorkstationConfigRequest request)
```

Returns the requested workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationConfigRequest request =
       GetWorkstationConfigRequest.newBuilder()
           .setName(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .build();
   WorkstationConfig response = workstationsClient.getWorkstationConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`

### getWorkstationConfig(WorkstationConfigName name)

```
public final WorkstationConfig getWorkstationConfig(WorkstationConfigName name)
```

Returns the requested workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfigName name =
       WorkstationConfigName.of(
           "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]");
   WorkstationConfig response = workstationsClient.getWorkstationConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationConfigName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfigName)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`

### getWorkstationConfig(String name)

```
public final WorkstationConfig getWorkstationConfig(String name)
```

Returns the requested workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationConfigName.of(
               "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]")
           .toString();
   WorkstationConfig response = workstationsClient.getWorkstationConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the requested resource.

**Returns**

**Type**

**Description**

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`

### getWorkstationConfigCallable()

```
public final UnaryCallable<GetWorkstationConfigRequest,WorkstationConfig> getWorkstationConfigCallable()
```

Returns the requested workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   GetWorkstationConfigRequest request =
       GetWorkstationConfigRequest.newBuilder()
           .setName(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .build();
   ApiFuture<WorkstationConfig> future =
       workstationsClient.getWorkstationConfigCallable().futureCall(request);
   // Do something.
   WorkstationConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.GetWorkstationConfigRequest),[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)>`

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

### listUsableWorkstationConfigs(ListUsableWorkstationConfigsRequest request)

```
public final WorkstationsClient.ListUsableWorkstationConfigsPagedResponse listUsableWorkstationConfigs(ListUsableWorkstationConfigsRequest request)
```

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationConfigsRequest request =
       ListUsableWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (WorkstationConfig element :
       workstationsClient.listUsableWorkstationConfigs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListUsableWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationConfigsPagedResponse)`

### listUsableWorkstationConfigs(WorkstationClusterName parent)

```
public final WorkstationsClient.ListUsableWorkstationConfigsPagedResponse listUsableWorkstationConfigs(WorkstationClusterName parent)
```

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   for (WorkstationConfig element :
       workstationsClient.listUsableWorkstationConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[WorkstationClusterName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationClusterName)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationConfigsPagedResponse)`

### listUsableWorkstationConfigs(String parent)

```
public final WorkstationsClient.ListUsableWorkstationConfigsPagedResponse listUsableWorkstationConfigs(String parent)
```

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]").toString();
   for (WorkstationConfig element :
       workstationsClient.listUsableWorkstationConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationConfigsPagedResponse)`

### listUsableWorkstationConfigsCallable()

```
public final UnaryCallable<ListUsableWorkstationConfigsRequest,ListUsableWorkstationConfigsResponse> listUsableWorkstationConfigsCallable()
```

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationConfigsRequest request =
       ListUsableWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListUsableWorkstationConfigsResponse response =
         workstationsClient.listUsableWorkstationConfigsCallable().call(request);
     for (WorkstationConfig element : response.getWorkstationConfigsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUsableWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest),[ListUsableWorkstationConfigsResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse)>`

### listUsableWorkstationConfigsPagedCallable()

```
public final UnaryCallable<ListUsableWorkstationConfigsRequest,WorkstationsClient.ListUsableWorkstationConfigsPagedResponse> listUsableWorkstationConfigsPagedCallable()
```

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationConfigsRequest request =
       ListUsableWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<WorkstationConfig> future =
       workstationsClient.listUsableWorkstationConfigsPagedCallable().futureCall(request);
   // Do something.
   for (WorkstationConfig element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUsableWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest),[ListUsableWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationConfigsPagedResponse)>`

### listUsableWorkstations(ListUsableWorkstationsRequest request)

```
public final WorkstationsClient.ListUsableWorkstationsPagedResponse listUsableWorkstations(ListUsableWorkstationsRequest request)
```

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationsRequest request =
       ListUsableWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Workstation element : workstationsClient.listUsableWorkstations(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListUsableWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationsPagedResponse)`

### listUsableWorkstations(WorkstationConfigName parent)

```
public final WorkstationsClient.ListUsableWorkstationsPagedResponse listUsableWorkstations(WorkstationConfigName parent)
```

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfigName parent =
       WorkstationConfigName.of(
           "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]");
   for (Workstation element : workstationsClient.listUsableWorkstations(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[WorkstationConfigName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfigName)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationsPagedResponse)`

### listUsableWorkstations(String parent)

```
public final WorkstationsClient.ListUsableWorkstationsPagedResponse listUsableWorkstations(String parent)
```

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationConfigName.of(
               "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]")
           .toString();
   for (Workstation element : workstationsClient.listUsableWorkstations(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListUsableWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationsPagedResponse)`

### listUsableWorkstationsCallable()

```
public final UnaryCallable<ListUsableWorkstationsRequest,ListUsableWorkstationsResponse> listUsableWorkstationsCallable()
```

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationsRequest request =
       ListUsableWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListUsableWorkstationsResponse response =
         workstationsClient.listUsableWorkstationsCallable().call(request);
     for (Workstation element : response.getWorkstationsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUsableWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationsRequest),[ListUsableWorkstationsResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationsResponse)>`

### listUsableWorkstationsPagedCallable()

```
public final UnaryCallable<ListUsableWorkstationsRequest,WorkstationsClient.ListUsableWorkstationsPagedResponse> listUsableWorkstationsPagedCallable()
```

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListUsableWorkstationsRequest request =
       ListUsableWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Workstation> future =
       workstationsClient.listUsableWorkstationsPagedCallable().futureCall(request);
   // Do something.
   for (Workstation element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUsableWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListUsableWorkstationsRequest),[ListUsableWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListUsableWorkstationsPagedResponse)>`

### listWorkstationClusters(ListWorkstationClustersRequest request)

```
public final WorkstationsClient.ListWorkstationClustersPagedResponse listWorkstationClusters(ListWorkstationClustersRequest request)
```

Returns all workstation clusters in the specified location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationClustersRequest request =
       ListWorkstationClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (WorkstationCluster element :
       workstationsClient.listWorkstationClusters(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListWorkstationClustersRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationClustersRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationClustersPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationClustersPagedResponse)`

### listWorkstationClusters(LocationName parent)

```
public final WorkstationsClient.ListWorkstationClustersPagedResponse listWorkstationClusters(LocationName parent)
```

Returns all workstation clusters in the specified location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (WorkstationCluster element :
       workstationsClient.listWorkstationClusters(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.LocationName)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationClustersPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationClustersPagedResponse)`

### listWorkstationClusters(String parent)

```
public final WorkstationsClient.ListWorkstationClustersPagedResponse listWorkstationClusters(String parent)
```

Returns all workstation clusters in the specified location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (WorkstationCluster element :
       workstationsClient.listWorkstationClusters(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationClustersPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationClustersPagedResponse)`

### listWorkstationClustersCallable()

```
public final UnaryCallable<ListWorkstationClustersRequest,ListWorkstationClustersResponse> listWorkstationClustersCallable()
```

Returns all workstation clusters in the specified location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationClustersRequest request =
       ListWorkstationClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListWorkstationClustersResponse response =
         workstationsClient.listWorkstationClustersCallable().call(request);
     for (WorkstationCluster element : response.getWorkstationClustersList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationClustersRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationClustersRequest),[ListWorkstationClustersResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationClustersResponse)>`

### listWorkstationClustersPagedCallable()

```
public final UnaryCallable<ListWorkstationClustersRequest,WorkstationsClient.ListWorkstationClustersPagedResponse> listWorkstationClustersPagedCallable()
```

Returns all workstation clusters in the specified location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationClustersRequest request =
       ListWorkstationClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<WorkstationCluster> future =
       workstationsClient.listWorkstationClustersPagedCallable().futureCall(request);
   // Do something.
   for (WorkstationCluster element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationClustersRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationClustersRequest),[ListWorkstationClustersPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationClustersPagedResponse)>`

### listWorkstationConfigs(ListWorkstationConfigsRequest request)

```
public final WorkstationsClient.ListWorkstationConfigsPagedResponse listWorkstationConfigs(ListWorkstationConfigsRequest request)
```

Returns all workstation configurations in the specified cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationConfigsRequest request =
       ListWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (WorkstationConfig element :
       workstationsClient.listWorkstationConfigs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationConfigsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationConfigsPagedResponse)`

### listWorkstationConfigs(WorkstationClusterName parent)

```
public final WorkstationsClient.ListWorkstationConfigsPagedResponse listWorkstationConfigs(WorkstationClusterName parent)
```

Returns all workstation configurations in the specified cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationClusterName parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]");
   for (WorkstationConfig element :
       workstationsClient.listWorkstationConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[WorkstationClusterName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationClusterName)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationConfigsPagedResponse)`

### listWorkstationConfigs(String parent)

```
public final WorkstationsClient.ListWorkstationConfigsPagedResponse listWorkstationConfigs(String parent)
```

Returns all workstation configurations in the specified cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]").toString();
   for (WorkstationConfig element :
       workstationsClient.listWorkstationConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationConfigsPagedResponse)`

### listWorkstationConfigsCallable()

```
public final UnaryCallable<ListWorkstationConfigsRequest,ListWorkstationConfigsResponse> listWorkstationConfigsCallable()
```

Returns all workstation configurations in the specified cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationConfigsRequest request =
       ListWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListWorkstationConfigsResponse response =
         workstationsClient.listWorkstationConfigsCallable().call(request);
     for (WorkstationConfig element : response.getWorkstationConfigsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationConfigsRequest),[ListWorkstationConfigsResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationConfigsResponse)>`

### listWorkstationConfigsPagedCallable()

```
public final UnaryCallable<ListWorkstationConfigsRequest,WorkstationsClient.ListWorkstationConfigsPagedResponse> listWorkstationConfigsPagedCallable()
```

Returns all workstation configurations in the specified cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationConfigsRequest request =
       ListWorkstationConfigsRequest.newBuilder()
           .setParent(
               WorkstationClusterName.of("[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<WorkstationConfig> future =
       workstationsClient.listWorkstationConfigsPagedCallable().futureCall(request);
   // Do something.
   for (WorkstationConfig element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationConfigsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationConfigsRequest),[ListWorkstationConfigsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationConfigsPagedResponse)>`

### listWorkstations(ListWorkstationsRequest request)

```
public final WorkstationsClient.ListWorkstationsPagedResponse listWorkstations(ListWorkstationsRequest request)
```

Returns all Workstations using the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationsRequest request =
       ListWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Workstation element : workstationsClient.listWorkstations(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationsPagedResponse)`

### listWorkstations(WorkstationConfigName parent)

```
public final WorkstationsClient.ListWorkstationsPagedResponse listWorkstations(WorkstationConfigName parent)
```

Returns all Workstations using the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfigName parent =
       WorkstationConfigName.of(
           "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]");
   for (Workstation element : workstationsClient.listWorkstations(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[WorkstationConfigName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfigName)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationsPagedResponse)`

### listWorkstations(String parent)

```
public final WorkstationsClient.ListWorkstationsPagedResponse listWorkstations(String parent)
```

Returns all Workstations using the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String parent =
       WorkstationConfigName.of(
               "[PROJECT]", "[LOCATION]", "[WORKSTATION_CLUSTER]", "[WORKSTATION_CONFIG]")
           .toString();
   for (Workstation element : workstationsClient.listWorkstations(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent resource name.

**Returns**

**Type**

**Description**

`[WorkstationsClient.ListWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationsPagedResponse)`

### listWorkstationsCallable()

```
public final UnaryCallable<ListWorkstationsRequest,ListWorkstationsResponse> listWorkstationsCallable()
```

Returns all Workstations using the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationsRequest request =
       ListWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListWorkstationsResponse response =
         workstationsClient.listWorkstationsCallable().call(request);
     for (Workstation element : response.getWorkstationsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationsRequest),[ListWorkstationsResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationsResponse)>`

### listWorkstationsPagedCallable()

```
public final UnaryCallable<ListWorkstationsRequest,WorkstationsClient.ListWorkstationsPagedResponse> listWorkstationsPagedCallable()
```

Returns all Workstations using the specified workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   ListWorkstationsRequest request =
       ListWorkstationsRequest.newBuilder()
           .setParent(
               WorkstationConfigName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Workstation> future =
       workstationsClient.listWorkstationsPagedCallable().futureCall(request);
   // Do something.
   for (Workstation element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListWorkstationsRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.ListWorkstationsRequest),[ListWorkstationsPagedResponse](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationsClient.ListWorkstationsPagedResponse)>`

### setIamPolicy(SetIamPolicyRequest request)

```
public final Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy on the specified resource. Replacesany existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED`errors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = workstationsClient.setIamPolicy(request);
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

Sets the access control policy on the specified resource. Replacesany existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED`errors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future = workstationsClient.setIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### startWorkstationAsync(StartWorkstationRequest request)

```
public final OperationFuture<Workstation,OperationMetadata> startWorkstationAsync(StartWorkstationRequest request)
```

Starts running a workstation so that users can connect to it.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StartWorkstationRequest request =
       StartWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   Workstation response = workstationsClient.startWorkstationAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[StartWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StartWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### startWorkstationAsync(WorkstationName name)

```
public final OperationFuture<Workstation,OperationMetadata> startWorkstationAsync(WorkstationName name)
```

Starts running a workstation so that users can connect to it.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationName name =
       WorkstationName.of(
           "[PROJECT]",
           "[LOCATION]",
           "[WORKSTATION_CLUSTER]",
           "[WORKSTATION_CONFIG]",
           "[WORKSTATION]");
   Workstation response = workstationsClient.startWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationName)`  

Required. Name of the workstation to start.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### startWorkstationAsync(String name)

```
public final OperationFuture<Workstation,OperationMetadata> startWorkstationAsync(String name)
```

Starts running a workstation so that users can connect to it.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationName.of(
               "[PROJECT]",
               "[LOCATION]",
               "[WORKSTATION_CLUSTER]",
               "[WORKSTATION_CONFIG]",
               "[WORKSTATION]")
           .toString();
   Workstation response = workstationsClient.startWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation to start.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### startWorkstationCallable()

```
public final UnaryCallable<StartWorkstationRequest,Operation> startWorkstationCallable()
```

Starts running a workstation so that users can connect to it.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StartWorkstationRequest request =
       StartWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future =
       workstationsClient.startWorkstationCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StartWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StartWorkstationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### startWorkstationOperationCallable()

```
public final OperationCallable<StartWorkstationRequest,Workstation,OperationMetadata> startWorkstationOperationCallable()
```

Starts running a workstation so that users can connect to it.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StartWorkstationRequest request =
       StartWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<Workstation, OperationMetadata> future =
       workstationsClient.startWorkstationOperationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[StartWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StartWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### stopWorkstationAsync(StopWorkstationRequest request)

```
public final OperationFuture<Workstation,OperationMetadata> stopWorkstationAsync(StopWorkstationRequest request)
```

Stops running a workstation, reducing costs.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StopWorkstationRequest request =
       StopWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   Workstation response = workstationsClient.stopWorkstationAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[StopWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StopWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### stopWorkstationAsync(WorkstationName name)

```
public final OperationFuture<Workstation,OperationMetadata> stopWorkstationAsync(WorkstationName name)
```

Stops running a workstation, reducing costs.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationName name =
       WorkstationName.of(
           "[PROJECT]",
           "[LOCATION]",
           "[WORKSTATION_CLUSTER]",
           "[WORKSTATION_CONFIG]",
           "[WORKSTATION]");
   Workstation response = workstationsClient.stopWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[WorkstationName](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationName)`  

Required. Name of the workstation to stop.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### stopWorkstationAsync(String name)

```
public final OperationFuture<Workstation,OperationMetadata> stopWorkstationAsync(String name)
```

Stops running a workstation, reducing costs.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   String name =
       WorkstationName.of(
               "[PROJECT]",
               "[LOCATION]",
               "[WORKSTATION_CLUSTER]",
               "[WORKSTATION_CONFIG]",
               "[WORKSTATION]")
           .toString();
   Workstation response = workstationsClient.stopWorkstationAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the workstation to stop.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### stopWorkstationCallable()

```
public final UnaryCallable<StopWorkstationRequest,Operation> stopWorkstationCallable()
```

Stops running a workstation, reducing costs.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StopWorkstationRequest request =
       StopWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future =
       workstationsClient.stopWorkstationCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StopWorkstationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopWorkstationOperationCallable()

```
public final OperationCallable<StopWorkstationRequest,Workstation,OperationMetadata> stopWorkstationOperationCallable()
```

Stops running a workstation, reducing costs.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   StopWorkstationRequest request =
       StopWorkstationRequest.newBuilder()
           .setName(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<Workstation, OperationMetadata> future =
       workstationsClient.stopWorkstationOperationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[StopWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.StopWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### testIamPermissions(TestIamPermissionsRequest request)

```
public final TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that a caller has on the specified resource. If theresource does not exist, this will return an empty set ofpermissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for buildingpermission-aware UIs and command-line tools, not for authorizationchecking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = workstationsClient.testIamPermissions(request);
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

Returns permissions that a caller has on the specified resource. If theresource does not exist, this will return an empty set ofpermissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for buildingpermission-aware UIs and command-line tools, not for authorizationchecking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               WorkstationName.of(
                       "[PROJECT]",
                       "[LOCATION]",
                       "[WORKSTATION_CLUSTER]",
                       "[WORKSTATION_CONFIG]",
                       "[WORKSTATION]")
                   .toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       workstationsClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateWorkstationAsync(UpdateWorkstationRequest request)

```
public final OperationFuture<Workstation,OperationMetadata> updateWorkstationAsync(UpdateWorkstationRequest request)
```

Updates an existing workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationRequest request =
       UpdateWorkstationRequest.newBuilder()
           .setWorkstation(Workstation.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   Workstation response = workstationsClient.updateWorkstationAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationAsync(Workstation workstation, FieldMask updateMask)

```
public final OperationFuture<Workstation,OperationMetadata> updateWorkstationAsync(Workstation workstation, FieldMask updateMask)
```

Updates an existing workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   Workstation workstation = Workstation.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Workstation response =
       workstationsClient.updateWorkstationAsync(workstation, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`workstation`

`[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation)`  

Required. Workstation to update.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask specifying which fields in the workstation configuration should be updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationCallable()

```
public final UnaryCallable<UpdateWorkstationRequest,Operation> updateWorkstationCallable()
```

Updates an existing workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationRequest request =
       UpdateWorkstationRequest.newBuilder()
           .setWorkstation(Workstation.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.updateWorkstationCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateWorkstationClusterAsync(UpdateWorkstationClusterRequest request)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> updateWorkstationClusterAsync(UpdateWorkstationClusterRequest request)
```

Updates an existing workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationClusterRequest request =
       UpdateWorkstationClusterRequest.newBuilder()
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   WorkstationCluster response = workstationsClient.updateWorkstationClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationClusterAsync(WorkstationCluster workstationCluster, FieldMask updateMask)

```
public final OperationFuture<WorkstationCluster,OperationMetadata> updateWorkstationClusterAsync(WorkstationCluster workstationCluster, FieldMask updateMask)
```

Updates an existing workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationCluster workstationCluster = WorkstationCluster.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   WorkstationCluster response =
       workstationsClient.updateWorkstationClusterAsync(workstationCluster, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`workstationCluster`

`[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster)`  

Required. Workstation cluster to update.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask that specifies which fields in the workstation cluster should be updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationClusterCallable()

```
public final UnaryCallable<UpdateWorkstationClusterRequest,Operation> updateWorkstationClusterCallable()
```

Updates an existing workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationClusterRequest request =
       UpdateWorkstationClusterRequest.newBuilder()
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.updateWorkstationClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateWorkstationClusterOperationCallable()

```
public final OperationCallable<UpdateWorkstationClusterRequest,WorkstationCluster,OperationMetadata> updateWorkstationClusterOperationCallable()
```

Updates an existing workstation cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationClusterRequest request =
       UpdateWorkstationClusterRequest.newBuilder()
           .setWorkstationCluster(WorkstationCluster.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   OperationFuture<WorkstationCluster, OperationMetadata> future =
       workstationsClient.updateWorkstationClusterOperationCallable().futureCall(request);
   // Do something.
   WorkstationCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateWorkstationClusterRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationClusterRequest),[WorkstationCluster](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationCluster),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationConfigAsync(UpdateWorkstationConfigRequest request)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> updateWorkstationConfigAsync(UpdateWorkstationConfigRequest request)
```

Updates an existing workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationConfigRequest request =
       UpdateWorkstationConfigRequest.newBuilder()
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   WorkstationConfig response = workstationsClient.updateWorkstationConfigAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationConfigAsync(WorkstationConfig workstationConfig, FieldMask updateMask)

```
public final OperationFuture<WorkstationConfig,OperationMetadata> updateWorkstationConfigAsync(WorkstationConfig workstationConfig, FieldMask updateMask)
```

Updates an existing workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   WorkstationConfig workstationConfig = WorkstationConfig.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   WorkstationConfig response =
       workstationsClient.updateWorkstationConfigAsync(workstationConfig, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`workstationConfig`

`[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig)`  

Required. Config to update.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask specifying which fields in the workstation configuration should be updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationConfigCallable()

```
public final UnaryCallable<UpdateWorkstationConfigRequest,Operation> updateWorkstationConfigCallable()
```

Updates an existing workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationConfigRequest request =
       UpdateWorkstationConfigRequest.newBuilder()
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       workstationsClient.updateWorkstationConfigCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateWorkstationConfigOperationCallable()

```
public final OperationCallable<UpdateWorkstationConfigRequest,WorkstationConfig,OperationMetadata> updateWorkstationConfigOperationCallable()
```

Updates an existing workstation configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationConfigRequest request =
       UpdateWorkstationConfigRequest.newBuilder()
           .setWorkstationConfig(WorkstationConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   OperationFuture<WorkstationConfig, OperationMetadata> future =
       workstationsClient.updateWorkstationConfigOperationCallable().futureCall(request);
   // Do something.
   WorkstationConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateWorkstationConfigRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationConfigRequest),[WorkstationConfig](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.WorkstationConfig),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

### updateWorkstationOperationCallable()

```
public final OperationCallable<UpdateWorkstationRequest,Workstation,OperationMetadata> updateWorkstationOperationCallable()
```

Updates an existing workstation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WorkstationsClient workstationsClient = WorkstationsClient.create()) {
   UpdateWorkstationRequest request =
       UpdateWorkstationRequest.newBuilder()
           .setWorkstation(Workstation.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .build();
   OperationFuture<Workstation, OperationMetadata> future =
       workstationsClient.updateWorkstationOperationCallable().futureCall(request);
   // Do something.
   Workstation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateWorkstationRequest](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.UpdateWorkstationRequest),[Workstation](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.Workstation),[OperationMetadata](/java/docs/reference/google-cloud-workstations/0.39.0/com.google.cloud.workstations.v1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
