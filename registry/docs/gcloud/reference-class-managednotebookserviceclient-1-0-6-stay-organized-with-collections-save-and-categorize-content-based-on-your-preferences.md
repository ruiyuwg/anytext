-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ManagedNotebookServiceClient (1.0.6) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public class ManagedNotebookServiceClient implements BackgroundResource
```

Service Description: API v1 service for Managed Notebooks.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   RuntimeName name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]");
   Runtime response = managedNotebookServiceClient.getRuntime(name);
 }
 
```
 

Note: close() needs to be called on the ManagedNotebookServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ManagedNotebookServiceSettings to create(). For example:

To customize credentials:

 ```

 ManagedNotebookServiceSettings managedNotebookServiceSettings =
     ManagedNotebookServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create(managedNotebookServiceSettings);
 
```
 

To customize the endpoint:

 ```

 ManagedNotebookServiceSettings managedNotebookServiceSettings =
     ManagedNotebookServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create(managedNotebookServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ManagedNotebookServiceClient

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
public static final ManagedNotebookServiceClient create()
```

Constructs an instance of ManagedNotebookServiceClient with default settings.

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ManagedNotebookServiceSettings settings)

```
public static final ManagedNotebookServiceClient create(ManagedNotebookServiceSettings settings)
```

Constructs an instance of ManagedNotebookServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[ManagedNotebookServiceSettings](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceSettings)`  

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ManagedNotebookServiceStub stub)

```
public static final ManagedNotebookServiceClient create(ManagedNotebookServiceStub stub)
```

Constructs an instance of ManagedNotebookServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(ManagedNotebookServiceSettings).

**Parameter**

**Name**

**Description**

stub

`[ManagedNotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.stub.ManagedNotebookServiceStub)`  

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient)

## Constructors

### ManagedNotebookServiceClient(ManagedNotebookServiceSettings settings)

```
protected ManagedNotebookServiceClient(ManagedNotebookServiceSettings settings)
```

Constructs an instance of ManagedNotebookServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[ManagedNotebookServiceSettings](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceSettings)`  

### ManagedNotebookServiceClient(ManagedNotebookServiceStub stub)

```
protected ManagedNotebookServiceClient(ManagedNotebookServiceStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[ManagedNotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.stub.ManagedNotebookServiceStub)`  

## Methods

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

### createRuntimeAsync(CreateRuntimeRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> createRuntimeAsync(CreateRuntimeRequest request)
```

Creates a new Runtime in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   CreateRuntimeRequest request =
       CreateRuntimeRequest.newBuilder()
           .setParent(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setRuntimeId("runtimeId121455379")
           .setRuntime(Runtime.newBuilder().build())
           .build();
   Runtime response = managedNotebookServiceClient.createRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.CreateRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### createRuntimeAsync(RuntimeName parent, String runtimeId, Runtime runtime)

```
public final OperationFuture<Runtime,OperationMetadata> createRuntimeAsync(RuntimeName parent, String runtimeId, Runtime runtime)
```

Creates a new Runtime in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   RuntimeName parent = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]");
   String runtimeId = "runtimeId121455379";
   Runtime runtime = Runtime.newBuilder().build();
   Runtime response =
       managedNotebookServiceClient.createRuntimeAsync(parent, runtimeId, runtime).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[RuntimeName](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.RuntimeName)`  

Required. Format: `parent=projects/{project_id}/locations/{location}`

runtimeId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. User-defined unique ID of this Runtime.

runtime

`[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)`  

Required. The Runtime to be created.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### createRuntimeAsync(String parent, String runtimeId, Runtime runtime)

```
public final OperationFuture<Runtime,OperationMetadata> createRuntimeAsync(String parent, String runtimeId, Runtime runtime)
```

Creates a new Runtime in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String parent = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString();
   String runtimeId = "runtimeId121455379";
   Runtime runtime = Runtime.newBuilder().build();
   Runtime response =
       managedNotebookServiceClient.createRuntimeAsync(parent, runtimeId, runtime).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `parent=projects/{project_id}/locations/{location}`

runtimeId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. User-defined unique ID of this Runtime.

runtime

`[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)`  

Required. The Runtime to be created.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### createRuntimeCallable()

```
public final UnaryCallable<CreateRuntimeRequest,Operation> createRuntimeCallable()
```

