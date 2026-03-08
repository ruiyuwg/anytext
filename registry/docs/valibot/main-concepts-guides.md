## Main concepts (guides)

### Mental model

Valibot's mental model is mainly divided between **schemas**, **methods**, and **actions**. Since each functionality is imported as its own function, it is crucial to understand this concept as it makes working with the modular API design much easier.

<MentalModelDark
alt="Code example with a schema, method and actions"
class="hidden dark:block"
/> <MentalModelLight
alt="Code example with a schema, method and actions"
class="dark:hidden"
/>

> The API reference gives you a great overview of all schemas, methods, and actions. For each one, the corresponding reference page also lists down other related schemas, methods, and actions for better discoverability.

#### Schemas

Schemas are the starting point for using Valibot. They allow you to validate **a specific data type**, like a string, object, or date. Each schema is independent. They can be reused or even nested to reflect more complex data structures.

```ts
import * as v from 'valibot';

const BookSchema = v.object({
  title: v.string(),
  numberOfPages: v.number(),
  publication: v.date(),
  tags: v.array(v.string()),
});
```

Every schema function returns an accesible object that contains all its properties. However, in most cases you don't need to access them directly. Instead, you use methods that help you modify or use a schema.

#### Methods

Methods help you either **modify or use a schema**. For example, the `parse` method helps you parse unknown data based on a schema. When you use a method, you always pass the schema as the first argument.

```ts
import * as v from 'valibot';

const BookSchema = v.object({…});

function createBook(data: unknown) {
  return v.parse(BookSchema, data);
}
```

> Most methods are used with schemas. However, there are a few exceptions, such as `forward` and `flatten`, which are used with actions or issues.

#### Actions

Actions help you to **further validate or transform** a specific data type. They are used exclusively in conjunction with the `pipe` method, which extends the functionality of a schema by adding additional validation and transformation rules. For example, the following schema can be used to trim a string and check if it is a valid email address.

```ts
import * as v from 'valibot';

const EmailSchema = v.pipe(v.string(), v.trim(), v.email());
```

Actions are very powerful. There are basically no limits to what you can do with them. Besides basic validations and transformations as shown in the example above, they also allow you to modify the output type with actions like `readonly` and `brand`.

### Schemas

Schemas allow you to validate a specific data type. They are similar to type definitions in TypeScript. Besides primitive values like strings and complex values like objects, Valibot also supports special cases like literals, unions and custom types.

#### Primitive values

Valibot supports the creation of schemas for any primitive data type. These are immutable values that are stored directly in the stack, unlike objects where only a reference to the heap is stored.

\<ApiList
label="Primitive schemas"
items={\[
'bigint',
'boolean',
'null',
'number',
'string',
'symbol',
'undefined',
]}
/>

```ts
import * as v from 'valibot';

const BigintSchema = v.bigint(); // bigint
const BooleanSchema = v.boolean(); // boolean
const NullSchema = v.null(); // null
const NumberSchema = v.number(); // number
const StringSchema = v.string(); // string
const SymbolSchema = v.symbol(); // symbol
const UndefinedSchema = v.undefined(); // undefined
```

#### Complex values

Among complex values, Valibot supports objects, records, arrays, tuples, and several other classes.

> There are various methods for objects such as `pick`, `omit`, `partial` and `required`. Learn more about them here.

\<ApiList
label="Complex schemas"
items={\[
'array',
'blob',
'date',
'file',
'function',
'looseObject',
'looseTuple',
'map',
'object',
'objectWithRest',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
]}
/>

