-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DatabaseAdminGrpc.DatabaseAdminStub Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class DatabaseAdminGrpc.DatabaseAdminStub extends AbstractAsyncStub<DatabaseAdminGrpc.DatabaseAdminStub>
```

Cloud Spanner Database Admin API The Cloud Spanner Database Admin API can be used to:

-   create, drop, and list databases
-   update the schema of pre-existing databases
-   create, delete and list backups for a database
-   restore a database from an existing backup

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> DatabaseAdminGrpc.DatabaseAdminStub

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
protected DatabaseAdminGrpc.DatabaseAdminStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

channel

`io.grpc.Channel`  

callOptions

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

[DatabaseAdminGrpc.DatabaseAdminStub](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.DatabaseAdminGrpc.DatabaseAdminStub)

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### copyBackup(CopyBackupRequest request, StreamObserver<Operation> responseObserver)

```
public void copyBackup(CopyBackupRequest request, StreamObserver<Operation> responseObserver)
```

Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation_id>` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the backup. Concurrent CopyBackup requests can run on the same source backup.

**Parameters**

**Name**

**Description**

request

`[CopyBackupRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.CopyBackupRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createBackup(CreateBackupRequest request, StreamObserver<Operation> responseObserver)

```
public void createBackup(CreateBackupRequest request, StreamObserver<Operation> responseObserver)
```

Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation_id>` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.

**Parameters**

**Name**

**Description**

request

`[CreateBackupRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.CreateBackupRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createDatabase(CreateDatabaseRequest request, StreamObserver<Operation> responseObserver)

```
public void createDatabase(CreateDatabaseRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.

**Parameters**

**Name**

**Description**

request

`[CreateDatabaseRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.CreateDatabaseRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteBackup(DeleteBackupRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteBackup(DeleteBackupRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a pending or completed Backup.

**Parameters**

**Name**

**Description**

request

`[DeleteBackupRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.DeleteBackupRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### dropDatabase(DropDatabaseRequest request, StreamObserver<Empty> responseObserver)

```
public void dropDatabase(DropDatabaseRequest request, StreamObserver<Empty> responseObserver)
```

Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.

**Parameters**

**Name**

**Description**

request

`[DropDatabaseRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.DropDatabaseRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getBackup(GetBackupRequest request, StreamObserver<Backup> responseObserver)

```
public void getBackup(GetBackupRequest request, StreamObserver<Backup> responseObserver)
```

Gets metadata on a pending or completed Backup.

**Parameters**

**Name**

**Description**

request

`[GetBackupRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.GetBackupRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Backup](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.Backup)>`  

### getDatabase(GetDatabaseRequest request, StreamObserver<Database> responseObserver)

```
public void getDatabase(GetDatabaseRequest request, StreamObserver<Database> responseObserver)
```

Gets the state of a Cloud Spanner database.

**Parameters**

**Name**

**Description**

request

`[GetDatabaseRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.GetDatabaseRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Database](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.Database)>`  

### getDatabaseDdl(GetDatabaseDdlRequest request, StreamObserver<GetDatabaseDdlResponse> responseObserver)

```
public void getDatabaseDdl(GetDatabaseDdlRequest request, StreamObserver<GetDatabaseDdlResponse> responseObserver)
```

Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.

**Parameters**

**Name**

**Description**

request

`[GetDatabaseDdlRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.GetDatabaseDdlRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[GetDatabaseDdlResponse](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.GetDatabaseDdlResponse)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.GetIamPolicyRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### listBackupOperations(ListBackupOperationsRequest request, StreamObserver<ListBackupOperationsResponse> responseObserver)

```
public void listBackupOperations(ListBackupOperationsRequest request, StreamObserver<ListBackupOperationsResponse> responseObserver)
```

Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation>`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.

**Parameters**

**Name**

**Description**

request

`[ListBackupOperationsRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListBackupOperationsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListBackupOperationsResponse](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListBackupOperationsResponse)>`  

### listBackups(ListBackupsRequest request, StreamObserver<ListBackupsResponse> responseObserver)

```
public void listBackups(ListBackupsRequest request, StreamObserver<ListBackupsResponse> responseObserver)
```

Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.

**Parameters**

**Name**

**Description**

request

`[ListBackupsRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListBackupsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListBackupsResponse](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListBackupsResponse)>`  

### listDatabaseOperations(ListDatabaseOperationsRequest request, StreamObserver<ListDatabaseOperationsResponse> responseObserver)

```
public void listDatabaseOperations(ListDatabaseOperationsRequest request, StreamObserver<ListDatabaseOperationsResponse> responseObserver)
```

Lists database longrunning-operations. A database operation has a name of the form `projects/<project>/instances/<instance>/databases/<database>/operations/<operation>`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.

**Parameters**

**Name**

**Description**

request

`[ListDatabaseOperationsRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListDatabaseOperationsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListDatabaseOperationsResponse](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListDatabaseOperationsResponse)>`  

### listDatabases(ListDatabasesRequest request, StreamObserver<ListDatabasesResponse> responseObserver)

```
public void listDatabases(ListDatabasesRequest request, StreamObserver<ListDatabasesResponse> responseObserver)
```

Lists Cloud Spanner databases.

**Parameters**

**Name**

**Description**

request

`[ListDatabasesRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListDatabasesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListDatabasesResponse](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.ListDatabasesResponse)>`  

### restoreDatabase(RestoreDatabaseRequest request, StreamObserver<Operation> responseObserver)

```
public void restoreDatabase(RestoreDatabaseRequest request, StreamObserver<Operation> responseObserver)
```

Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects/<project>/instances/<instance>/databases/<database>/operations/<operation_id>`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.

**Parameters**

**Name**

**Description**

request

`[RestoreDatabaseRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.RestoreDatabaseRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.SetIamPolicyRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT\_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT\_FOUND error if the user has `spanner.backups.list` permission on the containing instance.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.TestIamPermissionsRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### updateBackup(UpdateBackupRequest request, StreamObserver<Backup> responseObserver)

```
public void updateBackup(UpdateBackupRequest request, StreamObserver<Backup> responseObserver)
```

Updates a pending or completed Backup.

**Parameters**

**Name**

**Description**

request

`[UpdateBackupRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.UpdateBackupRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Backup](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.Backup)>`  

### updateDatabaseDdl(UpdateDatabaseDdlRequest request, StreamObserver<Operation> responseObserver)

```
public void updateDatabaseDdl(UpdateDatabaseDdlRequest request, StreamObserver<Operation> responseObserver)
```

Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.

**Parameters**

**Name**

**Description**

request

`[UpdateDatabaseDdlRequest](/java/docs/reference/google-cloud-spanner/6.24.0/com.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
