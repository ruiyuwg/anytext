-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecretManagerServiceClient (2.22.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.10 2.2.0 2.1.7 2.0.7

```
public class SecretManagerServiceClient implements BackgroundResource
```

Service Description: Secret Manager Service

Manages secrets and operations using those secrets. Implements a REST model with the following objects:

-   Secret
-   SecretVersion

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   String secretId = "secretId945974251";
   Secret secret = Secret.newBuilder().build();
   Secret response = secretManagerServiceClient.createSecret(parent, secretId, secret);
 }
 
```
 

Note: close() needs to be called on the SecretManagerServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of SecretManagerServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecretManagerServiceSettings secretManagerServiceSettings =
     SecretManagerServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create(secretManagerServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecretManagerServiceSettings secretManagerServiceSettings =
     SecretManagerServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create(secretManagerServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecretManagerServiceSettings secretManagerServiceSettings =
     SecretManagerServiceSettings.newHttpJsonBuilder().build();
 SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create(secretManagerServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecretManagerServiceClient

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
public static final SecretManagerServiceClient create()
```

Constructs an instance of SecretManagerServiceClient with default settings.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SecretManagerServiceSettings settings)

```
public static final SecretManagerServiceClient create(SecretManagerServiceSettings settings)
```

Constructs an instance of SecretManagerServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[SecretManagerServiceSettings](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceSettings)`  

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SecretManagerServiceStub stub)

```
public static final SecretManagerServiceClient create(SecretManagerServiceStub stub)
```

Constructs an instance of SecretManagerServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(SecretManagerServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[SecretManagerServiceStub](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.stub.SecretManagerServiceStub)`  

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient)`

## Constructors

### SecretManagerServiceClient(SecretManagerServiceSettings settings)

```
protected SecretManagerServiceClient(SecretManagerServiceSettings settings)
```

Constructs an instance of SecretManagerServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[SecretManagerServiceSettings](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceSettings)`  

### SecretManagerServiceClient(SecretManagerServiceStub stub)

```
protected SecretManagerServiceClient(SecretManagerServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[SecretManagerServiceStub](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.stub.SecretManagerServiceStub)`  

## Methods

### accessSecretVersion(AccessSecretVersionRequest request)

```
public final AccessSecretVersionResponse accessSecretVersion(AccessSecretVersionRequest request)
```

Accesses a SecretVersion. This call returns the secret data.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   AccessSecretVersionRequest request =
       AccessSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .build();
   AccessSecretVersionResponse response =
       secretManagerServiceClient.accessSecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[AccessSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AccessSecretVersionResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse)`

### accessSecretVersion(SecretVersionName name)

```
public final AccessSecretVersionResponse accessSecretVersion(SecretVersionName name)
```

Accesses a SecretVersion. This call returns the secret data.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretVersionName name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]");
   AccessSecretVersionResponse response = secretManagerServiceClient.accessSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersionName)`  

Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

**Returns**

**Type**

**Description**

`[AccessSecretVersionResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse)`

### accessSecretVersion(String name)

```
public final AccessSecretVersionResponse accessSecretVersion(String name)
```

Accesses a SecretVersion. This call returns the secret data.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString();
   AccessSecretVersionResponse response = secretManagerServiceClient.accessSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

**Returns**

**Type**

**Description**

`[AccessSecretVersionResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse)`

### accessSecretVersionCallable()

```
public final UnaryCallable<AccessSecretVersionRequest,AccessSecretVersionResponse> accessSecretVersionCallable()
```

