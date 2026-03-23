When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Install Docker Scout

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The Docker Scout CLI plugin comes pre-installed with Docker Desktop.

If you run Docker Engine without Docker Desktop, Docker Scout doesn't come pre-installed, but you can install it as a standalone binary.

## [Installation script](#installation-script)

To install the latest version of the plugin, run the following commands:

```console
$ curl -fsSL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh -o install-scout.sh
$ sh install-scout.sh
```

> Note
>
> Always examine scripts downloaded from the internet before running them locally. Before installing, make yourself familiar with potential risks and limitations of the convenience script.

## [Manual installation](#manual-installation)

Linux macOS Windows

1. Download the latest release from the [releases page](https://github.com/docker/scout-cli/releases).

2. Create a subdirectory under `$HOME/.docker` called `scout`.

   ```console
   $ mkdir -p $HOME/.docker/scout
   ```

3. Extract the archive and move the `docker-scout` binary to the `$HOME/.docker/scout` directory.

4. Make the binary executable: `chmod +x $HOME/.docker/scout/docker-scout`.

5. Add the `scout` subdirectory to your `.docker/config.json` as a plugin directory:

   ```json
   {
     "cliPluginsExtraDirs": [
       "/home//.docker/scout"
     ]
   }
   ```

   Substitute `<USER>` with your username on the system.

   > Note
   >
   > The path for `cliPluginsExtraDirs` must be an absolute path.

6. Download the latest release from the [releases page](https://github.com/docker/scout-cli/releases).

7. Create a subdirectory under `$HOME/.docker` called `scout`.

   ```console
   $ mkdir -p $HOME/.docker/scout
   ```

8. Extract the archive and move the `docker-scout` binary to the `$HOME/.docker/scout` directory.

9. Make the binary executable:

   ```console
   $ chmod +x $HOME/.docker/scout/docker-scout
   ```

10. Authorize the binary to be executable on macOS:

    ```console
    xattr -d com.apple.quarantine $HOME/.docker/scout/docker-scout
    ```

11. Add the `scout` subdirectory to your `.docker/config.json` as a plugin directory:

    ```json
    {
      "cliPluginsExtraDirs": [
        "/Users//.docker/scout"
      ]
    }
    ```

    Substitute `<USER>` with your username on the system.

    > Note
    >
    > The path for `cliPluginsExtraDirs` must be an absolute path.

12. Download the latest release from the [releases page](https://github.com/docker/scout-cli/releases).

13. Create a subdirectory under `%USERPROFILE%/.docker` called `scout`.

    ```console
    % mkdir %USERPROFILE%\.docker\scout
    ```

14. Extract the archive and move the `docker-scout.exe` binary to the `%USERPROFILE%\.docker\scout` directory.

15. Add the `scout` subdirectory to your `.docker\config.json` as a plugin directory:

    ```json
    {
      "cliPluginsExtraDirs": [
        "C:\Users\\.docker\scout"
      ]
    }
    ```

    Substitute `<USER>` with your username on the system.

    > Note
    >
    > The path for `cliPluginsExtraDirs` must be an absolute path.

## [Container image](#container-image)

The Docker Scout CLI plugin is also available as a [container image](https://hub.docker.com/r/docker/scout-cli). Use the `docker/scout-cli` to run `docker scout` commands without installing the CLI plugin on your host.

```console
$ docker run -it \
  -e DOCKER_SCOUT_HUB_USER=<your Docker Hub user name> \
  -e DOCKER_SCOUT_HUB_PASSWORD=<your Docker Hub PAT>  \
  docker/scout-cli <command>
```

## [GitHub Action](#github-action)

The Docker Scout CLI plugin is also available as a [GitHub action](https://github.com/docker/scout-action). You can use it in your GitHub workflows to automatically analyze images and evaluate policy compliance with each push.

Docker Scout also integrates with many more CI/CD tools, such as Jenkins, GitLab, and Azure DevOps. Learn more about the [integrations](https://docs.docker.com/scout/integrations/) available for Docker Scout.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/scout/install.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fscout%2finstall%2f\&labels=status%2Ftriage)

Table of contents
