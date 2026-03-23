When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# How to back up and restore your Docker Desktop data

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Use this procedure to back up and restore your images and container data. This is useful if you want to reset your VM disk or to move your Docker environment to a new computer, or recover from a failed Docker Desktop update or installation.

> Important
>
> If you use volumes or bind-mounts to store your container data, backing up your containers may not be needed, but make sure to remember the options that were used when creating the container or use a [Docker Compose file](https://docs.docker.com/reference/compose-file/) if you want to re-create your containers with the same configuration after re-installation.

## [If Docker Desktop is functioning normally](#if-docker-desktop-is-functioning-normally)

### [Save your data](#save-your-data)

1. Commit your containers to an image with [`docker container commit`](/reference/cli/docker/container/commit/).

   Committing a container stores filesystem changes and some container configurations, such as labels and environment variables, as a local image. Be aware that environment variables may contain sensitive information such as passwords or proxy-authentication, so take care when pushing the resulting image to a registry.

   Also note that filesystem changes in a volume that are attached to the container are not included in the image, and must be backed up separately.

   If you used a [named volume](https://docs.docker.com/engine/storage/#more-details-about-mount-types) to store container data, such as databases, refer to the [back up, restore, or migrate data volumes](https://docs.docker.com/engine/storage/volumes/#back-up-restore-or-migrate-data-volumes) page in the storage section.

2. Use [`docker push`](/reference/cli/docker/image/push/) to push any images you have built locally and want to keep to the [Docker Hub registry](https://docs.docker.com/docker-hub/).

   > Tip
   >
   > [Set the repository visibility to private](https://docs.docker.com/docker-hub/repos/) if your image includes sensitive content.

   Alternatively, use [`docker image save -o images.tar image1 [image2 ...]`](/reference/cli/docker/image/save/) to save any images you want to keep to a local `.tar` file.

After backing up your data, you can uninstall the current version of Docker Desktop and [install a different version](https://docs.docker.com/desktop/release-notes/) or reset Docker Desktop to factory defaults.

### [Restore your data](#restore-your-data)

1. Load your images.

   - If you pushed to Docker Hub:

     ```console
     $ docker pull <my-backup-image>
     ```

   - If you saved a `.tar` file:

     ```console
     $ docker image load -i images.tar
     ```

2. Re-create your containers if needed, using [`docker run`](/reference/cli/docker/container/run/), or [Docker Compose](https://docs.docker.com/compose/).

To restore volume data, refer to [backup, restore, or migrate data volumes](https://docs.docker.com/engine/storage/volumes/#back-up-restore-or-migrate-data-volumes).

## [If Docker Desktop fails to start](#if-docker-desktop-fails-to-start)

If Docker Desktop cannot launch and must be reinstalled, you can back up its VM disk and image data directly from disk. Docker Desktop must be fully stopped before backing up these files.

Windows Mac Linux

1. Back up Docker containers/images.

   Backup the following file:

   ```console
   %LOCALAPPDATA%\Docker\wsl\data\docker_data.vhdx
   ```

   Copy it to a safe location.

2. Back up WSL distributions.

   If you're running any WSL Linux distributions (Ubuntu, Alpine, etc.), back them up using [Microsoft's guide](https://learn.microsoft.com/en-us/windows/wsl/faq#how-can-i-back-up-my-wsl-distributions-).

3. Restore.

   After reinstalling Docker Desktop, restore the `docker_data.vhdx` to the same location and re-import your WSL distributions if needed.

4. Back up Docker containers/images.

   Backup the following file:

   ```console
   ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw
   ```

   Copy it to a safe location.

5. Restore.

   After reinstalling Docker Desktop, restore the `Docker.raw` to the same location.

6. Back up Docker containers/images:

   Backup the following file:

   ```console
   ~/.docker/desktop/vms/0/data/Docker.raw
   ```

   Copy it to a safe location.

7. Restore.

   After reinstalling Docker Desktop, restore the `Docker.raw` to the same location.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/settings-and-maintenance/backup-and-restore.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2fsettings-and-maintenance%2fbackup-and-restore%2f\&labels=status%2Ftriage)

Table of contents
