-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Run Admin v2 API - Class ServicesClient (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [2.19.0 (latest)](/dotnet/docs/reference/Google.Cloud.Run.V2/latest/Google.Cloud.Run.V2.ServicesClient)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.18.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.17.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.16.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.15.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.14.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.13.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.12.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.11.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.10.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.9.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.5.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.4.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.3.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.2.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.1.0/Google.Cloud.Run.V2.ServicesClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.0.0/Google.Cloud.Run.V2.ServicesClient)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Run.V2/1.0.0-beta02/Google.Cloud.Run.V2.ServicesClient)

```
public abstract class ServicesClient
```

Reference documentation and code samples for the Cloud Run Admin v2 API class ServicesClient.

Services client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ServicesClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[ServicesClientImpl](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClientImpl)

## Namespace

[Google.Cloud.Run.V2](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2)

## Assembly

Google.Cloud.Run.V2.dll

## Remarks

Cloud Run Service Control Plane API

## Properties

### CreateServiceOperationsClient

```
public virtual OperationsClient CreateServiceOperationsClient { get; }
```

The long-running operations client for `CreateService`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Services service, which is a host of "run.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Services scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default Services scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteServiceOperationsClient

```
public virtual OperationsClient DeleteServiceOperationsClient { get; }
```

The long-running operations client for `DeleteService`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### GrpcClient

```
public virtual Services.ServicesClient GrpcClient { get; }
```

The underlying gRPC Services client

**Property Value**

**Type**

**Description**

