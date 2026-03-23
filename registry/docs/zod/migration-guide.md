# Migration guide

import { Callout } from "fumadocs-ui/components/callout";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";

This migration guide aims to list the breaking changes in Zod 4 in order of highest to lowest impact. To learn more about the performance enhancements and new features of Zod 4, read the [introductory post](/v4).

{/\* To give the ecosystem time to migrate, Zod 4 will initially be published alongside Zod v3.25. To use Zod 4, upgrade to `zod@3.25.0` or later: \*/}

```
npm install zod@^4.0.0
```

{/\* Zod 4 is available at the `"/v4"` subpath:

````ts
import * as z from "zod";
``` */}

Many of Zod's behaviors and APIs have been made more intuitive and cohesive. The breaking changes described in this document often represent major quality-of-life improvements for Zod users. I strongly recommend reading this guide thoroughly.


**Note** — Zod 3 exported a number of undocumented quasi-internal utility types and functions that are not considered part of the public API. Changes to those are not documented here.



**Unofficial codemod** — A community-maintained codemod [`zod-v3-to-v4`](https://github.com/nicoespeon/zod-v3-to-v4) is available.


## Error customization

Zod 4 standardizes the APIs for error customization under a single, unified `error` param. Previously Zod's error customization APIs were fragmented and inconsistent. This is cleaned up in Zod 4.

### deprecates `message` parameter

Replaces `message` param with `error`. The old `message` parameter is still supported but deprecated.



  ```ts
  z.string().min(5, { error: "Too short." });
  ```



  ```ts
  z.string().min(5, { message: "Too short." });
  ```



### drops `invalid_type_error` and `required_error`

The `invalid_type_error` / `required_error` params have been dropped. These were hastily added years ago as a way to customize errors that was less verbose than `errorMap`. They came with all sorts of footguns (they can't be used in conjunction with `errorMap`) and do not align with Zod's actual issue codes (there is no `required` issue code).

These can now be cleanly represented with the new `error` parameter.



  ```ts
  z.string({ 
    error: (issue) => issue.input === undefined 
      ? "This field is required" 
      : "Not a string" 
  });
  ```



  ```ts
  z.string({ 
    required_error: "This field is required",
    invalid_type_error: "Not a string", 
  });
  ```



### drops `errorMap`

This is renamed to `error`.

Error maps can also now return a plain `string` (instead of `{message: string}`). They can also return `undefined`, which tells Zod to yield control to the next error map in the chain.



  ```ts
  z.string().min(5, {
    error: (issue) => {
      if (issue.code === "too_small") {
        return `Value must be >${issue.minimum}`
      }
    },
  });
  ```



  ```ts
  z.string({
    errorMap: (issue, ctx) => {
      if (issue.code === "too_small") {
        return { message: `Value must be >${issue.minimum}` };
      }
      return { message: ctx.defaultError };
    },
  });
  ```



{/* ## `.safeParse()` 

For performance reasons, the errors returned by `.safeParse()` and `.safeParseAsync()` no longer extend `Error`. 

```ts
const result = z.string().safeParse(12); 
result.error! instanceof Error; // => false
````

It is very slow to instantiate `Error` instances in JavaScript, as the initialization process snapshots the call stack. In the case of Zod's "safe" parse methods, it's expected that you will handle errors at the point of parsing, so instantiating a true `Error` object adds little value anyway.

> Pro tip: prefer `.safeParse()` over `try/catch` in performance-sensitive code.

By contrast the errors thrown by `.parse()` and `.parseAsync()` still extend `Error`. Aside from the prototype difference, the error classes are identical.

```ts
try {
z.string().parse(12);
} catch (err) {
console.log(err instanceof Error); // => true
}
```

\*/}
