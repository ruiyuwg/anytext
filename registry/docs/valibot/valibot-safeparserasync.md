## `SafeParserAsync`
  - `schema`
  - `config`

### SafeParseResult

Safe parse result type.

#### Generics

- `TSchema`

#### Definition

- `SafeParseResult`
  - `typed`
  - `success`
  - `output`
  - `issues`

### SchemaWithFallback

Schema with fallback type.

#### Generics

- `TSchema`
- `TFallback`

#### Definition

- `SchemaWithFallback`
  - `fallback`

### SchemaWithFallbackAsync

Schema with fallback async type.

#### Generics

- `TSchema`
- `TFallback`

#### Definition

- `SchemaWithFallbackAsync`
  - `fallback`
  - `async`
  - `~run`

### SchemaWithoutPipe

Schema without pipe type.

#### Generics

- `TSchema`

#### Definition

- `SchemaWithoutPipe`

### SchemaWithPartial

Schema with partial type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/partial/partial.ts).

### SchemaWithPartialAsync

Schema with partial async type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/partial/partialAsync.ts).

### SchemaWithPipe

Schema with pipe type.

#### Generics

- `TPipe`

#### Definition

- `SchemaWithPipe`
  - `pipe`
  - `~types`
  - `~run`

### SchemaWithPipeAsync

Schema with pipe async type.

#### Generics

- `TPipe`

#### Definition

- `SchemaWithPipeAsync`
  - `pipe`
  - `async`
  - `~types`
  - `~run`

### SchemaWithRequired

Schema with required type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/required/required.ts).

### SchemaWithRequiredAsync

Schema with required async type.

