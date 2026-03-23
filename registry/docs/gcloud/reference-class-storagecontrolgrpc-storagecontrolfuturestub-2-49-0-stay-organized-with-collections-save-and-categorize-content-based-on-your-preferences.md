-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class StorageControlGrpc.StorageControlFutureStub (2.49.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static final class StorageControlGrpc.StorageControlFutureStub extends AbstractFutureStub<StorageControlGrpc.StorageControlFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service StorageControl.

StorageControl service includes selected control plane operations.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> StorageControlGrpc.StorageControlFutureStub

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
protected StorageControlGrpc.StorageControlFutureStub build(Channel channel, CallOptions callOptions)
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

`[StorageControlGrpc.StorageControlFutureStub](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.StorageControlGrpc.StorageControlFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createFolder(CreateFolderRequest request)

```
public ListenableFuture<Folder> createFolder(CreateFolderRequest request)
```

Creates a new folder. This operation is only applicable to a hierarchical namespace enabled bucket.

**Parameter**

**Name**

**Description**

`request`

`[CreateFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.CreateFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Folder](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.Folder)>`

### createManagedFolder(CreateManagedFolderRequest request)

```
public ListenableFuture<ManagedFolder> createManagedFolder(CreateManagedFolderRequest request)
```

Creates a new managed folder.

**Parameter**

**Name**

**Description**

`request`

`[CreateManagedFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.CreateManagedFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ManagedFolder](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ManagedFolder)>`

### deleteFolder(DeleteFolderRequest request)

```
public ListenableFuture<Empty> deleteFolder(DeleteFolderRequest request)
```

Permanently deletes an empty folder. This operation is only applicable to a hierarchical namespace enabled bucket.

**Parameter**

**Name**

**Description**

`request`

`[DeleteFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.DeleteFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteManagedFolder(DeleteManagedFolderRequest request)

```
public ListenableFuture<Empty> deleteManagedFolder(DeleteManagedFolderRequest request)
```

Permanently deletes an empty managed folder.

**Parameter**

**Name**

**Description**

`request`

`[DeleteManagedFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.DeleteManagedFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getFolder(GetFolderRequest request)

```
public ListenableFuture<Folder> getFolder(GetFolderRequest request)
```

Returns metadata for the specified folder. This operation is only applicable to a hierarchical namespace enabled bucket.

**Parameter**

**Name**

**Description**

`request`

`[GetFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.GetFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Folder](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.Folder)>`

### getManagedFolder(GetManagedFolderRequest request)

```
public ListenableFuture<ManagedFolder> getManagedFolder(GetManagedFolderRequest request)
```

Returns metadata for the specified managed folder.

**Parameter**

**Name**

**Description**

`request`

`[GetManagedFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.GetManagedFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ManagedFolder](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ManagedFolder)>`

### getStorageLayout(GetStorageLayoutRequest request)

```
public ListenableFuture<StorageLayout> getStorageLayout(GetStorageLayoutRequest request)
```

Returns the storage layout configuration for a given bucket.

**Parameter**

**Name**

**Description**

`request`

`[GetStorageLayoutRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.GetStorageLayoutRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[StorageLayout](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.StorageLayout)>`

### listFolders(ListFoldersRequest request)

```
public ListenableFuture<ListFoldersResponse> listFolders(ListFoldersRequest request)
```

Retrieves a list of folders. This operation is only applicable to a hierarchical namespace enabled bucket.

**Parameter**

**Name**

**Description**

`request`

`[ListFoldersRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ListFoldersRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListFoldersResponse](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ListFoldersResponse)>`

### listManagedFolders(ListManagedFoldersRequest request)

```
public ListenableFuture<ListManagedFoldersResponse> listManagedFolders(ListManagedFoldersRequest request)
```

Retrieves a list of managed folders for a given bucket.

**Parameter**

**Name**

**Description**

`request`

`[ListManagedFoldersRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ListManagedFoldersRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListManagedFoldersResponse](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.ListManagedFoldersResponse)>`

### renameFolder(RenameFolderRequest request)

```
public ListenableFuture<Operation> renameFolder(RenameFolderRequest request)
```

Renames a source folder to a destination folder. This operation is only applicable to a hierarchical namespace enabled bucket. During a rename, the source and destination folders are locked until the long running operation completes.

**Parameter**

**Name**

**Description**

`request`

`[RenameFolderRequest](/java/docs/reference/google-cloud-storage/2.49.0/com.google.storage.control.v2.RenameFolderRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
