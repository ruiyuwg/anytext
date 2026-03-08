# Operators

## Logical Operators

GROQ supports the use of the following logical operators:

- AND (`&&`)
- OR (`||`)
- NOT (`!`)

The operand – the value that the operator evaluates – must be a boolean or `null`. If the evaluation yields an invalid type, it will be coerced to `null`.

### `&&` – Logical AND

`&&` returns `true` if both operands are `true`.

Specifically, `&&` follows the evaluation order:

1. returns `false` if either operand is `false`
2. otherwise, returns `null` if either operand is `null` (or not a boolean)
3. otherwise, returns `true`

#### Truth table

```groq
true && true   // returns true

true && false  // returns false

false && true  // returns false

false && false // returns false

true && null   // returns null

false && null  // returns false

null && true   // returns null

null && false  // returns false

null && null   // returns null
```

#### GROQ examples

```groq
// Checks if a document: 
// is of _type "author"
// AND has a name value of "John Doe"
// If both are true, returns all documents matching
*[_type == "author" && name == "John Doe"]


// Checks if a document:
// is of _type "movie"
// AND has a title of "Arrival"
// If both are true, returns all documents matching
*[_type == "movie" && title == "Arrival"]

// Checks if a document:
// is of _type "movie"
// AND includes the string 'sci-fi' in its genres field
// If both are true, returns all documents matching
*[_type == "movie" && "sci-fi" in genres]
```

### `||` – Logical OR

`||` returns `true` if either operand is `true`.

Specifically, `||` follows the evaluation order:

1. returns `true` if either operand is `true`
2. otherwise, returns `null` if either operand is `null` (or not a boolean)
3. otherwise, returns `false`

#### Truth Table

```groq
true || true   // Returns true

true || false  // Returns true

false || true  // Returns true

false || false // Returns false

true || null   // Returns true

false || null  // Returns null

null || true   // Returns true

null || false  // Returns null

null || null   // Returns null
```

#### GROQ examples

```groq
// Checks if a document:
// has a number property `popularity` greater than 15
// OR has a releaseDate after 2016-04-25
// Returns all documents that match EITHER condition
*[popularity > 15 || releaseDate > "2016-04-25"]

// Checks if a document:
// has a postCount greater than 20
// OR has a boolean property `featured` equal to true
// Returns all documents that match EITHER condition
*[postCount > 20 || featured]

// Checks if a document:
// has a name value of "John Doe"
// OR has a slug.current property containing the word "forever"
// Returns all documents that match EITHER condition
*[name == "John Doe" || slug.current match "forever"]
```

### `!` – Logical Not

`!` returns the logical negation of the value of the operand.

> \[!WARNING]
> Gotcha
> `!value` will always return `null` unless `value` is either `true` or `false`.

#### Truth table

```groq
!true  // Returns false

!false // Returns true

!null  // Returns null
```

#### GROQ examples

```groq
// Returns all docs that don't start with a.b.
*[!(_id in path("a.b.**"))]

// Returns all documents where the boolean `awardWinner` is false
*[!awardWinner]
```

## Comparison Operators

Comparison operators compare two values, returning `true` if the comparison holds or `false` otherwise. The operands must be of the same type (except for integers and floats, which are interchangeable). If the operands are of different types, the comparison returns `null`. If any operand is `null`, the comparison returns `null`.

Comparisons are only supported for booleans, integers, floats, and strings. Comparisons using any other data types will return `null`.

Equality comparisons (`==` and `!=`) have the following semantics:

- **Booleans**: identical logical truth values.
- **Integers and floats**: identical real number values.
- **Strings**: identical lengths and Unicode code points (case sensitive).
- **Nulls**: always yield `null`.

Ordered comparisons (`>`, `<`, `>=`, and `<=`) use the following order:

- **Booleans**: `true` is greater than `false`.
- **Integers and floats**: numerical order.
- **Strings**: numerical Unicode code point order (i.e., case-sensitive), compared character-by-character. For overlapping strings, shorter strings are ordered before longer strings.
- **Nulls**: always yield `null`.

> \[!CAUTION]
> Known issue
> String fields that are longer than 1024 characters are not available for search using equality operators (`==`, `!=`, `<`, `<=`, `>`, and `>=`) and are not sortable.
> The `match` operator works on a string field of any length.

### `==` Equality

Returns `true` if the operands are considered equal.

### `!=` Inequality

Returns `true` if the operands are considered not equal.

### `>` Greater Than

Returns `true` if the left-hand operand is greater than (ordered after) the right-hand operand.

### `<` Lesser Than

Returns `true` if the left-hand operand is lesser than (ordered before) the right-hand operand.

### `>=` Greater Than or Equal

