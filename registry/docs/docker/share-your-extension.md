Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Share your extension

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Once your extension image is accessible on Docker Hub, anyone with access to the image can install the extension.

People can install your extension by typing `docker extension install my/awesome-extension:latest` in to the terminal.

However, this option doesn't provide a preview of the extension before it's installed.

## [Create a share URL](#create-a-share-url)

Docker lets you share your extensions using a URL.

When people navigate to this URL, it opens Docker Desktop and displays a preview of your extension in the same way as an extension in the Marketplace. From the preview, users can then select **Install**.

![Navigate to extension link](https://docs.docker.com/extensions/extensions-sdk/extensions/images/open-share.png)

To generate this link you can either:

- Run the following command:

  ```console
  $ docker extension share my/awesome-extension:0.0.1
  ```

- Once you have installed your extension locally, navigate to the **Manage** tab and select **Share**.

  ![Share button](https://docs.docker.com/extensions/extensions-sdk/extensions/images/list-preview.png)

> Note
>
> Previews of the extension description or screenshots, for example, are created using [extension labels](https://docs.docker.com/extensions/extensions-sdk/extensions/labels/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/extensions/share.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fextensions%2fshare%2f\&labels=status%2Ftriage)

Table of contents
