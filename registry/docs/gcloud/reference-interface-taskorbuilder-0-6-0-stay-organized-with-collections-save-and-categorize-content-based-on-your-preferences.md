-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TaskOrBuilder (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public interface TaskOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsAnnotations(String key)

```
public abstract boolean containsAnnotations(String key)
```

KRM-style annotations for the resource.

`map<string, string> annotations = 5;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels) Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getAnnotations()

```
public abstract Map<String,String> getAnnotations()
```

Use [#getAnnotationsMap()](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.TaskOrBuilder#com_google_cloud_run_v2_TaskOrBuilder_getAnnotationsMap__) instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getAnnotationsCount()

```
public abstract int getAnnotationsCount()
```

KRM-style annotations for the resource.

`map<string, string> annotations = 5;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getAnnotationsMap()

```
public abstract Map<String,String> getAnnotationsMap()
```

KRM-style annotations for the resource.

`map<string, string> annotations = 5;`

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getAnnotationsOrDefault(String key, String defaultValue)

```
public abstract String getAnnotationsOrDefault(String key, String defaultValue)
```

KRM-style annotations for the resource.

`map<string, string> annotations = 5;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

defaultValue

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getAnnotationsOrThrow(String key)

```
public abstract String getAnnotationsOrThrow(String key)
```

KRM-style annotations for the resource.

`map<string, string> annotations = 5;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getCompletionTime()

```
public abstract Timestamp getCompletionTime()
```

Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp completion_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The completionTime.

### getCompletionTimeOrBuilder()

```
public abstract TimestampOrBuilder getCompletionTimeOrBuilder()
```

Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp completion_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getConditions(int index)

```
public abstract Condition getConditions(int index)
```

Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.

`repeated .google.cloud.run.v2.Condition conditions = 22 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Condition](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Condition)

### getConditionsCount()

```
public abstract int getConditionsCount()
```

Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.

`repeated .google.cloud.run.v2.Condition conditions = 22 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getConditionsList()

```
public abstract List<Condition> getConditionsList()
```

Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.

`repeated .google.cloud.run.v2.Condition conditions = 22 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Condition](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Condition)\>

### getConditionsOrBuilder(int index)

```
public abstract ConditionOrBuilder getConditionsOrBuilder(int index)
```

Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.

`repeated .google.cloud.run.v2.Condition conditions = 22 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ConditionOrBuilder](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.ConditionOrBuilder)

### getConditionsOrBuilderList()

```
public abstract List<? extends ConditionOrBuilder> getConditionsOrBuilderList()
```

Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.

`repeated .google.cloud.run.v2.Condition conditions = 22 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.ConditionOrBuilder\>

### getContainers(int index)

```
public abstract Container getContainers(int index)
```

Holds the single container that defines the unit of execution for this task.

`repeated .google.cloud.run.v2.Container containers = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Container](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Container)

### getContainersCount()

```
public abstract int getContainersCount()
```

Holds the single container that defines the unit of execution for this task.

`repeated .google.cloud.run.v2.Container containers = 14;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getContainersList()

```
public abstract List<Container> getContainersList()
```

Holds the single container that defines the unit of execution for this task.

`repeated .google.cloud.run.v2.Container containers = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Container](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Container)\>

### getContainersOrBuilder(int index)

```
public abstract ContainerOrBuilder getContainersOrBuilder(int index)
```

Holds the single container that defines the unit of execution for this task.

`repeated .google.cloud.run.v2.Container containers = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ContainerOrBuilder](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.ContainerOrBuilder)

### getContainersOrBuilderList()

```
public abstract List<? extends ContainerOrBuilder> getContainersOrBuilderList()
```

Holds the single container that defines the unit of execution for this task.

`repeated .google.cloud.run.v2.Container containers = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.ContainerOrBuilder\>

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. Represents time when the task was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. Represents time when the task was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getDeleteTime()

```
public abstract Timestamp getDeleteTime()
```

Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The deleteTime.

### getDeleteTimeOrBuilder()

