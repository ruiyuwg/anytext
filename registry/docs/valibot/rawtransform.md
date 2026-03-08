### rawTransform

Creates a raw transformation action.

```ts
const Action = v.rawTransform<TInput, TOutput>(action);
```

#### Generics

- `TInput`
- `TOutput`

#### Parameters

- `action`

##### Explanation

With `rawTransform` you can freely transform and validate the input with a custom `action` and add issues if necessary.

#### Returns

- `Action`

#### Examples

The following examples show how `rawTransform` can be used.

##### Calculate game result

Schema that calculates the total score of a game based on the scores and a multiplier.

> This `rawTransform` validation action adds an issue for points that exceed a certain maximum and forwards it via `path` to the appropriate nested score.

```ts
const GameResultSchema = v.pipe(
  v.object({
    scores: v.array(v.pipe(v.number(), v.integer())),
    multiplier: v.number(),
  }),
  v.rawTransform(({ dataset, addIssue, NEVER }) => {
    // Create total variable
    let total = 0;

    // Iterate over scores and check points
    for (let index = 0; index < dataset.value.scores.length; index++) {
      // Calculate points by multiplying score with multiplier
      const score = dataset.value.scores[index];
      const points = score * dataset.value.multiplier;

      // Add issue if points exceed maximum of 1,000 points
      if (points > 1_000) {
        addIssue({
          message:
            'The score exceeds the maximum allowed value of 1,000 points.',
          path: [
            {
              type: 'object',
              origin: 'value',
              input: dataset.value,
              key: 'scores',
              value: dataset.value.scores,
            },
            {
              type: 'array',
              origin: 'value',
              input: dataset.value.scores,
              key: index,
              value: score,
            },
          ],
        });

        // Abort transformation
        return NEVER;
      }

      // Add points to total
      total += points;
    }

    // Add calculated total to dataset
    return { ...dataset.value, total };
  })
);
```

#### Related

The following APIs can be combined with `rawTransform`.

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

### readonly

Creates a readonly transformation action.

```ts
const Action = v.readonly<TInput>();
```

#### Generics

- `TInput`

#### Returns

- `Action`

#### Examples

The following examples show how `readonly` can be used.

##### Readonly array

Schema for a readonly array of numbers.

```ts
const ArraySchema = v.pipe(v.array(v.number()), v.readonly());
```

##### Readonly entry

Object schema with an entry marked as readonly.

```ts
const ObjectSchema = v.object({
  name: v.string(),
  username: v.pipe(v.string(), v.readonly()),
  age: v.number(),
});
```

#### Related

The following APIs can be combined with `readonly`.

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

### reduceItems

Creates a reduce items transformation action.

```ts
const Action = v.reduceItems<TInput, TOutput>(operation, initial);
```

#### Generics

- `TInput`
- `TOutput`

#### Parameters

- `operation`
- `initial`

##### Explanation

With `reduceItems` you can apply an `operation` to each item in an array to reduce it to a single value.

#### Returns

- `Action`

#### Examples

The following examples show how `reduceItems` can be used.

##### Sum all numbers

Schema that sums all the numbers in an array.

```ts
const SumArraySchema = v.pipe(
  v.array(v.number()),
  v.reduceItems((sum, item) => sum + item, 0)
);
```

#### Related

The following APIs can be combined with `reduceItems`.

##### Schemas

##### Methods

##### Utils

### regex

