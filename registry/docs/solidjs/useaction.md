Data APIs

# useAction

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-action.mdx)

The `useAction` primitive returns a function that triggers an [action](/solid-router/concepts/actions) when called.

`useAction` requires client-side JavaScript and is not progressively enhanceable.

***

## [Import](/solid-router/reference/data-apis/use-action#import)

```
import { useAction } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/use-action#type)

```
function useAction<T extends Array<any>, U, V>(  action: Action<T, U, V>): (...args: Parameters<Action<T, U, V>>) => Promise<NarrowResponse<U>>;
```

***

## [Parameters](/solid-router/reference/data-apis/use-action#parameters)

### [`action`](/solid-router/reference/data-apis/use-action#action)

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to be triggered.

***

## [Return value](/solid-router/reference/data-apis/use-action#return-value)

`useAction` returns a function that triggers the action. It takes the same parameters as the action handler and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the action's result.

***

## [Example](/solid-router/reference/data-apis/use-action#example)

```
import { action, useAction } from "@solidjs/router";
const likePostAction = action(async (id: string) => {  // ... Likes a post on the server.});
function LikeButton(props: { postId: string }) {  const likePost = useAction(likePostAction);
  return <button onClick={() => likePost(props.postId)}>Like</button>;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-action.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-action)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [action](#action)
5. [Return value](#return-value)
6. [Example](#example)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-action.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-action.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-action)
