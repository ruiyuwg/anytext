# Connected Content

## What is a “reference”?

When we talk about references in the context of Sanity, we usually mean one of three related things:

- The reference field type in the studio's schema files
- The field UI that you'll interact within the studio
- The specific data shape that you'll find in the JSON documents that holds your content

You can put reference fields inside a document type, object, and array fields, as well as inside annotations in the [Portable Text](https://www.sanity.io/docs/studio/portable-text-editor-configuration) editor.

### Typical use cases for references:

You can use references pretty much anywhere it makes sense to connect two pieces of content, but let's look at some common patterns and use cases:

- An `author` field that references a `person` document
- An `internalLink` field that references document types like `route`, `product`, `post`, `service`
- Taxonomy fields that reference `tag` and `category` documents
- A `parent` field that establishes a hierarchical structure
- A `related` field that references documents of the same type

### References are always bi-directional

A reference will always point to another *document*. The [Content Lake](https://www.sanity.io/docs/content-lake) will index references bi-directionally, meaning that you can query them from “both sides.” If you are used to database terminology, this means that the Content Lake acts more like a graph database than a relational database. If you're not, it means that any document in your Content Lake can be connected to any other document by a reference!

In other words, as long as you have a reference inside of a document pointing to another, you can ask the Content Lake to return all the data of a document and include the content of the document it refers to, but you can also ask it to return all the documents that contain a reference to a particular document – sometimes referred to as “incoming references.” There are also ways of querying for documents that have a reference to another document in a *given* field.

Hence, where to place a reference field is mostly a consideration for the editorial experience. From where does it makes sense to manage the references? Typically, some document types will be relevant in many different contexts. Typically you want references to point to these. If you wish to display incoming references in a document, you can implement an [incoming reference decoration](https://www.sanity.io/docs/studio/incoming-reference-decoration).

#### Example

Let's say you have document types for `post` and `person`. While you could put an array of references to `post` on the `person` document type, that would be cumbersome when authoring the post. To connect it to a `person`, that is, its author, you would have to go to the given document and add the new post to the array. Hence, it's "natural" to make a field called `author` that's a reference to the type `person` on the `post` document type.

```javascript
// post.js
export default {
  name: 'post',
  type: 'document',
  fields: [
    // other fields
    // ...
		{
		  name: 'author',
      type: 'reference',
			title: 'Author',
      to: [{type: 'person' }]
    }
  ]
}
```

> \[!TIP]
> Protip
> While we're demonstrating a single author field in the code above, it's often wise to make it an `array` field called `authors` that can hold multiple references to persons. It's likely that you'll need support for multiple authors at some point.

These fields will produce a data structure that looks like this:

```json
{
  "_type": "post",
  "author": {
     "_type": "reference",
     "_ref": "82b75d44-13af-4351-90ee-13045f84cf3b",
	}
}
```

The value of the `_ref` property is the `_id` of the document it's referencing.

### Referential integrity

Not only are your references indexed and queryable; The Sanity Content Lake will also make sure that they keep their integrity. That means that it will prevent you from deleting a document that is referenced elsewhere. This simplifies implementing connected content, and enables you to have confidence in the structure of your data.

Sometimes you don't need this guarantee while you want to keep the convenience of references. Referential integrity can be turned off by adding the `weak: true` property to a reference field configuration. This will add `_weak: true` to the reference object in the data, which is also the way to convert a strong reference to a weak one programmatically (notice the underscore `_` that signifies a special Content Lake property).

```json
// Example of a weak reference. The referenced document can be deleted because this reference is set as weak.
{
  "_type": "feedback",
	"message": "This was a great article!",
  "article": {
     "_type": "reference",
     "_ref": "4049517c-3258-4747-8e00-2956ca5b894b",
     "_weak": true
	}
}
```

If you use weak references and a reference field points to a non-existent document, this will show up for editors in the studio as a warning:

![Screenshot of the warning displayed in the studio when referencing a non-existent document via a weak reference: “Non-existent document: This is currently referencing a document that doesn’t exist (ID: ). You can either remove the reference or replace it with another document.”](https://cdn.sanity.io/images/3do82whm/next/c7a91f5de08b670967c866f15ba0540dc5a8f216-678x297.png)

## Working with references in the studio

A reference field in the studio lets you do mainly four things:

- Search and select a document you want to reference
- Create a new document that can be referenced
- Open an already referenced document in a new pane next to the current one
- Delete a reference to a document

### Adding references

Adding a reference to an existing document is fairly straightforward. You click into the reference field and type into it to search for a document from most of its text-based fields. The studio will create the reference when you select the document. If the document you selected is a draft that has never been published, the studio will still make the connection, but it will block the referring document from publishing until the referenced document has been published (unless the reference field has the `weak` option set to true).

### Create and edit documents in place

Wanting to reference some piece of content you haven't created yet is fairly common. A simple example is when a new author is creating their first post and they don't have their own `author` document yet. In many systems, they'll have to leave the current document that they're editing, create and publish a new author document, and then get back to where they left. The reference fields for Sanity Studio remove this friction by letting you create and edit documents in a new pane next to the current.

![Shows the studio workflow for editing a reference in place](https://cdn.sanity.io/images/3do82whm/next/cc85c96f60addcc0d7b2ea95131d6f299d107089-1304x1220.png)

## Querying connected content

The true potential of connected content is revealed when you start taking advantage of references in your queries. Using GROQ, you can follow any reference and include any value from that document in your result. *Including references*, which means you can follow the trail from a `book` via its reference to an `author` which might include references to `award`s they've won, which might have been referenced by other `author`s who have won that same `award`.

```groq
// For books by any award winning author
// return title of book
// follow the author reference to get their name
// follow the award reference via the author to get the award title
// finally list names of other authors who have received the same award

*[_type == "book" && defined(author->award)] {
  title,
 "By: ": author->name,
 "Winner of: ": author->award->title,
 "Also won by: ": 
		*[_type == "author" && references(^.author->award._ref) ].name
}
```

The query above might yield a result like this:

```json
[
  {
    "title": "One Flew Over The Cuckoos Nest"
    "By: ": "Ken Kesey",
    "Winner of": "Pulitzer",
    "Also won by": [
      "Astrid Lindgren",
      "Niccolo Machiavelli",
      "Terry Pratchett"
    ],
  },
	...
]
```

While this example might seem a bit convoluted (and probably wouldn't stand up to the scrutiny of the Pulitzer board), it also demonstrates how using references can reveal patterns and possibilities in connected content using only a few lines of GROQ.

Delving further into the syntax and features of GROQ is beyond the scope of this article, but rest assured that we have [ample docs and examples](https://www.sanity.io/docs/groq-reference) on the possibilities afforded by references in your queries.

## Further Reading

- [How joins in GROQ work](https://www.sanity.io/docs/content-lake/how-queries-work)
- [Content Modelling in Sanity Studio](https://www.sanity.io/docs/content-modelling)
- [Designing Connected Content: Plan and Model Digital Products for Today and Tomorrow](https://www.pearson.com/us/higher-education/program/Hane-Designing-Connected-Content-Plan-and-Model-Digital-Products-for-Today-and-Tomorrow/PGM1816611.html)
