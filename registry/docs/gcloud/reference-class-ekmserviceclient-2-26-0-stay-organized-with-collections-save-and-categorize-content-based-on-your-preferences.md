-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EkmServiceClient (2.26.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.84.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.8 2.5.3 2.4.4 2.3.1

```
public class EkmServiceClient implements BackgroundResource
```

Service Description: Google Cloud Key Management EKM Service

Manages external cryptographic keys and operations using those keys. Implements a REST model with the following objects:

-   EkmConnection

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConnectionName name = EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]");
   EkmConnection response = ekmServiceClient.getEkmConnection(name);
 }
 
```
 

Note: close() needs to be called on the EkmServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of EkmServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EkmServiceSettings ekmServiceSettings =
     EkmServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 EkmServiceClient ekmServiceClient = EkmServiceClient.create(ekmServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EkmServiceSettings ekmServiceSettings =
     EkmServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 EkmServiceClient ekmServiceClient = EkmServiceClient.create(ekmServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EkmServiceSettings ekmServiceSettings = EkmServiceSettings.newHttpJsonBuilder().build();
 EkmServiceClient ekmServiceClient = EkmServiceClient.create(ekmServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> EkmServiceClient

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
public static final EkmServiceClient create()
```

Constructs an instance of EkmServiceClient with default settings.

**Returns**

**Type**

**Description**

`[EkmServiceClient](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EkmServiceSettings settings)

```
public static final EkmServiceClient create(EkmServiceSettings settings)
```

Constructs an instance of EkmServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[EkmServiceSettings](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceSettings)`  

**Returns**

**Type**

**Description**

`[EkmServiceClient](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EkmServiceStub stub)

```
public static final EkmServiceClient create(EkmServiceStub stub)
```

Constructs an instance of EkmServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(EkmServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[EkmServiceStub](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.stub.EkmServiceStub)`  

**Returns**

**Type**

**Description**

`[EkmServiceClient](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient)`

## Constructors

### EkmServiceClient(EkmServiceSettings settings)

```
protected EkmServiceClient(EkmServiceSettings settings)
```

Constructs an instance of EkmServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[EkmServiceSettings](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceSettings)`  

### EkmServiceClient(EkmServiceStub stub)

```
protected EkmServiceClient(EkmServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[EkmServiceStub](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.stub.EkmServiceStub)`  

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

### createEkmConnection(CreateEkmConnectionRequest request)

```
public final EkmConnection createEkmConnection(CreateEkmConnectionRequest request)
```

Creates a new EkmConnection in a given Project and Location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   CreateEkmConnectionRequest request =
       CreateEkmConnectionRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setEkmConnectionId("ekmConnectionId-445017408")
           .setEkmConnection(EkmConnection.newBuilder().build())
           .build();
   EkmConnection response = ekmServiceClient.createEkmConnection(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.CreateEkmConnectionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### createEkmConnection(LocationName parent, String ekmConnectionId, EkmConnection ekmConnection)

```
public final EkmConnection createEkmConnection(LocationName parent, String ekmConnectionId, EkmConnection ekmConnection)
```

Creates a new EkmConnection in a given Project and Location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String ekmConnectionId = "ekmConnectionId-445017408";
   EkmConnection ekmConnection = EkmConnection.newBuilder().build();
   EkmConnection response =
       ekmServiceClient.createEkmConnection(parent, ekmConnectionId, ekmConnection);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.LocationName)`  

Required. The resource name of the location associated with the EkmConnection, in the format `projects/*/locations/*`.

`ekmConnectionId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.

`ekmConnection`

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`  

Required. An EkmConnection with initial field values.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### createEkmConnection(String parent, String ekmConnectionId, EkmConnection ekmConnection)

```
public final EkmConnection createEkmConnection(String parent, String ekmConnectionId, EkmConnection ekmConnection)
```

Creates a new EkmConnection in a given Project and Location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String ekmConnectionId = "ekmConnectionId-445017408";
   EkmConnection ekmConnection = EkmConnection.newBuilder().build();
   EkmConnection response =
       ekmServiceClient.createEkmConnection(parent, ekmConnectionId, ekmConnection);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the location associated with the EkmConnection, in the format `projects/*/locations/*`.

`ekmConnectionId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.

`ekmConnection`

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`  

Required. An EkmConnection with initial field values.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### createEkmConnectionCallable()

```
public final UnaryCallable<CreateEkmConnectionRequest,EkmConnection> createEkmConnectionCallable()
```

Creates a new EkmConnection in a given Project and Location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   CreateEkmConnectionRequest request =
       CreateEkmConnectionRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setEkmConnectionId("ekmConnectionId-445017408")
           .setEkmConnection(EkmConnection.newBuilder().build())
           .build();
   ApiFuture<EkmConnection> future =
       ekmServiceClient.createEkmConnectionCallable().futureCall(request);
   // Do something.
   EkmConnection response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.CreateEkmConnectionRequest),[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)>`

### getEkmConfig(EkmConfigName name)

```
public final EkmConfig getEkmConfig(EkmConfigName name)
```

Returns the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConfigName name = EkmConfigName.of("[PROJECT]", "[LOCATION]");
   EkmConfig response = ekmServiceClient.getEkmConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EkmConfigName](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfigName)`  

