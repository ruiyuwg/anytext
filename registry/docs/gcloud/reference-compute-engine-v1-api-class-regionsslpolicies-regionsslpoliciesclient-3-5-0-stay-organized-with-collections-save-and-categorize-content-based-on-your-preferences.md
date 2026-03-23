-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RegionSslPolicies.RegionSslPoliciesClient (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class RegionSslPolicies.RegionSslPoliciesClient : ClientBase<RegionSslPolicies.RegionSslPoliciesClient>
```

Reference documentation and code samples for the Compute Engine v1 API class RegionSslPolicies.RegionSslPoliciesClient.

Client for RegionSslPolicies

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[RegionSslPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.RegionSslPolicies)[RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.RegionSslPolicies.RegionSslPoliciesClient) \> RegionSslPolicies.RegionSslPoliciesClient

## Inherited Members

[ClientBase<RegionSslPolicies.RegionSslPoliciesClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### RegionSslPoliciesClient()

```
protected RegionSslPoliciesClient()
```

Protected parameterless constructor to allow creation of test doubles.

### RegionSslPoliciesClient(CallInvoker)

```
public RegionSslPoliciesClient(CallInvoker callInvoker)
```

Creates a new client for RegionSslPolicies that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### RegionSslPoliciesClient(ChannelBase)

```
public RegionSslPoliciesClient(ChannelBase channel)
```

Creates a new client for RegionSslPolicies

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### RegionSslPoliciesClient(ClientBaseConfiguration)

```
protected RegionSslPoliciesClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### CreateOperationsClientForRegionOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForRegionOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to RegionOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteRegionSslPolicyRequest, CallOptions)

```
public virtual Operation Delete(DeleteRegionSslPolicyRequest request, CallOptions options)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteRegionSslPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteRegionSslPolicyRequest request, CallOptions options)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetRegionSslPolicyRequest, CallOptions)

```
public virtual SslPolicy Get(GetRegionSslPolicyRequest request, CallOptions options)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPolicy)`

The response received from the server.

### Get(GetRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SslPolicy Get(GetRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

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

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPolicy)`

The response received from the server.

### GetAsync(GetRegionSslPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<SslPolicy> GetAsync(GetRegionSslPolicyRequest request, CallOptions options)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPolicy)`

The call object.

### GetAsync(GetRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SslPolicy> GetAsync(GetRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPolicy)`

The call object.

### Insert(InsertRegionSslPolicyRequest, CallOptions)

```
public virtual Operation Insert(InsertRegionSslPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertRegionSslPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertRegionSslPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListRegionSslPoliciesRequest, CallOptions)

```
public virtual SslPoliciesList List(ListRegionSslPoliciesRequest request, CallOptions options)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesList)`

The response received from the server.

### List(ListRegionSslPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SslPoliciesList List(ListRegionSslPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

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

`[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesList)`

The response received from the server.

### ListAsync(ListRegionSslPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SslPoliciesList> ListAsync(ListRegionSslPoliciesRequest request, CallOptions options)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesList)`

The call object.

### ListAsync(ListRegionSslPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SslPoliciesList> ListAsync(ListRegionSslPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesList)`

The call object.

### ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest, CallOptions)

```
public virtual SslPoliciesListAvailableFeaturesResponse ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest request, CallOptions options)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The response received from the server.

### ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SslPoliciesListAvailableFeaturesResponse ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

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

`[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The response received from the server.

### ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest request, CallOptions options)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The call object.

### ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override RegionSslPolicies.RegionSslPoliciesClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[RegionSslPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.RegionSslPolicies)[RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.RegionSslPolicies.RegionSslPoliciesClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.RegionSslPolicies.RegionSslPoliciesClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchRegionSslPolicyRequest, CallOptions)

```
public virtual Operation Patch(PatchRegionSslPolicyRequest request, CallOptions options)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchRegionSslPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchRegionSslPolicyRequest request, CallOptions options)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchRegionSslPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchRegionSslPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
