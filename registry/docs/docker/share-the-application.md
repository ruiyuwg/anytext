Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Get started](https://docs.docker.com/get-started/)

- [Guides](/guides/)
- [Manuals](/manuals/)
- [Reference](/reference/)

# Share the application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Now that you've built an image, you can share it. To share Docker images, you have to use a Docker registry. The default registry is Docker Hub and is where all of the images you've used have come from.

> **Docker ID**
>
> A Docker ID lets you access Docker Hub, which is the world's largest library and community for container images. Create a [Docker ID](https://hub.docker.com/signup) for free if you don't have one.

## [Create a repository](#create-a-repository)

To push an image, you first need to create a repository on Docker Hub.

1. [Sign up](https://www.docker.com/pricing?utm_source=docker\&utm_medium=webreferral\&utm_campaign=docs_driven_upgrade) or Sign in to [Docker Hub](https://hub.docker.com).

2. Select the **Create Repository** button.

3. For the repository name, use `getting-started`. Make sure the **Visibility** is **Public**.

4. Select **Create**.

In the following image, you can see an example Docker command from Docker Hub. This command will push to this repository.

![Docker command with push example](https://docs.docker.com/get-started/workshop/images/push-command.webp)

## [Push the image](#push-the-image)

Let's try to push the image to Docker Hub.

1. In the command line, run the following command:

   ```console
   docker push docker/getting-started
   ```

   You'll see an error like this:

   ```console
   $ docker push docker/getting-started
   The push refers to repository [docker.io/docker/getting-started]
   An image does not exist locally with the tag: docker/getting-started
   ```

   This failure is expected because the image isn't tagged correctly yet. Docker is looking for an image name `docker/getting-started`, but your local image is still named `getting-started`.

   You can confirm this by running:

   ```console
   docker image ls
   ```

2. To fix this, first sign in to Docker Hub using your Docker ID: `docker login YOUR-USER-NAME`.

3. Use the `docker tag` command to give the `getting-started` image a new name. Replace `YOUR-USER-NAME` with your Docker ID.

   ```console
   $ docker tag getting-started YOUR-USER-NAME/getting-started
   ```

4. Now run the `docker push` command again. If you're copying the value from Docker Hub, you can drop the `tagname` part, as you didn't add a tag to the image name. If you don't specify a tag, Docker uses a tag called `latest`.

   ```console
   $ docker push YOUR-USER-NAME/getting-started
   ```

## [Run the image on a new instance](#run-the-image-on-a-new-instance)

Now that your image has been built and pushed into a registry, you can run your app on any machine that has Docker installed. Try pulling and running your image on another computer or a cloud instance.

## [Summary](#summary)

In this section, you learned how to share your images by pushing them to a registry. You then went to a brand new instance and were able to run the freshly pushed image. This is quite common in CI pipelines, where the pipeline will create the image and push it to a registry and then the production environment can use the latest version of the image.

Related information:

- [docker CLI reference](/reference/cli/docker/)
- [Multi-platform images](https://docs.docker.com/build/building/multi-platform/)
- [Docker Hub overview](https://docs.docker.com/docker-hub/)

## [Next steps](#next-steps)

In the next section, you'll learn how to persist data in your containerized application.

[Persist the DB](https://docs.docker.com/get-started/workshop/05_persisting_data/)

[Edit this page](https://github.com/docker/docs/edit/main/content/get-started/workshop/04_sharing_app.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fget-started%2fworkshop%2f04_sharing_app%2f\&labels=status%2Ftriage)

Table of contents
