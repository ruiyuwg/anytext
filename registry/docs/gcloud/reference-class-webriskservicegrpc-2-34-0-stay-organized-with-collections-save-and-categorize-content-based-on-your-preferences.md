-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WebRiskServiceGrpc (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.6 2.0.12

```
public final class WebRiskServiceGrpc
```

Web Risk API defines an interface to detect malicious URLs on your website and in client applications.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WebRiskServiceGrpc

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(WebRiskServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(WebRiskServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[WebRiskServiceGrpc.AsyncService](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.WebRiskServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getComputeThreatListDiffMethod()

```
public static MethodDescriptor<ComputeThreatListDiffRequest,ComputeThreatListDiffResponse> getComputeThreatListDiffMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ComputeThreatListDiffRequest](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.ComputeThreatListDiffRequest),[ComputeThreatListDiffResponse](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.ComputeThreatListDiffResponse)>`

### getCreateSubmissionMethod()

```
public static MethodDescriptor<CreateSubmissionRequest,Submission> getCreateSubmissionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateSubmissionRequest](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.CreateSubmissionRequest),[Submission](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.Submission)>`

### getSearchHashesMethod()

```
public static MethodDescriptor<SearchHashesRequest,SearchHashesResponse> getSearchHashesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SearchHashesRequest](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.SearchHashesRequest),[SearchHashesResponse](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.SearchHashesResponse)>`

### getSearchUrisMethod()

```
public static MethodDescriptor<SearchUrisRequest,SearchUrisResponse> getSearchUrisMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SearchUrisRequest](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.SearchUrisRequest),[SearchUrisResponse](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.SearchUrisResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getSubmitUriMethod()

```
public static MethodDescriptor<SubmitUriRequest,Operation> getSubmitUriMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SubmitUriRequest](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.SubmitUriRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static WebRiskServiceGrpc.WebRiskServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WebRiskServiceGrpc.WebRiskServiceBlockingStub](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.WebRiskServiceGrpc.WebRiskServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static WebRiskServiceGrpc.WebRiskServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WebRiskServiceGrpc.WebRiskServiceFutureStub](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.WebRiskServiceGrpc.WebRiskServiceFutureStub)`

### newStub(Channel channel)

```
public static WebRiskServiceGrpc.WebRiskServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WebRiskServiceGrpc.WebRiskServiceStub](/java/docs/reference/google-cloud-webrisk/2.34.0/com.google.webrisk.v1.WebRiskServiceGrpc.WebRiskServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
