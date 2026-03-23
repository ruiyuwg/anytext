Managed Service for OpenTelemetry allows trace data to be passed in various formats, such as tracecontext, baggage, b3, b3multi, and jaeger. The format of the HTTP request header varies based on the formats of the trace data to be passed. This topic describes how to specify the format to pass trace data in Managed Service for OpenTelemetry.

## Format supported by Managed Service for OpenTelemetry

By default, Managed Service for OpenTelemetry uses tracecontext and baggage to pass trace data.

**Format**

**HTTP request header format**

**References**

tracecontext

traceparent : {version}-{trace-id}-{parent-id}-{trace-flags}

[Documentation](https://www.w3.org/TR/trace-context/)

baggage

\-

[Documentation](https://www.w3.org/TR/baggage/)

b3

b3: {TraceId}-{SpanId}-{SamplingState}-{ParentSpanId}

[Documentation](https://github.com/openzipkin/b3-propagation)

b3multi

X-B3-TraceId: {TraceId}

X-B3-SpanId: {SpanId}

X-B3-ParentSpanId: {ParentSpanId}

X-B3-Sampled: {SamplingState}

[Documentation](https://github.com/openzipkin/b3-propagation)

jaeger

uber-trace-id : {trace-id}:{span-id}:{parent-span-id}:{flags}

[Documentation](https://www.jaegertracing.io/docs/1.21/client-libraries/#propagation-format)

xray

\-

\-

ottrace

\-

\-

none

\-

\-

## Specify a format

When you start an application, you can use one of the following methods to specify the format to pass a trace ID:

-   Run the following command to specify the otel.propagation parameter: `-Dotel.propagators=tracecontext,baggage`
    
    You can specify multiple formats and separate the formats with commas (,). Sample code:
    
    ```
    -javaagent:/path/to/opentelemetry-javaagent.jar
     -Dotel.resource.attributes=service.name=<service-name>
     -Dotel.exporter.otlp.headers=Authentication=<token>
     -Dotel.exporter.otlp.endpoint=<endpoint>
     -Dotel.metrics.exporter=none
     -Dotel.propagators=tracecontext,baggage,b3
    ```
    

-   Specify the OTEL\_PROPAGATORS environment variable and run the application.
    
    You can specify multiple formats and separate the formats with commas (,). Sample code:
    
    ```
    export OTEL_PROPAGATORS="b3"
    ```
