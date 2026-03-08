## `ParserAsync`
  - `schema`
  - `config`

### PartialCheckAction

Partial check action interface.

#### Generics

- `TInput`
- `TPaths`
- `TSelection`
- `TMessage`

#### Definition

- `PartialCheckAction`
  - `type`
  - `reference`
  - `expects`
  - `paths`
  - `requirement`
  - `message`

### PartialCheckActionAsync

Partial check action async interface.

#### Generics

- `TInput`
- `TPaths`
- `TSelection`
- `TMessage`

#### Definition

- `PartialCheckActionAsync`
  - `type`
  - `reference`
  - `expects`
  - `paths`
  - `requirement`
  - `message`

### PartialCheckIssue

Partial check issue interface.

#### Generics

- `TInput`

#### Definition

- `PartialCheckIssue`
  - `kind`
  - `type`
  - `expected`
  - `requirement`

### PartialDataset

Partial dataset interface.

#### Generics

- `TValue`
- `TIssue`

#### Definition

- `UntypedDataset`
  - `typed`
  - `value`
  - `issues`

### PartialInput

Partial input type.

#### Definition

- `PartialInput`

### Path

Path type.

#### Definition

- `Path`

### PicklistOptions

Picklist options type.

#### Definition

- `PicklistOptions`

### PicklistIssue

Picklist issue interface.

#### Definition

- `PicklistIssue`
  - `kind`
  - `type`
  - `expected`

### PicklistSchema

Picklist schema interface.

#### Generics

- `TOptions`
- `TMessage`

#### Definition

- `PicklistSchema`
  - `type`
  - `reference`
  - `options`
  - `message`

### PipeAction

Pipe action interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `PipeAction`

### PipeActionAsync

Pipe action async interface.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `PipeActionAsync`

### PipeItem

Pipe item type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `PipeItem`

### PipeItemAsync

Pipe item async type.

#### Generics

- `TInput`
- `TOutput`
- `TIssue`

#### Definition

- `PipeItemAsync`

### PromiseIssue

Promise issue interface.

#### Definition

- `PromiseIssue`
  - `kind`
  - `type`
  - `expected`

### PromiseSchema

Promise schema interface.

#### Generics

- `TMessage`

#### Definition

- `PromiseSchema`
  - `type`
  - `reference`
  - `expects`
  - `message`

### RawCheckAction

Raw check action interface.

#### Generics

- `TInput`

#### Definition

- `RawCheckAction`
  - `type`
  - `reference`

### RawCheckActionAsync

Raw check action async interface.

#### Generics

- `TInput`

#### Definition

- `RawCheckActionAsync`
  - `type`
  - `reference`
  - `expects`

### RawCheckAddIssue

Raw check add issue type.

#### Generics

- `TInput`

#### Definition

- `RawCheckAddIssue`

### RawCheckContext

Raw check context interface.

#### Generics

- `TInput`

#### Definition

- `RawCheckContext`
  - `dataset`
  - `config`
  - `addIssue`

### RawCheckIssue

Raw check issue interface.

#### Generics

- `TInput`

#### Definition

- `RawCheckIssue`
  - `kind`
  - `type`

### RawCheckIssueInfo

Raw check issue info interface.

#### Generics

- `TInput`

#### Definition

- `RawCheckIssueInfo`
  - `label`
  - `input`
  - `expected`
  - `received`
  - `message`
  - `path`

### RawTransformAction

Raw transform action interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `RawTransformAction`
  - `type`
  - `reference`

### RawTransformActionAsync

Raw transform action async interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `RawTransformActionAsync`
  - `type`
  - `reference`

### RawTransformAddIssue

Raw transform add issue type.

#### Generics

- `TInput`

#### Definition

- `RawTransformAddIssue`

### RawTransformContext

Raw transform context interface.

#### Generics

- `TInput`

#### Definition

- `RawTransformContext`
  - `dataset`
  - `config`
  - `addIssue`
  - `NEVER`

### RawTransformIssue

Raw transform issue interface.

#### Generics

- `TInput`

#### Definition

- `RawTransformIssue`
  - `kind`
  - `type`

### RawTransformIssueInfo

Raw transform issue info interface.

#### Generics

- `TInput`

#### Definition

- `RawTransformIssueInfo`
  - `label`
  - `input`
  - `expected`
  - `received`
  - `message`
  - `path`

### ReadonlyAction

Readonly action interface.

#### Generics

- `TInput`

#### Definition

- `ReadonlyAction`
  - `type`
  - `reference`

### RecordIssue

Record issue interface.

#### Definition

- `RecordIssue`
  - `kind`
  - `type`
  - `expected`

### RecordSchema

Record schema interface.

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Definition

- `RecordSchema`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `value`
  - `message`

### RecordSchemaAsync

Record schema async interface.

#### Generics

- `TKey`
- `TValue`
- `TMessage`

#### Definition

- `RecordSchemaAsync`
  - `type`
  - `reference`
  - `expects`
  - `key`
  - `value`
  - `message`

### ReduceItemsAction

Reduce items action interface.

#### Generics

- `TInput`
- `TOutput`

#### Definition

- `ReduceItemsAction`
  - `type`
  - `reference`
  - `operation`
  - `initial`

### RegexAction

Regex action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `RegexAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### RegexIssue

Regex issue interface.

#### Generics

- `TInput`

#### Definition

- `RegexIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### RequiredPath

Required path type.

#### Definition

- `RequiredPath`

### RequiredPaths

Required paths type.

#### Definition

- `RequiredPaths`

### ReturnsAction

Returns action interface.

#### Generics

- `TInput`
- `TSchema`

#### Definition

- `ReturnsAction`
  - `type`
  - `reference`
  - `schema`

### ReturnsActionAsync

Returns action interface.

#### Generics

- `TInput`
- `TSchema`

#### Definition

- `ReturnsActionAsync`
  - `type`
  - `reference`
  - `schema`

### RfcEmailAction

RFC email action interface.

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

### RfcEmailIssue

RFC email issue interface.

#### Generics

- `TInput`

#### Definition

- `EmailIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### SafeIntegerAction

Safe integer action interface.

#### Generics

- `TInput`
- `TMessage`

#### Definition

- `SafeIntegerAction`
  - `type`
  - `reference`
  - `expects`
  - `requirement`
  - `message`

### SafeIntegerIssue

Safe integer issue interface.

#### Generics

- `TInput`

#### Definition

- `SafeIntegerIssue`
  - `kind`
  - `type`
  - `expected`
  - `received`
  - `requirement`

### SafeParser

The safe parser interface.

#### Generics

- `TSchema`
- `TConfig`

#### Definition

- ## `SafeParser`
  - `schema`
  - `config`

### SafeParserAsync

The safe parser async interface.

#### Generics

- `TSchema`
- `TConfig`

#### Definition

-
