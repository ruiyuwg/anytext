-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class CloudChannelServiceClient (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.7.0keyboard\_arrow\_down

-   [2.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.Channel.V1/latest/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.16.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.15.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.14.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.12.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.11.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.10.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.9.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.8.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.6.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.5.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.4.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.2.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.1.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.0.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.6.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.5.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.4.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.3.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.2.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.1.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.0.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)

```
public abstract class CloudChannelServiceClient
```

CloudChannelService client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CloudChannelServiceClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[CloudChannelServiceClientImpl](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClientImpl)

## Namespace

[Google.Cloud.Channel.V1](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1)

## Assembly

Google.Cloud.Channel.V1.dll

## Remarks

CloudChannelService lets Google cloud resellers and distributors manage their customers, channel partners, entitlements, and reports.

Using this service:

1.  Resellers and distributors can manage a customer entity.
2.  Distributors can register an authorized reseller in their channel and provide them with delegated admin access.
3.  Resellers and distributors can manage customer entitlements.

CloudChannelService exposes the following resources:

-   \[Customer\]\[google.cloud.channel.v1.Customer\]s: An entity—usually an enterprise—managed by a reseller or distributor.
    
-   \[Entitlement\]\[google.cloud.channel.v1.Entitlement\]s: An entity that provides a customer with the means to use a service. Entitlements are created or updated as a result of a successful fulfillment.
    
-   \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]s: An entity that identifies links between distributors and their indirect resellers in a channel.
    

## Properties

### ActivateEntitlementOperationsClient

```
public virtual OperationsClient ActivateEntitlementOperationsClient { get; }
```

The long-running operations client for `ActivateEntitlement`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### CancelEntitlementOperationsClient

```
public virtual OperationsClient CancelEntitlementOperationsClient { get; }
```

The long-running operations client for `CancelEntitlement`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ChangeOfferOperationsClient

```
public virtual OperationsClient ChangeOfferOperationsClient { get; }
```

The long-running operations client for `ChangeOffer`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ChangeParametersOperationsClient

```
public virtual OperationsClient ChangeParametersOperationsClient { get; }
```

The long-running operations client for `ChangeParameters`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ChangeRenewalSettingsOperationsClient

```
public virtual OperationsClient ChangeRenewalSettingsOperationsClient { get; }
```

The long-running operations client for `ChangeRenewalSettings`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### CreateEntitlementOperationsClient

```
public virtual OperationsClient CreateEntitlementOperationsClient { get; }
```

The long-running operations client for `CreateEntitlement`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the CloudChannelService service, which is a host of "cloudchannel.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default CloudChannelService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default CloudChannelService scopes are:

