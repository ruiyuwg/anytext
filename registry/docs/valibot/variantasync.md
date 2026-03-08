### variantAsync

Creates a variant schema.

```ts
const Schema = v.variantAsync<TKey, TOptions, TMessage>(key, options, message);
```

#### Generics

- `TKey`
- `TOptions`
- `TMessage`

#### Parameters

- `key`
- `options`
- `message`

##### Explanation

With `variantAsync` you can validate if the input matches one of the given object `options`. The object schema to be used for the validation is determined by the discriminator `key`. If the input does not match a schema and cannot be clearly assigned to one of the options, you can use `message` to customize the error message.

> It is allowed to specify the exact same or a similar discriminator multiple times. However, in such cases `variantAsync` will only return the output of the first untyped or typed variant option result. Typed results take precedence over untyped ones.

> For deeply nested `variant` schemas with several different discriminator keys, `variant` will return an issue for the first most likely object schemas on invalid input. The order of the discriminator keys and the presence of a discriminator in the input are taken into account.

#### Returns

- `Schema`

#### Examples

The following examples show how `variantAsync` can be used.

##### Message schema

Schema to validate a message object.

```ts
import { isValidGroupReceiver, isValidUserReceiver } from '~/api';

const MessageSchema = v.objectAsync({
  message: v.pipe(v.string(), v.nonEmpty()),
  receiver: v.variantAsync('type', [
    v.objectAsync({
      type: v.literal('group'),
      groupId: v.pipeAsync(
        v.string(),
        v.uuid(),
        v.checkAsync(isValidGroupReceiver, 'The group cannot receive messages.')
      ),
    }),
    v.objectAsync({
      type: v.literal('user'),
      email: v.pipeAsync(
        v.string(),
        v.email(),
        v.checkAsync(isValidUserReceiver, 'The user cannot receive messages.')
      ),
    }),
  ]),
});
```

##### User schema

Schema to validate unique user details.

```ts
import { isRegisteredEmail, isRegisteredUsername, isValidUserId } from '~/api';

const UserSchema = v.variantAsync('type', [
  // Assume this schema is from a different file and reused here.
  v.variantAsync('type', [
    v.objectAsync({
      type: v.literal('email'),
      email: v.pipeAsync(
        v.string(),
        v.email(),
        v.checkAsync(isRegisteredEmail, 'The email is not registered.')
      ),
    }),
    v.objectAsync({
      type: v.literal('username'),
      username: v.pipeAsync(
        v.string(),
        v.nonEmpty(),
        v.checkAsync(isRegisteredUsername, 'The username is not registered.')
      ),
    }),
  ]),
  v.objectAsync({
    type: v.literal('userId'),
    userId: v.pipeAsync(
      v.string(),
      v.uuid(),
      v.checkAsync(isValidUserId, 'The user id is not valid.')
    ),
  }),
]);
```

#### Related

The following APIs can be combined with `variantAsync`.

##### Schemas

##### Methods

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

##### Async

\<ApiList
items={\[
'checkAsync',
'fallbackAsync',
'getDefaultsAsync',
'getFallbacksAsync',
'looseObjectAsync',
'objectAsync',
'objectWithRestAsync',
'parseAsync',
'parserAsync',
'partialCheckAsync',
'pipeAsync',
'rawCheckAsync',
'rawTransformAsync',
'safeParseAsync',
'safeParserAsync',
'strictObjectAsync',
'transformAsync',
]}
/>

## Types (API)

### AnySchema

Any schema interface.

#### Definition

- `AnySchema`
  - `type`
  - `reference`
  - `expects`

### ArgsAction

Args action interface.

#### Generics

- `TInput`
- `TSchema`

#### Definition

- `ArgsAction`
  - `type`
  - `reference`
  - `schema`

### ArgsActionAsync

Args action interface.

#### Generics

- `TInput`
- `TSchema`

#### Definition

- `ArgsActionAsync`
  - `type`
  - `reference`
  - `schema`

### ArrayInput

Array input type.

#### Definition

- `ArrayInput`

### ArrayIssue

Array issue interface.

#### Definition

- `ArrayIssue`
  - `kind`
  - `type`
  - `expected`

### ArrayPathItem

Array path item interface.

#### Definition

- `ArrayPathItem`
  - `type`
  - `origin`
  - `input`
  - `key`
  - `value`

The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

### ArrayRequirement

Array requirement type.

#### Generics

- `TInput`

#### Definition

- `ArrayRequirement`

### ArrayRequirementAsync

Array requirement async type.

#### Generics

- `TInput`

#### Definition

- `ArrayRequirementAsync`

### ArraySchema

Array schema interface.

#### Generics

- `TItem`
- `TMessage`

#### Definition

- `ArraySchema`
  - `type`
  - `reference`
  - `expects`
  - `item`
  - `message`

### ArraySchemaAsync

Array schema async interface.

#### Generics

