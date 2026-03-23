-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Execution.ErrorOrBuilder (2.37.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.7

```
public static interface Execution.ErrorOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getContext()

```
public abstract String getContext()
```

Human-readable stack trace string.

`string context = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The context.

### getContextBytes()

```
public abstract ByteString getContextBytes()
```

Human-readable stack trace string.

`string context = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for context.

### getPayload()

```
public abstract String getPayload()
```

Error message and data returned represented as a JSON string.

`string payload = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The payload.

### getPayloadBytes()

```
public abstract ByteString getPayloadBytes()
```

Error message and data returned represented as a JSON string.

`string payload = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for payload.

### getStackTrace()

```
public abstract Execution.StackTrace getStackTrace()
```

Stack trace with detailed information of where error was generated.

`.google.cloud.workflows.executions.v1.Execution.StackTrace stack_trace = 3;`

**Returns**

**Type**

**Description**

`[Execution.StackTrace](/java/docs/reference/google-cloud-workflow-executions/2.37.0/com.google.cloud.workflows.executions.v1.Execution.StackTrace)`

The stackTrace.

### getStackTraceOrBuilder()

```
public abstract Execution.StackTraceOrBuilder getStackTraceOrBuilder()
```

Stack trace with detailed information of where error was generated.

`.google.cloud.workflows.executions.v1.Execution.StackTrace stack_trace = 3;`

**Returns**

**Type**

**Description**

`[Execution.StackTraceOrBuilder](/java/docs/reference/google-cloud-workflow-executions/2.37.0/com.google.cloud.workflows.executions.v1.Execution.StackTraceOrBuilder)`

### hasStackTrace()

```
public abstract boolean hasStackTrace()
```

Stack trace with detailed information of where error was generated.

`.google.cloud.workflows.executions.v1.Execution.StackTrace stack_trace = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stackTrace field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
