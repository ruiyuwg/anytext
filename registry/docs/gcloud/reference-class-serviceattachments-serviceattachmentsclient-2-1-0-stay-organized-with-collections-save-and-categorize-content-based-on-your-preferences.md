-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ServiceAttachments.ServiceAttachmentsClient (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class ServiceAttachmentsClient : ClientBase<ServiceAttachments.ServiceAttachmentsClient>
```

Client for ServiceAttachments

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[ServiceAttachments.ServiceAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachments.ServiceAttachmentsClient)\> \> ServiceAttachments.ServiceAttachmentsClient

## Inherited Members

[ClientBase<ServiceAttachments.ServiceAttachmentsClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### ServiceAttachmentsClient()

```
protected ServiceAttachmentsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### ServiceAttachmentsClient(CallInvoker)

```
public ServiceAttachmentsClient(CallInvoker callInvoker)
```

Creates a new client for ServiceAttachments that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### ServiceAttachmentsClient(ChannelBase)

```
public ServiceAttachmentsClient(ChannelBase channel)
```

Creates a new client for ServiceAttachments

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### ServiceAttachmentsClient(ClientBase.ClientBaseConfiguration)

```
protected ServiceAttachmentsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### AggregatedList(AggregatedListServiceAttachmentsRequest, CallOptions)

```
public virtual ServiceAttachmentAggregatedList AggregatedList(AggregatedListServiceAttachmentsRequest request, CallOptions options)
```

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.AggregatedListServiceAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ServiceAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentAggregatedList)`

The response received from the server.

### AggregatedList(AggregatedListServiceAttachmentsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ServiceAttachmentAggregatedList AggregatedList(AggregatedListServiceAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.AggregatedListServiceAttachmentsRequest)`  

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

`[ServiceAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentAggregatedList)`

The response received from the server.

### AggregatedListAsync(AggregatedListServiceAttachmentsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ServiceAttachmentAggregatedList> AggregatedListAsync(AggregatedListServiceAttachmentsRequest request, CallOptions options)
```

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.AggregatedListServiceAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentAggregatedList)>`

The call object.

### AggregatedListAsync(AggregatedListServiceAttachmentsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ServiceAttachmentAggregatedList> AggregatedListAsync(AggregatedListServiceAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.AggregatedListServiceAttachmentsRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentAggregatedList)>`

The call object.

### CreateOperationsClientForRegionOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForRegionOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to RegionOperations.

**Returns**

**Type**

**Description**

`[Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteServiceAttachmentRequest, CallOptions)

```
public virtual Operation Delete(DeleteServiceAttachmentRequest request, CallOptions options)
```

Deletes the specified ServiceAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.DeleteServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Delete(DeleteServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified ServiceAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.DeleteServiceAttachmentRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteServiceAttachmentRequest request, CallOptions options)
```

Deletes the specified ServiceAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.DeleteServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### DeleteAsync(DeleteServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified ServiceAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.DeleteServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### Get(GetServiceAttachmentRequest, CallOptions)

```
public virtual ServiceAttachment Get(GetServiceAttachmentRequest request, CallOptions options)
```

Returns the specified ServiceAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ServiceAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachment)`

The response received from the server.

### Get(GetServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ServiceAttachment Get(GetServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified ServiceAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetServiceAttachmentRequest)`  

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

`[ServiceAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachment)`

The response received from the server.

### GetAsync(GetServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<ServiceAttachment> GetAsync(GetServiceAttachmentRequest request, CallOptions options)
```

Returns the specified ServiceAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachment)>`

The call object.

### GetAsync(GetServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ServiceAttachment> GetAsync(GetServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified ServiceAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachment)>`

The call object.

### GetIamPolicy(GetIamPolicyServiceAttachmentRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicyServiceAttachmentRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetIamPolicyServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicyServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicyServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetIamPolicyServiceAttachmentRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicyServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyServiceAttachmentRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetIamPolicyServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### GetIamPolicyAsync(GetIamPolicyServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.GetIamPolicyServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### Insert(InsertServiceAttachmentRequest, CallOptions)

```
public virtual Operation Insert(InsertServiceAttachmentRequest request, CallOptions options)
```

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.InsertServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Insert(InsertServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.InsertServiceAttachmentRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertServiceAttachmentRequest request, CallOptions options)
```

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.InsertServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### InsertAsync(InsertServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.InsertServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### List(ListServiceAttachmentsRequest, CallOptions)

```
public virtual ServiceAttachmentList List(ListServiceAttachmentsRequest request, CallOptions options)
```

Lists the ServiceAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ListServiceAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ServiceAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentList)`

The response received from the server.

### List(ListServiceAttachmentsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ServiceAttachmentList List(ListServiceAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Lists the ServiceAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ListServiceAttachmentsRequest)`  

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

`[ServiceAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentList)`

The response received from the server.

### ListAsync(ListServiceAttachmentsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ServiceAttachmentList> ListAsync(ListServiceAttachmentsRequest request, CallOptions options)
```

Lists the ServiceAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ListServiceAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentList)>`

The call object.

### ListAsync(ListServiceAttachmentsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ServiceAttachmentList> ListAsync(ListServiceAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Lists the ServiceAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListServiceAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ListServiceAttachmentsRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ServiceAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachmentList)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override ServiceAttachments.ServiceAttachmentsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[ServiceAttachments.ServiceAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.ServiceAttachments.ServiceAttachmentsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.ServiceAttachments.ServiceAttachmentsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchServiceAttachmentRequest, CallOptions)

```
public virtual Operation Patch(PatchServiceAttachmentRequest request, CallOptions options)
```

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.PatchServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Patch(PatchServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.PatchServiceAttachmentRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchServiceAttachmentRequest request, CallOptions options)
```

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.PatchServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### PatchAsync(PatchServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.PatchServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### SetIamPolicy(SetIamPolicyServiceAttachmentRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicyServiceAttachmentRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.SetIamPolicyServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicyServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicyServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.SetIamPolicyServiceAttachmentRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicyServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyServiceAttachmentRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.SetIamPolicyServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### SetIamPolicyAsync(SetIamPolicyServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.SetIamPolicyServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### TestIamPermissions(TestIamPermissionsServiceAttachmentRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsServiceAttachmentRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestIamPermissionsServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestIamPermissionsServiceAttachmentRequest)`  

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

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsServiceAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsServiceAttachmentRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestIamPermissionsServiceAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsServiceAttachmentRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsServiceAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsServiceAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestIamPermissionsServiceAttachmentRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
