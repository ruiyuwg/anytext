-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class VpcAccessServiceClient (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.1.10

```
public class VpcAccessServiceClient implements BackgroundResource
```

Service Description: Serverless VPC Access API allows users to create and manage connectors for App Engine, Cloud Functions and Cloud Run to have internal connections to Virtual Private Cloud networks.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ConnectorName name = ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]");
   Connector response = vpcAccessServiceClient.getConnector(name);
 }
 
```
 

Note: close() needs to be called on the VpcAccessServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of VpcAccessServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VpcAccessServiceSettings vpcAccessServiceSettings =
     VpcAccessServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 VpcAccessServiceClient vpcAccessServiceClient =
     VpcAccessServiceClient.create(vpcAccessServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VpcAccessServiceSettings vpcAccessServiceSettings =
     VpcAccessServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 VpcAccessServiceClient vpcAccessServiceClient =
     VpcAccessServiceClient.create(vpcAccessServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VpcAccessServiceSettings vpcAccessServiceSettings =
     VpcAccessServiceSettings.newHttpJsonBuilder().build();
 VpcAccessServiceClient vpcAccessServiceClient =
     VpcAccessServiceClient.create(vpcAccessServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> VpcAccessServiceClient

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
public static final VpcAccessServiceClient create()
```

Constructs an instance of VpcAccessServiceClient with default settings.

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(VpcAccessServiceSettings settings)

```
public static final VpcAccessServiceClient create(VpcAccessServiceSettings settings)
```

Constructs an instance of VpcAccessServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[VpcAccessServiceSettings](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceSettings)`  

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(VpcAccessServiceStub stub)

```
public static final VpcAccessServiceClient create(VpcAccessServiceStub stub)
```

Constructs an instance of VpcAccessServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(VpcAccessServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[VpcAccessServiceStub](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.stub.VpcAccessServiceStub)`  

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient)`

## Constructors

### VpcAccessServiceClient(VpcAccessServiceSettings settings)

```
protected VpcAccessServiceClient(VpcAccessServiceSettings settings)
```

Constructs an instance of VpcAccessServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[VpcAccessServiceSettings](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceSettings)`  

### VpcAccessServiceClient(VpcAccessServiceStub stub)

```
protected VpcAccessServiceClient(VpcAccessServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[VpcAccessServiceStub](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.stub.VpcAccessServiceStub)`  

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

### createConnectorAsync(CreateConnectorRequest request)

```
public final OperationFuture<Connector,OperationMetadata> createConnectorAsync(CreateConnectorRequest request)
```

Creates a Serverless VPC Access connector, returns an operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   CreateConnectorRequest request =
       CreateConnectorRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setConnectorId("connectorId1724784200")
           .setConnector(Connector.newBuilder().build())
           .build();
   Connector response = vpcAccessServiceClient.createConnectorAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.CreateConnectorRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### createConnectorAsync(LocationName parent, String connectorId, Connector connector)

```
public final OperationFuture<Connector,OperationMetadata> createConnectorAsync(LocationName parent, String connectorId, Connector connector)
```