Creates a new Runtime in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   CreateRuntimeRequest request =
       CreateRuntimeRequest.newBuilder()
           .setParent(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setRuntimeId("runtimeId121455379")
           .setRuntime(Runtime.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.createRuntimeCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.CreateRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### createRuntimeOperationCallable()

```
public final OperationCallable<CreateRuntimeRequest,Runtime,OperationMetadata> createRuntimeOperationCallable()
```

Creates a new Runtime in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   CreateRuntimeRequest request =
       CreateRuntimeRequest.newBuilder()
           .setParent(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setRuntimeId("runtimeId121455379")
           .setRuntime(Runtime.newBuilder().build())
           .build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.createRuntimeOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.CreateRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### deleteRuntimeAsync(DeleteRuntimeRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteRuntimeAsync(DeleteRuntimeRequest request)
```

Deletes a single Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   DeleteRuntimeRequest request =
       DeleteRuntimeRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .build();
   managedNotebookServiceClient.deleteRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.DeleteRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### deleteRuntimeAsync(RuntimeName name)

```
public final OperationFuture<Empty,OperationMetadata> deleteRuntimeAsync(RuntimeName name)
```

Deletes a single Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   RuntimeName name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]");
   managedNotebookServiceClient.deleteRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[RuntimeName](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.RuntimeName)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### deleteRuntimeAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteRuntimeAsync(String name)
```

Deletes a single Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString();
   managedNotebookServiceClient.deleteRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### deleteRuntimeCallable()

```
public final UnaryCallable<DeleteRuntimeRequest,Operation> deleteRuntimeCallable()
```

Deletes a single Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   DeleteRuntimeRequest request =
       DeleteRuntimeRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.deleteRuntimeCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.DeleteRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### deleteRuntimeOperationCallable()

```
public final OperationCallable<DeleteRuntimeRequest,Empty,OperationMetadata> deleteRuntimeOperationCallable()
```

Deletes a single Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   DeleteRuntimeRequest request =
       DeleteRuntimeRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .build();
   OperationFuture<Empty, OperationMetadata> future =
       managedNotebookServiceClient.deleteRuntimeOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.DeleteRuntimeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)

### getRuntime(GetRuntimeRequest request)

```
public final Runtime getRuntime(GetRuntimeRequest request)
```

Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   GetRuntimeRequest request =
       GetRuntimeRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .build();
   Runtime response = managedNotebookServiceClient.getRuntime(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.GetRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)

### getRuntime(RuntimeName name)

```
public final Runtime getRuntime(RuntimeName name)
```

Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   RuntimeName name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]");
   Runtime response = managedNotebookServiceClient.getRuntime(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[RuntimeName](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.RuntimeName)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)

### getRuntime(String name)

```
public final Runtime getRuntime(String name)
```

Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString();
   Runtime response = managedNotebookServiceClient.getRuntime(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)

### getRuntimeCallable()

```
public final UnaryCallable<GetRuntimeRequest,Runtime> getRuntimeCallable()
```

Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   GetRuntimeRequest request =
       GetRuntimeRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .build();
   ApiFuture<Runtime> future =
       managedNotebookServiceClient.getRuntimeCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.GetRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime)\>

### getSettings()

```
public final ManagedNotebookServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

[ManagedNotebookServiceSettings](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceSettings)

### getStub()

```
public ManagedNotebookServiceStub getStub()
```

**Returns**

**Type**

**Description**

[ManagedNotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.stub.ManagedNotebookServiceStub)

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

### listRuntimes(ListRuntimesRequest request)

```
public final ManagedNotebookServiceClient.ListRuntimesPagedResponse listRuntimes(ListRuntimesRequest request)
```

Lists Runtimes in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ListRuntimesRequest request =
       ListRuntimesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Runtime element : managedNotebookServiceClient.listRuntimes(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListRuntimesRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ListRuntimesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient.ListRuntimesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient.ListRuntimesPagedResponse)

### listRuntimes(LocationName parent)

```
public final ManagedNotebookServiceClient.ListRuntimesPagedResponse listRuntimes(LocationName parent)
```

Lists Runtimes in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (Runtime element : managedNotebookServiceClient.listRuntimes(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[LocationName](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.LocationName)`  

Required. Format: `parent=projects/{project_id}/locations/{location}`

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient.ListRuntimesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient.ListRuntimesPagedResponse)

### listRuntimes(String parent)

```
public final ManagedNotebookServiceClient.ListRuntimesPagedResponse listRuntimes(String parent)
```

