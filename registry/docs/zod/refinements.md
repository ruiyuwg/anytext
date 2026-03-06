## Refinements

Every Zod schema stores an array of _refinements_. Refinements are a way to perform custom validation that Zod doesn't provide a native API for.

### `.refine()`

{/\*
Checks do not (in fact, cannot) change the inferred type of the schema.

### `.refine()` \*/}

````
```ts
const myString = z.string().refine((val) => val.length <= 255);
```



```ts
const myString = z.string().check(z.refine((val) => val.length <= 255));
```
````

Refinement functions should never throw. Instead they should return a falsy value to signal failure. Thrown errors are not caught by Zod.

#### `error`

To customize the error message:

````
```ts
const myString = z.string().refine((val) => val.length > 8, {
  error: "Too short!"
});
```



```ts
const myString = z.string().check(
  z.refine((val) => val.length > 8, { error: "Too short!" })
);
```
````

#### `abort`

By default, validation issues from checks are considered _continuable_; that is, Zod will execute _all_ checks in sequence, even if one of them causes a validation error. This is usually desirable, as it means Zod can surface as many errors as possible in one go.

````
```ts
const myString = z.string()
  .refine((val) => val.length > 8, { error: "Too short!" })
  .refine((val) => val === val.toLowerCase(), { error: "Must be lowercase" });


const result = myString.safeParse("OH NO");
result.error?.issues;
/* [
  { "code": "custom", "message": "Too short!" },
  { "code": "custom", "message": "Must be lowercase" }
] */
```



```ts
const myString = z.string().check(
  z.refine((val) => val.length > 8, { error: "Too short!" }),
  z.refine((val) => val === val.toLowerCase(), { error: "Must be lowercase" })
);

const result = z.safeParse(myString, "OH NO");
result.error?.issues;
/* [
  { "code": "custom", "message": "Too short!" },
  { "code": "custom", "message": "Must be lowercase" }
] */
```
````

To mark a particular refinement as _non-continuable_, use the `abort` parameter. Validation will terminate if the check fails.

````
```ts
const myString = z.string()
  .refine((val) => val.length > 8, { error: "Too short!", abort: true })
  .refine((val) => val === val.toLowerCase(), { error: "Must be lowercase", abort: true });


const result = myString.safeParse("OH NO");
result.error?.issues;
// => [{ "code": "custom", "message": "Too short!" }]
```



```ts
const myString = z.string().check(
  z.refine((val) => val.length > 8, { error: "Too short!", abort: true }),
  z.refine((val) => val === val.toLowerCase(), { error: "Must be lowercase", abort: true })
);

const result = z.safeParse(myString, "OH NO");
result.error?.issues;
// [ { "code": "custom", "message": "Too short!" }]
```
````

#### `path`

To customize the error path, use the `path` parameter. This is typically only useful in the context of object schemas.

````
```ts
const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });
```



```ts
const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .check(z.refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  }));
```
````

This will set the `path` parameter in the associated issue:

````
```ts
const result = passwordForm.safeParse({ password: "asdf", confirm: "qwer" });
result.error.issues;
/* [{
  "code": "custom",
  "path": [ "confirm" ],
  "message": "Passwords don't match"
}] */
```



```ts
const result = z.safeParse(passwordForm, { password: "asdf", confirm: "qwer" });
result.error.issues;
/* [{
  "code": "custom",
  "path": [ "confirm" ],
  "message": "Passwords don't match"
}] */
```
````

To define an asynchronous refinement, just pass an `async` function:

```ts
const userId = z.string().refine(async (id) => {
  // verify that ID exists in database
  return true;
});
```

If you use async refinements, you must use the `.parseAsync` method to parse data! Otherwise Zod will throw an error.

````
  ```ts
  const result = await userId.parseAsync("abc123");
  ```



  ```ts
  const result = await z.parseAsync(userId, "abc123");
  ```
````

#### `when`

> **Note** — This is a power user feature and can absolutely be abused in ways that will increase the probability of uncaught errors originating from inside your refinements.

By default, refinements don't run if any _non-continuable_ issues have already been encountered. Zod is careful to ensure the type signature of the value is correct before passing it into any refinement functions.

```ts
const schema = z.string().refine((val) => {
  return val.length > 8;
});

schema.parse(1234); // invalid_type: refinement won't be executed
```

In some cases, you want finer control over when refinements run. For instance consider this "password confirm" check:

````
```ts
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
    anotherField: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

schema.parse({
  password: "asdf",
  confirmPassword: "asdf",
  anotherField: 1234 // ❌ this error will prevent the password check from running
});
```



```ts
const schema = z
  .object({
    password: z.string().check(z.minLength(8)),
    confirmPassword: z.string(),
    anotherField: z.string(),
  })
  .check(z.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }));

schema.parse({
  password: "asdf",
  confirmPassword: "asdf",
  anotherField: 1234 // ❌ this error will prevent the password check from running
});
```
````

An error on `anotherField` will prevent the password confirmation check from executing, even though the check doesn't depend on `anotherField`. To control when a refinement will run, use the `when` parameter:

````
```ts
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
    anotherField: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

    // run if password & confirmPassword are valid
    when(payload) { // [!code ++]
      return schema // [!code ++]
        .pick({ password: true, confirmPassword: true }) // [!code ++]
        .safeParse(payload.value).success; // [!code ++]
    },  // [!code ++]
  });

schema.parse({
  password: "asdf",
  confirmPassword: "asdf",
  anotherField: 1234 // ❌ this error will not prevent the password check from running
});
```



```ts
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
    anotherField: z.string(),
  })
  .check(z.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
    when(payload) { // [!code ++]
      // no issues with `password` or `confirmPassword` // [!code ++]
      return payload.issues.every((iss) => { // [!code ++]
        const firstPathEl = iss.path?.[0]; // [!code ++]
        return firstPathEl !== "password" && firstPathEl !== "confirmPassword"; // [!code ++]
      }); // [!code ++]
    },  // [!code ++]
  }));

schema.parse({
  password: "asdf",
  confirmPassword: "asdf",
  anotherField: 1234 // ❌ this error will prevent the password check from running
});
```
````

### `.superRefine()`

The regular `.refine` API only generates a single issue with a `"custom"` error code, but `.superRefine()` makes it possible to create multiple issues using any of Zod's [internal issue types](https://github.com/colinhacks/zod/blob/main/packages/zod/src/v4/core/errors.ts).

````
```ts
const UniqueStringArray = z.array(z.string()).superRefine((val, ctx) => {
  if (val.length > 3) {
    ctx.addIssue({
      code: "too_big",
      maximum: 3,
      origin: "array",
      inclusive: true,
      message: "Too many items 😡",
      input: val,
    });
  }

  if (val.length !== new Set(val).size) {
    ctx.addIssue({
      code: "custom",
      message: `No duplicates allowed.`,
      input: val,
    });
  }
});


```



```ts
const UniqueStringArray = z.array(z.string()).check(
  z.superRefine((val, ctx) => {
    if (val.length > 3) {
      ctx.addIssue({
        code: "too_big",
        maximum: 3,
        origin: "array",
        inclusive: true,
        message: "Too many items 😡",
        input: val,
      });
    }

    if (val.length !== new Set(val).size) {
      ctx.addIssue({
        code: "custom",
        message: `No duplicates allowed.`,
        input: val,
      });
    }
  })
);
```
````

### `.check()`

**Note** — The `.check()` API is a more low-level API that's generally more complex than `.superRefine()`. It can be faster in performance-sensitive code paths, but it's also more verbose.

````
The `.refine()` API is syntactic sugar atop a more versatile (and verbose) API called `.check()`. You can use this API to create multiple issues in a single refinement or have full control of the generated issue objects.



    ```ts
    const UniqueStringArray = z.array(z.string()).check((ctx) => {
      if (ctx.value.length > 3) {
        // full control of issue objects
        ctx.issues.push({
          code: "too_big",
          maximum: 3,
          origin: "array",
          inclusive: true,
          message: "Too many items 😡",
          input: ctx.value
        });
      }

      // create multiple issues in one refinement
      if (ctx.value.length !== new Set(ctx.value).size) {
        ctx.issues.push({
          code: "custom",
          message: `No duplicates allowed.`,
          input: ctx.value,
          continue: true // make this issue continuable (default: false)
        });
      }
    });
    ```



    ```ts
    const UniqueStringArray = z.array(z.string()).check((ctx) => {
      // full control of issue objects
      if (ctx.value.length > 3) {
        ctx.issues.push({
          code: "too_big",
          maximum: 3,
          origin: "array",
          inclusive: true,
          message: "Too many items 😡",
          input: ctx.value
        });
      }

    // create multiple issues in one refinement
      if (ctx.value.length !== new Set(ctx.value).size) {
        ctx.issues.push({
          code: "custom",
          message: `No duplicates allowed.`,
          input: ctx.value,
          continue: true // make this issue continuable (default: false)
        });
      }
    });
    ```

````
