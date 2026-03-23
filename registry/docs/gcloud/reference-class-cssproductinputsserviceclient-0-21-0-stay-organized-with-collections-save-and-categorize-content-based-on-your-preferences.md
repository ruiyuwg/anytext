-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CssProductInputsServiceClient (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-shopping-css/google-shopping-css/src/main/java/com/google/shopping/css/v1/CssProductInputsServiceClient.java)

[Product Reference](https://developers.google.com/comparison-shopping-services/api)

Service Description: Service to use CssProductInput resource. This service helps to insert/update/delete CSS Products.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   InsertCssProductInputRequest request =
       InsertCssProductInputRequest.newBuilder()
           .setParent(AccountName.of("[ACCOUNT]").toString())
           .setCssProductInput(CssProductInput.newBuilder().build())
           .setFeedId(-976011428)
           .build();
   CssProductInput response = cssProductInputsServiceClient.insertCssProductInput(request);
 }
 
```
 

Note: close() needs to be called on the CssProductInputsServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

InsertCssProductInput

Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry.

After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   insertCssProductInput(InsertCssProductInputRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   insertCssProductInputCallable()
    

DeleteCssProductInput

Deletes a CSS Product input from your CSS Center account.

After a delete it may take several minutes until the input is no longer available.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteCssProductInput(DeleteCssProductInputRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deleteCssProductInput(CssProductInputName name)
    
-   deleteCssProductInput(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteCssProductInputCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of CssProductInputsServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CssProductInputsServiceSettings cssProductInputsServiceSettings =
     CssProductInputsServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create(cssProductInputsServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CssProductInputsServiceSettings cssProductInputsServiceSettings =
     CssProductInputsServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create(cssProductInputsServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CssProductInputsServiceSettings cssProductInputsServiceSettings =
     CssProductInputsServiceSettings.newHttpJsonBuilder().build();
 CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create(cssProductInputsServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> CssProductInputsServiceClient

## Static Methods

### create()

```
public static final CssProductInputsServiceClient create()
```

Constructs an instance of CssProductInputsServiceClient with default settings.

**Returns**

**Type**

**Description**

`[CssProductInputsServiceClient](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(CssProductInputsServiceSettings settings)

```
public static final CssProductInputsServiceClient create(CssProductInputsServiceSettings settings)
```

Constructs an instance of CssProductInputsServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[CssProductInputsServiceSettings](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceSettings)`  

**Returns**

**Type**

**Description**

`[CssProductInputsServiceClient](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(CssProductInputsServiceStub stub)

```
public static final CssProductInputsServiceClient create(CssProductInputsServiceStub stub)
```

Constructs an instance of CssProductInputsServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(CssProductInputsServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[CssProductInputsServiceStub](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.stub.CssProductInputsServiceStub)`  

**Returns**

**Type**

**Description**

`[CssProductInputsServiceClient](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceClient)`

## Constructors

### CssProductInputsServiceClient(CssProductInputsServiceSettings settings)

```
protected CssProductInputsServiceClient(CssProductInputsServiceSettings settings)
```

Constructs an instance of CssProductInputsServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[CssProductInputsServiceSettings](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceSettings)`  

### CssProductInputsServiceClient(CssProductInputsServiceStub stub)

```
protected CssProductInputsServiceClient(CssProductInputsServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[CssProductInputsServiceStub](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.stub.CssProductInputsServiceStub)`  

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

### deleteCssProductInput(CssProductInputName name)

```
public final void deleteCssProductInput(CssProductInputName name)
```

Deletes a CSS Product input from your CSS Center account.

After a delete it may take several minutes until the input is no longer available.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   CssProductInputName name = CssProductInputName.of("[ACCOUNT]", "[CSS_PRODUCT_INPUT]");
   cssProductInputsServiceClient.deleteCssProductInput(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[CssProductInputName](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputName)`  

Required. The name of the CSS product input resource to delete. Format: accounts/{account}/cssProductInputs/{css\_product\_input}

### deleteCssProductInput(DeleteCssProductInputRequest request)

```
public final void deleteCssProductInput(DeleteCssProductInputRequest request)
```

Deletes a CSS Product input from your CSS Center account.

After a delete it may take several minutes until the input is no longer available.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   DeleteCssProductInputRequest request =
       DeleteCssProductInputRequest.newBuilder()
           .setName(CssProductInputName.of("[ACCOUNT]", "[CSS_PRODUCT_INPUT]").toString())
           .setSupplementalFeedId(1845271745)
           .build();
   cssProductInputsServiceClient.deleteCssProductInput(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteCssProductInputRequest](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.DeleteCssProductInputRequest)`  

The request object containing all of the parameters for the API call.

### deleteCssProductInput(String name)

```
public final void deleteCssProductInput(String name)
```

Deletes a CSS Product input from your CSS Center account.

After a delete it may take several minutes until the input is no longer available.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   String name = CssProductInputName.of("[ACCOUNT]", "[CSS_PRODUCT_INPUT]").toString();
   cssProductInputsServiceClient.deleteCssProductInput(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the CSS product input resource to delete. Format: accounts/{account}/cssProductInputs/{css\_product\_input}

### deleteCssProductInputCallable()

```
public final UnaryCallable<DeleteCssProductInputRequest,Empty> deleteCssProductInputCallable()
```

Deletes a CSS Product input from your CSS Center account.

After a delete it may take several minutes until the input is no longer available.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   DeleteCssProductInputRequest request =
       DeleteCssProductInputRequest.newBuilder()
           .setName(CssProductInputName.of("[ACCOUNT]", "[CSS_PRODUCT_INPUT]").toString())
           .setSupplementalFeedId(1845271745)
           .build();
   ApiFuture<Empty> future =
       cssProductInputsServiceClient.deleteCssProductInputCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteCssProductInputRequest](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.DeleteCssProductInputRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getSettings()

```
public final CssProductInputsServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[CssProductInputsServiceSettings](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInputsServiceSettings)`

### getStub()

```
public CssProductInputsServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[CssProductInputsServiceStub](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.stub.CssProductInputsServiceStub)`

### insertCssProductInput(InsertCssProductInputRequest request)

```
public final CssProductInput insertCssProductInput(InsertCssProductInputRequest request)
```

Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry.

After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   InsertCssProductInputRequest request =
       InsertCssProductInputRequest.newBuilder()
           .setParent(AccountName.of("[ACCOUNT]").toString())
           .setCssProductInput(CssProductInput.newBuilder().build())
           .setFeedId(-976011428)
           .build();
   CssProductInput response = cssProductInputsServiceClient.insertCssProductInput(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[InsertCssProductInputRequest](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.InsertCssProductInputRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[CssProductInput](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInput)`

### insertCssProductInputCallable()

```
public final UnaryCallable<InsertCssProductInputRequest,CssProductInput> insertCssProductInputCallable()
```

Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry.

After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CssProductInputsServiceClient cssProductInputsServiceClient =
     CssProductInputsServiceClient.create()) {
   InsertCssProductInputRequest request =
       InsertCssProductInputRequest.newBuilder()
           .setParent(AccountName.of("[ACCOUNT]").toString())
           .setCssProductInput(CssProductInput.newBuilder().build())
           .setFeedId(-976011428)
           .build();
   ApiFuture<CssProductInput> future =
       cssProductInputsServiceClient.insertCssProductInputCallable().futureCall(request);
   // Do something.
   CssProductInput response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[InsertCssProductInputRequest](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.InsertCssProductInputRequest),[CssProductInput](/java/docs/reference/google-shopping-css/0.21.0/com.google.shopping.css.v1.CssProductInput)>`

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
