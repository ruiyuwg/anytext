-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CloudTasksGrpc.AsyncService (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public static interface CloudTasksGrpc.AsyncService
```

Cloud Tasks allows developers to manage the execution of background work in their applications.

## Methods

### bufferTask(BufferTaskRequest request, StreamObserver<BufferTaskResponse> responseObserver)

```
public default void bufferTask(BufferTaskRequest request, StreamObserver<BufferTaskResponse> responseObserver)
```

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK\_ID to your desired ID: projects/PROJECT\_ID/locations/LOCATION\_ID/queues/QUEUE\_ID/tasks/TASK\_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT\_ID/locations/LOCATION\_ID/queues/QUEUE\_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).

**Parameters**

**Name**

**Description**

`request`

`[BufferTaskRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.BufferTaskRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BufferTaskResponse](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.BufferTaskResponse)>`  

### createQueue(CreateQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void createQueue(CreateQueueRequest request, StreamObserver<Queue> responseObserver)
```

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[CreateQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.CreateQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

### createTask(CreateTaskRequest request, StreamObserver<Task> responseObserver)

```
public default void createTask(CreateTaskRequest request, StreamObserver<Task> responseObserver)
```

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command.

-   The maximum task size is 100KB.

**Parameters**

**Name**

**Description**

`request`

`[CreateTaskRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.CreateTaskRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Task](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Task)>`  

### deleteQueue(DeleteQueueRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteQueue(DeleteQueueRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, a queue with the same name can't be created for 7 days. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[DeleteQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.DeleteQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteTask(DeleteTaskRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteTask(DeleteTaskRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTaskRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.DeleteTaskRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getQueue(GetQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void getQueue(GetQueueRequest request, StreamObserver<Queue> responseObserver)
```

Gets a queue.

**Parameters**

**Name**

**Description**

`request`

`[GetQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.GetQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

### getTask(GetTaskRequest request, StreamObserver<Task> responseObserver)

```
public default void getTask(GetTaskRequest request, StreamObserver<Task> responseObserver)
```

Gets a task.

**Parameters**

**Name**

**Description**

`request`

`[GetTaskRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.GetTaskRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Task](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Task)>`  

### listQueues(ListQueuesRequest request, StreamObserver<ListQueuesResponse> responseObserver)

```
public default void listQueues(ListQueuesRequest request, StreamObserver<ListQueuesResponse> responseObserver)
```

Lists queues. Queues are returned in lexicographical order.

**Parameters**

**Name**

**Description**

`request`

`[ListQueuesRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.ListQueuesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListQueuesResponse](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.ListQueuesResponse)>`  

### listTasks(ListTasksRequest request, StreamObserver<ListTasksResponse> responseObserver)

```
public default void listTasks(ListTasksRequest request, StreamObserver<ListTasksResponse> responseObserver)
```

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

**Parameters**

**Name**

**Description**

`request`

`[ListTasksRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.ListTasksRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListTasksResponse](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.ListTasksResponse)>`  

### pauseQueue(PauseQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void pauseQueue(PauseQueueRequest request, StreamObserver<Queue> responseObserver)
```

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

**Parameters**

**Name**

**Description**

`request`

`[PauseQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.PauseQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

### purgeQueue(PurgeQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void purgeQueue(PurgeQueueRequest request, StreamObserver<Queue> responseObserver)
```

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

**Parameters**

**Name**

**Description**

`request`

`[PurgeQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.PurgeQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

### resumeQueue(ResumeQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void resumeQueue(ResumeQueueRequest request, StreamObserver<Queue> responseObserver)
```

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

**Parameters**

**Name**

**Description**

`request`

`[ResumeQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.ResumeQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

### runTask(RunTaskRequest request, StreamObserver<Task> responseObserver)

```
public default void runTask(RunTaskRequest request, StreamObserver<Task> responseObserver)
```

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

**Parameters**

**Name**

**Description**

`request`

`[RunTaskRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RunTaskRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Task](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Task)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public default void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### updateQueue(UpdateQueueRequest request, StreamObserver<Queue> responseObserver)

```
public default void updateQueue(UpdateQueueRequest request, StreamObserver<Queue> responseObserver)
```

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

**Parameters**

**Name**

**Description**

`request`

`[UpdateQueueRequest](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.UpdateQueueRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
