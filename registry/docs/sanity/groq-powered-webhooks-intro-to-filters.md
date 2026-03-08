# GROQ-Powered Webhooks – Intro to Filters

> \[!NOTE]
> This developer guide was contributed by Knut Melvær (Head of Developer Community and Education) and Martin Jacobsen (Technical Writer at Sanity.io).

GROQ-powered webhooks give you precise control over the circumstances and conditions under which your webhooks will trigger. In this article, we'll take a closer look at the possibilities offered by GROQ filters.

### Triggering webhooks with precision

The two GROQ super-powers webhooks have are \*\*filters \*\*and **projections**. The latter enables you to construct your request's payload to your exact needs and is discussed in an [article of its own](https://www.sanity.io/docs/developer-guides/projections-in-groq-powered-webhooks). In this article, we'll be discussing the former. Filters let you define the circumstances and conditions under which your webhook should trigger with immaculate precision.

If you want to follow along, go ahead and set up a new webhook in the project management console. You can use a service like [webhook.site](https://webhook.site), or [Beeceptor](https://beeceptor.com/) to debug and test your webhook.

> \[!WARNING]
> This article assumes you are comfortable with the basic concept of webhooks, and how to create one in your Sanity project. If you're not quite up to speed, have a look at the [webhook docs](https://www.sanity.io/docs/content-lake/webhooks) and come back when you're ready to do some filtering!

### Event types

Before dedicating our attention exclusively to GROQ-filters, let's briefly look at the set of checkboxes labeled "Trigger on", found immediately before the filter input field.

![Interface for selecting event types](https://cdn.sanity.io/images/3do82whm/next/ce42de2c3d7740e38d23c92254206c241b612669-486x250.png)

Webhooks can be triggered when a document is **created**, **updated**, **deleted**, or any combination of these.

- **Create** - triggers on the creation of a new document.
- **Update** - triggers on every change to a document once created.
- **Delete** - triggers on the deletion of a document

Between these, you'll be able to react to all major interactions with the documents relevant to you – the selection of which we'll be spending the rest of this article getting increasingly particular about.

> \[!WARNING]
> By default, your webhooks will not trigger on draft-events. I.e. They will only trigger when changes to the document are published and not for every single occurrence while you edit. Triggering on draft-events can be enabled, but be careful or you may end up causing huge amounts of traffic to your endpoint!

## Filters in GROQ

This is where, using GROQ, you define the criteria by which a document event should trigger your webhook. If you are already familiar with GROQ, the filter is the bit that you'll often see inside the square brackets at the start of your query, often preceded by an asterisk.

```groq
*[ /*Filters go here!*/ ]
```

A typical case of using a filter in a query might look something like this:

```groq
// Returns every document with a type of post 
*[_type == "post"]
```

When creating filters for our webhooks we skip the asterisk and square brackets and just type the filtering conditions right into the input field. Translating the scenario from above, our webhook filter would look like this:

![Shows the filter input field with the code discussed immediately above](https://cdn.sanity.io/images/3do82whm/next/373e370a5e1d4a310af9d573333286b7df419b8e-538x161.png)

### GROQ Fundamentals

This minimal example is already a quite powerful feature – enabling you to react to changes to specific types of content – but let's get a bit more creative! Let's expand our filter to check for the value of a boolean field named `featured` in the document, and only trigger if it's set to `true`, and just to make it interesting let's add another document type called `article` as well.

```groq
// Trigger on events for posts and articles with featured set to true
_type in ["post", "article"] && featured == true
```

Just as in normal GROQ-queries you can use logical operators to filter on a range of different field types, and you can combine any number of these in order to get exactly the result you want.

```groq
// Trigger on events for movies that are quite popular and relatively recent
_type == "movie" && popularity > 15 && releaseDate > "2016-01-01"

// Trigger on events for articles tagged with a carefree attitude
_type == "article" && "yolo" in tags

// Trigger on events for posts about extraterrestrials 
_type == "post" && body[].children[].text match "alien"
```

Following references to filter on content in the referenced document also works as you'd expect:

```groq
// Trigger on events for posts by a specific author
_type == "post" && author->name == "Sinjoro Ajnulo"
```

### Using Functions

You can also use GROQ functions, such as `dateTime()`, `references()`, or `defined()`.

```groq
// Trigger on events for posts published after 2016-01-01
_type == "post" && dateTime(_createdAt) > dateTime("2016-01-01T00:00:00Z")

// Trigger on events for books with a value set for the author field
_type == "book" && defined(author)

// Trigger on events for books referencing a specific author
_type == "book" && references("sinjoro-ajnulo")
```

Namespaced functions are also available, such as `pt::text()` which gives you a plain text version of any Portable Text rich text field, or the `sanity::`-prefixed functions which are helpful for querying about the environment from which the webhook was triggered.

```groq
// Trigger on events for posts that mention a certain term in the body
_type == "post" && pt::text(body) match "Sinjoro"

// Trigger if the projectId matches the expected value
sanity::projectId() == "<projectId>"

// Trigger if the change occurred in one of the specified datasets
sanity::dataset() in ["test", "staging"]
```

### Querying "what changed?" with Delta-GROQ

Delta-GROQ is an extension to the GROQ language designed specifically to enable you to reason about changes made to a document. Currently, the following delta-functions are available:

- `before()` – returns the matching documents as they were before the change.
- `after()` – returns the matching documents after the change.
- `delta::changedAny()` – returns true if specified field values have changed.
- `delta::changedOnly()` – which returns true if *only* specified field values have changed.

The aptly named functions `before()`and `after()` let you compare the document in its entirety before and after the change event was executed. You may also use dot notation to check the value of any single field. E.g. `before().title == after().title`.

> \[!WARNING]
> While you can use projection on the results of `before()` and `after()` in other contexts – like this `before(){ title, description }` – this won't work in filters, as objects are not checked for deep equality and will always return true.

```groq
// Trigger if the price has gone down
_type == "product" && before().price > after().price

// Trigger if title changes to no longer including the string 'DRAFT'
before().title match "DRAFT*" && !(after().title match "DRAFT*")
```

The namespaced functions `delta::changedAny()` and `delta::changedOnly()` are helpful when you want to run the webhook only when certain fields have been updated, or indeed if only certain fields have been updated.

```groq
// Trigger if one or more of the specified fields have been updated
_type == "product" && delta::changedAny((name, price, stock))

// Do not trigger if featured is the only field updated
_type == "product" && !delta::changedOnly(featured)
```

> \[!WARNING]
> Notice the double parentheses when more than one field is used in `delta::changedAny()` or `delta::changedOnly()`.

### In conclusion

In this article we've demonstrated some more or less plausible examples of how using GROQ filters enables unmatched granularity in specifying the circumstances and conditions under which your webhooks should be triggered. While we've touched upon a number of different methods and techniques, we haven't even revealed the tip of the iceberg representing the capabilities of GROQ. For inspiration, check out the [GROQ Query Cheat Sheet](https://www.sanity.io/docs/content-lake/query-cheat-sheet)!
