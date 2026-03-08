Data APIs

# useSubmission

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submission.mdx)

The `useSubmission` primitive returns the state of the *most recent* submission for a given [action](/solid-router/concepts/actions).

***

## [Import](/solid-router/reference/data-apis/use-submission#import)

```
import { useSubmission } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/use-submission#type)

```
function useSubmission<T extends Array<any>, U, V>(  fn: Action<T, U, V>,  filter?: (input: V) => boolean): Submission<T, NarrowResponse<U>> | SubmissionStub;
```

***

## [Parameters](/solid-router/reference/data-apis/use-submission#parameters)

### [`action`](/solid-router/reference/data-apis/use-submission#action)

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to track.

### [`filter`](/solid-router/reference/data-apis/use-submission#filter)

- **Type:** `(input: V) => boolean`
- **Required:** No

A function that filters submissions. It is executed for each submission in the order of creation. It receives an array of the action's inputs as a parameter and must return `true` to select the submission or `false` otherwise. The first submission that passes the filter is returned by `useSubmission`.

***

## [Return value](/solid-router/reference/data-apis/use-submission#return-value)

`useSubmission` returns a reactive object with the following properties:

### [`input`](/solid-router/reference/data-apis/use-submission#input)

A reactive value representing the input data of the action.

### [`result`](/solid-router/reference/data-apis/use-submission#result)

A reactive value representing the successful return value of the action.

### [`error`](/solid-router/reference/data-apis/use-submission#error)

A reactive value representing any error thrown by the action.

### [`pending`](/solid-router/reference/data-apis/use-submission#pending)

A reactive boolean indicating if the action is currently running.

### [`clear`](/solid-router/reference/data-apis/use-submission#clear)

A function to clear the submission's state.

### [`retry`](/solid-router/reference/data-apis/use-submission#retry)

A function to re-execute the submission with the same input.

***

## [Examples](/solid-router/reference/data-apis/use-submission#examples)

### [Basic usage](/solid-router/reference/data-apis/use-submission#basic-usage)

```
import { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
const addTodoAction = action(async (formData: FormData) => {  const name = formData.get("name")?.toString();
  if (!name || name.length <= 2) {    return { ok: false, message: "Name must be larger than 2 characters." };  }
  // ... Sends the todo data to the server.
  return { ok: true };}, "addTodo");
function AddTodoForm() {  const submission = useSubmission(addTodoAction);
  return (    <form action={addTodoAction} method="post">      <input name="name" />      <button type="submit">{submission.pending ? "Adding..." : "Add"}</button>      <Show when={!submission.result?.ok}>        <div>          <p>{submission.result.message}</p>          <button onClick={() => submission.clear()}>Clear</button>          <button onClick={() => submission.retry()}>Retry</button>        </div>      </Show>    </form>  );}
```

### [Filtering submissions](/solid-router/reference/data-apis/use-submission#filtering-submissions)

```
import { useSubmission } from "@solidjs/router";
const addTodoAction = action(async (formData: FormData) => {  // ... Sends the todo data to the server.}, "addTodo");
function LatestTodo() {  const latestValidSubmission = useSubmission(    addTodoAction,    ([formData]: [FormData]) => {      const name = formData.get("name")?.toString();      return name && name.length > 2;    }  );
  return <p>Latest valid submission: {latestValidSubmission.result}</p>;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-submission.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-submission)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [action](#action)
   2. [filter](#filter)
5. [Return value](#return-value)
   1. [input](#input)
   2. [result](#result)
   3. [error](#error)
   4. [pending](#pending)
   5. [clear](#clear)
   6. [retry](#retry)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [Filtering submissions](#filtering-submissions)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submission.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-submission.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-submission)