- `TItem`
- `TMessage`

#### Definition

- `ArraySchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `item`
  - `message`

### AwaitActionAsync

Await action async interface.

#### Generics

- `TInput`

#### Definition

- `AwaitActionAsync`
  - `type`
  - `reference`

### Base64Action

Base64 action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Base64Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Base64Issue

Base64 issue interface.

#### Generics

- `TInput`

#### Definition

- `Base64Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### BaseIssue

Schema issue interface.

#### Generics

- `TInput`

#### Definition

- `BaseIssue`
  - `kind`
  - `type`
  - `input`
  - `expected`
  - `received`
  - `message`
  - `requirement`
  - `path`
  - `issues`

### BaseMetadata

Base metadata interface.

#### Generics

- `TInput`

#### Definition

- `BaseMetadata`
  - `kind`
  - `type`
  - `reference`
  - `~types`

### BaseSchema

Base schema interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseSchema`
  - `kind`
  - `type`
  - `reference`
  - `expects`
  - `async`
  - `~standard`
  - `~run`
  - `~types`

### BaseSchemaAsync

Base schema async interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseSchemaAsync`
  - `reference`
  - `async`
  - `~run`

### BaseTransformation

Base transformation interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseTransformation`
  - `kind`
  - `type`
  - `reference`
  - `async`
  - `~run`
  - `~types`

### BaseTransformationAsync

Base transformation async interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseTransformationAsync`
  - `reference`
  - `async`
  - `~run`

### BaseValidation

Base action interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseValidation`
  - `kind`
  - `type`
  - `reference`
  - `expects`
  - `async`
  - `~run`
  - `~types`

### BaseValidationAsync

Base validation async interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `BaseValidationAsync`
  - `reference`
  - `async`
  - `~run`

### BicAction

BIC action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `BicAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### BicIssue

Bic issue interface.

#### Generics

- `TInput`

#### Definition

- `BicIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### BigintIssue

Bigint issue interface.

#### Definition

- `BigintIssue`
  - `kind`
  - `type`
  - `expected`

### BigintSchema

Bigint schema interface.

#### Generics

- `TMessage`

#### Definition

- `BigintSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### BlobIssue

Blob issue interface.

#### Definition

- `BlobIssue`
  - `kind`
  - `type`
  - `expected`

### BlobSchema

Blob schema interface.

#### Generics

- `TMessage`

#### Definition

- `BlobSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### BooleanIssue

Boolean issue interface.

#### Definition

- `BooleanIssue`
  - `kind`
  - `type`
  - `expected`

### BooleanSchema

Boolean schema interface.

#### Generics

- `TMessage`

#### Definition

- `BooleanSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### Brand

Brand interface.

#### Generics

- `TName`

#### Definition

- `Brand`

### BrandAction

Brand action interface.

#### Generics

- `TInput`
- `TName`

#### Definition

- `BrandAction`
  - `type`
  - `reference`
  - `name`

### BrandName

Brand name type.

#### Definition

- `BrandName`

### BytesAction

Bytes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `BytesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### BytesIssue

Bytes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `BytesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### CheckAction

Check action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CheckAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### CheckActionAsync

Check action async interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CheckActionAsync`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### CheckIssue

Check issue interface.

#### Generics

- `TInput`

#### Definition

- `CheckIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### CheckItemsAction

Check items action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CheckItemsAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### CheckItemsActionAsync

Check items action async interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CheckItemsActionAsync`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### CheckItemsIssue

Check items issue interface.

#### Generics

- `TInput`

#### Definition

- `CheckItemsIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### Class

Class type.

#### Definition

- `Class`

### Config

Config interface.

#### Generics

- `TIssue`

#### Definition

- `Config`
  - `lang`
  - `message`
  - `abortEarly`
  - `abortPipeEarly`

### ContentInput

Content input type.

#### Definition

- `ContentInput`

### ContentRequirement

Content requirement type.

#### Generics

- `TInput`

#### Definition

- `ContentRequirement`

### CreditCardAction

Credit card action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CreditCardAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### CreditCardIssue

Credit card issue interface.

#### Generics

- `TInput`

#### Definition

- `CreditCardIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Cuid2Action

Cuid2 action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Cuid2Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Cuid2Issue

Cuid2 issue interface.

#### Generics

- `TInput`

#### Definition

- `Cuid2Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### CustomIssue

Custom issue interface.

#### Definition

- `CustomIssue`
  - `kind`
  - `type`
  - `expected`

### CustomSchema

Custom schema interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CustomSchema`
  - `type`
  - `reference`
  - `expects`
  - `check`
  - `message`

### CustomSchemaAsync

Custom schema async interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `CustomSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `check`
  - `message`

### DateIssue

Date issue interface.

#### Definition

- `DateIssue`
  - `kind`
  - `type`
  - `expected`

### DateSchema

Date schema interface.

#### Generics

- `TMessage`

#### Definition

