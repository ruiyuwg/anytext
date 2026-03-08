Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Building with Docker Build Cloud

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

To build using Docker Build Cloud, invoke a build command and specify the name of the builder using the `--builder` flag.

```console
$ docker buildx build --builder cloud-<ORG>-<BUILDER_NAME> --tag <IMAGE> .
```

## [Use by default](#use-by-default)

If you want to use Docker Build Cloud without having to specify the `--builder` flag each time, you can set it as the default builder.

CLI Docker Desktop

Run the following command:

```console
$ docker buildx use cloud-<ORG>-<BUILDER_NAME> --global
```

1. Open the Docker Desktop settings and navigate to the **Builders** tab.

2. Find the cloud builder under **Available builders**.

3. Open the drop-down menu and select **Use**.

   ![Selecting the cloud builder as default using the Docker Desktop GUI](/build/images/set-default-builder-gui.webp)

Changing your default builder with `docker buildx use` only changes the default builder for the `docker buildx build` command. The `docker build` command still uses the `default` builder, unless you specify the `--builder` flag explicitly.

If you use build scripts, such as `make`, that use the `docker build` command, we recommend updating your build commands to `docker buildx build`. Alternatively, you can set the [`BUILDX_BUILDER` environment variable](https://docs.docker.com/build/building/variables/#buildx_builder) to specify which builder `docker build` should use.

## [Use with Docker Compose](#use-with-docker-compose)

To build with Docker Build Cloud using `docker compose build`, first set the cloud builder as your selected builder, then run your build.

> Note
>
> Make sure you're using a supported version of Docker Compose, see [Prerequisites](https://docs.docker.com/build-cloud/setup/#prerequisites).

```console
$ docker buildx use cloud-<ORG>-<BUILDER_NAME>
$ docker compose build
```

In addition to `docker buildx use`, you can also use the `docker compose build --builder` flag or the [`BUILDX_BUILDER` environment variable](https://docs.docker.com/build/building/variables/#buildx_builder) to select the cloud builder.

## [Loading build results](#loading-build-results)

Building with `--tag` loads the build result to the local image store automatically when the build finishes. To build without a tag and load the result, you must pass the `--load` flag.

Loading the build result for multi-platform images is not supported. Use the `docker buildx build --push` flag when building multi-platform images to push the output to a registry.

```console
$ docker buildx build --builder cloud-<ORG>-<BUILDER_NAME> \
  --platform linux/amd64,linux/arm64 \
  --tag <IMAGE> \
  --push .
```

If you want to build with a tag, but you don't want to load the results to your local image store, you can export the build results to the build cache only:

```console
$ docker buildx build --builder cloud-<ORG>-<BUILDER_NAME> \
  --platform linux/amd64,linux/arm64 \
  --tag <IMAGE> \
  --output type=cacheonly .
```

## [Multi-platform builds](#multi-platform-builds)

To run multi-platform builds, you must specify all of the platforms that you want to build for using the `--platform` flag.

```console
$ docker buildx build --builder cloud-<ORG>-<BUILDER_NAME> \
  --platform linux/amd64,linux/arm64 \
  --tag <IMAGE> \
  --push .
```

If you don't specify the platform, the cloud builder automatically builds for the architecture matching your local environment.

To learn more about building for multiple platforms, refer to [Multi-platform builds](/build/building/multi-platform/).

## [Cloud builds in Docker Desktop](#cloud-builds-in-docker-desktop)

The Docker Desktop [Builds view](/desktop/use-desktop/builds/) works with Docker Build Cloud out of the box. This view can show information about not only your own builds, but also builds initiated by your team members using the same builder.

Teams using a shared builder get access to information such as:

- Ongoing and completed builds
- Build configuration, statistics, dependencies, and results
- Build source (Dockerfile)
- Build logs and errors

This lets you and your team work collaboratively on troubleshooting and improving build speeds, without having to send build logs and benchmarks back and forth between each other.

## [Use secrets with Docker Build Cloud](#use-secrets-with-docker-build-cloud)

To use build secrets with Docker Build Cloud, such as authentication credentials or tokens, use the `--secret` and `--ssh` CLI flags for the `docker buildx` command. The traffic is encrypted and secrets are never stored in the build cache.

> Warning
>
> If you're misusing build arguments to pass credentials, authentication tokens, or other secrets, you should refactor your build to pass the secrets using [secret mounts](/reference/cli/docker/buildx/build/#secret) instead. Build arguments are stored in the cache and their values are exposed through attestations. Secret mounts don't leak outside of the build and are never included in attestations.

For more information, refer to:

- [`docker buildx build --secret`](/reference/cli/docker/buildx/build/#secret)
- [`docker buildx build --ssh`](/reference/cli/docker/buildx/build/#ssh)

## [Managing build cache](#managing-build-cache)

You don't need to manage Docker Build Cloud cache manually. The system manages it for you through [garbage collection](/build/cache/garbage-collection/).

Old cache is automatically removed if you hit your storage limit. You can check your current cache state using the [`docker buildx du` command](/reference/cli/docker/buildx/du/).

To clear the builder's cache manually, use the [`docker buildx prune` command](/reference/cli/docker/buildx/prune/). This works like pruning the cache for any other builder.

> Warning
>
> Pruning a cloud builder's cache also removes the cache for other team members using the same builder.

## [Unset Docker Build Cloud as the default builder](#unset-docker-build-cloud-as-the-default-builder)

If you've set a cloud builder as the default builder and want to revert to the default `docker` builder, run the following command:

```console
$ docker context use default
```

This doesn't remove the builder from your system. It only changes the builder that's automatically selected to run your builds.

## [Registries on internal networks](#registries-on-internal-networks)

It is possible to use Docker Build Cloud with a [private registry](https://docs.docker.com/build-cloud/builder-settings/#private-resource-access) or registry mirror on an internal network.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build-cloud/usage.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild-cloud%2fusage%2f\&labels=status%2Ftriage)

Table of contents
