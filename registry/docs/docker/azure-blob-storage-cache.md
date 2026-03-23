When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Azure Blob Storage cache

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

The `azblob` cache store uploads your resulting build cache to [Azure's blob storage service](https://azure.microsoft.com/en-us/services/storage/blobs/).

This cache storage backend is not supported with the default `docker` driver. To use this feature, create a new builder using a different driver. See [Build drivers](https://docs.docker.com/build/builders/drivers/) for more information.

## [Synopsis](#synopsis)

```console
$ docker buildx build --push -t <registry>/<image> \
  --cache-to type=azblob,name=<cache-image>[,parameters...] \
  --cache-from type=azblob,name=<cache-image>[,parameters...] .
```

The following table describes the available CSV parameters that you can pass to `--cache-to` and `--cache-from`.

Name

Option

Type

Default

Description

`name`

`cache-to`,`cache-from`

String

Required. The name of the cache image.

`account_url`

`cache-to`,`cache-from`

String

Base URL of the storage account.

`secret_access_key`

`cache-to`,`cache-from`

String

Blob storage account key, see [authentication](#authentication).

`mode`

`cache-to`

`min`,`max`

`min`

Cache layers to export, see [cache mode](https://docs.docker.com/build/cache/backends/#cache-mode).

`ignore-error`

`cache-to`

Boolean

`false`

Ignore errors caused by failed cache exports.

## [Authentication](#authentication)

The `secret_access_key`, if left unspecified, is read from environment variables on the BuildKit server following the scheme for the [Azure Go SDK](https://docs.microsoft.com/en-us/azure/developer/go/azure-sdk-authentication). The environment variables are read from the server, not the Buildx client.

## [Further reading](#further-reading)

For an introduction to caching see [Docker build cache](https://docs.docker.com/build/cache/).

For more information on the `azblob` cache backend, see the [BuildKit README](https://github.com/moby/buildkit#azure-blob-storage-cache-experimental).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/cache/backends/azblob.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fcache%2fbackends%2fazblob%2f\&labels=status%2Ftriage)

Table of contents
