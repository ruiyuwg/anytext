Data APIs

# action

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/action.mdx)

The `action` function wraps an asynchronous function and returns an [action](/solid-router/concepts/actions).

When an action is triggered, it creates a submission object that tracks its execution status. This state can be accessed with the [`useSubmission`](/solid-router/reference/data-apis/use-submission) and [`useSubmissions`](/solid-router/reference/data-apis/use-submissions) primitives.

After an action completed successfully, all queries active in the same page are revalidated, unless revalidation is configured using [response helpers](/solid-router/concepts/actions#managing-navigation-and-revalidation).

***

## [Import](/solid-router/reference/data-apis/action#import)

```
import { action } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/action#type)

```
function action<T extends Array<any>, U = void>(  fn: (...args: T) => Promise<U>,  name?: string): Action<T, U>;
function action<T extends Array<any>, U = void>(  fn: (...args: T) => Promise<U>,  options?: { name?: string; onComplete?: (s: Submission<T, U>) => void }): Action<T, U>;
function action<T extends Array<any>, U = void>(  fn: (...args: T) => Promise<U>,  options:    | string    | { name?: string; onComplete?: (s: Submission<T, U>) => void } = {}): Action<T, U>;
```

***

## [Parameters](/solid-router/reference/data-apis/action#parameters)

### [`handler`](/solid-router/reference/data-apis/action#handler)

- **Type:** `(...args: T) => Promise<U>`
- **Required:** Yes

An asynchronous function that performs the action's logic. When the action is used with a [`<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form), the function receives a [`FormData` object](https://developer.mozilla.org/en-US/docs/Web/API/FormData) as its first parameter.

### [`options`](/solid-router/reference/data-apis/action#options)

- **Type:** `string | { name?: string; onComplete?: (s: Submission<T, U>) => void }`
- **Required**: No

A unique string used to identify the action in Server-Side Rendering (SSR) environments. This is required when using the action with a `<form>` element.

Alternatively, a configuration object can be passed with the following properties.

#### [`name`](/solid-router/reference/data-apis/action#name)

- **Type:** `string`
- **Required:** No

The unique string to identify the action in SSR environments. Required for `<form>` usage.

#### [`onComplete` (optional):](/solid-router/reference/data-apis/action#oncomplete-optional)

- **Type:** `(s: Submission<T, U>) => void`
- **Required:** No

A function that runs after the action completes. It receives a submission object as its parameter.

***

## [Return value](/solid-router/reference/data-apis/action#return-value)

`action` returns an action with the following properties.

### [`with`](/solid-router/reference/data-apis/action#with)

A method that wraps the original action and returns a new one. When this new action is triggered, the arguments passed to `with` are forwarded to the original action. If this new action is used with a `<form>`, the `FormData` object is passed as the last parameter, after any other forwarded parameters.

***

## [Examples](/solid-router/reference/data-apis/action#examples)

### [Form submission](/solid-router/reference/data-apis/action#form-submission)

```
import { action } from "@solidjs/router";
const addTodoAction = action(async (formData: FormData) => {  // Adds a new todo to the server.}, "addTodo");
function TodoForm() {  return (    <form action={addTodoAction} method="post">      <input name="name" />      <button>Add todo</button>    </form>  );}
```

### [Passing additional arguments](/solid-router/reference/data-apis/action#passing-additional-arguments)

```
import { action } from "@solidjs/router";
const addTodoAction = action(async (userId: number, formData: FormData) => {  // ... Adds a new todo for a specific user.}, "addTodo");
function TodoForm() {  const userId = 1;  return (    <form action={addTodoAction.with(userId)} method="post">      <input name="name" />      <button>Add todo</button>    </form>  );}
```

### [Triggering actions programmatically](/solid-router/reference/data-apis/action#triggering-actions-programmatically)

```
import { action, useAction } from "@solidjs/router";
const markDoneAction = action(async (id: string) => {  // ... Marks a todo as done on the server.});
function NotificationItem(props: { id: string }) {  const markDone = useAction(markDoneAction);
  return <button onClick={() => markDone(props.id)}>Mark as done</button>;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/action.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/action)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [handler](#handler)
   2. [options](#options)
5. [Return value](#return-value)
   1. [with](#with)
6. [Examples](#examples)
   1. [Form submission](#form-submission)
   2. [Passing additional arguments](#passing-additional-arguments)
   3. [Triggering actions programmatically](#triggering-actions-programmatically)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/action.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/action.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/action)
