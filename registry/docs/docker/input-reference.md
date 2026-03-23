When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Input reference

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

When Buildx evaluates policies, it provides information about build inputs through the `input` object. The structure of `input` depends on the type of resource your Dockerfile references.

## [Input types](#input-types)

Build inputs correspond to Dockerfile instructions:

Dockerfile instruction

Input type

Access pattern

`FROM alpine:latest`

Image

`input.image`

`COPY --from=builder /app /app`

Image

`input.image`

`ADD https://example.com/file.tar.gz /`

HTTP

`input.http`

`ADD git@github.com:user/repo.git /src`

Git

`input.git`

Build context (`.`)

Local

`input.local`

Each input type has specific fields available for policy evaluation.

## [HTTP inputs](#http-inputs)

HTTP inputs represent files downloaded over HTTP or HTTPS using the `ADD` instruction.

### [Example Dockerfile](#example-dockerfile)

```dockerfile
FROM alpine
ADD --checksum=sha256:abc123... https://example.com/app.tar.gz /app.tar.gz
```

### [Available fields](#available-fields)

#### [`input.http.url`](#inputhttpurl)

The complete URL of the resource.

```rego
allow if {
    input.http.url == "https://example.com/app.tar.gz"
}
```

#### [`input.http.schema`](#inputhttpschema)

The URL scheme (`http` or `https`).

```rego
# Require HTTPS for all downloads
allow if {
    input.http.schema == "https"
}
```

#### [`input.http.host`](#inputhttphost)

The hostname from the URL.

```rego
# Allow downloads from approved domains
allow if {
    input.http.host == "cdn.example.com"
}
```

#### [`input.http.path`](#inputhttppath)

The path component of the URL.

```rego
allow if {
    startswith(input.http.path, "/releases/")
}
```

#### [`input.http.checksum`](#inputhttpchecksum)

The checksum specified with `ADD --checksum=...`, if present. Empty string if no checksum was provided.

```rego
# Require checksums for all downloads
allow if {
    input.http.checksum != ""
}
```

#### [`input.http.hasAuth`](#inputhttphasauth)

Boolean indicating if the request includes authentication (HTTP basic auth or bearer token).

```rego
# Require authentication for internal servers
allow if {
    input.http.host == "internal.company.com"
    input.http.hasAuth
}
```

## [Image inputs](#image-inputs)

Image inputs represent container images from `FROM` instructions or `COPY --from` references.

### [Example Dockerfile](#example-dockerfile-1)

```dockerfile
FROM alpine:3.19@sha256:abc123...
COPY --from=builder:latest /app /app
```

### [Available fields](#available-fields-1)

#### [`input.image.ref`](#inputimageref)

The complete image reference as written in the Dockerfile.

```rego
allow if {
    input.image.ref == "alpine:3.19@sha256:abc123..."
}
```

#### [`input.image.host`](#inputimagehost)

The registry hostname. Docker Hub images use `"docker.io"`.

```rego
# Only allow Docker Hub images
allow if {
    input.image.host == "docker.io"
}

# Only allow images from GitHub Container Registry
allow if {
    input.image.host == "ghcr.io"
}
```

#### [`input.image.repo`](#inputimagerepo)

The repository name without the registry host.

```rego
allow if {
    input.image.repo == "library/alpine"
}
```

#### [`input.image.fullRepo`](#inputimagefullrepo)

The full repository path including registry host.

```rego
allow if {
    input.image.fullRepo == "docker.io/library/alpine"
}
```

#### [`input.image.tag`](#inputimagetag)

The tag portion of the reference. Empty if using a digest reference.

```rego
# Allow only specific tags
allow if {
    input.image.tag == "3.19"
}
```

#### [`input.image.isCanonical`](#inputimageiscanonical)

Boolean indicating if the reference uses a digest (`@sha256:...`).

```rego
# Require digest references
allow if {
    input.image.isCanonical
}
```

#### [`input.image.checksum`](#inputimagechecksum)