Creates a Serverless VPC Access connector, returns an operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String connectorId = "connectorId1724784200";
   Connector connector = Connector.newBuilder().build();
   Connector response =
       vpcAccessServiceClient.createConnectorAsync(parent, connectorId, connector).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.LocationName)`  

Required. The project and location in which the configuration should be created, specified in the format `projects/*/locations/*`.

`connectorId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for this connector.

`connector`

`[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)`  

Required. Resource to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### createConnectorAsync(String parent, String connectorId, Connector connector)

```
public final OperationFuture<Connector,OperationMetadata> createConnectorAsync(String parent, String connectorId, Connector connector)
```

Creates a Serverless VPC Access connector, returns an operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String connectorId = "connectorId1724784200";
   Connector connector = Connector.newBuilder().build();
   Connector response =
       vpcAccessServiceClient.createConnectorAsync(parent, connectorId, connector).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The project and location in which the configuration should be created, specified in the format `projects/*/locations/*`.

`connectorId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for this connector.

`connector`

`[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)`  

Required. Resource to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### createConnectorCallable()

```
public final UnaryCallable<CreateConnectorRequest,Operation> createConnectorCallable()
```

Creates a Serverless VPC Access connector, returns an operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   CreateConnectorRequest request =
       CreateConnectorRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setConnectorId("connectorId1724784200")
           .setConnector(Connector.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       vpcAccessServiceClient.createConnectorCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.CreateConnectorRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createConnectorOperationCallable()

```
public final OperationCallable<CreateConnectorRequest,Connector,OperationMetadata> createConnectorOperationCallable()
```

Creates a Serverless VPC Access connector, returns an operation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   CreateConnectorRequest request =
       CreateConnectorRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setConnectorId("connectorId1724784200")
           .setConnector(Connector.newBuilder().build())
           .build();
   OperationFuture<Connector, OperationMetadata> future =
       vpcAccessServiceClient.createConnectorOperationCallable().futureCall(request);
   // Do something.
   Connector response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.CreateConnectorRequest),[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### deleteConnectorAsync(ConnectorName name)

```
public final OperationFuture<Empty,OperationMetadata> deleteConnectorAsync(ConnectorName name)
```

Deletes a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ConnectorName name = ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]");
   vpcAccessServiceClient.deleteConnectorAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ConnectorName](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ConnectorName)`  

Required. Name of a Serverless VPC Access connector to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### deleteConnectorAsync(DeleteConnectorRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteConnectorAsync(DeleteConnectorRequest request)
```

Deletes a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   DeleteConnectorRequest request =
       DeleteConnectorRequest.newBuilder()
           .setName(ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString())
           .build();
   vpcAccessServiceClient.deleteConnectorAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.DeleteConnectorRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### deleteConnectorAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteConnectorAsync(String name)
```

Deletes a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   String name = ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString();
   vpcAccessServiceClient.deleteConnectorAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of a Serverless VPC Access connector to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### deleteConnectorCallable()

```
public final UnaryCallable<DeleteConnectorRequest,Operation> deleteConnectorCallable()
```

Deletes a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   DeleteConnectorRequest request =
       DeleteConnectorRequest.newBuilder()
           .setName(ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString())
           .build();
   ApiFuture<Operation> future =
       vpcAccessServiceClient.deleteConnectorCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.DeleteConnectorRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteConnectorOperationCallable()

```
public final OperationCallable<DeleteConnectorRequest,Empty,OperationMetadata> deleteConnectorOperationCallable()
```

Deletes a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   DeleteConnectorRequest request =
       DeleteConnectorRequest.newBuilder()
           .setName(ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString())
           .build();
   OperationFuture<Empty, OperationMetadata> future =
       vpcAccessServiceClient.deleteConnectorOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.DeleteConnectorRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.OperationMetadata)>`

### getConnector(ConnectorName name)

```
public final Connector getConnector(ConnectorName name)
```

Gets a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ConnectorName name = ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]");
   Connector response = vpcAccessServiceClient.getConnector(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ConnectorName](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ConnectorName)`  

Required. Name of a Serverless VPC Access connector to get.

**Returns**

**Type**

**Description**

`[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)`

### getConnector(GetConnectorRequest request)

```
public final Connector getConnector(GetConnectorRequest request)
```

Gets a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   GetConnectorRequest request =
       GetConnectorRequest.newBuilder()
           .setName(ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString())
           .build();
   Connector response = vpcAccessServiceClient.getConnector(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.GetConnectorRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)`

### getConnector(String name)

```
public final Connector getConnector(String name)
```

Gets a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   String name = ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString();
   Connector response = vpcAccessServiceClient.getConnector(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of a Serverless VPC Access connector to get.

**Returns**

**Type**

**Description**

`[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)`

### getConnectorCallable()

```
public final UnaryCallable<GetConnectorRequest,Connector> getConnectorCallable()
```

Gets a Serverless VPC Access connector. Returns NOT\_FOUND if the resource does not exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   GetConnectorRequest request =
       GetConnectorRequest.newBuilder()
           .setName(ConnectorName.of("[PROJECT]", "[LOCATION]", "[CONNECTOR]").toString())
           .build();
   ApiFuture<Connector> future =
       vpcAccessServiceClient.getConnectorCallable().futureCall(request);
   // Do something.
   Connector response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetConnectorRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.GetConnectorRequest),[Connector](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.Connector)>`

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
public final VpcAccessServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[VpcAccessServiceSettings](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceSettings)`

### getStub()

```
public VpcAccessServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[VpcAccessServiceStub](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.stub.VpcAccessServiceStub)`

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

### listConnectors(ListConnectorsRequest request)

```
public final VpcAccessServiceClient.ListConnectorsPagedResponse listConnectors(ListConnectorsRequest request)
```

Lists Serverless VPC Access connectors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListConnectorsRequest request =
       ListConnectorsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Connector element : vpcAccessServiceClient.listConnectors(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListConnectorsRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ListConnectorsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient.ListConnectorsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListConnectorsPagedResponse)`

### listConnectors(LocationName parent)

```
public final VpcAccessServiceClient.ListConnectorsPagedResponse listConnectors(LocationName parent)
```

Lists Serverless VPC Access connectors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (Connector element : vpcAccessServiceClient.listConnectors(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.LocationName)`  

Required. The project and location from which the routes should be listed.

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient.ListConnectorsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListConnectorsPagedResponse)`

### listConnectors(String parent)

```
public final VpcAccessServiceClient.ListConnectorsPagedResponse listConnectors(String parent)
```

Lists Serverless VPC Access connectors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (Connector element : vpcAccessServiceClient.listConnectors(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The project and location from which the routes should be listed.

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient.ListConnectorsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListConnectorsPagedResponse)`

### listConnectorsCallable()

```
public final UnaryCallable<ListConnectorsRequest,ListConnectorsResponse> listConnectorsCallable()
```

Lists Serverless VPC Access connectors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListConnectorsRequest request =
       ListConnectorsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListConnectorsResponse response =
         vpcAccessServiceClient.listConnectorsCallable().call(request);
     for (Connector element : response.getConnectorsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConnectorsRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ListConnectorsRequest),[ListConnectorsResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ListConnectorsResponse)>`

### listConnectorsPagedCallable()

```
public final UnaryCallable<ListConnectorsRequest,VpcAccessServiceClient.ListConnectorsPagedResponse> listConnectorsPagedCallable()
```

Lists Serverless VPC Access connectors.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListConnectorsRequest request =
       ListConnectorsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Connector> future =
       vpcAccessServiceClient.listConnectorsPagedCallable().futureCall(request);
   // Do something.
   for (Connector element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConnectorsRequest](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.ListConnectorsRequest),[ListConnectorsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListConnectorsPagedResponse)>`

### listLocations(ListLocationsRequest request)

```
public final VpcAccessServiceClient.ListLocationsPagedResponse listLocations(ListLocationsRequest request)
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Location element : vpcAccessServiceClient.listLocations(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.cloud.location.ListLocationsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[VpcAccessServiceClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListLocationsPagedResponse)`

### listLocationsCallable()

```
public final UnaryCallable<ListLocationsRequest,ListLocationsResponse> listLocationsCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListLocationsResponse response =
         vpcAccessServiceClient.listLocationsCallable().call(request);
     for (Location element : response.getLocationsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse>`

### listLocationsPagedCallable()

```
public final UnaryCallable<ListLocationsRequest,VpcAccessServiceClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VpcAccessServiceClient vpcAccessServiceClient = VpcAccessServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Location> future =
       vpcAccessServiceClient.listLocationsPagedCallable().futureCall(request);
   // Do something.
   for (Location element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-vpcaccess/2.28.0/com.google.cloud.vpcaccess.v1.VpcAccessServiceClient.ListLocationsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
