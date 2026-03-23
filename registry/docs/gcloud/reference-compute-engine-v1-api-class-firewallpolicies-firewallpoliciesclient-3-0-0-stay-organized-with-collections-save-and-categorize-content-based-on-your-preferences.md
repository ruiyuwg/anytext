-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class FirewallPolicies.FirewallPoliciesClient (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class FirewallPolicies.FirewallPoliciesClient : ClientBase<FirewallPolicies.FirewallPoliciesClient>
```

Reference documentation and code samples for the Compute Engine v1 API class FirewallPolicies.FirewallPoliciesClient.

Client for FirewallPolicies

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[FirewallPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicies)[FirewallPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicies.FirewallPoliciesClient) \> FirewallPolicies.FirewallPoliciesClient

## Inherited Members

[ClientBase<FirewallPolicies.FirewallPoliciesClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

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

### FirewallPoliciesClient()

```
protected FirewallPoliciesClient()
```

Protected parameterless constructor to allow creation of test doubles.

### FirewallPoliciesClient(CallInvoker)

```
public FirewallPoliciesClient(CallInvoker callInvoker)
```

Creates a new client for FirewallPolicies that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### FirewallPoliciesClient(ChannelBase)

```
public FirewallPoliciesClient(ChannelBase channel)
```

Creates a new client for FirewallPolicies

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### FirewallPoliciesClient(ClientBaseConfiguration)

```
protected FirewallPoliciesClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### AddAssociation(AddAssociationFirewallPolicyRequest, CallOptions)

```
public virtual Operation AddAssociation(AddAssociationFirewallPolicyRequest request, CallOptions options)
```

Inserts an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddAssociation(AddAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation AddAssociation(AddAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddAssociationFirewallPolicyRequest)`  

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

### AddAssociationAsync(AddAssociationFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> AddAssociationAsync(AddAssociationFirewallPolicyRequest request, CallOptions options)
```

Inserts an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### AddAssociationAsync(AddAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> AddAssociationAsync(AddAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddAssociationFirewallPolicyRequest)`  

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

### AddRule(AddRuleFirewallPolicyRequest, CallOptions)

```
public virtual Operation AddRule(AddRuleFirewallPolicyRequest request, CallOptions options)
```

Inserts a rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### AddRule(AddRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation AddRule(AddRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts a rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleFirewallPolicyRequest)`  

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

### AddRuleAsync(AddRuleFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> AddRuleAsync(AddRuleFirewallPolicyRequest request, CallOptions options)
```

Inserts a rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### AddRuleAsync(AddRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> AddRuleAsync(AddRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Inserts a rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AddRuleFirewallPolicyRequest)`  

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

### CloneRules(CloneRulesFirewallPolicyRequest, CallOptions)

```
public virtual Operation CloneRules(CloneRulesFirewallPolicyRequest request, CallOptions options)
```

Copies rules to the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[CloneRulesFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.CloneRulesFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### CloneRules(CloneRulesFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CloneRules(CloneRulesFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Copies rules to the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[CloneRulesFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.CloneRulesFirewallPolicyRequest)`  

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

### CloneRulesAsync(CloneRulesFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CloneRulesAsync(CloneRulesFirewallPolicyRequest request, CallOptions options)
```

Copies rules to the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[CloneRulesFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.CloneRulesFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### CloneRulesAsync(CloneRulesFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CloneRulesAsync(CloneRulesFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Copies rules to the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[CloneRulesFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.CloneRulesFirewallPolicyRequest)`  

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

### CreateOperationsClientForGlobalOrganizationOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForGlobalOrganizationOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to GlobalOrganizationOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteFirewallPolicyRequest, CallOptions)

```
public virtual Operation Delete(DeleteFirewallPolicyRequest request, CallOptions options)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteFirewallPolicyRequest)`  

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

### DeleteAsync(DeleteFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteFirewallPolicyRequest request, CallOptions options)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.DeleteFirewallPolicyRequest)`  

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

### Get(GetFirewallPolicyRequest, CallOptions)

```
public virtual FirewallPolicy Get(GetFirewallPolicyRequest request, CallOptions options)
```

Returns the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicy)`

The response received from the server.

### Get(GetFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallPolicy Get(GetFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetFirewallPolicyRequest)`  

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

`[FirewallPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicy)`

The response received from the server.

### GetAssociation(GetAssociationFirewallPolicyRequest, CallOptions)

```
public virtual FirewallPolicyAssociation GetAssociation(GetAssociationFirewallPolicyRequest request, CallOptions options)
```

Gets an association with the specified name.

**Parameters**

**Name**

**Description**

`request`

`[GetAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallPolicyAssociation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyAssociation)`

The response received from the server.

### GetAssociation(GetAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallPolicyAssociation GetAssociation(GetAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets an association with the specified name.

**Parameters**

**Name**

**Description**

`request`

`[GetAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetAssociationFirewallPolicyRequest)`  

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

`[FirewallPolicyAssociation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyAssociation)`

The response received from the server.

### GetAssociationAsync(GetAssociationFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallPolicyAssociation> GetAssociationAsync(GetAssociationFirewallPolicyRequest request, CallOptions options)
```

Gets an association with the specified name.

**Parameters**

**Name**

**Description**

`request`

`[GetAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyAssociation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyAssociation)`

The call object.

### GetAssociationAsync(GetAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallPolicyAssociation> GetAssociationAsync(GetAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets an association with the specified name.

**Parameters**

**Name**

**Description**

`request`

`[GetAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetAssociationFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyAssociation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyAssociation)`

The call object.

### GetAsync(GetFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallPolicy> GetAsync(GetFirewallPolicyRequest request, CallOptions options)
```

Returns the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicy)`

The call object.

### GetAsync(GetFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallPolicy> GetAsync(GetFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicy)`

The call object.

### GetIamPolicy(GetIamPolicyFirewallPolicyRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicyFirewallPolicyRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetIamPolicyFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicyFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicyFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetIamPolicyFirewallPolicyRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicyFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyFirewallPolicyRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetIamPolicyFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### GetIamPolicyAsync(GetIamPolicyFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetIamPolicyFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### GetRule(GetRuleFirewallPolicyRequest, CallOptions)

```
public virtual FirewallPolicyRule GetRule(GetRuleFirewallPolicyRequest request, CallOptions options)
```

Gets a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The response received from the server.

### GetRule(GetRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallPolicyRule GetRule(GetRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleFirewallPolicyRequest)`  

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

`[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The response received from the server.

### GetRuleAsync(GetRuleFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallPolicyRule> GetRuleAsync(GetRuleFirewallPolicyRequest request, CallOptions options)
```

Gets a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The call object.

### GetRuleAsync(GetRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallPolicyRule> GetRuleAsync(GetRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.GetRuleFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The call object.

### Insert(InsertFirewallPolicyRequest, CallOptions)

```
public virtual Operation Insert(InsertFirewallPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertFirewallPolicyRequest)`  

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

### InsertAsync(InsertFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertFirewallPolicyRequest request, CallOptions options)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.InsertFirewallPolicyRequest)`  

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

### List(ListFirewallPoliciesRequest, CallOptions)

```
public virtual FirewallPolicyList List(ListFirewallPoliciesRequest request, CallOptions options)
```

Lists all the policies that have been configured for the specified folder or organization.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListFirewallPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyList)`

The response received from the server.

### List(ListFirewallPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallPolicyList List(ListFirewallPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the policies that have been configured for the specified folder or organization.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListFirewallPoliciesRequest)`  

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

