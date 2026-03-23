-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Security Center Management v1 API - Class SecurityCenterManagementClient (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/latest/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.2.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.1.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)

```
public abstract class SecurityCenterManagementClient
```

Reference documentation and code samples for the Security Center Management v1 API class SecurityCenterManagementClient.

SecurityCenterManagement client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SecurityCenterManagementClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[SecurityCenterManagementClientImpl](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClientImpl)

## Namespace

[Google.Cloud.SecurityCenterManagement.V1](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1)

## Assembly

Google.Cloud.SecurityCenterManagement.V1.dll

## Remarks

Service describing handlers for resources

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the SecurityCenterManagement service, which is a host of "securitycentermanagement.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default SecurityCenterManagement scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default SecurityCenterManagement scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual SecurityCenterManagement.SecurityCenterManagementClient GrpcClient { get; }
```

The underlying gRPC SecurityCenterManagement client

**Property Value**

**Type**

**Description**

`[SecurityCenterManagement](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagement)[SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagement.SecurityCenterManagementClient)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/efda2feec93774d4ba31cefd752fdd1fce55d6fa/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/efda2feec93774d4ba31cefd752fdd1fce55d6fa/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

## Methods

### Create()

```
public static SecurityCenterManagementClient Create()
```

Synchronously creates a [SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [SecurityCenterManagementClientBuilder](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClientBuilder).

**Returns**

**Type**

**Description**

`[SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)`

The created [SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient).

### CreateAsync(CancellationToken)

```
public static Task<SecurityCenterManagementClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [SecurityCenterManagementClientBuilder](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient)`

The task representing the created [SecurityCenterManagementClient](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient).

### CreateEventThreatDetectionCustomModule(LocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual EventThreatDetectionCustomModule CreateEventThreatDetectionCustomModule(LocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.CreateEventThreatDetectionCustomModule(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual EventThreatDetectionCustomModule CreateEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
CreateEventThreatDetectionCustomModuleRequest request = new CreateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.CreateEventThreatDetectionCustomModule(request);
```

### CreateEventThreatDetectionCustomModule(FolderLocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual EventThreatDetectionCustomModule CreateEventThreatDetectionCustomModule(FolderLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.CreateEventThreatDetectionCustomModule(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModule(OrganizationLocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual EventThreatDetectionCustomModule CreateEventThreatDetectionCustomModule(OrganizationLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.CreateEventThreatDetectionCustomModule(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModule(string, EventThreatDetectionCustomModule, CallSettings)

```
public virtual EventThreatDetectionCustomModule CreateEventThreatDetectionCustomModule(string parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.CreateEventThreatDetectionCustomModule(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(LocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(LocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(LocationName, EventThreatDetectionCustomModule, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(LocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CancellationToken cancellationToken)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(CreateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(CreateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
CreateEventThreatDetectionCustomModuleRequest request = new CreateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(request);
```

### CreateEventThreatDetectionCustomModuleAsync(CreateEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(CreateEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
CreateEventThreatDetectionCustomModuleRequest request = new CreateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(request);
```

### CreateEventThreatDetectionCustomModuleAsync(FolderLocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(FolderLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(FolderLocationName, EventThreatDetectionCustomModule, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(FolderLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CancellationToken cancellationToken)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(OrganizationLocationName, EventThreatDetectionCustomModule, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(OrganizationLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(OrganizationLocationName, EventThreatDetectionCustomModule, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(OrganizationLocationName parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CancellationToken cancellationToken)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(string, EventThreatDetectionCustomModule, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(string parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CallSettings callSettings = null)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateEventThreatDetectionCustomModuleAsync(string, EventThreatDetectionCustomModule, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> CreateEventThreatDetectionCustomModuleAsync(string parent, EventThreatDetectionCustomModule eventThreatDetectionCustomModule, CancellationToken cancellationToken)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent for the module. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module to create. The event\_threat\_detection\_custom\_module.name will be ignored and server generated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.CreateEventThreatDetectionCustomModuleAsync(parent, eventThreatDetectionCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModule(LocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule CreateSecurityHealthAnalyticsCustomModule(LocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModule(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule CreateSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
CreateSecurityHealthAnalyticsCustomModuleRequest request = new CreateSecurityHealthAnalyticsCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModule(request);
```

### CreateSecurityHealthAnalyticsCustomModule(FolderLocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule CreateSecurityHealthAnalyticsCustomModule(FolderLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModule(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModule(OrganizationLocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule CreateSecurityHealthAnalyticsCustomModule(OrganizationLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModule(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModule(string, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule CreateSecurityHealthAnalyticsCustomModule(string parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModule(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(LocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(LocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(LocationName, SecurityHealthAnalyticsCustomModule, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(LocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CancellationToken cancellationToken)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(CreateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(CreateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
CreateSecurityHealthAnalyticsCustomModuleRequest request = new CreateSecurityHealthAnalyticsCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(CreateSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(CreateSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
CreateSecurityHealthAnalyticsCustomModuleRequest request = new CreateSecurityHealthAnalyticsCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(FolderLocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(FolderLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(FolderLocationName, SecurityHealthAnalyticsCustomModule, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(FolderLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CancellationToken cancellationToken)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(OrganizationLocationName, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(OrganizationLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(OrganizationLocationName, SecurityHealthAnalyticsCustomModule, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(OrganizationLocationName parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CancellationToken cancellationToken)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(string, SecurityHealthAnalyticsCustomModule, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(string parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CallSettings callSettings = null)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### CreateSecurityHealthAnalyticsCustomModuleAsync(string, SecurityHealthAnalyticsCustomModule, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> CreateSecurityHealthAnalyticsCustomModuleAsync(string parent, SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, CancellationToken cancellationToken)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the parent organization, folder, or project of the module, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being created

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.CreateSecurityHealthAnalyticsCustomModuleAsync(parent, securityHealthAnalyticsCustomModule);
```

### DeleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual void DeleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
DeleteEventThreatDetectionCustomModuleRequest request = new DeleteEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
securityCenterManagementClient.DeleteEventThreatDetectionCustomModule(request);
```

### DeleteEventThreatDetectionCustomModule(EventThreatDetectionCustomModuleName, CallSettings)

```
public virtual void DeleteEventThreatDetectionCustomModule(EventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
securityCenterManagementClient.DeleteEventThreatDetectionCustomModule(name);
```

### DeleteEventThreatDetectionCustomModule(string, CallSettings)

```
public virtual void DeleteEventThreatDetectionCustomModule(string name, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
securityCenterManagementClient.DeleteEventThreatDetectionCustomModule(name);
```

### DeleteEventThreatDetectionCustomModuleAsync(DeleteEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(DeleteEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
DeleteEventThreatDetectionCustomModuleRequest request = new DeleteEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(request);
```

### DeleteEventThreatDetectionCustomModuleAsync(DeleteEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(DeleteEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteEventThreatDetectionCustomModuleRequest)`  

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
DeleteEventThreatDetectionCustomModuleRequest request = new DeleteEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(request);
```

### DeleteEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName, CallSettings)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(name);
```

### DeleteEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName, CancellationToken)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName name, CancellationToken cancellationToken)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(name);
```

### DeleteEventThreatDetectionCustomModuleAsync(string, CallSettings)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(string name, CallSettings callSettings = null)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(name);
```

### DeleteEventThreatDetectionCustomModuleAsync(string, CancellationToken)

```
public virtual Task DeleteEventThreatDetectionCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
await securityCenterManagementClient.DeleteEventThreatDetectionCustomModuleAsync(name);
```

### DeleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual void DeleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
DeleteSecurityHealthAnalyticsCustomModuleRequest request = new DeleteSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModule(request);
```

### DeleteSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual void DeleteSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModule(name);
```

### DeleteSecurityHealthAnalyticsCustomModule(string, CallSettings)

```
public virtual void DeleteSecurityHealthAnalyticsCustomModule(string name, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModule(name);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(DeleteSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(DeleteSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
DeleteSecurityHealthAnalyticsCustomModuleRequest request = new DeleteSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(request);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(DeleteSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(DeleteSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
DeleteSecurityHealthAnalyticsCustomModuleRequest request = new DeleteSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
    ValidateOnly = false,
};
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(request);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(name);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName, CancellationToken)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName name, CancellationToken cancellationToken)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(name);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(string, CallSettings)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(string name, CallSettings callSettings = null)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(name);
```

### DeleteSecurityHealthAnalyticsCustomModuleAsync(string, CancellationToken)

```
public virtual Task DeleteSecurityHealthAnalyticsCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the SHA custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `folders/{folder}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.
-   `projects/{project}/locations/{location}/securityHealthAnalyticsCustomModules/{security_health_analytics_custom_module}`.

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
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
await securityCenterManagementClient.DeleteSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetEffectiveEventThreatDetectionCustomModule(EffectiveEventThreatDetectionCustomModuleName, CallSettings)

```
public virtual EffectiveEventThreatDetectionCustomModule GetEffectiveEventThreatDetectionCustomModule(EffectiveEventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[EffectiveEventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
EffectiveEventThreatDetectionCustomModuleName name = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EffectiveEventThreatDetectionCustomModule response = securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModule(name);
```

### GetEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual EffectiveEventThreatDetectionCustomModule GetEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
GetEffectiveEventThreatDetectionCustomModuleRequest request = new GetEffectiveEventThreatDetectionCustomModuleRequest
{
    EffectiveEventThreatDetectionCustomModuleName = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EffectiveEventThreatDetectionCustomModule response = securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModule(request);
```

### GetEffectiveEventThreatDetectionCustomModule(string, CallSettings)

```
public virtual EffectiveEventThreatDetectionCustomModule GetEffectiveEventThreatDetectionCustomModule(string name, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveEventThreatDetectionCustomModules/[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EffectiveEventThreatDetectionCustomModule response = securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModule(name);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(EffectiveEventThreatDetectionCustomModuleName, CallSettings)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(EffectiveEventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[EffectiveEventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EffectiveEventThreatDetectionCustomModuleName name = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(name);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(EffectiveEventThreatDetectionCustomModuleName, CancellationToken)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(EffectiveEventThreatDetectionCustomModuleName name, CancellationToken cancellationToken)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[EffectiveEventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EffectiveEventThreatDetectionCustomModuleName name = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(name);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(GetEffectiveEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(GetEffectiveEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEffectiveEventThreatDetectionCustomModuleRequest request = new GetEffectiveEventThreatDetectionCustomModuleRequest
{
    EffectiveEventThreatDetectionCustomModuleName = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(request);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(GetEffectiveEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(GetEffectiveEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEffectiveEventThreatDetectionCustomModuleRequest request = new GetEffectiveEventThreatDetectionCustomModuleRequest
{
    EffectiveEventThreatDetectionCustomModuleName = EffectiveEventThreatDetectionCustomModuleName.FromOrganizationLocationEffectiveEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(request);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(string, CallSettings)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(string name, CallSettings callSettings = null)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveEventThreatDetectionCustomModules/[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(name);
```

### GetEffectiveEventThreatDetectionCustomModuleAsync(string, CancellationToken)

```
public virtual Task<EffectiveEventThreatDetectionCustomModule> GetEffectiveEventThreatDetectionCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective_event_threat_detection_custom_module}`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveEventThreatDetectionCustomModules/[EFFECTIVE_EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EffectiveEventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEffectiveEventThreatDetectionCustomModuleAsync(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModule(EffectiveSecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual EffectiveSecurityHealthAnalyticsCustomModule GetEffectiveSecurityHealthAnalyticsCustomModule(EffectiveSecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[EffectiveSecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModuleName)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
EffectiveSecurityHealthAnalyticsCustomModuleName name = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModule(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual EffectiveSecurityHealthAnalyticsCustomModule GetEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request = new GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
{
    EffectiveSecurityHealthAnalyticsCustomModuleName = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModule(request);
```

### GetEffectiveSecurityHealthAnalyticsCustomModule(string, CallSettings)

```
public virtual EffectiveSecurityHealthAnalyticsCustomModule GetEffectiveSecurityHealthAnalyticsCustomModule(string name, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveSecurityHealthAnalyticsCustomModules/[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModule(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(EffectiveSecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(EffectiveSecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[EffectiveSecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModuleName)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EffectiveSecurityHealthAnalyticsCustomModuleName name = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(EffectiveSecurityHealthAnalyticsCustomModuleName, CancellationToken)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(EffectiveSecurityHealthAnalyticsCustomModuleName name, CancellationToken cancellationToken)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[EffectiveSecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModuleName)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EffectiveSecurityHealthAnalyticsCustomModuleName name = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request = new GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
{
    EffectiveSecurityHealthAnalyticsCustomModuleName = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(request);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request = new GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
{
    EffectiveSecurityHealthAnalyticsCustomModuleName = EffectiveSecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationEffectiveSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(request);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(string, CallSettings)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(string name, CallSettings callSettings = null)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveSecurityHealthAnalyticsCustomModules/[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(string, CancellationToken)

```
public virtual Task<EffectiveSecurityHealthAnalyticsCustomModule> GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full resource name of the custom module, specified in one of the following formats:

-   `organizations/organization/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `folders/folder/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`
-   `projects/project/{location}/effectiveSecurityHealthAnalyticsCustomModules/{effective_security_health_analytics_custom_module}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/effectiveSecurityHealthAnalyticsCustomModules/[EFFECTIVE_SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
EffectiveSecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetEffectiveSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetEventThreatDetectionCustomModule(EventThreatDetectionCustomModuleName, CallSettings)

```
public virtual EventThreatDetectionCustomModule GetEventThreatDetectionCustomModule(EventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.GetEventThreatDetectionCustomModule(name);
```

### GetEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual EventThreatDetectionCustomModule GetEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[GetEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
GetEventThreatDetectionCustomModuleRequest request = new GetEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.GetEventThreatDetectionCustomModule(request);
```

### GetEventThreatDetectionCustomModule(string, CallSettings)

```
public virtual EventThreatDetectionCustomModule GetEventThreatDetectionCustomModule(string name, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.GetEventThreatDetectionCustomModule(name);
```

### GetEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName name, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(name);
```

### GetEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModuleName name, CancellationToken cancellationToken)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[EventThreatDetectionCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModuleName)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModuleName name = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]");
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(name);
```

### GetEventThreatDetectionCustomModuleAsync(GetEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(GetEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[GetEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEventThreatDetectionCustomModuleRequest request = new GetEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(request);
```

### GetEventThreatDetectionCustomModuleAsync(GetEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(GetEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[GetEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetEventThreatDetectionCustomModuleRequest request = new GetEventThreatDetectionCustomModuleRequest
{
    EventThreatDetectionCustomModuleName = EventThreatDetectionCustomModuleName.FromOrganizationLocationEventThreatDetectionCustomModule("[ORGANIZATION]", "[LOCATION]", "[EVENT_THREAT_DETECTION_CUSTOM_MODULE]"),
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(request);
```

### GetEventThreatDetectionCustomModuleAsync(string, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(string name, CallSettings callSettings = null)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(name);
```

### GetEventThreatDetectionCustomModuleAsync(string, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> GetEventThreatDetectionCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the ETD custom module.

Its format is:

-   `organizations/{organization}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `folders/{folder}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.
-   `projects/{project}/locations/{location}/eventThreatDetectionCustomModules/{event_threat_detection_custom_module}`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/eventThreatDetectionCustomModules/[EVENT_THREAT_DETECTION_CUSTOM_MODULE]";
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.GetEventThreatDetectionCustomModuleAsync(name);
```

### GetSecurityCenterService(GetSecurityCenterServiceRequest, CallSettings)

```
public virtual SecurityCenterService GetSecurityCenterService(GetSecurityCenterServiceRequest request, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
GetSecurityCenterServiceRequest request = new GetSecurityCenterServiceRequest
{
    SecurityCenterServiceName = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
SecurityCenterService response = securityCenterManagementClient.GetSecurityCenterService(request);
```

### GetSecurityCenterService(SecurityCenterServiceName, CallSettings)

```
public virtual SecurityCenterService GetSecurityCenterService(SecurityCenterServiceName name, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[SecurityCenterServiceName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterServiceName)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SecurityCenterServiceName name = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
SecurityCenterService response = securityCenterManagementClient.GetSecurityCenterService(name);
```

### GetSecurityCenterService(string, CallSettings)

```
public virtual SecurityCenterService GetSecurityCenterService(string name, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/securityCenterServices/[SERVICE]";
// Make the request
SecurityCenterService response = securityCenterManagementClient.GetSecurityCenterService(name);
```

### GetSecurityCenterServiceAsync(GetSecurityCenterServiceRequest, CallSettings)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(GetSecurityCenterServiceRequest request, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetSecurityCenterServiceRequest request = new GetSecurityCenterServiceRequest
{
    SecurityCenterServiceName = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(request);
```

### GetSecurityCenterServiceAsync(GetSecurityCenterServiceRequest, CancellationToken)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(GetSecurityCenterServiceRequest request, CancellationToken cancellationToken)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetSecurityCenterServiceRequest request = new GetSecurityCenterServiceRequest
{
    SecurityCenterServiceName = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(request);
```

### GetSecurityCenterServiceAsync(SecurityCenterServiceName, CallSettings)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(SecurityCenterServiceName name, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[SecurityCenterServiceName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterServiceName)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityCenterServiceName name = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(name);
```

### GetSecurityCenterServiceAsync(SecurityCenterServiceName, CancellationToken)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(SecurityCenterServiceName name, CancellationToken cancellationToken)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[SecurityCenterServiceName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterServiceName)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityCenterServiceName name = SecurityCenterServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(name);
```

### GetSecurityCenterServiceAsync(string, CallSettings)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(string name, CallSettings callSettings = null)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/securityCenterServices/[SERVICE]";
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(name);
```

### GetSecurityCenterServiceAsync(string, CancellationToken)

```
public virtual Task<SecurityCenterService> GetSecurityCenterServiceAsync(string name, CancellationToken cancellationToken)
```

Gets service settings for the specified Security Command Center service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The Security Command Center service to retrieve.

Formats:

-   organizations/{organization}/locations/{location}/securityCenterServices/{service}
-   folders/{folder}/locations/{location}/securityCenterServices/{service}
-   projects/{project}/locations/{location}/securityCenterServices/{service}

The possible values for id {service} are:

-   container-threat-detection
-   event-threat-detection
-   security-health-analytics
-   vm-threat-detection
-   web-security-scanner

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/securityCenterServices/[SERVICE]";
// Make the request
SecurityCenterService response = await securityCenterManagementClient.GetSecurityCenterServiceAsync(name);
```

### GetSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule GetSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
GetSecurityHealthAnalyticsCustomModuleRequest request = new GetSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModule(request);
```

### GetSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule GetSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. Name of the resource

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModule(name);
```

### GetSecurityHealthAnalyticsCustomModule(string, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule GetSecurityHealthAnalyticsCustomModule(string name, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the resource

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModule(name);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(GetSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(GetSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetSecurityHealthAnalyticsCustomModuleRequest request = new GetSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(request);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(GetSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(GetSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
GetSecurityHealthAnalyticsCustomModuleRequest request = new GetSecurityHealthAnalyticsCustomModuleRequest
{
    SecurityHealthAnalyticsCustomModuleName = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]"),
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(request);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName name, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. Name of the resource

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModuleName name, CancellationToken cancellationToken)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[SecurityHealthAnalyticsCustomModuleName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModuleName)`  

Required. Name of the resource

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModuleName name = SecurityHealthAnalyticsCustomModuleName.FromOrganizationLocationSecurityHealthAnalyticsCustomModule("[ORGANIZATION]", "[LOCATION]", "[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]");
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(string, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(string name, CallSettings callSettings = null)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the resource

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(name);
```

### GetSecurityHealthAnalyticsCustomModuleAsync(string, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> GetSecurityHealthAnalyticsCustomModuleAsync(string name, CancellationToken cancellationToken)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the resource

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string name = "organizations/[ORGANIZATION]/locations/[LOCATION]/securityHealthAnalyticsCustomModules/[SECURITY_HEALTH_ANALYTICS_CUSTOM_MODULE]";
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.GetSecurityHealthAnalyticsCustomModuleAsync(name);
```

### ListDescendantEventThreatDetectionCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListDescendantEventThreatDetectionCustomModulesRequest request = new ListDescendantEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModulesAsync(ListDescendantEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModulesAsync(ListDescendantEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListDescendantEventThreatDetectionCustomModulesRequest request = new ListDescendantEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantEventThreatDetectionCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListDescendantEventThreatDetectionCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListDescendantEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListDescendantEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListDescendantSecurityHealthAnalyticsCustomModulesRequest request = new ListDescendantSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListDescendantSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModulesAsync(ListDescendantSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModulesAsync(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListDescendantSecurityHealthAnalyticsCustomModulesRequest request = new ListDescendantSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListDescendantSecurityHealthAnalyticsCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListDescendantSecurityHealthAnalyticsCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListDescendantSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListDescendantSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListDescendantSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveEventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveEventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListEffectiveEventThreatDetectionCustomModulesRequest request = new ListEffectiveEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveEventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveEventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveEventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveEventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveEventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModulesAsync(ListEffectiveEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModulesAsync(ListEffectiveEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListEffectiveEventThreatDetectionCustomModulesRequest request = new ListEffectiveEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveEventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveEventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveEventThreatDetectionCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> ListEffectiveEventThreatDetectionCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveEventThreatDetectionCustomModulesResponse)[EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EffectiveEventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveEventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListEffectiveEventThreatDetectionCustomModulesResponse, EffectiveEventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveEventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveEventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveEventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveEventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request = new ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveSecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveSecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request = new ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveSecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveSecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list effective custom modules. specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}` or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)[EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [EffectiveSecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EffectiveSecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, EffectiveSecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListEffectiveSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EffectiveSecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEffectiveSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EffectiveSecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EffectiveSecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EffectiveSecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListEventThreatDetectionCustomModulesRequest request = new ListEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (EventThreatDetectionCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEventThreatDetectionCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModulesAsync(ListEventThreatDetectionCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModulesAsync(ListEventThreatDetectionCustomModulesRequest request, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEventThreatDetectionCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListEventThreatDetectionCustomModulesRequest request = new ListEventThreatDetectionCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEventThreatDetectionCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> ListEventThreatDetectionCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent to list custom modules. Its format is `organizations/{organization}/locations/{location}`, `folders/{folder}/locations/{location}`, or `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEventThreatDetectionCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListEventThreatDetectionCustomModulesResponse)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A pageable asynchronous sequence of [EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListEventThreatDetectionCustomModulesResponse, EventThreatDetectionCustomModule> response = securityCenterManagementClient.ListEventThreatDetectionCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((EventThreatDetectionCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEventThreatDetectionCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (EventThreatDetectionCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<EventThreatDetectionCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (EventThreatDetectionCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServices(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServices(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityCenterService item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityCenterServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServices(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServices(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityCenterService item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityCenterServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServices(ListSecurityCenterServicesRequest, CallSettings)

```
public virtual PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServices(ListSecurityCenterServicesRequest request, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityCenterServicesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListSecurityCenterServicesRequest request = new ListSecurityCenterServicesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServices(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityCenterService item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityCenterServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServices(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServices(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityCenterService item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityCenterServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServices(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServices(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityCenterService item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityCenterServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServicesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServicesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable asynchronous sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityCenterService item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityCenterServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServicesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServicesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable asynchronous sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityCenterService item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityCenterServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServicesAsync(ListSecurityCenterServicesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServicesAsync(ListSecurityCenterServicesRequest request, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityCenterServicesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable asynchronous sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListSecurityCenterServicesRequest request = new ListSecurityCenterServicesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServicesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityCenterService item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityCenterServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServicesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServicesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable asynchronous sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityCenterService item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityCenterServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityCenterServicesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> ListSecurityCenterServicesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all Security Command Center services for the given parent.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the parent to list Security Command Center services.

Formats:

-   organizations/{organization}/locations/{location}
-   folders/{folder}/locations/{location}
-   projects/{project}/locations/{location}

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityCenterServicesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityCenterServicesResponse)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A pageable asynchronous sequence of [SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListSecurityCenterServicesResponse, SecurityCenterService> response = securityCenterManagementClient.ListSecurityCenterServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityCenterService item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityCenterServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityCenterService item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityCenterService> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityCenterService item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModules(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModules(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModules(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModules(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ListSecurityHealthAnalyticsCustomModulesRequest request = new ListSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModules(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModules(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModules(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModules(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModules(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModules(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (SecurityHealthAnalyticsCustomModule item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListSecurityHealthAnalyticsCustomModulesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModulesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModulesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModulesAsync(FolderLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[FolderLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.FolderLocationName)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
FolderLocationName parent = FolderLocationName.FromFolderLocation("[FOLDER]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModulesAsync(ListSecurityHealthAnalyticsCustomModulesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModulesAsync(ListSecurityHealthAnalyticsCustomModulesRequest request, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityHealthAnalyticsCustomModulesRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ListSecurityHealthAnalyticsCustomModulesRequest request = new ListSecurityHealthAnalyticsCustomModulesRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModulesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModulesAsync(OrganizationLocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationLocationName](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.OrganizationLocationName)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
OrganizationLocationName parent = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListSecurityHealthAnalyticsCustomModulesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> ListSecurityHealthAnalyticsCustomModulesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of parent organization, folder, or project in which to list custom modules, specified in one of the following formats:

-   `organizations/{organization}/locations/{location}`
-   `folders/{folder}/locations/{location}`
-   `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListSecurityHealthAnalyticsCustomModulesResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ListSecurityHealthAnalyticsCustomModulesResponse)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A pageable asynchronous sequence of [SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule) resources.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListSecurityHealthAnalyticsCustomModulesResponse, SecurityHealthAnalyticsCustomModule> response = securityCenterManagementClient.ListSecurityHealthAnalyticsCustomModulesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SecurityHealthAnalyticsCustomModule item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListSecurityHealthAnalyticsCustomModulesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SecurityHealthAnalyticsCustomModule item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SecurityHealthAnalyticsCustomModule> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SecurityHealthAnalyticsCustomModule item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient#Google_Cloud_SecurityCenterManagement_V1_SecurityCenterManagementClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient#Google_Cloud_SecurityCenterManagement_V1_SecurityCenterManagementClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient#Google_Cloud_SecurityCenterManagement_V1_SecurityCenterManagementClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterManagementClient#Google_Cloud_SecurityCenterManagement_V1_SecurityCenterManagementClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### SimulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual SimulateSecurityHealthAnalyticsCustomModuleResponse SimulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`request`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SimulateSecurityHealthAnalyticsCustomModuleRequest request = new SimulateSecurityHealthAnalyticsCustomModuleRequest
{
    Parent = "",
    CustomConfig = new CustomConfig(),
    Resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource(),
};
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModule(request);
```

### SimulateSecurityHealthAnalyticsCustomModule(string, CustomConfig, SimulatedResource, CallSettings)

```
public virtual SimulateSecurityHealthAnalyticsCustomModuleResponse SimulateSecurityHealthAnalyticsCustomModule(string parent, CustomConfig customConfig, SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource, CallSettings callSettings = null)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`.

`customConfig`

`[CustomConfig](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CustomConfig)`  

Required. The custom configuration that you need to test.

`resource`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types)[SimulatedResource](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource)`  

Required. Resource data to simulate custom module against.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
string parent = "";
CustomConfig customConfig = new CustomConfig();
SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource();
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModule(parent, customConfig, resource);
```

### SimulateSecurityHealthAnalyticsCustomModuleAsync(SimulateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task<SimulateSecurityHealthAnalyticsCustomModuleResponse> SimulateSecurityHealthAnalyticsCustomModuleAsync(SimulateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`request`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SimulateSecurityHealthAnalyticsCustomModuleRequest request = new SimulateSecurityHealthAnalyticsCustomModuleRequest
{
    Parent = "",
    CustomConfig = new CustomConfig(),
    Resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource(),
};
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = await securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### SimulateSecurityHealthAnalyticsCustomModuleAsync(SimulateSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task<SimulateSecurityHealthAnalyticsCustomModuleResponse> SimulateSecurityHealthAnalyticsCustomModuleAsync(SimulateSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`request`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SimulateSecurityHealthAnalyticsCustomModuleRequest request = new SimulateSecurityHealthAnalyticsCustomModuleRequest
{
    Parent = "",
    CustomConfig = new CustomConfig(),
    Resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource(),
};
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = await securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### SimulateSecurityHealthAnalyticsCustomModuleAsync(string, CustomConfig, SimulatedResource, CallSettings)

```
public virtual Task<SimulateSecurityHealthAnalyticsCustomModuleResponse> SimulateSecurityHealthAnalyticsCustomModuleAsync(string parent, CustomConfig customConfig, SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource, CallSettings callSettings = null)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`.

`customConfig`

`[CustomConfig](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CustomConfig)`  

Required. The custom configuration that you need to test.

`resource`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types)[SimulatedResource](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource)`  

Required. Resource data to simulate custom module against.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "";
CustomConfig customConfig = new CustomConfig();
SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource();
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = await securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModuleAsync(parent, customConfig, resource);
```

### SimulateSecurityHealthAnalyticsCustomModuleAsync(string, CustomConfig, SimulatedResource, CancellationToken)

```
public virtual Task<SimulateSecurityHealthAnalyticsCustomModuleResponse> SimulateSecurityHealthAnalyticsCustomModuleAsync(string parent, CustomConfig customConfig, SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource, CancellationToken cancellationToken)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`.

`customConfig`

`[CustomConfig](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.CustomConfig)`  

Required. The custom configuration that you need to test.

`resource`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types)[SimulatedResource](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource)`  

Required. Resource data to simulate custom module against.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SimulateSecurityHealthAnalyticsCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
string parent = "";
CustomConfig customConfig = new CustomConfig();
SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource resource = new SimulateSecurityHealthAnalyticsCustomModuleRequest.Types.SimulatedResource();
// Make the request
SimulateSecurityHealthAnalyticsCustomModuleResponse response = await securityCenterManagementClient.SimulateSecurityHealthAnalyticsCustomModuleAsync(parent, customConfig, resource);
```

### UpdateEventThreatDetectionCustomModule(EventThreatDetectionCustomModule, FieldMask, CallSettings)

```
public virtual EventThreatDetectionCustomModule UpdateEventThreatDetectionCustomModule(EventThreatDetectionCustomModule eventThreatDetectionCustomModule, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Field mask is used to specify the fields to be overwritten in the EventThreatDetectionCustomModule resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.UpdateEventThreatDetectionCustomModule(eventThreatDetectionCustomModule, updateMask);
```

### UpdateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual EventThreatDetectionCustomModule UpdateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
UpdateEventThreatDetectionCustomModuleRequest request = new UpdateEventThreatDetectionCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = securityCenterManagementClient.UpdateEventThreatDetectionCustomModule(request);
```

### UpdateEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModule, FieldMask, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> UpdateEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModule eventThreatDetectionCustomModule, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Field mask is used to specify the fields to be overwritten in the EventThreatDetectionCustomModule resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.UpdateEventThreatDetectionCustomModuleAsync(eventThreatDetectionCustomModule, updateMask);
```

### UpdateEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModule, FieldMask, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> UpdateEventThreatDetectionCustomModuleAsync(EventThreatDetectionCustomModule eventThreatDetectionCustomModule, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`eventThreatDetectionCustomModule`

`[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`  

Required. The module being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Field mask is used to specify the fields to be overwritten in the EventThreatDetectionCustomModule resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
EventThreatDetectionCustomModule eventThreatDetectionCustomModule = new EventThreatDetectionCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.UpdateEventThreatDetectionCustomModuleAsync(eventThreatDetectionCustomModule, updateMask);
```

### UpdateEventThreatDetectionCustomModuleAsync(UpdateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task<EventThreatDetectionCustomModule> UpdateEventThreatDetectionCustomModuleAsync(UpdateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateEventThreatDetectionCustomModuleRequest request = new UpdateEventThreatDetectionCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.UpdateEventThreatDetectionCustomModuleAsync(request);
```

### UpdateEventThreatDetectionCustomModuleAsync(UpdateEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task<EventThreatDetectionCustomModule> UpdateEventThreatDetectionCustomModuleAsync(UpdateEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EventThreatDetectionCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.EventThreatDetectionCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateEventThreatDetectionCustomModuleRequest request = new UpdateEventThreatDetectionCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    EventThreatDetectionCustomModule = new EventThreatDetectionCustomModule(),
    ValidateOnly = false,
};
// Make the request
EventThreatDetectionCustomModule response = await securityCenterManagementClient.UpdateEventThreatDetectionCustomModuleAsync(request);
```

### UpdateSecurityCenterService(SecurityCenterService, FieldMask, CallSettings)

```
public virtual SecurityCenterService UpdateSecurityCenterService(SecurityCenterService securityCenterService, FieldMask updateMask, CallSettings callSettings = null)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`securityCenterService`

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`  

Required. The updated service.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. Possible values:

-   "intended\_enablement\_state"
-   "modules"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SecurityCenterService securityCenterService = new SecurityCenterService();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityCenterService response = securityCenterManagementClient.UpdateSecurityCenterService(securityCenterService, updateMask);
```

### UpdateSecurityCenterService(UpdateSecurityCenterServiceRequest, CallSettings)

```
public virtual SecurityCenterService UpdateSecurityCenterService(UpdateSecurityCenterServiceRequest request, CallSettings callSettings = null)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
UpdateSecurityCenterServiceRequest request = new UpdateSecurityCenterServiceRequest
{
    SecurityCenterService = new SecurityCenterService(),
    UpdateMask = new FieldMask(),
    ValidateOnly = false,
};
// Make the request
SecurityCenterService response = securityCenterManagementClient.UpdateSecurityCenterService(request);
```

### UpdateSecurityCenterServiceAsync(SecurityCenterService, FieldMask, CallSettings)

```
public virtual Task<SecurityCenterService> UpdateSecurityCenterServiceAsync(SecurityCenterService securityCenterService, FieldMask updateMask, CallSettings callSettings = null)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`securityCenterService`

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`  

Required. The updated service.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. Possible values:

-   "intended\_enablement\_state"
-   "modules"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityCenterService securityCenterService = new SecurityCenterService();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityCenterService response = await securityCenterManagementClient.UpdateSecurityCenterServiceAsync(securityCenterService, updateMask);
```

### UpdateSecurityCenterServiceAsync(SecurityCenterService, FieldMask, CancellationToken)

```
public virtual Task<SecurityCenterService> UpdateSecurityCenterServiceAsync(SecurityCenterService securityCenterService, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`securityCenterService`

`[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`  

Required. The updated service.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. Possible values:

-   "intended\_enablement\_state"
-   "modules"

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityCenterService securityCenterService = new SecurityCenterService();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityCenterService response = await securityCenterManagementClient.UpdateSecurityCenterServiceAsync(securityCenterService, updateMask);
```

### UpdateSecurityCenterServiceAsync(UpdateSecurityCenterServiceRequest, CallSettings)

```
public virtual Task<SecurityCenterService> UpdateSecurityCenterServiceAsync(UpdateSecurityCenterServiceRequest request, CallSettings callSettings = null)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateSecurityCenterServiceRequest request = new UpdateSecurityCenterServiceRequest
{
    SecurityCenterService = new SecurityCenterService(),
    UpdateMask = new FieldMask(),
    ValidateOnly = false,
};
// Make the request
SecurityCenterService response = await securityCenterManagementClient.UpdateSecurityCenterServiceAsync(request);
```

### UpdateSecurityCenterServiceAsync(UpdateSecurityCenterServiceRequest, CancellationToken)

```
public virtual Task<SecurityCenterService> UpdateSecurityCenterServiceAsync(UpdateSecurityCenterServiceRequest request, CancellationToken cancellationToken)
```

Updates a Security Command Center service using the given update mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityCenterServiceRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityCenterServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityCenterService](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityCenterService)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateSecurityCenterServiceRequest request = new UpdateSecurityCenterServiceRequest
{
    SecurityCenterService = new SecurityCenterService(),
    UpdateMask = new FieldMask(),
    ValidateOnly = false,
};
// Make the request
SecurityCenterService response = await securityCenterManagementClient.UpdateSecurityCenterServiceAsync(request);
```

### UpdateSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModule, FieldMask, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule UpdateSecurityHealthAnalyticsCustomModule(SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModule(securityHealthAnalyticsCustomModule, updateMask);
```

### UpdateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual SecurityHealthAnalyticsCustomModule UpdateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
UpdateSecurityHealthAnalyticsCustomModuleRequest request = new UpdateSecurityHealthAnalyticsCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModule(request);
```

### UpdateSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModule, FieldMask, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> UpdateSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModuleAsync(securityHealthAnalyticsCustomModule, updateMask);
```

### UpdateSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModule, FieldMask, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> UpdateSecurityHealthAnalyticsCustomModuleAsync(SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`securityHealthAnalyticsCustomModule`

`[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`  

Required. The resource being updated

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
SecurityHealthAnalyticsCustomModule securityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule();
FieldMask updateMask = new FieldMask();
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModuleAsync(securityHealthAnalyticsCustomModule, updateMask);
```

### UpdateSecurityHealthAnalyticsCustomModuleAsync(UpdateSecurityHealthAnalyticsCustomModuleRequest, CallSettings)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> UpdateSecurityHealthAnalyticsCustomModuleAsync(UpdateSecurityHealthAnalyticsCustomModuleRequest request, CallSettings callSettings = null)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateSecurityHealthAnalyticsCustomModuleRequest request = new UpdateSecurityHealthAnalyticsCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### UpdateSecurityHealthAnalyticsCustomModuleAsync(UpdateSecurityHealthAnalyticsCustomModuleRequest, CancellationToken)

```
public virtual Task<SecurityHealthAnalyticsCustomModule> UpdateSecurityHealthAnalyticsCustomModuleAsync(UpdateSecurityHealthAnalyticsCustomModuleRequest request, CancellationToken cancellationToken)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SecurityHealthAnalyticsCustomModule](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.SecurityHealthAnalyticsCustomModule)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
UpdateSecurityHealthAnalyticsCustomModuleRequest request = new UpdateSecurityHealthAnalyticsCustomModuleRequest
{
    UpdateMask = new FieldMask(),
    SecurityHealthAnalyticsCustomModule = new SecurityHealthAnalyticsCustomModule(),
    ValidateOnly = false,
};
// Make the request
SecurityHealthAnalyticsCustomModule response = await securityCenterManagementClient.UpdateSecurityHealthAnalyticsCustomModuleAsync(request);
```

### ValidateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual ValidateEventThreatDetectionCustomModuleResponse ValidateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Validates the given Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[ValidateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ValidateEventThreatDetectionCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleResponse)`

The RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = SecurityCenterManagementClient.Create();
// Initialize request argument(s)
ValidateEventThreatDetectionCustomModuleRequest request = new ValidateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    RawText = "",
    Type = "",
};
// Make the request
ValidateEventThreatDetectionCustomModuleResponse response = securityCenterManagementClient.ValidateEventThreatDetectionCustomModule(request);
```

### ValidateEventThreatDetectionCustomModuleAsync(ValidateEventThreatDetectionCustomModuleRequest, CallSettings)

```
public virtual Task<ValidateEventThreatDetectionCustomModuleResponse> ValidateEventThreatDetectionCustomModuleAsync(ValidateEventThreatDetectionCustomModuleRequest request, CallSettings callSettings = null)
```

Validates the given Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[ValidateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ValidateEventThreatDetectionCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ValidateEventThreatDetectionCustomModuleRequest request = new ValidateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    RawText = "",
    Type = "",
};
// Make the request
ValidateEventThreatDetectionCustomModuleResponse response = await securityCenterManagementClient.ValidateEventThreatDetectionCustomModuleAsync(request);
```

### ValidateEventThreatDetectionCustomModuleAsync(ValidateEventThreatDetectionCustomModuleRequest, CancellationToken)

```
public virtual Task<ValidateEventThreatDetectionCustomModuleResponse> ValidateEventThreatDetectionCustomModuleAsync(ValidateEventThreatDetectionCustomModuleRequest request, CancellationToken cancellationToken)
```

Validates the given Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[ValidateEventThreatDetectionCustomModuleRequest](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ValidateEventThreatDetectionCustomModuleResponse](/dotnet/docs/reference/Google.Cloud.SecurityCenterManagement.V1/1.0.0/Google.Cloud.SecurityCenterManagement.V1.ValidateEventThreatDetectionCustomModuleResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
SecurityCenterManagementClient securityCenterManagementClient = await SecurityCenterManagementClient.CreateAsync();
// Initialize request argument(s)
ValidateEventThreatDetectionCustomModuleRequest request = new ValidateEventThreatDetectionCustomModuleRequest
{
    ParentAsOrganizationLocationName = OrganizationLocationName.FromOrganizationLocation("[ORGANIZATION]", "[LOCATION]"),
    RawText = "",
    Type = "",
};
// Make the request
ValidateEventThreatDetectionCustomModuleResponse response = await securityCenterManagementClient.ValidateEventThreatDetectionCustomModuleAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
