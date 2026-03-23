-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Controls Partner v1 API - Class CloudControlsPartnerCore.CloudControlsPartnerCoreBase (1.0.0-beta02) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta02keyboard\_arrow\_down

-   [1.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/latest/Google.Cloud.CloudControlsPartner.V1.CloudControlsPartnerCore.CloudControlsPartnerCoreBase)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.2.0/Google.Cloud.CloudControlsPartner.V1.CloudControlsPartnerCore.CloudControlsPartnerCoreBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.CloudControlsPartnerCore.CloudControlsPartnerCoreBase)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.CloudControlsPartnerCore.CloudControlsPartnerCoreBase)

```
[BindServiceMethod(typeof(CloudControlsPartnerCore), "BindService")]
public abstract class CloudControlsPartnerCore.CloudControlsPartnerCoreBase
```

Reference documentation and code samples for the Cloud Controls Partner v1 API class CloudControlsPartnerCore.CloudControlsPartnerCoreBase.

Base class for server-side implementations of CloudControlsPartnerCore

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CloudControlsPartnerCore.CloudControlsPartnerCoreBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CloudControlsPartner.V1](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1)

## Assembly

Google.Cloud.CloudControlsPartner.V1.dll

## Methods

### GetCustomer(GetCustomerRequest, ServerCallContext)

```
public virtual Task<Customer> GetCustomer(GetCustomerRequest request, ServerCallContext context)
```

Gets details of a single customer

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.GetCustomerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Customer](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.Customer)`

The response to send back to the client (wrapped by a task).

### GetEkmConnections(GetEkmConnectionsRequest, ServerCallContext)

```
public virtual Task<EkmConnections> GetEkmConnections(GetEkmConnectionsRequest request, ServerCallContext context)
```

Gets the EKM connections associated with a workload

**Parameters**

**Name**

**Description**

`request`

`[GetEkmConnectionsRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.GetEkmConnectionsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EkmConnections](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.EkmConnections)`

The response to send back to the client (wrapped by a task).

### GetPartner(GetPartnerRequest, ServerCallContext)

```
public virtual Task<Partner> GetPartner(GetPartnerRequest request, ServerCallContext context)
```

Get details of a Partner.

**Parameters**

**Name**

**Description**

`request`

`[GetPartnerRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.GetPartnerRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Partner](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.Partner)`

The response to send back to the client (wrapped by a task).

### GetPartnerPermissions(GetPartnerPermissionsRequest, ServerCallContext)

```
public virtual Task<PartnerPermissions> GetPartnerPermissions(GetPartnerPermissionsRequest request, ServerCallContext context)
```

Gets the partner permissions granted for a workload

**Parameters**

**Name**

**Description**

`request`

`[GetPartnerPermissionsRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.GetPartnerPermissionsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PartnerPermissions](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.PartnerPermissions)`

The response to send back to the client (wrapped by a task).

### GetWorkload(GetWorkloadRequest, ServerCallContext)

```
public virtual Task<Workload> GetWorkload(GetWorkloadRequest request, ServerCallContext context)
```

Gets details of a single workload

**Parameters**

**Name**

**Description**

`request`

`[GetWorkloadRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.GetWorkloadRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Workload](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.Workload)`

The response to send back to the client (wrapped by a task).

### ListAccessApprovalRequests(ListAccessApprovalRequestsRequest, ServerCallContext)

```
public virtual Task<ListAccessApprovalRequestsResponse> ListAccessApprovalRequests(ListAccessApprovalRequestsRequest request, ServerCallContext context)
```

Lists access requests associated with a workload

**Parameters**

**Name**

**Description**

`request`

`[ListAccessApprovalRequestsRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListAccessApprovalRequestsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListAccessApprovalRequestsResponse](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListAccessApprovalRequestsResponse)`

The response to send back to the client (wrapped by a task).

### ListCustomers(ListCustomersRequest, ServerCallContext)

```
public virtual Task<ListCustomersResponse> ListCustomers(ListCustomersRequest request, ServerCallContext context)
```

Lists customers of a partner identified by its Google Cloud organization ID

**Parameters**

**Name**

**Description**

`request`

`[ListCustomersRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListCustomersRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListCustomersResponse](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListCustomersResponse)`

The response to send back to the client (wrapped by a task).

### ListWorkloads(ListWorkloadsRequest, ServerCallContext)

```
public virtual Task<ListWorkloadsResponse> ListWorkloads(ListWorkloadsRequest request, ServerCallContext context)
```

Lists customer workloads for a given customer org id

**Parameters**

**Name**

**Description**

`request`

`[ListWorkloadsRequest](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListWorkloadsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ListWorkloadsResponse](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.ListWorkloadsResponse)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