Creates a [regex](https://en.wikipedia.org/wiki/Regular_expression) validation action.

```ts
const Action = v.regex<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `regex` you can validate the formatting of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

> Hint: Be careful with the global flag `g` in your regex pattern, as it can lead to unexpected results. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag) for more information.

#### Returns

- `Action`

#### Examples

The following examples show how `regex` can be used.

##### Pixel string schema

Schema to validate a pixel string.

```ts
const PixelStringSchema = v.pipe(
  v.string(),
  v.regex(/^\d+px$/, 'The pixel string is badly formatted.')
);
```

#### Related

The following APIs can be combined with `regex`.

##### Schemas

##### Methods

##### Utils

### returns

Creates a function return transformation action.

```ts
const Action = v.returns<TInput, TSchema>(schema);
```

#### Generics

- `TInput`
- `TSchema`

#### Parameters

- `schema`

##### Explanation

With `returns` you can force the returned value of a function to match the given `schema`.

#### Returns

- `Action`

#### Examples

The following examples show how `returns` can be used.

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

The following APIs can be combined with `returns`.

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

### rfcEmail

Creates a [RFC email](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1) validation action.

```ts
const Action = v.rfcEmail<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `rfcEmail` you can validate the formatting of a string. If the input is not an email, you can use `message` to customize the error message.

> This validation action intentionally validates the entire RFC 5322 specification. If you are interested in an action that only covers common email addresses, please use the `email` action instead.

#### Returns

- `Action`

#### Examples

The following examples show how `rfcEmail` can be used.

##### Email schema

Schema to validate an email.

```ts
const EmailSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your email.'),
  v.rfcEmail('The email is badly formatted.'),
  v.maxLength(30, 'Your email is too long.')
);
```

#### Related

The following APIs can be combined with `rfcEmail`.

##### Schemas

##### Methods

##### Utils

### safeInteger

Creates a safe integer validation action.

```ts
const Action = v.safeInteger<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `safeInteger` you can validate the value of a number. If the input is not a safe integer, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `safeInteger` can be used.

##### Safe integer schema

Schema to validate an safe integer.

```ts
const SafeIntegerSchema = v.pipe(
  v.number(),
  v.safeInteger('The number must be a safe integer.')
);
```

#### Related

The following APIs can be combined with `safeInteger`.

##### Schemas

##### Methods

##### Utils

### size

Creates a size validation action.

```ts
const Action = v.size<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `size` you can validate the size of a map, set or blob. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `size` can be used.

##### Blob size schema

Schema to validate a blob with a size of 256 bytes.

```ts
const BlobSchema = v.pipe(
  v.blob(),
  v.size(256, 'The blob must be 256 bytes in size.')
);
```

##### Set size schema

Schema to validate a set of 8 numbers.

```ts
const SetSchema = v.pipe(
  v.set(number()),
  v.size(8, 'The set must contain 8 numbers.')
);
```

#### Related

The following APIs can be combined with `size`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### slug

Creates an [slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) validation action.

```ts
const Action = v.slug<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `slug` you can validate the formatting of a string. If the input is not a URL slug, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `slug` can be used.

##### Slug schema

Schema to validate a slug.

```ts
const SlugSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please provide a slug.'),
  v.slug('The slug is badly formatted.'),
  v.maxLength(100, 'Your slug is too long.')
);
```

#### Related

The following APIs can be combined with `slug`.

##### Schemas

##### Methods

##### Utils

### someItem

Creates a some item validation action.

```ts
const Action = v.someItem<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `someItem` you can freely validate the items of an array and return `true` if they are valid or `false` otherwise. If not some item matches your `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `someItem` can be used.

##### Unsorted array schema

Schema to validate that an array is not sorted.

```ts
const UnsortedArraySchema = v.pipe(
  v.array(v.number()),
  v.someItem(
    (item, index, array) => array.length === 1 || item < array[index - 1],
    'The numbers must not be sorted in ascending order.'
  )
);
```

#### Related

The following APIs can be combined with `someItem`.

##### Schemas

##### Methods

##### Utils

### sortItems

Creates a sort items transformation action.

```ts
const Action = v.sortItems<TInput>(operation);
```

#### Generics

- `TInput`

#### Parameters

- `operation`

##### Explanation

With `sortItems` you can sort the items of an array based on a custom `operation`. This is a function that takes two items and returns a number. If the number is less than 0, the first item is sorted before the second item. If the number is greater than 0, the second item is sorted before the first. If the number is 0, the order of the items is not changed.

#### Returns

- `Action`

#### Examples

The following examples show how `sortItems` can be used.

##### Sort numbers

Schema that sorts the numbers in an array in ascending order.

```ts
const SortedArraySchema = v.pipe(v.array(v.number()), v.sortItems());
```

#### Related

The following APIs can be combined with `sortItems`.

##### Schemas

##### Methods

##### Utils

### startsWith

Creates a starts with validation action.

```ts
const Action = v.startsWith<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `startsWith` you can validate the start of a string. If the start does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `startsWith` can be used.

