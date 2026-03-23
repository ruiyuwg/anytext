-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WebSecurityScannerClient (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public class WebSecurityScannerClient implements BackgroundResource
```

Service Description: Web Security Scanner Service identifies security vulnerabilities in web applications hosted on Google Cloud. It crawls your application, and attempts to exercise as many user inputs and event handlers as possible.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   CreateScanConfigRequest request =
       CreateScanConfigRequest.newBuilder()
           .setParent("parent-995424086")
           .setScanConfig(ScanConfig.newBuilder().build())
           .build();
   ScanConfig response = webSecurityScannerClient.createScanConfig(request);
 }
 
```
 

Note: close() needs to be called on the WebSecurityScannerClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of WebSecurityScannerSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WebSecurityScannerSettings webSecurityScannerSettings =
     WebSecurityScannerSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 WebSecurityScannerClient webSecurityScannerClient =
     WebSecurityScannerClient.create(webSecurityScannerSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WebSecurityScannerSettings webSecurityScannerSettings =
     WebSecurityScannerSettings.newBuilder().setEndpoint(myEndpoint).build();
 WebSecurityScannerClient webSecurityScannerClient =
     WebSecurityScannerClient.create(webSecurityScannerSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 WebSecurityScannerSettings webSecurityScannerSettings =
     WebSecurityScannerSettings.newHttpJsonBuilder().build();
 WebSecurityScannerClient webSecurityScannerClient =
     WebSecurityScannerClient.create(webSecurityScannerSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WebSecurityScannerClient

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
public static final WebSecurityScannerClient create()
```

Constructs an instance of WebSecurityScannerClient with default settings.

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WebSecurityScannerSettings settings)

```
public static final WebSecurityScannerClient create(WebSecurityScannerSettings settings)
```

Constructs an instance of WebSecurityScannerClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[WebSecurityScannerSettings](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerSettings)`  

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WebSecurityScannerStub stub)

```
public static final WebSecurityScannerClient create(WebSecurityScannerStub stub)
```

Constructs an instance of WebSecurityScannerClient, using the given stub for making calls. This is for advanced usage - prefer using create(WebSecurityScannerSettings).

**Parameter**

**Name**

**Description**

`stub`

`[WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub)`  

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient)`

## Constructors

### WebSecurityScannerClient(WebSecurityScannerSettings settings)

```
protected WebSecurityScannerClient(WebSecurityScannerSettings settings)
```

Constructs an instance of WebSecurityScannerClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[WebSecurityScannerSettings](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerSettings)`  

### WebSecurityScannerClient(WebSecurityScannerStub stub)

```
protected WebSecurityScannerClient(WebSecurityScannerStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub)`  

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

### createScanConfig(CreateScanConfigRequest request)

```
public final ScanConfig createScanConfig(CreateScanConfigRequest request)
```

Creates a new ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   CreateScanConfigRequest request =
       CreateScanConfigRequest.newBuilder()
           .setParent("parent-995424086")
           .setScanConfig(ScanConfig.newBuilder().build())
           .build();
   ScanConfig response = webSecurityScannerClient.createScanConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.CreateScanConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)`

### createScanConfigCallable()

```
public final UnaryCallable<CreateScanConfigRequest,ScanConfig> createScanConfigCallable()
```

Creates a new ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   CreateScanConfigRequest request =
       CreateScanConfigRequest.newBuilder()
           .setParent("parent-995424086")
           .setScanConfig(ScanConfig.newBuilder().build())
           .build();
   ApiFuture<ScanConfig> future =
       webSecurityScannerClient.createScanConfigCallable().futureCall(request);
   // Do something.
   ScanConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.CreateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

### deleteScanConfig(DeleteScanConfigRequest request)

```
public final void deleteScanConfig(DeleteScanConfigRequest request)
```

Deletes an existing ScanConfig and its child resources.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   DeleteScanConfigRequest request =
       DeleteScanConfigRequest.newBuilder().setName("name3373707").build();
   webSecurityScannerClient.deleteScanConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.DeleteScanConfigRequest)`  

The request object containing all of the parameters for the API call.

### deleteScanConfigCallable()

```
public final UnaryCallable<DeleteScanConfigRequest,Empty> deleteScanConfigCallable()
```

Deletes an existing ScanConfig and its child resources.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   DeleteScanConfigRequest request =
       DeleteScanConfigRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Empty> future =
       webSecurityScannerClient.deleteScanConfigCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.DeleteScanConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getFinding(GetFindingRequest request)

```
public final Finding getFinding(GetFindingRequest request)
```

Gets a Finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetFindingRequest request = GetFindingRequest.newBuilder().setName("name3373707").build();
   Finding response = webSecurityScannerClient.getFinding(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetFindingRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.Finding)`

### getFindingCallable()

```
public final UnaryCallable<GetFindingRequest,Finding> getFindingCallable()
```

Gets a Finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetFindingRequest request = GetFindingRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Finding> future = webSecurityScannerClient.getFindingCallable().futureCall(request);
   // Do something.
   Finding response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetFindingRequest),[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.Finding)>`

### getScanConfig(GetScanConfigRequest request)

```
public final ScanConfig getScanConfig(GetScanConfigRequest request)
```

Gets a ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetScanConfigRequest request =
       GetScanConfigRequest.newBuilder().setName("name3373707").build();
   ScanConfig response = webSecurityScannerClient.getScanConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetScanConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)`

### getScanConfigCallable()

```
public final UnaryCallable<GetScanConfigRequest,ScanConfig> getScanConfigCallable()
```

Gets a ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetScanConfigRequest request =
       GetScanConfigRequest.newBuilder().setName("name3373707").build();
   ApiFuture<ScanConfig> future =
       webSecurityScannerClient.getScanConfigCallable().futureCall(request);
   // Do something.
   ScanConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

### getScanRun(GetScanRunRequest request)

```
public final ScanRun getScanRun(GetScanRunRequest request)
```

Gets a ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetScanRunRequest request = GetScanRunRequest.newBuilder().setName("name3373707").build();
   ScanRun response = webSecurityScannerClient.getScanRun(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetScanRunRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)`