> This type is too complex to display. Please refer to the [source code](https://github.com/open-circle/valibot/blob/main/library/src/methods/required/requiredAsync.ts).

### SetPathItem

Set path item interface.

#### Definition

- `SetPathItem`
  - `type`
  - `origin`
  - `input`
  - `value`

The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

### RecordIssue

Record issue interface.

#### Definition

- `RecordIssue`
  - `kind`
  - `type`
  - `expected`

### SetSchema

Set schema interface.

#### Generics

- `TValue`
- `TMessage`

#### Definition

- `SetSchema`
  - `type`
  - `reference`
  - `expects`
  - `value`
  - `message`

### SetSchemaAsync

Set schema async interface.

#### Generics

- `TValue`
- `TMessage`

#### Definition

- `SetSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `value`
  - `message`

### SizeAction

Size action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `SizeAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### SizeInput

Size input type.

#### Definition

- `SizeInput`

### SizeIssue

Size issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `SizeIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### SlugAction

Slug action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `SlugAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### SlugIssue

Slug issue interface.

#### Generics

- `TInput`

#### Definition

- `SlugIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### SomeItemAction

Some action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `SomeItemAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### SomeItemIssue

Some item issue interface.

#### Generics

- `TInput`

#### Definition

- `SomeItemIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### SortItemsAction

Sort items action interface.

#### Generics

- `TInput`

#### Definition

- `SortItemsAction`
  - `type`
  - `reference`
  - `operation`

### StandardFailureResult

The result interface if validation fails.

#### Definition

- `StandardFailureResult`
  - `issues`

### StandardIssue

The issue interface of the failure output.

#### Definition

- `StandardIssue`
  - `message`
  - `path`

### StandardPathItem

The path item interface of the issue.

#### Definition

- `StandardPathItem`
  - `key`

### StandardProps

The Standard Schema properties interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `StandardProps`
  - `version`
  - `vendor`
  - `validate`
  - `types`

### StandardResult

The result interface of the validate function.

#### Generics

- `TOutput`

#### Definition

- `StandardResult`

### StandardSuccessResult

The result interface if validation succeeds.

#### Generics

- `TOutput`

#### Definition

- `StandardSuccessResult`
  - `value`
  - `issues`

### StandardTypes

The Standard Schema types interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `StandardTypes`
  - `input`
  - `output`

### StartsWithAction

Starts with action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `StartsWithAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### StartsWithIssue

Starts with issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `StartsWithIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### StrictObjectIssue

Strict object issue interface.

#### Definition

- `StrictObjectIssue`
  - `kind`
  - `type`
  - `expected`

### StrictObjectSchema

Strict object schema interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `StrictObjectSchema`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### StrictObjectSchemaAsync

Strict object schema async interface.

#### Generics

- `TEntries`
- `TMessage`

#### Definition

- `StrictObjectSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `entries`
  - `message`

### StrictTupleIssue

Strict tuple issue interface.

#### Definition

- `StrictTupleIssue`
  - `kind`
  - `type`
  - `expected`

### StrictTupleSchema

Strict tuple schema interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `StrictTupleSchema`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### StrictTupleSchemaAsync

Strict tuple schema async interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `StrictTupleSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### RecordIssue

Record issue interface.

#### Definition

- `RecordIssue`
  - `kind`
  - `type`
  - `expected`

### StringSchema

String schema interface.

#### Generics

- `TMessage`

#### Definition

- `StringSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### StringifyJsonAction

JSON stringify action interface.

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Definition

- `StringifyJsonAction`
  - `type`
  - `reference`
  - `config`
  - `message`

### StringifyJsonConfig

JSON stringify config interface.

#### Definition

- `StringifyJsonConfig`
  - `replacer`
  - `space`

### StringifyJsonIssue

JSON stringify issue interface.

#### Generics

- `TInput`

#### Definition

- `StringifyJsonIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`

### SuccessDataset

Success dataset interface.

#### Generics

- `TValue`

#### Definition

- `TypedDataset`
  - `typed`
  - `value`
  - `issues`

### SymbolIssue

Symbol issue interface.

#### Definition

- `SymbolIssue`
  - `kind`
  - `type`
  - `expected`

### SymbolSchema

Symbol schema interface.

#### Generics

- `TMessage`

#### Definition

- `SymbolSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### TitleAction

Title action interface.

#### Generics

- `TInput`
- `TTitle`

#### Definition

- `TitleAction`
  - `type`
  - `reference`
  - `title`

### ToBigintAction

To bigint action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `ToBigintAction`
  - `type`
  - `reference`
  - `message`

### ToBigintIssue

To bigint issue interface.

#### Generics

- `TInput`

#### Definition

- `ToBigintIssue`
  - `kind`
  - `type`
  - `expected`

### ToBooleanAction

To boolean action interface.

#### Generics

- `TInput`

#### Definition

- `ToBooleanAction`
  - `type`
  - `reference`

### ToDateAction

To date action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `ToDateAction`
  - `type`
  - `reference`
  - `message`

### ToDateIssue

To date issue interface.

#### Generics

- `TInput`

#### Definition

- `ToDateIssue`
  - `kind`
  - `type`
  - `expected`

### ToLowerCaseAction

To lower case action interface.

#### Definition

- `ToLowerCaseAction`
  - `type`
  - `reference`

### ToMinValueAction

To min value action interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `ToMinValueAction`
  - `type`
  - `reference`
  - `requirement`

### ToMaxValueAction

To max value action interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `ToMaxValueAction`
  - `type`
  - `reference`
  - `requirement`

### ToNumberAction

To number action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `ToNumberAction`
  - `type`
  - `reference`
  - `message`

### ToNumberIssue

To number issue interface.

#### Generics

- `TInput`

#### Definition

- `ToNumberIssue`
  - `kind`
  - `type`
  - `expected`

### ToStringAction

To string action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `ToStringAction`
  - `type`
  - `reference`
  - `message`

### ToStringIssue

To string issue interface.

#### Generics

- `TInput`

#### Definition

- `ToStringIssue`
  - `kind`
  - `type`
  - `expected`

### ToUpperCaseAction

To upper case action interface.

#### Definition

- `ToUpperCaseAction`
  - `type`
  - `reference`

### TransformAction

Transform action interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `TransformAction`
  - `type`
  - `reference`
  - `operation`

### TransformActionAsync

Transform action async interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `TransformActionAsync`
  - `type`
  - `reference`
  - `operation`

### TrimAction

Trim action interface.

#### Definition

- `TrimAction`
  - `type`
  - `reference`

### TrimEndAction

Trim end action interface.

#### Definition

- `TrimEndAction`
  - `type`
  - `reference`

### TrimStartAction

Trim start action interface.

#### Definition

- `TrimStartAction`
  - `type`
  - `reference`

### TupleIssue

Tuple issue interface.

#### Definition

- `TupleIssue`
  - `kind`
  - `type`
  - `expected`

### TupleItems

Tuple items type.

#### Definition

- `TupleItems`

### TupleItemsAsync

Tuple items async type.

#### Definition

- `TupleItemsAsync`

### TupleSchema

Tuple schema interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `TupleSchema`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### TupleSchemaAsync

Tuple schema async interface.

#### Generics

- `TItems`
- `TMessage`

#### Definition

- `TupleSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `message`

### TupleWithRestIssue

Tuple with rest issue interface.

#### Definition

- `TupleWithRestIssue`
  - `kind`
  - `type`
  - `expected`

### TupleWithRestSchema

Tuple with rest schema interface.

#### Generics

- `TItems`
- `TRest`
- `TMessage`

#### Definition

- `TupleWithRestSchema`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `rest`
  - `message`

### TupleWithRestSchemaAsync

Tuple with rest schema async interface.

#### Generics

- `TItems`
- `TRest`
- `TMessage`

#### Definition

- `TupleWithRestSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `items`
  - `rest`
  - `message`

### UlidAction

ULID action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `UlidAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### UlidIssue

ULID issue interface.

#### Generics

- `TInput`

#### Definition

- `UlidIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### UndefinedableSchema

Undefinedable schema interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `UndefinedableSchema`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### UndefinedableSchemaAsync

Undefinedable schema async interface.

#### Generics

- `TWrapped`
- `TDefault`

#### Definition

- `UndefinedableSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `wrapped`
  - `default`

### UndefinedIssue

Undefined issue interface.

#### Definition

- `UndefinedIssue`
  - `kind`
  - `type`
  - `expected`

### UndefinedSchema

Undefined schema interface.

#### Generics

- `TMessage`

#### Definition

- `UndefinedSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### UnionOptions

Union options type.

#### Definition

- `UnionOptions`

### UnionOptionsAsync

Union options async type.

#### Definition

- `UnionOptionsAsync`

### UnionIssue

Union issue interface.

#### Generics

- `TSubIssue`

#### Definition

- `UnionIssue`
  - `kind`
  - `type`
  - `expected`
  - `issues`

### UnionSchema

Union schema interface.

#### Generics

- `TOptions`
- `TMessage`

#### Definition

- `UnionSchema`
  - `type`
  - `reference`
  - `options`
  - `message`

### UnionSchemaAsync

Union schema async interface.

#### Generics

- `TOptions`
- `TMessage`

#### Definition

- `UnionSchemaAsync`
  - `type`
  - `reference`
  - `options`
  - `message`

### UnknownDataset

Unknown dataset interface.

#### Definition

- `TypedDataset`
  - `typed`
  - `value`
  - `issues`

### UnknownPathItem

Unknown path item interface.

#### Definition

- `UnknownPathItem`
  - `type`
  - `origin`
  - `input`
  - `key`
  - `value`

The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

### UnknownSchema

Unknown schema interface.

#### Definition

- `UnknownSchema`
  - `type`
  - `reference`
  - `expects`

### UrlAction

URL action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `UrlAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### UrlIssue

URL issue interface.

#### Generics

- `TInput`

#### Definition

- `UrlIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### UuidAction

UUID action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `UuidAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### UuidIssue

UUID issue interface.

#### Generics

- `TInput`

#### Definition

- `UuidIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### ValueAction

Value action interface.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `ValueAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### ValuesAction

Values action type.

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Definition

- `ValuesAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### ValueInput

Value input type.

#### Definition

- `ValueInput`

### ValueIssue

Value issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `ValueIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### ValuesIssue

Values issue type.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `ValuesIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### VariantIssue

Variant issue interface.

#### Definition

- `VariantIssue`
  - `kind`
  - `type`
  - `expected`

### VariantOptions

Variant options type.

#### Generics

- `TKey`

#### Definition

- `VariantOptions`

### VariantOptionsAsync

Variant options async type.

#### Generics

- `TKey`

#### Definition

- `VariantOptionsAsync`

### VariantSchema

Variant schema interface.

#### Generics

- `TKey`
- `TOptions`
- `TMessage`

#### Definition

- `VariantSchema`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `options`
  - `message`

### VariantSchemaAsync

Variant schema async interface.

#### Generics

- `TKey`
- `TOptions`
- `TMessage`

#### Definition

- `VariantSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `options`
  - `message`

### VoidIssue

Void issue interface.

#### Definition

- `VoidIssue`
  - `kind`
  - `type`
  - `expected`

### VoidSchema

Void schema interface.

#### Generics

- `TMessage`

#### Definition

- `VoidSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### WordsAction

Words action interface.

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Definition

- `WordsAction`
  - `type`
  - `reference`
  - `expects`
  - `locales`
  - `requirement`
  - `message`

### WordsIssue

Words issue interface.

#### Generics

- `TInput`
- `TRequirement`

#### Definition

- `WordsIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`
