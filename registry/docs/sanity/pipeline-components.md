# Pipeline components

A pipeline connects a set of components by passing the left-hand array's value to the pipeline component given by the right-hand operand and yielding its return value. Some components must be adjacent (e.g., `*` and `[filter]` must be `*[filter]`), some must be separated with the pipe operator (e.g., `* | order()`), and others may optionally use the pipe operator (e.g., projections can be `* {projection}` or `* | {projection}`).

> \[!TIP]
> Protip
> White space is not significant in GROQ except in a string literal, when terminating a comment, or when acting as a token separator (e.g., the spaces are required around `match` in `title match "movie"`), which means `*[filter]` can be `* [filter]`, `* | order()` can be `*|order()`, etc.

The following query pipeline fetches all documents from the data store, passes them to a filter, then a projection, and finally orders the results:

```groq
*[ _type == "movie" && releaseYear >= 1980]{
  title,
  releaseYear,
  genre
} | order(releaseYear desc, title asc) |
```

A pipeline component typically iterates over the array elements and evaluates an expression in the scope of each iterated value (as described in "Attribute Scope" in the [Syntax section](https://www.sanity.io/docs/specifications/groq-syntax)). The evaluated expression typically determines the component's return value.

> \[!CAUTION]
> Known issue
> The behavior of piping non-array values is currently undefined.

## `[<boolean>]` Filter Component

Iterates over the elements of the piped array, evaluates the given boolean expression in the scope of each element and returns an array of elements for which the expression evaluated to `true`.

For example, the following filter will retain documents of type `movie` where the `releaseYear` attribute is greater than or equal to 1980:

```groq
*[ _type == "movie" && releaseYear >= 1980]
```

> \[!CAUTION]
> Known issue
> Filters may retain elements for which the expression evaluates to other values as well, e.g. integers and strings.

## `[<range>]` Slice Component

Returns an array containing the elements of the piped array whose zero-based indices fall within the range, e.g. `*[2..4]` yields elements 3, 4, and 5 from the piped array. The range may extend beyond the array bounds.

Negative range endpoints are based at the end of the piped array. The syntax `array[2..-1]` yields all elements from the third to the last. If the right endpoint falls before the left endpoint, the result is an empty array.

> \[!WARNING]
> Gotcha
> The range must be a literal range due to parser ambiguity with filters.

## `[<integer>]` Subscript Component

Returns the element at the given zero-based index of the piped array, e.g., `*[2]` returns the third element of the piped array, or `null` if not found. Negative indices are based at the end of the array, e.g., `array[-2]` yields the second-to-last element.

> \[!WARNING]
> Gotcha
> The index must be a literal integer due to parser ambiguity with filters.

## `{}` Projection Component

Projections iterate over the elements of the piped array, generate an object of the given form evaluated in the scope of each element, and appends it to the output array. The projection may optionally be preceded by a pipe operator (`|`).

For example, the projection `*{"key": value}` iterates over all documents, and for each document generates an object with a single key `key` whose value is set to the value of the `value` attribute of the document, if any.

Attribute values in projections can be arbitrary GROQ expressions, e.g. `*{"name": firstName + " " + lastName}`.

> \[!WARNING]
> Gotcha
> In `v1` of the GROQ API, any attribute whose value evaluates to `null` is not included in the projection. As of `v2021-03-25`, an explicitly-named attribute whose value evaluates to `null` **is** included in the projection.

If bare attributes are given in a projection, this inserts the corresponding attribute from the input element in the output object - e.g., the projection `{_id, name}` is exactly equivalent to `{"_id": _id, "name": name}`.

> \[!WARNING]
> Gotcha
> Generated projection keys do not modify the scope, so e.g. `{"key": "value", "other": key}` will evaluate to `"other": null`, since inserting `"key"` does not change the object at the root of the scope. If this is desired, it can be accomplished by chaining projections, e.g `{"key": "value} {key, "other": key}`.

Other objects can be expanded into the projection with the `...` operator. For example, `{name, ...properties}` will take all attributes from the `properties` object and place them in the root of the projected object along with the root `name` attribute.

A bare `...` is syntactic sugar for `...@`, i.e., it inserts all attributes from the currently iterated element into the projection. For example, `{..., "key": "value"}` generates an object with all of the object's original attributes in addition to the generated `key` attribute.

If multiple keys with the same name are given, then the latest key wins.

> \[!WARNING]
> Gotcha
> In `v1` of the GROQ API, the expansion operator is always evaluated first regardless of its position in the projection (i.e., the projection `{"name": "someName", ...}`, will replace the original `name` attribute of the object, if any, even though the named key is used first).
> As of `v2021-03-25` of the API, when the expansion operator (`...`) is used after an explicitly-named key, a duplicate key will overwrite the value of the named key.

Since projection values are arbitrary GROQ expressions, nested projections are supported (and encouraged).

```groq
*[ _type == "book" ]{
  title,
  "authors": authors[]{
    "name": firstName + " " + lastName,
    birthYear,
  }
}
```

In this case, the nested `authors` projection takes its input from the `authors` array and generates an output array of projected objects as usual. This projection is evaluated in a new scope (as described in "Attribute Scope" in the [Syntax section](https://www.sanity.io/docs/specifications/groq-syntax)), and the parent scope can be accessed via the `^` operator.

Projections also have syntactic sugar for conditionals, expressed as `condition => {}`. If `condition` evaluates to `true`, the object on the right-hand side of `=>` is expanded into the projection. For example, the following projection will include the `movies` attribute containing a list of related movies if the person is a director. Otherwise, the attribute will be omitted:

```groq
{
  name,
  role == "director" => {
    "movies": *[ _type == "movie" && director._ref == ^._id ]
  }
}
```

This syntax is exactly equivalent to `...select(condition => {})`. Each conditional in a projection is evaluated separately - for cases where multiple conditions overlap and only a single result (the first) should be included. The full `select()` syntax must be used instead.

## `order(<expr>...) <array>` Order Component

`order()` sorts the piped array according to the given expression and returns an array of sorted elements, e.g., `* | order(name asc, age desc)`. The direction can be either `asc` or `desc`, defaulting to `asc` if not given. Any number of sort expressions can be given, which specify sorting first-to-last (e.g., the expression above would be sorted first by ascending `name` and then by descending `age`).

For details on the ordering of various data types, see "Comparison Operators" in the [Operators section](https://www.sanity.io/docs/specifications/groq-operators).
