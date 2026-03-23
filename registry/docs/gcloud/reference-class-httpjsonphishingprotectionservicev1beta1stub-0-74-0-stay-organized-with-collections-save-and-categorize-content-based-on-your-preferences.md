-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonPhishingProtectionServiceV1Beta1Stub (0.74.0) Stay organized with collections Save and categorize content based on your preferences.

0.118.0 (latest) 0.116.0 0.114.0 0.113.0 0.111.0 0.109.0 0.107.0 0.106.0 0.105.0 0.104.0 0.103.0 0.101.0 0.99.0 0.98.0 0.95.0 0.94.0 0.93.0 0.91.0 0.90.0 0.89.0 0.88.0 0.87.0 0.86.0 0.85.0 0.84.0 0.83.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.70.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.6 0.33.1 0.32.11

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class HttpJsonPhishingProtectionServiceV1Beta1Stub extends PhishingProtectionServiceV1Beta1Stub
```

REST stub implementation for the PhishingProtectionServiceV1Beta1 service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [PhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub) \> HttpJsonPhishingProtectionServiceV1Beta1Stub

## Inherited Members

[PhishingProtectionServiceV1Beta1Stub.close()](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub#com_google_cloud_phishingprotection_v1beta1_stub_PhishingProtectionServiceV1Beta1Stub_close__)

[PhishingProtectionServiceV1Beta1Stub.reportPhishingCallable()](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub#com_google_cloud_phishingprotection_v1beta1_stub_PhishingProtectionServiceV1Beta1Stub_reportPhishingCallable__)

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

### create(ClientContext clientContext)

```
public static final HttpJsonPhishingProtectionServiceV1Beta1Stub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonPhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.HttpJsonPhishingProtectionServiceV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonPhishingProtectionServiceV1Beta1Stub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonPhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.HttpJsonPhishingProtectionServiceV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PhishingProtectionServiceV1Beta1StubSettings settings)

```
public static final HttpJsonPhishingProtectionServiceV1Beta1Stub create(PhishingProtectionServiceV1Beta1StubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[PhishingProtectionServiceV1Beta1StubSettings](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1StubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonPhishingProtectionServiceV1Beta1Stub](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.HttpJsonPhishingProtectionServiceV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Internal Only**: This feature is not stable for application use.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonPhishingProtectionServiceV1Beta1Stub(PhishingProtectionServiceV1Beta1StubSettings settings, ClientContext clientContext)

```
protected HttpJsonPhishingProtectionServiceV1Beta1Stub(PhishingProtectionServiceV1Beta1StubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonPhishingProtectionServiceV1Beta1Stub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PhishingProtectionServiceV1Beta1StubSettings](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1StubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonPhishingProtectionServiceV1Beta1Stub(PhishingProtectionServiceV1Beta1StubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonPhishingProtectionServiceV1Beta1Stub(PhishingProtectionServiceV1Beta1StubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonPhishingProtectionServiceV1Beta1Stub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PhishingProtectionServiceV1Beta1StubSettings](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1StubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

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

**Overrides**

[PhishingProtectionServiceV1Beta1Stub.close()](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub#com_google_cloud_phishingprotection_v1beta1_stub_PhishingProtectionServiceV1Beta1Stub_close__)

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

### reportPhishingCallable()

```
public UnaryCallable<ReportPhishingRequest,ReportPhishingResponse> reportPhishingCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ReportPhishingRequest](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.phishingprotection.v1beta1.ReportPhishingRequest),[ReportPhishingResponse](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.phishingprotection.v1beta1.ReportPhishingResponse)>`

**Overrides**

[PhishingProtectionServiceV1Beta1Stub.reportPhishingCallable()](/java/docs/reference/google-cloud-phishingprotection/0.74.0/com.google.cloud.phishingprotection.v1beta1.stub.PhishingProtectionServiceV1Beta1Stub#com_google_cloud_phishingprotection_v1beta1_stub_PhishingProtectionServiceV1Beta1Stub_reportPhishingCallable__)

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
