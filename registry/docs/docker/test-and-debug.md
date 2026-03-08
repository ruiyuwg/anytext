Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Test and debug

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

In order to improve the developer experience, Docker Desktop provides a set of tools to help you test and debug your extension.

### [Open Chrome DevTools](#open-chrome-devtools)

In order to open the Chrome DevTools for your extension when you select the **Extensions** tab, run:

```console
$ docker extension dev debug <name-of-your-extensions>
```

Each subsequent click on the extension tab also opens Chrome DevTools. To stop this behaviour, run:

```console
$ docker extension dev reset <name-of-your-extensions>
```

After an extension is deployed, it is also possible to open Chrome DevTools from the UI extension part using a variation of the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code). Select the **Extensions** tab, and then hit the key sequence `up, up, down, down, left, right, left, right, p, d, t`.

### [Hot reloading whilst developing the UI](#hot-reloading-whilst-developing-the-ui)

During UI development, it’s helpful to use hot reloading to test your changes without rebuilding your entire extension. To do this, you can configure Docker Desktop to load your UI from a development server, such as the one [Vite](https://vitejs.dev/) starts when invoked with `npm start`.

Assuming your app runs on the default port, start your UI app and then run:

```console
$ cd ui
$ npm run dev
```

This starts a development server that listens on port 3000.

You can now tell Docker Desktop to use this as the frontend source. In another terminal run:

```console
$ docker extension dev ui-source <name-of-your-extensions> http://localhost:3000
```

Close and reopen the Docker Desktop dashboard and go to your extension. All the changes to the frontend code are immediately visible.

Once finished, you can reset the extension configuration to the original settings. This will also reset opening Chrome DevTools if you used `docker extension dev debug <name-of-your-extensions>`:

```console
$ docker extension dev reset <name-of-your-extensions>
```

## [Show the extension containers](#show-the-extension-containers)

If your extension is composed of one or more services running as containers in the Docker Desktop VM, you can access them easily from the dashboard in Docker Desktop.

1. In Docker Desktop, navigate to **Settings**.
2. Under the **Extensions** tab, select the **Show Docker Desktop Extensions system containers** option. You can now view your extension containers and their logs.

## [Clean up](#clean-up)

To remove the extension, run:

```console
$ docker extension rm <name-of-your-extension>
```

## [What's next](#whats-next)

- Build an [advanced frontend](https://docs.docker.com/extensions/extensions-sdk/build/frontend-extension-tutorial/) extension.
- Learn more about extensions [architecture](https://docs.docker.com/extensions/extensions-sdk/architecture/).
- Explore our [design principles](https://docs.docker.com/extensions/extensions-sdk/design/design-principles/).
- Take a look at our [UI styling guidelines](https://docs.docker.com/extensions/extensions-sdk/design/).
- Learn how to [setup CI for your extension](https://docs.docker.com/extensions/extensions-sdk/dev/continuous-integration/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/dev/test-debug.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fdev%2ftest-debug%2f\&labels=status%2Ftriage)

Table of contents
