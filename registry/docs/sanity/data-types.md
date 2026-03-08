# Data types

#### New to GROQ?

If you are just getting started with GROQ, check out the getting started guide first.
[Get started with GROQ](https://www.sanity.io/docs/content-lake/groq-introduction)

GROQ is strongly typed, meaning there is no implicit type conversion. Type conflicts (e.g. `1 + "a"`) will yield `null`.

For more information on how to express literal values for various data types, see the [Syntax section](https://www.sanity.io/docs/specifications/groq-syntax).

## Basic Data Types

### Boolean

Logical truth values, i.e.`, true` and `false`.

### Float

Signed 64-bit double-precision floating-point numbers, e.g., `3.14`, using the [IEEE 754 binary64 format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format#IEEE_754_double-precision_binary_floating-point_format:_binary64). These have a magnitude of roughly 10⁻³⁰⁷ to 10³⁰⁸ and can represent 15 significant figures with exact precision - beyond this; significant figures are rounded to 53-bit precision. The special IEEE 754 values of infinity and NaN (not a number) are not supported and are coerced to `null`.

### Integer

Signed 64-bit integers, e.g., `42`, with a range of -2⁶³ to 2⁶³-1.

### Null

An unknown value expressed as `null`. This is the SQL definition of null, which differs from the typical definition of "no value" in programming languages, and implies among other things, that `1 + null` yields `null` (1 plus an unknown number yields an unknown number). See the [Operators section](https://www.sanity.io/docs/specifications/groq-operators) for further implications of this.

### String

A UTF-8 encoded string of characters, e.g., `"Hi! 👋"`. The maximum string length is undefined but is fundamentally limited by the maximum document size and maximum HTTP request size as listed in [Technical Limits](https://www.sanity.io/docs/content-lake/technical-limits).

## Composite Data Types

### Array

An ordered collection of values, e.g. `[1, 2, 3]`. Can contain any combination of other types, including other arrays.

### Object

An unordered collection of key/value pairs (referred to as attributes) with unique keys, e.g. `{"a": 1, "b": 2}`. Keys must be strings, while values can be any combination of other types, including other objects. If duplicate keys are specified, the last key is used.

### Pair

A pair of values, e.g. `"a" => 1`. Pairs can contain any combination of other types, including other pairs, and are mainly used internally with projection conditionals and `select()`. In returned JSON, pairs are represented as arrays with two values.

### Range

An interval containing all values ordered between the start and end values (for details on ordering, see "Comparison operators" in the [Operators section](https://www.sanity.io/docs/specifications/groq-operators)). The starting value is always included, while the end may be either included or excluded. A right-inclusive range is expressed as two values separated by `..`, e.g., `1..3` returns `1,2,3`, while a right-exclusive range is separated by `...`, e.g., `1...3` returns `1,2`.

Ranges can have endpoints of any basic data type, but both endpoints must be of the same type (except integers and floats, which can be used interchangeably). Ranges with incompatible or invalid endpoints types will yield `null`.

> \[!CAUTION]
> Known issue
> Ranges currently may not work with all ordered types, and endpoint type conflicts may be handled incorrectly. Ranges also cannot be expressed in returned JSON.

Ranges are mainly used internally, e.g., with the `in` operator and array slice access operator. The endpoints may have context-dependent semantics, such as array slices with the range `[2..-1]` will cover the range from the third array element to the last element, while the same range is considered empty when used with `in`. For more details, see the documentation for [the relevant operators](https://www.sanity.io/docs/specifications/groq-operators).

## Subtypes

Subtypes are subsets of basic or composite types. Operators and functions that can act on the supertype can always act on the subtype as well, but the behavior may be modified, and some operators and functions can only act on the subtype.

### Datetime

Datetimes are strings with ISO 8601-formatted date/time combinations, e.g., `2018-11-04T13:45:21Z`.

> \[!CAUTION]
> Known issue
> Datetimes are currently treated as plain strings, so some operations may not work as expected, e.g. comparisons will not take the time zone into account.

### Document

Documents are objects which contain the following special attributes (in addition to other arbitrary attributes):

- `_id` (path, required): The unique ID of the document. IDs must begin with the characters `a-zA-Z0-9_`, followed by any of the characters `a-zA-Z0-9_.-`, and end with `a-zA-Z0-9_-`. IDs can have a maximum length of 128 characters and may not contain more than a single consecutive `.` character.
- `_type` (string, required): An arbitrary document type. Types may not be longer than 255 characters, may not contain `,` or `#`, and may not begin with `.` or `_`.
- `_rev` (string): A randomly generated revision ID corresponding to the transaction ID which generated this revision.
- `_createdAt` (datetime): The time when the document was created.
- `_updatedAt` (datetime): The time when the document was last modified.

### Path

Paths are strings that represent a node or branch in a tree (i.e., hierarchy). They are typically used for document IDs, where each path segment is separated by `.`, e.g., `articles.business.finance.4861`.

Paths can also be glob patterns, using `*` wildcards which do not cross `.` and `**` wildcards which do cross `.`. For example, the path `articles.business.finance.4861` is matched by the path `articles.business.**`, but not `articles.business.*`.

Paths are most commonly used in conjunction with the `in` operator when filtering documents, e.g., `_id in path("articles.business.**")`.

### Reference

References are objects that represent a reference to a different document. They have the following special attributes (in addition to other arbitrary attributes):

- `_ref` (path, required): The ID of the referenced document.
- `_weak` (boolean): If `true`, referential integrity is not enforced, i.e., the reference is allowed to point to a non-existent document. Defaults to `false`.

# Parameters

Parameters are client-provided values that are substituted into queries before execution. Their names must begin with `$` followed by a valid identifier, and their values must be JSON literals of any type (take care to quote strings). Since they are JSON literals they can only contain values, not arbitrary GROQ expressions, and are safe to pass from user input.

For example, the following query may be given parameters such as `$type="myType"` and `$object={"title": "myTitle", "value": 3}`:

```
*[ _type == $type && title == $object.title && value > $object.value ]
```

In the HTTP API, parameters are passed via URL query parameters, see the [HTTP API documentation](https://www.sanity.io/docs/http-reference/query) for details.

## Predefined Parameters

> \[!WARNING]
> Gotcha
> Predefined parameters are deprecated and will be removed in a future version of the API. Please use the functions `identity()` and `now()` instead.

The following parameters are predefined and available for use in all GROQ queries:

- `$identity` (string): The ID of the current user, or `<anonymous>` for unauthenticated users.
- `$now` ([datetime](https://www.sanity.io/docs/specifications/groq-data-types)): The current server time (UTC).
