-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GkeHubClient (1.58.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-gkehub/google-cloud-gkehub/src/main/java/com/google/cloud/gkehub/v1beta/GkeHubClient.java)

[Product Reference](https://cloud.google.com/anthos/gke/docs/)

Service Description: The GKE Hub service handles the registration of many Kubernetes clusters to Google Cloud, and the management of multi-cluster features over those clusters.

The GKE Hub service operates on the following resources:

-   Membership
-   Feature

GKE Hub is currently only available in the global region.

\*\*Membership management may be non-trivial:\*\* it is recommended to use one of the Google-provided client libraries or tools where possible when working with Membership resources.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String name = "name3373707";
   Feature response = gkeHubClient.getFeature(name);
 }
 
```
 

Note: close() needs to be called on the GkeHubClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

ListFeatures

Lists Features in a given project and location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listFeatures(ListFeaturesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listFeatures(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listFeaturesPagedCallable()
    
-   listFeaturesCallable()
    

GetFeature

Gets details of a single Feature.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getFeature(GetFeatureRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getFeature(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getFeatureCallable()
    

CreateFeature

Adds a new Feature.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createFeatureAsync(CreateFeatureRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createFeatureAsync(String parent, Feature resource, String featureId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createFeatureOperationCallable()
    
-   createFeatureCallable()
    

DeleteFeature

Removes a Feature.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteFeatureAsync(DeleteFeatureRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteFeatureAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteFeatureOperationCallable()
    
-   deleteFeatureCallable()
    

UpdateFeature

Updates an existing Feature.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateFeatureAsync(UpdateFeatureRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   updateFeatureAsync(String name, Feature resource, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateFeatureOperationCallable()
    
-   updateFeatureCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of GkeHubSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 GkeHubSettings gkeHubSettings =
     GkeHubSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 GkeHubClient gkeHubClient = GkeHubClient.create(gkeHubSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 GkeHubSettings gkeHubSettings = GkeHubSettings.newBuilder().setEndpoint(myEndpoint).build();
 GkeHubClient gkeHubClient = GkeHubClient.create(gkeHubSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 GkeHubSettings gkeHubSettings = GkeHubSettings.newHttpJsonBuilder().build();
 GkeHubClient gkeHubClient = GkeHubClient.create(gkeHubSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> GkeHubClient

## Static Methods

### create()

```
public static final GkeHubClient create()
```

Constructs an instance of GkeHubClient with default settings.

**Returns**

**Type**

**Description**

`[GkeHubClient](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(GkeHubSettings settings)

```
public static final GkeHubClient create(GkeHubSettings settings)
```

Constructs an instance of GkeHubClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[GkeHubSettings](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubSettings)`  

**Returns**

**Type**

**Description**

`[GkeHubClient](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(GkeHubStub stub)

```
public static final GkeHubClient create(GkeHubStub stub)
```

Constructs an instance of GkeHubClient, using the given stub for making calls. This is for advanced usage - prefer using create(GkeHubSettings).

**Parameter**

**Name**

**Description**

`stub`

`[GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.stub.GkeHubStub)`  

**Returns**

**Type**

**Description**

`[GkeHubClient](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient)`

## Constructors

### GkeHubClient(GkeHubSettings settings)

```
protected GkeHubClient(GkeHubSettings settings)
```

Constructs an instance of GkeHubClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[GkeHubSettings](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubSettings)`  

### GkeHubClient(GkeHubStub stub)

```
protected GkeHubClient(GkeHubStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.stub.GkeHubStub)`  

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

### createFeatureAsync(CreateFeatureRequest request)

```
public final OperationFuture<Feature,OperationMetadata> createFeatureAsync(CreateFeatureRequest request)
```

Adds a new Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   CreateFeatureRequest request =
       CreateFeatureRequest.newBuilder()
           .setParent("parent-995424086")
           .setFeatureId("featureId-420503887")
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   Feature response = gkeHubClient.createFeatureAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.CreateFeatureRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### createFeatureAsync(String parent, Feature resource, String featureId)

```
public final OperationFuture<Feature,OperationMetadata> createFeatureAsync(String parent, Feature resource, String featureId)
```

Adds a new Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String parent = "parent-995424086";
   Feature resource = Feature.newBuilder().build();
   String featureId = "featureId-420503887";
   Feature response = gkeHubClient.createFeatureAsync(parent, resource, featureId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The parent (project and location) where the Feature will be created. Specified in the format `projects/*/locations/*`.

`resource`

`[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature)`  

The Feature resource to create.

`featureId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ID of the feature to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### createFeatureCallable()

```
public final UnaryCallable<CreateFeatureRequest,Operation> createFeatureCallable()
```

Adds a new Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   CreateFeatureRequest request =
       CreateFeatureRequest.newBuilder()
           .setParent("parent-995424086")
           .setFeatureId("featureId-420503887")
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<Operation> future = gkeHubClient.createFeatureCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.CreateFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createFeatureOperationCallable()

```
public final OperationCallable<CreateFeatureRequest,Feature,OperationMetadata> createFeatureOperationCallable()
```

Adds a new Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   CreateFeatureRequest request =
       CreateFeatureRequest.newBuilder()
           .setParent("parent-995424086")
           .setFeatureId("featureId-420503887")
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   OperationFuture<Feature, OperationMetadata> future =
       gkeHubClient.createFeatureOperationCallable().futureCall(request);
   // Do something.
   Feature response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.CreateFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### deleteFeatureAsync(DeleteFeatureRequest request)

```
public final OperationFuture<Empty,OperationMetadata> deleteFeatureAsync(DeleteFeatureRequest request)
```

Removes a Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   DeleteFeatureRequest request =
       DeleteFeatureRequest.newBuilder()
           .setName("name3373707")
           .setForce(true)
           .setRequestId("requestId693933066")
           .build();
   gkeHubClient.deleteFeatureAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.DeleteFeatureRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### deleteFeatureAsync(String name)

```
public final OperationFuture<Empty,OperationMetadata> deleteFeatureAsync(String name)
```

Removes a Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String name = "name3373707";
   gkeHubClient.deleteFeatureAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The Feature resource name in the format `projects/*/locations/*/features/*`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### deleteFeatureCallable()

```
public final UnaryCallable<DeleteFeatureRequest,Operation> deleteFeatureCallable()
```

Removes a Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   DeleteFeatureRequest request =
       DeleteFeatureRequest.newBuilder()
           .setName("name3373707")
           .setForce(true)
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<Operation> future = gkeHubClient.deleteFeatureCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.DeleteFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteFeatureOperationCallable()

```
public final OperationCallable<DeleteFeatureRequest,Empty,OperationMetadata> deleteFeatureOperationCallable()
```

Removes a Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   DeleteFeatureRequest request =
       DeleteFeatureRequest.newBuilder()
           .setName("name3373707")
           .setForce(true)
           .setRequestId("requestId693933066")
           .build();
   OperationFuture<Empty, OperationMetadata> future =
       gkeHubClient.deleteFeatureOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.DeleteFeatureRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### getFeature(GetFeatureRequest request)

```
public final Feature getFeature(GetFeatureRequest request)
```

Gets details of a single Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   GetFeatureRequest request = GetFeatureRequest.newBuilder().setName("name3373707").build();
   Feature response = gkeHubClient.getFeature(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GetFeatureRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature)`

### getFeature(String name)

```
public final Feature getFeature(String name)
```

Gets details of a single Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String name = "name3373707";
   Feature response = gkeHubClient.getFeature(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The Feature resource name in the format `projects/*/locations/*/features/*`

**Returns**

**Type**

**Description**

`[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature)`

### getFeatureCallable()

```
public final UnaryCallable<GetFeatureRequest,Feature> getFeatureCallable()
```

Gets details of a single Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   GetFeatureRequest request = GetFeatureRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Feature> future = gkeHubClient.getFeatureCallable().futureCall(request);
   // Do something.
   Feature response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GetFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature)>`

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
public final GkeHubSettings getSettings()
```

**Returns**

**Type**

**Description**

`[GkeHubSettings](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubSettings)`

### getStub()

```
public GkeHubStub getStub()
```

**Returns**

**Type**

**Description**

`[GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.stub.GkeHubStub)`

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

### listFeatures(ListFeaturesRequest request)

```
public final GkeHubClient.ListFeaturesPagedResponse listFeatures(ListFeaturesRequest request)
```

Lists Features in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   ListFeaturesRequest request =
       ListFeaturesRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (Feature element : gkeHubClient.listFeatures(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.ListFeaturesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GkeHubClient.ListFeaturesPagedResponse](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient.ListFeaturesPagedResponse)`

### listFeatures(String parent)

```
public final GkeHubClient.ListFeaturesPagedResponse listFeatures(String parent)
```

Lists Features in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String parent = "parent-995424086";
   for (Feature element : gkeHubClient.listFeatures(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The parent (project and location) where the Features will be listed. Specified in the format `projects/*/locations/*`.

**Returns**

**Type**

**Description**

`[GkeHubClient.ListFeaturesPagedResponse](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient.ListFeaturesPagedResponse)`

### listFeaturesCallable()

```
public final UnaryCallable<ListFeaturesRequest,ListFeaturesResponse> listFeaturesCallable()
```

Lists Features in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   ListFeaturesRequest request =
       ListFeaturesRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListFeaturesResponse response = gkeHubClient.listFeaturesCallable().call(request);
     for (Feature element : response.getResourcesList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFeaturesRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.ListFeaturesRequest),[ListFeaturesResponse](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.ListFeaturesResponse)>`

### listFeaturesPagedCallable()

```
public final UnaryCallable<ListFeaturesRequest,GkeHubClient.ListFeaturesPagedResponse> listFeaturesPagedCallable()
```

Lists Features in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   ListFeaturesRequest request =
       ListFeaturesRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<Feature> future = gkeHubClient.listFeaturesPagedCallable().futureCall(request);
   // Do something.
   for (Feature element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFeaturesRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.ListFeaturesRequest),[ListFeaturesPagedResponse](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.GkeHubClient.ListFeaturesPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateFeatureAsync(UpdateFeatureRequest request)

```
public final OperationFuture<Feature,OperationMetadata> updateFeatureAsync(UpdateFeatureRequest request)
```

Updates an existing Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   UpdateFeatureRequest request =
       UpdateFeatureRequest.newBuilder()
           .setName("name3373707")
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   Feature response = gkeHubClient.updateFeatureAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.UpdateFeatureRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### updateFeatureAsync(String name, Feature resource, FieldMask updateMask)

```
public final OperationFuture<Feature,OperationMetadata> updateFeatureAsync(String name, Feature resource, FieldMask updateMask)
```

Updates an existing Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   String name = "name3373707";
   Feature resource = Feature.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Feature response = gkeHubClient.updateFeatureAsync(name, resource, updateMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The Feature resource name in the format `projects/*/locations/*/features/*`.

`resource`

`[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature)`  

Only fields specified in update\_mask are updated. If you specify a field in the update\_mask but don't specify its value here that field will be deleted. If you are updating a map field, set the value of a key to null or empty string to delete the key from the map. It's not possible to update a key's value to the empty string. If you specify the update\_mask to be a special path "\*", fully replaces all user-modifiable fields to match `resource`.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Mask of fields to update.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

### updateFeatureCallable()

```
public final UnaryCallable<UpdateFeatureRequest,Operation> updateFeatureCallable()
```

Updates an existing Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   UpdateFeatureRequest request =
       UpdateFeatureRequest.newBuilder()
           .setName("name3373707")
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<Operation> future = gkeHubClient.updateFeatureCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.UpdateFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateFeatureOperationCallable()

```
public final OperationCallable<UpdateFeatureRequest,Feature,OperationMetadata> updateFeatureOperationCallable()
```

Updates an existing Feature.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (GkeHubClient gkeHubClient = GkeHubClient.create()) {
   UpdateFeatureRequest request =
       UpdateFeatureRequest.newBuilder()
           .setName("name3373707")
           .setUpdateMask(FieldMask.newBuilder().build())
           .setResource(Feature.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   OperationFuture<Feature, OperationMetadata> future =
       gkeHubClient.updateFeatureOperationCallable().futureCall(request);
   // Do something.
   Feature response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.UpdateFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.58.0/com.google.cloud.gkehub.v1beta.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