Lists Runtimes in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (Runtime element : managedNotebookServiceClient.listRuntimes(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `parent=projects/{project_id}/locations/{location}`

**Returns**

**Type**

**Description**

[ManagedNotebookServiceClient.ListRuntimesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient.ListRuntimesPagedResponse)

### listRuntimesCallable()

```
public final UnaryCallable<ListRuntimesRequest,ListRuntimesResponse> listRuntimesCallable()
```

Lists Runtimes in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ListRuntimesRequest request =
       ListRuntimesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListRuntimesResponse response =
         managedNotebookServiceClient.listRuntimesCallable().call(request);
     for (Runtime element : response.getResponsesList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRuntimesRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ListRuntimesRequest),[ListRuntimesResponse](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ListRuntimesResponse)\>

### listRuntimesPagedCallable()

```
public final UnaryCallable<ListRuntimesRequest,ManagedNotebookServiceClient.ListRuntimesPagedResponse> listRuntimesPagedCallable()
```

Lists Runtimes in a given project and location.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ListRuntimesRequest request =
       ListRuntimesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Runtime> future =
       managedNotebookServiceClient.listRuntimesPagedCallable().futureCall(request);
   // Do something.
   for (Runtime element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRuntimesRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ListRuntimesRequest),[ListRuntimesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ManagedNotebookServiceClient.ListRuntimesPagedResponse)\>

### reportRuntimeEventAsync(ReportRuntimeEventRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> reportRuntimeEventAsync(ReportRuntimeEventRequest request)
```

Report and process a runtime event.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ReportRuntimeEventRequest request =
       ReportRuntimeEventRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setVmId("vmId3622450")
           .setEvent(Event.newBuilder().build())
           .build();
   Runtime response = managedNotebookServiceClient.reportRuntimeEventAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ReportRuntimeEventRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ReportRuntimeEventRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### reportRuntimeEventAsync(RuntimeName name)

```
public final OperationFuture<Runtime,OperationMetadata> reportRuntimeEventAsync(RuntimeName name)
```

Report and process a runtime event.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   RuntimeName name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]");
   Runtime response = managedNotebookServiceClient.reportRuntimeEventAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[RuntimeName](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.RuntimeName)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### reportRuntimeEventAsync(String name)

```
public final OperationFuture<Runtime,OperationMetadata> reportRuntimeEventAsync(String name)
```

Report and process a runtime event.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString();
   Runtime response = managedNotebookServiceClient.reportRuntimeEventAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### reportRuntimeEventCallable()

```
public final UnaryCallable<ReportRuntimeEventRequest,Operation> reportRuntimeEventCallable()
```

Report and process a runtime event.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ReportRuntimeEventRequest request =
       ReportRuntimeEventRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setVmId("vmId3622450")
           .setEvent(Event.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.reportRuntimeEventCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ReportRuntimeEventRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ReportRuntimeEventRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### reportRuntimeEventOperationCallable()

```
public final OperationCallable<ReportRuntimeEventRequest,Runtime,OperationMetadata> reportRuntimeEventOperationCallable()
```

Report and process a runtime event.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ReportRuntimeEventRequest request =
       ReportRuntimeEventRequest.newBuilder()
           .setName(RuntimeName.of("[PROJECT]", "[LOCATION]", "[RUNTIME]").toString())
           .setVmId("vmId3622450")
           .setEvent(Event.newBuilder().build())
           .build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.reportRuntimeEventOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ReportRuntimeEventRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ReportRuntimeEventRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### resetRuntimeAsync(ResetRuntimeRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> resetRuntimeAsync(ResetRuntimeRequest request)
```

Resets a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ResetRuntimeRequest request = ResetRuntimeRequest.newBuilder().setName("name3373707").build();
   Runtime response = managedNotebookServiceClient.resetRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ResetRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ResetRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### resetRuntimeAsync(String name)

```
public final OperationFuture<Runtime,OperationMetadata> resetRuntimeAsync(String name)
```

Resets a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = "name3373707";
   Runtime response = managedNotebookServiceClient.resetRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### resetRuntimeCallable()

```
public final UnaryCallable<ResetRuntimeRequest,Operation> resetRuntimeCallable()
```

Resets a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ResetRuntimeRequest request = ResetRuntimeRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.resetRuntimeCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ResetRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ResetRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### resetRuntimeOperationCallable()

```
public final OperationCallable<ResetRuntimeRequest,Runtime,OperationMetadata> resetRuntimeOperationCallable()
```

Resets a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   ResetRuntimeRequest request = ResetRuntimeRequest.newBuilder().setName("name3373707").build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.resetRuntimeOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ResetRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.ResetRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### startRuntimeAsync(StartRuntimeRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> startRuntimeAsync(StartRuntimeRequest request)
```

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StartRuntimeRequest request = StartRuntimeRequest.newBuilder().setName("name3373707").build();
   Runtime response = managedNotebookServiceClient.startRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[StartRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StartRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### startRuntimeAsync(String name)

```
public final OperationFuture<Runtime,OperationMetadata> startRuntimeAsync(String name)
```

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = "name3373707";
   Runtime response = managedNotebookServiceClient.startRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### startRuntimeCallable()

```
public final UnaryCallable<StartRuntimeRequest,Operation> startRuntimeCallable()
```

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StartRuntimeRequest request = StartRuntimeRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.startRuntimeCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StartRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StartRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### startRuntimeOperationCallable()

```
public final OperationCallable<StartRuntimeRequest,Runtime,OperationMetadata> startRuntimeOperationCallable()
```

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StartRuntimeRequest request = StartRuntimeRequest.newBuilder().setName("name3373707").build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.startRuntimeOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[StartRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StartRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### stopRuntimeAsync(StopRuntimeRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> stopRuntimeAsync(StopRuntimeRequest request)
```

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StopRuntimeRequest request = StopRuntimeRequest.newBuilder().setName("name3373707").build();
   Runtime response = managedNotebookServiceClient.stopRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[StopRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StopRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### stopRuntimeAsync(String name)

```
public final OperationFuture<Runtime,OperationMetadata> stopRuntimeAsync(String name)
```

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = "name3373707";
   Runtime response = managedNotebookServiceClient.stopRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### stopRuntimeCallable()

```
public final UnaryCallable<StopRuntimeRequest,Operation> stopRuntimeCallable()
```

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StopRuntimeRequest request = StopRuntimeRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.stopRuntimeCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StopRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### stopRuntimeOperationCallable()

```
public final OperationCallable<StopRuntimeRequest,Runtime,OperationMetadata> stopRuntimeOperationCallable()
```

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: [https://cloud.google.com/compute/docs/instances/stop-start-instance](https://cloud.google.com/compute/docs/instances/stop-start-instance) [https://cloud.google.com/compute/docs/instances/suspend-resume-instance](https://cloud.google.com/compute/docs/instances/suspend-resume-instance)

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   StopRuntimeRequest request = StopRuntimeRequest.newBuilder().setName("name3373707").build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.stopRuntimeOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[StopRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.StopRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### switchRuntimeAsync(SwitchRuntimeRequest request)

```
public final OperationFuture<Runtime,OperationMetadata> switchRuntimeAsync(SwitchRuntimeRequest request)
```

Switch a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   SwitchRuntimeRequest request =
       SwitchRuntimeRequest.newBuilder()
           .setName("name3373707")
           .setMachineType("machineType-218117087")
           .setAcceleratorConfig(RuntimeAcceleratorConfig.newBuilder().build())
           .build();
   Runtime response = managedNotebookServiceClient.switchRuntimeAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[SwitchRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.SwitchRuntimeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### switchRuntimeAsync(String name)

```
public final OperationFuture<Runtime,OperationMetadata> switchRuntimeAsync(String name)
```

Switch a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   String name = "name3373707";
   Runtime response = managedNotebookServiceClient.switchRuntimeAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

### switchRuntimeCallable()

```
public final UnaryCallable<SwitchRuntimeRequest,Operation> switchRuntimeCallable()
```

Switch a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   SwitchRuntimeRequest request =
       SwitchRuntimeRequest.newBuilder()
           .setName("name3373707")
           .setMachineType("machineType-218117087")
           .setAcceleratorConfig(RuntimeAcceleratorConfig.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       managedNotebookServiceClient.switchRuntimeCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SwitchRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.SwitchRuntimeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### switchRuntimeOperationCallable()

```
public final OperationCallable<SwitchRuntimeRequest,Runtime,OperationMetadata> switchRuntimeOperationCallable()
```

Switch a Managed Notebook Runtime.

Sample code:

 ```

 try (ManagedNotebookServiceClient managedNotebookServiceClient =
     ManagedNotebookServiceClient.create()) {
   SwitchRuntimeRequest request =
       SwitchRuntimeRequest.newBuilder()
           .setName("name3373707")
           .setMachineType("machineType-218117087")
           .setAcceleratorConfig(RuntimeAcceleratorConfig.newBuilder().build())
           .build();
   OperationFuture<Runtime, OperationMetadata> future =
       managedNotebookServiceClient.switchRuntimeOperationCallable().futureCall(request);
   // Do something.
   Runtime response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[SwitchRuntimeRequest](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.SwitchRuntimeRequest),[Runtime](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.Runtime),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.0.6/com.google.cloud.notebooks.v1.OperationMetadata)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
