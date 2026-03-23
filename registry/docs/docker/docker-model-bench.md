When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model bench

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Benchmark a model's performance at different concurrency levels

Usage

`docker model bench MODEL`

## [Description](#description)

Benchmark a model's performance showing tokens per second at different concurrency levels.

This command runs a series of benchmarks with 1, 2, 4, and 8 concurrent requests by default, measuring the tokens per second (TPS) that the model can generate.

## [Options](#options)

Option

Default

Description

`--concurrency`

`[1,2,4,8]`

Concurrency levels to test

`--duration`

`30s`

Duration to run each concurrency test

`--json`

Output results in JSON format

`--prompt`

`Write a comprehensive 100 word summary on whales and their impact on society.`

Prompt to use for benchmarking

`--timeout`

`5m0s`

Timeout for each individual request

Table of contents
