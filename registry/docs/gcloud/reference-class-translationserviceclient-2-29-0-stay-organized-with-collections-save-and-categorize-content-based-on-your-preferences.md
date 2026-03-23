-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TranslationServiceClient (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public class TranslationServiceClient implements BackgroundResource
```

Service Description: Provides natural language translation operations.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String targetLanguageCode = "targetLanguageCode-106414698";
   List<String> contents = new ArrayList<>();
   TranslateTextResponse response =
       translationServiceClient.translateText(parent, targetLanguageCode, contents);
 }
 
```
 

Note: close() needs to be called on the TranslationServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of TranslationServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TranslationServiceSettings translationServiceSettings =
     TranslationServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 TranslationServiceClient translationServiceClient =
     TranslationServiceClient.create(translationServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TranslationServiceSettings translationServiceSettings =
     TranslationServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 TranslationServiceClient translationServiceClient =
     TranslationServiceClient.create(translationServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TranslationServiceSettings translationServiceSettings =
     TranslationServiceSettings.newHttpJsonBuilder().build();
 TranslationServiceClient translationServiceClient =
     TranslationServiceClient.create(translationServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TranslationServiceClient

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
public static final TranslationServiceClient create()
```

Constructs an instance of TranslationServiceClient with default settings.

**Returns**

**Type**

**Description**

`[TranslationServiceClient](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TranslationServiceSettings settings)

```
public static final TranslationServiceClient create(TranslationServiceSettings settings)
```

Constructs an instance of TranslationServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[TranslationServiceSettings](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceSettings)`  

**Returns**

**Type**

**Description**

`[TranslationServiceClient](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TranslationServiceStub stub)

```
public static final TranslationServiceClient create(TranslationServiceStub stub)
```

Constructs an instance of TranslationServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(TranslationServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[TranslationServiceStub](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.stub.TranslationServiceStub)`  

**Returns**

**Type**

**Description**

`[TranslationServiceClient](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient)`

## Constructors

### TranslationServiceClient(TranslationServiceSettings settings)

```
protected TranslationServiceClient(TranslationServiceSettings settings)
```

Constructs an instance of TranslationServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[TranslationServiceSettings](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceSettings)`  

### TranslationServiceClient(TranslationServiceStub stub)

```
protected TranslationServiceClient(TranslationServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[TranslationServiceStub](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.stub.TranslationServiceStub)`  

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

### batchTranslateDocumentAsync(BatchTranslateDocumentRequest request)

```
public final OperationFuture<BatchTranslateDocumentResponse,BatchTranslateDocumentMetadata> batchTranslateDocumentAsync(BatchTranslateDocumentRequest request)
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateDocumentRequest request =
       BatchTranslateDocumentRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .addAllInputConfigs(new ArrayList<BatchDocumentInputConfig>())
           .setOutputConfig(BatchDocumentOutputConfig.newBuilder().build())
           .putAllModels(new HashMap<String, String>())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllFormatConversions(new HashMap<String, String>())
           .setCustomizedAttribution("customizedAttribution557650238")
           .setEnableShadowRemovalNativePdf(true)
           .setEnableRotationCorrection(true)
           .build();
   BatchTranslateDocumentResponse response =
       translationServiceClient.batchTranslateDocumentAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchTranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentResponse),[BatchTranslateDocumentMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata)>`

### batchTranslateDocumentAsync(LocationName parent, String sourceLanguageCode, List<String> targetLanguageCodes, List<BatchDocumentInputConfig> inputConfigs, BatchDocumentOutputConfig outputConfig)

```
public final OperationFuture<BatchTranslateDocumentResponse,BatchTranslateDocumentMetadata> batchTranslateDocumentAsync(LocationName parent, String sourceLanguageCode, List<String> targetLanguageCodes, List<BatchDocumentInputConfig> inputConfigs, BatchDocumentOutputConfig outputConfig)
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String sourceLanguageCode = "sourceLanguageCode1645917472";
   List<String> targetLanguageCodes = new ArrayList<>();
   List<BatchDocumentInputConfig> inputConfigs = new ArrayList<>();
   BatchDocumentOutputConfig outputConfig = BatchDocumentOutputConfig.newBuilder().build();
   BatchTranslateDocumentResponse response =
       translationServiceClient
           .batchTranslateDocumentAsync(
               parent, sourceLanguageCode, targetLanguageCodes, inputConfigs, outputConfig)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`sourceLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`targetLanguageCodes`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here.

`inputConfigs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchDocumentInputConfig)>`  

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`outputConfig`

`[BatchDocumentOutputConfig](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchDocumentOutputConfig)`  

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchTranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentResponse),[BatchTranslateDocumentMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata)>`

### batchTranslateDocumentAsync(String parent, String sourceLanguageCode, List<String> targetLanguageCodes, List<BatchDocumentInputConfig> inputConfigs, BatchDocumentOutputConfig outputConfig)

```
public final OperationFuture<BatchTranslateDocumentResponse,BatchTranslateDocumentMetadata> batchTranslateDocumentAsync(String parent, String sourceLanguageCode, List<String> targetLanguageCodes, List<BatchDocumentInputConfig> inputConfigs, BatchDocumentOutputConfig outputConfig)
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String sourceLanguageCode = "sourceLanguageCode1645917472";
   List<String> targetLanguageCodes = new ArrayList<>();
   List<BatchDocumentInputConfig> inputConfigs = new ArrayList<>();
   BatchDocumentOutputConfig outputConfig = BatchDocumentOutputConfig.newBuilder().build();
   BatchTranslateDocumentResponse response =
       translationServiceClient
           .batchTranslateDocumentAsync(
               parent, sourceLanguageCode, targetLanguageCodes, inputConfigs, outputConfig)
           .get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`sourceLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`targetLanguageCodes`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here.

`inputConfigs`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchDocumentInputConfig)>`  

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`outputConfig`

`[BatchDocumentOutputConfig](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchDocumentOutputConfig)`  

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchTranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentResponse),[BatchTranslateDocumentMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata)>`

### batchTranslateDocumentCallable()

```
public final UnaryCallable<BatchTranslateDocumentRequest,Operation> batchTranslateDocumentCallable()
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateDocumentRequest request =
       BatchTranslateDocumentRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .addAllInputConfigs(new ArrayList<BatchDocumentInputConfig>())
           .setOutputConfig(BatchDocumentOutputConfig.newBuilder().build())
           .putAllModels(new HashMap<String, String>())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllFormatConversions(new HashMap<String, String>())
           .setCustomizedAttribution("customizedAttribution557650238")
           .setEnableShadowRemovalNativePdf(true)
           .setEnableRotationCorrection(true)
           .build();
   ApiFuture<Operation> future =
       translationServiceClient.batchTranslateDocumentCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchTranslateDocumentOperationCallable()

```
public final OperationCallable<BatchTranslateDocumentRequest,BatchTranslateDocumentResponse,BatchTranslateDocumentMetadata> batchTranslateDocumentOperationCallable()
```

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateDocumentRequest request =
       BatchTranslateDocumentRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .addAllInputConfigs(new ArrayList<BatchDocumentInputConfig>())
           .setOutputConfig(BatchDocumentOutputConfig.newBuilder().build())
           .putAllModels(new HashMap<String, String>())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllFormatConversions(new HashMap<String, String>())
           .setCustomizedAttribution("customizedAttribution557650238")
           .setEnableShadowRemovalNativePdf(true)
           .setEnableRotationCorrection(true)
           .build();
   OperationFuture<BatchTranslateDocumentResponse, BatchTranslateDocumentMetadata> future =
       translationServiceClient.batchTranslateDocumentOperationCallable().futureCall(request);
   // Do something.
   BatchTranslateDocumentResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentRequest),[BatchTranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentResponse),[BatchTranslateDocumentMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata)>`

### batchTranslateTextAsync(BatchTranslateTextRequest request)

```
public final OperationFuture<BatchTranslateResponse,BatchTranslateMetadata> batchTranslateTextAsync(BatchTranslateTextRequest request)
```

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateTextRequest request =
       BatchTranslateTextRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .putAllModels(new HashMap<String, String>())
           .addAllInputConfigs(new ArrayList<InputConfig>())
           .setOutputConfig(OutputConfig.newBuilder().build())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllLabels(new HashMap<String, String>())
           .build();
   BatchTranslateResponse response =
       translationServiceClient.batchTranslateTextAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchTranslateResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateResponse),[BatchTranslateMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateMetadata)>`

### batchTranslateTextCallable()

```
public final UnaryCallable<BatchTranslateTextRequest,Operation> batchTranslateTextCallable()
```

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateTextRequest request =
       BatchTranslateTextRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .putAllModels(new HashMap<String, String>())
           .addAllInputConfigs(new ArrayList<InputConfig>())
           .setOutputConfig(OutputConfig.newBuilder().build())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllLabels(new HashMap<String, String>())
           .build();
   ApiFuture<Operation> future =
       translationServiceClient.batchTranslateTextCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateTextRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchTranslateTextOperationCallable()

```
public final OperationCallable<BatchTranslateTextRequest,BatchTranslateResponse,BatchTranslateMetadata> batchTranslateTextOperationCallable()
```

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.

This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   BatchTranslateTextRequest request =
       BatchTranslateTextRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .addAllTargetLanguageCodes(new ArrayList<String>())
           .putAllModels(new HashMap<String, String>())
           .addAllInputConfigs(new ArrayList<InputConfig>())
           .setOutputConfig(OutputConfig.newBuilder().build())
           .putAllGlossaries(new HashMap<String, TranslateTextGlossaryConfig>())
           .putAllLabels(new HashMap<String, String>())
           .build();
   OperationFuture<BatchTranslateResponse, BatchTranslateMetadata> future =
       translationServiceClient.batchTranslateTextOperationCallable().futureCall(request);
   // Do something.
   BatchTranslateResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateTextRequest),[BatchTranslateResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateResponse),[BatchTranslateMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.BatchTranslateMetadata)>`

### close()

```
public final void close()
```

### createGlossaryAsync(CreateGlossaryRequest request)

```
public final OperationFuture<Glossary,CreateGlossaryMetadata> createGlossaryAsync(CreateGlossaryRequest request)
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   CreateGlossaryRequest request =
       CreateGlossaryRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setGlossary(Glossary.newBuilder().build())
           .build();
   Glossary response = translationServiceClient.createGlossaryAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary),[CreateGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryMetadata)>`

### createGlossaryAsync(LocationName parent, Glossary glossary)

```
public final OperationFuture<Glossary,CreateGlossaryMetadata> createGlossaryAsync(LocationName parent, Glossary glossary)
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   Glossary glossary = Glossary.newBuilder().build();
   Glossary response = translationServiceClient.createGlossaryAsync(parent, glossary).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. The project name.