```
public abstract TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getEncryptionKey()

```
public abstract String getEncryptionKey()
```

Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to [https://cloud.google.com/run/docs/securing/using-cmek](https://cloud.google.com/run/docs/securing/using-cmek)

`string encryption_key = 28 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The encryptionKey.

### getEncryptionKeyBytes()

```
public abstract ByteString getEncryptionKeyBytes()
```

Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to [https://cloud.google.com/run/docs/securing/using-cmek](https://cloud.google.com/run/docs/securing/using-cmek)

`string encryption_key = 28 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for encryptionKey.

### getEtag()

```
public abstract String getEtag()
```

Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.

`string etag = 99 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The etag.

### getEtagBytes()

```
public abstract ByteString getEtagBytes()
```

Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.

`string etag = 99 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for etag.

### getExecution()

```
public abstract String getExecution()
```

Output only. The name of the parent Execution.

`string execution = 13 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The execution.

### getExecutionBytes()

```
public abstract ByteString getExecutionBytes()
```

Output only. The name of the parent Execution.

`string execution = 13 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for execution.

### getExecutionEnvironment()

```
public abstract ExecutionEnvironment getExecutionEnvironment()
```

The execution environment being used to host this Task.

`.google.cloud.run.v2.ExecutionEnvironment execution_environment = 20;`

**Returns**

**Type**

**Description**

[ExecutionEnvironment](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.ExecutionEnvironment)

The executionEnvironment.

### getExecutionEnvironmentValue()

```
public abstract int getExecutionEnvironmentValue()
```

The execution environment being used to host this Task.

`.google.cloud.run.v2.ExecutionEnvironment execution_environment = 20;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire for executionEnvironment.

### getExpireTime()

```
public abstract Timestamp getExpireTime()
```

Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The expireTime.

### getExpireTimeOrBuilder()

```
public abstract TimestampOrBuilder getExpireTimeOrBuilder()
```

Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getGeneration()

```
public abstract long getGeneration()
```

Output only. A number that monotonically increases every time the user modifies the desired state.

`int64 generation = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The generation.

### getIndex()

```
public abstract int getIndex()
```

Output only. Index of the Task, unique per execution, and beginning at 0.

`int32 index = 24 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The index.

### getJob()

```
public abstract String getJob()
```

Output only. The name of the parent Job.

`string job = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The job.

### getJobBytes()

```
public abstract ByteString getJobBytes()
```

Output only. The name of the parent Job.

`string job = 12 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for job.

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.TaskOrBuilder#com_google_cloud_run_v2_TaskOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getLabelsCount()

```
public abstract int getLabelsCount()
```

KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels) Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels) Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels) Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

`map<string, string> labels = 4;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

defaultValue

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels) Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getLastAttemptResult()

```
public abstract TaskAttemptResult getLastAttemptResult()
```

Output only. Result of the last attempt of this Task.

`.google.cloud.run.v2.TaskAttemptResult last_attempt_result = 26 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TaskAttemptResult](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.TaskAttemptResult)

The lastAttemptResult.

### getLastAttemptResultOrBuilder()

```
public abstract TaskAttemptResultOrBuilder getLastAttemptResultOrBuilder()
```

Output only. Result of the last attempt of this Task.

`.google.cloud.run.v2.TaskAttemptResult last_attempt_result = 26 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TaskAttemptResultOrBuilder](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.TaskAttemptResultOrBuilder)

### getMaxRetries()

```
public abstract int getMaxRetries()
```

Number of retries allowed per Task, before marking this Task failed.

`int32 max_retries = 16;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The maxRetries.

### getName()

```
public abstract String getName()
```

Output only. The unique name of this Task.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The unique name of this Task.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getObservedGeneration()

```
public abstract long getObservedGeneration()
```

Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.

`int64 observed_generation = 23 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The observedGeneration.

### getReconciling()

```
public abstract boolean getReconciling()
```

Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.

`bool reconciling = 21 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The reconciling.

### getRetried()

```
public abstract int getRetried()
```

Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.

`int32 retried = 25 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The retried.

### getServiceAccount()

```
public abstract String getServiceAccount()
```

Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

`string service_account = 18;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The serviceAccount.

### getServiceAccountBytes()

