When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Develop with Docker Desktop using WSL 2 on Windows

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The following section describes how to start developing your applications using Docker and WSL 2.

For the best development experience, store your code inside your default Linux distribution. After you have turned on the WSL 2 feature on Docker Desktop, you can start working with your code inside the Linux distribution and ideally with your IDE still in Windows. This workflow is straightforward if you are using [VS Code](https://code.visualstudio.com/download).

## [Develop with Docker and WSL 2](#develop-with-docker-and-wsl-2)

Before you begin, make sure you have enabled WSL 2 integration in Docker Desktop under **Settings** > **Resources** > **WSL Integration**.

1. Open VS Code and install the [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension. This extension lets you work with a remote server in the Linux distribution and your IDE client still on Windows.

2. Open your terminal and type:

   ```console
   $ wsl
   ```

3. Navigate to your project directory and then type:

   ```console
   $ code .
   ```

   This opens a new VS Code window connected remotely to your default Linux distribution which you can check in the bottom corner of the screen.

Alternatively, you can open your default Linux distribution from the **Start** menu, navigate to your project directory, and then run `code .`

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/features/wsl/use-wsl.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2ffeatures%2fwsl%2fuse-wsl%2f\&labels=status%2Ftriage)

Table of contents
