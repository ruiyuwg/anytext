-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudTasksGrpc.CloudTasksBlockingStub (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public static final class CloudTasksGrpc.CloudTasksBlockingStub extends AbstractBlockingStub<CloudTasksGrpc.CloudTasksBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service CloudTasks.

Cloud Tasks allows developers to manage the execution of background work in their applications.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> CloudTasksGrpc.CloudTasksBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected CloudTasksGrpc.CloudTasksBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[CloudTasksGrpc.CloudTasksBlockingStub](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.CloudTasksGrpc.CloudTasksBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createQueue(CreateQueueRequest request)

```
public Queue createQueue(CreateQueueRequest request)
```

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameter**

**Name**

**Description**

`request`

`[CreateQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.CreateQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

### createTask(CreateTaskRequest request)

```
public Task createTask(CreateTaskRequest request)
```

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameter**

**Name**

**Description**

`request`

`[CreateTaskRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.CreateTaskRequest)`  

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Task)`

### deleteQueue(DeleteQueueRequest request)

```
public Empty deleteQueue(DeleteQueueRequest request)
```

Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, a queue with the same name can't be created for 7 days. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameter**

**Name**

**Description**

`request`

`[DeleteQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.DeleteQueueRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteTask(DeleteTaskRequest request)

```
public Empty deleteTask(DeleteTaskRequest request)
```

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameter**

**Name**

**Description**

`request`

`[DeleteTaskRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.DeleteTaskRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getIamPolicy(GetIamPolicyRequest request)

```
public Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getQueue(GetQueueRequest request)

```
public Queue getQueue(GetQueueRequest request)
```

Gets a queue.

**Parameter**

**Name**

**Description**

`request`

`[GetQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.GetQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

### getTask(GetTaskRequest request)

```
public Task getTask(GetTaskRequest request)
```

Gets a task.

**Parameter**

**Name**

**Description**

`request`

`[GetTaskRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.GetTaskRequest)`  

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Task)`

### listQueues(ListQueuesRequest request)

```
public ListQueuesResponse listQueues(ListQueuesRequest request)
```

Lists queues. Queues are returned in lexicographical order.

**Parameter**

**Name**

**Description**

`request`

`[ListQueuesRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.ListQueuesRequest)`  

**Returns**

**Type**

**Description**

`[ListQueuesResponse](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.ListQueuesResponse)`

### listTasks(ListTasksRequest request)

```
public ListTasksResponse listTasks(ListTasksRequest request)
```

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

**Parameter**

**Name**

**Description**

`request`

`[ListTasksRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.ListTasksRequest)`  

**Returns**

**Type**

**Description**

`[ListTasksResponse](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.ListTasksResponse)`

### pauseQueue(PauseQueueRequest request)

```
public Queue pauseQueue(PauseQueueRequest request)
```

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

**Parameter**

**Name**

**Description**

`request`

`[PauseQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.PauseQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

### purgeQueue(PurgeQueueRequest request)

```
public Queue purgeQueue(PurgeQueueRequest request)
```

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameter**

**Name**

**Description**

`request`

`[PurgeQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.PurgeQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

### resumeQueue(ResumeQueueRequest request)

```
public Queue resumeQueue(ResumeQueueRequest request)
```

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameter**

**Name**

**Description**

`request`

`[ResumeQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.ResumeQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

### runTask(RunTaskRequest request)

```
public Task runTask(RunTaskRequest request)
```

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

**Parameter**

**Name**

**Description**

`request`

`[RunTaskRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.RunTaskRequest)`  

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Task)`

### setIamPolicy(SetIamPolicyRequest request)

```
public Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### testIamPermissions(TestIamPermissionsRequest request)

```
public TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

### updateQueue(UpdateQueueRequest request)

```
public Queue updateQueue(UpdateQueueRequest request)
```

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameter**

**Name**

**Description**

`request`

`[UpdateQueueRequest](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.UpdateQueueRequest)`  

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.47.0/com.google.cloud.tasks.v2beta3.Queue)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