Accesses a SecretVersion. This call returns the secret data.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   AccessSecretVersionRequest request =
       AccessSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .build();
   ApiFuture<AccessSecretVersionResponse> future =
       secretManagerServiceClient.accessSecretVersionCallable().futureCall(request);
   // Do something.
   AccessSecretVersionResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AccessSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest),[AccessSecretVersionResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AccessSecretVersionResponse)>`

### addSecretVersion(AddSecretVersionRequest request)

```
public final SecretVersion addSecretVersion(AddSecretVersionRequest request)
```

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   AddSecretVersionRequest request =
       AddSecretVersionRequest.newBuilder()
           .setParent(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPayload(SecretPayload.newBuilder().build())
           .build();
   SecretVersion response = secretManagerServiceClient.addSecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[AddSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AddSecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### addSecretVersion(SecretName parent, SecretPayload payload)

```
public final SecretVersion addSecretVersion(SecretName parent, SecretPayload payload)
```

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretName parent = SecretName.of("[PROJECT]", "[SECRET]");
   SecretPayload payload = SecretPayload.newBuilder().build();
   SecretVersion response = secretManagerServiceClient.addSecretVersion(parent, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[SecretName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretName)`  

Required. The resource name of the Secret to associate with the SecretVersion in the format `projects/*/secrets/*`.

`payload`

`[SecretPayload](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretPayload)`  

Required. The secret payload of the SecretVersion.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### addSecretVersion(String parent, SecretPayload payload)

```
public final SecretVersion addSecretVersion(String parent, SecretPayload payload)
```

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String parent = SecretName.of("[PROJECT]", "[SECRET]").toString();
   SecretPayload payload = SecretPayload.newBuilder().build();
   SecretVersion response = secretManagerServiceClient.addSecretVersion(parent, payload);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the Secret to associate with the SecretVersion in the format `projects/*/secrets/*`.

`payload`

`[SecretPayload](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretPayload)`  

Required. The secret payload of the SecretVersion.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### addSecretVersionCallable()

```
public final UnaryCallable<AddSecretVersionRequest,SecretVersion> addSecretVersionCallable()
```

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   AddSecretVersionRequest request =
       AddSecretVersionRequest.newBuilder()
           .setParent(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPayload(SecretPayload.newBuilder().build())
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.addSecretVersionCallable().futureCall(request);
   // Do something.
   SecretVersion response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AddSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.AddSecretVersionRequest),[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)>`

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

### createSecret(CreateSecretRequest request)

```
public final Secret createSecret(CreateSecretRequest request)
```

Creates a new Secret containing no SecretVersions.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   CreateSecretRequest request =
       CreateSecretRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setSecretId("secretId945974251")
           .setSecret(Secret.newBuilder().build())
           .build();
   Secret response = secretManagerServiceClient.createSecret(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.CreateSecretRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### createSecret(ProjectName parent, String secretId, Secret secret)

```
public final Secret createSecret(ProjectName parent, String secretId, Secret secret)
```

Creates a new Secret containing no SecretVersions.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   String secretId = "secretId945974251";
   Secret secret = Secret.newBuilder().build();
   Secret response = secretManagerServiceClient.createSecret(parent, secretId, secret);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ProjectName)`  

Required. The resource name of the project to associate with the Secret, in the format `projects/*`.

`secretId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. This must be unique within the project.

A secret ID is a string with a maximum length of 255 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore (`_`) characters.

`secret`

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`  

Required. A Secret with initial field values.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### createSecret(String parent, String secretId, Secret secret)

```
public final Secret createSecret(String parent, String secretId, Secret secret)
```

Creates a new Secret containing no SecretVersions.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   String secretId = "secretId945974251";
   Secret secret = Secret.newBuilder().build();
   Secret response = secretManagerServiceClient.createSecret(parent, secretId, secret);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the project to associate with the Secret, in the format `projects/*`.

`secretId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. This must be unique within the project.

A secret ID is a string with a maximum length of 255 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore (`_`) characters.

`secret`

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`  

Required. A Secret with initial field values.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### createSecretCallable()

```
public final UnaryCallable<CreateSecretRequest,Secret> createSecretCallable()
```

