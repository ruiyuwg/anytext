-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RevisionsClient (0.7.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public class RevisionsClient implements BackgroundResource
```

Service Description: Cloud Run Revision Control Plane API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   RevisionName name = RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]");
   Revision response = revisionsClient.getRevision(name);
 }
 
```
 

Note: close() needs to be called on the RevisionsClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of RevisionsSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RevisionsSettings revisionsSettings =
     RevisionsSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 RevisionsClient revisionsClient = RevisionsClient.create(revisionsSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RevisionsSettings revisionsSettings =
     RevisionsSettings.newBuilder().setEndpoint(myEndpoint).build();
 RevisionsClient revisionsClient = RevisionsClient.create(revisionsSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RevisionsSettings revisionsSettings = RevisionsSettings.newHttpJsonBuilder().build();
 RevisionsClient revisionsClient = RevisionsClient.create(revisionsSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> RevisionsClient

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
public static final RevisionsClient create()
```

Constructs an instance of RevisionsClient with default settings.

**Returns**

**Type**

**Description**

[RevisionsClient](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(RevisionsSettings settings)

```
public static final RevisionsClient create(RevisionsSettings settings)
```

Constructs an instance of RevisionsClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[RevisionsSettings](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsSettings)`  

**Returns**

**Type**

**Description**

[RevisionsClient](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(RevisionsStub stub)

```
public static final RevisionsClient create(RevisionsStub stub)
```

Constructs an instance of RevisionsClient, using the given stub for making calls. This is for advanced usage - prefer using create(RevisionsSettings).

**Parameter**

**Name**

**Description**

stub

`[RevisionsStub](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.stub.RevisionsStub)`  

**Returns**

**Type**

**Description**

[RevisionsClient](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient)

## Constructors

### RevisionsClient(RevisionsSettings settings)

```
protected RevisionsClient(RevisionsSettings settings)
```

Constructs an instance of RevisionsClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[RevisionsSettings](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsSettings)`  

### RevisionsClient(RevisionsStub stub)

```
protected RevisionsClient(RevisionsStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[RevisionsStub](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.stub.RevisionsStub)`  

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

### deleteRevisionAsync(DeleteRevisionRequest request)

```
public final OperationFuture<Revision,Revision> deleteRevisionAsync(DeleteRevisionRequest request)
```

Deletes a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   DeleteRevisionRequest request =
       DeleteRevisionRequest.newBuilder()
           .setName(
               RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   Revision response = revisionsClient.deleteRevisionAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteRevisionRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.DeleteRevisionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)\>

### deleteRevisionAsync(RevisionName name)

```
public final OperationFuture<Revision,Revision> deleteRevisionAsync(RevisionName name)
```

Deletes a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   RevisionName name = RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]");
   Revision response = revisionsClient.deleteRevisionAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[RevisionName](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionName)`  

Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)\>

### deleteRevisionAsync(String name)

```
public final OperationFuture<Revision,Revision> deleteRevisionAsync(String name)
```

Deletes a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   String name =
       RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString();
   Revision response = revisionsClient.deleteRevisionAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)\>

### deleteRevisionCallable()

```
public final UnaryCallable<DeleteRevisionRequest,Operation> deleteRevisionCallable()
```

Deletes a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   DeleteRevisionRequest request =
       DeleteRevisionRequest.newBuilder()
           .setName(
               RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   ApiFuture<Operation> future = revisionsClient.deleteRevisionCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteRevisionRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.DeleteRevisionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### deleteRevisionOperationCallable()

```
public final OperationCallable<DeleteRevisionRequest,Revision,Revision> deleteRevisionOperationCallable()
```

Deletes a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   DeleteRevisionRequest request =
       DeleteRevisionRequest.newBuilder()
           .setName(
               RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString())
           .setValidateOnly(true)
           .setEtag("etag3123477")
           .build();
   OperationFuture<Revision, Revision> future =
       revisionsClient.deleteRevisionOperationCallable().futureCall(request);
   // Do something.
   Revision response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteRevisionRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.DeleteRevisionRequest),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)\>

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)

### getRevision(GetRevisionRequest request)

```
public final Revision getRevision(GetRevisionRequest request)
```

Gets information about a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   GetRevisionRequest request =
       GetRevisionRequest.newBuilder()
           .setName(
               RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString())
           .build();
   Revision response = revisionsClient.getRevision(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetRevisionRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.GetRevisionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)

### getRevision(RevisionName name)

```
public final Revision getRevision(RevisionName name)
```

Gets information about a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   RevisionName name = RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]");
   Revision response = revisionsClient.getRevision(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[RevisionName](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionName)`  

Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}

**Returns**

**Type**

**Description**

[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)

### getRevision(String name)

```
public final Revision getRevision(String name)
```

Gets information about a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   String name =
       RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString();
   Revision response = revisionsClient.getRevision(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}

**Returns**

**Type**

**Description**

[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)

### getRevisionCallable()

```
public final UnaryCallable<GetRevisionRequest,Revision> getRevisionCallable()
```

Gets information about a Revision.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   GetRevisionRequest request =
       GetRevisionRequest.newBuilder()
           .setName(
               RevisionName.of("[PROJECT]", "[LOCATION]", "[SERVICE]", "[REVISION]").toString())
           .build();
   ApiFuture<Revision> future = revisionsClient.getRevisionCallable().futureCall(request);
   // Do something.
   Revision response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetRevisionRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.GetRevisionRequest),[Revision](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.Revision)\>

### getSettings()

```
public final RevisionsSettings getSettings()
```

**Returns**

**Type**

**Description**

[RevisionsSettings](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsSettings)

### getStub()

```
public RevisionsStub getStub()
```

**Returns**

**Type**

**Description**

[RevisionsStub](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.stub.RevisionsStub)

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

### listRevisions(ListRevisionsRequest request)

```
public final RevisionsClient.ListRevisionsPagedResponse listRevisions(ListRevisionsRequest request)
```

Lists Revisions from a given Service, or from a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   ListRevisionsRequest request =
       ListRevisionsRequest.newBuilder()
           .setParent(ServiceName.of("[PROJECT]", "[LOCATION]", "[SERVICE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   for (Revision element : revisionsClient.listRevisions(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListRevisionsRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.ListRevisionsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[RevisionsClient.ListRevisionsPagedResponse](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient.ListRevisionsPagedResponse)

### listRevisions(ServiceName parent)

```
public final RevisionsClient.ListRevisionsPagedResponse listRevisions(ServiceName parent)
```

Lists Revisions from a given Service, or from a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   ServiceName parent = ServiceName.of("[PROJECT]", "[LOCATION]", "[SERVICE]");
   for (Revision element : revisionsClient.listRevisions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[ServiceName](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.ServiceName)`  

Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}

**Returns**

**Type**

**Description**

[RevisionsClient.ListRevisionsPagedResponse](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient.ListRevisionsPagedResponse)

### listRevisions(String parent)

```
public final RevisionsClient.ListRevisionsPagedResponse listRevisions(String parent)
```

Lists Revisions from a given Service, or from a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   String parent = ServiceName.of("[PROJECT]", "[LOCATION]", "[SERVICE]").toString();
   for (Revision element : revisionsClient.listRevisions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}

**Returns**

**Type**

**Description**

[RevisionsClient.ListRevisionsPagedResponse](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient.ListRevisionsPagedResponse)

### listRevisionsCallable()

```
public final UnaryCallable<ListRevisionsRequest,ListRevisionsResponse> listRevisionsCallable()
```

Lists Revisions from a given Service, or from a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   ListRevisionsRequest request =
       ListRevisionsRequest.newBuilder()
           .setParent(ServiceName.of("[PROJECT]", "[LOCATION]", "[SERVICE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   while (true) {
     ListRevisionsResponse response = revisionsClient.listRevisionsCallable().call(request);
     for (Revision element : response.getRevisionsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRevisionsRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.ListRevisionsRequest),[ListRevisionsResponse](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.ListRevisionsResponse)\>

### listRevisionsPagedCallable()

```
public final UnaryCallable<ListRevisionsRequest,RevisionsClient.ListRevisionsPagedResponse> listRevisionsPagedCallable()
```

Lists Revisions from a given Service, or from a given location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RevisionsClient revisionsClient = RevisionsClient.create()) {
   ListRevisionsRequest request =
       ListRevisionsRequest.newBuilder()
           .setParent(ServiceName.of("[PROJECT]", "[LOCATION]", "[SERVICE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   ApiFuture<Revision> future = revisionsClient.listRevisionsPagedCallable().futureCall(request);
   // Do something.
   for (Revision element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRevisionsRequest](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.ListRevisionsRequest),[ListRevisionsPagedResponse](/java/docs/reference/google-cloud-run/0.7.0/com.google.cloud.run.v2.RevisionsClient.ListRevisionsPagedResponse)\>

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
