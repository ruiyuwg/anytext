-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class StorageInsightsClient (0.37.0) Stay organized with collections Save and categorize content based on your preferences.

0.72.0 (latest) 0.70.0 0.68.0 0.67.0 0.65.0 0.63.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.53.0 0.52.0 0.49.0 0.48.0 0.47.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-storageinsights/google-cloud-storageinsights/src/main/java/com/google/cloud/storageinsights/v1/StorageInsightsClient.java)

[Product Reference](https://cloud.google.com/storage/docs/insights/storage-insights/)

Service Description: Service describing handlers for resources

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportConfigName name = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]");
   ReportConfig response = storageInsightsClient.getReportConfig(name);
 }
 
```
 

Note: close() needs to be called on the StorageInsightsClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

ListReportConfigs

Lists ReportConfigs in a given project and location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listReportConfigs(ListReportConfigsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listReportConfigs(LocationName parent)
    
-   listReportConfigs(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listReportConfigsPagedCallable()
    
-   listReportConfigsCallable()
    

GetReportConfig

Gets details of a single ReportConfig.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getReportConfig(GetReportConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getReportConfig(ReportConfigName name)
    
-   getReportConfig(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getReportConfigCallable()
    

CreateReportConfig

Creates a new ReportConfig in a given project and location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createReportConfig(CreateReportConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   createReportConfig(LocationName parent, ReportConfig reportConfig)
    
-   createReportConfig(String parent, ReportConfig reportConfig)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createReportConfigCallable()
    

UpdateReportConfig

Updates the parameters of a single ReportConfig.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateReportConfig(UpdateReportConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updateReportConfig(ReportConfig reportConfig, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateReportConfigCallable()
    

DeleteReportConfig

Deletes a single ReportConfig.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteReportConfig(DeleteReportConfigRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deleteReportConfig(ReportConfigName name)
    
-   deleteReportConfig(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteReportConfigCallable()
    

ListReportDetails

Lists ReportDetails in a given project and location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listReportDetails(ListReportDetailsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listReportDetails(ReportConfigName parent)
    
-   listReportDetails(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listReportDetailsPagedCallable()
    
-   listReportDetailsCallable()
    

GetReportDetail

Gets details of a single ReportDetail.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getReportDetail(GetReportDetailRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getReportDetail(ReportDetailName name)
    
-   getReportDetail(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getReportDetailCallable()
    

ListLocations

Lists information about the supported locations for this service.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listLocations(ListLocationsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listLocationsPagedCallable()
    
-   listLocationsCallable()
    

GetLocation

Gets information about a location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getLocation(GetLocationRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getLocationCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of StorageInsightsSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageInsightsSettings storageInsightsSettings =
     StorageInsightsSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 StorageInsightsClient storageInsightsClient =
     StorageInsightsClient.create(storageInsightsSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageInsightsSettings storageInsightsSettings =
     StorageInsightsSettings.newBuilder().setEndpoint(myEndpoint).build();
 StorageInsightsClient storageInsightsClient =
     StorageInsightsClient.create(storageInsightsSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageInsightsSettings storageInsightsSettings =
     StorageInsightsSettings.newHttpJsonBuilder().build();
 StorageInsightsClient storageInsightsClient =
     StorageInsightsClient.create(storageInsightsSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> StorageInsightsClient

## Static Methods

### create()

```
public static final StorageInsightsClient create()
```

Constructs an instance of StorageInsightsClient with default settings.

**Returns**

**Type**

**Description**

`[StorageInsightsClient](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(StorageInsightsSettings settings)

```
public static final StorageInsightsClient create(StorageInsightsSettings settings)
```

Constructs an instance of StorageInsightsClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[StorageInsightsSettings](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsSettings)`  

**Returns**

**Type**

**Description**

`[StorageInsightsClient](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(StorageInsightsStub stub)

```
public static final StorageInsightsClient create(StorageInsightsStub stub)
```

Constructs an instance of StorageInsightsClient, using the given stub for making calls. This is for advanced usage - prefer using create(StorageInsightsSettings).

**Parameter**

**Name**

**Description**

`stub`

`[StorageInsightsStub](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.stub.StorageInsightsStub)`  

**Returns**

**Type**

**Description**

`[StorageInsightsClient](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient)`

## Constructors

### StorageInsightsClient(StorageInsightsSettings settings)

```
protected StorageInsightsClient(StorageInsightsSettings settings)
```

Constructs an instance of StorageInsightsClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[StorageInsightsSettings](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsSettings)`  

### StorageInsightsClient(StorageInsightsStub stub)

```
protected StorageInsightsClient(StorageInsightsStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[StorageInsightsStub](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.stub.StorageInsightsStub)`  

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

### createReportConfig(CreateReportConfigRequest request)

```
public final ReportConfig createReportConfig(CreateReportConfigRequest request)
```

Creates a new ReportConfig in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   CreateReportConfigRequest request =
       CreateReportConfigRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setReportConfig(ReportConfig.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ReportConfig response = storageInsightsClient.createReportConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.CreateReportConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### createReportConfig(LocationName parent, ReportConfig reportConfig)

```
public final ReportConfig createReportConfig(LocationName parent, ReportConfig reportConfig)
```

Creates a new ReportConfig in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   ReportConfig reportConfig = ReportConfig.newBuilder().build();
   ReportConfig response = storageInsightsClient.createReportConfig(parent, reportConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.LocationName)`  

Required. Value for parent.

`reportConfig`

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`  

Required. The resource being created

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### createReportConfig(String parent, ReportConfig reportConfig)

```
public final ReportConfig createReportConfig(String parent, ReportConfig reportConfig)
```

Creates a new ReportConfig in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   ReportConfig reportConfig = ReportConfig.newBuilder().build();
   ReportConfig response = storageInsightsClient.createReportConfig(parent, reportConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Value for parent.

`reportConfig`

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`  

Required. The resource being created

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### createReportConfigCallable()

```
public final UnaryCallable<CreateReportConfigRequest,ReportConfig> createReportConfigCallable()
```

Creates a new ReportConfig in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   CreateReportConfigRequest request =
       CreateReportConfigRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setReportConfig(ReportConfig.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<ReportConfig> future =
       storageInsightsClient.createReportConfigCallable().futureCall(request);
   // Do something.
   ReportConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.CreateReportConfigRequest),[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)>`

### deleteReportConfig(DeleteReportConfigRequest request)

```
public final void deleteReportConfig(DeleteReportConfigRequest request)
```

Deletes a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   DeleteReportConfigRequest request =
       DeleteReportConfigRequest.newBuilder()
           .setName(ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .setForce(true)
           .setRequestId("requestId693933066")
           .build();
   storageInsightsClient.deleteReportConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.DeleteReportConfigRequest)`  

The request object containing all of the parameters for the API call.

### deleteReportConfig(ReportConfigName name)

```
public final void deleteReportConfig(ReportConfigName name)
```

Deletes a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportConfigName name = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]");
   storageInsightsClient.deleteReportConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ReportConfigName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfigName)`  

Required. Name of the resource

### deleteReportConfig(String name)

```
public final void deleteReportConfig(String name)
```

Deletes a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String name = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString();
   storageInsightsClient.deleteReportConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the resource

### deleteReportConfigCallable()

```
public final UnaryCallable<DeleteReportConfigRequest,Empty> deleteReportConfigCallable()
```

Deletes a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   DeleteReportConfigRequest request =
       DeleteReportConfigRequest.newBuilder()
           .setName(ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .setForce(true)
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<Empty> future =
       storageInsightsClient.deleteReportConfigCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.DeleteReportConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

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
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   Location response = storageInsightsClient.getLocation(request);
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
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Location> future = storageInsightsClient.getLocationCallable().futureCall(request);
   // Do something.
   Location response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getReportConfig(GetReportConfigRequest request)

```
public final ReportConfig getReportConfig(GetReportConfigRequest request)
```

Gets details of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetReportConfigRequest request =
       GetReportConfigRequest.newBuilder()
           .setName(ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .build();
   ReportConfig response = storageInsightsClient.getReportConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.GetReportConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### getReportConfig(ReportConfigName name)

```
public final ReportConfig getReportConfig(ReportConfigName name)
```

Gets details of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportConfigName name = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]");
   ReportConfig response = storageInsightsClient.getReportConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ReportConfigName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfigName)`  

Required. Name of the resource

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### getReportConfig(String name)

```
public final ReportConfig getReportConfig(String name)
```

Gets details of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String name = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString();
   ReportConfig response = storageInsightsClient.getReportConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the resource

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### getReportConfigCallable()

```
public final UnaryCallable<GetReportConfigRequest,ReportConfig> getReportConfigCallable()
```

Gets details of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetReportConfigRequest request =
       GetReportConfigRequest.newBuilder()
           .setName(ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .build();
   ApiFuture<ReportConfig> future =
       storageInsightsClient.getReportConfigCallable().futureCall(request);
   // Do something.
   ReportConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.GetReportConfigRequest),[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)>`

### getReportDetail(GetReportDetailRequest request)

```
public final ReportDetail getReportDetail(GetReportDetailRequest request)
```

Gets details of a single ReportDetail.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetReportDetailRequest request =
       GetReportDetailRequest.newBuilder()
           .setName(
               ReportDetailName.of(
                       "[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]", "[REPORT_DETAIL]")
                   .toString())
           .build();
   ReportDetail response = storageInsightsClient.getReportDetail(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetReportDetailRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.GetReportDetailRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReportDetail](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportDetail)`

### getReportDetail(ReportDetailName name)

```
public final ReportDetail getReportDetail(ReportDetailName name)
```

Gets details of a single ReportDetail.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportDetailName name =
       ReportDetailName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]", "[REPORT_DETAIL]");
   ReportDetail response = storageInsightsClient.getReportDetail(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ReportDetailName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportDetailName)`  

Required. Name of the resource

**Returns**

**Type**

**Description**

`[ReportDetail](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportDetail)`

### getReportDetail(String name)

```
public final ReportDetail getReportDetail(String name)
```

Gets details of a single ReportDetail.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String name =
       ReportDetailName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]", "[REPORT_DETAIL]")
           .toString();
   ReportDetail response = storageInsightsClient.getReportDetail(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the resource

**Returns**

**Type**

**Description**

`[ReportDetail](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportDetail)`

### getReportDetailCallable()

```
public final UnaryCallable<GetReportDetailRequest,ReportDetail> getReportDetailCallable()
```

Gets details of a single ReportDetail.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   GetReportDetailRequest request =
       GetReportDetailRequest.newBuilder()
           .setName(
               ReportDetailName.of(
                       "[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]", "[REPORT_DETAIL]")
                   .toString())
           .build();
   ApiFuture<ReportDetail> future =
       storageInsightsClient.getReportDetailCallable().futureCall(request);
   // Do something.
   ReportDetail response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetReportDetailRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.GetReportDetailRequest),[ReportDetail](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportDetail)>`

