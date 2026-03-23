Data APIs

# useSubmissions

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submissions.mdx)

The `useSubmissions` primitive returns the state of all submissions for a given [action](/solid-router/concepts/actions).

***

## [Import](/solid-router/reference/data-apis/use-submissions#import)

```
import { useSubmissions } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/use-submissions#type)

```
function useSubmissions<T extends Array<any>, U, V>(  fn: Action<T, U, V>,  filter?: (input: V) => boolean): Submission<T, NarrowResponse<U>>[] & {  pending: boolean;};
```

***

## [Parameters](/solid-router/reference/data-apis/use-submissions#parameters)

### [`action`](/solid-router/reference/data-apis/use-submissions#action)

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to track.

### [`filter`](/solid-router/reference/data-apis/use-submissions#filter)

- **Type:** `(input: V) => boolean`
- **Required:** No

A function that filters submissions. It is executed for each submission in the order of creation. It receives an array of the action's inputs as a parameter and must return `true` to select the submission or `false` otherwise.

***

## [Return value](/solid-router/reference/data-apis/use-submissions#return-value)

`useSubmissions` returns a reactive array of submission objects. Each submission object has the following properties:

### [`input`](/solid-router/reference/data-apis/use-submissions#input)

The reactive input data of the action.

### [`result`](/solid-router/reference/data-apis/use-submissions#result)

A reactive value representing the successful return value of the action.

### [`error`](/solid-router/reference/data-apis/use-submissions#error)

A reactive value for any error thrown by the action.

### [`pending`](/solid-router/reference/data-apis/use-submissions#pending)

A reactive boolean indicating if the action is currently running.

### [`clear`](/solid-router/reference/data-apis/use-submissions#clear)

A function to clear the submission's state.

### [`retry`](/solid-router/reference/data-apis/use-submissions#retry)

A function to re-execute the submission with the same input.

***

## [Examples](/solid-router/reference/data-apis/use-submissions#examples)

### [Basic usage](/solid-router/reference/data-apis/use-submissions#basic-usage)

```
import { For, Show } from "solid-js";import { action, useSubmissions } from "@solidjs/router";
const addTodoAction = action(async (formData: FormData) => {  // ... Sends the todo data to the server.}, "addTodo");
function AddTodoForm() {  const submissions = useSubmissions(addTodoAction);
  return (    <div>      <form action={addTodoAction} method="post">        <input name="name" />        <button type="submit">Add</button>      </form>      <For each={submissions}>        {(submission) => (          <div>            <span>Adding "{submission.input[0].get("name")?.toString()}"</span>            <Show when={submission.pending}>              <span> (pending...)</span>            </Show>            <Show when={submission.result?.ok}>              <span> (completed)</span>            </Show>            <Show when={!submission.result?.ok}>              <span>{` (Error: ${submission.result?.message})`}</span>              <button onClick={() => submission.retry()}>Retry</button>            </Show>          </div>        )}      </For>    </div>  );}
```

### [Filtering submissions](/solid-router/reference/data-apis/use-submissions#filtering-submissions)

```
import { useSubmissions } from "@solidjs/router";
const addTodoAction = action(async (formData: FormData) => {  // ... Sends the todo data to the server.}, "addTodo");
function FailedTodos() {  const failedSubmissions = useSubmissions(    addTodoAction,    ([formData]: [FormData]) => {      // Filters for submissions that failed a client-side validation      const name = formData.get("name")?.toString() ?? "";      return name.length <= 2;    }  );
  return (    <div>      <p>Failed submissions:</p>      <For each={failedSubmissions}>        {(submission) => (          <div>            <span>{submission.input[0].get("name")?.toString()}</span>            <button onClick={() => submission.retry()}>Retry</button>          </div>        )}      </For>    </div>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-submissions.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-submissions)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submissions.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/use-submissions.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/use-submissions)
