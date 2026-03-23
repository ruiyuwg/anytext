-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RegionOperations.RegionOperationsClient (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class RegionOperationsClient : ClientBase<RegionOperations.RegionOperationsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class RegionOperations.RegionOperationsClient.

Client for RegionOperations

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[RegionOperations.RegionOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.RegionOperations.RegionOperationsClient)\> \> RegionOperations.RegionOperationsClient

## Inherited Members

[ClientBase<RegionOperations.RegionOperationsClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### RegionOperationsClient()

```
protected RegionOperationsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### RegionOperationsClient(CallInvoker)

```
public RegionOperationsClient(CallInvoker callInvoker)
```

Creates a new client for RegionOperations that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### RegionOperationsClient(ChannelBase)

```
public RegionOperationsClient(ChannelBase channel)
```

Creates a new client for RegionOperations

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### RegionOperationsClient(ClientBase.ClientBaseConfiguration)

```
protected RegionOperationsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### Delete(DeleteRegionOperationRequest, CallOptions)

```
public virtual DeleteRegionOperationResponse Delete(DeleteRegionOperationRequest request, CallOptions options)
```

Deletes the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[DeleteRegionOperationResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationResponse)`

The response received from the server.

### Delete(DeleteRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual DeleteRegionOperationResponse Delete(DeleteRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[DeleteRegionOperationResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationResponse)`

The response received from the server.

### DeleteAsync(DeleteRegionOperationRequest, CallOptions)

```
public virtual AsyncUnaryCall<DeleteRegionOperationResponse> DeleteAsync(DeleteRegionOperationRequest request, CallOptions options)
```

Deletes the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[DeleteRegionOperationResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationResponse)>`

The call object.

### DeleteAsync(DeleteRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<DeleteRegionOperationResponse> DeleteAsync(DeleteRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[DeleteRegionOperationResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.DeleteRegionOperationResponse)>`

The call object.

### Get(GetRegionOperationRequest, CallOptions)

```
public virtual Operation Get(GetRegionOperationRequest request, CallOptions options)
```

Retrieves the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.GetRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Get(GetRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Get(GetRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.GetRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### GetAsync(GetRegionOperationRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> GetAsync(GetRegionOperationRequest request, CallOptions options)
```

Retrieves the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.GetRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### GetAsync(GetRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> GetAsync(GetRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.GetRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### List(ListRegionOperationsRequest, CallOptions)

```
public virtual OperationList List(ListRegionOperationsRequest request, CallOptions options)
```

Retrieves a list of Operation resources contained within the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionOperationsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.ListRegionOperationsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[OperationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.OperationList)`

The response received from the server.

### List(ListRegionOperationsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual OperationList List(ListRegionOperationsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves a list of Operation resources contained within the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionOperationsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.ListRegionOperationsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[OperationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.OperationList)`

The response received from the server.

### ListAsync(ListRegionOperationsRequest, CallOptions)

```
public virtual AsyncUnaryCall<OperationList> ListAsync(ListRegionOperationsRequest request, CallOptions options)
```

Retrieves a list of Operation resources contained within the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionOperationsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.ListRegionOperationsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[OperationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.OperationList)>`

The call object.

### ListAsync(ListRegionOperationsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<OperationList> ListAsync(ListRegionOperationsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves a list of Operation resources contained within the specified region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionOperationsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.ListRegionOperationsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[OperationList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.OperationList)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override RegionOperations.RegionOperationsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[RegionOperations.RegionOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.RegionOperations.RegionOperationsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.RegionOperations.RegionOperationsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Wait(WaitRegionOperationRequest, CallOptions)

```
public virtual Operation Wait(WaitRegionOperationRequest request, CallOptions options)
```

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`request`

`[WaitRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.WaitRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Wait(WaitRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Wait(WaitRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`request`

`[WaitRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.WaitRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### WaitAsync(WaitRegionOperationRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> WaitAsync(WaitRegionOperationRequest request, CallOptions options)
```

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`request`

`[WaitRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.WaitRegionOperationRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### WaitAsync(WaitRegionOperationRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> WaitAsync(WaitRegionOperationRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`request`

`[WaitRegionOperationRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.WaitRegionOperationRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
