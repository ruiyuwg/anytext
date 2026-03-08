Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker image save

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Save one or more images to a tar archive (streamed to STDOUT by default)

Usage

`docker image save [OPTIONS] IMAGE [IMAGE...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker save`

## [Description](#description)

Produces a tarred repository to the standard output stream. Contains all parent layers, and all tags + versions, or specified `repo:tag`, for each argument provided.

## [Options](#options)

Option

Default

Description

`-o, --output`

Write to a file, instead of STDOUT

[`--platform`](#platform)

API 1.48+ Save only the given platform(s). Formatted as a comma-separated list of `os[/arch[/variant]]` (e.g., `linux/amd64,linux/arm64/v8`)

## [Examples](#examples)

### [Create a backup that can then be used with `docker load`.](#create-a-backup-that-can-then-be-used-with-docker-load)

```console
$ docker save busybox > busybox.tar

$ ls -sh busybox.tar

2.7M busybox.tar

$ docker save --output busybox.tar busybox

$ ls -sh busybox.tar

2.7M busybox.tar

$ docker save -o fedora-all.tar fedora

$ docker save -o fedora-latest.tar fedora:latest
```

### [Save an image to a tar.gz file using gzip](#save-an-image-to-a-targz-file-using-gzip)

You can use gzip to save the image file and make the backup smaller.

```console
$ docker save myimage:latest | gzip > myimage_latest.tar.gz
```

### [Cherry-pick particular tags](#cherry-pick-particular-tags)

You can even cherry-pick particular tags of an image repository.

```console
$ docker save -o ubuntu.tar ubuntu:lucid ubuntu:saucy
```

### [Save a specific platform (--platform)](#platform)

The `--platform` option allows you to specify which platform variant of the image to save. By default, `docker save` saves all platform variants that are present in the daemon's image store. Use the `--platform` option to specify which platform variant of the image to save. An error is produced if the given platform is not present in the local image store.

The platform option takes the `os[/arch[/variant]]` format; for example, `linux/amd64` or `linux/arm64/v8`. Architecture and variant are optional, and default to the daemon's native architecture if omitted.

The following example pulls the RISC-V variant of the `alpine:latest` image and saves it to a tar archive.

```console
$ docker pull --platform=linux/riscv64 alpine:latest
latest: Pulling from library/alpine
8c4a05189a5f: Download complete
Digest: sha256:beefdbd8a1da6d2915566fde36db9db0b524eb737fc57cd1367effd16dc0d06d
Status: Downloaded newer image for alpine:latest
docker.io/library/alpine:latest

$ docker image save --platform=linux/riscv64 -o alpine-riscv.tar alpine:latest

$ ls -lh image.tar
-rw-------  1 thajeztah  staff   3.9M Oct  7 11:06 alpine-riscv.tar
```

The following example attempts to save a platform variant of `alpine:latest` that doesn't exist in the local image store, resulting in an error.

```console
$ docker image ls --tree
IMAGE                   ID             DISK USAGE   CONTENT SIZE   IN USE
alpine:latest           beefdbd8a1da       10.6MB         3.37MB
├─ linux/riscv64        80cde017a105       10.6MB         3.37MB
├─ linux/amd64          33735bd63cf8           0B             0B
├─ linux/arm/v6         50f635c8b04d           0B             0B
├─ linux/arm/v7         f2f82d424957           0B             0B
├─ linux/arm64/v8       9cee2b382fe2           0B             0B
├─ linux/386            b3e87f642f5c           0B             0B
├─ linux/ppc64le        c7a6800e3dc5           0B             0B
└─ linux/s390x          2b5b26e09ca2           0B             0B

$ docker image save --platform=linux/s390x -o alpine-s390x.tar alpine:latest
Error response from daemon: no suitable export target found for platform linux/s390x
```

Table of contents
