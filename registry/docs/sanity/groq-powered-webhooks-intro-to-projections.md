# GROQ-Powered Webhooks – Intro to Projections

> \[!NOTE]
> This developer guide was contributed by Knut Melvær (Head of Developer Community and Education) and Martin Jacobsen (Technical Writer at Sanity.io).

GROQ-powered webhooks in Sanity enable you to shape the payload of your outgoing requests to your exact specifications. In this article, we'll take a closer look at projections and how they can help you communicate clearly with whatever endpoint your webhook is talking to.

### Sending eloquent webhook payloads with projections

The two GROQ super-powers webhooks have are \*\*filters \*\*and **projections**. The former lets you get real nitty-gritty about when your webhooks should trigger, and is discussed in an [article of its own](https://www.sanity.io/docs/developer-guides/filters-in-groq-powered-webhooks). In this article, we'll be discussing the latter.

> \[!TIP]
> [GROQ](https://groq.dev/) is Sanity's open-source query language. Check out the [docs](https://www.sanity.io/docs/overview-groq), or watch a [video tutorial](https://www.youtube.com/watch?v=wgjFf2M4OdQ\&list=PLRzQpWc3zNPkoeiKdZzz0zOqZzvy9ItxT) to get started! When you're good to go, come back and check out the rest of this article!

### Have it your way

GROQ projections let you build a JSON data structure using the document which triggered the webhook, and its values – from before and after the change – as building blocks. In your projections, you have access to the document returned from the filter in its entirety including both the original and updated values of every field. With the additional capability to join references multiple levels deep, you have the tools you need to design your outgoing requests to your specifications.

For those already familiar with GROQ; the projection is the bit that usually comes after the filter.

```groq
*[/* Filter goes here */] {
  // Projection goes here
  title,
  tags,
}
```

When we're configuring webhooks, the filter goes into a box of its own, and we are left with only the stuff in curly braces. An example of a GROQ projection with a simple join might look something like this:

```groq
{ 
  // returns the values of fields 'title' and 'description'
  // and follows the reference to another document of type
  // 'author' and assigns its 'name' value to 'authorName'
  title,
  description,
  "authorName": author->name 
}

```

The projection above would result in the JSON being sent as the payload of your webhook request being shaped something like this:

```json
{
  "authorName": "Sinjoro Ajnulo",
  "description": "Lorem ipsum dolor sit amet",
  "title": "Hello, World!"
}
```

You can use string concatenation to shape your values into the format you need.

```groq
{
  // creates a string value assigned to 'status'
  "status": "The price of " + name + " was updated to " + price + "!"
}

```

Projecting array values works as expected. As does employing the ellipsis operator to retrieve all fields.

```groq
{
  // retrieves all fields
  ...,
  // returns an array of asset urls i.e 
  // ["http://cdn.sanity.io/…", "http://cdn.sanity.io/…"]
  "imageUrls": images[].asset->url
}
```

> \[!WARNING]
> Gotcha! Projections in webhooks do not support sub-queries. In other words, you can’t access other documents in your dataset unless they are referenced from the document in question. For example, the following webhook projection will not work:
> `{ "relatedProducts": *[^.category._ref in categories] }`

### Delta-GROQ

Projections also support the `before()` and `after()` functions. These are part of the extension to the GROQ language called Delta-GROQ which lets you reason about changes made to documents. You might set a filter to trigger whenever the `price` field is updated and add the following projection (in this example, `price` is presumed to be a number):

```groq
{ 
  _id,
  "status": 
    "Price of " 
      + name 
      + " was changed from " 
      + string(before().price)
      + " to " 
      + string(after().price)
      // ⬆Tip: GROQ happily ignores line-breaks and comments, so feel
      // free to make your filters and projections a bit more readable
}
```

The returned values of the `before()` and `after()`-functions can take projections as well! In fact they contain the document in its entirety in its pre-updated and updated versions, respectively.

```groq
{
  "beforeValues": before(){ name, price, description },
  "afterValues": after(){ name, price, description },
}
```

If you plan to receive webhooks from multiple projects and datasets, you can use the `sanity::`-namespace in GROQ to include information about the origins of the request:

```groq
{ 
  _id, 
  _type, 
  "projectId": sanity::projectId(), 
  "dataset": sanity::dataset() 
}
```

### In conclusion

In this article we've looked at how GROQ-projections allow the precise construction of webhook payloads. This enables you to think of \*any \*API endpoint as a potential recipient for your webhooks, as you can shape the request to fit the format of the recipient. Things that previously would have needed some middleman cloud function to reformat your data to fit the need of the service in question can now be done entirely with projections. For more inspiration on GROQ, have a look [over here](https://www.sanity.io/docs/overview-groq)!
