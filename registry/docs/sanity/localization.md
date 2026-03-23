# Localization

> \[!NOTE]
> Localizing UI vs localizing content
> This article is about how to localize the *content* you manage in Sanity Studio. To learn about how to change the UI language of your studio, [visit this article](https://www.sanity.io/docs/studio/localizing-studio-ui), or [visit this article](https://www.sanity.io/docs/apis-and-sdks/iiif-api-reference) if you want to learn about adding internationalization to your plugins.

## Best practice

Localization in Sanity is performed by storing language data as a value of a field in a document.

We recommend using these two optional plugins to simplify creating and maintaining localized documents and fields in Sanity Studio.

- For **translated documents**, we recommend the [@sanity/document-internationalization](https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/document-internationalization) plugin, which will relate translations as references and handle setting a “language” field value on documents.
- For **translated fields**, the [internationalized-array plugin](https://github.com/sanity-io/plugins/tree/main/plugins/sanity-plugin-internationalized-array) can be used with any field type and scales to as many languages as you may need to author.

## Methods of localization

Sanity allows you to model translated content as it makes the most sense to your workflow and content structure. There are two main approaches:

- **Field level localization**  - A single document with content in many languages

- Requires you to publish content in all languages simultaneously

- Achieved by creating an array or object that generates a field for each language value

- Best for documents that have a mix of language-specific and common fields

- Not recommended for Portable Text when using localized objects - you should use localized arrays instead, which helps minimize [attribute usage](https://www.sanity.io/docs/content-lake/attribute-limit).

- **Document level localization**  - A unique document version for every language

- Allows the option to publish each language version independently

- References join language versions together

- Best for documents that have unique, language-specific fields and no common content across languages

- Best for translating content using Portable Text

Your preferred method will depend on your use case, content model, and publishing workflow. Each document’s schema plays a role in deciding the appropriate localization strategy, so you may use both in a single project.

We offer simple plugins for both strategies to improve the authoring experience in Sanity Studio.

## Sanity Studio walkthrough

![Localization approaches in Sanity Studio](https://www.youtube.com/watch?v=6acLvAvvG2w)

## Example repository

This [Course Platform Demo](https://github.com/sanity-io/demo-course-platform) is a Sanity Studio and Next.js front-end showcasing internationalized schema, popular plugin configuration, and how to query for localized content.

## Field-level translations

Instead of using a single field for a single value, field-level translations are created by building arrays or objects with a field for each language representing that value.

This is most useful in document schemas where only some fields in the document require translation. For example, a `person` will use the same `name` and `photo` in every language, but their `title` would need localizing.

So we create a structure like this with a `title` field for each language:

### Schema for localized objects

Since Sanity schema definitions are written in JavaScript, you can programmatically define the language properties for these localized versions of fields. Adding languages becomes a task of expanding the list of languages, and all fields will be expanded to include them.

In the following code example, we are also using the [fieldset feature](https://www.sanity.io/docs/studio/object-type) of objects to group every language value except a "base language" into a collapsible group in order to tidy up the Studio document editor.

> \[!WARNING]
> Gotcha
> Creating localized objects is fine for a few languages and fields, but it risks [rapidly increasing your attribute count](https://www.sanity.io/docs/content-lake/attribute-limit) with many languages. Consider using arrays instead with the help of a plugin, detailed below.

**/schemas/localeStringType.ts**

```typescript
import {defineType, defineField} from 'sanity'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'no', title: 'Norwegian' },
  { id: 'fr', title: 'French' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations'
  }))
})
```

> \[!TIP]
> Protip
> Generalizing objects into their own “named types” makes them easily reusable across different documents. Many fields with unique `name` values could use this same `localeString` type.

```typescript
// ./schemas/presenterType.ts

import {defineType, defineField} from 'sanity'
import {baseLanguage} from './localeStringType.ts'

export const presenterType = defineType({
  title: 'Presenter',
  name: 'presenter',
  type: 'document',
  fields: [
	defineField({
      name: 'name',
      type: 'string'
    }),
	defineField({
      name: 'title',
      type: 'localeString'
    }),
  ],
  preview: {
    select: {
	  title: 'name',
      subtitle: `title.${baseLanguage.id}`
    }
  }
})
```

> \[!TIP]
> Protip
> The [IANA language tags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) can be helpful when selecting identifiers for your supported languages.

### Plugin for localized objects

To clean up the UI of a document with localized fields, you may choose to install the [language filter-plugin](https://www.npmjs.com/package/@sanity/language-filter) to allow editors to hide languages they won’t need to interact with.

### Querying localized objects with GROQ

Here is an example of content structured according to this schema, as it appears fetched from our query API:

```groq
*[_type == "presenter"][0]{
  name,
  title
}
```

```json
{
  "name": "Rune Botten",
  "title": {
    "en": "Rune is a solution architect at Sanity.io",
    "es": "Rune trabaja como arquitecto de soluciones en Sanity.io",
    "no": "Rune jobber som løsningsarkitekt hos Sanity.io"
  }
}
```

When using this content in a front-end, you can fetch the full document as above or return a specific `title` field value depending on which locale you are interested in displaying.

This example fetches only the English `title` and returns that value in the `title` property:

```groq
*[_type == "presenter"][0]{
  name,
  "title": title.en
}
```

This will return the following JSON from our previous content example:

```json
{
  "name": "Rune Botten",
  "title": "Rune is a solution architect at Sanity.io"
}
```

If you query the title in a language that might not have a value set yet, you can use the [coalesce function in GROQ](https://www.sanity.io/docs/specifications/groq-functions) to provide a fallback. In this case, the `title.sv` property won't have a value (since no sv language value is set in our example), so the English value is used instead, returning the same JSON as the example above. It would have fallen further back to the string Missing translation if it had not had an English value set either.

```groq
*[_type == "presenter"][0]{
  name,
  "title": coalesce(title.sv, title.en, "Missing translation")
}
```

Lastly, you may prefer to use variables in your GROQ query so that the query does not need to change when your desired language changes – just the values of the parameters supplied to the query:

```groq
*[_type == "presenter"][0]{
  name,
  "title": coalesce(title[$language], title[$baseLanguage], "Missing translation")
}
```

### Localized arrays

You may prefer to create localized fields in an array structure for projects with many languages. Arrays [use fewer unique attributes](https://www.sanity.io/docs/content-lake/attribute-limit) than objects using this method.

Here is a quick explanation of how language objects impact attributes.

An object for a string field with three languages creates these attributes:

```
title
title.en
title.fr
title.es
```

You create another unique attribute in your dataset for every new language you add.

An array of objects to store both a language and field value could create attributes like this:

```
title
title[]
title[]._key
title[].language
title[].value
```

Using the `language` field to store the language and `value` to store the field’s content, you can add many more languages without using more attributes.

The built-in array component is not best suited to authoring like this – as every array item needs to open in a popup dialog – but there is a solution.

### Plugin for localized arrays

The [internationalized-array plugin](https://github.com/sanity-io/plugins/tree/main/plugins/sanity-plugin-internationalized-array) has a custom UI that can be used for any field type and renders each field input without a popup dialog.

It stores the language in a `language` field.

#### Querying localized arrays with GROQ

Now performing the same query for name and title but with the title stored in an array, using the [internationalized-array plugin](https://github.com/sanity-io/plugins/tree/main/plugins/sanity-plugin-internationalized-array).

```groq
*[_type == "presenter"][0]{
  name,
  title
}
```

You will receive this data:

```json
{
  "name": "Rune Botten",
  "title": [
    {
      "_type": "internationalizedArrayStringValue",
      "_key": "IW92vi98KcGFhIzeUDasfasxu",
      "language": "en",
      "value": "Rune is a solution architect at Sanity.io"
    },
    {
      "_type": "internationalizedArrayStringValue",
      "_key": "IW92vi98KcGFhIzeUDagasxu",
      "language": "es",
      "value": "Rune trabaja como arquitecto de soluciones en Sanity.io"
    },
    {
      "_type": "internationalizedArrayStringValue",
      "_key": "Edafwevi98KcGFhIzeUDkxxu",
      "language": "no",
      "value": "Rune jobber som løsningsarkitekt hos Sanity.io"
    }
  ]
}
```

To avoid over-fetching, update the query to:

1. Filter this array to just the language field `language` you need
2. Only return the `value` field

```groq
*[_type == "presenter"][0]{
  name,
  "title": title[language == "en"][0].value
}
```

Now the returned data is filtered down to just what you need:

```json
{
  "name": "Rune Botten",
  "title": "Rune is a solution architect at Sanity.io"
}
```

You can use the `coalesce()` [GROQ function](https://www.sanity.io/docs/specifications/groq-functions) to fall back to another value if the targeted one is not yet set:

```groq
*[_type == "presenter"][0]{
  name,
  "title": coalesce(
    title[language == "en"][0].value,
    title[language == "nl"][0].value,
    "Missing translation"
  )
}
```

For the most flexibility, use variables so that your query remains the same but will adapt to whichever parameters you pass into it.

```groq
*[_type == "presenter"][0]{
  name,
  "title": coalesce(
    title[language == $language][0].value,
    title[language == $baseLanguage][0].value,
    "Missing translation"
  )
}
```

## Document-level translations

You might have more complex publishing workflows that field-level translations are too simple to solve. You could be working in a base language and want to publish that content as soon as it is ready, then publish translations as they become available from other editors or external translation services. Or you may have content that exists only in a certain locale. It might make the most sense to model localized content as separate documents.

In this example, we have a `lesson` document type where every field is unique to that language variant, so it makes sense to store them as separate documents.

### Schema for document-level translations

The simplest way to achieve this is to have a language field on documents and set this to whichever language the document's contents correspond to.

```typescript
// ./schemas/articleType.ts

import {defineType, defineField} from 'sanity'

export const articleType = defineType({
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Spanish', value: 'es'}
        ]
      }
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "body"
      type: "array",
      of: [{type: 'block'}],
    })
  ]
})
```

You can then filter queries for specific locales, thus only presenting the relevant localized content in your front ends.

Using our [Document Actions API](https://www.sanity.io/docs/studio/document-actions) you can further add actions in the Studio for duplicating a document into another locale and then translate the content manually.

Or use [GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks) to send the document off to a third-party translation service through their API for automated or professional translation. Once the translation is complete, you can re-import it to your Sanity dataset via, for example, a webhook triggered by the translation service.

You can also use the [Structure Builder API](https://www.sanity.io/docs/studio/structure-builder-introduction) to provide segmented navigation to find and organize localized content in the Structure tool if you wish.

### Plugin for document-level translations

An integrated solution is to install the [@sanity/document-internationalization](https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/document-internationalization) plugin, which provides most of the above in-Studio features with minimal setup. It handles setting a language field on documents and automatically creates a linked document that stores the translations together so they are more easily queried.

### Querying for localized documents with GROQ

How you query for translated documents will depend on how you have built references between them. If you use the @sanity/document-internationalization plugin, your query will look like the one below.

In this query, you are looking for a `lesson` type document of a specific language, then find the `translation.metadata` type document which contains a reference to it and other language translations.

```groq
*[_type == "lesson" && language == $language]{
  title,
  slug,
  language,
  // Get the translations metadata
  // And resolve the `value` reference field in each array item
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    slug,
    language
  },
}
```

The plugin’s page contains more details on [how to query for translations in both GROQ and GraphQL](https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/document-internationalization#querying-with-groq).

## Translating content with the AI Assist plugin

The official [AI Assist plugin](https://www.sanity.io/docs/ai-assist) for Sanity Studio offers Large Language Model-powered content translation at the click of a sparkly button.

![Shows the top-level document menu for AI Assist instructions open with a "Translate document" option highlighted](https://cdn.sanity.io/images/3do82whm/next/bdc59e983472bee6853d4cdb81c1e3e235df74e2-610x217.png)

- [Translating content with AI Assist](https://www.sanity.io/docs/studio/ai-assist-content-translation)

## Translation service plugins

In addition to plugins to assist with authoring localized content in Sanity Studio, we offer some adapters to popular translation service providers:

- [Transifex plugin](https://www.sanity.io/plugins/sanity-plugin-transifex)
- [Smartling plugin](https://www.sanity.io/plugins/sanity-plugin-studio-smartling)