Returns `true` if the left-hand operand is considered greater than or equal to the right-hand operand.

### `<=` Lesser Than or Equal

Returns `true` if the left-hand operand is considered lesser than or equal to the right-hand operand.

### `in` Compound Type Membership

```groq
// Returns true if document's _type
// is included in the array (either "movie" or "person")
*[_type in ["movie", "person"]]

// Returns true if "myTag" is in tags array
*["myTag" in tags]
```

Returns `true` if the left-hand operand is contained within the right-hand operand. The right-hand operand may be an [array](https://www.sanity.io/docs/specifications/groq-data-types), [range](https://www.sanity.io/docs/specifications/groq-data-types), or [path](https://www.sanity.io/docs/specifications/groq-data-types).

If the right-hand operand is an array, the left-hand operand may be of any type. The left-hand operand is compared for equality (`==`) with each element of the array, returning `true` as soon as a match is found. If no match is found, it returns `null` if the array contains a `null` value, otherwise `false`.

If the right-hand operand is a range, the left-hand operand must be of the same type as the range endpoints. Returns `true` if the left-hand operand is ordered between the range endpoints, otherwise `false`.

If the right-hand operand is a path, the left-hand operand must be a string or path. Returns `true` if the left-hand operand is matched by the right-hand path pattern, otherwise `false`.

#### not `in`

To find results where the left-hand operand is **not** contained within the right-hand operand, the entire expression can be negated with the [logical not operator](https://www.sanity.io/docs/specifications/groq-operators), `!`. Parentheses are required to apply the logical not operator to the entire expression.

```groq
// Returns true if document's _type
// is *not* included in the array (neither "movie" nor "person")
*[!(_type in ["movie", "person"])]

// Returns true if "myTag" is in tags array
*[!("myTag" in tags)]
```

> \[!WARNING]
> Gotcha
> In GROQ `v1`, it was possible to use `==` to compare a string against an array of strings (e.g., `someArray[].tags == "something"`). This behaviour was inconsistent with the GROQ specification and was fixed in `v2021-03-25` (it will no longer return `true`).
> The `in` operator correctly compares the left hand operand to each element in an array for equality, returning `true` when a match is found (e.g., `"something" in someArray[].tags`). This approach is consistent with the GROQ specification and is the ideal way to compare a string against an array of strings.

## Access Operators

Because of the nested nature of data, it's often important to access members of compound data types like objects and arrays. Access operators allow the use of nested content in operations.

Access operators will return `null` if the member does not exist or the operator is incompatible with the left-hand operand's type. Access operators can be chained. Each operator accesses the result of the preceding chain, e.g., `object.ref->array[1]`.

### `*` Everything

Takes no operands and returns an array of all stored documents that the current user has access to. It is typically used at the beginning of a GROQ query pipeline, such as `*[ _type == "movie" ]{ title, releaseYear }`.

```groq
// Returns all items in the root array
*[]

// Returns all items from the root array
// matching the filter provided (documents with _type of "movie")
*[_type == "movie"]
```

> \[!WARNING]
> Gotcha
> Not to be confused with the `*` multiplication operator, which takes two operands (the factors to be multiplied).

### `@` This

Takes no operands and returns the root value of the current scope, or `null` if no root value exists.

For example, in the document filter `*[ @.attribute == "value" ]` it refers to the currently filtered document, and in the expression `numbers[@ >= 10]` it refers to the currently filtered number of the `numbers` array.

```groq
// @ refers to the root value (document) of the scope
*[ @["1"] ] 

// @ refers to the myArray array
// Returns the total number of items in my Array
*{"arraySizes": myArray[]{"size": count(@)}} 
```

### `^` Parent

Takes no operands and returns the root value of the parent scope, or `null` if no parent scope exists.

```groq
// Value of ^ is the current doc in the "someParent" array
*[_type == "someParent"]{ 
  "referencedBy": *[ references(^._id) ]
}

// Using the ^ operator to refer to the enclosing document. Here ^._id refers to the id
// of the enclosing person record.
*[_type=="person"]{
  name,
  "relatedMovies": *[_type=='movie' && references(^._id)]{ title }
}

// person.someObj.parentName returns root name value
*[_type=="person"]{
  name,
  someObj{
    name,
    "parentName": ^.name
  }
}
```

#### Accessing higher scopes

Multiple parent operators can be chained together to access two or more scopes up.

```groq
*[_type == "content"]{
  "children": *[references(^._id)]{
    "grandchildren": *[references(^._id) && references(^.^._id)]
  }
}
```

In the example above, the `"children"` filter will return documents that reference the parent document (each one returned from `*[_type == "content"]`).

In the `"grandchildren"` filter, we want to return documents that reference the parent document (which will be returned from the `"children"` filter) as well as the grandparent document (which will be returned from `*[_type == "content"]`). The chained parent operator (`^.^`) is required to go two levels up the scope.

To move higher in scope, additional parent operators can be added.

### `.<identifier>` Object Attribute Access

Returns the value of the object attribute given by the right-hand identifier, e.g. `object.attribute`.

```groq
// Returns the name string from someObject
*[_type == "document"] {
  "nestedName": someObject.name
}
```

### `[<string>]` Object Attribute Access

Returns the object attribute with the given key, e.g., `object["attribute"]`. This is equivalent to the `.` access operator, but useful when the attribute name is not a legal GROQ identifier.

```groq
// Returns the illegalIdentifier value from someObject
*[_type == "document"] {
  "nestedName": someObject["illegalIdentifier"]
}
```

> \[!WARNING]
> Gotcha
> The attribute name must be a string literal due to parser ambiguity with filters.

### `->` Reference Access (dereference)

Returns the document referenced by the left-hand reference instead of the reference values. It may optionally be followed by an attribute identifier or data projection, in which case it returns the value of the given attribute(s) of the referenced document. If the reference points to a non-existent document (for a weak reference), it returns `null`.

```groq
*[_id == "someDocument"]{
  referencedDoc->, // Returns all data
  "referenceName": referencedDoc->name // Returns the name value
  "referenceProjection" referenceDoc->{
    title,
    description
  } // Returns the title and description
}
```

### `[<integer>]` Array Element Access

Returns the array element at the given zero-based index, e.g., `array[2]` yields the third array element. Negative indices are based at the end of the array, e.g., `array[-2]` yields the second-to-last element.

> \[!WARNING]
> Gotcha
> The element index must be an integer literal due to parser ambiguity with filters.

### `[<range>]` Array Slice

Returns a new array containing the elements whose indices fall within the range, e.g., `array[2..4]` yields the new array `[array[2], array[3], array[4]]`. Ranges may extend beyond array bounds.

- `..` includes the right-index, e.g. `1..3` returns 4 items
- `...` excludes the right-index, e.g. `1...3` returns 3 items.

Negative range endpoints are based at the end of the array, e.g., `array[2..-1]` yields all elements from the third to the last. If the right endpoint falls before the left endpoint the result is an empty array.

> \[!WARNING]
> Gotcha
> The range must be a range literal due to parser ambiguity with filters.

### `[<boolean>]` Array Filter

Returns a new array with the elements for which the filter expression evaluates to `true`, e.g., `people[birthYear >= 1980]`. The filter is evaluated in the scope of each array element.

> \[!TIP]
> Protip
> This operator is actually the filter pipeline component in disguise, since it has an implicit `|` operator before it.

### `[]` Array Traversal

Traverses the left-hand array, applying the optional right-hand access operator to each element and collecting the resulting values in a flat array - e.g., `array[].attribute` yields a flat array of the `attribute` attribute value of each array element, and `array[]->name` yields a flat array of the `name` attribute values of each document referenced by `array`. If no right-hand access operator is given, it defaults to returning a flat array containing each traversed element.

```groq
// "cast" loops through the castMembers array
// each person dereferences to return each person's name
*[_type=='movie']{title,'cast': castMembers[].person->name}

// Returns
{
  title: "Interstellar",
  cast: [
    "Matthew McConaugheh",
    "Anne Hathaway",
    "Matt Damon",
    ...
  ]
}
```

### `...` Array/Object Expansion

Expands the right-hand array or object into the surrounding literal array or object.

```groq
// In an array
[ ...[1,2], 3, ...[4,5] ]
// Returns
[1,2,3,4,5]
 
// In an object
{ ...{"a": 1}, "b":2, {"c":3} }
//returns
{ "a": 1, "b": 2, "c":3 }
```

## Arithmetic Operators

Arithmetic operators accept any combination of float and integer operands. If any operand is a float, or if the result has a non-zero fractional part, the result is a float; otherwise, it is an integer.

The `+` operator is also used to concatenate two strings, arrays, or objects.

> \[!WARNING]
> Gotcha
> Floating-point arithmetic is fundamentally imprecise, so operations on floats may produce results with very small rounding errors, and the results may vary on different CPU architectures. For example, `3.14+1` yields `4.140000000000001`. The `round()` function can be used to round results.

### `+` Addition and Concatenation

Adds two numbers, e.g., `3+2` yields `5`. Also acts as a prefix operator for positive numbers, e.g., `+3` yields `3`.

Also concatenates two strings, arrays, or objects, e.g., `"ab"+"cd"` yields `"abcd"`. If two objects have duplicate keys, the key from the right-hand object replaces the key from the left-hand one.

### `-` Subtraction

Subtracts two numbers, e.g., `3-2` yields `1`. Also acts as a prefix operator for negative numbers, e.g., `-3`.

### `*` Multiplication

Multiplies two numbers, e.g., `3*2` yields `6`.

### `/` Division

Divides two numbers, e.g., `3/2` yields `1.5`. Division by `0` yields `null`.

### `**` Exponentiation

Raises the left-hand operand to the power of the right-hand operand, e.g., `2**3` yields `8`.

Fractional and negative exponents follow the normal rules of roots and inverse exponentiation, so e.g., the square root of `4` is taken with `4**(1/2)` (yielding `2`), and the inverse square root of `4` is taken with `4**-(1/2)` (yielding `0.5`).

### `%` Modulo

Returns the remainder of the division of its operands, e.g.,, `5%2` yields `1`. The remainder has the sign of the dividend and a magnitude less than the divisor.

## Full-Text Search Operators

Full-text search operators perform searches of text content using inverted search indexes. Content is tokenized as words (i.e. split on whitespace and punctuation), with no stemming or other processing.

### `match` Full-text Search

Searches the left-hand operand for individual words that match the text pattern(s) given in the right-hand operand, returning `true` if a match is found; otherwise it returns `false`. If the right-hand operand contains `null` then `match` will return `null`.

Patterns are strings that use `*` as wildcards, and any number of wildcards can be used at any position. For example, `foo*` matches any word starting with `foo`, and `foo*bar` matches any word starting with `foo` and ending with `bar`. If the pattern does not contain any wildcards, it must exactly match a whole word in the left-hand operand.

Both the left-hand and right-hand operands can be either strings or arrays of strings. All patterns in the right-hand operand must match anywhere in the left-hand operand, e.g. `["foobar", "baz"] match ["foo*", "*bar"]` returns `true`. The right-hand operand is also tokenized in the same way as the underlying content (by splitting on whitespace and punctuation) so that, e.g. `"foo bar"` is equivalent to `["foo", "bar"]`.

```groq
// title contains a word starting with "wo"
*[title match "wo*"] 

// title and body combined contains a word starting with "wo" and the full word "zero"
*[[title, body] match ["wo*", "zero"]]

// title must contain both the full words "hello" and "goodbye"
*[title match ["hello", "goodbye"]]
```

> \[!CAUTION]
> Known issue
> `match` with left-hand arrays currently only work as documented with array traversal expressions, e.g. `array[].value match "pattern"`, and then only in certain cases. If the left-hand operand is an array attribute, e.g. `array match "pattern"`, then it never matches. If the left-hand operand is a literal array, e.g. `[a, b] match ["x","y"]`, then all right-hand patterns must match any *single* string (instead of anywhere in all strings).

> \[!TIP]
> Protip
> To match against a body of portable text, one approach is to use the `pt::text()` function. This will strip out all the marks and return just the joined body of the portable text (almost as if it were plain text). Function details and an example using match can be found [here](https://www.sanity.io/docs/specifications/groq-functions).

## Pipe Function Call Expression

GROQ comes with built-in pipe functions ([order()](https://www.sanity.io/docs/specifications/groq-pipeline-components) and [score()](https://www.sanity.io/docs/specifications/groq-functions)) that provide additional features. Pipe functions always accept an array on the left-hand side and return another array. The syntax is optimized for being able to chain pipe functions together with other compound expressions.

### `|` Pipe Operator

Pipe functions must be preceded with the pipe operator (`|`). The left-hand expression will be an array that's passed to the right-hand function:

```groq
// Left-hand expression | Right-hand function

* | order(_id asc)
*[_type == "post"] | order(date desc)
*[]{ _id, title } | order(_createdAt asc)

// Note in the last example that the expression used
// in the order function does not need to be passed
// in the projection.
```

The pipe operator may also precede a projection, though in that case it is optional.

> \[!TIP]
> Protip
> When using the `score()` function, pipe it in after the filter, but before a projection. Score works off the raw, unmodified data returned from the filter so it's best to use it before other functions or projections.

## Operator Precedence

Operator precedence is listed below, in descending order and with associativity in parenthesis:

- `.` (left), `|` (left)
- `->` (left)
- `**` (right)
- `*` (left), `/` (left), `%` (left)
- `+` (left), `-` (left), `!` (right)
- `...` (right)
- `==` , `!=`, `>`, `>=`, `<`, `<=` (all left), `in` (left), `match` (left)
- `&&` (left)
- `||` (left)
- `*` (none), `@` (none), `^` (none)

Precedence can be overridden by grouping expressions with `()`, e.g. `(1+2)*3`.