##### HTTPS URL schema

Schema to validate a HTTPS URL.

```ts
const HttpsUrlSchema = v.pipe(v.string(), v.url(), v.startsWith('https://'));
```

#### Related

The following APIs can be combined with `startsWith`.

##### Schemas

##### Methods

##### Utils

### stringifyJson

Creates a JSON stringify transformation action.

```ts
const Action = v.stringifyJson<TInput, TConfig, TMessage>(config, message);
```

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Parameters

- `config`
- `message`

##### Explanation

With `stringifyJson` you can stringify a JSON object. If the input is unable to be stringified, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `stringifyJson` can be used.

##### Stringify JSON

Stringify a JSON object.

```ts
const StringifiedObjectSchema = v.pipe(
  v.object({ key: v.string() }),
  v.stringifyJson()
);
```

##### Stringify JSON with replacer

Stringify a JSON object with a replacer function.

```ts
const StringifiedObjectSchema = v.pipe(
  v.object({ key: v.string() }),
  v.stringifyJson({
    replacer: (key, value) =>
      typeof value === 'string' ? value.toUpperCase() : value,
  })
);
```

#### Related

The following APIs can be combined with `stringifyJson`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'picklist',
'record',
'strictObject',
'strictTuple',
'string',
'tuple',
'tupleWithRest',
'union',
'unknown',
'variant',
]}
/>

##### Methods

##### Utils

### title

Creates a title metadata action.

```ts
const Action = v.title<TInput, TTitle>(title_);
```

#### Generics

- `TInput`
- `TTitle`

#### Parameters

- `title_`

##### Explanation

With `title` you can give a title to a schema. This can be useful when working with AI tools or for documentation purposes.

#### Returns

- `Action`

#### Examples

The following examples show how `title` can be used.

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

The following APIs can be combined with `title`.

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

### toBigint

Creates a to bigint transformation action.

```ts
const Action = v.toBigint<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `toBigint` you can transform the input to a bigint. If the input cannot be transformed, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `toBigint` can be used.

##### Number schema

Schema to validate a number and transform it to a bigint.

```ts
const NumberSchema = v.pipe(v.number(), v.toBigint());
```

#### Related

The following APIs can be combined with `toBigint`.

##### Schemas

##### Methods

##### Utils

### toBoolean

Creates a to boolean transformation action.

```ts
const Action = v.toBoolean<TInput>();
```

#### Generics

- `TInput`

#### Returns

- `Action`

#### Examples

The following examples show how `toBoolean` can be used.

##### Boolean schema

Schema to validate a string and transform it to a boolean.

```ts
const BooleanSchema = v.pipe(v.string(), v.toBoolean());
```

#### Related

The following APIs can be combined with `toBoolean`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'custom',
'date',
'null',
'number',
'string',
'symbol',
'undefined',
'unknown',
]}
/>

##### Methods

##### Utils

### toDate

Creates a to date transformation action.

```ts
const Action = v.toDate<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `toDate` you can transform the input to a date. If the input cannot be transformed, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `toDate` can be used.

##### Date schema

Schema to validate a string and transform it to a date.

```ts
const DateSchema = v.pipe(v.string(), v.toDate());
```

#### Related

The following APIs can be combined with `toDate`.

##### Schemas

##### Methods

##### Utils

### toLowerCase

Creates a to lower case transformation action.

```ts
const Action = v.toLowerCase();
```

#### Returns

- `Action`

#### Examples

The following examples show how `toLowerCase` can be used.

##### Lower case string

Schema that transforms a string to lower case.

```ts
const StringSchema = v.pipe(v.string(), v.toLowerCase());
```

#### Related

The following APIs can be combined with `toLowerCase`.

##### Schemas

##### Methods

##### Utils

### toMaxValue

Creates a to max value transformation action.

```ts
const Action = v.toMaxValue<TInput, TRequirement>(requirement);
```

#### Generics

- `TInput`
- `TRequirement`

#### Parameters

- `requirement`

##### Explanation

With `toMaxValue` you can enforce a maximum value for a number, date or string. If the input does not meet the `requirement`, it will be changed to its value.

