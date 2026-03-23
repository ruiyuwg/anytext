-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WebSecurityScannerGrpc.WebSecurityScannerStub (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public static final class WebSecurityScannerGrpc.WebSecurityScannerStub extends AbstractAsyncStub<WebSecurityScannerGrpc.WebSecurityScannerStub>
```

A stub to allow clients to do asynchronous rpc calls to service WebSecurityScanner.

Cloud Web Security Scanner Service identifies security vulnerabilities in web applications hosted on Google Cloud Platform. It crawls your application, and attempts to exercise as many user inputs and event handlers as possible.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> WebSecurityScannerGrpc.WebSecurityScannerStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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

### build(Channel channel, CallOptions callOptions)

```
protected WebSecurityScannerGrpc.WebSecurityScannerStub build(Channel channel, CallOptions callOptions)
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

`[WebSecurityScannerGrpc.WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerGrpc.WebSecurityScannerStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createScanConfig(CreateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public void createScanConfig(CreateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Creates a new ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanConfig)>`  

### deleteScanConfig(DeleteScanConfigRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteScanConfig(DeleteScanConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an existing ScanConfig and its child resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getFinding(GetFindingRequest request, StreamObserver<Finding> responseObserver)

```
public void getFinding(GetFindingRequest request, StreamObserver<Finding> responseObserver)
```

Gets a Finding.

**Parameters**

**Name**

**Description**

`request`

`[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.GetFindingRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.Finding)>`  

### getScanConfig(GetScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public void getScanConfig(GetScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Gets a ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanConfig)>`  

### getScanRun(GetScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public void getScanRun(GetScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Gets a ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanRun)>`  

### listCrawledUrls(ListCrawledUrlsRequest request, StreamObserver<ListCrawledUrlsResponse> responseObserver)

```
public void listCrawledUrls(ListCrawledUrlsRequest request, StreamObserver<ListCrawledUrlsResponse> responseObserver)
```

List CrawledUrls under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse)>`  

### listFindingTypeStats(ListFindingTypeStatsRequest request, StreamObserver<ListFindingTypeStatsResponse> responseObserver)

```
public void listFindingTypeStats(ListFindingTypeStatsRequest request, StreamObserver<ListFindingTypeStatsResponse> responseObserver)
```

List all FindingTypeStats under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse)>`  

### listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)

```
public void listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)
```

List Findings under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse)>`  

### listScanConfigs(ListScanConfigsRequest request, StreamObserver<ListScanConfigsResponse> responseObserver)

```
public void listScanConfigs(ListScanConfigsRequest request, StreamObserver<ListScanConfigsResponse> responseObserver)
```

Lists ScanConfigs under a given project.

**Parameters**

**Name**

**Description**

`request`

`[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse)>`  

### listScanRuns(ListScanRunsRequest request, StreamObserver<ListScanRunsResponse> responseObserver)

```
public void listScanRuns(ListScanRunsRequest request, StreamObserver<ListScanRunsResponse> responseObserver)
```

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

**Parameters**

**Name**

**Description**

`request`

`[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse)>`  

### startScanRun(StartScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public void startScanRun(StartScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Start a ScanRun according to the given ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanRun)>`  

### stopScanRun(StopScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public void stopScanRun(StopScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Stops a ScanRun. The stopped ScanRun is returned.

**Parameters**

**Name**

**Description**

`request`

`[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanRun)>`  

### updateScanConfig(UpdateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public void updateScanConfig(UpdateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Updates a ScanConfig. This method support partial update of a ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.53.0/com.google.cloud.websecurityscanner.v1alpha.ScanConfig)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
