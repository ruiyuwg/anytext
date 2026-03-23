When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: BackendV0

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Container Methods](#container-methods)

### [execInContainer](#execincontainer)

▸ **execInContainer**(`container`, `cmd`): `Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

Executes a command inside a container.

```typescript
const output = await window.ddClient.backend.execInContainer(container, cmd);

console.log(output);
```

> Warning
>
> It will be removed in a future version.

#### [Parameters](#parameters)

Name

Type

Description

`container`

`string`

\-

`cmd`

`string`

The command to be executed.

#### [Returns](#returns)

`Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

***

## [HTTP Methods](#http-methods)

### [get](#get)

▸ **get**(`url`): `Promise`<`unknown`>

Performs an HTTP GET request to a backend service.

```typescript
window.ddClient.backend
 .get("/some/service")
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [get](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#get) instead.

#### [Parameters](#parameters-1)

Name

Type

Description

`url`

`string`

The URL of the backend service.

#### [Returns](#returns-1)

`Promise`<`unknown`>

***

### [post](#post)

▸ **post**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP POST request to a backend service.

```typescript
window.ddClient.backend
 .post("/some/service", { ... })
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [post](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#post) instead.

#### [Parameters](#parameters-2)

Name

Type

Description

`url`

`string`

The URL of the backend service.

`data`

`any`

The body of the request.

#### [Returns](#returns-2)

`Promise`<`unknown`>

***

### [put](#put)

▸ **put**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PUT request to a backend service.

```typescript
window.ddClient.backend
 .put("/some/service", { ... })
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [put](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#put) instead.

#### [Parameters](#parameters-3)

Name

Type

Description

`url`

`string`

The URL of the backend service.

`data`

`any`

The body of the request.

#### [Returns](#returns-3)

`Promise`<`unknown`>

***

### [patch](#patch)

▸ **patch**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PATCH request to a backend service.

```typescript
window.ddClient.backend
 .patch("/some/service", { ... })
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [patch](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#patch) instead.

#### [Parameters](#parameters-4)

Name

Type

Description

`url`

`string`

The URL of the backend service.

`data`

`any`

The body of the request.

#### [Returns](#returns-4)

`Promise`<`unknown`>

***

### [delete](#delete)

▸ **delete**(`url`): `Promise`<`unknown`>

Performs an HTTP DELETE request to a backend service.

```typescript
window.ddClient.backend
 .delete("/some/service")
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [delete](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#delete) instead.

#### [Parameters](#parameters-5)

Name

Type

Description

`url`

`string`

The URL of the backend service.

#### [Returns](#returns-5)

`Promise`<`unknown`>

***

### [head](#head)

▸ **head**(`url`): `Promise`<`unknown`>

Performs an HTTP HEAD request to a backend service.

```typescript
window.ddClient.backend
 .head("/some/service")
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [head](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#head) instead.

#### [Parameters](#parameters-6)

Name

Type

Description

`url`

`string`

The URL of the backend service.

#### [Returns](#returns-6)

`Promise`<`unknown`>

***

### [request](#request)

▸ **request**(`config`): `Promise`<`unknown`>

Performs an HTTP request to a backend service.

```typescript
window.ddClient.backend
 .request({ url: "/url", method: "GET", headers: { 'header-key': 'header-value' }, data: { ... }})
 .then((value: any) => console.log(value));
```

> Warning
>
> It will be removed in a future version. Use [request](https://docs.docker.com/reference/api/extensions-sdk/HttpService/#request) instead.

#### [Parameters](#parameters-7)

Name

Type

Description

`config`

[`RequestConfigV0`](https://docs.docker.com/reference/api/extensions-sdk/RequestConfigV0/)

The URL of the backend service.

#### [Returns](#returns-7)

`Promise`<`unknown`>

***

## [VM Methods](#vm-methods)

### [execInVMExtension](#execinvmextension)

▸ **execInVMExtension**(`cmd`): `Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

Executes a command inside the backend container. If your extensions ships with additional binaries that should be run inside the backend container you can use the `execInVMExtension` function.

```typescript
const output = await window.ddClient.backend.execInVMExtension(
  `cliShippedInTheVm xxx`
);

console.log(output);
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

#### [Returns](#returns-8)

`Promise`<[`ExecResultV0`](https://docs.docker.com/reference/api/extensions-sdk/ExecResultV0/)>

***

### [spawnInVMExtension](#spawninvmextension)

▸ **spawnInVMExtension**(`cmd`, `args`, `callback`): `void`

Returns a stream from the command executed in the backend container.

```typescript
window.ddClient.spawnInVMExtension(
  `cmd`,
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
> It will be removed in a future version.

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

#### [Returns](#returns-9)

`void`

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/BackendV0.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fBackendV0%2f\&labels=status%2Ftriage)

Table of contents
