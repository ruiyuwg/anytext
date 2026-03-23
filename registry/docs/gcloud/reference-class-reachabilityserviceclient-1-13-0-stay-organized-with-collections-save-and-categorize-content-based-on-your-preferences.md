-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ReachabilityServiceClient (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public class ReachabilityServiceClient implements BackgroundResource
```

Service Description: The Reachability service in the Google Cloud Network Management API provides services that analyze the reachability within a single Google Virtual Private Cloud (VPC) network, between peered VPC networks, between VPC and on-premises networks, or between VPC networks and internet hosts. A reachability analysis is based on Google Cloud network configurations.

You can use the analysis results to verify these configurations and to troubleshoot connectivity issues.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   String name = "name3373707";
   ConnectivityTest response = reachabilityServiceClient.getConnectivityTest(name);
 }
 
```
 

Note: close() needs to be called on the ReachabilityServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ReachabilityServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ReachabilityServiceSettings reachabilityServiceSettings =
     ReachabilityServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ReachabilityServiceClient reachabilityServiceClient =
     ReachabilityServiceClient.create(reachabilityServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ReachabilityServiceSettings reachabilityServiceSettings =
     ReachabilityServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 ReachabilityServiceClient reachabilityServiceClient =
     ReachabilityServiceClient.create(reachabilityServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ReachabilityServiceSettings reachabilityServiceSettings =
     ReachabilityServiceSettings.newHttpJsonBuilder().build();
 ReachabilityServiceClient reachabilityServiceClient =
     ReachabilityServiceClient.create(reachabilityServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ReachabilityServiceClient

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
public static final ReachabilityServiceClient create()
```

Constructs an instance of ReachabilityServiceClient with default settings.

**Returns**

**Type**

**Description**

`[ReachabilityServiceClient](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ReachabilityServiceSettings settings)

```
public static final ReachabilityServiceClient create(ReachabilityServiceSettings settings)
```

Constructs an instance of ReachabilityServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[ReachabilityServiceSettings](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceSettings)`  

**Returns**

**Type**

**Description**

`[ReachabilityServiceClient](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ReachabilityServiceStub stub)

```
public static final ReachabilityServiceClient create(ReachabilityServiceStub stub)
```

Constructs an instance of ReachabilityServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(ReachabilityServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[ReachabilityServiceStub](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.stub.ReachabilityServiceStub)`  

**Returns**

**Type**

**Description**

`[ReachabilityServiceClient](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient)`

## Constructors

### ReachabilityServiceClient(ReachabilityServiceSettings settings)

```
protected ReachabilityServiceClient(ReachabilityServiceSettings settings)
```

Constructs an instance of ReachabilityServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[ReachabilityServiceSettings](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceSettings)`  

### ReachabilityServiceClient(ReachabilityServiceStub stub)

```
protected ReachabilityServiceClient(ReachabilityServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[ReachabilityServiceStub](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.stub.ReachabilityServiceStub)`  

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

### createConnectivityTestAsync(CreateConnectivityTestRequest request)

```
public final OperationFuture<ConnectivityTest,OperationMetadata> createConnectivityTestAsync(CreateConnectivityTestRequest request)
```

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of <code>AMBIGUOUS</code>. For more information, see the Connectivity Test documentation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   CreateConnectivityTestRequest request =
       CreateConnectivityTestRequest.newBuilder()
           .setParent("parent-995424086")
           .setTestId("testId-877170355")
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   ConnectivityTest response =
       reachabilityServiceClient.createConnectivityTestAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.CreateConnectivityTestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### createConnectivityTestAsync(String parent, String testId, ConnectivityTest resource)

```
public final OperationFuture<ConnectivityTest,OperationMetadata> createConnectivityTestAsync(String parent, String testId, ConnectivityTest resource)
```

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of <code>AMBIGUOUS</code>. For more information, see the Connectivity Test documentation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   String parent = "parent-995424086";
   String testId = "testId-877170355";
   ConnectivityTest resource = ConnectivityTest.newBuilder().build();
   ConnectivityTest response =
       reachabilityServiceClient.createConnectivityTestAsync(parent, testId, resource).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`

`testId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The logical name of the Connectivity Test in your project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project

`resource`

`[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest)`  

Required. A `ConnectivityTest` resource

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### createConnectivityTestCallable()

```
public final UnaryCallable<CreateConnectivityTestRequest,Operation> createConnectivityTestCallable()
```

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of <code>AMBIGUOUS</code>. For more information, see the Connectivity Test documentation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   CreateConnectivityTestRequest request =
       CreateConnectivityTestRequest.newBuilder()
           .setParent("parent-995424086")
           .setTestId("testId-877170355")
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       reachabilityServiceClient.createConnectivityTestCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.CreateConnectivityTestRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createConnectivityTestOperationCallable()

```
public final OperationCallable<CreateConnectivityTestRequest,ConnectivityTest,OperationMetadata> createConnectivityTestOperationCallable()
```

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of <code>AMBIGUOUS</code>. For more information, see the Connectivity Test documentation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   CreateConnectivityTestRequest request =
       CreateConnectivityTestRequest.newBuilder()
           .setParent("parent-995424086")
           .setTestId("testId-877170355")
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   OperationFuture<ConnectivityTest, OperationMetadata> future =
       reachabilityServiceClient.createConnectivityTestOperationCallable().futureCall(request);
   // Do something.
   ConnectivityTest response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.CreateConnectivityTestRequest),[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### deleteConnectivityTestAsync(DeleteConnectivityTestRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteConnectivityTestAsync(DeleteConnectivityTestRequest request)
```

Deletes a specific `ConnectivityTest`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   DeleteConnectivityTestRequest request =
       DeleteConnectivityTestRequest.newBuilder().setName("name3373707").build();
   reachabilityServiceClient.deleteConnectivityTestAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### deleteConnectivityTestAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteConnectivityTestAsync(String name)
```

Deletes a specific `ConnectivityTest`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   String name = "name3373707";
   reachabilityServiceClient.deleteConnectivityTestAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### deleteConnectivityTestCallable()

```
public final UnaryCallable<DeleteConnectivityTestRequest,Operation> deleteConnectivityTestCallable()
```

Deletes a specific `ConnectivityTest`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   DeleteConnectivityTestRequest request =
       DeleteConnectivityTestRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Operation> future =
       reachabilityServiceClient.deleteConnectivityTestCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteConnectivityTestOperationCallable()

```
public final OperationCallable<DeleteConnectivityTestRequest,Empty,OperationMetadata> deleteConnectivityTestOperationCallable()
```

Deletes a specific `ConnectivityTest`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   DeleteConnectivityTestRequest request =
       DeleteConnectivityTestRequest.newBuilder().setName("name3373707").build();
   OperationFuture<Empty, OperationMetadata> future =
       reachabilityServiceClient.deleteConnectivityTestOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### getConnectivityTest(GetConnectivityTestRequest request)

```
public final ConnectivityTest getConnectivityTest(GetConnectivityTestRequest request)
```

Gets the details of a specific Connectivity Test.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   GetConnectivityTestRequest request =
       GetConnectivityTestRequest.newBuilder().setName("name3373707").build();
   ConnectivityTest response = reachabilityServiceClient.getConnectivityTest(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.GetConnectivityTestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest)`

### getConnectivityTest(String name)

```
public final ConnectivityTest getConnectivityTest(String name)
```

Gets the details of a specific Connectivity Test.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   String name = "name3373707";
   ConnectivityTest response = reachabilityServiceClient.getConnectivityTest(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. `ConnectivityTest` resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`

**Returns**

**Type**

**Description**

`[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest)`

### getConnectivityTestCallable()

```
public final UnaryCallable<GetConnectivityTestRequest,ConnectivityTest> getConnectivityTestCallable()
```

Gets the details of a specific Connectivity Test.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   GetConnectivityTestRequest request =
       GetConnectivityTestRequest.newBuilder().setName("name3373707").build();
   ApiFuture<ConnectivityTest> future =
       reachabilityServiceClient.getConnectivityTestCallable().futureCall(request);
   // Do something.
   ConnectivityTest response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.GetConnectivityTestRequest),[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest)>`

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

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
public final ReachabilityServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[ReachabilityServiceSettings](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceSettings)`

### getStub()

```
public ReachabilityServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[ReachabilityServiceStub](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.stub.ReachabilityServiceStub)`

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

### listConnectivityTests(ListConnectivityTestsRequest request)

```
public final ReachabilityServiceClient.ListConnectivityTestsPagedResponse listConnectivityTests(ListConnectivityTestsRequest request)
```

Lists all Connectivity Tests owned by a project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   ListConnectivityTestsRequest request =
       ListConnectivityTestsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (ConnectivityTest element :
       reachabilityServiceClient.listConnectivityTests(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListConnectivityTestsRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ListConnectivityTestsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReachabilityServiceClient.ListConnectivityTestsPagedResponse](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient.ListConnectivityTestsPagedResponse)`

### listConnectivityTests(String parent)

```
public final ReachabilityServiceClient.ListConnectivityTestsPagedResponse listConnectivityTests(String parent)
```

Lists all Connectivity Tests owned by a project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   String parent = "parent-995424086";
   for (ConnectivityTest element :
       reachabilityServiceClient.listConnectivityTests(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global`

**Returns**

**Type**

**Description**

`[ReachabilityServiceClient.ListConnectivityTestsPagedResponse](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient.ListConnectivityTestsPagedResponse)`

### listConnectivityTestsCallable()

```
public final UnaryCallable<ListConnectivityTestsRequest,ListConnectivityTestsResponse> listConnectivityTestsCallable()
```

Lists all Connectivity Tests owned by a project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   ListConnectivityTestsRequest request =
       ListConnectivityTestsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListConnectivityTestsResponse response =
         reachabilityServiceClient.listConnectivityTestsCallable().call(request);
     for (ConnectivityTest element : response.getResourcesList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConnectivityTestsRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ListConnectivityTestsRequest),[ListConnectivityTestsResponse](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ListConnectivityTestsResponse)>`

### listConnectivityTestsPagedCallable()

```
public final UnaryCallable<ListConnectivityTestsRequest,ReachabilityServiceClient.ListConnectivityTestsPagedResponse> listConnectivityTestsPagedCallable()
```

Lists all Connectivity Tests owned by a project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   ListConnectivityTestsRequest request =
       ListConnectivityTestsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<ConnectivityTest> future =
       reachabilityServiceClient.listConnectivityTestsPagedCallable().futureCall(request);
   // Do something.
   for (ConnectivityTest element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConnectivityTestsRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ListConnectivityTestsRequest),[ListConnectivityTestsPagedResponse](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ReachabilityServiceClient.ListConnectivityTestsPagedResponse)>`

### rerunConnectivityTestAsync(RerunConnectivityTestRequest request)

```
public final OperationFuture<ConnectivityTest,OperationMetadata> rerunConnectivityTestAsync(RerunConnectivityTestRequest request)
```

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes.

If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   RerunConnectivityTestRequest request =
       RerunConnectivityTestRequest.newBuilder().setName("name3373707").build();
   ConnectivityTest response =
       reachabilityServiceClient.rerunConnectivityTestAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[RerunConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.RerunConnectivityTestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### rerunConnectivityTestCallable()

```
public final UnaryCallable<RerunConnectivityTestRequest,Operation> rerunConnectivityTestCallable()
```

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes.

If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   RerunConnectivityTestRequest request =
       RerunConnectivityTestRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Operation> future =
       reachabilityServiceClient.rerunConnectivityTestCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RerunConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.RerunConnectivityTestRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### rerunConnectivityTestOperationCallable()

```
public final OperationCallable<RerunConnectivityTestRequest,ConnectivityTest,OperationMetadata> rerunConnectivityTestOperationCallable()
```

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes.

If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   RerunConnectivityTestRequest request =
       RerunConnectivityTestRequest.newBuilder().setName("name3373707").build();
   OperationFuture<ConnectivityTest, OperationMetadata> future =
       reachabilityServiceClient.rerunConnectivityTestOperationCallable().futureCall(request);
   // Do something.
   ConnectivityTest response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RerunConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.RerunConnectivityTestRequest),[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateConnectivityTestAsync(UpdateConnectivityTestRequest request)

```
public final OperationFuture<ConnectivityTest,OperationMetadata> updateConnectivityTestAsync(UpdateConnectivityTestRequest request)
```

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of <code>UNKNOWN</code>.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   UpdateConnectivityTestRequest request =
       UpdateConnectivityTestRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   ConnectivityTest response =
       reachabilityServiceClient.updateConnectivityTestAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### updateConnectivityTestAsync(FieldMask updateMask, ConnectivityTest resource)

```
public final OperationFuture<ConnectivityTest,OperationMetadata> updateConnectivityTestAsync(FieldMask updateMask, ConnectivityTest resource)
```

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of <code>UNKNOWN</code>.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   FieldMask updateMask = FieldMask.newBuilder().build();
   ConnectivityTest resource = ConnectivityTest.newBuilder().build();
   ConnectivityTest response =
       reachabilityServiceClient.updateConnectivityTestAsync(updateMask, resource).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Mask of fields to update. At least one path must be supplied in this field.

`resource`

`[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest)`  

Required. Only fields specified in update\_mask are updated.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

### updateConnectivityTestCallable()

```
public final UnaryCallable<UpdateConnectivityTestRequest,Operation> updateConnectivityTestCallable()
```

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of <code>UNKNOWN</code>.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   UpdateConnectivityTestRequest request =
       UpdateConnectivityTestRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       reachabilityServiceClient.updateConnectivityTestCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateConnectivityTestOperationCallable()

```
public final OperationCallable<UpdateConnectivityTestRequest,ConnectivityTest,OperationMetadata> updateConnectivityTestOperationCallable()
```

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result.

If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of <code>UNKNOWN</code>.

If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ReachabilityServiceClient reachabilityServiceClient = ReachabilityServiceClient.create()) {
   UpdateConnectivityTestRequest request =
       UpdateConnectivityTestRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(ConnectivityTest.newBuilder().build())
           .build();
   OperationFuture<ConnectivityTest, OperationMetadata> future =
       reachabilityServiceClient.updateConnectivityTestOperationCallable().futureCall(request);
   // Do something.
   ConnectivityTest response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateConnectivityTestRequest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest),[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.ConnectivityTest),[OperationMetadata](/java/docs/reference/google-cloud-network-management/1.13.0/com.google.cloud.networkmanagement.v1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
