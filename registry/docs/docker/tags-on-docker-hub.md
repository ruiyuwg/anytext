Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Tags on Docker Hub

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Tags let you manage multiple versions of images within a single Docker Hub repository. By adding a specific `:<tag>` to each image, such as `docs/base:testing`, you can organize and differentiate image versions for various use cases. If no tag is specified, the image defaults to the `latest` tag.

## [Tag a local image](#tag-a-local-image)

To tag a local image, use one of the following methods:

- When you build an image, use `docker build -t <org-or-user-namespace>/<repo-name>[:<tag>`.
- Re-tag an existing local image with `docker tag <existing-image> <org-or-user-namespace>/<repo-name>[:<tag>]`.
- When you commit changes, use `docker commit <existing-container> <org-or-user-namespace>/<repo-name>[:<tag>]`.

Then, you can push this image to the repository designated by its name or tag:

```console
$ docker push <org-or-user-namespace>/<repo-name>:<tag>
```

The image is then uploaded and available for use in Docker Hub.

## [View repository tags](#view-repository-tags)

You can view the available tags and the size of the associated image.

1. Sign in to [Docker Hub](https://hub.docker.com).

2. Select **My Hub** > **Repositories**.

   A list of your repositories appears.

3. Select a repository.

   The **General** page for the repository appears.

4. Select the **Tags** tab.

You can select a tag's digest to see more details.

## [Delete repository tags](#delete-repository-tags)

Only the repository owner or other team members with granted permissions can delete tags.

1. Sign in to [Docker Hub](https://hub.docker.com).

2. Select **My Hub** > **Repositories**.

   A list of your repositories appears.

3. Select a repository.

   The **General** page for the repository appears.

4. Select the **Tags** tab.

5. Select the corresponding checkbox next to the tags to delete.

6. Select **Delete**.

   A confirmation dialog appears.

7. Select **Delete**.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/manage/hub-images/tags.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2fmanage%2fhub-images%2ftags%2f\&labels=status%2Ftriage)

Table of contents
