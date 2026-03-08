# Experiment configuration

Source: https://docs.langchain.com/langsmith/experiment-configuration

LangSmith supports several configuration options for experiments:

- [Repetitions](#repetitions)
- [Concurrency](#concurrency)
- [Caching](#caching)

### Repetitions

*Repetitions* run an experiment multiple times to account for LLM output variability. Since LLM outputs are non-deterministic, multiple repetitions provide a more accurate performance estimate.

Configure repetitions by passing the `num_repetitions` argument to `evaluate` / `aevaluate` ([Python](https://docs.smith.langchain.com/reference/python/evaluation/langsmith.evaluation._runner.evaluate), [TypeScript](https://docs.smith.langchain.com/reference/js/interfaces/evaluation.EvaluateOptions#numrepetitions)). Each repetition re-runs both the target function and all evaluators.

Learn more in the [repetitions how-to guide](/langsmith/repetition).

### Concurrency

*Concurrency* controls how many examples run simultaneously during an experiment. Configure it by passing the `max_concurrency` argument to `evaluate` / `aevaluate`. The semantics differ between the two functions:

#### `evaluate`

The `max_concurrency` argument specifies the maximum number of concurrent threads for running both the target function and evaluators.

#### `aevaluate`

The `max_concurrency` argument uses a semaphore to limit concurrent tasks. `aevaluate` creates a task for each example, where each task runs the target function and all evaluators for that example. The `max_concurrency` argument specifies the maximum number of concurrent examples to process.

### Caching

*Caching* stores API call results to disk to speed up future experiments. Set the `LANGSMITH_TEST_CACHE` environment variable to a valid folder path with write access. Future experiments that make identical API calls will reuse cached results instead of making new requests.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/experiment-configuration.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Export LangSmith telemetry to your observability backend

Source: https://docs.langchain.com/langsmith/export-backend

**This section is only applicable for Kubernetes deployments.**

Self-Hosted LangSmith instances produce telemetry data in the form of logs, metrics and traces. This section will show you how to access and export that data to an observability collector or backend.

This section assumes that you have monitoring infrastructure set up already, or you will set up this infrastructure and want to know how to configure LangSmith to collect data from it.

Infrastructure refers to:

- Collectors, such as [OpenTelemetry](https://opentelemetry.io/docs/collector/), [FluentBit](https://docs.fluentbit.io/manual) or [Prometheus](https://prometheus.io/).
- Observability backends, such as [Datadog](https://www.datadoghq.com/) or the [Grafana](https://grafana.com/) ecosystem.

# Logs: [OTel example](/langsmith/langsmith-collector#logs)

All services that are part of the LangSmith self-hosted deployment write logs to their node's filesystem and to stdout. In order to access these logs, you need to set up your collector to read from either the filesystem or stdout. Most popular collectors support reading logs from filesystems.

- **OpenTelemetry**: [File Log Receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver)
- **FluentBit**: [Tail Input](https://docs.fluentbit.io/manual/pipeline/inputs/tail)
- **Datadog**: [Kubernetes Log Collection](https://docs.datadoghq.com/containers/kubernetes/log/?tab=datadogoperator)
