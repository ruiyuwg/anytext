Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# OCI and Docker exporters

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The `oci` exporter outputs the build result into an [OCI image layout](https://github.com/opencontainers/image-spec/blob/main/image-layout.md) tarball. The `docker` exporter behaves the same way, except it exports a Docker image layout instead.

The [`docker` driver](https://docs.docker.com/build/builders/drivers/docker/) doesn't support these exporters. You must use `docker-container` or some other driver if you want to generate these outputs.

## [Synopsis](#synopsis)

Build a container image using the `oci` and `docker` exporters:

```console
$ docker buildx build --output type=oci[,parameters] .
```

```console
$ docker buildx build --output type=docker[,parameters] .
```

The following table describes the available parameters:

Parameter

Type

Default

Description

`name`

String

Specify image name(s)

`dest`

String

Path

`tar`

`true`,`false`

`true`

Bundle the output into a tarball layout

`compression`

`uncompressed`,`gzip`,`estargz`,`zstd`

`gzip`

Compression type, see [compression](https://docs.docker.com/build/exporters/#compression)

`compression-level`

`0..22`

Compression level, see [compression](https://docs.docker.com/build/exporters/#compression)

`force-compression`

`true`,`false`

`false`

Forcefully apply compression, see [compression](https://docs.docker.com/build/exporters/#compression)

`oci-mediatypes`

`true`,`false`

Use OCI media types in exporter manifests. Defaults to `true` for `type=oci`, and `false` for `type=docker`. See [OCI Media types](https://docs.docker.com/build/exporters/#oci-media-types)

`annotation.<key>`

String

Attach an annotation with the respective `key` and `value` to the built image,see [annotations](#annotations)

`rewrite-timestamp`

`true`,`false`

`false`

Rewrite the file timestamps to the `SOURCE_DATE_EPOCH` value. See [build reproducibility](https://github.com/moby/buildkit/blob/master/docs/build-repro.md) for how to specify the `SOURCE_DATE_EPOCH` value.

## [Annotations](#annotations)

These exporters support adding OCI annotation using `annotation` parameter, followed by the annotation name using dot notation. The following example sets the `org.opencontainers.image.title` annotation:

```console
$ docker buildx build \
    --output "type=<type>,name=<registry>/<image>,annotation.org.opencontainers.image.title=<title>" .
```

For more information about annotations, see [BuildKit documentation](https://github.com/moby/buildkit/blob/master/docs/annotations.md).

## [Further reading](#further-reading)

For more information on the `oci` or `docker` exporters, see the [BuildKit README](https://github.com/moby/buildkit/blob/master/README.md#docker-tarball).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/exporters/oci-docker.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fexporters%2foci-docker%2f\&labels=status%2Ftriage)

Table of contents
