When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# GitHub Actions cache

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

The GitHub Actions cache utilizes the [GitHub-provided Action's cache](https://github.com/actions/cache) or other cache services supporting the GitHub Actions cache protocol. This is the recommended cache to use inside your GitHub Actions workflows, as long as your use case falls within the [size and usage limits set by GitHub](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy).

This cache storage backend is not supported with the default `docker` driver. To use this feature, create a new builder using a different driver. See [Build drivers](https://docs.docker.com/build/builders/drivers/) for more information.

## [Synopsis](#synopsis)

```console
$ docker buildx build --push -t <registry>/<image> \
  --cache-to type=gha[,parameters...] \
  --cache-from type=gha[,parameters...] .
```

The following table describes the available CSV parameters that you can pass to `--cache-to` and `--cache-from`.

Name

Option

Type

Default

Description

`url`

`cache-to`,`cache-from`

String

`$ACTIONS_CACHE_URL` or `$ACTIONS_RESULTS_URL`

Cache server URL, see [authentication](#authentication). Ignored when `version=2`.

`url_v2`

`cache-to`,`cache-from`

String

`$ACTIONS_RESULTS_URL`

Cache v2 server URL, see [authentication](#authentication).

`token`

`cache-to`,`cache-from`

String

`$ACTIONS_RUNTIME_TOKEN`

Access token, see [authentication](#authentication).

`scope`

`cache-to`,`cache-from`

String

`buildkit`

Which scope cache object belongs to, see [scope](#scope)

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

`timeout`

`cache-to`,`cache-from`

String

`10m`

Max duration for importing or exporting cache before it's timed out.

`repository`

`cache-to`

String

GitHub repository used for cache storage.

`ghtoken`

`cache-to`

String

GitHub token required for accessing the GitHub API.

`version`

`cache-to`,`cache-from`

String

`1` unless `$ACTIONS_CACHE_SERVICE_V2` is set, then `2`

Selects GitHub Actions cache version, see [version](#version)

## [Authentication](#authentication)

If the `url`, `url_v2` or `token` parameters are left unspecified, the `gha` cache backend will fall back to using environment variables. If you invoke the `docker buildx` command manually from an inline step, then the variables must be manually exposed. Consider using the [`crazy-max/ghaction-github-runtime`](https://github.com/crazy-max/ghaction-github-runtime), GitHub Action as a helper for exposing the variables.

## [Scope](#scope)

Scope is a key used to identify the cache object. By default, it is set to `buildkit`. If you build multiple images, each build will overwrite the cache of the previous, leaving only the final cache.

To preserve the cache for multiple builds, you can specify this scope attribute with a specific name. In the following example, the cache is set to the image name, to ensure each image gets its own cache:

```console
$ docker buildx build --push -t <registry>/<image> \
  --cache-to type=gha,url=...,token=...,scope=image \
  --cache-from type=gha,url=...,token=...,scope=image .
$ docker buildx build --push -t <registry>/<image2> \
  --cache-to type=gha,url=...,token=...,scope=image2 \
  --cache-from type=gha,url=...,token=...,scope=image2 .
```

GitHub's [cache access restrictions](https://docs.github.com/en/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache), still apply. Only the cache for the current branch, the base branch and the default branch is accessible by a workflow.

## [Version](#version)

If you don’t set `version` explicitly, the default is v1. However, if the environment variable `$ACTIONS_CACHE_SERVICE_V2` is set to a value interpreted as `true` ( `1`, `true`, `yes`), then v2 is used automatically.

Only one URL is relevant at a time:

- With v1, use `url` (defaults to `$ACTIONS_CACHE_URL`).
- With v2, use `url_v2` (defaults to `$ACTIONS_RESULTS_URL`).

### [Using `docker/build-push-action`](#using-dockerbuild-push-action)

When using the [`docker/build-push-action`](https://github.com/docker/build-push-action), the `url` and `token` parameters are automatically populated. No need to manually specify them, or include any additional workarounds.

For example:

```yaml
- name: Build and push
  uses: docker/build-push-action@v7
  with:
    context: .
    push: true
    tags: "<registry>/<image>:latest"
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

## [Avoid GitHub Actions cache API throttling](#avoid-github-actions-cache-api-throttling)

GitHub's [usage limits and eviction policy](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy) causes stale cache entries to be removed after a certain period of time. By default, the `gha` cache backend uses the GitHub Actions cache API to check the status of cache entries.

The GitHub Actions cache API is subject to rate limiting if you make too many requests in a short period of time, which may happen as a result of cache lookups during a build using the `gha` cache backend.

```text
#31 exporting to GitHub Actions Cache
#31 preparing build cache for export
#31 preparing build cache for export 600.3s done
#31 ERROR: maximum timeout reached
------
 > exporting to GitHub Actions Cache:
------
ERROR: failed to solve: maximum timeout reached
make: *** [Makefile:35: release] Error 1
Error: Process completed with exit code 2.
```

To mitigate this issue, you can supply a GitHub token to BuildKit. This lets BuildKit utilize the standard GitHub API for checking cache keys, thereby reducing the number of requests made to the cache API.

To provide a GitHub token, you can use the `ghtoken` parameter, and a `repository` parameter to specify the repository to use for cache storage. The `ghtoken` parameter is a GitHub token with the `repo` scope, which is required to access the GitHub Actions cache API.

The `ghtoken` parameter is automatically set to the value of `secrets.GITHUB_TOKEN` when you build with the `docker/build-push-action` action. You can also set the `ghtoken` parameter manually using the `github-token` input, as shown in the following example:

```yaml
- name: Build and push
  uses: docker/build-push-action@v7
  with:
    context: .
    push: true
    tags: "<registry>/<image>:latest"
    cache-from: type=gha
    cache-to: type=gha,mode=max
    github-token: ${{ secrets.MY_CUSTOM_TOKEN }}
```

## [Further reading](#further-reading)

For an introduction to caching see [Docker build cache](https://docs.docker.com/build/cache/).

For more information on the `gha` cache backend, see the [BuildKit README](https://github.com/moby/buildkit#github-actions-cache-experimental).

For more information about using GitHub Actions with Docker, see [Introduction to GitHub Actions](https://docs.docker.com/build/ci/github-actions/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/cache/backends/gha.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fcache%2fbackends%2fgha%2f\&labels=status%2Ftriage)

Table of contents
