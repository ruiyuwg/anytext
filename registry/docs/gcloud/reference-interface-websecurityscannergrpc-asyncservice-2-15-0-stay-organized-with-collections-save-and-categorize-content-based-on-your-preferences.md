-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WebSecurityScannerGrpc.AsyncService (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public static interface WebSecurityScannerGrpc.AsyncService
```

Web Security Scanner Service identifies security vulnerabilities in web applications hosted on Google Cloud. It crawls your application, and attempts to exercise as many user inputs and event handlers as possible.

## Methods

### createScanConfig(CreateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public default void createScanConfig(CreateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Creates a new ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.CreateScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`  

### deleteScanConfig(DeleteScanConfigRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteScanConfig(DeleteScanConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an existing ScanConfig and its child resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.DeleteScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getFinding(GetFindingRequest request, StreamObserver<Finding> responseObserver)

```
public default void getFinding(GetFindingRequest request, StreamObserver<Finding> responseObserver)
```

Gets a Finding.

**Parameters**

**Name**

**Description**

`request`

`[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.GetFindingRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.Finding)>`  

### getScanConfig(GetScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public default void getScanConfig(GetScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Gets a ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.GetScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`  

### getScanRun(GetScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public default void getScanRun(GetScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Gets a ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.GetScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`  

### listCrawledUrls(ListCrawledUrlsRequest request, StreamObserver<ListCrawledUrlsResponse> responseObserver)

```
public default void listCrawledUrls(ListCrawledUrlsRequest request, StreamObserver<ListCrawledUrlsResponse> responseObserver)
```

List CrawledUrls under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse)>`  

### listFindingTypeStats(ListFindingTypeStatsRequest request, StreamObserver<ListFindingTypeStatsResponse> responseObserver)

```
public default void listFindingTypeStats(ListFindingTypeStatsRequest request, StreamObserver<ListFindingTypeStatsResponse> responseObserver)
```

List all FindingTypeStats under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse)>`  

### listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)

```
public default void listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)
```

List Findings under a given ScanRun.

**Parameters**

**Name**

**Description**

`request`

`[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListFindingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListFindingsResponse)>`  

### listScanConfigs(ListScanConfigsRequest request, StreamObserver<ListScanConfigsResponse> responseObserver)

```
public default void listScanConfigs(ListScanConfigsRequest request, StreamObserver<ListScanConfigsResponse> responseObserver)
```

Lists ScanConfigs under a given project.

**Parameters**

**Name**

**Description**

`request`

`[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListScanConfigsResponse)>`  

### listScanRuns(ListScanRunsRequest request, StreamObserver<ListScanRunsResponse> responseObserver)

```
public default void listScanRuns(ListScanRunsRequest request, StreamObserver<ListScanRunsResponse> responseObserver)
```

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

**Parameters**

**Name**

**Description**

`request`

`[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ListScanRunsResponse)>`  

### startScanRun(StartScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public default void startScanRun(StartScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Start a ScanRun according to the given ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.StartScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`  

### stopScanRun(StopScanRunRequest request, StreamObserver<ScanRun> responseObserver)

```
public default void stopScanRun(StopScanRunRequest request, StreamObserver<ScanRun> responseObserver)
```

Stops a ScanRun. The stopped ScanRun is returned.

**Parameters**

**Name**

**Description**

`request`

`[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.StopScanRunRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanRun)>`  

### updateScanConfig(UpdateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)

```
public default void updateScanConfig(UpdateScanConfigRequest request, StreamObserver<ScanConfig> responseObserver)
```

Updates a ScanConfig. This method support partial update of a ScanConfig.

**Parameters**

**Name**

**Description**

`request`

`[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.UpdateScanConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/2.15.0/com.google.cloud.websecurityscanner.v1.ScanConfig)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