`glossary`

`[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)`  

Required. The glossary to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary),[CreateGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryMetadata)>`

### createGlossaryAsync(String parent, Glossary glossary)

```
public final OperationFuture<Glossary,CreateGlossaryMetadata> createGlossaryAsync(String parent, Glossary glossary)
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   Glossary glossary = Glossary.newBuilder().build();
   Glossary response = translationServiceClient.createGlossaryAsync(parent, glossary).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The project name.

`glossary`

`[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)`  

Required. The glossary to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary),[CreateGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryMetadata)>`

### createGlossaryCallable()

```
public final UnaryCallable<CreateGlossaryRequest,Operation> createGlossaryCallable()
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   CreateGlossaryRequest request =
       CreateGlossaryRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setGlossary(Glossary.newBuilder().build())
           .build();
   ApiFuture<Operation> future =
       translationServiceClient.createGlossaryCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createGlossaryOperationCallable()

```
public final OperationCallable<CreateGlossaryRequest,Glossary,CreateGlossaryMetadata> createGlossaryOperationCallable()
```

Creates a glossary and returns the long-running operation. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   CreateGlossaryRequest request =
       CreateGlossaryRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setGlossary(Glossary.newBuilder().build())
           .build();
   OperationFuture<Glossary, CreateGlossaryMetadata> future =
       translationServiceClient.createGlossaryOperationCallable().futureCall(request);
   // Do something.
   Glossary response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryRequest),[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary),[CreateGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.CreateGlossaryMetadata)>`

### deleteGlossaryAsync(DeleteGlossaryRequest request)

```
public final OperationFuture<DeleteGlossaryResponse,DeleteGlossaryMetadata> deleteGlossaryAsync(DeleteGlossaryRequest request)
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   DeleteGlossaryRequest request =
       DeleteGlossaryRequest.newBuilder()
           .setName(GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString())
           .build();
   DeleteGlossaryResponse response = translationServiceClient.deleteGlossaryAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[DeleteGlossaryResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryResponse),[DeleteGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryMetadata)>`

### deleteGlossaryAsync(GlossaryName name)

```
public final OperationFuture<DeleteGlossaryResponse,DeleteGlossaryMetadata> deleteGlossaryAsync(GlossaryName name)
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GlossaryName name = GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]");
   DeleteGlossaryResponse response = translationServiceClient.deleteGlossaryAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[GlossaryName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GlossaryName)`  

Required. The name of the glossary to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[DeleteGlossaryResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryResponse),[DeleteGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryMetadata)>`

