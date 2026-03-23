-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class RegionAutoscalers.RegionAutoscalersBase (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
[BindServiceMethod(typeof(RegionAutoscalers), "BindService")]
public abstract class RegionAutoscalersBase
```

Base class for server-side implementations of RegionAutoscalers

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> RegionAutoscalers.RegionAutoscalersBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Methods

### Delete(DeleteRegionAutoscalerRequest, ServerCallContext)

```
public virtual Task<Operation> Delete(DeleteRegionAutoscalerRequest request, ServerCallContext context)
```

Deletes the specified autoscaler.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionAutoscalerRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.DeleteRegionAutoscalerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

### Get(GetRegionAutoscalerRequest, ServerCallContext)

```
public virtual Task<Autoscaler> Get(GetRegionAutoscalerRequest request, ServerCallContext context)
```

Returns the specified autoscaler.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionAutoscalerRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.GetRegionAutoscalerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Autoscaler](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Autoscaler)>`

The response to send back to the client (wrapped by a task).

### Insert(InsertRegionAutoscalerRequest, ServerCallContext)

```
public virtual Task<Operation> Insert(InsertRegionAutoscalerRequest request, ServerCallContext context)
```

Creates an autoscaler in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionAutoscalerRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InsertRegionAutoscalerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

### List(ListRegionAutoscalersRequest, ServerCallContext)

```
public virtual Task<RegionAutoscalerList> List(ListRegionAutoscalersRequest request, ServerCallContext context)
```

Retrieves a list of autoscalers contained within the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionAutoscalersRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.ListRegionAutoscalersRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RegionAutoscalerList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.RegionAutoscalerList)>`

The response to send back to the client (wrapped by a task).

### Patch(PatchRegionAutoscalerRequest, ServerCallContext)

```
public virtual Task<Operation> Patch(PatchRegionAutoscalerRequest request, ServerCallContext context)
```

Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionAutoscalerRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.PatchRegionAutoscalerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

### Update(UpdateRegionAutoscalerRequest, ServerCallContext)

```
public virtual Task<Operation> Update(UpdateRegionAutoscalerRequest request, ServerCallContext context)
```

Updates an autoscaler in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpdateRegionAutoscalerRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.UpdateRegionAutoscalerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
