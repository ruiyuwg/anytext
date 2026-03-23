-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub (3.49.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public static final class RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub extends AbstractFutureStub<RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service RecaptchaEnterpriseServiceV1Beta1.

Service to determine the likelihood an event is legitimate.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### annotateAssessment(AnnotateAssessmentRequest request)

```
public ListenableFuture<AnnotateAssessmentResponse> annotateAssessment(AnnotateAssessmentRequest request)
```

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fradulent.

**Parameter**

**Name**

**Description**

`request`

`[AnnotateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.49.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.49.0/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse)>`

### build(Channel channel, CallOptions callOptions)

```
protected RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub](/java/docs/reference/google-cloud-recaptchaenterprise/3.49.0/com.google.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Grpc.RecaptchaEnterpriseServiceV1Beta1FutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createAssessment(CreateAssessmentRequest request)

```
public ListenableFuture<Assessment> createAssessment(CreateAssessmentRequest request)
```

Creates an Assessment of the likelihood an event is legitimate.

**Parameter**

**Name**

**Description**

`request`

`[CreateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.49.0/com.google.recaptchaenterprise.v1beta1.CreateAssessmentRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.49.0/com.google.recaptchaenterprise.v1beta1.Assessment)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
