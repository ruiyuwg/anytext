# Generating types

If you use TypeScript for your front end or web application, you will want to type the content from the Sanity Content Lake API. With the Sanity TypeGen tooling, you can generate type definitions from the schema types in your Studio and the results of your GROQ queries in your front ends and applications.

Typing your content is useful for:

- Catching bugs and errors caused by wrongly handled data types, like forgetting to check for `null` or a `undefined` property
- Autocomplete of fields available in the result of your GROQ query
- Making it easier to refactor integration code when you make changes to the schema

This article will present the different aspects of type generation and walk you through workflows depending on your project structure (separate repositories, monorepos, and embedded Studio).

[Course: Typed content with Sanity TypeGen](https://www.sanity.io/learn/module/typescripted-content/introduction)

## Requirements

- Sanity Studio v5.10.0 or later
- A Sanity Studio project with a schema
- GROQ queries assigned to variables and using the [groq template string helper](https://github.com/sanity-io/sanity/tree/next/packages/groq)

## Overview

You can use Sanity TypeGen to generate types for your Sanity Studio schema and for the return value of a GROQ query run against documents made from that schema.

Types from your schema can be useful for cases where GROQ isn't used, such as [Studio customization](https://www.sanity.io/docs/customization) and [schema change management](https://www.sanity.io/docs/content-lake/schema-and-content-migrations).

The most common use case is generating types for GROQ queries. TypeGen works by "overlaying the schema types" over the GROQ query to determine what types the returned data will have.

### Using GraphQL?

If you primarily use [the Sanity GraphQL API](https://www.sanity.io/docs/content-lake/graphql), we recommend using established GraphQL TypeScript tooling, like [GraphQL Code Generator](https://the-guild.dev). You can use your GraphQL API URL as the configuration setting for `schema`.

## Minimal example

Sanity TypeGen needs to access a static representation of your Studio schema to generate types. You can use the `sanity schema extract` command to create the `schema.json` file the TypeGen command requires:

```sh
$ cd ~/my-studio-folder
$ sanity schema extract # outputs a `schema.json` file
✔ Extracted schema

$ sanity typegen generate
✔ Config loaded from ./sanity.cli.ts
✔ Schema loaded from ./schema.json
✔ Successfully generated types to /Users/dev/my-studio-folder/sanity.types.ts in 225ms
  └─ 2 queries and 2 schema types
  └─ found queries in 1 files after evaluating 1 files
  └─ formatted the generated code with prettier
```

## Types from schemas

Take this simple schema type for “event” documents:

> \[!NOTE]
> TypeGen preserves casing in type names and properly quotes non-identifier field names. For example, field names like `my-field` are correctly quoted as `'my-field': string` in the generated types.

Input

**./src/schema/event.ts**

```typescript
export const event = defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
	  defineField({
		  name: 'name',
		  type: 'string',
		  title: 'Event name',
		  validation: rule => rule.required()
	  }),
	  defineField({
	    name: 'description',
	    type: 'text',
		  title: 'Event description'	    
	  })
  ]
})
```

Generated types

**sanity.types.ts**

```typescript
export type Event = {
  _id: string;
  _type: 'event';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string
}
```

### Supported schema types

Nearly all schema types and all permutations of schema types are supported:

- Document types
- Literal fields (boolean, string, text, number, geopoint, date, dateTime)
- Object types
- Array of types
- Portable Text (Block content)
- References
- Image and file assets

Unsupported schema that will be typed as `unknown`:

- Cross-dataset references

> \[!NOTE]
> ☝ Is missing support for certain schema types blocking you? Let us know!

### Supported schema features

Since Studio schemas are defined in JavaScript, it can get gnarly to represent and generate statically TypeScript definitions from specific configuration options. However, the following schema configuration options are supported.

#### Required field validation and non-optional fields

If you add `validation: rule => rule.required()`  to a field, you might want to translate required rules into non-optional types depending on your use case. You do this by adding the `--enforce-required-fields` flag when extracting the schema:

```sh
$ npx sanity schema extract --enforce-required-fields
✔ Extracted schema, with enforced required fields
$ npx sanity typegen generate
✔ ...
```

> \[!WARNING]
> Gotcha
> If you have enabled previews of unpublished content, then remember that values might be `undefined` or `null` even though the field is set as required. Validation is only checked for published documents, and draft documents are allowed to be in an "invalid" state.

“Built-in” fields required for documents in the Sanity Content Lake will also be set to required in the TypeScript definition: `_id`, `_type`, `_createdAt`, `_updatedAt`, `_rev`.

**Literals and options.list**

The string schema type supports adding a list of predefined values in `options.list`. This gets generated into a literal type in the TypeScript definition:

Input

**./src/schema/event.ts**

```typescript
export const event = defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
	  defineField({
		  name: 'name',
		  type: 'string',
		  title: 'Event name',
		  validation: rule => rule.required()
	  }),
	  defineField({
	    name: 'description',
	    type: 'text',
		  title: 'Event description'	    
	  }),
	  defineField({
		  name: 'format',
		  type: 'string',
		  title: 'Event format',
		  options: {
		    list: ['in-person', 'virtual'],
		    layout: 'radio',
		  },
		}),
  ]
})

```

Generated types

**sanity.types.ts**

```typescript
export type Event = {
  _id: string;
  _type: 'event';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  description?: 'string';
  format?: 'in-person' | 'virtual';
}
```

## Types from GROQ queries

Sanity TypeGen can also generate TypeScript definitions for GROQ query *results*. This is useful since GROQ is a query language that lets you specify which fields to return in projections and re-shape that data to fit your needs.

The CLI command requires that a GROQ query is:

- Assigned to a variable (it does *not* need to be exported)
- Uses the `groq` [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), or `defineQuery`, from the [groq](https://www.npmjs.com/package/groq) package (also exported by [next-sanity](https://github.com/sanity-io/next-sanity))
- Validates as a GROQ expression

The `typegen` requires all queries to have a unique name. This also means that no inline queries are included in the generated types.

```tsx
// ✅ Will be included
async function getStuff() {
	const myUniquelyNamedQuery = groq`*[_type == 'post']{ slug, title }`
	const result = await client.fetch(myUniquelyNamedQuery)
	return result
}

async function getMoreStuff() {
	const myUniquelyNamedQuery = defineQuery(`*[_type == 'post']{ slug, title }`)
	const result = await client.fetch(myUniquelyNamedQuery)
	return result
}

// ❌ Will not be included
async function getInlineStuff() {
	const result = await client.fetch(groq`*[_type == 'post']{ slug, title }`)
	return result
}
```

### Supported GROQ features

Since GROQ is so versatile, we are still working on identifying edge cases, and some functions are not yet supported.

> \[!NOTE]
> Unsupported expressions
> Unsupported GROQ expressions will be typed as `unknown` by TypeGen.

Supported features:

- Data types: Null, Boolean, Number, String, Array, Object
- Selectors: Everything (`*`), this (`@`), attribute filters (`[name == "string"]`), parent (`^`)
- Functions: `coalesce()`, `select()` , `dateTime::now()`, `global::now()`, `round()`, `upper()`, `lower()`, `select()` (and `=>`), and array functions
- Compounds: parenthesis, traversals (`[]`), pipe function calls (`|`)
- Operators: and (`&&`), or (`||`), not (`!=`), equality (`==`), comparison (`<, <=, >, >=`), plus (`+`), minus (`--`), unaries (`++` `--`), star (`*`), slash (`/`), percent (`%`), star star (`**`)

> \[!NOTE]
> ☝ Is missing support for certain GROQ features blocking you? Let us know in [the community](https://snty.link/community)!

### Supported file types

TypeGen parses queries from multiple file types:

- TypeScript (.ts, .tsx)
- JavaScript (.js, .jsx)
- Astro (.astro)
- Svelte (.svelte)
- Vue (.vue)

SvelteKit's `defineQuery` function is fully supported for automatic type inference.

### Automatic Sanity Client type inference

By using `defineQuery`  when writing your GROQ queries the Sanity Client will automatically return types when the query is used with `fetch`, after running `sanity typegen generate`.

#### Example

**sanity.queries.ts**

```typescript
import { defineQuery } from 'groq'

export const postsQuery = defineQuery(`*[_type == "event"]{title}`)

// data.ts
import { createClient } from '@sanity/client'
import { postsQuery } from './sanity.queries.ts'

const client = createClient({...})

export function getPosts() {
  return client.fetch(postsQuery) // <- the returned type here is automatically inferred 
}

```

> \[!WARNING]
> Gotcha
> For TypeScript to return the query types generated by TypeGen the generated `sanity.types.ts` needs to be included in the pattern configured in the `includes` array in `tsconfig.json`.

> \[!NOTE]
> Opt out of automatic type inference
> You can opt out by setting `overloadClientMethods` to `false` in your `sanity.cli.ts`.

### Ignoring individual queries

You can instruct the type generator to skip generating query types for individual queries by having **@sanity-typegen-ignore** in a leading comment before the query, similar to how ESLint and TypeScript can be instructed.

### Minimal example

Input

**sanity.queries.ts**

```typescript
import groq from 'groq'
// import { groq } from 'next-sanity'

const postQuery = groq`*[_type == "event"]{title}`

const authorQuery = groq`*[_type == "author" && name == $name][0]{_type, name, description}`

// this query wont get generated types because of the instruction below
// @sanity-typegen-ignore
const anotherQuery = groq`*[_type == "another"][0]`
```

Generated types

**sanity.types.ts**

```typescript
// Variable: postQuery
// Query: *[_type == "event"]{title}
export type PostQueryResult = Array<{
  title: string | null
}> 

// Variable: authorQuery
// Query: *[_type == "author" && name == $name][0]{name, description}
export type AuthorQuery = {
  _type: 'author'
  name: string | null
  description: string | null
} | null
```

## Type utilities

TypeGen provides utility types to help you work with generated types in complex schemas.

### Get utility

The Get utility extracts deeply nested properties from your types, supporting up to 20 levels of nesting. This is especially useful for page builder schemas with complex nested structures.

```typescript
import type { Get } from '@sanity/codegen'
import type { Page } from './sanity.types'

// Extract a deeply nested type
type HeroSection = Get<Page, 'sections', number, 'hero'>
```

This replaces verbose type manipulation with NonNullable and index access.

### FilterByType utility

The FilterByType utility filters specific types from union types using the \_type discriminator. This is useful when working with arrays of different block types.

```typescript
import type { FilterByType } from '@sanity/codegen'
import type { PageBuilder } from './sanity.types'

// Extract only hero blocks from a union
type HeroBlock = FilterByType<PageBuilder, 'hero'>

// Works with multiple types
type ContentBlocks = FilterByType<PageBuilder, 'hero' | 'textBlock' | 'imageGallery'>
```

## Type generation workflows

Generating types from your schemas and GROQ queries using the Sanity CLI in the root Sanity Studio folder for the relevant project. First, you’ll run a command to extract the structure of your schemas into a format suited for further processing and then convert it into a handy JSON file. Then you’ll run another command to generate and output type definitions based on that same JSON file.

### Automatic type generation

Automatic type generation is the recommended workflow. Enable it in your sanity.cli.ts configuration, and types regenerate automatically during development.

**sanity.cli.ts**

```typescript
// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  typegen: {
    enabled: true,
  },
})
```

With enabled set to true, types regenerate automatically when you run sanity dev or sanity build. You can still use manual commands when needed.

> \[!NOTE]
> Understanding configuration options
> `typegen.enabled: true` activates automatic type generation during `sanity dev` or `sanity build`. Similarly, `schemaExtraction.enabled: true` activates automatic schema extraction (generating schema.json).
> **In the studio:** You typically want schema extraction enabled. Enable typegen too if you need types in your studio code (for custom components, etc.).
> **In separate frontend repositories:** Use `sanity typegen generate --watch` directly, since you're not using `sanity dev/build` to build your frontend.

For separate frontend repositories, use watch mode: sanity typegen generate --watch to keep types in sync as your schema changes.

### General workflow

1. Extract current schema with `sanity schema extract`
2. Generate types from schemas and queries with `sanity typegen generate`

### Extracting studio schema to `schema.json`

The first step towards generating type definitions based on your schemas is to extract the entire schema structure into a single JSON file for the `typegen` command to ingest.

👉 In your Sanity project root (wherever your `sanity.config.ts` lives), run the following CLI command:

```sh
$ npx sanity schema extract
✔ Extracted schema

# If you have multiple workspaces defined, specify which one to use:
$ npx sanity schema extract --workspace=commerce
✔ Extracted schema
```

The CLI tool will pick up the schema definition from your project configuration, and generate a representation of your complete schema structure in a new file named `schema.json` unless otherwise specified. You are now ready to proceed to the next step.

🔗 Learn how to override the default output file and more in the CLI reference docs.

### Generate `sanity.types.ts` from `schema.json`

Once you have extracted your schema as described in the previous section, you are all set to generate some types.

👉 Still in your Sanity project root, run the following command in your CLI:

```sh
$ npx sanity typegen generate
✔ ...
```

The CLI tool will look for the `schema.json` file you created in the previous step and will create a new file by default named `sanity.types.ts` containing all the type declarations for your schema and for any GROQ query found in the default source file path, which is `./src`.

The `generate` command can be configured by adding a property named `typegen` to your `sanity.cli.ts/js` containing a configuration object with the following shape:

**sanity.cli.ts**

```typescript
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  // ...rest of config
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}", // glob pattern to your typescript files. Can also be an array of paths
    schema: "schema.json", // path to your schema file, generated with 'sanity schema extract' command
    generates: "./sanity.types.ts", // path to the output file for generated type definitions
    overloadClientMethods: true, // set to false to disable automatic overloading the sanity client
  },
})
```

The example above is shown with the default values. Note the the `path` can be defined as either an array of strings or a single string.

> \[!NOTE]
> Deprecated typegen config file
> Type generation was previously configured in a separate configuration file (typically `sanity-typegen.json`). This has been deprecated and we advise everyone to move their configuration into the main CLI configuration (typically found in `sanity.cli.ts`).

### Watch mode

Both `sanity schema extract` and `sanity typegen generate` features a `--watch` flag (from v5.8.0) to watch for changes in your files and generate the schema and type files as you change things in your project.

The schema extraction watch mode watches for changes in your studio and generates the `schema.json` file.

The type generation watches the configured schema path and files you’ve configured your type generation to look for.

```sh
$ cd ~/frontend
$ sanity typegen generate --watch
✓ Config loaded from ./sanity.cli.ts
✔ Schema loaded from ./schema.json
✔ Successfully generated types to /Users/dev/frontend/sanity.types.ts in 328ms
  └─ 0 queries and 18 schema types
  └─ found queries in 0 files after evaluating 1 file
  └─ formatted the generated code with prettier
[5:42:03 PM] change: src/queries.ts
✔ Schema loaded from ./schema.json
✔ Successfully generated types to /Users/dev/frontend/sanity.types.ts in 414ms
  └─ 1 query and 18 schema types
  └─ found queries in 1 file after evaluating 1 file
  └─ formatted the generated code with prettier
```

### Example: Embedded Studio

A common pattern is to embed Sanity Studio in another application, keeping everything in a single repository. You can find several example repositories that follow this convention in the templates section of the Sanity Exchange. This is the happiest of paths since your studio and application are sharing a single project root. Likely, the only adjustment you might need to make is to specify the path to your queries (unless it’s in a sub-directory of `./src` in which case the default settings have you fully covered!)

### Example: Monorepo

Another common way of structuring a Sanity-powered project is to create a “monorepo” within which your Studio and your consuming application live separately side by side, possibly in sub-repositories of their own. Depending on the needs and preferences of your project you could use the configuration options of each CLI command to output the generated files into your consuming application, or you could keep the generated files in the studio folder and put it on the application to find them by traversing the monorepo.

```bash
// Use the --path flag to output schema.json elsewhere

npx sanity schema extract --path ../../my-cool-app/sanity-schemas.json
```

**sanity.cli.ts**

```typescript
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  // ...rest of config
  typegen: {
    path: "'../../my-cool-app/src/**/*.{ts,tsx,js,jsx}'", // glob pattern to your typescript files
    schema: "../../my-cool-app/sanity-schemas.json", // path to your schema file, generated with 'sanity schema extract' command
    generates: "../../my-cool-app/sanity.types.ts" // path to the output file for generated type definitions
  },
})
```

### Example: Separate repos

You might also find yourself working on a project that keeps separate repos for the studio and consuming applications. Use watch mode to automatically regenerate types when the schema changes. Run `sanity typegen generate --watch` in your frontend repository to keep types in sync. You'll need to configure the path to point to the `schema.json` file from your studio repository.