`[FirewallPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyList)`

The response received from the server.

### ListAssociations(ListAssociationsFirewallPolicyRequest, CallOptions)

```
public virtual FirewallPoliciesListAssociationsResponse ListAssociations(ListAssociationsFirewallPolicyRequest request, CallOptions options)
```

Lists associations of a specified target, i.e., organization or folder.

**Parameters**

**Name**

**Description**

`request`

`[ListAssociationsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListAssociationsFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallPoliciesListAssociationsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPoliciesListAssociationsResponse)`

The response received from the server.

### ListAssociations(ListAssociationsFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallPoliciesListAssociationsResponse ListAssociations(ListAssociationsFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists associations of a specified target, i.e., organization or folder.

**Parameters**

**Name**

**Description**

`request`

`[ListAssociationsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListAssociationsFirewallPolicyRequest)`  

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

`[FirewallPoliciesListAssociationsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPoliciesListAssociationsResponse)`

The response received from the server.

### ListAssociationsAsync(ListAssociationsFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallPoliciesListAssociationsResponse> ListAssociationsAsync(ListAssociationsFirewallPolicyRequest request, CallOptions options)
```

Lists associations of a specified target, i.e., organization or folder.

**Parameters**

**Name**

**Description**

`request`

`[ListAssociationsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListAssociationsFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPoliciesListAssociationsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPoliciesListAssociationsResponse)`

The call object.

### ListAssociationsAsync(ListAssociationsFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallPoliciesListAssociationsResponse> ListAssociationsAsync(ListAssociationsFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists associations of a specified target, i.e., organization or folder.

**Parameters**

**Name**

**Description**

`request`

`[ListAssociationsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListAssociationsFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPoliciesListAssociationsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPoliciesListAssociationsResponse)`

The call object.

### ListAsync(ListFirewallPoliciesRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallPolicyList> ListAsync(ListFirewallPoliciesRequest request, CallOptions options)
```

