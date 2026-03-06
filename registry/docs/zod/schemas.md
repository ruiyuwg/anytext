# Zod — Defining Schemas

## Primitives

```typescript
import { z } from "zod";

z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();
z.undefined();
z.null();
z.void();       // accepts undefined
z.any();
z.unknown();
z.never();
```

## Strings

```typescript
z.string().min(1);                  // Minimum length
z.string().max(255);                // Maximum length
z.string().length(5);               // Exact length
z.string().email();                 // Email format
z.string().url();                   // URL format
z.string().uuid();                  // UUID format
z.string().cuid();                  // CUID format
z.string().regex(/^[a-z]+$/);       // Custom regex
z.string().startsWith("https://");
z.string().endsWith(".com");
z.string().trim();                  // Trims whitespace
z.string().toLowerCase();
z.string().toUpperCase();
z.string().datetime();              // ISO 8601 datetime
z.string().ip();                    // IP address (v4 or v6)
```

## Numbers

```typescript
z.number().gt(0);           // > 0
z.number().gte(0);          // >= 0 (alias: .min(0))
z.number().lt(100);         // < 100
z.number().lte(100);        // <= 100 (alias: .max(100))
z.number().int();           // Integer only
z.number().positive();      // > 0
z.number().nonnegative();   // >= 0
z.number().negative();      // < 0
z.number().multipleOf(5);   // Must be divisible by 5
z.number().finite();
z.number().safe();          // Within Number.MIN/MAX_SAFE_INTEGER
```

## Objects

```typescript
const User = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

type User = z.infer<typeof User>;
// { name: string; age: number; email: string }

// Access shape
User.shape.name;    // z.string()
User.shape.age;     // z.number()
```

### Object Methods

```typescript
// Make all fields optional
User.partial();
// { name?: string; age?: number; email?: string }

// Make specific fields optional
User.partial({ age: true });
// { name: string; age?: number; email: string }

// Make all fields required
User.required();

// Pick fields
User.pick({ name: true, email: true });
// { name: string; email: string }

// Omit fields
User.omit({ age: true });
// { name: string; email: string }

// Extend
User.extend({ role: z.string() });
// { name: string; age: number; email: string; role: string }

// Merge two schemas
const A = z.object({ a: z.string() });
const B = z.object({ b: z.number() });
const AB = A.merge(B);
// { a: string; b: number }

// Strict (reject unknown keys)
User.strict();

// Passthrough (allow unknown keys)
User.passthrough();

// Strip (remove unknown keys) — default behavior
User.strip();

// keyof
User.keyof(); // z.enum(["name", "age", "email"])
```

## Arrays

```typescript
z.array(z.string());           // string[]
z.string().array();             // same — string[]

z.array(z.number()).min(1);     // At least 1 element
z.array(z.number()).max(10);    // At most 10 elements
z.array(z.number()).length(3);  // Exactly 3 elements
z.array(z.number()).nonempty(); // At least 1 (narrows type)
```

## Tuples

```typescript
z.tuple([z.string(), z.number()]);
// [string, number]

z.tuple([z.string(), z.number()]).rest(z.boolean());
// [string, number, ...boolean[]]
```

## Unions

```typescript
z.union([z.string(), z.number()]);
// string | number

// Shorthand
z.string().or(z.number());
// string | number
```

## Discriminated Unions

```typescript
const Shape = z.discriminatedUnion("type", [
  z.object({ type: z.literal("circle"), radius: z.number() }),
  z.object({ type: z.literal("rect"), width: z.number(), height: z.number() }),
]);
// Faster parsing than z.union for tagged objects
```

## Enums

```typescript
// Zod enum
z.enum(["admin", "user", "guest"]);

// Extract values
const Role = z.enum(["admin", "user", "guest"]);
Role.enum.admin;    // "admin"
Role.options;       // ["admin", "user", "guest"]

// Native enum
enum Direction { Up, Down, Left, Right }
z.nativeEnum(Direction);
```

## Literals

```typescript
z.literal("hello");
z.literal(42);
z.literal(true);
z.literal(null);
```

## Optionals & Nullables

```typescript
z.string().optional();             // string | undefined
z.string().nullable();             // string | null
z.string().nullish();              // string | null | undefined

// Unwrap
z.string().optional().unwrap();    // z.string()

// Default value
z.string().default("hello");       // Uses "hello" if undefined
z.number().default(() => Math.random());
```

## Records

```typescript
z.record(z.number());                  // { [key: string]: number }
z.record(z.string(), z.number());      // Same — explicit key type
z.record(z.enum(["a", "b"]), z.number()); // { a: number; b: number }
```

## Maps & Sets

```typescript
z.map(z.string(), z.number());    // Map<string, number>
z.set(z.string());                 // Set<string>
z.set(z.string()).min(1).max(10);
```

## Recursive Types

```typescript
interface Category {
  name: string;
  children: Category[];
}

const Category: z.ZodType<Category> = z.lazy(() =>
  z.object({
    name: z.string(),
    children: z.array(Category),
  })
);
```

## Type Inference

```typescript
const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
});

// Infer the output type
type User = z.infer<typeof UserSchema>;
// { name: string; age?: number }

// Infer the input type (before transforms)
type UserInput = z.input<typeof UserSchema>;

// Infer the output type (after transforms)
type UserOutput = z.output<typeof UserSchema>;
```
