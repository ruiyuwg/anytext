-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PhishingProtectionServiceV1Beta1Client (0.118.0) Stay organized with collections Save and categorize content based on your preferences.

0.118.0 (latest) 0.116.0 0.114.0 0.113.0 0.111.0 0.109.0 0.107.0 0.106.0 0.105.0 0.104.0 0.103.0 0.101.0 0.99.0 0.98.0 0.95.0 0.94.0 0.93.0 0.91.0 0.90.0 0.89.0 0.88.0 0.87.0 0.86.0 0.85.0 0.84.0 0.83.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.70.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.6 0.33.1 0.32.11

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-phishingprotection/google-cloud-phishingprotection/src/main/java/com/google/cloud/phishingprotection/v1beta1/PhishingProtectionServiceV1Beta1Client.java)

[Product Reference](https://cloud.google.com/phishing-protection/docs/)

Service Description: Service to report phishing URIs.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   String uri = "uri116076";
   ReportPhishingResponse response =
       phishingProtectionServiceV1Beta1Client.reportPhishing(parent, uri);
 }
 
```
 

Note: close() needs to be called on the PhishingProtectionServiceV1Beta1Client object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

ReportPhishing

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   reportPhishing(ReportPhishingRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   reportPhishing(ProjectName parent, String uri)
    
-   reportPhishing(String parent, String uri)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   reportPhishingCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of PhishingProtectionServiceV1Beta1Settings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PhishingProtectionServiceV1Beta1Settings phishingProtectionServiceV1Beta1Settings =
     PhishingProtectionServiceV1Beta1Settings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create(phishingProtectionServiceV1Beta1Settings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PhishingProtectionServiceV1Beta1Settings phishingProtectionServiceV1Beta1Settings =
     PhishingProtectionServiceV1Beta1Settings.newBuilder().setEndpoint(myEndpoint).build();
 PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create(phishingProtectionServiceV1Beta1Settings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PhishingProtectionServiceV1Beta1Settings phishingProtectionServiceV1Beta1Settings =
     PhishingProtectionServiceV1Beta1Settings.newHttpJsonBuilder().build();
 PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create(phishingProtectionServiceV1Beta1Settings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> PhishingProtectionServiceV1Beta1Client

## Static Methods

### create()

```
public static final PhishingProtectionServiceV1Beta1Client create()
```

Constructs an instance of PhishingProtectionServiceV1Beta1Client with default settings.

**Returns**

**Type**

**Description**

`[PhishingProtectionServiceV1Beta1Client](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Client)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PhishingProtectionServiceV1Beta1Settings settings)

```
public static final PhishingProtectionServiceV1Beta1Client create(PhishingProtectionServiceV1Beta1Settings settings)
```

Constructs an instance of PhishingProtectionServiceV1Beta1Client, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[PhishingProtectionServiceV1Beta1Settings](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Settings)`  

**Returns**

**Type**

**Description**

`[PhishingProtectionServiceV1Beta1Client](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Client)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PhishingProtectionServiceV1Beta1Stub stub)

```
public static final PhishingProtectionServiceV1Beta1Client create(PhishingProtectionServiceV1Beta1Stub stub)
```

Constructs an instance of PhishingProtectionServiceV1Beta1Client, using the given stub for making calls. This is for advanced usage - prefer using create(PhishingProtectionServiceV1Beta1Settings).

**Parameter**

**Name**

**Description**

`stub`

`[PhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub)`  

**Returns**

**Type**

**Description**

`[PhishingProtectionServiceV1Beta1Client](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Client)`

## Constructors

### PhishingProtectionServiceV1Beta1Client(PhishingProtectionServiceV1Beta1Settings settings)

```
protected PhishingProtectionServiceV1Beta1Client(PhishingProtectionServiceV1Beta1Settings settings)
```

Constructs an instance of PhishingProtectionServiceV1Beta1Client, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[PhishingProtectionServiceV1Beta1Settings](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Settings)`  

### PhishingProtectionServiceV1Beta1Client(PhishingProtectionServiceV1Beta1Stub stub)

```
protected PhishingProtectionServiceV1Beta1Client(PhishingProtectionServiceV1Beta1Stub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[PhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub)`  

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
public final PhishingProtectionServiceV1Beta1Settings getSettings()
```

**Returns**

**Type**

**Description**

`[PhishingProtectionServiceV1Beta1Settings](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Settings)`

### getStub()

```
public PhishingProtectionServiceV1Beta1Stub getStub()
```

**Returns**

**Type**

**Description**

`[PhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub)`

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

### reportPhishing(ProjectName parent, String uri)

```
public final ReportPhishingResponse reportPhishing(ProjectName parent, String uri)
```

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   String uri = "uri116076";
   ReportPhishingResponse response =
       phishingProtectionServiceV1Beta1Client.reportPhishing(parent, uri);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ProjectName)`  

Required. The name of the project for which the report will be created, in the format "projects/{project\_number}".

`uri`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The URI that is being reported for phishing content to be analyzed.

**Returns**

**Type**

**Description**

`[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingResponse)`

### reportPhishing(ReportPhishingRequest request)

```
public final ReportPhishingResponse reportPhishing(ReportPhishingRequest request)
```

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create()) {
   ReportPhishingRequest request =
       ReportPhishingRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setUri("uri116076")
           .build();
   ReportPhishingResponse response =
       phishingProtectionServiceV1Beta1Client.reportPhishing(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ReportPhishingRequest](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingResponse)`

### reportPhishing(String parent, String uri)

```
public final ReportPhishingResponse reportPhishing(String parent, String uri)
```

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   String uri = "uri116076";
   ReportPhishingResponse response =
       phishingProtectionServiceV1Beta1Client.reportPhishing(parent, uri);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the project for which the report will be created, in the format "projects/{project\_number}".

`uri`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The URI that is being reported for phishing content to be analyzed.

**Returns**

**Type**

**Description**

`[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingResponse)`

### reportPhishingCallable()

```
public final UnaryCallable<ReportPhishingRequest,ReportPhishingResponse> reportPhishingCallable()
```

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (PhishingProtectionServiceV1Beta1Client phishingProtectionServiceV1Beta1Client =
     PhishingProtectionServiceV1Beta1Client.create()) {
   ReportPhishingRequest request =
       ReportPhishingRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setUri("uri116076")
           .build();
   ApiFuture<ReportPhishingResponse> future =
       phishingProtectionServiceV1Beta1Client.reportPhishingCallable().futureCall(request);
   // Do something.
   ReportPhishingResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ReportPhishingRequest](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingRequest),[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/latest/com.google.phishingprotection.v1beta1.ReportPhishingResponse)>`

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
