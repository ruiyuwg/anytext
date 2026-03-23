-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TasksClient (0.22.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public class TasksClient implements BackgroundResource
```

Service Description: Cloud Run Task Control Plane API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]", "[TASK]");
   Task response = tasksClient.getTask(name);
 }
 
```
 

Note: close() needs to be called on the TasksClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of TasksSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TasksSettings tasksSettings =
     TasksSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 TasksClient tasksClient = TasksClient.create(tasksSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TasksSettings tasksSettings = TasksSettings.newBuilder().setEndpoint(myEndpoint).build();
 TasksClient tasksClient = TasksClient.create(tasksSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TasksSettings tasksSettings = TasksSettings.newHttpJsonBuilder().build();
 TasksClient tasksClient = TasksClient.create(tasksSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TasksClient

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
public static final TasksClient create()
```

Constructs an instance of TasksClient with default settings.

**Returns**

**Type**

**Description**

`[TasksClient](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TasksSettings settings)

```
public static final TasksClient create(TasksSettings settings)
```

Constructs an instance of TasksClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[TasksSettings](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksSettings)`  

**Returns**

**Type**

**Description**

`[TasksClient](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TasksStub stub)

```
public static final TasksClient create(TasksStub stub)
```

Constructs an instance of TasksClient, using the given stub for making calls. This is for advanced usage - prefer using create(TasksSettings).

**Parameter**

**Name**

**Description**

`stub`

`[TasksStub](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.stub.TasksStub)`  

**Returns**

**Type**

**Description**

`[TasksClient](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient)`

## Constructors

### TasksClient(TasksSettings settings)

```
protected TasksClient(TasksSettings settings)
```

Constructs an instance of TasksClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[TasksSettings](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksSettings)`  

### TasksClient(TasksStub stub)

```
protected TasksClient(TasksStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[TasksStub](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.stub.TasksStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### close()

```
public final void close()
```

### getSettings()

```
public final TasksSettings getSettings()
```

**Returns**

**Type**

**Description**

`[TasksSettings](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksSettings)`

### getStub()

```
public TasksStub getStub()
```

**Returns**

**Type**

**Description**

`[TasksStub](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.stub.TasksStub)`

### getTask(GetTaskRequest request)

```
public final Task getTask(GetTaskRequest request)
```

Gets information about a Task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   GetTaskRequest request =
       GetTaskRequest.newBuilder()
           .setName(
               TaskName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]", "[TASK]")
                   .toString())
           .build();
   Task response = tasksClient.getTask(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetTaskRequest](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.GetTaskRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.Task)`

### getTask(TaskName name)

```
public final Task getTask(TaskName name)
```

Gets information about a Task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   TaskName name = TaskName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]", "[TASK]");
   Task response = tasksClient.getTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[TaskName](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TaskName)`  

Required. The full name of the Task. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}/tasks/{task}

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.Task)`

### getTask(String name)

```
public final Task getTask(String name)
```

Gets information about a Task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   String name =
       TaskName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]", "[TASK]").toString();
   Task response = tasksClient.getTask(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full name of the Task. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}/tasks/{task}

**Returns**

**Type**

**Description**

`[Task](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.Task)`

### getTaskCallable()

```
public final UnaryCallable<GetTaskRequest,Task> getTaskCallable()
```

Gets information about a Task.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   GetTaskRequest request =
       GetTaskRequest.newBuilder()
           .setName(
               TaskName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]", "[TASK]")
                   .toString())
           .build();
   ApiFuture<Task> future = tasksClient.getTaskCallable().futureCall(request);
   // Do something.
   Task response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTaskRequest](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.GetTaskRequest),[Task](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.Task)>`

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### listTasks(ExecutionName parent)

```
public final TasksClient.ListTasksPagedResponse listTasks(ExecutionName parent)
```

Lists Tasks from an Execution of a Job.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   ExecutionName parent = ExecutionName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]");
   for (Task element : tasksClient.listTasks(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ExecutionName](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.ExecutionName)`  

Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}

**Returns**

**Type**

**Description**

`[TasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient.ListTasksPagedResponse)`

### listTasks(ListTasksRequest request)

```
public final TasksClient.ListTasksPagedResponse listTasks(ListTasksRequest request)
```

Lists Tasks from an Execution of a Job.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(
               ExecutionName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   for (Task element : tasksClient.listTasks(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListTasksRequest](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.ListTasksRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient.ListTasksPagedResponse)`

### listTasks(String parent)

```
public final TasksClient.ListTasksPagedResponse listTasks(String parent)
```

Lists Tasks from an Execution of a Job.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   String parent =
       ExecutionName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]").toString();
   for (Task element : tasksClient.listTasks(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}

**Returns**

**Type**

**Description**

`[TasksClient.ListTasksPagedResponse](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient.ListTasksPagedResponse)`

### listTasksCallable()

```
public final UnaryCallable<ListTasksRequest,ListTasksResponse> listTasksCallable()
```

Lists Tasks from an Execution of a Job.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(
               ExecutionName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   while (true) {
     ListTasksResponse response = tasksClient.listTasksCallable().call(request);
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTasksRequest](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.ListTasksRequest),[ListTasksResponse](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.ListTasksResponse)>`

### listTasksPagedCallable()

```
public final UnaryCallable<ListTasksRequest,TasksClient.ListTasksPagedResponse> listTasksPagedCallable()
```

Lists Tasks from an Execution of a Job.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TasksClient tasksClient = TasksClient.create()) {
   ListTasksRequest request =
       ListTasksRequest.newBuilder()
           .setParent(
               ExecutionName.of("[PROJECT]", "[LOCATION]", "[JOB]", "[EXECUTION]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setShowDeleted(true)
           .build();
   ApiFuture<Task> future = tasksClient.listTasksPagedCallable().futureCall(request);
   // Do something.
   for (Task element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTasksRequest](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.ListTasksRequest),[ListTasksPagedResponse](/java/docs/reference/google-cloud-run/0.22.0/com.google.cloud.run.v2.TasksClient.ListTasksPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
