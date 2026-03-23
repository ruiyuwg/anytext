When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Validate your extension

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

Validate your extension before you share or publish it. Validating the extension ensures that the extension:

- Is built with the [image labels](https://docs.docker.com/extensions/extensions-sdk/extensions/labels/) it requires to display correctly in the marketplace
- Installs and runs without problems

The Extensions CLI lets you validate your extension before installing and running it locally.

The validation checks if the extension’s `Dockerfile` specifies all the required labels and if the metadata file is valid against the JSON schema file.

To validate, run:

```console
$ docker extension validate <name-of-your-extension>
```

If your extension is valid, the following message displays:

```console
The extension image "name-of-your-extension" is valid
```

Before the image is built, it's also possible to validate only the `metadata.json` file:

```console
$ docker extension validate /path/to/metadata.json
```

The JSON schema used to validate the `metadata.json` file against can be found under the [releases page](https://github.com/docker/extensions-sdk/releases/latest).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/extensions/validate.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fextensions%2fvalidate%2f\&labels=status%2Ftriage)
