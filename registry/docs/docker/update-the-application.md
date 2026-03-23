When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Get started](https://docs.docker.com/get-started/)

- [Guides](/guides/)
- [Manuals](/manuals/)
- [Reference](/reference/)

# Update the application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

In [part 1](https://docs.docker.com/get-started/workshop/02_our_app/), you containerized a todo application. In this part, you'll update the application and image. You'll also learn how to stop and remove a container.

## [Update the source code](#update-the-source-code)

In the following steps, you'll change the "empty text" when you don't have any todo list items to "You have no todo items yet! Add one above!"

1. In the `src/static/js/app.js` file, update line 56 to use the new empty text.

   ```diff
   - No items yet! Add one above!
   + You have no todo items yet! Add one above!
   ```

2. Build your updated version of the image, using the `docker build` command.

   ```console
   $ docker build -t getting-started .
   ```

3. Start a new container using the updated code.

   ```console
   $ docker run -dp 127.0.0.1:3000:3000 getting-started
   ```

You probably saw an error like this:

```console
docker: Error response from daemon: driver failed programming external connectivity on endpoint laughing_burnell 
(bb242b2ca4d67eba76e79474fb36bb5125708ebdabd7f45c8eaf16caaabde9dd): Bind for 127.0.0.1:3000 failed: port is already allocated.
```

The error occurred because you aren't able to start the new container while your old container is still running. The reason is that the old container is already using the host's port 3000 and only one process on the machine (containers included) can listen to a specific port. To fix this, you need to remove the old container.

## [Remove the old container](#remove-the-old-container)

To remove a container, you first need to stop it. Once it has stopped, you can remove it. You can remove the old container using the CLI or Docker Desktop's graphical interface. Choose the option that you're most comfortable with.

CLI Docker Desktop

### [Remove a container using the CLI](#remove-a-container-using-the-cli)

1. Get the ID of the container by using the `docker ps` command.

   ```console
   $ docker ps
   ```

2. Use the `docker stop` command to stop the container. Replace `<the-container-id>` with the ID from `docker ps`.

   ```console
   $ docker stop <the-container-id>
   ```

3. Once the container has stopped, you can remove it by using the `docker rm` command.

   ```console
   $ docker rm <the-container-id>
   ```

> Note
>
> You can stop and remove a container in a single command by adding the `force` flag to the `docker rm` command. For example: `docker rm -f <the-container-id>`

### [Remove a container using Docker Desktop](#remove-a-container-using-docker-desktop)

1. Open Docker Desktop to the **Containers** view.
2. Select the trash can icon under the **Actions** column for the container that you want to delete.
3. In the confirmation dialog, select **Delete forever**.

### [Start the updated app container](#start-the-updated-app-container)

1. Now, start your updated app using the `docker run` command.

   ```console
   $ docker run -dp 127.0.0.1:3000:3000 getting-started
   ```

2. Refresh your browser on <http://localhost:3000> and you should see your updated help text.

## [Summary](#summary)

In this section, you learned how to update and rebuild an image, as well as how to stop and remove a container.

Related information:

- [docker CLI reference](/reference/cli/docker/)

## [Next steps](#next-steps)

Next, you'll learn how to share images with others.

[Share the application](https://docs.docker.com/get-started/workshop/04_sharing_app/)

[Edit this page](https://github.com/docker/docs/edit/main/content/get-started/workshop/03_updating_app.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fget-started%2fworkshop%2f03_updating_app%2f\&labels=status%2Ftriage)

Table of contents
