When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Lab: Fine-Tuning Local Models](https://docs.docker.com/guides/lab-fine-tuning/)

Hands-on lab: Fine-tune, validate, and share custom AI models using Docker Offload, Unsloth, and Docker Model Runner.

AI Labs

20 minutes

Resources:

- [Docker Model Runner docs](/ai/model-runner/)
- [Labspace repository](https://github.com/dockersamples/labspace-fine-tuning)

[« Back to all guides](/guides/)

# Lab: Fine-Tuning Local Models

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This lab provides a hands-on walkthrough of fine-tuning AI models using Docker Offload, Docker Model Runner, and Unsloth. Learn how to customize models for your specific use case, validate the results, and share them via Docker Hub.

## [What you'll learn](#what-youll-learn)

- Use Docker Offload to fine-tune a model with GPU acceleration
- Package and share the fine-tuned model on Docker Hub
- Run the custom model with Docker Model Runner
- Understand the end-to-end workflow from training to deployment

## [Modules](#modules)

#

Module

Description

1

Introduction

Overview of fine-tuning concepts and the Docker AI stack

2

Fine-Tuning with Docker Offload

Run fine-tuning using Unsloth and Docker Offload

3

Validate and Publish

Test the fine-tuned model and publish to Docker Hub

4

Conclusion

Summary, key takeaways, and next steps

## [Prerequisites](#prerequisites)

- Docker Desktop with Docker Offload enabled
- GPU access with Docker Offload cloud resources

## [Launch the lab](#launch-the-lab)

Ensure you have Docker Offload running, then start the labspace:

```console
$ docker compose -f oci://dockersamples/labspace-fine-tuning up -d
```

Then open your browser to <http://localhost:3030>.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/lab-fine-tuning.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2flab-fine-tuning%2f\&labels=status%2Ftriage)

Table of contents
