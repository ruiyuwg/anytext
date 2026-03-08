Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Create a simple extension

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

To start creating your extension, you first need a directory with files which range from the extension’s source code to the required extension-specific files. This page provides information on how to set up a minimal frontend extension based on plain HTML.

Before you start, make sure you have installed the latest version of [Docker Desktop](https://docs.docker.com/desktop/release-notes/).

> Tip
>
> If you want to start a codebase for your new extension, our [Quickstart guide](https://docs.docker.com/extensions/extensions-sdk/quickstart/) and `docker extension init <my-extension>` provides a better base for your extension.

## [Extension folder structure](#extension-folder-structure)

In the `minimal-frontend` [sample folder](https://github.com/docker/extensions-sdk/tree/main/samples), you can find a ready-to-go example that represents a UI Extension built on HTML. We will go through this code example in this tutorial.

Although you can start from an empty directory, it is highly recommended that you start from the template below and change it accordingly to suit your needs.

```bash
.
├── Dockerfile # (1)
├── metadata.json # (2)
└── ui # (3)
    └── index.html
```

1. Contains everything required to build the extension and run it in Docker Desktop.
2. A file that provides information about the extension such as the name, description, and version.
3. The source folder that contains all your HTML, CSS and JS files. There can also be other static assets such as logos and icons. For more information and guidelines on building the UI, see the [Design and UI styling section](https://docs.docker.com/extensions/extensions-sdk/design/design-guidelines/).

## [Create a Dockerfile](#create-a-dockerfile)

At a minimum, your Dockerfile needs:

- [Labels](https://docs.docker.com/extensions/extensions-sdk/extensions/labels/) which provide extra information about the extension, icon and screenshots.
- The source code which in this case is an `index.html` that sits within the `ui` folder.
- The `metadata.json` file.

```Dockerfile
# syntax=docker/dockerfile:1
FROM scratch

LABEL org.opencontainers.image.title="Minimal frontend" \
    org.opencontainers.image.description="A sample extension to show how easy it's to get started with Desktop Extensions." \
    org.opencontainers.image.vendor="Awesome Inc." \
    com.docker.desktop.extension.api.version="0.3.3" \
    com.docker.desktop.extension.icon="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"

COPY ui ./ui
COPY metadata.json .
```

## [Configure the metadata file](#configure-the-metadata-file)

A `metadata.json` file is required at the root of the image filesystem.

```json
{
  "ui": {
    "dashboard-tab": {
      "title": "Minimal frontend",
      "root": "/ui",
      "src": "index.html"
    }
  }
}
```

For more information on the `metadata.json`, see [Metadata](https://docs.docker.com/extensions/extensions-sdk/architecture/metadata/).

## [Build the extension and install it](#build-the-extension-and-install-it)

Now that you have configured the extension, you need to build the extension image that Docker Desktop will use to install it.

```console
$ docker build --tag=awesome-inc/my-extension:latest .
```

This built an image tagged `awesome-inc/my-extension:latest`, you can run `docker inspect awesome-inc/my-extension:latest` to see more details about it.

Finally, you can install the extension and see it appearing in the Docker Desktop Dashboard.

```console
$ docker extension install awesome-inc/my-extension:latest
```

## [Preview the extension](#preview-the-extension)

To preview the extension in Docker Desktop, close and open the Docker Desktop Dashboard once the installation is complete.

The left-hand menu displays a new tab with the name of your extension.

![Minimal frontend extension](https://docs.docker.com/extensions/extensions-sdk/build/images/ui-minimal-extension.png)

## [What's next?](#whats-next)

- Build a more [advanced frontend](https://docs.docker.com/extensions/extensions-sdk/build/frontend-extension-tutorial/) extension.
- Learn how to [test and debug](https://docs.docker.com/extensions/extensions-sdk/dev/test-debug/) your extension.
- Learn how to [setup CI for your extension](https://docs.docker.com/extensions/extensions-sdk/dev/continuous-integration/).
- Learn more about extensions [architecture](https://docs.docker.com/extensions/extensions-sdk/architecture/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/build/minimal-frontend-extension.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fbuild%2fminimal-frontend-extension%2f\&labels=status%2Ftriage)

Table of contents
