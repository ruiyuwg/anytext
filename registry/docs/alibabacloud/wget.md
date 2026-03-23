Managed Service for OpenTelemetry collects trace data from Java applications and provides application topology, traces, abnormal and slow transaction analysis, and SQL analysis. Three instrumentation approaches are available, from zero-code agent setup to full SDK control.

**Approach**

**Effort**

**When to use**

[OpenTelemetry Java agent](#section-746-yt6-64f) (recommended)

Minimal -- attach a JAR, no code changes

Most applications. Start here.

[OpenTelemetry SDK for Java](#section-hvi-cqt-mpa)

Moderate -- write instrumentation code

Custom spans, attributes, or unsupported frameworks

[Agent + SDK combined](#section-k48-mi6-dca)

Moderate -- agent handles the basics, SDK adds custom spans

Automatic coverage plus targeted custom instrumentation

## Sample code

Clone or browse the sample project for a working reference:

```
git clone https://github.com/alibabacloud-observability/java-demo.git
cd java-demo/opentelemetry-demo
```

## Method 1: Automatic instrumentation with the OpenTelemetry Java agent

The [OpenTelemetry Java agent](https://github.com/open-telemetry/opentelemetry-java-instrumentation) attaches to your JVM at startup and instruments [hundreds of libraries and frameworks](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/docs/supported-libraries.md) without any code changes. This is the recommended starting point for most applications.

### Step 1: Download the agent

Download the latest agent JAR from [GitHub Releases](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases):

```
# wget
wget -O opentelemetry-javaagent.jar \
  https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar

# or curl
curl -Lo opentelemetry-javaagent.jar \
  https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar
```

### Step 2: Configure JVM parameters and start the application

Add the `-javaagent` flag **before** the `-jar` argument. Choose either the HTTP or gRPC protocol.

#### HTTP

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=<your-service-name>,service.version=<your-version>,deployment.environment=<your-env> \
  -Dotel.exporter.otlp.protocol=http/protobuf \
  -Dotel.exporter.otlp.traces.endpoint=<traces-endpoint> \
  -Dotel.exporter.otlp.metrics.endpoint=<metrics-endpoint> \
  -Dotel.logs.exporter=none \
  -jar /path/to/your/app.jar
```

Replace the placeholders with your actual values:

**Placeholder**

**Description**

**Example**

`<your-service-name>`

A name that identifies your application

`order-service`

`<your-version>`

Application version

`1.0.0`

`<your-env>`

Deployment environment

`production`

`<traces-endpoint>`

Trace endpoint from the Prerequisites section

`http://tracing-analysis-dc-hz-internal.aliyuncs.com/adapt_ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe****/api/otlp/traces`

`<metrics-endpoint>`

Metric endpoint from the Prerequisites section

`http://tracing-analysis-dc-hz-internal.aliyuncs.com/adapt_ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe****/api/otlp/metrics`

**Example:**

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=order-service,service.version=1.0.0,deployment.environment=production \
  -Dotel.exporter.otlp.protocol=http/protobuf \
  -Dotel.exporter.otlp.traces.endpoint=http://tracing-analysis-dc-hz-internal.aliyuncs.com/adapt_ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe****/api/otlp/traces \
  -Dotel.exporter.otlp.metrics.endpoint=http://tracing-analysis-dc-hz-internal.aliyuncs.com/adapt_ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe****/api/otlp/metrics \
  -Dotel.logs.exporter=none \
  -jar /path/to/your/app.jar
```

#### gRPC

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=<your-service-name>,service.version=<your-version>,deployment.environment=<your-env> \
  -Dotel.exporter.otlp.protocol=grpc \
  -Dotel.exporter.otlp.headers=Authentication=<token> \
  -Dotel.exporter.otlp.endpoint=<endpoint> \
  -Dotel.logs.exporter=none \
  -jar /path/to/your/app.jar
```

Replace the placeholders with your actual values:

**Placeholder**

**Description**

**Example**

`<token>`

Authentication token from the Prerequisites section

`ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe****`

`<endpoint>`

gRPC endpoint from the Prerequisites section

`http://tracing-analysis-dc-hz-internal.aliyuncs.com:8090`

**Example:**

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=order-service,service.version=1.0.0,deployment.environment=production \
  -Dotel.exporter.otlp.protocol=grpc \
  -Dotel.exporter.otlp.headers=Authentication=ggxw4l****@7323a5caae3****_ggxw4l****@53df7ad2afe**** \
  -Dotel.exporter.otlp.endpoint=http://tracing-analysis-dc-hz-internal.aliyuncs.com:8090 \
  -Dotel.logs.exporter=none \
  -jar /path/to/your/app.jar
```

> To forward trace data through an OpenTelemetry Collector, remove `-Dotel.exporter.otlp.headers=Authentication=<token>` and set `<endpoint>` to the Collector address on your on-premises machine.

### Step 3: Verify trace data

1.  Open the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  On the **Applications** page, click your application name.
    
3.  Confirm that traces appear on the application details page.
    

**Troubleshooting:**

-   If no data appears, verify that the endpoint and token are correct.
    
-   Enable debug logging to inspect the agent behavior:
    
    ```
      -Dotel.javaagent.debug=true
    ```
    
-   Temporarily disable the agent without removing it from the startup command:
    
    ```
      -Dotel.javaagent.enabled=false
    ```
    

## Method 2: Manual instrumentation with OpenTelemetry SDK for Java

Use [OpenTelemetry SDK for Java](https://github.com/open-telemetry/opentelemetry-java) when you need full control over which operations produce spans, what attributes they carry, or when the automatic agent does not cover your framework.

### Step 1: Add Maven dependencies

Add the following to your `pom.xml`:

```
<dependencies>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-api</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-sdk-trace</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-exporter-otlp</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-sdk</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-semconv</artifactId>
        <version>1.30.0-alpha</version>
    </dependency>
</dependencies>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.opentelemetry</groupId>
            <artifactId>opentelemetry-bom</artifactId>
            <version>1.30.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### Step 2: Initialize the tracer

Create a helper class that configures the exporter, resource attributes, and tracer. Select the protocol that matches your environment.

#### HTTP

```
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.propagation.W3CTraceContextPropagator;
import io.opentelemetry.context.propagation.ContextPropagators;
import io.opentelemetry.exporter.otlp.http.trace.OtlpHttpSpanExporter;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.BatchSpanProcessor;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;

public class OpenTelemetrySupport {

    static {
        // Define the resource that describes this service
        Resource resource = Resource.getDefault()
                .merge(Resource.create(Attributes.of(
                        ResourceAttributes.SERVICE_NAME, "<your-service-name>",
                        ResourceAttributes.SERVICE_VERSION, "<your-version>",
                        ResourceAttributes.DEPLOYMENT_ENVIRONMENT, "<your-env>",
                        ResourceAttributes.HOST_NAME, "<your-host-name>"
                )));

        // Build a tracer provider with the OTLP HTTP exporter
        SdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()
                .addSpanProcessor(BatchSpanProcessor.builder(OtlpHttpSpanExporter.builder()
                        .setEndpoint("<endpoint>")  // Trace endpoint from the Prerequisites section
                        .build()).build())
                .setResource(resource)
                .build();

        // Register the SDK globally
        OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
                .setTracerProvider(sdkTracerProvider)
                .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
                .buildAndRegisterGlobal();

        tracer = openTelemetry.getTracer("OpenTelemetry Tracer", "1.0.0");
    }

    private static Tracer tracer;

    public static Tracer getTracer() {
        return tracer;
    }
}
```

#### gRPC

```
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.propagation.W3CTraceContextPropagator;
import io.opentelemetry.context.propagation.ContextPropagators;
import io.opentelemetry.exporter.otlp.trace.OtlpGrpcSpanExporter;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.BatchSpanProcessor;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;

public class OpenTelemetrySupport {

    static {
        // Define the resource that describes this service
        Resource resource = Resource.getDefault()
                .merge(Resource.create(Attributes.of(
                        ResourceAttributes.SERVICE_NAME, "<your-service-name>",
                        ResourceAttributes.SERVICE_VERSION, "<your-version>",
                        ResourceAttributes.DEPLOYMENT_ENVIRONMENT, "<your-env>",
                        ResourceAttributes.HOST_NAME, "<your-host-name>"
                )));

        // Build a tracer provider with the OTLP gRPC exporter
        SdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()
                .addSpanProcessor(BatchSpanProcessor.builder(OtlpGrpcSpanExporter.builder()
                        .setEndpoint("<endpoint>")         // gRPC endpoint from the Prerequisites section
                        .addHeader("Authentication", "<token>")  // Authentication token from the Prerequisites section
                        .build()).build())
                .setResource(resource)
                .build();

        // Register the SDK globally
        OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
                .setTracerProvider(sdkTracerProvider)
                .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
                .buildAndRegisterGlobal();

        tracer = openTelemetry.getTracer("OpenTelemetry Tracer", "1.0.0");
    }

    private static Tracer tracer;

    public static Tracer getTracer() {
        return tracer;
    }
}
```

### Step 3: Create spans

Use the tracer to create parent and child spans. Each span captures a unit of work, along with any attributes and error status.

```
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.context.Scope;

public class Main {

    public static void parentMethod() {
        // Start a parent span
        Span span = OpenTelemetrySupport.getTracer().spanBuilder("parent span").startSpan();
        try (Scope scope = span.makeCurrent()) {
            span.setAttribute("good", "job");
            childMethod();
        } catch (Throwable t) {
            span.setStatus(StatusCode.ERROR, "handle parent span error");
        } finally {
            span.end();
        }
    }

    public static void childMethod() {
        // Start a child span -- automatically linked to the parent through Context
        Span span = OpenTelemetrySupport.getTracer().spanBuilder("child span").startSpan();
        try (Scope scope = span.makeCurrent()) {
            span.setAttribute("hello", "world");
        } catch (Throwable t) {
            span.setStatus(StatusCode.ERROR, "handle child span error");
        } finally {
            span.end();
        }
    }

    public static void main(String[] args) {
        parentMethod();
    }
}
```

### Step 4: Start the application and verify

Start the application, then open the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/). On the **Applications** page, click your application name and confirm that traces appear.

## Method 3: Combine the Java agent with the SDK

Use the agent for broad automatic coverage and the SDK for targeted custom spans. The agent auto-configures the SDK at startup through the `opentelemetry-sdk-extension-autoconfigure` dependency, so you do not need the `OpenTelemetrySupport` helper class from Method 2.

### Step 1: Download the agent

Download the [OpenTelemetry Java agent](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases) as described in [Method 1, Step 1](#section-79a2efe4).

### Step 2: Add Maven dependencies

In addition to the dependencies in [Method 2, Step 1](#section-492e4e82), add the following:

```
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-extension-annotations</artifactId>
</dependency>
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-sdk-extension-autoconfigure</artifactId>
    <version>1.23.0-alpha</version>
</dependency>
```

> The `opentelemetry-sdk-extension-autoconfigure` dependency transfers agent settings to the SDK automatically, so you do not need to configure the exporter or resource attributes in code.

Full pom.xml dependencies

```
<dependencies>
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.1.3</version>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-api</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-sdk-trace</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-extension-annotations</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-exporter-otlp</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-sdk</artifactId>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-semconv</artifactId>
        <version>1.30.0-alpha</version>
    </dependency>
    <dependency>
        <groupId>io.opentelemetry</groupId>
        <artifactId>opentelemetry-sdk-extension-autoconfigure</artifactId>
        <version>1.23.0-alpha</version>
    </dependency>
</dependencies>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.opentelemetry</groupId>
            <artifactId>opentelemetry-bom</artifactId>
            <version>1.30.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### Step 3: Get a tracer

Because the agent handles SDK initialization, get the global tracer directly:

```
OpenTelemetry openTelemetry = GlobalOpenTelemetry.get();
Tracer tracer = openTelemetry.getTracer("instrumentation-library-name", "1.0.0");
```

### Step 4: Add custom instrumentation

Three techniques for adding instrumentation on top of the agent:

#### Technique 1: Add attributes to an auto-created span

Call `Span.current()` inside an already-instrumented method to attach business attributes:

```
@RequestMapping("/async")
public String async() {
    Span span = Span.current();
    span.setAttribute("user.id", "123456");
    userService.async();
    child("vip");
    return "async";
}
```

#### Technique 2: Use `@WithSpan` for annotation-based instrumentation

Annotate a method with `@WithSpan` to create a span automatically. Use `@SpanAttribute` to record parameters:

```
@WithSpan
private void child(@SpanAttribute("user.type") String userType) {
    System.out.println(userType);
    biz();
}
```

#### Technique 3: Create spans manually with a tracer

For full control, build spans with the tracer API. This example also propagates context into an async thread:

```
private void biz() {
    Tracer tracer = GlobalOpenTelemetry.get().getTracer("tracer");
    Span span = tracer.spanBuilder("biz (manual)")
        .setParent(Context.current().with(Span.current()))  // optional -- set automatically
        .startSpan();

    try (Scope scope = span.makeCurrent()) {
        span.setAttribute("biz-id", "111");

        // Propagate context into an async task
        es.submit(() -> {
            Span asyncSpan = tracer.spanBuilder("async")
                .setParent(Context.current().with(span))
                .startSpan();
            try {
                Thread.sleep(1000L);  // simulate async work
            } catch (Throwable e) {
                // handle error
            }
            asyncSpan.end();
        });

        Thread.sleep(1000);  // simulate business logic
    } catch (Throwable t) {
        span.setStatus(StatusCode.ERROR, "handle biz error");
    } finally {
        span.end();
    }
}
```

Full controller and service code

**Controller** (`com.alibaba.arms.brightroar.console.controller`):

```
package com.alibaba.arms.brightroar.console.controller;

import com.alibaba.arms.brightroar.console.service.UserService;
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Context;
import io.opentelemetry.context.Scope;
import io.opentelemetry.extension.annotations.SpanAttribute;
import io.opentelemetry.extension.annotations.WithSpan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    private ExecutorService es = Executors.newFixedThreadPool(5);

    // Technique 1: Add attributes to an auto-created span
    @RequestMapping("/async")
    public String async() {
        System.out.println("UserController.async -- " + Thread.currentThread().getId());
        Span span = Span.current();
        span.setAttribute("user.id", "123456");
        userService.async();
        child("vip");
        return "async";
    }

    // Technique 2: Annotation-based instrumentation
    @WithSpan
    private void child(@SpanAttribute("user.type") String userType) {
        System.out.println(userType);
        biz();
    }

    // Technique 3: Manual span creation
    private void biz() {
        Tracer tracer = GlobalOpenTelemetry.get().getTracer("tracer");
        Span span = tracer.spanBuilder("biz (manual)")
            .setParent(Context.current().with(Span.current()))
            .startSpan();

        try (Scope scope = span.makeCurrent()) {
            span.setAttribute("biz-id", "111");

            es.submit(new Runnable() {
                @Override
                public void run() {
                    Span asyncSpan = tracer.spanBuilder("async")
                        .setParent(Context.current().with(span))
                        .startSpan();
                    try {
                        Thread.sleep(1000L); // simulate async work
                    } catch (Throwable e) {
                    }
                    asyncSpan.end();
                }
            });

            Thread.sleep(1000); // simulate business logic
            System.out.println("biz done");
            OpenTelemetry openTelemetry = GlobalOpenTelemetry.get();
            openTelemetry.getPropagators();
        } catch (Throwable t) {
            span.setStatus(StatusCode.ERROR, "handle biz error");
        } finally {
            span.end();
        }
    }

}
```

**Service** (`com.alibaba.arms.brightroar.console.service`):

```
package com.alibaba.arms.brightroar.console.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Async
    public void async() {
        System.out.println("UserService.async -- " + Thread.currentThread().getId());
        System.out.println("my name is async");
        System.out.println("UserService.async -- ");
    }
}
```

### Step 5: Configure JVM parameters and start the application

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=<your-service-name> \
  -Dotel.exporter.otlp.headers=Authentication=<token> \
  -Dotel.exporter.otlp.endpoint=<endpoint> \
  -jar /path/to/your/app.jar
```

**Example:**

```
java -javaagent:/path/to/opentelemetry-javaagent.jar \
  -Dotel.resource.attributes=service.name=ot-java-agent-sample \
  -Dotel.exporter.otlp.headers=Authentication=b590xxxxuqs@3a75d95xxxxx9b_b59xxxxguqs@53dxxxx2afe8301 \
  -Dotel.exporter.otlp.endpoint=http://tracing-analysis-dc-bj:8090 \
  -jar /path/to/your/app.jar
```

> To forward trace data through an OpenTelemetry Collector, remove `-Dotel.exporter.otlp.headers=Authentication=<token>` and set `<endpoint>` to the Collector address on your on-premises machine.

Open the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/). On the **Applications** page, click your application name and confirm that traces appear.

## Supported Java frameworks

The OpenTelemetry Java agent automatically instruments the following frameworks. For the complete and up-to-date list, see [Supported libraries, frameworks, application servers, and JVMs](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/docs/supported-libraries.md).

Supported Java frameworks

**Framework**

**Version**

[Akka Actors](https://doc.akka.io/docs/akka/current/typed/index.html)

2.5 or later

[Akka HTTP](https://doc.akka.io/docs/akka-http/current/index.html)

10.0 or later

[Apache Axis2](https://axis.apache.org/axis2/java/core/)

1.6 or later

[Apache Camel](https://camel.apache.org/)

2.20 or later (excluding 3.x)

[Apache DBCP](https://commons.apache.org/proper/commons-dbcp/)

2.0 or later

[Apache CXF JAX-RS](https://cxf.apache.org/)

3.2 or later

[Apache CXF JAX-WS](https://cxf.apache.org/)

3.0 or later

[Apache Dubbo](https://github.com/apache/dubbo/)

2.7 or later

[Apache HttpAsyncClient](https://hc.apache.org/index.html)

4.1 or later

[Apache HttpClient](https://hc.apache.org/index.html)

2.0 or later

[Apache Kafka Producer/Consumer API](https://kafka.apache.org/documentation/#producerapi)

0.11 or later

[Apache Kafka Streams API](https://kafka.apache.org/documentation/streams/)

0.11 or later

[Apache MyFaces](https://myfaces.apache.org/)

1.2 or later (excluding 3.x)

[Apache Pulsar](https://pulsar.apache.org/)

2.8 or later

[Apache RocketMQ gRPC/Protobuf-based Client](https://rocketmq.apache.org/)

5.0 or later

[Apache RocketMQ Remoting-based Client](https://rocketmq.apache.org/)

4.8 or later

[Apache Struts 2](https://github.com/apache/struts)

2.3 or later

[Apache Tapestry](https://tapestry.apache.org/)

5.4 or later

[Apache Wicket](https://wicket.apache.org/)

8.0 or later

[Armeria](https://armeria.dev/)

1.3 or later

[AsyncHttpClient](https://github.com/AsyncHttpClient/async-http-client)

1.9 or later

[AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html)

1.0 or later

[AWS SDK](https://aws.amazon.com/sdk-for-java/)

1.11.x and 2.2 or later

[Azure Core](https://docs.microsoft.com/en-us/java/api/overview/azure/core-readme)

1.14 or later

[Cassandra Driver](https://github.com/datastax/java-driver)

3.0 or later

[Couchbase Client](https://github.com/couchbase/couchbase-java-client)

2.0 or later and 3.1 or later

[c3p0](https://github.com/swaldman/c3p0)

0.9.2 or later

[Dropwizard Metrics](https://metrics.dropwizard.io/)

4.0 or later (disabled by default)

[Dropwizard Views](https://www.dropwizard.io/en/latest/manual/views.html)

0.7 or later

[Eclipse Grizzly](https://javaee.github.io/grizzly/httpserverframework.html)

2.3 or later

[Eclipse Jersey](https://eclipse-ee4j.github.io/jersey/)

2.0 or later (excluding 3.x)

[Eclipse Jetty HTTP Client](https://www.eclipse.org/jetty/javadoc/jetty-9/org/eclipse/jetty/client/HttpClient.html)

9.2 or later (excluding 10 or later)

[Eclipse Metro](https://projects.eclipse.org/projects/ee4j.metro)

2.2 or later

[Eclipse Mojarra](https://projects.eclipse.org/projects/ee4j.mojarra)

1.2 or later (excluding 3.x)

[Elasticsearch API Client](https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/index.html)

7.16 or later and 8.0 or later

[Elasticsearch REST Client](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/index.html)

5.0 or later

[Elasticsearch Transport Client](https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/index.html)

5.0 or later

[Finatra](https://github.com/twitter/finatra)

2.9 or later

[Geode Client](https://geode.apache.org/)

1.4 or later

[Google HTTP Client](https://github.com/googleapis/google-http-java-client)

1.19 or later

[Grails](https://grails.org/)

3.0 or later

[GraphQL Java](https://www.graphql-java.com/)

12.0 or later

[gRPC](https://github.com/grpc/grpc-java)

1.6 or later

[Guava ListenableFuture](https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFuture.html)

10.0 or later

[GWT](http://www.gwtproject.org/)

2.0 or later

[Hibernate](https://github.com/hibernate/hibernate-orm)

3.3 or later

[Hibernate Reactive](https://hibernate.org/reactive)

1.0 or later

[HikariCP](https://github.com/brettwooldridge/HikariCP)

3.0 or later

[HttpURLConnection](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/HttpURLConnection.html)

Java 8 or later

[Hystrix](https://github.com/Netflix/Hystrix)

1.4 or later

[Java Executors](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html)

Java 8 or later

[Java Http Client](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/package-summary.html)

Java 11 or later

[java.util.logging](https://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html)

Java 8 or later

[Java Platform](https://docs.oracle.com/javase/8/docs/api/java/lang/management/ManagementFactory.html)

Java 8 or later

[JAX-RS](https://javaee.github.io/javaee-spec/javadocs/javax/ws/rs/package-summary.html)

0.5 or later

[JAX-RS Client](https://javaee.github.io/javaee-spec/javadocs/javax/ws/rs/client/package-summary.html)

1.1 or later

[JAX-WS](https://jakarta.ee/specifications/xml-web-services/2.3/apidocs/javax/xml/ws/package-summary.html)

2.0 or later (excluding 3.x)

[JBoss Log Manager](https://github.com/jboss-logging/jboss-logmanager)

1.1 or later

[JDBC](https://docs.oracle.com/javase/8/docs/api/java/sql/package-summary.html)

Java 8 or later

[Jedis](https://github.com/xetorthio/jedis)

1.4 or later

[JMS](https://javaee.github.io/javaee-spec/javadocs/javax/jms/package-summary.html)

1.1 or later

[Jodd Http](https://http.jodd.org/)

4.2 or later

[JSP](https://javaee.github.io/javaee-spec/javadocs/javax/servlet/jsp/package-summary.html)

2.3 or later

[Kotlin Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

1.0 or later

[Ktor](https://github.com/ktorio/ktor)

1.0 or later

[Kubernetes Client](https://github.com/kubernetes-client/java)

7.0 or later

[Lettuce](https://github.com/lettuce-io/lettuce-core)

4.0 or later

[Log4j 1](https://logging.apache.org/log4j/1.2/)

1.2 or later

[Log4j 2](https://logging.apache.org/log4j/2.x/)

2.11 or later

[Logback](http://logback.qos.ch/)

1.0 or later

[Micrometer](https://micrometer.io/)

1.5 or later

[MongoDB Driver](https://mongodb.github.io/mongo-java-driver/)

3.1 or later

[Netty](https://github.com/netty/netty)

3.8 or later

[OkHttp](https://github.com/square/okhttp/)

2.2 or later

[Oracle UCP](https://docs.oracle.com/database/121/JJUCP/)

11.2 or later

[OSHI](https://github.com/oshi/oshi/)

5.3.1 or later

[Play](https://github.com/playframework/playframework)

2.4 or later

[Play WS](https://github.com/playframework/play-ws)

1.0 or later

[Quartz](https://www.quartz-scheduler.org/)

2.0 or later

[R2DBC](https://r2dbc.io/)

1.0 or later

[RabbitMQ Client](https://github.com/rabbitmq/rabbitmq-java-client)

2.7 or later

[Ratpack](https://github.com/ratpack/ratpack)

1.4 or later

[Reactor](https://github.com/reactor/reactor-core)

3.1 or later

[Reactor Netty](https://github.com/reactor/reactor-netty)

0.9 or later

[Rediscala](https://github.com/etaty/rediscala)

1.8 or later

[Redisson](https://github.com/redisson/redisson)

3.0 or later

[RESTEasy](https://resteasy.github.io/)

3.0 or later

[Restlet](https://restlet.github.io/)

1.0 or later

[RMI](https://docs.oracle.com/en/java/javase/11/docs/api/java.rmi/java/rmi/package-summary.html)

Java 8 or later

[RxJava](https://github.com/ReactiveX/RxJava)

1.0 or later

[Scala ForkJoinPool](https://www.scala-lang.org/api/2.12.0/scala/concurrent/forkjoin/package$$ForkJoinPool$.html)

2.8 or later

[Servlet](https://javaee.github.io/javaee-spec/javadocs/javax/servlet/package-summary.html)

2.2 or later

[Spark Web Framework](https://github.com/perwendel/spark)

2.3 or later

[Spring Boot](https://spring.io/projects/spring-boot)

N/A

[Spring Batch](https://spring.io/projects/spring-batch)

3.0 or later (excluding 5.0 or later)

[Spring Cloud Gateway](https://github.com/spring-cloud/spring-cloud-gateway)

2.0 or later

[Spring Data](https://spring.io/projects/spring-data)

1.8 or later

[Spring Integration](https://spring.io/projects/spring-integration)

4.1 or later (excluding 6.0 or later)

[Spring JMS](https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#jms)

2.0 or later

[Spring Kafka](https://spring.io/projects/spring-kafka)

2.7 or later

[Spring RabbitMQ](https://spring.io/projects/spring-amqp)

1.0 or later

[Spring Scheduling](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/scheduling/package-summary.html)

3.1 or later

[Spring RestTemplate](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/client/package-summary.html)

3.1 or later

[Spring Web MVC](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/servlet/mvc/package-summary.html)

3.1 or later

[Spring Web Services](https://spring.io/projects/spring-ws)

2.0 or later

[Spring WebFlux](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/package-summary.html)

5.3 or later

[Spymemcached](https://github.com/couchbase/spymemcached)

2.12 or later

[Tomcat JDBC Pool](https://tomcat.apache.org/tomcat-7.0-doc/jdbc-pool.html)

8.5 or later

[Twilio](https://github.com/twilio/twilio-java)

6.6 or later (excluding 8.x)

[Undertow](https://undertow.io/)

1.4 or later

[Vaadin](https://vaadin.com/)

14.2 or later

[Vert.x Web](https://vertx.io/docs/vertx-web/java/)

3.0 or later

[Vert.x HttpClient](https://vertx.io/docs/apidocs/io/vertx/core/http/HttpClient.html)

3.0 or later

[Vert.x Kafka Client](https://vertx.io/docs/vertx-kafka-client/java/)

3.6 or later

[Vert.x RxJava2](https://vertx.io/docs/vertx-rx/java2/)

3.5 or later

[Vert.x SQL Client](https://github.com/eclipse-vertx/vertx-sql-client/)

4.0 or later

[Vibur DBCP](https://www.vibur.org/)

11.0 or later

[ZIO](https://zio.dev/)

2.0 or later
