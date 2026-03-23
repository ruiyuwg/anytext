# How queries work

The idea behind our query language GROQ (Graph-Relational Object Queries) is to be able to describe exactly what information your application needs, potentially joining together information from several sets of documents, then stitching together a very specific response with only the exact fields you need.

If you need help setting up a client to perform these queries in your front end, you should check out the documentation for the client for [JavaScript](https://www.sanity.io/docs/js-client) or [PHP](https://www.sanity.io/docs/php-client). You can also check out the [GROQ Arcade](https://groq.dev) if you want to query any JSON source and get familiar with the language.

## Introduction

Let us start with the basics. We will take this simple query and pick it apart:

```groq
*[_type == 'movie' && releaseYear >= 1979] 

```

A query typically starts with `*`. This asterisk represents every document in your dataset. To do any useful work this is typically followed by a *filter* in brackets. The filter above has two terms:

### The filter

First, we filter by document type. Every document in Sanity is required to have a type, and the type is always in the `_type` field. (We prefix any Sanity-specific fields with an underscore in an attempt to avoid clashing with any of \*your \*field names.) So `_type == 'movie'` limits this query to documents of the type ‘movie’. `&&` is the operator “and”.

The second term `releaseYear >= 1979` assumes that the movies have a field called `releaseYear` that contains numbers. It will match any document where this number is larger than or equal to 1979.

### Projections

So if we run this query, the result will be an array containing all movies from the year 1979 onwards in the dataset. Nice! However in a typical application movies might be huge documents containing information on actors, staff, posters, tag-lines, show-times, ratings, and whatnot. If our goal is to render a list of movies in an overview, we are wasting bandwidth. *Projections* to the rescue.

The typical projection is wrapped in braces and describes the data we want to see for each movie. A nice and simple projection for this query would give us the id, title, and release year for each movie. It could look like this: `{_id, title, releaseYear}`. Putting it all together:

```groq
*[_type == 'movie' && releaseYear >= 1979]{ _id, title, releaseYear } 
```

### Basic sorting

Now there is another problem. Our movies appear in some unspecified order. Let’s say we want to sort our movies by year. For this, we use the `order`-function. Order takes a number of fields and sort directions and orders your documents accordingly. We wanted to sort our movies by `releaseYear`. This is easily accomplished with `order(releaseYear)`, like this:

```groq
*[_type == 'movie' && releaseYear >= 1979] | order(releaseYear) {
  _id, title, releaseYear 
} 

```

*(We need the *`|`* operator here in front of the order()-function, we'll discuss that more later.)*

We think of GROQ statements as describing a data flow from left to right. First everything (`*`) flows through the filter` [_type == 'movie' && …]`, then all those movies flow through the `order()`-function which is then all mapped through the projection `{_id, title, ...}` which picks out the bits we want to be returned.

The order function accepts a list of fields, and optionally you can specify the sort direction for each field. If you wanted to sort the movies by year, and then within each year we want them alphabetical by title, we could use this ordering: `order(releaseYear, title)` And if we wanted the newest movies first, we could reverse the direction like this: `order(releaseYear desc, title)`.

> \[!TIP]
> Protip
> `asc` means “ascending” and `desc` means descending in this context. If you leave out the sort-direction, Sanity will assume you want the ascending order.

### Slicing the result set

This brings us to our final problem for this query: There are many movies in the world. Maybe our dataset contains tens of thousands. We need a way to describe which slice of that list we want to show. This is done using a *selector*. Let’s say we just wanted the first movie, we could add a `[0]` at the end. This works exactly like an array accessor and would return only the first element. If we want a slice, we can add [the range operator](https://www.sanity.io/docs/specifications/groq-operators) like this: `[0...100]`. This would return the first hundred movies from index 0 through 99. We can just as well ask for `[1023...1048] `or any other slice we desire. So there we are, our first basic query with filtering, ordering, projections, and selector:

```groq
*[_type == 'movie' && releaseYear >= 1979] | order(releaseYear) {
  _id, title, releaseYear
}[0...100]

```

### References and joins

A reference in Sanity is a link from one document to another. Standard references are “hard” meaning when a document references another document, the target document *must* exist, and is actually prevented from being deleted until the reference is removed. (There are also weak-references that do not "hold on to" the target. You make them by adding a `_weak`-key to the reference object like this: `{_ref: "<document-id>", _weak: true}`)

Let’s say we have “person”-type documents that looks something like this:

```javascript
{
  _id: "ridley-scott",
  _type: "person",
  name: "Ridley Scott"
}

```

Keeping it simple, maybe our movies had a field `director` that contained a reference to a person. It could look something like this:

```javascript
{
  _id: "alien",
  _type: "movie",
  title: "Alien",
  releaseYear: 1979,
  director: { _ref: "ridley-scott" }
}
```

Remember Sanity-specific fields are prefixed with an underscore, and an object containing a `_ref` key appearing anywhere in the document becomes a hard reference.

### Expanding references

Now we can do a number of useful things with this reference. The most basic thing is expanding the reference in place. Let’s revisit our movie queries from the introduction.

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear
}

```

Let’s say we wanted to include the director in the returned result. If we didn't know any better, we'd perhaps try something like this:

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear,
  director
}

```

But if we just naïvely include the director in like this, we will just get whatever is in the director field on this document, which is the literal reference description:

```javascript
[
  {
    _id: "alien",
    title: "Alien",
    releaseYear: "1979",
    director: {
      _ref: "ridley-scott"
    }
  },
  … (more movies)
]


```

This is not what we wanted, we wanted to follow that reference! By adding the dereferencing operator `->` we ask Sanity to follow the reference and replace it with the actual content of the document referenced:

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear,
  director->
}

```

Now, this is useful. We’d get something like this:

```javascript
[
  {
    _id: "alien",
    title: "Alien",
    releaseYear: "1979",
    director: {
      _id: "ridley-scott",
      _type: "person",
      name: "Ridley Scott"
    }
  },
  … (more movies)
]


```

Then maybe we didn’t want all that metadata with our director? We can add a separate projection for our director:

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear,
  director->{name}
}

```

Our query now returns the director with just the name property we wanted:

```javascript
{
  _id: "alien",
  title: "Alien",
  releaseYear: "1979",
  director: {
    name: "Ridley Scott"
  }
}

```

But we can do one better. We are not limited to the existing fields in the document in our projections, we can actually declare new fields. Let’s say we are building our compact movie list and we wanted just the title, year, and director name. We can get minimal cruft by extracting just the name and putting it in a new field, like this:

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear,
  "directorName": director->name
}

