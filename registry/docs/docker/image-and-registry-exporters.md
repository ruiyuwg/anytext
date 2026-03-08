Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Image and registry exporters

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The `image` exporter outputs the build result into a container image format. The `registry` exporter is identical, but it automatically pushes the result by setting `push=true`.

## [Synopsis](#synopsis)

Build a container image using the `image` and `registry` exporters:

```console
$ docker buildx build --output type=image[,parameters] .
$ docker buildx build --output type=registry[,parameters] .
```

The following table describes the available parameters that you can pass to `--output` for `type=image`:

Parameter

Type

Default

Description

`name`

String

Specify image name(s)

`push`

`true`,`false`

`false`

Push after creating the image.

`push-by-digest`

`true`,`false`

`false`

Push image without name.

`registry.insecure`

`true`,`false`

`false`

Allow pushing to insecure registry.

`dangling-name-prefix`

`<value>`

Name image with `prefix@<digest>`, used for anonymous images

`name-canonical`

`true`,`false`

Add additional canonical name `name@<digest>`

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

`rewrite-timestamp`

`true`,`false`

`false`

Rewrite the file timestamps to the `SOURCE_DATE_EPOCH` value. See [build reproducibility](https://github.com/moby/buildkit/blob/master/docs/build-repro.md) for how to specify the `SOURCE_DATE_EPOCH` value.

`oci-mediatypes`

`true`,`false`

`false`

Use OCI media types in exporter manifests, see [OCI Media types](https://docs.docker.com/build/exporters/#oci-media-types)

`oci-artifact`

`true`,`false`

`false`

Attestations are formatted as OCI artifacts, see [OCI Media types](https://docs.docker.com/build/exporters/#oci-media-types)

`unpack`

`true`,`false`

`false`

Unpack image after creation (for use with containerd)

`store`

`true`,`false`

`true`

Store the result images to the worker's (for example, containerd) image store, and ensures that the image has all blobs in the content store. Ignored if the worker doesn't have image store (when using OCI workers, for example).

`annotation.<key>`

String

Attach an annotation with the respective `key` and `value` to the built image,see [annotations](#annotations)

## [Annotations](#annotations)

These exporters support adding OCI annotation using `annotation` parameter, followed by the annotation name using dot notation. The following example sets the `org.opencontainers.image.title` annotation:

```console
$ docker buildx build \
    --output "type=<type>,name=<registry>/<image>,annotation.org.opencontainers.image.title=<title>" .
```

For more information about annotations, see [BuildKit documentation](https://github.com/moby/buildkit/blob/master/docs/annotations.md).

## [Further reading](#further-reading)

For more information on the `image` or `registry` exporters, see the [BuildKit README](https://github.com/moby/buildkit/blob/master/README.md#imageregistry).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/exporters/image-registry.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fexporters%2fimage-registry%2f\&labels=status%2Ftriage)

Table of contents
