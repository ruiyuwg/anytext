-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProfilerServiceClient (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.10

```
public class ProfilerServiceClient implements BackgroundResource
```

Service Description: Manage the collection of continuous profiling data provided by profiling agents running in the cloud or by an offline provider of profiling data.

General guidelines:

-   Profiles for a single deployment must be created in ascending time order.
-   Profiles can be created in either online or offline mode, see below.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   CreateProfileRequest request =
       CreateProfileRequest.newBuilder()
           .setParent("parent-995424086")
           .setDeployment(Deployment.newBuilder().build())
           .addAllProfileType(new ArrayList<ProfileType>())
           .build();
   Profile response = profilerServiceClient.createProfile(request);
 }
 
```
 

Note: close() needs to be called on the ProfilerServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ProfilerServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 ProfilerServiceSettings profilerServiceSettings =
     ProfilerServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ProfilerServiceClient profilerServiceClient =
     ProfilerServiceClient.create(profilerServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 ProfilerServiceSettings profilerServiceSettings =
     ProfilerServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 ProfilerServiceClient profilerServiceClient =
     ProfilerServiceClient.create(profilerServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ProfilerServiceClient

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
public static final ProfilerServiceClient create()
```

Constructs an instance of ProfilerServiceClient with default settings.

**Returns**

**Type**

**Description**

[ProfilerServiceClient](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ProfilerServiceSettings settings)

```
public static final ProfilerServiceClient create(ProfilerServiceSettings settings)
```

Constructs an instance of ProfilerServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[ProfilerServiceSettings](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings)`  

**Returns**

**Type**

**Description**

[ProfilerServiceClient](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ProfilerServiceStub stub)

```
public static final ProfilerServiceClient create(ProfilerServiceStub stub)
```

Constructs an instance of ProfilerServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(ProfilerServiceSettings).

**Parameter**

**Name**

**Description**

stub

`[ProfilerServiceStub](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.stub.ProfilerServiceStub)`  

**Returns**

**Type**

**Description**

[ProfilerServiceClient](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceClient)

## Constructors

### ProfilerServiceClient(ProfilerServiceSettings settings)

```
protected ProfilerServiceClient(ProfilerServiceSettings settings)
```

Constructs an instance of ProfilerServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[ProfilerServiceSettings](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings)`  

### ProfilerServiceClient(ProfilerServiceStub stub)

```
protected ProfilerServiceClient(ProfilerServiceStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[ProfilerServiceStub](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.stub.ProfilerServiceStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### close()

```
public final void close()
```

### createOfflineProfile(CreateOfflineProfileRequest request)

```
public final Profile createOfflineProfile(CreateOfflineProfileRequest request)
```

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   CreateOfflineProfileRequest request =
       CreateOfflineProfileRequest.newBuilder()
           .setParent("parent-995424086")
           .setProfile(Profile.newBuilder().build())
           .build();
   Profile response = profilerServiceClient.createOfflineProfile(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateOfflineProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)

### createOfflineProfileCallable()

```
public final UnaryCallable<CreateOfflineProfileRequest,Profile> createOfflineProfileCallable()
```

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   CreateOfflineProfileRequest request =
       CreateOfflineProfileRequest.newBuilder()
           .setParent("parent-995424086")
           .setProfile(Profile.newBuilder().build())
           .build();
   ApiFuture<Profile> future =
       profilerServiceClient.createOfflineProfileCallable().futureCall(request);
   // Do something.
   Profile response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateOfflineProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest),[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)\>

### createProfile(CreateProfileRequest request)

```
public final Profile createProfile(CreateProfileRequest request)
```

CreateProfile creates a new profile resource in the online mode.

The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available.

The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   CreateProfileRequest request =
       CreateProfileRequest.newBuilder()
           .setParent("parent-995424086")
           .setDeployment(Deployment.newBuilder().build())
           .addAllProfileType(new ArrayList<ProfileType>())
           .build();
   Profile response = profilerServiceClient.createProfile(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.CreateProfileRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)

### createProfileCallable()

```
public final UnaryCallable<CreateProfileRequest,Profile> createProfileCallable()
```

CreateProfile creates a new profile resource in the online mode.

The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available.

The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   CreateProfileRequest request =
       CreateProfileRequest.newBuilder()
           .setParent("parent-995424086")
           .setDeployment(Deployment.newBuilder().build())
           .addAllProfileType(new ArrayList<ProfileType>())
           .build();
   ApiFuture<Profile> future = profilerServiceClient.createProfileCallable().futureCall(request);
   // Do something.
   Profile response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.CreateProfileRequest),[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)\>

### getSettings()

```
public final ProfilerServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

[ProfilerServiceSettings](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings)

### getStub()

```
public ProfilerServiceStub getStub()
```

**Returns**

**Type**

**Description**

[ProfilerServiceStub](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.stub.ProfilerServiceStub)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateProfile(UpdateProfileRequest request)

```
public final Profile updateProfile(UpdateProfileRequest request)
```

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   UpdateProfileRequest request =
       UpdateProfileRequest.newBuilder()
           .setProfile(Profile.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Profile response = profilerServiceClient.updateProfile(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.UpdateProfileRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)

### updateProfileCallable()

```
public final UnaryCallable<UpdateProfileRequest,Profile> updateProfileCallable()
```

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProfilerServiceClient profilerServiceClient = ProfilerServiceClient.create()) {
   UpdateProfileRequest request =
       UpdateProfileRequest.newBuilder()
           .setProfile(Profile.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Profile> future = profilerServiceClient.updateProfileCallable().futureCall(request);
   // Do something.
   Profile response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateProfileRequest](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.UpdateProfileRequest),[Profile](/java/docs/reference/google-cloud-profiler/2.2.0/com.google.devtools.cloudprofiler.v2.Profile)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
