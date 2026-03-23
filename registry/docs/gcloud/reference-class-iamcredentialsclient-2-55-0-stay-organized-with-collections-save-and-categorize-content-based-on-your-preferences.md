-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class IamCredentialsClient (2.55.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.0 2.0.15

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-iamcredentials/google-cloud-iamcredentials/src/main/java/com/google/cloud/iam/credentials/v1/IamCredentialsClient.java)

[Product Reference](https://cloud.google.com/iam/credentials/reference/rest/)

Service Description: A service account is a special type of Google account that belongs to your application or a virtual machine (VM), instead of to an individual end user. Your application assumes the identity of the service account to call Google APIs, so that the users aren't directly involved.

Service account credentials are used to temporarily assume the identity of the service account. Supported credential types include OAuth 2.0 access tokens, OpenID Connect ID tokens, self-signed JSON Web Tokens (JWTs), and more.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   List<String> delegates = new ArrayList<>();
   List<String> scope = new ArrayList<>();
   Duration lifetime = Duration.newBuilder().build();
   GenerateAccessTokenResponse response =
       iamCredentialsClient.generateAccessToken(name, delegates, scope, lifetime);
 }
 
```
 

Note: close() needs to be called on the IamCredentialsClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

GenerateAccessToken

Generates an OAuth 2.0 access token for a service account.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   generateAccessToken(GenerateAccessTokenRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   generateAccessToken(ServiceAccountName name, List<String> delegates, List<String> scope, Duration lifetime)
    
-   generateAccessToken(String name, List<String> delegates, List<String> scope, Duration lifetime)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   generateAccessTokenCallable()
    

GenerateIdToken

Generates an OpenID Connect ID token for a service account.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   generateIdToken(GenerateIdTokenRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   generateIdToken(ServiceAccountName name, List<String> delegates, String audience, boolean includeEmail)
    
-   generateIdToken(String name, List<String> delegates, String audience, boolean includeEmail)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   generateIdTokenCallable()
    

SignBlob

Signs a blob using a service account's system-managed private key.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   signBlob(SignBlobRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   signBlob(ServiceAccountName name, List<String> delegates, ByteString payload)
    
-   signBlob(String name, List<String> delegates, ByteString payload)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   signBlobCallable()
    

SignJwt

Signs a JWT using a service account's system-managed private key.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   signJwt(SignJwtRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   signJwt(ServiceAccountName name, List<String> delegates, String payload)
    
-   signJwt(String name, List<String> delegates, String payload)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   signJwtCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of IamCredentialsSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCredentialsSettings iamCredentialsSettings =
     IamCredentialsSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create(iamCredentialsSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCredentialsSettings iamCredentialsSettings =
     IamCredentialsSettings.newBuilder().setEndpoint(myEndpoint).build();
 IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create(iamCredentialsSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCredentialsSettings iamCredentialsSettings =
     IamCredentialsSettings.newHttpJsonBuilder().build();
 IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create(iamCredentialsSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> IamCredentialsClient

## Static Methods

### create()

```
public static final IamCredentialsClient create()
```

Constructs an instance of IamCredentialsClient with default settings.

**Returns**

**Type**

**Description**

`[IamCredentialsClient](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(IamCredentialsSettings settings)

```
public static final IamCredentialsClient create(IamCredentialsSettings settings)
```

Constructs an instance of IamCredentialsClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[IamCredentialsSettings](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsSettings)`  

**Returns**

**Type**

**Description**

`[IamCredentialsClient](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(IamCredentialsStub stub)

```
public static final IamCredentialsClient create(IamCredentialsStub stub)
```

Constructs an instance of IamCredentialsClient, using the given stub for making calls. This is for advanced usage - prefer using create(IamCredentialsSettings).

**Parameter**

**Name**

**Description**

`stub`

`[IamCredentialsStub](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.stub.IamCredentialsStub)`  

**Returns**

**Type**

**Description**

`[IamCredentialsClient](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsClient)`

## Constructors

### IamCredentialsClient(IamCredentialsSettings settings)

```
protected IamCredentialsClient(IamCredentialsSettings settings)
```

Constructs an instance of IamCredentialsClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[IamCredentialsSettings](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsSettings)`  

### IamCredentialsClient(IamCredentialsStub stub)

```
protected IamCredentialsClient(IamCredentialsStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[IamCredentialsStub](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.stub.IamCredentialsStub)`  

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

### generateAccessToken(GenerateAccessTokenRequest request)

```
public final GenerateAccessTokenResponse generateAccessToken(GenerateAccessTokenRequest request)
```

Generates an OAuth 2.0 access token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   GenerateAccessTokenRequest request =
       GenerateAccessTokenRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .addAllScope(new ArrayList<String>())
           .setLifetime(Duration.newBuilder().build())
           .build();
   GenerateAccessTokenResponse response = iamCredentialsClient.generateAccessToken(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GenerateAccessTokenRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenResponse)`

### generateAccessToken(ServiceAccountName name, List<String> delegates, List<String> scope, Duration lifetime)

```
public final GenerateAccessTokenResponse generateAccessToken(ServiceAccountName name, List<String> delegates, List<String> scope, Duration lifetime)
```

Generates an OAuth 2.0 access token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   List<String> delegates = new ArrayList<>();
   List<String> scope = new ArrayList<>();
   Duration lifetime = Duration.newBuilder().build();
   GenerateAccessTokenResponse response =
       iamCredentialsClient.generateAccessToken(name, delegates, scope, lifetime);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[ServiceAccountName](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.ServiceAccountName)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`scope`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See [https://developers.google.com/identity/protocols/googlescopes](https://developers.google.com/identity/protocols/googlescopes) for more information. At least one value required.

`lifetime`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

The desired lifetime duration of the access token in seconds. Must be set to a value less than or equal to 3600 (1 hour). If a value is not specified, the token's lifetime will be set to a default value of one hour.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenResponse)`

### generateAccessToken(String name, List<String> delegates, List<String> scope, Duration lifetime)

```
public final GenerateAccessTokenResponse generateAccessToken(String name, List<String> delegates, List<String> scope, Duration lifetime)
```

Generates an OAuth 2.0 access token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   String name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString();
   List<String> delegates = new ArrayList<>();
   List<String> scope = new ArrayList<>();
   Duration lifetime = Duration.newBuilder().build();
   GenerateAccessTokenResponse response =
       iamCredentialsClient.generateAccessToken(name, delegates, scope, lifetime);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`scope`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See [https://developers.google.com/identity/protocols/googlescopes](https://developers.google.com/identity/protocols/googlescopes) for more information. At least one value required.

`lifetime`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

The desired lifetime duration of the access token in seconds. Must be set to a value less than or equal to 3600 (1 hour). If a value is not specified, the token's lifetime will be set to a default value of one hour.

**Returns**

**Type**

**Description**

`[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenResponse)`

### generateAccessTokenCallable()

```
public final UnaryCallable<GenerateAccessTokenRequest,GenerateAccessTokenResponse> generateAccessTokenCallable()
```

Generates an OAuth 2.0 access token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   GenerateAccessTokenRequest request =
       GenerateAccessTokenRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .addAllScope(new ArrayList<String>())
           .setLifetime(Duration.newBuilder().build())
           .build();
   ApiFuture<GenerateAccessTokenResponse> future =
       iamCredentialsClient.generateAccessTokenCallable().futureCall(request);
   // Do something.
   GenerateAccessTokenResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAccessTokenRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenRequest),[GenerateAccessTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateAccessTokenResponse)>`

### generateIdToken(GenerateIdTokenRequest request)

```
public final GenerateIdTokenResponse generateIdToken(GenerateIdTokenRequest request)
```

Generates an OpenID Connect ID token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   GenerateIdTokenRequest request =
       GenerateIdTokenRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setAudience("audience975628804")
           .setIncludeEmail(true)
           .build();
   GenerateIdTokenResponse response = iamCredentialsClient.generateIdToken(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GenerateIdTokenRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[GenerateIdTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenResponse)`

### generateIdToken(ServiceAccountName name, List<String> delegates, String audience, boolean includeEmail)

```
public final GenerateIdTokenResponse generateIdToken(ServiceAccountName name, List<String> delegates, String audience, boolean includeEmail)
```

Generates an OpenID Connect ID token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   List<String> delegates = new ArrayList<>();
   String audience = "audience975628804";
   boolean includeEmail = true;
   GenerateIdTokenResponse response =
       iamCredentialsClient.generateIdToken(name, delegates, audience, includeEmail);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[ServiceAccountName](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.ServiceAccountName)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`audience`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The audience for the token, such as the API or account that this token grants access to.

`includeEmail`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.

**Returns**

**Type**

**Description**

`[GenerateIdTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenResponse)`

### generateIdToken(String name, List<String> delegates, String audience, boolean includeEmail)

```
public final GenerateIdTokenResponse generateIdToken(String name, List<String> delegates, String audience, boolean includeEmail)
```

Generates an OpenID Connect ID token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   String name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString();
   List<String> delegates = new ArrayList<>();
   String audience = "audience975628804";
   boolean includeEmail = true;
   GenerateIdTokenResponse response =
       iamCredentialsClient.generateIdToken(name, delegates, audience, includeEmail);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`audience`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The audience for the token, such as the API or account that this token grants access to.

`includeEmail`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.

**Returns**

**Type**

**Description**

`[GenerateIdTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenResponse)`

### generateIdTokenCallable()

```
public final UnaryCallable<GenerateIdTokenRequest,GenerateIdTokenResponse> generateIdTokenCallable()
```

Generates an OpenID Connect ID token for a service account.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   GenerateIdTokenRequest request =
       GenerateIdTokenRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setAudience("audience975628804")
           .setIncludeEmail(true)
           .build();
   ApiFuture<GenerateIdTokenResponse> future =
       iamCredentialsClient.generateIdTokenCallable().futureCall(request);
   // Do something.
   GenerateIdTokenResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateIdTokenRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenRequest),[GenerateIdTokenResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.GenerateIdTokenResponse)>`

### getSettings()

```
public final IamCredentialsSettings getSettings()
```

**Returns**

**Type**

**Description**

`[IamCredentialsSettings](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.IamCredentialsSettings)`

### getStub()

```
public IamCredentialsStub getStub()
```

**Returns**

**Type**

**Description**

`[IamCredentialsStub](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.stub.IamCredentialsStub)`

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

### signBlob(ServiceAccountName name, List<String> delegates, ByteString payload)

```
public final SignBlobResponse signBlob(ServiceAccountName name, List<String> delegates, ByteString payload)
```

Signs a blob using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   List<String> delegates = new ArrayList<>();
   ByteString payload = ByteString.EMPTY;
   SignBlobResponse response = iamCredentialsClient.signBlob(name, delegates, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[ServiceAccountName](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.ServiceAccountName)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`payload`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

Required. The bytes to sign.

**Returns**

**Type**

**Description**

`[SignBlobResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobResponse)`

### signBlob(SignBlobRequest request)

```
public final SignBlobResponse signBlob(SignBlobRequest request)
```

Signs a blob using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   SignBlobRequest request =
       SignBlobRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setPayload(ByteString.EMPTY)
           .build();
   SignBlobResponse response = iamCredentialsClient.signBlob(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[SignBlobRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SignBlobResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobResponse)`

### signBlob(String name, List<String> delegates, ByteString payload)

```
public final SignBlobResponse signBlob(String name, List<String> delegates, ByteString payload)
```

Signs a blob using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   String name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString();
   List<String> delegates = new ArrayList<>();
   ByteString payload = ByteString.EMPTY;
   SignBlobResponse response = iamCredentialsClient.signBlob(name, delegates, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`payload`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

Required. The bytes to sign.

**Returns**

**Type**

**Description**

`[SignBlobResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobResponse)`

### signBlobCallable()

```
public final UnaryCallable<SignBlobRequest,SignBlobResponse> signBlobCallable()
```

Signs a blob using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   SignBlobRequest request =
       SignBlobRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setPayload(ByteString.EMPTY)
           .build();
   ApiFuture<SignBlobResponse> future =
       iamCredentialsClient.signBlobCallable().futureCall(request);
   // Do something.
   SignBlobResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SignBlobRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobRequest),[SignBlobResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignBlobResponse)>`

### signJwt(ServiceAccountName name, List<String> delegates, String payload)

```
public final SignJwtResponse signJwt(ServiceAccountName name, List<String> delegates, String payload)
```

Signs a JWT using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   List<String> delegates = new ArrayList<>();
   String payload = "payload-786701938";
   SignJwtResponse response = iamCredentialsClient.signJwt(name, delegates, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[ServiceAccountName](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.ServiceAccountName)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`payload`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The JWT payload to sign: a JSON object that contains a JWT Claims Set.

**Returns**

**Type**

**Description**

`[SignJwtResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtResponse)`

### signJwt(SignJwtRequest request)

```
public final SignJwtResponse signJwt(SignJwtRequest request)
```

Signs a JWT using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   SignJwtRequest request =
       SignJwtRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setPayload("payload-786701938")
           .build();
   SignJwtResponse response = iamCredentialsClient.signJwt(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[SignJwtRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SignJwtResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtResponse)`

### signJwt(String name, List<String> delegates, String payload)

```
public final SignJwtResponse signJwt(String name, List<String> delegates, String payload)
```

Signs a JWT using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   String name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString();
   List<String> delegates = new ArrayList<>();
   String payload = "payload-786701938";
   SignJwtResponse response = iamCredentialsClient.signJwt(name, delegates, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`delegates`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.

The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.

`payload`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The JWT payload to sign: a JSON object that contains a JWT Claims Set.

**Returns**

**Type**

**Description**

`[SignJwtResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtResponse)`

### signJwtCallable()

```
public final UnaryCallable<SignJwtRequest,SignJwtResponse> signJwtCallable()
```

Signs a JWT using a service account's system-managed private key.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCredentialsClient iamCredentialsClient = IamCredentialsClient.create()) {
   SignJwtRequest request =
       SignJwtRequest.newBuilder()
           .setName(ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]").toString())
           .addAllDelegates(new ArrayList<String>())
           .setPayload("payload-786701938")
           .build();
   ApiFuture<SignJwtResponse> future =
       iamCredentialsClient.signJwtCallable().futureCall(request);
   // Do something.
   SignJwtResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SignJwtRequest](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtRequest),[SignJwtResponse](/java/docs/reference/google-cloud-iamcredentials/2.55.0/com.google.cloud.iam.credentials.v1.SignJwtResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
