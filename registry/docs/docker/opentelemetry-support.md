When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# OpenTelemetry support

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

Both Buildx and BuildKit support [OpenTelemetry](https://opentelemetry.io/).

To capture the trace to [Jaeger](https://github.com/jaegertracing/jaeger), set `JAEGER_TRACE` environment variable to the collection address using a `driver-opt`.

First create a Jaeger container:

```console
$ docker run -d --name jaeger -p "6831:6831/udp" -p "16686:16686" --restart unless-stopped jaegertracing/all-in-one
```

Then [create a `docker-container` builder](https://docs.docker.com/build/builders/drivers/docker-container/) that will use the Jaeger instance via the `JAEGER_TRACE` environment variable:

```console
$ docker buildx create --use \
  --name mybuilder \
  --driver docker-container \
  --driver-opt "network=host" \
  --driver-opt "env.JAEGER_TRACE=localhost:6831"
```

Boot and [inspect `mybuilder`](/reference/cli/docker/buildx/inspect/):

```console
$ docker buildx inspect --bootstrap
```

Buildx commands should be traced at `http://127.0.0.1:16686/`:

![OpenTelemetry Buildx Bake](https://docs.docker.com/build/images/opentelemetry.png)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/debug/opentelemetry.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fdebug%2fopentelemetry%2f\&labels=status%2Ftriage)