### deleteGlossaryAsync(String name)

```
public final OperationFuture<DeleteGlossaryResponse,DeleteGlossaryMetadata> deleteGlossaryAsync(String name)
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String name = GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString();
   DeleteGlossaryResponse response = translationServiceClient.deleteGlossaryAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the glossary to delete.

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[DeleteGlossaryResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryResponse),[DeleteGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryMetadata)>`

### deleteGlossaryCallable()

```
public final UnaryCallable<DeleteGlossaryRequest,Operation> deleteGlossaryCallable()
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   DeleteGlossaryRequest request =
       DeleteGlossaryRequest.newBuilder()
           .setName(GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString())
           .build();
   ApiFuture<Operation> future =
       translationServiceClient.deleteGlossaryCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteGlossaryOperationCallable()

```
public final OperationCallable<DeleteGlossaryRequest,DeleteGlossaryResponse,DeleteGlossaryMetadata> deleteGlossaryOperationCallable()
```

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   DeleteGlossaryRequest request =
       DeleteGlossaryRequest.newBuilder()
           .setName(GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString())
           .build();
   OperationFuture<DeleteGlossaryResponse, DeleteGlossaryMetadata> future =
       translationServiceClient.deleteGlossaryOperationCallable().futureCall(request);
   // Do something.
   DeleteGlossaryResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryRequest),[DeleteGlossaryResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryResponse),[DeleteGlossaryMetadata](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DeleteGlossaryMetadata)>`

