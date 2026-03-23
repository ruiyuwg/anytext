-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LeaseTasksRequestOrBuilder (2.52.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public interface LeaseTasksRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

`filter` can be used to specify a subset of tasks to lease.

When `filter` is set to `tag=<my-tag>` then the response will contain only tasks whose tag is equal to `<my-tag>`. `<my-tag>` must be less than 500 characters.

When `filter` is set to `tag_function=oldest_tag()`, only tasks which have the same tag as the task with the oldest schedule\_time will be returned.

Grammar Syntax:

-   `filter = "tag=" tag | "tag_function=" function`
    
-   `tag = string`
    
-   `function = "oldest_tag()"`
    
    The `oldest_tag()` function returns tasks which have the same tag as the oldest task (ordered by schedule time).
    
    SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. Tag which aren't UTF-8 encoded can't be used in the filter and the task's tag will be displayed as empty in Cloud Tasks.
    

`string filter = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

`filter` can be used to specify a subset of tasks to lease.

When `filter` is set to `tag=<my-tag>` then the response will contain only tasks whose tag is equal to `<my-tag>`. `<my-tag>` must be less than 500 characters.

When `filter` is set to `tag_function=oldest_tag()`, only tasks which have the same tag as the task with the oldest schedule\_time will be returned.

Grammar Syntax:

-   `filter = "tag=" tag | "tag_function=" function`
    
-   `tag = string`
    
-   `function = "oldest_tag()"`
    
    The `oldest_tag()` function returns tasks which have the same tag as the oldest task (ordered by schedule time).
    
    SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. Tag which aren't UTF-8 encoded can't be used in the filter and the task's tag will be displayed as empty in Cloud Tasks.
    

`string filter = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getLeaseDuration()

```
public abstract Duration getLeaseDuration()
```

Required. The duration of the lease.

Each task returned in the response will have its schedule\_time set to the current time plus the `lease_duration`. The task is leased until its schedule\_time; thus, the task will not be returned to another LeaseTasks call before its schedule\_time.

After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule\_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

`.google.protobuf.Duration lease_duration = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The leaseDuration.

### getLeaseDurationOrBuilder()

```
public abstract DurationOrBuilder getLeaseDurationOrBuilder()
```

Required. The duration of the lease.

Each task returned in the response will have its schedule\_time set to the current time plus the `lease_duration`. The task is leased until its schedule\_time; thus, the task will not be returned to another LeaseTasks call before its schedule\_time.

After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule\_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

`.google.protobuf.Duration lease_duration = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getMaxTasks()

```
public abstract int getMaxTasks()
```

The maximum number of tasks to lease.

The system will make a best effort to return as close to as `max_tasks` as possible.

The largest that `max_tasks` can be is 1000.

The maximum total size of a lease tasks response is 32 MB. If the sum of all task sizes requested reaches this limit, fewer tasks than requested are returned.

`int32 max_tasks = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxTasks.

### getParent()

```
public abstract String getParent()
```

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getResponseView()

```
public abstract Task.View getResponseView()
```

The response\_view specifies which subset of the Task will be returned.

By default response\_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.

Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.

`.google.cloud.tasks.v2beta2.Task.View response_view = 4;`

**Returns**

**Type**

**Description**

`[Task.View](/java/docs/reference/google-cloud-tasks/2.52.0/com.google.cloud.tasks.v2beta2.Task.View)`

The responseView.

### getResponseViewValue()

```
public abstract int getResponseViewValue()
```

The response\_view specifies which subset of the Task will be returned.

By default response\_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.

Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.

`.google.cloud.tasks.v2beta2.Task.View response_view = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for responseView.

### hasLeaseDuration()

```
public abstract boolean hasLeaseDuration()
```

Required. The duration of the lease.

Each task returned in the response will have its schedule\_time set to the current time plus the `lease_duration`. The task is leased until its schedule\_time; thus, the task will not be returned to another LeaseTasks call before its schedule\_time.

After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule\_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it.

The maximum lease duration is 1 week. `lease_duration` will be truncated to the nearest second.

`.google.protobuf.Duration lease_duration = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the leaseDuration field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
