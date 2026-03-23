-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Backup for GKE v1 API - Class BackupForGKE.BackupForGKEBase (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/latest/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.8.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.7.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.6.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.5.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.4.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.1.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.0.0/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/1.0.0-beta01/Google.Cloud.GkeBackup.V1.BackupForGKE.BackupForGKEBase)

```
[BindServiceMethod(typeof(BackupForGKE), "BindService")]
public abstract class BackupForGKE.BackupForGKEBase
```

Reference documentation and code samples for the Backup for GKE v1 API class BackupForGKE.BackupForGKEBase.

Base class for server-side implementations of BackupForGKE

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> BackupForGKE.BackupForGKEBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.GkeBackup.V1](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1)

## Assembly

Google.Cloud.GkeBackup.V1.dll

## Methods

### CreateBackup(CreateBackupRequest, ServerCallContext)

```
public virtual Task<Operation> CreateBackup(CreateBackupRequest request, ServerCallContext context)
```

Creates a Backup for the given BackupPlan.

**Parameters**

**Name**

**Description**

`request`

`[CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### CreateBackupPlan(CreateBackupPlanRequest, ServerCallContext)

```
public virtual Task<Operation> CreateBackupPlan(CreateBackupPlanRequest request, ServerCallContext context)
```

Creates a new BackupPlan in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateBackupPlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.CreateBackupPlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### CreateRestore(CreateRestoreRequest, ServerCallContext)

```
public virtual Task<Operation> CreateRestore(CreateRestoreRequest request, ServerCallContext context)
```

Creates a new Restore for the given RestorePlan.

**Parameters**

**Name**

**Description**

`request`

`[CreateRestoreRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.CreateRestoreRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### CreateRestorePlan(CreateRestorePlanRequest, ServerCallContext)

```
public virtual Task<Operation> CreateRestorePlan(CreateRestorePlanRequest request, ServerCallContext context)
```

Creates a new RestorePlan in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateRestorePlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.CreateRestorePlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteBackup(DeleteBackupRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteBackup(DeleteBackupRequest request, ServerCallContext context)
```

Deletes an existing Backup.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.DeleteBackupRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteBackupPlan(DeleteBackupPlanRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteBackupPlan(DeleteBackupPlanRequest request, ServerCallContext context)
```

Deletes an existing BackupPlan.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackupPlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.DeleteBackupPlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteRestore(DeleteRestoreRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteRestore(DeleteRestoreRequest request, ServerCallContext context)
```

Deletes an existing Restore.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRestoreRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.DeleteRestoreRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteRestorePlan(DeleteRestorePlanRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteRestorePlan(DeleteRestorePlanRequest request, ServerCallContext context)
```

Deletes an existing RestorePlan.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRestorePlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.DeleteRestorePlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### GetBackup(GetBackupRequest, ServerCallContext)

```
public virtual Task<Backup> GetBackup(GetBackupRequest request, ServerCallContext context)
```

Retrieve the details of a single Backup.

**Parameters**

**Name**

**Description**

`request`

`[GetBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetBackupRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Backup](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.Backup)`

The response to send back to the client (wrapped by a task).

### GetBackupPlan(GetBackupPlanRequest, ServerCallContext)

```
public virtual Task<BackupPlan> GetBackupPlan(GetBackupPlanRequest request, ServerCallContext context)
```

Retrieve the details of a single BackupPlan.

**Parameters**

**Name**

**Description**

`request`

`[GetBackupPlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetBackupPlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[BackupPlan](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.BackupPlan)`

The response to send back to the client (wrapped by a task).

### GetRestore(GetRestoreRequest, ServerCallContext)

```
public virtual Task<Restore> GetRestore(GetRestoreRequest request, ServerCallContext context)
```

Retrieves the details of a single Restore.

**Parameters**

**Name**

**Description**

`request`

`[GetRestoreRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetRestoreRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Restore](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.Restore)`

The response to send back to the client (wrapped by a task).

### GetRestorePlan(GetRestorePlanRequest, ServerCallContext)

```
public virtual Task<RestorePlan> GetRestorePlan(GetRestorePlanRequest request, ServerCallContext context)
```

Retrieve the details of a single RestorePlan.

**Parameters**

**Name**

**Description**

`request`

`[GetRestorePlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetRestorePlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[RestorePlan](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.RestorePlan)`

The response to send back to the client (wrapped by a task).

### GetVolumeBackup(GetVolumeBackupRequest, ServerCallContext)

```
public virtual Task<VolumeBackup> GetVolumeBackup(GetVolumeBackupRequest request, ServerCallContext context)
```

Retrieve the details of a single VolumeBackup.

**Parameters**

**Name**

**Description**

`request`

`[GetVolumeBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetVolumeBackupRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[VolumeBackup](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.VolumeBackup)`

The response to send back to the client (wrapped by a task).

### GetVolumeRestore(GetVolumeRestoreRequest, ServerCallContext)

```
public virtual Task<VolumeRestore> GetVolumeRestore(GetVolumeRestoreRequest request, ServerCallContext context)
```

Retrieve the details of a single VolumeRestore.

**Parameters**

**Name**

**Description**

`request`

`[GetVolumeRestoreRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.GetVolumeRestoreRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[VolumeRestore](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.VolumeRestore)`

The response to send back to the client (wrapped by a task).

### ListBackupPlans(ListBackupPlansRequest, ServerCallContext)

```
public virtual Task<ListBackupPlansResponse> ListBackupPlans(ListBackupPlansRequest request, ServerCallContext context)
```

Lists BackupPlans in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListBackupPlansRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListBackupPlansRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListBackupPlansResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListBackupPlansResponse)`

The response to send back to the client (wrapped by a task).

### ListBackups(ListBackupsRequest, ServerCallContext)

```
public virtual Task<ListBackupsResponse> ListBackups(ListBackupsRequest request, ServerCallContext context)
```

Lists the Backups for a given BackupPlan.

**Parameters**

**Name**

**Description**

`request`

`[ListBackupsRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListBackupsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListBackupsResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListBackupsResponse)`

The response to send back to the client (wrapped by a task).

### ListRestorePlans(ListRestorePlansRequest, ServerCallContext)

```
public virtual Task<ListRestorePlansResponse> ListRestorePlans(ListRestorePlansRequest request, ServerCallContext context)
```

Lists RestorePlans in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListRestorePlansRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListRestorePlansRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListRestorePlansResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListRestorePlansResponse)`

The response to send back to the client (wrapped by a task).

### ListRestores(ListRestoresRequest, ServerCallContext)

```
public virtual Task<ListRestoresResponse> ListRestores(ListRestoresRequest request, ServerCallContext context)
```

Lists the Restores for a given RestorePlan.

**Parameters**

**Name**

**Description**

`request`

`[ListRestoresRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListRestoresRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListRestoresResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListRestoresResponse)`

The response to send back to the client (wrapped by a task).

### ListVolumeBackups(ListVolumeBackupsRequest, ServerCallContext)

```
public virtual Task<ListVolumeBackupsResponse> ListVolumeBackups(ListVolumeBackupsRequest request, ServerCallContext context)
```

Lists the VolumeBackups for a given Backup.

**Parameters**

**Name**

**Description**

`request`

`[ListVolumeBackupsRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListVolumeBackupsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListVolumeBackupsResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListVolumeBackupsResponse)`

The response to send back to the client (wrapped by a task).

### ListVolumeRestores(ListVolumeRestoresRequest, ServerCallContext)

```
public virtual Task<ListVolumeRestoresResponse> ListVolumeRestores(ListVolumeRestoresRequest request, ServerCallContext context)
```

Lists the VolumeRestores for a given Restore.

**Parameters**

**Name**

**Description**

`request`

`[ListVolumeRestoresRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListVolumeRestoresRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListVolumeRestoresResponse](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.ListVolumeRestoresResponse)`

The response to send back to the client (wrapped by a task).

### UpdateBackup(UpdateBackupRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateBackup(UpdateBackupRequest request, ServerCallContext context)
```

Update a Backup.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.UpdateBackupRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### UpdateBackupPlan(UpdateBackupPlanRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateBackupPlan(UpdateBackupPlanRequest request, ServerCallContext context)
```

Update a BackupPlan.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackupPlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.UpdateBackupPlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### UpdateRestore(UpdateRestoreRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateRestore(UpdateRestoreRequest request, ServerCallContext context)
```

Update a Restore.

**Parameters**

**Name**

**Description**

`request`

`[UpdateRestoreRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.UpdateRestoreRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### UpdateRestorePlan(UpdateRestorePlanRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateRestorePlan(UpdateRestorePlanRequest request, ServerCallContext context)
```

Update a RestorePlan.

**Parameters**

**Name**

**Description**

`request`

`[UpdateRestorePlanRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.UpdateRestorePlanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