- `DateSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### DecimalAction

Decimal action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `DecimalAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### DecimalIssue

Decimal issue interface.

#### Generics

- `TInput`

#### Definition

- `DecimalIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### DeepPickN

Deeply picks N specific keys.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/actions/partialCheck/types.ts).

### Default

Default type.

#### Generics

- `TWrapped`
- `TInput`

#### Definition

- `Default`

### DefaultAsync

Default async type.

#### Generics

- `TWrapped`
- `TInput`

#### Definition

- `DefaultAsync`

### DefaultValue

Default value type.

#### Generics

- `TDefault`

#### Definition

- `DefaultValue`

### DescriptionAction

Description action interface.

#### Generics

- `TInput`
- `TDescription`

#### Definition

- `DescriptionAction`
  - `type`
  - `reference`
  - `description`

### DigitsAction

Digits action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `DigitsAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### DigitsIssue

Digits issue interface.

#### Generics

- `TInput`

#### Definition

- `DigitsIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### DomainAction

Domain action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `DomainAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### DomainIssue

Domain issue interface.

#### Generics

- `TInput`

#### Definition

- `DomainIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### EmailAction

Email action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `EmailAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### EmailIssue

Email issue interface.

#### Generics

- `TInput`

#### Definition

- `EmailIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### EmojiAction

Emoji action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `EmojiAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### EmojiIssue

Emoji issue interface.

#### Generics

- `TInput`

#### Definition

- `EmojiIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### EmptyAction

Empty action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `EmptyAction`
  - `type`
  - `reference`
  - `expects`
  - `message`

### EmptyIssue

Empty issue interface.

#### Generics

- `TInput`

#### Definition

- `EmptyIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`

### EndsWithAction

Ends with action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `EndsWithAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### EndsWithIssue

Ends with issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `EndsWithIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### EntriesAction

Entries action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `EntriesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### EntriesInput

Entries input type.

#### Definition

- `EntriesInput`

### EntriesIssue

Entries issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `EntriesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Enum

Enum interface.

#### Definition

- `Enum`

### EnumIssue

Enum issue interface.

#### Definition

- `EnumIssue`
  - `kind`
  - `type`
  - `expected`

### EnumSchema

Enum schema interface.

#### Generics

- `TEnum`
- `TMessage`

#### Definition

- `EnumSchema`
  - `type`
  - `reference`
  - `enum`
  - `options`
  - `message`

### ErrorMessage

Error message type.

#### Generics

- `TIssue`

#### Definition

- `ErrorMessage`

### EveryItemAction

Every action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `EveryItemAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### EveryItemIssue

Every item issue interface.

#### Generics

- `TInput`

#### Definition

- `EveryItemIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### ExactOptionalSchema

Exact optional schema interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `ExactOptionalSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### ExactOptionalSchemaAsync

Exact optional schema async interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `ExactOptionalSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### ExamplesAction

Examples metadata action.

#### Generics

- `TInput`
- `TExamples`

#### Definition

- `ExamplesAction`
  - `type`
  - `reference`
  - `examples`

#### Related

The following APIs can be combined with `ExamplesAction`.

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

##### Actions

### ExcludesAction

Excludes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `ExcludesAction`
  - `type`
  - `referece`
  - `expects`
  - `requirement`
  - `message`

### ExcludesIssue

Excludes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `ExcludesIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### FailureDataset

Failure dataset interface.

#### Generics

- `TIssue`

#### Definition

- `UntypedDataset`
  - `typed`
  - `value`
  - `issues`

### Fallback

Fallback type.

#### Generics

- `TSchema`

#### Definition

- `Fallback`

### FallbackAsync

Fallback async type.

#### Generics

- `TSchema`

#### Definition

- `FallbackAsync`

### FileIssue

File issue interface.

#### Definition

- `FileIssue`
  - `kind`
  - `type`
  - `expected`

### FileSchema

File schema interface.

#### Generics

- `TMessage`

#### Definition

- `FileSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### FilterItemsAction

Filter items action interface.

#### Generics

- `TInput`

#### Definition

- `FilterItemsAction`
  - `type`
  - `reference`
  - `operation`

### FindItemAction

Find item action interface.

#### Generics

- `TInput`

#### Definition

- `FindItemAction`
  - `type`
  - `reference`
  - `operation`

### FiniteAction

Finite action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `FiniteAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### FiniteIssue

Finite issue interface.

#### Generics

- `TInput`

#### Definition

- `FiniteIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### FirstTupleItem

Extracts first tuple item.

#### Generics

- `TTuple`

#### Definition

- `FirstTupleItem`

### FlatErrors

Flat errors type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/flatten/flatten.ts).

### Flavor

Flavor interface.

#### Generics

- `TName`

#### Definition

- `Flavor`

### FlavorAction

Flavor action interface.

#### Generics

- `TInput`
- `TName`

#### Definition

- `FlavorAction`
  - `type`
  - `reference`
  - `name`

### FlavorName

Flavor name type.

#### Definition

- `FlavorName`

### FunctionIssue

Function issue interface.

#### Definition

- `FunctionIssue`
  - `kind`
  - `type`
  - `expected`

### FunctionSchema

Function schema interface.

#### Generics

- `TMessage`

#### Definition

- `FunctionSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### GenericIssue