#### Returns

- `Action`

#### Examples

The following examples show how `toMaxValue` can be used.

##### Number schema

Schema to enforce a maximum value for a number.

```ts
const NumberSchema = v.pipe(v.number(), v.toMaxValue(100));
```

##### Date schema

Schema to enforce a maximum value for a date.

```ts
const DateSchema = v.pipe(v.date(), v.toMaxValue(new Date('1999-12-31')));
```

#### Related

The following APIs can be combined with `toMaxValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### toMinValue

Creates a to min value transformation action.

```ts
const Action = v.toMinValue<TInput, TRequirement>(requirement);
```

#### Generics

- `TInput`
- `TRequirement`

#### Parameters

- `requirement`

##### Explanation

With `toMinValue` you can enforce a minimum value for a number, date or string. If the input does not meet the `requirement`, it will be changed to its value.

#### Returns

- `Action`

#### Examples

The following examples show how `toMinValue` can be used.

##### Number schema

Schema to enforce a minimum value for a number.

```ts
const NumberSchema = v.pipe(v.number(), v.toMinValue(100));
```

##### Date schema

Schema to enforce a minimum value for a date.

```ts
const DateSchema = v.pipe(v.date(), v.toMinValue(new Date('1999-12-31')));
```

#### Related

The following APIs can be combined with `toMinValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### toNumber

Creates a to number transformation action.

```ts
const Action = v.toNumber<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `toNumber` you can transform the input to a number. If the input cannot be transformed, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `toNumber` can be used.

##### Number schema

Schema to validate a string and transform it to a number.

```ts
const NumberSchema = v.pipe(v.string(), v.toNumber());
```

#### Related

The following APIs can be combined with `toNumber`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'null',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### toString

Creates a to string transformation action.

```ts
const Action = v.toString<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `toString` you can transform the input to a string. If the input cannot be transformed, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `toString` can be used.

##### String schema

Schema to validate a number and transform it to a string.

```ts
const StringSchema = v.pipe(v.number(), v.toString());
```

#### Related

The following APIs can be combined with `toString`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'null',
'number',
'symbol',
'undefined',
'unknown',
]}
/>

##### Methods

##### Utils

### toUpperCase

Creates a to upper case transformation action.

```ts
const Action = v.toUpperCase();
```

#### Returns

- `Action`

#### Examples

The following examples show how `toUpperCase` can be used.

##### Lower case string

Schema that transforms a string to upper case.

```ts
const StringSchema = v.pipe(v.string(), v.toUpperCase());
```

#### Related

The following APIs can be combined with `toUpperCase`.

##### Schemas

##### Methods

##### Utils

### transform

Creates a custom transformation action.

```ts
const Action = v.transform<TInput, TOutput>(action);
```

#### Generics

- `TInput`
- `TOutput`

#### Parameters

- `action`

##### Explanation

`transform` can be used to freely transform the input. The `action` parameter is a function that takes the input and returns the transformed output.

#### Returns

- `Action`

#### Examples

The following examples show how `transform` can be used.

##### Transform to length

Schema that transforms a string to its length.

```ts
const StringLengthSchema = v.pipe(
  v.string(),
  v.transform((input) => input.length)
);
```

##### Add object entry

Schema that transforms an object to add an entry.

```ts
const UserSchema = v.pipe(
  v.object({ name: v.string(), age: v.number() }),
  v.transform((input) => ({
    ...input,
    created: new Date().toISOString(),
  }))
);
```

#### Related

The following APIs can be combined with `transform`.

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

### trim

Creates a trim transformation action.

```ts
const Action = v.trim();
```

#### Returns

- `Action`

#### Examples

The following examples show how `trim` can be used.

##### Trimmed string

Schema to trim the start and end of a string.

```ts
const StringSchema = v.pipe(v.string(), v.trim());
```

#### Related

The following APIs can be combined with `trim`.

##### Schemas

##### Methods

##### Utils

### trimEnd

Creates a trim end transformation action.

```ts
const Action = v.trimEnd();
```

#### Returns

- `Action`

#### Examples

The following examples show how `trimEnd` can be used.

##### Trimmed string

Schema to trimEnd the end of a string.

