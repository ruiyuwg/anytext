### required

Creates a modified copy of an object schema that marks all or only the selected entries as required.

```ts
const AllKeysSchema = v.required<TSchema, TMessage>(schema, message);
const SelectedKeysSchema = v.required<TSchema, TKeys, TMessage>(
  schema,
  keys,
  message
);
```

#### Generics

- `TSchema`
- `TKeys`
- `TMessage`

#### Parameters

- `schema`
- `keys`
- `message`

##### Explanation

`required` creates a modified copy of the given object `schema` where all or only the selected `keys` are required. It is similar to TypeScript's [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) utility type.

> Because `required` changes the data type of the input and output, it is not allowed to pass a schema that has been modified by the `pipe` method, as this may cause runtime errors. Please use the `pipe` method after you have modified the schema with `required`.

#### Returns

- `AllKeysSchema`
- `SelectedKeysSchema`

#### Examples

The following examples show how `required` can be used.

##### Required object schema

Schema to validate an object with required entries.

```ts
const RequiredSchema = v.required(
  v.object({
    key1: v.optional(v.string()),
    key2: v.optional(v.number()),
  })
); // { key1: string; key2: number }
```

##### With only specific keys

Schema to validate an object with only specific entries marked as required.

```ts
const RequiredSchema = v.required(
  v.object({
    key1: v.optional(v.string()),
    key2: v.optional(v.number()),
    key3: v.optional(v.boolean()),
  }),
  ['key1', 'key3']
); // { key1: string; key2?: number; key3: boolean }
```

#### Related

The following APIs can be combined with `required`.

##### Schemas

\<ApiList
items={\[
'array',
'exactOptional',
'intersect',
'lazy',
'looseObject',
'looseTuple',
'map',
'nonNullable',
'nonNullish',
'nonOptional',
'nullable',
'nullish',
'object',
'objectWithRest',
'optional',
'record',
'set',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
'undefinedable',
'union',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'forward',
'getDefault',
'getDefaults',
'getFallback',
'getFallbacks',
'is',
'keyof',
'message',
'omit',
'parse',
'parser',
'partial',
'pick',
'safeParse',
'safeParser',
'unwrap',
]}
/>

##### Actions

\<ApiList
items={\[
'brand',
'check',
'description',
'entries',
'flavor',
'guard',
'maxEntries',
'metadata',
'minEntries',
'notEntries',
'partialCheck',
'rawCheck',
'rawTransform',
'readonly',
'title',
'transform',
]}
/>

##### Utils

### safeParse

Parses an unknown input based on a schema.

```ts
const result = v.safeParse<TSchema>(schema, input, config);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`
- `input`
- `config`

#### Returns

- `result`

#### Example

The following example show how `safeParse` can be used.

```ts
const EmailSchema = v.pipe(v.string(), v.email());
const result = v.safeParse(EmailSchema, 'jane@example.com');

if (result.success) {
  const email = result.output;
} else {
  console.log(result.issues);
}
```

#### Related

The following APIs can be combined with `safeParse`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'flatten',
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'summarize',
'unwrap',
]}
/>

##### Utils

### safeParser

Returns a function that parses an unknown input based on a schema.

```ts
const safeParser = v.safeParser<TSchema, TConfig>(schema, config);
```

#### Generics

- `TSchema`
- `TConfig`

#### Parameters

- `schema`
- `config`

#### Returns

- `safeParser`

#### Example

The following example show how `safeParser` can be used.

```ts
const EmailSchema = v.pipe(v.string(), v.email());
const safeEmailParser = v.safeParser(EmailSchema);
const result = safeEmailParser('jane@example.com');

if (result.success) {
  const email = result.output;
} else {
  console.log(result.issues);
}
```

#### Related

The following APIs can be combined with `safeParser`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'flatten',
'keyof',
'message',
'omit',
'partial',
'pick',
'pipe',
'required',
'summarize',
'unwrap',
]}
/>

##### Utils

### summarize

Summarize the error messages of issues in a pretty-printable multi-line string.

```ts
const errors = v.summarize(issues);
```

#### Parameters

- `issues`

##### Explanation

If an issue in `issues` contains a path that can be converted to a dot path, the dot path will be displayed in the `errors` output just below the issue's error message.

#### Returns

- `errors`

