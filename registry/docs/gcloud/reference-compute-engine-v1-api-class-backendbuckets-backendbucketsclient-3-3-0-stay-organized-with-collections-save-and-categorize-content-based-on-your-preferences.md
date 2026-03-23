-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class BackendBuckets.BackendBucketsClient (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class BackendBuckets.BackendBucketsClient : ClientBase<BackendBuckets.BackendBucketsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class BackendBuckets.BackendBucketsClient.

Client for BackendBuckets

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[BackendBuckets](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBuckets)[BackendBucketsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBuckets.BackendBucketsClient) \> BackendBuckets.BackendBucketsClient

## Inherited Members

[ClientBase<BackendBuckets.BackendBucketsClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### BackendBucketsClient()

```
protected BackendBucketsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### BackendBucketsClient(CallInvoker)

```
public BackendBucketsClient(CallInvoker callInvoker)
```

Creates a new client for BackendBuckets that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### BackendBucketsClient(ChannelBase)

```
public BackendBucketsClient(ChannelBase channel)
```

Creates a new client for BackendBuckets

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### BackendBucketsClient(ClientBaseConfiguration)

```
protected BackendBucketsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### AddSignedUrlKey(AddSignedUrlKeyBackendBucketRequest, CallOptions)

```
public virtual Operation AddSignedUrlKey(AddSignedUrlKeyBackendBucketRequest request, CallOptions options)
```

Adds a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[AddSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.AddSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddSignedUrlKey(AddSignedUrlKeyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation AddSignedUrlKey(AddSignedUrlKeyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[AddSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.AddSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddSignedUrlKeyAsync(AddSignedUrlKeyBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> AddSignedUrlKeyAsync(AddSignedUrlKeyBackendBucketRequest request, CallOptions options)
```

Adds a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[AddSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.AddSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### AddSignedUrlKeyAsync(AddSignedUrlKeyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> AddSignedUrlKeyAsync(AddSignedUrlKeyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[AddSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.AddSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### CreateOperationsClientForGlobalOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForGlobalOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to GlobalOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteBackendBucketRequest, CallOptions)

```
public virtual Operation Delete(DeleteBackendBucketRequest request, CallOptions options)
```

Deletes the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteBackendBucketRequest request, CallOptions options)
```

Deletes the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteSignedUrlKey(DeleteSignedUrlKeyBackendBucketRequest, CallOptions)

```
public virtual Operation DeleteSignedUrlKey(DeleteSignedUrlKeyBackendBucketRequest request, CallOptions options)
```

Deletes a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteSignedUrlKey(DeleteSignedUrlKeyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation DeleteSignedUrlKey(DeleteSignedUrlKeyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteSignedUrlKeyAsync(DeleteSignedUrlKeyBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteSignedUrlKeyAsync(DeleteSignedUrlKeyBackendBucketRequest request, CallOptions options)
```

Deletes a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteSignedUrlKeyAsync(DeleteSignedUrlKeyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteSignedUrlKeyAsync(DeleteSignedUrlKeyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a key for validating requests with signed URLs for this backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSignedUrlKeyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.DeleteSignedUrlKeyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetBackendBucketRequest, CallOptions)

```
public virtual BackendBucket Get(GetBackendBucketRequest request, CallOptions options)
```

Returns the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[GetBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[BackendBucket](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucket)`

The response received from the server.

### Get(GetBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual BackendBucket Get(GetBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[GetBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[BackendBucket](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucket)`

The response received from the server.

### GetAsync(GetBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<BackendBucket> GetAsync(GetBackendBucketRequest request, CallOptions options)
```

Returns the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[GetBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[BackendBucket](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucket)`

The call object.

### GetAsync(GetBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<BackendBucket> GetAsync(GetBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified BackendBucket resource.

**Parameters**

**Name**

**Description**

`request`

`[GetBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[BackendBucket](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucket)`

The call object.

### GetIamPolicy(GetIamPolicyBackendBucketRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicyBackendBucketRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicyBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyBackendBucketRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### GetIamPolicyAsync(GetIamPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### Insert(InsertBackendBucketRequest, CallOptions)

```
public virtual Operation Insert(InsertBackendBucketRequest request, CallOptions options)
```

Creates a BackendBucket resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.InsertBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a BackendBucket resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.InsertBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertBackendBucketRequest request, CallOptions options)
```

Creates a BackendBucket resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.InsertBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a BackendBucket resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.InsertBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListBackendBucketsRequest, CallOptions)

```
public virtual BackendBucketList List(ListBackendBucketsRequest request, CallOptions options)
```

Retrieves the list of BackendBucket resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListBackendBucketsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListBackendBucketsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[BackendBucketList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucketList)`

The response received from the server.

### List(ListBackendBucketsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual BackendBucketList List(ListBackendBucketsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of BackendBucket resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListBackendBucketsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListBackendBucketsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[BackendBucketList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucketList)`

The response received from the server.

### ListAsync(ListBackendBucketsRequest, CallOptions)

```
public virtual AsyncUnaryCall<BackendBucketList> ListAsync(ListBackendBucketsRequest request, CallOptions options)
```

Retrieves the list of BackendBucket resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListBackendBucketsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListBackendBucketsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[BackendBucketList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucketList)`

The call object.

### ListAsync(ListBackendBucketsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<BackendBucketList> ListAsync(ListBackendBucketsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of BackendBucket resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListBackendBucketsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListBackendBucketsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[BackendBucketList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBucketList)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override BackendBuckets.BackendBucketsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[BackendBuckets](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBuckets)[BackendBucketsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.BackendBuckets.BackendBucketsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.BackendBuckets.BackendBucketsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchBackendBucketRequest, CallOptions)

```
public virtual Operation Patch(PatchBackendBucketRequest request, CallOptions options)
```

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.PatchBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.PatchBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchBackendBucketRequest request, CallOptions options)
```

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.PatchBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.PatchBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetEdgeSecurityPolicy(SetEdgeSecurityPolicyBackendBucketRequest, CallOptions)

```
public virtual Operation SetEdgeSecurityPolicy(SetEdgeSecurityPolicyBackendBucketRequest request, CallOptions options)
```

Sets the edge security policy for the specified backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[SetEdgeSecurityPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetEdgeSecurityPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetEdgeSecurityPolicy(SetEdgeSecurityPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation SetEdgeSecurityPolicy(SetEdgeSecurityPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the edge security policy for the specified backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[SetEdgeSecurityPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetEdgeSecurityPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetEdgeSecurityPolicyAsync(SetEdgeSecurityPolicyBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SetEdgeSecurityPolicyAsync(SetEdgeSecurityPolicyBackendBucketRequest request, CallOptions options)
```

Sets the edge security policy for the specified backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[SetEdgeSecurityPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetEdgeSecurityPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetEdgeSecurityPolicyAsync(SetEdgeSecurityPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SetEdgeSecurityPolicyAsync(SetEdgeSecurityPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the edge security policy for the specified backend bucket.

**Parameters**

**Name**

**Description**

`request`

`[SetEdgeSecurityPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetEdgeSecurityPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetIamPolicy(SetIamPolicyBackendBucketRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicyBackendBucketRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicyBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyBackendBucketRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### SetIamPolicyAsync(SetIamPolicyBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.SetIamPolicyBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### TestIamPermissions(TestIamPermissionsBackendBucketRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsBackendBucketRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestIamPermissionsBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestIamPermissionsBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsBackendBucketRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestIamPermissionsBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestIamPermissionsBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

### Update(UpdateBackendBucketRequest, CallOptions)

```
public virtual Operation Update(UpdateBackendBucketRequest request, CallOptions options)
```

Updates the specified BackendBucket resource with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.UpdateBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Update(UpdateBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Update(UpdateBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified BackendBucket resource with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.UpdateBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### UpdateAsync(UpdateBackendBucketRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateAsync(UpdateBackendBucketRequest request, CallOptions options)
```

Updates the specified BackendBucket resource with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.UpdateBackendBucketRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### UpdateAsync(UpdateBackendBucketRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateAsync(UpdateBackendBucketRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified BackendBucket resource with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBackendBucketRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.UpdateBackendBucketRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Operation)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
