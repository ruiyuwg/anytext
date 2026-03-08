# Custom functions

Sometimes you find yourself repeating the same portion of a GROQ query across multiple queries, or even within a single complex query. Custom functions for GROQ allow you to create modular, reusable sub-queries.

Prerequisites:

- Custom GROQ functions are available on all API versions except v1.

## Function anatomy

Custom functions look similar to other GROQ functions, but with some limitations. They include a namespace and accept a parameter. Let's look at an example function that follows a reference and returns a projection that combines an author's first and last name.

```groq
fn ex::name($author) = $author-> { "name": firstName + " " + lastName };

*[_type == 'post']{
  "author": ex::name(author)
}
```

All functions start with the `fn` keyword and contain a namespace, name, parameter, and function body. In the example above:

- `ex` is the namespace.
- `name` is the function name.
- `$author` is the parameter.
- `$author-> { "name": firstName + " " + lastName }` is the body.

Custom function declarations must happen at the start of the GROQ query and each declaration must end with a semicolon (`;`). You can use them anywhere you'd normally send a GROQ query, such as a Sanity client, the [HTTP query API](https://www.sanity.io/docs/http-reference/query), or [the Vision tool](https://www.sanity.io/docs/content-lake/the-vision-plugin). For example, in `@sanity/client`:

```
const QUERY = `
fn ex::name($author) = $author-> { "name": firstName + " " + lastName };

*[_type == "post"]{
  "author": ex::name(author)
}`

const posts = await client.fetch(QUERY)

```

See the [GROQ functions reference](https://www.sanity.io/docs/specifications/groq-functions) for additional details.

## Examples

Custom functions support a limited set of formats at this time:

- `$param{...}`
- `$param->{...}`
- `$param[]{...}`
- `$param[]->{...}`

Let's use the following documents as an example to explore each format. There is a `person` document, an `occupation` document, and two `pet` documents.

**Person**

```json
{
  "_id": "a",
  "_type": "person",
  "name": [
    {
      "first": "Jane",
      "last": "Doe"
    }
  ],
  "age": 99,
  "occupation": { "_ref": "developer" },
  "belongings": [
    {"name": "laptop"},
    {"name": "badge"},
    {"name": "backpack"}
  ],
  pet: [
    {"_ref": "dog"},
    { "_ref": "dog2" }
  ]
}
```

**Occupation**

```json
{
  "_id": "developer",
  "_type": "occupation",
  "title": "Software Engineer"
}
```

**Pet 1**

```json
{
  "_id": "dog",
  "_type": "pet",
  "name": "Pookie"
}
```

**Pet 2**

```json
{
  "_id": "dog2",
  "_type": "pet",
  "name": "Snookie"
}
```

### Basic projection

First we'll define a function that returns a basic projection. This function, `ex:: details`, takes a `$person` parameter and returns a projection containing their `name` and `age`. To use the function, we pass in `@` to represent the person returned by the filter.

**Query**

```groq
fn ex::details($person) = $person{name, age}; 
*[_type == "person"] { "info": ex::details(@) }

```

**Response**

```json
[{
  "info": {
    "age": 99,
    "name": {
      "first": "Jane",
      "last": "Doe"
    }
  }
}]
```

### Follow references

It's common to follow references to include part or all of their contents in the referencing object. This function follows the person's `occupation` reference and returns a projection with their title.

**Query**

```groq
fn ex::title($ref) = $ref->{title};
*[_type == "person"] { "occupation": ex::title(occupation) }
```

**Response**

```json
[{
  "occupation": {
    "title": "Software Engineer"
  }
}]
```

### Array projection

This function iterates through the person's `belongings` to display their names.

**Query**

```groq
fn ex::items($arr) = $arr[]{name}; 
*[_type == "person"] { "stuff": ex::items(belongings) }
```

**Response**

```json
[{
  "stuff": [
    {"name": "laptop"},
    {"name": "badge"},
    {"name": "backpack"},
  ]
}]
```

### Array of references

This function follows each reference in the person's `pet` key.

**Query**

```groq
fn ex::pets($items) = $items[]->{name};
*[_type == "person"] {"pet": ex::pets(pet)}

```

**Response**

```json
[{
  "pet": [
    {"name": "Pookie"},
    {"name": "Snookie"}
  ]
}]
```

### PTE blocks

Reusing the logic for parsing PTE blocks is a common use-case for functions. This example parses a set of blocks regardless of the incoming blocks.

```groq
fn ex::blocks($arr) = $arr {
   ...,
  _type == 'docsCallout' => {
    ...,
    content[] {
      ...,
      markDefs[] {
        ...,
        _type == 'link' => {
          isInternal,
          _key,
          _type,
          reference->,
          url
        },
        _type == 'acronym' => {
          _key,
          _type,
          value
        },
        // etc
      }
    }
  }
};

*[_type == "article"] {
  _id,
  title,
  "slug": slug.current,
  "content": ex::blocks(content[]),
  "description": ex::blocks(description[])
}
```

## Limitations

At this time, functions are limited to the formats displayed above. Additionally, custom functions do not yet support:

- Recursion.
- Accessing the parent scope.
- Passing multiple parameters.
- Accessing the function parameter more than once in the function body.