### getSettings()

```
public final StorageInsightsSettings getSettings()
```

**Returns**

**Type**

**Description**

`[StorageInsightsSettings](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsSettings)`

### getStub()

```
public StorageInsightsStub getStub()
```

**Returns**

**Type**

**Description**

`[StorageInsightsStub](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.stub.StorageInsightsStub)`

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

### listLocations(ListLocationsRequest request)

```
public final StorageInsightsClient.ListLocationsPagedResponse listLocations(ListLocationsRequest request)
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Location element : storageInsightsClient.listLocations(request).iterateAll()) {
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

`[StorageInsightsClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListLocationsPagedResponse)`

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
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListLocationsResponse response =
         storageInsightsClient.listLocationsCallable().call(request);
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
public final UnaryCallable<ListLocationsRequest,StorageInsightsClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Location> future =
       storageInsightsClient.listLocationsPagedCallable().futureCall(request);
   // Do something.
   for (Location element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListLocationsPagedResponse)>`

### listReportConfigs(ListReportConfigsRequest request)

```
public final StorageInsightsClient.ListReportConfigsPagedResponse listReportConfigs(ListReportConfigsRequest request)
```

Lists ReportConfigs in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportConfigsRequest request =
       ListReportConfigsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (ReportConfig element : storageInsightsClient.listReportConfigs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListReportConfigsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportConfigsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportConfigsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportConfigsPagedResponse)`

### listReportConfigs(LocationName parent)

```
public final StorageInsightsClient.ListReportConfigsPagedResponse listReportConfigs(LocationName parent)
```

Lists ReportConfigs in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (ReportConfig element : storageInsightsClient.listReportConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.LocationName)`  

