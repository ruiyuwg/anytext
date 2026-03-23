-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class SecurityPolicies.SecurityPoliciesClient (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class SecurityPolicies.SecurityPoliciesClient : ClientBase<SecurityPolicies.SecurityPoliciesClient>
```

Reference documentation and code samples for the Compute Engine v1 API class SecurityPolicies.SecurityPoliciesClient.

Client for SecurityPolicies

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[SecurityPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicies)[SecurityPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicies.SecurityPoliciesClient) \> SecurityPolicies.SecurityPoliciesClient

## Inherited Members

[ClientBase<SecurityPolicies.SecurityPoliciesClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### SecurityPoliciesClient()

```
protected SecurityPoliciesClient()
```

Protected parameterless constructor to allow creation of test doubles.

### SecurityPoliciesClient(CallInvoker)

```
public SecurityPoliciesClient(CallInvoker callInvoker)
```

Creates a new client for SecurityPolicies that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### SecurityPoliciesClient(ChannelBase)

```
public SecurityPoliciesClient(ChannelBase channel)
```

Creates a new client for SecurityPolicies

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### SecurityPoliciesClient(ClientBaseConfiguration)

```
protected SecurityPoliciesClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### AddRule(AddRuleSecurityPolicyRequest, CallOptions)

```
public virtual Operation AddRule(AddRuleSecurityPolicyRequest request, CallOptions options)
```

Inserts a rule into a security policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddRule(AddRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation AddRule(AddRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts a rule into a security policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddRuleAsync(AddRuleSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> AddRuleAsync(AddRuleSecurityPolicyRequest request, CallOptions options)
```

Inserts a rule into a security policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### AddRuleAsync(AddRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> AddRuleAsync(AddRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts a rule into a security policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### AggregatedList(AggregatedListSecurityPoliciesRequest, CallOptions)

```
public virtual SecurityPoliciesAggregatedList AggregatedList(AggregatedListSecurityPoliciesRequest request, CallOptions options)
```

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AggregatedListSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SecurityPoliciesAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesAggregatedList)`

The response received from the server.

### AggregatedList(AggregatedListSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SecurityPoliciesAggregatedList AggregatedList(AggregatedListSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AggregatedListSecurityPoliciesRequest)`  

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

`[SecurityPoliciesAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesAggregatedList)`

The response received from the server.

### AggregatedListAsync(AggregatedListSecurityPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SecurityPoliciesAggregatedList> AggregatedListAsync(AggregatedListSecurityPoliciesRequest request, CallOptions options)
```

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AggregatedListSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPoliciesAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesAggregatedList)`

The call object.

### AggregatedListAsync(AggregatedListSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SecurityPoliciesAggregatedList> AggregatedListAsync(AggregatedListSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AggregatedListSecurityPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPoliciesAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesAggregatedList)`

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

### Delete(DeleteSecurityPolicyRequest, CallOptions)

```
public virtual Operation Delete(DeleteSecurityPolicyRequest request, CallOptions options)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteSecurityPolicyRequest request, CallOptions options)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetSecurityPolicyRequest, CallOptions)

```
public virtual SecurityPolicy Get(GetSecurityPolicyRequest request, CallOptions options)
```

List all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SecurityPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicy)`

The response received from the server.

### Get(GetSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SecurityPolicy Get(GetSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

List all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetSecurityPolicyRequest)`  

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

`[SecurityPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicy)`

The response received from the server.

### GetAsync(GetSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<SecurityPolicy> GetAsync(GetSecurityPolicyRequest request, CallOptions options)
```

List all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicy)`

The call object.

### GetAsync(GetSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SecurityPolicy> GetAsync(GetSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

List all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicy)`

The call object.

### GetRule(GetRuleSecurityPolicyRequest, CallOptions)

```
public virtual SecurityPolicyRule GetRule(GetRuleSecurityPolicyRequest request, CallOptions options)
```

Gets a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SecurityPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyRule)`

The response received from the server.

### GetRule(GetRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SecurityPolicyRule GetRule(GetRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleSecurityPolicyRequest)`  

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

`[SecurityPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyRule)`

The response received from the server.

### GetRuleAsync(GetRuleSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<SecurityPolicyRule> GetRuleAsync(GetRuleSecurityPolicyRequest request, CallOptions options)
```

Gets a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyRule)`

The call object.

### GetRuleAsync(GetRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SecurityPolicyRule> GetRuleAsync(GetRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyRule)`

The call object.

### Insert(InsertSecurityPolicyRequest, CallOptions)

```
public virtual Operation Insert(InsertSecurityPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertSecurityPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListSecurityPoliciesRequest, CallOptions)

```
public virtual SecurityPolicyList List(ListSecurityPoliciesRequest request, CallOptions options)
```

List all the policies that have been configured for the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SecurityPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyList)`

The response received from the server.

### List(ListSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SecurityPolicyList List(ListSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

List all the policies that have been configured for the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListSecurityPoliciesRequest)`  

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

`[SecurityPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyList)`

The response received from the server.

### ListAsync(ListSecurityPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SecurityPolicyList> ListAsync(ListSecurityPoliciesRequest request, CallOptions options)
```

