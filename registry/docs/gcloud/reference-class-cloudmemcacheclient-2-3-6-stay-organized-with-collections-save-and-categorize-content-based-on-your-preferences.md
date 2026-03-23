-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudMemcacheClient (2.3.6) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.11

```
public class CloudMemcacheClient implements BackgroundResource
```

Service Description: Configures and manages Cloud Memorystore for Memcached instances.

The `memcache.googleapis.com` service implements the Google Cloud Memorystore for Memcached API and defines the following resource model for managing Memorystore Memcached (also called Memcached below) instances:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Memcached instances, named: `/instances/*`
-   As such, Memcached instances are resources of the form: `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`

Note that location\_id must be a GCP `region`; for example:

-   `projects/my-memcached-project/locations/us-central1/instances/my-memcached`

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   Instance response = cloudMemcacheClient.getInstance(name);
 }
 
```
 

Note: close() needs to be called on the CloudMemcacheClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of CloudMemcacheSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudMemcacheSettings cloudMemcacheSettings =
     CloudMemcacheSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create(cloudMemcacheSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudMemcacheSettings cloudMemcacheSettings =
     CloudMemcacheSettings.newBuilder().setEndpoint(myEndpoint).build();
 CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create(cloudMemcacheSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudMemcacheSettings cloudMemcacheSettings =
     CloudMemcacheSettings.newBuilder()
         .setTransportChannelProvider(
             CloudMemcacheSettings.defaultHttpJsonTransportProviderBuilder().build())
         .build();
 CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create(cloudMemcacheSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> CloudMemcacheClient

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

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

## Static Methods

### create()

```
public static final CloudMemcacheClient create()
```

Constructs an instance of CloudMemcacheClient with default settings.

**Returns**

**Type**

**Description**

[CloudMemcacheClient](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(CloudMemcacheSettings settings)

```
public static final CloudMemcacheClient create(CloudMemcacheSettings settings)
```

Constructs an instance of CloudMemcacheClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[CloudMemcacheSettings](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheSettings)`  

**Returns**

**Type**

**Description**

