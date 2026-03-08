Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Gordon use cases and examples

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Beta

Requires: Docker Desktop [4.61.0](https://docs.docker.com/desktop/release-notes/#4610) or later

Gordon handles Docker workflows through natural conversation. This page shows example prompts for the most common use cases.

## [Debug and troubleshoot](#debug-and-troubleshoot)

Fix broken containers, diagnose build failures, and resolve issues.

```console
# Diagnose container crashes
$ docker ai "why did my postgres container crash?"

# Debug build failures
$ docker ai "my build is failing at the pip install step, what's wrong?"

# Fix networking issues
$ docker ai "my web container can't reach my database container"

# Investigate performance problems
$ docker ai "my container is using too much memory, help me investigate"
```

## [Build and containerize](#build-and-containerize)

Create Docker assets for applications and migrate to hardened images.

```console
# Create Dockerfile from scratch
$ docker ai "create a Dockerfile for my Node.js application"

# Generate compose file
$ docker ai "create a docker-compose.yml for my application stack"

# Migrate to Docker Hardened Images
$ docker ai "migrate my Dockerfile to use Docker Hardened Images"
```

## [Execute operations](#execute-operations)

Run Docker commands to manage containers, images, and resources.

```console
# Start containers with configuration
$ docker ai "run a redis container with persistence"

# Build and tag images
$ docker ai "build my Dockerfile and tag it for production"

# Clean up resources
$ docker ai "clean up all unused Docker resources"
```

## [Develop and optimize](#develop-and-optimize)

Improve Dockerfiles and configure secure, efficient development environments.

```console
# Optimize existing Dockerfile
$ docker ai "rate my Dockerfile and suggest improvements"

# Add security improvements
$ docker ai "make my Dockerfile more secure"

# Configure development workflow
$ docker ai "set up my container for development with hot reload"
```

## [Manage resources](#manage-resources)

Inspect containers, images, and resource usage.

```console
# Check container status
$ docker ai "show me all my containers and their status"

# Analyze disk usage
$ docker ai "how much disk space is Docker using?"

# Review image details
$ docker ai "list my images sorted by size"
```

## [Learn Docker](#learn-docker)

Understand concepts and commands in the context of your projects.

```console
# Explain Docker concepts
$ docker ai "explain how Docker networking works"

# Understand commands
$ docker ai "what's the difference between COPY and ADD in Dockerfile?"

# Get troubleshooting guidance
$ docker ai "how do I debug a container that exits immediately?"
```

## [Writing effective prompts](#writing-effective-prompts)

Be specific:

- Include relevant context: "my postgres container" not "the database"
- State your goal: "make my build faster" not "optimize"
- Include error messages when debugging

Gordon works best when you describe what you want to achieve rather than how to do it.

### [Working directory context](#working-directory-context)

When using `docker ai` in the CLI, Gordon uses your current working directory as the default context for file operations. Change to your project directory before starting Gordon to ensure it has access to the right files:

```console
$ cd ~/my-project
$ docker ai "review my Dockerfile"
```

You can also override the working directory with the `-C` flag. See [Using Gordon via CLI](https://docs.docker.com/ai/gordon/how-to/cli/#working-directory) for details.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/gordon/use-cases.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fgordon%2fuse-cases%2f\&labels=status%2Ftriage)

Table of contents