Required. Parent value for ListReportConfigsRequest

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportConfigsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportConfigsPagedResponse)`

### listReportConfigs(String parent)

```
public final StorageInsightsClient.ListReportConfigsPagedResponse listReportConfigs(String parent)
```

Lists ReportConfigs in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (ReportConfig element : storageInsightsClient.listReportConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent value for ListReportConfigsRequest

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportConfigsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportConfigsPagedResponse)`

### listReportConfigsCallable()

```
public final UnaryCallable<ListReportConfigsRequest,ListReportConfigsResponse> listReportConfigsCallable()
```

Lists ReportConfigs in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportConfigsRequest request =
       ListReportConfigsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListReportConfigsResponse response =
         storageInsightsClient.listReportConfigsCallable().call(request);
     for (ReportConfig element : response.getReportConfigsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListReportConfigsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportConfigsRequest),[ListReportConfigsResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportConfigsResponse)>`

### listReportConfigsPagedCallable()

```
public final UnaryCallable<ListReportConfigsRequest,StorageInsightsClient.ListReportConfigsPagedResponse> listReportConfigsPagedCallable()
```

Lists ReportConfigs in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportConfigsRequest request =
       ListReportConfigsRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<ReportConfig> future =
       storageInsightsClient.listReportConfigsPagedCallable().futureCall(request);
   // Do something.
   for (ReportConfig element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListReportConfigsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportConfigsRequest),[ListReportConfigsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportConfigsPagedResponse)>`

