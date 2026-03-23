-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.policytroubleshooter.v1 (1.21.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.6 1.1.0 1.0.4 0.4.4

A client to Policy Troubleshooter API

The interfaces provided are listed below, along with usage samples.

### IamCheckerClient

Service Description: IAM Policy Troubleshooter service.

This service helps you troubleshoot access issues for Google Cloud resources.

Sample for IamCheckerClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCheckerClient iamCheckerClient = IamCheckerClient.create()) {
   TroubleshootIamPolicyRequest request =
       TroubleshootIamPolicyRequest.newBuilder()
           .setAccessTuple(Explanations.AccessTuple.newBuilder().build())
           .build();
   TroubleshootIamPolicyResponse response = iamCheckerClient.troubleshootIamPolicy(request);
 }
 
```
 

## Classes

### [IAMCheckerProto](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IAMCheckerProto)

### [IamCheckerClient](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerClient)

Service Description: IAM Policy Troubleshooter service.

This service helps you troubleshoot access issues for Google Cloud resources.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IamCheckerClient iamCheckerClient = IamCheckerClient.create()) {
   TroubleshootIamPolicyRequest request =
       TroubleshootIamPolicyRequest.newBuilder()
           .setAccessTuple(Explanations.AccessTuple.newBuilder().build())
           .build();
   TroubleshootIamPolicyResponse response = iamCheckerClient.troubleshootIamPolicy(request);
 }
 
```
 

Note: close() needs to be called on the IamCheckerClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of IamCheckerSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCheckerSettings iamCheckerSettings =
     IamCheckerSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 IamCheckerClient iamCheckerClient = IamCheckerClient.create(iamCheckerSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCheckerSettings iamCheckerSettings =
     IamCheckerSettings.newBuilder().setEndpoint(myEndpoint).build();
 IamCheckerClient iamCheckerClient = IamCheckerClient.create(iamCheckerSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCheckerSettings iamCheckerSettings = IamCheckerSettings.newHttpJsonBuilder().build();
 IamCheckerClient iamCheckerClient = IamCheckerClient.create(iamCheckerSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [IamCheckerGrpc](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc)

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [IamCheckerGrpc.IamCheckerBlockingStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc.IamCheckerBlockingStub)

A stub to allow clients to do synchronous rpc calls to service IamChecker.

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [IamCheckerGrpc.IamCheckerFutureStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc.IamCheckerFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service IamChecker.

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [IamCheckerGrpc.IamCheckerImplBase](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc.IamCheckerImplBase)

Base class for the server implementation of the service IamChecker.

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [IamCheckerGrpc.IamCheckerStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc.IamCheckerStub)

A stub to allow clients to do asynchronous rpc calls to service IamChecker.

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [IamCheckerSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerSettings)

Settings class to configure an instance of [IamCheckerClient](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerClient).

The default instance has everything set to sensible defaults:

-   The default service address (policytroubleshooter.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of troubleshootIamPolicy to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IamCheckerSettings.Builder iamCheckerSettingsBuilder = IamCheckerSettings.newBuilder();
 iamCheckerSettingsBuilder
     .troubleshootIamPolicySettings()
     .setRetrySettings(
         iamCheckerSettingsBuilder
             .troubleshootIamPolicySettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 IamCheckerSettings iamCheckerSettings = iamCheckerSettingsBuilder.build();
 
```
 

### [IamCheckerSettings.Builder](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerSettings.Builder)

Builder for IamCheckerSettings.

### [TroubleshootIamPolicyRequest](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyRequest)

Request for TroubleshootIamPolicy.

Protobuf type `google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyRequest`

### [TroubleshootIamPolicyRequest.Builder](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyRequest.Builder)

Request for TroubleshootIamPolicy.

Protobuf type `google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyRequest`

### [TroubleshootIamPolicyResponse](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyResponse)

Response for TroubleshootIamPolicy.

Protobuf type `google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyResponse`

### [TroubleshootIamPolicyResponse.Builder](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyResponse.Builder)

Response for TroubleshootIamPolicy.

Protobuf type `google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyResponse`

## Interfaces

### [IamCheckerGrpc.AsyncService](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.IamCheckerGrpc.AsyncService)

IAM Policy Troubleshooter service. This service helps you troubleshoot access issues for Google Cloud resources.

### [TroubleshootIamPolicyRequestOrBuilder](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyRequestOrBuilder)

### [TroubleshootIamPolicyResponseOrBuilder](/java/docs/reference/google-cloud-policy-troubleshooter/1.21.0/com.google.cloud.policytroubleshooter.v1.TroubleshootIamPolicyResponseOrBuilder)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
