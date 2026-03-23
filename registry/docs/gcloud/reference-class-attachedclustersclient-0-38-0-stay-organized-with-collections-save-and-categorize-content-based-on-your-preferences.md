-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AttachedClustersClient (0.38.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-gke-multi-cloud/google-cloud-gke-multi-cloud/src/main/java/com/google/cloud/gkemulticloud/v1/AttachedClustersClient.java)

[Product Reference](https://cloud.google.com/anthos/clusters/docs/multi-cloud)

Service Description: The AttachedClusters API provides a single centrally managed service to register and manage Anthos attached clusters that run on customer's owned infrastructure.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   AttachedClusterName name =
       AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]");
   AttachedCluster response = attachedClustersClient.getAttachedCluster(name);
 }
 
```
 

Note: close() needs to be called on the AttachedClustersClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

CreateAttachedCluster

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createAttachedClusterAsync(CreateAttachedClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createAttachedClusterAsync(LocationName parent, AttachedCluster attachedCluster, String attachedClusterId)
    
-   createAttachedClusterAsync(String parent, AttachedCluster attachedCluster, String attachedClusterId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createAttachedClusterOperationCallable()
    
-   createAttachedClusterCallable()
    

UpdateAttachedCluster

Updates an AttachedCluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateAttachedClusterAsync(UpdateAttachedClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateAttachedClusterAsync(AttachedCluster attachedCluster, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateAttachedClusterOperationCallable()
    
-   updateAttachedClusterCallable()
    

ImportAttachedCluster

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   importAttachedClusterAsync(ImportAttachedClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   importAttachedClusterAsync(LocationName parent, String fleetMembership)
    
-   importAttachedClusterAsync(String parent, String fleetMembership)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   importAttachedClusterOperationCallable()
    
-   importAttachedClusterCallable()
    

GetAttachedCluster

Describes a specific AttachedCluster resource.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getAttachedCluster(GetAttachedClusterRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getAttachedCluster(AttachedClusterName name)
    
-   getAttachedCluster(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getAttachedClusterCallable()
    

ListAttachedClusters

Lists all AttachedCluster resources on a given Google Cloud project and region.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listAttachedClusters(ListAttachedClustersRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listAttachedClusters(LocationName parent)
    
-   listAttachedClusters(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listAttachedClustersPagedCallable()
    
-   listAttachedClustersCallable()
    

DeleteAttachedCluster

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteAttachedClusterAsync(DeleteAttachedClusterRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteAttachedClusterAsync(AttachedClusterName name)
    
-   deleteAttachedClusterAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteAttachedClusterOperationCallable()
    
-   deleteAttachedClusterCallable()
    

GetAttachedServerConfig

Returns information, such as supported Kubernetes versions, on a given Google Cloud location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getAttachedServerConfig(GetAttachedServerConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getAttachedServerConfig(AttachedServerConfigName name)
    
-   getAttachedServerConfig(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getAttachedServerConfigCallable()
    

GenerateAttachedClusterInstallManifest

Generates the install manifest to be installed on the target cluster.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   generateAttachedClusterInstallManifest(GenerateAttachedClusterInstallManifestRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   generateAttachedClusterInstallManifest(LocationName parent, String attachedClusterId)
    
-   generateAttachedClusterInstallManifest(String parent, String attachedClusterId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   generateAttachedClusterInstallManifestCallable()
    

GenerateAttachedClusterAgentToken

Generates an access token for a cluster agent.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   generateAttachedClusterAgentToken(GenerateAttachedClusterAgentTokenRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   generateAttachedClusterAgentTokenCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of AttachedClustersSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AttachedClustersSettings attachedClustersSettings =
     AttachedClustersSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 AttachedClustersClient attachedClustersClient =
     AttachedClustersClient.create(attachedClustersSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AttachedClustersSettings attachedClustersSettings =
     AttachedClustersSettings.newBuilder().setEndpoint(myEndpoint).build();
 AttachedClustersClient attachedClustersClient =
     AttachedClustersClient.create(attachedClustersSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AttachedClustersSettings attachedClustersSettings =
     AttachedClustersSettings.newHttpJsonBuilder().build();
 AttachedClustersClient attachedClustersClient =
     AttachedClustersClient.create(attachedClustersSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> AttachedClustersClient

## Static Methods

### create()

```
public static final AttachedClustersClient create()
```

Constructs an instance of AttachedClustersClient with default settings.

**Returns**

**Type**

**Description**

`[AttachedClustersClient](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(AttachedClustersSettings settings)

```
public static final AttachedClustersClient create(AttachedClustersSettings settings)
```

Constructs an instance of AttachedClustersClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[AttachedClustersSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersSettings)`  

**Returns**

**Type**

**Description**

`[AttachedClustersClient](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(AttachedClustersStub stub)

```
public static final AttachedClustersClient create(AttachedClustersStub stub)
```

Constructs an instance of AttachedClustersClient, using the given stub for making calls. This is for advanced usage - prefer using create(AttachedClustersSettings).

**Parameter**

**Name**

**Description**

`stub`

`[AttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStub)`  

**Returns**

**Type**

**Description**

`[AttachedClustersClient](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient)`

## Constructors

### AttachedClustersClient(AttachedClustersSettings settings)

```
protected AttachedClustersClient(AttachedClustersSettings settings)
```

Constructs an instance of AttachedClustersClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[AttachedClustersSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersSettings)`  

### AttachedClustersClient(AttachedClustersStub stub)

```
protected AttachedClustersClient(AttachedClustersStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[AttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStub)`  

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

### createAttachedClusterAsync(CreateAttachedClusterRequest request)

```
public final OperationFuture<AttachedCluster,OperationMetadata> createAttachedClusterAsync(CreateAttachedClusterRequest request)
```

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   CreateAttachedClusterRequest request =
       CreateAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setAttachedClusterId("attachedClusterId865943409")
           .setValidateOnly(true)
           .build();
   AttachedCluster response = attachedClustersClient.createAttachedClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.CreateAttachedClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### createAttachedClusterAsync(LocationName parent, AttachedCluster attachedCluster, String attachedClusterId)

```
public final OperationFuture<AttachedCluster,OperationMetadata> createAttachedClusterAsync(LocationName parent, AttachedCluster attachedCluster, String attachedClusterId)
```

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   AttachedCluster attachedCluster = AttachedCluster.newBuilder().build();
   String attachedClusterId = "attachedClusterId865943409";
   AttachedCluster response =
       attachedClustersClient
           .createAttachedClusterAsync(parent, attachedCluster, attachedClusterId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.LocationName)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`attachedCluster`

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`  

Required. The specification of the AttachedCluster to create.

`attachedClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. A client provided ID the resource. Must be unique within the parent resource.

The provided ID will be part of the AttachedCluster resource name formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

Valid characters are `/a-z-/`. Cannot be longer than 63 characters.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### createAttachedClusterAsync(String parent, AttachedCluster attachedCluster, String attachedClusterId)

```
public final OperationFuture<AttachedCluster,OperationMetadata> createAttachedClusterAsync(String parent, AttachedCluster attachedCluster, String attachedClusterId)
```

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   AttachedCluster attachedCluster = AttachedCluster.newBuilder().build();
   String attachedClusterId = "attachedClusterId865943409";
   AttachedCluster response =
       attachedClustersClient
           .createAttachedClusterAsync(parent, attachedCluster, attachedClusterId)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`attachedCluster`

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`  

Required. The specification of the AttachedCluster to create.

`attachedClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. A client provided ID the resource. Must be unique within the parent resource.

The provided ID will be part of the AttachedCluster resource name formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

Valid characters are `/a-z-/`. Cannot be longer than 63 characters.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### createAttachedClusterCallable()

```
public final UnaryCallable<CreateAttachedClusterRequest,Operation> createAttachedClusterCallable()
```

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   CreateAttachedClusterRequest request =
       CreateAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setAttachedClusterId("attachedClusterId865943409")
           .setValidateOnly(true)
           .build();
   ApiFuture<Operation> future =
       attachedClustersClient.createAttachedClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.CreateAttachedClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createAttachedClusterOperationCallable()

```
public final OperationCallable<CreateAttachedClusterRequest,AttachedCluster,OperationMetadata> createAttachedClusterOperationCallable()
```

Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   CreateAttachedClusterRequest request =
       CreateAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setAttachedClusterId("attachedClusterId865943409")
           .setValidateOnly(true)
           .build();
   OperationFuture<AttachedCluster, OperationMetadata> future =
       attachedClustersClient.createAttachedClusterOperationCallable().futureCall(request);
   // Do something.
   AttachedCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.CreateAttachedClusterRequest),[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAttachedClusterAsync(AttachedClusterName name)

```
public final OperationFuture<Empty,OperationMetadata> deleteAttachedClusterAsync(AttachedClusterName name)
```

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   AttachedClusterName name =
       AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]");
   attachedClustersClient.deleteAttachedClusterAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[AttachedClusterName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClusterName)`  

Required. The resource name the AttachedCluster to delete.

`AttachedCluster` names are formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAttachedClusterAsync(DeleteAttachedClusterRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteAttachedClusterAsync(DeleteAttachedClusterRequest request)
```

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   DeleteAttachedClusterRequest request =
       DeleteAttachedClusterRequest.newBuilder()
           .setName(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setIgnoreErrors(true)
           .setEtag("etag3123477")
           .build();
   attachedClustersClient.deleteAttachedClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.DeleteAttachedClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAttachedClusterAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteAttachedClusterAsync(String name)
```

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String name =
       AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]").toString();
   attachedClustersClient.deleteAttachedClusterAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name the AttachedCluster to delete.

`AttachedCluster` names are formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAttachedClusterCallable()

```
public final UnaryCallable<DeleteAttachedClusterRequest,Operation> deleteAttachedClusterCallable()
```

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   DeleteAttachedClusterRequest request =
       DeleteAttachedClusterRequest.newBuilder()
           .setName(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setIgnoreErrors(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future =
       attachedClustersClient.deleteAttachedClusterCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.DeleteAttachedClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAttachedClusterOperationCallable()

```
public final OperationCallable<DeleteAttachedClusterRequest,Empty,OperationMetadata> deleteAttachedClusterOperationCallable()
```

Deletes a specific AttachedCluster resource.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   DeleteAttachedClusterRequest request =
       DeleteAttachedClusterRequest.newBuilder()
           .setName(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .setValidateOnly(true)
           .setAllowMissing(true)
           .setIgnoreErrors(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<Empty, OperationMetadata> future =
       attachedClustersClient.deleteAttachedClusterOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.DeleteAttachedClusterRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### generateAttachedClusterAgentToken(GenerateAttachedClusterAgentTokenRequest request)

```
public final GenerateAttachedClusterAgentTokenResponse generateAttachedClusterAgentToken(GenerateAttachedClusterAgentTokenRequest request)
```

Generates an access token for a cluster agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GenerateAttachedClusterAgentTokenRequest request =
       GenerateAttachedClusterAgentTokenRequest.newBuilder()
           .setAttachedCluster(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .setSubjectToken("subjectToken-1519661011")
           .setSubjectTokenType("subjectTokenType1839592711")
           .setVersion("version351608024")
           .setGrantType("grantType-1219832202")
           .setAudience("audience975628804")
           .setScope("scope109264468")
           .setRequestedTokenType("requestedTokenType1733106949")
           .setOptions("options-1249474914")
           .build();
   GenerateAttachedClusterAgentTokenResponse response =
       attachedClustersClient.generateAttachedClusterAgentToken(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GenerateAttachedClusterAgentTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterAgentTokenRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GenerateAttachedClusterAgentTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterAgentTokenResponse)`

### generateAttachedClusterAgentTokenCallable()

```
public final UnaryCallable<GenerateAttachedClusterAgentTokenRequest,GenerateAttachedClusterAgentTokenResponse> generateAttachedClusterAgentTokenCallable()
```

Generates an access token for a cluster agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GenerateAttachedClusterAgentTokenRequest request =
       GenerateAttachedClusterAgentTokenRequest.newBuilder()
           .setAttachedCluster(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .setSubjectToken("subjectToken-1519661011")
           .setSubjectTokenType("subjectTokenType1839592711")
           .setVersion("version351608024")
           .setGrantType("grantType-1219832202")
           .setAudience("audience975628804")
           .setScope("scope109264468")
           .setRequestedTokenType("requestedTokenType1733106949")
           .setOptions("options-1249474914")
           .build();
   ApiFuture<GenerateAttachedClusterAgentTokenResponse> future =
       attachedClustersClient.generateAttachedClusterAgentTokenCallable().futureCall(request);
   // Do something.
   GenerateAttachedClusterAgentTokenResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAttachedClusterAgentTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterAgentTokenRequest),[GenerateAttachedClusterAgentTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterAgentTokenResponse)>`

### generateAttachedClusterInstallManifest(GenerateAttachedClusterInstallManifestRequest request)

```
public final GenerateAttachedClusterInstallManifestResponse generateAttachedClusterInstallManifest(GenerateAttachedClusterInstallManifestRequest request)
```

Generates the install manifest to be installed on the target cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GenerateAttachedClusterInstallManifestRequest request =
       GenerateAttachedClusterInstallManifestRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setAttachedClusterId("attachedClusterId865943409")
           .setPlatformVersion("platformVersion1848800485")
           .setProxyConfig(AttachedProxyConfig.newBuilder().build())
           .build();
   GenerateAttachedClusterInstallManifestResponse response =
       attachedClustersClient.generateAttachedClusterInstallManifest(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GenerateAttachedClusterInstallManifestRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GenerateAttachedClusterInstallManifestResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestResponse)`

### generateAttachedClusterInstallManifest(LocationName parent, String attachedClusterId)

```
public final GenerateAttachedClusterInstallManifestResponse generateAttachedClusterInstallManifest(LocationName parent, String attachedClusterId)
```

Generates the install manifest to be installed on the target cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String attachedClusterId = "attachedClusterId865943409";
   GenerateAttachedClusterInstallManifestResponse response =
       attachedClustersClient.generateAttachedClusterInstallManifest(parent, attachedClusterId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.LocationName)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`attachedClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. A client provided ID of the resource. Must be unique within the parent resource.

The provided ID will be part of the AttachedCluster resource name formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

Valid characters are `/a-z-/`. Cannot be longer than 63 characters.

When generating an install manifest for importing an existing Membership resource, the attached\_cluster\_id field must be the Membership id.

Membership names are formatted as `projects/<project-id>/locations/<region>/memberships/<membership-id>`.

**Returns**

**Type**

**Description**

`[GenerateAttachedClusterInstallManifestResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestResponse)`

### generateAttachedClusterInstallManifest(String parent, String attachedClusterId)

```
public final GenerateAttachedClusterInstallManifestResponse generateAttachedClusterInstallManifest(String parent, String attachedClusterId)
```

Generates the install manifest to be installed on the target cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String attachedClusterId = "attachedClusterId865943409";
   GenerateAttachedClusterInstallManifestResponse response =
       attachedClustersClient.generateAttachedClusterInstallManifest(parent, attachedClusterId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`attachedClusterId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. A client provided ID of the resource. Must be unique within the parent resource.

The provided ID will be part of the AttachedCluster resource name formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

Valid characters are `/a-z-/`. Cannot be longer than 63 characters.

When generating an install manifest for importing an existing Membership resource, the attached\_cluster\_id field must be the Membership id.

Membership names are formatted as `projects/<project-id>/locations/<region>/memberships/<membership-id>`.

**Returns**

**Type**

**Description**

`[GenerateAttachedClusterInstallManifestResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestResponse)`

### generateAttachedClusterInstallManifestCallable()

```
public final UnaryCallable<GenerateAttachedClusterInstallManifestRequest,GenerateAttachedClusterInstallManifestResponse> generateAttachedClusterInstallManifestCallable()
```

Generates the install manifest to be installed on the target cluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GenerateAttachedClusterInstallManifestRequest request =
       GenerateAttachedClusterInstallManifestRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setAttachedClusterId("attachedClusterId865943409")
           .setPlatformVersion("platformVersion1848800485")
           .setProxyConfig(AttachedProxyConfig.newBuilder().build())
           .build();
   ApiFuture<GenerateAttachedClusterInstallManifestResponse> future =
       attachedClustersClient
           .generateAttachedClusterInstallManifestCallable()
           .futureCall(request);
   // Do something.
   GenerateAttachedClusterInstallManifestResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAttachedClusterInstallManifestRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestRequest),[GenerateAttachedClusterInstallManifestResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GenerateAttachedClusterInstallManifestResponse)>`

### getAttachedCluster(AttachedClusterName name)

```
public final AttachedCluster getAttachedCluster(AttachedClusterName name)
```

Describes a specific AttachedCluster resource.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   AttachedClusterName name =
       AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]");
   AttachedCluster response = attachedClustersClient.getAttachedCluster(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[AttachedClusterName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClusterName)`  

Required. The name of the AttachedCluster resource to describe.

`AttachedCluster` names are formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`

### getAttachedCluster(GetAttachedClusterRequest request)

```
public final AttachedCluster getAttachedCluster(GetAttachedClusterRequest request)
```

Describes a specific AttachedCluster resource.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GetAttachedClusterRequest request =
       GetAttachedClusterRequest.newBuilder()
           .setName(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .build();
   AttachedCluster response = attachedClustersClient.getAttachedCluster(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GetAttachedClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`

### getAttachedCluster(String name)

```
public final AttachedCluster getAttachedCluster(String name)
```

Describes a specific AttachedCluster resource.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String name =
       AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]").toString();
   AttachedCluster response = attachedClustersClient.getAttachedCluster(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the AttachedCluster resource to describe.

`AttachedCluster` names are formatted as `projects/<project-id>/locations/<region>/attachedClusters/<cluster-id>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`

### getAttachedClusterCallable()

```
public final UnaryCallable<GetAttachedClusterRequest,AttachedCluster> getAttachedClusterCallable()
```

Describes a specific AttachedCluster resource.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GetAttachedClusterRequest request =
       GetAttachedClusterRequest.newBuilder()
           .setName(
               AttachedClusterName.of("[PROJECT]", "[LOCATION]", "[ATTACHED_CLUSTER]")
                   .toString())
           .build();
   ApiFuture<AttachedCluster> future =
       attachedClustersClient.getAttachedClusterCallable().futureCall(request);
   // Do something.
   AttachedCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GetAttachedClusterRequest),[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)>`

### getAttachedServerConfig(AttachedServerConfigName name)

```
public final AttachedServerConfig getAttachedServerConfig(AttachedServerConfigName name)
```

Returns information, such as supported Kubernetes versions, on a given Google Cloud location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   AttachedServerConfigName name = AttachedServerConfigName.of("[PROJECT]", "[LOCATION]");
   AttachedServerConfig response = attachedClustersClient.getAttachedServerConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[AttachedServerConfigName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedServerConfigName)`  

Required. The name of the AttachedServerConfig resource to describe.

`AttachedServerConfig` names are formatted as `projects/<project-id>/locations/<region>/attachedServerConfig`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

**Returns**

**Type**

**Description**

`[AttachedServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedServerConfig)`

### getAttachedServerConfig(GetAttachedServerConfigRequest request)

```
public final AttachedServerConfig getAttachedServerConfig(GetAttachedServerConfigRequest request)
```

Returns information, such as supported Kubernetes versions, on a given Google Cloud location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GetAttachedServerConfigRequest request =
       GetAttachedServerConfigRequest.newBuilder()
           .setName(AttachedServerConfigName.of("[PROJECT]", "[LOCATION]").toString())
           .build();
   AttachedServerConfig response = attachedClustersClient.getAttachedServerConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetAttachedServerConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GetAttachedServerConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AttachedServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedServerConfig)`

### getAttachedServerConfig(String name)

```
public final AttachedServerConfig getAttachedServerConfig(String name)
```

Returns information, such as supported Kubernetes versions, on a given Google Cloud location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String name = AttachedServerConfigName.of("[PROJECT]", "[LOCATION]").toString();
   AttachedServerConfig response = attachedClustersClient.getAttachedServerConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the AttachedServerConfig resource to describe.

`AttachedServerConfig` names are formatted as `projects/<project-id>/locations/<region>/attachedServerConfig`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

**Returns**

**Type**

**Description**

`[AttachedServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedServerConfig)`

### getAttachedServerConfigCallable()

```
public final UnaryCallable<GetAttachedServerConfigRequest,AttachedServerConfig> getAttachedServerConfigCallable()
```

Returns information, such as supported Kubernetes versions, on a given Google Cloud location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   GetAttachedServerConfigRequest request =
       GetAttachedServerConfigRequest.newBuilder()
           .setName(AttachedServerConfigName.of("[PROJECT]", "[LOCATION]").toString())
           .build();
   ApiFuture<AttachedServerConfig> future =
       attachedClustersClient.getAttachedServerConfigCallable().futureCall(request);
   // Do something.
   AttachedServerConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAttachedServerConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.GetAttachedServerConfigRequest),[AttachedServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedServerConfig)>`

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
public final AttachedClustersSettings getSettings()
```

**Returns**

**Type**

**Description**

`[AttachedClustersSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersSettings)`

### getStub()

```
public AttachedClustersStub getStub()
```

**Returns**

**Type**

**Description**

`[AttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStub)`

### importAttachedClusterAsync(ImportAttachedClusterRequest request)

```
public final OperationFuture<AttachedCluster,OperationMetadata> importAttachedClusterAsync(ImportAttachedClusterRequest request)
```

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ImportAttachedClusterRequest request =
       ImportAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setValidateOnly(true)
           .setFleetMembership("fleetMembership-665479228")
           .setPlatformVersion("platformVersion1848800485")
           .setDistribution("distribution-1580708220")
           .setProxyConfig(AttachedProxyConfig.newBuilder().build())
           .build();
   AttachedCluster response = attachedClustersClient.importAttachedClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ImportAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ImportAttachedClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### importAttachedClusterAsync(LocationName parent, String fleetMembership)

```
public final OperationFuture<AttachedCluster,OperationMetadata> importAttachedClusterAsync(LocationName parent, String fleetMembership)
```

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String fleetMembership = "fleetMembership-665479228";
   AttachedCluster response =
       attachedClustersClient.importAttachedClusterAsync(parent, fleetMembership).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.LocationName)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`fleetMembership`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the fleet membership resource to import.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### importAttachedClusterAsync(String parent, String fleetMembership)

```
public final OperationFuture<AttachedCluster,OperationMetadata> importAttachedClusterAsync(String parent, String fleetMembership)
```

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String fleetMembership = "fleetMembership-665479228";
   AttachedCluster response =
       attachedClustersClient.importAttachedClusterAsync(parent, fleetMembership).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent location where this AttachedCluster resource will be created.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`fleetMembership`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the fleet membership resource to import.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### importAttachedClusterCallable()

```
public final UnaryCallable<ImportAttachedClusterRequest,Operation> importAttachedClusterCallable()
```

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ImportAttachedClusterRequest request =
       ImportAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setValidateOnly(true)
           .setFleetMembership("fleetMembership-665479228")
           .setPlatformVersion("platformVersion1848800485")
           .setDistribution("distribution-1580708220")
           .setProxyConfig(AttachedProxyConfig.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       attachedClustersClient.importAttachedClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ImportAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ImportAttachedClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### importAttachedClusterOperationCallable()

```
public final OperationCallable<ImportAttachedClusterRequest,AttachedCluster,OperationMetadata> importAttachedClusterOperationCallable()
```

Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.

Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.

If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ImportAttachedClusterRequest request =
       ImportAttachedClusterRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setValidateOnly(true)
           .setFleetMembership("fleetMembership-665479228")
           .setPlatformVersion("platformVersion1848800485")
           .setDistribution("distribution-1580708220")
           .setProxyConfig(AttachedProxyConfig.newBuilder().build())
           .build();
   OperationFuture<AttachedCluster, OperationMetadata> future =
       attachedClustersClient.importAttachedClusterOperationCallable().futureCall(request);
   // Do something.
   AttachedCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ImportAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ImportAttachedClusterRequest),[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

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

### listAttachedClusters(ListAttachedClustersRequest request)

```
public final AttachedClustersClient.ListAttachedClustersPagedResponse listAttachedClusters(ListAttachedClustersRequest request)
```

Lists all AttachedCluster resources on a given Google Cloud project and region.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ListAttachedClustersRequest request =
       ListAttachedClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (AttachedCluster element :
       attachedClustersClient.listAttachedClusters(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListAttachedClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ListAttachedClustersRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AttachedClustersClient.ListAttachedClustersPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient.ListAttachedClustersPagedResponse)`

### listAttachedClusters(LocationName parent)

```
public final AttachedClustersClient.ListAttachedClustersPagedResponse listAttachedClusters(LocationName parent)
```

Lists all AttachedCluster resources on a given Google Cloud project and region.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (AttachedCluster element :
       attachedClustersClient.listAttachedClusters(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.LocationName)`  

Required. The parent location which owns this collection of AttachedCluster resources.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[AttachedClustersClient.ListAttachedClustersPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient.ListAttachedClustersPagedResponse)`

### listAttachedClusters(String parent)

```
public final AttachedClustersClient.ListAttachedClustersPagedResponse listAttachedClusters(String parent)
```

Lists all AttachedCluster resources on a given Google Cloud project and region.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (AttachedCluster element :
       attachedClustersClient.listAttachedClusters(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent location which owns this collection of AttachedCluster resources.

Location names are formatted as `projects/<project-id>/locations/<region>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud Platform resource names.

**Returns**

**Type**

**Description**

`[AttachedClustersClient.ListAttachedClustersPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient.ListAttachedClustersPagedResponse)`

### listAttachedClustersCallable()

```
public final UnaryCallable<ListAttachedClustersRequest,ListAttachedClustersResponse> listAttachedClustersCallable()
```

Lists all AttachedCluster resources on a given Google Cloud project and region.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ListAttachedClustersRequest request =
       ListAttachedClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListAttachedClustersResponse response =
         attachedClustersClient.listAttachedClustersCallable().call(request);
     for (AttachedCluster element : response.getAttachedClustersList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAttachedClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ListAttachedClustersRequest),[ListAttachedClustersResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ListAttachedClustersResponse)>`

### listAttachedClustersPagedCallable()

```
public final UnaryCallable<ListAttachedClustersRequest,AttachedClustersClient.ListAttachedClustersPagedResponse> listAttachedClustersPagedCallable()
```

Lists all AttachedCluster resources on a given Google Cloud project and region.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   ListAttachedClustersRequest request =
       ListAttachedClustersRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<AttachedCluster> future =
       attachedClustersClient.listAttachedClustersPagedCallable().futureCall(request);
   // Do something.
   for (AttachedCluster element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAttachedClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.ListAttachedClustersRequest),[ListAttachedClustersPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedClustersClient.ListAttachedClustersPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateAttachedClusterAsync(AttachedCluster attachedCluster, FieldMask updateMask)

```
public final OperationFuture<AttachedCluster,OperationMetadata> updateAttachedClusterAsync(AttachedCluster attachedCluster, FieldMask updateMask)
```

Updates an AttachedCluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   AttachedCluster attachedCluster = AttachedCluster.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   AttachedCluster response =
       attachedClustersClient.updateAttachedClusterAsync(attachedCluster, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`attachedCluster`

`[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster)`  

Required. The AttachedCluster resource to update.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AttachedCluster:

\* `annotations`. \* `authorization.admin_groups`. \* `authorization.admin_users`. \* `binary_authorization.evaluation_mode`. \* `description`. \* `logging_config.component_config.enable_components`. \* `monitoring_config.managed_prometheus_config.enabled`. \* `platform_version`. \* `proxy_config.kubernetes_secret.name`. \* `proxy_config.kubernetes_secret.namespace`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### updateAttachedClusterAsync(UpdateAttachedClusterRequest request)

```
public final OperationFuture<AttachedCluster,OperationMetadata> updateAttachedClusterAsync(UpdateAttachedClusterRequest request)
```

Updates an AttachedCluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   UpdateAttachedClusterRequest request =
       UpdateAttachedClusterRequest.newBuilder()
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setValidateOnly(true)
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   AttachedCluster response = attachedClustersClient.updateAttachedClusterAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.UpdateAttachedClusterRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### updateAttachedClusterCallable()

```
public final UnaryCallable<UpdateAttachedClusterRequest,Operation> updateAttachedClusterCallable()
```

Updates an AttachedCluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   UpdateAttachedClusterRequest request =
       UpdateAttachedClusterRequest.newBuilder()
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setValidateOnly(true)
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       attachedClustersClient.updateAttachedClusterCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.UpdateAttachedClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateAttachedClusterOperationCallable()

```
public final OperationCallable<UpdateAttachedClusterRequest,AttachedCluster,OperationMetadata> updateAttachedClusterOperationCallable()
```

Updates an AttachedCluster.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AttachedClustersClient attachedClustersClient = AttachedClustersClient.create()) {
   UpdateAttachedClusterRequest request =
       UpdateAttachedClusterRequest.newBuilder()
           .setAttachedCluster(AttachedCluster.newBuilder().build())
           .setValidateOnly(true)
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   OperationFuture<AttachedCluster, OperationMetadata> future =
       attachedClustersClient.updateAttachedClusterOperationCallable().futureCall(request);
   // Do something.
   AttachedCluster response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateAttachedClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.UpdateAttachedClusterRequest),[AttachedCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.AttachedCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.38.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
