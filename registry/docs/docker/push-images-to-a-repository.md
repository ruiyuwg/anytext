When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Push images to a repository

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

To add content to a repository on Docker Hub, you need to tag your Docker image and then push it to your repository. This process lets you share your images with others or use them in different environments.

1. Tag your Docker image.

   The `docker tag` command assigns a tag to your Docker image, which includes your Docker Hub namespace and the repository name. The general syntax is:

   ```console
   $ docker tag [SOURCE_IMAGE[:TAG]] [NAMESPACE/REPOSITORY[:TAG]]
   ```

   Example:

   If your local image is called `my-app` and you want to tag it for the repository `my-namespace/my-repo` with the tag `v1.0`, run:

   ```console
   $ docker tag my-app my-namespace/my-repo:v1.0
   ```

2. Push the image to Docker Hub.

   Use the `docker push` command to upload your tagged image to the specified repository on Docker Hub.

   Example:

   ```console
   $ docker push my-namespace/my-repo:v1.0
   ```

   This command pushes the image tagged `v1.0` to the `my-namespace/my-repo` repository.

3. Verify the image on Docker Hub.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/manage/hub-images/push.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2fmanage%2fhub-images%2fpush%2f\&labels=status%2Ftriage)
