-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EmailPreferencesServiceClient (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-shopping-merchant-accounts/google-shopping-merchant-accounts/src/main/java/com/google/shopping/merchant/accounts/v1beta/EmailPreferencesServiceClient.java)

[Product Reference](https://developers.google.com/merchant/api)

Service Description: Service to support the `EmailPreferences` API.

This service only permits retrieving and updating email preferences for the authenticated user.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   EmailPreferencesName name = EmailPreferencesName.of("[ACCOUNT]", "[EMAIL]");
   EmailPreferences response = emailPreferencesServiceClient.getEmailPreferences(name);
 }
 
```
 

Note: close() needs to be called on the EmailPreferencesServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

GetEmailPreferences

Returns the email preferences for a Merchant Center account user.

Use the name=accounts/\*/users/me/emailPreferences alias to get preferences for the authenticated user.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getEmailPreferences(GetEmailPreferencesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getEmailPreferences(EmailPreferencesName name)
    
-   getEmailPreferences(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getEmailPreferencesCallable()
    

UpdateEmailPreferences

Updates the email preferences for a Merchant Center account user. MCA users should specify the MCA account rather than a sub-account of the MCA.

Preferences which are not explicitly selected in the update mask will not be updated.

It is invalid for updates to specify an UNCONFIRMED opt-in status value.

Use the name=accounts/\*/users/me/emailPreferences alias to update preferences for the authenticated user.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateEmailPreferences(UpdateEmailPreferencesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updateEmailPreferences(EmailPreferences emailPreferences, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateEmailPreferencesCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of EmailPreferencesServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EmailPreferencesServiceSettings emailPreferencesServiceSettings =
     EmailPreferencesServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create(emailPreferencesServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EmailPreferencesServiceSettings emailPreferencesServiceSettings =
     EmailPreferencesServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create(emailPreferencesServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EmailPreferencesServiceSettings emailPreferencesServiceSettings =
     EmailPreferencesServiceSettings.newHttpJsonBuilder().build();
 EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create(emailPreferencesServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> EmailPreferencesServiceClient

## Static Methods

### create()

```
public static final EmailPreferencesServiceClient create()
```

Constructs an instance of EmailPreferencesServiceClient with default settings.

**Returns**

**Type**

**Description**

`[EmailPreferencesServiceClient](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EmailPreferencesServiceSettings settings)

```
public static final EmailPreferencesServiceClient create(EmailPreferencesServiceSettings settings)
```

Constructs an instance of EmailPreferencesServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[EmailPreferencesServiceSettings](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceSettings)`  

**Returns**

**Type**

**Description**

`[EmailPreferencesServiceClient](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EmailPreferencesServiceStub stub)

```
public static final EmailPreferencesServiceClient create(EmailPreferencesServiceStub stub)
```