### detectLanguage(DetectLanguageRequest request)

```
public final DetectLanguageResponse detectLanguage(DetectLanguageRequest request)
```

Detects the language of text within a request.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   DetectLanguageRequest request =
       DetectLanguageRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setModel("model104069929")
           .setMimeType("mimeType-1392120434")
           .putAllLabels(new HashMap<String, String>())
           .build();
   DetectLanguageResponse response = translationServiceClient.detectLanguage(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DetectLanguageRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[DetectLanguageResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageResponse)`

### detectLanguage(LocationName parent, String model, String mimeType, String content)

```
public final DetectLanguageResponse detectLanguage(LocationName parent, String model, String mimeType, String content)
```

Detects the language of text within a request.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String model = "model104069929";
   String mimeType = "mimeType-1392120434";
   String content = "content951530617";
   DetectLanguageResponse response =
       translationServiceClient.detectLanguage(parent, model, mimeType, content);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Only models within the same region (has same location-id) can be used. Otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language detection model to be used.

Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`

Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`.

If not specified, the default model is used.

`mimeType`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".

`content`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The content of the input stored as a string.

**Returns**

**Type**

**Description**

`[DetectLanguageResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageResponse)`

### detectLanguage(String parent, String model, String mimeType, String content)

```
public final DetectLanguageResponse detectLanguage(String parent, String model, String mimeType, String content)
```

Detects the language of text within a request.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String model = "model104069929";
   String mimeType = "mimeType-1392120434";
   String content = "content951530617";
   DetectLanguageResponse response =
       translationServiceClient.detectLanguage(parent, model, mimeType, content);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Only models within the same region (has same location-id) can be used. Otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language detection model to be used.

Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`

Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`.

If not specified, the default model is used.

`mimeType`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".

`content`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The content of the input stored as a string.

**Returns**

**Type**

**Description**

`[DetectLanguageResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageResponse)`

### detectLanguageCallable()

```
public final UnaryCallable<DetectLanguageRequest,DetectLanguageResponse> detectLanguageCallable()
```

Detects the language of text within a request.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   DetectLanguageRequest request =
       DetectLanguageRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setModel("model104069929")
           .setMimeType("mimeType-1392120434")
           .putAllLabels(new HashMap<String, String>())
           .build();
   ApiFuture<DetectLanguageResponse> future =
       translationServiceClient.detectLanguageCallable().futureCall(request);
   // Do something.
   DetectLanguageResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DetectLanguageRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageRequest),[DetectLanguageResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.DetectLanguageResponse)>`

### getGlossary(GetGlossaryRequest request)

```
public final Glossary getGlossary(GetGlossaryRequest request)
```

Gets a glossary. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GetGlossaryRequest request =
       GetGlossaryRequest.newBuilder()
           .setName(GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString())
           .build();
   Glossary response = translationServiceClient.getGlossary(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GetGlossaryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)`

### getGlossary(GlossaryName name)

```
public final Glossary getGlossary(GlossaryName name)
```

Gets a glossary. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GlossaryName name = GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]");
   Glossary response = translationServiceClient.getGlossary(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[GlossaryName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GlossaryName)`  

Required. The name of the glossary to retrieve.

**Returns**

**Type**

**Description**

`[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)`

### getGlossary(String name)

```
public final Glossary getGlossary(String name)
```

Gets a glossary. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String name = GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString();
   Glossary response = translationServiceClient.getGlossary(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the glossary to retrieve.

**Returns**

**Type**

**Description**

`[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)`

### getGlossaryCallable()

```
public final UnaryCallable<GetGlossaryRequest,Glossary> getGlossaryCallable()
```

Gets a glossary. Returns NOT\_FOUND, if the glossary doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GetGlossaryRequest request =
       GetGlossaryRequest.newBuilder()
           .setName(GlossaryName.of("[PROJECT]", "[LOCATION]", "[GLOSSARY]").toString())
           .build();
   ApiFuture<Glossary> future =
       translationServiceClient.getGlossaryCallable().futureCall(request);
   // Do something.
   Glossary response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetGlossaryRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GetGlossaryRequest),[Glossary](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.Glossary)>`

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
public final TranslationServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[TranslationServiceSettings](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceSettings)`

### getStub()

```
public TranslationServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[TranslationServiceStub](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.stub.TranslationServiceStub)`

### getSupportedLanguages(GetSupportedLanguagesRequest request)

```
public final SupportedLanguages getSupportedLanguages(GetSupportedLanguagesRequest request)
```

Returns a list of supported languages for translation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GetSupportedLanguagesRequest request =
       GetSupportedLanguagesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setDisplayLanguageCode("displayLanguageCode-1457478841")
           .setModel("model104069929")
           .build();
   SupportedLanguages response = translationServiceClient.getSupportedLanguages(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetSupportedLanguagesRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GetSupportedLanguagesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SupportedLanguages](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.SupportedLanguages)`

### getSupportedLanguages(LocationName parent, String model, String displayLanguageCode)

```
public final SupportedLanguages getSupportedLanguages(LocationName parent, String model, String displayLanguageCode)
```

Returns a list of supported languages for translation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String model = "model104069929";
   String displayLanguageCode = "displayLanguageCode-1457478841";
   SupportedLanguages response =
       translationServiceClient.getSupportedLanguages(parent, model, displayLanguageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for AutoML models.

Only models within the same region (have same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. Get supported languages of this model.

The format depends on model type:

\- AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`

\- General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,

Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.

`displayLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.

**Returns**

**Type**

**Description**

`[SupportedLanguages](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.SupportedLanguages)`

### getSupportedLanguages(String parent, String model, String displayLanguageCode)

```
public final SupportedLanguages getSupportedLanguages(String parent, String model, String displayLanguageCode)
```

Returns a list of supported languages for translation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String model = "model104069929";
   String displayLanguageCode = "displayLanguageCode-1457478841";
   SupportedLanguages response =
       translationServiceClient.getSupportedLanguages(parent, model, displayLanguageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for AutoML models.

Only models within the same region (have same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. Get supported languages of this model.

The format depends on model type:

\- AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`

\- General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,

Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.

`displayLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.

**Returns**

**Type**

**Description**

`[SupportedLanguages](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.SupportedLanguages)`

### getSupportedLanguagesCallable()

```
public final UnaryCallable<GetSupportedLanguagesRequest,SupportedLanguages> getSupportedLanguagesCallable()
```

Returns a list of supported languages for translation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   GetSupportedLanguagesRequest request =
       GetSupportedLanguagesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setDisplayLanguageCode("displayLanguageCode-1457478841")
           .setModel("model104069929")
           .build();
   ApiFuture<SupportedLanguages> future =
       translationServiceClient.getSupportedLanguagesCallable().futureCall(request);
   // Do something.
   SupportedLanguages response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSupportedLanguagesRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.GetSupportedLanguagesRequest),[SupportedLanguages](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.SupportedLanguages)>`

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

### listGlossaries(ListGlossariesRequest request)

```
public final TranslationServiceClient.ListGlossariesPagedResponse listGlossaries(ListGlossariesRequest request)
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   ListGlossariesRequest request =
       ListGlossariesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (Glossary element : translationServiceClient.listGlossaries(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListGlossariesRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.ListGlossariesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TranslationServiceClient.ListGlossariesPagedResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse)`

### listGlossaries(LocationName parent)

```
public final TranslationServiceClient.ListGlossariesPagedResponse listGlossaries(LocationName parent)
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (Glossary element : translationServiceClient.listGlossaries(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. The name of the project from which to list all of the glossaries.

**Returns**

**Type**

**Description**

`[TranslationServiceClient.ListGlossariesPagedResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse)`

### listGlossaries(String parent)

```
public final TranslationServiceClient.ListGlossariesPagedResponse listGlossaries(String parent)
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (Glossary element : translationServiceClient.listGlossaries(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the project from which to list all of the glossaries.

**Returns**

**Type**

**Description**

`[TranslationServiceClient.ListGlossariesPagedResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse)`

### listGlossariesCallable()

```
public final UnaryCallable<ListGlossariesRequest,ListGlossariesResponse> listGlossariesCallable()
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   ListGlossariesRequest request =
       ListGlossariesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListGlossariesResponse response =
         translationServiceClient.listGlossariesCallable().call(request);
     for (Glossary element : response.getGlossariesList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListGlossariesRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.ListGlossariesRequest),[ListGlossariesResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.ListGlossariesResponse)>`

### listGlossariesPagedCallable()

```
public final UnaryCallable<ListGlossariesRequest,TranslationServiceClient.ListGlossariesPagedResponse> listGlossariesPagedCallable()
```

Lists glossaries in a project. Returns NOT\_FOUND, if the project doesn't exist.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   ListGlossariesRequest request =
       ListGlossariesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<Glossary> future =
       translationServiceClient.listGlossariesPagedCallable().futureCall(request);
   // Do something.
   for (Glossary element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListGlossariesRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.ListGlossariesRequest),[ListGlossariesPagedResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### translateDocument(TranslateDocumentRequest request)

```
public final TranslateDocumentResponse translateDocument(TranslateDocumentRequest request)
```

Translates documents in synchronous mode.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   TranslateDocumentRequest request =
       TranslateDocumentRequest.newBuilder()
           .setParent("parent-995424086")
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .setTargetLanguageCode("targetLanguageCode-106414698")
           .setDocumentInputConfig(DocumentInputConfig.newBuilder().build())
           .setDocumentOutputConfig(DocumentOutputConfig.newBuilder().build())
           .setModel("model104069929")
           .setGlossaryConfig(TranslateTextGlossaryConfig.newBuilder().build())
           .putAllLabels(new HashMap<String, String>())
           .setCustomizedAttribution("customizedAttribution557650238")
           .setIsTranslateNativePdfOnly(true)
           .setEnableShadowRemovalNativePdf(true)
           .setEnableRotationCorrection(true)
           .build();
   TranslateDocumentResponse response = translationServiceClient.translateDocument(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[TranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateDocumentRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateDocumentResponse)`

### translateDocumentCallable()

```
public final UnaryCallable<TranslateDocumentRequest,TranslateDocumentResponse> translateDocumentCallable()
```

Translates documents in synchronous mode.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   TranslateDocumentRequest request =
       TranslateDocumentRequest.newBuilder()
           .setParent("parent-995424086")
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .setTargetLanguageCode("targetLanguageCode-106414698")
           .setDocumentInputConfig(DocumentInputConfig.newBuilder().build())
           .setDocumentOutputConfig(DocumentOutputConfig.newBuilder().build())
           .setModel("model104069929")
           .setGlossaryConfig(TranslateTextGlossaryConfig.newBuilder().build())
           .putAllLabels(new HashMap<String, String>())
           .setCustomizedAttribution("customizedAttribution557650238")
           .setIsTranslateNativePdfOnly(true)
           .setEnableShadowRemovalNativePdf(true)
           .setEnableRotationCorrection(true)
           .build();
   ApiFuture<TranslateDocumentResponse> future =
       translationServiceClient.translateDocumentCallable().futureCall(request);
   // Do something.
   TranslateDocumentResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[TranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateDocumentRequest),[TranslateDocumentResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateDocumentResponse)>`

### translateText(LocationName parent, String model, String mimeType, String sourceLanguageCode, String targetLanguageCode, List<String> contents)

```
public final TranslateTextResponse translateText(LocationName parent, String model, String mimeType, String sourceLanguageCode, String targetLanguageCode, List<String> contents)
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String model = "model104069929";
   String mimeType = "mimeType-1392120434";
   String sourceLanguageCode = "sourceLanguageCode1645917472";
   String targetLanguageCode = "targetLanguageCode-106414698";
   List<String> contents = new ArrayList<>();
   TranslateTextResponse response =
       translationServiceClient.translateText(
           parent, model, mimeType, sourceLanguageCode, targetLanguageCode, contents);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for requests using AutoML models or custom glossaries.

Models and glossaries must be within the same region (have same location-id), otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The `model` type requested for this translation.

The format depends on model type:

\- AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`

\- General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,

For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`.

If not provided, the default Google model (NMT) will be used

`mimeType`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".

`sourceLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.

`targetLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support.

`contents`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.

**Returns**

**Type**

**Description**

`[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)`

### translateText(LocationName parent, String targetLanguageCode, List<String> contents)

```
public final TranslateTextResponse translateText(LocationName parent, String targetLanguageCode, List<String> contents)
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   String targetLanguageCode = "targetLanguageCode-106414698";
   List<String> contents = new ArrayList<>();
   TranslateTextResponse response =
       translationServiceClient.translateText(parent, targetLanguageCode, contents);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.LocationName)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for requests using AutoML models or custom glossaries.

Models and glossaries must be within the same region (have same location-id), otherwise an INVALID\_ARGUMENT (400) error is returned.

`targetLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support.

`contents`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.

**Returns**

**Type**

**Description**

`[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)`

### translateText(TranslateTextRequest request)

```
public final TranslateTextResponse translateText(TranslateTextRequest request)
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   TranslateTextRequest request =
       TranslateTextRequest.newBuilder()
           .addAllContents(new ArrayList<String>())
           .setMimeType("mimeType-1392120434")
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .setTargetLanguageCode("targetLanguageCode-106414698")
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setModel("model104069929")
           .setGlossaryConfig(TranslateTextGlossaryConfig.newBuilder().build())
           .putAllLabels(new HashMap<String, String>())
           .build();
   TranslateTextResponse response = translationServiceClient.translateText(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[TranslateTextRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)`

### translateText(String parent, String model, String mimeType, String sourceLanguageCode, String targetLanguageCode, List<String> contents)

```
public final TranslateTextResponse translateText(String parent, String model, String mimeType, String sourceLanguageCode, String targetLanguageCode, List<String> contents)
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String model = "model104069929";
   String mimeType = "mimeType-1392120434";
   String sourceLanguageCode = "sourceLanguageCode1645917472";
   String targetLanguageCode = "targetLanguageCode-106414698";
   List<String> contents = new ArrayList<>();
   TranslateTextResponse response =
       translationServiceClient.translateText(
           parent, model, mimeType, sourceLanguageCode, targetLanguageCode, contents);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for requests using AutoML models or custom glossaries.

Models and glossaries must be within the same region (have same location-id), otherwise an INVALID\_ARGUMENT (400) error is returned.

`model`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The `model` type requested for this translation.

The format depends on model type:

\- AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`

\- General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,

For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`.

If not provided, the default Google model (NMT) will be used

`mimeType`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".

`sourceLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.

`targetLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support.

`contents`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.

**Returns**

**Type**

**Description**

`[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)`

### translateText(String parent, String targetLanguageCode, List<String> contents)

```
public final TranslateTextResponse translateText(String parent, String targetLanguageCode, List<String> contents)
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   String targetLanguageCode = "targetLanguageCode-106414698";
   List<String> contents = new ArrayList<>();
   TranslateTextResponse response =
       translationServiceClient.translateText(parent, targetLanguageCode, contents);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Project or location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.

For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.

Non-global location is required for requests using AutoML models or custom glossaries.

Models and glossaries must be within the same region (have same location-id), otherwise an INVALID\_ARGUMENT (400) error is returned.

`targetLanguageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support.

`contents`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.

**Returns**

**Type**

**Description**

`[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)`

### translateTextCallable()

```
public final UnaryCallable<TranslateTextRequest,TranslateTextResponse> translateTextCallable()
```

Translates input text and returns translated text.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TranslationServiceClient translationServiceClient = TranslationServiceClient.create()) {
   TranslateTextRequest request =
       TranslateTextRequest.newBuilder()
           .addAllContents(new ArrayList<String>())
           .setMimeType("mimeType-1392120434")
           .setSourceLanguageCode("sourceLanguageCode1645917472")
           .setTargetLanguageCode("targetLanguageCode-106414698")
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setModel("model104069929")
           .setGlossaryConfig(TranslateTextGlossaryConfig.newBuilder().build())
           .putAllLabels(new HashMap<String, String>())
           .build();
   ApiFuture<TranslateTextResponse> future =
       translationServiceClient.translateTextCallable().futureCall(request);
   // Do something.
   TranslateTextResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[TranslateTextRequest](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextRequest),[TranslateTextResponse](/java/docs/reference/google-cloud-translate/2.29.0/com.google.cloud.translate.v3.TranslateTextResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
