-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class PublicAdvertisedPrefixes.PublicAdvertisedPrefixesBase (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
[BindServiceMethod(typeof(PublicAdvertisedPrefixes), "BindService")]
public abstract class PublicAdvertisedPrefixesBase
```

Reference documentation and code samples for the Compute Engine v1 API class PublicAdvertisedPrefixes.PublicAdvertisedPrefixesBase.

Base class for server-side implementations of PublicAdvertisedPrefixes

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> PublicAdvertisedPrefixes.PublicAdvertisedPrefixesBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Methods

### Delete(DeletePublicAdvertisedPrefixeRequest, ServerCallContext)

```
public virtual Task<Operation> Delete(DeletePublicAdvertisedPrefixeRequest request, ServerCallContext context)
```

Deletes the specified PublicAdvertisedPrefix

**Parameters**

**Name**

**Description**

`request`

`[DeletePublicAdvertisedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.DeletePublicAdvertisedPrefixeRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

### Get(GetPublicAdvertisedPrefixeRequest, ServerCallContext)

```
public virtual Task<PublicAdvertisedPrefix> Get(GetPublicAdvertisedPrefixeRequest request, ServerCallContext context)
```

Returns the specified PublicAdvertisedPrefix resource.

**Parameters**

**Name**

**Description**

`request`

`[GetPublicAdvertisedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.GetPublicAdvertisedPrefixeRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[PublicAdvertisedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PublicAdvertisedPrefix)>`

The response to send back to the client (wrapped by a task).

### Insert(InsertPublicAdvertisedPrefixeRequest, ServerCallContext)

```
public virtual Task<Operation> Insert(InsertPublicAdvertisedPrefixeRequest request, ServerCallContext context)
```

Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertPublicAdvertisedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.InsertPublicAdvertisedPrefixeRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

### List(ListPublicAdvertisedPrefixesRequest, ServerCallContext)

```
public virtual Task<PublicAdvertisedPrefixList> List(ListPublicAdvertisedPrefixesRequest request, ServerCallContext context)
```

Lists the PublicAdvertisedPrefixes for a project.

**Parameters**

**Name**

**Description**

`request`

`[ListPublicAdvertisedPrefixesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.ListPublicAdvertisedPrefixesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[PublicAdvertisedPrefixList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PublicAdvertisedPrefixList)>`

The response to send back to the client (wrapped by a task).

### Patch(PatchPublicAdvertisedPrefixeRequest, ServerCallContext)

```
public virtual Task<Operation> Patch(PatchPublicAdvertisedPrefixeRequest request, ServerCallContext context)
```

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchPublicAdvertisedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PatchPublicAdvertisedPrefixeRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
