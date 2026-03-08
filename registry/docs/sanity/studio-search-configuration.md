# Studio search configuration

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

The global search for Sanity Studio lets you search your Content Lake dataset for any document that matches your term, or narrow down by filtering your query by schema types. You can activate the global search from the 🔍 icon in the top toolbar, or with the `ctrl/cmd + k` hotkey.

## Hide documents from global search

There may be instances where you want to keep specific documents from appearing in the search results. To hide search results for a particular document type and remove it as a selectable filter, set the `__experimental_omnisearch_visibility` property to `false` on the document type:

```javascript
{
  type: 'document',
  name: 'author',
  fields: [
    {name: 'name', type: 'string'},
    // ...
  ],
	// Hide all results for authors (and the author document type filter) in omnisearch
	__experimental_omnisearch_visibility: false,
  // ...
}
```

#### Some example use cases:

- You have workflow-related documents that you don’t wish to expose editors to.
- You want to hide documents that are less frequently used by editors.
- You’re an author of a Sanity plugin that registers its own document schema and would prefer it doesn't appear in user's studios.

> \[!TIP]
> Protip
> This only affects visibility within the global studio search (‘omnisearch’). Visibility in both reference and cross dataset reference input fields is unaffected.

## Define custom weighting on fields

You can define specific weights on searchable fields for document types.

Search weights are configurable via `options.search.weight`. Here's an example:

```javascript
{
  type: 'document',
  name: 'author',
  fields: [
    {
      name: 'name',
      type: 'string',
      options: {
        search: { weight: 10 },
        // ...
      }
    },
    {
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      options: {
        search: { weight: 10 },
        // ...
      }
    }
    // ...
  ],
  // ...
}
```

## Selecting a search strategy

Define your desired search strategy in the `sanity.config.js|ts` file. Accepted values are `groqLegacy`, `groq2024`, and `textSearch`.

You must be on Studio version `v3.70.0` or greater to define strategy and opt-in to `groq2024.`

```javascript
import { defineConfig } from 'sanity`

export default defineConfig({
 search: {
   strategy: 'groq2024'
 },
})
```

### `groqLegacy`

Default search strategy in current studio versions.

### `groq2024`

Updates compared to `groqLegacy` search:

- Improved performance for large datasets.
- The ability to search deeply nested content beyond the default five levels that `groqLegacy` is restricted to today.
- The ability to search all Portable Text content.
- Support for “Google-style” query string parsing. In the below query string, `wine`, `good vintage`, and `fruit*` must all be present in order for the query to match. In other words, there is an implicit “or” between the words. Results with `beer` in will be omitted.

```groq
wine -beer "good vintage" fruit*
```

#### Tokenization and word handling in groq2024

- Text search operates on all tokens that are 1 character or longer, up to 255 character maximum.
- `_` is not a word-breaking character.
- Punctuation is ignored.
- Apostrophes are not word-breaking: `bob` does not match `bob's` or vice versa.
- All words and phrases (with/without wildcards) must appear in at least one attribute value.
- Negations do not match any attribute values.
- Phrases must not match *across* attribute values (i.e. half matching one value and another half matching another value).

#### Exact matching rules for groq2024

##### Text matching rules

| Scenario | Search Term | Behaviour | Should Match  | Should Not Match |
| --- | --- | --- | --- | --- |
| Numbers | 1234 | Match numbers that are separated by punctuation or space | The number is 1234! | X1234Y |
| Floating point numbers | 3.145 | Matches | The answer is 3.145 | The answer is 3 145 |
| Currency numbers | $100 | Match number only (not currency) | The price is $100 | - |
| Prefix | co\* | Match prefix of words | co, covid, corvette | Anything not starting with “co” |
| Prefix + wildcard | co*e | Match prefix and suffix | corvette | Anything not having “co” prefix and “e” suffix |
| Middle wildcard | *co* | Match substrings inside words | corvette, acorn, texaco | Anything not containing the substring “co” |
| Special symbols (not punctuation) | ®️, ™️ | Match exactly | - | - |
| Underscores | foo\_bar | Match exactly; underscores are part of the word | foo\_bar | foo bar |
| Phrases | “hello world” | Match exactly the sequence of words, ignoring punctuation | "hello world", "hello, world" | hello to the world hey world, hello! |
| Phrases with wildcard at the end | “hello world*” | Match exactly the sequence of words, ignoring punctuation, with wildcard match on the last word | "hello world", "hello worlds" | hello to the world hey world, hello! |
| Negation | foo -bar | Search excludes what you specify |  |  |

### `textSearch`

Search strategy some customers may use for historic purposes but not a recommended strategy. This will likely be deprecated in the future.

> \[!WARNING]
> Gotcha
> Each search strategy relies on different underlying query logic. Slightly different search results, including ordering and count is expected.
> Configure[ search weights](https://www.sanity.io/docs/studio/studio-search-config) to help tailor your results

### A few things to note

- **Global weight multiplier:** Search weights act as global multipliers across all document types. For instance, if the name field in the customer type has a weight of `2`, and the author type has a weight of `4`, then author documents will rank higher than customer documents for identical name matches in search results.
- **Default search configuration:**- The field designated as the `title` in the preview config automatically receives a search weight of `10`, while the `subtitle` field gets a weight of `5`.
- Any user-specified weight overrides default settings, ensuring custom search relevance can be achieved as needed.
- If you have customized the preview options using a [prepare function](https://www.sanity.io/docs/studio/previews-list-views) search weights cannot be inferred from the preview configuration so explicit custom field weights must be used if you want to boost specific fields.
- If you have a reusable custom type you need to define search weighting on the type definition itself.
- Fields marked as `hidden: true` in the preview config are scored lower to push them lower in the result set.

> \[!TIP]
> Protip
> Defining custom weights on fields applies only to the global search. The document list search is not affected by search weights.
