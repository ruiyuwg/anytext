# Localizing Sanity Studio

## Studio UI Localization

You can install language plugins that change the Sanity Studio interface to your preferred language. This improves accessibility and user-friendliness and is sometimes a requirement for organizations who wish to adopt Sanity as their content platform.

> \[!NOTE]
> Localizing UI vs localizing content
> This article is about the language of the Studio user interface. Visit [this article](https://www.sanity.io/docs/studio/localization) to find documentation on different languages in the *content* you manage from Sanity Studio.

Languages for the Sanity Studio interface are available as plugins. All available languages can be found in the [sanity-io/locales](https://github.com/sanity-io/locales) repository on GitHub. This repository is regularly updated through artificial intelligence (AI) and manual reviews by our dedicated maintainers, who diligently assess contributions from AI and humans. You can also add project-specific localization and local overrides using the `i18n.bundles` entry-point in the Studio configuration.

The primary official language of Sanity Studio remains American English. However, we encourage and welcome contributions to our community-supported repository. There's a high likelihood your preferred language is already available, and if not, you can request its inclusion. Please visit the repository for more details on [contributing](https://github.com/sanity-io/locales/blob/main/CONTRIBUTING.md#getting-started) or [requesting a language](https://github.com/sanity-io/locales/issues/new?assignees=\&labels=\&template=new-locale-request.md\&title=Locale+request%3A+).

### How to install a language for your Studio interface

Languages are installed as plugins using [npm](https://npmjs.com) or your preferred package manager. To install, for instance, German, run the following command from the root of your studio project:

```bash
npm install @sanity/locale-de-de
```

Once installed, add the plugin to the `plugins` array in your studio configuration:

```jsx
import {deDELocale} from '@sanity/locale-de-de'

export default defineConfig({
  // ...
  plugins: [
		// ...
    // Add German Studio interface language
    deDELocale()
  ],
})
```

Your Studio interface language will now be German.

![Sanity Studio localized in German](https://cdn.sanity.io/images/3do82whm/next/97c24cf8634c10df84b55b9d7165f90599938012-2844x1624.png)

### Overriding translated strings

You can override language strings without going through the process of making an alternate language plugin. This is great if you simply want to change the label of a button in your Studio. Or perhaps you have installed an incomplete language plugin and need to supply some missing strings. In these scenarios, you can use the `defineLocaleResourceBundle` API.

In the following example, the AI translation of “Inspect” into Norwegian is wrong and missed by the human maintainer. As a local fix, we can define a ”locale resource bundle” and add this to the `i18n.bundles` array in the Studio config. The easiest way to find the namespace and key you wish to override is to search for your string in the GitHub [sanity-io/locales](https://github.com/sanity-io/locales) repository and note which file it is stored in, which tells you the namespace, and the key itself.

![Sanity Studio with the document inspector modal open, showing a couple of mistranslated strings](https://cdn.sanity.io/images/3do82whm/next/7369bff5667e9f0259834112238b606c6893f2c0-914x768.png)

```jsx
// sanity.config.ts
import {defineConfig, defineLocaleResourceBundle} from 'sanity'
import {nnNOLocale} from '@sanity/locale-nn-no'

const myCustomOverrides = defineLocaleResourceBundle({
  // make sure the `locale` language code corresponds to the one you want to override
  locale: 'nn-NO',
  namespace: 'structure',
  resources: {
    'document-inspector.menu-item.title': 'Inspiser',
    'document-inspector.dialog.title': 'Inspiserer <DocumentTitle/>',
  },
})

export default defineConfig({
  // ...
  plugins: [
    nnNOLocale(),
  ]
  i18n: {
    bundles: [myCustomOverrides]
  }
})

```

![Sanity Studio with the document inspector modal open, now with correct translations](https://cdn.sanity.io/images/3do82whm/next/198682b2d2427df87e7f1c29f65510432807d20d-914x768.png)

## How to contribute to Studio UI Localization

We're always looking to make Sanity Studio more accessible and user-friendly, and your contributions can make a big difference. Whether you're a seasoned developer or just starting, helping with translations is a fantastic way to get involved.

If you're fluent in a language other than English, we'd love your help reviewing and improving translations. Your expertise can greatly enhance the experience for users worldwide.

### Requesting a new language

You can request the addition of your preferred language by using the issue template provided [here](https://github.com/sanity-io/locales/issues/new?assignees=\&labels=\&template=new-locale-request.md\&title=Locale+request%3A+). Sanity will bootstrap the new locale with AI and community members can then submit suggested improvements. Language maintainers help in reviewing both AI and human contributions.

### Suggesting and reviewing improvements

Visit our [sanity-io/locales](https://github.com/sanity-io/locales) repository and try out a locale you are fluent in. Submit a PR with your suggested improvements following the [contributing guide](https://github.com/sanity-io/locales/blob/main/CONTRIBUTING.md#getting-started). You can also see if there are open PRs involving languages you are fluent in and help review them.

### Quick fix: Use the GitHub built-in editor

If you want to add or change a translated string quickly, the easiest way may be to use GitHub’s built-in editing feature. You can watch the video below to learn how.

![Using the built-in Github editor to submit a quick fix to a localization resource](https://youtu.be/eDCLC1vN4ng)

## Become a language maintainer

Interested in playing a bigger role? You can ask to be added as a maintainer to oversee translations for specific languages, where you will be asked to help review PRs that involve your language. See the [sanity-io/locales README](https://github.com/sanity-io/locales#readme) for more.

Sanity will create and keep the language updated using AI. Human contributors such as yourself help maintain the languages by submitting suggested improvements and helping review pull requests from AI and other contributors.

Your contributions improve Sanity Studio and bring together a diverse and global community of users. We appreciate every effort, big or small, and we can't wait to see what you bring to the table!
