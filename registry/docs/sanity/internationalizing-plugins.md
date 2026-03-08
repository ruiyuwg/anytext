# Internationalizing plugins

> \[!NOTE]
> Looking for Studio localization docs?
> This article is aimed at plugin authors who wish to add localization capabilities to their plugins. If your aim is rather to enable a new language in your studio UI, visit [this article](https://www.sanity.io/docs/studio/localizing-studio-ui).

The `v3.23.0` release of Sanity Studio includes the tools maintainers need to internationalize their Studio code, as well as a range of tools for plugin developers to enable i18n in their plugins. This article will introduce you to the core concepts and tooling with examples to get you started.

Before proceeding, make sure you are running the latest version of Sanity Studio. Your Studio needs to be `v3.23.0` or later to work with the internationalization (i18n) APIs.

> \[!WARNING]
> Gotcha
> **Minimum Sanity peer dependency**
> Since there is no easy way to make these changes backward compatible, your plugin will now have to bind to a minimum version of Sanity where i18n is introduced. As this may be considered a breaking change, consider implementing [semantic versioning](https://semver.org/) if not already in use.

## Glossary

- **Locale** - “English (US)”, or “Norwegian (Bokmål)”. Has an ID (`en-US`, `nb-NO`), a title and an icon. In most cases it should also have one or more *resource bundles* defined (strings).
- **Locale namespace** - “studio”, “desk”, “vision” etc. This makes it simpler to use the translation in a plugin (no need to prefix all strings), and allows for dynamic loading of namespaces when needed.
- **Resource bundles** - represents the strings available for a locale/namespace combination. The “resources” (strings) can be defined statically or as an async function, allowing for dynamic imports. Studio only loads/merges resources for a namespace/locale when used. (not thrilled about the name, but i18next calls strings “resources”, and PoC used “bundle” terminology - suggestions welcome).

## Defining the resource bundle

Start by creating a “resource bundle”, and define a namespace for your plugin using the [defineLocaleResourceBundle](https://www.sanity.io/docs/reference/api/sanity/defineLocaleResourceBundle) helper function. A resource bundle is an object specifying a namespace and locale for a localization, as well as pointing to where the files containing your localized strings – or resources – can be found. By convention the namespace should be the same as the name of your plugin, e.g., `@sanity/vision` or `@sanity/google-maps-input`. The locale should be specified following the [BCP-47 naming convention](https://en.wikipedia.org/wiki/IETF_language_tag) extended to include both language – e.g. `en` for English – and area – i.e. `US` for USA. See the list of [available locales](https://github.com/sanity-io/locales) for reference.

```tsx
import {defineLocaleResourceBundle} from 'sanity'

export const googleMapsInputResourceBundle = defineLocaleResourceBundle({
  locale: 'en-US',
  namespace: '@sanity/google-maps-input',
  resources: () => import('./resources'),
})
```

If you aim to add support for multiple locales, you should export an array of these bundles with different `locale` properties.

The `resources` key is a function that resolves to an object of resources, which are the files containing your translated strings - this allows for only loading the namespace and locale combination if the user has chosen the given locale and is currently using the plugin that depends on it.

### The resources file

The `resources` file should have a default export that exposes an object of key-value pairs. The keys should be identical for each supported locale, while the translated strings are kept in values. E.g.:

```tsx
export default {
  /** --- PUBLISH ACTION --- */
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operation not ready',

  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publish',

  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publishing…',

  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Published',

  /** Label for the button to rev up the engine of your Tardis.*/
	'action.time-travel': 'Allons-y!'
}
```

### Naming conventions for resource keys

While you are technically free to name your keys however you like, we do have a few recommendations to keep everything consistent and easy to reason about:

- Keys should be in lowercase and kebab-case - no camelCase!
- Keys are namespaced, so you don’t need to worry about conflicts outside of your plugin.
- Put a comment on top of each key explaining what it does/what it means. Helps translating the key, both for humans and/or an AI.
- Use separate keys for aria labels, suffixed with `-aria-label`.

### Registering the resource bundle

In your `definePlugin` call, include an `i18n.bundles` property that points to your resource bundles:

```tsx
import {definePlugin} from 'sanity'
import {mySwedishBundle, myNorwegianBundle} from './i18n'

export const myPlugin = definePlugin(() => ({
  // ...rest of plugin config
  i18n: {
    bundles: [mySwedishBundle, myNorwegianBundle],
  },
}))
```

## Translating the user interface

The workhorse of the i18n toolkit is the `useTranslation` hook. Initialize it with your plugin namespace and use it to retrieve localized string values in your plugin user interface.

### Basic translation

```tsx
import {useTranslation} from 'sanity'
import {travelInTimeAndSpace} from 'tardis'

function MyComponent() {
  // Argument is the locale namespace - if omitted, it will use the `studio`
  // namespace, which is probably not what you want. Specifying a namespace
	// might become a requirement in the future. For now it's just good practice.
  const {t} = useTranslation('myPlugin')

  return <button onClick={travelInTimeAndSpace}>{t('action.time-travel')}</button>
}
```

### Interpolation

Interpolation is how you dynamically integrate variable data, like perhaps a username or file type, into translated strings. Surrounding a term with a double set of curly braces will mark it as a `{{placeholder}}` for interpolation. You’d then supply the term to be interpolated as a second argument to the `useTranslation` function.

```tsx
// resources.ts
export default {
  // ...
  'greetings.my-name-is': 'My name is {{userName}}'
}

// MyComponent.tsx
function MyComponent() {
  const {t} = useTranslation('myPlugin')
  return <div>{t('greetings.my-name-is', {userName: 'Kokos'})}</div>
}
```

This object can take any number of key:value-pairs, allowing for quite complex string-crafting.

> \[!TIP]
> Protip
> Note that values passed for interpolation should generally never be language-specific terms. For instance, sending `Image` or `File` to a message that reads `{{assetType}} not found` will not work in other languages, i.e. `Kunne ikke finne Image` is not valid Norwegian. See the section below titled [Context](https://www.sanity.io/docs/internationalizing-plugins?skipCdn=true#bb5f1b7d0720) for more info.

### Pluralization/counts

That second argument object to the `useTranslation` hook is no one-trick-pony. In addition to accepting interpolation variables, passing a `count` parameter to the `t` function will allow it to be pluralized:

```tsx
// resources.ts
export default {
  'search.result-summary_zero': 'Nothing matched your query',
  'search.result-summary_one': 'Found one match for your query',
  'search.result-summary_other': 'Found {{count}} matches for your query',
}

// MyComponent.tsx
function MyComponent() {
  const {t} = useTranslation('myPlugin')
	// ⬇ returns 'Found 4 matches for your query
  return <div>{t('search.result-summary', {count: 4})}</div>
}

Note that the underscore works as a delimiter for matching terms. We’ll see the same pattern when working with variants in the next section. For more information, consult the [i18next documentation](https://www.i18next.com/translation-function/plurals).
```

### Context

Similarly to the count feature, the context feature allows you to create several variants of a translated term. Pass a string to the `context` parameter, and it will be matched against the underscore-delimited suffix of the keys:

```tsx
// resources.ts
export default {
  // ...
  'error.asset-not-found_image': 'Image not found',
  'error.asset-not-found_file': 'File not found',
  // Fallback in case context cannot be found:
  'error.asset-not-found': 'Asset not found',
}

// MyComponent.tsx
function MyComponent(props) {
  const {t} = useTranslation('myPlugin')
	// ⬇ returns either 'file' or 'image' depending on the assets type
  const assetType = props.document._type === 'sanity.imageAsset' ? 'image' : 'file'1
  return <div>{t('error.asset-not-found', {context: assetType})}</div>
}
```

### Using React components as part of strings

In certain cases, you may need to use a component as part of the string. For instance, formatting/highlighting a part to indicate that it is user input, or showing a localized timestamp with an aria-label and a computer-readable ISO-timestamp attached to it.

For this, you can use the `Translate` component. Note that it is heavier to execute and should therefore only be used when necessary.

```tsx
// resources.ts
export default {
  'event-listing.summary': '{{host}} is organizing <Emphasis>{{name}}</Emphasis> at <Location/>, <Time />'
}

// EventListing.tsx
import {useRelativeTime, Translate} from 'sanity'

function EventListing(event) {
  const {t} = useTranslation('myPlugin')
  const time = useRelativeTime(event.isoTime)
  return (
		<Translate
		  t={t}
	    i18nKey="event-listing.summary"
      values={{host: event.host, name: event.name}}
	    components={{
			Time: () => <time dateTime={event.isoTime}>{time}</time>,
        Location: () => <a href={event.location.url}>{event.location.name}</a>,
	      Emphasis: ({children}) => <em>{children}</em>
	    }}
	  />
  )
}
```

> \[!WARNING]
> Gotcha
> The tags in `components` can only receive a single prop: `children` - all other props should be passed to the Translate-component when defining it. This helps minimize the parsing logic, as well as keeping it safer in terms of injections.

## I18n outside of React

The available and chosen languages are currently resolved as part of the *workspace matcher*, which means in some areas of the Studio user interface, i18n is not yet supported.

When you need to use i18n outside of React, such as in validation or structure definitions, we pass an `i18n` ”source” through context, which has a `t` function available for use. If you encounter areas that do not have access to this context where you would need it, please let us know so we can find a suitable workaround or find a way to pass it down.

```jsx
defineField({
  type: 'string',
  name: 'Model',
  validation: (Rule) =>
    Rule.custom((value, context) => {
      if (!value || !value.startsWith('Model ')) {
        return context.i18n.t('some-namespace:some-error-message', {
          modelValue: value,
        })
      }
      return true
    }),
})
```

### Localizing validation messages directly in your schema

It’s worth noting that you can also add localized strings directly in the schema if you know what languages should be supported at authoring time.

```jsx
import {defineType, defineField} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  type: 'document',
  fields: [
    defineField({
		name: 'photos',
		type: 'array',
		of: [{type: 'image'}],
		// The parameters here have to be documented
		validation: Rule => Rule.required().min(4).max(100).error({
			'en-US': 'Needs at least {{min}}, at most {{max}} items',
			'no-NB': 'Kan ikke ha flere enn {{max}}, og ikke færre enn {{min}}'
		})
    }),
  ]
})
```

## Hooks

We are working on exposing more hooks, and some of these might change names. Currently they are

- [useTranslation](https://www.sanity.io/docs/reference/api/sanity/useTranslation) - described above in some detail
- [useCurrentLocale](https://www.sanity.io/docs/reference/api/sanity/useCurrentLocale) - returns a `Locale`, which contains the locale `id` and `title`. Useful if you want to send this as part of a request to a server or something to localize the response. Also, for passing into the `Intl.X` APIs
- [useListFormat](https://www.sanity.io/docs/reference/api/sanity/useListFormat) - provides cached access to `Intl.ListFormat` instances based on the passed options and the current locale.
- [useNumberFormat](https://www.sanity.io/docs/reference/api/sanity/useNumberFormat) - provides cached access to `Intl.NumberFormat` instances based on the passed options and the current locale.
- [useFormattedDuration](https://www.sanity.io/docs/reference/api/sanity/useFormattedDuration) - not strictly an i18n API, but is localized. Give it a duration in milliseconds and it will format it with localized units.

### Debugging

If you want to see which parts of the user interface are localized and which are not, you can run the Studio with `SANITY_STUDIO_DEBUG_I18N=triangles npm run dev`. In this mode all strings that have been localized will be framed by little ◤ “Triangles” ◢, and your console will have all sorts of useful information logged to help you locate missing or incorrect translations.