Required. The name of the EkmConfig to get.

**Returns**

**Type**

**Description**

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`

### getEkmConfig(GetEkmConfigRequest request)

```
public final EkmConfig getEkmConfig(GetEkmConfigRequest request)
```

Returns the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetEkmConfigRequest request =
       GetEkmConfigRequest.newBuilder()
           .setName(EkmConfigName.of("[PROJECT]", "[LOCATION]").toString())
           .build();
   EkmConfig response = ekmServiceClient.getEkmConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetEkmConfigRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.GetEkmConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`

### getEkmConfig(String name)

```
public final EkmConfig getEkmConfig(String name)
```

Returns the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   String name = EkmConfigName.of("[PROJECT]", "[LOCATION]").toString();
   EkmConfig response = ekmServiceClient.getEkmConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the EkmConfig to get.

**Returns**

**Type**

**Description**

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`

### getEkmConfigCallable()

```
public final UnaryCallable<GetEkmConfigRequest,EkmConfig> getEkmConfigCallable()
```

Returns the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetEkmConfigRequest request =
       GetEkmConfigRequest.newBuilder()
           .setName(EkmConfigName.of("[PROJECT]", "[LOCATION]").toString())
           .build();
   ApiFuture<EkmConfig> future = ekmServiceClient.getEkmConfigCallable().futureCall(request);
   // Do something.
   EkmConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEkmConfigRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.GetEkmConfigRequest),[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)>`

### getEkmConnection(EkmConnectionName name)

```
public final EkmConnection getEkmConnection(EkmConnectionName name)
```

Returns metadata for a given EkmConnection.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConnectionName name = EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]");
   EkmConnection response = ekmServiceClient.getEkmConnection(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EkmConnectionName](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnectionName)`  

Required. The name of the EkmConnection to get.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### getEkmConnection(GetEkmConnectionRequest request)

```
public final EkmConnection getEkmConnection(GetEkmConnectionRequest request)
```

Returns metadata for a given EkmConnection.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetEkmConnectionRequest request =
       GetEkmConnectionRequest.newBuilder()
           .setName(
               EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString())
           .build();
   EkmConnection response = ekmServiceClient.getEkmConnection(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.GetEkmConnectionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### getEkmConnection(String name)

```
public final EkmConnection getEkmConnection(String name)
```

Returns metadata for a given EkmConnection.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   String name = EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString();
   EkmConnection response = ekmServiceClient.getEkmConnection(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the EkmConnection to get.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### getEkmConnectionCallable()

```
public final UnaryCallable<GetEkmConnectionRequest,EkmConnection> getEkmConnectionCallable()
```

Returns metadata for a given EkmConnection.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetEkmConnectionRequest request =
       GetEkmConnectionRequest.newBuilder()
           .setName(
               EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString())
           .build();
   ApiFuture<EkmConnection> future =
       ekmServiceClient.getEkmConnectionCallable().futureCall(request);
   // Do something.
   EkmConnection response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.GetEkmConnectionRequest),[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)>`

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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = ekmServiceClient.getIamPolicy(request);
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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future = ekmServiceClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getLocation(GetLocationRequest request)

```
public final Location getLocation(GetLocationRequest request)
```