```ts
import * as v from 'valibot';

const ArraySchema = v.array(v.string()); // string[]
const BlobSchema = v.blob(); // Blob
const DateSchema = v.date(); // Date
const FileSchema = v.file(); // File
const FunctionSchema = v.function(); // (...args: unknown[]) => unknown
const LooseObjectSchema = v.looseObject({ key: v.string() }); // { key: string }
const LooseTupleSchema = v.looseTuple([v.string(), v.number()]); // [string, number]
const MapSchema = v.map(v.string(), v.number()); // Map<string, number>
const ObjectSchema = v.object({ key: v.string() }); // { key: string }
const ObjectWithRestSchema = v.objectWithRest({ key: v.string() }, v.null()); // { key: string } & { [key: string]: null }
const PromiseSchema = v.promise(); // Promise<unknown>
const RecordSchema = v.record(v.string(), v.number()); // Record<string, number>
const SetSchema = v.set(v.number()); // Set<number>
const StrictObjectSchema = v.strictObject({ key: v.string() }); // { key: string }
const StrictTupleSchema = v.strictTuple([v.string(), v.number()]); // [string, number]
const TupleSchema = v.tuple([v.string(), v.number()]); // [string, number]
const TupleWithRestSchema = v.tupleWithRest([v.string(), v.number()], v.null()); // [string, number, ...null[]]
```

#### Special cases

Beyond primitive and complex values, there are also schema functions for more special cases.

