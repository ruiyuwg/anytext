# Metrics: [OTel example](/langsmith/langsmith-collector#metrics)

## LangSmith services

The following LangSmith services expose metrics at an endpoint, in the Prometheus metrics format. The frontend does not currently expose metrics.

- **Backend**: `http://<langsmith_release_name>-backend.<namespace>.svc.cluster.local:1984/metrics`
- **Platform Backend**: `http://<langsmith_release_name>-platform-backend.<namespace>.svc.cluster.local:1986/metrics`
- **Playground**: `http://<langsmith_release_name>-playground.<namespace>.svc.cluster.local:1988/metrics`
- **(LangSmith Control Plane only) Host Backend**: `http://<langsmith_release_name>-host-backend.<namespace>.svc.cluster.local:1985/metrics`

You can use a [Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/#configure-prometheus-to-monitor-the-sample-targets) or [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver) collector to scrape the endpoints, and export metrics to the backend of your choice.

## Frontend Nginx

The frontend service exposes its Nginx metrics at the following endpoint: `langsmith-frontend.langsmith.svc.cluster.local:80/nginx_status`. You can either scrape them yourself, or bring up a [Prometheus Nginx exporter](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-nginx-exporter).

**The following sections apply for in-cluster databases only. If you are using external databases, you will need to configure exposing and fetching metrics.**

## Postgres + Redis

If you are using in-cluster Postgres/Redis instances, you can use a Prometheus exporter to expose metrics from your instance. You can deploy a [Postgres exporter](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-postgres-exporter) and/or [Redis exporter](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-redis-exporter).

## Clickhouse

The in-cluster Clickhouse is configured to expose metrics without the need for an exporter. You can use your collector to scrape metrics at `http://<langsmith_release_name>-clickhouse.<namespace>.svc.cluster.local:9363/metrics`

# Traces: [OTel example](/langsmith/langsmith-collector#traces)

The LangSmith Backend, Platform Backend, Playground and LangSmith Queue deployments have been instrumented to emit [Otel](https://opentelemetry.io/do/langsmith/observability-concepts/signals/traces/) traces. Tracing is toggled off by default, and can be enabled for all LangSmith services with the following in your `langsmith_config.yaml` (or equivalent) file:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
config:
  tracing:
    enabled: true
    endpoint: "<your_collector_endpoint>"
    useTls: true # / false
    env: "ls_self_hosted" # This value will be set as an "env" attribute in your spans
    exporter: "http" # must be either http or grpc
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/export-backend.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
