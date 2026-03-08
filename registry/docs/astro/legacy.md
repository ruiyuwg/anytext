## Legacy

[Section titled “Legacy”](#legacy)

The following features are now considered legacy features. They should function normally but are no longer recommended and are in maintenance mode. They will see no future improvements and documentation will not be updated. These features will eventually be deprecated, and then removed entirely.

### Legacy: v2.0 Content Collections API

[Section titled “Legacy: v2.0 Content Collections API”](#legacy-v20-content-collections-api)

In Astro 4.x, content collections were defined, queried, and rendered using [the Content Collections API first introduced in Astro v2.0](https://astro.build/blog/introducing-content-collections/). All collection entries were local files within the reserved `src/content/` folder. Additionally, Astro’s [file name convention to exclude building individual pages](/en/guides/routing/#excluding-pages) was built in to the Content Collections API.

Astro 5.0 introduces a new version of content collections using the Content Layer API which brings several performance improvements and added capabilities. While old (legacy) and new (Content Layer API) collections can continue exist together in this release, there are potentially breaking changes to existing legacy collections.

This release also removes the option to prefix collection entry file names with an underscore (`_`) to prevent building a route.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-2)

We recommend [converting any existing collections to the new Content Layer API](#updating-existing-collections) as soon as you are able and making any new collections using the Content Layer API.

If you are unable to convert your collections, then please consult the [legacy collections breaking changes](#breaking-changes-to-legacy-content-and-data-collections) to see whether your existing collections are affected and require updating.

If you are unable to make any changes to your collections at this time, you can [enable the `legacy.collections` flag](#enabling-the-legacycollections-flag) which will allow you to keep your collections in their current state until the legacy flag is no longer supported.

Learn more about the updated [content collections](/en/guides/content-collections/).

##### Updating existing collections

[Section titled “Updating existing collections”](#updating-existing-collections)

See the instructions below for updating an existing content collection (`type: 'content'` or `type: 'data'`) to use the Content Layer API.

Step-by-step instructions to update a collection

1. **Move the content config file**. This file no longer lives within the `src/content/` folder. This file should now exist at `src/content.config.ts`.

2. **Edit the collection definition**. Your updated collection requires a `loader` which indicates both a folder for the location of your collection (`base`) and a `pattern` defining the collection entry filenames and extensions to match. (You may need to update the example below accordingly. You can use [globster.xyz](https://globster.xyz/) to check your glob pattern.) The option to select a collection `type` is no longer available.

   src/content.config.ts

   ```diff
   import { defineCollection, z } from 'astro:content';
   +import { glob } from 'astro/loaders';


   const blog = defineCollection({
     // For content layer you no longer define a `type`
     type: 'content',
     loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
     schema: z.object({
       title: z.string(),
       description: z.string(),
       pubDate: z.coerce.date(),
       updatedDate: z.coerce.date().optional(),
     }),
   });
   ```

3. **Change references from `slug` to `id`**. Content layer collections do not have a reserved `slug` field. Instead, all updated collections will have an `id`:

   src/pages/\[slug].astro

   ```diff
   ---
   export async function getStaticPaths() {
     const posts = await getCollection('blog');
     return posts.map((post) => ({
   -    params: { slug: post.slug },
   +    params: { slug: post.id },
       props: post,
     }));
   }
   ---
   ```

   You can also update the dynamic routing file names to match the value of the changed `getStaticPaths()` parameter.

4. **Switch to the new `render()` function**. Entries no longer have a `render()` method, as they are now serializable plain objects. Instead, import the `render()` function from `astro:content`.

   src/pages/index.astro

   ```diff
   ---
   import { getEntry, render } from 'astro:content';


   const post = await getEntry('blog', params.slug);


   -const { Content, headings } = await post.render();
   +const { Content, headings } = await render(post);
   ---

   ```

##### Breaking changes to legacy `content` and `data` collections

[Section titled “Breaking changes to legacy content and data collections”](#breaking-changes-to-legacy-content-and-data-collections)

[Implementation PR: Implement legacy collections using glob (#11976)](https://github.com/withastro/astro/pull/11976)

By default, collections that use the old `type` property (`content` or `data`) and do not define a `loader` are now implemented under the hood using the Content Layer API’s built-in `glob()` loader, with extra backward-compatibility handling.

Additionally, temporary backwards compatibility exists for keeping the content config file in its original location of `src/content/config.ts`.

This backwards compatibility implementation is able to emulate most of the features of legacy collections and will allow many legacy collections to continue to work even without updating your code. However, **there are some differences and limitations that may cause breaking changes to existing collections**:

- In previous versions of Astro, collections would be generated for all folders in `src/content/`, even if they were not defined in `src/content/config.ts`. This behavior is now deprecated, and collections should always be defined in `src/content.config.ts`. For existing collections, these can just be empty declarations (e.g. `const blog = defineCollection({})`) and Astro will implicitly define your legacy collection for you in a way that is compatible with the new loading behavior.
- The special `layout` field is not supported in Markdown collection entries. This property is intended only for standalone page files located in `src/pages/` and not likely to be in your collection entries. However, if you were using this property, you must now create dynamic routes that include your page styling.
- Sort order of generated collections is non-deterministic and platform-dependent. This means that if you are calling `getCollection()`, the order in which entries are returned may be different than before. If you need a specific order, you must sort the collection entries yourself.
- `image().refine()` is not supported. If you need to validate the properties of an image you will need to do this at runtime in your page or component.
- The `key` argument of `getEntry(collection, key)` is typed as `string`, rather than having types for every entry.
- Previously when calling `getEntry(collection, key)` with a static string as the key, the return type was not nullable. The type now includes `undefined` so you must check if the entry is defined before using the result or you will have type errors.

##### Enabling the `legacy.collections` flag

[Section titled “Enabling the legacy.collections flag”](#enabling-the-legacycollections-flag)

[Implementation PR: Implement legacy collections using glob (#11976)](https://github.com/withastro/astro/pull/11976)

If you are not yet ready to update your existing collections, you can enable the [`legacy.collections`](/en/reference/legacy-flags/) flag and your existing collections will continue to function as before.
