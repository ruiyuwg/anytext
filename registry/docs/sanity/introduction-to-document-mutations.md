# Introduction to document mutations

Document mutations are how you change content in Sanity's Content Lake programmatically. They provide a structured approach to modifying your documents while maintaining data integrity and enabling collaborative editing.

Some of the things you can do with document mutations include:

- Create new documents.
- Delete documents when they're no longer needed.
- Apply targeted patches to specific fields, or replace entire documents.
- Make transactional changes across multiple documents.

#### Want to jump right in?

[Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions)

[Document mutation patterns](https://www.sanity.io/docs/content-lake/mutation-patterns)

## Core concepts

### Transactions

When you submit mutations or dispatch actions to Content Lake, they are processed as part of a transaction—a single unit of work that either succeeds completely or fails entirely. Transactions make up a document’s [history](https://www.sanity.io/docs/http-reference/history) and trigger [listeners](https://www.sanity.io/docs/content-lake/realtime-updates).

#### Learn more about transactions

[Transactions](https://www.sanity.io/docs/content-lake/transactions)

### Patches

The Mutations API, and some actions in the Actions API, use patches to make small, targeted changes to documents. Patches allow you to modify specific parts of a document without having to replace the entire document, which is especially useful for collaborative workflows where multiple changes need to be reconciled.

Common patch operations include:

- `set`: Update specific fields with new values.
- `setIfMissing`: Set values only if the fields don't already exist.
- `unset`: Remove fields from a document.
- `insert`: Add, remove, or replace elements in arrays.
- `inc`/`dec`: Increment or decrement numeric values.
- `diffMatchPatch`: Apply text changes using Google's diff-match-patch algorithm.

#### Learn more about patches

[Patches](https://www.sanity.io/docs/content-lake/http-patches)

### Actions API

The Actions API is the preferred method for mutating documents in Sanity—it’s also the underlying API that powers Sanity Studio’s mutations. It's designed to support an authoring model where drafts and versions of a document are iterated on and eventually published.

The Actions API is transactional, meaning that multiple actions will be executed in a single transaction—either all changes are applied, or none of them.

#### Use the Actions API

[Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions)

[Actions API reference](https://www.sanity.io/docs/http-reference/actions)

[Document mutation patterns](https://www.sanity.io/docs/content-lake/mutation-patterns)

### Mutations API

The Mutations API is the traditional way of creating and modifying documents in Sanity. It provides low-level operations that give you precise control over your content.

Available mutation types include:

- `create`: Create a new document
- `createOrReplace`: Create a document or replace it if it exists
- `createIfNotExists`: Create a document only if it doesn't already exist
- `delete`: Remove a document
- `patch`: Apply targeted changes to specific parts of a document

Like the Actions API, the Mutations API is transactional, ensuring data consistency across multiple operations.

#### Use the Mutations API

[Mutation API reference](https://www.sanity.io/docs/http-reference/mutation)