Creates a new Secret containing no SecretVersions.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   CreateSecretRequest request =
       CreateSecretRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setSecretId("secretId945974251")
           .setSecret(Secret.newBuilder().build())
           .build();
   ApiFuture<Secret> future =
       secretManagerServiceClient.createSecretCallable().futureCall(request);
   // Do something.
   Secret response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.CreateSecretRequest),[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)>`

### deleteSecret(DeleteSecretRequest request)

```
public final void deleteSecret(DeleteSecretRequest request)
```

Deletes a Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DeleteSecretRequest request =
       DeleteSecretRequest.newBuilder()
           .setName(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setEtag("etag3123477")
           .build();
   secretManagerServiceClient.deleteSecret(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DeleteSecretRequest)`  

The request object containing all of the parameters for the API call.

### deleteSecret(SecretName name)

```
public final void deleteSecret(SecretName name)
```

Deletes a Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretName name = SecretName.of("[PROJECT]", "[SECRET]");
   secretManagerServiceClient.deleteSecret(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretName)`  

Required. The resource name of the Secret to delete in the format `projects/*/secrets/*`.

### deleteSecret(String name)

```
public final void deleteSecret(String name)
```

Deletes a Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretName.of("[PROJECT]", "[SECRET]").toString();
   secretManagerServiceClient.deleteSecret(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the Secret to delete in the format `projects/*/secrets/*`.

### deleteSecretCallable()

```
public final UnaryCallable<DeleteSecretRequest,Empty> deleteSecretCallable()
```

Deletes a Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DeleteSecretRequest request =
       DeleteSecretRequest.newBuilder()
           .setName(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setEtag("etag3123477")
           .build();
   ApiFuture<Empty> future =
       secretManagerServiceClient.deleteSecretCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DeleteSecretRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### destroySecretVersion(DestroySecretVersionRequest request)

```
public final SecretVersion destroySecretVersion(DestroySecretVersionRequest request)
```

Destroys a SecretVersion.

Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DestroySecretVersionRequest request =
       DestroySecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   SecretVersion response = secretManagerServiceClient.destroySecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DestroySecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DestroySecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### destroySecretVersion(SecretVersionName name)

```
public final SecretVersion destroySecretVersion(SecretVersionName name)
```

Destroys a SecretVersion.

Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretVersionName name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]");
   SecretVersion response = secretManagerServiceClient.destroySecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersionName)`  

Required. The resource name of the SecretVersion to destroy in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### destroySecretVersion(String name)

```
public final SecretVersion destroySecretVersion(String name)
```

Destroys a SecretVersion.

Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString();
   SecretVersion response = secretManagerServiceClient.destroySecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the SecretVersion to destroy in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### destroySecretVersionCallable()

```
public final UnaryCallable<DestroySecretVersionRequest,SecretVersion> destroySecretVersionCallable()
```

Destroys a SecretVersion.

Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DestroySecretVersionRequest request =
       DestroySecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.destroySecretVersionCallable().futureCall(request);
   // Do something.
   SecretVersion response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DestroySecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DestroySecretVersionRequest),[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)>`

### disableSecretVersion(DisableSecretVersionRequest request)

```
public final SecretVersion disableSecretVersion(DisableSecretVersionRequest request)
```

Disables a SecretVersion.

Sets the state of the SecretVersion to DISABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DisableSecretVersionRequest request =
       DisableSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   SecretVersion response = secretManagerServiceClient.disableSecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DisableSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DisableSecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### disableSecretVersion(SecretVersionName name)

```
public final SecretVersion disableSecretVersion(SecretVersionName name)
```

Disables a SecretVersion.

Sets the state of the SecretVersion to DISABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretVersionName name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]");
   SecretVersion response = secretManagerServiceClient.disableSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersionName)`  

Required. The resource name of the SecretVersion to disable in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### disableSecretVersion(String name)

```
public final SecretVersion disableSecretVersion(String name)
```

Disables a SecretVersion.

Sets the state of the SecretVersion to DISABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString();
   SecretVersion response = secretManagerServiceClient.disableSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the SecretVersion to disable in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### disableSecretVersionCallable()

```
public final UnaryCallable<DisableSecretVersionRequest,SecretVersion> disableSecretVersionCallable()
```

Disables a SecretVersion.

Sets the state of the SecretVersion to DISABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   DisableSecretVersionRequest request =
       DisableSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.disableSecretVersionCallable().futureCall(request);
   // Do something.
   SecretVersion response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DisableSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.DisableSecretVersionRequest),[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)>`

### enableSecretVersion(EnableSecretVersionRequest request)

```
public final SecretVersion enableSecretVersion(EnableSecretVersionRequest request)
```

Enables a SecretVersion.

Sets the state of the SecretVersion to ENABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   EnableSecretVersionRequest request =
       EnableSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   SecretVersion response = secretManagerServiceClient.enableSecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[EnableSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.EnableSecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### enableSecretVersion(SecretVersionName name)

```
public final SecretVersion enableSecretVersion(SecretVersionName name)
```

Enables a SecretVersion.

Sets the state of the SecretVersion to ENABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretVersionName name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]");
   SecretVersion response = secretManagerServiceClient.enableSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersionName)`  

Required. The resource name of the SecretVersion to enable in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### enableSecretVersion(String name)

```
public final SecretVersion enableSecretVersion(String name)
```

Enables a SecretVersion.

Sets the state of the SecretVersion to ENABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString();
   SecretVersion response = secretManagerServiceClient.enableSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the SecretVersion to enable in the format `projects/*/secrets/*/versions/*`.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### enableSecretVersionCallable()

```
public final UnaryCallable<EnableSecretVersionRequest,SecretVersion> enableSecretVersionCallable()
```

Enables a SecretVersion.

Sets the state of the SecretVersion to ENABLED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   EnableSecretVersionRequest request =
       EnableSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .setEtag("etag3123477")
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.enableSecretVersionCallable().futureCall(request);
   // Do something.
   SecretVersion response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[EnableSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.EnableSecretVersionRequest),[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)>`

### getIamPolicy(GetIamPolicyRequest request)

```
public final Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = secretManagerServiceClient.getIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getIamPolicyCallable()

```
public final UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future =
       secretManagerServiceClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getSecret(GetSecretRequest request)

```
public final Secret getSecret(GetSecretRequest request)
```

Gets metadata for a given Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetSecretRequest request =
       GetSecretRequest.newBuilder()
           .setName(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .build();
   Secret response = secretManagerServiceClient.getSecret(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.GetSecretRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### getSecret(SecretName name)

```
public final Secret getSecret(SecretName name)
```

Gets metadata for a given Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretName name = SecretName.of("[PROJECT]", "[SECRET]");
   Secret response = secretManagerServiceClient.getSecret(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretName)`  

Required. The resource name of the Secret, in the format `projects/*/secrets/*`.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### getSecret(String name)

```
public final Secret getSecret(String name)
```

Gets metadata for a given Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretName.of("[PROJECT]", "[SECRET]").toString();
   Secret response = secretManagerServiceClient.getSecret(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the Secret, in the format `projects/*/secrets/*`.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### getSecretCallable()

```
public final UnaryCallable<GetSecretRequest,Secret> getSecretCallable()
```

Gets metadata for a given Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetSecretRequest request =
       GetSecretRequest.newBuilder()
           .setName(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .build();
   ApiFuture<Secret> future = secretManagerServiceClient.getSecretCallable().futureCall(request);
   // Do something.
   Secret response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.GetSecretRequest),[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)>`

### getSecretVersion(GetSecretVersionRequest request)

```
public final SecretVersion getSecretVersion(GetSecretVersionRequest request)
```

Gets metadata for a SecretVersion.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetSecretVersionRequest request =
       GetSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .build();
   SecretVersion response = secretManagerServiceClient.getSecretVersion(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.GetSecretVersionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### getSecretVersion(SecretVersionName name)

```
public final SecretVersion getSecretVersion(SecretVersionName name)
```

Gets metadata for a SecretVersion.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretVersionName name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]");
   SecretVersion response = secretManagerServiceClient.getSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersionName)`  

Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### getSecretVersion(String name)

```
public final SecretVersion getSecretVersion(String name)
```

Gets metadata for a SecretVersion.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String name = SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString();
   SecretVersion response = secretManagerServiceClient.getSecretVersion(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

**Returns**

**Type**

**Description**

`[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)`

### getSecretVersionCallable()

```
public final UnaryCallable<GetSecretVersionRequest,SecretVersion> getSecretVersionCallable()
```

Gets metadata for a SecretVersion.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   GetSecretVersionRequest request =
       GetSecretVersionRequest.newBuilder()
           .setName(SecretVersionName.of("[PROJECT]", "[SECRET]", "[SECRET_VERSION]").toString())
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.getSecretVersionCallable().futureCall(request);
   // Do something.
   SecretVersion response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSecretVersionRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.GetSecretVersionRequest),[SecretVersion](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretVersion)>`

### getSettings()

```
public final SecretManagerServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[SecretManagerServiceSettings](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceSettings)`

### getStub()

```
public SecretManagerServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[SecretManagerServiceStub](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.stub.SecretManagerServiceStub)`

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

### listSecretVersions(ListSecretVersionsRequest request)

```
public final SecretManagerServiceClient.ListSecretVersionsPagedResponse listSecretVersions(ListSecretVersionsRequest request)
```

Lists SecretVersions. This call does not return secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretVersionsRequest request =
       ListSecretVersionsRequest.newBuilder()
           .setParent(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (SecretVersion element :
       secretManagerServiceClient.listSecretVersions(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListSecretVersionsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretVersionsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretVersionsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretVersionsPagedResponse)`

### listSecretVersions(SecretName parent)

```
public final SecretManagerServiceClient.ListSecretVersionsPagedResponse listSecretVersions(SecretName parent)
```

Lists SecretVersions. This call does not return secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SecretName parent = SecretName.of("[PROJECT]", "[SECRET]");
   for (SecretVersion element :
       secretManagerServiceClient.listSecretVersions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[SecretName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretName)`  

Required. The resource name of the Secret associated with the SecretVersions to list, in the format `projects/*/secrets/*`.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretVersionsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretVersionsPagedResponse)`

### listSecretVersions(String parent)

```
public final SecretManagerServiceClient.ListSecretVersionsPagedResponse listSecretVersions(String parent)
```

Lists SecretVersions. This call does not return secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String parent = SecretName.of("[PROJECT]", "[SECRET]").toString();
   for (SecretVersion element :
       secretManagerServiceClient.listSecretVersions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the Secret associated with the SecretVersions to list, in the format `projects/*/secrets/*`.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretVersionsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretVersionsPagedResponse)`

### listSecretVersionsCallable()

```
public final UnaryCallable<ListSecretVersionsRequest,ListSecretVersionsResponse> listSecretVersionsCallable()
```

Lists SecretVersions. This call does not return secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretVersionsRequest request =
       ListSecretVersionsRequest.newBuilder()
           .setParent(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListSecretVersionsResponse response =
         secretManagerServiceClient.listSecretVersionsCallable().call(request);
     for (SecretVersion element : response.getVersionsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSecretVersionsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretVersionsRequest),[ListSecretVersionsResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretVersionsResponse)>`

### listSecretVersionsPagedCallable()

```
public final UnaryCallable<ListSecretVersionsRequest,SecretManagerServiceClient.ListSecretVersionsPagedResponse> listSecretVersionsPagedCallable()
```

Lists SecretVersions. This call does not return secret data.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretVersionsRequest request =
       ListSecretVersionsRequest.newBuilder()
           .setParent(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<SecretVersion> future =
       secretManagerServiceClient.listSecretVersionsPagedCallable().futureCall(request);
   // Do something.
   for (SecretVersion element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSecretVersionsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretVersionsRequest),[ListSecretVersionsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretVersionsPagedResponse)>`

### listSecrets(ListSecretsRequest request)

```
public final SecretManagerServiceClient.ListSecretsPagedResponse listSecrets(ListSecretsRequest request)
```

Lists Secrets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretsRequest request =
       ListSecretsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (Secret element : secretManagerServiceClient.listSecrets(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListSecretsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretsPagedResponse)`

### listSecrets(ProjectName parent)

```
public final SecretManagerServiceClient.ListSecretsPagedResponse listSecrets(ProjectName parent)
```

Lists Secrets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   for (Secret element : secretManagerServiceClient.listSecrets(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ProjectName)`  

Required. The resource name of the project associated with the Secrets, in the format `projects/*`.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretsPagedResponse)`

### listSecrets(String parent)

```
public final SecretManagerServiceClient.ListSecretsPagedResponse listSecrets(String parent)
```

Lists Secrets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   for (Secret element : secretManagerServiceClient.listSecrets(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the project associated with the Secrets, in the format `projects/*`.

**Returns**

**Type**

**Description**

`[SecretManagerServiceClient.ListSecretsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretsPagedResponse)`

### listSecretsCallable()

```
public final UnaryCallable<ListSecretsRequest,ListSecretsResponse> listSecretsCallable()
```

Lists Secrets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretsRequest request =
       ListSecretsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListSecretsResponse response =
         secretManagerServiceClient.listSecretsCallable().call(request);
     for (Secret element : response.getSecretsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSecretsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretsRequest),[ListSecretsResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretsResponse)>`

### listSecretsPagedCallable()

```
public final UnaryCallable<ListSecretsRequest,SecretManagerServiceClient.ListSecretsPagedResponse> listSecretsPagedCallable()
```

Lists Secrets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   ListSecretsRequest request =
       ListSecretsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<Secret> future =
       secretManagerServiceClient.listSecretsPagedCallable().futureCall(request);
   // Do something.
   for (Secret element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSecretsRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.ListSecretsRequest),[ListSecretsPagedResponse](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.SecretManagerServiceClient.ListSecretsPagedResponse)>`

### setIamPolicy(SetIamPolicyRequest request)

```
public final Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy on the specified secret. Replaces any existing policy.

Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = secretManagerServiceClient.setIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### setIamPolicyCallable()

```
public final UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

Sets the access control policy on the specified secret. Replaces any existing policy.

Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future =
       secretManagerServiceClient.setIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### testIamPermissions(TestIamPermissionsRequest request)

```
public final TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = secretManagerServiceClient.testIamPermissions(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

### testIamPermissionsCallable()

```
public final UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(SecretName.of("[PROJECT]", "[SECRET]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       secretManagerServiceClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateSecret(Secret secret, FieldMask updateMask)

```
public final Secret updateSecret(Secret secret, FieldMask updateMask)
```

Updates metadata of an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   Secret secret = Secret.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Secret response = secretManagerServiceClient.updateSecret(secret, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`secret`

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`  

Required. Secret with updated field values.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Required. Specifies the fields to be updated.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### updateSecret(UpdateSecretRequest request)

```
public final Secret updateSecret(UpdateSecretRequest request)
```

Updates metadata of an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   UpdateSecretRequest request =
       UpdateSecretRequest.newBuilder()
           .setSecret(Secret.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Secret response = secretManagerServiceClient.updateSecret(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.UpdateSecretRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)`

### updateSecretCallable()

```
public final UnaryCallable<UpdateSecretRequest,Secret> updateSecretCallable()
```

Updates metadata of an existing Secret.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecretManagerServiceClient secretManagerServiceClient =
     SecretManagerServiceClient.create()) {
   UpdateSecretRequest request =
       UpdateSecretRequest.newBuilder()
           .setSecret(Secret.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Secret> future =
       secretManagerServiceClient.updateSecretCallable().futureCall(request);
   // Do something.
   Secret response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSecretRequest](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.UpdateSecretRequest),[Secret](/java/docs/reference/google-cloud-secretmanager/2.22.0/com.google.cloud.secretmanager.v1.Secret)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
