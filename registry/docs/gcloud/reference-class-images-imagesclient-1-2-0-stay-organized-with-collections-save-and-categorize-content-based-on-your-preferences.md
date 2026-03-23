-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class Images.ImagesClient (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class ImagesClient : ClientBase<Images.ImagesClient>
```

Client for Images

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[Images.ImagesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Images.ImagesClient)\> \> Images.ImagesClient

## Inherited Members

[ClientBase<Images.ImagesClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### ImagesClient()

```
protected ImagesClient()
```

Protected parameterless constructor to allow creation of test doubles.

### ImagesClient(CallInvoker)

```
public ImagesClient(CallInvoker callInvoker)
```

Creates a new client for Images that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### ImagesClient(ChannelBase)

```
public ImagesClient(ChannelBase channel)
```

Creates a new client for Images

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### ImagesClient(ClientBase.ClientBaseConfiguration)

```
protected ImagesClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### CreateOperationsClientForGlobalOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForGlobalOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to GlobalOperations.

**Returns**

**Type**

**Description**

`[Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteImageRequest, CallOptions)

```
public virtual Operation Delete(DeleteImageRequest request, CallOptions options)
```

Deletes the specified image.

**Parameters**

**Name**

**Description**

`request`

`[DeleteImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeleteImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Delete(DeleteImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified image.

**Parameters**

**Name**

**Description**

`request`

`[DeleteImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeleteImageRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteImageRequest request, CallOptions options)
```

Deletes the specified image.

**Parameters**

**Name**

**Description**

`request`

`[DeleteImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeleteImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### DeleteAsync(DeleteImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified image.

**Parameters**

**Name**

**Description**

`request`

`[DeleteImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeleteImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### Deprecate(DeprecateImageRequest, CallOptions)

```
public virtual Operation Deprecate(DeprecateImageRequest request, CallOptions options)
```

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

**Parameters**

**Name**

**Description**

`request`

`[DeprecateImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeprecateImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Deprecate(DeprecateImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Deprecate(DeprecateImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

**Parameters**

**Name**

**Description**

`request`

`[DeprecateImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeprecateImageRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeprecateAsync(DeprecateImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeprecateAsync(DeprecateImageRequest request, CallOptions options)
```

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

**Parameters**

**Name**

**Description**

`request`

`[DeprecateImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeprecateImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### DeprecateAsync(DeprecateImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeprecateAsync(DeprecateImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

**Parameters**

**Name**

**Description**

`request`

`[DeprecateImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.DeprecateImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### Get(GetImageRequest, CallOptions)

```
public virtual Image Get(GetImageRequest request, CallOptions options)
```

Returns the specified image. Gets a list of available images by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)`

The response received from the server.

### Get(GetImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Image Get(GetImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified image. Gets a list of available images by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetImageRequest)`  

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

`[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)`

The response received from the server.

### GetAsync(GetImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Image> GetAsync(GetImageRequest request, CallOptions options)
```

Returns the specified image. Gets a list of available images by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)>`

The call object.

### GetAsync(GetImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Image> GetAsync(GetImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified image. Gets a list of available images by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)>`

The call object.

### GetFromFamily(GetFromFamilyImageRequest, CallOptions)

```
public virtual Image GetFromFamily(GetFromFamilyImageRequest request, CallOptions options)
```

Returns the latest image that is part of an image family and is not deprecated.

**Parameters**

**Name**

**Description**

`request`

`[GetFromFamilyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetFromFamilyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)`

The response received from the server.

### GetFromFamily(GetFromFamilyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Image GetFromFamily(GetFromFamilyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns the latest image that is part of an image family and is not deprecated.

**Parameters**

**Name**

**Description**

`request`

`[GetFromFamilyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetFromFamilyImageRequest)`  

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

`[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)`

The response received from the server.

### GetFromFamilyAsync(GetFromFamilyImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Image> GetFromFamilyAsync(GetFromFamilyImageRequest request, CallOptions options)
```

Returns the latest image that is part of an image family and is not deprecated.

**Parameters**

**Name**

**Description**

`request`

`[GetFromFamilyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetFromFamilyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)>`

The call object.

### GetFromFamilyAsync(GetFromFamilyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Image> GetFromFamilyAsync(GetFromFamilyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns the latest image that is part of an image family and is not deprecated.

**Parameters**

**Name**

**Description**

`request`

`[GetFromFamilyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetFromFamilyImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Image](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Image)>`

The call object.

### GetIamPolicy(GetIamPolicyImageRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicyImageRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetIamPolicyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetIamPolicyImageRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicyImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyImageRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetIamPolicyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### GetIamPolicyAsync(GetIamPolicyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.GetIamPolicyImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### Insert(InsertImageRequest, CallOptions)

```
public virtual Operation Insert(InsertImageRequest request, CallOptions options)
```

Creates an image in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.InsertImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Insert(InsertImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates an image in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.InsertImageRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertImageRequest request, CallOptions options)
```

Creates an image in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.InsertImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### InsertAsync(InsertImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates an image in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.InsertImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### List(ListImagesRequest, CallOptions)

```
public virtual ImageList List(ListImagesRequest request, CallOptions options)
```

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

**Parameters**

**Name**

**Description**

`request`

`[ListImagesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ListImagesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ImageList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ImageList)`

The response received from the server.

### List(ListImagesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ImageList List(ListImagesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

**Parameters**

**Name**

**Description**

`request`

`[ListImagesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ListImagesRequest)`  

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

`[ImageList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ImageList)`

The response received from the server.

### ListAsync(ListImagesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ImageList> ListAsync(ListImagesRequest request, CallOptions options)
```

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

**Parameters**

**Name**

**Description**

`request`

`[ListImagesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ListImagesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ImageList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ImageList)>`

The call object.

### ListAsync(ListImagesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ImageList> ListAsync(ListImagesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

**Parameters**

**Name**

**Description**

`request`

`[ListImagesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ListImagesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ImageList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ImageList)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override Images.ImagesClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[Images.ImagesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Images.ImagesClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.Images.ImagesClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchImageRequest, CallOptions)

```
public virtual Operation Patch(PatchImageRequest request, CallOptions options)
```

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

**Parameters**

**Name**

**Description**

`request`

`[PatchImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.PatchImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Patch(PatchImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

**Parameters**

**Name**

**Description**

`request`

`[PatchImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.PatchImageRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchImageRequest request, CallOptions options)
```

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

**Parameters**

**Name**

**Description**

`request`

`[PatchImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.PatchImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### PatchAsync(PatchImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

**Parameters**

**Name**

**Description**

`request`

`[PatchImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.PatchImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### SetIamPolicy(SetIamPolicyImageRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicyImageRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetIamPolicyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetIamPolicyImageRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicyImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyImageRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetIamPolicyImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### SetIamPolicyAsync(SetIamPolicyImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetIamPolicyImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### SetLabels(SetLabelsImageRequest, CallOptions)

```
public virtual Operation SetLabels(SetLabelsImageRequest request, CallOptions options)
```

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetLabelsImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabels(SetLabelsImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation SetLabels(SetLabelsImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetLabelsImageRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabelsAsync(SetLabelsImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsImageRequest request, CallOptions options)
```

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetLabelsImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### SetLabelsAsync(SetLabelsImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.SetLabelsImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### TestIamPermissions(TestIamPermissionsImageRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsImageRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestIamPermissionsImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestIamPermissionsImageRequest)`  

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

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsImageRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsImageRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestIamPermissionsImageRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsImageRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsImageRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsImageRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestIamPermissionsImageRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
