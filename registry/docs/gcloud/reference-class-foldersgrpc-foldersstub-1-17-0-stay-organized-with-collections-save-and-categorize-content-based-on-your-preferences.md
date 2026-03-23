-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class FoldersGrpc.FoldersStub (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public static final class FoldersGrpc.FoldersStub extends AbstractAsyncStub<FoldersGrpc.FoldersStub>
```

A stub to allow clients to do asynchronous rpc calls to service Folders.

Manages Cloud Platform folder resources. Folders can be used to organize the resources under an organization and to control the policies applied to groups of resources.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> FoldersGrpc.FoldersStub

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
protected FoldersGrpc.FoldersStub build(Channel channel, CallOptions callOptions)
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

`[FoldersGrpc.FoldersStub](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.FoldersGrpc.FoldersStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createFolder(CreateFolderRequest request, StreamObserver<Operation> responseObserver)

```
public void createFolder(CreateFolderRequest request, StreamObserver<Operation> responseObserver)
```

Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints.

-   The folder's `display_name` must be distinct from all other folders that share its parent.
-   The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders.
-   The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.

**Parameters**

**Name**

**Description**

`request`

`[CreateFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.CreateFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteFolder(DeleteFolderRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteFolder(DeleteFolderRequest request, StreamObserver<Operation> responseObserver)
```

Requests deletion of a folder. The folder is moved into the DELETE\_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty folder, where a folder is empty if it doesn't contain any folders or projects in the ACTIVE state. If called on a folder in DELETE\_REQUESTED state the operation will result in a no-op success. The caller must have `resourcemanager.folders.delete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.DeleteFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getFolder(GetFolderRequest request, StreamObserver<Folder> responseObserver)

```
public void getFolder(GetFolderRequest request, StreamObserver<Folder> responseObserver)
```

Retrieves a folder identified by the supplied resource name. Valid folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`[GetFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.GetFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Folder](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.Folder)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy for a folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### listFolders(ListFoldersRequest request, StreamObserver<ListFoldersResponse> responseObserver)

```
public void listFolders(ListFoldersRequest request, StreamObserver<ListFoldersResponse> responseObserver)
```

Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display\_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

**Parameters**

**Name**

**Description**

`request`

`[ListFoldersRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.ListFoldersRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFoldersResponse](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.ListFoldersResponse)>`  

### moveFolder(MoveFolderRequest request, StreamObserver<Operation> responseObserver)

```
public void moveFolder(MoveFolderRequest request, StreamObserver<Operation> responseObserver)
```

Moves a folder under a new resource parent. Returns an `Operation` which can be used to track the progress of the folder move workflow. Upon success, the `Operation.response` field will be populated with the moved folder. Upon failure, a `FolderOperationError` categorizing the failure cause will be returned - if the failure occurs synchronously then the `FolderOperationError` will be returned in the `Status.details` field. If it occurs asynchronously, then the FolderOperation will be returned in the `Operation.error` field. In addition, the `Operation.metadata` field will be populated with a `FolderOperation` message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height, or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.

**Parameters**

**Name**

**Description**

`request`

`[MoveFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.MoveFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### searchFolders(SearchFoldersRequest request, StreamObserver<SearchFoldersResponse> responseObserver)

```
public void searchFolders(SearchFoldersRequest request, StreamObserver<SearchFoldersResponse> responseObserver)
```

Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

**Parameters**

**Name**

**Description**

`request`

`[SearchFoldersRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.SearchFoldersRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchFoldersResponse](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.SearchFoldersResponse)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy on a folder, replacing any existing policy. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns permissions that a caller has on the specified folder. The `resource` field should be the folder's resource name, for example: "folders/1234". There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### undeleteFolder(UndeleteFolderRequest request, StreamObserver<Operation> responseObserver)

```
public void undeleteFolder(UndeleteFolderRequest request, StreamObserver<Operation> responseObserver)
```

Cancels the deletion request for a folder. This method may be called on a folder in any state. If the folder is in the ACTIVE state the result will be a no-op success. In order to succeed, the folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height, and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.

**Parameters**

**Name**

**Description**

`request`

`[UndeleteFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.UndeleteFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateFolder(UpdateFolderRequest request, StreamObserver<Operation> responseObserver)

```
public void updateFolder(UpdateFolderRequest request, StreamObserver<Operation> responseObserver)
```

Updates a folder, changing its `display_name`. Changes to the folder `display_name` will be rejected if they violate either the `display_name` formatting rules or the naming constraints described in the CreateFolder documentation. The folder's `display_name` must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a `PreconditionFailure` explaining this violation will be returned in the Status.details field.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFolderRequest](/java/docs/reference/google-cloud-resourcemanager/1.17.0/com.google.cloud.resourcemanager.v3.UpdateFolderRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
