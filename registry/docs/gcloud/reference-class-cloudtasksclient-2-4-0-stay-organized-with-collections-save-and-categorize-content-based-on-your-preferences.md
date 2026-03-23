-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class CloudTasksClient (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [3.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Tasks.V2/latest/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.5.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.4.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.3.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.2.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.1.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/3.0.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.5.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.3.0/Google.Cloud.Tasks.V2.CloudTasksClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.2.0/Google.Cloud.Tasks.V2.CloudTasksClient)

```
public abstract class CloudTasksClient
```

CloudTasks client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CloudTasksClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[CloudTasksClientImpl](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClientImpl)

## Namespace

[Google.Cloud.Tasks.V2](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2)

## Assembly

Google.Cloud.Tasks.V2.dll

## Remarks

Cloud Tasks allows developers to manage the execution of background work in their applications.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the CloudTasks service, which is a host of "cloudtasks.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default CloudTasks scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default CloudTasks scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual CloudTasks.CloudTasksClient GrpcClient { get; }
```

The underlying gRPC CloudTasks client

**Property Value**

**Type**

**Description**

`[CloudTasks.CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasks.CloudTasksClient)`

## Methods

### Create()

```
public static CloudTasksClient Create()
```

Synchronously creates a [CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudTasksClientBuilder](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClientBuilder).

**Returns**

**Type**

**Description**

`[CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient)`

The created [CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient).

### CreateAsync(CancellationToken)

```
public static Task<CloudTasksClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudTasksClientBuilder](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient)>`

The task representing the created [CloudTasksClient](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient).

### CreateQueue(LocationName, Queue, CallSettings)

```
public virtual Queue CreateQueue(LocationName parent, Queue queue, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Queue queue = new Queue();
// Make the request
Queue response = cloudTasksClient.CreateQueue(parent, queue);
```

### CreateQueue(CreateQueueRequest, CallSettings)

```
public virtual Queue CreateQueue(CreateQueueRequest request, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[CreateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
CreateQueueRequest request = new CreateQueueRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Queue = new Queue(),
};
// Make the request
Queue response = cloudTasksClient.CreateQueue(request);
```

### CreateQueue(String, Queue, CallSettings)

```
public virtual Queue CreateQueue(string parent, Queue queue, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Queue queue = new Queue();
// Make the request
Queue response = cloudTasksClient.CreateQueue(parent, queue);
```

### CreateQueueAsync(LocationName, Queue, CallSettings)

```
public virtual Task<Queue> CreateQueueAsync(LocationName parent, Queue queue, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Queue queue = new Queue();
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(parent, queue);
```

### CreateQueueAsync(LocationName, Queue, CancellationToken)

```
public virtual Task<Queue> CreateQueueAsync(LocationName parent, Queue queue, CancellationToken cancellationToken)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Queue queue = new Queue();
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(parent, queue);
```

### CreateQueueAsync(CreateQueueRequest, CallSettings)

```
public virtual Task<Queue> CreateQueueAsync(CreateQueueRequest request, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[CreateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
CreateQueueRequest request = new CreateQueueRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Queue = new Queue(),
};
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(request);
```

### CreateQueueAsync(CreateQueueRequest, CancellationToken)

```
public virtual Task<Queue> CreateQueueAsync(CreateQueueRequest request, CancellationToken cancellationToken)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[CreateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
CreateQueueRequest request = new CreateQueueRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Queue = new Queue(),
};
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(request);
```

### CreateQueueAsync(String, Queue, CallSettings)

```
public virtual Task<Queue> CreateQueueAsync(string parent, Queue queue, CallSettings callSettings = null)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Queue queue = new Queue();
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(parent, queue);
```

### CreateQueueAsync(String, Queue, CancellationToken)

```
public virtual Task<Queue> CreateQueueAsync(string parent, Queue queue, CancellationToken cancellationToken)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of \[ListLocations\]\[google.cloud.location.Locations.ListLocations\].

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create.

\[Queue's name\]\[google.cloud.tasks.v2.Queue.name\] cannot be the same as an existing queue.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Queue queue = new Queue();
// Make the request
Queue response = await cloudTasksClient.CreateQueueAsync(parent, queue);
```

### CreateTask(CreateTaskRequest, CallSettings)

```
public virtual Task CreateTask(CreateTaskRequest request, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`request`

`[CreateTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
CreateTaskRequest request = new CreateTaskRequest
{
    ParentAsQueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
    Task = new gctv::Task(),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = cloudTasksClient.CreateTask(request);
```

### CreateTask(QueueName, Task, CallSettings)

```
public virtual Task CreateTask(QueueName parent, Task task, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName parent = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = cloudTasksClient.CreateTask(parent, task);
```

### CreateTask(String, Task, CallSettings)

```
public virtual Task CreateTask(string parent, Task task, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = cloudTasksClient.CreateTask(parent, task);
```

### CreateTaskAsync(CreateTaskRequest, CallSettings)

```
public virtual Task<Task> CreateTaskAsync(CreateTaskRequest request, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`request`

`[CreateTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
CreateTaskRequest request = new CreateTaskRequest
{
    ParentAsQueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
    Task = new gctv::Task(),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(request);
```

### CreateTaskAsync(CreateTaskRequest, CancellationToken)

```
public virtual Task<Task> CreateTaskAsync(CreateTaskRequest request, CancellationToken cancellationToken)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`request`

`[CreateTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CreateTaskRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
CreateTaskRequest request = new CreateTaskRequest
{
    ParentAsQueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
    Task = new gctv::Task(),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(request);
```

### CreateTaskAsync(QueueName, Task, CallSettings)

```
public virtual Task<Task> CreateTaskAsync(QueueName parent, Task task, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName parent = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(parent, task);
```

### CreateTaskAsync(QueueName, Task, CancellationToken)

```
public virtual Task<Task> CreateTaskAsync(QueueName parent, Task task, CancellationToken cancellationToken)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName parent = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(parent, task);
```

### CreateTaskAsync(String, Task, CallSettings)

```
public virtual Task<Task> CreateTaskAsync(string parent, Task task, CallSettings callSettings = null)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(parent, task);
```

### CreateTaskAsync(String, Task, CancellationToken)

```
public virtual Task<Task> CreateTaskAsync(string parent, Task task, CancellationToken cancellationToken)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

`task`

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task \[name\]\[google.cloud.tasks.v2.Task.name\]. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the \[response\]\[google.cloud.tasks.v2.Task.name\].

If \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with \[ALREADY\_EXISTS\]\[google.rpc.Code.ALREADY\_EXISTS\]. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or executed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or executed.

Because there is an extra lookup cost to identify duplicate task names, these \[CreateTask\]\[google.cloud.tasks.v2.CloudTasks.CreateTask\] calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
gctv::Task task = new gctv::Task();
// Make the request
gctv::Task response = await cloudTasksClient.CreateTaskAsync(parent, task);
```

### DeleteQueue(DeleteQueueRequest, CallSettings)

```
public virtual void DeleteQueue(DeleteQueueRequest request, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[DeleteQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
DeleteQueueRequest request = new DeleteQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
cloudTasksClient.DeleteQueue(request);
```

### DeleteQueue(QueueName, CallSettings)

```
public virtual void DeleteQueue(QueueName name, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
cloudTasksClient.DeleteQueue(name);
```

### DeleteQueue(String, CallSettings)

```
public virtual void DeleteQueue(string name, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
cloudTasksClient.DeleteQueue(name);
```

### DeleteQueueAsync(DeleteQueueRequest, CallSettings)

```
public virtual Task DeleteQueueAsync(DeleteQueueRequest request, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[DeleteQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteQueueRequest)`  

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
DeleteQueueRequest request = new DeleteQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
await cloudTasksClient.DeleteQueueAsync(request);
```

### DeleteQueueAsync(DeleteQueueRequest, CancellationToken)

```
public virtual Task DeleteQueueAsync(DeleteQueueRequest request, CancellationToken cancellationToken)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[DeleteQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteQueueRequest)`  

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
DeleteQueueRequest request = new DeleteQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
await cloudTasksClient.DeleteQueueAsync(request);
```

### DeleteQueueAsync(QueueName, CallSettings)

```
public virtual Task DeleteQueueAsync(QueueName name, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
await cloudTasksClient.DeleteQueueAsync(name);
```

### DeleteQueueAsync(QueueName, CancellationToken)

```
public virtual Task DeleteQueueAsync(QueueName name, CancellationToken cancellationToken)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
await cloudTasksClient.DeleteQueueAsync(name);
```

### DeleteQueueAsync(String, CallSettings)

```
public virtual Task DeleteQueueAsync(string name, CallSettings callSettings = null)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
await cloudTasksClient.DeleteQueueAsync(name);
```

### DeleteQueueAsync(String, CancellationToken)

```
public virtual Task DeleteQueueAsync(string name, CancellationToken cancellationToken)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
await cloudTasksClient.DeleteQueueAsync(name);
```

### DeleteTask(DeleteTaskRequest, CallSettings)

```
public virtual void DeleteTask(DeleteTaskRequest request, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
DeleteTaskRequest request = new DeleteTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
};
// Make the request
cloudTasksClient.DeleteTask(request);
```

### DeleteTask(TaskName, CallSettings)

```
public virtual void DeleteTask(TaskName name, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
cloudTasksClient.DeleteTask(name);
```

### DeleteTask(String, CallSettings)

```
public virtual void DeleteTask(string name, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
cloudTasksClient.DeleteTask(name);
```

### DeleteTaskAsync(DeleteTaskRequest, CallSettings)

```
public virtual Task DeleteTaskAsync(DeleteTaskRequest request, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteTaskRequest)`  

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
DeleteTaskRequest request = new DeleteTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
};
// Make the request
await cloudTasksClient.DeleteTaskAsync(request);
```

### DeleteTaskAsync(DeleteTaskRequest, CancellationToken)

```
public virtual Task DeleteTaskAsync(DeleteTaskRequest request, CancellationToken cancellationToken)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.DeleteTaskRequest)`  

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
DeleteTaskRequest request = new DeleteTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
};
// Make the request
await cloudTasksClient.DeleteTaskAsync(request);
```

### DeleteTaskAsync(TaskName, CallSettings)

```
public virtual Task DeleteTaskAsync(TaskName name, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
await cloudTasksClient.DeleteTaskAsync(name);
```

### DeleteTaskAsync(TaskName, CancellationToken)

```
public virtual Task DeleteTaskAsync(TaskName name, CancellationToken cancellationToken)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
await cloudTasksClient.DeleteTaskAsync(name);
```

### DeleteTaskAsync(String, CallSettings)

```
public virtual Task DeleteTaskAsync(string name, CallSettings callSettings = null)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
await cloudTasksClient.DeleteTaskAsync(name);
```

### DeleteTaskAsync(String, CancellationToken)

```
public virtual Task DeleteTaskAsync(string name, CancellationToken cancellationToken)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
await cloudTasksClient.DeleteTaskAsync(name);
```

### GetIamPolicy(IResourceName, CallSettings)

```
public virtual Policy GetIamPolicy(IResourceName resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = cloudTasksClient.GetIamPolicy(resource);
```

### GetIamPolicy(GetIamPolicyRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = cloudTasksClient.GetIamPolicy(request);
```

### GetIamPolicy(QueueName, CallSettings)

```
public virtual Policy GetIamPolicy(QueueName resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

The RPC response.

### GetIamPolicy(String, CallSettings)

```
public virtual Policy GetIamPolicy(string resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = cloudTasksClient.GetIamPolicy(resource);
```

### GetIamPolicyAsync(IResourceName, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(IResourceName, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(IResourceName resource, CancellationToken cancellationToken)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyRequest request = new GetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Options = new GetPolicyOptions(),
};
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(QueueName, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(QueueName resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

### GetIamPolicyAsync(QueueName, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(QueueName resource, CancellationToken cancellationToken)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)>`

A Task containing the RPC response.

### GetIamPolicyAsync(String, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, CallSettings callSettings = null)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(resource);
```

### GetIamPolicyAsync(String, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string resource, CancellationToken cancellationToken)
```

Gets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
// Make the request
Policy response = await cloudTasksClient.GetIamPolicyAsync(resource);
```

### GetQueue(GetQueueRequest, CallSettings)

```
public virtual Queue GetQueue(GetQueueRequest request, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`request`

`[GetQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
GetQueueRequest request = new GetQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = cloudTasksClient.GetQueue(request);
```

### GetQueue(QueueName, CallSettings)

```
public virtual Queue GetQueue(QueueName name, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = cloudTasksClient.GetQueue(name);
```

### GetQueue(String, CallSettings)

```
public virtual Queue GetQueue(string name, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = cloudTasksClient.GetQueue(name);
```

### GetQueueAsync(GetQueueRequest, CallSettings)

```
public virtual Task<Queue> GetQueueAsync(GetQueueRequest request, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`request`

`[GetQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetQueueRequest request = new GetQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(request);
```

### GetQueueAsync(GetQueueRequest, CancellationToken)

```
public virtual Task<Queue> GetQueueAsync(GetQueueRequest request, CancellationToken cancellationToken)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`request`

`[GetQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetQueueRequest request = new GetQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(request);
```

### GetQueueAsync(QueueName, CallSettings)

```
public virtual Task<Queue> GetQueueAsync(QueueName name, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(name);
```

### GetQueueAsync(QueueName, CancellationToken)

```
public virtual Task<Queue> GetQueueAsync(QueueName name, CancellationToken cancellationToken)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(name);
```

### GetQueueAsync(String, CallSettings)

```
public virtual Task<Queue> GetQueueAsync(string name, CallSettings callSettings = null)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(name);
```

### GetQueueAsync(String, CancellationToken)

```
public virtual Task<Queue> GetQueueAsync(string name, CancellationToken cancellationToken)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.GetQueueAsync(name);
```

### GetTask(GetTaskRequest, CallSettings)

```
public virtual Task GetTask(GetTaskRequest request, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`request`

`[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
GetTaskRequest request = new GetTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = cloudTasksClient.GetTask(request);
```

### GetTask(TaskName, CallSettings)

```
public virtual Task GetTask(TaskName name, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = cloudTasksClient.GetTask(name);
```

### GetTask(String, CallSettings)

```
public virtual Task GetTask(string name, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = cloudTasksClient.GetTask(name);
```

### GetTaskAsync(GetTaskRequest, CallSettings)

```
public virtual Task<Task> GetTaskAsync(GetTaskRequest request, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`request`

`[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetTaskRequest request = new GetTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(request);
```

### GetTaskAsync(GetTaskRequest, CancellationToken)

```
public virtual Task<Task> GetTaskAsync(GetTaskRequest request, CancellationToken cancellationToken)
```

Gets a task.

**Parameters**

**Name**

**Description**

`request`

`[GetTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.GetTaskRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
GetTaskRequest request = new GetTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(request);
```

### GetTaskAsync(TaskName, CallSettings)

```
public virtual Task<Task> GetTaskAsync(TaskName name, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(name);
```

### GetTaskAsync(TaskName, CancellationToken)

```
public virtual Task<Task> GetTaskAsync(TaskName name, CancellationToken cancellationToken)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(name);
```

### GetTaskAsync(String, CallSettings)

```
public virtual Task<Task> GetTaskAsync(string name, CallSettings callSettings = null)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(name);
```

### GetTaskAsync(String, CancellationToken)

```
public virtual Task<Task> GetTaskAsync(string name, CancellationToken cancellationToken)
```

Gets a task.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = await cloudTasksClient.GetTaskAsync(name);
```

### ListQueues(LocationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListQueuesResponse, Queue> ListQueues(LocationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueues(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Queue item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListQueuesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListQueues(ListQueuesRequest, CallSettings)

```
public virtual PagedEnumerable<ListQueuesResponse, Queue> ListQueues(ListQueuesRequest request, CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`request`

`[ListQueuesRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
ListQueuesRequest request = new ListQueuesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
};
// Make the request
PagedEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueues(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Queue item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListQueuesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListQueues(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListQueuesResponse, Queue> ListQueues(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueues(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Queue item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListQueuesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListQueuesAsync(LocationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListQueuesResponse, Queue> ListQueuesAsync(LocationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable asynchronous sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueuesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Queue item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListQueuesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListQueuesAsync(ListQueuesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListQueuesResponse, Queue> ListQueuesAsync(ListQueuesRequest request, CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`request`

`[ListQueuesRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable asynchronous sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
ListQueuesRequest request = new ListQueuesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
};
// Make the request
PagedAsyncEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueuesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Queue item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListQueuesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListQueuesAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListQueuesResponse, Queue> ListQueuesAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists queues.

Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListQueuesResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListQueuesResponse), [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A pageable asynchronous sequence of [Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListQueuesResponse, Queue> response = cloudTasksClient.ListQueuesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Queue item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListQueuesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Queue item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Queue> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Queue item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasks(ListTasksRequest, CallSettings)

```
public virtual PagedEnumerable<ListTasksResponse, Task> ListTasks(ListTasksRequest request, CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`request`

`[ListTasksRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
ListTasksRequest request = new ListTasksRequest
{
    ParentAsQueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
PagedEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasks(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (gctv::Task item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTasksResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasks(QueueName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListTasksResponse, Task> ListTasks(QueueName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`parent`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName parent = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
PagedEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasks(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gctv::Task item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTasksResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasks(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListTasksResponse, Task> ListTasks(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
PagedEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasks(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gctv::Task item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTasksResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasksAsync(ListTasksRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTasksResponse, Task> ListTasksAsync(ListTasksRequest request, CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`request`

`[ListTasksRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable asynchronous sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
ListTasksRequest request = new ListTasksRequest
{
    ParentAsQueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
PagedAsyncEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasksAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gctv::Task item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTasksResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasksAsync(QueueName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTasksResponse, Task> ListTasksAsync(QueueName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`parent`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable asynchronous sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName parent = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
PagedAsyncEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasksAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gctv::Task item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTasksResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTasksAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTasksResponse, Task> ListTasksAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the tasks in a queue.

By default, only the \[BASIC\]\[google.cloud.tasks.v2.Task.View.BASIC\] view is retrieved due to performance considerations; \[response\_view\]\[google.cloud.tasks.v2.ListTasksRequest.response\_view\] controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListTasksResponse](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ListTasksResponse), [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A pageable asynchronous sequence of [Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task) resources.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
PagedAsyncEnumerable<ListTasksResponse, gctv::Task> response = cloudTasksClient.ListTasksAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gctv::Task item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTasksResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gctv::Task item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gctv::Task> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gctv::Task item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PauseQueue(PauseQueueRequest, CallSettings)

```
public virtual Queue PauseQueue(PauseQueueRequest request, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`request`

`[PauseQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PauseQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
PauseQueueRequest request = new PauseQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = cloudTasksClient.PauseQueue(request);
```

### PauseQueue(QueueName, CallSettings)

```
public virtual Queue PauseQueue(QueueName name, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = cloudTasksClient.PauseQueue(name);
```

### PauseQueue(String, CallSettings)

```
public virtual Queue PauseQueue(string name, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = cloudTasksClient.PauseQueue(name);
```

### PauseQueueAsync(PauseQueueRequest, CallSettings)

```
public virtual Task<Queue> PauseQueueAsync(PauseQueueRequest request, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`request`

`[PauseQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PauseQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
PauseQueueRequest request = new PauseQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(request);
```

### PauseQueueAsync(PauseQueueRequest, CancellationToken)

```
public virtual Task<Queue> PauseQueueAsync(PauseQueueRequest request, CancellationToken cancellationToken)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`request`

`[PauseQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PauseQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
PauseQueueRequest request = new PauseQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(request);
```

### PauseQueueAsync(QueueName, CallSettings)

```
public virtual Task<Queue> PauseQueueAsync(QueueName name, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(name);
```

### PauseQueueAsync(QueueName, CancellationToken)

```
public virtual Task<Queue> PauseQueueAsync(QueueName name, CancellationToken cancellationToken)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(name);
```

### PauseQueueAsync(String, CallSettings)

```
public virtual Task<Queue> PauseQueueAsync(string name, CallSettings callSettings = null)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(name);
```

### PauseQueueAsync(String, CancellationToken)

```
public virtual Task<Queue> PauseQueueAsync(string name, CancellationToken cancellationToken)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via \[ResumeQueue\]\[google.cloud.tasks.v2.CloudTasks.ResumeQueue\]. Tasks can still be added when the queue is paused. A queue is paused if its \[state\]\[google.cloud.tasks.v2.Queue.state\] is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.PauseQueueAsync(name);
```

### PurgeQueue(PurgeQueueRequest, CallSettings)

```
public virtual Queue PurgeQueue(PurgeQueueRequest request, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`request`

`[PurgeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PurgeQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
PurgeQueueRequest request = new PurgeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = cloudTasksClient.PurgeQueue(request);
```

### PurgeQueue(QueueName, CallSettings)

```
public virtual Queue PurgeQueue(QueueName name, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = cloudTasksClient.PurgeQueue(name);
```

### PurgeQueue(String, CallSettings)

```
public virtual Queue PurgeQueue(string name, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = cloudTasksClient.PurgeQueue(name);
```

### PurgeQueueAsync(PurgeQueueRequest, CallSettings)

```
public virtual Task<Queue> PurgeQueueAsync(PurgeQueueRequest request, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`request`

`[PurgeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PurgeQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
PurgeQueueRequest request = new PurgeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(request);
```

### PurgeQueueAsync(PurgeQueueRequest, CancellationToken)

```
public virtual Task<Queue> PurgeQueueAsync(PurgeQueueRequest request, CancellationToken cancellationToken)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`request`

`[PurgeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.PurgeQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
PurgeQueueRequest request = new PurgeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(request);
```

### PurgeQueueAsync(QueueName, CallSettings)

```
public virtual Task<Queue> PurgeQueueAsync(QueueName name, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(name);
```

### PurgeQueueAsync(QueueName, CancellationToken)

```
public virtual Task<Queue> PurgeQueueAsync(QueueName name, CancellationToken cancellationToken)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(name);
```

### PurgeQueueAsync(String, CallSettings)

```
public virtual Task<Queue> PurgeQueueAsync(string name, CallSettings callSettings = null)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(name);
```

### PurgeQueueAsync(String, CancellationToken)

```
public virtual Task<Queue> PurgeQueueAsync(string name, CancellationToken cancellationToken)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.PurgeQueueAsync(name);
```

### ResumeQueue(QueueName, CallSettings)

```
public virtual Queue ResumeQueue(QueueName name, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = cloudTasksClient.ResumeQueue(name);
```

### ResumeQueue(ResumeQueueRequest, CallSettings)

```
public virtual Queue ResumeQueue(ResumeQueueRequest request, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`request`

`[ResumeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ResumeQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
ResumeQueueRequest request = new ResumeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = cloudTasksClient.ResumeQueue(request);
```

### ResumeQueue(String, CallSettings)

```
public virtual Queue ResumeQueue(string name, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = cloudTasksClient.ResumeQueue(name);
```

### ResumeQueueAsync(QueueName, CallSettings)

```
public virtual Task<Queue> ResumeQueueAsync(QueueName name, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(name);
```

### ResumeQueueAsync(QueueName, CancellationToken)

```
public virtual Task<Queue> ResumeQueueAsync(QueueName name, CancellationToken cancellationToken)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
QueueName name = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]");
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(name);
```

### ResumeQueueAsync(ResumeQueueRequest, CallSettings)

```
public virtual Task<Queue> ResumeQueueAsync(ResumeQueueRequest request, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`request`

`[ResumeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ResumeQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
ResumeQueueRequest request = new ResumeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(request);
```

### ResumeQueueAsync(ResumeQueueRequest, CancellationToken)

```
public virtual Task<Queue> ResumeQueueAsync(ResumeQueueRequest request, CancellationToken cancellationToken)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`request`

`[ResumeQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.ResumeQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
ResumeQueueRequest request = new ResumeQueueRequest
{
    QueueName = QueueName.FromProjectLocationQueue("[PROJECT]", "[LOCATION]", "[QUEUE]"),
};
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(request);
```

### ResumeQueueAsync(String, CallSettings)

```
public virtual Task<Queue> ResumeQueueAsync(string name, CallSettings callSettings = null)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(name);
```

### ResumeQueueAsync(String, CancellationToken)

```
public virtual Task<Queue> ResumeQueueAsync(string name, CancellationToken cancellationToken)
```

Resume a queue.

This method resumes a queue after it has been \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\] or \[DISABLED\]\[google.cloud.tasks.v2.Queue.State.DISABLED\]. The state of a queue is stored in the queue's \[state\]\[google.cloud.tasks.v2.Queue.state\]; after calling this method it will be set to \[RUNNING\]\[google.cloud.tasks.v2.Queue.State.RUNNING\].

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]";
// Make the request
Queue response = await cloudTasksClient.ResumeQueueAsync(name);
```

### RunTask(RunTaskRequest, CallSettings)

```
public virtual Task RunTask(RunTaskRequest request, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[RunTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.RunTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
RunTaskRequest request = new RunTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = cloudTasksClient.RunTask(request);
```

### RunTask(TaskName, CallSettings)

```
public virtual Task RunTask(TaskName name, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = cloudTasksClient.RunTask(name);
```

### RunTask(String, CallSettings)

```
public virtual Task RunTask(string name, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = cloudTasksClient.RunTask(name);
```

### RunTaskAsync(RunTaskRequest, CallSettings)

```
public virtual Task<Task> RunTaskAsync(RunTaskRequest request, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[RunTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.RunTaskRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
RunTaskRequest request = new RunTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(request);
```

### RunTaskAsync(RunTaskRequest, CancellationToken)

```
public virtual Task<Task> RunTaskAsync(RunTaskRequest request, CancellationToken cancellationToken)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[RunTaskRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.RunTaskRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
RunTaskRequest request = new RunTaskRequest
{
    TaskName = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]"),
    ResponseView = gctv::Task.Types.View.Unspecified,
};
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(request);
```

### RunTaskAsync(TaskName, CallSettings)

```
public virtual Task<Task> RunTaskAsync(TaskName name, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(name);
```

### RunTaskAsync(TaskName, CancellationToken)

```
public virtual Task<Task> RunTaskAsync(TaskName name, CancellationToken cancellationToken)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[TaskName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TaskName name = TaskName.FromProjectLocationQueueTask("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(name);
```

### RunTaskAsync(String, CallSettings)

```
public virtual Task<Task> RunTaskAsync(string name, CallSettings callSettings = null)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(name);
```

### RunTaskAsync(String, CancellationToken)

```
public virtual Task<Task> RunTaskAsync(string name, CancellationToken cancellationToken)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its \[RateLimits\]\[google.cloud.tasks.v2.RateLimits\] or is \[PAUSED\]\[google.cloud.tasks.v2.Queue.State.PAUSED\].

This command is meant to be used for manual debugging. For example, \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the \[status\]\[Task.status\] after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's \[schedule\_time\]\[google.cloud.tasks.v2.Task.schedule\_time\] will be reset to the time that \[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] was called plus the retry delay specified in the queue's \[RetryConfig\]\[google.cloud.tasks.v2.RetryConfig\].

\[RunTask\]\[google.cloud.tasks.v2.CloudTasks.RunTask\] returns \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Task](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Task)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/queues/[QUEUE]/tasks/[TASK]";
// Make the request
gctv::Task response = await cloudTasksClient.RunTaskAsync(name);
```

### SetIamPolicy(IResourceName, Policy, CallSettings)

```
public virtual Policy SetIamPolicy(IResourceName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = cloudTasksClient.SetIamPolicy(resource, policy);
```

### SetIamPolicy(SetIamPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = cloudTasksClient.SetIamPolicy(request);
```

### SetIamPolicy(QueueName, Policy, CallSettings)

```
public virtual Policy SetIamPolicy(QueueName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### SetIamPolicy(String, Policy, CallSettings)

```
public virtual Policy SetIamPolicy(string resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = cloudTasksClient.SetIamPolicy(resource, policy);
```

### SetIamPolicyAsync(IResourceName, Policy, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(IResourceName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(IResourceName, Policy, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(IResourceName resource, Policy policy, CancellationToken cancellationToken)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
Policy policy = new Policy();
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyRequest request, CancellationToken cancellationToken)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyRequest request = new SetIamPolicyRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Policy = new Policy(),
};
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(QueueName, Policy, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(QueueName resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### SetIamPolicyAsync(QueueName, Policy, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(QueueName resource, Policy policy, CancellationToken cancellationToken)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### SetIamPolicyAsync(String, Policy, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(string resource, Policy policy, CallSettings callSettings = null)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(resource, policy);
```

### SetIamPolicyAsync(String, Policy, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(string resource, Policy policy, CancellationToken cancellationToken)
```

Sets the access control policy for a \[Queue\]\[google.cloud.tasks.v2.Queue\]. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
Policy policy = new Policy();
// Make the request
Policy response = await cloudTasksClient.SetIamPolicyAsync(resource, policy);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient#Google_Cloud_Tasks_V2_CloudTasksClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient#Google_Cloud_Tasks_V2_CloudTasksClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient#Google_Cloud_Tasks_V2_CloudTasksClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.CloudTasksClient#Google_Cloud_Tasks_V2_CloudTasksClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(IResourceName, IEnumerable<String>, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(IResourceName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = cloudTasksClient.TestIamPermissions(resource, permissions);
```

### TestIamPermissions(TestIamPermissionsRequest, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = cloudTasksClient.TestIamPermissions(request);
```

### TestIamPermissions(QueueName, IEnumerable<String>, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(QueueName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### TestIamPermissions(String, IEnumerable<String>, CallSettings)

```
public virtual TestIamPermissionsResponse TestIamPermissions(string resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = cloudTasksClient.TestIamPermissions(resource, permissions);
```

### TestIamPermissionsAsync(IResourceName, IEnumerable<String>, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(IResourceName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(IResourceName, IEnumerable<String>, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(IResourceName resource, IEnumerable<string> permissions, CancellationToken cancellationToken)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
IResourceName resource = new UnparsedResourceName("a/wildcard/resource");
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsRequest, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsRequest request = new TestIamPermissionsRequest
{
    ResourceAsResourceName = new UnparsedResourceName("a/wildcard/resource"),
    Permissions = { "", },
};
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(QueueName, IEnumerable<String>, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(QueueName resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### TestIamPermissionsAsync(QueueName, IEnumerable<String>, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(QueueName resource, IEnumerable<string> permissions, CancellationToken cancellationToken)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`resource`

`[QueueName](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.QueueName)`  

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

### TestIamPermissionsAsync(String, IEnumerable<String>, CallSettings)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(string resource, IEnumerable<string> permissions, CallSettings callSettings = null)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(resource, permissions);
```

### TestIamPermissionsAsync(String, IEnumerable<String>, CancellationToken)

```
public virtual Task<TestIamPermissionsResponse> TestIamPermissionsAsync(string resource, IEnumerable<string> permissions, CancellationToken cancellationToken)
```

Returns permissions that a caller has on a \[Queue\]\[google.cloud.tasks.v2.Queue\]. If the resource does not exist, this will return an empty set of permissions, not a \[NOT\_FOUND\]\[google.rpc.Code.NOT\_FOUND\] error.

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
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
string resource = "a/wildcard/resource";
IEnumerable<string> permissions = new string[] { "", };
// Make the request
TestIamPermissionsResponse response = await cloudTasksClient.TestIamPermissionsAsync(resource, permissions);
```

### UpdateQueue(Queue, FieldMask, CallSettings)

```
public virtual Queue UpdateQueue(Queue queue, FieldMask updateMask, CallSettings callSettings = null)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create or update.

The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] must be specified.

Output only fields cannot be modified using UpdateQueue. Any value specified for an output only field will be ignored. The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] cannot be changed.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

A mask used to specify which fields of the queue are being updated.

If empty, then all fields will be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
Queue queue = new Queue();
FieldMask updateMask = new FieldMask();
// Make the request
Queue response = cloudTasksClient.UpdateQueue(queue, updateMask);
```

### UpdateQueue(UpdateQueueRequest, CallSettings)

```
public virtual Queue UpdateQueue(UpdateQueueRequest request, CallSettings callSettings = null)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[UpdateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.UpdateQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`

The RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = CloudTasksClient.Create();
// Initialize request argument(s)
UpdateQueueRequest request = new UpdateQueueRequest
{
    Queue = new Queue(),
    UpdateMask = new FieldMask(),
};
// Make the request
Queue response = cloudTasksClient.UpdateQueue(request);
```

### UpdateQueueAsync(Queue, FieldMask, CallSettings)

```
public virtual Task<Queue> UpdateQueueAsync(Queue queue, FieldMask updateMask, CallSettings callSettings = null)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create or update.

The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] must be specified.

Output only fields cannot be modified using UpdateQueue. Any value specified for an output only field will be ignored. The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] cannot be changed.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

A mask used to specify which fields of the queue are being updated.

If empty, then all fields will be updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
Queue queue = new Queue();
FieldMask updateMask = new FieldMask();
// Make the request
Queue response = await cloudTasksClient.UpdateQueueAsync(queue, updateMask);
```

### UpdateQueueAsync(Queue, FieldMask, CancellationToken)

```
public virtual Task<Queue> UpdateQueueAsync(Queue queue, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`queue`

`[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)`  

Required. The queue to create or update.

The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] must be specified.

Output only fields cannot be modified using UpdateQueue. Any value specified for an output only field will be ignored. The queue's \[name\]\[google.cloud.tasks.v2.Queue.name\] cannot be changed.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

A mask used to specify which fields of the queue are being updated.

If empty, then all fields will be updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
Queue queue = new Queue();
FieldMask updateMask = new FieldMask();
// Make the request
Queue response = await cloudTasksClient.UpdateQueueAsync(queue, updateMask);
```

### UpdateQueueAsync(UpdateQueueRequest, CallSettings)

```
public virtual Task<Queue> UpdateQueueAsync(UpdateQueueRequest request, CallSettings callSettings = null)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[UpdateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.UpdateQueueRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
UpdateQueueRequest request = new UpdateQueueRequest
{
    Queue = new Queue(),
    UpdateMask = new FieldMask(),
};
// Make the request
Queue response = await cloudTasksClient.UpdateQueueAsync(request);
```

### UpdateQueueAsync(UpdateQueueRequest, CancellationToken)

```
public virtual Task<Queue> UpdateQueueAsync(UpdateQueueRequest request, CancellationToken cancellationToken)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[UpdateQueueRequest](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.UpdateQueueRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Queue](/dotnet/docs/reference/Google.Cloud.Tasks.V2/2.4.0/Google.Cloud.Tasks.V2.Queue)>`

A Task containing the RPC response.

**Example**

```
// Create client
CloudTasksClient cloudTasksClient = await CloudTasksClient.CreateAsync();
// Initialize request argument(s)
UpdateQueueRequest request = new UpdateQueueRequest
{
    Queue = new Queue(),
    UpdateMask = new FieldMask(),
};
// Make the request
Queue response = await cloudTasksClient.UpdateQueueAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
