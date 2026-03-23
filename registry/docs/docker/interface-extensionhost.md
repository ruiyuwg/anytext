When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: ExtensionHost

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.0

## [Properties](#properties)

### [cli](#cli)

• `Readonly` **cli**: [`ExtensionCli`](https://docs.docker.com/reference/api/extensions-sdk/ExtensionCli/)

Executes a command in the host.

For example, execute the shipped binary `kubectl -h` command in the host:

```typescript
await ddClient.extension.host.cli.exec("kubectl", ["-h"]);
```

***

Streams the output of the command executed in the backend container or in the host.

Provided the `kubectl` binary is shipped as part of your extension, you can spawn the `kubectl -h` command in the host:

```typescript
await ddClient.extension.host.cli.exec("kubectl", ["-h"], {
           stream: {
             onOutput(data): void {
                 // As we can receive both `stdout` and `stderr`, we wrap them in a JSON object
                 JSON.stringify(
                   {
                     stdout: data.stdout,
                     stderr: data.stderr,
                   },
                   null,
                   "  "
                 );
             },
             onError(error: any): void {
               console.error(error);
             },
             onClose(exitCode: number): void {
               console.log("onClose with exit code " + exitCode);
             },
           },
         });
```

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/ExtensionHost.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fExtensionHost%2f\&labels=status%2Ftriage)

Table of contents
