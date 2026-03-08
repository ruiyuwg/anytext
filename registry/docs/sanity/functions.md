# Functions

#### New to GROQ?

If you are just getting started with GROQ, check out the getting started guide first.
[Get started with GROQ](https://www.sanity.io/docs/content-lake/groq-introduction)

Functions in GROQ take a set of arguments of specific types and return a single value of a specific type. They may be polymorphic, i.e., accept several argument type variations possibly returning different types, and may take a variable number of arguments. Function calls return `null` if arguments have invalid types, and an error if the function does not exist.

## Function namespaces

Namespaces allow for a stronger grouping of functionality within [the GROQ specification](https://sanity-io.github.io/GROQ/). They create dedicated scopes for global functions, as well as safer distinctions for specific implementations of GROQ.

### Accessing functions in a namespace

All functions exist within a namespace and can be accessed via a call to the function with a prefix a string of the namespace name, followed by two colons and then the function name.

```groq
// The pt namespace contains functions related to Portable Text
// This function returns a plain text version of a Portable Text object
pt::text(ptNode)

// The geo namespace contains functions related to geolocation
// This function returns true if the second argument is fully contained in the first
geo::contains(polygon, point)
```

## Global functions

Functions that exist for all implementations of GROQ exist in the global namespace. They can be accessed without using the namespace string.

```groq
// Non-namespaced
references('someId')
// equates to
global::references('someId')

```

### `coalesce`

`coalesce(<any>...) <any>`

Takes a variable number of arguments of any type and returns the first non-`null` argument if any, otherwise `null` - e.g., `coalesce(null, 1, "a")` returns `1`.

```groq
// If title.es exists return title.es
// Else return title.en
// If neither exist, return null
*[_type == "documentWithTranslations"]{
  "title": coalesce(title.es, title.en)
} 


// If rating exists, return rating,
// Else return string of 'unknown'
*[_type == 'movie']{
  'rating': coalesce(rating, 'unknown')
}

```

### `count`

`count(<array>) <integer>`

Returns the number of elements in the passed array, e.g. `count([1,2,3])` returns `3`.

```groq
// Returns number of elements in array 'actors' on each movie
*[_type == 'movie']{"actorCount": count(actors)} 

// Returns number of R-rated movies
count(*[_type == 'movie' && rating == 'R']) 
```

### `dateTime`

`dateTime(<string>) <datetime>`

Accepts a string in [RFC3339](https://tools.ietf.org/html/rfc3339) format (e.g. `1985-04-12T23:20:50.52Z`) and returns a DateTime. This is also the format used in the `_createdAt` and `_updatedAt` fields. Typically used to let GROQ know to treat a string as a date, especially useful when you need to compare them or perform time arithmetic operations.

Subtracting two DateTimes returns the number of seconds between those time stamps. Adding a number to a `DateTime` returns the `DateTime` that amount of seconds later (or earlier if the number is negative).

```groq
*[_type == "post"]{
  title,
  publishedAt,
  "timeSincePublished": dateTime(now()) - dateTime(publishedAt)
}
```

> \[!TIP]
> New to GROQ?
> You can create RFC3339-dateTime strings in JavaScript with the [Date.prototype.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) method.

### `defined`

`defined(<any>) <boolean>`

Returns `true` if the argument is non-`null`, otherwise `false`.

```groq
// Returns all documents if awardWinner has any value (of any type)
*[defined(awardWinner)] 
```

> \[!CAUTION]
> Known issue
> String fields that are longer than 1024 characters will not provide the expected result from `defined()`.
> The `match` operator works on a string field of any length.

### `identity`

`identity() <string>`

Returns the identity (user ID) of the user performing the current action, or the special values `<anonymous>` for unauthenticated users and `<system>` for system-initiated actions.

### `length`

`length(<array|string>) <integer>`

Returns the length of the argument, either the number of elements in an array or the number of Unicode characters in a string, e.g., `length([1,2,3])` returns `3`, and `length("Hi! 👋")` returns `5`.

```groq
// Return posts with more than 2 authors
*[_type == "post" && length(authors) > 2]{
  title,
  authors[]->{
    name
  }
}
```

> \[!WARNING]
> Gotcha
> While `length()` works on arrays, you should consider using `count()` as it's optimized for arrays.

### `lower` / `upper`

`lower(<string>) <string>`

`upper(<string>) <string>`

The `lower()` and `upper()` functions take a string and return back the string in all lowercase characters or all uppercase characters.

```groq
*{
  "upperString": upper("Some String"), // Returns "SOME STRING"
  "lowerString": lower("Some String")  // Returns "some string" 
}
```

### `now`

`now() <string>`

Returns the current time in [RFC3339](https://tools.ietf.org/html/rfc3339) format with microsecond resolution in the UTC time zone, e.g., `2021-08-19T15:51:24.846513Z`. The current time is stable within an operation such that multiple calls return identical values. This generally refers to the start time of the operation except for listener queries. This refers to the event's transaction time. This is the equivalent of `dateTime::now()` from the official GROQ spec. If you need to be more explicit, you can wrap it as `dateTime(now())`.

> \[!NOTE]
> Caching now() in APICDN
> Using `now()` and our APICDN creates a conundrum: how long should `now()` be cached?
> We have created a special caching rule that says `now()` is only valid for 120 seconds, plus the normal 60 seconds stale-while-revalidate after that. This gives us the opportunity to cache queries not containing `now()` much longer.

> \[!WARNING]
> Gotcha
> Mutations using `query` parameters trigger two separate operations internally: first execution of queries to determine which documents to update, then a transaction to actually update the documents. `now()` will return different times for these two operations, referring to the start time of each operation.

```groq
// Give me all posts with a publish date in the future
*[_type == "post" && dateTime(now()) < dateTime(publishedAt)]
```

### `path`

`path(<string>) <path>`

Coerces the passed string to a path, e.g. `"a.b" in path("a.*")`.

```groq
// _id matches a.b.c.d but not a.b.c.d.e
*[_id in path("a.b.c.*")] 

// _id matches a.b.c.d and a.b.c.d.e
*[_id in path("a.b.c.**")] 

// All draft documents
*[_id in path("drafts.**")]

// Only published documents
*[!(_id in path("drafts.**"))]
```

### `references`

`references(<path|string|array>) <boolean>`

Implicitly takes the document at the root of the current scope and recursively checks whether it contains any references to the given document ID(s). It is typically used in query filters, e.g., `*[ references("abc")]` will return any documents that contain a reference to the document `abc`. If providing the function with an array of document ids, it will return `true` if any of the ids are referenced. [Learn more about references](https://www.sanity.io/docs/content-lake/how-queries-work).

```groq
// Using the ^ operator to refer to the enclosing document. Here ^._id refers to the id
// of the enclosing person record.
*[_type=="person"]{
  name,
  "relatedMovies": *[_type=='movie' && references(^._id)]{ title }
}

```

### `round`

`round(<integer|float>[, <integer>]) <integer|float>`

Rounds the given number to the nearest integer, or to the number of decimal places given by the second, optional argument - e.g. `round(3.14)` yields `3` and `round(3.14, 1)` yields `3.1`.

### `select`

`select(<pair|any>...) <any>`

Used for conditionals, i.e. "if-else" expressions. Takes a variable number of arguments that are either pairs or any other type and iterates over them. When encountering a pair whose left-hand value evaluates to `true`, the right-hand value is returned immediately. When encountering a non-pair argument, that argument is returned immediately. Falls back to returning `null`.

```groq
// If age is 18+, return "adult" string
// Else if age is 13+, return "teen" string
// Else return "child" string
select(
  age >= 18 => "adult",
  age >= 13 => "teen",
  "child"
)

// If popularity integer is more than 20, return "high" string
// Else if popularity is more than 10, return "medium" string
// Else if popularity is less than or equal to 10, return "low"
*[_type=='movie']{
  ..., 
  "popularity": select(
    popularity > 20 => "high",
    popularity > 10 => "medium",
    popularity <= 10 => "low"
)}

// You can also use select in a shorter from
// Let's say we want to conditionally join references 
// inside a Portable Text field
*[_type == "article"]{
  ...,
  body[]{
    ...,
    _type == "product" => {
      ...,
      @->{
        name,
        price
      }
    }
  }
}
```

### `score`

`score()` can be used as a pipe operator function to assign a score to each document. See [the section on scoring](https://www.sanity.io#k4798b2cba8df) at the end of this document.

### `string`

`string(<integer|float|boolean|datetime|string>) <string>`

Returns the string representation of a given scalar value. Returns `null` when passed an invalid value, including `null`.

```groq
{
  "stringInteger": string(21),         // Returns "21"
  "stringFloat": string(3.14159),      // Returns "3.14159"
  "stringSciNotation": string(3.6e+5), // Returns "360000"
  "stringTrue": string(true),          // Returns "true"
  "stringFalse": string(false),        // Returns "false"
  "stringString": string("A string"),  // Returns "A string"
}
```

One use case for `string()` is to combine a string with a scalar type, which would otherwise return `null`.

```groq
*[0] {
  'secondsAgo': dateTime(now()) - dateTime(_createdAt),
} {
  'minutesSinceCreated': 'Created ' + string(secondsAgo / 60) + ' minutes ago.'
}
```

Another use case is to coerce a date field into a string in [RFC3339](https://tools.ietf.org/html/rfc3339) format, which is useful when you need to compare datetime values or perform time arithmetic operations.

```groq
// Let's imagine a document with a year field,
// which contains a four-digit number – in this example, 2009
*[0] {
  year    // Returns 2009
}

// To compare year to a datetime field, such as now(), _createdAt,
// or _updatedAt, the year field must be converted to a string in RFC3339 format,
// but trying to append a string to the year field returns null
*[0] {
  'constructedYear': year + "-01-01T00:00:00Z"    // Returns null
}

// Using the string() function, year can be coerced to a string
// and structured in RFC3339 format
*[0] {
  'constructedYear': string(year) + "-01-01T00:00:00Z"    // Returns "2009-01-01T00:00:00Z"
}

// In this way, the year field can be used to perform time arithmetic operations
*[0] {
  'secondsSinceYear': dateTime(now()) - dateTime(string(year) + "-01-01T00:00:00Z")
}
```

## Geolocation functions

The `geo` namespace contains a number of useful functions for creating and querying against locations in your data. Each function must be prefixed with the `geo::` namespace syntax.

> \[!WARNING]
> Gotcha
> The `geo()` function and functions in the `geo::` namespace require `v2021-03-25` or later of the GROQ API.

### GeoJSON

The functions in this section expect [GeoJSON](https://geojson.org/)-style objects and interpret them as a `geo` type internally. Functions that accept a `geo` type will attempt to coerce non-`geo`-type data into the proper format following the `geo()` constructor rules.

### `geo(object)`

The `geo()` function accepts an object as a parameter and, if possible, coerces the value to a geo-type shape by a set of rules. These objects are represented in JSON as GeoJSON.

- If the object is already in the correct shape, return the object.

- If the object has a set of `lat` and `lng` (or `lon`) keys, return a `geo` object for the given point. If additional data exists on the object it will be removed from the final geo document.

- If the object contains the key `type` (*note: not \_type*), and the value of `type` matches one of the following strings then return a `geo` object with those values:- Point

- LineString

- Polygon

- MultiPoint

- MultiLineString

- MultiPolygon

- GeometryCollection

- If none of the conditions are met, return `null`.

### `geo::latLng(latFloat, lngFloat)`

The `latLng` function is a short-hand for creating a new geo object for a singular point. Returns a geo object from the latitude and longitude floats provided.

```groq
// Returns a geo object corresponding to the center of Oslo
geo::latLng(59.911491, 10.757933)
```

### `geo::distance(geo-point, geo-point)`

The `distance()` function takes points and returns a numeric value for the distance between in meters.

> \[!WARNING]
> Gotcha
> The function only works between points. If lines or polygons are provided, the function will return `null`.

```groq
// Returns the distance in meters between Oslo and San Francisco
// 7506713.963060733
geo::distance(
  geo::latLng(59.911491, 10.757933),
  geo::latLng(37.7749, 122.4194)
)

// Returns all documents that are storefronts
// within 10 miles of the storefront geopoint
*[
  _type == 'storefront' &&
  geo::distance(geoPoint, $currentLocation) < 16093.4
]
```

### `geo::contains(geoPolygon, geo)`

The `contains()` function returns true when the first geographic geography value fully contains the geographic geometry value. If either parameter is not a geo object – or not able to be coerced to a geo object following the rules of the `geo()` constructor function – the function returns `null`.

```groq
// Returns true if the neighborhood region is fully contained by the city region
geo::contains(cityRegion, neighborhoodRegion)

// For a given $currentLocation geopoint and deliveryZone area
// Return stores that deliver to a user's location
*[
  _type == "storefront" &&
  geo::contains(deliveryZone, $currentLocation)
]
```

### `geo::intersects(geo, geo)`

The `intersects()` function returns true when the two areas overlap or intersect. If either parameter is not a geo object – or not able to be coerced to a geo object following the rules of the `geo()` constructor function the function returns `null`.

```groq
// Creates a "marathonRoutes" array that contains
// all marathons whose routes intersect with the current neighborhood
*[_type == "neighborhood"] {
  "marathonRoutes": *[_type == "marathon" && 
                        geo::intersects(^.neighborhoodRegion, routeLine)  
                      ]
}
```

## Portable Text functions

The `pt` namespace contains functions for parsing Portable Text. Each function must be prefixed with the `pt::` namespace syntax.

> \[!WARNING]
> Gotcha
> Functions in the `pt::` namespace require `v2021-03-25` or later of the GROQ API.

### `pt::text(<Portable Text array|object>) <string>`

The `text()` function is a Sanity Content Lake GROQ filter that takes in document fields which are either a Portable Text block or an array of blocks, and returns a string in which blocks are appended with a double newline character (`\n\n`). Text spans within a block are appended without space or newline.

The function exists within the `pt` namespace and must be prefixed with `pt::`.

> \[!WARNING]
> Gotcha
> The `text()` function only works on text spans in the root children, i.e., alt text in an Image block will not be in the final plain text.

```groq
// Returns the body Portable Text data as plain text
*[_type == "post"] 
  { "plaintextBody": pt::text(body) }
  
// Scores posts by the amount of times the string "GROQ"
// appears in a Portable Text field
*[_type == "post"]
  | score(pt::text(body) match "GROQ")
```

## Sanity functions

The `sanity` namespace contains functions for querying against the current environment. Each function must be prefixed with the `sanity::` namespace syntax.

> \[!WARNING]
> Gotcha
> Functions in the `sanity::` namespace require `v2021-03-25` or later of the GROQ API unless otherwise noted.

### `sanity::projectId() <string>`

The `projectId()` function returns the project ID of the current studio environment.

### `sanity::dataset() <string>`

The `dataset()` function returns the dataset of the current studio environment.

```groq
{
  'projectId': sanity::projectId(),  // Returns 'hm31oq0j', for example
  'dataset': sanity::dataset()       // Returns 'production', for example
}
```

> \[!WARNING]
> Gotcha
> sanity::versionOf and sanity::partOfRelease require API version `2025-02-19` or later.

### `sanity::versionOf(<string>) <boolean>`

Implicitly takes the document at the root of the current scope and returns whether the document is a version (whether draft, published or release version) of the supplied document ID. This ID should be the root ID, without any path prefixes.

```groq
*[sanity::versionOf(<doc-id>)]
```

For example, the above query when given a document ID of `foo` may return documents such as `foo`, `drafts.foo`, `versions.a.foo`, `versions.b.foo`.

### sanity::partOfRelease()

Implicitly takes the document at the root of the current scope and returns whether it is a member of the release with the given name.

> \[!TIP]
> Protip
> Release names are the final piece of a release ID. For example, a release with an id of `_.releases.rEGM2JqQ3` has a name of `rEGM2JqQ3`. Use just the name final portion of the ID when referencing releases by name.

For example, `*[sanity::partOfRelease("a")]._id` would return `versions.a.foo`, `versions.a.bar`. `versions.a.baz`, etc.

## Document functions

The `documents` namespace contains functions pertaining to document operations. Each function must be prefixed with the `documents::` namespace syntax.

### `documents::get(gdrReference)`

Resolves [Global Document References](https://www.sanity.io/docs/studio/global-document-reference-type), similar to the way `->` resolves references.

```
*[_type == "post"][0]{
  _id,
  mainImage{
    "url": asset->url,
    "aspects": documents::get(media).aspects
  }
}
```

### `documents::`incomingGlobalDocumentReferenceCount`() <number>`

The `incomingGlobalDocumentReferenceCount()` function returns the number of  [Global Document References](https://www.sanity.io/docs/studio/global-document-reference-type) that are pointing to the document in the current scope.

```groq
// Find all documents being referenced by at least 1 GDR, and return the document's ID and reference count
*[documents::incomingGlobalDocumentReferenceCount() > 0] { 
  _id, 
  "incomingGDRCount": documents::incomingGlobalDocumentReferenceCount() 
}
```

This only returns the number of Global Document References, not standard references or cross-dataset references.

## Media functions

The `media` namespace contains functions to interact with media elements

### `media::aspect(mediaLibraryAssetReference, string)`

Resolve the value of a public aspect for a media library asset

**GROQ**

```groq
*[_type == "post"][0]{
  _id,
  mainImage{
    "url": asset->url,
    "copyright": media::aspect(media, "copyright")
  }
}
```

## Delta functions

Delta-GROQ is an extension of GROQ which makes it possible to reason about *changes* done to a document. For example, in the context of [webhooks](https://www.sanity.io/docs/content-lake/webhooks) or [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction). The following functions are available:

- A `before()` function which returns the attributes done *before* the change.
- An `after()` function which returns the attributes *after* the change.
- `delta::changedAny()` which returns true if certain attributes have changed.
- `delta::changedOnly()` which returns true if *only* some attributes have changed.
- `delta::operation()` which returns a string value of `create`, `update` or `delete` according to which operation was executed.

> \[!WARNING]
> Gotcha
> These functions are only available in \*delta mode. \*For the time being this limits their availability to [webhooks](https://www.sanity.io/docs/content-lake/webhooks) and [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction).

### `before()` and `after()`

The functions `before()` and `after()` return the attributes before and after the change. When the change is a create operation then `before()` is null, and when the change is a delete operation then `after()` is null.

These allow you to create expressive filters (`after().score > before().score` will only match when the score *increases*) and let you refer to both old and new values in projections (`'Title changed from ' + before().title + ' to ' + after().title`).

### `changedAny()` and `changedOnly()`

These diff functions are used with the namespace prefix.

```javascript
delta::changedAny(selector) -> bool
delta::changedOnly(selector) -> bool

// Example: Return true when title has changed
delta::changedAny(title)
```

Notice that these functions accept a *selector* and not a full GROQ expression. See the next section for how they work. `delta::changedAny()` uses the selector to search for values and returns `true` if any of them have changed. `delta::changedOnly()` uses the selector to search for values and returns `true` if there are no changes anywhere else.

These are very useful for filtering: You can use `delta::changedAny(title)` to only match changes done to a specific field.

> \[!TIP]
> Filtering on changes only works if there's something to change
> `changedAny` filtering will only work when a field previously existed. For this reason, newly created documents won't act as expected.
> For example, if you use `delta::changedAny` in a function trigger that acts on create and update, you'll also need to account for the document creation state differently than the update state.

We've also added variants of these functions which are available inside regular GROQ and works on provided objects:

```javascript
diff::changedAny(before, after, selector) -> bool
diff::changedOnly(before, after, selector) -> bool

// Example: This returns true because last name has changed.
diff::changedAny(
  {"firstName":"Bob","lastName":"Odenkirk"},
  {"firstName":"Bob","lastName":"Holm"},
  (firstName, lastName)
) 
```

> \[!TIP]
> Editor experience
> Since the `_rev` and `_updatedAt` fields will always change when there is a change to a document, they are automatically ignored with the `delta::changedOnly()` function. This allows you to use `delta::changedOnly(title)` rather than needing to specify `delta::changedOnly((title, _rev, _updatedAt))`.

### Selectors

Selector is a new concept in GROQ which represents parts of a document. These are the currently supported selectors (shown used with `changedAny`):

```javascript
// One field:
delta::changedAny(title)

// Multipe fields:
delta::changedAny((title, description))

// Nested fields:
delta::changedAny(slug.current)

// Fields on arrays:
delta::changedAny(authors[].year)

// Nested fields on arrays:
delta::changedAny(authors[].(year, name))

// Filters:
delta::changedAny(authors[year > 1950].name)
```

## Array functions

The `array` namespace contains functions for processing arrays. Each function must be prefixed with the `array::` namespace syntax.

### `array::join(source <array[string|number|boolean]>, separator<string>) <string>`

Concatenates the elements in `source` into a single string, separating each element with the given `separator`. Each element will be converted to its string representation during the concatenation process.

Returns `null` if `source` is not an array, or if `separator` is not a string.

If any element in `source` does not have a string representation the string `<INVALID>` will be used in its place.

```groq
// Returns "a.b.c"
array::join(["a", "b", "c"], ".")

// Returns `null`
array::join(1234, ".")
array::join([1, 2, 3], 1)

// Returns "a.b.<INVALID>.d"
array::join(["a", "b", c, "d"], ".")
```

### `array::compact(<array>) <array>`

Returns a copy of the original array with all `null` values removed.

```groq
// Returns [1, 2, 3]
array::compact([1, null, 2, null, 3])
```

### `array::unique(<array>) <array>`

Returns a copy of the original array with all duplicate values removed. There is no guarantee that the returned array preserves the ordering of the original array.

Only values that can be compared for equality are considered for uniqueness, specifically `string`, `number`, `boolean`, and `null` values.

For example, `array::unique([[1], [1]])` will return `[[1], [1]]` since arrays cannot be compared for equality.

```groq
// Returns [1, 2, 3, 4, 5]
array::unique([1, 2, 2, 2, 3, 4, 5, 5])
```

### `array::intersects(<array>, <array>)  <boolean>`

Compares two arrays, returning true if they have any elements in common.

Only values that can be compared for [equality](https://www.sanity.io/docs/specifications/groq-operators) are considered when determining whether there are common values.

```groq
// Returns true
array::intersects([1, 2, 3], [3, 4, 5])

// Returns false
array::intersects([1, 2, 3], ['foo', 'bar', 'baz'])
```

## Math functions

The `math` namespace contains functions that perform mathematical operations on numerical inputs. Each function must be prefixed with the `math::` namespace syntax.

### `math::avg(<array[number]>) <number|null>`

Returns the average value (arithmetic mean) of an array of numbers.

Returns `null` if the array does not contain at least one numeric value, or if any element is a non-numeric value. `null` values are ignored.

```groq
// Returns 2.5
math::avg([1, 2, 3, 4, null])

// Returns `null`
math::avg([1, 2, 3, 4, "5"])
```

### `math::max(<array[number]>) <number|null>`

Returns the largest numeric value of an array of numbers.

Returns `null` if the array does not contain at least one numeric value, or if any element is a non-numeric value. `null` values are ignored.

```groq
// Returns 1000
math::max([1, 10, 100, 1000])

// Returns `null`
math::max([1, "10", 100, 1000])

// Returns `null`
math::max([])
```

### `math::min(<array[number]>) <number|null>`

Returns the smallest numeric value of an array of numbers.

```groq
// Returns 1
math::min([1, 10, null, 100, 1000])

// Returns `null`
math::min([1, "10", 100, 1000])

// Returns `null`
math::min([])
```

### `math::sum(<array[number]>) <number|null>`

Returns the sum of an array of numbers.

Returns `0` for an empty array.

Returns `null` if the array does not contain at least one numeric value, or if any element is a non-numeric value. `null` values are ignored.

```groq
// Returns 10
math::sum([1, 2, 3, 4, null])

// Returns `null`
math::sum([1, 2, 3, 4, "5"])

// Returns 0
math::sum([])
```

## String functions

The `string` namespace contains functions that search and process strings. Each function must be prefixed with the `string::` namespace syntax.

### `string::startsWith(searchString<string>, prefix<string> ) <true|false>`

Returns `true` if the first N characters of `searchString` exactly match the N characters of `prefix`, otherwise `false`.

Returns `true` if `prefix` is an empty string.

```groq
// Returns `true`
string::startsWith("alphabet", "alpha")
string::startsWith("alphabet", "")

// Returns `false`
string::startsWith("alphabet", "bet")
```

### `string::split(original<string>, separator<string> ) <array[string]>`

Returns an array of substrings of `original` that are separated by `separator`.

If `separator` is an empty string, it returns an array containing each individual character of `original`, according to Unicode character splitting rules.

If `original` or `separator` are not strings, return `null`.

```groq
// Returns ["Split", "this", "sentence", "up"]
string::split("Split this sentence up", " ")

// Returns ["a", "b", "c"]
string::split("abc", "")

// Returns `null`
string::split(12, "1")
string::split("This is 1 way to do it", 1)
```

## Query Scoring

### `score(scoreExp)`

The `score()` function takes an arbitrary number of valid GROQ expressions and assigns a score to each result as a new field called `_score`. The `_score` field can be used to sort and filter items in an array.

> \[!WARNING]
> Gotcha
> `score()` is a pipe function and must be separated from expressions, filters, projections, and other pipe functions that precede it with the pipe operator (`|`).
> `score()` operates on unmodified data. Place it after a filter, `*[_type == "post"]`, but before any projections.

The score is calculated depending on the expressions used. For a `match` expression, `_score` is impacted by:

- the **frequency of matches per expression** ("One Fish, Two Fish, Red Fish, Blue Fish" matches "fish" more frequently than "The Rainbow Fish" matches "fish");
- the **frequency of matches overall** (matching three terms in a `score()` function expression versus matching one term);
- the **relevance of matches**, including:- **word count** ("Big Fish" – two words – matches "fish" with greater relevance than "A Fish Called Wanda" – four words – matches "fish") and
- **word length** (matching a shorter term will also return a higher `_score` than matching a longer term – "Blue" matches "blue" with greater relevance than "Clouds" matches "clouds").

A logical OR is identical to comma-separated terms and a logical AND is identical to a match with combined terms:

```groq
// These score() functions behave identically
* | score(title match "Red" || title match "Fish")
* | score(title match "Red", title match "Fish")

// These score() functions behave identically
* | score(title match "Red" && title match "Fish")
* | score(title match "Red Fish")
```

For each matched boolean expression, `_score` is incremented.

```groq
// Each term that is true will increment _score by 1
* | score(featured, internal, _type == 'post')

// A 'post' document with featured and internal fields
// that are both true would receive a _score of 3
```

> \[!WARNING]
> Gotcha
> Documents that don't match the score expression(s) return a `_score` value of `0`, but are not automatically removed from the array. The third example in the following code block provides a solution to remove results with a `_score` value of `0`.

```groq
// Adds points to the score value depending 
// on the use of the string "GROQ" in each post's description 
// The value is then used to order the posts 
*[_type == "post"] 
  | score(description match "GROQ") 
  | order(_score desc) 
  { _score, title }
  
// Adds a point for matches in the title OR description
*[_type == "post"] 
  | score(title match "GROQ" || description match "GROQ") 
  | order(_score desc) 
  { _score, title }
  

// Orders blog posts by GROQ matches
// Then filters the results for only items that matched
// by checking for _score values greater than 0
*[_type == "post"] 
  | score(description match "GROQ") 
  | order(_score desc) 
  { _score, title }
  [ _score > 0 ]
```

> \[!WARNING]
> Gotcha
> `score()` cannot take a complex expression, including the use of functions (besides `boost()`), dereferencing, or subqueries.

### `boost(scoreExp, boostValue)`

The `boost()` function can be used to create a sense of weight in a scoring algorithm. It accepts two required arguments: an expression and the amount to boost the score if the expression returns true.

Like in the `score()` function, a matched expression will increase `_score` for each instance of a match, but by a multiple of the boost value. For example, a `boostValue` of `3` would increase `_score` by three times the amount it would increment by default (that is, without `boost()`).

The `boost()` function is used inside a `score()` function.

Boost values greater than `1` will give that expression a greater-than-normal impact on `_score`. Boost values less than `1` (but greater than `0`) will give that expression a lesser-than-normal impact on `_score`. A boost value of `0`, while permitted, has the same effect as removing that expression from the `score()` function.

> \[!WARNING]
> Gotcha
> The `boost()` function accepts only constant positive integers and floats.

```groq
// Adds 1 to the score for each time $term is matched in the title field
// Adds 3 to the score if (movie > 3) is true
*[_type == "movie" && movieRating > 3] | 
  score(
    title match $term,
    boost(movieRating > 8, 3)
  )
```

Providing multiple boosts of different values in one `score()` can create robust sorting.

```groq
// Creates a scoring system where $term matching in the title
// is worth more than matching in the body
*[_type == "movie" && movieRating > 3] | score(
  boost(title match $term, 4),
  boost(body match $term, 1),
  boost(movieRating > 8, 3)
)

// Scores games by the "impressive" difference in goals
*[_type == "game"] | score(
		boost(pointDifference > 5, 5),
		boost(pointDifference > 10, 10)
	)
```

Boost values between `0` and `1` can be used to affect `_score` to a lesser extent than a default match would. This might be useful when there is a need to finely differentiate `_score` values that might otherwise be equal.

```groq
// Boosts _score for matches in the title OR description,
// but a match on the description now has less of an impact on _score
*[_type == "post"] 
  | score(title match "GROQ" || boost(description match "GROQ", 0.3)) 
  | order(_score desc) 
  { _score, title }
```

## Additional functions

### `releases::all()`

An alias to return all releases. This is the same as performing a check on the document type. For example:

```groq
// Note: it's used without the filter, so no *[]
releases::all()

// This is equivalent
*[_type == "system.release"]
```

Releases are part of the [Content Releases feature](https://www.sanity.io/docs/apis-and-sdks/content-releases-api).

## Custom functions

Custom functions are reusable, modular, user-defined functions.

```groq
fn myFunctions::unfurl($ref) = $ref->{...};

*[] {
  title,
  author: myFunctions::unfurl(author)
}
```

Custom GROQ functions must be defined at the beginning of a query, and must end with a semicolon (`;`). They are made up of the following parts:

- `fn`: All functions must start with the `fn` declaration`.`
- Namespace: Custom functions must live on their own namespace. In the example above, the namespace is `myFunctions`.
- Name: The function's name, `unfurl` in the example above, identifies the function within the namespace.
- Parameters: Like functions in other languages, parameters pass data into the function. Parameters are denoted with `$`-prefixed keys, like `$ref` in the example. Custom functions are limited to one parameter at this time.
- Function body: The body of the function is the content after the equal (`=`) sign. Function bodies are limited to the formats below.

At this time, functions do not support:

- Recursion.
- Accessing the parent scope.
- Passing multiple parameters.
- Using a parameter more than once in the body.

### Function body formats

#### Standard projection

Create a reusable projection.

Format: `$param{...}`

```groq
// Function definition
fn user::bio($param) = $param{name, age}; 

// Usage
*[_type == "person"] { "info": user::bio(@) }
```

#### Follow a reference

Create a reusable projection that follows a reference.

Format: `$param->{...}`

```groq
// Function definition
fn user::bio($param) = $param->{name, age}; 

// Usage
*[_type == "post"] { "author": user::bio(author) }
```

#### Access an array

Create a reusable projection for items in an array.

Format: `$param[]{...}`

```groq
// Function definition
fn user::children($param) = $param[]{name}; 

// Usage
*[_type == "person"] { "children": user::children(children) }
```

#### Array of references

Create a reusable projection that follows references in an array.

Format: `$param[]->{...}`

```groq
// Function definition
fn user::children($param) = $param[]->{name}; 

// Usage
*[_type == "person"] { "children": user::children(children) }
```

## Text functions

The `text` namespace contains functions for semantic text operations. Each function must be prefixed with the `text::` namespace syntax.

### text::semanticSimilarity()

Converts the given search term into a vector and ranks results by proximity to each document's embedding. Returns a numeric score used for ranking results relative to each other within a single query. The score is opaque and unitless; do not compare scores across different queries.

This function requires [dataset embeddings](https://www.sanity.io/docs/content-lake/dataset-embeddings) to be enabled on the target dataset.

> \[!WARNING]
> Gotcha
> `text::semanticSimilarity()` is only valid as an argument to `score()`. Using it elsewhere returns an error.

```groq
// Semantic search: rank all documents by meaning
* | score(text::semanticSimilarity("how to handle user authentication"))

// Filtered semantic search: restrict which documents are scored
*[_type == "product" && category == "footwear"]
    | score(text::semanticSimilarity("leather waterproof boots"))

// Hybrid search: combine keyword matching with semantic scoring
*[_type == "product"]
    | score(
        @ match text::query("leather waterproof boots"),
        text::semanticSimilarity("leather waterproof boots")
      )
```
