-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class GameServerConfigsService.GameServerConfigsServiceBase (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [2.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Gaming.V1/latest/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/2.1.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/2.0.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.4.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.2.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.1.0/Google.Cloud.Gaming.V1.GameServerConfigsService.GameServerConfigsServiceBase)

```
[BindServiceMethod(typeof(GameServerConfigsService), "BindService")]
public abstract class GameServerConfigsServiceBase
```

Base class for server-side implementations of GameServerConfigsService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> GameServerConfigsService.GameServerConfigsServiceBase

## Inherited Members

System.Object.GetHashCode()

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

System.Object.MemberwiseClone()

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Gaming.V1](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1)

## Assembly

Google.Cloud.Gaming.V1.dll

## Methods

### CreateGameServerConfig(CreateGameServerConfigRequest, ServerCallContext)

```
public virtual Task<Operation> CreateGameServerConfig(CreateGameServerConfigRequest request, ServerCallContext context)
```

Creates a new game server config in a given project, location, and game server deployment. Game server configs are immutable, and are not applied until referenced in the game server deployment rollout resource.

**Parameters**

**Name**

**Description**

`request`

`[CreateGameServerConfigRequest](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.CreateGameServerConfigRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### DeleteGameServerConfig(DeleteGameServerConfigRequest, ServerCallContext)

```
public virtual Task<Operation> DeleteGameServerConfig(DeleteGameServerConfigRequest request, ServerCallContext context)
```

Deletes a single game server config. The deletion will fail if the game server config is referenced in a game server deployment rollout.

**Parameters**

**Name**

**Description**

`request`

`[DeleteGameServerConfigRequest](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.DeleteGameServerConfigRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### GetGameServerConfig(GetGameServerConfigRequest, ServerCallContext)

```
public virtual Task<GameServerConfig> GetGameServerConfig(GetGameServerConfigRequest request, ServerCallContext context)
```

Gets details of a single game server config.

**Parameters**

**Name**

**Description**

`request`

`[GetGameServerConfigRequest](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.GetGameServerConfigRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[GameServerConfig](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.GameServerConfig)>`

The response to send back to the client (wrapped by a task).

### ListGameServerConfigs(ListGameServerConfigsRequest, ServerCallContext)

```
public virtual Task<ListGameServerConfigsResponse> ListGameServerConfigs(ListGameServerConfigsRequest request, ServerCallContext context)
```

Lists game server configs in a given project, location, and game server deployment.

**Parameters**

**Name**

**Description**

`request`

`[ListGameServerConfigsRequest](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.ListGameServerConfigsRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListGameServerConfigsResponse](/dotnet/docs/reference/Google.Cloud.Gaming.V1/1.3.0/Google.Cloud.Gaming.V1.ListGameServerConfigsResponse)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
