Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout attestation get

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Get attestation for image

Usage

`docker scout attestation get OPTIONS IMAGE [DIGEST]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker scout attest get`

**Experimental**

**This command is experimental.**

Experimental features are intended for testing and feedback as their functionality or design may change between releases without warning or can be removed entirely in a future release.

## [Description](#description)

The docker scout attestation get command gets attestations for images.

## [Options](#options)

Option

Default

Description

`--key`

`https://registry.scout.docker.com/keyring/dhi/latest.pub`

Signature key to use for verification

`--org`

Namespace of the Docker organization

`-o, --output`

Write the report to a file

`--platform`

Platform of image to analyze

`--predicate`

Get in-toto predicate only dropping the subject

`--predicate-type`

Predicate-type for attestation

`--ref`

Reference to use if the provided tarball contains multiple references.\
Can only be used with archive

`--skip-tlog`

Skip signature verification against public transaction log

`--verify`

Verify the signature on the attestation

Table of contents