Lists all the policies that have been configured for the specified folder or organization.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListFirewallPoliciesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyList)`

The call object.

### ListAsync(ListFirewallPoliciesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallPolicyList> ListAsync(ListFirewallPoliciesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the policies that have been configured for the specified folder or organization.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.ListFirewallPoliciesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[FirewallPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicyList)`

The call object.

### Move(MoveFirewallPolicyRequest, CallOptions)

```
public virtual Operation Move(MoveFirewallPolicyRequest request, CallOptions options)
```

Moves the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[MoveFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.MoveFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Move(MoveFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Move(MoveFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Moves the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[MoveFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.MoveFirewallPolicyRequest)`  

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

### MoveAsync(MoveFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> MoveAsync(MoveFirewallPolicyRequest request, CallOptions options)
```

Moves the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[MoveFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.MoveFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### MoveAsync(MoveFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> MoveAsync(MoveFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Moves the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[MoveFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.MoveFirewallPolicyRequest)`  

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

### NewInstance(ClientBaseConfiguration)

```
protected override FirewallPolicies.FirewallPoliciesClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[FirewallPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicies)[FirewallPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.FirewallPolicies.FirewallPoliciesClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.FirewallPolicies.FirewallPoliciesClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchFirewallPolicyRequest, CallOptions)

```
public virtual Operation Patch(PatchFirewallPolicyRequest request, CallOptions options)
```

Patches the specified policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchFirewallPolicyRequest)`  

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

### PatchAsync(PatchFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchFirewallPolicyRequest request, CallOptions options)
```

Patches the specified policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchFirewallPolicyRequest)`  

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

### PatchRule(PatchRuleFirewallPolicyRequest, CallOptions)

```
public virtual Operation PatchRule(PatchRuleFirewallPolicyRequest request, CallOptions options)
```

Patches a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchRule(PatchRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation PatchRule(PatchRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleFirewallPolicyRequest)`  

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

### PatchRuleAsync(PatchRuleFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchRuleAsync(PatchRuleFirewallPolicyRequest request, CallOptions options)
```

Patches a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchRuleAsync(PatchRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchRuleAsync(PatchRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.PatchRuleFirewallPolicyRequest)`  

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

### RemoveAssociation(RemoveAssociationFirewallPolicyRequest, CallOptions)

```
public virtual Operation RemoveAssociation(RemoveAssociationFirewallPolicyRequest request, CallOptions options)
```

Removes an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[RemoveAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### RemoveAssociation(RemoveAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation RemoveAssociation(RemoveAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Removes an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[RemoveAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveAssociationFirewallPolicyRequest)`  

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

### RemoveAssociationAsync(RemoveAssociationFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> RemoveAssociationAsync(RemoveAssociationFirewallPolicyRequest request, CallOptions options)
```

Removes an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[RemoveAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveAssociationFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### RemoveAssociationAsync(RemoveAssociationFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> RemoveAssociationAsync(RemoveAssociationFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Removes an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[RemoveAssociationFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveAssociationFirewallPolicyRequest)`  

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

### RemoveRule(RemoveRuleFirewallPolicyRequest, CallOptions)

```
public virtual Operation RemoveRule(RemoveRuleFirewallPolicyRequest request, CallOptions options)
```

Deletes a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### RemoveRule(RemoveRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation RemoveRule(RemoveRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleFirewallPolicyRequest)`  

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

### RemoveRuleAsync(RemoveRuleFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> RemoveRuleAsync(RemoveRuleFirewallPolicyRequest request, CallOptions options)
```

Deletes a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### RemoveRuleAsync(RemoveRuleFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> RemoveRuleAsync(RemoveRuleFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.RemoveRuleFirewallPolicyRequest)`  

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

### SetIamPolicy(SetIamPolicyFirewallPolicyRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicyFirewallPolicyRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetIamPolicyFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicyFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicyFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetIamPolicyFirewallPolicyRequest)`  

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

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicyFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyFirewallPolicyRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetIamPolicyFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### SetIamPolicyAsync(SetIamPolicyFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.SetIamPolicyFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### TestIamPermissions(TestIamPermissionsFirewallPolicyRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsFirewallPolicyRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestIamPermissionsFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestIamPermissionsFirewallPolicyRequest)`  

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

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsFirewallPolicyRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsFirewallPolicyRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestIamPermissionsFirewallPolicyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsFirewallPolicyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsFirewallPolicyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestIamPermissionsFirewallPolicyRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
