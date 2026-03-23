-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class CloudShellService.CloudShellServiceBase (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Shell.V1/latest/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.5.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.4.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.3.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.2.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.1.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/2.0.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.0.0/Google.Cloud.Shell.V1.CloudShellService.CloudShellServiceBase)

```
[BindServiceMethod(typeof(CloudShellService), "BindService")]
public abstract class CloudShellServiceBase
```

Base class for server-side implementations of CloudShellService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CloudShellService.CloudShellServiceBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Shell.V1](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1)

## Assembly

Google.Cloud.Shell.V1.dll

## Methods

### AddPublicKey(AddPublicKeyRequest, ServerCallContext)

```
public virtual Task<Operation> AddPublicKey(AddPublicKeyRequest request, ServerCallContext context)
```

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY\_EXISTS.

**Parameters**

**Name**

**Description**

`request`

`[AddPublicKeyRequest](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.AddPublicKeyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### AuthorizeEnvironment(AuthorizeEnvironmentRequest, ServerCallContext)

```
public virtual Task<Operation> AuthorizeEnvironment(AuthorizeEnvironmentRequest request, ServerCallContext context)
```

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

**Parameters**

**Name**

**Description**

`request`

`[AuthorizeEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.AuthorizeEnvironmentRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### GetEnvironment(GetEnvironmentRequest, ServerCallContext)

```
public virtual Task<Environment> GetEnvironment(GetEnvironmentRequest request, ServerCallContext context)
```

Gets an environment. Returns NOT\_FOUND if the environment does not exist.

**Parameters**

**Name**

**Description**

`request`

`[GetEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.GetEnvironmentRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Environment](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.Environment)>`

The response to send back to the client (wrapped by a task).

### RemovePublicKey(RemovePublicKeyRequest, ServerCallContext)

```
public virtual Task<Operation> RemovePublicKey(RemovePublicKeyRequest request, ServerCallContext context)
```

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT\_FOUND.

**Parameters**

**Name**

**Description**

`request`

`[RemovePublicKeyRequest](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.RemovePublicKeyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

### StartEnvironment(StartEnvironmentRequest, ServerCallContext)

```
public virtual Task<Operation> StartEnvironment(StartEnvironmentRequest request, ServerCallContext context)
```

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

**Parameters**

**Name**

**Description**

`request`

`[StartEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Shell.V1/1.1.0/Google.Cloud.Shell.V1.StartEnvironmentRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
