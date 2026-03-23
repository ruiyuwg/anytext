-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class MigrationCenterGrpc.MigrationCenterFutureStub (0.17.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class MigrationCenterGrpc.MigrationCenterFutureStub extends AbstractFutureStub<MigrationCenterGrpc.MigrationCenterFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service MigrationCenter.

Service describing handlers for resources.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> MigrationCenterGrpc.MigrationCenterFutureStub

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

### addAssetsToGroup(AddAssetsToGroupRequest request)

```
public ListenableFuture<Operation> addAssetsToGroup(AddAssetsToGroupRequest request)
```

Adds assets to a group.

**Parameter**

**Name**

**Description**

`request`

`[AddAssetsToGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.AddAssetsToGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### aggregateAssetsValues(AggregateAssetsValuesRequest request)

```
public ListenableFuture<AggregateAssetsValuesResponse> aggregateAssetsValues(AggregateAssetsValuesRequest request)
```

Aggregates the requested fields based on provided function.

**Parameter**

**Name**

**Description**

`request`

`[AggregateAssetsValuesRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.AggregateAssetsValuesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AggregateAssetsValuesResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.AggregateAssetsValuesResponse)>`

### batchDeleteAssets(BatchDeleteAssetsRequest request)

```
public ListenableFuture<Empty> batchDeleteAssets(BatchDeleteAssetsRequest request)
```

Deletes list of Assets.

**Parameter**

**Name**

**Description**

`request`

`[BatchDeleteAssetsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.BatchDeleteAssetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### batchUpdateAssets(BatchUpdateAssetsRequest request)

```
public ListenableFuture<BatchUpdateAssetsResponse> batchUpdateAssets(BatchUpdateAssetsRequest request)
```

Updates the parameters of a list of assets.

**Parameter**

**Name**

**Description**

`request`

`[BatchUpdateAssetsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.BatchUpdateAssetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[BatchUpdateAssetsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.BatchUpdateAssetsResponse)>`

### build(Channel channel, CallOptions callOptions)

```
protected MigrationCenterGrpc.MigrationCenterFutureStub build(Channel channel, CallOptions callOptions)
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

`[MigrationCenterGrpc.MigrationCenterFutureStub](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.MigrationCenterGrpc.MigrationCenterFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createGroup(CreateGroupRequest request)

```
public ListenableFuture<Operation> createGroup(CreateGroupRequest request)
```

Creates a new group in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createImportDataFile(CreateImportDataFileRequest request)

```
public ListenableFuture<Operation> createImportDataFile(CreateImportDataFileRequest request)
```

Creates an import data file.

**Parameter**

**Name**

**Description**

`request`

`[CreateImportDataFileRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateImportDataFileRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createImportJob(CreateImportJobRequest request)

```
public ListenableFuture<Operation> createImportJob(CreateImportJobRequest request)
```

Creates an import job.

**Parameter**

**Name**

**Description**

`request`

`[CreateImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createPreferenceSet(CreatePreferenceSetRequest request)

```
public ListenableFuture<Operation> createPreferenceSet(CreatePreferenceSetRequest request)
```

Creates a new preference set in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreatePreferenceSetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreatePreferenceSetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createReport(CreateReportRequest request)

```
public ListenableFuture<Operation> createReport(CreateReportRequest request)
```

Creates a report.

**Parameter**

**Name**

**Description**

`request`

`[CreateReportRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateReportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createReportConfig(CreateReportConfigRequest request)

```
public ListenableFuture<Operation> createReportConfig(CreateReportConfigRequest request)
```

Creates a report configuration.

**Parameter**

**Name**

**Description**

`request`

`[CreateReportConfigRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateReportConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createSource(CreateSourceRequest request)

```
public ListenableFuture<Operation> createSource(CreateSourceRequest request)
```

Creates a new source in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateSourceRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.CreateSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAsset(DeleteAssetRequest request)

```
public ListenableFuture<Empty> deleteAsset(DeleteAssetRequest request)
```

Deletes an asset.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAssetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteAssetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteGroup(DeleteGroupRequest request)

```
public ListenableFuture<Operation> deleteGroup(DeleteGroupRequest request)
```

Deletes a group.

**Parameter**

**Name**

**Description**

`request`

`[DeleteGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteImportDataFile(DeleteImportDataFileRequest request)

```
public ListenableFuture<Operation> deleteImportDataFile(DeleteImportDataFileRequest request)
```

Delete an import data file.

**Parameter**

**Name**

**Description**

`request`

`[DeleteImportDataFileRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteImportDataFileRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteImportJob(DeleteImportJobRequest request)

```
public ListenableFuture<Operation> deleteImportJob(DeleteImportJobRequest request)
```

Deletes an import job.

**Parameter**

**Name**

**Description**

`request`

`[DeleteImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deletePreferenceSet(DeletePreferenceSetRequest request)

```
public ListenableFuture<Operation> deletePreferenceSet(DeletePreferenceSetRequest request)
```

Deletes a preference set.

**Parameter**

**Name**

**Description**

`request`

`[DeletePreferenceSetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeletePreferenceSetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteReport(DeleteReportRequest request)

```
public ListenableFuture<Operation> deleteReport(DeleteReportRequest request)
```

Deletes a Report.

**Parameter**

**Name**

**Description**

`request`

`[DeleteReportRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteReportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteReportConfig(DeleteReportConfigRequest request)

```
public ListenableFuture<Operation> deleteReportConfig(DeleteReportConfigRequest request)
```

Deletes a ReportConfig.

**Parameter**

**Name**

**Description**

`request`

`[DeleteReportConfigRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteReportConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteSource(DeleteSourceRequest request)

```
public ListenableFuture<Operation> deleteSource(DeleteSourceRequest request)
```

Deletes a source.

**Parameter**

**Name**

**Description**

`request`

`[DeleteSourceRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.DeleteSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getAsset(GetAssetRequest request)

```
public ListenableFuture<Asset> getAsset(GetAssetRequest request)
```

Gets the details of an asset.

**Parameter**

**Name**

**Description**

`request`

`[GetAssetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetAssetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Asset](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Asset)>`

### getErrorFrame(GetErrorFrameRequest request)

```
public ListenableFuture<ErrorFrame> getErrorFrame(GetErrorFrameRequest request)
```

Gets the details of an error frame.

**Parameter**

**Name**

**Description**

`request`

`[GetErrorFrameRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetErrorFrameRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ErrorFrame](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ErrorFrame)>`

### getGroup(GetGroupRequest request)

```
public ListenableFuture<Group> getGroup(GetGroupRequest request)
```

Gets the details of a group.

**Parameter**

**Name**

**Description**

`request`

`[GetGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Group](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Group)>`

### getImportDataFile(GetImportDataFileRequest request)

```
public ListenableFuture<ImportDataFile> getImportDataFile(GetImportDataFileRequest request)
```

Gets an import data file.

**Parameter**

**Name**

**Description**

`request`

`[GetImportDataFileRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetImportDataFileRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ImportDataFile](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ImportDataFile)>`

### getImportJob(GetImportJobRequest request)

```
public ListenableFuture<ImportJob> getImportJob(GetImportJobRequest request)
```

Gets the details of an import job.

**Parameter**

**Name**

**Description**

`request`

`[GetImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ImportJob](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ImportJob)>`

### getPreferenceSet(GetPreferenceSetRequest request)

```
public ListenableFuture<PreferenceSet> getPreferenceSet(GetPreferenceSetRequest request)
```

Gets the details of a preference set.

**Parameter**

**Name**

**Description**

`request`

`[GetPreferenceSetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetPreferenceSetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[PreferenceSet](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.PreferenceSet)>`

### getReport(GetReportRequest request)

```
public ListenableFuture<Report> getReport(GetReportRequest request)
```

Gets details of a single Report.

**Parameter**

**Name**

**Description**

`request`

`[GetReportRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetReportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Report](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Report)>`

### getReportConfig(GetReportConfigRequest request)

```
public ListenableFuture<ReportConfig> getReportConfig(GetReportConfigRequest request)
```

Gets details of a single ReportConfig.

**Parameter**

**Name**

**Description**

`request`

`[GetReportConfigRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetReportConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ReportConfig](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ReportConfig)>`

### getSettings(GetSettingsRequest request)

```
public ListenableFuture<Settings> getSettings(GetSettingsRequest request)
```

Gets the details of regional settings.

**Parameter**

**Name**

**Description**

`request`

`[GetSettingsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetSettingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Settings](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Settings)>`

### getSource(GetSourceRequest request)

```
public ListenableFuture<Source> getSource(GetSourceRequest request)
```

Gets the details of a source.

**Parameter**

**Name**

**Description**

`request`

`[GetSourceRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.GetSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Source](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Source)>`

### listAssets(ListAssetsRequest request)

```
public ListenableFuture<ListAssetsResponse> listAssets(ListAssetsRequest request)
```

Lists all the assets in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListAssetsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListAssetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListAssetsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListAssetsResponse)>`

### listErrorFrames(ListErrorFramesRequest request)

```
public ListenableFuture<ListErrorFramesResponse> listErrorFrames(ListErrorFramesRequest request)
```

Lists all error frames in a given source and location.

**Parameter**

**Name**

**Description**

`request`

`[ListErrorFramesRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListErrorFramesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListErrorFramesResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListErrorFramesResponse)>`

### listGroups(ListGroupsRequest request)

```
public ListenableFuture<ListGroupsResponse> listGroups(ListGroupsRequest request)
```

Lists all groups in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListGroupsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListGroupsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListGroupsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListGroupsResponse)>`

### listImportDataFiles(ListImportDataFilesRequest request)

```
public ListenableFuture<ListImportDataFilesResponse> listImportDataFiles(ListImportDataFilesRequest request)
```

List import data files.

**Parameter**

**Name**

**Description**

`request`

`[ListImportDataFilesRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListImportDataFilesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListImportDataFilesResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListImportDataFilesResponse)>`

### listImportJobs(ListImportJobsRequest request)

```
public ListenableFuture<ListImportJobsResponse> listImportJobs(ListImportJobsRequest request)
```

Lists all import jobs.

**Parameter**

**Name**

**Description**

`request`

`[ListImportJobsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListImportJobsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListImportJobsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListImportJobsResponse)>`

### listPreferenceSets(ListPreferenceSetsRequest request)

```
public ListenableFuture<ListPreferenceSetsResponse> listPreferenceSets(ListPreferenceSetsRequest request)
```

Lists all the preference sets in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListPreferenceSetsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListPreferenceSetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPreferenceSetsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListPreferenceSetsResponse)>`

### listReportConfigs(ListReportConfigsRequest request)

```
public ListenableFuture<ListReportConfigsResponse> listReportConfigs(ListReportConfigsRequest request)
```

Lists ReportConfigs in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListReportConfigsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListReportConfigsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListReportConfigsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListReportConfigsResponse)>`

### listReports(ListReportsRequest request)

```
public ListenableFuture<ListReportsResponse> listReports(ListReportsRequest request)
```

Lists Reports in a given ReportConfig.

**Parameter**

**Name**

**Description**

`request`

`[ListReportsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListReportsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListReportsResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListReportsResponse)>`

### listSources(ListSourcesRequest request)

```
public ListenableFuture<ListSourcesResponse> listSources(ListSourcesRequest request)
```

Lists all the sources in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListSourcesRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListSourcesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListSourcesResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ListSourcesResponse)>`

### removeAssetsFromGroup(RemoveAssetsFromGroupRequest request)

```
public ListenableFuture<Operation> removeAssetsFromGroup(RemoveAssetsFromGroupRequest request)
```

Removes assets from a group.

**Parameter**

**Name**

**Description**

`request`

`[RemoveAssetsFromGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.RemoveAssetsFromGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### reportAssetFrames(ReportAssetFramesRequest request)

```
public ListenableFuture<ReportAssetFramesResponse> reportAssetFrames(ReportAssetFramesRequest request)
```

Reports a set of frames.

**Parameter**

**Name**

**Description**

`request`

`[ReportAssetFramesRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ReportAssetFramesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ReportAssetFramesResponse](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ReportAssetFramesResponse)>`

### runImportJob(RunImportJobRequest request)

```
public ListenableFuture<Operation> runImportJob(RunImportJobRequest request)
```

Runs an import job.

**Parameter**

**Name**

**Description**

`request`

`[RunImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.RunImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateAsset(UpdateAssetRequest request)

```
public ListenableFuture<Asset> updateAsset(UpdateAssetRequest request)
```

Updates the parameters of an asset.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAssetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdateAssetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Asset](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.Asset)>`

### updateGroup(UpdateGroupRequest request)

```
public ListenableFuture<Operation> updateGroup(UpdateGroupRequest request)
```

Updates the parameters of a group.

**Parameter**

**Name**

**Description**

`request`

`[UpdateGroupRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdateGroupRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateImportJob(UpdateImportJobRequest request)

```
public ListenableFuture<Operation> updateImportJob(UpdateImportJobRequest request)
```

Updates an import job.

**Parameter**

**Name**

**Description**

`request`

`[UpdateImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdateImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updatePreferenceSet(UpdatePreferenceSetRequest request)

```
public ListenableFuture<Operation> updatePreferenceSet(UpdatePreferenceSetRequest request)
```

Updates the parameters of a preference set.

**Parameter**

**Name**

**Description**

`request`

`[UpdatePreferenceSetRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdatePreferenceSetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSettings(UpdateSettingsRequest request)

```
public ListenableFuture<Operation> updateSettings(UpdateSettingsRequest request)
```

Updates the regional-level project settings.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSettingsRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdateSettingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSource(UpdateSourceRequest request)

```
public ListenableFuture<Operation> updateSource(UpdateSourceRequest request)
```

Updates the parameters of a source.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSourceRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.UpdateSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### validateImportJob(ValidateImportJobRequest request)

```
public ListenableFuture<Operation> validateImportJob(ValidateImportJobRequest request)
```

Validates an import job.

**Parameter**

**Name**

**Description**

`request`

`[ValidateImportJobRequest](/java/docs/reference/google-cloud-migrationcenter/0.17.0/com.google.cloud.migrationcenter.v1.ValidateImportJobRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
