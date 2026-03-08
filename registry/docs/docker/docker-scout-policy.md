Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout policy

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Evaluate policies against an image and display the policy evaluation results (experimental)

Usage

`docker scout policy [IMAGE | REPO]`

**Experimental**

**This command is experimental.**

Experimental features are intended for testing and feedback as their functionality or design may change between releases without warning or can be removed entirely in a future release.

## [Description](#description)

The `docker scout policy` command evaluates policies against an image. The image analysis is uploaded to Docker Scout where policies get evaluated.

The policy evaluation results may take a few minutes to become available.

## [Options](#options)

Option

Default

Description

`-e, --exit-code`

Return exit code '2' if policies are not met, '0' otherwise

`--only-policy`

Comma separated list of policies to evaluate

`--org`

Namespace of the Docker organization

`-o, --output`

Write the report to a file

`--platform`

Platform of image to pull policy results from

`--to-env`

Name of the environment to compare to

`--to-latest`

Latest image processed to compare to

## [Examples](#examples)

### [Evaluate policies against an image and display the results](#evaluate-policies-against-an-image-and-display-the-results)

```console
$ docker scout policy dockerscoutpolicy/customers-api-service:0.0.1
```

### [Evaluate policies against an image for a specific organization](#evaluate-policies-against-an-image-for-a-specific-organization)

```console
$ docker scout policy dockerscoutpolicy/customers-api-service:0.0.1 --org dockerscoutpolicy
```

### [Evaluate policies against an image with a specific platform](#evaluate-policies-against-an-image-with-a-specific-platform)

```console
$ docker scout policy dockerscoutpolicy/customers-api-service:0.0.1 --platform linux/amd64
```

### [Compare policy results for a repository in a specific environment](#compare-policy-results-for-a-repository-in-a-specific-environment)

```console
$ docker scout policy dockerscoutpolicy/customers-api-service --to-env production
```

Table of contents
