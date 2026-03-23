-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SpeechTranslationServiceClient (0.55.0) Stay organized with collections Save and categorize content based on your preferences.

0.93.0 (latest) 0.91.0 0.89.0 0.88.0 0.87.0 0.86.0 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.78.0 0.76.0 0.74.0 0.73.0 0.70.0 0.69.0 0.68.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.6 0.7.10

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-mediatranslation/google-cloud-mediatranslation/src/main/java/com/google/cloud/mediatranslation/v1beta1/SpeechTranslationServiceClient.java)

[Product Reference](https://cloud.google.com/)

Service Description: Provides translation from/to media types.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SpeechTranslationServiceClient speechTranslationServiceClient =
     SpeechTranslationServiceClient.create()) {
   BidiStream<StreamingTranslateSpeechRequest, StreamingTranslateSpeechResponse> bidiStream =
       speechTranslationServiceClient.streamingTranslateSpeechCallable().call();
   StreamingTranslateSpeechRequest request =
       StreamingTranslateSpeechRequest.newBuilder().build();
   bidiStream.send(request);
   for (StreamingTranslateSpeechResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

Note: close() needs to be called on the SpeechTranslationServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

StreamingTranslateSpeech

Performs bidirectional streaming speech translation: receive results while sending audio. This method is only available via the gRPC API (not REST).

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   streamingTranslateSpeechCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of SpeechTranslationServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SpeechTranslationServiceSettings speechTranslationServiceSettings =
     SpeechTranslationServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SpeechTranslationServiceClient speechTranslationServiceClient =
     SpeechTranslationServiceClient.create(speechTranslationServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SpeechTranslationServiceSettings speechTranslationServiceSettings =
     SpeechTranslationServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 SpeechTranslationServiceClient speechTranslationServiceClient =
     SpeechTranslationServiceClient.create(speechTranslationServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SpeechTranslationServiceClient

## Static Methods

### create()

```
public static final SpeechTranslationServiceClient create()
```

Constructs an instance of SpeechTranslationServiceClient with default settings.

**Returns**

**Type**

**Description**

`[SpeechTranslationServiceClient](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SpeechTranslationServiceSettings settings)

```
public static final SpeechTranslationServiceClient create(SpeechTranslationServiceSettings settings)
```

Constructs an instance of SpeechTranslationServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[SpeechTranslationServiceSettings](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceSettings)`  

**Returns**

**Type**

**Description**

`[SpeechTranslationServiceClient](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SpeechTranslationServiceStub stub)

```
public static final SpeechTranslationServiceClient create(SpeechTranslationServiceStub stub)
```

Constructs an instance of SpeechTranslationServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(SpeechTranslationServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[SpeechTranslationServiceStub](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.stub.SpeechTranslationServiceStub)`  

**Returns**

**Type**

**Description**

`[SpeechTranslationServiceClient](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceClient)`

## Constructors

### SpeechTranslationServiceClient(SpeechTranslationServiceSettings settings)

```
protected SpeechTranslationServiceClient(SpeechTranslationServiceSettings settings)
```

Constructs an instance of SpeechTranslationServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[SpeechTranslationServiceSettings](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceSettings)`  

### SpeechTranslationServiceClient(SpeechTranslationServiceStub stub)

```
protected SpeechTranslationServiceClient(SpeechTranslationServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[SpeechTranslationServiceStub](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.stub.SpeechTranslationServiceStub)`  

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
public final SpeechTranslationServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[SpeechTranslationServiceSettings](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.SpeechTranslationServiceSettings)`

### getStub()

```
public SpeechTranslationServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[SpeechTranslationServiceStub](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.stub.SpeechTranslationServiceStub)`

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

### streamingTranslateSpeechCallable()

```
public final BidiStreamingCallable<StreamingTranslateSpeechRequest,StreamingTranslateSpeechResponse> streamingTranslateSpeechCallable()
```

Performs bidirectional streaming speech translation: receive results while sending audio. This method is only available via the gRPC API (not REST).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SpeechTranslationServiceClient speechTranslationServiceClient =
     SpeechTranslationServiceClient.create()) {
   BidiStream<StreamingTranslateSpeechRequest, StreamingTranslateSpeechResponse> bidiStream =
       speechTranslationServiceClient.streamingTranslateSpeechCallable().call();
   StreamingTranslateSpeechRequest request =
       StreamingTranslateSpeechRequest.newBuilder().build();
   bidiStream.send(request);
   for (StreamingTranslateSpeechResponse response : bidiStream) {
     // Do something when a response is received.
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<[StreamingTranslateSpeechRequest](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechRequest),[StreamingTranslateSpeechResponse](/java/docs/reference/google-cloud-mediatranslation/0.55.0/com.google.cloud.mediatranslation.v1beta1.StreamingTranslateSpeechResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
