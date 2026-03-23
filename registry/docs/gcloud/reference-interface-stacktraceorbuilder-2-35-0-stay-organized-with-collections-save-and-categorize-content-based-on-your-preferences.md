-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StackTraceOrBuilder (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13

```
public interface StackTraceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getStackFrames()

```
public abstract StackTrace.StackFrames getStackFrames()
```

Stack frames in this stack trace. A maximum of 128 frames are allowed.

`.google.devtools.cloudtrace.v2.StackTrace.StackFrames stack_frames = 1;`

**Returns**

**Type**

**Description**

`[StackTrace.StackFrames](/java/docs/reference/google-cloud-trace/2.35.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrames)`

The stackFrames.

### getStackFramesOrBuilder()

```
public abstract StackTrace.StackFramesOrBuilder getStackFramesOrBuilder()
```

Stack frames in this stack trace. A maximum of 128 frames are allowed.

`.google.devtools.cloudtrace.v2.StackTrace.StackFrames stack_frames = 1;`

**Returns**

**Type**

**Description**

`[StackTrace.StackFramesOrBuilder](/java/docs/reference/google-cloud-trace/2.35.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFramesOrBuilder)`

### getStackTraceHashId()

```
public abstract long getStackTraceHashId()
```

The hash ID is used to conserve network bandwidth for duplicate stack traces within a single trace.

Often multiple spans will have identical stack traces. The first occurrence of a stack trace should contain both the `stackFrame` content and a value in `stackTraceHashId`.

Subsequent spans within the same request can refer to that stack trace by only setting `stackTraceHashId`.

`int64 stack_trace_hash_id = 2;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The stackTraceHashId.

### hasStackFrames()

```
public abstract boolean hasStackFrames()
```

Stack frames in this stack trace. A maximum of 128 frames are allowed.

`.google.devtools.cloudtrace.v2.StackTrace.StackFrames stack_frames = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stackFrames field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