\<ApiList
label="Special schemas"
items={\[
'any',
'custom',
'enum',
'exactOptional',
'instance',
'intersect',
'lazy',
'literal',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'nullable',
'nullish',
'optional',
'picklist',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

```ts
import * as v from 'valibot';

const AnySchema = v.any(); // any
const CustomSchema = v.custom<`${number}px`>(isPixelString); // `${number}px`
const EnumSchema = v.enum(Direction); // Direction
const ExactOptionalSchema = v.exactOptional(v.string()); // string
const InstanceSchema = v.instance(Error); // Error
const LazySchema = v.lazy(() => v.string()); // string
const IntersectSchema = v.intersect([v.string(), v.literal('a')]); // string & 'a'
const LiteralSchema = v.literal('foo'); // 'foo'
const NanSchema = v.nan(); // NaN
const NeverSchema = v.never(); // never
const NonNullableSchema = v.nonNullable(v.nullable(v.string())); // string
const NonNullishSchema = v.nonNullish(v.nullish(v.string())); // string
const NonOptionalSchema = v.nonOptional(v.optional(v.string())); // string
const NullableSchema = v.nullable(v.string()); // string | null
const NullishSchema = v.nullish(v.string()); // string | null | undefined
const OptionalSchema = v.optional(v.string()); // string | undefined
const PicklistSchema = v.picklist(['a', 'b']); // 'a' | 'b'
const UndefinedableSchema = v.undefinedable(v.string()); // string | undefined
const UnionSchema = v.union([v.string(), v.number()]); // string | number
const UnknownSchema = v.unknown(); // unknown
const VariantSchema = v.variant('type', [
  v.object({ type: v.literal('a'), foo: v.string() }),
  v.object({ type: v.literal('b'), bar: v.number() }),
]); // { type: 'a'; foo: string } | { type: 'b'; bar: number }
const VoidSchema = v.void(); // void
```

### Pipelines

For detailed validations and transformations, a schema can be wrapped in a pipeline. Especially for schema functions like `string`, `number`, `date`, `object`, and `array`, this feature is useful for validating properties beyond the raw data type.

#### How it works

In simple words, a pipeline is a list of schemas and actions that synchronously passes through the input data. It must always start with a schema, followed by up to 19 schemas or actions. Each schema and action can examine and modify the input. The pipeline is therefore perfect for detailed validations and transformations.

##### Example

For example, the pipeline feature can be used to trim a string and make sure that it is an email that ends with a specific domain.

```ts
import * as v from 'valibot';

const EmailSchema = v.pipe(
  v.string(),
  v.trim(),
  v.email(),
  v.endsWith('@example.com')
);
```

#### Validations

Pipeline validation actions examine the input and, if the input does not meet a certain condition, return an issue. If the input is valid, it is returned as the output and, if present, picked up by the next action in the pipeline.

> Whenever possible, pipelines are run completely, even if an issue has occurred, to collect all possible issues. If you want to abort the pipeline early after the first issue, you need to set the `abortPipeEarly` option to `true`. Learn more about this here.

\<ApiList
label="Validation actions"
items={\[
'base64',
'bic',
'bytes',
'check',
'checkItems',
'creditCard',
'cuid2',
'decimal',
'digits',
'domain',
'email',
'emoji',
'empty',
'endsWith',
'entries',
'everyItem',
'excludes',
'finite',
'graphemes',
'gtValue',
'hash',
'hexadecimal',
'hexColor',
'includes',
'integer',
'ip',
'ipv4',
'ipv6',
'isbn',
'isrc',
'isoDate',
'isoDateTime',
'isoTime',
'isoTimeSecond',
'isoTimestamp',
'isoWeek',
'length',
'ltValue',
'mac',
'mac48',
'mac64',
'maxBytes',
'maxEntries',
'maxGraphemes',
'maxLength',
'maxSize',
'maxValue',
'maxWords',
'mimeType',
'minBytes',
'minEntries',
'minGraphemes',
'minLength',
'minSize',
'minValue',
'minWords',
'multipleOf',
'nanoid',
'nonEmpty',
'notBytes',
'notEntries',
'notGraphemes',
'notLength',
'notSize',
'notValue',
'notValues',
'notWords',
'octal',
'parseJson',
'partialCheck',
'rawCheck',
'regex',
'rfcEmail',
'safeInteger',
'size',
'slug',
'someItem',
'startsWith',
'ulid',
'url',
'uuid',
'value',
'values',
'words',
]}
/>

Some of these actions can be combined with different schemas. For example, `minValue` can be used to validate the minimum value of `string`, `number`, `bigint`, and `date`.

```ts
import * as v from 'valibot';

const StringSchema = v.pipe(v.string(), v.minValue('foo'));
const NumberSchema = v.pipe(v.number(), v.minValue(1234));
const BigintSchema = v.pipe(v.bigint(), v.minValue(1234n));
const DateSchema = v.pipe(v.date(), v.minValue(new Date()));
```

##### Custom validation

For custom validations, `check` can be used. If the function passed as the first argument returns `false`, an issue is returned. Otherwise, the input is considered valid.

```ts
import * as v from 'valibot';
import { isValidUsername } from '~/utils';

const UsernameSchema = v.pipe(
  v.string(),
  v.check(isValidUsername, 'This username is invalid.')
);
```

> You can forward the issues of a pipeline validation to a child. See the methods guide for more information.

#### Transformations

Pipeline transformation actions allow to change the value and data type of the input data. This can be useful for example to remove spaces at the beginning or end of a string or to force a minimum or maximum value.

\<ApiList
label="Transformation actions"
items={\[
'brand',
'filterItems',
'findItem',
'flavor',
'guard',
'mapItems',
'rawTransform',
'readonly',
'reduceItems',
'sortItems',
'toBigint',
'toBoolean',
'toDate',
'toLowerCase',
'toMaxValue',
'toMinValue',
'toNumber',
'toString',
'toUpperCase',
'transform',
'trim',
'trimEnd',
'trimStart',
]}
/>

For example, the pipeline of the following schema enforces a minimum value of 10. If the input is less than 10, it is replaced with the specified minimum value.

```ts
import * as v from 'valibot';

const NumberSchema = v.pipe(v.number(), v.toMinValue(10));
```

##### Custom transformation

For custom transformations, `transform` can be used. The function passed as the first argument is called with the input data and the return value defines the output. The following transformation changes the output of the schema to `null` for any number less than 10.

```ts
import * as v from 'valibot';

const NumberSchema = v.pipe(
  v.number(),
  v.transform((input) => (input < 10 ? null : input))
);
```

#### Metadata

In addition to the validation and transformation actions, a pipeline can also be used to add metadata to a schema. This can be useful when working with AI tools or for documentation purposes.

\<ApiList
label="Metadata actions"
items={\['description', 'metadata', 'title']}
/>

```ts
const UsernameSchema = v.pipe(
  v.string(),
  v.regex(/^[a-z0-9_-]{4,16}$/iu),
  v.title('Username'),
  v.description(
    'A username must be between 4 and 16 characters long and can only contain letters, numbers, underscores and hyphens.'
  )
);
```

### Parse data

Now that you've learned how to create a schema, let's look at how you can use it to validate unknown data and make it type-safe. There are three different ways to do this.

> Each schema has a `~run` method. However, this is an internal API and should only be used if you know what you are doing.

#### Parse and throw

The `parse` method will throw a `ValiError` if the input does not match the schema. Therefore, you should use a try/catch block to catch errors. If the input matches the schema, it is valid and the output of the schema will be returned with the correct TypeScript type.

```ts
import * as v from 'valibot';

try {
  const EmailSchema = v.pipe(v.string(), v.email());
  const email = v.parse(EmailSchema, 'jane@example.com');

  // Handle errors if one occurs
} catch (error) {
  console.log(error);
}
```

#### Parse and return

If you want issues to be returned instead of thrown, you can use `safeParse`. The returned value then contains the `.success` property, which is `true` if the input is valid or `false` otherwise.

If the input is valid, you can use `.output` to get the output of the schema validation. Otherwise, if the input was invalid, the issues found can be accessed via `.issues`.

```ts
import * as v from 'valibot';

const EmailSchema = v.pipe(v.string(), v.email());
const result = v.safeParse(EmailSchema, 'jane@example.com');

if (result.success) {
  const email = result.output;
} else {
  console.log(result.issues);
}
```

#### Type guards

Another way to validate data that can be useful in individual cases is to use a type guard. You can use either a type predicate with the `is` method or an assertion function with the `assert` method.

If a type guard is used, the issues of the validation cannot be accessed. Also, transformations have no effect and unknown keys of an object are not removed. Therefore, this approach is not as safe and powerful as the two previous ways. Also, due to a TypeScript limitation, it can currently only be used with synchronous schemas.

```ts
import * as v from 'valibot';

const EmailSchema = v.pipe(v.string(), v.email());
const data: unknown = 'jane@example.com';

if (v.is(EmailSchema, data)) {
  const email = data; // string
}
```

#### Configuration

By default, Valibot exhaustively collects every issue during validation to give you detailed feedback on why the input does not match the schema. If this is not required for your use case, you can control this behavior with `abortEarly` and `abortPipeEarly` to improve the performance of validation.

##### Abort validation

If you set `abortEarly` to `true`, data validation immediately aborts upon finding the first issue. If you just want to know if some data matches a schema, but you don't care about the details, this can improve performance.

```ts
import * as v from 'valibot';

try {
  const ProfileSchema = v.object({
    name: v.string(),
    bio: v.string(),
  });
  const profile = v.parse(
    ProfileSchema,
    { name: 'Jane', bio: '' },
    { abortEarly: true }
  );

  // Handle errors if one occurs
} catch (error) {
  console.log(error);
}
```

##### Abort pipeline

If you only set `abortPipeEarly` to `true`, the validation within a pipeline will only abort after finding the first issue. For example, if you only want to show the first error of a field when validating a form, you can use this option to improve performance.

```ts
import * as v from 'valibot';

try {
  const EmailSchema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));
  const email = v.parse(EmailSchema, 'jane@example.com', {
    abortPipeEarly: true,
  });

  // Handle errors if one occurs
} catch (error) {
  console.log(error);
}
```

### Infer types

Another cool feature of schemas is the ability to infer input and output types. This makes your work even easier because you don't have to write the type definition yourself.

#### Infer input types

The input type of a schema corresponds to the TypeScript type that the incoming data of a schema must match to be valid. To extract this type you use the utility type `InferInput`.

> You are probably interested in the input type only in special cases. In most cases, the output type should be sufficient.

```ts
import * as v from 'valibot';

const LoginSchema = v.object({
  email: v.string(),
  password: v.string(),
});

type LoginInput = v.InferInput<typeof LoginSchema>; // { email: string; password: string }
```

#### Infer output types

The output type differs from the input type only if you use `optional`, `nullable`, `nullish` or `undefinedable` with a default value or `brand`, `readonly` or `transform` to transform the input or data type of a schema after validation. The output type corresponds to the output of `parse` and `safeParse`. To infer it, you use the utility type `InferOutput`.

```ts
import * as v from 'valibot';
import { hashPassword } from '~/utils';

const LoginSchema = v.pipe(
  v.object({
    email: v.string(),
    password: v.pipe(v.string(), v.transform(hashPassword)),
  }),
  v.transform((input) => {
    return {
      ...input,
      timestamp: new Date().toISOString(),
    };
  })
);

type LoginOutput = v.InferOutput<typeof LoginSchema>; // { email: string; password: string; timestamp: string }
```

#### Infer issue types

You can also infer the possible issues of a schema. This can be useful if you want to handle the issues in a particular way. To extract this information from a schema you use the utility type `InferIssue`.

```ts
import * as v from 'valibot';

const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

type Issue = v.InferIssue<typeof LoginSchema>; // v.ObjectIssue | v.StringIssue | v.EmailIssue<string> | v.MinLengthIssue<string, 8>
```

### Methods

Apart from `parse` and `safeParse`, Valibot offers some more methods to make working with your schemas easier. In the following we distinguish between schema, object and pipeline methods.

#### Schema methods

Schema methods add functionality, simplify ergonomics, and help you use schemas for validation and data extraction.

\<ApiList
label="Schema methods"
items={\[
'assert',
'config',
'fallback',
'flatten',
'getDefault',
'getDefaults',
'getDescription',
'getFallback',
'getFallbacks',
'getMetadata',
'getTitle',
'is',
'message',
'parse',
'safeParse',
'summarize',
'pipe',
'unwrap',
]}
/>

> For more information on `pipe`, see the pipelines guide. For more information on validation methods, see the parse data guide. For more information on `flatten`, see the issues guide.

##### Fallback

If an issue occurs while validating your schema, you can catch it with `fallback` to return a predefined value instead.

```ts
import * as v from 'valibot';

const StringSchema = v.fallback(v.string(), 'hello');
const stringOutput = v.parse(StringSchema, 123); // 'hello'
```

#### Object methods

Object methods make it easier for you to work with object schemas. They are strongly oriented towards TypeScript's utility types.

\<ApiList
label="Object methods"
items={\['keyof', 'omit', 'partial', 'pick', 'required']}
/>

##### TypeScript similarities

Like in TypeScript, you can make the values of an object optional with `partial`, make them required with `required`, and even include/exclude certain values from an existing schema with `pick` and `omit`.

```ts
import * as v from 'valibot';

// TypeScript
type Object1 = Partial<{ key1: string; key2: number }>;

// Valibot
const object1 = v.partial(v.object({ key1: v.string(), key2: v.number() }));

// TypeScript
type Object2 = Pick<Object1, 'key1'>;

// Valibot
const object2 = v.pick(object1, ['key1']);
```

#### Pipeline methods

Pipeline methods modify the results of validations and transformations within a pipeline.

> For more info about our pipeline feature, see the pipelines guide.

##### Forward

‎`forward` allows you to associate an issue with a nested schema. For example, if you want to check that both password entries in a registration form match, you can use it to forward the issue to the second password field in case of an error. This allows you to display the error message in the correct place.

```ts
import * as v from 'valibot';

const RegisterSchema = v.pipe(
  v.object({
    email: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your email.'),
      v.email('The email address is badly formatted.')
    ),
    password1: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your password.'),
      v.minLength(8, 'Your password must have 8 characters or more.')
    ),
    password2: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [['password1'], ['password2']],
      (input) => input.password1 === input.password2,
      'The two passwords do not match.'
    ),
    ['password2']
  )
);
```

### Issues

When validating unknown data against a schema, Valibot collects information about each issue. If there is at least one issue, these are returned in an array. Each issue provides detailed information for you or your users to fix the problem.

#### Issue info

A single issue conforms to the TypeScript type definition below.

```ts
type BaseIssue = {
  // Required info
  kind: 'schema' | 'validation' | 'transformation';
  type: string;
  input: unknown;
  expected: string | null;
  received: string;
  message: string;

  // Optional info
  requirement?: unknown;
  path?: IssuePath;
  issues?: Issues;
  lang?: string;
  abortEarly?: boolean;
  abortPipeEarly?: boolean;
  skipPipe?: boolean;
};
```

##### Required info

Each issue contains the following required information.

###### Kind

`kind` describes the kind of the problem. If an input does not match the data type, for example a number was passed instead of a string, `kind` has the value `'schema'`. In all other cases, the reason is not the data type but the actual content of the data. For example, if a string is invalid because it does not match a regex, `kind` has the value `'validation'`.

###### Type

`type` describes which function did the validation. If the schema function `array` detects that the input is not an array, `type` has the value `'array'`. If the `minLength` validation function detects that an array is too short, `type` has the value `'min_length'`.

###### Input

`input` contains the input data where the issue was found. For complex data, for example objects, `input` contains the value of the respective key that does not match the schema.

###### Expected

`expected` is a language-neutral string that describes the data property that was expected. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words.

###### Received

`received` is a language-neutral string that describes the data property that was received. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words.

###### Message

`message` contains a human-understandable error message that can be fully customized as described in our quick start and internationalization guide.

##### Optional info

Some issues contain further optional information.

###### Requirement

`requirement` can contain further validation information. For example, if the `minLength` validation function detects that a string is too short, `requirement` contains the minimum length that the string should have.

###### Path

`path` is an array of objects that describes where an issue is located within complex data. Each path item contains the following information.

> The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

```ts
type PathItem = {
  type: string;
  origin: 'key' | 'value';
  input: unknown;
  key?: unknown;
  value: unknown;
};
```

For example, you can use the following code to create a dot path.

```ts
import * as v from 'valibot';

const dotPath = v.getDotPath(issue);
```

###### Issues

`issues` currently only occur when using `union` and contains all issues of the schemas of an union type.

###### Config

`lang` can be used as part of our i18n feature to define the required language. `abortEarly` and `abortPipeEarly` gives you an info that the validation was aborted prematurely. You can find more info about this in the parse data guide. These are all configurations that you can control yourself.

#### Formatting

For common use cases such as form validation, Valibot includes small built-in functions for formatting issues. However, once you understand how they work, you can easily format them yourself and put them in the right form for your use case.

##### Flatten errors

If you are only interested in the error messages of each issue to show them to your users, you can convert an array of issues to a flat object with `flatten`. Below is an example.

```ts
import * as v from 'valibot';

const ObjectSchema = v.object({
  foo: v.string('Value of "foo" is missing.'),
  bar: v.object({
    baz: v.string('Value of "bar.baz" is missing.'),
  }),
});

const result = v.safeParse(ObjectSchema, { bar: {} });

if (result.issues) {
  console.log(v.flatten<typeof ObjectSchema>(result.issues));
}
```

The `result` returned in the code sample above this text contains the following issues.

```ts
[
  {
    kind: 'schema',
    type: 'string',
    input: undefined,
    expected: 'string',
    received: 'undefined',
    message: 'Value of "foo" is missing.',
    path: [
      {
        type: 'object',
        origin: 'value',
        input: {
          bar: {},
        },
        key: 'foo',
        value: undefined,
      },
    ],
  },
  {
    kind: 'schema',
    type: 'string',
    input: undefined,
    expected: 'string',
    received: 'undefined',
    message: 'Value of "bar.baz" is missing.',
    path: [
      {
        type: 'object',
        origin: 'value',
        input: {
          bar: {},
        },
        key: 'bar',
        value: {},
      },
      {
        type: 'object',
        origin: 'value',
        input: {},
        key: 'baz',
        value: undefined,
      },
    ],
  },
];
```

However, with the help of `flatten` the issues were converted to the following object.

```ts
{
  nested: {
    foo: ['Value of "foo" is missing.'],
    'bar.baz': ['Value of "bar.baz" is missing.'],
  },
};
```
