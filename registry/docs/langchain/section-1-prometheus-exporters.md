# Section 1: Prometheus exporters

Use this section if you would like to only deploy metrics exporters for the components in your self hosted deployment, which you can then scrape using your telemetry. If you would like a full observability stack deployed for you, go to the [End-to-End Deployment Section](/langsmith/observability-stack#prerequisites).

The helm chart provides a set of Prometheus exporters to expose metrics from [Redis](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-redis-exporter), [Postgres](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-postgres-exporter), [Nginx](https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-nginx-exporter), and [Kube state metrics](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-state-metrics).

1. Create a local file called `langsmith_obs_config.yaml`
2. Copy over the values from this [file](https://github.com/langchain-ai/helm/blob/main/charts/langsmith-observability/examples/metric-exporters-only.yaml) into `langsmith_obs_config.yaml`, making sure to modify the values to match your LangSmith deployment.
3. Find the latest version of the chart by running `helm search repo langchain/langsmith-observability --versions`.
4. Grab the latest version number, and run `helm install langsmith-observability langchain/langsmith-observability --values langsmith_obs_config.yaml --version <version> -n <namespace> --wait --debug`

This will allow you to scrape metrics at the following service endpoints:

- Postgres: `langsmith-observability-postgres-exporter:9187/metrics`
- Redis: `langsmith-observability-redis-exporter:9121/metrics`
- Nginx: `langsmith-observability-nginx-exporter:9113/metrics`
- KubeStateMetrics: `langsmith-observability-kube-state-metrics:8080/metrics`

You should see the following if the installation went through:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Release "langsmith-observability" has been installed. Happy Helming!NAME: langsmith-observabilityLAST DEPLOYED: Wed Jun 25 11:17:34 2025NAMESPACE: langsmith-observabilitySTATUS: deployedREVISION: 1
```

And if you run `kubectl get pods -n langsmith-observability`, you should see:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith-observability-kube-state-metrics-b58bb8db4-bm4g5        1/1     Running   0          2m22slangsmith-observability-nginx-exporter-6d686d9d4b-5qw9v           1/1     Running   0          2m22slangsmith-observability-postgres-exporter-67d5db5684-tffbm        1/1     Running   0          2m22slangsmith-observability-redis-exporter-846c4d65cb-vbtwd           1/1     Running   0          2m22s
```
