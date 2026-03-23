-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Billing Budget v1 API - Class BudgetService.BudgetServiceBase (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/latest/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.6.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.4.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.3.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.2.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.0.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/1.2.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/1.1.0/Google.Cloud.Billing.Budgets.V1.BudgetService.BudgetServiceBase)

```
[BindServiceMethod(typeof(BudgetService), "BindService")]
public abstract class BudgetServiceBase
```

Reference documentation and code samples for the Cloud Billing Budget v1 API class BudgetService.BudgetServiceBase.

Base class for server-side implementations of BudgetService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> BudgetService.BudgetServiceBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Billing.Budgets.V1](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1)

## Assembly

Google.Cloud.Billing.Budgets.V1.dll

## Methods

### CreateBudget(CreateBudgetRequest, ServerCallContext)

```
public virtual Task<Budget> CreateBudget(CreateBudgetRequest request, ServerCallContext context)
```

Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.

**Parameters**

**Name**

**Description**

`request`

`[CreateBudgetRequest](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.CreateBudgetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Budget](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.Budget)>`

The response to send back to the client (wrapped by a task).

### DeleteBudget(DeleteBudgetRequest, ServerCallContext)

```
public virtual Task<Empty> DeleteBudget(DeleteBudgetRequest request, ServerCallContext context)
```

Deletes a budget. Returns successfully if already deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBudgetRequest](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.DeleteBudgetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)>`

The response to send back to the client (wrapped by a task).

### GetBudget(GetBudgetRequest, ServerCallContext)

```
public virtual Task<Budget> GetBudget(GetBudgetRequest request, ServerCallContext context)
```

Returns a budget.

WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

**Parameters**

**Name**

**Description**

`request`

`[GetBudgetRequest](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.GetBudgetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Budget](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.Budget)>`

The response to send back to the client (wrapped by a task).

### ListBudgets(ListBudgetsRequest, ServerCallContext)

```
public virtual Task<ListBudgetsResponse> ListBudgets(ListBudgetsRequest request, ServerCallContext context)
```

Returns a list of budgets for a billing account.

WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

**Parameters**

**Name**

**Description**

`request`

`[ListBudgetsRequest](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.ListBudgetsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListBudgetsResponse](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.ListBudgetsResponse)>`

The response to send back to the client (wrapped by a task).

### UpdateBudget(UpdateBudgetRequest, ServerCallContext)

```
public virtual Task<Budget> UpdateBudget(UpdateBudgetRequest request, ServerCallContext context)
```

Updates a budget and returns the updated budget.

WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBudgetRequest](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.UpdateBudgetRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Budget](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.Budget)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