Constructs an instance of EmailPreferencesServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(EmailPreferencesServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[EmailPreferencesServiceStub](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.stub.EmailPreferencesServiceStub)`  

**Returns**

**Type**

**Description**

`[EmailPreferencesServiceClient](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceClient)`

## Constructors

### EmailPreferencesServiceClient(EmailPreferencesServiceSettings settings)

```
protected EmailPreferencesServiceClient(EmailPreferencesServiceSettings settings)
```

Constructs an instance of EmailPreferencesServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[EmailPreferencesServiceSettings](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceSettings)`  

### EmailPreferencesServiceClient(EmailPreferencesServiceStub stub)

```
protected EmailPreferencesServiceClient(EmailPreferencesServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[EmailPreferencesServiceStub](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.stub.EmailPreferencesServiceStub)`  

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

### getEmailPreferences(EmailPreferencesName name)

```
public final EmailPreferences getEmailPreferences(EmailPreferencesName name)
```

Returns the email preferences for a Merchant Center account user.

Use the name=accounts/\*/users/me/emailPreferences alias to get preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   EmailPreferencesName name = EmailPreferencesName.of("[ACCOUNT]", "[EMAIL]");
   EmailPreferences response = emailPreferencesServiceClient.getEmailPreferences(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EmailPreferencesName](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesName)`  

Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences`

**Returns**

**Type**

**Description**

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`

### getEmailPreferences(GetEmailPreferencesRequest request)

```
public final EmailPreferences getEmailPreferences(GetEmailPreferencesRequest request)
```

Returns the email preferences for a Merchant Center account user.

Use the name=accounts/\*/users/me/emailPreferences alias to get preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   GetEmailPreferencesRequest request =
       GetEmailPreferencesRequest.newBuilder()
           .setName(EmailPreferencesName.of("[ACCOUNT]", "[EMAIL]").toString())
           .build();
   EmailPreferences response = emailPreferencesServiceClient.getEmailPreferences(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetEmailPreferencesRequest](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.GetEmailPreferencesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`

### getEmailPreferences(String name)

```
public final EmailPreferences getEmailPreferences(String name)
```

Returns the email preferences for a Merchant Center account user.

Use the name=accounts/\*/users/me/emailPreferences alias to get preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   String name = EmailPreferencesName.of("[ACCOUNT]", "[EMAIL]").toString();
   EmailPreferences response = emailPreferencesServiceClient.getEmailPreferences(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences`

**Returns**

**Type**

**Description**

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`

### getEmailPreferencesCallable()

```
public final UnaryCallable<GetEmailPreferencesRequest,EmailPreferences> getEmailPreferencesCallable()
```

Returns the email preferences for a Merchant Center account user.

Use the name=accounts/\*/users/me/emailPreferences alias to get preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   GetEmailPreferencesRequest request =
       GetEmailPreferencesRequest.newBuilder()
           .setName(EmailPreferencesName.of("[ACCOUNT]", "[EMAIL]").toString())
           .build();
   ApiFuture<EmailPreferences> future =
       emailPreferencesServiceClient.getEmailPreferencesCallable().futureCall(request);
   // Do something.
   EmailPreferences response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEmailPreferencesRequest](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.GetEmailPreferencesRequest),[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)>`

### getSettings()

```
public final EmailPreferencesServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[EmailPreferencesServiceSettings](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferencesServiceSettings)`

### getStub()

```
public EmailPreferencesServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[EmailPreferencesServiceStub](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.stub.EmailPreferencesServiceStub)`

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

### updateEmailPreferences(EmailPreferences emailPreferences, FieldMask updateMask)

```
public final EmailPreferences updateEmailPreferences(EmailPreferences emailPreferences, FieldMask updateMask)
```

Updates the email preferences for a Merchant Center account user. MCA users should specify the MCA account rather than a sub-account of the MCA.

Preferences which are not explicitly selected in the update mask will not be updated.

It is invalid for updates to specify an UNCONFIRMED opt-in status value.

Use the name=accounts/\*/users/me/emailPreferences alias to update preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   EmailPreferences emailPreferences = EmailPreferences.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   EmailPreferences response =
       emailPreferencesServiceClient.updateEmailPreferences(emailPreferences, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`emailPreferences`

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`  

Required. Email Preferences to be updated.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. List of fields being updated.

**Returns**

**Type**

**Description**

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`

### updateEmailPreferences(UpdateEmailPreferencesRequest request)

```
public final EmailPreferences updateEmailPreferences(UpdateEmailPreferencesRequest request)
```

Updates the email preferences for a Merchant Center account user. MCA users should specify the MCA account rather than a sub-account of the MCA.

Preferences which are not explicitly selected in the update mask will not be updated.

It is invalid for updates to specify an UNCONFIRMED opt-in status value.

Use the name=accounts/\*/users/me/emailPreferences alias to update preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   UpdateEmailPreferencesRequest request =
       UpdateEmailPreferencesRequest.newBuilder()
           .setEmailPreferences(EmailPreferences.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   EmailPreferences response = emailPreferencesServiceClient.updateEmailPreferences(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateEmailPreferencesRequest](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.UpdateEmailPreferencesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)`

### updateEmailPreferencesCallable()

```
public final UnaryCallable<UpdateEmailPreferencesRequest,EmailPreferences> updateEmailPreferencesCallable()
```

Updates the email preferences for a Merchant Center account user. MCA users should specify the MCA account rather than a sub-account of the MCA.

Preferences which are not explicitly selected in the update mask will not be updated.

It is invalid for updates to specify an UNCONFIRMED opt-in status value.

Use the name=accounts/\*/users/me/emailPreferences alias to update preferences for the authenticated user.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EmailPreferencesServiceClient emailPreferencesServiceClient =
     EmailPreferencesServiceClient.create()) {
   UpdateEmailPreferencesRequest request =
       UpdateEmailPreferencesRequest.newBuilder()
           .setEmailPreferences(EmailPreferences.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<EmailPreferences> future =
       emailPreferencesServiceClient.updateEmailPreferencesCallable().futureCall(request);
   // Do something.
   EmailPreferences response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEmailPreferencesRequest](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.UpdateEmailPreferencesRequest),[EmailPreferences](/java/docs/reference/google-shopping-merchant-accounts/0.5.0/com.google.shopping.merchant.accounts.v1beta.EmailPreferences)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
