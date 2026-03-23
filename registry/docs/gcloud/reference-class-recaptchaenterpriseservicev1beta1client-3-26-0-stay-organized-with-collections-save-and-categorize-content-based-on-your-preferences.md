-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecaptchaEnterpriseServiceV1Beta1Client (3.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public class RecaptchaEnterpriseServiceV1Beta1Client implements BackgroundResource
```

Service Description: Service to determine the likelihood an event is legitimate.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   Assessment assessment = Assessment.newBuilder().build();
   Assessment response =
       recaptchaEnterpriseServiceV1Beta1Client.createAssessment(parent, assessment);
 }
 
```
 

Note: close() needs to be called on the RecaptchaEnterpriseServiceV1Beta1Client object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of RecaptchaEnterpriseServiceV1Beta1Settings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecaptchaEnterpriseServiceV1Beta1Settings recaptchaEnterpriseServiceV1Beta1Settings =
     RecaptchaEnterpriseServiceV1Beta1Settings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create(recaptchaEnterpriseServiceV1Beta1Settings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecaptchaEnterpriseServiceV1Beta1Settings recaptchaEnterpriseServiceV1Beta1Settings =
     RecaptchaEnterpriseServiceV1Beta1Settings.newBuilder().setEndpoint(myEndpoint).build();
 RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create(recaptchaEnterpriseServiceV1Beta1Settings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecaptchaEnterpriseServiceV1Beta1Settings recaptchaEnterpriseServiceV1Beta1Settings =
     RecaptchaEnterpriseServiceV1Beta1Settings.newHttpJsonBuilder().build();
 RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create(recaptchaEnterpriseServiceV1Beta1Settings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> RecaptchaEnterpriseServiceV1Beta1Client

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
public static final RecaptchaEnterpriseServiceV1Beta1Client create()
```

Constructs an instance of RecaptchaEnterpriseServiceV1Beta1Client with default settings.

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Client](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(RecaptchaEnterpriseServiceV1Beta1Settings settings)

```
public static final RecaptchaEnterpriseServiceV1Beta1Client create(RecaptchaEnterpriseServiceV1Beta1Settings settings)
```

Constructs an instance of RecaptchaEnterpriseServiceV1Beta1Client, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[RecaptchaEnterpriseServiceV1Beta1Settings](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Settings)`  

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Client](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(RecaptchaEnterpriseServiceV1Beta1Stub stub)

```
public static final RecaptchaEnterpriseServiceV1Beta1Client create(RecaptchaEnterpriseServiceV1Beta1Stub stub)
```

Constructs an instance of RecaptchaEnterpriseServiceV1Beta1Client, using the given stub for making calls. This is for advanced usage - prefer using create(RecaptchaEnterpriseServiceV1Beta1Settings).

**Parameter**

**Name**

**Description**

`stub`

`[RecaptchaEnterpriseServiceV1Beta1Stub](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.stub.RecaptchaEnterpriseServiceV1Beta1Stub)`  

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Client](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client)`

## Constructors

### RecaptchaEnterpriseServiceV1Beta1Client(RecaptchaEnterpriseServiceV1Beta1Settings settings)

```
protected RecaptchaEnterpriseServiceV1Beta1Client(RecaptchaEnterpriseServiceV1Beta1Settings settings)
```

Constructs an instance of RecaptchaEnterpriseServiceV1Beta1Client, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[RecaptchaEnterpriseServiceV1Beta1Settings](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Settings)`  

### RecaptchaEnterpriseServiceV1Beta1Client(RecaptchaEnterpriseServiceV1Beta1Stub stub)

```
protected RecaptchaEnterpriseServiceV1Beta1Client(RecaptchaEnterpriseServiceV1Beta1Stub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[RecaptchaEnterpriseServiceV1Beta1Stub](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.stub.RecaptchaEnterpriseServiceV1Beta1Stub)`  

## Methods

### annotateAssessment(AnnotateAssessmentRequest request)

```
public final AnnotateAssessmentResponse annotateAssessment(AnnotateAssessmentRequest request)
```

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fradulent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   AnnotateAssessmentRequest request =
       AnnotateAssessmentRequest.newBuilder()
           .setName(AssessmentName.of("[PROJECT]", "[ASSESSMENT]").toString())
           .addAllReasons(new ArrayList<AnnotateAssessmentRequest.Reason>())
           .setHashedAccountId(ByteString.EMPTY)
           .setTransactionEvent(TransactionEvent.newBuilder().build())
           .build();
   AnnotateAssessmentResponse response =
       recaptchaEnterpriseServiceV1Beta1Client.annotateAssessment(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[AnnotateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse)`

### annotateAssessment(AssessmentName name, AnnotateAssessmentRequest.Annotation annotation)

```
public final AnnotateAssessmentResponse annotateAssessment(AssessmentName name, AnnotateAssessmentRequest.Annotation annotation)
```

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fradulent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   AssessmentName name = AssessmentName.of("[PROJECT]", "[ASSESSMENT]");
   AnnotateAssessmentRequest.Annotation annotation =
       AnnotateAssessmentRequest.Annotation.forNumber(0);
   AnnotateAssessmentResponse response =
       recaptchaEnterpriseServiceV1Beta1Client.annotateAssessment(name, annotation);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[AssessmentName](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AssessmentName)`  

Required. The resource name of the Assessment, in the format `projects/{project_number}/assessments/{assessment_id}`.

`annotation`

`[AnnotateAssessmentRequest.Annotation](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation)`  

Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.

**Returns**

**Type**

**Description**

`[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse)`

### annotateAssessment(String name, AnnotateAssessmentRequest.Annotation annotation)

```
public final AnnotateAssessmentResponse annotateAssessment(String name, AnnotateAssessmentRequest.Annotation annotation)
```

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fradulent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   String name = AssessmentName.of("[PROJECT]", "[ASSESSMENT]").toString();
   AnnotateAssessmentRequest.Annotation annotation =
       AnnotateAssessmentRequest.Annotation.forNumber(0);
   AnnotateAssessmentResponse response =
       recaptchaEnterpriseServiceV1Beta1Client.annotateAssessment(name, annotation);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the Assessment, in the format `projects/{project_number}/assessments/{assessment_id}`.

`annotation`

`[AnnotateAssessmentRequest.Annotation](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation)`  

Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.

**Returns**

**Type**

**Description**

`[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse)`

### annotateAssessmentCallable()

```
public final UnaryCallable<AnnotateAssessmentRequest,AnnotateAssessmentResponse> annotateAssessmentCallable()
```

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fradulent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   AnnotateAssessmentRequest request =
       AnnotateAssessmentRequest.newBuilder()
           .setName(AssessmentName.of("[PROJECT]", "[ASSESSMENT]").toString())
           .addAllReasons(new ArrayList<AnnotateAssessmentRequest.Reason>())
           .setHashedAccountId(ByteString.EMPTY)
           .setTransactionEvent(TransactionEvent.newBuilder().build())
           .build();
   ApiFuture<AnnotateAssessmentResponse> future =
       recaptchaEnterpriseServiceV1Beta1Client.annotateAssessmentCallable().futureCall(request);
   // Do something.
   AnnotateAssessmentResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AnnotateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest),[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse)>`

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

### createAssessment(CreateAssessmentRequest request)

```
public final Assessment createAssessment(CreateAssessmentRequest request)
```

Creates an Assessment of the likelihood an event is legitimate.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   CreateAssessmentRequest request =
       CreateAssessmentRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setAssessment(Assessment.newBuilder().build())
           .build();
   Assessment response = recaptchaEnterpriseServiceV1Beta1Client.createAssessment(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.CreateAssessmentRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)`

### createAssessment(ProjectName parent, Assessment assessment)

```
public final Assessment createAssessment(ProjectName parent, Assessment assessment)
```

Creates an Assessment of the likelihood an event is legitimate.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   Assessment assessment = Assessment.newBuilder().build();
   Assessment response =
       recaptchaEnterpriseServiceV1Beta1Client.createAssessment(parent, assessment);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.ProjectName)`  

Required. The name of the project in which the assessment will be created, in the format `projects/{project_number}`.

`assessment`

`[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)`  

Required. The assessment details.

**Returns**

**Type**

**Description**

`[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)`

### createAssessment(String parent, Assessment assessment)

```
public final Assessment createAssessment(String parent, Assessment assessment)
```

Creates an Assessment of the likelihood an event is legitimate.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   Assessment assessment = Assessment.newBuilder().build();
   Assessment response =
       recaptchaEnterpriseServiceV1Beta1Client.createAssessment(parent, assessment);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the project in which the assessment will be created, in the format `projects/{project_number}`.

`assessment`

`[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)`  

Required. The assessment details.

**Returns**

**Type**

**Description**

`[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)`

### createAssessmentCallable()

```
public final UnaryCallable<CreateAssessmentRequest,Assessment> createAssessmentCallable()
```

Creates an Assessment of the likelihood an event is legitimate.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecaptchaEnterpriseServiceV1Beta1Client recaptchaEnterpriseServiceV1Beta1Client =
     RecaptchaEnterpriseServiceV1Beta1Client.create()) {
   CreateAssessmentRequest request =
       CreateAssessmentRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setAssessment(Assessment.newBuilder().build())
           .build();
   ApiFuture<Assessment> future =
       recaptchaEnterpriseServiceV1Beta1Client.createAssessmentCallable().futureCall(request);
   // Do something.
   Assessment response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.CreateAssessmentRequest),[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.recaptchaenterprise.v1beta1.Assessment)>`

### getSettings()

```
public final RecaptchaEnterpriseServiceV1Beta1Settings getSettings()
```

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Settings](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Settings)`

### getStub()

```
public RecaptchaEnterpriseServiceV1Beta1Stub getStub()
```

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Stub](/java/docs/reference/google-cloud-recaptchaenterprise/3.26.0/com.google.cloud.recaptchaenterprise.v1beta1.stub.RecaptchaEnterpriseServiceV1Beta1Stub)`

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
