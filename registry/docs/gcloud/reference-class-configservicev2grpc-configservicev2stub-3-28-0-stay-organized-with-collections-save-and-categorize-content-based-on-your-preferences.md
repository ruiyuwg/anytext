-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ConfigServiceV2Grpc.ConfigServiceV2Stub (3.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.28.0 (latest) 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3

```
public static final class ConfigServiceV2Grpc.ConfigServiceV2Stub extends AbstractAsyncStub<ConfigServiceV2Grpc.ConfigServiceV2Stub>
```

A stub to allow clients to do asynchronous rpc calls to service ConfigServiceV2.

Service for configuring sinks used to route log entries.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> ConfigServiceV2Grpc.ConfigServiceV2Stub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

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
protected ConfigServiceV2Grpc.ConfigServiceV2Stub build(Channel channel, CallOptions callOptions)
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

`[ConfigServiceV2Grpc.ConfigServiceV2Stub](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ConfigServiceV2Grpc.ConfigServiceV2Stub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### copyLogEntries(CopyLogEntriesRequest request, StreamObserver<Operation> responseObserver)

```
public void copyLogEntries(CopyLogEntriesRequest request, StreamObserver<Operation> responseObserver)
```

Copies a set of log entries from a log bucket to a Cloud Storage bucket.

**Parameters**

**Name**

**Description**

`request`

`[CopyLogEntriesRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CopyLogEntriesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createBucket(CreateBucketRequest request, StreamObserver<LogBucket> responseObserver)

```
public void createBucket(CreateBucketRequest request, StreamObserver<LogBucket> responseObserver)
```

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[CreateBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogBucket](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogBucket)>`  

### createBucketAsync(CreateBucketRequest request, StreamObserver<Operation> responseObserver)

```
public void createBucketAsync(CreateBucketRequest request, StreamObserver<Operation> responseObserver)
```

Creates a log bucket asynchronously that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[CreateBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createExclusion(CreateExclusionRequest request, StreamObserver<LogExclusion> responseObserver)

```
public void createExclusion(CreateExclusionRequest request, StreamObserver<LogExclusion> responseObserver)
```

Creates a new exclusion in the \_Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateExclusionRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateExclusionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogExclusion](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogExclusion)>`  

### createLink(CreateLinkRequest request, StreamObserver<Operation> responseObserver)

```
public void createLink(CreateLinkRequest request, StreamObserver<Operation> responseObserver)
```

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

**Parameters**

**Name**

**Description**

`request`

`[CreateLinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateLinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createSink(CreateSinkRequest request, StreamObserver<LogSink> responseObserver)

```
public void createSink(CreateSinkRequest request, StreamObserver<LogSink> responseObserver)
```

Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

**Parameters**

**Name**

**Description**

`request`

`[CreateSinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateSinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogSink](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogSink)>`  

### createView(CreateViewRequest request, StreamObserver<LogView> responseObserver)

```
public void createView(CreateViewRequest request, StreamObserver<LogView> responseObserver)
```

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

**Parameters**

**Name**

**Description**

`request`

`[CreateViewRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CreateViewRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogView](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogView)>`  

### deleteBucket(DeleteBucketRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteBucket(DeleteBucketRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a log bucket. Changes the bucket's `lifecycle_state` to the `DELETE_REQUESTED` state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.DeleteBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteExclusion(DeleteExclusionRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteExclusion(DeleteExclusionRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an exclusion in the \_Default sink.

**Parameters**

**Name**

**Description**

`request`

`[DeleteExclusionRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.DeleteExclusionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteLink(DeleteLinkRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteLink(DeleteLinkRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a link. This will also delete the corresponding BigQuery linked dataset.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.DeleteLinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteSink(DeleteSinkRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteSink(DeleteSinkRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a sink. If the sink has a unique `writer_identity`, then that service account is also deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.DeleteSinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteView(DeleteViewRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteView(DeleteViewRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a view on a log bucket. If an `UNAVAILABLE` error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.

**Parameters**

**Name**

**Description**

`request`

`[DeleteViewRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.DeleteViewRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getBucket(GetBucketRequest request, StreamObserver<LogBucket> responseObserver)

```
public void getBucket(GetBucketRequest request, StreamObserver<LogBucket> responseObserver)
```

Gets a log bucket.

**Parameters**

**Name**

**Description**

`request`

`[GetBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogBucket](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogBucket)>`  

### getCmekSettings(GetCmekSettingsRequest request, StreamObserver<CmekSettings> responseObserver)

```
public void getCmekSettings(GetCmekSettingsRequest request, StreamObserver<CmekSettings> responseObserver)
```

Gets the Logging CMEK settings for the given resource. Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization. See [Enabling CMEK for Log Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

**Parameters**

**Name**

**Description**

`request`

`[GetCmekSettingsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetCmekSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CmekSettings](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CmekSettings)>`  

### getExclusion(GetExclusionRequest request, StreamObserver<LogExclusion> responseObserver)

```
public void getExclusion(GetExclusionRequest request, StreamObserver<LogExclusion> responseObserver)
```

Gets the description of an exclusion in the \_Default sink.

**Parameters**

**Name**

**Description**

`request`

`[GetExclusionRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetExclusionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogExclusion](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogExclusion)>`  

### getLink(GetLinkRequest request, StreamObserver<Link> responseObserver)

```
public void getLink(GetLinkRequest request, StreamObserver<Link> responseObserver)
```

Gets a link.

**Parameters**

**Name**

**Description**

`request`

`[GetLinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetLinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Link](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.Link)>`  

### getSettings(GetSettingsRequest request, StreamObserver<Settings> responseObserver)

```
public void getSettings(GetSettingsRequest request, StreamObserver<Settings> responseObserver)
```

Gets the Log Router settings for the given resource. Note: Settings for the Log Router can be get for Google Cloud projects, folders, organizations and billing accounts. Currently it can only be configured for organizations. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization. See [Enabling CMEK for Log Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

**Parameters**

**Name**

**Description**

`request`

`[GetSettingsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Settings](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.Settings)>`  

### getSink(GetSinkRequest request, StreamObserver<LogSink> responseObserver)

```
public void getSink(GetSinkRequest request, StreamObserver<LogSink> responseObserver)
```

Gets a sink.

**Parameters**

**Name**

**Description**

`request`

`[GetSinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetSinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogSink](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogSink)>`  

### getView(GetViewRequest request, StreamObserver<LogView> responseObserver)

```
public void getView(GetViewRequest request, StreamObserver<LogView> responseObserver)
```

Gets a view on a log bucket..

**Parameters**

**Name**

**Description**

`request`

`[GetViewRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.GetViewRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogView](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogView)>`  

### listBuckets(ListBucketsRequest request, StreamObserver<ListBucketsResponse> responseObserver)

```
public void listBuckets(ListBucketsRequest request, StreamObserver<ListBucketsResponse> responseObserver)
```

Lists log buckets.

**Parameters**

**Name**

**Description**

`request`

`[ListBucketsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListBucketsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListBucketsResponse](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListBucketsResponse)>`  

### listExclusions(ListExclusionsRequest request, StreamObserver<ListExclusionsResponse> responseObserver)

```
public void listExclusions(ListExclusionsRequest request, StreamObserver<ListExclusionsResponse> responseObserver)
```

Lists all the exclusions on the \_Default sink in a parent resource.

**Parameters**

**Name**

**Description**

`request`

`[ListExclusionsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListExclusionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListExclusionsResponse](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListExclusionsResponse)>`  

### listLinks(ListLinksRequest request, StreamObserver<ListLinksResponse> responseObserver)

```
public void listLinks(ListLinksRequest request, StreamObserver<ListLinksResponse> responseObserver)
```

Lists links.

**Parameters**

**Name**

**Description**

`request`

`[ListLinksRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListLinksRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListLinksResponse](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListLinksResponse)>`  

### listSinks(ListSinksRequest request, StreamObserver<ListSinksResponse> responseObserver)

```
public void listSinks(ListSinksRequest request, StreamObserver<ListSinksResponse> responseObserver)
```

Lists sinks.

**Parameters**

**Name**

**Description**

`request`

`[ListSinksRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListSinksRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListSinksResponse](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListSinksResponse)>`  

### listViews(ListViewsRequest request, StreamObserver<ListViewsResponse> responseObserver)

```
public void listViews(ListViewsRequest request, StreamObserver<ListViewsResponse> responseObserver)
```

Lists views on a log bucket.

**Parameters**

**Name**

**Description**

`request`

`[ListViewsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListViewsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListViewsResponse](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.ListViewsResponse)>`  

### undeleteBucket(UndeleteBucketRequest request, StreamObserver<Empty> responseObserver)

```
public void undeleteBucket(UndeleteBucketRequest request, StreamObserver<Empty> responseObserver)
```

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

**Parameters**

**Name**

**Description**

`request`

`[UndeleteBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UndeleteBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### updateBucket(UpdateBucketRequest request, StreamObserver<LogBucket> responseObserver)

```
public void updateBucket(UpdateBucketRequest request, StreamObserver<LogBucket> responseObserver)
```

Updates a log bucket. If the bucket has a `lifecycle_state` of `DELETE_REQUESTED`, then `FAILED_PRECONDITION` will be returned. After a bucket has been created, the bucket's location cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogBucket](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogBucket)>`  

### updateBucketAsync(UpdateBucketRequest request, StreamObserver<Operation> responseObserver)

```
public void updateBucketAsync(UpdateBucketRequest request, StreamObserver<Operation> responseObserver)
```

Updates a log bucket asynchronously. If the bucket has a `lifecycle_state` of `DELETE_REQUESTED`, then `FAILED_PRECONDITION` will be returned. After a bucket has been created, the bucket's location cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBucketRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateBucketRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCmekSettings(UpdateCmekSettingsRequest request, StreamObserver<CmekSettings> responseObserver)

```
public void updateCmekSettings(UpdateCmekSettingsRequest request, StreamObserver<CmekSettings> responseObserver)
```

Updates the Log Router CMEK settings for the given resource. Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization. UpdateCmekSettings will fail if 1) `kms_key_name` is invalid, or 2) the associated service account does not have the required `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key, or 3) access to the key is disabled. See [Enabling CMEK for Log Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCmekSettingsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateCmekSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CmekSettings](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.CmekSettings)>`  

### updateExclusion(UpdateExclusionRequest request, StreamObserver<LogExclusion> responseObserver)

```
public void updateExclusion(UpdateExclusionRequest request, StreamObserver<LogExclusion> responseObserver)
```

Changes one or more properties of an existing exclusion in the \_Default sink.

**Parameters**

**Name**

**Description**

`request`

`[UpdateExclusionRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateExclusionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogExclusion](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogExclusion)>`  

### updateSettings(UpdateSettingsRequest request, StreamObserver<Settings> responseObserver)

```
public void updateSettings(UpdateSettingsRequest request, StreamObserver<Settings> responseObserver)
```

Updates the Log Router settings for the given resource. Note: Settings for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization. UpdateSettings will fail if 1) `kms_key_name` is invalid, or 2) the associated service account does not have the required `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key, or 3) access to the key is disabled. 4) `location_id` is not supported by Logging. 5) `location_id` violate OrgPolicy. See [Enabling CMEK for Log Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSettingsRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Settings](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.Settings)>`  

### updateSink(UpdateSinkRequest request, StreamObserver<LogSink> responseObserver)

```
public void updateSink(UpdateSinkRequest request, StreamObserver<LogSink> responseObserver)
```

Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: `destination`, and `filter`. The updated sink might also have a new `writer_identity`; see the `unique_writer_identity` field.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSinkRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateSinkRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogSink](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogSink)>`  

### updateView(UpdateViewRequest request, StreamObserver<LogView> responseObserver)

```
public void updateView(UpdateViewRequest request, StreamObserver<LogView> responseObserver)
```

Updates a view on a log bucket. This method replaces the following fields in the existing view with values from the new view: `filter`. If an `UNAVAILABLE` error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

**Parameters**

**Name**

**Description**

`request`

`[UpdateViewRequest](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.UpdateViewRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[LogView](/java/docs/reference/google-cloud-logging/latest/com.google.logging.v2.LogView)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
