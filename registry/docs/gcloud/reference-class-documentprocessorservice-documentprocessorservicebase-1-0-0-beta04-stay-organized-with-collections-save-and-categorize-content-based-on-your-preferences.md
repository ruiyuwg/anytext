-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DocumentProcessorService.DocumentProcessorServiceBase (1.0.0-beta04) Stay organized with collections Save and categorize content based on your preferences.

2.0.0-beta30 (latest) 2.0.0-beta29 1.0.0-beta04

```
[BindServiceMethod(typeof(DocumentProcessorService), "BindService")]
public abstract class DocumentProcessorServiceBase
```

Base class for server-side implementations of DocumentProcessorService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DocumentProcessorService.DocumentProcessorServiceBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.DocumentAI.V1Beta3](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3)

## Assembly

Google.Cloud.DocumentAI.V1Beta3.dll

## Methods

### BatchProcessDocuments(BatchProcessRequest, ServerCallContext)

```
public virtual Task<Operation> BatchProcessDocuments(BatchProcessRequest request, ServerCallContext context)
```

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the \[Document\] format.

**Parameters**

**Name**

**Description**

`request`

`[BatchProcessRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.BatchProcessRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### CreateProcessor(CreateProcessorRequest, ServerCallContext)

```
public virtual Task<Processor> CreateProcessor(CreateProcessorRequest request, ServerCallContext context)
```

Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.

**Parameters**

**Name**

**Description**

`request`

`[CreateProcessorRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.CreateProcessorRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Processor](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.Processor)>`

The response to send back to the client (wrapped by a task).

### DeleteProcessor(DeleteProcessorRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteProcessor(DeleteProcessorRequest request, ServerCallContext context)
```

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

**Parameters**

**Name**

**Description**

`request`

`[DeleteProcessorRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.DeleteProcessorRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### DisableProcessor(DisableProcessorRequest, ServerCallContext)

```
public virtual Task<Operation> DisableProcessor(DisableProcessorRequest request, ServerCallContext context)
```

Disables a processor

**Parameters**

**Name**

**Description**

`request`

`[DisableProcessorRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.DisableProcessorRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### EnableProcessor(EnableProcessorRequest, ServerCallContext)

```
public virtual Task<Operation> EnableProcessor(EnableProcessorRequest request, ServerCallContext context)
```

Enables a processor

**Parameters**

**Name**

**Description**

`request`

`[EnableProcessorRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.EnableProcessorRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### FetchProcessorTypes(FetchProcessorTypesRequest, ServerCallContext)

```
public virtual Task<FetchProcessorTypesResponse> FetchProcessorTypes(FetchProcessorTypesRequest request, ServerCallContext context)
```

Fetches processor types.

**Parameters**

**Name**

**Description**

`request`

`[FetchProcessorTypesRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.FetchProcessorTypesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FetchProcessorTypesResponse](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.FetchProcessorTypesResponse)>`

The response to send back to the client (wrapped by a task).

### ListProcessors(ListProcessorsRequest, ServerCallContext)

```
public virtual Task<ListProcessorsResponse> ListProcessors(ListProcessorsRequest request, ServerCallContext context)
```

Lists all processors which belong to this project.

**Parameters**

**Name**

**Description**

`request`

`[ListProcessorsRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.ListProcessorsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListProcessorsResponse](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.ListProcessorsResponse)>`

The response to send back to the client (wrapped by a task).

### ProcessDocument(ProcessRequest, ServerCallContext)

```
public virtual Task<ProcessResponse> ProcessDocument(ProcessRequest request, ServerCallContext context)
```

Processes a single document.

**Parameters**

**Name**

**Description**

`request`

`[ProcessRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.ProcessRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ProcessResponse](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.ProcessResponse)>`

The response to send back to the client (wrapped by a task).

### ReviewDocument(ReviewDocumentRequest, ServerCallContext)

```
public virtual Task<Operation> ReviewDocument(ReviewDocumentRequest request, ServerCallContext context)
```

Send a document for Human Review. The input document should be processed by the specified processor.

**Parameters**

**Name**

**Description**

`request`

`[ReviewDocumentRequest](/dotnet/docs/reference/Google.Cloud.DocumentAI.V1Beta3/1.0.0-beta04/Google.Cloud.DocumentAI.V1Beta3.ReviewDocumentRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
