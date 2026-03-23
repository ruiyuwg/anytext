-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterClient (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public class SecurityCenterClient implements BackgroundResource
```

Service Description: V1 Beta APIs for Security Center service.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

Note: close() needs to be called on the SecurityCenterClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of SecurityCenterSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder().setEndpoint(myEndpoint).build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder()
         .setTransportChannelProvider(
             SecurityCenterSettings.defaultHttpJsonTransportProviderBuilder().build())
         .build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecurityCenterClient

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
public static final SecurityCenterClient create()
```

Constructs an instance of SecurityCenterClient with default settings.

**Returns**

**Type**

**Description**

[SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(SecurityCenterSettings settings)

```
public static final SecurityCenterClient create(SecurityCenterSettings settings)
```

Constructs an instance of SecurityCenterClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[SecurityCenterSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterSettings)`  

**Returns**

**Type**

**Description**

[SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(SecurityCenterStub stub)

```
public static final SecurityCenterClient create(SecurityCenterStub stub)
```

Constructs an instance of SecurityCenterClient, using the given stub for making calls. This is for advanced usage - prefer using create(SecurityCenterSettings).

**Parameter**

**Name**

**Description**

stub

`[SecurityCenterStub](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.stub.SecurityCenterStub)`  

**Returns**

**Type**

**Description**

[SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient)

## Constructors

### SecurityCenterClient(SecurityCenterSettings settings)

```
protected SecurityCenterClient(SecurityCenterSettings settings)
```

Constructs an instance of SecurityCenterClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[SecurityCenterSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterSettings)`  

### SecurityCenterClient(SecurityCenterStub stub)

```
protected SecurityCenterClient(SecurityCenterStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[SecurityCenterStub](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.stub.SecurityCenterStub)`  

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

### createFinding(CreateFindingRequest request)

```
public final Finding createFinding(CreateFindingRequest request)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   CreateFindingRequest request =
       CreateFindingRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFindingId("findingId439150212")
           .setFinding(Finding.newBuilder().build())
           .build();
   Finding response = securityCenterClient.createFinding(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.CreateFindingRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### createFinding(SourceName parent, String findingId, Finding finding)

```
public final Finding createFinding(SourceName parent, String findingId, Finding finding)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SourceName parent = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   String findingId = "findingId439150212";
   Finding finding = Finding.newBuilder().build();
   Finding response = securityCenterClient.createFinding(parent, findingId, finding);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[SourceName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SourceName)`  

Required. Resource name of the new finding's parent. Its format should be "organizations/\[organization\_id\]/sources/\[source\_id\]".

findingId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.

finding

`[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)`  

Required. The Finding being created. The name and security\_marks will be ignored as they are both output only fields on this resource.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### createFinding(String parent, String findingId, Finding finding)

```
public final Finding createFinding(String parent, String findingId, Finding finding)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String parent = SourceName.of("[ORGANIZATION]", "[SOURCE]").toString();
   String findingId = "findingId439150212";
   Finding finding = Finding.newBuilder().build();
   Finding response = securityCenterClient.createFinding(parent, findingId, finding);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the new finding's parent. Its format should be "organizations/\[organization\_id\]/sources/\[source\_id\]".

findingId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.

finding

`[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)`  

Required. The Finding being created. The name and security\_marks will be ignored as they are both output only fields on this resource.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### createFindingCallable()

```
public final UnaryCallable<CreateFindingRequest,Finding> createFindingCallable()
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   CreateFindingRequest request =
       CreateFindingRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFindingId("findingId439150212")
           .setFinding(Finding.newBuilder().build())
           .build();
   ApiFuture<Finding> future = securityCenterClient.createFindingCallable().futureCall(request);
   // Do something.
   Finding response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.CreateFindingRequest),[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)\>

### createSource(CreateSourceRequest request)

```
public final Source createSource(CreateSourceRequest request)
```

Creates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   CreateSourceRequest request =
       CreateSourceRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setSource(Source.newBuilder().build())
           .build();
   Source response = securityCenterClient.createSource(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.CreateSourceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### createSource(OrganizationName parent, Source source)

```
public final Source createSource(OrganizationName parent, Source source)
```

Creates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[OrganizationName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationName)`  

Required. Resource name of the new source's parent. Its format should be "organizations/\[organization\_id\]".

source

`[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)`  

Required. The Source being created, only the display\_name and description will be used. All other fields will be ignored.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### createSource(String parent, Source source)

```
public final Source createSource(String parent, Source source)
```

Creates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String parent = OrganizationName.of("[ORGANIZATION]").toString();
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the new source's parent. Its format should be "organizations/\[organization\_id\]".

source

`[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)`  

Required. The Source being created, only the display\_name and description will be used. All other fields will be ignored.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### createSourceCallable()

```
public final UnaryCallable<CreateSourceRequest,Source> createSourceCallable()
```

Creates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   CreateSourceRequest request =
       CreateSourceRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setSource(Source.newBuilder().build())
           .build();
   ApiFuture<Source> future = securityCenterClient.createSourceCallable().futureCall(request);
   // Do something.
   Source response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.CreateSourceRequest),[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)\>

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)

