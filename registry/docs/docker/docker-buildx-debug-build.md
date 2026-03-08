Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx debug build

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Start a build

Usage

`docker buildx debug build [OPTIONS] PATH | URL | -`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker build` `docker builder build` `docker image build` `docker buildx b`

**Experimental**

**This command is experimental.**

Experimental features are intended for testing and feedback as their functionality or design may change between releases without warning or can be removed entirely in a future release.

## [Description](#description)

Start a build

## [Options](#options)

Option

Default

Description

`--add-host`

Add a custom host-to-IP mapping (format: `host:ip`)

`--allow`

Allow extra privileged entitlement (e.g., `network.host`, `security.insecure`, `device`)

`--annotation`

Add annotation to the image

`--attest`

Attestation parameters (format: `type=sbom,generator=image`)

`--build-arg`

Set build-time variables

`--build-context`

Additional build contexts (e.g., name=path)

`--cache-from`

External cache sources (e.g., `user/app:cache`, `type=local,src=path/to/dir`)

`--cache-to`

Cache export destinations (e.g., `user/app:cache`, `type=local,dest=path/to/dir`)

`--call`

`build`

Set method for evaluating build (`check`, `outline`, `targets`)

`--cgroup-parent`

Set the parent cgroup for the `RUN` instructions during build

`--check`

Shorthand for `--call=check`

`-f, --file`

Name of the Dockerfile (default: `PATH/Dockerfile`)

`--iidfile`

Write the image ID to a file

`--label`

Set metadata for an image

`--load`

Shorthand for `--output=type=docker`

`--metadata-file`

Write build result metadata to a file

`--network`

Set the networking mode for the `RUN` instructions during build

`--no-cache`

Do not use cache when building the image

`--no-cache-filter`

Do not cache specified stages

`-o, --output`

Output destination (format: `type=local,dest=path`)

`--platform`

Set target platform for build

`--policy`

Policy configuration (format: `filename=path[,filename=path][,reset=true|false][,disabled=true|false][,strict=true|false][,log-level=level]`)

`--progress`

`auto`

Set type of progress output (`auto`, `none`, `plain`, `quiet`, `rawjson`, `tty`). Use plain to show container output

`--provenance`

Shorthand for `--attest=type=provenance`

`--pull`

Always attempt to pull all referenced images

`--push`

Shorthand for `--output=type=registry,unpack=false`

`-q, --quiet`

Suppress the build output and print image ID on success

`--sbom`

Shorthand for `--attest=type=sbom`

`--secret`

Secret to expose to the build (format: `id=mysecret[,src=/local/secret]`)

`--shm-size`

Shared memory size for build containers

`--ssh`

SSH agent socket or keys to expose to the build (format: `default|<id>[=<socket>|<key>[,<key>]]`)

`-t, --tag`

Image identifier (format: `[registry/]repository[:tag]`)

`--target`

Set the target build stage to build

`--ulimit`

Ulimit options

Table of contents
