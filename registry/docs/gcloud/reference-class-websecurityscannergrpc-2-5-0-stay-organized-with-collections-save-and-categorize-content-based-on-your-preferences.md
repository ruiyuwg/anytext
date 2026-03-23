-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WebSecurityScannerGrpc (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public final class WebSecurityScannerGrpc
```

Web Security Scanner Service identifies security vulnerabilities in web applications hosted on Google Cloud. It crawls your application, and attempts to exercise as many user inputs and event handlers as possible.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WebSecurityScannerGrpc

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

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

## Static Methods

### getCreateScanConfigMethod()

```
public static MethodDescriptor<CreateScanConfigRequest,ScanConfig> getCreateScanConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.CreateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanConfig)\>

### getDeleteScanConfigMethod()

```
public static MethodDescriptor<DeleteScanConfigRequest,Empty> getDeleteScanConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.DeleteScanConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getGetFindingMethod()

```
public static MethodDescriptor<GetFindingRequest,Finding> getGetFindingMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.GetFindingRequest),[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.Finding)\>

### getGetScanConfigMethod()

```
public static MethodDescriptor<GetScanConfigRequest,ScanConfig> getGetScanConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.GetScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanConfig)\>

### getGetScanRunMethod()

```
public static MethodDescriptor<GetScanRunRequest,ScanRun> getGetScanRunMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.GetScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanRun)\>

### getListCrawledUrlsMethod()

```
public static MethodDescriptor<ListCrawledUrlsRequest,ListCrawledUrlsResponse> getListCrawledUrlsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest),[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse)\>

### getListFindingTypeStatsMethod()

```
public static MethodDescriptor<ListFindingTypeStatsRequest,ListFindingTypeStatsResponse> getListFindingTypeStatsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest),[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse)\>

### getListFindingsMethod()

```
public static MethodDescriptor<ListFindingsRequest,ListFindingsResponse> getListFindingsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListFindingsRequest),[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListFindingsResponse)\>

### getListScanConfigsMethod()

```
public static MethodDescriptor<ListScanConfigsRequest,ListScanConfigsResponse> getListScanConfigsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest),[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsResponse)\>

### getListScanRunsMethod()

```
public static MethodDescriptor<ListScanRunsRequest,ListScanRunsResponse> getListScanRunsMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest),[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ListScanRunsResponse)\>

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

io.grpc.ServiceDescriptor

### getStartScanRunMethod()

```
public static MethodDescriptor<StartScanRunRequest,ScanRun> getStartScanRunMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.StartScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanRun)\>

### getStopScanRunMethod()

```
public static MethodDescriptor<StopScanRunRequest,ScanRun> getStopScanRunMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.StopScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanRun)\>

### getUpdateScanConfigMethod()

```
public static MethodDescriptor<UpdateScanConfigRequest,ScanConfig> getUpdateScanConfigMethod()
```

**Returns**

**Type**

**Description**

io.grpc.MethodDescriptor<[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.UpdateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.ScanConfig)\>

### newBlockingStub(Channel channel)

```
public static WebSecurityScannerGrpc.WebSecurityScannerBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[WebSecurityScannerGrpc.WebSecurityScannerBlockingStub](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerGrpc.WebSecurityScannerBlockingStub)

### newFutureStub(Channel channel)

```
public static WebSecurityScannerGrpc.WebSecurityScannerFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[WebSecurityScannerGrpc.WebSecurityScannerFutureStub](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerGrpc.WebSecurityScannerFutureStub)

### newStub(Channel channel)

```
public static WebSecurityScannerGrpc.WebSecurityScannerStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

channel

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

[WebSecurityScannerGrpc.WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/2.5.0/com.google.cloud.websecurityscanner.v1.WebSecurityScannerGrpc.WebSecurityScannerStub)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
