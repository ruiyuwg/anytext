When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Instrumenting a JavaScript App with OpenTelemetry](https://docs.docker.com/guides/opentelemetry/)

Learn how to instrument a JavaScript application using OpenTelemetry in a Dockerized environment.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg "JavaScript") JavaScript App development Observability

10 minutes

[« Back to all guides](/guides/)

# Instrumenting a JavaScript App with OpenTelemetry

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

OpenTelemetry (OTel) is an open-source observability framework that provides a set of APIs, SDKs, and tools for collecting telemetry data, such as metrics, logs, and traces, from applications. With OpenTelemetry, developers can obtain valuable insights into how their services perform in production or during local development.

A key component of OpenTelemetry is the OpenTelemetry Protocol (OTLP) a general-purpose, vendor-agnostic protocol designed to transmit telemetry data efficiently and reliably. OTLP supports multiple data types (traces, metrics, logs) over HTTP or gRPC, making it the default and recommended protocol for communication between instrumented applications, the OpenTelemetry Collector, and backends such as Jaeger or Prometheus.

This guide walks you through how to instrument a simple Node.js application with OpenTelemetry and run both the app and a collector using Docker. This setup is ideal for local development and testing observability before integrating with external observability platforms like Prometheus, Jaeger, or Grafana.

In this guide, you'll learn how to:

- How to set up OpenTelemetry in a Node.js app.
- How to run an OpenTelemetry Collector in Docker.
- How to visualize traces with Jaeger.
- How to use Docker Compose to manage the full observability stack.

## [Using OpenTelemetry with Docker](#using-opentelemetry-with-docker)

The [Docker Official Image for OpenTelemetry](https://hub.docker.com/r/otel/opentelemetry-collector-contrib) provides a convenient way to deploy and manage Dex instances. OpenTelemetry is available for various CPU architectures, including amd64, armv7, and arm64, ensuring compatibility with different devices and platforms. Same for the [Jaeger Docker image](https://hub.docker.com/r/jaegertracing/jaeger).

## [Prerequisites](#prerequisites)

[Docker Compose](/compose/): Recommended for managing multi-container Docker applications.

Basic knowledge of Node.js and Docker.

## [Project Structure](#project-structure)

Create the project directory:

```bash
mkdir otel-js-app
cd otel-js-app
```

```bash
otel-js-app/
├── docker-compose.yaml
├── collector-config.yaml
├── app/
│   ├── package.json
│   ├── app.js
│   └── tracer.js
```

## [Create a Simple Node.js App](#create-a-simple-nodejs-app)

Initialize a basic Node.js app:

```bash
mkdir app && cd app
npm init -y
npm install express @opentelemetry/api @opentelemetry/sdk-node \
            @opentelemetry/auto-instrumentations-node \
            @opentelemetry/exporter-trace-otlp-http
```

Now, add the application logic:

```js
// app/app.js
const express = require('express');
require('./tracer'); // Initialize OpenTelemetry

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from OpenTelemetry demo app!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
```

## [Configure OpenTelemetry Tracing](#configure-opentelemetry-tracing)

Create the tracer configuration file:

```js
// app/tracer.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://collector:4318/v1/traces',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
```

## [Configure the OpenTelemetry Collector](#configure-the-opentelemetry-collector)

Create a collector-config.yaml file at the root:

```yaml
# collector-config.yaml
receivers:
  otlp:
    protocols:
      http:

exporters:
  logging:
    loglevel: debug
  jaeger:
    endpoint: jaeger:14250
    tls:
      insecure: true

service:
  pipelines:
    traces:
      receivers: [otlp]
      exporters: [logging, jaeger]
```

## [Add Docker Compose Configuration](#add-docker-compose-configuration)

Create the `docker-compose.yaml` file:

```yaml
version: '3.9'

services:
  app:
    build: ./app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - collector

  collector:
    image: otel/opentelemetry-collector:latest
    volumes:
      - ./collector-config.yaml:/etc/otelcol/config.yaml
    command: ["--config=/etc/otelcol/config.yaml"]
    ports:
      - "4318:4318" # OTLP

  jaeger:
    image: jaegertracing/all-in-one:latest
    ports:
      - "16686:16686" # UI
      - "14250:14250" # Collector gRPC
```

Now, add the `Dockerfile` inside the `app/` folder:

```dockerfile
# app/Dockerfile
FROM node:18

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["node", "app.js"]
```

## [Start the Stack](#start-the-stack)

Start all services with Docker Compose:

```bash
docker compose up --build
```

Once the services are running:

Visit your app at <http://localhost:3000>

View traces at <http://localhost:16686> in the Jaeger UI

## [Verify Traces in Jaeger](#verify-traces-in-jaeger)

After visiting your app's root endpoint, open Jaeger’s UI, search for the service (default is usually `unknown_service` unless explicitly named), and check the traces.

You should see spans for the HTTP request, middleware, and auto-instrumented libraries.

## [Conclusion](#conclusion)

You now have a fully functional OpenTelemetry setup using Docker Compose. You've instrumented a basic JavaScript app to export traces and visualized them using Jaeger. This architecture is extendable for more complex applications and observability pipelines using Prometheus, Grafana, or cloud-native exporters.

For advanced topics such as custom span creation, metrics, and logs, consult the OpenTelemetry JavaScript docs.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/opentelemetry.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fopentelemetry%2f\&labels=status%2Ftriage)

Table of contents
