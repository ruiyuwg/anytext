-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ConnectionServiceClient (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.5.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/latest/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.9.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.8.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.7.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.6.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.4.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.3.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.2.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.1.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/2.0.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.6.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.4.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.3.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.2.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)

```
public abstract class ConnectionServiceClient
```

ConnectionService client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ConnectionServiceClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[ConnectionServiceClientImpl](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClientImpl)

## Namespace

[Google.Cloud.BigQuery.Connection.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1)

## Assembly

Google.Cloud.BigQuery.Connection.V1.dll

## Remarks

Manages external data source connections and credentials.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the ConnectionService service, which is a host of "bigqueryconnection.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default ConnectionService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default ConnectionService scopes are:

-   [https://www.googleapis.com/auth/bigquery](https://www.googleapis.com/auth/bigquery)
-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual ConnectionService.ConnectionServiceClient GrpcClient { get; }
```

The underlying gRPC ConnectionService client

**Property Value**

**Type**

**Description**

`[ConnectionService.ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionService.ConnectionServiceClient)`

## Methods

### Create()

```
public static ConnectionServiceClient Create()
```

Synchronously creates a [ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ConnectionServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClientBuilder).

**Returns**

**Type**

**Description**

`[ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)`

The created [ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<ConnectionServiceClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ConnectionServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient)>`

The task representing the created [ConnectionServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient).

### CreateConnection(LocationName, Connection, String, CallSettings)

```
public virtual Connection CreateConnection(LocationName parent, Connection connection, string connectionId, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = connectionServiceClient.CreateConnection(parent, connection, connectionId);
```

### CreateConnection(CreateConnectionRequest, CallSettings)

```
public virtual Connection CreateConnection(CreateConnectionRequest request, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`request`

`[CreateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.CreateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
CreateConnectionRequest request = new CreateConnectionRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    ConnectionId = "",
    Connection = new Connection(),
};
// Make the request
Connection response = connectionServiceClient.CreateConnection(request);
```

### CreateConnection(String, Connection, String, CallSettings)

```
public virtual Connection CreateConnection(string parent, Connection connection, string connectionId, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = connectionServiceClient.CreateConnection(parent, connection, connectionId);
```

### CreateConnectionAsync(LocationName, Connection, String, CallSettings)

```
public virtual Task<Connection> CreateConnectionAsync(LocationName parent, Connection connection, string connectionId, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(parent, connection, connectionId);
```

### CreateConnectionAsync(LocationName, Connection, String, CancellationToken)

```
public virtual Task<Connection> CreateConnectionAsync(LocationName parent, Connection connection, string connectionId, CancellationToken cancellationToken)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(parent, connection, connectionId);
```

### CreateConnectionAsync(CreateConnectionRequest, CallSettings)

```
public virtual Task<Connection> CreateConnectionAsync(CreateConnectionRequest request, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`request`

`[CreateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.CreateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
CreateConnectionRequest request = new CreateConnectionRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    ConnectionId = "",
    Connection = new Connection(),
};
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(request);
```

### CreateConnectionAsync(CreateConnectionRequest, CancellationToken)

```
public virtual Task<Connection> CreateConnectionAsync(CreateConnectionRequest request, CancellationToken cancellationToken)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`request`

`[CreateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.CreateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
CreateConnectionRequest request = new CreateConnectionRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    ConnectionId = "",
    Connection = new Connection(),
};
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(request);
```

### CreateConnectionAsync(String, Connection, String, CallSettings)

```
public virtual Task<Connection> CreateConnectionAsync(string parent, Connection connection, string connectionId, CallSettings callSettings = null)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(parent, connection, connectionId);
```

### CreateConnectionAsync(String, Connection, String, CancellationToken)

```
public virtual Task<Connection> CreateConnectionAsync(string parent, Connection connection, string connectionId, CancellationToken cancellationToken)
```

Creates a new connection.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection to create.

`connectionId`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. Connection id that should be assigned to the created connection.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Connection connection = new Connection();
string connectionId = "";
// Make the request
Connection response = await connectionServiceClient.CreateConnectionAsync(parent, connection, connectionId);
```

### DeleteConnection(ConnectionName, CallSettings)

```
public virtual void DeleteConnection(ConnectionName name, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
connectionServiceClient.DeleteConnection(name);
```

### DeleteConnection(DeleteConnectionRequest, CallSettings)

```
public virtual void DeleteConnection(DeleteConnectionRequest request, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`request`

`[DeleteConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.DeleteConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
DeleteConnectionRequest request = new DeleteConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
connectionServiceClient.DeleteConnection(request);
```

### DeleteConnection(String, CallSettings)

```
public virtual void DeleteConnection(string name, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
connectionServiceClient.DeleteConnection(name);
```

### DeleteConnectionAsync(ConnectionName, CallSettings)

```
public virtual Task DeleteConnectionAsync(ConnectionName name, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
await connectionServiceClient.DeleteConnectionAsync(name);
```

### DeleteConnectionAsync(ConnectionName, CancellationToken)

```
public virtual Task DeleteConnectionAsync(ConnectionName name, CancellationToken cancellationToken)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
await connectionServiceClient.DeleteConnectionAsync(name);
```

### DeleteConnectionAsync(DeleteConnectionRequest, CallSettings)

```
public virtual Task DeleteConnectionAsync(DeleteConnectionRequest request, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`request`

`[DeleteConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.DeleteConnectionRequest)`  

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteConnectionRequest request = new DeleteConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
await connectionServiceClient.DeleteConnectionAsync(request);
```

### DeleteConnectionAsync(DeleteConnectionRequest, CancellationToken)

```
public virtual Task DeleteConnectionAsync(DeleteConnectionRequest request, CancellationToken cancellationToken)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`request`

`[DeleteConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.DeleteConnectionRequest)`  

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteConnectionRequest request = new DeleteConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
await connectionServiceClient.DeleteConnectionAsync(request);
```

### DeleteConnectionAsync(String, CallSettings)

```
public virtual Task DeleteConnectionAsync(string name, CallSettings callSettings = null)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
await connectionServiceClient.DeleteConnectionAsync(name);
```

### DeleteConnectionAsync(String, CancellationToken)

```
public virtual Task DeleteConnectionAsync(string name, CancellationToken cancellationToken)
```

Deletes connection and associated credential.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

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
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
await connectionServiceClient.DeleteConnectionAsync(name);
```

### GetConnection(ConnectionName, CallSettings)

```
public virtual Connection GetConnection(ConnectionName name, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
Connection response = connectionServiceClient.GetConnection(name);
```

### GetConnection(GetConnectionRequest, CallSettings)

```
public virtual Connection GetConnection(GetConnectionRequest request, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`request`

`[GetConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.GetConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
GetConnectionRequest request = new GetConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
Connection response = connectionServiceClient.GetConnection(request);
```

### GetConnection(String, CallSettings)

```
public virtual Connection GetConnection(string name, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
Connection response = connectionServiceClient.GetConnection(name);
```

### GetConnectionAsync(ConnectionName, CallSettings)

```
public virtual Task<Connection> GetConnectionAsync(ConnectionName name, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(name);
```

### GetConnectionAsync(ConnectionName, CancellationToken)

```
public virtual Task<Connection> GetConnectionAsync(ConnectionName name, CancellationToken cancellationToken)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(name);
```

### GetConnectionAsync(GetConnectionRequest, CallSettings)

```
public virtual Task<Connection> GetConnectionAsync(GetConnectionRequest request, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`request`

`[GetConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.GetConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
GetConnectionRequest request = new GetConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(request);
```

### GetConnectionAsync(GetConnectionRequest, CancellationToken)

```
public virtual Task<Connection> GetConnectionAsync(GetConnectionRequest request, CancellationToken cancellationToken)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`request`

`[GetConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.GetConnectionRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
GetConnectionRequest request = new GetConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
};
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(request);
```

### GetConnectionAsync(String, CallSettings)

```
public virtual Task<Connection> GetConnectionAsync(string name, CallSettings callSettings = null)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(name);
```

### GetConnectionAsync(String, CancellationToken)

```
public virtual Task<Connection> GetConnectionAsync(string name, CancellationToken cancellationToken)
```

Returns specified connection.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
// Make the request
Connection response = await connectionServiceClient.GetConnectionAsync(name);
```

### GetIamPolicy(IResourceName, GetPolicyOptions, CallSettings)

```
public virtual Policy GetIamPolicy(IResourceName resource, GetPolicyOptions options, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = connectionServiceClient.GetIamPolicy(resource, options);
```

### GetIamPolicy(GetIamPolicyRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = connectionServiceClient.GetIamPolicy(request);
```

### GetIamPolicy(String, GetPolicyOptions, CallSettings)

```
public virtual Policy GetIamPolicy(string resource, GetPolicyOptions options, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = connectionServiceClient.GetIamPolicy(resource, options);
```

### GetIamPolicyAsync(IResourceName, GetPolicyOptions, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, GetPolicyOptions options, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(resource, options);
```

### GetIamPolicyAsync(IResourceName, GetPolicyOptions, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, GetPolicyOptions options, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(resource, options);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(String, GetPolicyOptions, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, GetPolicyOptions options, CallSettings callSettings = null)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(resource, options);
```

### GetIamPolicyAsync(String, GetPolicyOptions, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, GetPolicyOptions options, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`options`

`[GetPolicyOptions](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.GetPolicyOptions.html)`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
GetPolicyOptions options = new GetPolicyOptions();
// Make the request
Policy response = await connectionServiceClient.GetIamPolicyAsync(resource, options);
```

### ListConnections(LocationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListConnectionsResponse, Connection> ListConnections(LocationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnections(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Connection item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListConnectionsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListConnections(ListConnectionsRequest, CallSettings)

```
public virtual PagedEnumerable<ListConnectionsResponse, Connection> ListConnections(ListConnectionsRequest request, CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`request`

`[ListConnectionsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
ListConnectionsRequest request = new ListConnectionsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnections(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Connection item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListConnectionsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListConnections(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListConnectionsResponse, Connection> ListConnections(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnections(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Connection item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListConnectionsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListConnectionsAsync(LocationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListConnectionsResponse, Connection> ListConnectionsAsync(LocationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable asynchronous sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnectionsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Connection item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListConnectionsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListConnectionsAsync(ListConnectionsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListConnectionsResponse, Connection> ListConnectionsAsync(ListConnectionsRequest request, CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`request`

`[ListConnectionsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable asynchronous sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ListConnectionsRequest request = new ListConnectionsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnectionsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Connection item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListConnectionsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListConnectionsAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListConnectionsResponse, Connection> ListConnectionsAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Returns a list of connections in the given project.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListConnectionsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ListConnectionsResponse), [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A pageable asynchronous sequence of [Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection) resources.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListConnectionsResponse, Connection> response = connectionServiceClient.ListConnectionsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Connection item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListConnectionsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Connection item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Connection> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Connection item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### SetIamPolicy(IResourceName, Policy, CallSettings)

```
public virtual Policy SetIamPolicy(IResourceName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = connectionServiceClient.SetIamPolicy(resource, policy);
```

### SetIamPolicy(SetIamPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = connectionServiceClient.SetIamPolicy(request);
```

### SetIamPolicy(String, Policy, CallSettings)

```
public virtual Policy SetIamPolicy(string resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = connectionServiceClient.SetIamPolicy(resource, policy);
```

### SetIamPolicyAsync(IResourceName, Policy, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(IResourceName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(IResourceName, Policy, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(IResourceName resource, Policy policy, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.SetIamPolicyRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(String, Policy, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(string resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(String, Policy, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(string resource, Policy policy, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = await connectionServiceClient.SetIamPolicyAsync(resource, policy);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient#Google_Cloud_BigQuery_Connection_V1_ConnectionServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient#Google_Cloud_BigQuery_Connection_V1_ConnectionServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient#Google_Cloud_BigQuery_Connection_V1_ConnectionServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionServiceClient#Google_Cloud_BigQuery_Connection_V1_ConnectionServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(IResourceName, IEnumerable<String>, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(IResourceName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = connectionServiceClient.TestIamPermissions(resource, permissions);
```

### TestIamPermissions(TestIamPermissionsRequest, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = connectionServiceClient.TestIamPermissions(request);
```

### TestIamPermissions(String, IEnumerable<String>, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(string resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = connectionServiceClient.TestIamPermissions(resource, permissions);
```

### TestIamPermissionsAsync(IResourceName, IEnumerable<String>, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(IResourceName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(IResourceName, IEnumerable<String>, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(IResourceName resource, IEnumerable<string> permissions, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsRequest](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(String, IEnumerable<String>, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(string resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(String, IEnumerable<String>, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(string resource, IEnumerable<string> permissions, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestIamPermissionsResponse](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await connectionServiceClient.TestIamPermissionsAsync(resource, permissions);
```

### UpdateConnection(ConnectionName, Connection, FieldMask, CallSettings)

```
public virtual Connection UpdateConnection(ConnectionName name, Connection connection, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = connectionServiceClient.UpdateConnection(name, connection, updateMask);
```

### UpdateConnection(UpdateConnectionRequest, CallSettings)

```
public virtual Connection UpdateConnection(UpdateConnectionRequest request, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.UpdateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
UpdateConnectionRequest request = new UpdateConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
    Connection = new Connection(),
    UpdateMask = new FieldMask(),
};
// Make the request
Connection response = connectionServiceClient.UpdateConnection(request);
```

### UpdateConnection(String, Connection, FieldMask, CallSettings)

```
public virtual Connection UpdateConnection(string name, Connection connection, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`

The RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = ConnectionServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = connectionServiceClient.UpdateConnection(name, connection, updateMask);
```

### UpdateConnectionAsync(ConnectionName, Connection, FieldMask, CallSettings)

```
public virtual Task<Connection> UpdateConnectionAsync(ConnectionName name, Connection connection, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(name, connection, updateMask);
```

### UpdateConnectionAsync(ConnectionName, Connection, FieldMask, CancellationToken)

```
public virtual Task<Connection> UpdateConnectionAsync(ConnectionName name, Connection connection, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[ConnectionName](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.ConnectionName)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
ConnectionName name = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]");
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(name, connection, updateMask);
```

### UpdateConnectionAsync(UpdateConnectionRequest, CallSettings)

```
public virtual Task<Connection> UpdateConnectionAsync(UpdateConnectionRequest request, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.UpdateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateConnectionRequest request = new UpdateConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
    Connection = new Connection(),
    UpdateMask = new FieldMask(),
};
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(request);
```

### UpdateConnectionAsync(UpdateConnectionRequest, CancellationToken)

```
public virtual Task<Connection> UpdateConnectionAsync(UpdateConnectionRequest request, CancellationToken cancellationToken)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateConnectionRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.UpdateConnectionRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateConnectionRequest request = new UpdateConnectionRequest
{
    ConnectionName = ConnectionName.FromProjectLocationConnection("[PROJECT]", "[LOCATION]", "[CONNECTION]"),
    Connection = new Connection(),
    UpdateMask = new FieldMask(),
};
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(request);
```

### UpdateConnectionAsync(String, Connection, FieldMask, CallSettings)

```
public virtual Task<Connection> UpdateConnectionAsync(string name, Connection connection, FieldMask updateMask, CallSettings callSettings = null)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(name, connection, updateMask);
```

### UpdateConnectionAsync(String, Connection, FieldMask, CancellationToken)

```
public virtual Task<Connection> UpdateConnectionAsync(string name, Connection connection, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`connection`

`[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)`  

Required. Connection containing the updated fields.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Update mask for the connection fields to be updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Connection](/dotnet/docs/reference/Google.Cloud.BigQuery.Connection.V1/1.5.0/Google.Cloud.BigQuery.Connection.V1.Connection)>`

A Task containing the RPC response.

**Example**

```
// Create client
ConnectionServiceClient connectionServiceClient = await ConnectionServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/connections/[CONNECTION]";
Connection connection = new Connection();
FieldMask updateMask = new FieldMask();
// Make the request
Connection response = await connectionServiceClient.UpdateConnectionAsync(name, connection, updateMask);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
