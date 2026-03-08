# Translation

AI Assist is a powerful tool for projects that need to serve content in multiple languages. To reflect the two most popular strategies for content localization in Sanity projects, two distinct APIs are ready to help you with document-level or field-level translation. Let’s look at each in turn.

> \[!NOTE]
> Paid feature
> This article is about a feature currently available for all projects on the [Growth plan](https://www.sanity.io/pricing) and up.

[Install and configure AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

[Create and run instructions with AI Assist](https://www.sanity.io/docs/user-guides/ai-assist-working-with-instructions)

[Common instructions for AI Assist](https://www.sanity.io/docs/user-guides/ai-assist-cheat-sheet)

[Localization](https://www.sanity.io/docs/studio/localization)

## Full document translation

This workflow assumes one document per language. It is designed to work especially well with the Sanity-maintained [Document internationalization](https://www.sanity.io/plugins/document-internationalization) plugin, but it will work without it if, for some reason, you aren’t willing or able to install said plugin.

### Configuring the AI Assist plugin for full document translation

To set up your project for full document translation with AI Assist, you need to pass a configuration object to the `assist()` plugin declaration in `sanity.config.js|ts`.

```typescript
plugins: [
  assist( {
    translate: {
        // Style guide for the translation agent. Max 2000 chars.
      styleguide: 'Be extremely formal and precise. Mimick Spock from Star Trek.',
      document: {
          // The name of the field that holds the current language
          // in the form of a language code e.g. 'en', 'fr', 'nb_NO'.
          // Required
          languageField: 'language',
          // Optional extra filter for document types.
          // If not set, translation is enabled for all documents
          // that has a field with the name defined above.
          documentTypes: ['article', 'blogpost'],	
      }
    }
  })
]
```

The `languageField` should correspond with the `name` of a field present in any document type that should be translation-enabled. AI Assist will use the value of this field to determine the language to which it should translate the relevant document.

```tsx
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
		{
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en_US'},
          {title: 'Norwegian Bokmål', value: 'nb_no'},
          {title: 'Esperanto', value: 'eo'},
          {title: 'Lojban', value: 'jbo'},
          {title: 'Toki Pona', value: 'tok'},
        ],
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
			of: [{type: 'block'}],
    },
  ],
}

```

Any document type that is enabled for translation will now have a translation instruction added to its document-level AI Assist menu. This instruction is not available to edit for the user, but in all other regards works and behaves the same as user-created instructions.

![Shows the top-level document contextual menu for AI Assist](https://cdn.sanity.io/images/3do82whm/next/3bb2bd5b1c6eeec67cb3b8bc71adf2df7bffbf37-617x446.png)

After first setting the desired language, selecting the \*\*Translate document \*\*instruction will put the assistant to work. Within a few moments, you should have a translated document. Note that the assistant will replace the current field values with the translated values, so unless your aim was to replace the original, you probably should make a copy before running the translation.

> \[!WARNING]
> Gotcha
> As with all current Large Language Model (LLM)-based tools, AI Assist should never be relied on for critical content without a human being reviewing the results. It’s pretty good, but it does make mistakes!

![Shows multiple fields with a purple icon indicating the assistant is currently working on that field](https://cdn.sanity.io/images/3do82whm/next/86984b4d10f801dd710674ded6d5d76e94956ab1-1084x808.png)

While the assistant is working, you’ll see purple spinning AI presence icons indicating which fields are currently being translated. The assistant can work on several fields simultaneously, as shown in the screenshot above.

### Dynamic style guides

As of 4.1.0 it is also possible to provide a styleguide async function. This is useful for when you'd like to allow users to modify the styleguide from within Studio. The function is passed a context object with Sanity client and the current documentId and schemaType.

Consider caching the results, as the function is invoked every time translate runs.

This example fetches a singleton document:

```
assist({
  translate: {
    styleguide: ({client, documentId, schemaType}) => client.fetch('* [_id=="styleguide.singleton"][0].styleguide')
  },
})
```

## Field level translations

Another popular strategy for multi-language content wrangling in Sanity is to keep all the different language variants in the same document, using objects with a set of fields of the same type to represent each translation.

```typescript
{
	
type: 'document',
name: 'article',
fields: [
	{
		type: 'object',
		name: 'localeTitle',
		fields: [
			{type: 'string', name: 'en', title: 'English'},
			{type: 'string', name: 'de', title: 'German'},
		]
		}
	]
}
```

This method is greatly facilitated by using the Sanity-maintained [Internationalized Array](https://www.sanity.io/plugins/internationalized-array)-plugin, and AI Assist affordances for field-level translation have been designed to work with the same setup and configuration this plugin presumes.

![Shows a field named "Subtitle" with two fields marked with NB and EN respectively, each containing a string in that respective language](https://cdn.sanity.io/images/3do82whm/next/1e8f550c25d4acddbaf48b5537f9bef1233b5b00-1338x418.png)

Setting up AI Assist to support field-level translation for this workflow is done in the `translate.field` configuration property. A minimal example for the schema in the previous example, might look something like this:

```typescript
assist({
  translate: {
    field: {
      documentTypes: ['article'],
      languages: [
        { id: 'en', title: 'English' },
        { id: 'de', title: 'German' },
      ],
    },
  },
});

```

`documentTypes` expects an array of document names for which the translation instruction should be activated. `languages` expects an array of language definitions, which should consist of an `id` in the form of a locale code and a human-readable `title` for rendering labels and such in the UI. An async callback function can also be used to return the same structure of data.

```typescript
assist({
  translate: {
    field: {
      languages: async () => {
        const response = await fetch('https://example.com/languages');
        return response.json();
      },
    },
  },
});

```

The async function contains a configured Sanity client as its first argument, allowing you to store language options as documents. Your query should return an array of objects with an `id` and `title`.

```typescript
assist({
  translate: {
    field: {
      languages: async (client) => {
        const response = await client.fetch(
          `*[_type == "language"]{ id, title }`
        );
        return response;
      },
    },
  },
});

```

Additionally, you can pick specific fields from a document to pass into the query. For example, if you have a concept of "markets" where only certain language fields are required in certain markets.

In this example, each language document has an array of strings named `markets` to declare where that language can be used. And the document being authored has a string field named `market`.

```typescript
assist({
  translate: {
    field: {
      selectLanguageParams: {
        market: 'EU',
      },
      languages: async (client, { market = `` }) => {
        const response = await client.fetch(
          `*[_type == "language" && $market in markets]{ id, title }`,
          { market }
        );
        return response;
      },
    },
  },
});

```

### Custom language fields

As mentioned the translation capabilities of AI Assist have been designed to work with the content paradigm recommended by the official Sanity-maintained plugins for working with multi-language content. I.e. the [Document internationalization](https://www.sanity.io/plugins/document-internationalization) and [Internationalized Array](https://www.sanity.io/plugins/internationalized-array) plugins. If following the conventions of these plugins is not feasible for your project, you have the option of tailoring the relationship and structure between language fields in your setup using the `translationOutputs` property.

By providing a function to `translate.field.translationOutputs` you can manually map the structure of your internationalized fields.

This function is invoked when an editor uses the **Translate fields** instruction, and determines the relationships between document paths: Given a document path and a language, it should return the sibling paths into which translations are output.

`translationOutputs` is invoked once per path in the document (limited to a depth of 6), with the following arguments:

- `documentMember` - the field or array item for a given path; contains the path and its schema type
- `enclosingType` - the schema type of the parent holding the member
- `translateFromLanguageId` - the languageId for the language the user wants to translate from
- `translateToLanguageIds` - all languageIds the user can translate to

The function should return an array that contains all the paths where translations from `documentMember` (in the language given by `translateFromLanguageId`) should be output.

The function should return `undefined` for all documentMembers that should not be directly translated, or are nested fields under a translated path.

### Default function

The default `translationOutputs` is available using `import {defaultTranslationOutputs} from '@sanity/assist`.

### Example

Given the following document:

```typescript
{
  titles: {
    _type: 'languageObject',		
    en: {
      _type: 'titleObject',
      title: 'Some title',
      subtitle: 'Some subtitle'
    },
    de: {
      _type: 'titleObject',
    }
  }
}
```

When translating from English to German, `translationOutputs` will be invoked multiple times.

The following parameters will be the same in every invocation:

- `translateFromLanguageId` will be `'en'`
- `translateToLanguageIds` will be `['de']`

`documentMember` and `enclosingType` will change between each invocation and take the following values:

1. `{path: 'titles', name: 'titles', schemaType: ObjectSchemaType}`, `ObjectSchemaType`
2. `{path: 'titles.en', name: 'en', schemaType: ObjectSchemaType}`, `ObjectSchemaType`
3. `{path: 'titles.en.title', name: 'title', schemaType: StringSchemaType}`, `ObjectSchemaType`
4. `{path: 'titles.en.subtitle', name: 'subtitle', schemaType: StringSchemaType}`, `ObjectSchemaType`
5. `{path: 'titles.de', name: 'de', schemaType: ObjectSchemaType}`, `ObjectSchemaType`

To indicate that you want everything under `title.en` to be translated into `title.de`, `translationOutputs` needs to return `[id: 'de', outputPath: 'titles.de']` when invoked with `documentMember.path: 'titles.en'`.

The function to enable this behavior might look like this:

```typescript
function translationOutputs(
  member,
  enclosingType,
  translateFromLanguageId,
  translateToLanguageIds
) {
  const parentIsLanguageWrapper =
    enclosingType.jsonType === 'object' &&
    enclosingType.name.startsWith('language');

  if (parentIsLanguageWrapper && translateFromLanguageId === member.name) {
    // [id: 'de', ]
    return translateToLanguageIds.map((translateToId) => ({
      id: translateToId,
      // in this example, member.path is 'titles.en'
      // so this changes titles.en -> titles.de
      outputPath: [...member.path.slice(0, -1), translateToId],
    }));
  }

  // ignore other members
  return undefined;
}

```

## Adding translation actions to fields

By default, **Translate document** and **Translate fields…** instructions are only added to the top-level document instruction menu.

These instructions can also be added to fields by setting `options.aiAssist.translateAction: true` for a field or type.

This allows editors to translate only parts of the document, and can be useful to enable for `internatinoalizedArrays` or `locale` wrapper object types.

For document types configured for full document translations, a **Translate** action will be added. Running it will translate the field to the language set in the language field

For document types configured for field translations, a **Translate fields...** action will be added. Running it will open a dialog with language selectors.

```typescript
defineField({
    name: 'subtitle',
    type: 'internationalizedArrayString',
    title: 'Subtitle',
    options: {
        aiAssist: {
            translateAction: true
        }
    },
})
```
