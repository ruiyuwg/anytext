Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker driver

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The Buildx Docker driver is the default driver. It uses the BuildKit server components built directly into the Docker Engine. The Docker driver requires no configuration.

Unlike the other drivers, builders using the Docker driver can't be manually created. They're only created automatically from the Docker context.

Images built with the Docker driver are automatically loaded to the local image store.

## [Synopsis](#synopsis)

```console
# The Docker driver is used by buildx by default
docker buildx build .
```

It's not possible to configure which BuildKit version to use, or to pass any additional BuildKit parameters to a builder using the Docker driver. The BuildKit version and parameters are preset by the Docker Engine internally.

If you need additional configuration and flexibility, consider using the [Docker container driver](https://docs.docker.com/build/builders/drivers/docker-container/).

## [Further reading](#further-reading)

For more information on the Docker driver, see the [buildx reference](/reference/cli/docker/buildx/create/#driver).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/builders/drivers/docker.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fbuilders%2fdrivers%2fdocker%2f\&labels=status%2Ftriage)

Table of contents
