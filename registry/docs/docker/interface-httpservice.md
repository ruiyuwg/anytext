When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: HttpService

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.0

## [Methods](#methods)

### [get](#get)

▸ **get**(`url`): `Promise`<`unknown`>

Performs an HTTP GET request to a backend service.

```typescript
ddClient.extension.vm.service
 .get("/some/service")
 .then((value: any) => console.log(value)
```

#### [Parameters](#parameters)

Name

Type

Description

`url`

`string`

The URL of the backend service.

#### [Returns](#returns)

`Promise`<`unknown`>

***

### [post](#post)

▸ **post**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP POST request to a backend service.

```typescript
ddClient.extension.vm.service
 .post("/some/service", { ... })
 .then((value: any) => console.log(value));
```

#### [Parameters](#parameters-1)

Name

Type

Description

`url`

`string`

The URL of the backend service.

`data`

`any`

The body of the request.

#### [Returns](#returns-1)

`Promise`<`unknown`>

***

### [put](#put)

▸ **put**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PUT request to a backend service.

```typescript
ddClient.extension.vm.service
 .put("/some/service", { ... })
 .then((value: any) => console.log(value));
```

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

### [patch](#patch)

▸ **patch**(`url`, `data`): `Promise`<`unknown`>

Performs an HTTP PATCH request to a backend service.

```typescript
ddClient.extension.vm.service
 .patch("/some/service", { ... })
 .then((value: any) => console.log(value));
```

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

### [delete](#delete)

▸ **delete**(`url`): `Promise`<`unknown`>

Performs an HTTP DELETE request to a backend service.

```typescript
ddClient.extension.vm.service
 .delete("/some/service")
 .then((value: any) => console.log(value));
```

#### [Parameters](#parameters-4)

Name

Type

Description

`url`

`string`

The URL of the backend service.

#### [Returns](#returns-4)

`Promise`<`unknown`>

***

### [head](#head)

▸ **head**(`url`): `Promise`<`unknown`>

Performs an HTTP HEAD request to a backend service.

```typescript
ddClient.extension.vm.service
 .head("/some/service")
 .then((value: any) => console.log(value));
```

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

### [request](#request)

▸ **request**(`config`): `Promise`<`unknown`>

Performs an HTTP request to a backend service.

```typescript
ddClient.extension.vm.service
 .request({ url: "/url", method: "GET", headers: { 'header-key': 'header-value' }, data: { ... }})
 .then((value: any) => console.log(value));
```

#### [Parameters](#parameters-6)

Name

Type

Description

`config`

[`RequestConfig`](https://docs.docker.com/reference/api/extensions-sdk/RequestConfig/)

The URL of the backend service.

#### [Returns](#returns-6)

`Promise`<`unknown`>

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/HttpService.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fHttpService%2f\&labels=status%2Ftriage)

Table of contents
