# Introduction

With GROQ, you can join information from multiple documents, filter with precision, and stitch together specific responses containing only the exact fields you need.

Unlike other query languages, GROQ gives you complete control over your data's shape and structure, allowing you to transform your content at the API level rather than in your application code.

Benefits and uses:

- **Extract precisely what you need** from your documents, reducing bandwidth usage and simplifying your frontend code.
- **Join related content** by following references between documents, creating rich, nested responses.
- **Filter and sort** your content with powerful expressions and functions.
- **Transform your data** at the query level with projections and computed fields.
- **Create modular, reusable queries** with custom GROQ functions.

#### Ready to get started?

[How Queries Work – GROQ](https://www.sanity.io/docs/content-lake/how-queries-work)

[GROQ Sanity Learn Course](https://www.sanity.io/learn/course/between-groq-and-a-hard-place)

[Cheat sheet](https://www.sanity.io/docs/content-lake/query-cheat-sheet)

## Core concepts

GROQ operates as a pipeline where data flows from left to right through various operations. Understanding these core concepts will help you build effective queries.

### Where can you use GROQ?

While GROQ is primarily thought of as a means of querying data for your front-ends, GROQ queries are available in most places where you interact with data in a Sanity dataset. You can use GROQ with the [@sanity/client](https://github.com/sanity-io/client)'s fetch method, directly to the [/query HTTP endpoint](https://www.sanity.io/docs/http-reference/query), and more.

In some use cases, you'll pass an entire query as part of your request. In others, such as in [Functions](https://www.sanity.io/docs/functions/functions-introduction) or [Webhooks](https://www.sanity.io/docs/content-lake/webhooks), you will configure the filter and projection separately.

### Syntax

The following are the most common parts of the GROQ syntax. For a full list, explore the [GROQ Syntax reference](https://www.sanity.io/docs/specifications/groq-syntax).

#### Filters

Filters let you select specific documents from your dataset based on criteria. Most GROQ queries start with `*` (representing all documents) followed by a filter in square brackets.

```groq
*[_type == "movie" && releaseYear >= 1979]
```

This query selects all movie documents released in or after 1979.

#### Projections

Projections define the shape of your results, letting you pick exactly which fields to include. They're enclosed in curly braces.

```groq
*[_type == "movie"]{ _id, title, releaseYear }
```

This returns only the ID, title, and release year for each movie, even if the documents contain many more fields.

#### References and joins

GROQ makes it easy to follow references between documents using the dereferencing operator (`->`). This lets you include related content directly in your results.

```groq
*[_type == "movie"]{
  _id, 
  title,
  "director": director->name
}
```

This query follows the reference in the `director` field and includes just the director's name in the results.

#### Sorting and slicing

You can order your results and select specific portions of the result set.

```groq
*[_type == "movie"] | order(releaseYear desc) [0...10]
```

This sorts movies by release year (newest first) and returns only the first 10 results.

### Functions

GROQ functions provide powerful tools for manipulating and retrieving data. GROQ includes built-in functions like `count()`, `order()`, and `references()` that help you analyze, sort, and manipulate your content. You can see all available functions in the [GROQ functions reference documentation](https://www.sanity.io/docs/specifications/groq-functions).

You can also create your own [custom GROQ functions](https://www.sanity.io/docs/content-lake/custom-groq-functions) to make your queries more modular and reusable.

### The Vision plugin

The Vision plugin adds a playground for testing GROQ queries directly to Sanity Studio. You can use it to try out queries, analyze your data, and experiment.

#### Learn more

[The Vision Plugin](https://www.sanity.io/docs/content-lake/the-vision-plugin)

### The GROQ specification

GROQ has a formal specification that defines its syntax and behavior. If you're building your own tools on top of GROQ, specification is available at [spec.groq.dev](https://spec.groq.dev/) and serves as the authoritative reference for how GROQ should work.

## Limitations

- Custom GROQ functions have some limitations, including no support for recursion, multiple parameters, or accessing the parameter more than once in the function body. For more details, see the [Custom GROQ functions guide](https://www.sanity.io/docs/content-lake/custom-groq-functions).
- Complex queries with many joins or large result sets may impact performance. Learn more about [how to write performant GROQ queries](https://www.sanity.io/docs/developer-guides/high-performance-groq).
