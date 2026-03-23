-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class ZoneOperations.ZoneOperationsBase (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
[BindServiceMethod(typeof(ZoneOperations), "BindService")]
public abstract class ZoneOperations.ZoneOperationsBase
```

Reference documentation and code samples for the Compute Engine v1 API class ZoneOperations.ZoneOperationsBase.

Base class for server-side implementations of ZoneOperations

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ZoneOperations.ZoneOperationsBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Methods

### Delete(DeleteZoneOperationRequest, ServerCallContext)

```
public virtual Task<DeleteZoneOperationResponse> Delete(DeleteZoneOperationRequest request, ServerCallContext context)
```

Deletes the specified zone-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteZoneOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DeleteZoneOperationRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[DeleteZoneOperationResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DeleteZoneOperationResponse)`

The response to send back to the client (wrapped by a task).

### Get(GetZoneOperationRequest, ServerCallContext)

```
public virtual Task<Operation> Get(GetZoneOperationRequest request, ServerCallContext context)
```

Retrieves the specified zone-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[GetZoneOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.GetZoneOperationRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### List(ListZoneOperationsRequest, ServerCallContext)

```
public virtual Task<OperationList> List(ListZoneOperationsRequest request, ServerCallContext context)
```

Retrieves a list of Operation resources contained within the specified zone.

**Parameters**

**Name**

**Description**

`request`

`[ListZoneOperationsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.ListZoneOperationsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[OperationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.OperationList)`

The response to send back to the client (wrapped by a task).

### Wait(WaitZoneOperationRequest, ServerCallContext)

```
public virtual Task<Operation> Wait(WaitZoneOperationRequest request, ServerCallContext context)
```

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`request`

`[WaitZoneOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.WaitZoneOperationRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
