-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TaskOrBuilder (2.59.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public interface TaskOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAppEngineHttpRequest()

```
public abstract AppEngineHttpRequest getAppEngineHttpRequest()
```

HTTP request that is sent to the App Engine app handler.

An App Engine task is a task that has AppEngineHttpRequest set.

`.google.cloud.tasks.v2beta3.AppEngineHttpRequest app_engine_http_request = 3;`

**Returns**

**Type**

**Description**

`[AppEngineHttpRequest](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.AppEngineHttpRequest)`

The appEngineHttpRequest.

### getAppEngineHttpRequestOrBuilder()

```
public abstract AppEngineHttpRequestOrBuilder getAppEngineHttpRequestOrBuilder()
```

HTTP request that is sent to the App Engine app handler.

An App Engine task is a task that has AppEngineHttpRequest set.

`.google.cloud.tasks.v2beta3.AppEngineHttpRequest app_engine_http_request = 3;`

**Returns**

**Type**

**Description**

`[AppEngineHttpRequestOrBuilder](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.AppEngineHttpRequestOrBuilder)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The time that the task was created.

`create_time` will be truncated to the nearest second.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time that the task was created.

`create_time` will be truncated to the nearest second.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDispatchCount()

```
public abstract int getDispatchCount()
```

Output only. The number of attempts dispatched.

This count includes attempts which have been dispatched but haven't received a response.

`int32 dispatch_count = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dispatchCount.

### getDispatchDeadline()

```
public abstract Duration getDispatchDeadline()
```

The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig.

Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests.

The default and maximum values depend on the type of request:

-   For HTTP tasks, the default is 10 minutes. The deadline must be in the interval \[15 seconds, 30 minutes\].
    
-   For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval \[15 seconds, 24 hours 15 seconds\]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts).
    
    `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.
    

`.google.protobuf.Duration dispatch_deadline = 12;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The dispatchDeadline.

### getDispatchDeadlineOrBuilder()

```
public abstract DurationOrBuilder getDispatchDeadlineOrBuilder()
```

The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig.

Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests.

The default and maximum values depend on the type of request:

-   For HTTP tasks, the default is 10 minutes. The deadline must be in the interval \[15 seconds, 30 minutes\].
    
-   For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval \[15 seconds, 24 hours 15 seconds\]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts).
    
    `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.
    

`.google.protobuf.Duration dispatch_deadline = 12;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getFirstAttempt()

```
public abstract Attempt getFirstAttempt()
```

Output only. The status of the task's first attempt.

Only dispatch\_time will be set. The other Attempt information is not retained by Cloud Tasks.

`.google.cloud.tasks.v2beta3.Attempt first_attempt = 8;`

**Returns**

**Type**

**Description**

`[Attempt](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.Attempt)`

The firstAttempt.

### getFirstAttemptOrBuilder()

```
public abstract AttemptOrBuilder getFirstAttemptOrBuilder()
```

Output only. The status of the task's first attempt.

Only dispatch\_time will be set. The other Attempt information is not retained by Cloud Tasks.

`.google.cloud.tasks.v2beta3.Attempt first_attempt = 8;`

**Returns**

**Type**

**Description**

`[AttemptOrBuilder](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.AttemptOrBuilder)`

### getHttpRequest()

```
public abstract HttpRequest getHttpRequest()
```

HTTP request that is sent to the task's target.

An HTTP task is a task that has HttpRequest set.

`.google.cloud.tasks.v2beta3.HttpRequest http_request = 11;`

**Returns**

**Type**

**Description**

`[HttpRequest](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.HttpRequest)`

The httpRequest.

### getHttpRequestOrBuilder()

```
public abstract HttpRequestOrBuilder getHttpRequestOrBuilder()
```

HTTP request that is sent to the task's target.

An HTTP task is a task that has HttpRequest set.

`.google.cloud.tasks.v2beta3.HttpRequest http_request = 11;`

**Returns**

**Type**

**Description**

`[HttpRequestOrBuilder](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.HttpRequestOrBuilder)`

### getLastAttempt()

```
public abstract Attempt getLastAttempt()
```

Output only. The status of the task's last attempt.

`.google.cloud.tasks.v2beta3.Attempt last_attempt = 9;`

**Returns**

**Type**

**Description**

`[Attempt](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.Attempt)`

The lastAttempt.

### getLastAttemptOrBuilder()

```
public abstract AttemptOrBuilder getLastAttemptOrBuilder()
```

Output only. The status of the task's last attempt.

`.google.cloud.tasks.v2beta3.Attempt last_attempt = 9;`

**Returns**

**Type**

**Description**

`[AttemptOrBuilder](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.AttemptOrBuilder)`

### getName()

```
public abstract String getName()
```

Optionally caller-specified in CreateTask.

The task name.

The task name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.
-   `TASK_ID` can contain only letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), or underscores (\_). The maximum length is 500 characters.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Optionally caller-specified in CreateTask.

The task name.

The task name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.
-   `TASK_ID` can contain only letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), or underscores (\_). The maximum length is 500 characters.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPayloadTypeCase()

```
public abstract Task.PayloadTypeCase getPayloadTypeCase()
```

**Returns**

**Type**

**Description**

