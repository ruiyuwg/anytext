## Objects

To define an object type:

```ts z.object
  // all properties are required by default
  const Person = z.object({
    name: z.string(),
    age: z.number(),
  });

  type Person = z.infer<typeof Person>;
  // => { name: string; age: number; }
```

By default, all properties are required. To make certain properties optional:

````
```ts z.object
const Dog = z.object({
  name: z.string(),
  age: z.number().optional(),
});

Dog.parse({ name: "Yeller" }); // ✅
```



```ts z.object
const Dog = z.object({
  name: z.string(),
  age: z.optional(z.number())
});

Dog.parse({ name: "Yeller" }); // ✅
```
````

By default, unrecognized keys are *stripped* from the parsed result:

```ts z.object
Dog.parse({ name: "Yeller", extraKey: true });
// => { name: "Yeller" }
```

### `z.strictObject`

To define a *strict* schema that throws an error when unknown keys are found:

```ts z.object
const StrictDog = z.strictObject({
  name: z.string(),
});

StrictDog.parse({ name: "Yeller", extraKey: true });
// ❌ throws
```

### `z.looseObject`

To define a *loose* schema that allows unknown keys to pass through:

```ts z.object
const LooseDog = z.looseObject({
  name: z.string(),
});

LooseDog.parse({ name: "Yeller", extraKey: true });
// => { name: "Yeller", extraKey: true }
```

### `.catchall()`

To define a *catchall schema* that will be used to validate any unrecognized keys:

````
```ts z.object
const DogWithStrings = z.object({
  name: z.string(),
  age: z.number().optional(),
}).catchall(z.string());

DogWithStrings.parse({ name: "Yeller", extraKey: "extraValue" }); // ✅
DogWithStrings.parse({ name: "Yeller", extraKey: 42 }); // ❌
```



```ts z.object
const DogWithStrings = z.catchall(
  z.object({
    name: z.string(),
    age: z.number().optional(),
  }),
  z.string()
);

DogWithStrings.parse({ name: "Yeller", extraKey: "extraValue" }); // ✅
DogWithStrings.parse({ name: "Yeller", extraKey: 42 }); // ❌
```
````

### `.shape`

To access the internal schemas:

````
```ts
Dog.shape.name; // => string schema
Dog.shape.age; // => number schema
```



```ts
Dog.def.shape.name; // => string schema
Dog.def.shape.age; // => number schema
```
````

### `.keyof()`

To create a `ZodEnum` schema from the keys of an object schema:

````
```ts
const keySchema = Dog.keyof();
// => ZodEnum<["name", "age"]>
```



```ts
const keySchema = z.keyof(Dog);
// => ZodEnum<["name", "age"]>
```
````

### `.extend()`

To add additional fields to an object schema:

````
```ts
const DogWithBreed = Dog.extend({
  breed: z.string(),
});
```



```ts
const DogWithBreed = z.extend(Dog, {
  breed: z.string(),
});
```
````

This API can be used to overwrite existing fields! Be careful with this power! If the two schemas share keys, B will override A.

**Alternative: spread syntax** — You can alternatively avoid `.extend()` altogether by creating a new object schema entirely. This makes the strictness level of the resulting schema visually obvious.

```ts
const DogWithBreed = z.object({ // or z.strictObject() or z.looseObject()...
  ...Dog.shape,
  breed: z.string(),
});
```

You can also use this to merge multiple objects in one go.

```ts
const DogWithBreed = z.object({
  ...Animal.shape,
  ...Pet.shape,
  breed: z.string(),
});
```

This approach has a few advantages:

1. It uses language-level features ([spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) instead of library-specific APIs
2. The same syntax works in Zod and Zod Mini
3. It's more `tsc`-efficient — the `.extend()` method can be expensive on large schemas, and due to [a TypeScript limitation](https://github.com/microsoft/TypeScript/pull/61505) it gets quadratically more expensive when calls are chained
4. If you wish, you can change the strictness level of the resulting schema by using `z.strictObject()` or `z.looseObject()`

### `.safeExtend()`

The `.safeExtend()` method works similarly to `.extend()`, but it won't let you overwrite an existing property with a non-assignable schema. In other words, the result of `.safeExtend()` will have an inferred type that [`extends`](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#conditional-type-constraints) the original (in the TypeScript sense).

```ts
z.object({ a: z.string() }).safeExtend({ a: z.string().min(5) }); // ✅
z.object({ a: z.string() }).safeExtend({ a: z.any() }); // ✅
z.object({ a: z.string() }).safeExtend({ a: z.number() });
//                                       ^  ❌ ZodNumber is not assignable 
```

Use `.safeExtend()` to extend schemas that contain refinements. (Regular `.extend()` will throw an error when used on schemas with refinements.)

````
```ts
const Base = z.object({
  a: z.string(),
  b: z.string()
}).refine(user => user.a === user.b);

// Extended inherits the refinements of Base
const Extended = Base.safeExtend({
  a: z.string().min(10)
});
```



```ts
const Base = z.object({
  a: z.string(),
  b: z.string()
}).check(z.refine(user => user.a === user.b));

// Extended inherits the refinements of Base
const Extended = z.safeExtend(Base, {
  a: z.string().min(10)
});
```
````

### `.pick()`

Inspired by TypeScript's built-in `Pick` and `Omit` utility types, Zod provides dedicated APIs for picking and omitting certain keys from an object schema.

Starting from this initial schema:

```ts z.object
const Recipe = z.object({
  title: z.string(),
  description: z.string().optional(),
  ingredients: z.array(z.string()),
});
// { title: string; description?: string | undefined; ingredients: string[] }
```

To pick certain keys:

````
```ts zod
const JustTheTitle = Recipe.pick({ title: true });
```



```ts
const JustTheTitle = z.pick(Recipe, { title: true });
```
````

### `.omit()`

To omit certain keys:

````
```ts zod
const RecipeNoId = Recipe.omit({ id: true });
```



```ts
const RecipeNoId = z.omit(Recipe, { id: true });
```
````

### `.partial()`

For convenience, Zod provides a dedicated API for making some or all properties optional, inspired by the built-in TypeScript utility type [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype).

To make all fields optional:

````
```ts zod
const PartialRecipe = Recipe.partial();
// { title?: string | undefined; description?: string | undefined; ingredients?: string[] | undefined }
```



```ts
const PartialRecipe = z.partial(Recipe);
// { title?: string | undefined; description?: string | undefined; ingredients?: string[] | undefined }
```
````

To make certain properties optional:

````
```ts zod
const RecipeOptionalIngredients = Recipe.partial({
  ingredients: true,
});
// { title: string; description?: string | undefined; ingredients?: string[] | undefined }
```



```ts
const RecipeOptionalIngredients = z.partial(Recipe, {
  ingredients: true,
});
// { title: string; description?: string | undefined; ingredients?: string[] | undefined }
```
````

### `.required()`

Zod provides an API for making some or all properties *required*, inspired by TypeScript's [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) utility type.

To make all properties required:

````
```ts zod
const RequiredRecipe = Recipe.required();
// { title: string; description: string; ingredients: string[] }
```



```ts
const RequiredRecipe = z.required(Recipe);
// { title: string; description: string; ingredients: string[] }
```
````

To make certain properties required:

````
```ts zod
const RecipeRequiredDescription = Recipe.required({description: true});
// { title: string; description: string; ingredients: string[] }
```



```ts
const RecipeRequiredDescription = z.required(Recipe, {description: true});
// { title: string; description: string; ingredients: string[] }
```
````
