# Actions API Reference

**Added in:** `astro@4.15.0`

Actions help you build a type-safe backend you can call from client code and HTML forms. All utilities to define and call actions are exposed by the `astro:actions` module. For examples and usage instructions, [see the Actions guide](/en/guides/actions/).

## Imports from `astro:actions`

[Section titled “Imports from astro:actions”](#imports-from-astroactions)

```js
import {
  ACTION_QUERY_PARAMS,
  ActionError,
  actions,
  defineAction,
  getActionContext,
  getActionPath,
  isActionError,
  isInputError,
 } from 'astro:actions';
```

### `defineAction()`

[Section titled “defineAction()”](#defineaction)

**Type:** `({ accept, input, handler }) => ActionClient`

A utility to define new actions in the `src/actions/index.ts` file. This accepts a [`handler()`](#handler-property) function containing the server logic to run, and an optional [`input`](#input-validator) property to validate input parameters at runtime.

src/actions/index.ts

```ts
import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';


export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input, context) => {
      return `Hello, ${input.name}!`
    }
  })
}
```

#### `handler()` property

[Section titled “handler() property”](#handler-property)

**Type:** `(input: TInputSchema, context: ActionAPIContext) => TOutput | Promise<TOutput>`

A required function containing the server logic to run when the action is called. Data returned from the `handler()` is automatically serialized and sent to the caller.

The `handler()` is called with user input as its first argument. If an [`input`](#input-validator) validator is set, the user input will be validated before being passed to the handler. The second argument is [a subset of Astro’s `context` object](#actionapicontext).

Return values are parsed using the [devalue library](https://github.com/Rich-Harris/devalue). This supports JSON values and instances of `Date()`, `Map()`, `Set()`, and `URL()`.

#### `input` validator

[Section titled “input validator”](#input-validator)

**Type:** `ZodType | undefined`

An optional property that accepts a [Zod validator](/en/reference/modules/astro-zod/#common-data-type-validators) (e.g. Zod object, Zod discriminated union) to validate handler inputs at runtime. If the action fails to validate, [a `BAD_REQUEST` error](#actionerror) is returned and the `handler` is not called.

If `input` is omitted, the `handler` will receive an input of type `unknown` for JSON requests and type `FormData` for form requests.

#### `accept` property

[Section titled “accept property”](#accept-property)

**Type:** `"form" | "json"`\
**Default:** `json`

Defines the format expected by an action:

- Use `form` when your action accepts `FormData`.
- Use `json`, the default, for all other cases.

When your action accepts form inputs, the `z.object()` validator will automatically parse `FormData` to a typed object. All Zod validators are supported to validate your inputs.

Learn about [using validators with form inputs](/en/guides/actions/#using-validators-with-form-inputs) in the Actions guide, including example usage and special input handling.

### `actions`

[Section titled “actions”](#actions)

**Type:** `Record<string, ActionClient>`

An object containing all your actions with the action name as key associated to a function to call this action.

src/pages/index.astro

```astro
---
---


<script>
import { actions } from 'astro:actions';


async () => {
  const { data, error } = await actions.myAction({ /* ... */ });
}
</script>
```

In order for Astro to recognize this property, you may need to restart the dev server or [run the `astro sync` command](/en/reference/cli-reference/#astro-sync) (`s + enter`).

### `isInputError()`

[Section titled “isInputError()”](#isinputerror)

**Type:** `(error?: unknown) => boolean`

A utility used to check whether [an `ActionError`](#actionerror) is an input validation error. When the `input` validator is a `z.object()`, input errors include a `fields` object with error messages grouped by name.

See the [form input errors guide](/en/guides/actions/#displaying-form-input-errors) for more on using `isInputError()`.

### `isActionError()`

[Section titled “isActionError()”](#isactionerror)

**Type:** `(error?: unknown) => boolean`

A utility to check whether your action raised [an `ActionError`](#actionerror) within the [handler property](#handler-property). This is useful when narrowing the type of a generic error.

src/pages/index.astro

```astro
---
---


<script>
import { isActionError, actions } from 'astro:actions';


async () => {
  const { data, error } = await actions.myAction({ /* ... */ });
  if (isActionError(error)) {
    // Handle action-specific errors
    console.log(error.code);
  }
}
</script>
```

### `ActionError`

[Section titled “ActionError”](#actionerror)

The `ActionError()` constructor is used to create errors thrown by an action `handler`. This accepts a `code` property describing the error that occurred (example: `"UNAUTHORIZED"`), and an optional `message` property with further details.

The following example creates a new `ActionError` when the user is not logged in:

src/actions/index.ts

```ts
import { defineAction, ActionError } from "astro:actions";


export const server = {
  getUserOrThrow: defineAction({
    accept: 'form',
    handler: async (_, { locals }) => {
      if (locals.user?.name !== 'florian') {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'Not logged in',
        });
      }
      return locals.user;
    },
  }),
}
```

You can also use `ActionError` to narrow the error type when handling the results of an action:

src/pages/index.astro

```astro
---
---


<script>
import { ActionError, actions } from 'astro:actions';


async () => {
  const { data, error } = await actions.myAction({ /* ... */ });
  if (error instanceof ActionError) {
    // Handle action-specific errors
    console.log(error.code);
  }
}
</script>
```

#### `code`

[Section titled “code”](#code)

**Type:** `ActionErrorCode`

Defines a human-readable version of an [HTTP status code](#actionerrorcode).

#### `message`

[Section titled “message”](#message)

**Type:** `string`

An optional property to describe the error (e.g. “User must be logged in.”).

#### `stack`

[Section titled “stack”](#stack)

**Type:** `string`

An optional property to pass the stack trace.

### `getActionContext()`

[Section titled “getActionContext()”](#getactioncontext)

**Type:** `(context: APIContext) => AstroActionContext`

**Added in:** `astro@5.0.0`

A function called from your middleware handler to retrieve information about inbound action requests. This returns an `action` object with information about the request, a `deserializeActionResult()` method, and the `setActionResult()` and `serializeActionResult()` functions to programmatically set the value returned by `Astro.getActionResult()`.

`getActionContext()` lets you programmatically get and set action results using middleware, allowing you to persist action results from HTML forms, gate action requests with added security checks, and more.

src/middleware.ts

```ts
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === 'form') {
    const result = await action.handler();
    setActionResult(action.name, serializeActionResult(result));
  }
  return next();
});
```

#### `action`

[Section titled “action”](#action)

**Type:** `{ calledFrom: “rpc” | “form”; name: string; handler: () => Promise<SafeResult>; } | undefined`

An object containing information about an inbound action request. It is available from [`getActionContext()`](#getactioncontext), and provides the action `name`, `handler`, and whether the action was called from a client-side RPC function (e.g. `actions.newsletter()`) or an HTML form action.

src/middleware.ts

```ts
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === 'rpc' && action.name.startsWith('private')) {
    // Check for a valid session token
  }
  // ...
});
```

##### `calledFrom`

[Section titled “calledFrom”](#calledfrom)

**Type:** `"rpc" | "form"`

Whether an action was called using an RPC function or an HTML form action.

##### `name`

[Section titled “name”](#name)

**Type:** `string`

The name of the action. Useful to track the source of an action result during a redirect.

##### `handler()`

[Section titled “handler()”](#handler)

**Type:** `() => Promise<SafeResult>`

A method to programmatically call an action to get the result.

#### `setActionResult()`

[Section titled “setActionResult()”](#setactionresult)

**Type:** `(actionName: string, actionResult: SerializedActionResult) => void`

A function to programmatically set the value returned by `Astro.getActionResult()` in middleware. It is passed the action name and an action result serialized by [`serializeActionResult()`](#serializeactionresult). Calling this function from middleware will disable Astro’s own action result handling.

This is useful when calling actions from an HTML form to persist and load results from a session.

src/middleware.ts

```ts
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';
export const onRequest = defineMiddleware(async (context, next) => {
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === 'form') {
    const result = await action.handler();
    // ... handle the action result
    setActionResult(action.name, serializeActionResult(result));
  }
  return next();
});
```

See the [advanced sessions guide](/en/guides/actions/#advanced-persist-action-results-with-a-session) for a sample implementation using Netlify Blob.

#### `serializeActionResult()`

[Section titled “serializeActionResult()”](#serializeactionresult)

**Type:** `(res: SafeResult) => SerializedActionResult`

Serializes an action result to JSON for persistence. This is required to properly handle non-JSON return values like `Map` or `Date` as well as the `ActionError` object.

Call this function when serializing an action result to be passed to `setActionResult()`:

src/middleware.ts

```ts
import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action) {
    const result = await action.handler();
    setActionResult(action.name, serializeActionResult(result));
  }
  // ...
});
```

#### `deserializeActionResult()`

[Section titled “deserializeActionResult()”](#deserializeactionresult)

**Type:** `(res: SerializedActionResult) => SafeResult`

Reverses the effect of [`serializeActionResult()`](#serializeactionresult) and returns an action result to its original state. This is useful to access the `data` and `error` objects on a serialized action result.

### `getActionPath()`

[Section titled “getActionPath()”](#getactionpath)

**Type:** `(action: ActionClient) => string`

**Added in:** `astro@5.1.0`

A utility that accepts an action and returns a URL path so you can execute an action call as a `fetch()` operation directly. This allows you to provide details such as custom headers when you call your action. Then, you can [handle the custom-formatted returned data](/en/guides/actions/#handling-returned-data) as needed, just as if you had called an action directly.

This example shows how to call a defined `like` action passing the `Authorization` header and the [`keepalive`](https://developer.mozilla.org/en-US/docs/Web/API/Request/keepalive) option:

src/components/my-component.astro

```astro
<script>
import { actions, getActionPath } from 'astro:actions'


await fetch(getActionPath(actions.like), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({ id: 'YOUR_ID' }),
  keepalive: true
})
</script>
```

This example shows how to call the same `like` action using the [`sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API:

src/components/my-component.astro

```astro
<script>
import { actions, getActionPath } from 'astro:actions'


navigator.sendBeacon(
  getActionPath(actions.like),
  new Blob([JSON.stringify({ id: 'YOUR_ID' })], {
    type: 'application/json'
  })
)
</script>
```

### `ACTION_QUERY_PARAMS`

[Section titled “ACTION\_QUERY\_PARAMS”](#action_query_params)

**Type:** `{ actionName: string, actionPayload: string }`

An object containing the query parameter names used internally by Astro when handling form action submissions.

When you submit a form using an action, the following query parameters are added to the URL to track the action call:

- `actionName` - The query parameter that contains the name of the action being called
- `actionPayload` - The query parameter that contains the serialized form data

This constant can be useful when you need to clean up URLs after a form submission. For example, you might want to remove action-related query parameters during a redirect:

src/pages/api/contact.ts

```ts
import type { APIRoute } from "astro";
import { ACTION_QUERY_PARAMS } from 'astro:actions'


export const GET: APIRoute = ({ params, request }) => {
  const link = request.url.searchParams;
  link.delete(ACTION_QUERY_PARAMS.actionName);
  link.delete(ACTION_QUERY_PARAMS.actionPayload);


  return redirect(link, 303);
};
```

## `astro:actions` types

[Section titled “astro:actions types”](#astroactions-types)

```ts
import type {
  ActionAPIContext,
  ActionClient,
  ActionErrorCode,
  ActionInputSchema,
  ActionReturnType,
  SafeResult,
 } from 'astro:actions';
```

### `ActionAPIContext`

[Section titled “ActionAPIContext”](#actionapicontext)

A subset of the [Astro context object](/en/reference/api-reference/). The following properties are not available: `callAction`, `getActionResult`, `props`, and `redirect`.

### `ActionClient`

[Section titled “ActionClient”](#actionclient)

**Types:**

- `(input?: any) => Promise<SafeResult>`
- `{ queryString?: string; orThrow: (input?: any) => Promise<Awaited<TOutput>>; }`

Represents an action to be called on the client. You can use it as a function that accepts input data and returns a Promise with a [`SafeResult` object](#saferesult) containing the action result or validation errors.

The following example shows how you can provide error handling with an `if` statement when incrementing the like count fails:

src/pages/posts/post-1.astro

```astro
---
---


<!-- your template -->


<script>
import { actions } from 'astro:actions';


const post = document.querySelector('article');
const button = document.querySelector('button');
button?.addEventListener('click', async () => {
  const { data: updatedLikes, error } = await actions.likePost({ postId: post?.id });
  if (error) {
    /* handle errors */
  }
})
</script>
```

Alternatively, you can use it as an object giving you access to the `queryString` and an alternative `orThrow()` method.

#### `queryString` property

[Section titled “queryString property”](#querystring-property)

**Type:** `string`

A string representation of the action that can be used to construct form action URLs. This can be useful when your form component is used in multiple places but you need to redirect to a different URL on submit.

The following example uses `queryString` to construct a URL that will be passed to the form `action` attribute through a custom prop:

src/pages/postal-service.astro

```astro
---
import { actions } from 'astro:actions';
import FeedbackForm from "../components/FeedbackForm.astro";


const feedbackUrl = new URL('/feedback', Astro.url);
feedbackUrl.search = actions.myAction.queryString;
---
<FeedbackForm sendTo={feedbackUrl.pathname} />
```

#### `orThrow()` property

[Section titled “orThrow() property”](#orthrow-property)

**Type:** `(input?: any) => Promise<Awaited<TOutput>>`

A method that throws an error on failure instead of returning the errors. This is useful when you want exceptions rather than error handling.

The following example uses `orThrow()` to skip error handling when incrementing the like count fails:

src/pages/posts/post-1.astro

```astro
---
---


<!-- your template -->


<script>
import { actions } from 'astro:actions';


const post = document.querySelector('article');
const button = document.querySelector('button');
button?.addEventListener('click', async () => {
  const updatedLikes = await actions.likePost.orThrow({ postId: post?.id });
})
</script>
```

### `ActionErrorCode`

[Section titled “ActionErrorCode”](#actionerrorcode)

**Type:** `string`

A union type of standard HTTP status codes [defined by IANA](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) using the human-readable versions as uppercase strings separated by an underscore (e.g. `BAD_REQUEST` or `PAYLOAD_TOO_LARGE`).

### `ActionInputSchema`

[Section titled “ActionInputSchema”](#actioninputschema)

**Type:** `ZodType`

**Added in:** `astro@5.16.0`

A utility type that automatically infers the TypeScript type of an action’s input based on its Zod schema. This can be useful to reference an action’s [`input` validator type](#input-validator) as an object in your own type definitions.

Returns `never` when [`input` validator](#input-validator) is omitted.

The following example uses `ActionInputSchema` on an action named `contact` to:

- Retrieve the Zod schema type for the input of the action.
- Retrieve the expected input type of the action’s validator.

src/components/Form.astro

```astro
---
import { actions, ActionInputSchema } from 'astro:actions';
import { z } from 'astro/zod';


type ContactSchema = ActionInputSchema<typeof actions.contact>;
type ContactInput = z.input<ContactSchema>;
---
```

### `ActionReturnType`

[Section titled “ActionReturnType”](#actionreturntype)

**Type:** `Awaited<ReturnType<ActionHandler>>`

A utility type that extracts the output type from [an action handler](#defineaction). This unwraps both the `Promise` (if the handler is async) and the `ReturnType` to give you the [actual output type](#saferesult). This can be useful if you need to reference an action’s output type in your own type definitions.

The following example uses `ActionReturnType` to retrieve the expected output type for an action named `contact`:

src/components/Form.astro

```astro
---
import { actions, ActionReturnType } from 'astro:actions';


type ContactResult = ActionReturnType<typeof actions.contact>;
---
```

### `SafeResult`

[Section titled “SafeResult”](#saferesult)

**Type:** `{ data: TOutput, error: undefined } | { data: undefined, error: ActionError }`

Represents the result of an action call:

- on success, `data` contains the output of the action and `error` is `undefined`.
- on failure, `error` contains an [`ActionError`](#actionerror) with validation errors or runtime errors, and `data` is `undefined`.

# Image and Assets API Reference

**Added in:** `astro@3.0.0`

Astro provides built-in components and helper functions for optimizing and displaying your images. For features and usage examples, [see our image guide](/en/guides/images/).