### getScanRunCallable()

```
public final UnaryCallable<GetScanRunRequest,ScanRun> getScanRunCallable()
```

Gets a ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   GetScanRunRequest request = GetScanRunRequest.newBuilder().setName("name3373707").build();
   ApiFuture<ScanRun> future = webSecurityScannerClient.getScanRunCallable().futureCall(request);
   // Do something.
   ScanRun response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.GetScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`

### getSettings()

```
public final WebSecurityScannerSettings getSettings()
```

**Returns**

**Type**

**Description**

`[WebSecurityScannerSettings](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerSettings)`

### getStub()

```
public WebSecurityScannerStub getStub()
```

**Returns**

**Type**

**Description**

`[WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub)`

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

### listCrawledUrls(ListCrawledUrlsRequest request)

```
public final WebSecurityScannerClient.ListCrawledUrlsPagedResponse listCrawledUrls(ListCrawledUrlsRequest request)
```

List CrawledUrls under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListCrawledUrlsRequest request =
       ListCrawledUrlsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (CrawledUrl element : webSecurityScannerClient.listCrawledUrls(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient.ListCrawledUrlsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListCrawledUrlsPagedResponse)`

### listCrawledUrlsCallable()

```
public final UnaryCallable<ListCrawledUrlsRequest,ListCrawledUrlsResponse> listCrawledUrlsCallable()
```

List CrawledUrls under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListCrawledUrlsRequest request =
       ListCrawledUrlsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListCrawledUrlsResponse response =
         webSecurityScannerClient.listCrawledUrlsCallable().call(request);
     for (CrawledUrl element : response.getCrawledUrlsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest),[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse)>`

### listCrawledUrlsPagedCallable()

```
public final UnaryCallable<ListCrawledUrlsRequest,WebSecurityScannerClient.ListCrawledUrlsPagedResponse> listCrawledUrlsPagedCallable()
```

List CrawledUrls under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListCrawledUrlsRequest request =
       ListCrawledUrlsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<CrawledUrl> future =
       webSecurityScannerClient.listCrawledUrlsPagedCallable().futureCall(request);
   // Do something.
   for (CrawledUrl element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest),[ListCrawledUrlsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListCrawledUrlsPagedResponse)>`

