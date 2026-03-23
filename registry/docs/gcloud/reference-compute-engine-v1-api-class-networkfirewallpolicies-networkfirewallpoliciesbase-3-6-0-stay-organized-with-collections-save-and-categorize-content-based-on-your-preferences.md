-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NetworkFirewallPolicies.NetworkFirewallPoliciesBase (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
[BindServiceMethod(typeof(NetworkFirewallPolicies), "BindService")]
public abstract class NetworkFirewallPolicies.NetworkFirewallPoliciesBase
```

Reference documentation and code samples for the Compute Engine v1 API class NetworkFirewallPolicies.NetworkFirewallPoliciesBase.

Base class for server-side implementations of NetworkFirewallPolicies

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NetworkFirewallPolicies.NetworkFirewallPoliciesBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Methods

### AddAssociation(AddAssociationNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> AddAssociation(AddAssociationNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Inserts an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddAssociationNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.AddAssociationNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### AddPacketMirroringRule(AddPacketMirroringRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> AddPacketMirroringRule(AddPacketMirroringRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Inserts a packet mirroring rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddPacketMirroringRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.AddPacketMirroringRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### AddRule(AddRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> AddRule(AddRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Inserts a rule into a firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[AddRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.AddRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### AggregatedList(AggregatedListNetworkFirewallPoliciesRequest, ServerCallContext)

```
public virtual Task<NetworkFirewallPolicyAggregatedList> AggregatedList(AggregatedListNetworkFirewallPoliciesRequest request, ServerCallContext context)
```

Retrieves an aggregated list of network firewall policies, listing network firewall policies from all applicable scopes (global and regional) and grouping the results per scope. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.AggregatedListNetworkFirewallPoliciesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkFirewallPolicyAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.NetworkFirewallPolicyAggregatedList)`

The response to send back to the client (wrapped by a task).

### CloneRules(CloneRulesNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> CloneRules(CloneRulesNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Copies rules to the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[CloneRulesNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.CloneRulesNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### Delete(DeleteNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> Delete(DeleteNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Deletes the specified policy.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.DeleteNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### Get(GetNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<FirewallPolicy> Get(GetNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Returns the specified network firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.GetNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[FirewallPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.FirewallPolicy)`

The response to send back to the client (wrapped by a task).

### GetAssociation(GetAssociationNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<FirewallPolicyAssociation> GetAssociation(GetAssociationNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Gets an association with the specified name.

**Parameters**

**Name**

**Description**

`request`

`[GetAssociationNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.GetAssociationNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[FirewallPolicyAssociation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.FirewallPolicyAssociation)`

The response to send back to the client (wrapped by a task).

### GetIamPolicy(GetIamPolicyNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Policy> GetIamPolicy(GetIamPolicyNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Policy)`

The response to send back to the client (wrapped by a task).

### GetPacketMirroringRule(GetPacketMirroringRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<FirewallPolicyRule> GetPacketMirroringRule(GetPacketMirroringRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Gets a packet mirroring rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetPacketMirroringRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.GetPacketMirroringRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The response to send back to the client (wrapped by a task).

### GetRule(GetRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<FirewallPolicyRule> GetRule(GetRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Gets a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[GetRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.GetRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[FirewallPolicyRule](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.FirewallPolicyRule)`

The response to send back to the client (wrapped by a task).

### Insert(InsertNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> Insert(InsertNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Creates a new policy in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.InsertNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### List(ListNetworkFirewallPoliciesRequest, ServerCallContext)

```
public virtual Task<FirewallPolicyList> List(ListNetworkFirewallPoliciesRequest request, ServerCallContext context)
```

Lists all the policies that have been configured for the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkFirewallPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.ListNetworkFirewallPoliciesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[FirewallPolicyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.FirewallPolicyList)`

The response to send back to the client (wrapped by a task).

### Patch(PatchNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> Patch(PatchNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Patches the specified policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.PatchNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### PatchPacketMirroringRule(PatchPacketMirroringRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> PatchPacketMirroringRule(PatchPacketMirroringRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Patches a packet mirroring rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchPacketMirroringRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.PatchPacketMirroringRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### PatchRule(PatchRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> PatchRule(PatchRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Patches a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[PatchRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.PatchRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### RemoveAssociation(RemoveAssociationNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> RemoveAssociation(RemoveAssociationNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Removes an association for the specified firewall policy.

**Parameters**

**Name**

**Description**

`request`

`[RemoveAssociationNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.RemoveAssociationNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### RemovePacketMirroringRule(RemovePacketMirroringRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> RemovePacketMirroringRule(RemovePacketMirroringRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Deletes a packet mirroring rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemovePacketMirroringRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.RemovePacketMirroringRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### RemoveRule(RemoveRuleNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Operation> RemoveRule(RemoveRuleNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Deletes a rule of the specified priority.

**Parameters**

**Name**

**Description**

`request`

`[RemoveRuleNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.RemoveRuleNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Operation)`

The response to send back to the client (wrapped by a task).

### SetIamPolicy(SetIamPolicyNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<Policy> SetIamPolicy(SetIamPolicyNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.Policy)`

The response to send back to the client (wrapped by a task).

### TestIamPermissions(TestIamPermissionsNetworkFirewallPolicyRequest, ServerCallContext)

```
public virtual Task<TestPermissionsResponse> TestIamPermissions(TestIamPermissionsNetworkFirewallPolicyRequest request, ServerCallContext context)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkFirewallPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkFirewallPolicyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.6.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
