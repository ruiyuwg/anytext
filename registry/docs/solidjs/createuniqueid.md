Component APIs

# createUniqueId

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/create-unique-id.mdx)

The `createUniqueId` function generates a unique ID that remains consistent across both server and client renders. It is commonly used with HTML `id` and `for` attributes to ensure stable hydration.

`createUniqueId` does *not* generate a cryptographically secure ID and is not suitable for security-sensitive data. Additionally, it should not be used in scenarios that require uniqueness across a distributed system.

note

`createUniqueId` relies on a counter-based mechanism to generate IDs. It must be called the same number of times on both the server and client.

Calling `createUniqueId` only on the server or only on the client, such as when using [`isServer`](/reference/rendering/is-server) or [`<NoHydration>`](/reference/components/no-hydration), may lead to hydration errors.

***

## [Import](/reference/component-apis/create-unique-id#import)

```
import { createUniqueId } from "solid-js";
```

***

## [Type](/reference/component-apis/create-unique-id#type)

```
function createUniqueId(): string;
```

***

## [Parameters](/reference/component-apis/create-unique-id#parameters)

This function does not take any parameters.

***

## [Returns](/reference/component-apis/create-unique-id#returns)

`createUniqueId` returns a unique `string` that is stable across server and client renders.

***

## [Examples](/reference/component-apis/create-unique-id#examples)

### [Basic Usage](/reference/component-apis/create-unique-id#basic-usage)

```
import { createUniqueId } from "solid-js";
type InputProps = {  id?: string;};
function Input(props: InputProps) {  return <input id={props.id ?? createUniqueId()} />;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/create-unique-id.mdx\&page=https://docs.solidjs.com/reference/component-apis/create-unique-id)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Returns](#returns)
6. [Examples](#examples)
   1. [Basic Usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/create-unique-id.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/create-unique-id.mdx\&page=https://docs.solidjs.com/reference/component-apis/create-unique-id)