### listFindingTypeStats(ListFindingTypeStatsRequest request)

```
public final ListFindingTypeStatsResponse listFindingTypeStats(ListFindingTypeStatsRequest request)
```

List all FindingTypeStats under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListFindingTypeStatsRequest request =
       ListFindingTypeStatsRequest.newBuilder().setParent("parent-995424086").build();
   ListFindingTypeStatsResponse response =
       webSecurityScannerClient.listFindingTypeStats(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse)`

### listFindingTypeStatsCallable()

```
public final UnaryCallable<ListFindingTypeStatsRequest,ListFindingTypeStatsResponse> listFindingTypeStatsCallable()
```

List all FindingTypeStats under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListFindingTypeStatsRequest request =
       ListFindingTypeStatsRequest.newBuilder().setParent("parent-995424086").build();
   ApiFuture<ListFindingTypeStatsResponse> future =
       webSecurityScannerClient.listFindingTypeStatsCallable().futureCall(request);
   // Do something.
   ListFindingTypeStatsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest),[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse)>`

### listFindings(ListFindingsRequest request)

```
public final WebSecurityScannerClient.ListFindingsPagedResponse listFindings(ListFindingsRequest request)
```

List Findings under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent("parent-995424086")
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (Finding element : webSecurityScannerClient.listFindings(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient.ListFindingsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListFindingsPagedResponse)`

### listFindingsCallable()

```
public final UnaryCallable<ListFindingsRequest,ListFindingsResponse> listFindingsCallable()
```

List Findings under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent("parent-995424086")
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListFindingsResponse response =
         webSecurityScannerClient.listFindingsCallable().call(request);
     for (Finding element : response.getFindingsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingsRequest),[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingsResponse)>`

### listFindingsPagedCallable()

```
public final UnaryCallable<ListFindingsRequest,WebSecurityScannerClient.ListFindingsPagedResponse> listFindingsPagedCallable()
```

List Findings under a given ScanRun.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent("parent-995424086")
           .setFilter("filter-1274492040")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<Finding> future =
       webSecurityScannerClient.listFindingsPagedCallable().futureCall(request);
   // Do something.
   for (Finding element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListFindingsRequest),[ListFindingsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListFindingsPagedResponse)>`

### listScanConfigs(ListScanConfigsRequest request)

```
public final WebSecurityScannerClient.ListScanConfigsPagedResponse listScanConfigs(ListScanConfigsRequest request)
```

Lists ScanConfigs under a given project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanConfigsRequest request =
       ListScanConfigsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (ScanConfig element : webSecurityScannerClient.listScanConfigs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient.ListScanConfigsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanConfigsPagedResponse)`

### listScanConfigsCallable()

```
public final UnaryCallable<ListScanConfigsRequest,ListScanConfigsResponse> listScanConfigsCallable()
```

Lists ScanConfigs under a given project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanConfigsRequest request =
       ListScanConfigsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListScanConfigsResponse response =
         webSecurityScannerClient.listScanConfigsCallable().call(request);
     for (ScanConfig element : response.getScanConfigsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest),[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsResponse)>`

### listScanConfigsPagedCallable()

```
public final UnaryCallable<ListScanConfigsRequest,WebSecurityScannerClient.ListScanConfigsPagedResponse> listScanConfigsPagedCallable()
```

Lists ScanConfigs under a given project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanConfigsRequest request =
       ListScanConfigsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<ScanConfig> future =
       webSecurityScannerClient.listScanConfigsPagedCallable().futureCall(request);
   // Do something.
   for (ScanConfig element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest),[ListScanConfigsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanConfigsPagedResponse)>`

### listScanRuns(ListScanRunsRequest request)

```
public final WebSecurityScannerClient.ListScanRunsPagedResponse listScanRuns(ListScanRunsRequest request)
```

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanRunsRequest request =
       ListScanRunsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (ScanRun element : webSecurityScannerClient.listScanRuns(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[WebSecurityScannerClient.ListScanRunsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanRunsPagedResponse)`

### listScanRunsCallable()

```
public final UnaryCallable<ListScanRunsRequest,ListScanRunsResponse> listScanRunsCallable()
```

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanRunsRequest request =
       ListScanRunsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListScanRunsResponse response =
         webSecurityScannerClient.listScanRunsCallable().call(request);
     for (ScanRun element : response.getScanRunsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest),[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanRunsResponse)>`

### listScanRunsPagedCallable()

```
public final UnaryCallable<ListScanRunsRequest,WebSecurityScannerClient.ListScanRunsPagedResponse> listScanRunsPagedCallable()
```

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   ListScanRunsRequest request =
       ListScanRunsRequest.newBuilder()
           .setParent("parent-995424086")
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<ScanRun> future =
       webSecurityScannerClient.listScanRunsPagedCallable().futureCall(request);
   // Do something.
   for (ScanRun element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest),[ListScanRunsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanRunsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### startScanRun(StartScanRunRequest request)

```
public final ScanRun startScanRun(StartScanRunRequest request)
```

Start a ScanRun according to the given ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   StartScanRunRequest request = StartScanRunRequest.newBuilder().setName("name3373707").build();
   ScanRun response = webSecurityScannerClient.startScanRun(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.StartScanRunRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)`

### startScanRunCallable()

```
public final UnaryCallable<StartScanRunRequest,ScanRun> startScanRunCallable()
```

Start a ScanRun according to the given ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   StartScanRunRequest request = StartScanRunRequest.newBuilder().setName("name3373707").build();
   ApiFuture<ScanRun> future =
       webSecurityScannerClient.startScanRunCallable().futureCall(request);
   // Do something.
   ScanRun response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.StartScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`

### stopScanRun(StopScanRunRequest request)

```
public final ScanRun stopScanRun(StopScanRunRequest request)
```

Stops a ScanRun. The stopped ScanRun is returned.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   StopScanRunRequest request = StopScanRunRequest.newBuilder().setName("name3373707").build();
   ScanRun response = webSecurityScannerClient.stopScanRun(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.StopScanRunRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)`

### stopScanRunCallable()

```
public final UnaryCallable<StopScanRunRequest,ScanRun> stopScanRunCallable()
```

Stops a ScanRun. The stopped ScanRun is returned.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   StopScanRunRequest request = StopScanRunRequest.newBuilder().setName("name3373707").build();
   ApiFuture<ScanRun> future =
       webSecurityScannerClient.stopScanRunCallable().futureCall(request);
   // Do something.
   ScanRun response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.StopScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`

### updateScanConfig(UpdateScanConfigRequest request)

```
public final ScanConfig updateScanConfig(UpdateScanConfigRequest request)
```

Updates a ScanConfig. This method support partial update of a ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   UpdateScanConfigRequest request =
       UpdateScanConfigRequest.newBuilder()
           .setScanConfig(ScanConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ScanConfig response = webSecurityScannerClient.updateScanConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.UpdateScanConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)`

### updateScanConfigCallable()

```
public final UnaryCallable<UpdateScanConfigRequest,ScanConfig> updateScanConfigCallable()
```

Updates a ScanConfig. This method support partial update of a ScanConfig.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (WebSecurityScannerClient webSecurityScannerClient = WebSecurityScannerClient.create()) {
   UpdateScanConfigRequest request =
       UpdateScanConfigRequest.newBuilder()
           .setScanConfig(ScanConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<ScanConfig> future =
       webSecurityScannerClient.updateScanConfigCallable().futureCall(request);
   // Do something.
   ScanConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.UpdateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.19.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