#### Examples

The following example show how `summarize` can be used.

```ts
const Schema = v.object({
  nested: v.object({
    foo: v.string('Value of "nested.foo" is invalid.'),
  }),
});

const result = v.safeParse(Schema, { nested: { foo: null } });

if (result.issues) {
  console.log(v.summarize(result.issues));
}
```

#### Related

The following APIs can be combined with `summarize`.

##### Methods

### unwrap

Unwraps the wrapped schema.

```ts
const Schema = v.unwrap<TSchema>(schema);
```

#### Generics

- `TSchema`

#### Parameters

- `schema`

#### Returns

- `Schema`

#### Examples

The following examples show how `unwrap` can be used.

##### Unwrap string schema

Unwraps the wrapped string schema.

```ts
const OptionalStringSchema = v.optional(v.string());
const StringSchema = v.unwrap(OptionalStringSchema);
```

#### Related

The following APIs can be combined with `unwrap`.

##### Schemas

\<ApiList
items={\[
'exactOptional',
'nonNullable',
'nonNullish',
'nonOptional',
'nullable',
'nullish',
'optional',
'undefinedable',
]}
/>

##### Methods

\<ApiList
items={\[
'assert',
'config',
'fallback',
'is',
'message',
'parse',
'parser',
'pipe',
'safeParse',
]}
/>

##### Utils

##### Async

\<ApiList
items={\[
'exactOptionalAsync',
'nonNullableAsync',
'nonNullishAsync',
'nonOptionalAsync',
'nullableAsync',
'nullishAsync',
'optionalAsync',
'undefinedableAsync',
]}
/>

## Actions (API)

### args

Creates a function arguments transformation action.

```ts
const Action = v.args<TInput, TSchema>(schema);
```

#### Generics

- `TInput`
- `TSchema`

#### Parameters

- `schema`

##### Explanation

With `args` you can force the arguments of a function to match the given `schema`.

#### Returns

- `Action`

#### Examples

The following examples show how `args` can be used.

##### Function schema

Schema of a function that transforms a string to a number.

```ts
const FunctionSchema = v.pipe(
  v.function(),
  v.args(v.tuple([v.pipe(v.string(), v.decimal())])),
  v.returns(v.number())
);
```

#### Related

The following APIs can be combined with `args`.

##### Schemas

\<ApiList
items={\[
'any',
'custom',
'looseTuple',
'function',
'strictTuple',
'tuple',
'tupleWithRest',
]}
/>

##### Methods

##### Utils

### base64