`[Task.PayloadTypeCase](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.Task.PayloadTypeCase)`

### getPullMessage()

```
public abstract PullMessage getPullMessage()
```

Pull Message contained in a task in a PULL queue type. This payload type cannot be explicitly set through Cloud Tasks API. Its purpose, currently is to provide backward compatibility with App Engine Task Queue [pull](https://cloud.google.com/appengine/docs/standard/java/taskqueue/pull/) queues to provide a way to inspect contents of pull tasks through the CloudTasks.GetTask.

`.google.cloud.tasks.v2beta3.PullMessage pull_message = 13;`

**Returns**

**Type**

**Description**

`[PullMessage](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.PullMessage)`

The pullMessage.

### getPullMessageOrBuilder()

```
public abstract PullMessageOrBuilder getPullMessageOrBuilder()
```

Pull Message contained in a task in a PULL queue type. This payload type cannot be explicitly set through Cloud Tasks API. Its purpose, currently is to provide backward compatibility with App Engine Task Queue [pull](https://cloud.google.com/appengine/docs/standard/java/taskqueue/pull/) queues to provide a way to inspect contents of pull tasks through the CloudTasks.GetTask.

`.google.cloud.tasks.v2beta3.PullMessage pull_message = 13;`

**Returns**

**Type**

**Description**

`[PullMessageOrBuilder](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.PullMessageOrBuilder)`

### getResponseCount()

```
public abstract int getResponseCount()
```

Output only. The number of attempts which have received a response.

`int32 response_count = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The responseCount.

### getScheduleTime()

```
public abstract Timestamp getScheduleTime()
```

The time when the task is scheduled to be attempted.

For App Engine queues, this is when the task will be attempted or retried.

`schedule_time` will be truncated to the nearest microsecond.

`.google.protobuf.Timestamp schedule_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The scheduleTime.

### getScheduleTimeOrBuilder()

```
public abstract TimestampOrBuilder getScheduleTimeOrBuilder()
```

The time when the task is scheduled to be attempted.

For App Engine queues, this is when the task will be attempted or retried.

`schedule_time` will be truncated to the nearest microsecond.

`.google.protobuf.Timestamp schedule_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getView()

```
public abstract Task.View getView()
```

Output only. The view specifies which subset of the Task has been returned.

`.google.cloud.tasks.v2beta3.Task.View view = 10;`

**Returns**

**Type**

**Description**

`[Task.View](/java/docs/reference/google-cloud-tasks/2.59.0/com.google.cloud.tasks.v2beta3.Task.View)`

The view.

### getViewValue()

```
public abstract int getViewValue()
```

Output only. The view specifies which subset of the Task has been returned.

`.google.cloud.tasks.v2beta3.Task.View view = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for view.

### hasAppEngineHttpRequest()

```
public abstract boolean hasAppEngineHttpRequest()
```

HTTP request that is sent to the App Engine app handler.

An App Engine task is a task that has AppEngineHttpRequest set.

`.google.cloud.tasks.v2beta3.AppEngineHttpRequest app_engine_http_request = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the appEngineHttpRequest field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time that the task was created.

`create_time` will be truncated to the nearest second.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDispatchDeadline()

```
public abstract boolean hasDispatchDeadline()
```

The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig.

Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests.

The default and maximum values depend on the type of request:

-   For HTTP tasks, the default is 10 minutes. The deadline must be in the interval \[15 seconds, 30 minutes\].
    
-   For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval \[15 seconds, 24 hours 15 seconds\]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts).
    
    `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.
    

`.google.protobuf.Duration dispatch_deadline = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the dispatchDeadline field is set.

### hasFirstAttempt()

```
public abstract boolean hasFirstAttempt()
```

Output only. The status of the task's first attempt.

Only dispatch\_time will be set. The other Attempt information is not retained by Cloud Tasks.

`.google.cloud.tasks.v2beta3.Attempt first_attempt = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the firstAttempt field is set.

### hasHttpRequest()

```
public abstract boolean hasHttpRequest()
```

HTTP request that is sent to the task's target.

An HTTP task is a task that has HttpRequest set.

`.google.cloud.tasks.v2beta3.HttpRequest http_request = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the httpRequest field is set.

### hasLastAttempt()

```
public abstract boolean hasLastAttempt()
```

Output only. The status of the task's last attempt.

`.google.cloud.tasks.v2beta3.Attempt last_attempt = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lastAttempt field is set.

### hasPullMessage()

```
public abstract boolean hasPullMessage()
```

Pull Message contained in a task in a PULL queue type. This payload type cannot be explicitly set through Cloud Tasks API. Its purpose, currently is to provide backward compatibility with App Engine Task Queue [pull](https://cloud.google.com/appengine/docs/standard/java/taskqueue/pull/) queues to provide a way to inspect contents of pull tasks through the CloudTasks.GetTask.

`.google.cloud.tasks.v2beta3.PullMessage pull_message = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the pullMessage field is set.

### hasScheduleTime()

```
public abstract boolean hasScheduleTime()
```

The time when the task is scheduled to be attempted.

For App Engine queues, this is when the task will be attempted or retried.

`schedule_time` will be truncated to the nearest microsecond.

`.google.protobuf.Timestamp schedule_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the scheduleTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