```ts
const StringSchema = v.pipe(v.string(), v.trimEnd());
```

#### Related

The following APIs can be combined with `trimEnd`.

##### Schemas

##### Methods

##### Utils

### trimStart

Creates a trim start transformation action.

```ts
const Action = v.trimStart();
```

#### Returns

- `Action`

#### Examples

The following examples show how `trimStart` can be used.

##### Trimmed string

Schema to trimStart the start of a string.

```ts
const StringSchema = v.pipe(v.string(), v.trimStart());
```

#### Related

The following APIs can be combined with `trimStart`.

##### Schemas

##### Methods

##### Utils

### ulid

Creates an [ULID](https://github.com/ulid/spec) validation action.

```ts
const Action = v.ulid<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `ulid` you can validate the formatting of a string. If the input is not an ULID, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `ulid` can be used.

##### ULID schema

Schema to validate an ULID.

```ts
const UlidSchema = v.pipe(v.string(), v.ulid('The ULID is badly formatted.'));
```

#### Related

The following APIs can be combined with `ulid`.

##### Schemas

##### Methods

##### Utils

### url

Creates an [URL](https://en.wikipedia.org/wiki/URL) validation action.

```ts
const Action = v.url<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `url` you can validate the formatting of a string. If the input is not an URL, you can use `message` to customize the error message.

> If you only need to validate an ASCII domain name, consider the `domain` action.

#### Returns

- `Action`

#### Examples

The following examples show how `url` can be used.

##### URL schema

Schema to validate an URL.

```ts
const UrlSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your url.'),
  v.url('The url is badly formatted.'),
  v.endsWith('.com', 'Only ".com" domains are allowed.')
);
```

#### Related

The following APIs can be combined with `url`.

##### Schemas

##### Methods

##### Utils

### uuid

Creates an [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) validation action.

```ts
const Action = v.uuid<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `uuid` you can validate the formatting of a string. If the input is not an UUID, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `uuid` can be used.

##### UUID schema

Schema to validate an UUID.

```ts
const UuidSchema = v.pipe(v.string(), v.uuid('The UUID is badly formatted.'));
```

#### Related

The following APIs can be combined with `uuid`.

##### Schemas

##### Methods

##### Utils

### value

Creates a value validation action.

```ts
const Action = v.value<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `value` you can validate the value of a string, number, boolean or date. If the input does not match the `requirement`, you can use `message` to customize the error message.

> This action does not change the type of the pipeline. Use the `literal` schema instead if you want the type to match a specific value.

#### Returns

- `Action`

#### Examples

The following examples show how `value` can be used.

##### Number schema

Schema to validate a number with a specific value.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.value(100, 'The number must be 100.')
);
```

##### Date schema

Schema to validate a date with a specific value.

```ts
const DateSchema = v.pipe(
  v.date(),
  v.value(new Date('2000-01-01'), 'The date must be the first day of 2000.')
);
```

#### Related

The following APIs can be combined with `value`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### values

Creates a values validation action.

```ts
const Action = v.values<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `values` you can validate the value of a string, number, boolean or date. If the input does not match one of the values in the `requirement`, you can use `message` to customize the error message.

> This action does not change the type of the pipeline. Use the `picklist` schema instead if you want the type to match the union of specific values.

#### Returns

- `Action`

#### Examples

The following examples show how `values` can be used.

##### Number schema

Schema to validate a number with specific values.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.values([5, 15, 20], 'The number must be one of the allowed numbers.')
);
```

#### Related

The following APIs can be combined with `values`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### words

Creates a [words](https://en.wikipedia.org/wiki/Word) validation action.

```ts
const Action = v.words<TInput, TLocales, TRequirement, TMessage>(
  locales,
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Parameters

- `locales`
- `requirement`
- `message`

##### Explanation

With `words` you can validate the words of a string based on the specified `locales`. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `words` can be used.

##### Words schema

Schema to validate a string with 3 words.

```ts
const WordsSchema = v.pipe(
  v.string(),
  v.words('en', 3, 'Exactly 3 words are required.')
);
```

#### Related

The following APIs can be combined with `words`.

##### Schemas

##### Methods

##### Utils
