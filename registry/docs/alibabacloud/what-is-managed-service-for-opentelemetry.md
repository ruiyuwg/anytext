Managed Service for OpenTelemetry provides a set of tools for developing distributed applications. It collects trace data from your microservices, aggregates it in real time, and helps you pinpoint performance bottlenecks, map traces, count requests, display trace topologies, and analyze application dependencies across distributed architectures. This improves the efficiency of microservice development and diagnostics.

## How distributed tracing works

In a distributed system, a single user request often passes through multiple services before completing. Distributed tracing tracks that request end to end by recording each step as a **span**. A span captures the timing, status, and metadata of one operation within one service -- for example, an HTTP handler, a database query, or a remote procedure call. All spans from the same request are linked into a **trace**, giving you a complete view of the request path, latency breakdown, and failure points.

Managed Service for OpenTelemetry collects, stores, and visualizes these traces so you can identify where requests slow down or fail.

## Architecture

The following diagram shows how data flows through Managed Service for OpenTelemetry.

![Architecture of Managed Service for OpenTelemetry](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0942952271/CAEQLBiBgID5yffJiBkiIDYwYjY0OWVmN2IzNjRjN2U4OGQ1NDA3MGZjNGZiYmFi3963382_20230830144006.372.svg)

The data pipeline has three stages:

1.  **Instrument your application.** Integrate a client SDK into your application to capture and report service call data. Managed Service for OpenTelemetry provides SDKs for multiple languages and is compatible with SDKs from various open-source communities through the OpenTracing standard.
    
2.  **Aggregate and visualize.** After your application reports trace data, Managed Service for OpenTelemetry aggregates and persists the data in real time. It generates trace details, performance overviews, and real-time service topology maps you can use to diagnose issues.
    
3.  **Forward to downstream services.** Export trace data to other Alibaba Cloud services for further analysis. For example, forward traces to Simple Log Service for log analysis or to MaxCompute for offline analysis and alerting.
    

## Capabilities

**Goal**

**How Managed Service for OpenTelemetry helps**

Trace requests across services

Collects requests flowing through your microservices and reconstructs them as distributed traces. Query individual traces to see exactly where latency spikes or errors occur.

Monitor application performance in real time

Captures all user requests for an application and analyzes the performance of your services and resources as it happens.

Visualize service dependencies

Automatically discovers and maps call relationships between your distributed microservices and related PaaS products into a real-time topology.

Instrument in multiple languages

Provides SDKs for multiple programming languages. Compatible with open-source tracing ecosystems such as Jaeger and Zipkin through the OpenTracing standard.

Integrate with analytics platforms

Exports trace data to downstream services such as Simple Log Service for log analysis and MaxCompute for offline analysis.

## OpenTracing compatibility

Managed Service for OpenTelemetry supports the OpenTracing standard and is compatible with open-source SDKs and libraries from communities such as Jaeger and Zipkin. Instrument your applications with these widely adopted tools and send trace data to Managed Service for OpenTelemetry.

## Get started

To start using Managed Service for OpenTelemetry:

1.  Activate Managed Service for OpenTelemetry in the Alibaba Cloud console.
    
2.  Integrate a client SDK into your application.
    
3.  Verify that trace data appears in the console.