Creates a [Base64](https://en.wikipedia.org/wiki/Base64) validation action.

```ts
const Action = v.base64<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `base64` you can validate the formatting of a string. If the input is not a Base64 string, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `base64` can be used.

##### Base64 schema

Schema to validate a Base64 string.

```ts
const Base64Schema = v.pipe(v.string(), v.base64('The data is badly encoded.'));
```

#### Related

The following APIs can be combined with `base64`.

##### Schemas

##### Methods

##### Utils

### bic

Creates a [BIC](https://en.wikipedia.org/wiki/ISO_9362) validation action.

```ts
const Action = v.bic<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `bic` you can validate the formatting of a string. If the input is not a BIC, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `bic` can be used.

##### BIC schema

Schema to validate a BIC.

```ts
const BicSchema = v.pipe(
  v.string(),
  v.toUpperCase(),
  v.bic('The BIC is badly formatted.')
);
```

#### Related

The following APIs can be combined with `bic`.

##### Schemas

##### Methods

##### Utils

### brand

Creates a brand transformation action.

```ts
const Action = v.brand<TInput, TName>(name);
```

#### Generics

- `TInput`
- `TName`

#### Parameters

- `name`

##### Explanation

`brand` allows you to brand the output type of a schema with a `name`. This ensures that data can only be considered valid if it has been validated by a particular branded schema.

#### Returns

- `Action`

#### Examples

The following examples show how `brand` can be used.

##### Branded fruit schema

Schema to ensure that only a validated fruit is accepted.

```ts
// Create schema and infer output type
const FruitSchema = v.pipe(v.object({ name: v.string() }), v.brand('Fruit'));
type FruitOutput = v.InferOutput<typeof FruitSchema>;

// This works because output is branded
const apple: FruitOutput = v.parse(FruitSchema, { name: 'apple' });

// But this will result in a type error
const banana: FruitOutput = { name: 'banana' };
```

#### Related

The following APIs can be combined with `brand`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### bytes

Creates a [bytes](https://en.wikipedia.org/wiki/Byte) validation action.

```ts
const Action = v.bytes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `bytes` you can validate the bytes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `bytes` can be used.

##### Bytes schema

Schema to validate a string with 8 bytes.

```ts
const BytesSchema = v.pipe(
  v.string(),
  v.bytes(8, 'Exactly 8 bytes are required.')
);
```

#### Related

The following APIs can be combined with `bytes`.

##### Schemas

##### Methods

##### Utils

### check

Creates a check validation action.

```ts
const Action = v.check<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `check` you can freely validate the input and return `true` if it is valid or `false` otherwise. If the input does not match your `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `check` can be used.

##### Check object properties

Schema to check the properties of an object.

```ts
const CustomObjectSchema = v.pipe(
  v.object({
    list: v.array(v.string()),
    length: v.number(),
  }),
  v.check(
    (input) => input.list.length === input.length,
    'The list does not match the length.'
  )
);
```

#### Related

The following APIs can be combined with `check`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### checkItems

Creates a check items validation action.

```ts
const Action = v.checkItems<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `checkItems` you can freely validate the items of an array and return `true` if they are valid or `false` otherwise. If an item does not match your `requirement`, you can use `message` to customize the error message.

> The special thing about `checkItems` is that it automatically forwards each issue to the appropriate item.

#### Returns

- `Action`

#### Examples

The following examples show how `checkItems` can be used.

##### No duplicate items

Schema to validate that an array has no duplicate items.

```ts
const ArraySchema = v.pipe(
  v.array(v.string()),
  v.checkItems(
    (item, index, array) => array.indexOf(item) === index,
    'Duplicate items are not allowed.'
  )
);
```

#### Related

The following APIs can be combined with `checkItems`.

##### Schemas

##### Methods

##### Utils

### creditCard

Creates a [credit card](https://en.wikipedia.org/wiki/Payment_card_number) validation action.

```ts
const Action = v.creditCard<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `creditCard` you can validate the formatting of a string. If the input is not a credit card, you can use `message` to customize the error message.

> The following credit card providers are currently supported: American Express, Diners Card, Discover, JCB, Union Pay, Master Card, and Visa.

#### Returns

- `Action`

#### Examples

The following examples show how `creditCard` can be used.

##### Credit Card schema

Schema to validate a credit card.

```ts
const CreditCardSchema = v.pipe(
  v.string(),
  v.creditCard('The credit card is badly formatted.')
);
```

#### Related

The following APIs can be combined with `creditCard`.

##### Schemas

##### Methods

##### Utils

### cuid2

Creates a [Cuid2](https://github.com/paralleldrive/cuid2) validation action.

```ts
const Action = v.cuid2<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `cuid2` you can validate the formatting of a string. If the input is not an Cuid2, you can use `message` to customize the error message.

> Since Cuid2s are not limited to a fixed length, it is recommended to combine `cuid2` with `length` to ensure the correct length.

#### Returns

- `Action`

#### Examples

The following examples show how `cuid2` can be used.

##### Cuid2 schema

Schema to validate an Cuid2.

```ts
const Cuid2Schema = v.pipe(
  v.string(),
  v.cuid2('The Cuid2 is badly formatted.'),
  v.length(10, 'The Cuid2 must be 10 characters long.')
);
```

#### Related

The following APIs can be combined with `cuid2`.

##### Schemas

##### Methods

##### Utils

### decimal

Creates a [decimal](https://en.wikipedia.org/wiki/Decimal) validation action.

> The difference between `decimal` and `digits` is that `decimal` accepts floating point numbers and negative numbers, while `digits` accepts only the digits 0-9.

```ts
const Action = v.decimal<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `decimal` you can validate the formatting of a string. If the input is not a decimal, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `decimal` can be used.

##### Decimal schema

Schema to validate a decimal.

```ts
const DecimalSchema = v.pipe(
  v.string(),
  v.decimal('The decimal is badly formatted.')
);
```

#### Related

The following APIs can be combined with `decimal`.

##### Schemas

##### Methods

##### Utils

### description

Creates a description metadata action.

```ts
const Action = v.description<TInput, TDescription>(description_);
```

#### Generics

- `TInput`
- `TDescription`

#### Parameters

- `description_`

##### Explanation

With `description` you can describe the purpose of a schema. This can be useful when working with AI tools or for documentation purposes.

#### Returns

- `Action`

#### Examples

The following examples show how `description` can be used.

##### Username schema

Schema to validate a user name.

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

#### Related

The following APIs can be combined with `description`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### digits

Creates a [digits](https://en.wikipedia.org/wiki/Numerical_digit) validation action.

> The difference between `digits` and `decimal` is that `digits` accepts only the digits 0-9, while `decimal` accepts floating point numbers and negative numbers.

```ts
const Action = v.digits<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `digits` you can validate the formatting of a string. If the input does not soley consist of numerical digits, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `digits` can be used.

##### Digits schema

Schema to validate a digits.

```ts
const DigitsSchema = v.pipe(
  v.string(),
  v.digits('The string contains something other than digits.')
);
```

#### Related

The following APIs can be combined with `digits`.

##### Schemas

##### Methods

##### Utils

### domain

Creates a [domain name](https://en.wikipedia.org/wiki/Domain_name) validation action.

```ts
const Action = v.domain<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `domain` you can validate the formatting of a domain string.
If the input is not a valid domain, you can use `message` to customize the error message.

> Validates ASCII domains. Limits: 63 chars per label, 253 chars total. Internationalized domain names (IDN) in Unicode form are not supported.
> If you need to validate a full URL (including protocol, path, query, etc.), use the `url` action.

#### Returns

- `Action`

#### Examples

The following examples show how `domain` can be used.

##### Domain schema

Schema to validate a domain.

```ts
const DomainSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your domain.'),
  v.domain('The domain is badly formatted.')
);
```

#### Related

The following APIs can be combined with `domain`.

##### Schemas

##### Methods

##### Utils

### email

Creates an [email](https://en.wikipedia.org/wiki/Email_address) validation action.

```ts
const Action = v.email<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `email` you can validate the formatting of a string. If the input is not an email, you can use `message` to customize the error message.

> This validation action intentionally only validates common email addresses. If you are interested in an action that covers the entire specification, please use the `rfcEmail` action instead.

#### Returns

- `Action`

#### Examples

The following examples show how `email` can be used.

##### Email schema

Schema to validate an email.

```ts
const EmailSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your email.'),
  v.email('The email is badly formatted.'),
  v.maxLength(30, 'Your email is too long.')
);
```

#### Related

The following APIs can be combined with `email`.

##### Schemas

##### Methods

##### Utils

### emoji

Creates an [emoji](https://en.wikipedia.org/wiki/Emoji) validation action.

```ts
const Action = v.emoji<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `emoji` you can validate the formatting of a string. If the input is not an emoji, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `emoji` can be used.

##### Emoji schema

Schema to validate an emoji.

```ts
const EmojiSchema = v.pipe(
  v.string(),
  v.emoji('Please provide a valid emoji.')
);
```

#### Related

The following APIs can be combined with `emoji`.

##### Schemas

##### Methods

##### Utils

### empty

Creates an empty validation action.

```ts
const Action = v.empty<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `empty` you can validate that a string or array is empty. If the input is not empty, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `empty` can be used.

##### String schema

Schema to validate that a string is empty.

```ts
const StringSchema = v.pipe(v.string(), v.empty('The string must be empty.'));
```

##### Array schema

Schema to validate that an array is empty.

```ts
const ArraySchema = v.pipe(
  v.array(v.number()),
  v.empty('The array must be empty.')
);
```

#### Related

The following APIs can be combined with `empty`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### endsWith

Creates an ends with validation action.

```ts
const Action = v.endsWith<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `endsWith` you can validate the end of a string. If the end does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `endsWith` can be used.

##### Email schema

Schema to validate an email with a specific domain.

```ts
const EmailSchema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));
```

#### Related

The following APIs can be combined with `endsWith`.

##### Schemas

##### Methods

##### Utils

### entries

Creates an entries validation action.

```ts
const Action = v.entries<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `entries` you can validate the number of entries of an object. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `entries` can be used.

##### Exact object entries

Schema to validate an object that does have 5 entries.

```ts
const EntriesSchema = v.pipe(
  v.record(v.string(), v.number()),
  v.entries(5, 'Object must have 5 entries')
);
```

#### Related

The following APIs can be combined with `entries`.

##### Schemas

\<ApiList
items={\[
'looseObject',
'object',
'objectWithRest',
'record',
'strictObject',
'variant',
]}
/>

##### Methods

##### Utils

### everyItem

Creates an every item validation action.

```ts
const Action = v.everyItem<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `everyItem` you can freely validate the items of an array and return `true` if they are valid or `false` otherwise. If not every item matches your `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `everyItem` can be used.

##### Sorted array schema

Schema to validate that an array is sorted.

```ts
const SortedArraySchema = v.pipe(
  v.array(v.number()),
  v.everyItem(
    (item, index, array) => index === 0 || item >= array[index - 1],
    'The numbers must be sorted in ascending order.'
  )
);
```

#### Related

The following APIs can be combined with `everyItem`.

##### Schemas

##### Methods

##### Utils

### examples

Creates an examples metadata action.

```ts
const Action = v.examples<TInput, TExamples>(examples_);
```

#### Generics

- `TInput`
- `TExamples`

#### Parameters

- `examples_`

##### Explanation

With `examples` you can provide examples for a schema. This can be useful when working with AI tools or for documentation purposes.

#### Returns

- `Action`

#### Examples

The following examples show how `examples` can be used.

##### String schema

Schema to validate a string with examples.

```ts
const StringSchema = v.pipe(v.string(), v.examples(['foo', 'bar', 'baz']));
```

##### Number schema

Schema to validate a number with examples.

```ts
const NumberSchema = v.pipe(v.number(), v.examples([1, 2, 3]));
```

#### Related

The following APIs can be combined with `examples`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### excludes

Creates an excludes validation action.

```ts
const Action = v.excludes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `excludes` you can validate the content of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `excludes` can be used.

##### String schema

Schema to validate that a string does not contain a specific substring.

```ts
const StringSchema = v.pipe(
  v.string(),
  v.excludes('foo', 'The string must not contain "foo".')
);
```

##### Array schema

Schema to validate that an array does not contain a specific string.

```ts
const ArraySchema = v.pipe(
  v.array(v.string()),
  v.excludes('foo', 'The array must not contain "foo".')
);
```

#### Related

The following APIs can be combined with `excludes`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### filterItems

Creates a filter items transformation action.

```ts
const Action = v.filterItems<TInput>(operation);
```

#### Generics

- `TInput`

#### Parameters

- `operation`

##### Explanation

With `filterItems` you can filter the items of an array. Returning `true` for an item will keep it in the array and returning `false` will remove it.

#### Returns

- `Action`

#### Examples

The following examples show how `filterItems` can be used.

##### Filter duplicate items

Schema to filter duplicate items from an array.

```ts
const FilteredArraySchema = v.pipe(
  v.array(v.string()),
  v.filterItems((item, index, array) => array.indexOf(item) === index)
);
```

#### Related

The following APIs can be combined with `filterItems`.

##### Schemas

##### Methods

##### Utils

### findItem

Creates a find item transformation action.

```ts
const Action = v.findItem<TInput>(operation);
```

#### Generics

- `TInput`

#### Parameters

- `operation`

##### Explanation

With `findItem` you can extract the first item of an array that matches the given `operation`.

#### Returns

- `Action`

#### Examples

The following examples show how `findItem` can be used.

##### Find duplicate item

Schema to find the first duplicate item in an array.

```ts
const DuplicateItemSchema = v.pipe(
  v.array(v.string()),
  v.findItem((item, index, array) => array.indexOf(item) !== index)
);
```

#### Related

The following APIs can be combined with `findItem`.

##### Schemas

##### Methods

##### Utils

### finite

Creates a [finite](https://en.wikipedia.org/wiki/Finite) validation action.

```ts
const Action = v.finite<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `finite` you can validate the value of a number. If the input is not a finite number, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `finite` can be used.

##### Finite number schema

Schema to validate a finite number.

```ts
const FiniteNumberSchema = v.pipe(
  v.number(),
  v.finite('The number must be finite.')
);
```

#### Related

The following APIs can be combined with `finite`.

##### Schemas

##### Methods

##### Utils
