### rawCheck

Creates a raw check validation action.

```ts
const Action = v.rawCheck<TInput>(action);
```

#### Generics

- `TInput`

#### Parameters

- `action`

##### Explanation

With `rawCheck` you can freely validate the input with a custom `action` and add issues if necessary.

#### Returns

- `Action`

#### Examples

The following examples show how `rawCheck` can be used.

##### Emails schema

Object schema that ensures that the primary email is not the same as any of the other emails.

> This `rawCheck` validation action adds an issue for any invalid other email and forwards it via `path` to the appropriate nested field.

```ts
const EmailsSchema = v.pipe(
  v.object({
    primaryEmail: v.pipe(v.string(), v.email()),
    otherEmails: v.array(v.pipe(v.string(), v.email())),
  }),
  v.rawCheck(({ dataset, addIssue }) => {
    if (dataset.typed) {
      dataset.value.otherEmails.forEach((otherEmail, index) => {
        if (otherEmail === dataset.value.primaryEmail) {
          addIssue({
            message: 'This email is already being used as the primary email.',
            path: [
              {
                type: 'object',
                origin: 'value',
                input: dataset.value,
                key: 'otherEmails',
                value: dataset.value.otherEmails,
              },
              {
                type: 'array',
                origin: 'value',
                input: dataset.value.otherEmails,
                key: index,
                value: otherEmail,
              },
            ],
          });
        }
      });
    }
  })
);
```

#### Related

The following APIs can be combined with `rawCheck`.

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
