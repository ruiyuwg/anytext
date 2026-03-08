# Paginating with GROQ

## What is pagination?

It's often necessary to display a large amount of content. For example, a shopping site may want to show thousands of products and let the user navigate it, page by page.

GROQ makes it easy to sort and slice your data, and it's tempting to simply use array slicing to select the data to display on a page. For example, if we think of a traditional web page with a **Next Page** link, the first page might show results 1–100, while the next page shows results 101–200, and so on. We can also use page numbers, and calculating the offset range from a page number is simple.

However, the most obvious way to do pagination isn't actually very performant. In this article we'll explore different ways to do it.

## The less efficient approach: Array slicing

One approach to pagination would be to use array slicing. For this example, we want to fetch articles sorted by their ID:

```groq
*[_type == "article"] | order(_id) [100...200] {
  _id, title, body
}
```

While GROQ makes this super easy, this is actually surprisingly inefficient. To understand why that is, we need to look at how the GROQ execution engine operates on your dataset's content.

In order to slice your dataset like this, GROQ needs to fetch all the content and then sort it (this is true even if you don't use `order()`, because results are always ordered in some way). It then needs to skip all the documents that aren't included in the slice range.

The sorting can usually happen while fetching, and we can apply some magic to limit the total number of results we need to look at. But the engine still has to skip all the unwanted results; it can't simply "teleport" to a specific position.

In this case, it will need to fetch 200 documents and then skip the first 100.

If you have just a few hundred documents in your dataset, the performance drop might not be that noticeable. The problem only becomes measurable once you reach thousands of results. For example, it's not unthinkable that a query such as `*[10000..10100]` could take several seconds to execute.

Generally, you can expect slicing performance to be roughly linear relative to the slice range. For example, if the range `100...200` takes 5ms to run, then you can expect `200...300` to take about 10ms, `300...400` to take 15ms, and so on.

## A better approach: Filtering

We can use GROQ's filtering capabilities in combination with sorting to quickly skip elements. This is much more efficient than slicing, because it allows the GROQ query engine to throw away lots of results very efficiently.

> \[!NOTE]
> Make sure all parts of your pagination query are optimised!
>
> > At this moment, not all functions etc. are optimised to be used in filters for pagination.
> > If you want to make sure that your pagination queries run smoothly, try to follow the article on [High-performance GROQ](https://www.sanity.io/docs/developer-guides/high-performance-groq) in your queries!

The very first page is exactly the same as before; we fetch the first 100 results:

```groq
*[_type == "article"] | order(_id) [0...100] {
  _id, title, body
}
```

The difference in the approach becomes clear when we want to fetch the second page. To find the second page, we first need to know what the last document we looked at was, which we can find from the last document ID in the array of resuls. Once we have that information, we can plug it back into our next query as a query parameter:

```groq
*[_type == "article" && _id > $lastId] | order(_id) [0...100] {
  _id, title, body
}
```

The key part here is `_id > $lastId`. By adding such a filter, we are skipping past all the results that were present in the first batch of results.

Getting the third page is exactly the same: After getting the second page, we need to look at the last ID and then continue from there.

To tie everything together, our code will end up looking something like this:

```javascript
let lastId = ''

async function fetchNextPage() {
  if (lastId === null) {
    return []
  }
  const {result} = await fetch(
    groq`*[_type == "article" && _id > $lastId] | order(_id) [0...100] {
      _id, title, body
    }`, {lastId})
  
  if (result.length > 0) {
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  return result
}

```

> \[!NOTE]
> Why \_id comparison is safe
> Document IDs in Sanity are lexicographically sortable strings. When you compare `_id > $lastId`, GROQ performs string comparison, which produces a stable, deterministic order across all documents—even though IDs appear random.
> This means:
>
> - The same query will always return documents in the same order.
> - No documents are skipped between pages.
> - The pagination cursor is reliable and consistent.
>   Using `_id` as a tiebreaker ensures that when multiple documents share the same `publishedAt` value, they're still returned in a predictable sequence.

## Sorting on other fields: Tiebreakers to the rescue

One thing we didn't tell you is that the above solution is a partial one: **It only works on fields whose values are unique in your dataset**. If you want to sort on something non-unique like a "published at" field, you need to a little bit more work.

The filter technique doesn't work properly for non-unique fields because the filter will skip duplicate values, even if the documents are different. For example, imagine the filter, once again, but for a `publishedAt` field:

```groq
publishedAt > $lastPublishedAt
```

If you have more than one document with the same `publishedAt` timestamp at the pagination boundary, this filter will actually skip documents by accident, since it will always skip distinct field values.

The solution is to use a tiebreaker, which is another field that takes priority if more than one document with the same `publishedAt` is encountered. As before, the first page is trivial:

```groq
*[_type == "article"] | order(publishedAt) [0...100] {
  _id, title, body, publishedAt
}
```

Notice how we are also asking for the `publishedAt` attribute. We'll need this for the next page.

Here's how we would fetch the next page:

```groq
*[_type == "post" && (
  publishedAt > $lastPublishedAt
  || (publishedAt == $lastPublishedAt && _id > $lastId)
)] | order(publishedAt) [0...100] {
  _id, title, body, publishedAt
}
```

As before, we are filtering. Our main filter is `publishedAt > $lastPublishedAt`, which allows us to continue from the last page. But we also include a tiebreaker: If we have a document that is the same as the last `publishedAt`, we instead ask that it be higher than the last *document ID*.

As before, our client code would look something like this:

```javascript
let lastPublishedAt = '' 
let lastId = ''

async function fetchNextPage() {
  if (lastId === null) {
    return []
  }

  const {result} = await fetch(
    groq`*[_type == "article" && (
      publishedAt > $lastPublishedAt
      || (publishedAt == $lastPublishedAt && _id > $lastId)
    )] | order(publishedAt) [0...100] {
      _id, title, body, publishedAt
    }`, {lastPublishedAt, lastId})
  
  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1].publishedAt
    lastId = result[result.length - 1]._id
  } else {
    lastId = null  // Reached the end
  }
  return result
}

```

## What if the data changes during pagination?

One key difference between filter-based and slice-based pagination is with data changes.

Slicing will always operate on the entire dataset as a sequence. This means that the following can happen:

- The user views page 1 of the results, which are sorted by date.
- You publish 5 new documents.
- The user navigates to page 2.
- The user will now see a repetition of the last 5 documents they saw on page 1.

This cannot happen if you are using the filter approach.

## Finding the total number of documents

Something you may want is to display the total number of results somewhere. This can be accomplished by wrapping your query in a `count()`:

```groq
count(*[_type == "post"])
```

This query should be relatively fast, but watch out for large datasets, as the speed of counting is relative to the number of results.

## Using this technique in a real-world application

### Tracking navigation state

In order to provide forward and backward navigation in a real-world application, we'll need to store the navigation state about the last page we saw:

- In a React application, this can be as simple as using `useState()` to store the `lastId` information as state. If you want to support backward navigation, you will also have to store the previous one.
- In a traditional backend app (Rails, Django, etc.), you may want to encode this as a query parameter instead. For example, a URL might look like this: `https://example.com/products?lastId=4a3b2e84`.

### Page numbers

The main downside to filtering is that there's no way to easily jump to any page number — there's no *random access*. In order to render the right page, we need to have visited its preceding pages. But it's still possible to implement number-based navigation.

To show the **previous** page numbers (relative to the current page), you can simply track the current page number, which increases by one for each forward navigation. To enable quick navigation to a past page, you can also store some state about each `lastId` encountered during forward navigation (e.g. stored as an array of IDs).

To show the **next** page numbers, you need to do a `count()` pass that counts the total number of results that follows the last `lastId`. (See separate section on how to count the total number of results.) To determine the ID that each next page corresponds to, your application then needs to be able to randomly skip results. For example, if the user is on page 2 and wants to jump to page 10, you can find the next `lastId` with this query:

```groq
*[_type == "article" && _id > $lastId][$index]._id
```

The value for `$index` should be set to `($pageNumber - $currentPage) * $pageSize - 1`.

Note that this query can be slow, and you probably don't want to offer this type of navigation past a certain page number.

> \[!TIP]
> Protip
> **Do you need page numbers?** It may be tempting to render a traditional navigation bar with links to each numbered page. But you may want to think about whether this UX pattern even makes sense for your application. What a user *mostly* wants, we would argue, is to go forwards and backwards.

## Batch processing

Everything above has been written with a front-end application in mind. But pagination is also relevant in a different scenario: When we want to execute a query that returns many results, perhaps even the entire dataset, and we want to process those results.

Some examples:

- A batch process that runs through the entire dataset and updates a field.
- A static site builder job that builds a web site from a Sanity dataset, using something like Next.js or Gatsby.
- A job that exports a big subset of the data to a file.

For such scenarios, we strongly recommend paginating by filtering, and by sorting the dataset by `_id`. Since all datasets are already physically sorted by ID, this is the most performant way to sort the dataset, and avoids the need for a tiebreaker.

You may also want to experiment with different batch sizes. Larger batch sizes are usually faster than small ones, but only up to a point.

> \[!TIP]
> Protip
> In the general case, we recommend a batch size of no more than 5,000. If your documents are very large, a smaller batch size is better.