The SHA256 digest of the image manifest.

```rego
allow if {
    input.image.checksum == "sha256:abc123..."
}
```

#### [`input.image.platform`](#inputimageplatform)

The target platform for multi-platform images.

```rego
allow if {
    input.image.platform == "linux/amd64"
}
```

#### [`input.image.os`](#inputimageos)

The operating system from the image configuration.

```rego
allow if {
    input.image.os == "linux"
}
```

#### [`input.image.arch`](#inputimagearch)

The CPU architecture from the image configuration.

```rego
allow if {
    input.image.arch == "amd64"
}
```

#### [`input.image.hasProvenance`](#inputimagehasprovenance)

Boolean indicating if the image has provenance attestations.

```rego
# Require provenance for production images
allow if {
    input.image.hasProvenance
}
```

#### [`input.image.labels`](#inputimagelabels)

A map of image labels from the image configuration.

```rego
# Check for specific labels
allow if {
    input.image.labels["org.opencontainers.image.vendor"] == "Example Corp"
}
```

#### [`input.image.signatures`](#inputimagesignatures)

Array of attestation signatures. Each signature in the array has the following fields:

- `kind`: Signature kind (e.g., `"docker-github-builder"`, `"self-signed"`)
- `type`: Signature type (e.g., `"bundle-v0.3"`, `"simplesigning-v1"`)
- `timestamps`: Trusted timestamps from transparency logs
- `dockerReference`: Docker image reference
- `isDHI`: Boolean indicating if this is a Docker Hardened Image
- `signer`: Sigstore certificate details

```rego
# Require at least one signature
allow if {
    count(input.image.signatures) > 0
}
```

For Sigstore signatures, the `signer` object provides detailed certificate information from the signing workflow:

- `certificateIssuer`: Certificate issuer
- `subjectAlternativeName`: Subject alternative name from certificate
- `buildSignerURI`: URI of the build signer
- `buildSignerDigest`: Digest of the build signer
- `runnerEnvironment`: CI/CD runner environment
- `sourceRepositoryURI`: Source repository URL
- `sourceRepositoryDigest`: Source repository digest
- `sourceRepositoryRef`: Source repository ref (branch/tag)
- `sourceRepositoryIdentifier`: Source repository identifier
- `sourceRepositoryOwnerURI`: Repository owner URI
- `buildConfigURI`: Build configuration URI
- `buildTrigger`: What triggered the build
- `runInvocationURI`: CI/CD run invocation URI

```rego
# Require signatures from GitHub Actions
allow if {
    some sig in input.image.signatures
    sig.signer.runnerEnvironment == "github-hosted"
    startswith(sig.signer.sourceRepositoryURI, "https://github.com/myorg/")
}
```

## [Git inputs](#git-inputs)

Git inputs represent Git repositories referenced in `ADD` instructions or used as build context.

### [Example Dockerfile](#example-dockerfile-2)

```dockerfile
ADD git@github.com:moby/buildkit.git#v0.12.0 /src
```

### [Available fields](#available-fields-2)

#### [`input.git.schema`](#inputgitschema)

The URL scheme (`https`, `http`, `git`, or `ssh`).

```rego
# Require HTTPS for Git clones
allow if {
    input.git.schema == "https"
}
```

#### [`input.git.host`](#inputgithost)

The Git host (e.g., `github.com`, `gitlab.com`).

```rego
allow if {
    input.git.host == "github.com"
}
```

#### [`input.git.remote`](#inputgitremote)

The complete Git URL.

```rego
allow if {
    input.git.remote == "https://github.com/moby/buildkit.git"
}
```

#### [`input.git.ref`](#inputgitref)

The Git reference.

```rego
allow if {
    input.git.ref == "refs/heads/master"
}
```

#### [`input.git.tagName`](#inputgittagname)

The tag name if the reference is a tag.

```rego
# Only allow version tags
allow if {
    regex.match(`^v[0-9]+\.[0-9]+\.[0-9]+$`, input.git.tagName)
}
```