### getIamPolicy(ResourceName resource)

```
public final Policy getIamPolicy(ResourceName resource)
```

Gets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ResourceName resource = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   Policy response = securityCenterClient.getIamPolicy(resource);
 }
 
```
 

**Parameter**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicy(GetIamPolicyRequest request)

```
public final Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = securityCenterClient.getIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.GetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicy(String resource)

```
public final Policy getIamPolicy(String resource)
```

Gets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String resource = OrganizationName.of("[ORGANIZATION]").toString();
   Policy response = securityCenterClient.getIamPolicy(resource);
 }
 
```
 

**Parameter**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicyCallable()

```
public final UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

Gets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future = securityCenterClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy\>

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)

### getOrganizationSettings(GetOrganizationSettingsRequest request)

```
public final OrganizationSettings getOrganizationSettings(GetOrganizationSettingsRequest request)
```

Gets the settings for an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetOrganizationSettingsRequest request =
       GetOrganizationSettingsRequest.newBuilder()
           .setName(OrganizationSettingsName.of("[ORGANIZATION]").toString())
           .build();
   OrganizationSettings response = securityCenterClient.getOrganizationSettings(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

### getOrganizationSettings(OrganizationSettingsName name)

```
public final OrganizationSettings getOrganizationSettings(OrganizationSettingsName name)
```

Gets the settings for an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationSettingsName name = OrganizationSettingsName.of("[ORGANIZATION]");
   OrganizationSettings response = securityCenterClient.getOrganizationSettings(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[OrganizationSettingsName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettingsName)`  

Required. Name of the organization to get organization settings for. Its format is "organizations/\[organization\_id\]/organizationSettings".

**Returns**

**Type**

**Description**

[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

### getOrganizationSettings(String name)

```
public final OrganizationSettings getOrganizationSettings(String name)
```

Gets the settings for an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String name = OrganizationSettingsName.of("[ORGANIZATION]").toString();
   OrganizationSettings response = securityCenterClient.getOrganizationSettings(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the organization to get organization settings for. Its format is "organizations/\[organization\_id\]/organizationSettings".

**Returns**

**Type**

**Description**

[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

### getOrganizationSettingsCallable()

```
public final UnaryCallable<GetOrganizationSettingsRequest,OrganizationSettings> getOrganizationSettingsCallable()
```

Gets the settings for an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetOrganizationSettingsRequest request =
       GetOrganizationSettingsRequest.newBuilder()
           .setName(OrganizationSettingsName.of("[ORGANIZATION]").toString())
           .build();
   ApiFuture<OrganizationSettings> future =
       securityCenterClient.getOrganizationSettingsCallable().futureCall(request);
   // Do something.
   OrganizationSettings response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest),[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)\>

### getSettings()

```
public final SecurityCenterSettings getSettings()
```

**Returns**

**Type**

**Description**

[SecurityCenterSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterSettings)

### getSource(GetSourceRequest request)

```
public final Source getSource(GetSourceRequest request)
```

Gets a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetSourceRequest request =
       GetSourceRequest.newBuilder()
           .setName(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .build();
   Source response = securityCenterClient.getSource(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GetSourceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### getSource(SourceName name)

```
public final Source getSource(SourceName name)
```

Gets a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SourceName name = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   Source response = securityCenterClient.getSource(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[SourceName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SourceName)`  

Required. Relative resource name of the source. Its format is "organizations/\[organization\_id\]/source/\[source\_id\]".

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### getSource(String name)

```
public final Source getSource(String name)
```

Gets a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String name = SourceName.of("[ORGANIZATION]", "[SOURCE]").toString();
   Source response = securityCenterClient.getSource(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Relative resource name of the source. Its format is "organizations/\[organization\_id\]/source/\[source\_id\]".

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### getSourceCallable()

```
public final UnaryCallable<GetSourceRequest,Source> getSourceCallable()
```

Gets a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GetSourceRequest request =
       GetSourceRequest.newBuilder()
           .setName(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .build();
   ApiFuture<Source> future = securityCenterClient.getSourceCallable().futureCall(request);
   // Do something.
   Source response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GetSourceRequest),[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)\>

### getStub()

```
public SecurityCenterStub getStub()
```

**Returns**

**Type**

**Description**

[SecurityCenterStub](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.stub.SecurityCenterStub)

### groupAssets(GroupAssetsRequest request)

```
public final SecurityCenterClient.GroupAssetsPagedResponse groupAssets(GroupAssetsRequest request)
```

Filters an organization's assets and groups them by their specified properties.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupAssetsRequest request =
       GroupAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setCompareDuration(Duration.newBuilder().build())
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (GroupResult element : securityCenterClient.groupAssets(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityCenterClient.GroupAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupAssetsPagedResponse)

### groupAssetsCallable()

```
public final UnaryCallable<GroupAssetsRequest,GroupAssetsResponse> groupAssetsCallable()
```

Filters an organization's assets and groups them by their specified properties.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupAssetsRequest request =
       GroupAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setCompareDuration(Duration.newBuilder().build())
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     GroupAssetsResponse response = securityCenterClient.groupAssetsCallable().call(request);
     for (GroupResult element : response.getGroupByResultsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequest),[GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupAssetsResponse)\>

### groupAssetsPagedCallable()

```
public final UnaryCallable<GroupAssetsRequest,SecurityCenterClient.GroupAssetsPagedResponse> groupAssetsPagedCallable()
```

Filters an organization's assets and groups them by their specified properties.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupAssetsRequest request =
       GroupAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setCompareDuration(Duration.newBuilder().build())
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<GroupResult> future =
       securityCenterClient.groupAssetsPagedCallable().futureCall(request);
   // Do something.
   for (GroupResult element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequest),[GroupAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupAssetsPagedResponse)\>

### groupFindings(GroupFindingsRequest request)

```
public final SecurityCenterClient.GroupFindingsPagedResponse groupFindings(GroupFindingsRequest request)
```

Filters an organization or source's findings and groups them by their specified properties.

To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupFindingsRequest request =
       GroupFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (GroupResult element : securityCenterClient.groupFindings(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityCenterClient.GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPagedResponse)

### groupFindings(SourceName parent, String groupBy)

```
public final SecurityCenterClient.GroupFindingsPagedResponse groupFindings(SourceName parent, String groupBy)
```

Filters an organization or source's findings and groups them by their specified properties.

To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SourceName parent = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   String groupBy = "groupBy293428022";
   for (GroupResult element : securityCenterClient.groupFindings(parent, groupBy).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[SourceName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SourceName)`  

Required. Name of the source to groupBy. Its format is "organizations/\[organization\_id\]/sources/\[source\_id\]". To groupBy across all sources provide a source\_id of `-`. For example: organizations/{organization\_id}/sources/-

groupBy

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Expression that defines what assets fields to use for grouping (including `state`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource\_name".

The following fields are supported:

-   resource\_name
-   category
-   state
-   parent

**Returns**

**Type**

**Description**

[SecurityCenterClient.GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPagedResponse)

### groupFindings(String parent, String groupBy)

```
public final SecurityCenterClient.GroupFindingsPagedResponse groupFindings(String parent, String groupBy)
```

Filters an organization or source's findings and groups them by their specified properties.

To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String parent = SourceName.of("[ORGANIZATION]", "[SOURCE]").toString();
   String groupBy = "groupBy293428022";
   for (GroupResult element : securityCenterClient.groupFindings(parent, groupBy).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the source to groupBy. Its format is "organizations/\[organization\_id\]/sources/\[source\_id\]". To groupBy across all sources provide a source\_id of `-`. For example: organizations/{organization\_id}/sources/-

groupBy

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Expression that defines what assets fields to use for grouping (including `state`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource\_name".

The following fields are supported:

-   resource\_name
-   category
-   state
-   parent

**Returns**

**Type**

**Description**

[SecurityCenterClient.GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPagedResponse)

### groupFindingsCallable()

```
public final UnaryCallable<GroupFindingsRequest,GroupFindingsResponse> groupFindingsCallable()
```

Filters an organization or source's findings and groups them by their specified properties.

To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupFindingsRequest request =
       GroupFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     GroupFindingsResponse response = securityCenterClient.groupFindingsCallable().call(request);
     for (GroupResult element : response.getGroupByResultsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequest),[GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupFindingsResponse)\>

### groupFindingsPagedCallable()

```
public final UnaryCallable<GroupFindingsRequest,SecurityCenterClient.GroupFindingsPagedResponse> groupFindingsPagedCallable()
```

Filters an organization or source's findings and groups them by their specified properties.

To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   GroupFindingsRequest request =
       GroupFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setGroupBy("groupBy293428022")
           .setReadTime(Timestamp.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<GroupResult> future =
       securityCenterClient.groupFindingsPagedCallable().futureCall(request);
   // Do something.
   for (GroupResult element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequest),[GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPagedResponse)\>

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

### listAssets(ListAssetsRequest request)

```
public final SecurityCenterClient.ListAssetsPagedResponse listAssets(ListAssetsRequest request)
```

Lists an organization's assets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListAssetsRequest request =
       ListAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setCompareDuration(Duration.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (ListAssetsResponse.ListAssetsResult element :
       securityCenterClient.listAssets(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityCenterClient.ListAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsPagedResponse)

### listAssetsCallable()

```
public final UnaryCallable<ListAssetsRequest,ListAssetsResponse> listAssetsCallable()
```

Lists an organization's assets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListAssetsRequest request =
       ListAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setCompareDuration(Duration.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListAssetsResponse response = securityCenterClient.listAssetsCallable().call(request);
     for (ListAssetsResponse.ListAssetsResult element : response.getListAssetsResultsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest),[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse)\>

### listAssetsPagedCallable()

```
public final UnaryCallable<ListAssetsRequest,SecurityCenterClient.ListAssetsPagedResponse> listAssetsPagedCallable()
```

Lists an organization's assets.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListAssetsRequest request =
       ListAssetsRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setCompareDuration(Duration.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<ListAssetsResponse.ListAssetsResult> future =
       securityCenterClient.listAssetsPagedCallable().futureCall(request);
   // Do something.
   for (ListAssetsResponse.ListAssetsResult element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest),[ListAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsPagedResponse)\>

### listFindings(ListFindingsRequest request)

```
public final SecurityCenterClient.ListFindingsPagedResponse listFindings(ListFindingsRequest request)
```

Lists an organization or source's findings.

To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (Finding element : securityCenterClient.listFindings(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListFindingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityCenterClient.ListFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListFindingsPagedResponse)

### listFindingsCallable()

```
public final UnaryCallable<ListFindingsRequest,ListFindingsResponse> listFindingsCallable()
```

Lists an organization or source's findings.

To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListFindingsResponse response = securityCenterClient.listFindingsCallable().call(request);
     for (Finding element : response.getFindingsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListFindingsRequest),[ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListFindingsResponse)\>

### listFindingsPagedCallable()

```
public final UnaryCallable<ListFindingsRequest,SecurityCenterClient.ListFindingsPagedResponse> listFindingsPagedCallable()
```

Lists an organization or source's findings.

To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization\_id}/sources/-/findings

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListFindingsRequest request =
       ListFindingsRequest.newBuilder()
           .setParent(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setFilter("filter-1274492040")
           .setOrderBy("orderBy-1207110587")
           .setReadTime(Timestamp.newBuilder().build())
           .setFieldMask(FieldMask.newBuilder().build())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<Finding> future =
       securityCenterClient.listFindingsPagedCallable().futureCall(request);
   // Do something.
   for (Finding element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListFindingsRequest),[ListFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListFindingsPagedResponse)\>

### listSources(ListSourcesRequest request)

```
public final SecurityCenterClient.ListSourcesPagedResponse listSources(ListSourcesRequest request)
```

Lists all sources belonging to an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListSourcesRequest request =
       ListSourcesRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (Source element : securityCenterClient.listSources(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListSourcesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityCenterClient.ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPagedResponse)

### listSources(OrganizationName parent)

```
public final SecurityCenterClient.ListSourcesPagedResponse listSources(OrganizationName parent)
```

Lists all sources belonging to an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   for (Source element : securityCenterClient.listSources(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[OrganizationName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationName)`  

Required. Resource name of the parent of sources to list. Its format should be "organizations/\[organization\_id\]".

**Returns**

**Type**

**Description**

[SecurityCenterClient.ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPagedResponse)

### listSources(String parent)

```
public final SecurityCenterClient.ListSourcesPagedResponse listSources(String parent)
```

Lists all sources belonging to an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String parent = OrganizationName.of("[ORGANIZATION]").toString();
   for (Source element : securityCenterClient.listSources(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the parent of sources to list. Its format should be "organizations/\[organization\_id\]".

**Returns**

**Type**

**Description**

[SecurityCenterClient.ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPagedResponse)

### listSourcesCallable()

```
public final UnaryCallable<ListSourcesRequest,ListSourcesResponse> listSourcesCallable()
```

Lists all sources belonging to an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListSourcesRequest request =
       ListSourcesRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListSourcesResponse response = securityCenterClient.listSourcesCallable().call(request);
     for (Source element : response.getSourcesList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListSourcesRequest),[ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListSourcesResponse)\>

### listSourcesPagedCallable()

```
public final UnaryCallable<ListSourcesRequest,SecurityCenterClient.ListSourcesPagedResponse> listSourcesPagedCallable()
```

Lists all sources belonging to an organization.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ListSourcesRequest request =
       ListSourcesRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<Source> future =
       securityCenterClient.listSourcesPagedCallable().futureCall(request);
   // Do something.
   for (Source element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.ListSourcesRequest),[ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPagedResponse)\>

### runAssetDiscoveryAsync(OrganizationName parent)

```
public final OperationFuture<Empty,Empty> runAssetDiscoveryAsync(OrganizationName parent)
```

Runs asset discovery. The discovery is tracked with a long-running operation.

This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   securityCenterClient.runAssetDiscoveryAsync(parent).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[OrganizationName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationName)`  

Required. Name of the organization to run asset discovery for. Its format is "organizations/\[organization\_id\]".

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### runAssetDiscoveryAsync(RunAssetDiscoveryRequest request)

```
public final OperationFuture<Empty,Empty> runAssetDiscoveryAsync(RunAssetDiscoveryRequest request)
```

Runs asset discovery. The discovery is tracked with a long-running operation.

This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   RunAssetDiscoveryRequest request =
       RunAssetDiscoveryRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .build();
   securityCenterClient.runAssetDiscoveryAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### runAssetDiscoveryAsync(String parent)

```
public final OperationFuture<Empty,Empty> runAssetDiscoveryAsync(String parent)
```

Runs asset discovery. The discovery is tracked with a long-running operation.

This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String parent = OrganizationName.of("[ORGANIZATION]").toString();
   securityCenterClient.runAssetDiscoveryAsync(parent).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Name of the organization to run asset discovery for. Its format is "organizations/\[organization\_id\]".

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### runAssetDiscoveryCallable()

```
public final UnaryCallable<RunAssetDiscoveryRequest,Operation> runAssetDiscoveryCallable()
```

Runs asset discovery. The discovery is tracked with a long-running operation.

This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   RunAssetDiscoveryRequest request =
       RunAssetDiscoveryRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .build();
   ApiFuture<Operation> future =
       securityCenterClient.runAssetDiscoveryCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### runAssetDiscoveryOperationCallable()

```
public final OperationCallable<RunAssetDiscoveryRequest,Empty,Empty> runAssetDiscoveryOperationCallable()
```

Runs asset discovery. The discovery is tracked with a long-running operation.

This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   RunAssetDiscoveryRequest request =
       RunAssetDiscoveryRequest.newBuilder()
           .setParent(OrganizationName.of("[ORGANIZATION]").toString())
           .build();
   OperationFuture<Empty, Empty> future =
       securityCenterClient.runAssetDiscoveryOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### setFindingState(FindingName name, Finding.State state, Timestamp startTime)

```
public final Finding setFindingState(FindingName name, Finding.State state, Timestamp startTime)
```

Updates the state of a finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   FindingName name = FindingName.of("[ORGANIZATION]", "[SOURCE]", "[FINDING]");
   Finding.State state = Finding.State.forNumber(0);
   Timestamp startTime = Timestamp.newBuilder().build();
   Finding response = securityCenterClient.setFindingState(name, state, startTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[FindingName](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.FindingName)`  

Required. The relative resource name of the finding. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: "organizations/{organization\_id}/sources/{source\_id}/finding/{finding\_id}".

state

`[Finding.State](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding.State)`  

Required. The desired State of the finding.

startTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The time at which the updated state takes effect.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### setFindingState(SetFindingStateRequest request)

```
public final Finding setFindingState(SetFindingStateRequest request)
```

Updates the state of a finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SetFindingStateRequest request =
       SetFindingStateRequest.newBuilder()
           .setName(FindingName.of("[ORGANIZATION]", "[SOURCE]", "[FINDING]").toString())
           .setStartTime(Timestamp.newBuilder().build())
           .build();
   Finding response = securityCenterClient.setFindingState(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SetFindingStateRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### setFindingState(String name, Finding.State state, Timestamp startTime)

```
public final Finding setFindingState(String name, Finding.State state, Timestamp startTime)
```

Updates the state of a finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String name = FindingName.of("[ORGANIZATION]", "[SOURCE]", "[FINDING]").toString();
   Finding.State state = Finding.State.forNumber(0);
   Timestamp startTime = Timestamp.newBuilder().build();
   Finding response = securityCenterClient.setFindingState(name, state, startTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The relative resource name of the finding. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: "organizations/{organization\_id}/sources/{source\_id}/finding/{finding\_id}".

state

`[Finding.State](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding.State)`  

Required. The desired State of the finding.

startTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The time at which the updated state takes effect.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### setFindingStateCallable()

```
public final UnaryCallable<SetFindingStateRequest,Finding> setFindingStateCallable()
```

Updates the state of a finding.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SetFindingStateRequest request =
       SetFindingStateRequest.newBuilder()
           .setName(FindingName.of("[ORGANIZATION]", "[SOURCE]", "[FINDING]").toString())
           .setStartTime(Timestamp.newBuilder().build())
           .build();
   ApiFuture<Finding> future =
       securityCenterClient.setFindingStateCallable().futureCall(request);
   // Do something.
   Finding response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SetFindingStateRequest),[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)\>

### setIamPolicy(ResourceName resource, Policy policy)

```
public final Policy setIamPolicy(ResourceName resource, Policy policy)
```

Sets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ResourceName resource = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   Policy policy = Policy.newBuilder().build();
   Policy response = securityCenterClient.setIamPolicy(resource, policy);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

policy

`com.google.iam.v1.Policy`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicy(SetIamPolicyRequest request)

```
public final Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = securityCenterClient.setIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.SetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicy(String resource, Policy policy)

```
public final Policy setIamPolicy(String resource, Policy policy)
```

Sets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String resource = OrganizationName.of("[ORGANIZATION]").toString();
   Policy policy = Policy.newBuilder().build();
   Policy response = securityCenterClient.setIamPolicy(resource, policy);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

policy

`com.google.iam.v1.Policy`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicyCallable()

```
public final UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

Sets the access control policy on the specified Source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future = securityCenterClient.setIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### testIamPermissions(ResourceName resource, List<String> permissions)

```
public final TestIamPermissionsResponse testIamPermissions(ResourceName resource, List<String> permissions)
```

Returns the permissions that a caller has on the specified source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   ResourceName resource = SourceName.of("[ORGANIZATION]", "[SOURCE]");
   List<String> permissions = new ArrayList<>();
   TestIamPermissionsResponse response =
       securityCenterClient.testIamPermissions(resource, permissions);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

permissions

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '\*' or 'storage.\*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissions(TestIamPermissionsRequest request)

```
public final TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns the permissions that a caller has on the specified source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = securityCenterClient.testIamPermissions(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.TestIamPermissionsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissions(String resource, List<String> permissions)

```
public final TestIamPermissionsResponse testIamPermissions(String resource, List<String> permissions)
```

Returns the permissions that a caller has on the specified source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   String resource = OrganizationName.of("[ORGANIZATION]").toString();
   List<String> permissions = new ArrayList<>();
   TestIamPermissionsResponse response =
       securityCenterClient.testIamPermissions(resource, permissions);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

permissions

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '\*' or 'storage.\*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissionsCallable()

```
public final UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

Returns the permissions that a caller has on the specified source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(SourceName.of("[ORGANIZATION]", "[SOURCE]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       securityCenterClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse\>

### updateFinding(Finding finding)

```
public final Finding updateFinding(Finding finding)
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   Finding finding = Finding.newBuilder().build();
   Finding response = securityCenterClient.updateFinding(finding);
 }
 
```
 

**Parameter**

**Name**

**Description**

finding

`[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)`  

Required. The finding resource to update or create if it does not already exist. parent, security\_marks, and update\_time will be ignored.

In the case of creation, the finding id portion of the name must alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### updateFinding(UpdateFindingRequest request)

```
public final Finding updateFinding(UpdateFindingRequest request)
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateFindingRequest request =
       UpdateFindingRequest.newBuilder()
           .setFinding(Finding.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Finding response = securityCenterClient.updateFinding(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateFindingRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)

### updateFindingCallable()

```
public final UnaryCallable<UpdateFindingRequest,Finding> updateFindingCallable()
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateFindingRequest request =
       UpdateFindingRequest.newBuilder()
           .setFinding(Finding.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Finding> future = securityCenterClient.updateFindingCallable().futureCall(request);
   // Do something.
   Finding response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateFindingRequest),[Finding](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Finding)\>

### updateOrganizationSettings(OrganizationSettings organizationSettings)

```
public final OrganizationSettings updateOrganizationSettings(OrganizationSettings organizationSettings)
```

Updates an organization's settings.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationSettings organizationSettings = OrganizationSettings.newBuilder().build();
   OrganizationSettings response =
       securityCenterClient.updateOrganizationSettings(organizationSettings);
 }
 
```
 

**Parameter**

**Name**

**Description**

organizationSettings

`[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)`  

Required. The organization settings resource to update.

**Returns**

**Type**

**Description**

[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

### updateOrganizationSettings(UpdateOrganizationSettingsRequest request)

```
public final OrganizationSettings updateOrganizationSettings(UpdateOrganizationSettingsRequest request)
```

Updates an organization's settings.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateOrganizationSettingsRequest request =
       UpdateOrganizationSettingsRequest.newBuilder()
           .setOrganizationSettings(OrganizationSettings.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   OrganizationSettings response = securityCenterClient.updateOrganizationSettings(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

### updateOrganizationSettingsCallable()

```
public final UnaryCallable<UpdateOrganizationSettingsRequest,OrganizationSettings> updateOrganizationSettingsCallable()
```

Updates an organization's settings.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateOrganizationSettingsRequest request =
       UpdateOrganizationSettingsRequest.newBuilder()
           .setOrganizationSettings(OrganizationSettings.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<OrganizationSettings> future =
       securityCenterClient.updateOrganizationSettingsCallable().futureCall(request);
   // Do something.
   OrganizationSettings response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest),[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)\>

### updateSecurityMarks(SecurityMarks securityMarks)

```
public final SecurityMarks updateSecurityMarks(SecurityMarks securityMarks)
```

Updates security marks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   SecurityMarks securityMarks = SecurityMarks.newBuilder().build();
   SecurityMarks response = securityCenterClient.updateSecurityMarks(securityMarks);
 }
 
```
 

**Parameter**

**Name**

**Description**

securityMarks

`[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityMarks)`  

Required. The security marks resource to update.

**Returns**

**Type**

**Description**

[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityMarks)

### updateSecurityMarks(UpdateSecurityMarksRequest request)

```
public final SecurityMarks updateSecurityMarks(UpdateSecurityMarksRequest request)
```

Updates security marks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateSecurityMarksRequest request =
       UpdateSecurityMarksRequest.newBuilder()
           .setSecurityMarks(SecurityMarks.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setStartTime(Timestamp.newBuilder().build())
           .build();
   SecurityMarks response = securityCenterClient.updateSecurityMarks(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityMarks)

### updateSecurityMarksCallable()

```
public final UnaryCallable<UpdateSecurityMarksRequest,SecurityMarks> updateSecurityMarksCallable()
```

Updates security marks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateSecurityMarksRequest request =
       UpdateSecurityMarksRequest.newBuilder()
           .setSecurityMarks(SecurityMarks.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setStartTime(Timestamp.newBuilder().build())
           .build();
   ApiFuture<SecurityMarks> future =
       securityCenterClient.updateSecurityMarksCallable().futureCall(request);
   // Do something.
   SecurityMarks response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest),[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.SecurityMarks)\>

### updateSource(Source source)

```
public final Source updateSource(Source source)
```

Updates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.updateSource(source);
 }
 
```
 

**Parameter**

**Name**

**Description**

source

`[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)`  

Required. The source resource to update.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### updateSource(UpdateSourceRequest request)

```
public final Source updateSource(UpdateSourceRequest request)
```

Updates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateSourceRequest request =
       UpdateSourceRequest.newBuilder()
           .setSource(Source.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Source response = securityCenterClient.updateSource(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateSourceRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)

### updateSourceCallable()

```
public final UnaryCallable<UpdateSourceRequest,Source> updateSourceCallable()
```

Updates a source.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   UpdateSourceRequest request =
       UpdateSourceRequest.newBuilder()
           .setSource(Source.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Source> future = securityCenterClient.updateSourceCallable().futureCall(request);
   // Do something.
   Source response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.UpdateSourceRequest),[Source](/java/docs/reference/google-cloud-securitycenter/2.10.0/com.google.cloud.securitycenter.v1beta1.Source)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
