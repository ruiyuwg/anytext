-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class DataScanService.DataScanServiceBase (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
[BindServiceMethod(typeof(DataScanService), "BindService")]
public abstract class DataScanService.DataScanServiceBase
```

Reference documentation and code samples for the Cloud Dataplex v1 API class DataScanService.DataScanServiceBase.

Base class for server-side implementations of DataScanService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DataScanService.DataScanServiceBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Methods

### CreateDataScan(CreateDataScanRequest, ServerCallContext)

```
public virtual Task<Operation> CreateDataScan(CreateDataScanRequest request, ServerCallContext context)
```

Creates a DataScan resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateDataScanRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.CreateDataScanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### DeleteDataScan(DeleteDataScanRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteDataScan(DeleteDataScanRequest request, ServerCallContext context)
```

Deletes a DataScan resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteDataScanRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.DeleteDataScanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response to send back to the client (wrapped by a task).

### GetDataScan(GetDataScanRequest, ServerCallContext)

```
public virtual Task<DataScan> GetDataScan(GetDataScanRequest request, ServerCallContext context)
```

Gets a DataScan resource.

**Parameters**

**Name**

**Description**

`request`

`[GetDataScanRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.GetDataScanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[DataScan](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.DataScan)`

The response to send back to the client (wrapped by a task).

### GetDataScanJob(GetDataScanJobRequest, ServerCallContext)

```
public virtual Task<DataScanJob> GetDataScanJob(GetDataScanJobRequest request, ServerCallContext context)
```

Gets a DataScanJob resource.

**Parameters**

**Name**

**Description**

`request`

`[GetDataScanJobRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.GetDataScanJobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[DataScanJob](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.DataScanJob)`

The response to send back to the client (wrapped by a task).

### ListDataScanJobs(ListDataScanJobsRequest, ServerCallContext)

```
public virtual Task<ListDataScanJobsResponse> ListDataScanJobs(ListDataScanJobsRequest request, ServerCallContext context)
```

Lists DataScanJobs under the given DataScan.

**Parameters**

**Name**

**Description**

`request`

`[ListDataScanJobsRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.ListDataScanJobsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListDataScanJobsResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.ListDataScanJobsResponse)`

The response to send back to the client (wrapped by a task).

### ListDataScans(ListDataScansRequest, ServerCallContext)

```
public virtual Task<ListDataScansResponse> ListDataScans(ListDataScansRequest request, ServerCallContext context)
```

Lists DataScans.

**Parameters**

**Name**

**Description**

`request`

`[ListDataScansRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.ListDataScansRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListDataScansResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.ListDataScansResponse)`

The response to send back to the client (wrapped by a task).

### RunDataScan(RunDataScanRequest, ServerCallContext)

```
public virtual Task<RunDataScanResponse> RunDataScan(RunDataScanRequest request, ServerCallContext context)
```

Runs an on-demand execution of a DataScan

**Parameters**

**Name**

**Description**

`request`

`[RunDataScanRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.RunDataScanRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[RunDataScanResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.RunDataScanResponse)`

The response to send back to the client (wrapped by a task).

### UpdateDataScan(UpdateDataScanRequest, ServerCallContext)

```
public virtual Task<Operation> UpdateDataScan(UpdateDataScanRequest request, ServerCallContext context)
```

Updates a DataScan resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateDataScanRequest](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.10.0/Google.Cloud.Dataplex.V1.UpdateDataScanRequest)`  

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

Last updated 2026-03-16 UTC.