`[Services](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Services)[ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Services.ServicesClient)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b4af05030739369a49840e110e745aedfdb8b290/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b4af05030739369a49840e110e745aedfdb8b290/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

### UpdateServiceOperationsClient

```
public virtual OperationsClient UpdateServiceOperationsClient { get; }
```

The long-running operations client for `UpdateService`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

## Methods

### Create()

```
public static ServicesClient Create()
```

Synchronously creates a [ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ServicesClientBuilder](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClientBuilder).

**Returns**

**Type**

**Description**

`[ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient)`

The created [ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient).

### CreateAsync(CancellationToken)

```
public static Task<ServicesClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ServicesClientBuilder](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient)`

The task representing the created [ServicesClient](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient).

### CreateService(LocationName, Service, string, CallSettings)

```
public virtual Operation<Service, Service> CreateService(LocationName parent, Service service, string serviceId, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.CreateService(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceCreateService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateService(CreateServiceRequest, CallSettings)

```
public virtual Operation<Service, Service> CreateService(CreateServiceRequest request, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.CreateServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::CreateServiceRequest request = new gcrv::CreateServiceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Service = new gcrv::Service(),
    ServiceId = "",
    ValidateOnly = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.CreateService(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceCreateService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateService(string, Service, string, CallSettings)

```
public virtual Operation<Service, Service> CreateService(string parent, Service service, string serviceId, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.CreateService(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceCreateService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(LocationName, Service, string, CallSettings)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(LocationName parent, Service service, string serviceId, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(LocationName, Service, string, CancellationToken)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(LocationName parent, Service service, string serviceId, CancellationToken cancellationToken)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(CreateServiceRequest, CallSettings)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(CreateServiceRequest request, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.CreateServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::CreateServiceRequest request = new gcrv::CreateServiceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Service = new gcrv::Service(),
    ServiceId = "",
    ValidateOnly = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(CreateServiceRequest, CancellationToken)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(CreateServiceRequest request, CancellationToken cancellationToken)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.CreateServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::CreateServiceRequest request = new gcrv::CreateServiceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Service = new gcrv::Service(),
    ServiceId = "",
    ValidateOnly = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(string, Service, string, CallSettings)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(string parent, Service service, string serviceId, CallSettings callSettings = null)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### CreateServiceAsync(string, Service, string, CancellationToken)

```
public virtual Task<Operation<Service, Service>> CreateServiceAsync(string parent, Service service, string serviceId, CancellationToken cancellationToken)
```

Creates a new Service in a given project and location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service instance to create.

`serviceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service\_id}.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
gcrv::Service service = new gcrv::Service();
string serviceId = "";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.CreateServiceAsync(parent, service, serviceId);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceCreateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteService(DeleteServiceRequest, CallSettings)

```
public virtual Operation<Service, Service> DeleteService(DeleteServiceRequest request, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.DeleteServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::DeleteServiceRequest request = new gcrv::DeleteServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
    ValidateOnly = false,
    Etag = "",
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.DeleteService(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceDeleteService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteService(ServiceName, CallSettings)

```
public virtual Operation<Service, Service> DeleteService(ServiceName name, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.DeleteService(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceDeleteService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteService(string, CallSettings)

```
public virtual Operation<Service, Service> DeleteService(string name, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.DeleteService(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceDeleteService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(DeleteServiceRequest, CallSettings)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(DeleteServiceRequest request, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.DeleteServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::DeleteServiceRequest request = new gcrv::DeleteServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
    ValidateOnly = false,
    Etag = "",
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(DeleteServiceRequest, CancellationToken)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(DeleteServiceRequest request, CancellationToken cancellationToken)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`request`

`[DeleteServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.DeleteServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::DeleteServiceRequest request = new gcrv::DeleteServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
    ValidateOnly = false,
    Etag = "",
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(ServiceName, CallSettings)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(ServiceName name, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(ServiceName, CancellationToken)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(ServiceName name, CancellationToken cancellationToken)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(string, CallSettings)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(string name, CallSettings callSettings = null)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### DeleteServiceAsync(string, CancellationToken)

```
public virtual Task<Operation<Service, Service>> DeleteServiceAsync(string name, CancellationToken cancellationToken)
```

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.DeleteServiceAsync(name);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceDeleteServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### GetIamPolicy(GetIamPolicyRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = servicesClient.GetIamPolicy(request);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await servicesClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CancellationToken cancellationToken)
```

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await servicesClient.GetIamPolicyAsync(request);
```

### GetService(GetServiceRequest, CallSettings)

```
public virtual Service GetService(GetServiceRequest request, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.GetServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::GetServiceRequest request = new gcrv::GetServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
gcrv::Service response = servicesClient.GetService(request);
```

### GetService(ServiceName, CallSettings)

```
public virtual Service GetService(ServiceName name, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
gcrv::Service response = servicesClient.GetService(name);
```

### GetService(string, CallSettings)

```
public virtual Service GetService(string name, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
gcrv::Service response = servicesClient.GetService(name);
```

### GetServiceAsync(GetServiceRequest, CallSettings)

```
public virtual Task<Service> GetServiceAsync(GetServiceRequest request, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.GetServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::GetServiceRequest request = new gcrv::GetServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(request);
```

### GetServiceAsync(GetServiceRequest, CancellationToken)

```
public virtual Task<Service> GetServiceAsync(GetServiceRequest request, CancellationToken cancellationToken)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`request`

`[GetServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.GetServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::GetServiceRequest request = new gcrv::GetServiceRequest
{
    ServiceName = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]"),
};
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(request);
```

### GetServiceAsync(ServiceName, CallSettings)

```
public virtual Task<Service> GetServiceAsync(ServiceName name, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(name);
```

### GetServiceAsync(ServiceName, CancellationToken)

```
public virtual Task<Service> GetServiceAsync(ServiceName name, CancellationToken cancellationToken)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServiceName)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::ServiceName name = gcrv::ServiceName.FromProjectLocationService("[PROJECT]", "[LOCATION]", "[SERVICE]");
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(name);
```

### GetServiceAsync(string, CallSettings)

```
public virtual Task<Service> GetServiceAsync(string name, CallSettings callSettings = null)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(name);
```

### GetServiceAsync(string, CancellationToken)

```
public virtual Task<Service> GetServiceAsync(string name, CancellationToken cancellationToken)
```

Gets information about a Service.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/services/[SERVICE]";
// Make the request
gcrv::Service response = await servicesClient.GetServiceAsync(name);
```

### ListServices(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListServicesResponse, Service> ListServices(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcrv::Service item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcrv::ListServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListServices(ListServicesRequest, CallSettings)

```
public virtual PagedEnumerable<ListServicesResponse, Service> ListServices(ListServicesRequest request, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`request`

`[ListServicesRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::ListServicesRequest request = new gcrv::ListServicesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    ShowDeleted = false,
};
// Make the request
PagedEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServices(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcrv::Service item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcrv::ListServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListServices(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListServicesResponse, Service> ListServices(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServices(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcrv::Service item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcrv::ListServicesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListServicesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListServicesResponse, Service> ListServicesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable asynchronous sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcrv::Service item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcrv::ListServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListServicesAsync(ListServicesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListServicesResponse, Service> ListServicesAsync(ListServicesRequest request, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`request`

`[ListServicesRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable asynchronous sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::ListServicesRequest request = new gcrv::ListServicesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    ShowDeleted = false,
};
// Make the request
PagedAsyncEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServicesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcrv::Service item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcrv::ListServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListServicesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListServicesResponse, Service> ListServicesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Services.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListServicesResponse](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ListServicesResponse)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A pageable asynchronous sequence of [Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service) resources.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<gcrv::ListServicesResponse, gcrv::Service> response = servicesClient.ListServicesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcrv::Service item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcrv::ListServicesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcrv::Service item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcrv::Service> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcrv::Service item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceCreateService(string, CallSettings)

```
public virtual Operation<Service, Service> PollOnceCreateService(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CreateService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The result of polling the operation.

### PollOnceCreateServiceAsync(string, CallSettings)

```
public virtual Task<Operation<Service, Service>> PollOnceCreateServiceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CreateService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A task representing the result of polling the operation.

### PollOnceDeleteService(string, CallSettings)

```
public virtual Operation<Service, Service> PollOnceDeleteService(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeleteService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The result of polling the operation.

### PollOnceDeleteServiceAsync(string, CallSettings)

```
public virtual Task<Operation<Service, Service>> PollOnceDeleteServiceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeleteService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A task representing the result of polling the operation.

### PollOnceUpdateService(string, CallSettings)

```
public virtual Operation<Service, Service> PollOnceUpdateService(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `UpdateService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The result of polling the operation.

### PollOnceUpdateServiceAsync(string, CallSettings)

```
public virtual Task<Operation<Service, Service>> PollOnceUpdateServiceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `UpdateService`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A task representing the result of polling the operation.

### SetIamPolicy(SetIamPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = servicesClient.SetIamPolicy(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = await servicesClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CancellationToken cancellationToken)
```

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/Policy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
    UpdateMask = new FieldMask(),
};
// Make the request
Policy response = await servicesClient.SetIamPolicyAsync(request);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient#Google_Cloud_Run_V2_ServicesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient#Google_Cloud_Run_V2_ServicesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient#Google_Cloud_Run_V2_ServicesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.ServicesClient#Google_Cloud_Run_V2_ServicesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsRequest, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestIamPermissionsResponse](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = servicesClient.TestIamPermissions(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestIamPermissionsResponse](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await servicesClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestIamPermissionsResponse](https://github.com/googleapis/google-cloud-dotnet/blob/a68f31a28c83cebc1b21daf06f9320ad17e6cdce/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicy.g.cs)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await servicesClient.TestIamPermissionsAsync(request);
```

### UpdateService(Service, CallSettings)

```
public virtual Operation<Service, Service> UpdateService(Service service, CallSettings callSettings = null)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service to be updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::Service service = new gcrv::Service();
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.UpdateService(service);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceUpdateService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### UpdateService(UpdateServiceRequest, CallSettings)

```
public virtual Operation<Service, Service> UpdateService(UpdateServiceRequest request, CallSettings callSettings = null)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`request`

`[UpdateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.UpdateServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

The RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = gcrv::ServicesClient.Create();
// Initialize request argument(s)
gcrv::UpdateServiceRequest request = new gcrv::UpdateServiceRequest
{
    Service = new gcrv::Service(),
    ValidateOnly = false,
    AllowMissing = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = servicesClient.UpdateService(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = servicesClient.PollOnceUpdateService(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### UpdateServiceAsync(Service, CallSettings)

```
public virtual Task<Operation<Service, Service>> UpdateServiceAsync(Service service, CallSettings callSettings = null)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service to be updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::Service service = new gcrv::Service();
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.UpdateServiceAsync(service);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceUpdateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### UpdateServiceAsync(Service, CancellationToken)

```
public virtual Task<Operation<Service, Service>> UpdateServiceAsync(Service service, CancellationToken cancellationToken)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`service`

`[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`  

Required. The Service to be updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::Service service = new gcrv::Service();
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.UpdateServiceAsync(service);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceUpdateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### UpdateServiceAsync(UpdateServiceRequest, CallSettings)

```
public virtual Task<Operation<Service, Service>> UpdateServiceAsync(UpdateServiceRequest request, CallSettings callSettings = null)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`request`

`[UpdateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.UpdateServiceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::UpdateServiceRequest request = new gcrv::UpdateServiceRequest
{
    Service = new gcrv::Service(),
    ValidateOnly = false,
    AllowMissing = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.UpdateServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceUpdateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

### UpdateServiceAsync(UpdateServiceRequest, CancellationToken)

```
public virtual Task<Operation<Service, Service>> UpdateServiceAsync(UpdateServiceRequest request, CancellationToken cancellationToken)
```

Updates a Service.

**Parameters**

**Name**

**Description**

`request`

`[UpdateServiceRequest](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.UpdateServiceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)[Service](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.Service)`

A Task containing the RPC response.

**Example**

```
// Create client
gcrv::ServicesClient servicesClient = await gcrv::ServicesClient.CreateAsync();
// Initialize request argument(s)
gcrv::UpdateServiceRequest request = new gcrv::UpdateServiceRequest
{
    Service = new gcrv::Service(),
    ValidateOnly = false,
    AllowMissing = false,
};
// Make the request
Operation<gcrv::Service, gcrv::Service> response = await servicesClient.UpdateServiceAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcrv::Service, gcrv::Service> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcrv::Service result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcrv::Service, gcrv::Service> retrievedResponse = await servicesClient.PollOnceUpdateServiceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcrv::Service retrievedResult = retrievedResponse.Result;
}
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
