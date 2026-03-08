# Syntax reference

> \[!TIP]
> Protip
> If you are just getting started with GROQ, check out the [how-to guide](https://www.sanity.io/docs/content-lake/how-queries-work) to first.

A typical GROQ query has this form:

```groq
*[ <filter> ]{ <projection> }
```

1. `*`  returns all documents in the dataset that the current user has permissions to read.
2. The documents are passed to a filter (`[]`), which retains documents for which the expression evaluates to `true`.
3. The retained documents are passed to an optional projection. The projection determines how the result should be formatted. If no projection is specified, all data is returned.

A GROQ query of this form operates as a query pipeline, where the results from each component are passed as inputs to the next. The filter and projection are optional, and a query can have any number of them in any order.

In pipeline components, document attributes can be accessed by name. For example, this query would fetch directors born since 1970 and return their name, year of birth, and a list of their movies:

```groq
*[ _type == "director" && birthYear >= 1970 ]{
  name,
  birthYear,
  "movies": *[ _type == "movie" && director._ref == ^._id ]
}
```

For a complete introduction to GROQ, please see the [how-to](https://www.sanity.io/docs/content-lake/how-queries-work).

## JSON Superset

GROQ's syntax is a superset of JSON, so any valid JSON value is a valid GROQ query (that returns the given value). Below are a few examples of JSON values:

```json
"Hi! 👋"
```

```json
["An", "array", "of", "strings"]
```

```json
{
  "array": ["string", 3.14, true, null],
  "boolean": true,
  "number": 3.14,
  "null": null,
  "object": {"key": "value"},
  "string": "Hi! 👋"
}
```

For more information on JSON syntax, see the [JSON specification](https://tools.ietf.org/html/rfc8259).

## Whitespace

Whitespace is not significant in GROQ, except for acting as a token separator and comment terminator. Any sequence of the following characters is considered whitespace, with Unicode code points in parenthesis:

- Tab (`U+0009`)
- Newline (`U+000A`)
- Vertical tab (`U+000B`)
- Form feed (`U+000C`)
- Carriage return (`U+000D`)
- Space (`U+0020`)
- Next line (`U+0085`)
- Non-breaking space (`U+00A0`)

Whitespace inside a string literal is interpreted as-is.

## Comments

Comments serve as query documentation and are ignored by the parser. They start with `//` and run to the end of the line:

```groq
{
  // Comments can be on a separate line
  "key": "value" // Or at the end of a line
}
```

Comments cannot start inside a string literal.

## Expressions

An expression is one of the following:

- A literal, attribute lookup, parameter, or constant.
- An operator invocation (and, by extension, a pipeline).
- A function call.

Expressions can be used anywhere that a value is expected, such as object values, array elements, operator operands, or function arguments. The expression is in effect replaced by the value which it evaluates to.

> \[!WARNING]
> Gotcha
> Due to parser ambiguity with filters, the following access operators can only take literals, not arbitrary expressions: array element access (e.g. `array[0]`), array slices (e.g. `array[1..3]`), and object attribute access (e.g. `object["attribute"]`).

### Selectors

A selector is a subset of an expression used to search for fields inside a document. You can only use them in certain functions—at this time, Delta GROQ functions, to select part of a document. See the [Delta GROQ functions](https://www.sanity.io/docs/specifications/groq-functions) and the Selectors section for a list of available functions and selectors.

## Literals

Literals are inline representations of constant values, e.g., `"string"` or `3.14`. GROQ supports all JSON literals, with a few enhancements and additional data types.

For more information on the data types themselves, see the [data types](https://www.sanity.io/docs/specifications/groq-data-types) reference.

### Boolean and Null Literals

The constants `true`, `false`, and `null`.

### Integer Literals

A sequence of digits, e.g., `42`. Leading zeroes are ignored.

### Float Literals

Floats have an integer part, a fractional part, and an exponent part. The integer part is required, and at least one of the fractional or exponent parts must be given.

The integer part is equivalent to an integer literal. The fractional part is a decimal point `.` followed by a sequence of digits. The exponent part is `e` or `E`, followed by an optional `+` or `-` sign followed by an integer specifying base-10 exponentiation.

The following are examples of float literals:

```json
3.0
3.14
3e6      // Equivalent to 3000000.0
3.14eE0  // Equivalent to 3.14
3.14e-2  // Equivalent to 0.0314
```

### String Literals

A sequence of zero or more UTF-8 encoded characters surrounded by single or double quotes, e.g., `"Hello world! 👋"`. The following escape sequences are supported (mirroring JSON), all of which are valid in both single- and double-quoted string literals:

- `\\`: backslash
- `\/`: slash
- `\'`: single quote
- `\"`: double quote
- `\b`: backspace
- `\f`: form feed
- `\n`: newline
- `\r`: carriage return
- `\t`: tab
- `\uXXXX`: UTF-16 code point, where `XXXX` is the hexadecimal character code
- `\uXXXX\uXXXX`: UTF-16 surrogate pair

### Array Literals

A comma-separated list of values enclosed by `[]`, e.g. `[1, 2, 3]`. An optional trailing comma may follow the final element.

### Object Literals

A comma-separated list of key-value pairs enclosed by `{}`, where the key and value of each pair is separated by `:`, e.g. `{"a": 1, "b": 2}`. Keys must be strings. An optional trailing comma may follow the final pair.

### Pair Literals

Two values separated by `=>`, e.g. `"a" => 1`.

### Range Literals

Two values separated by `..` (right-inclusive) or `...` (right-exclusive), e.g. `1..3` or `1...3`.

## Identifiers

Identifiers name query entities such as attributes, parameters, functions, and some operators. Identifiers must begin with `a-zA-Z_`, followed by any number of characters matching `a-zA-Z0-9_`. Parameters are prefixed with `$`.

### Reserved Keywords

The following keywords are reserved and cannot be used as identifiers:

- `false`
- `null`
- `true`

## Attribute Lookup

A bare identifier looks up the value of the corresponding attribute in the document or object at the root of the current scope. For example, the following query `category` returns the value of the `category` attribute of the document currently being considered by the filter:

```groq
*[ category == "news" ]
```

If the attribute does not exist, or if the root value of the scope is not a document or object, then the identifier will return `null`.

> \[!TIP]
> Protip
> JSON allows attribute keys to be any arbitrary UTF-8 string. In cases where the key is not a valid GROQ identifier, it can instead be accessed by using the `@` operator (typically returning the current document) and the `[]` attribute access operator, e.g. `@["1 illegal name 🚫"]`.

### Attribute Scope

Attribute lookups are scoped such that the same identifier may refer to different attributes in different contexts. New scopes are created by pipeline components, typically by iterating over the piped array elements and evaluating an expression in the scope of each element.

#### @ Operator – Access current scope

The `@` operator can be used to access the root value of the current scope.

```groq
// @ refers to the current number being evaluated
// Returns numbers in the array if they're greater than or equal to 10
numbers[ @ >= 10 ]

// @ refers to the myArray value
// This query returns the number of items in the myArray array
*{"arraySizes": myArray[]{"size": count(@)}} 
```

#### ^ Operator – Access the parent scope

Scopes can also be nested, in which case the `^` operator can be used to access the root value of the parent scope. Consider the following query:

```groq
*[ _type == "movie" && releaseYear >= 2000 ]{
  title,
  releaseYear,
  crew{name, title},
  "related": *[ _type == "movie" && genre == ^.genre ]
}
```

In the filter, `_type` and `releaseYear` access the corresponding attributes of each document passed from `*`. Similarly, in the projection, `title`, `releaseYear`, and `crew` access the corresponding attributes from each document passed from the filter. However, in the nested `crew` projection, `name` and `title` access the attributes of each object passed from the `crew` object - notice how the outer and inner `title` identifiers refer to different attributes (one is from the movie, the other is from the crew member).

The `related` pipeline components also create new scopes where `_type` and `genre` refer to the attributes of each document fetched from the preceding `*` operator, not those of the surrounding projected document. Notice how the `^` operator is used to access the document at the root of the parent (outer) scope and fetch its `genre` attribute.

## Operators

GROQ supports nullary, unary, and binary operators, which return a single value when invoked. Unary operators can be either prefix or postfix (e.g. `!true` or `ref->`), while binary operators are always infix (e.g. `1 + 2`). Operators are made up of the characters `=<>!|&+-*/%@^`, but identifiers can also be used to name certain binary operators (e.g., `match` which case they are considered reserved keywords.

## Functions

GROQ function calls are expressed as a function identifier immediately followed by a comma-separated argument list in parentheses, e.g., `function(arg1, arg2)`. An optional trailing comma may follow the final argument. Functions can take any number of arguments (including zero), and return a single value.

## Pipe Functions

Pipe functions ([order()](https://www.sanity.io/docs/specifications/groq-pipeline-components) and [score()](https://www.sanity.io/docs/specifications/groq-functions)) must be preceded by the [pipe operator](https://www.sanity.io/docs/specifications/groq-operators) (`|`). The left-hand expression will be an array that the pipe operator will pass to the right-hand pipe function, returning a new array.

`*[_type == "post"] | order(_createdAt desc)` will pass an array of all documents with a `_type` of `post` into the `order()` function, returning a new array of those documents sorted by the `_createdAt` property in descending order.
