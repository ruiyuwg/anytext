When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Share built image between jobs with GitHub Actions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

As each job is isolated in its own runner, you can't use your built image between jobs, except if you're using [self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) or [Docker Build Cloud](/build-cloud). However, you can [pass data between jobs](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#passing-data-between-jobs-in-a-workflow) in a workflow using the [actions/upload-artifact](https://github.com/actions/upload-artifact) and [actions/download-artifact](https://github.com/actions/download-artifact) actions:

```yaml
name: ci

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Build and export
        uses: docker/build-push-action@v7
        with:
          tags: myimage:latest
          outputs: type=docker,dest=${{ runner.temp }}/myimage.tar

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: myimage
          path: ${{ runner.temp }}/myimage.tar

  use:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: myimage
          path: ${{ runner.temp }}

      - name: Load image
        run: |
          docker load --input ${{ runner.temp }}/myimage.tar
          docker image ls -a
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/ci/github-actions/share-image-jobs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fci%2fgithub-actions%2fshare-image-jobs%2f\&labels=status%2Ftriage)
