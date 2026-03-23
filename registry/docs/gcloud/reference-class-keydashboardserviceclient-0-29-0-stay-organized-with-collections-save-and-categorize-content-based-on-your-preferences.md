-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class KeyDashboardServiceClient (0.29.0) Stay organized with collections Save and categorize content based on your preferences.

0.76.0 (latest) 0.74.0 0.72.0 0.71.0 0.70.0 0.69.0 0.67.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.59.0 0.57.0 0.56.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-kmsinventory/google-cloud-kmsinventory/src/main/java/com/google/cloud/kms/inventory/v1/KeyDashboardServiceClient.java)

[Product Reference](https://cloud.google.com/kms/docs/)

[REST Documentation](https://cloud.google.com/kms/docs/reference/rest)

[RPC Documentation](https://cloud.google.com/kms/docs/reference/rpc)

Service Description: Provides a cross-region view of all Cloud KMS keys in a given Cloud project.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   for (CryptoKey element : keyDashboardServiceClient.listCryptoKeys(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

Note: close() needs to be called on the KeyDashboardServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

ListCryptoKeys

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listCryptoKeys(ListCryptoKeysRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listCryptoKeys(ProjectName parent)
    
-   listCryptoKeys(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listCryptoKeysPagedCallable()
    
-   listCryptoKeysCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of KeyDashboardServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 KeyDashboardServiceSettings keyDashboardServiceSettings =
     KeyDashboardServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 KeyDashboardServiceClient keyDashboardServiceClient =
     KeyDashboardServiceClient.create(keyDashboardServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 KeyDashboardServiceSettings keyDashboardServiceSettings =
     KeyDashboardServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 KeyDashboardServiceClient keyDashboardServiceClient =
     KeyDashboardServiceClient.create(keyDashboardServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 KeyDashboardServiceSettings keyDashboardServiceSettings =
     KeyDashboardServiceSettings.newHttpJsonBuilder().build();
 KeyDashboardServiceClient keyDashboardServiceClient =
     KeyDashboardServiceClient.create(keyDashboardServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> KeyDashboardServiceClient

## Static Methods

### create()

```
public static final KeyDashboardServiceClient create()
```

Constructs an instance of KeyDashboardServiceClient with default settings.

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(KeyDashboardServiceSettings settings)

```
public static final KeyDashboardServiceClient create(KeyDashboardServiceSettings settings)
```

Constructs an instance of KeyDashboardServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[KeyDashboardServiceSettings](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceSettings)`  

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(KeyDashboardServiceStub stub)

```
public static final KeyDashboardServiceClient create(KeyDashboardServiceStub stub)
```

Constructs an instance of KeyDashboardServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(KeyDashboardServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[KeyDashboardServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.stub.KeyDashboardServiceStub)`  

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient)`

## Constructors

### KeyDashboardServiceClient(KeyDashboardServiceSettings settings)

```
protected KeyDashboardServiceClient(KeyDashboardServiceSettings settings)
```

Constructs an instance of KeyDashboardServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[KeyDashboardServiceSettings](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceSettings)`  

### KeyDashboardServiceClient(KeyDashboardServiceStub stub)

```
protected KeyDashboardServiceClient(KeyDashboardServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[KeyDashboardServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.stub.KeyDashboardServiceStub)`  

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

### getSettings()

```
public final KeyDashboardServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[KeyDashboardServiceSettings](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceSettings)`

### getStub()

```
public KeyDashboardServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[KeyDashboardServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.stub.KeyDashboardServiceStub)`

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

### listCryptoKeys(ListCryptoKeysRequest request)

```
public final KeyDashboardServiceClient.ListCryptoKeysPagedResponse listCryptoKeys(ListCryptoKeysRequest request)
```

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   ListCryptoKeysRequest request =
       ListCryptoKeysRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (CryptoKey element : keyDashboardServiceClient.listCryptoKeys(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListCryptoKeysRequest](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.ListCryptoKeysRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient.ListCryptoKeysPagedResponse](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient.ListCryptoKeysPagedResponse)`

### listCryptoKeys(ProjectName parent)

```
public final KeyDashboardServiceClient.ListCryptoKeysPagedResponse listCryptoKeys(ProjectName parent)
```

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   for (CryptoKey element : keyDashboardServiceClient.listCryptoKeys(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.ProjectName)`  

Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*`

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient.ListCryptoKeysPagedResponse](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient.ListCryptoKeysPagedResponse)`

### listCryptoKeys(String parent)

```
public final KeyDashboardServiceClient.ListCryptoKeysPagedResponse listCryptoKeys(String parent)
```

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   for (CryptoKey element : keyDashboardServiceClient.listCryptoKeys(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*`

**Returns**

**Type**

**Description**

`[KeyDashboardServiceClient.ListCryptoKeysPagedResponse](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient.ListCryptoKeysPagedResponse)`

### listCryptoKeysCallable()

```
public final UnaryCallable<ListCryptoKeysRequest,ListCryptoKeysResponse> listCryptoKeysCallable()
```

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   ListCryptoKeysRequest request =
       ListCryptoKeysRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListCryptoKeysResponse response =
         keyDashboardServiceClient.listCryptoKeysCallable().call(request);
     for (CryptoKey element : response.getCryptoKeysList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCryptoKeysRequest](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.ListCryptoKeysRequest),[ListCryptoKeysResponse](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.ListCryptoKeysResponse)>`

### listCryptoKeysPagedCallable()

```
public final UnaryCallable<ListCryptoKeysRequest,KeyDashboardServiceClient.ListCryptoKeysPagedResponse> listCryptoKeysPagedCallable()
```

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (KeyDashboardServiceClient keyDashboardServiceClient = KeyDashboardServiceClient.create()) {
   ListCryptoKeysRequest request =
       ListCryptoKeysRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<CryptoKey> future =
       keyDashboardServiceClient.listCryptoKeysPagedCallable().futureCall(request);
   // Do something.
   for (CryptoKey element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCryptoKeysRequest](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.ListCryptoKeysRequest),[ListCryptoKeysPagedResponse](/java/docs/reference/google-cloud-kmsinventory/0.29.0/com.google.cloud.kms.inventory.v1.KeyDashboardServiceClient.ListCryptoKeysPagedResponse)>`

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