```
public abstract ByteString getServiceAccountBytes()
```

Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

`string service_account = 18;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for serviceAccount.

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp start_time = 27 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp start_time = 27 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getTimeout()

```
public abstract Duration getTimeout()
```

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.

`.google.protobuf.Duration timeout = 17;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The timeout.

### getTimeoutOrBuilder()

```
public abstract DurationOrBuilder getTimeoutOrBuilder()
```

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.

`.google.protobuf.Duration timeout = 17;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### getUid()

```
public abstract String getUid()
```

Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.

`string uid = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The uid.

### getUidBytes()

```
public abstract ByteString getUidBytes()
```

Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.

`string uid = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for uid.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getVolumes(int index)

```
public abstract Volume getVolumes(int index)
```

A list of Volumes to make available to containers.

`repeated .google.cloud.run.v2.Volume volumes = 15;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Volume](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Volume)

### getVolumesCount()

```
public abstract int getVolumesCount()
```

A list of Volumes to make available to containers.

`repeated .google.cloud.run.v2.Volume volumes = 15;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getVolumesList()

```
public abstract List<Volume> getVolumesList()
```

A list of Volumes to make available to containers.

`repeated .google.cloud.run.v2.Volume volumes = 15;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Volume](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.Volume)\>

### getVolumesOrBuilder(int index)

```
public abstract VolumeOrBuilder getVolumesOrBuilder(int index)
```

A list of Volumes to make available to containers.

`repeated .google.cloud.run.v2.Volume volumes = 15;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[VolumeOrBuilder](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.VolumeOrBuilder)

### getVolumesOrBuilderList()

```
public abstract List<? extends VolumeOrBuilder> getVolumesOrBuilderList()
```

A list of Volumes to make available to containers.

`repeated .google.cloud.run.v2.Volume volumes = 15;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.VolumeOrBuilder\>

### getVpcAccess()

```
public abstract VpcAccess getVpcAccess()
```

Output only. VPC Access configuration to use for this Task. For more information, visit [https://cloud.google.com/run/docs/configuring/connecting-vpc](https://cloud.google.com/run/docs/configuring/connecting-vpc).

`.google.cloud.run.v2.VpcAccess vpc_access = 29 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[VpcAccess](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.VpcAccess)

The vpcAccess.

### getVpcAccessOrBuilder()

```
public abstract VpcAccessOrBuilder getVpcAccessOrBuilder()
```

Output only. VPC Access configuration to use for this Task. For more information, visit [https://cloud.google.com/run/docs/configuring/connecting-vpc](https://cloud.google.com/run/docs/configuring/connecting-vpc).

`.google.cloud.run.v2.VpcAccess vpc_access = 29 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[VpcAccessOrBuilder](/java/docs/reference/google-cloud-run/0.6.0/com.google.cloud.run.v2.VpcAccessOrBuilder)

### hasCompletionTime()

```
public abstract boolean hasCompletionTime()
```

Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp completion_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the completionTime field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. Represents time when the task was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the createTime field is set.

### hasDeleteTime()

```
public abstract boolean hasDeleteTime()
```

Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the deleteTime field is set.

### hasExpireTime()

```
public abstract boolean hasExpireTime()
```

Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the expireTime field is set.

### hasLastAttemptResult()

```
public abstract boolean hasLastAttemptResult()
```

Output only. Result of the last attempt of this Task.

`.google.cloud.run.v2.TaskAttemptResult last_attempt_result = 26 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the lastAttemptResult field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.

`.google.protobuf.Timestamp start_time = 27 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the startTime field is set.

### hasTimeout()

```
public abstract boolean hasTimeout()
```

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.

`.google.protobuf.Duration timeout = 17;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the timeout field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the updateTime field is set.

### hasVpcAccess()

```
public abstract boolean hasVpcAccess()
```

Output only. VPC Access configuration to use for this Task. For more information, visit [https://cloud.google.com/run/docs/configuring/connecting-vpc](https://cloud.google.com/run/docs/configuring/connecting-vpc).

`.google.cloud.run.v2.VpcAccess vpc_access = 29 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the vpcAccess field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
