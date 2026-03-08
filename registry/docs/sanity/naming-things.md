# Naming things

Naming things can be hard. When you set up the Sanity Studio you will need to name two kinds of things – your **documents/types** and the **fields** they contain.

## Naming documents

There are few formal constraints for what characters the names of documents and types may contain, but for simplicity, you might want to stick with the convention for field names and only use:

- Letters (a-z / A-Z)
- Numbers
- Underscore

Naming types in a singular form will improve the readability of your queries and code. Let’s see what happens if we use plural type in plural "movies":

```javascript
{
  name: 'movies', // DON'T do this. It's better to name it "movie"
  type: 'document',
  fields: [
    {name: 'title', type: 'string'}
  ]
}
```

With this schema, your query for a list of movies will now look something like: `*[_type == 'movies']`. if you were to spell this query out, you could say \*"give me all the documents of type 'movies'" \*when it might make more sense to say *"give me all the documents of type 'movie'"*.

## Naming fields

The names of fields contained within documents and objects have some real formal requirements and **must not**:

- Start with underscores (`_`), which are reserved for system fields
- Contain characters other than:- Letters (a-z / A-Z)
- Numbers
- Underscores

So keep in mind that field names can't contain hyphens or unicorn emoji for that matter.

Apart from that you may do as you like, but we recommend using the plural form for arrays, like in this example from a minimal schema for a movie where the array name of `castMembers` is plural:

```javascript
export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{type: 'castMember'}]
    }
  ]
}

```

You might also want to consistently follow capitalization and naming conventions that you like and that fit with the languages you'll be using to consume the data. For example, if you want to use [dot-notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#dot_notation) in JavaScript, it is required that the key be a [valid identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier).

You should also consider that programming languages have reserved keywords (e.g. [class, import, or return in JavaScript](https://262.ecma-international.org/#prod-ReservedWord)) or common variables names in their environments (such as `global`, `window`, or `process`). If you discover such namespace collisions, you can use the [renameField migration](https://github.com/sanity-io/sanity-recipes/blob/master/snippets/renameField.js) script to rename those fields in your dataset.
