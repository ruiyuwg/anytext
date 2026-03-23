-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class DatasetService.DatasetServiceBase (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
[BindServiceMethod(typeof(DatasetService), "BindService")]
public abstract class DatasetServiceBase
```

Reference documentation and code samples for the Cloud AI Platform v1 API class DatasetService.DatasetServiceBase.

Base class for server-side implementations of DatasetService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DatasetService.DatasetServiceBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Methods

### CreateDataset(CreateDatasetRequest, ServerCallContext)

```
public virtual Task<Operation> CreateDataset(CreateDatasetRequest request, ServerCallContext context)
```

Creates a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[CreateDatasetRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.CreateDatasetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### DeleteDataset(DeleteDatasetRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteDataset(DeleteDatasetRequest request, ServerCallContext context)
```

Deletes a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[DeleteDatasetRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.DeleteDatasetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### ExportData(ExportDataRequest, ServerCallContext)

```
public virtual Task<Operation> ExportData(ExportDataRequest request, ServerCallContext context)
```

Exports data from a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[ExportDataRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ExportDataRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### GetAnnotationSpec(GetAnnotationSpecRequest, ServerCallContext)

```
public virtual Task<AnnotationSpec> GetAnnotationSpec(GetAnnotationSpecRequest request, ServerCallContext context)
```

Gets an AnnotationSpec.

**Parameters**

**Name**

**Description**

`request`

`[GetAnnotationSpecRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.GetAnnotationSpecRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[AnnotationSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.AnnotationSpec)>`

The response to send back to the client (wrapped by a task).

### GetDataset(GetDatasetRequest, ServerCallContext)

```
public virtual Task<Dataset> GetDataset(GetDatasetRequest request, ServerCallContext context)
```

Gets a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[GetDatasetRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.GetDatasetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Dataset](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.Dataset)>`

The response to send back to the client (wrapped by a task).

### ImportData(ImportDataRequest, ServerCallContext)

```
public virtual Task<Operation> ImportData(ImportDataRequest request, ServerCallContext context)
```

Imports data into a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[ImportDataRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ImportDataRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### ListAnnotations(ListAnnotationsRequest, ServerCallContext)

```
public virtual Task<ListAnnotationsResponse> ListAnnotations(ListAnnotationsRequest request, ServerCallContext context)
```

Lists Annotations belongs to a dataitem

**Parameters**

**Name**

**Description**

`request`

`[ListAnnotationsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListAnnotationsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListAnnotationsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListAnnotationsResponse)>`

The response to send back to the client (wrapped by a task).

### ListDataItems(ListDataItemsRequest, ServerCallContext)

```
public virtual Task<ListDataItemsResponse> ListDataItems(ListDataItemsRequest request, ServerCallContext context)
```

Lists DataItems in a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[ListDataItemsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListDataItemsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListDataItemsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListDataItemsResponse)>`

The response to send back to the client (wrapped by a task).

### ListDatasets(ListDatasetsRequest, ServerCallContext)

```
public virtual Task<ListDatasetsResponse> ListDatasets(ListDatasetsRequest request, ServerCallContext context)
```

Lists Datasets in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListDatasetsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListDatasetsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListDatasetsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListDatasetsResponse)>`

The response to send back to the client (wrapped by a task).

### ListSavedQueries(ListSavedQueriesRequest, ServerCallContext)

```
public virtual Task<ListSavedQueriesResponse> ListSavedQueries(ListSavedQueriesRequest request, ServerCallContext context)
```

Lists SavedQueries in a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[ListSavedQueriesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListSavedQueriesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListSavedQueriesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.ListSavedQueriesResponse)>`

The response to send back to the client (wrapped by a task).

### UpdateDataset(UpdateDatasetRequest, ServerCallContext)

```
public virtual Task<Dataset> UpdateDataset(UpdateDatasetRequest request, ServerCallContext context)
```

Updates a Dataset.

**Parameters**

**Name**

**Description**

`request`

`[UpdateDatasetRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.UpdateDatasetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Dataset](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.6.0/Google.Cloud.AIPlatform.V1.Dataset)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
