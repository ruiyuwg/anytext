When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: DockerDesktopClient

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

An amalgam of the v0 and v1 interfaces of the Docker Desktop API client, provided for backwards compatibility reasons. Unless you're working with a legacy extension, use the v1 type instead.

## [Properties](#properties)

### [backend](#backend)

• `Readonly` **backend**: `undefined` | [`BackendV0`](https://docs.docker.com/reference/api/extensions-sdk/BackendV0/)

The `window.ddClient.backend` object can be used to communicate with the backend defined in the vm section of the extension metadata. The client is already connected to the backend.

> Warning
>
> It will be removed in a future version. Use [extension](https://docs.docker.com/reference/api/extensions-sdk/DockerDesktopClient/#extension) instead.

#### [Inherited from](#inherited-from)

DockerDesktopClientV0.backend

***

### [extension](#extension)

• `Readonly` **extension**: [`Extension`](https://docs.docker.com/reference/api/extensions-sdk/Extension/)

The `ddClient.extension` object can be used to communicate with the backend defined in the vm section of the extension metadata. The client is already connected to the backend.

#### [Inherited from](#inherited-from-1)

DockerDesktopClientV1.extension

***

### [desktopUI](#desktopui)

• `Readonly` **desktopUI**: [`DesktopUI`](https://docs.docker.com/reference/api/extensions-sdk/DesktopUI/)

#### [Inherited from](#inherited-from-2)

DockerDesktopClientV1.desktopUI

***

### [host](#host)

• `Readonly` **host**: [`Host`](https://docs.docker.com/reference/api/extensions-sdk/Host/)

#### [Inherited from](#inherited-from-3)

DockerDesktopClientV1.host

***

### [docker](#docker)

• `Readonly` **docker**: [`Docker`](https://docs.docker.com/reference/api/extensions-sdk/Docker/)

#### [Inherited from](#inherited-from-4)

DockerDesktopClientV1.docker

## [Container Methods](#container-methods)

### [listContainers](#listcontainers)

▸ **listContainers**(`options`): `Promise`<`unknown`>

Get the list of running containers (same as `docker ps`).

By default, this will not list stopped containers. You can use the option `{"all": true}` to list all the running and stopped containers.

```typescript
const containers = await window.ddClient.listContainers();
```

> Warning
>
> It will be removed in a future version. Use [listContainers](https://docs.docker.com/reference/api/extensions-sdk/Docker/#listcontainers) instead.

#### [Parameters](#parameters)

Name

Type

Description

`options`

`never`

(Optional). A JSON like `{ "all": true, "limit": 10, "size": true, "filters": JSON.stringify({ status: ["exited"] }), }` For more information about the different properties see [the Docker API endpoint documentation](https://docs.docker.com/reference/api/engine/version/v1.52/#operation/ContainerList).

#### [Returns](#returns)

`Promise`<`unknown`>

#### [Inherited from](#inherited-from-5)

DockerDesktopClientV0.listContainers

***

## [Image Methods](#image-methods)

### [listImages](#listimages)

▸ **listImages**(`options`): `Promise`<`unknown`>

Get the list of images

```typescript
const images = await window.ddClient.listImages();
```

> Warning
>
> It will be removed in a future version. Use [listImages](https://docs.docker.com/reference/api/extensions-sdk/Docker/#listimages) instead.

#### [Parameters](#parameters-1)

Name

Type

Description

`options`

`never`

(Optional). A JSON like `{ "all": true, "filters": JSON.stringify({ dangling: ["true"] }), "digests": true }` For more information about the different properties see [the Docker API endpoint documentation](https://docs.docker.com/reference/api/engine/version/v1.52/#tag/Image).

#### [Returns](#returns-1)

`Promise`<`unknown`>

#### [Inherited from](#inherited-from-6)

DockerDesktopClientV0.listImages

***

## [Navigation Methods](#navigation-methods)

### [navigateToContainers](#navigatetocontainers)

▸ **navigateToContainers**(): `void`

Navigate to the container's window in Docker Desktop.

```typescript
window.ddClient.navigateToContainers();
```

> Warning
>
> It will be removed in a future version. Use [viewContainers](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/#viewcontainers) instead.

#### [Returns](#returns-2)

`void`

#### [Inherited from](#inherited-from-7)

DockerDesktopClientV0.navigateToContainers

***

### [navigateToContainer](#navigatetocontainer)

▸ **navigateToContainer**(`id`): `Promise`<`any`>

Navigate to the container window in Docker Desktop.

```typescript
await window.ddClient.navigateToContainer(id);
```

> Warning
>
> It will be removed in a future version.

#### [Parameters](#parameters-2)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-3)

`Promise`<`any`>

A promise that fails if the container doesn't exist.

#### [Inherited from](#inherited-from-8)

DockerDesktopClientV0.navigateToContainer

***

### [navigateToContainerLogs](#navigatetocontainerlogs)

▸ **navigateToContainerLogs**(`id`): `Promise`<`any`>

Navigate to the container logs window in Docker Desktop.

```typescript
await window.ddClient.navigateToContainerLogs(id);
```

> Warning
>
> It will be removed in a future version.

#### [Parameters](#parameters-3)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-4)

`Promise`<`any`>

A promise that fails if the container doesn't exist.

#### [Inherited from](#inherited-from-9)

DockerDesktopClientV0.navigateToContainerLogs

***

### [navigateToContainerInspect](#navigatetocontainerinspect)

▸ **navigateToContainerInspect**(`id`): `Promise`<`any`>

Navigate to the container inspect window in Docker Desktop.

```typescript
await window.ddClient.navigateToContainerInspect(id);
```

> Warning
>
> It will be removed in a future version.

#### [Parameters](#parameters-4)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-5)

`Promise`<`any`>

A promise that fails if the container doesn't exist.

#### [Inherited from](#inherited-from-10)

DockerDesktopClientV0.navigateToContainerInspect

***

### [navigateToContainerStats](#navigatetocontainerstats)

▸ **navigateToContainerStats**(`id`): `Promise`<`any`>

Navigate to the container stats to see the CPU, memory, disk read/write and network I/O usage.

```typescript
await window.ddClient.navigateToContainerStats(id);
```

> Warning
>
> It will be removed in a future version.

#### [Parameters](#parameters-5)

Name

Type

Description

`id`

`string`

The full container id, e.g. `46b57e400d801762e9e115734bf902a2450d89669d85881058a46136520aca28`. You can use the `--no-trunc` flag as part of the `docker ps` command to display the full container id.

#### [Returns](#returns-6)

`Promise`<`any`>

A promise that fails if the container doesn't exist.

#### [Inherited from](#inherited-from-11)

DockerDesktopClientV0.navigateToContainerStats

***

### [navigateToImages](#navigatetoimages)

▸ **navigateToImages**(): `void`

Navigate to the images window in Docker Desktop.

```typescript
await window.ddClient.navigateToImages(id);
```

> Warning
>
> It will be removed in a future version. Use [viewImages](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/#viewimages) instead.

#### [Returns](#returns-7)

`void`

#### [Inherited from](#inherited-from-12)

DockerDesktopClientV0.navigateToImages

***

### [navigateToImage](#navigatetoimage)

▸ **navigateToImage**(`id`, `tag`): `Promise`<`any`>

Navigate to a specific image referenced by `id` and `tag` in Docker Desktop. In this navigation route you can find the image layers, commands, created time and size.

```typescript
await window.ddClient.navigateToImage(id, tag);
```

> Warning
>
> It will be removed in a future version. Use [viewImage](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/#viewimage) instead.

#### [Parameters](#parameters-6)

Name

Type

Description

`id`

`string`

The full image id (including sha), e.g. `sha256:34ab3ae068572f4e85c448b4035e6be5e19cc41f69606535cd4d768a63432673`.

`tag`

`string`

The tag of the image, e.g. `latest`, `0.0.1`, etc.

#### [Returns](#returns-8)

`Promise`<`any`>

A promise that fails if the container doesn't exist.

#### [Inherited from](#inherited-from-13)

DockerDesktopClientV0.navigateToImage

***

### [navigateToVolumes](#navigatetovolumes)

▸ **navigateToVolumes**(): `void`

Navigate to the volumes window in Docker Desktop.

```typescript
await window.ddClient.navigateToVolumes();
```

> Warning
>
> It will be removed in a future version. Use [viewVolumes](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/#viewvolumes) instead.

#### [Returns](#returns-9)

`void`

#### [Inherited from](#inherited-from-14)

DockerDesktopClientV0.navigateToVolumes

***

### [navigateToVolume](#navigatetovolume)

▸ **navigateToVolume**(`volume`): `void`

Navigate to a specific volume in Docker Desktop.

```typescript
window.ddClient.navigateToVolume(volume);
```

> Warning
>
> It will be removed in a future version. Use [viewVolume](https://docs.docker.com/reference/api/extensions-sdk/NavigationIntents/#viewvolume) instead.

#### [Parameters](#parameters-7)

Name

Type

Description

`volume`

`string`

The name of the volume, e.g. `my-volume`.

#### [Returns](#returns-10)

`void`

#### [Inherited from](#inherited-from-15)

DockerDesktopClientV0.navigateToVolume

***

## [Other Methods](#other-methods)

### [execHostCmd](#exechostcmd)

▸ **execHostCmd**(`cmd`): `Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

Invoke a binary on the host. The binary is typically shipped with your extension using the host section in the extension metadata. Note that extensions run with user access rights, this API is not restricted to binaries listed in the host section of the extension metadata (some extensions might install software during user interaction, and invoke newly installed binaries even if not listed in the extension metadata)

```typescript
window.ddClient.execHostCmd(`cliShippedOnHost xxx`).then((cmdResult: any) => {
 console.log(cmdResult);
});
```

> Warning
>
> It will be removed in a future version. Use [exec](https://docs.docker.com/reference/api/extensions-sdk/ExtensionCli/#exec) instead.

#### [Parameters](#parameters-8)

Name

Type

Description

`cmd`

`string`

The command to be executed.

#### [Returns](#returns-11)

`Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

#### [Inherited from](#inherited-from-16)

DockerDesktopClientV0.execHostCmd

***

### [spawnHostCmd](#spawnhostcmd)

▸ **spawnHostCmd**(`cmd`, `args`, `callback`): `void`

Invoke an extension binary on your host and get the output stream.

```typescript
window.ddClient.spawnHostCmd(
  `cliShippedOnHost`,
  [`arg1`, `arg2`],
  (data: any, err: any) => {
    console.log(data.stdout, data.stderr);
    // Once the command exits we get the status code
    if (data.code) {
      console.log(data.code);
    }
  }
);
```

> Warning
>
> It will be removed in a future version. Use [exec](https://docs.docker.com/reference/api/extensions-sdk/ExtensionCli/#exec) instead.

#### [Parameters](#parameters-9)

Name

Type

Description

`cmd`

`string`

The command to be executed.

`args`

`string`\[]

The arguments of the command to execute.

`callback`

(`data`: `any`, `error`: `any`) => `void`

The callback function where to listen from the command output data and errors.

#### [Returns](#returns-12)

`void`

#### [Inherited from](#inherited-from-17)

DockerDesktopClientV0.spawnHostCmd

***

### [execDockerCmd](#execdockercmd)

▸ **execDockerCmd**(`cmd`, `...args`): `Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

You can also directly execute the Docker binary.

```typescript
const output = await window.ddClient.execDockerCmd("info");
```

> Warning
>
> It will be removed in a future version. Use [exec](https://docs.docker.com/reference/api/extensions-sdk/DockerCommand/#exec) instead.

#### [Parameters](#parameters-10)

Name

Type

Description

`cmd`

`string`

The command to execute.

`...args`

`string`\[]

The arguments of the command to execute.

#### [Returns](#returns-13)

`Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

The result will contain both the standard output and the standard error of the executed command:

```json
{
  "stderr": "...",
  "stdout": "..."
}
```

For convenience, the command result object also has methods to easily parse it depending on the output format:

- `output.lines(): string[]` splits output lines.
- `output.parseJsonObject(): any` parses a well-formed JSON output.
- `output.parseJsonLines(): any[]` parses each output line as a JSON object.

If the output of the command is too long, or you need to get the output as a stream you can use the

- spawnDockerCmd function:

```typescript
window.ddClient.spawnDockerCmd("logs", ["-f", "..."], (data, error) => {
  console.log(data.stdout);
});
```

#### [Inherited from](#inherited-from-18)

DockerDesktopClientV0.execDockerCmd

***

### [spawnDockerCmd](#spawndockercmd)

▸ **spawnDockerCmd**(`cmd`, `args`, `callback`): `void`

> Warning
>
> It will be removed in a future version. Use [exec](https://docs.docker.com/reference/api/extensions-sdk/DockerCommand/#exec) instead.

#### [Parameters](#parameters-11)

Name

Type

`cmd`

`string`

`args`

`string`\[]

`callback`

(`data`: `any`, `error`: `any`) => `void`

#### [Returns](#returns-14)

`void`

#### [Inherited from](#inherited-from-19)

DockerDesktopClientV0.spawnDockerCmd

***

### [openExternal](#openexternal)

▸ **openExternal**(`url`): `void`

Opens an external URL with the system default browser.

```typescript
window.ddClient.openExternal("https://docker.com");
```

> Warning
>
> It will be removed in a future version. Use [openExternal](https://docs.docker.com/reference/api/extensions-sdk/Host/#openexternal) instead.

#### [Parameters](#parameters-12)

Name

Type

Description

`url`

`string`

The URL the browser opens (must have the protocol `http` or `https`).

#### [Returns](#returns-15)

`void`

#### [Inherited from](#inherited-from-20)

DockerDesktopClientV0.openExternal

***

## [Toast Methods](#toast-methods)

### [toastSuccess](#toastsuccess)

▸ **toastSuccess**(`msg`): `void`

Display a toast message of type success.

```typescript
window.ddClient.toastSuccess("message");
```

> **Warning\`**
>
> It will be removed in a future version. Use [success](https://docs.docker.com/reference/api/extensions-sdk/Toast/#success) instead.

#### [Parameters](#parameters-13)

Name

Type

Description

`msg`

`string`

The message to display in the toast.

#### [Returns](#returns-16)

`void`

#### [Inherited from](#inherited-from-21)

DockerDesktopClientV0.toastSuccess

***

### [toastWarning](#toastwarning)

▸ **toastWarning**(`msg`): `void`

Display a toast message of type warning.

```typescript
window.ddClient.toastWarning("message");
```

> Warning
>
> It will be removed in a future version. Use [warning](https://docs.docker.com/reference/api/extensions-sdk/Toast/#warning) instead.

#### [Parameters](#parameters-14)

Name

Type

Description

`msg`

`string`

The message to display in the toast.

#### [Returns](#returns-17)

`void`

#### [Inherited from](#inherited-from-22)

DockerDesktopClientV0.toastWarning

***

### [toastError](#toasterror)

▸ **toastError**(`msg`): `void`

Display a toast message of type error.

```typescript
window.ddClient.toastError("message");
```

> Warning
>
> It will be removed in a future version. Use [error](https://docs.docker.com/reference/api/extensions-sdk/Toast/#error) instead.

#### [Parameters](#parameters-15)

Name

Type

Description

`msg`

`string`

The message to display in the toast.

#### [Returns](#returns-18)

`void`

#### [Inherited from](#inherited-from-23)

DockerDesktopClientV0.toastError

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/DockerDesktopClient.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fDockerDesktopClient%2f\&labels=status%2Ftriage)

Table of contents