Gets information about a location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   Location response = ekmServiceClient.getLocation(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.cloud.location.GetLocationRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.cloud.location.Location`

### getLocationCallable()

```
public final UnaryCallable<GetLocationRequest,Location> getLocationCallable()
```

Gets information about a location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Location> future = ekmServiceClient.getLocationCallable().futureCall(request);
   // Do something.
   Location response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getSettings()

```
public final EkmServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[EkmServiceSettings](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceSettings)`

### getStub()

```
public EkmServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[EkmServiceStub](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.stub.EkmServiceStub)`

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

### listEkmConnections(ListEkmConnectionsRequest request)

```
public final EkmServiceClient.ListEkmConnectionsPagedResponse listEkmConnections(ListEkmConnectionsRequest request)
```

Lists EkmConnections.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListEkmConnectionsRequest request =
       ListEkmConnectionsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (EkmConnection element : ekmServiceClient.listEkmConnections(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListEkmConnectionsRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.ListEkmConnectionsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmServiceClient.ListEkmConnectionsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListEkmConnectionsPagedResponse)`

### listEkmConnections(LocationName parent)

```
public final EkmServiceClient.ListEkmConnectionsPagedResponse listEkmConnections(LocationName parent)
```

Lists EkmConnections.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (EkmConnection element : ekmServiceClient.listEkmConnections(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.LocationName)`  

Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*/locations/*`.

**Returns**

**Type**

**Description**

`[EkmServiceClient.ListEkmConnectionsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListEkmConnectionsPagedResponse)`

### listEkmConnections(String parent)

```
public final EkmServiceClient.ListEkmConnectionsPagedResponse listEkmConnections(String parent)
```

Lists EkmConnections.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (EkmConnection element : ekmServiceClient.listEkmConnections(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*/locations/*`.

**Returns**

**Type**

**Description**

`[EkmServiceClient.ListEkmConnectionsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListEkmConnectionsPagedResponse)`

### listEkmConnectionsCallable()

```
public final UnaryCallable<ListEkmConnectionsRequest,ListEkmConnectionsResponse> listEkmConnectionsCallable()
```

Lists EkmConnections.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListEkmConnectionsRequest request =
       ListEkmConnectionsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListEkmConnectionsResponse response =
         ekmServiceClient.listEkmConnectionsCallable().call(request);
     for (EkmConnection element : response.getEkmConnectionsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEkmConnectionsRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.ListEkmConnectionsRequest),[ListEkmConnectionsResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.ListEkmConnectionsResponse)>`

### listEkmConnectionsPagedCallable()

```
public final UnaryCallable<ListEkmConnectionsRequest,EkmServiceClient.ListEkmConnectionsPagedResponse> listEkmConnectionsPagedCallable()
```

Lists EkmConnections.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListEkmConnectionsRequest request =
       ListEkmConnectionsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<EkmConnection> future =
       ekmServiceClient.listEkmConnectionsPagedCallable().futureCall(request);
   // Do something.
   for (EkmConnection element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEkmConnectionsRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.ListEkmConnectionsRequest),[ListEkmConnectionsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListEkmConnectionsPagedResponse)>`

### listLocations(ListLocationsRequest request)

```
public final EkmServiceClient.ListLocationsPagedResponse listLocations(ListLocationsRequest request)
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Location element : ekmServiceClient.listLocations(request).iterateAll()) {
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

`[EkmServiceClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListLocationsPagedResponse)`

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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListLocationsResponse response = ekmServiceClient.listLocationsCallable().call(request);
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
public final UnaryCallable<ListLocationsRequest,EkmServiceClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Location> future =
       ekmServiceClient.listLocationsPagedCallable().futureCall(request);
   // Do something.
   for (Location element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmServiceClient.ListLocationsPagedResponse)>`

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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = ekmServiceClient.setIamPolicy(request);
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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future = ekmServiceClient.setIamPolicyCallable().futureCall(request);
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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = ekmServiceClient.testIamPermissions(request);
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
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(
               CryptoKeyName.of("[PROJECT]", "[LOCATION]", "[KEY_RING]", "[CRYPTO_KEY]")
                   .toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       ekmServiceClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateEkmConfig(EkmConfig ekmConfig, FieldMask updateMask)

```
public final EkmConfig updateEkmConfig(EkmConfig ekmConfig, FieldMask updateMask)
```

Updates the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConfig ekmConfig = EkmConfig.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   EkmConfig response = ekmServiceClient.updateEkmConfig(ekmConfig, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`ekmConfig`

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`  

Required. EkmConfig with updated values.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. List of fields to be updated in this request.

**Returns**

**Type**

**Description**

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`

### updateEkmConfig(UpdateEkmConfigRequest request)

```
public final EkmConfig updateEkmConfig(UpdateEkmConfigRequest request)
```

Updates the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   UpdateEkmConfigRequest request =
       UpdateEkmConfigRequest.newBuilder()
           .setEkmConfig(EkmConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   EkmConfig response = ekmServiceClient.updateEkmConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateEkmConfigRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.UpdateEkmConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)`

### updateEkmConfigCallable()

```
public final UnaryCallable<UpdateEkmConfigRequest,EkmConfig> updateEkmConfigCallable()
```

Updates the EkmConfig singleton resource for a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   UpdateEkmConfigRequest request =
       UpdateEkmConfigRequest.newBuilder()
           .setEkmConfig(EkmConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<EkmConfig> future = ekmServiceClient.updateEkmConfigCallable().futureCall(request);
   // Do something.
   EkmConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEkmConfigRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.UpdateEkmConfigRequest),[EkmConfig](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConfig)>`

### updateEkmConnection(EkmConnection ekmConnection, FieldMask updateMask)

```
public final EkmConnection updateEkmConnection(EkmConnection ekmConnection, FieldMask updateMask)
```

Updates an EkmConnection's metadata.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConnection ekmConnection = EkmConnection.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   EkmConnection response = ekmServiceClient.updateEkmConnection(ekmConnection, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`ekmConnection`

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`  

Required. EkmConnection with updated values.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. List of fields to be updated in this request.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### updateEkmConnection(UpdateEkmConnectionRequest request)

```
public final EkmConnection updateEkmConnection(UpdateEkmConnectionRequest request)
```

Updates an EkmConnection's metadata.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   UpdateEkmConnectionRequest request =
       UpdateEkmConnectionRequest.newBuilder()
           .setEkmConnection(EkmConnection.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   EkmConnection response = ekmServiceClient.updateEkmConnection(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.UpdateEkmConnectionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)`

### updateEkmConnectionCallable()

```
public final UnaryCallable<UpdateEkmConnectionRequest,EkmConnection> updateEkmConnectionCallable()
```

Updates an EkmConnection's metadata.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   UpdateEkmConnectionRequest request =
       UpdateEkmConnectionRequest.newBuilder()
           .setEkmConnection(EkmConnection.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<EkmConnection> future =
       ekmServiceClient.updateEkmConnectionCallable().futureCall(request);
   // Do something.
   EkmConnection response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEkmConnectionRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.UpdateEkmConnectionRequest),[EkmConnection](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnection)>`

### verifyConnectivity(EkmConnectionName name)

```
public final VerifyConnectivityResponse verifyConnectivity(EkmConnectionName name)
```

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED\_PRECONDITION status containing structured information as described at [https://cloud.google.com/kms/docs/reference/ekm\_errors](https://cloud.google.com/kms/docs/reference/ekm_errors).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   EkmConnectionName name = EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]");
   VerifyConnectivityResponse response = ekmServiceClient.verifyConnectivity(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EkmConnectionName](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.EkmConnectionName)`  

Required. The name of the EkmConnection to verify.

**Returns**

**Type**

**Description**

`[VerifyConnectivityResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityResponse)`

### verifyConnectivity(VerifyConnectivityRequest request)

```
public final VerifyConnectivityResponse verifyConnectivity(VerifyConnectivityRequest request)
```

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED\_PRECONDITION status containing structured information as described at [https://cloud.google.com/kms/docs/reference/ekm\_errors](https://cloud.google.com/kms/docs/reference/ekm_errors).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   VerifyConnectivityRequest request =
       VerifyConnectivityRequest.newBuilder()
           .setName(
               EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString())
           .build();
   VerifyConnectivityResponse response = ekmServiceClient.verifyConnectivity(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[VerifyConnectivityRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[VerifyConnectivityResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityResponse)`

### verifyConnectivity(String name)

```
public final VerifyConnectivityResponse verifyConnectivity(String name)
```

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED\_PRECONDITION status containing structured information as described at [https://cloud.google.com/kms/docs/reference/ekm\_errors](https://cloud.google.com/kms/docs/reference/ekm_errors).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   String name = EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString();
   VerifyConnectivityResponse response = ekmServiceClient.verifyConnectivity(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the EkmConnection to verify.

**Returns**

**Type**

**Description**

`[VerifyConnectivityResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityResponse)`

### verifyConnectivityCallable()

```
public final UnaryCallable<VerifyConnectivityRequest,VerifyConnectivityResponse> verifyConnectivityCallable()
```

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED\_PRECONDITION status containing structured information as described at [https://cloud.google.com/kms/docs/reference/ekm\_errors](https://cloud.google.com/kms/docs/reference/ekm_errors).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EkmServiceClient ekmServiceClient = EkmServiceClient.create()) {
   VerifyConnectivityRequest request =
       VerifyConnectivityRequest.newBuilder()
           .setName(
               EkmConnectionName.of("[PROJECT]", "[LOCATION]", "[EKM_CONNECTION]").toString())
           .build();
   ApiFuture<VerifyConnectivityResponse> future =
       ekmServiceClient.verifyConnectivityCallable().futureCall(request);
   // Do something.
   VerifyConnectivityResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[VerifyConnectivityRequest](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityRequest),[VerifyConnectivityResponse](/java/docs/reference/google-cloud-kms/2.26.0/com.google.cloud.kms.v1.VerifyConnectivityResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