List all the policies that have been configured for the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyList)`

The call object.

### ListAsync(ListSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SecurityPolicyList> ListAsync(ListSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

List all the policies that have been configured for the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListSecurityPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicyList)`

The call object.

### ListPreconfiguredExpressionSets(ListPreconfiguredExpressionSetsSecurityPoliciesRequest, CallOptions)

```
public virtual SecurityPoliciesListPreconfiguredExpressionSetsResponse ListPreconfiguredExpressionSets(ListPreconfiguredExpressionSetsSecurityPoliciesRequest request, CallOptions options)
```

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

**Parameters**

**Name**

**Description**

`request`

`[ListPreconfiguredExpressionSetsSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListPreconfiguredExpressionSetsSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SecurityPoliciesListPreconfiguredExpressionSetsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesListPreconfiguredExpressionSetsResponse)`

The response received from the server.

### ListPreconfiguredExpressionSets(ListPreconfiguredExpressionSetsSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual SecurityPoliciesListPreconfiguredExpressionSetsResponse ListPreconfiguredExpressionSets(ListPreconfiguredExpressionSetsSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

**Parameters**

**Name**

**Description**

`request`

`[ListPreconfiguredExpressionSetsSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListPreconfiguredExpressionSetsSecurityPoliciesRequest)`  

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

`[SecurityPoliciesListPreconfiguredExpressionSetsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesListPreconfiguredExpressionSetsResponse)`

The response received from the server.

### ListPreconfiguredExpressionSetsAsync(ListPreconfiguredExpressionSetsSecurityPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SecurityPoliciesListPreconfiguredExpressionSetsResponse> ListPreconfiguredExpressionSetsAsync(ListPreconfiguredExpressionSetsSecurityPoliciesRequest request, CallOptions options)
```

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

**Parameters**

**Name**

**Description**

`request`

`[ListPreconfiguredExpressionSetsSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListPreconfiguredExpressionSetsSecurityPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPoliciesListPreconfiguredExpressionSetsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesListPreconfiguredExpressionSetsResponse)`

The call object.

### ListPreconfiguredExpressionSetsAsync(ListPreconfiguredExpressionSetsSecurityPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<SecurityPoliciesListPreconfiguredExpressionSetsResponse> ListPreconfiguredExpressionSetsAsync(ListPreconfiguredExpressionSetsSecurityPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

**Parameters**

**Name**

**Description**

`request`

`[ListPreconfiguredExpressionSetsSecurityPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListPreconfiguredExpressionSetsSecurityPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[SecurityPoliciesListPreconfiguredExpressionSetsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPoliciesListPreconfiguredExpressionSetsResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override SecurityPolicies.SecurityPoliciesClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[SecurityPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicies)[SecurityPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SecurityPolicies.SecurityPoliciesClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.SecurityPolicies.SecurityPoliciesClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchSecurityPolicyRequest, CallOptions)

```
public virtual Operation Patch(PatchSecurityPolicyRequest request, CallOptions options)
```

Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

**Parameters**

**Name**

**Description**

`request`

`[PatchSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

**Parameters**

**Name**

**Description**

`request`

`[PatchSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchSecurityPolicyRequest request, CallOptions options)
```

Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

**Parameters**

**Name**

**Description**

`request`

`[PatchSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

**Parameters**

**Name**

**Description**

`request`

`[PatchSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchRule(PatchRuleSecurityPolicyRequest, CallOptions)

```
public virtual Operation PatchRule(PatchRuleSecurityPolicyRequest request, CallOptions options)
```

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchRule(PatchRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation PatchRule(PatchRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchRuleAsync(PatchRuleSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchRuleAsync(PatchRuleSecurityPolicyRequest request, CallOptions options)
```

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchRuleAsync(PatchRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchRuleAsync(PatchRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### RemoveRule(RemoveRuleSecurityPolicyRequest, CallOptions)

```
public virtual Operation RemoveRule(RemoveRuleSecurityPolicyRequest request, CallOptions options)
```

Deletes a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### RemoveRule(RemoveRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation RemoveRule(RemoveRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### RemoveRuleAsync(RemoveRuleSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> RemoveRuleAsync(RemoveRuleSecurityPolicyRequest request, CallOptions options)
```

Deletes a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### RemoveRuleAsync(RemoveRuleSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> RemoveRuleAsync(RemoveRuleSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a rule at the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetLabels(SetLabelsSecurityPolicyRequest, CallOptions)

```
public virtual Operation SetLabels(SetLabelsSecurityPolicyRequest request, CallOptions options)
```

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetLabelsSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabels(SetLabelsSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation SetLabels(SetLabelsSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetLabelsSecurityPolicyRequest)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabelsAsync(SetLabelsSecurityPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsSecurityPolicyRequest request, CallOptions options)
```

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetLabelsSecurityPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetLabelsAsync(SetLabelsSecurityPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsSecurityPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSecurityPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetLabelsSecurityPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