### listReportDetails(ListReportDetailsRequest request)

```
public final StorageInsightsClient.ListReportDetailsPagedResponse listReportDetails(ListReportDetailsRequest request)
```

Lists ReportDetails in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportDetailsRequest request =
       ListReportDetailsRequest.newBuilder()
           .setParent(
               ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   for (ReportDetail element : storageInsightsClient.listReportDetails(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListReportDetailsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportDetailsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportDetailsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportDetailsPagedResponse)`

### listReportDetails(ReportConfigName parent)

```
public final StorageInsightsClient.ListReportDetailsPagedResponse listReportDetails(ReportConfigName parent)
```

Lists ReportDetails in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportConfigName parent = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]");
   for (ReportDetail element : storageInsightsClient.listReportDetails(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ReportConfigName](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfigName)`  

Required. Parent value for ListReportDetailsRequest

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportDetailsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportDetailsPagedResponse)`

### listReportDetails(String parent)

```
public final StorageInsightsClient.ListReportDetailsPagedResponse listReportDetails(String parent)
```

Lists ReportDetails in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   String parent = ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString();
   for (ReportDetail element : storageInsightsClient.listReportDetails(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Parent value for ListReportDetailsRequest

**Returns**

**Type**

**Description**

`[StorageInsightsClient.ListReportDetailsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportDetailsPagedResponse)`

### listReportDetailsCallable()

```
public final UnaryCallable<ListReportDetailsRequest,ListReportDetailsResponse> listReportDetailsCallable()
```

Lists ReportDetails in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportDetailsRequest request =
       ListReportDetailsRequest.newBuilder()
           .setParent(
               ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   while (true) {
     ListReportDetailsResponse response =
         storageInsightsClient.listReportDetailsCallable().call(request);
     for (ReportDetail element : response.getReportDetailsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListReportDetailsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportDetailsRequest),[ListReportDetailsResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportDetailsResponse)>`

### listReportDetailsPagedCallable()

```
public final UnaryCallable<ListReportDetailsRequest,StorageInsightsClient.ListReportDetailsPagedResponse> listReportDetailsPagedCallable()
```

Lists ReportDetails in a given project and location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ListReportDetailsRequest request =
       ListReportDetailsRequest.newBuilder()
           .setParent(
               ReportConfigName.of("[PROJECT]", "[LOCATION]", "[REPORT_CONFIG]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .build();
   ApiFuture<ReportDetail> future =
       storageInsightsClient.listReportDetailsPagedCallable().futureCall(request);
   // Do something.
   for (ReportDetail element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListReportDetailsRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ListReportDetailsRequest),[ListReportDetailsPagedResponse](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.StorageInsightsClient.ListReportDetailsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateReportConfig(ReportConfig reportConfig, FieldMask updateMask)

```
public final ReportConfig updateReportConfig(ReportConfig reportConfig, FieldMask updateMask)
```

Updates the parameters of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   ReportConfig reportConfig = ReportConfig.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   ReportConfig response = storageInsightsClient.updateReportConfig(reportConfig, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`reportConfig`

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`  

Required. The resource being updated

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Field mask is used to specify the fields to be overwritten in the ReportConfig resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### updateReportConfig(UpdateReportConfigRequest request)

```
public final ReportConfig updateReportConfig(UpdateReportConfigRequest request)
```

Updates the parameters of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   UpdateReportConfigRequest request =
       UpdateReportConfigRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setReportConfig(ReportConfig.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ReportConfig response = storageInsightsClient.updateReportConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.UpdateReportConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)`

### updateReportConfigCallable()

```
public final UnaryCallable<UpdateReportConfigRequest,ReportConfig> updateReportConfigCallable()
```

Updates the parameters of a single ReportConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageInsightsClient storageInsightsClient = StorageInsightsClient.create()) {
   UpdateReportConfigRequest request =
       UpdateReportConfigRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setReportConfig(ReportConfig.newBuilder().build())
           .setRequestId("requestId693933066")
           .build();
   ApiFuture<ReportConfig> future =
       storageInsightsClient.updateReportConfigCallable().futureCall(request);
   // Do something.
   ReportConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateReportConfigRequest](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.UpdateReportConfigRequest),[ReportConfig](/java/docs/reference/google-cloud-storageinsights/0.37.0/com.google.cloud.storageinsights.v1.ReportConfig)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