Generic issue type.

#### Generics

- `TInput`

#### Definition

- `GenericIssue`

### GenericMetadata

Generic metadata type.

#### Generics

- `TInput`

#### Definition

- `GenericMetadata`

### GenericPipeAction

Generic pipe action type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericPipeAction`

### GenericPipeActionAsync

Generic pipe action async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericPipeActionAsync`

### GenericPipeItem

Generic pipe item type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericPipeItem`

### GenericPipeItemAsync

Generic pipe item async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericPipeItemAsync`

### GenericSchema

Generic schema type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericSchema`

### GenericSchemaAsync

Generic schema async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericSchemaAsync`

### GenericTransformation

Generic transformation type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericTransformation`

### GenericTransformationAsync

Generic transformation async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericTransformationAsync`

### GenericValidation

Generic validation type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericValidation`

### GenericValidationAsync

Generic validation async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `GenericValidationAsync`

### GlobalConfig

The global config type.

#### Definition

- `GlobalConfig`

### GraphemesAction

Graphemes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `GraphemesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### GraphemesIssue

Graphemes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `GraphemesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### GtValueAction

Greater than value action type.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `GtValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### GtValueIssue

Greater than value issue type.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `GtValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### GuardAction

Guard action interface.

#### Generics

- `TInput`
- `TGuard`
- `TMessage`

#### Definition

- `GuardAction`
  - `type`
  - `reference`
  - `requirement`
  - `message`

### GuardFunction

Guard function type.

#### Generics

- `TInput`

#### Definition

- `GuardFunction`

### GuardIssue

Guard issue interface.

#### Generics

- `TInput`
- `TGuard`

#### Definition

- `GuardIssue`
  - `kind`
  - `type`
  - `requirement`

### HashAction

Hash action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `HashAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### HashIssue

Hash issue interface.

#### Generics

- `TInput`

#### Definition

- `HashIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### HashType

Hash type type.

#### Definition

- `HashType`

### HexadecimalAction

Hexadecimal action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `HexadecimalAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### HexadecimalIssue

Hexadecimal issue interface.

#### Generics

- `TInput`

#### Definition

- `HexadecimalIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### HexColorAction

Hex color action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `HexColorAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### HexColorIssue

HexColor issue interface.

#### Generics

- `TInput`

#### Definition

- `HexColorIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### ImeiAction

Imei action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `ImeiAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### ImeiIssue

IMEI issue interface.

#### Generics

- `TInput`

#### Definition

- `ImeiIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IncludesAction

Includes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `IncludesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IncludesIssue

Includes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `IncludesIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### InferDefault

Infer default type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getDefault/getDefault.ts).

### InferDefaults

Infer defaults type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getDefaults/types.ts).

### InferExamples

Infer examples type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getExamples/getExamples.ts).

### InferFallback

Infer fallback type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getFallback/getFallback.ts).

### InferFallbacks

Infer fallbacks type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getFallbacks/types.ts).

### InferGuardOutput

Infer guard output type.

#### Generics

- `TGuard`

#### Definition

- `InferGuardOutput`

### InferInput

Infer input type.

#### Generics

- `TItem`

#### Definition

- `InferInput`

#### Example

```ts
// Create object schema
const ObjectSchema = v.object({
  key: v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
});

// Infer object input type
type ObjectInput = v.InferInput<typeof ObjectSchema>; // { key: string }
```

### InferIntersectInput

Infer intersect input type.

```ts
// Create object schemas
const ObjectSchemas = [
  v.object({
    key1: v.pipe(
      v.string(),
      v.transform((input) => input.length)
    ),
  }),
  v.object({
    key2: v.pipe(
      v.string(),
      v.transform((input) => input.length)
    ),
  }),
];

// Infer object intersect input type
type ObjectInput = v.InferIntersectInput<typeof ObjectSchemas>; // { key1: string } & { key2: string }
```

### InferIntersectOutput

Infer intersect output type.

```ts
// Create object schemas
const ObjectSchemas = [
  v.object({
    key1: v.pipe(
      v.string(),
      v.transform((input) => input.length)
    ),
  }),
  v.object({
    key2: v.pipe(
      v.string(),
      v.transform((input) => input.length)
    ),
  }),
];