[CloudMemcacheClient](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(CloudMemcacheStub stub)

```
public static final CloudMemcacheClient create(CloudMemcacheStub stub)
```

Constructs an instance of CloudMemcacheClient, using the given stub for making calls. This is for advanced usage - prefer using create(CloudMemcacheSettings).

**Parameter**

**Name**

**Description**

stub

`[CloudMemcacheStub](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.stub.CloudMemcacheStub)`  

**Returns**

**Type**

**Description**

[CloudMemcacheClient](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient)

## Constructors

### CloudMemcacheClient(CloudMemcacheSettings settings)

```
protected CloudMemcacheClient(CloudMemcacheSettings settings)
```

Constructs an instance of CloudMemcacheClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[CloudMemcacheSettings](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheSettings)`  

### CloudMemcacheClient(CloudMemcacheStub stub)

```
protected CloudMemcacheClient(CloudMemcacheStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[CloudMemcacheStub](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.stub.CloudMemcacheStub)`  

## Methods

### applyParametersAsync(ApplyParametersRequest request)

```
public final OperationFuture<Instance,OperationMetadata> applyParametersAsync(ApplyParametersRequest request)
```

ApplyParameters will restart the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ApplyParametersRequest request =
       ApplyParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .addAllNodeIds(new ArrayList<String>())
           .setApplyAll(true)
           .build();
   Instance response = cloudMemcacheClient.applyParametersAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ApplyParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ApplyParametersRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### applyParametersAsync(InstanceName name, List<String> nodeIds, boolean applyAll)

```
public final OperationFuture<Instance,OperationMetadata> applyParametersAsync(InstanceName name, List<String> nodeIds, boolean applyAll)
```

ApplyParameters will restart the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   List<String> nodeIds = new ArrayList<>();
   boolean applyAll = true;
   Instance response = cloudMemcacheClient.applyParametersAsync(name, nodeIds, applyAll).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[InstanceName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.InstanceName)`  

Required. Resource name of the Memcached instance for which parameter group updates should be applied.

nodeIds

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Nodes to which we should apply the instance-level parameter group.

applyAll

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Whether to apply instance-level parameter group to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply parameter group updates to all nodes within the instance.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### applyParametersAsync(String name, List<String> nodeIds, boolean applyAll)

```
public final OperationFuture<Instance,OperationMetadata> applyParametersAsync(String name, List<String> nodeIds, boolean applyAll)
```

ApplyParameters will restart the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString();
   List<String> nodeIds = new ArrayList<>();
   boolean applyAll = true;
   Instance response = cloudMemcacheClient.applyParametersAsync(name, nodeIds, applyAll).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the Memcached instance for which parameter group updates should be applied.

nodeIds

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Nodes to which we should apply the instance-level parameter group.

applyAll

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Whether to apply instance-level parameter group to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply parameter group updates to all nodes within the instance.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### applyParametersCallable()

```
public final UnaryCallable<ApplyParametersRequest,Operation> applyParametersCallable()
```

ApplyParameters will restart the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ApplyParametersRequest request =
       ApplyParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .addAllNodeIds(new ArrayList<String>())
           .setApplyAll(true)
           .build();
   ApiFuture<Operation> future =
       cloudMemcacheClient.applyParametersCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ApplyParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ApplyParametersRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### applyParametersOperationCallable()

```
public final OperationCallable<ApplyParametersRequest,Instance,OperationMetadata> applyParametersOperationCallable()
```

ApplyParameters will restart the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ApplyParametersRequest request =
       ApplyParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .addAllNodeIds(new ArrayList<String>())
           .setApplyAll(true)
           .build();
   OperationFuture<Instance, OperationMetadata> future =
       cloudMemcacheClient.applyParametersOperationCallable().futureCall(request);
   // Do something.
   Instance response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ApplyParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ApplyParametersRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

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

### createInstanceAsync(CreateInstanceRequest request)

```
public final OperationFuture<Instance,OperationMetadata> createInstanceAsync(CreateInstanceRequest request)
```

Creates a new Instance in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   CreateInstanceRequest request =
       CreateInstanceRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setInstanceId("instanceId902024336")
           .setInstance(Instance.newBuilder().build())
           .build();
   Instance response = cloudMemcacheClient.createInstanceAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CreateInstanceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### createInstanceAsync(LocationName parent, Instance instance, String instanceId)

```
public final OperationFuture<Instance,OperationMetadata> createInstanceAsync(LocationName parent, Instance instance, String instanceId)
```

Creates a new Instance in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   Instance instance = Instance.newBuilder().build();
   String instanceId = "instanceId902024336";
   Instance response =
       cloudMemcacheClient.createInstanceAsync(parent, instance, instanceId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[LocationName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.LocationName)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region

instance

`[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)`  

Required. A Memcached Instance

instanceId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The logical name of the Memcached instance in the user project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the user project / location

If any of the above are not met, will raise an invalid argument error.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### createInstanceAsync(String parent, Instance instance, String instanceId)

```
public final OperationFuture<Instance,OperationMetadata> createInstanceAsync(String parent, Instance instance, String instanceId)
```

Creates a new Instance in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   Instance instance = Instance.newBuilder().build();
   String instanceId = "instanceId902024336";
   Instance response =
       cloudMemcacheClient.createInstanceAsync(parent, instance, instanceId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region

instance

`[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)`  

Required. A Memcached Instance

instanceId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The logical name of the Memcached instance in the user project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the user project / location

If any of the above are not met, will raise an invalid argument error.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### createInstanceCallable()

```
public final UnaryCallable<CreateInstanceRequest,Operation> createInstanceCallable()
```

Creates a new Instance in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   CreateInstanceRequest request =
       CreateInstanceRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setInstanceId("instanceId902024336")
           .setInstance(Instance.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       cloudMemcacheClient.createInstanceCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### createInstanceOperationCallable()

```
public final OperationCallable<CreateInstanceRequest,Instance,OperationMetadata> createInstanceOperationCallable()
```

Creates a new Instance in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   CreateInstanceRequest request =
       CreateInstanceRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setInstanceId("instanceId902024336")
           .setInstance(Instance.newBuilder().build())
           .build();
   OperationFuture<Instance, OperationMetadata> future =
       cloudMemcacheClient.createInstanceOperationCallable().futureCall(request);
   // Do something.
   Instance response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CreateInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### deleteInstanceAsync(DeleteInstanceRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteInstanceAsync(DeleteInstanceRequest request)
```

Deletes a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   DeleteInstanceRequest request =
       DeleteInstanceRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .build();
   cloudMemcacheClient.deleteInstanceAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.DeleteInstanceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### deleteInstanceAsync(InstanceName name)

```
public final OperationFuture<Empty,OperationMetadata> deleteInstanceAsync(InstanceName name)
```

Deletes a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   cloudMemcacheClient.deleteInstanceAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[InstanceName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.InstanceName)`  

Required. Memcached instance resource name in the format: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### deleteInstanceAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteInstanceAsync(String name)
```

Deletes a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString();
   cloudMemcacheClient.deleteInstanceAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Memcached instance resource name in the format: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### deleteInstanceCallable()

```
public final UnaryCallable<DeleteInstanceRequest,Operation> deleteInstanceCallable()
```

Deletes a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   DeleteInstanceRequest request =
       DeleteInstanceRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .build();
   ApiFuture<Operation> future =
       cloudMemcacheClient.deleteInstanceCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.DeleteInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### deleteInstanceOperationCallable()

```
public final OperationCallable<DeleteInstanceRequest,Empty,OperationMetadata> deleteInstanceOperationCallable()
```

Deletes a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   DeleteInstanceRequest request =
       DeleteInstanceRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .build();
   OperationFuture<Empty, OperationMetadata> future =
       cloudMemcacheClient.deleteInstanceOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)

### getInstance(GetInstanceRequest request)

```
public final Instance getInstance(GetInstanceRequest request)
```

Gets details of a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   GetInstanceRequest request =
       GetInstanceRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .build();
   Instance response = cloudMemcacheClient.getInstance(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.GetInstanceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)

### getInstance(InstanceName name)

```
public final Instance getInstance(InstanceName name)
```

Gets details of a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   Instance response = cloudMemcacheClient.getInstance(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[InstanceName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.InstanceName)`  

Required. Memcached instance resource name in the format: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)

### getInstance(String name)

```
public final Instance getInstance(String name)
```

Gets details of a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString();
   Instance response = cloudMemcacheClient.getInstance(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Memcached instance resource name in the format: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)

### getInstanceCallable()

```
public final UnaryCallable<GetInstanceRequest,Instance> getInstanceCallable()
```

Gets details of a single Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   GetInstanceRequest request =
       GetInstanceRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .build();
   ApiFuture<Instance> future = cloudMemcacheClient.getInstanceCallable().futureCall(request);
   // Do something.
   Instance response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)\>

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)

### getSettings()

```
public final CloudMemcacheSettings getSettings()
```

**Returns**

**Type**

**Description**

[CloudMemcacheSettings](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheSettings)

### getStub()

```
public CloudMemcacheStub getStub()
```

**Returns**

**Type**

**Description**

[CloudMemcacheStub](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.stub.CloudMemcacheStub)

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

### listInstances(ListInstancesRequest request)

```
public final CloudMemcacheClient.ListInstancesPagedResponse listInstances(ListInstancesRequest request)
```

Lists Instances in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ListInstancesRequest request =
       ListInstancesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (Instance element : cloudMemcacheClient.listInstances(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListInstancesRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ListInstancesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[CloudMemcacheClient.ListInstancesPagedResponse](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient.ListInstancesPagedResponse)

### listInstances(LocationName parent)

```
public final CloudMemcacheClient.ListInstancesPagedResponse listInstances(LocationName parent)
```

Lists Instances in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (Instance element : cloudMemcacheClient.listInstances(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[LocationName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.LocationName)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[CloudMemcacheClient.ListInstancesPagedResponse](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient.ListInstancesPagedResponse)

### listInstances(String parent)

```
public final CloudMemcacheClient.ListInstancesPagedResponse listInstances(String parent)
```

Lists Instances in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (Instance element : cloudMemcacheClient.listInstances(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region

**Returns**

**Type**

**Description**

[CloudMemcacheClient.ListInstancesPagedResponse](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient.ListInstancesPagedResponse)

### listInstancesCallable()

```
public final UnaryCallable<ListInstancesRequest,ListInstancesResponse> listInstancesCallable()
```

Lists Instances in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ListInstancesRequest request =
       ListInstancesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListInstancesResponse response = cloudMemcacheClient.listInstancesCallable().call(request);
     for (Instance element : response.getInstancesList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ListInstancesResponse)\>

### listInstancesPagedCallable()

```
public final UnaryCallable<ListInstancesRequest,CloudMemcacheClient.ListInstancesPagedResponse> listInstancesPagedCallable()
```

Lists Instances in a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   ListInstancesRequest request =
       ListInstancesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<Instance> future =
       cloudMemcacheClient.listInstancesPagedCallable().futureCall(request);
   // Do something.
   for (Instance element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.ListInstancesRequest),[ListInstancesPagedResponse](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.CloudMemcacheClient.ListInstancesPagedResponse)\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateInstanceAsync(Instance instance, FieldMask updateMask)

```
public final OperationFuture<Instance,OperationMetadata> updateInstanceAsync(Instance instance, FieldMask updateMask)
```

Updates an existing Instance in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   Instance instance = Instance.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Instance response = cloudMemcacheClient.updateInstanceAsync(instance, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

instance

`[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance)`  

Required. A Memcached Instance. Only fields specified in update\_mask are updated.

updateMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask of fields to update. \* `displayName`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateInstanceAsync(UpdateInstanceRequest request)

```
public final OperationFuture<Instance,OperationMetadata> updateInstanceAsync(UpdateInstanceRequest request)
```

Updates an existing Instance in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateInstanceRequest request =
       UpdateInstanceRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setInstance(Instance.newBuilder().build())
           .build();
   Instance response = cloudMemcacheClient.updateInstanceAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateInstanceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateInstanceCallable()

```
public final UnaryCallable<UpdateInstanceRequest,Operation> updateInstanceCallable()
```

Updates an existing Instance in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateInstanceRequest request =
       UpdateInstanceRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setInstance(Instance.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       cloudMemcacheClient.updateInstanceCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### updateInstanceOperationCallable()

```
public final OperationCallable<UpdateInstanceRequest,Instance,OperationMetadata> updateInstanceOperationCallable()
```

Updates an existing Instance in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateInstanceRequest request =
       UpdateInstanceRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setInstance(Instance.newBuilder().build())
           .build();
   OperationFuture<Instance, OperationMetadata> future =
       cloudMemcacheClient.updateInstanceOperationCallable().futureCall(request);
   // Do something.
   Instance response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateParametersAsync(InstanceName name, FieldMask updateMask, MemcacheParameters parameters)

```
public final OperationFuture<Instance,OperationMetadata> updateParametersAsync(InstanceName name, FieldMask updateMask, MemcacheParameters parameters)
```

Updates the defined Memcached Parameters for an existing Instance. This method only stages the parameters, it must be followed by ApplyParameters to apply the parameters to nodes of the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   FieldMask updateMask = FieldMask.newBuilder().build();
   MemcacheParameters parameters = MemcacheParameters.newBuilder().build();
   Instance response =
       cloudMemcacheClient.updateParametersAsync(name, updateMask, parameters).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[InstanceName](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.InstanceName)`  

Required. Resource name of the Memcached instance for which the parameters should be updated.

updateMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask of fields to update.

parameters

`[MemcacheParameters](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.MemcacheParameters)`  

The parameters to apply to the instance.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateParametersAsync(UpdateParametersRequest request)

```
public final OperationFuture<Instance,OperationMetadata> updateParametersAsync(UpdateParametersRequest request)
```

Updates the defined Memcached Parameters for an existing Instance. This method only stages the parameters, it must be followed by ApplyParameters to apply the parameters to nodes of the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateParametersRequest request =
       UpdateParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setParameters(MemcacheParameters.newBuilder().build())
           .build();
   Instance response = cloudMemcacheClient.updateParametersAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateParametersRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateParametersAsync(String name, FieldMask updateMask, MemcacheParameters parameters)

```
public final OperationFuture<Instance,OperationMetadata> updateParametersAsync(String name, FieldMask updateMask, MemcacheParameters parameters)
```

Updates the defined Memcached Parameters for an existing Instance. This method only stages the parameters, it must be followed by ApplyParameters to apply the parameters to nodes of the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   String name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString();
   FieldMask updateMask = FieldMask.newBuilder().build();
   MemcacheParameters parameters = MemcacheParameters.newBuilder().build();
   Instance response =
       cloudMemcacheClient.updateParametersAsync(name, updateMask, parameters).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the Memcached instance for which the parameters should be updated.

updateMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask of fields to update.

parameters

`[MemcacheParameters](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.MemcacheParameters)`  

The parameters to apply to the instance.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

### updateParametersCallable()

```
public final UnaryCallable<UpdateParametersRequest,Operation> updateParametersCallable()
```

Updates the defined Memcached Parameters for an existing Instance. This method only stages the parameters, it must be followed by ApplyParameters to apply the parameters to nodes of the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateParametersRequest request =
       UpdateParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setParameters(MemcacheParameters.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       cloudMemcacheClient.updateParametersCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateParametersRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### updateParametersOperationCallable()

```
public final OperationCallable<UpdateParametersRequest,Instance,OperationMetadata> updateParametersOperationCallable()
```

Updates the defined Memcached Parameters for an existing Instance. This method only stages the parameters, it must be followed by ApplyParameters to apply the parameters to nodes of the Memcached Instance.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   UpdateParametersRequest request =
       UpdateParametersRequest.newBuilder()
           .setName(InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]").toString())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setParameters(MemcacheParameters.newBuilder().build())
           .build();
   OperationFuture<Instance, OperationMetadata> future =
       cloudMemcacheClient.updateParametersOperationCallable().futureCall(request);
   // Do something.
   Instance response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateParametersRequest](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.UpdateParametersRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.3.6/com.google.cloud.memcache.v1.OperationMetadata)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
