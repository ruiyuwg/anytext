-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PolicyTroubleshooterClient (1.48.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.6 1.1.0 1.0.4 0.4.4

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-policy-troubleshooter/google-cloud-policy-troubleshooter/src/main/java/com/google/cloud/policytroubleshooter/iam/v3/PolicyTroubleshooterClient.java)

[Product Reference](https://cloud.google.com/iam/docs/troubleshooting-access)

Service Description: IAM Policy Troubleshooter service.

This service helps you troubleshoot access issues for Google Cloud resources.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create()) {
   TroubleshootIamPolicyRequest request =
       TroubleshootIamPolicyRequest.newBuilder()
           .setAccessTuple(AccessTuple.newBuilder().build())
           .build();
   TroubleshootIamPolicyResponse response =
       policyTroubleshooterClient.troubleshootIamPolicy(request);
 }
 
```
 

Note: close() needs to be called on the PolicyTroubleshooterClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

TroubleshootIamPolicy

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or doesn't have that permission.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   troubleshootIamPolicy(TroubleshootIamPolicyRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   troubleshootIamPolicyCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of PolicyTroubleshooterSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PolicyTroubleshooterSettings policyTroubleshooterSettings =
     PolicyTroubleshooterSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create(policyTroubleshooterSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PolicyTroubleshooterSettings policyTroubleshooterSettings =
     PolicyTroubleshooterSettings.newBuilder().setEndpoint(myEndpoint).build();
 PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create(policyTroubleshooterSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PolicyTroubleshooterSettings policyTroubleshooterSettings =
     PolicyTroubleshooterSettings.newHttpJsonBuilder().build();
 PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create(policyTroubleshooterSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> PolicyTroubleshooterClient

## Static Methods

### create()

```
public static final PolicyTroubleshooterClient create()
```

Constructs an instance of PolicyTroubleshooterClient with default settings.

**Returns**

**Type**

**Description**

`[PolicyTroubleshooterClient](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PolicyTroubleshooterSettings settings)

```
public static final PolicyTroubleshooterClient create(PolicyTroubleshooterSettings settings)
```

Constructs an instance of PolicyTroubleshooterClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[PolicyTroubleshooterSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterSettings)`  

**Returns**

**Type**

**Description**

`[PolicyTroubleshooterClient](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PolicyTroubleshooterStub stub)

```
public static final PolicyTroubleshooterClient create(PolicyTroubleshooterStub stub)
```

Constructs an instance of PolicyTroubleshooterClient, using the given stub for making calls. This is for advanced usage - prefer using create(PolicyTroubleshooterSettings).

**Parameter**

**Name**

**Description**

`stub`

`[PolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub)`  

**Returns**

**Type**

**Description**

`[PolicyTroubleshooterClient](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterClient)`

## Constructors

### PolicyTroubleshooterClient(PolicyTroubleshooterSettings settings)

```
protected PolicyTroubleshooterClient(PolicyTroubleshooterSettings settings)
```

Constructs an instance of PolicyTroubleshooterClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[PolicyTroubleshooterSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterSettings)`  

### PolicyTroubleshooterClient(PolicyTroubleshooterStub stub)

```
protected PolicyTroubleshooterClient(PolicyTroubleshooterStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[PolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub)`  

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
public final PolicyTroubleshooterSettings getSettings()
```

**Returns**

**Type**

**Description**

`[PolicyTroubleshooterSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooterSettings)`

### getStub()

```
public PolicyTroubleshooterStub getStub()
```

**Returns**

**Type**

**Description**

`[PolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub)`

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

### troubleshootIamPolicy(TroubleshootIamPolicyRequest request)

```
public final TroubleshootIamPolicyResponse troubleshootIamPolicy(TroubleshootIamPolicyRequest request)
```

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or doesn't have that permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create()) {
   TroubleshootIamPolicyRequest request =
       TroubleshootIamPolicyRequest.newBuilder()
           .setAccessTuple(AccessTuple.newBuilder().build())
           .build();
   TroubleshootIamPolicyResponse response =
       policyTroubleshooterClient.troubleshootIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[TroubleshootIamPolicyRequest](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TroubleshootIamPolicyResponse](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse)`

### troubleshootIamPolicyCallable()

```
public final UnaryCallable<TroubleshootIamPolicyRequest,TroubleshootIamPolicyResponse> troubleshootIamPolicyCallable()
```

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or doesn't have that permission.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PolicyTroubleshooterClient policyTroubleshooterClient =
     PolicyTroubleshooterClient.create()) {
   TroubleshootIamPolicyRequest request =
       TroubleshootIamPolicyRequest.newBuilder()
           .setAccessTuple(AccessTuple.newBuilder().build())
           .build();
   ApiFuture<TroubleshootIamPolicyResponse> future =
       policyTroubleshooterClient.troubleshootIamPolicyCallable().futureCall(request);
   // Do something.
   TroubleshootIamPolicyResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[TroubleshootIamPolicyRequest](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest),[TroubleshootIamPolicyResponse](/java/docs/reference/google-cloud-policy-troubleshooter/1.48.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