#### [`input.git.branch`](#inputgitbranch)

The branch name if the reference is a branch.

```rego
allow if {
    input.git.branch == "main"
}
```

#### [`input.git.subDir`](#inputgitsubdir)

The subdirectory path within the repository, if specified.

```rego
# Ensure clones are from the root
allow if {
    input.git.subDir == ""
}
```

#### [`input.git.isCommitRef`](#inputgitiscommitref)

Boolean indicating if the reference is a commit SHA (as opposed to a branch or tag name).

```rego
# Require commit SHAs for production
allow if {
    input.env.target == "production"
    input.git.isCommitRef
}
```

#### [`input.git.checksum`](#inputgitchecksum)

The checksum of the Git reference. For commit references and branches, this is the commit hash. For annotated tags, this is the tag object hash.

```rego
allow if {
    input.git.checksum == "abc123..."
}
```

#### [`input.git.commitChecksum`](#inputgitcommitchecksum)

The commit hash that the reference points to. For annotated tags, this differs from `checksum` (which is the tag object hash). For commit references and branches, this is the same as `checksum`.

```rego
allow if {
    input.git.commitChecksum == "abc123..."
}
```

#### [`input.git.isAnnotatedTag`](#inputgitisannotatedtag)

Boolean indicating if the reference is an annotated tag (as opposed to a lightweight tag).

```rego
# Require annotated tags
allow if {
    input.git.tagName != ""
    input.git.isAnnotatedTag
}
```

#### [`input.git.commit`](#inputgitcommit)

Object containing commit metadata:

- `author`: Author name, email, when
- `committer`: Committer name, email, when
- `message`: Commit message
- `pgpSignature`: PGP signature details if signed
- `sshSignature`: SSH signature details if signed

```rego
# Check commit author
allow if {
    input.git.commit.author.email == "maintainer@example.com"
}
```

#### [`input.git.tag`](#inputgittag)

Object containing tag metadata for annotated tags:

- `tagger`: Tagger name, email, when
- `message`: Tag message
- `pgpSignature`: PGP signature details if signed
- `sshSignature`: SSH signature details if signed

```rego
# Require signed tags
allow if {
    input.git.tag.pgpSignature != null
}
```

## [Local inputs](#local-inputs)

Local inputs represent the build context directory.

### [Available fields](#available-fields-3)

#### [`input.local.name`](#inputlocalname)

The name or path of the local context.

```rego
allow if {
    input.local.name == "."
}
```

Local inputs are typically less restricted than remote inputs, but you can still write policies to enforce context requirements.

## [Environment fields](#environment-fields)

The `input.env` object provides build configuration information set by user on invoking the build, not specific to a resource type.

### [Available fields](#available-fields-4)

#### [`input.env.filename`](#inputenvfilename)

The name of the Dockerfile being built.

```rego
# Stricter rules for production Dockerfile
allow if {
    input.env.filename == "Dockerfile"
    input.image.isCanonical
}

# Relaxed rules for development
allow if {
    input.env.filename == "Dockerfile.dev"
}
```

#### [`input.env.target`](#inputenvtarget)

The build target from multi-stage builds.

```rego
# Require signing only for release builds
allow if {
    input.env.target == "release"
    input.git.tagName != ""
    verify_git_signature(input.git.tag, "maintainer.asc")
}
```

#### [`input.env.args`](#inputenvargs)

Build arguments passed with `--build-arg`. Access specific arguments by key.

```rego
# Check build argument values
allow if {
    input.env.args.ENVIRONMENT == "production"
    input.image.hasProvenance
}
```

## [Next steps](#next-steps)

- See [Built-in functions](https://docs.docker.com/build/policies/built-ins/) for built-in helper functions to check and validate input properties
- Browse [Example policies](https://docs.docker.com/build/policies/examples/) for common patterns
- Read about [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) for advanced policy logic

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/policies/inputs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fpolicies%2finputs%2f\&labels=status%2Ftriage)

Table of contents
