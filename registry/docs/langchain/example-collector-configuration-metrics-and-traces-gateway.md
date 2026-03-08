# Example collector configuration: Metrics and traces Gateway

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mode: deployment
image: otel/opentelemetry-collector-contrib
config:
  receivers:
    prometheus:
      config:
        scrape_configs:
          - job_name: langsmith-services
            metrics_path: /metrics
            scrape_interval: 15s
            # Only scrape endpoints in the LangSmith namespace
            kubernetes_sd_configs:
              - role: endpoints
                namespaces:
                  names: [<langsmith-namespace>]
            relabel_configs:
              # Only scrape services with the name langsmith-.*
              - source_labels: [__meta_kubernetes_service_name]
                regex: "langsmith-.*"
                action: keep
              # Only scrape ports with the following names
              - source_labels: [__meta_kubernetes_endpoint_port_name]
                regex: "(backend|platform|playground|redis-metrics|postgres-metrics|metrics)"
                action: keep
              # Promote useful metadata into regular labels
              - source_labels: [__meta_kubernetes_service_name]
                target_label: k8s_service
              - source_labels: [__meta_kubernetes_pod_name]
                target_label: k8s_pod
              # Replace the default "host:port" as Prom's instance label
              - source_labels: [__address__]
                target_label: instance
    otlp:
      protocols:
        grpc:
          endpoint: 0.0.0.0:4317
        http:
          endpoint: 0.0.0.0:4318
  processors:
    batch:
      send_batch_size: 8192
      timeout: 10s
    memory_limiter:
      check_interval: 1m
      limit_percentage: 90
      spike_limit_percentage: 80
  exporters:
    otlphttp/metrics:
      endpoint: <metrics_endpoint>
    otlphttp/traces:
      endpoint: <traces_endpoint>
  service:
    pipelines:
      metrics/langsmith:
        receivers: [prometheus]
        processors: [batch, memory_limiter]
        exporters: [otlphttp/metrics]
      traces/langsmith:
        receivers: [otlp]
        processors: [batch, memory_limiter]
        exporters: [otlphttp/traces]
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/langsmith-collector.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
