-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub (0.50.0) Stay organized with collections Save and categorize content based on your preferences.

0.118.0 (latest) 0.116.0 0.114.0 0.113.0 0.111.0 0.109.0 0.107.0 0.106.0 0.105.0 0.104.0 0.103.0 0.101.0 0.99.0 0.98.0 0.95.0 0.94.0 0.93.0 0.91.0 0.90.0 0.89.0 0.88.0 0.87.0 0.86.0 0.85.0 0.84.0 0.83.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.70.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.6 0.33.1 0.32.11

```
public static final class PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub extends AbstractFutureStub<PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service PhishingProtectionServiceV1Beta1.

Service to report phishing URIs.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub

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

### build(Channel channel, CallOptions callOptions)

```
protected PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub build(Channel channel, CallOptions callOptions)
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

`[PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub](/java/docs/reference/google-cloud-phishingprotection/0.50.0/com.google.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1Grpc.PhishingProtectionServiceV1Beta1FutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### reportPhishing(ReportPhishingRequest request)

```
public ListenableFuture<ReportPhishingResponse> reportPhishing(ReportPhishingRequest request)
```

Reports a URI suspected of containing phishing content to be reviewed. Once the report review is complete, its result can be found in the Cloud Security Command Center findings dashboard for Phishing Protection. If the result verifies the existence of malicious phishing content, the site will be added the to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future.

**Parameter**

**Name**

**Description**

`request`

`[ReportPhishingRequest](/java/docs/reference/google-cloud-phishingprotection/0.50.0/com.google.phishingprotection.v1beta1.ReportPhishingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/0.50.0/com.google.phishingprotection.v1beta1.ReportPhishingResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