// Infer object intersect output type
type ObjectOutput = v.InferIntersectOutput<typeof ObjectSchemas>; // { key1: number } & { key2: number }
```

### InferIssue

Infer issue type.

#### Generics

- `TItem`

#### Definition

- `InferIssue`

### InferMapInput

Infer map input type.

#### Generics

- `TKey`
- `TValue`

#### Definition

- `InferMapInput`

### InferMapOutput

Infer map output type.

#### Generics

- `TKey`
- `TValue`

#### Definition

- `InferMapOutput`

### InferMetadata

Infer fallbacks type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/getMetadata/getMetadata.ts).

### InferNonNullableInput

Infer non nullable input type.

```ts
// Create nullable string schema
const NullableStringSchema = v.nullable(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non nullable string input type
type NonNullableStringInput = v.InferNonNullableInput<
  typeof NullableStringSchema
>; // string
```

### InferNonNullableIssue

Infer non nullable issue type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/schemas/nonNullable/types.ts).

### InferNonNullableOutput

Infer non nullable output type.

```ts
// Create nullable string schema
const NullableStringSchema = v.nullable(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non nullable string output type
type NonNullableStringOutput = v.InferNonNullableOutput<
  typeof NullableStringSchema
>; // number
```

### InferNonNullishInput

Infer non nullable input type.

```ts
// Create nullish string schema
const NullishStringSchema = v.nullish(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non nullish string input type
type NonNullishStringInput = v.InferNonNullishInput<typeof NullishStringSchema>; // string
```

### InferNonNullishIssue

Infer non nullish issue type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/schemas/nonNullish/types.ts).

### InferNonNullishOutput

Infer non nullable output type.

```ts
// Create nullish string schema
const NullishStringSchema = v.nullish(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non nullish string output type
type NonNullishStringOutput = v.InferNonNullishOutput<
  typeof NullishStringSchema
>; // number
```

### InferNonOptionalInput

Infer non optional input type.

```ts
// Create optional string schema
const OptionalStringSchema = v.optional(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non optional string input type
type NonOptionalStringInput = v.InferNonOptionalInput<
  typeof OptionalStringSchema
>; // string
```

### InferNonOptionalIssue

Infer non optional issue type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/schemas/nonOptional/types.ts).

### InferNonOptionalOutput

Infer non optional output type.

```ts
// Create optional string schema
const OptionalStringSchema = v.optional(
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  )
);

// Infer non optional string output type
type NonOptionalStringOutput = v.InferNonOptionalOutput<
  typeof OptionalStringSchema
>; // number
```

### InferNullableOutput

Infer nullable output type.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `InferNullableOutput`

### InferNullishOutput

Infer nullish output type.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `InferNullishOutput`

### InferObjectInput

Infer object input type.

```ts
// Create object entries
const entries = {
  key: v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
};

// Infer entries input type
type EntriesInput = v.InferObjectInput<typeof entries>; // { key: string }
```

### InferObjectIssue

Infer object issue type.

#### Generics

- `TEntries`

#### Definition

- `InferObjectIssue`

### InferObjectOutput

Infer object output type.

```ts
// Create object entries
const entries = {
  key: v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
};

// Infer entries output type
type EntriesOutput = v.InferObjectOutput<typeof entries>; // { key: number }
```

### InferOptionalOutput

Infer optional output type.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `InferOptionalOutput`

### InferOutput

Infer output type.

#### Generics

- `TItem`

#### Definition

- `InferIssue`

#### Example

```ts
// Create object schema
const ObjectSchema = v.object({
  key: v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
});

// Infer object output type
type ObjectOutput = v.InferOutput<typeof ObjectSchema>; // { key: number }
```

### InferRecordInput

Infer record input type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/schemas/record/types.ts).

### InferRecordOutput

Infer record output type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/schemas/record/types.ts).

### InferSetInput

Infer set input type.

#### Generics

- `TValue`

#### Definition

- `InferSetInput`

### InferSetOutput

Infer set output type.

#### Generics

- `TValue`

#### Definition

- `InferSetOutput`

### InferTupleInput

Infer tuple output type.

```ts
// Create tuple items
const items = [
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
];

// Infer items input type
type ItemsInput = v.InferTupleInput<typeof items>; // [string]
```

### InferTupleIssue

Infer tuple issue type.

#### Generics

- `TItems`

#### Definition

- `InferTupleIssue`

### InferTupleOutput

Infer tuple issue type.

```ts
const items = [
  v.pipe(
    v.string(),
    v.transform((input) => input.length)
  ),
];

// Infer items output type
type ItemsOutput = v.InferTupleOutput<typeof items>; // [number]
```

### InferVariantIssue

Infer variant issue type.

#### Generics

- `TOptions`

#### Definition

- `InferVariantIssue`

### InstanceIssue

Instance issue interface.

#### Definition

- `InstanceIssue`
  - `kind`
  - `type`
  - `expected`

### InstanceSchema

Instance schema interface.

#### Generics

- `TClass`
- `TMessage`

#### Definition

- `InstanceSchema`
  - `type`
  - `reference`
  - `class`
  - `message`

### IntegerAction

Integer action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IntegerAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IntegerIssue

Integer issue interface.

#### Generics

- `TInput`

#### Definition

- `IntegerIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IntersectIssue

Intersect issue interface.

#### Definition

- `IntersectIssue`
  - `kind`
  - `type`
  - `expected`

### IntersectOptions

Intersect options type.

#### Definition

- `IntersectOptions`

### IntersectOptionsAsync

Intersect options async type.

#### Definition

- `IntersectOptionsAsync`

### IntersectSchema

Intersect schema interface.

#### Generics

- `TOptions`
- `TMessage`

#### Definition

- `IntersectSchema`
  - `type`
  - `reference`
  - `options`
  - `message`

### IntersectSchemaAsync

Intersect schema async interface.

#### Generics

- `TOptions`
- `TMessage`

#### Definition

- `IntersectSchemaAsync`
  - `type`
  - `reference`
  - `options`
  - `message`

### IpAction

IP action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IpAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IpIssue

IP issue interface.

#### Generics

- `TInput`

#### Definition

- `IpIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Ipv4Action

IPv4 action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Ipv4Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Ipv4Issue

IPv4 issue interface.

#### Generics

- `TInput`

#### Definition

- `Ipv4Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Ipv6Action

IPv6 action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Ipv6Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Ipv6Issue

IPv6 issue interface.

#### Generics

- `TInput`

#### Definition

- `Ipv6Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsbnAction

ISBN action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsbnAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsbnIssue

ISBN issue interface.

#### Generics

- `TInput`

#### Definition

- `IsbnIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsrcAction

ISRC action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsrcAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsrcIssue

ISRC issue interface.

#### Generics

- `TInput`

#### Definition

- `IsrcIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoDateAction

ISO date action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoDateAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoDateIssue

ISO date issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoDateIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoDateTimeAction

ISO date time action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoDateTimeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoDateTimeIssue

ISO date time issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoDateTimeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoTimeAction

ISO time action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoTimeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoTimeIssue

ISO time issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoTimeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoTimeSecondAction

ISO time second action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoTimeSecondAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoTimeSecondIssue

ISO time second issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoTimeSecondIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoTimestampAction

ISO timestamp action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoTimestampAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoTimestampIssue

ISO timestamp issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoTimestampIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IsoWeekAction

ISO week action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `IsoWeekAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### IsoWeekIssue

ISO week issue interface.

#### Generics

- `TInput`

#### Definition

- `IsoWeekIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### IssueDotPath

Issue dot path type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/types/issue.ts).

### IssuePathItem

Path item type.

#### Definition

- `IssuePathItem`

### LazySchema

Lazy schema interface.

#### Generics

- `TWrapped`

#### Definition

- `LazySchema`
  - `type`
  - `reference`
  - `expects`
  - `getter`

### LazySchemaAsync

Lazy schema async interface.

#### Generics

- `TWrapped`

#### Definition

- `LazySchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `getter`

### LengthAction

Length action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `LengthAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### LengthInput

Length input type.

#### Definition

- `LengthInput`

### LengthIssue

Length issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `LengthIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Literal

Literal type.

#### Definition

- `Literal`

### LiteralIssue

Literal issue interface.

#### Definition

- `LiteralIssue`
  - `kind`
  - `type`
  - `expected`

### LooseObjectIssue

Loose object issue interface.

#### Definition

- `LooseObjectIssue`
  - `kind`
  - `type`
  - `expected`

### LooseObjectSchema

Loose object schema interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `LooseObjectSchema`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### LooseObjectSchemaAsync

Loose object schema async interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `LooseObjectSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### LooseTupleIssue

Loose tuple issue interface.

#### Definition

- `LooseTupleIssue`
  - `kind`
  - `type`
  - `expected`

### LooseTupleSchema

Loose tuple schema interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `LooseTupleSchema`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### LooseTupleSchemaAsync

Loose tuple schema async interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `LooseTupleSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### LiteralSchema

Literal schema interface.

#### Generics

- `TLiteral`
- `TMessage`

#### Definition

- `LiteralSchema`
  - `type`
  - `reference`
  - `literal`
  - `message`

### LtValueAction

Less than value action type.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `LtValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### LtValueIssue

Less than value issue type.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `LtValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### Mac48Action

48-bit MAC action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Mac48Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Mac48Issue

48-bit MAC issue interface.

#### Generics

- `TInput`

#### Definition

- `Mac48Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### Mac64Action

64-bit MAC action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `Mac64Action`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### Mac64Issue

64-bit MAC issue interface.

#### Generics

- `TInput`

#### Definition

- `Mac64Issue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MacAction

MAC action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `MacAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MacIssue

MAC issue interface.

#### Generics

- `TInput`

#### Definition

- `MacIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MapIssue

Map issue interface.

#### Definition

- `MapIssue`
  - `kind`
  - `type`
  - `expected`

### MapItemsAction

Map items action interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `MapItemsAction`
  - `type`
  - `reference`
  - `operation`

### MapPathItem

Map path item interface.

#### Definition

- `MapPathItem`
  - `type`
  - `origin`
  - `input`
  - `key`
  - `value`

The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

### MapSchema

Map schema interface.

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Definition

- `MapSchema`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `value`
  - `message`

### MapSchemaAsync

Map schema async interface.

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Definition

- `MapSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `value`
  - `message`

### MaxBytesAction

Max bytes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxBytesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxBytesIssue

Max bytes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxBytesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaxEntriesAction

Max entries action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxEntriesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxEntriesIssue

Max entries issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxEntriesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaxGraphemesAction

Max graphemes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxGraphemesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxGraphemesIssue

Max graphemes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxGraphemesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaxLengthAction

Max length action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxLengthAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxLengthIssue

Max length issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxLengthIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaxSizeAction

Max size action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxSizeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxSizeIssue

Max size issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxSizeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaxValueAction

Max value action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MaxValueIssue

Max value issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### MaxWordsAction

Max words action interface.

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Definition

- `MaxWordsAction`
  - `type`
  - `reference`
  - `expects`
  - `locales`
  - `requirement`
  - `message`

### MaxWordsIssue

Max words issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MaxWordsIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MaybePromise

Maybe promise type.

#### Generics

- `TValue`

#### Definition

- `MaybePromise`

### MaybeReadonly

Maybe readonly type.

#### Generics

- `TValue`

#### Definition

- `MaybeReadonly`

### MetadataAction

Metadata action interface.

#### Generics

- `TInput`
- `TMetadata`

#### Definition

- `MetadataAction`
  - `type`
  - `reference`
  - `metadata_`

### MimeTypeAction

MIME type action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MimeTypeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MimeTypeIssue

Mime type issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MimeTypeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinBytesAction

Min bytes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinBytesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MinBytesIssue

Min bytes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinBytesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinEntriesAction

Min entries action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinEntriesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MinEntriesIssue

Min entries issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinEntriesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinGraphemesAction

Min graphemes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinGraphemesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MinGraphemesIssue

Min graphemes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinGraphemesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinLengthAction

Min length action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinLengthAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MinLengthIssue

Min length issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinLengthIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinSizeAction

Min size action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinSizeAction`
  - `type`
  - `referece`
  - `expects`
  - `requirement`
  - `message`

### MinSizeIssue

Min size issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinSizeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MinValueAction

Min value action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MinValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MinValueIssue

Min value issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### MinWordsAction

Min words action interface.

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Definition

- `MinWordsAction`
  - `type`
  - `reference`
  - `expects`
  - `locales`
  - `requirement`
  - `message`

### MinWordsIssue

Min words issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MinWordsIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### MultipleOfAction

Multiple of action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `MultipleOfAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### MultipleOfIssue

Multiple of issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `MultipleOfIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NanIssue

NaN issue interface.

#### Definition

- `NanIssue`
  - `kind`
  - `type`
  - `expected`

### NanSchema

NaN schema interface.

#### Generics

- `TMessage`

#### Definition

- `NanSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### NeverIssue

Never issue interface.

#### Definition

- `NeverIssue`
  - `kind`
  - `type`
  - `expected`

### NeverSchema

Never schema interface.

#### Generics

- `TMessage`

#### Definition

- `NeverSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### NonEmptyAction

Non empty action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `NonEmptyAction`
  - `type`
  - `reference`
  - `expects`
  - `message`

### NonEmptyIssue

Non empty issue interface.

#### Generics

- `TInput`

#### Definition

- `NonEmptyIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`

### NonNullable

Extracts `null` from a type.

#### Generics

- `TValue`

#### Definition

- `NonNullable`

### NonNullableIssue

Non nullable issue interface.

#### Definition

- `NonNullableIssue`
  - `kind`
  - `type`
  - `expected`

### NonNullableSchema

Non nullable schema interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonNullableSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NonNullableSchemaAsync

Non nullable schema async interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonNullableSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NonNullish

Extracts `null` and `undefined` from a type.

#### Generics

- `TValue`

#### Definition

- `NonNullish`

### NonNullishIssue

Non nullish issue interface.

#### Definition

- `NonNullishIssue`
  - `kind`
  - `type`
  - `expected`

### NonNullishSchema

Non nullish schema interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonNullishSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NonNullishSchemaAsync

Non nullish schema async interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonNullishSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NonOptional

Extracts `undefined` from a type.

#### Generics

- `TValue`

#### Definition

- `NonOptional`

### NonOptionalIssue

Non optional issue interface.

#### Definition

- `NonOptionalIssue`
  - `kind`
  - `type`
  - `expected`

### NonOptionalSchema

Non optional schema interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonOptionalSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NonOptionalSchemaAsync

Non optional schema async interface.

#### Generics

- `TWrapped`
- `TMessage`

#### Definition

- `NonOptionalSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `message`

### NormalizeAction

Normalize action interface.

#### Generics

- `TForm`

#### Definition

- `NormalizeAction`
  - `type`
  - `reference`
  - `form`

### NormalizeForm

Normalize form type.

#### Definition

- `NormalizeForm`

### NotBytesAction

Not bytes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotBytesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotBytesIssue

Not bytes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotBytesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NotEntriesAction

Not entries action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotEntriesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotEntriesIssue

Not entries issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotEntriesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NotGraphemesAction

Not graphemes action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotGraphemesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotGraphemesIssue

Not graphemes issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotGraphemesIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NotLengthAction

Not length action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotLengthAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotLengthIssue

Not length issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotLengthIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NotSizeAction

Not size action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotSizeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotSizeIssue

Not size issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotSizeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NotValueAction

Not value action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotValuesAction

Not values action type.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `NotValuesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### NotValueIssue

Not value issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### NotValuesIssue

Not values issue type.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotValuesIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### NotWordsAction

Not words action interface.

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Definition

- `NotWordsAction`
  - `type`
  - `reference`
  - `expects`
  - `locales`
  - `requirement`
  - `message`

### NotWordsIssue

Not words issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `NotWordsIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### NullableSchema

Nullable schema interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `NullableSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### NullableSchemaAsync

Nullable schema async interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `NullableSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### NullishSchema

Nullish schema interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `Nullish`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### NullishSchemaAsync

Nullish schema async interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `Nullish`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### NullIssue

Null issue interface.

#### Definition

- `NullIssue`
  - `kind`
  - `type`
  - `expected`

### NullSchema

Null schema interface.

#### Generics

- `TMessage`

#### Definition

- `NullSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### NumberIssue

Number issue interface.

#### Definition

- `NumberIssue`
  - `kind`
  - `type`
  - `expected`

### NumberSchema

Number schema interface.

#### Generics

- `TMessage`

#### Definition

- `NumberSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### ObjectEntries

Object entries interface.

#### Definition

- `ObjectEntries`

### ObjectEntriesAsync

Object entries async interface.

#### Definition

- `ObjectEntriesAsync`

### ObjectIssue

Object issue interface.

#### Definition

- `ObjectIssue`
  - `kind`
  - `type`
  - `expected`

### ObjectKeys

Object keys type.

#### Generics

- `TSchema`

#### Definition

- `ObjectKeys`

### ObjectPathItem

Object path item interface.

#### Definition

- `ObjectPathItem`
  - `type`
  - `origin`
  - `input`
  - `key`
  - `value`

The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

### ObjectSchema

Object schema interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `ObjectSchema`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### ObjectSchemaAsync

Object schema async interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `ObjectSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### ObjectWithRestIssue

Object with rest issue interface.

#### Definition

- `ObjectWithRestIssue`
  - `kind`
  - `type`
  - `expected`

### ObjectWithRestSchema

Object with rest schema interface.

#### Generics

- `TEntries`
- `TRest`
- `TMessage`

#### Definition

- `ObjectWithRestSchema`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `rest`
  - `message`

### ObjectWithRestSchemaAsync

Object schema async interface.

#### Generics

- `TEntries`
- `TRest`
- `TMessage`

#### Definition

- `ObjectWithRestSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `rest`
  - `message`

### OctalAction

Octal action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `OctalAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### OctalIssue

Octal issue interface.

#### Generics

- `TInput`

#### Definition

- `OctalIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### OptionalSchema

Optional schema interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `OptionalSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### OptionalSchemaAsync

Optional schema async interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `OptionalSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### OutputDataset

Output dataset interface.

#### Generics

- `TValue`
- `TIssue`

#### Definition

- `OutputDataset`

### ParseBooleanAction

Parse boolean action interface.

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Definition

- `ParseBooleanAction`
  - `type`
  - `reference`
  - `expects`
  - `config`
  - `message`

### ParseBooleanConfig

Parse boolean config interface.

#### Definition

- `ParseBooleanConfig`
  - `truthy`
  - `falsy`

### ParseBooleanIssue

Parse boolean issue interface.

#### Generics

- `TInput`

#### Definition

- `ParseBooleanIssue`
  - `kind`
  - `type`
  - `expected`

### ParseJsonAction

JSON parse action interface.

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Definition

- `ParseJsonAction`
  - `type`
  - `reference`
  - `config`
  - `message`

### ParseJsonConfig

JSON parse config interface.

#### Definition

- `ParseJsonConfig`
  - `reviver`

### ParseJsonIssue

JSON parse issue interface.

#### Generics

- `TInput`

#### Definition

- `ParseJsonIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`

### Parser

The parser interface.

#### Generics

- `TSchema`
- `TConfig`

#### Definition

- ## `Parser`
  - `schema`
  - `config`

### ParserAsync

The parser async interface.

#### Generics

- `TSchema`
- `TConfig`

#### Definition

-
