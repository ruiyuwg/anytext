# Zod — Validation & Parsing

## parse

Parses data and throws `ZodError` on failure:

```typescript
import { z } from "zod";

const schema = z.string().email();

schema.parse("hello@example.com"); // "hello@example.com"
schema.parse("not-an-email");      // throws ZodError
```

## safeParse

Returns a result object instead of throwing:

```typescript
const result = schema.safeParse("hello@example.com");

if (result.success) {
  result.data; // "hello@example.com" — typed as string
} else {
  result.error; // ZodError with details
}
```

## Async Parsing

For schemas with async refinements or transforms:

```typescript
await schema.parseAsync(data);
await schema.safeParseAsync(data);
```

## Refinements

Add custom validation logic:

```typescript
const password = z.string().refine(
  (val) => val.length >= 8,
  { message: "Password must be at least 8 characters" }
);

// With custom error path
const form = z.object({
  password: z.string(),
  confirm: z.string(),
}).refine(
  (data) => data.password === data.confirm,
  {
    message: "Passwords don't match",
    path: ["confirm"], // Attach error to "confirm" field
  }
);
```

## superRefine

For advanced validation with multiple errors:

```typescript
const schema = z.string().superRefine((val, ctx) => {
  if (val.length < 8) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Must be 8+ characters",
    });
  }
  if (!/[A-Z]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Must contain an uppercase letter",
    });
  }
});
```

## Transforms

Transform data during parsing:

```typescript
const schema = z.string().transform((val) => val.length);
schema.parse("hello"); // 5 — type is number

// Chain validation and transform
const trimmedEmail = z.string().email().trim().toLowerCase();

// Transform between types
const numberFromString = z.string().transform(Number);
```

## Coercion

Coerce input to the target type before validation:

```typescript
z.coerce.string();  // String(input) — works with any input
z.coerce.number();  // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.date();    // new Date(input)
z.coerce.bigint();  // BigInt(input)

// Useful for form data / query params
z.coerce.number().parse("42");  // 42
z.coerce.boolean().parse("true"); // true (any truthy value → true)
```

## Preprocess

Run a function before parsing:

```typescript
const schema = z.preprocess(
  (val) => (typeof val === "string" ? val.trim() : val),
  z.string().min(1)
);
```

## Pipe

Chain schemas with type transformations:

```typescript
z.string()
  .transform((val) => val.length)
  .pipe(z.number().min(5));
// Parse string → transform to length → validate length >= 5
```

## ZodError

```typescript
const result = schema.safeParse(badData);
if (!result.success) {
  result.error.issues;
  // [{
  //   code: "invalid_type",
  //   expected: "string",
  //   received: "number",
  //   path: ["name"],
  //   message: "Expected string, received number"
  // }]

  result.error.format();
  // Nested object matching your schema shape with _errors arrays

  result.error.flatten();
  // { formErrors: string[], fieldErrors: { [key]: string[] } }
}
```

## Custom Error Messages

```typescript
z.string({ required_error: "Name is required" });
z.string({ invalid_type_error: "Name must be a string" });

z.string().min(1, "Required");
z.string().min(1, { message: "Required" });
z.number().max(100, "Must be 100 or less");
```

## Catch (Default on Failure)

```typescript
z.string().catch("default");
// Returns "default" instead of throwing on invalid input

z.number().catch(0);
```
