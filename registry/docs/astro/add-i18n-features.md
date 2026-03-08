# Add i18n features

> Use dynamic routing and content collections to add internationalization support to your Astro site.

In this recipe, you will learn how to use content collections and dynamic routing to build your own internationalization (i18n) solution and serve your content in different languages.

Tip

In v4.0, Astro added built-in support for i18n routing that allows you to configure default and supported languages and includes valuable helper functions to assist you in serving an international audience. If you want to use this instead, see our [internationalization guide](/en/guides/internationalization/) to learn about these features.

This example serves each language at its own subpath, e.g. `example.com/en/blog` for English and `example.com/fr/blog` for French.

If you prefer the default language to not be visible in the URL unlike other languages, there are [instructions to hide the default language](/en/recipes/i18n/#hide-default-language-in-the-url) below.

See the [resources section](#resources) for external links to related topics such as right-to-left (RTL) styling and choosing language tags.

## Recipe

[Section titled “Recipe”](#recipe)

### Set up pages for each language

[Section titled “Set up pages for each language”](#set-up-pages-for-each-language)

1. Create a directory for each language you want to support. For example, `en/` and `fr/` if you are supporting English and French:

   - src/

     - pages/

       - **en/**

         - about.astro
         - index.astro

       - **fr/**

         - about.astro
         - index.astro

       - index.astro

2. Set up `src/pages/index.astro` to redirect to your default language.

   - Static

     src/pages/index.astro

     ```astro
     ```

     This approach uses a [meta refresh](https://en.wikipedia.org/wiki/Meta_refresh) and will work however you deploy your site. Some static hosts also let you configure server redirects with a custom configuration file. See your deploy platform’s documentation for more details.

   - On demand

     If you are using an SSR adapter, you can use [`Astro.redirect`](/en/guides/routing/#dynamic-redirects) to redirect to the default language on the server.

     src/pages/index.astro

     ```astro
     ---
     return Astro.redirect('/en/');
     ---
     ```

### Use collections for translated content

[Section titled “Use collections for translated content”](#use-collections-for-translated-content)

1. Create a folder in `src/content/` for each type of content you want to include and add subdirectories for each supported language. For example, to support English and French blog posts:

   - src/

     - content/

       - blog/

         - **en/** Blog posts in English

           - post-1.md
           - post-2.md

         - **fr/** Blog posts in French

           - post-1.md
           - post-2.md

2. Create a `src/content.config.ts` file and export a collection for each type of content.

   src/content.config.ts

   ```ts
   import { defineCollection } from 'astro:content';
   import { z } from 'astro/zod';


   const blogCollection = defineCollection({
     schema: z.object({
       title: z.string(),
       author: z.string(),
       date: z.date()
     })
   });


   export const collections = {
     'blog': blogCollection
   };
   ```

   Read more about [Content Collections](/en/guides/content-collections/).

3. Use [dynamic routes](/en/guides/routing/#dynamic-routes) to fetch and render content based on a `lang` and a `slug` parameter.

   - Static

     In static rendering mode, use `getStaticPaths` to map each content entry to a page:

     src/pages/\[lang]/blog/\[...slug].astro

     ```astro
     ---
     import { getCollection, render } from 'astro:content';


     export async function getStaticPaths() {
       const pages = await getCollection('blog');


       const paths = pages.map(page => {
         const [lang, ...slug] = page.id.split('/');
         return { params: { lang, slug: slug.join('/') || undefined }, props: page };
       });


       return paths;
     }


     const { lang, slug } = Astro.params;
     const page = Astro.props;
     const formattedDate = page.data.date.toLocaleString(lang);
     const { Content } = await render(page);
     ---
     {page.data.title}
     by {page.data.author} • {formattedDate}

     ```

   - On demand

     In [SSR mode](/en/guides/on-demand-rendering/), fetch the requested entry directly:

     src/pages/\[lang]/blog/\[...slug].astro

     ```astro
     ---
     import { getEntry, render } from 'astro:content';


     const { lang, slug } = Astro.params;
     const page = await getEntry('blog', `${lang}/${slug}`);


     if (!page) {
       return Astro.redirect('/404');
     }


     const formattedDate = page.data.date.toLocaleString(lang);
     const { Content, headings } = await render(page);
     ---
     {page.data.title}
     by {page.data.author} • {formattedDate}

     ```

   Read more about [dynamic routing](/en/guides/routing/#dynamic-routes).

   Date formatting

   The example above uses the built-in [`toLocaleString()` date-formatting method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) to create a human-readable string from the frontmatter date. This ensures the date and time are formatted to match the user’s language.

### Translate UI strings

[Section titled “Translate UI strings”](#translate-ui-strings)

Create dictionaries of terms to translate the labels for UI elements around your site. This allows your visitors to experience your site fully in their language.

1. Create a `src/i18n/ui.ts` file to store your translation strings:

   src/i18n/ui.ts

   ```ts
   export const languages = {
     en: 'English',
     fr: 'Français',
   };


   export const defaultLang = 'en';


   export const ui = {
     en: {
       'nav.home': 'Home',
       'nav.about': 'About',
       'nav.twitter': 'Twitter',
     },
     fr: {
       'nav.home': 'Accueil',
       'nav.about': 'À propos',
     },
   } as const;
   ```

2. Create two helper functions: one to detect the page language based on the current URL, and one to get translations strings for different parts of the UI in `src/i18n/utils.ts`:

   src/i18n/utils.ts

   ```js
   import { ui, defaultLang } from './ui';


   export function getLangFromUrl(url: URL) {
     const [, lang] = url.pathname.split('/');
     if (lang in ui) return lang as keyof typeof ui;
     return defaultLang;
   }


   export function useTranslations(lang: keyof typeof ui) {
     return function t(key: keyof typeof ui[typeof defaultLang]) {
       return ui[lang][key] || ui[defaultLang][key];
     }
   }
   ```

   Did you notice?

   In step 1, the `nav.twitter` string was not translated to French. You may not want every term translated, such as proper names or common industry terms. The `useTranslations` helper will return the default language’s value if a key is not translated. In this example, French users will also see “Twitter” in the nav bar.

3. Import the helpers where needed and use them to choose the UI string that corresponds to the current language. For example, a nav component might look like:

   src/components/Nav.astro

   ```astro
   ---
   import { getLangFromUrl, useTranslations } from '../i18n/utils';


   const lang = getLangFromUrl(Astro.url);
   const t = useTranslations(lang);
   ---

       
           
             {t('nav.home')}
           
       
       
           
             {t('nav.about')}
           
       
       
           
             {t('nav.twitter')}
           
       

   ```

4. Each page must have a `lang` attribute on the `<html>` element that matches the language on the page. In this example, a [reusable layout](/en/basics/layouts/) extracts the language from the current route:

   src/layouts/Base.astro

   ```astro
   ---
   import { getLangFromUrl } from '../i18n/utils';


   const lang = getLangFromUrl(Astro.url);
   ---

       
           
           
           
           Astro
       
       
           
       

   ```

   You can then use this base layout to ensure that pages use the correct `lang` attribute automatically.

   src/pages/en/about.astro

   ```astro
   ---
   import Base from '../../layouts/Base.astro';
   ---

       About me
       ...

   ```

### Let users switch between languages

[Section titled “Let users switch between languages”](#let-users-switch-between-languages)

Create links to the different languages you support so users can choose the language they want to read your site in.

1. Create a component to show a link for each language:

   src/components/LanguagePicker.astro

   ```astro
   ---
   import { languages } from '../i18n/ui';
   ---

     {Object.entries(languages).map(([lang, label]) => (
       
         {label}
       
     ))}

   ```

2. Add `<LanguagePicker />` to your site so it is shown on every page. The example below adds it to the site footer in a base layout:

   src/layouts/Base.astro

   ```diff
   ---
   +import LanguagePicker from '../components/LanguagePicker.astro';
   import { getLangFromUrl } from '../i18n/utils';


   const lang = getLangFromUrl(Astro.url);
   ---

       
           
           
           
           Astro
       
       
           
           
             +
           
       

   ```

### Hide default language in the URL

[Section titled “Hide default language in the URL”](#hide-default-language-in-the-url)

1. Create a directory for each language except the default language. For example, store your default language pages directly in `pages/`, and your translated pages in `fr/`:

   - src/

     - pages/

       - about.astro

       - index.astro

       - **fr/**

         - about.astro
         - index.astro

2. Add another line to the `src/i18n/ui.ts` file to toggle the feature:

   src/i18n/ui.ts

   ```ts
   export const showDefaultLang = false;
   ```

3. Add a helper function to `src/i18n/utils.ts`, to translate paths based on the current language:

   src/i18n/utils.ts

   ```js
   import { ui, defaultLang, showDefaultLang } from './ui';


   export function useTranslatedPath(lang: keyof typeof ui) {
     return function translatePath(path: string, l: string = lang) {
       return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
     }
   }
   ```

4. Import the helper where needed. For example, a `nav` component might look like:

   src/components/Nav.astro

   ```astro
   ---
   import { getLangFromUrl, useTranslations, useTranslatedPath } from '../i18n/utils';


   const lang = getLangFromUrl(Astro.url);
   const t = useTranslations(lang);
   const translatePath = useTranslatedPath(lang);
   ---

       
           
             {t('nav.home')}
           
       
       
           
             {t('nav.about')}
           
       
       
           
             {t('nav.twitter')}
           
       

   ```

5. The helper function can also be used to translate paths for a specific language. For example, when users switch between languages:

   src/components/LanguagePicker.astro

   ```astro
   ---
   import { languages } from '../i18n/ui';
   import { getLangFromUrl, useTranslatedPath } from '../i18n/utils';


   const lang = getLangFromUrl(Astro.url);
   const translatePath = useTranslatedPath(lang);
   ---

     {Object.entries(languages).map(([lang, label]) => (
       
         {label}
       
     ))}

   ```

### Translate Routes

[Section titled “Translate Routes”](#translate-routes)

Translate the routes of your pages for each language.

1. Add route mappings to `src/i18n/ui.ts`:

   src/i18n/ui.ts

   ```ts
   export const routes = {
     de: {
       'services': 'leistungen',
     },
     fr: {
       'services': 'prestations-de-service',
     },
   }
   ```

2. Update the `useTranslatedPath` helper function in `src/i18n/utils.ts` to add router translation logic.

   src/i18n/utils.ts

   ```js
   import { ui, defaultLang, showDefaultLang, routes } from './ui';


   export function useTranslatedPath(lang: keyof typeof ui) {
     return function translatePath(path: string, l: string = lang) {
       const pathName = path.replaceAll('/', '')
       const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined
       const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path


       return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
     }
   }
   ```

3. Create a helper function to get the route, if it exists based on the current URL, in `src/i18n/utils.ts`:

   src/i18n/utils.ts

   ```js
   import { ui, defaultLang, showDefaultLang, routes } from './ui';


   export function getRouteFromUrl(url: URL): string | undefined {
     const pathname = new URL(url).pathname;
     const parts = pathname?.split('/');
     const path = parts.pop() || parts.pop();


     if (path === undefined) {
       return undefined;
     }


     const currentLang = getLangFromUrl(url);


     if (defaultLang === currentLang) {
       const route = Object.values(routes)[0];
       return route[path] !== undefined ? route[path] : undefined;
     }


     const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined  => {
         return Object.keys(obj).find((key) => obj[key] === value);
     }


     const reversedKey = getKeyByValue(routes[currentLang], path);


     if (reversedKey !== undefined) {
       return reversedKey;
     }


     return undefined;
   }
   ```

4. The helper function can be used to get a translated route. For example, when no translated route is defined, the user will be redirected to the home page:

   src/components/LanguagePicker.astro

   ```astro
   ---
   import { languages } from '../i18n/ui';
   import { getRouteFromUrl, useTranslatedPath } from '../i18n/utils';


   const route = getRouteFromUrl(Astro.url);
   ---

     {Object.entries(languages).map(([lang, label]) => {
       const translatePath = useTranslatedPath(lang);
       return (
         
           {label}
         
       )
     })}

   ```

## Resources

[Section titled “Resources”](#resources)

- [Choosing a Language Tag](https://www.w3.org/International/questions/qa-choosing-language-tags)
- [Right-to-left (RTL) Styling 101](https://rtlstyling.com/)

## Community libraries

[Section titled “Community libraries”](#community-libraries)

Find [community-built i18n utilities](https://astro.build/integrations/?search=i18n) that you can add to your Astro project in our integrations directory.
