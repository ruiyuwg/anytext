-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.devtools.cloudtrace.v2 (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13

## Classes

### [AttributeValue](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.AttributeValue)

The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.

Protobuf type `google.devtools.cloudtrace.v2.AttributeValue`

### [AttributeValue.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.AttributeValue.Builder)

The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.

Protobuf type `google.devtools.cloudtrace.v2.AttributeValue`

### [BatchWriteSpansRequest](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.BatchWriteSpansRequest)

The request message for the `BatchWriteSpans` method.

Protobuf type `google.devtools.cloudtrace.v2.BatchWriteSpansRequest`

### [BatchWriteSpansRequest.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.Builder)

The request message for the `BatchWriteSpans` method.

Protobuf type `google.devtools.cloudtrace.v2.BatchWriteSpansRequest`

### [Module](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Module)

Binary module.

Protobuf type `google.devtools.cloudtrace.v2.Module`

### [Module.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Module.Builder)

Binary module.

Protobuf type `google.devtools.cloudtrace.v2.Module`

### [ProjectName](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.ProjectName)

### [ProjectName.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.ProjectName.Builder)

Builder for projects/{project}.

### [Span](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span)

A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations.

A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous. There might be gaps or overlaps between spans in a trace.

Protobuf type `google.devtools.cloudtrace.v2.Span`

### [Span.Attributes](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Attributes)

A set of attributes as key-value pairs.

Protobuf type `google.devtools.cloudtrace.v2.Span.Attributes`

### [Span.Attributes.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Attributes.Builder)

A set of attributes as key-value pairs.

Protobuf type `google.devtools.cloudtrace.v2.Span.Attributes`

### [Span.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Builder)

A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations.

A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous. There might be gaps or overlaps between spans in a trace.

Protobuf type `google.devtools.cloudtrace.v2.Span`

### [Span.Link](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Link)

A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.

Protobuf type `google.devtools.cloudtrace.v2.Span.Link`

### [Span.Link.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Link.Builder)

A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.

Protobuf type `google.devtools.cloudtrace.v2.Span.Link`

### [Span.Links](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Links)

A collection of links, which are references from this span to a span in the same or different trace.

Protobuf type `google.devtools.cloudtrace.v2.Span.Links`

### [Span.Links.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Links.Builder)

A collection of links, which are references from this span to a span in the same or different trace.

Protobuf type `google.devtools.cloudtrace.v2.Span.Links`

### [Span.TimeEvent](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent)

A time-stamped annotation or message event in the Span.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent`

### [Span.TimeEvent.Annotation](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation)

Text annotation with a set of attributes.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation`

### [Span.TimeEvent.Annotation.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation.Builder)

Text annotation with a set of attributes.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation`

### [Span.TimeEvent.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.Builder)

A time-stamped annotation or message event in the Span.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent`

### [Span.TimeEvent.MessageEvent](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent)

An event describing a message sent/received between Spans.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent`

### [Span.TimeEvent.MessageEvent.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Builder)

An event describing a message sent/received between Spans.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent`

### [Span.TimeEvents](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents)

A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvents`

### [Span.TimeEvents.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents.Builder)

A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.

Protobuf type `google.devtools.cloudtrace.v2.Span.TimeEvents`

### [SpanName](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.SpanName)

### [SpanName.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.SpanName.Builder)

Builder for projects/{project}/traces/{trace}/spans/{span}.

### [StackTrace](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace)

A call stack appearing in a trace.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace`

### [StackTrace.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.Builder)

A call stack appearing in a trace.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace`

### [StackTrace.StackFrame](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrame)

Represents a single stack frame in a stack trace.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace.StackFrame`

### [StackTrace.StackFrame.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrame.Builder)

Represents a single stack frame in a stack trace.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace.StackFrame`

### [StackTrace.StackFrames](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrames)

A collection of stack frames, which can be truncated.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace.StackFrames`

### [StackTrace.StackFrames.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrames.Builder)

A collection of stack frames, which can be truncated.

Protobuf type `google.devtools.cloudtrace.v2.StackTrace.StackFrames`

### [TraceProto](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceProto)

### [TraceServiceGrpc](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc)

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TraceServiceGrpc.TraceServiceBlockingStub](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc.TraceServiceBlockingStub)

A stub to allow clients to do synchronous rpc calls to service TraceService.

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TraceServiceGrpc.TraceServiceFutureStub](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc.TraceServiceFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service TraceService.

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TraceServiceGrpc.TraceServiceImplBase](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc.TraceServiceImplBase)

Base class for the server implementation of the service TraceService.

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TraceServiceGrpc.TraceServiceStub](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc.TraceServiceStub)

A stub to allow clients to do asynchronous rpc calls to service TraceService.

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TracingProto](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TracingProto)

### [TruncatableString](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TruncatableString)

Represents a string that might be shortened to a specified length.

Protobuf type `google.devtools.cloudtrace.v2.TruncatableString`

### [TruncatableString.Builder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TruncatableString.Builder)

Represents a string that might be shortened to a specified length.

Protobuf type `google.devtools.cloudtrace.v2.TruncatableString`

## Interfaces

### [AttributeValueOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.AttributeValueOrBuilder)

### [BatchWriteSpansRequestOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.BatchWriteSpansRequestOrBuilder)

### [ModuleOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.ModuleOrBuilder)

### [Span.AttributesOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.AttributesOrBuilder)

### [Span.LinkOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.LinkOrBuilder)

### [Span.LinksOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.LinksOrBuilder)

### [Span.TimeEvent.AnnotationOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.AnnotationOrBuilder)

### [Span.TimeEvent.MessageEventOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEventOrBuilder)

### [Span.TimeEventOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEventOrBuilder)

### [Span.TimeEventsOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEventsOrBuilder)

### [SpanOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.SpanOrBuilder)

### [StackTrace.StackFrameOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFrameOrBuilder)

### [StackTrace.StackFramesOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTrace.StackFramesOrBuilder)

### [StackTraceOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.StackTraceOrBuilder)

### [TraceServiceGrpc.AsyncService](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TraceServiceGrpc.AsyncService)

Service for collecting and viewing traces and spans within a trace. A trace is a collection of spans corresponding to a single operation or a set of operations in an application. A span is an individual timed event which forms a node of the trace tree. A single trace can contain spans from multiple services.

### [TruncatableStringOrBuilder](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.TruncatableStringOrBuilder)

## Enums

### [AttributeValue.ValueCase](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.AttributeValue.ValueCase)

### [Span.Link.Type](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.Link.Type)

The relationship of the current span relative to the linked span: child, parent, or unspecified.

Protobuf enum `google.devtools.cloudtrace.v2.Span.Link.Type`

### [Span.SpanKind](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.SpanKind)

Type of span. Can be used to specify additional relationships between spans in addition to a parent/child relationship.

Protobuf enum `google.devtools.cloudtrace.v2.Span.SpanKind`

### [Span.TimeEvent.MessageEvent.Type](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Type)

Indicates whether the message was sent or received.

Protobuf enum `google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Type`

### [Span.TimeEvent.ValueCase](/java/docs/reference/google-cloud-trace/2.29.0/com.google.devtools.cloudtrace.v2.Span.TimeEvent.ValueCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