-   [https://www.googleapis.com/auth/apps.order](https://www.googleapis.com/auth/apps.order)

### GrpcClient

```
public virtual CloudChannelService.CloudChannelServiceClient GrpcClient { get; }
```

The underlying gRPC CloudChannelService client

**Property Value**

**Type**

**Description**

`[CloudChannelService.CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelService.CloudChannelServiceClient)`

### ProvisionCloudIdentityOperationsClient

```
public virtual OperationsClient ProvisionCloudIdentityOperationsClient { get; }
```

The long-running operations client for `ProvisionCloudIdentity`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### StartPaidServiceOperationsClient

```
public virtual OperationsClient StartPaidServiceOperationsClient { get; }
```

The long-running operations client for `StartPaidService`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### SuspendEntitlementOperationsClient

```
public virtual OperationsClient SuspendEntitlementOperationsClient { get; }
```

The long-running operations client for `SuspendEntitlement`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### TransferEntitlementsOperationsClient

```
public virtual OperationsClient TransferEntitlementsOperationsClient { get; }
```

The long-running operations client for `TransferEntitlements`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### TransferEntitlementsToGoogleOperationsClient

```
public virtual OperationsClient TransferEntitlementsToGoogleOperationsClient { get; }
```

The long-running operations client for `TransferEntitlementsToGoogle`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### ActivateEntitlement(ActivateEntitlementRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> ActivateEntitlement(ActivateEntitlementRequest request, CallSettings callSettings = null)
```

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method.

An entitlement activation is a long-running operation and it updates the state of the customer entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   SUSPENSION\_NOT\_RESELLER\_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS.
-   NOT\_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ActivateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ActivateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ActivateEntitlementRequest request = new ActivateEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.ActivateEntitlement(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceActivateEntitlement(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ActivateEntitlementAsync(ActivateEntitlementRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ActivateEntitlementAsync(ActivateEntitlementRequest request, CallSettings callSettings = null)
```

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method.

An entitlement activation is a long-running operation and it updates the state of the customer entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   SUSPENSION\_NOT\_RESELLER\_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS.
-   NOT\_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ActivateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ActivateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ActivateEntitlementRequest request = new ActivateEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ActivateEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceActivateEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ActivateEntitlementAsync(ActivateEntitlementRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ActivateEntitlementAsync(ActivateEntitlementRequest request, CancellationToken cancellationToken)
```

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method.

An entitlement activation is a long-running operation and it updates the state of the customer entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   SUSPENSION\_NOT\_RESELLER\_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS.
-   NOT\_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ActivateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ActivateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ActivateEntitlementRequest request = new ActivateEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ActivateEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceActivateEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### CancelEntitlement(CancelEntitlementRequest, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> CancelEntitlement(CancelEntitlementRequest request, CallSettings callSettings = null)
```

Cancels a previously fulfilled entitlement.

An entitlement cancellation is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   FAILED\_PRECONDITION: There are Google Cloud projects linked to the Google Cloud entitlement's Cloud Billing subaccount.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   DELETION\_TYPE\_NOT\_ALLOWED: Cancel is only allowed for Google Workspace add-ons, or entitlements for Google Cloud's development platform.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CancelEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CancelEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CancelEntitlementRequest request = new CancelEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = cloudChannelServiceClient.CancelEntitlement(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceCancelEntitlement(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### CancelEntitlementAsync(CancelEntitlementRequest, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> CancelEntitlementAsync(CancelEntitlementRequest request, CallSettings callSettings = null)
```

Cancels a previously fulfilled entitlement.

An entitlement cancellation is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   FAILED\_PRECONDITION: There are Google Cloud projects linked to the Google Cloud entitlement's Cloud Billing subaccount.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   DELETION\_TYPE\_NOT\_ALLOWED: Cancel is only allowed for Google Workspace add-ons, or entitlements for Google Cloud's development platform.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CancelEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CancelEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CancelEntitlementRequest request = new CancelEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudChannelServiceClient.CancelEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceCancelEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### CancelEntitlementAsync(CancelEntitlementRequest, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> CancelEntitlementAsync(CancelEntitlementRequest request, CancellationToken cancellationToken)
```

Cancels a previously fulfilled entitlement.

An entitlement cancellation is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   FAILED\_PRECONDITION: There are Google Cloud projects linked to the Google Cloud entitlement's Cloud Billing subaccount.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   DELETION\_TYPE\_NOT\_ALLOWED: Cancel is only allowed for Google Workspace add-ons, or entitlements for Google Cloud's development platform.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CancelEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CancelEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CancelEntitlementRequest request = new CancelEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudChannelServiceClient.CancelEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceCancelEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### ChangeOffer(ChangeOfferRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> ChangeOffer(ChangeOfferRequest request, CallSettings callSettings = null)
```

Updates the Offer for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Offer or Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeOfferRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChangeOfferRequest request = new ChangeOfferRequest
{
    Name = "",
    OfferAsOfferName = OfferName.FromAccountOffer("[ACCOUNT]", "[OFFER]"),
    Parameters = { new Parameter(), },
    PurchaseOrderId = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.ChangeOffer(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceChangeOffer(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeOfferAsync(ChangeOfferRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeOfferAsync(ChangeOfferRequest request, CallSettings callSettings = null)
```

Updates the Offer for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Offer or Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeOfferRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeOfferRequest request = new ChangeOfferRequest
{
    Name = "",
    OfferAsOfferName = OfferName.FromAccountOffer("[ACCOUNT]", "[OFFER]"),
    Parameters = { new Parameter(), },
    PurchaseOrderId = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeOfferAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeOfferAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeOfferAsync(ChangeOfferRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeOfferAsync(ChangeOfferRequest request, CancellationToken cancellationToken)
```

Updates the Offer for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Offer or Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeOfferRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeOfferRequest request = new ChangeOfferRequest
{
    Name = "",
    OfferAsOfferName = OfferName.FromAccountOffer("[ACCOUNT]", "[OFFER]"),
    Parameters = { new Parameter(), },
    PurchaseOrderId = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeOfferAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeOfferAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeParameters(ChangeParametersRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> ChangeParameters(ChangeParametersRequest request, CallSettings callSettings = null)
```

Change parameters of the entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan.
-   NOT\_FOUND: Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeParametersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeParametersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChangeParametersRequest request = new ChangeParametersRequest
{
    Name = "",
    Parameters = { new Parameter(), },
    RequestId = "",
    PurchaseOrderId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.ChangeParameters(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceChangeParameters(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeParametersAsync(ChangeParametersRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeParametersAsync(ChangeParametersRequest request, CallSettings callSettings = null)
```

Change parameters of the entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan.
-   NOT\_FOUND: Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeParametersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeParametersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeParametersRequest request = new ChangeParametersRequest
{
    Name = "",
    Parameters = { new Parameter(), },
    RequestId = "",
    PurchaseOrderId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeParametersAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeParametersAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeParametersAsync(ChangeParametersRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeParametersAsync(ChangeParametersRequest request, CancellationToken cancellationToken)
```

Change parameters of the entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan.
-   NOT\_FOUND: Entitlement resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeParametersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeParametersRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeParametersRequest request = new ChangeParametersRequest
{
    Name = "",
    Parameters = { new Parameter(), },
    RequestId = "",
    PurchaseOrderId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeParametersAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeParametersAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeRenewalSettings(ChangeRenewalSettingsRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> ChangeRenewalSettings(ChangeRenewalSettingsRequest request, CallSettings callSettings = null)
```

Updates the renewal settings for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_COMMITMENT\_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeRenewalSettingsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeRenewalSettingsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChangeRenewalSettingsRequest request = new ChangeRenewalSettingsRequest
{
    Name = "",
    RenewalSettings = new RenewalSettings(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.ChangeRenewalSettings(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceChangeRenewalSettings(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeRenewalSettingsAsync(ChangeRenewalSettingsRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeRenewalSettingsAsync(ChangeRenewalSettingsRequest request, CallSettings callSettings = null)
```

Updates the renewal settings for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_COMMITMENT\_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeRenewalSettingsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeRenewalSettingsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeRenewalSettingsRequest request = new ChangeRenewalSettingsRequest
{
    Name = "",
    RenewalSettings = new RenewalSettings(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeRenewalSettingsAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeRenewalSettingsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### ChangeRenewalSettingsAsync(ChangeRenewalSettingsRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> ChangeRenewalSettingsAsync(ChangeRenewalSettingsRequest request, CancellationToken cancellationToken)
```

Updates the renewal settings for an existing customer entitlement.

An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_COMMITMENT\_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ChangeRenewalSettingsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChangeRenewalSettingsRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChangeRenewalSettingsRequest request = new ChangeRenewalSettingsRequest
{
    Name = "",
    RenewalSettings = new RenewalSettings(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.ChangeRenewalSettingsAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceChangeRenewalSettingsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### CheckCloudIdentityAccountsExist(CheckCloudIdentityAccountsExistRequest, CallSettings)

```
public virtual CheckCloudIdentityAccountsExistResponse CheckCloudIdentityAccountsExist(CheckCloudIdentityAccountsExistRequest request, CallSettings callSettings = null)
```

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INVALID\_VALUE: Invalid domain value in the request.

Return value: A list of \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources for the domain (may be empty)

Note: in the v1alpha1 version of the API, a NOT\_FOUND error returns if no \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources match the domain.

**Parameters**

**Name**

**Description**

`request`

`[CheckCloudIdentityAccountsExistRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CheckCloudIdentityAccountsExistResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistResponse)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CheckCloudIdentityAccountsExistRequest request = new CheckCloudIdentityAccountsExistRequest
{
    Parent = "",
    Domain = "",
};
// Make the request
CheckCloudIdentityAccountsExistResponse response = cloudChannelServiceClient.CheckCloudIdentityAccountsExist(request);
```

### CheckCloudIdentityAccountsExistAsync(CheckCloudIdentityAccountsExistRequest, CallSettings)

```
public virtual Task<CheckCloudIdentityAccountsExistResponse> CheckCloudIdentityAccountsExistAsync(CheckCloudIdentityAccountsExistRequest request, CallSettings callSettings = null)
```

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INVALID\_VALUE: Invalid domain value in the request.

Return value: A list of \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources for the domain (may be empty)

Note: in the v1alpha1 version of the API, a NOT\_FOUND error returns if no \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources match the domain.

**Parameters**

**Name**

**Description**

`request`

`[CheckCloudIdentityAccountsExistRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CheckCloudIdentityAccountsExistResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CheckCloudIdentityAccountsExistRequest request = new CheckCloudIdentityAccountsExistRequest
{
    Parent = "",
    Domain = "",
};
// Make the request
CheckCloudIdentityAccountsExistResponse response = await cloudChannelServiceClient.CheckCloudIdentityAccountsExistAsync(request);
```

### CheckCloudIdentityAccountsExistAsync(CheckCloudIdentityAccountsExistRequest, CancellationToken)

```
public virtual Task<CheckCloudIdentityAccountsExistResponse> CheckCloudIdentityAccountsExistAsync(CheckCloudIdentityAccountsExistRequest request, CancellationToken cancellationToken)
```

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INVALID\_VALUE: Invalid domain value in the request.

Return value: A list of \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources for the domain (may be empty)

Note: in the v1alpha1 version of the API, a NOT\_FOUND error returns if no \[CloudIdentityCustomerAccount\]\[google.cloud.channel.v1.CloudIdentityCustomerAccount\] resources match the domain.

**Parameters**

**Name**

**Description**

`request`

`[CheckCloudIdentityAccountsExistRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CheckCloudIdentityAccountsExistResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CheckCloudIdentityAccountsExistResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CheckCloudIdentityAccountsExistRequest request = new CheckCloudIdentityAccountsExistRequest
{
    Parent = "",
    Domain = "",
};
// Make the request
CheckCloudIdentityAccountsExistResponse response = await cloudChannelServiceClient.CheckCloudIdentityAccountsExistAsync(request);
```

### Create()

```
public static CloudChannelServiceClient Create()
```

Synchronously creates a [CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudChannelServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClientBuilder).

**Returns**

**Type**

**Description**

`[CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)`

The created [CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<CloudChannelServiceClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudChannelServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient)>`

The task representing the created [CloudChannelServiceClient](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient).

### CreateChannelPartnerLink(CreateChannelPartnerLinkRequest, CallSettings)

```
public virtual ChannelPartnerLink CreateChannelPartnerLink(CreateChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite\_link\_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   ALREADY\_EXISTS: The ChannelPartnerLink sent in the request already exists.
-   NOT\_FOUND: No Cloud Identity customer exists for provided domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The new \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CreateChannelPartnerLinkRequest request = new CreateChannelPartnerLinkRequest
{
    Parent = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
};
// Make the request
ChannelPartnerLink response = cloudChannelServiceClient.CreateChannelPartnerLink(request);
```

### CreateChannelPartnerLinkAsync(CreateChannelPartnerLinkRequest, CallSettings)

```
public virtual Task<ChannelPartnerLink> CreateChannelPartnerLinkAsync(CreateChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite\_link\_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   ALREADY\_EXISTS: The ChannelPartnerLink sent in the request already exists.
-   NOT\_FOUND: No Cloud Identity customer exists for provided domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The new \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateChannelPartnerLinkRequest request = new CreateChannelPartnerLinkRequest
{
    Parent = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.CreateChannelPartnerLinkAsync(request);
```

### CreateChannelPartnerLinkAsync(CreateChannelPartnerLinkRequest, CancellationToken)

```
public virtual Task<ChannelPartnerLink> CreateChannelPartnerLinkAsync(CreateChannelPartnerLinkRequest request, CancellationToken cancellationToken)
```

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite\_link\_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   ALREADY\_EXISTS: The ChannelPartnerLink sent in the request already exists.
-   NOT\_FOUND: No Cloud Identity customer exists for provided domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The new \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateChannelPartnerLinkRequest request = new CreateChannelPartnerLinkRequest
{
    Parent = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.CreateChannelPartnerLinkAsync(request);
```

### CreateChannelPartnerRepricingConfig(ChannelPartnerLinkName, ChannelPartnerRepricingConfig, CallSettings)

```
public virtual ChannelPartnerRepricingConfig CreateChannelPartnerRepricingConfig(ChannelPartnerLinkName parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[ChannelPartnerLinkName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLinkName)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChannelPartnerLinkName parent = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]");
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.CreateChannelPartnerRepricingConfig(parent, channelPartnerRepricingConfig);
```

### CreateChannelPartnerRepricingConfig(CreateChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual ChannelPartnerRepricingConfig CreateChannelPartnerRepricingConfig(CreateChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CreateChannelPartnerRepricingConfigRequest request = new CreateChannelPartnerRepricingConfigRequest
{
    ParentAsChannelPartnerLinkName = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]"),
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.CreateChannelPartnerRepricingConfig(request);
```

### CreateChannelPartnerRepricingConfig(String, ChannelPartnerRepricingConfig, CallSettings)

```
public virtual ChannelPartnerRepricingConfig CreateChannelPartnerRepricingConfig(string parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER_LINK]";
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.CreateChannelPartnerRepricingConfig(parent, channelPartnerRepricingConfig);
```

### CreateChannelPartnerRepricingConfigAsync(ChannelPartnerLinkName, ChannelPartnerRepricingConfig, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(ChannelPartnerLinkName parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[ChannelPartnerLinkName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLinkName)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerLinkName parent = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]");
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(parent, channelPartnerRepricingConfig);
```

### CreateChannelPartnerRepricingConfigAsync(ChannelPartnerLinkName, ChannelPartnerRepricingConfig, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(ChannelPartnerLinkName parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CancellationToken cancellationToken)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[ChannelPartnerLinkName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLinkName)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerLinkName parent = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]");
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(parent, channelPartnerRepricingConfig);
```

### CreateChannelPartnerRepricingConfigAsync(CreateChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(CreateChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateChannelPartnerRepricingConfigRequest request = new CreateChannelPartnerRepricingConfigRequest
{
    ParentAsChannelPartnerLinkName = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]"),
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(request);
```

### CreateChannelPartnerRepricingConfigAsync(CreateChannelPartnerRepricingConfigRequest, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(CreateChannelPartnerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateChannelPartnerRepricingConfigRequest request = new CreateChannelPartnerRepricingConfigRequest
{
    ParentAsChannelPartnerLinkName = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]"),
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(request);
```

### CreateChannelPartnerRepricingConfigAsync(String, ChannelPartnerRepricingConfig, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(string parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER_LINK]";
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(parent, channelPartnerRepricingConfig);
```

### CreateChannelPartnerRepricingConfigAsync(String, ChannelPartnerRepricingConfig, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> CreateChannelPartnerRepricingConfigAsync(string parent, ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CancellationToken cancellationToken)
```

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any ChannelPartner or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[ChannelPartnerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER_LINK]";
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.CreateChannelPartnerRepricingConfigAsync(parent, channelPartnerRepricingConfig);
```

### CreateCustomer(CreateCustomerRequest, CallSettings)

```
public virtual Customer CreateCustomer(CreateCustomerRequest request, CallSettings callSettings = null)
```

Creates a new \[Customer\]\[google.cloud.channel.v1.Customer\] resource under the reseller or distributor account.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Domain field value doesn't match the primary email domain.

Return value: The newly created \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CreateCustomerRequest request = new CreateCustomerRequest
{
    Parent = "",
    Customer = new Customer(),
};
// Make the request
Customer response = cloudChannelServiceClient.CreateCustomer(request);
```

### CreateCustomerAsync(CreateCustomerRequest, CallSettings)

```
public virtual Task<Customer> CreateCustomerAsync(CreateCustomerRequest request, CallSettings callSettings = null)
```

Creates a new \[Customer\]\[google.cloud.channel.v1.Customer\] resource under the reseller or distributor account.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Domain field value doesn't match the primary email domain.

Return value: The newly created \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateCustomerRequest request = new CreateCustomerRequest
{
    Parent = "",
    Customer = new Customer(),
};
// Make the request
Customer response = await cloudChannelServiceClient.CreateCustomerAsync(request);
```

### CreateCustomerAsync(CreateCustomerRequest, CancellationToken)

```
public virtual Task<Customer> CreateCustomerAsync(CreateCustomerRequest request, CancellationToken cancellationToken)
```

Creates a new \[Customer\]\[google.cloud.channel.v1.Customer\] resource under the reseller or distributor account.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Domain field value doesn't match the primary email domain.

Return value: The newly created \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateCustomerRequest request = new CreateCustomerRequest
{
    Parent = "",
    Customer = new Customer(),
};
// Make the request
Customer response = await cloudChannelServiceClient.CreateCustomerAsync(request);
```

### CreateCustomerRepricingConfig(CreateCustomerRepricingConfigRequest, CallSettings)

```
public virtual CustomerRepricingConfig CreateCustomerRepricingConfig(CreateCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CreateCustomerRepricingConfigRequest request = new CreateCustomerRepricingConfigRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.CreateCustomerRepricingConfig(request);
```

### CreateCustomerRepricingConfig(CustomerName, CustomerRepricingConfig, CallSettings)

```
public virtual CustomerRepricingConfig CreateCustomerRepricingConfig(CustomerName parent, CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerName parent = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.CreateCustomerRepricingConfig(parent, customerRepricingConfig);
```

### CreateCustomerRepricingConfig(String, CustomerRepricingConfig, CallSettings)

```
public virtual CustomerRepricingConfig CreateCustomerRepricingConfig(string parent, CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.CreateCustomerRepricingConfig(parent, customerRepricingConfig);
```

### CreateCustomerRepricingConfigAsync(CreateCustomerRepricingConfigRequest, CallSettings)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(CreateCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateCustomerRepricingConfigRequest request = new CreateCustomerRepricingConfigRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(request);
```

### CreateCustomerRepricingConfigAsync(CreateCustomerRepricingConfigRequest, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(CreateCustomerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[CreateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateCustomerRepricingConfigRequest request = new CreateCustomerRepricingConfigRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(request);
```

### CreateCustomerRepricingConfigAsync(CustomerName, CustomerRepricingConfig, CallSettings)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(CustomerName parent, CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName parent = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(parent, customerRepricingConfig);
```

### CreateCustomerRepricingConfigAsync(CustomerName, CustomerRepricingConfig, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(CustomerName parent, CustomerRepricingConfig customerRepricingConfig, CancellationToken cancellationToken)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName parent = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(parent, customerRepricingConfig);
```

### CreateCustomerRepricingConfigAsync(String, CustomerRepricingConfig, CallSettings)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(string parent, CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(parent, customerRepricingConfig);
```

### CreateCustomerRepricingConfigAsync(String, CustomerRepricingConfig, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> CreateCustomerRepricingConfigAsync(string parent, CustomerRepricingConfig customerRepricingConfig, CancellationToken cancellationToken)
```

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. If needed, you can create a config for the current month, with some restrictions.

When creating a config for a future month, make sure there are no existing configs for that \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

The following restrictions are for creating configs in the current month.

-   This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases.
-   The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours.
-   There is a limit of ten configs for any \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\] or \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].
-   The contained \[CustomerRepricingConfig.repricing\_config\]\[google.cloud.channel.v1.CustomerRepricingConfig.repricing\_config\] vaule must be different from the value used in the current config for a \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\].

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.CreateCustomerRepricingConfigAsync(parent, customerRepricingConfig);
```

### CreateEntitlement(CreateEntitlementRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> CreateEntitlement(CreateEntitlementRequest request, CallSettings callSettings = null)
```

Creates an entitlement for a customer.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   There is already a customer entitlement for a SKU from the same product family.
-   INVALID\_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS:
-   The SKU was already purchased for the customer.
-   The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The domain required for purchasing a SKU has not been verified.
-   A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive.
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CreateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CreateEntitlementRequest request = new CreateEntitlementRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    Entitlement = new Entitlement(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.CreateEntitlement(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceCreateEntitlement(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### CreateEntitlementAsync(CreateEntitlementRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> CreateEntitlementAsync(CreateEntitlementRequest request, CallSettings callSettings = null)
```

Creates an entitlement for a customer.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   There is already a customer entitlement for a SKU from the same product family.
-   INVALID\_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS:
-   The SKU was already purchased for the customer.
-   The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The domain required for purchasing a SKU has not been verified.
-   A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive.
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CreateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateEntitlementRequest request = new CreateEntitlementRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    Entitlement = new Entitlement(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.CreateEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceCreateEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### CreateEntitlementAsync(CreateEntitlementRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> CreateEntitlementAsync(CreateEntitlementRequest request, CancellationToken cancellationToken)
```

Creates an entitlement for a customer.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   There is already a customer entitlement for a SKU from the same product family.
-   INVALID\_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS:
-   The SKU was already purchased for the customer.
-   The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The domain required for purchasing a SKU has not been verified.
-   A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive.
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[CreateEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CreateEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CreateEntitlementRequest request = new CreateEntitlementRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    Entitlement = new Entitlement(),
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.CreateEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceCreateEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### DeleteChannelPartnerRepricingConfig(ChannelPartnerRepricingConfigName, CallSettings)

```
public virtual void DeleteChannelPartnerRepricingConfig(ChannelPartnerRepricingConfigName name, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the channel partner repricing config rule to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
cloudChannelServiceClient.DeleteChannelPartnerRepricingConfig(name);
```

### DeleteChannelPartnerRepricingConfig(DeleteChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual void DeleteChannelPartnerRepricingConfig(DeleteChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
DeleteChannelPartnerRepricingConfigRequest request = new DeleteChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
cloudChannelServiceClient.DeleteChannelPartnerRepricingConfig(request);
```

### DeleteChannelPartnerRepricingConfig(String, CallSettings)

```
public virtual void DeleteChannelPartnerRepricingConfig(string name, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the channel partner repricing config rule to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
cloudChannelServiceClient.DeleteChannelPartnerRepricingConfig(name);
```

### DeleteChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName, CallSettings)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName name, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the channel partner repricing config rule to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(name);
```

### DeleteChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName, CancellationToken)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName name, CancellationToken cancellationToken)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the channel partner repricing config rule to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(name);
```

### DeleteChannelPartnerRepricingConfigAsync(DeleteChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(DeleteChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteChannelPartnerRepricingConfigRequest request = new DeleteChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(request);
```

### DeleteChannelPartnerRepricingConfigAsync(DeleteChannelPartnerRepricingConfigRequest, CancellationToken)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(DeleteChannelPartnerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteChannelPartnerRepricingConfigRequest request = new DeleteChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(request);
```

### DeleteChannelPartnerRepricingConfigAsync(String, CallSettings)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(string name, CallSettings callSettings = null)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the channel partner repricing config rule to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(name);
```

### DeleteChannelPartnerRepricingConfigAsync(String, CancellationToken)

```
public virtual Task DeleteChannelPartnerRepricingConfigAsync(string name, CancellationToken cancellationToken)
```

Deletes the given \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the channel partner repricing config rule to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
await cloudChannelServiceClient.DeleteChannelPartnerRepricingConfigAsync(name);
```

### DeleteCustomer(CustomerName, CallSettings)

```
public virtual void DeleteCustomer(CustomerName name, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
cloudChannelServiceClient.DeleteCustomer(name);
```

### DeleteCustomer(DeleteCustomerRequest, CallSettings)

```
public virtual void DeleteCustomer(DeleteCustomerRequest request, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
DeleteCustomerRequest request = new DeleteCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
cloudChannelServiceClient.DeleteCustomer(request);
```

### DeleteCustomer(String, CallSettings)

```
public virtual void DeleteCustomer(string name, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
cloudChannelServiceClient.DeleteCustomer(name);
```

### DeleteCustomerAsync(CustomerName, CallSettings)

```
public virtual Task DeleteCustomerAsync(CustomerName name, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(name);
```

### DeleteCustomerAsync(CustomerName, CancellationToken)

```
public virtual Task DeleteCustomerAsync(CustomerName name, CancellationToken cancellationToken)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(name);
```

### DeleteCustomerAsync(DeleteCustomerRequest, CallSettings)

```
public virtual Task DeleteCustomerAsync(DeleteCustomerRequest request, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteCustomerRequest request = new DeleteCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(request);
```

### DeleteCustomerAsync(DeleteCustomerRequest, CancellationToken)

```
public virtual Task DeleteCustomerAsync(DeleteCustomerRequest request, CancellationToken cancellationToken)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteCustomerRequest request = new DeleteCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(request);
```

### DeleteCustomerAsync(String, CallSettings)

```
public virtual Task DeleteCustomerAsync(string name, CallSettings callSettings = null)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(name);
```

### DeleteCustomerAsync(String, CancellationToken)

```
public virtual Task DeleteCustomerAsync(string name, CancellationToken cancellationToken)
```

Deletes the given \[Customer\]\[google.cloud.channel.v1.Customer\] permanently.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The customer has existing entitlements.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
await cloudChannelServiceClient.DeleteCustomerAsync(name);
```

### DeleteCustomerRepricingConfig(CustomerRepricingConfigName, CallSettings)

```
public virtual void DeleteCustomerRepricingConfig(CustomerRepricingConfigName name, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
cloudChannelServiceClient.DeleteCustomerRepricingConfig(name);
```

### DeleteCustomerRepricingConfig(DeleteCustomerRepricingConfigRequest, CallSettings)

```
public virtual void DeleteCustomerRepricingConfig(DeleteCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
DeleteCustomerRepricingConfigRequest request = new DeleteCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
cloudChannelServiceClient.DeleteCustomerRepricingConfig(request);
```

### DeleteCustomerRepricingConfig(String, CallSettings)

```
public virtual void DeleteCustomerRepricingConfig(string name, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
cloudChannelServiceClient.DeleteCustomerRepricingConfig(name);
```

### DeleteCustomerRepricingConfigAsync(CustomerRepricingConfigName, CallSettings)

```
public virtual Task DeleteCustomerRepricingConfigAsync(CustomerRepricingConfigName name, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(name);
```

### DeleteCustomerRepricingConfigAsync(CustomerRepricingConfigName, CancellationToken)

```
public virtual Task DeleteCustomerRepricingConfigAsync(CustomerRepricingConfigName name, CancellationToken cancellationToken)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(name);
```

### DeleteCustomerRepricingConfigAsync(DeleteCustomerRepricingConfigRequest, CallSettings)

```
public virtual Task DeleteCustomerRepricingConfigAsync(DeleteCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteCustomerRepricingConfigRequest request = new DeleteCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(request);
```

### DeleteCustomerRepricingConfigAsync(DeleteCustomerRepricingConfigRequest, CancellationToken)

```
public virtual Task DeleteCustomerRepricingConfigAsync(DeleteCustomerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.DeleteCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteCustomerRepricingConfigRequest request = new DeleteCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(request);
```

### DeleteCustomerRepricingConfigAsync(String, CallSettings)

```
public virtual Task DeleteCustomerRepricingConfigAsync(string name, CallSettings callSettings = null)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(name);
```

### DeleteCustomerRepricingConfigAsync(String, CancellationToken)

```
public virtual Task DeleteCustomerRepricingConfigAsync(string name, CancellationToken cancellationToken)
```

Deletes the given \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] permanently. You can only delete configs if their \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] is active or in the past.
-   NOT\_FOUND: No \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] found for the name in the request.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer repricing config rule to delete. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
await cloudChannelServiceClient.DeleteCustomerRepricingConfigAsync(name);
```

### GetChannelPartnerLink(GetChannelPartnerLinkRequest, CallSettings)

```
public virtual ChannelPartnerLink GetChannelPartnerLink(GetChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Returns the requested \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: ChannelPartnerLink resource not found because of an invalid channel partner link name.

Return value: The \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
GetChannelPartnerLinkRequest request = new GetChannelPartnerLinkRequest
{
    Name = "",
    View = ChannelPartnerLinkView.Unspecified,
};
// Make the request
ChannelPartnerLink response = cloudChannelServiceClient.GetChannelPartnerLink(request);
```

### GetChannelPartnerLinkAsync(GetChannelPartnerLinkRequest, CallSettings)

```
public virtual Task<ChannelPartnerLink> GetChannelPartnerLinkAsync(GetChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Returns the requested \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: ChannelPartnerLink resource not found because of an invalid channel partner link name.

Return value: The \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetChannelPartnerLinkRequest request = new GetChannelPartnerLinkRequest
{
    Name = "",
    View = ChannelPartnerLinkView.Unspecified,
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.GetChannelPartnerLinkAsync(request);
```

### GetChannelPartnerLinkAsync(GetChannelPartnerLinkRequest, CancellationToken)

```
public virtual Task<ChannelPartnerLink> GetChannelPartnerLinkAsync(GetChannelPartnerLinkRequest request, CancellationToken cancellationToken)
```

Returns the requested \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: ChannelPartnerLink resource not found because of an invalid channel partner link name.

Return value: The \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetChannelPartnerLinkRequest request = new GetChannelPartnerLinkRequest
{
    Name = "",
    View = ChannelPartnerLinkView.Unspecified,
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.GetChannelPartnerLinkAsync(request);
```

### GetChannelPartnerRepricingConfig(ChannelPartnerRepricingConfigName, CallSettings)

```
public virtual ChannelPartnerRepricingConfig GetChannelPartnerRepricingConfig(ChannelPartnerRepricingConfigName name, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.GetChannelPartnerRepricingConfig(name);
```

### GetChannelPartnerRepricingConfig(GetChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual ChannelPartnerRepricingConfig GetChannelPartnerRepricingConfig(GetChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
GetChannelPartnerRepricingConfigRequest request = new GetChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.GetChannelPartnerRepricingConfig(request);
```

### GetChannelPartnerRepricingConfig(String, CallSettings)

```
public virtual ChannelPartnerRepricingConfig GetChannelPartnerRepricingConfig(string name, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.GetChannelPartnerRepricingConfig(name);
```

### GetChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName name, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(name);
```

### GetChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfigName name, CancellationToken cancellationToken)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[ChannelPartnerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfigName)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfigName name = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]");
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(name);
```

### GetChannelPartnerRepricingConfigAsync(GetChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(GetChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetChannelPartnerRepricingConfigRequest request = new GetChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(request);
```

### GetChannelPartnerRepricingConfigAsync(GetChannelPartnerRepricingConfigRequest, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(GetChannelPartnerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetChannelPartnerRepricingConfigRequest request = new GetChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfigName = ChannelPartnerRepricingConfigName.FromAccountChannelPartnerChannelPartnerRepricingConfig("[ACCOUNT]", "[CHANNEL_PARTNER]", "[CHANNEL_PARTNER_REPRICING_CONFIG]"),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(request);
```

### GetChannelPartnerRepricingConfigAsync(String, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(string name, CallSettings callSettings = null)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(name);
```

### GetChannelPartnerRepricingConfigAsync(String, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> GetChannelPartnerRepricingConfigAsync(string name, CancellationToken cancellationToken)
```

Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ChannelPartnerRepricingConfig Format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}/channelPartnerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER]/channelPartnerRepricingConfigs/[CHANNEL_PARTNER_REPRICING_CONFIG]";
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.GetChannelPartnerRepricingConfigAsync(name);
```

### GetCustomer(CustomerName, CallSettings)

```
public virtual Customer GetCustomer(CustomerName name, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
Customer response = cloudChannelServiceClient.GetCustomer(name);
```

### GetCustomer(GetCustomerRequest, CallSettings)

```
public virtual Customer GetCustomer(GetCustomerRequest request, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
GetCustomerRequest request = new GetCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = cloudChannelServiceClient.GetCustomer(request);
```

### GetCustomer(String, CallSettings)

```
public virtual Customer GetCustomer(string name, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
Customer response = cloudChannelServiceClient.GetCustomer(name);
```

### GetCustomerAsync(CustomerName, CallSettings)

```
public virtual Task<Customer> GetCustomerAsync(CustomerName name, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(name);
```

### GetCustomerAsync(CustomerName, CancellationToken)

```
public virtual Task<Customer> GetCustomerAsync(CustomerName name, CancellationToken cancellationToken)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName name = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(name);
```

### GetCustomerAsync(GetCustomerRequest, CallSettings)

```
public virtual Task<Customer> GetCustomerAsync(GetCustomerRequest request, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetCustomerRequest request = new GetCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(request);
```

### GetCustomerAsync(GetCustomerRequest, CancellationToken)

```
public virtual Task<Customer> GetCustomerAsync(GetCustomerRequest request, CancellationToken cancellationToken)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetCustomerRequest request = new GetCustomerRequest
{
    CustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(request);
```

### GetCustomerAsync(String, CallSettings)

```
public virtual Task<Customer> GetCustomerAsync(string name, CallSettings callSettings = null)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(name);
```

### GetCustomerAsync(String, CancellationToken)

```
public virtual Task<Customer> GetCustomerAsync(string name, CancellationToken cancellationToken)
```

Returns the requested \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account\_id}/customers/{customer\_id}

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
Customer response = await cloudChannelServiceClient.GetCustomerAsync(name);
```

### GetCustomerRepricingConfig(CustomerRepricingConfigName, CallSettings)

```
public virtual CustomerRepricingConfig GetCustomerRepricingConfig(CustomerRepricingConfigName name, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.GetCustomerRepricingConfig(name);
```

### GetCustomerRepricingConfig(GetCustomerRepricingConfigRequest, CallSettings)

```
public virtual CustomerRepricingConfig GetCustomerRepricingConfig(GetCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
GetCustomerRepricingConfigRequest request = new GetCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.GetCustomerRepricingConfig(request);
```

### GetCustomerRepricingConfig(String, CallSettings)

```
public virtual CustomerRepricingConfig GetCustomerRepricingConfig(string name, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.GetCustomerRepricingConfig(name);
```

### GetCustomerRepricingConfigAsync(CustomerRepricingConfigName, CallSettings)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(CustomerRepricingConfigName name, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(name);
```

### GetCustomerRepricingConfigAsync(CustomerRepricingConfigName, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(CustomerRepricingConfigName name, CancellationToken cancellationToken)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[CustomerRepricingConfigName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfigName)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfigName name = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]");
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(name);
```

### GetCustomerRepricingConfigAsync(GetCustomerRepricingConfigRequest, CallSettings)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(GetCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetCustomerRepricingConfigRequest request = new GetCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(request);
```

### GetCustomerRepricingConfigAsync(GetCustomerRepricingConfigRequest, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(GetCustomerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[GetCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetCustomerRepricingConfigRequest request = new GetCustomerRepricingConfigRequest
{
    CustomerRepricingConfigName = CustomerRepricingConfigName.FromAccountCustomerCustomerRepricingConfig("[ACCOUNT]", "[CUSTOMER]", "[CUSTOMER_REPRICING_CONFIG]"),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(request);
```

### GetCustomerRepricingConfigAsync(String, CallSettings)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(string name, CallSettings callSettings = null)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(name);
```

### GetCustomerRepricingConfigAsync(String, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> GetCustomerRepricingConfigAsync(string name, CancellationToken cancellationToken)
```

Gets information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] was not found.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the CustomerRepricingConfig. Format: accounts/{account\_id}/customers/{customer\_id}/customerRepricingConfigs/{id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "accounts/[ACCOUNT]/customers/[CUSTOMER]/customerRepricingConfigs/[CUSTOMER_REPRICING_CONFIG]";
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.GetCustomerRepricingConfigAsync(name);
```

### GetEntitlement(GetEntitlementRequest, CallSettings)

```
public virtual Entitlement GetEntitlement(GetEntitlementRequest request, CallSettings callSettings = null)
```

Returns the requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer entitlement was not found.

Return value: The requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
GetEntitlementRequest request = new GetEntitlementRequest
{
    EntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Entitlement response = cloudChannelServiceClient.GetEntitlement(request);
```

### GetEntitlementAsync(GetEntitlementRequest, CallSettings)

```
public virtual Task<Entitlement> GetEntitlementAsync(GetEntitlementRequest request, CallSettings callSettings = null)
```

Returns the requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer entitlement was not found.

Return value: The requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetEntitlementRequest request = new GetEntitlementRequest
{
    EntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Entitlement response = await cloudChannelServiceClient.GetEntitlementAsync(request);
```

### GetEntitlementAsync(GetEntitlementRequest, CancellationToken)

```
public virtual Task<Entitlement> GetEntitlementAsync(GetEntitlementRequest request, CancellationToken cancellationToken)
```

Returns the requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer entitlement was not found.

Return value: The requested \[Entitlement\]\[google.cloud.channel.v1.Entitlement\] resource.

**Parameters**

**Name**

**Description**

`request`

`[GetEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.GetEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
GetEntitlementRequest request = new GetEntitlementRequest
{
    EntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Entitlement response = await cloudChannelServiceClient.GetEntitlementAsync(request);
```

### ImportCustomer(ImportCustomerRequest, CallSettings)

```
public virtual Customer ImportCustomer(ImportCustomerRequest request, CallSettings callSettings = null)
```

Imports a \[Customer\]\[google.cloud.channel.v1.Customer\] from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite\_if\_exists is true, it will update that Customer's data.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   NOT\_FOUND: Cloud Identity doesn't exist or was deleted.
-   INVALID\_ARGUMENT: Required parameters are missing, or the auth\_token is expired or invalid.
-   ALREADY\_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\].

**Parameters**

**Name**

**Description**

`request`

`[ImportCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ImportCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ImportCustomerRequest request = new ImportCustomerRequest
{
    Parent = "",
    Domain = "",
    AuthToken = "",
    OverwriteIfExists = false,
    ChannelPartnerId = "",
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = cloudChannelServiceClient.ImportCustomer(request);
```

### ImportCustomerAsync(ImportCustomerRequest, CallSettings)

```
public virtual Task<Customer> ImportCustomerAsync(ImportCustomerRequest request, CallSettings callSettings = null)
```

Imports a \[Customer\]\[google.cloud.channel.v1.Customer\] from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite\_if\_exists is true, it will update that Customer's data.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   NOT\_FOUND: Cloud Identity doesn't exist or was deleted.
-   INVALID\_ARGUMENT: Required parameters are missing, or the auth\_token is expired or invalid.
-   ALREADY\_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\].

**Parameters**

**Name**

**Description**

`request`

`[ImportCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ImportCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ImportCustomerRequest request = new ImportCustomerRequest
{
    Parent = "",
    Domain = "",
    AuthToken = "",
    OverwriteIfExists = false,
    ChannelPartnerId = "",
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = await cloudChannelServiceClient.ImportCustomerAsync(request);
```

### ImportCustomerAsync(ImportCustomerRequest, CancellationToken)

```
public virtual Task<Customer> ImportCustomerAsync(ImportCustomerRequest request, CancellationToken cancellationToken)
```

Imports a \[Customer\]\[google.cloud.channel.v1.Customer\] from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite\_if\_exists is true, it will update that Customer's data.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   NOT\_FOUND: Cloud Identity doesn't exist or was deleted.
-   INVALID\_ARGUMENT: Required parameters are missing, or the auth\_token is expired or invalid.
-   ALREADY\_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite.

Return value: The \[Customer\]\[google.cloud.channel.v1.Customer\].

**Parameters**

**Name**

**Description**

`request`

`[ImportCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ImportCustomerRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ImportCustomerRequest request = new ImportCustomerRequest
{
    Parent = "",
    Domain = "",
    AuthToken = "",
    OverwriteIfExists = false,
    ChannelPartnerId = "",
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
Customer response = await cloudChannelServiceClient.ImportCustomerAsync(request);
```

### ListChannelPartnerLinks(ListChannelPartnerLinksRequest, CallSettings)

```
public virtual PagedEnumerable<ListChannelPartnerLinksResponse, ChannelPartnerLink> ListChannelPartnerLinks(ListChannelPartnerLinksRequest request, CallSettings callSettings = null)
```

List \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]s belonging to a distributor. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: The list of the distributor account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resources.

**Parameters**

**Name**

**Description**

`request`

`[ListChannelPartnerLinksRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse), [ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A pageable sequence of [ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListChannelPartnerLinksRequest request = new ListChannelPartnerLinksRequest
{
    Parent = "",
    View = ChannelPartnerLinkView.Unspecified,
};
// Make the request
PagedEnumerable<ListChannelPartnerLinksResponse, ChannelPartnerLink> response = cloudChannelServiceClient.ListChannelPartnerLinks(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (ChannelPartnerLink item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListChannelPartnerLinksResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerLink item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerLink> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerLink item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerLinksAsync(ListChannelPartnerLinksRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListChannelPartnerLinksResponse, ChannelPartnerLink> ListChannelPartnerLinksAsync(ListChannelPartnerLinksRequest request, CallSettings callSettings = null)
```

List \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]s belonging to a distributor. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: The list of the distributor account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resources.

**Parameters**

**Name**

**Description**

`request`

`[ListChannelPartnerLinksRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse), [ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A pageable asynchronous sequence of [ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListChannelPartnerLinksRequest request = new ListChannelPartnerLinksRequest
{
    Parent = "",
    View = ChannelPartnerLinkView.Unspecified,
};
// Make the request
PagedAsyncEnumerable<ListChannelPartnerLinksResponse, ChannelPartnerLink> response = cloudChannelServiceClient.ListChannelPartnerLinksAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((ChannelPartnerLink item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListChannelPartnerLinksResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerLink item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerLink> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerLink item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigs(ChannelPartnerLinkName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigs(ChannelPartnerLinkName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[ChannelPartnerLinkName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLinkName)`  

Required. The resource name of the account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}. Supports accounts/{account\_id}/channelPartnerLinks/- to retrieve configs for all channel partners.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChannelPartnerLinkName parent = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]");
// Make the request
PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (ChannelPartnerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListChannelPartnerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigs(ListChannelPartnerRepricingConfigsRequest, CallSettings)

```
public virtual PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigs(ListChannelPartnerRepricingConfigsRequest request, CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`request`

`[ListChannelPartnerRepricingConfigsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListChannelPartnerRepricingConfigsRequest request = new ListChannelPartnerRepricingConfigsRequest
{
    ParentAsChannelPartnerLinkName = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]"),
    Filter = "",
};
// Make the request
PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigs(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (ChannelPartnerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListChannelPartnerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigs(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigs(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}. Supports accounts/{account\_id}/channelPartnerLinks/- to retrieve configs for all channel partners.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER_LINK]";
// Make the request
PagedEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (ChannelPartnerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListChannelPartnerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigsAsync(ChannelPartnerLinkName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigsAsync(ChannelPartnerLinkName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[ChannelPartnerLinkName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLinkName)`  

Required. The resource name of the account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}. Supports accounts/{account\_id}/channelPartnerLinks/- to retrieve configs for all channel partners.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable asynchronous sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerLinkName parent = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]");
// Make the request
PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((ChannelPartnerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListChannelPartnerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigsAsync(ListChannelPartnerRepricingConfigsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigsAsync(ListChannelPartnerRepricingConfigsRequest request, CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`request`

`[ListChannelPartnerRepricingConfigsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable asynchronous sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListChannelPartnerRepricingConfigsRequest request = new ListChannelPartnerRepricingConfigsRequest
{
    ParentAsChannelPartnerLinkName = ChannelPartnerLinkName.FromAccountChannelPartnerLink("[ACCOUNT]", "[CHANNEL_PARTNER_LINK]"),
    Filter = "",
};
// Make the request
PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((ChannelPartnerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListChannelPartnerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListChannelPartnerRepricingConfigsAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> ListChannelPartnerRepricingConfigsAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   channel partner ID
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[ChannelPartnerRepricingConfig.update\_time\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the account's \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\]. Parent uses the format: accounts/{account\_id}/channelPartnerLinks/{channel\_partner\_id}. Supports accounts/{account\_id}/channelPartnerLinks/- to retrieve configs for all channel partners.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListChannelPartnerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerRepricingConfigsResponse), [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A pageable asynchronous sequence of [ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/channelPartnerLinks/[CHANNEL_PARTNER_LINK]";
// Make the request
PagedAsyncEnumerable<ListChannelPartnerRepricingConfigsResponse, ChannelPartnerRepricingConfig> response = cloudChannelServiceClient.ListChannelPartnerRepricingConfigsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((ChannelPartnerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListChannelPartnerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (ChannelPartnerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<ChannelPartnerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (ChannelPartnerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigs(CustomerName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigs(CustomerName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}. Supports accounts/{account\_id}/customers/- to retrieve configs for all customers.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerName parent = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (CustomerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListCustomerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigs(ListCustomerRepricingConfigsRequest, CallSettings)

```
public virtual PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigs(ListCustomerRepricingConfigsRequest request, CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`request`

`[ListCustomerRepricingConfigsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListCustomerRepricingConfigsRequest request = new ListCustomerRepricingConfigsRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    Filter = "",
};
// Make the request
PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigs(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (CustomerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListCustomerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigs(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigs(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}. Supports accounts/{account\_id}/customers/- to retrieve configs for all customers.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
PagedEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (CustomerRepricingConfig item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListCustomerRepricingConfigsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigsAsync(CustomerName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigsAsync(CustomerName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[CustomerName](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerName)`  

Required. The resource name of the customer. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}. Supports accounts/{account\_id}/customers/- to retrieve configs for all customers.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable asynchronous sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerName parent = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]");
// Make the request
PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((CustomerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListCustomerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigsAsync(ListCustomerRepricingConfigsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigsAsync(ListCustomerRepricingConfigsRequest request, CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`request`

`[ListCustomerRepricingConfigsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable asynchronous sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListCustomerRepricingConfigsRequest request = new ListCustomerRepricingConfigsRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    Filter = "",
};
// Make the request
PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((CustomerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListCustomerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomerRepricingConfigsAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> ListCustomerRepricingConfigsAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists information about how a Reseller modifies their bill before sending it to a Customer.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resources. The data for each resource is displayed in the ascending order of:

-   customer ID
-   \[RepricingConfig.EntitlementGranularity.entitlement\]\[google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement\]
-   \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\]
-   \[CustomerRepricingConfig.update\_time\]\[google.cloud.channel.v1.CustomerRepricingConfig.update\_time\]

If unsuccessful, returns an error.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the customer. Parent uses the format: accounts/{account\_id}/customers/{customer\_id}. Supports accounts/{account\_id}/customers/- to retrieve configs for all customers.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListCustomerRepricingConfigsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomerRepricingConfigsResponse), [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A pageable asynchronous sequence of [CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "accounts/[ACCOUNT]/customers/[CUSTOMER]";
// Make the request
PagedAsyncEnumerable<ListCustomerRepricingConfigsResponse, CustomerRepricingConfig> response = cloudChannelServiceClient.ListCustomerRepricingConfigsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((CustomerRepricingConfig item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListCustomerRepricingConfigsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (CustomerRepricingConfig item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<CustomerRepricingConfig> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (CustomerRepricingConfig item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomers(ListCustomersRequest, CallSettings)

```
public virtual PagedEnumerable<ListCustomersResponse, Customer> ListCustomers(ListCustomersRequest request, CallSettings callSettings = null)
```

List \[Customer\]\[google.cloud.channel.v1.Customer\]s.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: List of \[Customer\]\[google.cloud.channel.v1.Customer\]s, or an empty list if there are no customers.

**Parameters**

**Name**

**Description**

`request`

`[ListCustomersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListCustomersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomersResponse), [Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A pageable sequence of [Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListCustomersRequest request = new ListCustomersRequest
{
    Parent = "",
    Filter = "",
};
// Make the request
PagedEnumerable<ListCustomersResponse, Customer> response = cloudChannelServiceClient.ListCustomers(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Customer item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListCustomersResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Customer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Customer> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Customer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListCustomersAsync(ListCustomersRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListCustomersResponse, Customer> ListCustomersAsync(ListCustomersRequest request, CallSettings callSettings = null)
```

List \[Customer\]\[google.cloud.channel.v1.Customer\]s.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: List of \[Customer\]\[google.cloud.channel.v1.Customer\]s, or an empty list if there are no customers.

**Parameters**

**Name**

**Description**

`request`

`[ListCustomersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListCustomersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListCustomersResponse), [Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A pageable asynchronous sequence of [Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListCustomersRequest request = new ListCustomersRequest
{
    Parent = "",
    Filter = "",
};
// Make the request
PagedAsyncEnumerable<ListCustomersResponse, Customer> response = cloudChannelServiceClient.ListCustomersAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Customer item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListCustomersResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Customer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Customer> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Customer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEntitlements(ListEntitlementsRequest, CallSettings)

```
public virtual PagedEnumerable<ListEntitlementsResponse, Entitlement> ListEntitlements(ListEntitlementsRequest request, CallSettings callSettings = null)
```

Lists \[Entitlement\]\[google.cloud.channel.v1.Entitlement\]s belonging to a customer.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: A list of the customer's \[Entitlement\]\[google.cloud.channel.v1.Entitlement\]s.

**Parameters**

**Name**

**Description**

`request`

`[ListEntitlementsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListEntitlementsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListEntitlementsResponse), [Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement)>`

A pageable sequence of [Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListEntitlementsRequest request = new ListEntitlementsRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
PagedEnumerable<ListEntitlementsResponse, Entitlement> response = cloudChannelServiceClient.ListEntitlements(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Entitlement item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEntitlementsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Entitlement item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Entitlement> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Entitlement item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEntitlementsAsync(ListEntitlementsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEntitlementsResponse, Entitlement> ListEntitlementsAsync(ListEntitlementsRequest request, CallSettings callSettings = null)
```

Lists \[Entitlement\]\[google.cloud.channel.v1.Entitlement\]s belonging to a customer.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: A list of the customer's \[Entitlement\]\[google.cloud.channel.v1.Entitlement\]s.

**Parameters**

**Name**

**Description**

`request`

`[ListEntitlementsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListEntitlementsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListEntitlementsResponse), [Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement)>`

A pageable asynchronous sequence of [Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListEntitlementsRequest request = new ListEntitlementsRequest
{
    ParentAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
};
// Make the request
PagedAsyncEnumerable<ListEntitlementsResponse, Entitlement> response = cloudChannelServiceClient.ListEntitlementsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Entitlement item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEntitlementsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Entitlement item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Entitlement> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Entitlement item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListOffers(ListOffersRequest, CallSettings)

```
public virtual PagedEnumerable<ListOffersResponse, Offer> ListOffers(ListOffersRequest request, CallSettings callSettings = null)
```

Lists the Offers the reseller can sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListOffersResponse), [Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer)>`

A pageable sequence of [Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListOffersRequest request = new ListOffersRequest
{
    Parent = "",
    Filter = "",
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListOffersResponse, Offer> response = cloudChannelServiceClient.ListOffers(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Offer item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListOffersResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Offer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Offer> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Offer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListOffersAsync(ListOffersRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListOffersResponse, Offer> ListOffersAsync(ListOffersRequest request, CallSettings callSettings = null)
```

Lists the Offers the reseller can sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListOffersResponse), [Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer)>`

A pageable asynchronous sequence of [Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListOffersRequest request = new ListOffersRequest
{
    Parent = "",
    Filter = "",
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListOffersResponse, Offer> response = cloudChannelServiceClient.ListOffersAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Offer item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListOffersResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Offer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Offer> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Offer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListProducts(ListProductsRequest, CallSettings)

```
public virtual PagedEnumerable<ListProductsResponse, Product> ListProducts(ListProductsRequest request, CallSettings callSettings = null)
```

Lists the Products the reseller is authorized to sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListProductsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListProductsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListProductsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListProductsResponse), [Product](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Product)>`

A pageable sequence of [Product](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Product) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListProductsRequest request = new ListProductsRequest
{
    Account = "",
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListProductsResponse, Product> response = cloudChannelServiceClient.ListProducts(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Product item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListProductsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Product item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Product> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Product item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListProductsAsync(ListProductsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListProductsResponse, Product> ListProductsAsync(ListProductsRequest request, CallSettings callSettings = null)
```

Lists the Products the reseller is authorized to sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListProductsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListProductsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListProductsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListProductsResponse), [Product](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Product)>`

A pageable asynchronous sequence of [Product](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Product) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListProductsRequest request = new ListProductsRequest
{
    Account = "",
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListProductsResponse, Product> response = cloudChannelServiceClient.ListProductsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Product item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListProductsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Product item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Product> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Product item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPurchasableOffers(ListPurchasableOffersRequest, CallSettings)

```
public virtual PagedEnumerable<ListPurchasableOffersResponse, PurchasableOffer> ListPurchasableOffers(ListPurchasableOffersRequest request, CallSettings callSettings = null)
```

Lists the following:

-   Offers that you can purchase for a customer.
-   Offers that you can change for an entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListPurchasableOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListPurchasableOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableOffersResponse), [PurchasableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableOffer)>`

A pageable sequence of [PurchasableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableOffer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListPurchasableOffersRequest request = new ListPurchasableOffersRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CreateEntitlementPurchase = new ListPurchasableOffersRequest.Types.CreateEntitlementPurchase(),
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListPurchasableOffersResponse, PurchasableOffer> response = cloudChannelServiceClient.ListPurchasableOffers(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (PurchasableOffer item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListPurchasableOffersResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PurchasableOffer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PurchasableOffer> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PurchasableOffer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPurchasableOffersAsync(ListPurchasableOffersRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListPurchasableOffersResponse, PurchasableOffer> ListPurchasableOffersAsync(ListPurchasableOffersRequest request, CallSettings callSettings = null)
```

Lists the following:

-   Offers that you can purchase for a customer.
-   Offers that you can change for an entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListPurchasableOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListPurchasableOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableOffersResponse), [PurchasableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableOffer)>`

A pageable asynchronous sequence of [PurchasableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableOffer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListPurchasableOffersRequest request = new ListPurchasableOffersRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CreateEntitlementPurchase = new ListPurchasableOffersRequest.Types.CreateEntitlementPurchase(),
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListPurchasableOffersResponse, PurchasableOffer> response = cloudChannelServiceClient.ListPurchasableOffersAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((PurchasableOffer item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListPurchasableOffersResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PurchasableOffer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PurchasableOffer> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PurchasableOffer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPurchasableSkus(ListPurchasableSkusRequest, CallSettings)

```
public virtual PagedEnumerable<ListPurchasableSkusResponse, PurchasableSku> ListPurchasableSkus(ListPurchasableSkusRequest request, CallSettings callSettings = null)
```

Lists the following:

-   SKUs that you can purchase for a customer
-   SKUs that you can upgrade or downgrade for an entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListPurchasableSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListPurchasableSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableSkusResponse), [PurchasableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableSku)>`

A pageable sequence of [PurchasableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableSku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListPurchasableSkusRequest request = new ListPurchasableSkusRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CreateEntitlementPurchase = new ListPurchasableSkusRequest.Types.CreateEntitlementPurchase(),
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListPurchasableSkusResponse, PurchasableSku> response = cloudChannelServiceClient.ListPurchasableSkus(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (PurchasableSku item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListPurchasableSkusResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PurchasableSku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PurchasableSku> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PurchasableSku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPurchasableSkusAsync(ListPurchasableSkusRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListPurchasableSkusResponse, PurchasableSku> ListPurchasableSkusAsync(ListPurchasableSkusRequest request, CallSettings callSettings = null)
```

Lists the following:

-   SKUs that you can purchase for a customer
-   SKUs that you can upgrade or downgrade for an entitlement.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListPurchasableSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListPurchasableSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListPurchasableSkusResponse), [PurchasableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableSku)>`

A pageable asynchronous sequence of [PurchasableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.PurchasableSku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListPurchasableSkusRequest request = new ListPurchasableSkusRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CreateEntitlementPurchase = new ListPurchasableSkusRequest.Types.CreateEntitlementPurchase(),
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListPurchasableSkusResponse, PurchasableSku> response = cloudChannelServiceClient.ListPurchasableSkusAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((PurchasableSku item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListPurchasableSkusResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PurchasableSku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PurchasableSku> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PurchasableSku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSkus(ListSkusRequest, CallSettings)

```
public virtual PagedEnumerable<ListSkusResponse, Sku> ListSkus(ListSkusRequest request, CallSettings callSettings = null)
```

Lists the SKUs for a product the reseller is authorized to sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSkusResponse), [Sku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Sku)>`

A pageable sequence of [Sku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Sku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListSkusRequest request = new ListSkusRequest
{
    ParentAsProductName = ProductName.FromProduct("[PRODUCT]"),
    Account = "",
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListSkusResponse, Sku> response = cloudChannelServiceClient.ListSkus(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Sku item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSkusResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Sku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Sku> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Sku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSkusAsync(ListSkusRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSkusResponse, Sku> ListSkusAsync(ListSkusRequest request, CallSettings callSettings = null)
```

Lists the SKUs for a product the reseller is authorized to sell.

Possible error codes:

-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[ListSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSkusResponse), [Sku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Sku)>`

A pageable asynchronous sequence of [Sku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Sku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListSkusRequest request = new ListSkusRequest
{
    ParentAsProductName = ProductName.FromProduct("[PRODUCT]"),
    Account = "",
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListSkusResponse, Sku> response = cloudChannelServiceClient.ListSkusAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Sku item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSkusResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Sku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Sku> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Sku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSubscribers(ListSubscribersRequest, CallSettings)

```
public virtual PagedEnumerable<ListSubscribersResponse, string> ListSubscribers(ListSubscribersRequest request, CallSettings callSettings = null)
```

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The topic resource doesn't exist.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: A list of service email addresses.

**Parameters**

**Name**

**Description**

`request`

`[ListSubscribersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSubscribersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListSubscribersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSubscribersResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListSubscribersRequest request = new ListSubscribersRequest { Account = "", };
// Make the request
PagedEnumerable<ListSubscribersResponse, string> response = cloudChannelServiceClient.ListSubscribers(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSubscribersResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSubscribersAsync(ListSubscribersRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSubscribersResponse, string> ListSubscribersAsync(ListSubscribersRequest request, CallSettings callSettings = null)
```

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The topic resource doesn't exist.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: A list of service email addresses.

**Parameters**

**Name**

**Description**

`request`

`[ListSubscribersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSubscribersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListSubscribersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListSubscribersResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListSubscribersRequest request = new ListSubscribersRequest { Account = "", };
// Make the request
PagedAsyncEnumerable<ListSubscribersResponse, string> response = cloudChannelServiceClient.ListSubscribersAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSubscribersResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTransferableOffers(ListTransferableOffersRequest, CallSettings)

```
public virtual PagedEnumerable<ListTransferableOffersResponse, TransferableOffer> ListTransferableOffers(ListTransferableOffersRequest request, CallSettings callSettings = null)
```

List \[TransferableOffer\]\[google.cloud.channel.v1.TransferableOffer\]s of a customer based on Cloud Identity ID or Customer Name in the request.

Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name.

Possible error codes:

-   PERMISSION\_DENIED:
-   The customer doesn't belong to the reseller and has no auth token.
-   The supplied auth token is invalid.
-   The reseller account making the request is different from the reseller account in the query.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: List of \[TransferableOffer\]\[google.cloud.channel.v1.TransferableOffer\] for the given customer and SKU.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferableOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListTransferableOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableOffersResponse), [TransferableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableOffer)>`

A pageable sequence of [TransferableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableOffer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListTransferableOffersRequest request = new ListTransferableOffersRequest
{
    Parent = "",
    CloudIdentityId = "",
    Sku = "",
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListTransferableOffersResponse, TransferableOffer> response = cloudChannelServiceClient.ListTransferableOffers(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (TransferableOffer item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTransferableOffersResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TransferableOffer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TransferableOffer> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TransferableOffer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTransferableOffersAsync(ListTransferableOffersRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTransferableOffersResponse, TransferableOffer> ListTransferableOffersAsync(ListTransferableOffersRequest request, CallSettings callSettings = null)
```

List \[TransferableOffer\]\[google.cloud.channel.v1.TransferableOffer\]s of a customer based on Cloud Identity ID or Customer Name in the request.

Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name.

Possible error codes:

-   PERMISSION\_DENIED:
-   The customer doesn't belong to the reseller and has no auth token.
-   The supplied auth token is invalid.
-   The reseller account making the request is different from the reseller account in the query.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: List of \[TransferableOffer\]\[google.cloud.channel.v1.TransferableOffer\] for the given customer and SKU.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferableOffersRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableOffersRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListTransferableOffersResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableOffersResponse), [TransferableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableOffer)>`

A pageable asynchronous sequence of [TransferableOffer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableOffer) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListTransferableOffersRequest request = new ListTransferableOffersRequest
{
    Parent = "",
    CloudIdentityId = "",
    Sku = "",
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListTransferableOffersResponse, TransferableOffer> response = cloudChannelServiceClient.ListTransferableOffersAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TransferableOffer item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTransferableOffersResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TransferableOffer item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TransferableOffer> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TransferableOffer item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTransferableSkus(ListTransferableSkusRequest, CallSettings)

```
public virtual PagedEnumerable<ListTransferableSkusResponse, TransferableSku> ListTransferableSkus(ListTransferableSkusRequest request, CallSettings callSettings = null)
```

List \[TransferableSku\]\[google.cloud.channel.v1.TransferableSku\]s of a customer based on the Cloud Identity ID or Customer Name in the request.

Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name.

Possible error codes:

-   PERMISSION\_DENIED:
-   The customer doesn't belong to the reseller and has no auth token.
-   The supplied auth token is invalid.
-   The reseller account making the request is different from the reseller account in the query.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: A list of the customer's \[TransferableSku\]\[google.cloud.channel.v1.TransferableSku\].

**Parameters**

**Name**

**Description**

`request`

`[ListTransferableSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListTransferableSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableSkusResponse), [TransferableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableSku)>`

A pageable sequence of [TransferableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableSku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ListTransferableSkusRequest request = new ListTransferableSkusRequest
{
    Parent = "",
    CloudIdentityId = "",
    AuthToken = "",
    LanguageCode = "",
};
// Make the request
PagedEnumerable<ListTransferableSkusResponse, TransferableSku> response = cloudChannelServiceClient.ListTransferableSkus(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (TransferableSku item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTransferableSkusResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TransferableSku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TransferableSku> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TransferableSku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTransferableSkusAsync(ListTransferableSkusRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTransferableSkusResponse, TransferableSku> ListTransferableSkusAsync(ListTransferableSkusRequest request, CallSettings callSettings = null)
```

List \[TransferableSku\]\[google.cloud.channel.v1.TransferableSku\]s of a customer based on the Cloud Identity ID or Customer Name in the request.

Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name.

Possible error codes:

-   PERMISSION\_DENIED:
-   The customer doesn't belong to the reseller and has no auth token.
-   The supplied auth token is invalid.
-   The reseller account making the request is different from the reseller account in the query.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.

Return value: A list of the customer's \[TransferableSku\]\[google.cloud.channel.v1.TransferableSku\].

**Parameters**

**Name**

**Description**

`request`

`[ListTransferableSkusRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableSkusRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListTransferableSkusResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListTransferableSkusResponse), [TransferableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableSku)>`

A pageable asynchronous sequence of [TransferableSku](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferableSku) resources.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ListTransferableSkusRequest request = new ListTransferableSkusRequest
{
    Parent = "",
    CloudIdentityId = "",
    AuthToken = "",
    LanguageCode = "",
};
// Make the request
PagedAsyncEnumerable<ListTransferableSkusResponse, TransferableSku> response = cloudChannelServiceClient.ListTransferableSkusAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TransferableSku item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTransferableSkusResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TransferableSku item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TransferableSku> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TransferableSku item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### LookupOffer(LookupOfferRequest, CallSettings)

```
public virtual Offer LookupOffer(LookupOfferRequest request, CallSettings callSettings = null)
```

Returns the requested \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The entitlement doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement or offer was not found.

Return value: The \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[LookupOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.LookupOfferRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
LookupOfferRequest request = new LookupOfferRequest
{
    EntitlementAsEntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Offer response = cloudChannelServiceClient.LookupOffer(request);
```

### LookupOfferAsync(LookupOfferRequest, CallSettings)

```
public virtual Task<Offer> LookupOfferAsync(LookupOfferRequest request, CallSettings callSettings = null)
```

Returns the requested \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The entitlement doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement or offer was not found.

Return value: The \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[LookupOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.LookupOfferRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
LookupOfferRequest request = new LookupOfferRequest
{
    EntitlementAsEntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Offer response = await cloudChannelServiceClient.LookupOfferAsync(request);
```

### LookupOfferAsync(LookupOfferRequest, CancellationToken)

```
public virtual Task<Offer> LookupOfferAsync(LookupOfferRequest request, CancellationToken cancellationToken)
```

Returns the requested \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

Possible error codes:

-   PERMISSION\_DENIED: The entitlement doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement or offer was not found.

Return value: The \[Offer\]\[google.cloud.channel.v1.Offer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[LookupOfferRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.LookupOfferRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Offer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Offer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
LookupOfferRequest request = new LookupOfferRequest
{
    EntitlementAsEntitlementName = EntitlementName.FromAccountCustomerEntitlement("[ACCOUNT]", "[CUSTOMER]", "[ENTITLEMENT]"),
};
// Make the request
Offer response = await cloudChannelServiceClient.LookupOfferAsync(request);
```

### PollOnceActivateEntitlement(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceActivateEntitlement(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ActivateEntitlement` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceActivateEntitlementAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceActivateEntitlementAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ActivateEntitlement`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceCancelEntitlement(String, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> PollOnceCancelEntitlement(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CancelEntitlement` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceCancelEntitlementAsync(String, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> PollOnceCancelEntitlementAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CancelEntitlement`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceChangeOffer(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceChangeOffer(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ChangeOffer`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceChangeOfferAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceChangeOfferAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ChangeOffer`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceChangeParameters(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceChangeParameters(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ChangeParameters`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceChangeParametersAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceChangeParametersAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ChangeParameters`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceChangeRenewalSettings(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceChangeRenewalSettings(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ChangeRenewalSettings` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceChangeRenewalSettingsAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceChangeRenewalSettingsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ChangeRenewalSettings`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceCreateEntitlement(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceCreateEntitlement(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CreateEntitlement` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceCreateEntitlementAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceCreateEntitlementAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CreateEntitlement`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceProvisionCloudIdentity(String, CallSettings)

```
public virtual Operation<Customer, OperationMetadata> PollOnceProvisionCloudIdentity(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ProvisionCloudIdentity`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceProvisionCloudIdentityAsync(String, CallSettings)

```
public virtual Task<Operation<Customer, OperationMetadata>> PollOnceProvisionCloudIdentityAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ProvisionCloudIdentity`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceStartPaidService(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceStartPaidService(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `StartPaidService`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceStartPaidServiceAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceStartPaidServiceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `StartPaidService`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceSuspendEntitlement(String, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> PollOnceSuspendEntitlement(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SuspendEntitlement` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceSuspendEntitlementAsync(String, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> PollOnceSuspendEntitlementAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SuspendEntitlement`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceTransferEntitlements(String, CallSettings)

```
public virtual Operation<TransferEntitlementsResponse, OperationMetadata> PollOnceTransferEntitlements(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `TransferEntitlements` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[TransferEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsResponse), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceTransferEntitlementsAsync(String, CallSettings)

```
public virtual Task<Operation<TransferEntitlementsResponse, OperationMetadata>> PollOnceTransferEntitlementsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `TransferEntitlements`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[TransferEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsResponse), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### PollOnceTransferEntitlementsToGoogle(String, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> PollOnceTransferEntitlementsToGoogle(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `TransferEntitlementsToGoogle`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The result of polling the operation.

### PollOnceTransferEntitlementsToGoogleAsync(String, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> PollOnceTransferEntitlementsToGoogleAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `TransferEntitlementsToGoogle`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A task representing the result of polling the operation.

### ProvisionCloudIdentity(ProvisionCloudIdentityRequest, CallSettings)

```
public virtual Operation<Customer, OperationMetadata> ProvisionCloudIdentity(ProvisionCloudIdentityRequest request, CallSettings callSettings = null)
```

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer was not found.
-   ALREADY\_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ProvisionCloudIdentityRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ProvisionCloudIdentityRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ProvisionCloudIdentityRequest request = new ProvisionCloudIdentityRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CloudIdentityInfo = new CloudIdentityInfo(),
    User = new AdminUser(),
    ValidateOnly = false,
};
// Make the request
Operation<Customer, OperationMetadata> response = cloudChannelServiceClient.ProvisionCloudIdentity(request);

// Poll until the returned long-running operation is complete
Operation<Customer, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Customer result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Customer, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceProvisionCloudIdentity(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Customer retrievedResult = retrievedResponse.Result;
}
```

### ProvisionCloudIdentityAsync(ProvisionCloudIdentityRequest, CallSettings)

```
public virtual Task<Operation<Customer, OperationMetadata>> ProvisionCloudIdentityAsync(ProvisionCloudIdentityRequest request, CallSettings callSettings = null)
```

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer was not found.
-   ALREADY\_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ProvisionCloudIdentityRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ProvisionCloudIdentityRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ProvisionCloudIdentityRequest request = new ProvisionCloudIdentityRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CloudIdentityInfo = new CloudIdentityInfo(),
    User = new AdminUser(),
    ValidateOnly = false,
};
// Make the request
Operation<Customer, OperationMetadata> response = await cloudChannelServiceClient.ProvisionCloudIdentityAsync(request);

// Poll until the returned long-running operation is complete
Operation<Customer, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Customer result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Customer, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceProvisionCloudIdentityAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Customer retrievedResult = retrievedResponse.Result;
}
```

### ProvisionCloudIdentityAsync(ProvisionCloudIdentityRequest, CancellationToken)

```
public virtual Task<Operation<Customer, OperationMetadata>> ProvisionCloudIdentityAsync(ProvisionCloudIdentityRequest request, CancellationToken cancellationToken)
```

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer was not found.
-   ALREADY\_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[ProvisionCloudIdentityRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ProvisionCloudIdentityRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ProvisionCloudIdentityRequest request = new ProvisionCloudIdentityRequest
{
    CustomerAsCustomerName = CustomerName.FromAccountCustomer("[ACCOUNT]", "[CUSTOMER]"),
    CloudIdentityInfo = new CloudIdentityInfo(),
    User = new AdminUser(),
    ValidateOnly = false,
};
// Make the request
Operation<Customer, OperationMetadata> response = await cloudChannelServiceClient.ProvisionCloudIdentityAsync(request);

// Poll until the returned long-running operation is complete
Operation<Customer, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Customer result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Customer, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceProvisionCloudIdentityAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Customer retrievedResult = retrievedResponse.Result;
}
```

### RegisterSubscriber(RegisterSubscriberRequest, CallSettings)

```
public virtual RegisterSubscriberResponse RegisterSubscriber(RegisterSubscriberRequest request, CallSettings callSettings = null)
```

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through \[SubscriberEvent\]\[google.cloud.channel.v1.SubscriberEvent\]

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name with the registered service email address.

**Parameters**

**Name**

**Description**

`request`

`[RegisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[RegisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberResponse)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
RegisterSubscriberRequest request = new RegisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
RegisterSubscriberResponse response = cloudChannelServiceClient.RegisterSubscriber(request);
```

### RegisterSubscriberAsync(RegisterSubscriberRequest, CallSettings)

```
public virtual Task<RegisterSubscriberResponse> RegisterSubscriberAsync(RegisterSubscriberRequest request, CallSettings callSettings = null)
```

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through \[SubscriberEvent\]\[google.cloud.channel.v1.SubscriberEvent\]

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name with the registered service email address.

**Parameters**

**Name**

**Description**

`request`

`[RegisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RegisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
RegisterSubscriberRequest request = new RegisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
RegisterSubscriberResponse response = await cloudChannelServiceClient.RegisterSubscriberAsync(request);
```

### RegisterSubscriberAsync(RegisterSubscriberRequest, CancellationToken)

```
public virtual Task<RegisterSubscriberResponse> RegisterSubscriberAsync(RegisterSubscriberRequest request, CancellationToken cancellationToken)
```

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through \[SubscriberEvent\]\[google.cloud.channel.v1.SubscriberEvent\]

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name with the registered service email address.

**Parameters**

**Name**

**Description**

`request`

`[RegisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RegisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.RegisterSubscriberResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
RegisterSubscriberRequest request = new RegisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
RegisterSubscriberResponse response = await cloudChannelServiceClient.RegisterSubscriberAsync(request);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient#Google_Cloud_Channel_V1_CloudChannelServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient#Google_Cloud_Channel_V1_CloudChannelServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient#Google_Cloud_Channel_V1_CloudChannelServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CloudChannelServiceClient#Google_Cloud_Channel_V1_CloudChannelServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### StartPaidService(StartPaidServiceRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> StartPaidService(StartPaidServiceRequest request, CallSettings callSettings = null)
```

Starts paid service for a trial entitlement.

Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   FAILED\_PRECONDITION/NOT\_IN\_TRIAL: This method only works for entitlement on trial plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[StartPaidServiceRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.StartPaidServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
StartPaidServiceRequest request = new StartPaidServiceRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.StartPaidService(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceStartPaidService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### StartPaidServiceAsync(StartPaidServiceRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> StartPaidServiceAsync(StartPaidServiceRequest request, CallSettings callSettings = null)
```

Starts paid service for a trial entitlement.

Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   FAILED\_PRECONDITION/NOT\_IN\_TRIAL: This method only works for entitlement on trial plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[StartPaidServiceRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.StartPaidServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
StartPaidServiceRequest request = new StartPaidServiceRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.StartPaidServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceStartPaidServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### StartPaidServiceAsync(StartPaidServiceRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> StartPaidServiceAsync(StartPaidServiceRequest request, CancellationToken cancellationToken)
```

Starts paid service for a trial entitlement.

Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   FAILED\_PRECONDITION/NOT\_IN\_TRIAL: This method only works for entitlement on trial plans.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[StartPaidServiceRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.StartPaidServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
StartPaidServiceRequest request = new StartPaidServiceRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.StartPaidServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceStartPaidServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### SuspendEntitlement(SuspendEntitlementRequest, CallSettings)

```
public virtual Operation<Entitlement, OperationMetadata> SuspendEntitlement(SuspendEntitlementRequest request, CallSettings callSettings = null)
```

Suspends a previously fulfilled entitlement.

An entitlement suspension is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_ACTIVE: Entitlement is not active.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[SuspendEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.SuspendEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
SuspendEntitlementRequest request = new SuspendEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = cloudChannelServiceClient.SuspendEntitlement(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceSuspendEntitlement(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### SuspendEntitlementAsync(SuspendEntitlementRequest, CallSettings)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> SuspendEntitlementAsync(SuspendEntitlementRequest request, CallSettings callSettings = null)
```

Suspends a previously fulfilled entitlement.

An entitlement suspension is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_ACTIVE: Entitlement is not active.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[SuspendEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.SuspendEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
SuspendEntitlementRequest request = new SuspendEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.SuspendEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceSuspendEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### SuspendEntitlementAsync(SuspendEntitlementRequest, CancellationToken)

```
public virtual Task<Operation<Entitlement, OperationMetadata>> SuspendEntitlementAsync(SuspendEntitlementRequest request, CancellationToken cancellationToken)
```

Suspends a previously fulfilled entitlement.

An entitlement suspension is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_ACTIVE: Entitlement is not active.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[SuspendEntitlementRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.SuspendEntitlementRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Entitlement](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Entitlement), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
SuspendEntitlementRequest request = new SuspendEntitlementRequest
{
    Name = "",
    RequestId = "",
};
// Make the request
Operation<Entitlement, OperationMetadata> response = await cloudChannelServiceClient.SuspendEntitlementAsync(request);

// Poll until the returned long-running operation is complete
Operation<Entitlement, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Entitlement result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Entitlement, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceSuspendEntitlementAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Entitlement retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlements(TransferEntitlementsRequest, CallSettings)

```
public virtual Operation<TransferEntitlementsResponse, OperationMetadata> TransferEntitlements(TransferEntitlementsRequest request, CallSettings callSettings = null)
```

Transfers customer entitlements to new reseller.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   Specify all transferring entitlements.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[TransferEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsResponse), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
TransferEntitlementsRequest request = new TransferEntitlementsRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    AuthToken = "",
    RequestId = "",
};
// Make the request
Operation<TransferEntitlementsResponse, OperationMetadata> response = cloudChannelServiceClient.TransferEntitlements(request);

// Poll until the returned long-running operation is complete
Operation<TransferEntitlementsResponse, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
TransferEntitlementsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<TransferEntitlementsResponse, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceTransferEntitlements(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    TransferEntitlementsResponse retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlementsAsync(TransferEntitlementsRequest, CallSettings)

```
public virtual Task<Operation<TransferEntitlementsResponse, OperationMetadata>> TransferEntitlementsAsync(TransferEntitlementsRequest request, CallSettings callSettings = null)
```

Transfers customer entitlements to new reseller.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   Specify all transferring entitlements.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[TransferEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsResponse), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
TransferEntitlementsRequest request = new TransferEntitlementsRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    AuthToken = "",
    RequestId = "",
};
// Make the request
Operation<TransferEntitlementsResponse, OperationMetadata> response = await cloudChannelServiceClient.TransferEntitlementsAsync(request);

// Poll until the returned long-running operation is complete
Operation<TransferEntitlementsResponse, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
TransferEntitlementsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<TransferEntitlementsResponse, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceTransferEntitlementsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    TransferEntitlementsResponse retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlementsAsync(TransferEntitlementsRequest, CancellationToken)

```
public virtual Task<Operation<TransferEntitlementsResponse, OperationMetadata>> TransferEntitlementsAsync(TransferEntitlementsRequest request, CancellationToken cancellationToken)
```

Transfers customer entitlements to new reseller.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   Specify all transferring entitlements.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[TransferEntitlementsResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsResponse), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
TransferEntitlementsRequest request = new TransferEntitlementsRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    AuthToken = "",
    RequestId = "",
};
// Make the request
Operation<TransferEntitlementsResponse, OperationMetadata> response = await cloudChannelServiceClient.TransferEntitlementsAsync(request);

// Poll until the returned long-running operation is complete
Operation<TransferEntitlementsResponse, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
TransferEntitlementsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<TransferEntitlementsResponse, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceTransferEntitlementsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    TransferEntitlementsResponse retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlementsToGoogle(TransferEntitlementsToGoogleRequest, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> TransferEntitlementsToGoogle(TransferEntitlementsToGoogleRequest request, CallSettings callSettings = null)
```

Transfers customer entitlements from their current reseller to Google.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsToGoogleRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsToGoogleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
TransferEntitlementsToGoogleRequest request = new TransferEntitlementsToGoogleRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = cloudChannelServiceClient.TransferEntitlementsToGoogle(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = cloudChannelServiceClient.PollOnceTransferEntitlementsToGoogle(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlementsToGoogleAsync(TransferEntitlementsToGoogleRequest, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> TransferEntitlementsToGoogleAsync(TransferEntitlementsToGoogleRequest request, CallSettings callSettings = null)
```

Transfers customer entitlements from their current reseller to Google.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsToGoogleRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsToGoogleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
TransferEntitlementsToGoogleRequest request = new TransferEntitlementsToGoogleRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudChannelServiceClient.TransferEntitlementsToGoogleAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceTransferEntitlementsToGoogleAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### TransferEntitlementsToGoogleAsync(TransferEntitlementsToGoogleRequest, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> TransferEntitlementsToGoogleAsync(TransferEntitlementsToGoogleRequest request, CancellationToken cancellationToken)
```

Transfers customer entitlements from their current reseller to Google.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The customer or offer resource was not found.
-   ALREADY\_EXISTS: The SKU was already transferred for the customer.
-   CONDITION\_NOT\_MET or FAILED\_PRECONDITION:
-   The SKU requires domain verification to transfer, but the domain is not verified.
-   An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic).
-   (Developer accounts only) Reseller and resold domain must meet the following naming requirements:
-   Domain names must start with goog-test.
-   Domain names must include the reseller domain.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of \[OperationMetadata\]\[google.cloud.channel.v1.OperationMetadata\].

**Parameters**

**Name**

**Description**

`request`

`[TransferEntitlementsToGoogleRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.TransferEntitlementsToGoogleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [OperationMetadata](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.OperationMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
TransferEntitlementsToGoogleRequest request = new TransferEntitlementsToGoogleRequest
{
    Parent = "",
    Entitlements = { new Entitlement(), },
    RequestId = "",
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudChannelServiceClient.TransferEntitlementsToGoogleAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudChannelServiceClient.PollOnceTransferEntitlementsToGoogleAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### UnregisterSubscriber(UnregisterSubscriberRequest, CallSettings)

```
public virtual UnregisterSubscriberResponse UnregisterSubscriber(UnregisterSubscriberRequest request, CallSettings callSettings = null)
```

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The topic resource doesn't exist.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

**Parameters**

**Name**

**Description**

`request`

`[UnregisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[UnregisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberResponse)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
UnregisterSubscriberRequest request = new UnregisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
UnregisterSubscriberResponse response = cloudChannelServiceClient.UnregisterSubscriber(request);
```

### UnregisterSubscriberAsync(UnregisterSubscriberRequest, CallSettings)

```
public virtual Task<UnregisterSubscriberResponse> UnregisterSubscriberAsync(UnregisterSubscriberRequest request, CallSettings callSettings = null)
```

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The topic resource doesn't exist.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

**Parameters**

**Name**

**Description**

`request`

`[UnregisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[UnregisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UnregisterSubscriberRequest request = new UnregisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
UnregisterSubscriberResponse response = await cloudChannelServiceClient.UnregisterSubscriberAsync(request);
```

### UnregisterSubscriberAsync(UnregisterSubscriberRequest, CancellationToken)

```
public virtual Task<UnregisterSubscriberResponse> UnregisterSubscriberAsync(UnregisterSubscriberRequest request, CancellationToken cancellationToken)
```

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: The topic resource doesn't exist.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

**Parameters**

**Name**

**Description**

`request`

`[UnregisterSubscriberRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[UnregisterSubscriberResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UnregisterSubscriberResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UnregisterSubscriberRequest request = new UnregisterSubscriberRequest
{
    Account = "",
    ServiceAccount = "",
};
// Make the request
UnregisterSubscriberResponse response = await cloudChannelServiceClient.UnregisterSubscriberAsync(request);
```

### UpdateChannelPartnerLink(UpdateChannelPartnerLinkRequest, CallSettings)

```
public virtual ChannelPartnerLink UpdateChannelPartnerLink(UpdateChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Updates a channel partner link. Distributors call this method to change a link's status. For example, to suspend a partner link. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Link state cannot change from invited to active or suspended.
-   Cannot send reseller\_cloud\_identity\_id, invite\_url, or name in update mask.
-   NOT\_FOUND: ChannelPartnerLink resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The updated \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
UpdateChannelPartnerLinkRequest request = new UpdateChannelPartnerLinkRequest
{
    Name = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
    UpdateMask = new FieldMask(),
};
// Make the request
ChannelPartnerLink response = cloudChannelServiceClient.UpdateChannelPartnerLink(request);
```

### UpdateChannelPartnerLinkAsync(UpdateChannelPartnerLinkRequest, CallSettings)

```
public virtual Task<ChannelPartnerLink> UpdateChannelPartnerLinkAsync(UpdateChannelPartnerLinkRequest request, CallSettings callSettings = null)
```

Updates a channel partner link. Distributors call this method to change a link's status. For example, to suspend a partner link. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Link state cannot change from invited to active or suspended.
-   Cannot send reseller\_cloud\_identity\_id, invite\_url, or name in update mask.
-   NOT\_FOUND: ChannelPartnerLink resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The updated \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateChannelPartnerLinkRequest request = new UpdateChannelPartnerLinkRequest
{
    Name = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
    UpdateMask = new FieldMask(),
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.UpdateChannelPartnerLinkAsync(request);
```

### UpdateChannelPartnerLinkAsync(UpdateChannelPartnerLinkRequest, CancellationToken)

```
public virtual Task<ChannelPartnerLink> UpdateChannelPartnerLinkAsync(UpdateChannelPartnerLinkRequest request, CancellationToken cancellationToken)
```

Updates a channel partner link. Distributors call this method to change a link's status. For example, to suspend a partner link. You must be a distributor to call this method.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT:
-   Required request parameters are missing or invalid.
-   Link state cannot change from invited to active or suspended.
-   Cannot send reseller\_cloud\_identity\_id, invite\_url, or name in update mask.
-   NOT\_FOUND: ChannelPartnerLink resource not found.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The updated \[ChannelPartnerLink\]\[google.cloud.channel.v1.ChannelPartnerLink\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerLinkRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerLinkRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateChannelPartnerLinkRequest request = new UpdateChannelPartnerLinkRequest
{
    Name = "",
    ChannelPartnerLink = new ChannelPartnerLink(),
    UpdateMask = new FieldMask(),
};
// Make the request
ChannelPartnerLink response = await cloudChannelServiceClient.UpdateChannelPartnerLinkAsync(request);
```

### UpdateChannelPartnerRepricingConfig(ChannelPartnerRepricingConfig, CallSettings)

```
public virtual ChannelPartnerRepricingConfig UpdateChannelPartnerRepricingConfig(ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.UpdateChannelPartnerRepricingConfig(channelPartnerRepricingConfig);
```

### UpdateChannelPartnerRepricingConfig(UpdateChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual ChannelPartnerRepricingConfig UpdateChannelPartnerRepricingConfig(UpdateChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
UpdateChannelPartnerRepricingConfigRequest request = new UpdateChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = cloudChannelServiceClient.UpdateChannelPartnerRepricingConfig(request);
```

### UpdateChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfig, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> UpdateChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CallSettings callSettings = null)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.UpdateChannelPartnerRepricingConfigAsync(channelPartnerRepricingConfig);
```

### UpdateChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfig, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> UpdateChannelPartnerRepricingConfigAsync(ChannelPartnerRepricingConfig channelPartnerRepricingConfig, CancellationToken cancellationToken)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`channelPartnerRepricingConfig`

`[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)`  

Required. The ChannelPartnerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
ChannelPartnerRepricingConfig channelPartnerRepricingConfig = new ChannelPartnerRepricingConfig();
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.UpdateChannelPartnerRepricingConfigAsync(channelPartnerRepricingConfig);
```

### UpdateChannelPartnerRepricingConfigAsync(UpdateChannelPartnerRepricingConfigRequest, CallSettings)

```
public virtual Task<ChannelPartnerRepricingConfig> UpdateChannelPartnerRepricingConfigAsync(UpdateChannelPartnerRepricingConfigRequest request, CallSettings callSettings = null)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateChannelPartnerRepricingConfigRequest request = new UpdateChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.UpdateChannelPartnerRepricingConfigAsync(request);
```

### UpdateChannelPartnerRepricingConfigAsync(UpdateChannelPartnerRepricingConfigRequest, CancellationToken)

```
public virtual Task<ChannelPartnerRepricingConfig> UpdateChannelPartnerRepricingConfigAsync(UpdateChannelPartnerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Updates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[ChannelPartnerRepricingConfig\]\[google.cloud.channel.v1.ChannelPartnerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateChannelPartnerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateChannelPartnerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ChannelPartnerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ChannelPartnerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateChannelPartnerRepricingConfigRequest request = new UpdateChannelPartnerRepricingConfigRequest
{
    ChannelPartnerRepricingConfig = new ChannelPartnerRepricingConfig(),
};
// Make the request
ChannelPartnerRepricingConfig response = await cloudChannelServiceClient.UpdateChannelPartnerRepricingConfigAsync(request);
```

### UpdateCustomer(UpdateCustomerRequest, CallSettings)

```
public virtual Customer UpdateCustomer(UpdateCustomerRequest request, CallSettings callSettings = null)
```

Updates an existing \[Customer\]\[google.cloud.channel.v1.Customer\] resource for the reseller or distributor.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

Return value: The updated \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
UpdateCustomerRequest request = new UpdateCustomerRequest
{
    Customer = new Customer(),
    UpdateMask = new FieldMask(),
};
// Make the request
Customer response = cloudChannelServiceClient.UpdateCustomer(request);
```

### UpdateCustomerAsync(UpdateCustomerRequest, CallSettings)

```
public virtual Task<Customer> UpdateCustomerAsync(UpdateCustomerRequest request, CallSettings callSettings = null)
```

Updates an existing \[Customer\]\[google.cloud.channel.v1.Customer\] resource for the reseller or distributor.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

Return value: The updated \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateCustomerRequest request = new UpdateCustomerRequest
{
    Customer = new Customer(),
    UpdateMask = new FieldMask(),
};
// Make the request
Customer response = await cloudChannelServiceClient.UpdateCustomerAsync(request);
```

### UpdateCustomerAsync(UpdateCustomerRequest, CancellationToken)

```
public virtual Task<Customer> UpdateCustomerAsync(UpdateCustomerRequest request, CancellationToken cancellationToken)
```

Updates an existing \[Customer\]\[google.cloud.channel.v1.Customer\] resource for the reseller or distributor.

Possible error codes:

-   PERMISSION\_DENIED: The reseller account making the request is different from the reseller account in the API request.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: No \[Customer\]\[google.cloud.channel.v1.Customer\] resource found for the name in the request.

Return value: The updated \[Customer\]\[google.cloud.channel.v1.Customer\] resource.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Customer](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.Customer)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateCustomerRequest request = new UpdateCustomerRequest
{
    Customer = new Customer(),
    UpdateMask = new FieldMask(),
};
// Make the request
Customer response = await cloudChannelServiceClient.UpdateCustomerAsync(request);
```

### UpdateCustomerRepricingConfig(CustomerRepricingConfig, CallSettings)

```
public virtual CustomerRepricingConfig UpdateCustomerRepricingConfig(CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.UpdateCustomerRepricingConfig(customerRepricingConfig);
```

### UpdateCustomerRepricingConfig(UpdateCustomerRepricingConfigRequest, CallSettings)

```
public virtual CustomerRepricingConfig UpdateCustomerRepricingConfig(UpdateCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`

The RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = CloudChannelServiceClient.Create();
// Initialize request argument(s)
UpdateCustomerRepricingConfigRequest request = new UpdateCustomerRepricingConfigRequest
{
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = cloudChannelServiceClient.UpdateCustomerRepricingConfig(request);
```

### UpdateCustomerRepricingConfigAsync(CustomerRepricingConfig, CallSettings)

```
public virtual Task<CustomerRepricingConfig> UpdateCustomerRepricingConfigAsync(CustomerRepricingConfig customerRepricingConfig, CallSettings callSettings = null)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.UpdateCustomerRepricingConfigAsync(customerRepricingConfig);
```

### UpdateCustomerRepricingConfigAsync(CustomerRepricingConfig, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> UpdateCustomerRepricingConfigAsync(CustomerRepricingConfig customerRepricingConfig, CancellationToken cancellationToken)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`customerRepricingConfig`

`[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)`  

Required. The CustomerRepricingConfig object to update.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
CustomerRepricingConfig customerRepricingConfig = new CustomerRepricingConfig();
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.UpdateCustomerRepricingConfigAsync(customerRepricingConfig);
```

### UpdateCustomerRepricingConfigAsync(UpdateCustomerRepricingConfigRequest, CallSettings)

```
public virtual Task<CustomerRepricingConfig> UpdateCustomerRepricingConfigAsync(UpdateCustomerRepricingConfigRequest request, CallSettings callSettings = null)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateCustomerRepricingConfigRequest request = new UpdateCustomerRepricingConfigRequest
{
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.UpdateCustomerRepricingConfigAsync(request);
```

### UpdateCustomerRepricingConfigAsync(UpdateCustomerRepricingConfigRequest, CancellationToken)

```
public virtual Task<CustomerRepricingConfig> UpdateCustomerRepricingConfigAsync(UpdateCustomerRepricingConfigRequest request, CancellationToken cancellationToken)
```

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig.

You can only update configs if the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\] is a future month. To make changes to configs for the current month, use \[CreateCustomerRepricingConfig\]\[google.cloud.channel.v1.CloudChannelService.CreateCustomerRepricingConfig\], taking note of its restrictions. You cannot update the \[RepricingConfig.effective\_invoice\_month\]\[google.cloud.channel.v1.RepricingConfig.effective\_invoice\_month\].

When updating a config in the future:

-   This config must already exist.

Possible Error Codes:

-   PERMISSION\_DENIED: If the account making the request and the account being queried are different.
-   INVALID\_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months.
-   NOT\_FOUND: The \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] specified does not exist or is not associated with the given account.
-   INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support.

Return Value: If successful, the updated \[CustomerRepricingConfig\]\[google.cloud.channel.v1.CustomerRepricingConfig\] resource, otherwise returns an error.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCustomerRepricingConfigRequest](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.UpdateCustomerRepricingConfigRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CustomerRepricingConfig](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.CustomerRepricingConfig)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudChannelServiceClient cloudChannelServiceClient = await CloudChannelServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateCustomerRepricingConfigRequest request = new UpdateCustomerRepricingConfigRequest
{
    CustomerRepricingConfig = new CustomerRepricingConfig(),
};
// Make the request
CustomerRepricingConfig response = await cloudChannelServiceClient.UpdateCustomerRepricingConfigAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
