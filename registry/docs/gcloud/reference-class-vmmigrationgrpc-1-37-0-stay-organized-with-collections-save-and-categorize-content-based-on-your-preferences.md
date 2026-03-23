-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class VmMigrationGrpc (1.37.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.5 1.2.0 1.1.1 1.0.5

```
public final class VmMigrationGrpc
```

VM Migration Service

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> VmMigrationGrpc

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

### bindService(VmMigrationGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(VmMigrationGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[VmMigrationGrpc.AsyncService](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.VmMigrationGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getAddGroupMigrationMethod()

```
public static MethodDescriptor<AddGroupMigrationRequest,Operation> getAddGroupMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[AddGroupMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.AddGroupMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCancelCloneJobMethod()

```
public static MethodDescriptor<CancelCloneJobRequest,Operation> getCancelCloneJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CancelCloneJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CancelCloneJobRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCancelCutoverJobMethod()

```
public static MethodDescriptor<CancelCutoverJobRequest,Operation> getCancelCutoverJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CancelCutoverJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CancelCutoverJobRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateCloneJobMethod()

```
public static MethodDescriptor<CreateCloneJobRequest,Operation> getCreateCloneJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateCloneJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateCloneJobRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateCutoverJobMethod()

```
public static MethodDescriptor<CreateCutoverJobRequest,Operation> getCreateCutoverJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateCutoverJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateCutoverJobRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateDatacenterConnectorMethod()

```
public static MethodDescriptor<CreateDatacenterConnectorRequest,Operation> getCreateDatacenterConnectorMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateDatacenterConnectorRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateGroupMethod()

```
public static MethodDescriptor<CreateGroupRequest,Operation> getCreateGroupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateGroupRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateGroupRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateMigratingVmMethod()

```
public static MethodDescriptor<CreateMigratingVmRequest,Operation> getCreateMigratingVmMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateMigratingVmRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateMigratingVmRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateSourceMethod()

```
public static MethodDescriptor<CreateSourceRequest,Operation> getCreateSourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateSourceRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateSourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateTargetProjectMethod()

```
public static MethodDescriptor<CreateTargetProjectRequest,Operation> getCreateTargetProjectMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateTargetProjectRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateTargetProjectRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateUtilizationReportMethod()

```
public static MethodDescriptor<CreateUtilizationReportRequest,Operation> getCreateUtilizationReportMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateUtilizationReportRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CreateUtilizationReportRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteDatacenterConnectorMethod()

```
public static MethodDescriptor<DeleteDatacenterConnectorRequest,Operation> getDeleteDatacenterConnectorMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteDatacenterConnectorRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteGroupMethod()

```
public static MethodDescriptor<DeleteGroupRequest,Operation> getDeleteGroupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteGroupRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteGroupRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteMigratingVmMethod()

```
public static MethodDescriptor<DeleteMigratingVmRequest,Operation> getDeleteMigratingVmMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteMigratingVmRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteMigratingVmRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteSourceMethod()

```
public static MethodDescriptor<DeleteSourceRequest,Operation> getDeleteSourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteSourceRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteSourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteTargetProjectMethod()

```
public static MethodDescriptor<DeleteTargetProjectRequest,Operation> getDeleteTargetProjectMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteTargetProjectRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteTargetProjectRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteUtilizationReportMethod()

```
public static MethodDescriptor<DeleteUtilizationReportRequest,Operation> getDeleteUtilizationReportMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteUtilizationReportRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DeleteUtilizationReportRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getFetchInventoryMethod()

```
public static MethodDescriptor<FetchInventoryRequest,FetchInventoryResponse> getFetchInventoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[FetchInventoryRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.FetchInventoryRequest),[FetchInventoryResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.FetchInventoryResponse)>`

### getFinalizeMigrationMethod()

```
public static MethodDescriptor<FinalizeMigrationRequest,Operation> getFinalizeMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[FinalizeMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.FinalizeMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetCloneJobMethod()

```
public static MethodDescriptor<GetCloneJobRequest,CloneJob> getGetCloneJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetCloneJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetCloneJobRequest),[CloneJob](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CloneJob)>`

### getGetCutoverJobMethod()

```
public static MethodDescriptor<GetCutoverJobRequest,CutoverJob> getGetCutoverJobMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetCutoverJobRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetCutoverJobRequest),[CutoverJob](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.CutoverJob)>`

### getGetDatacenterConnectorMethod()

```
public static MethodDescriptor<GetDatacenterConnectorRequest,DatacenterConnector> getGetDatacenterConnectorMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetDatacenterConnectorRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetDatacenterConnectorRequest),[DatacenterConnector](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.DatacenterConnector)>`

### getGetGroupMethod()

```
public static MethodDescriptor<GetGroupRequest,Group> getGetGroupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetGroupRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetGroupRequest),[Group](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.Group)>`

### getGetMigratingVmMethod()

```
public static MethodDescriptor<GetMigratingVmRequest,MigratingVm> getGetMigratingVmMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetMigratingVmRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetMigratingVmRequest),[MigratingVm](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.MigratingVm)>`

### getGetReplicationCycleMethod()

```
public static MethodDescriptor<GetReplicationCycleRequest,ReplicationCycle> getGetReplicationCycleMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetReplicationCycleRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetReplicationCycleRequest),[ReplicationCycle](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ReplicationCycle)>`

### getGetSourceMethod()

```
public static MethodDescriptor<GetSourceRequest,Source> getGetSourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetSourceRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetSourceRequest),[Source](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.Source)>`

### getGetTargetProjectMethod()

```
public static MethodDescriptor<GetTargetProjectRequest,TargetProject> getGetTargetProjectMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetTargetProjectRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetTargetProjectRequest),[TargetProject](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.TargetProject)>`

### getGetUtilizationReportMethod()

```
public static MethodDescriptor<GetUtilizationReportRequest,UtilizationReport> getGetUtilizationReportMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetUtilizationReportRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.GetUtilizationReportRequest),[UtilizationReport](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UtilizationReport)>`

### getListCloneJobsMethod()

```
public static MethodDescriptor<ListCloneJobsRequest,ListCloneJobsResponse> getListCloneJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListCloneJobsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListCloneJobsRequest),[ListCloneJobsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListCloneJobsResponse)>`

### getListCutoverJobsMethod()

```
public static MethodDescriptor<ListCutoverJobsRequest,ListCutoverJobsResponse> getListCutoverJobsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListCutoverJobsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListCutoverJobsRequest),[ListCutoverJobsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListCutoverJobsResponse)>`

### getListDatacenterConnectorsMethod()

```
public static MethodDescriptor<ListDatacenterConnectorsRequest,ListDatacenterConnectorsResponse> getListDatacenterConnectorsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListDatacenterConnectorsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest),[ListDatacenterConnectorsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse)>`

### getListGroupsMethod()

```
public static MethodDescriptor<ListGroupsRequest,ListGroupsResponse> getListGroupsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListGroupsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListGroupsRequest),[ListGroupsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListGroupsResponse)>`

### getListMigratingVmsMethod()

```
public static MethodDescriptor<ListMigratingVmsRequest,ListMigratingVmsResponse> getListMigratingVmsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListMigratingVmsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListMigratingVmsRequest),[ListMigratingVmsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListMigratingVmsResponse)>`

### getListReplicationCyclesMethod()

```
public static MethodDescriptor<ListReplicationCyclesRequest,ListReplicationCyclesResponse> getListReplicationCyclesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListReplicationCyclesRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListReplicationCyclesRequest),[ListReplicationCyclesResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListReplicationCyclesResponse)>`

### getListSourcesMethod()

```
public static MethodDescriptor<ListSourcesRequest,ListSourcesResponse> getListSourcesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListSourcesRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListSourcesRequest),[ListSourcesResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListSourcesResponse)>`

### getListTargetProjectsMethod()

```
public static MethodDescriptor<ListTargetProjectsRequest,ListTargetProjectsResponse> getListTargetProjectsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListTargetProjectsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListTargetProjectsRequest),[ListTargetProjectsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListTargetProjectsResponse)>`

### getListUtilizationReportsMethod()

```
public static MethodDescriptor<ListUtilizationReportsRequest,ListUtilizationReportsResponse> getListUtilizationReportsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListUtilizationReportsRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListUtilizationReportsRequest),[ListUtilizationReportsResponse](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ListUtilizationReportsResponse)>`

### getPauseMigrationMethod()

```
public static MethodDescriptor<PauseMigrationRequest,Operation> getPauseMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[PauseMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.PauseMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getRemoveGroupMigrationMethod()

```
public static MethodDescriptor<RemoveGroupMigrationRequest,Operation> getRemoveGroupMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RemoveGroupMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.RemoveGroupMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getResumeMigrationMethod()

```
public static MethodDescriptor<ResumeMigrationRequest,Operation> getResumeMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ResumeMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.ResumeMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getStartMigrationMethod()

```
public static MethodDescriptor<StartMigrationRequest,Operation> getStartMigrationMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[StartMigrationRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.StartMigrationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateGroupMethod()

```
public static MethodDescriptor<UpdateGroupRequest,Operation> getUpdateGroupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateGroupRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UpdateGroupRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateMigratingVmMethod()

```
public static MethodDescriptor<UpdateMigratingVmRequest,Operation> getUpdateMigratingVmMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateMigratingVmRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UpdateMigratingVmRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateSourceMethod()

```
public static MethodDescriptor<UpdateSourceRequest,Operation> getUpdateSourceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateSourceRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UpdateSourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpdateTargetProjectMethod()

```
public static MethodDescriptor<UpdateTargetProjectRequest,Operation> getUpdateTargetProjectMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateTargetProjectRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UpdateTargetProjectRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getUpgradeApplianceMethod()

```
public static MethodDescriptor<UpgradeApplianceRequest,Operation> getUpgradeApplianceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpgradeApplianceRequest](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.UpgradeApplianceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static VmMigrationGrpc.VmMigrationBlockingStub newBlockingStub(Channel channel)
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

`[VmMigrationGrpc.VmMigrationBlockingStub](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.VmMigrationGrpc.VmMigrationBlockingStub)`

### newFutureStub(Channel channel)

```
public static VmMigrationGrpc.VmMigrationFutureStub newFutureStub(Channel channel)
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

`[VmMigrationGrpc.VmMigrationFutureStub](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.VmMigrationGrpc.VmMigrationFutureStub)`

### newStub(Channel channel)

```
public static VmMigrationGrpc.VmMigrationStub newStub(Channel channel)
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

`[VmMigrationGrpc.VmMigrationStub](/java/docs/reference/google-cloud-vmmigration/1.37.0/com.google.cloud.vmmigration.v1.VmMigrationGrpc.VmMigrationStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
