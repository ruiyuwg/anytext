-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ImageAnnotatorClient (3.37.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-vision/google-cloud-vision/src/main/java/com/google/cloud/vision/v1p1beta1/ImageAnnotatorClient.java)

[Product Reference](https://cloud.google.com/vision/docs/)

[REST Documentation](https://cloud.google.com/vision/docs/reference/rest)

[RPC Documentation](https://cloud.google.com/vision/docs/reference/rpc)

Service Description: Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   List<AnnotateImageRequest> requests = new ArrayList<>();
   BatchAnnotateImagesResponse response = imageAnnotatorClient.batchAnnotateImages(requests);
 }
 
```
 

Note: close() needs to be called on the ImageAnnotatorClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

BatchAnnotateImages

Run image detection and annotation for a batch of images.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchAnnotateImages(List<AnnotateImageRequest> requests)
    
-   batchAnnotateImages(BatchAnnotateImagesRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchAnnotateImagesCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ImageAnnotatorSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newBuilder().setEndpoint(myEndpoint).build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newHttpJsonBuilder().build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ImageAnnotatorClient

## Static Methods

### create()

```
public static final ImageAnnotatorClient create()
```

Constructs an instance of ImageAnnotatorClient with default settings.

**Returns**

**Type**

**Description**

`[ImageAnnotatorClient](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ImageAnnotatorSettings settings)

```
public static final ImageAnnotatorClient create(ImageAnnotatorSettings settings)
```

Constructs an instance of ImageAnnotatorClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[ImageAnnotatorSettings](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorSettings)`  

**Returns**

**Type**

**Description**

`[ImageAnnotatorClient](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ImageAnnotatorStub stub)

```
public static final ImageAnnotatorClient create(ImageAnnotatorStub stub)
```

Constructs an instance of ImageAnnotatorClient, using the given stub for making calls. This is for advanced usage - prefer using create(ImageAnnotatorSettings).

**Parameter**

**Name**

**Description**

`stub`

`[ImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.stub.ImageAnnotatorStub)`  

**Returns**

**Type**

**Description**

`[ImageAnnotatorClient](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorClient)`

## Constructors

### ImageAnnotatorClient(ImageAnnotatorSettings settings)

```
protected ImageAnnotatorClient(ImageAnnotatorSettings settings)
```

Constructs an instance of ImageAnnotatorClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[ImageAnnotatorSettings](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorSettings)`  

### ImageAnnotatorClient(ImageAnnotatorStub stub)

```
protected ImageAnnotatorClient(ImageAnnotatorStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[ImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.stub.ImageAnnotatorStub)`  

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

### batchAnnotateImages(BatchAnnotateImagesRequest request)

```
public final BatchAnnotateImagesResponse batchAnnotateImages(BatchAnnotateImagesRequest request)
```

Run image detection and annotation for a batch of images.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   BatchAnnotateImagesRequest request =
       BatchAnnotateImagesRequest.newBuilder()
           .addAllRequests(new ArrayList<AnnotateImageRequest>())
           .build();
   BatchAnnotateImagesResponse response = imageAnnotatorClient.batchAnnotateImages(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.BatchAnnotateImagesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.BatchAnnotateImagesResponse)`

### batchAnnotateImages(List<AnnotateImageRequest> requests)

```
public final BatchAnnotateImagesResponse batchAnnotateImages(List<AnnotateImageRequest> requests)
```

Run image detection and annotation for a batch of images.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   List<AnnotateImageRequest> requests = new ArrayList<>();
   BatchAnnotateImagesResponse response = imageAnnotatorClient.batchAnnotateImages(requests);
 }
 
```
 

**Parameter**

**Name**

**Description**

`requests`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AnnotateImageRequest](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.AnnotateImageRequest)>`  

Required. Individual image annotation requests for this batch.

**Returns**

**Type**

**Description**

`[BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.BatchAnnotateImagesResponse)`

### batchAnnotateImagesCallable()

```
public final UnaryCallable<BatchAnnotateImagesRequest,BatchAnnotateImagesResponse> batchAnnotateImagesCallable()
```

Run image detection and annotation for a batch of images.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   BatchAnnotateImagesRequest request =
       BatchAnnotateImagesRequest.newBuilder()
           .addAllRequests(new ArrayList<AnnotateImageRequest>())
           .build();
   ApiFuture<BatchAnnotateImagesResponse> future =
       imageAnnotatorClient.batchAnnotateImagesCallable().futureCall(request);
   // Do something.
   BatchAnnotateImagesResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.BatchAnnotateImagesRequest),[BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.BatchAnnotateImagesResponse)>`

### close()

```
public final void close()
```

### getSettings()

```
public final ImageAnnotatorSettings getSettings()
```

**Returns**

**Type**

**Description**

`[ImageAnnotatorSettings](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.ImageAnnotatorSettings)`

### getStub()

```
public ImageAnnotatorStub getStub()
```

**Returns**

**Type**

**Description**

`[ImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.37.0/com.google.cloud.vision.v1p1beta1.stub.ImageAnnotatorStub)`

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
