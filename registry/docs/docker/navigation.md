Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Navigation

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

`ddClient.desktopUI.navigate` enables navigation to specific screens of Docker Desktop such as the containers tab, the images tab, or a specific container's logs.

For example, navigate to a given container logs:

```typescript
const id = '8c7881e6a107';
try {
  await ddClient.desktopUI.navigate.viewContainerLogs(id);
} catch (e) {
  console.error(e);
  ddClient.desktopUI.toast.error(
    `Failed to navigate to logs for container "${id}".`
  );
}
```

#### [Parameters](#parameters)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

For more details about all navigation methods, see the [Navigation API reference](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/).

> Deprecated navigation methods
>
> These methods are deprecated and will be removed in a future version. Use the methods specified above.

```typescript
window.ddClient.navigateToContainers();
// id - the full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`
window.ddClient.navigateToContainer(id);
window.ddClient.navigateToContainerLogs(id);
window.ddClient.navigateToContainerInspect(id);
window.ddClient.navigateToContainerStats(id);

window.ddClient.navigateToImages();
window.ddClient.navigateToImage(id, tag);

window.ddClient.navigateToVolumes();
window.ddClient.navigateToVolume(volume);

window.ddClient.navigateToDevEnvironments();
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/dev/api/dashboard-routes-navigation.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fdev%2fapi%2fdashboard-routes-navigation%2f\&labels=status%2Ftriage)

Table of contents
