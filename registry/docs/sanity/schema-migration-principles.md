# Schema migration principles

Content and schema migrations are potentially high-stakes operations, especially for projects that are in production. At the same time, it can be hard to nail a content model on the first try and anticipate all needs and requirements ahead of time. Our aim at Sanity is to enable you to work with content models and content through APIs early in your projects without being penalized for it when these need to change.

The considerations you need to take can differ depending on whether your project is in development or has been put into production. Below are some overarching considerations for both scenarios.

> \[!WARNING]
> Gotcha
> Keep in mind that editors may be editing in the Studio while the migration is running. It's good to give them a heads-up before running a content migration on a dataset that is being worked on.

### For projects that haven’t been put into production yet

Most changes to a content model for projects in development that haven’t been put into production are additive; you *add* new document types and fields. Often, you will not have as much content that needs to be changed or updated either. Sometimes, editing documents manually in the Studio might be as efficient as running automated scripts to change them.

That said, there are also cases where you have a lot of content because you have engaged the content team to work in parallel to enhance the design and implementation process or have imported content from another system. You wish to take the opportunity to improve its structure.

In these cases, you should always consider to:

- Export the dataset before migration
- Commit your schema changes to git with updated validation rules and/or deprecated schema types
- Run `sanity documents validate` to check what documents give errors against your schema changes
- Initialize a migration job with `sanity migration create` to scaffold file and boilerplate code
- Dry run `sanity migration <ID>` and validate that the patches seem correct
- Run the `sanity migrate run <ID> --no-dry-run` to make the changes
- Update the queries and down-stream code in the application(s) where the content is used

> \[!TIP]
> Protip
> If you aren’t quite ready to change the code that implements your content, you can use [the coalesce function in GROQ](https://www.sanity.io/docs/specifications/groq-functions) to “alias” the new patterns to the old variable/shape:
> `"oldFieldName": coalesce(newFieldName, oldFieldName)`

### For projects in production

Non-additive changes to the content model for projects in production require more diligence — as you might be used to from any database migration, especially if you aim for as little downtime as possible. Migrations like these are easier if you support PR/branch deployments in your CI/CD tooling. We recommend deploying the Studio from a git-based platform if you have more than simple needs.

To prepare a migration for projects in production:

- Export the dataset before migration (or for enterprise: enable dataset backups)
- Export and import (or copy) your production dataset into a staging dataset where you can test your migrations and relevant applications against
- Make your schema changes, and remember to give easy-to-understand instructions when deprecating fields.
- Run `sanity documents validate` to check what documents give errors against your new schema changes
- Initialize a migration job with `sanity migration create` to scaffold file and boilerplate code
- Dry run `sanity migration run <ID>` and validate that the patches seem correct
- Run the `sanity migration run <ID> --no-dry-run` to make the changes in your staging dataset
- Update queries and downstream code paths in applications that depend on the affected content
- The most foolproof way to write “defensive code” that supports both content models.
- Thoroughly test the changes in the branch/PR deployments
- Onboard users/stakeholders of your Sanity Studio to the new changes and let them test out the editorial experience
- When you have confidence that everything works, you can merge the applications to production and then run the migration jobs against your production dataset.
- When you have confirmed that everything works as it should in production, you can clean up the “defensive” code to eliminate the code paths for the old content model.

## Strive for idempotent migrations

An idempotent migration is a migration that can safely be run multiple times. Typically, an idempotent migration will start by checking if a precondition is met before it runs, and if this condition isn’t met, the migration will do nothing.

```typescript
defineMigration({
  title: 'Convert product category from string to array of strings'
	documentTypes: ['product'],
	filter: 'defined(category) && !defined(categories)'
  migrate: {
    document(doc) {
      return [
        at('categories', setIfMissing([])),
        at('categories', insert(doc.category])),
        at('category', unset())
      ]
    }
  }
})

```

Example of an idempotent operation:

`at('name', set(person.name.toUpperCase())`

This will produce the same result no matter how often you run it.

Example of a non-idempotent operation:

`at('members', insert({name: 'Some One'}))`

This inserts a new member into the array every time it’s run, giving different results every time it’s run.

### Providing an idempotence key

If there’s no way to write your migrations idempotent, you can instead write an idempotence marker to your document along with the migration.

```typescript
const idempotenceKey = 'xyz' // should be unique for the migration but never change

export default defineMigration({
  name: 'Convert product from reference to array of references'
	filter: 'defined(product) && !defined(products)'
  migrate: {
	  document(doc) {
			if ((document?._migrations||[]).includes(idempotenceKey) {
	      // Document already migrated, so we can skip
	      return
	    }
	    return [
	      // migration
				at('members', insert({name: 'Some One'}))
	      //… add idempotence key
				at('_migrations', setIfMissing([]),
	      at('_migrations', insert(idempotenceKey)
	    ]
		}
  }
})

```