```

Now our query returns exactly what we want in the form we want it:

```javascript
{
  _id: "alien",
  title: "Alien",
  releaseYear: "1979",
  directorName: "Ridley Scott"
}

```

#### Expanding an array of references

The example above shows how to expand a reference, but sometimes you'll be working with an *array* of references. In the above example, let's say we wanted to add producers. Details on how to set this up in your schema can be found in the [Array](https://www.sanity.io/docs/studio/array-type) documentation, but we'll consider how you might query that data.

In this revised example, let's look at a query like this:

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear, director,
  producers[]
}

```

We use square brackets after `producers` because it's an array. Note that we used `producers` with an `s`. The naming convention of your schema doesn't matter to GROQ (as long as you get the name right); it is our recommendation to [use the plural form for arrays](https://www.sanity.io/docs/apis-and-sdks/naming-things).

Now, you might get this:

```javascript
[
  {
    _id: "alien",
    title: "Alien",
    releaseYear: "1979",
    director: {
      _ref: "ridley-scott"
    }
    producers: [
      {
        _key: "<uniqueKey1>",
        _type: "reference",
        _ref: "gordon-carroll"
      },
      {
        _key: "<uniqueKey2>",
        _type: "reference",
        _ref: "david-giler"
      },
      {
        _key: "<uniqueKey3>",
        _type: "reference",
        _ref: "walter-hill"
      },
    ]
  },
  … (more movies)
]
```

Like before, this isn't returning the details for each producer. We're getting references like we did at the beginning of the single reference example (and a `_key`, which [ensures uniqueness](https://www.sanity.io/docs/studio/array-type)). To expand references in an array, we will use the dereferencing operator (`->`) again. However, the square brackets are mandatory to traverse the array.

```groq
*[_type == 'movie' && releaseYear >= 1979]{
  _id, title, releaseYear, director,
  producers[]->
}

```

This will return the full details for each of the three producers referenced. Projections and [naked projections](https://www.sanity.io/docs/content-lake/how-queries-work) can be used just as with single references (the projection would go *after* the dereference operator).

> \[!WARNING]
> Gotcha
> It would be easy to forget the square brackets when expanding an array of references (i.e., querying `producers->` instead of `producers[]->`, with the former returning a single null value). This is perhaps complicated by the fact that both `producers` and `producers[]` **will** return the array (albeit with unexpanded references). This is the nature of [how GROQ traversals work](https://sanity-io.github.io/GROQ/draft/#sec-Traversal-expression).

### Filtering by references

When dealing with references, we have a useful function called `references()` which can be used in filters to select only documents that reference specific other documents. Let’s say we want to list every movie Ridley Scott has been involved in. It looks like this:

```groq
*[_type == 'movie' && references('ridley-scott')]
```

### Our first join

It is time to write our first proper join: Say we wanted to list people and include all the movies they were involved in? We’ll be querying the “person”-type documents, but in the projections for each person, we’ll ask for the movies they have been involved in. To do this we have to briefly cover the parent-operator `^`. Let’s look at the query first:

```groq
*[_type == "person"]{
  _id, name,
  "movies": *[_type == "movie" && references(^._id)].title
}

```

In a join, the parent operator is a way to reference the “parent” document. In this example the outer query for “person”-type documents fetches a bunch of people, and for each person, it returns the `_id` and `name`. Then we want to fetch the movies referencing that person.

Now we declare the new field “movies” where we start a new query for “movie”-type documents, but for each person, we want to limit our movie query to movies referencing that person. To achieve this we need the \_id of the person, but if we just wrote `_id` in the movies-query we’d reference the \_id of the movie.

To get to the fields of the person record we go “up” one level using the parent operator `^`. So `^` means the specific “person”-document that our movie query is about, and then `^._id` is the \_id of that person, just as `^.name` would be her name. So when we say `references(^._id)` in the query above, we limit our movies to movies referencing the current person.

### Naked projections

There is one more new thing we haven’t talked about in this query. We could have written the movies-sub-query like this:

```groq
*[_type == "movie" && references(^._id)]{title}
```

Our list of movies would have looked something like this:

```javascript
”movies”: [{title: “Alien”}, {title: “Blade Runner”}, …]
```

Since we just wanted the titles, we can use a “naked projection”. By naming the field we want, like this:

```groq
*[_type == "movie" && references(^._id)].title 
```

We get a nice, simple array of values, like this:

```javascript
”movies”: [“Alien”, “Blade Runner”, …]
```

So, for completeness, the result of the full person w/movies query above could look something like this:

```javascript
[
  {
    _id: "river-phoenix",
    name: "River Phoenix",
    movies: ["My Own Private Idaho", "Stand By Me", …]
  },
  {
    _id: "ridley-scott",
    name: "Ridley Scott",
    movies: ["Alien", "Blade Runner", …]
  },
  …
]

```

## More ways to filter

Sanity supports a growing number of ways to filter your documents. We have shown simple attribute comparisons with `_type == ‘movie’` and  `releaseYear >= 1979`. We have shown filtering by references using the `references()`-function. In addition, we support:

- Text search using the match operator, e.g. `*[title match "Alien*"]`
- Filtering by the presence of a field, e.g. `*[defined(status)]` which only match documents that have the status property set to any value.
- The `in`-operator which matches values in arrays, as in `*["sci-fi" in genres]`, that matches all documents where `genres` is an array and that array contains the value `"sci-fi"`.
- You can of course combine these filters using the boolean operators `&&` (and), `|| `(or), `!` (not), like this `*[_type == "movie" && (!("sci-fi" in genres) || releaseYear >= 1979)]`.

We are working on a full reference for the GROQ feature set. In the meantime, you'll find a comprehensive set of examples in the [cheat sheet](https://www.sanity.io/docs/content-lake/query-cheat-sheet).

## Queries in projections

A useful thing in GROQ is that filtering and projections also can be used inside your projections. Let’s say you work for an architect and every project has a number of milestones. A document might look something like this:

```javascript
{
  _id: "timmerhuis"
  _type: "project",
  title: "Timmerhuis",
  milestones: [
    {status: "competition", year: 2009},
    {status: "design-development", year: 2011},
    {status: "breaking-ground", year: 2013},
    {status: "completed", year: 2015}
  ]
}

```

And let’s say the view we are producing is about showing the current status of the project. We could achieve this by finding the latest milestone and extracting its status tag. This can be done in GROQ like this:

```groq
*[_type == "project"]{
  _id, title,
  "status": milestones|order(year desc)[0].status
}

```

Let’s pick apart the status query `milestones|order(year desc)[0].status` in some detail:

First, we take the field `milestones` which contain the (potentially unordered) list of milestones for the project. Using the pipe-operator `|` we send the contents of this array to the order function, which is instructed to sort the array by year in descending order `order(year desc)`. Then we take only the first element `[0]` (which is the latest milestone) and return the value of its `status` field. So now our project list would look something like this:

```javascript
[
  {
    _id: "timmerhuis",
    title: "Timmerhuis",
    status: "completed"
  },
  …
]

```

Let’s try another clever trick querying the contents of this object. Instead of a status field, we just want a boolean flag telling whether the project is completed. We could achieve this like this:

```groq
*[_type == "project"]{
  _id, title,
  "completed": count(milestones[status == 'completed']) > 0
}

```

Here we take the milestones, but select only the ones having the status “completed”. Then we `count()` the number of milestones matching this filter. If that count is `> 0` the result is `true`. So now our result would look something like this:

```javascript
[
  {
    _id: "timmerhuis",
    title: "Timmerhuis",
    completed: true
  },
  …
]

```

## Some comments on the pipe operator

In the project-status example above we used the pipe operator `|` for a second time. Let's explore that in some detail:

```groq
*[_type == "project"]{
  _id, title,
  "status": milestones | order(year desc)[0].status
}

```

The pipe operator takes the output from its left-hand side and sends it to the operation to its right. "But isn’t this what all GROQ statements do?", I hear you ask. And you’d be right.

In some situations, like when using pipe functions (e.g., `order()` in the project-status example), an explicit pipe operator is required. `milestones order(year desc)` would be a syntax error, so pipe functions must be preceded by a pipe operator, like this: `milestones | order(year desc)`. `score()` is another example of a pipe function, which must therefore be preceded by a pipe operator.

Projections may be preceded by a pipe operator, though it is optional. `Expression { Projection }` and `Expression | { Projection }` are equally valid.

The pipe operator is not valid in any other contexts and will return an error.

## Some fine points on arrays and projections

Let’s consider this document with some deep structure:

```javascript
{
  _id: "alien",
  _type: "movie",
  title: "Alien",
  poster: {
    asset: {_ref: "image-1234"}
  },
  images: [
    {
      caption: "Sigourney Weaver and the cat Jones on set",
      asset: {_ref: "image-1235"}
    },
    {
      caption: "Bolaji Badejo suiting up for the role of the Alien",
      asset: {_ref: "image-1236"}
    },
  ]
}

```

So we have a movie with a poster image and an array of other images. Each image has some metadata represented here by a caption, then a reference to an asset record containing all the metadata on the specific image including its URL. A simplified asset record could look something like this:

```javascript
{
  _id: "image-1234",
  _type: "sanity.imageAsset",
  url: "http:///cdn.sanity.io/images/…"
}

```

Now we can retrieve the poster image url and attach it to our result for each movies like this:

```groq
*[_type == "movie"]{
  title,
  "posterImage": poster.asset->url
}

```

But what if we wanted to do the same thing for the other images? Since the `images` field is an array, we can’t just `images.asset->url`. We somehow have to apply the `asset->url`-part to each member of the array. This is accomplished by adding a blank filter, like this: `images[].asset->url` which will return the image URLs as a simple array. So the full query would look like this:

```groq
*[_type == "movie"]{
  title,
  "imageUrls": images[].asset->url
}

```

This would yield something like this:

```javascript
[
  {
    title: "Alien",
    imageUrls: ["http://cdn.sanity.io/…", "http://cdn.sanity.io/…"]
  },
  …
]

```

If you wanted a richer data-set with your images you could use a normal projection like this (taking care to add the blank filter to apply the projection to every array member):

```groq
*[_type == "movie"]{
  title,
  "images": images[]{
    caption,
    "url": asset->url,
  }
}

```

Now your result looks something like this:

```javascript
[
  {
    title: "Alien",
    images: [
      {
        caption: "Sigourney Weaver and the cat Jones on set",
        url: "http://cdn.sanity.io/…"
      },
      {
        caption: "Bolaji Badejo suiting up for the role of the Alien",
        url: "http://cdn.sanity.io/…"
      }
    ]
  },
  …
]

```

## The ellipsis operator

Sometimes you might want to compute some properties of a document, but still want the entire set of attributes returned. This can be a problem since the moment you specify a projection, you'll have to list all the fields you want to be included. Let's say we wanted to count the actors in a movie doing something like this:

```groq
*[_type == "movie"]{
  "actorCount": count(actors)
}
```

There is a problem with this. We just wanted to add a custom field, but since we needed a projection to do it, now all we got is something like this:

```javascript
[
  {actorCount: 3},
  {actorCount: 27},
  {actorCount: 15}
]
```

What we wanted was our custom field in *addition* to the normal fields. This can be achieved with the ellipsis operator. By appending it like this, we effectively say we want the fields we just specified, but also everything else:

```groq
*[_type == "movie"]{
  "actorCount": count(actors),
  ...
}
```

Which brings us a result that could look something like this:

```javascript
{
  {
    title: "Alien",
    releaseYear: 1979,
    actorCount: 23,
    // And loads more fields, probably
  },
  // and many more movies
}
```

### Placement of the ellipsis operator

In `v1` of the GROQ API, the placement of the ellipsis operator didn't matter. An explicit property would override the ellipsis even when the ellipsis comes last in the projection.

Consider a case where a projection returns some number of properties, with one being `age`. Let's say that `age` is equal to `23`.

```groq
// GROQ API v1

*[]{
  ...,
  'age': 45 // This will override the age property
            // returned from the ellipsis, so age == 45
}


*[]{
  'age': 45,
  ... // The age value returned from the ellipsis does *not*
      // override the explicitly set value, so age == 45
}
```

As of `v2021-03-25` of the GROQ API, the placement of the ellipsis operator matters. An explicitly-set property will only override the property returned by the ellipsis if it comes after the ellipsis. In other words, as of `v2021-03-25`, the property that comes last in the projection wins, even if it's returned by the ellipsis.

```groq
// GROQ API v2021-03-25 or later

*[]{
  ...,
  'age': 45 // This will override the age property
            // returned from the ellipsis, so age == 45
}


*[]{
  'age': 45,
  ... // The age value returned from the ellipsis *does*
      // override the explicitly set value, so age == 23
}
```

Such a distinction might be observed when [dereferencing](https://www.sanity.io/docs/specifications/groq-operators). In `v1`, the explicit dereference operator could be placed before *or* after the ellipsis operator in a projection, and the reference would be followed in either case. As of `v2021-03-25`, an explicit dereference after the ellipsis would give expected behaviour, returning the contents of the document that was referenced. However, placing the ellipsis last will actually cause the original (non-dereferenced) property to win, returning just the `_ref` and `_type`.

> \[!TIP]
> Protip
> When using the ellipsis operator, you will want to list it first in your projection. Any explicitly-listed properties that follow will overwrite that same property that *would* have been returned by the ellipsis, which is likely the behaviour you're after.

## Queries that don't start with an `*`

We said initially that most GROQ queries start with the asterisk, but they don't have to. Any valid GROQ expression can be the entire query. This is a valid query:

```groq
count(*)

```

It will return the number of documents in the dataset. This is also valid:

```groq
count(*[name match "sigourney"]) > 0

```

It will return `true` if any document in the entire dataset has a `name`-field containing the word "sigourney".

More usefully, you can actually have a projection be your outer statement. Like this:

```groq
{
  "mainStory": *[_id == "story-1234"],
  "campaign": *[_id == "campaign-1234"],
  "topStories": *[_type == "story"] | order(publishAt desc) [0..10]
}
```

This combines three completely separate queries into one query and returns an object containing the result of all of them. This can be a useful way to speed up page loads. By combining queries in this manner you can often get all of the core content for a web page to load in a single, cacheable query.

## Query Optimization

Like with any query language, it's important to be aware of performance as you develop and iterate on your GROQ queries. Learn more about optimizing your queries in [High Performance GROQ](https://www.sanity.io/docs/developer-guides/high-performance-groq).

## Finally

So there you go, this should cover most of what you need to understand in the day-to-day use of GROQ. You should now check out our [Query Cheat Sheet](https://www.sanity.io/docs/content-lake/query-cheat-sheet), [the GROQ Arcade](https://groq.dev), and [the reference docs](https://www.sanity.io/docs/groq-reference) which contain examples of all operators and functions currently supported.

#### Related articles

[Introduction to schemas](https://www.sanity.io/docs/apis-and-sdks/introduction-to-schemas)

[Query Cheat Sheet - GROQ](https://www.sanity.io/docs/content-lake/query-cheat-sheet)

[Custom GROQ functions](https://www.sanity.io/docs/content-lake/custom-groq-functions)

[Querying content with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-querying)
