-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ExecutionOrBuilder (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.7

```
public interface ExecutionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getArgument()

```
public abstract String getArgument()
```

Input parameters of the execution represented as a JSON string. The size limit is 32KB.

`string argument = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The argument.

### getArgumentBytes()

```
public abstract ByteString getArgumentBytes()
```

Input parameters of the execution represented as a JSON string. The size limit is 32KB.

`string argument = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for argument.

### getEndTime()

```
public abstract Timestamp getEndTime()
```

Output only. Marks the end of execution, successful or not.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

Output only. Marks the end of execution, successful or not.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getError()

```
public abstract Execution.Error getError()
```

Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.

`.google.cloud.workflows.executions.v1beta.Execution.Error error = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Execution.Error](/java/docs/reference/google-cloud-workflow-executions/2.34.0/com.google.cloud.workflows.executions.v1beta.Execution.Error)`

The error.

### getErrorOrBuilder()

```
public abstract Execution.ErrorOrBuilder getErrorOrBuilder()
```

Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.

`.google.cloud.workflows.executions.v1beta.Execution.Error error = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Execution.ErrorOrBuilder](/java/docs/reference/google-cloud-workflow-executions/2.34.0/com.google.cloud.workflows.executions.v1beta.Execution.ErrorOrBuilder)`

### getName()

```
public abstract String getName()
```

Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getResult()

```
public abstract String getResult()
```

Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.

`string result = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The result.

### getResultBytes()

```
public abstract ByteString getResultBytes()
```

Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.

`string result = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for result.

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Output only. Marks the beginning of execution.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Output only. Marks the beginning of execution.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getState()

```
public abstract Execution.State getState()
```

Output only. Current state of the execution.

`.google.cloud.workflows.executions.v1beta.Execution.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Execution.State](/java/docs/reference/google-cloud-workflow-executions/2.34.0/com.google.cloud.workflows.executions.v1beta.Execution.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. Current state of the execution.

`.google.cloud.workflows.executions.v1beta.Execution.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getWorkflowRevisionId()

```
public abstract String getWorkflowRevisionId()
```

Output only. Revision of the workflow this execution is using.

`string workflow_revision_id = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The workflowRevisionId.

### getWorkflowRevisionIdBytes()

```
public abstract ByteString getWorkflowRevisionIdBytes()
```

Output only. Revision of the workflow this execution is using.

`string workflow_revision_id = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for workflowRevisionId.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

Output only. Marks the end of execution, successful or not.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasError()

```
public abstract boolean hasError()
```

Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.

`.google.cloud.workflows.executions.v1beta.Execution.Error error = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Output only. Marks the beginning of execution.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
