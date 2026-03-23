-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AdaptationClient (4.50.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-speech/google-cloud-speech/src/main/java/com/google/cloud/speech/v1p1beta1/AdaptationClient.java)

[Product Reference](https://cloud.google.com/speech-to-text/docs/)

[REST Documentation](https://cloud.google.com/speech-to-text/docs/reference/rest)

[RPC Documentation](https://cloud.google.com/speech-to-text/docs/reference/rpc)

Service Description: Service that implements Google Cloud Speech Adaptation API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   PhraseSet phraseSet = PhraseSet.newBuilder().build();
   String phraseSetId = "phraseSetId959902180";
   PhraseSet response = adaptationClient.createPhraseSet(parent, phraseSet, phraseSetId);
 }
 
```
 

Note: close() needs to be called on the AdaptationClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

CreatePhraseSet

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createPhraseSet(CreatePhraseSetRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   createPhraseSet(LocationName parent, PhraseSet phraseSet, String phraseSetId)
    
-   createPhraseSet(String parent, PhraseSet phraseSet, String phraseSetId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createPhraseSetCallable()
    

GetPhraseSet

Get a phrase set.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getPhraseSet(GetPhraseSetRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getPhraseSet(PhraseSetName name)
    
-   getPhraseSet(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getPhraseSetCallable()
    

ListPhraseSet

List phrase sets.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listPhraseSet(ListPhraseSetRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listPhraseSet(LocationName parent)
    
-   listPhraseSet(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listPhraseSetPagedCallable()
    
-   listPhraseSetCallable()
    

UpdatePhraseSet

Update a phrase set.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updatePhraseSet(UpdatePhraseSetRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updatePhraseSet(PhraseSet phraseSet, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updatePhraseSetCallable()
    

DeletePhraseSet

Delete a phrase set.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deletePhraseSet(DeletePhraseSetRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deletePhraseSet(PhraseSetName name)
    
-   deletePhraseSet(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deletePhraseSetCallable()
    

CreateCustomClass

Create a custom class.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createCustomClass(CreateCustomClassRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   createCustomClass(LocationName parent, CustomClass customClass, String customClassId)
    
-   createCustomClass(String parent, CustomClass customClass, String customClassId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createCustomClassCallable()
    

GetCustomClass

Get a custom class.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getCustomClass(GetCustomClassRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getCustomClass(CustomClassName name)
    
-   getCustomClass(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getCustomClassCallable()
    

ListCustomClasses

List custom classes.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listCustomClasses(ListCustomClassesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listCustomClasses(LocationName parent)
    
-   listCustomClasses(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listCustomClassesPagedCallable()
    
-   listCustomClassesCallable()
    

UpdateCustomClass

Update a custom class.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateCustomClass(UpdateCustomClassRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updateCustomClass(CustomClass customClass, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateCustomClassCallable()
    

DeleteCustomClass

Delete a custom class.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteCustomClass(DeleteCustomClassRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deleteCustomClass(CustomClassName name)
    
-   deleteCustomClass(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteCustomClassCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of AdaptationSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AdaptationSettings adaptationSettings =
     AdaptationSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 AdaptationClient adaptationClient = AdaptationClient.create(adaptationSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AdaptationSettings adaptationSettings =
     AdaptationSettings.newBuilder().setEndpoint(myEndpoint).build();
 AdaptationClient adaptationClient = AdaptationClient.create(adaptationSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AdaptationSettings adaptationSettings = AdaptationSettings.newHttpJsonBuilder().build();
 AdaptationClient adaptationClient = AdaptationClient.create(adaptationSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> AdaptationClient

## Static Methods

### create()

```
public static final AdaptationClient create()
```

Constructs an instance of AdaptationClient with default settings.

**Returns**

**Type**

**Description**

`[AdaptationClient](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(AdaptationSettings settings)

```
public static final AdaptationClient create(AdaptationSettings settings)
```

Constructs an instance of AdaptationClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[AdaptationSettings](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationSettings)`  

**Returns**

**Type**

**Description**

`[AdaptationClient](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(AdaptationStub stub)

```
public static final AdaptationClient create(AdaptationStub stub)
```

Constructs an instance of AdaptationClient, using the given stub for making calls. This is for advanced usage - prefer using create(AdaptationSettings).

**Parameter**

**Name**

**Description**

`stub`

`[AdaptationStub](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.stub.AdaptationStub)`  

**Returns**

**Type**

**Description**

`[AdaptationClient](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient)`

## Constructors

### AdaptationClient(AdaptationSettings settings)

```
protected AdaptationClient(AdaptationSettings settings)
```

Constructs an instance of AdaptationClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[AdaptationSettings](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationSettings)`  

### AdaptationClient(AdaptationStub stub)

```
protected AdaptationClient(AdaptationStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[AdaptationStub](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.stub.AdaptationStub)`  

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

### createCustomClass(CreateCustomClassRequest request)

```
public final CustomClass createCustomClass(CreateCustomClassRequest request)
```

Create a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CreateCustomClassRequest request =
       CreateCustomClassRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setCustomClassId("customClassId1871032322")
           .setCustomClass(CustomClass.newBuilder().build())
           .build();
   CustomClass response = adaptationClient.createCustomClass(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CreateCustomClassRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### createCustomClass(LocationName parent, CustomClass customClass, String customClassId)

```
public final CustomClass createCustomClass(LocationName parent, CustomClass customClass, String customClassId)
```

Create a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   CustomClass customClass = CustomClass.newBuilder().build();
   String customClassId = "customClassId1871032322";
   CustomClass response = adaptationClient.createCustomClass(parent, customClass, customClassId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.LocationName)`  

Required. The parent resource where this custom class will be created. Format:

`projects/{project}/locations/{location}/customClasses`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`customClass`

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`  

Required. The custom class to create.

`customClassId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the custom class, which will become the final component of the custom class' resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### createCustomClass(String parent, CustomClass customClass, String customClassId)

```
public final CustomClass createCustomClass(String parent, CustomClass customClass, String customClassId)
```

Create a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   CustomClass customClass = CustomClass.newBuilder().build();
   String customClassId = "customClassId1871032322";
   CustomClass response = adaptationClient.createCustomClass(parent, customClass, customClassId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent resource where this custom class will be created. Format:

`projects/{project}/locations/{location}/customClasses`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`customClass`

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`  

Required. The custom class to create.

`customClassId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the custom class, which will become the final component of the custom class' resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### createCustomClassCallable()

```
public final UnaryCallable<CreateCustomClassRequest,CustomClass> createCustomClassCallable()
```

Create a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CreateCustomClassRequest request =
       CreateCustomClassRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setCustomClassId("customClassId1871032322")
           .setCustomClass(CustomClass.newBuilder().build())
           .build();
   ApiFuture<CustomClass> future =
       adaptationClient.createCustomClassCallable().futureCall(request);
   // Do something.
   CustomClass response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CreateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### createPhraseSet(CreatePhraseSetRequest request)

```
public final PhraseSet createPhraseSet(CreatePhraseSetRequest request)
```

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CreatePhraseSetRequest request =
       CreatePhraseSetRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPhraseSetId("phraseSetId959902180")
           .setPhraseSet(PhraseSet.newBuilder().build())
           .build();
   PhraseSet response = adaptationClient.createPhraseSet(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CreatePhraseSetRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### createPhraseSet(LocationName parent, PhraseSet phraseSet, String phraseSetId)

```
public final PhraseSet createPhraseSet(LocationName parent, PhraseSet phraseSet, String phraseSetId)
```

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   PhraseSet phraseSet = PhraseSet.newBuilder().build();
   String phraseSetId = "phraseSetId959902180";
   PhraseSet response = adaptationClient.createPhraseSet(parent, phraseSet, phraseSetId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.LocationName)`  

Required. The parent resource where this phrase set will be created. Format:

`projects/{project}/locations/{location}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`phraseSet`

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`  

Required. The phrase set to create.

`phraseSetId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### createPhraseSet(String parent, PhraseSet phraseSet, String phraseSetId)

```
public final PhraseSet createPhraseSet(String parent, PhraseSet phraseSet, String phraseSetId)
```

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   PhraseSet phraseSet = PhraseSet.newBuilder().build();
   String phraseSetId = "phraseSetId959902180";
   PhraseSet response = adaptationClient.createPhraseSet(parent, phraseSet, phraseSetId);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent resource where this phrase set will be created. Format:

`projects/{project}/locations/{location}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`phraseSet`

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`  

Required. The phrase set to create.

`phraseSetId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### createPhraseSetCallable()

```
public final UnaryCallable<CreatePhraseSetRequest,PhraseSet> createPhraseSetCallable()
```

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CreatePhraseSetRequest request =
       CreatePhraseSetRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPhraseSetId("phraseSetId959902180")
           .setPhraseSet(PhraseSet.newBuilder().build())
           .build();
   ApiFuture<PhraseSet> future = adaptationClient.createPhraseSetCallable().futureCall(request);
   // Do something.
   PhraseSet response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CreatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

### deleteCustomClass(CustomClassName name)

```
public final void deleteCustomClass(CustomClassName name)
```

Delete a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CustomClassName name = CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]");
   adaptationClient.deleteCustomClass(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[CustomClassName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClassName)`  

Required. The name of the custom class to delete. Format:

`projects/{project}/locations/{location}/customClasses/{custom_class}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

### deleteCustomClass(DeleteCustomClassRequest request)

```
public final void deleteCustomClass(DeleteCustomClassRequest request)
```

Delete a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   DeleteCustomClassRequest request =
       DeleteCustomClassRequest.newBuilder()
           .setName(CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString())
           .build();
   adaptationClient.deleteCustomClass(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.DeleteCustomClassRequest)`  

The request object containing all of the parameters for the API call.

### deleteCustomClass(String name)

```
public final void deleteCustomClass(String name)
```

Delete a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String name = CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString();
   adaptationClient.deleteCustomClass(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the custom class to delete. Format:

`projects/{project}/locations/{location}/customClasses/{custom_class}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

### deleteCustomClassCallable()

```
public final UnaryCallable<DeleteCustomClassRequest,Empty> deleteCustomClassCallable()
```

Delete a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   DeleteCustomClassRequest request =
       DeleteCustomClassRequest.newBuilder()
           .setName(CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString())
           .build();
   ApiFuture<Empty> future = adaptationClient.deleteCustomClassCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.DeleteCustomClassRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deletePhraseSet(DeletePhraseSetRequest request)

```
public final void deletePhraseSet(DeletePhraseSetRequest request)
```

Delete a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   DeletePhraseSetRequest request =
       DeletePhraseSetRequest.newBuilder()
           .setName(PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString())
           .build();
   adaptationClient.deletePhraseSet(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.DeletePhraseSetRequest)`  

The request object containing all of the parameters for the API call.

### deletePhraseSet(PhraseSetName name)

```
public final void deletePhraseSet(PhraseSetName name)
```

Delete a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   PhraseSetName name = PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]");
   adaptationClient.deletePhraseSet(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[PhraseSetName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSetName)`  

Required. The name of the phrase set to delete. Format:

`projects/{project}/locations/{location}/phraseSets/{phrase_set}`

### deletePhraseSet(String name)

```
public final void deletePhraseSet(String name)
```

Delete a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String name = PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString();
   adaptationClient.deletePhraseSet(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the phrase set to delete. Format:

`projects/{project}/locations/{location}/phraseSets/{phrase_set}`

### deletePhraseSetCallable()

```
public final UnaryCallable<DeletePhraseSetRequest,Empty> deletePhraseSetCallable()
```

Delete a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   DeletePhraseSetRequest request =
       DeletePhraseSetRequest.newBuilder()
           .setName(PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString())
           .build();
   ApiFuture<Empty> future = adaptationClient.deletePhraseSetCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.DeletePhraseSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getCustomClass(CustomClassName name)

```
public final CustomClass getCustomClass(CustomClassName name)
```

Get a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CustomClassName name = CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]");
   CustomClass response = adaptationClient.getCustomClass(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[CustomClassName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClassName)`  

Required. The name of the custom class to retrieve. Format:

`projects/{project}/locations/{location}/customClasses/{custom_class}`

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### getCustomClass(GetCustomClassRequest request)

```
public final CustomClass getCustomClass(GetCustomClassRequest request)
```

Get a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   GetCustomClassRequest request =
       GetCustomClassRequest.newBuilder()
           .setName(CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString())
           .build();
   CustomClass response = adaptationClient.getCustomClass(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.GetCustomClassRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### getCustomClass(String name)

```
public final CustomClass getCustomClass(String name)
```

Get a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String name = CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString();
   CustomClass response = adaptationClient.getCustomClass(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the custom class to retrieve. Format:

`projects/{project}/locations/{location}/customClasses/{custom_class}`

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### getCustomClassCallable()

```
public final UnaryCallable<GetCustomClassRequest,CustomClass> getCustomClassCallable()
```

Get a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   GetCustomClassRequest request =
       GetCustomClassRequest.newBuilder()
           .setName(CustomClassName.of("[PROJECT]", "[LOCATION]", "[CUSTOM_CLASS]").toString())
           .build();
   ApiFuture<CustomClass> future = adaptationClient.getCustomClassCallable().futureCall(request);
   // Do something.
   CustomClass response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.GetCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### getPhraseSet(GetPhraseSetRequest request)

```
public final PhraseSet getPhraseSet(GetPhraseSetRequest request)
```

Get a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   GetPhraseSetRequest request =
       GetPhraseSetRequest.newBuilder()
           .setName(PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString())
           .build();
   PhraseSet response = adaptationClient.getPhraseSet(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.GetPhraseSetRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### getPhraseSet(PhraseSetName name)

```
public final PhraseSet getPhraseSet(PhraseSetName name)
```

Get a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   PhraseSetName name = PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]");
   PhraseSet response = adaptationClient.getPhraseSet(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[PhraseSetName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSetName)`  

Required. The name of the phrase set to retrieve. Format:

`projects/{project}/locations/{location}/phraseSets/{phrase_set}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### getPhraseSet(String name)

```
public final PhraseSet getPhraseSet(String name)
```

Get a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String name = PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString();
   PhraseSet response = adaptationClient.getPhraseSet(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the phrase set to retrieve. Format:

`projects/{project}/locations/{location}/phraseSets/{phrase_set}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### getPhraseSetCallable()

```
public final UnaryCallable<GetPhraseSetRequest,PhraseSet> getPhraseSetCallable()
```

Get a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   GetPhraseSetRequest request =
       GetPhraseSetRequest.newBuilder()
           .setName(PhraseSetName.of("[PROJECT]", "[LOCATION]", "[PHRASE_SET]").toString())
           .build();
   ApiFuture<PhraseSet> future = adaptationClient.getPhraseSetCallable().futureCall(request);
   // Do something.
   PhraseSet response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.GetPhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

### getSettings()

```
public final AdaptationSettings getSettings()
```

**Returns**

**Type**

**Description**

`[AdaptationSettings](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationSettings)`

### getStub()

```
public AdaptationStub getStub()
```

**Returns**

**Type**

**Description**

`[AdaptationStub](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.stub.AdaptationStub)`

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

### listCustomClasses(ListCustomClassesRequest request)

```
public final AdaptationClient.ListCustomClassesPagedResponse listCustomClasses(ListCustomClassesRequest request)
```

List custom classes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListCustomClassesRequest request =
       ListCustomClassesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (CustomClass element : adaptationClient.listCustomClasses(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListCustomClassesPagedResponse)`

### listCustomClasses(LocationName parent)

```
public final AdaptationClient.ListCustomClassesPagedResponse listCustomClasses(LocationName parent)
```

List custom classes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (CustomClass element : adaptationClient.listCustomClasses(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.LocationName)`  

Required. The parent, which owns this collection of custom classes. Format:

`projects/{project}/locations/{location}/customClasses`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListCustomClassesPagedResponse)`

### listCustomClasses(String parent)

```
public final AdaptationClient.ListCustomClassesPagedResponse listCustomClasses(String parent)
```

List custom classes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (CustomClass element : adaptationClient.listCustomClasses(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent, which owns this collection of custom classes. Format:

`projects/{project}/locations/{location}/customClasses`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListCustomClassesPagedResponse)`

### listCustomClassesCallable()

```
public final UnaryCallable<ListCustomClassesRequest,ListCustomClassesResponse> listCustomClassesCallable()
```

List custom classes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListCustomClassesRequest request =
       ListCustomClassesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListCustomClassesResponse response =
         adaptationClient.listCustomClassesCallable().call(request);
     for (CustomClass element : response.getCustomClassesList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesRequest),[ListCustomClassesResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesResponse)>`

### listCustomClassesPagedCallable()

```
public final UnaryCallable<ListCustomClassesRequest,AdaptationClient.ListCustomClassesPagedResponse> listCustomClassesPagedCallable()
```

List custom classes.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListCustomClassesRequest request =
       ListCustomClassesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<CustomClass> future =
       adaptationClient.listCustomClassesPagedCallable().futureCall(request);
   // Do something.
   for (CustomClass element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListCustomClassesRequest),[ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListCustomClassesPagedResponse)>`

### listPhraseSet(ListPhraseSetRequest request)

```
public final AdaptationClient.ListPhraseSetPagedResponse listPhraseSet(ListPhraseSetRequest request)
```

List phrase sets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListPhraseSetRequest request =
       ListPhraseSetRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (PhraseSet element : adaptationClient.listPhraseSet(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListPhraseSetPagedResponse)`

### listPhraseSet(LocationName parent)

```
public final AdaptationClient.ListPhraseSetPagedResponse listPhraseSet(LocationName parent)
```

List phrase sets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (PhraseSet element : adaptationClient.listPhraseSet(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[LocationName](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.LocationName)`  

Required. The parent, which owns this collection of phrase set. Format:

`projects/{project}/locations/{location}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListPhraseSetPagedResponse)`

### listPhraseSet(String parent)

```
public final AdaptationClient.ListPhraseSetPagedResponse listPhraseSet(String parent)
```

List phrase sets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (PhraseSet element : adaptationClient.listPhraseSet(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent, which owns this collection of phrase set. Format:

`projects/{project}/locations/{location}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

**Returns**

**Type**

**Description**

`[AdaptationClient.ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListPhraseSetPagedResponse)`

### listPhraseSetCallable()

```
public final UnaryCallable<ListPhraseSetRequest,ListPhraseSetResponse> listPhraseSetCallable()
```

List phrase sets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListPhraseSetRequest request =
       ListPhraseSetRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListPhraseSetResponse response = adaptationClient.listPhraseSetCallable().call(request);
     for (PhraseSet element : response.getPhraseSetsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetRequest),[ListPhraseSetResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetResponse)>`

### listPhraseSetPagedCallable()

```
public final UnaryCallable<ListPhraseSetRequest,AdaptationClient.ListPhraseSetPagedResponse> listPhraseSetPagedCallable()
```

List phrase sets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   ListPhraseSetRequest request =
       ListPhraseSetRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<PhraseSet> future =
       adaptationClient.listPhraseSetPagedCallable().futureCall(request);
   // Do something.
   for (PhraseSet element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.ListPhraseSetRequest),[ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient.ListPhraseSetPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateCustomClass(CustomClass customClass, FieldMask updateMask)

```
public final CustomClass updateCustomClass(CustomClass customClass, FieldMask updateMask)
```

Update a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   CustomClass customClass = CustomClass.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   CustomClass response = adaptationClient.updateCustomClass(customClass, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`customClass`

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`  

Required. The custom class to update.

The custom class's `name` field is used to identify the custom class to be updated. Format:

`projects/{project}/locations/{location}/customClasses/{custom_class}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

The list of fields to be updated.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### updateCustomClass(UpdateCustomClassRequest request)

```
public final CustomClass updateCustomClass(UpdateCustomClassRequest request)
```

Update a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   UpdateCustomClassRequest request =
       UpdateCustomClassRequest.newBuilder()
           .setCustomClass(CustomClass.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   CustomClass response = adaptationClient.updateCustomClass(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.UpdateCustomClassRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)`

### updateCustomClassCallable()

```
public final UnaryCallable<UpdateCustomClassRequest,CustomClass> updateCustomClassCallable()
```

Update a custom class.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   UpdateCustomClassRequest request =
       UpdateCustomClassRequest.newBuilder()
           .setCustomClass(CustomClass.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<CustomClass> future =
       adaptationClient.updateCustomClassCallable().futureCall(request);
   // Do something.
   CustomClass response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.UpdateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.CustomClass)>`

### updatePhraseSet(PhraseSet phraseSet, FieldMask updateMask)

```
public final PhraseSet updatePhraseSet(PhraseSet phraseSet, FieldMask updateMask)
```

Update a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   PhraseSet phraseSet = PhraseSet.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   PhraseSet response = adaptationClient.updatePhraseSet(phraseSet, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`phraseSet`

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`  

Required. The phrase set to update.

The phrase set's `name` field is used to identify the set to be updated. Format:

`projects/{project}/locations/{location}/phraseSets/{phrase_set}`

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

The list of fields to be updated.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### updatePhraseSet(UpdatePhraseSetRequest request)

```
public final PhraseSet updatePhraseSet(UpdatePhraseSetRequest request)
```

Update a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   UpdatePhraseSetRequest request =
       UpdatePhraseSetRequest.newBuilder()
           .setPhraseSet(PhraseSet.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   PhraseSet response = adaptationClient.updatePhraseSet(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.UpdatePhraseSetRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)`

### updatePhraseSetCallable()

```
public final UnaryCallable<UpdatePhraseSetRequest,PhraseSet> updatePhraseSetCallable()
```

Update a phrase set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (AdaptationClient adaptationClient = AdaptationClient.create()) {
   UpdatePhraseSetRequest request =
       UpdatePhraseSetRequest.newBuilder()
           .setPhraseSet(PhraseSet.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<PhraseSet> future = adaptationClient.updatePhraseSetCallable().futureCall(request);
   // Do something.
   PhraseSet response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.UpdatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.PhraseSet)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
