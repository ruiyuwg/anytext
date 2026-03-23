-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudTasksClient (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public class CloudTasksClient implements BackgroundResource
```

Service Description: Cloud Tasks allows developers to manage the execution of background work in their applications.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Queue response = cloudTasksClient.getQueue(name);
 }
 
```
 

Note: close() needs to be called on the CloudTasksClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of CloudTasksSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudTasksSettings cloudTasksSettings =
     CloudTasksSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 CloudTasksClient cloudTasksClient = CloudTasksClient.create(cloudTasksSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudTasksSettings cloudTasksSettings =
     CloudTasksSettings.newBuilder().setEndpoint(myEndpoint).build();
 CloudTasksClient cloudTasksClient = CloudTasksClient.create(cloudTasksSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CloudTasksSettings cloudTasksSettings =
     CloudTasksSettings.newBuilder()
         .setTransportChannelProvider(
             CloudTasksSettings.defaultHttpJsonTransportProviderBuilder().build())
         .build();
 CloudTasksClient cloudTasksClient = CloudTasksClient.create(cloudTasksSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> CloudTasksClient

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

## Inherited Members

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

## Static Methods

### create()

```
public static final CloudTasksClient create()
```

Constructs an instance of CloudTasksClient with default settings.

**Returns**

**Type**

**Description**

[CloudTasksClient](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(CloudTasksSettings settings)

```
public static final CloudTasksClient create(CloudTasksSettings settings)
```

Constructs an instance of CloudTasksClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[CloudTasksSettings](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksSettings)`  

**Returns**

**Type**

**Description**

[CloudTasksClient](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(CloudTasksStub stub)

```
public static final CloudTasksClient create(CloudTasksStub stub)
```

Constructs an instance of CloudTasksClient, using the given stub for making calls. This is for advanced usage - prefer using create(CloudTasksSettings).

**Parameter**

**Name**

**Description**

stub

`[CloudTasksStub](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.stub.CloudTasksStub)`  

**Returns**

**Type**

**Description**

[CloudTasksClient](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient)

## Constructors

### CloudTasksClient(CloudTasksSettings settings)

```
protected CloudTasksClient(CloudTasksSettings settings)
```

Constructs an instance of CloudTasksClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[CloudTasksSettings](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksSettings)`  

### CloudTasksClient(CloudTasksStub stub)

```
protected CloudTasksClient(CloudTasksStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[CloudTasksStub](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.stub.CloudTasksStub)`  

## Methods

### acknowledgeTask(AcknowledgeTaskRequest request)

```
public final void acknowledgeTask(AcknowledgeTaskRequest request)
```

Acknowledges a pull task.

The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished.

The worker must acknowledge a task within the lease\_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   AcknowledgeTaskRequest request =
       AcknowledgeTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .build();
   cloudTasksClient.acknowledgeTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[AcknowledgeTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.AcknowledgeTaskRequest)`  

The request object containing all of the parameters for the API call.

### acknowledgeTask(TaskName name, Timestamp scheduleTime)

```
public final void acknowledgeTask(TaskName name, Timestamp scheduleTime)
```

Acknowledges a pull task.

The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished.

The worker must acknowledge a task within the lease\_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   cloudTasksClient.acknowledgeTask(name, scheduleTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

### acknowledgeTask(String name, Timestamp scheduleTime)

```
public final void acknowledgeTask(String name, Timestamp scheduleTime)
```

Acknowledges a pull task.

The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished.

The worker must acknowledge a task within the lease\_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   cloudTasksClient.acknowledgeTask(name, scheduleTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

### acknowledgeTaskCallable()

```
public final UnaryCallable<AcknowledgeTaskRequest,Empty> acknowledgeTaskCallable()
```

Acknowledges a pull task.

The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished.

The worker must acknowledge a task within the lease\_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   AcknowledgeTaskRequest request =
       AcknowledgeTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .build();
   ApiFuture<Empty> future = cloudTasksClient.acknowledgeTaskCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AcknowledgeTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.AcknowledgeTaskRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### cancelLease(CancelLeaseRequest request)

```
public final Task cancelLease(CancelLeaseRequest request)
```

Cancel a pull task's lease.

The worker can use this method to cancel a task's lease by setting its schedule\_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CancelLeaseRequest request =
       CancelLeaseRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .build();
   Task response = cloudTasksClient.cancelLease(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CancelLeaseRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CancelLeaseRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### cancelLease(TaskName name, Timestamp scheduleTime)

```
public final Task cancelLease(TaskName name, Timestamp scheduleTime)
```

Cancel a pull task's lease.

The worker can use this method to cancel a task's lease by setting its schedule\_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   Task response = cloudTasksClient.cancelLease(name, scheduleTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### cancelLease(String name, Timestamp scheduleTime)

```
public final Task cancelLease(String name, Timestamp scheduleTime)
```

Cancel a pull task's lease.

The worker can use this method to cancel a task's lease by setting its schedule\_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   Task response = cloudTasksClient.cancelLease(name, scheduleTime);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### cancelLeaseCallable()

```
public final UnaryCallable<CancelLeaseRequest,Task> cancelLeaseCallable()
```

Cancel a pull task's lease.

The worker can use this method to cancel a task's lease by setting its schedule\_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CancelLeaseRequest request =
       CancelLeaseRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .build();
   ApiFuture<Task> future = cloudTasksClient.cancelLeaseCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CancelLeaseRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CancelLeaseRequest),[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)\>

### close()

```
public final void close()
```

### createQueue(CreateQueueRequest request)

```
public final Queue createQueue(CreateQueueRequest request)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CreateQueueRequest request =
       CreateQueueRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setQueue(Queue.newBuilder().build())
           .build();
   Queue response = cloudTasksClient.createQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CreateQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### createQueue(LocationName parent, Queue queue)

```
public final Queue createQueue(LocationName parent, Queue queue)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   Queue queue = Queue.newBuilder().build();
   Queue response = cloudTasksClient.createQueue(parent, queue);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[LocationName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LocationName)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of ListLocations.

queue

`[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)`  

Required. The queue to create.

Queue's name cannot be the same as an existing queue.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### createQueue(String parent, Queue queue)

```
public final Queue createQueue(String parent, Queue queue)
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   Queue queue = Queue.newBuilder().build();
   Queue response = cloudTasksClient.createQueue(parent, queue);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

The list of allowed locations can be obtained by calling Cloud Tasks' implementation of ListLocations.

queue

`[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)`  

Required. The queue to create.

Queue's name cannot be the same as an existing queue.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### createQueueCallable()

```
public final UnaryCallable<CreateQueueRequest,Queue> createQueueCallable()
```

Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CreateQueueRequest request =
       CreateQueueRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setQueue(Queue.newBuilder().build())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.createQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CreateQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

### createTask(CreateTaskRequest request)

```
public final Task createTask(CreateTaskRequest request)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   For App Engine queues, the maximum task size is 100KB.
-   For pull queues, the maximum task size is 1MB.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CreateTaskRequest request =
       CreateTaskRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setTask(Task.newBuilder().build())
           .build();
   Task response = cloudTasksClient.createTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CreateTaskRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### createTask(QueueName parent, Task task)

```
public final Task createTask(QueueName parent, Task task)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   For App Engine queues, the maximum task size is 100KB.
-   For pull queues, the maximum task size is 1MB.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Task task = Task.newBuilder().build();
   Task response = cloudTasksClient.createTask(parent, task);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

task

`[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response.

If schedule\_time is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or completed recently then the call will fail with ALREADY\_EXISTS. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or completed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or completed.

Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### createTask(String parent, Task task)

```
public final Task createTask(String parent, Task task)
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   For App Engine queues, the maximum task size is 100KB.
-   For pull queues, the maximum task size is 1MB.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Task task = Task.newBuilder().build();
   Task response = cloudTasksClient.createTask(parent, task);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

The queue must already exist.

task

`[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)`  

Required. The task to add.

Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response.

If schedule\_time is not set or is in the past then Cloud Tasks will set it to the current time.

Task De-duplication:

Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or completed recently then the call will fail with ALREADY\_EXISTS. If the task's queue was created using Cloud Tasks, then another task with the same name can't be created for ~1hour after the original task was deleted or completed. If the task's queue was created using queue.yaml or queue.xml, then another task with the same name can't be created for ~9days after the original task was deleted or completed.

Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### createTaskCallable()

```
public final UnaryCallable<CreateTaskRequest,Task> createTaskCallable()
```

Creates a task and adds it to a queue.

Tasks cannot be updated after creation; there is no UpdateTask command.

-   For App Engine queues, the maximum task size is 100KB.
-   For pull queues, the maximum task size is 1MB.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   CreateTaskRequest request =
       CreateTaskRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setTask(Task.newBuilder().build())
           .build();
   ApiFuture<Task> future = cloudTasksClient.createTaskCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CreateTaskRequest),[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)\>

### deleteQueue(DeleteQueueRequest request)

```
public final void deleteQueue(DeleteQueueRequest request)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   DeleteQueueRequest request =
       DeleteQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   cloudTasksClient.deleteQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.DeleteQueueRequest)`  

The request object containing all of the parameters for the API call.

### deleteQueue(QueueName name)

```
public final void deleteQueue(QueueName name)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   cloudTasksClient.deleteQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

### deleteQueue(String name)

```
public final void deleteQueue(String name)
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   cloudTasksClient.deleteQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

### deleteQueueCallable()

```
public final UnaryCallable<DeleteQueueRequest,Empty> deleteQueueCallable()
```

Deletes a queue.

This command will delete the queue even if it has tasks in it.

Note: If you delete a queue, a queue with the same name can't be created for 7 days.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   DeleteQueueRequest request =
       DeleteQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   ApiFuture<Empty> future = cloudTasksClient.deleteQueueCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.DeleteQueueRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteTask(DeleteTaskRequest request)

```
public final void deleteTask(DeleteTaskRequest request)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   DeleteTaskRequest request =
       DeleteTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   cloudTasksClient.deleteTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.DeleteTaskRequest)`  

The request object containing all of the parameters for the API call.

### deleteTask(TaskName name)

```
public final void deleteTask(TaskName name)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   cloudTasksClient.deleteTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

### deleteTask(String name)

```
public final void deleteTask(String name)
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   cloudTasksClient.deleteTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

### deleteTaskCallable()

```
public final UnaryCallable<DeleteTaskRequest,Empty> deleteTaskCallable()
```

Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   DeleteTaskRequest request =
       DeleteTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   ApiFuture<Empty> future = cloudTasksClient.deleteTaskCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.DeleteTaskRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getIamPolicy(ResourceName resource)

```
public final Policy getIamPolicy(ResourceName resource)
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ResourceName resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Policy response = cloudTasksClient.getIamPolicy(resource);
 }
 
```
 

**Parameter**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicy(QueueName queueName)

```
public final Policy getIamPolicy(QueueName queueName)
```

**Parameter**

**Name**

**Description**

queueName

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicy(GetIamPolicyRequest request)

```
public final Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   Policy response = cloudTasksClient.getIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.GetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicy(String resource)

```
public final Policy getIamPolicy(String resource)
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Policy response = cloudTasksClient.getIamPolicy(resource);
 }
 
```
 

**Parameter**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### getIamPolicyCallable()

```
public final UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.getIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetIamPolicyRequest request =
       GetIamPolicyRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setOptions(GetPolicyOptions.newBuilder().build())
           .build();
   ApiFuture<Policy> future = cloudTasksClient.getIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy\>

### getQueue(GetQueueRequest request)

```
public final Queue getQueue(GetQueueRequest request)
```

Gets a queue.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetQueueRequest request =
       GetQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setReadMask(FieldMask.newBuilder().build())
           .build();
   Queue response = cloudTasksClient.getQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.GetQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### getQueue(QueueName name)

```
public final Queue getQueue(QueueName name)
```

Gets a queue.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Queue response = cloudTasksClient.getQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### getQueue(String name)

```
public final Queue getQueue(String name)
```

Gets a queue.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Queue response = cloudTasksClient.getQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### getQueueCallable()

```
public final UnaryCallable<GetQueueRequest,Queue> getQueueCallable()
```

Gets a queue.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetQueueRequest request =
       GetQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setReadMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.getQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.GetQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

### getSettings()

```
public final CloudTasksSettings getSettings()
```

**Returns**

**Type**

**Description**

[CloudTasksSettings](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksSettings)

### getStub()

```
public CloudTasksStub getStub()
```

**Returns**

**Type**

**Description**

[CloudTasksStub](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.stub.CloudTasksStub)

### getTask(GetTaskRequest request)

```
public final Task getTask(GetTaskRequest request)
```

Gets a task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetTaskRequest request =
       GetTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   Task response = cloudTasksClient.getTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.GetTaskRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### getTask(TaskName name)

```
public final Task getTask(TaskName name)
```

Gets a task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   Task response = cloudTasksClient.getTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### getTask(String name)

```
public final Task getTask(String name)
```

Gets a task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   Task response = cloudTasksClient.getTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### getTaskCallable()

```
public final UnaryCallable<GetTaskRequest,Task> getTaskCallable()
```

Gets a task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   GetTaskRequest request =
       GetTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   ApiFuture<Task> future = cloudTasksClient.getTaskCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.GetTaskRequest),[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)\>

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### leaseTasks(LeaseTasksRequest request)

```
public final LeaseTasksResponse leaseTasks(LeaseTasksRequest request)
```

Leases tasks from a pull queue for lease\_duration.

This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task.

The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response\_view to FULL.

A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE\_EXHAUSTED is returned when this limit is exceeded. RESOURCE\_EXHAUSTED is also returned when max\_tasks\_dispatched\_per\_second is exceeded.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   LeaseTasksRequest request =
       LeaseTasksRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setMaxTasks(-233969421)
           .setLeaseDuration(Duration.newBuilder().build())
           .setFilter("filter-1274492040")
           .build();
   LeaseTasksResponse response = cloudTasksClient.leaseTasks(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[LeaseTasksRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[LeaseTasksResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksResponse)

### leaseTasks(QueueName parent, Duration leaseDuration)

```
public final LeaseTasksResponse leaseTasks(QueueName parent, Duration leaseDuration)
```

Leases tasks from a pull queue for lease\_duration.

This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task.

The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response\_view to FULL.

A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE\_EXHAUSTED is returned when this limit is exceeded. RESOURCE\_EXHAUSTED is also returned when max\_tasks\_dispatched\_per\_second is exceeded.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Duration leaseDuration = Duration.newBuilder().build();
   LeaseTasksResponse response = cloudTasksClient.leaseTasks(parent, leaseDuration);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

leaseDuration

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

Required. The duration of the lease.

Each task returned in the response will have its schedule\_time set to the current time plus the `lease_duration`. The task is leased until its schedule\_time; thus, the task will not be returned to another LeaseTasks call before its schedule\_time.

After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule\_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

**Returns**

**Type**

**Description**

[LeaseTasksResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksResponse)

### leaseTasks(String parent, Duration leaseDuration)

```
public final LeaseTasksResponse leaseTasks(String parent, Duration leaseDuration)
```

Leases tasks from a pull queue for lease\_duration.

This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task.

The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response\_view to FULL.

A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE\_EXHAUSTED is returned when this limit is exceeded. RESOURCE\_EXHAUSTED is also returned when max\_tasks\_dispatched\_per\_second is exceeded.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Duration leaseDuration = Duration.newBuilder().build();
   LeaseTasksResponse response = cloudTasksClient.leaseTasks(parent, leaseDuration);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

leaseDuration

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

Required. The duration of the lease.

Each task returned in the response will have its schedule\_time set to the current time plus the `lease_duration`. The task is leased until its schedule\_time; thus, the task will not be returned to another LeaseTasks call before its schedule\_time.

After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule\_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

**Returns**

**Type**

**Description**

[LeaseTasksResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksResponse)

### leaseTasksCallable()

```
public final UnaryCallable<LeaseTasksRequest,LeaseTasksResponse> leaseTasksCallable()
```

Leases tasks from a pull queue for lease\_duration.

This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task.

The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response\_view to FULL.

A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE\_EXHAUSTED is returned when this limit is exceeded. RESOURCE\_EXHAUSTED is also returned when max\_tasks\_dispatched\_per\_second is exceeded.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   LeaseTasksRequest request =
       LeaseTasksRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setMaxTasks(-233969421)
           .setLeaseDuration(Duration.newBuilder().build())
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<LeaseTasksResponse> future =
       cloudTasksClient.leaseTasksCallable().futureCall(request);
   // Do something.
   LeaseTasksResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[LeaseTasksRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksRequest),[LeaseTasksResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LeaseTasksResponse)\>

### listQueues(ListQueuesRequest request)

```
public final CloudTasksClient.ListQueuesPagedResponse listQueues(ListQueuesRequest request)
```

Lists queues.

Queues are returned in lexicographical order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListQueuesRequest request =
       ListQueuesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setReadMask(FieldMask.newBuilder().build())
           .build();
   for (Queue element : cloudTasksClient.listQueues(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListQueuesRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListQueuesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[CloudTasksClient.ListQueuesPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListQueuesPagedResponse)

### listQueues(LocationName parent)

```
public final CloudTasksClient.ListQueuesPagedResponse listQueues(LocationName parent)
```

Lists queues.

Queues are returned in lexicographical order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   for (Queue element : cloudTasksClient.listQueues(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[LocationName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.LocationName)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

**Returns**

**Type**

**Description**

[CloudTasksClient.ListQueuesPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListQueuesPagedResponse)

### listQueues(String parent)

```
public final CloudTasksClient.ListQueuesPagedResponse listQueues(String parent)
```

Lists queues.

Queues are returned in lexicographical order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String parent = LocationName.of("[PROJECT]", "[LOCATION]").toString();
   for (Queue element : cloudTasksClient.listQueues(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`

**Returns**

**Type**

**Description**

[CloudTasksClient.ListQueuesPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListQueuesPagedResponse)

### listQueuesCallable()

```
public final UnaryCallable<ListQueuesRequest,ListQueuesResponse> listQueuesCallable()
```

Lists queues.

Queues are returned in lexicographical order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListQueuesRequest request =
       ListQueuesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setReadMask(FieldMask.newBuilder().build())
           .build();
   while (true) {
     ListQueuesResponse response = cloudTasksClient.listQueuesCallable().call(request);
     for (Queue element : response.getQueuesList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListQueuesRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListQueuesRequest),[ListQueuesResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListQueuesResponse)\>

### listQueuesPagedCallable()

```
public final UnaryCallable<ListQueuesRequest,CloudTasksClient.ListQueuesPagedResponse> listQueuesPagedCallable()
```

Lists queues.

Queues are returned in lexicographical order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListQueuesRequest request =
       ListQueuesRequest.newBuilder()
           .setParent(LocationName.of("[PROJECT]", "[LOCATION]").toString())
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setReadMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.listQueuesPagedCallable().futureCall(request);
   // Do something.
   for (Queue element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListQueuesRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListQueuesRequest),[ListQueuesPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListQueuesPagedResponse)\>

### listTasks(ListTasksRequest request)

```
public final CloudTasksClient.ListTasksPagedResponse listTasks(ListTasksRequest request)
```

Lists the tasks in a queue.

By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Task element : cloudTasksClient.listTasks(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListTasksRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListTasksRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[CloudTasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListTasksPagedResponse)

### listTasks(QueueName parent)

```
public final CloudTasksClient.ListTasksPagedResponse listTasks(QueueName parent)
```

Lists the tasks in a queue.

By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   for (Task element : cloudTasksClient.listTasks(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[CloudTasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListTasksPagedResponse)

### listTasks(String parent)

```
public final CloudTasksClient.ListTasksPagedResponse listTasks(String parent)
```

Lists the tasks in a queue.

By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String parent = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   for (Task element : cloudTasksClient.listTasks(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[CloudTasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListTasksPagedResponse)

### listTasksCallable()

```
public final UnaryCallable<ListTasksRequest,ListTasksResponse> listTasksCallable()
```

Lists the tasks in a queue.

By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListTasksResponse response = cloudTasksClient.listTasksCallable().call(request);
     for (Task element : response.getTasksList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTasksRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListTasksRequest),[ListTasksResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListTasksResponse)\>

### listTasksPagedCallable()

```
public final UnaryCallable<ListTasksRequest,CloudTasksClient.ListTasksPagedResponse> listTasksPagedCallable()
```

Lists the tasks in a queue.

By default, only the BASIC view is retrieved due to performance considerations; response\_view controls the subset of information which is returned.

The tasks may be returned in any order. The ordering may change at any time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Task> future = cloudTasksClient.listTasksPagedCallable().futureCall(request);
   // Do something.
   for (Task element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTasksRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ListTasksRequest),[ListTasksPagedResponse](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.CloudTasksClient.ListTasksPagedResponse)\>

### pauseQueue(PauseQueueRequest request)

```
public final Queue pauseQueue(PauseQueueRequest request)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   PauseQueueRequest request =
       PauseQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   Queue response = cloudTasksClient.pauseQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[PauseQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.PauseQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### pauseQueue(QueueName name)

```
public final Queue pauseQueue(QueueName name)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Queue response = cloudTasksClient.pauseQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### pauseQueue(String name)

```
public final Queue pauseQueue(String name)
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Queue response = cloudTasksClient.pauseQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### pauseQueueCallable()

```
public final UnaryCallable<PauseQueueRequest,Queue> pauseQueueCallable()
```

Pauses the queue.

If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   PauseQueueRequest request =
       PauseQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.pauseQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[PauseQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.PauseQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

### purgeQueue(PurgeQueueRequest request)

```
public final Queue purgeQueue(PurgeQueueRequest request)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   PurgeQueueRequest request =
       PurgeQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   Queue response = cloudTasksClient.purgeQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[PurgeQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.PurgeQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### purgeQueue(QueueName name)

```
public final Queue purgeQueue(QueueName name)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Queue response = cloudTasksClient.purgeQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### purgeQueue(String name)

```
public final Queue purgeQueue(String name)
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Queue response = cloudTasksClient.purgeQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### purgeQueueCallable()

```
public final UnaryCallable<PurgeQueueRequest,Queue> purgeQueueCallable()
```

Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   PurgeQueueRequest request =
       PurgeQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.purgeQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[PurgeQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.PurgeQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

### renewLease(RenewLeaseRequest request)

```
public final Task renewLease(RenewLeaseRequest request)
```

Renew the current lease of a pull task.

The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule\_time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   RenewLeaseRequest request =
       RenewLeaseRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .setLeaseDuration(Duration.newBuilder().build())
           .build();
   Task response = cloudTasksClient.renewLease(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[RenewLeaseRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.RenewLeaseRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### renewLease(TaskName name, Timestamp scheduleTime, Duration leaseDuration)

```
public final Task renewLease(TaskName name, Timestamp scheduleTime, Duration leaseDuration)
```

Renew the current lease of a pull task.

The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule\_time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   Duration leaseDuration = Duration.newBuilder().build();
   Task response = cloudTasksClient.renewLease(name, scheduleTime, leaseDuration);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

leaseDuration

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

Required. The desired new lease duration, starting from now.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### renewLease(String name, Timestamp scheduleTime, Duration leaseDuration)

```
public final Task renewLease(String name, Timestamp scheduleTime, Duration leaseDuration)
```

Renew the current lease of a pull task.

The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule\_time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   Timestamp scheduleTime = Timestamp.newBuilder().build();
   Duration leaseDuration = Duration.newBuilder().build();
   Task response = cloudTasksClient.renewLease(name, scheduleTime, leaseDuration);
 }
 
```
 

**Parameters**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

scheduleTime

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

Required. The task's current schedule time, available in the schedule\_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.

leaseDuration

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

Required. The desired new lease duration, starting from now.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### renewLeaseCallable()

```
public final UnaryCallable<RenewLeaseRequest,Task> renewLeaseCallable()
```

Renew the current lease of a pull task.

The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule\_time.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   RenewLeaseRequest request =
       RenewLeaseRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .setScheduleTime(Timestamp.newBuilder().build())
           .setLeaseDuration(Duration.newBuilder().build())
           .build();
   ApiFuture<Task> future = cloudTasksClient.renewLeaseCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RenewLeaseRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.RenewLeaseRequest),[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)\>

### resumeQueue(QueueName name)

```
public final Queue resumeQueue(QueueName name)
```

Resume a queue.

This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING.

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   QueueName name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Queue response = cloudTasksClient.resumeQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### resumeQueue(ResumeQueueRequest request)

```
public final Queue resumeQueue(ResumeQueueRequest request)
```

Resume a queue.

This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING.

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ResumeQueueRequest request =
       ResumeQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   Queue response = cloudTasksClient.resumeQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ResumeQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ResumeQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### resumeQueue(String name)

```
public final Queue resumeQueue(String name)
```

Resume a queue.

This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING.

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Queue response = cloudTasksClient.resumeQueue(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### resumeQueueCallable()

```
public final UnaryCallable<ResumeQueueRequest,Queue> resumeQueueCallable()
```

Resume a queue.

This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING.

WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ResumeQueueRequest request =
       ResumeQueueRequest.newBuilder()
           .setName(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.resumeQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ResumeQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.ResumeQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

### runTask(RunTaskRequest request)

```
public final Task runTask(RunTaskRequest request)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED.

This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig.

RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

RunTask cannot be called on a pull task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   RunTaskRequest request =
       RunTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   Task response = cloudTasksClient.runTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[RunTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.RunTaskRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### runTask(TaskName name)

```
public final Task runTask(TaskName name)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED.

This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig.

RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

RunTask cannot be called on a pull task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]");
   Task response = cloudTasksClient.runTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[TaskName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.TaskName)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### runTask(String name)

```
public final Task runTask(String name)
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED.

This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig.

RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

RunTask cannot be called on a pull task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String name = TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString();
   Task response = cloudTasksClient.runTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

**Returns**

**Type**

**Description**

[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)

### runTaskCallable()

```
public final UnaryCallable<RunTaskRequest,Task> runTaskCallable()
```

Forces a task to run now.

When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED.

This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.

The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target.

If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule\_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig.

RunTask returns NOT\_FOUND when it is called on a task that has already succeeded or permanently failed.

RunTask cannot be called on a pull task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   RunTaskRequest request =
       RunTaskRequest.newBuilder()
           .setName(TaskName.of("[PROJECT]", "[LOCATION]", "[QUEUE]", "[TASK]").toString())
           .build();
   ApiFuture<Task> future = cloudTasksClient.runTaskCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RunTaskRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.RunTaskRequest),[Task](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Task)\>

### setIamPolicy(ResourceName resource, Policy policy)

```
public final Policy setIamPolicy(ResourceName resource, Policy policy)
```

Sets the access control policy for a Queue. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ResourceName resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   Policy policy = Policy.newBuilder().build();
   Policy response = cloudTasksClient.setIamPolicy(resource, policy);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

policy

`com.google.iam.v1.Policy`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicy(QueueName queue, Policy policy)

```
public final Policy setIamPolicy(QueueName queue, Policy policy)
```

**Parameters**

**Name**

**Description**

queue

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

policy

`com.google.iam.v1.Policy`  

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicy(SetIamPolicyRequest request)

```
public final Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy for a Queue. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Policy response = cloudTasksClient.setIamPolicy(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.SetIamPolicyRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicy(String resource, Policy policy)

```
public final Policy setIamPolicy(String resource, Policy policy)
```

Sets the access control policy for a Queue. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   Policy policy = Policy.newBuilder().build();
   Policy response = cloudTasksClient.setIamPolicy(resource, policy);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

policy

`com.google.iam.v1.Policy`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

**Returns**

**Type**

**Description**

com.google.iam.v1.Policy

### setIamPolicyCallable()

```
public final UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

Sets the access control policy for a Queue. Replaces any existing policy.

Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent:

-   `cloudtasks.queues.setIamPolicy`

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   SetIamPolicyRequest request =
       SetIamPolicyRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .setPolicy(Policy.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Policy> future = cloudTasksClient.setIamPolicyCallable().futureCall(request);
   // Do something.
   Policy response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### testIamPermissions(ResourceName resource, List<String> permissions)

```
public final TestIamPermissionsResponse testIamPermissions(ResourceName resource, List<String> permissions)
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   ResourceName resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]");
   List<String> permissions = new ArrayList<>();
   TestIamPermissionsResponse response =
       cloudTasksClient.testIamPermissions(resource, permissions);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`com.google.api.resourcenames.ResourceName`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

permissions

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '\*' or 'storage.\*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissions(QueueName queue, List<String> permissions)

```
public final TestIamPermissionsResponse testIamPermissions(QueueName queue, List<String> permissions)
```

**Parameters**

**Name**

**Description**

queue

`[QueueName](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.QueueName)`  

permissions

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissions(TestIamPermissionsRequest request)

```
public final TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   TestIamPermissionsResponse response = cloudTasksClient.testIamPermissions(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`com.google.iam.v1.TestIamPermissionsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissions(String resource, List<String> permissions)

```
public final TestIamPermissionsResponse testIamPermissions(String resource, List<String> permissions)
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   String resource = QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString();
   List<String> permissions = new ArrayList<>();
   TestIamPermissionsResponse response =
       cloudTasksClient.testIamPermissions(resource, permissions);
 }
 
```
 

**Parameters**

**Name**

**Description**

resource

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

permissions

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '\*' or 'storage.\*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

**Returns**

**Type**

**Description**

com.google.iam.v1.TestIamPermissionsResponse

### testIamPermissionsCallable()

```
public final UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT\_FOUND error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   TestIamPermissionsRequest request =
       TestIamPermissionsRequest.newBuilder()
           .setResource(QueueName.of("[PROJECT]", "[LOCATION]", "[QUEUE]").toString())
           .addAllPermissions(new ArrayList<String>())
           .build();
   ApiFuture<TestIamPermissionsResponse> future =
       cloudTasksClient.testIamPermissionsCallable().futureCall(request);
   // Do something.
   TestIamPermissionsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse\>

### updateQueue(Queue queue, FieldMask updateMask)

```
public final Queue updateQueue(Queue queue, FieldMask updateMask)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   Queue queue = Queue.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Queue response = cloudTasksClient.updateQueue(queue, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

queue

`[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)`  

Required. The queue to create or update.

The queue's name must be specified.

Output only fields cannot be modified using UpdateQueue. Any value specified for an output only field will be ignored. The queue's name cannot be changed.

updateMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

A mask used to specify which fields of the queue are being updated.

If empty, then all fields will be updated.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### updateQueue(UpdateQueueRequest request)

```
public final Queue updateQueue(UpdateQueueRequest request)
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   UpdateQueueRequest request =
       UpdateQueueRequest.newBuilder()
           .setQueue(Queue.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Queue response = cloudTasksClient.updateQueue(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.UpdateQueueRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)

### updateQueueCallable()

```
public final UnaryCallable<UpdateQueueRequest,Queue> updateQueueCallable()
```

Updates a queue.

This method creates the queue if it does not exist and updates the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (CloudTasksClient cloudTasksClient = CloudTasksClient.create()) {
   UpdateQueueRequest request =
       UpdateQueueRequest.newBuilder()
           .setQueue(Queue.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Queue> future = cloudTasksClient.updateQueueCallable().futureCall(request);
   // Do something.
   Queue response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateQueueRequest](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.UpdateQueueRequest),[Queue](/java/docs/reference/google-cloud-tasks/2.5.0/com.google.cloud.tasks.v2beta2.Queue)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
