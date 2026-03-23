When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: NavigationIntents

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.0

## [Container Methods](#container-methods)

### [viewContainers](#viewcontainers)

▸ **viewContainers**(): `Promise`<`void`>

Navigate to the **Containers** tab in Docker Desktop.

```typescript
ddClient.desktopUI.navigate.viewContainers()
```

#### [Returns](#returns)

`Promise`<`void`>

***

### [viewContainer](#viewcontainer)

▸ **viewContainer**(`id`): `Promise`<`void`>

Navigate to the **Container** tab in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewContainer(id)
```

#### [Parameters](#parameters)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-1)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

***

### [viewContainerLogs](#viewcontainerlogs)

▸ **viewContainerLogs**(`id`): `Promise`<`void`>

Navigate to the **Container logs** tab in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewContainerLogs(id)
```

#### [Parameters](#parameters-1)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-2)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

***

### [viewContainerInspect](#viewcontainerinspect)

▸ **viewContainerInspect**(`id`): `Promise`<`void`>

Navigate to the **Inspect container** view in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewContainerInspect(id)
```

#### [Parameters](#parameters-2)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-3)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

***

### [viewContainerTerminal](#viewcontainerterminal)

▸ **viewContainerTerminal**(`id`): `Promise`<`void`>

Navigate to the container terminal window in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewContainerTerminal(id)
```

**`Since`**

0.3.4

#### [Parameters](#parameters-3)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-4)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

***

### [viewContainerStats](#viewcontainerstats)

▸ **viewContainerStats**(`id`): `Promise`<`void`>

Navigate to the container stats to see the CPU, memory, disk read/write and network I/O usage.

```typescript
await ddClient.desktopUI.navigate.viewContainerStats(id)
```

#### [Parameters](#parameters-4)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-5)

`Promise`<`void`>

A promise that fails if the container doesn't exist.

***

## [Images Methods](#images-methods)

### [viewImages](#viewimages)

▸ **viewImages**(): `Promise`<`void`>

Navigate to the **Images** tab in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewImages()
```

#### [Returns](#returns-6)

`Promise`<`void`>

***

### [viewImage](#viewimage)

▸ **viewImage**(`id`, `tag`): `Promise`<`void`>

Navigate to a specific image referenced by `id` and `tag` in Docker Desktop. In this navigation route you can find the image layers, commands, created time and size.

```typescript
await ddClient.desktopUI.navigate.viewImage(id, tag)
```

#### [Parameters](#parameters-5)

Name

Type

Description

`id`

`string`

The full image id (including sha), e.g. `sha256:34ab3ae068572f4e85c448b4035e6be5e19cc41f69606535cd4d768a63432673`.

`tag`

`string`

The tag of the image, e.g. `latest`, `0.0.1`, etc.

#### [Returns](#returns-7)

`Promise`<`void`>

A promise that fails if the image doesn't exist.

***

## [Volume Methods](#volume-methods)

### [viewVolumes](#viewvolumes)

▸ **viewVolumes**(): `Promise`<`void`>

Navigate to the **Volumes** tab in Docker Desktop.

```typescript
ddClient.desktopUI.navigate.viewVolumes()
```

#### [Returns](#returns-8)

`Promise`<`void`>

***

### [viewVolume](#viewvolume)

▸ **viewVolume**(`volume`): `Promise`<`void`>

Navigate to a specific volume in Docker Desktop.

```typescript
await ddClient.desktopUI.navigate.viewVolume(volume)
```

#### [Parameters](#parameters-6)

Name

Type

Description

`volume`

`string`

The name of the volume, e.g. `my-volume`.

#### [Returns](#returns-9)

`Promise`<`void`>

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/NavigationIntents.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fNavigationIntents%2f\&labels=status%2Ftriage)

Table of contents
