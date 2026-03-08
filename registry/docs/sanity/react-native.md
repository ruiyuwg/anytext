# React Native

Following this guide will enable you to implement\*\*:\*\*

- **Live preview**: See draft content updates rendered in the embedded front end in real-time.
- **Click-to-edit**: Interactive overlays for the embedded front end application that help content creators find and edit the right fields.
- **Page building**: Advanced capabilities for adding, moving, and removing content sections, directly from your embedded front end.
- **Preview sharing**: A way for content creators to share a preview of draft content with others.
- **Locations**: Shortcuts to open Presentation (the embedded front end view) for a document directly from where the content is defined the Structure tool.

Your deployed web build of the application will be loaded loaded into your deployed Sanity Studio via the Presentation plugin (and you can do the same for locally running versions of your app and your Studio, which streamlines development and debugging).

## Prerequisites

- A React Native application. Note that though the Expo framework is not required, this guide and our starter repo use it because it offers useful tools for local development, creating builds for web/native/simulators, and a convenient router package. If you're building a new React Native application and you want to use a different framework, there will be some small differences (noted in this guide where possible). However, if you want to match/follow the examples exactly, you can either: - Clone and start with our [React Native Starter repo](https://github.com/sanity-io/visual-editor-react-native)\*, \*which is built on Expo \*(see the "React Native Starter" section)

- \*OR

- Follow [this Expo documentation](https://docs.expo.dev/tutorial/create-your-first-app/) to set up a new React Native/Expo project.

- A Sanity project with a [Sanity-hosted or self-hosted Sanity studio](https://www.sanity.io/docs/studio). - *(If you use the "React Native Starter" repo, see the "Dependencies" subsection of the "React Native Starter" section for a Studio setup that matches that starter).*

Note that because Presentation enables Visual Editing by loading your React Native application as a web build into the browser-based Sanity Studio, much of the code for enabling Visual Editing only runs when you're in the browser and in Presentation mode.

The examples below (and the "React Native Starter" repo) take this into account using an `isWeb` util and a Sanity-provided util called `isMaybePresentation.`

**Content Security Policy**

You are not required to use EAS Hosting. However, certain services will prevent deployed web apps that they host from being loaded in an iframe on a different hostname.

The Presentation tool opens your deployed web app in an iframe (and since that happens in your Sanity Studio, the hostname is different from the host of your web app). If this is prohibited by default by the hosting service, you may be required to customize the Content Security Policy header used by the web app.

> \[!WARNING]
> Hosting Services and the Content Security Policy Header
> **Before choosing a hosting service, verify that either:**
> The hosting provider does not prevent its hosted apps from being opened in an iframe on a different host, or the provider allows customization of the CSP header.

A valid example Content Security Policy header is:
`"frame-ancestors 'self' http://localhost:8081 https://www.sanity.io <INSERT WEB BUILD DEPLOYED URL HERE> <INSERT DEPLOYED SANITY STUDIO URL HERE>"`

In this example, the URLs (in order) are for:

- The localhost/port combination where the web build server for the React Native app runs in local development.
- The deployed web build of your React Native app.
- The deployed instance of your Sanity Studio.
- The Sanity Dashboard (the centralized "content operating system" web application where deployed Studios and Sanity SDK applications are "installed" in a single organization-level view. [Learn more about the Dashboard](https://www.sanity.io/docs/dashboard)).

## React Native Starter Repo

If you prefer to start from a working example, remove the demo pages ("movies" and "people"), and add your own code, we have created a starting point repo for a React Native application (built on Expo) which is ready to be loaded into the Presentation tool out of the box. By default its native builds are created via the Expo build servers and its web builds are built on and hosted on Expo Application Services (but you are free to refactor this to use any hosting service which either does not prevent cross-origin loading of iframes or which allows you to set a custom "Content Security Policy" header, see above).

This starter application includes:

- The required code snippets for Visual Editing
- Example pages ("Movies", "People", etc) with layouts and routing already set up.
- Utility components for building your own views.

The repo is fully open source - it is [available on Github](https://github.com/sanity-io/visual-editor-react-native) and has a comprehensive Readme for development and deployment.

The "Implementation in a New or Existing React Native App" section explains how the Presentation mode and its features are implemented (both in the starter repo and the examples in this guide),\*\* so reading the entire guide is helpful even if you use the starter repo!\*\*

#### **Dependencies**

**Sanity Project/Studio**

As mentioned in the repo's Readme, the starter repo works together with your own Sanity project/Sanity Studio.

**If you want to see the Movies/People pages/components load actual data in the React Native app,** **your Studio will need to be created with the content types and test data from the "movies" Sanity Studio starter template**.

We recommend this approach because it lets you play with a functioning version of the presentation features in your dev environment to better understand how those features work and how they correspond to the code snippets that enable them (`useQuery`, `useLiveMode`, `dataSet`, etc -- all discussed in this documentation, see below).

To create a Sanity project/studio which includes the "movies" starter's content types/data (you can modify/remove them later):

1. Run `sanity init` in some repo/folder (easiest/cleanest option is a separate repo, since Sanity Studio is built on vanilla React, not React Native).
2. When that init script asks you to choose a project template, choose "Movie project (schema + sample data)"
3. When the init script asks "Add a sampling of sci-fi movies to your dataset on the hosted backend?", choose "yes".

Otherwise, if you feel comfortable with all aspects of implementing the Visual Editing features in your own components and want to rip out the movies/people code immediately, you may initialize your Sanity project/studio whatever way you prefer.

See [the CLI Init command docs](https://www.sanity.io/docs/cli-reference/init) for more info on project initialization and templates.

**Presentation Plugin**

You must add configuration for the [Sanity Presentation Plugin](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool) to your Sanity Studio which matches the setup for your React Native application *(see "Sanity Studio Setup" section below)*

## Sanity Studio Setup

Before working on setting up Visual Editing in the React Native app, we need to set up the Presentation plugin in your Sanity Studio.

First, include the library in your studio repo:

```
pnpm install sanity@latest
// or install with npm or yarn
```

You will now have access to the `presentationTool` plugin from `sanity/presentation`. As shown below, import it, add it to your `plugins` array, and configure  `previewUrl` and `allowedOrigins` .

**sanity.config.js**

```javascript
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  ...rest of studio config,
  plugins: [
    ...other plugins,
    presentationTool({
      allowOrigins: [
        process.env.SANITY_STUDIO_REACT_NATIVE_APP_HOST,
      ],
      previewUrl: {
        initial: process.env.SANITY_STUDIO_REACT_NATIVE_APP_HOST
      }
    })
  ],
})
```

We recommend using environment variables loaded via a `.env` file to support development and production environments. In the code block above, `SANITY_STUDIO_REACT_NATIVE_APP_HOST` is the hostname of your front end React Native application that is going to be loaded into presentation mode (either running locally or deployed, depending on the env in question).

Note that if you are using the "React Native Starter Repo", you should add `resolve: locationResolver` to the presentationTool config (in the main config object) where `locationResolver` is:

**locationResolver.js**

```javascript
export const locationResolver = {locations: {
  // Resolve locations using values from the matched document
  movie: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: 'Movies Directory',
          href: '/movies',
        },
        {
          title: `Movie Page: ${doc?.title}`,
          href: `/movie/${doc?.slug}`,
        },
      ],
    }),
  }),
  person: defineLocations({
    select: {
      name: 'name',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: 'People Directory',
          href: '/people',
        },
        {
          title: `Person Page: ${doc?.name}`,
          href: `/person/${doc?.slug}`,
        },
      ],
    }),
  }),
}}
```

This adds the functionality where "location" links are added to the top of each document in the Studio Structure view. Each of these links for a given document opens the Presentation tool and automatically loads the page where that document is used, directly in that embedded front end.

The locations are defined by the resolver function (e.g. each movie is used both in the Movies Directory at `/movies` and in its individual movie page at `/movie/:movie_slug)`.

You can add additional location resolvers for your other content types (and/or remove the movies/people location resolvers if your are no longer using those content types).

See the *"map content to front-end routes with locations resolver function"* section in the [Presentation Tool docs](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool) for examples and more info.

> \[!WARNING]
> Locations Resolver in Deployed Projects
> The locations resolver can direct you to a non-root path in your embedded front end application and sometimes these routes are dynamic from the point of view of that application. For example, for the movie document Alien in the starter repo/above example, the locations link will be `/movie/alien` and the corresponding dynamic route component is `[movie_slug].tsx`.
> Any routes used in a locations resolver must be accessible in your deployed web build via direct URL so that they can open in the Presentation tool.
> You can test if a route is by opening a new browser tab and putting the route directly in the URL bar, (as opposed than going to the home page of your application and navigating via UX elements).
> Depending on your build framework/hosting platform some additional configuration, dynamic routes may not be findable out of the box. With the combination of tools used by the starter repo, Expo for creating the web build and Vercel for hosting it, there was no way for Vercel to know that `/movie/alien` should load the `[movie_slug]` code from the Expo build.
> There are two main ways you could solve this problem for a client-only application (server/client combinations might have other steps):
>
> 1. Use your build framework to generate a single-page application (SPA) with and then configure your hosting framework to rewrite/redirect ALL routes to the single /`index.html` of that SPA.
> 2. Use your build framework to generate a static build and then configure your hosting framework to rewrite any dynamic routes to the index page for the page component that loads the dynamic route. This is what we do in the starter repo, so we end up with a folder structure in our Expo build that contains `/movie/[movie_slug].html` and we add a rewrite in our vercel.json like `{ "source": "/movie/:movie_slug", "destination": "/movie/[movie_slug].html"}`. (The same configuration is set for the dynamic `person/:person_slug` route/code.)

### Add CORS Origins

Because our React Native application (and our Sanity Studio) will make client-side requests to the Sanity Studio across domains, their URLs must be [added as valid CORS origins](https://www.sanity.io/docs/content-lake/cors).

This can be done inside [sanity.io/manage](https://sanity.io/manage). Use the following steps for your React Native front end application and then repeat for your Sanity Studio.

1. Navigate to the API tab, then add select **"Add CORS origin"**.1. For local development origins, enter `http://localhost:PORT` where `PORT` is the port number that is running the application in question.

2. For deployed origins, add the full hostname of the deployed React Native application or Sanity Studio.

3. Select **Save**.

> \[!TIP]
> What about "Allow credentials"?
> If the calling origin needs to be able to send Sanity tokens, select ”Allow credentials.” In most cases, this is not necessary for front-end applications, but is necessary for Sanity Studios. However, if (for example) your front end application hits a back-end API to trade user login credentials for a Sanity token (to query a private dataset from the front end), you will need to Allow Credentials. Reverse proxy servers which perform the queries themselves on behalf of the front end do NOT need any CORS configuration as they do not run in the browser.
> See the [CORS documentation](https://www.sanity.io/docs/content-lake/cors) for more info.

Only set up CORS origins for URLs where you control the code. Remember to perform the steps for each local development origin and each deployed origin for your front ends and your Sanity studio. One caveat is that deploying a Sanity-hosted studio will add the CORS config for that studio automatically. If you self-host the studio, you will need to add it yourself.

### A Note About Using This Guide

> \[!WARNING]
> For the React Native Starter Repo -- Code that's done vs to-do
> The rest of this guide provides and explains all the code snippets required for enabling Visual Editing in your application.
> The snippets that do the application-wide setup/enablement of Visual Editing are \*\*already implemented \*\* in the React Native Starter Repo, so you will not need to write/modify those.
> **BUT** in order to replace the "Movies" and "People" pages/components with your own application content, you will need to add the component-specific functionality that is used for data fetching to your own code (and possibly also the code for setting data attributes on your components, which enable certain optional features).
> The code for data fetching and data attributes are discussed further in the "Query data from Sanity and render a page" section below.

## Implementation in a New or Existing React Native App:

### Install dependencies

Install the dependencies that will provide your application with data fetching and Visual Editing capabilities.

```bash
npm install @sanity/client @sanity/react-loader @sanity/visual-editing @sanity/presentation-comlink
```

### Set environment variables

Create a `.env.local` in your application’s root directory to provide the configuration for connecting to your Sanity data.

For platform-native builds, if you are using Expo as your build service, you will also need to create the variables in the Expo Environment Variables console for your project. For other build services, follow the appropriate environment variable specification process outlined in the documentation of the service in question.

For the web build, if you are using a hosting service where env variables are created in a browser UI (e.g. Expo hosting, Vercel, etc), create the variables in that UI. Other hosting services may just expect a .env file in your codebase or you might set the vars in a CI/CD pipeline, etc—this step is specific to your hosting implementation.

You can use [sanity.io/manage](https://sanity.io/manage) to find your project ID and dataset.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio).

*(The "EXPO\_PUBLIC" prefix can be abandoned if not using Expo and/or replaced with any required prefix for your build service).*

Define the following environment variables:

```bash
# .env.local or .env
EXPO_PUBLIC_SANITY_DATASET=Your dataset name
EXPO_PUBLIC_SANITY_PROJECT_ID=Your Sanity project ID
EXPO_PUBLIC_SANITY_STUDIO_URL=The URL of your Sanity Studio 
(running locally OR deployed, depending on env)

```

and import them into the runtime:

**constants.ts**

```
export const SANITY_PROJECT_ID: string = 
  process.env.EXPO_PUBLIC_SANITY_PROJECT_ID || ''; 
export const SANITY_DATASET: string = 
  process.env.EXPO_PUBLIC_SANITY_DATASET || '';
export const SANITY_STUDIO_URL:string = 
  process.env.EXPO_PUBLIC_SANITY_STUDIO_URL || '';
```

### Add a Preview Utilities file

The `isWeb` utility determines if you are in the native or web context.  We will add more utilities to this file later.

**/utils/preview.ts**

```
import { Platform } from "react-native";

export const isWeb = Platform.OS === 'web'
```

### Configure the Sanity Client

Create a Sanity client instance to handle fetching data from Content Lake.

The `stega` option enables automatic click-to-edit overlays for all text content in Presentation mode. You can read more about how `stega` works [in the docs](https://www.sanity.io/docs/visual-editing/stega).

**sanity/client.ts**

```tsx
import { SANITY_DATASET, SANITY_PROJECT_ID, SANITY_STUDIO_URL } 
  from "@/constants";
import { isWeb } from "@/utils/preview";
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    useCdn: true,
    apiVersion: '2025-05-30',
    stega: {
      enabled: !!isWeb,
      studioUrl: SANITY_STUDIO_URL
    }
  })
```

### Define the Sanity React Loader hooks for queries and live mode

You will fetch data in your pages/components (see below) with `useQuery` from the react-loader library. This handles querying your data when you are **NOT** in Presentation/Visual Editing mode, for example, in the actual React Native mobile app or in a web build loaded directly in a browser (rather than in Presentation mode in Sanity Studio).

When you enter Presentation mode in the Sanity Studio, the `useLiveMode` hook will take over the data hydration responsibilities.

\*\*We will see where/how to use these hooks in a moment, \*\*but for now we just create the query store and export the resulting hooks.

**hooks/useQueryStore**

```
// sanity.ts
import { createQueryStore } from '@sanity/react-loader';
import { client } from '../sanity/client';

const { useLiveMode, useQuery } = createQueryStore({ client, ssr:false })

export { useLiveMode, useQuery };

```

### Define the SanityVisualEditing component

The imported `enableVisualEditing` function from handles rendering overlays, enabling click to edit, and re-rendering elements in your application when you make content changes. Via its `history` and `refresh` properties, it also connects the URL bar of the presentation tool with the internal routing of the React Native app, keeping the two in sync.

As shown below, configure the `enableVisualEditing` function and wrap it in a parent `SanityVisualEditing` component (note that here and only here is where we call `useLiveMode`):

**app/components/SanityVisualEditing.tsx**

```tsx
import { useLiveMode } from '@/hooks/useQueryStore';
import { isWeb } from '@/utils/preview';
import { isMaybePresentation } from '@sanity/presentation-comlink';
import { enableVisualEditing } from '@sanity/visual-editing';
import { usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { client } from '../sanity/client';

// This component only has an effect in presentation mode on the web -- it provides clickable overlays of content that enable Visual Editing in the studio.
export default function SanityVisualEditing() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const disable = isWeb && isMaybePresentation() ? enableVisualEditing({
      history: {
        // Handle user changes to the expo router pathname (e.g. clicking a link in the app) by updating the URL bar
        subscribe: (navigate) => {
          console.log('NAVIGATION EVENT:', {navigate, pathname})
          // We navigate to Expo Router's current pathname.
          navigate({
            type: 'push',
            url: pathname,
          })

          // Return cleanup function
          return () => {}
        },
        // Handle user changes to the contents of the Presentation modeURL bar by calling expo router functions
        update: (u: any) => {
          console.log('URL UPDATE:', u)
          switch (u.type) {
            case 'push':
              return router.push(u.url)
            case 'pop':
              return router.back()
            case 'replace':
              return router.replace(u.url)
            default:
              throw new Error(`Unknown update type: ${u.type}`)
          }
        }
      },
      zIndex: 1000,
      // Handle the refresh button in the Presentation mode URL bar. (show spinner for 1 sec, refresh doesn't do anything for client-side apps)
      refresh: (payload) => {
        console.log('REFRESH EVENT: ', payload)
        const { source } = payload
        if(source === 'manual') {
          return new Promise(resolve => setTimeout(() => resolve(undefined), 1_000))
        } else {
          return false
        }
      },
    }) : () => null
    return () => disable()
  }, [pathname])

  if(isWeb && isMaybePresentation()) {
    useLiveMode({client })
  }

  return null
}


```

> \[!NOTE]
> If you do not use Expo Router
> In the code example above, we flush route changes that are made in the Presentation tool's URL bar from the Presentation tool to the Expo Router using the `update` handler inside of the `history` prop (so that the app routes to the new URL). This allows the React Native app to navigate from view to view in response to those URL bar changes.
> If you do not use Expo Router, replace the calls to `router.push`,  `router.back`, and `router.replace` with the corresponding function calls from your chosen navigation methodology (e.g. the methods exposed as part of React Navigation's `navigation` object).

### Render the SanityVisualEditing component

Add the `SanityVisualEditing` component to your root layout(s) outside of any "Stack" elements.

**app/layout**

```tsx
import { Stack } from 'expo-router';
// Example -- could be whatever context provider or parent component you want at the root. 
import SomeParent from "@/components/SomeParent"


export default function RootLayout() {
  return (
    <SomeParent>
      <Stack>
          <Stack.Screen name="(pages)" options={{ headerShown: false }} />
      </Stack>
      <SanityVisualEditing />
    </SomeParent>
  );
}

```

> \[!NOTE]
> If you do not use Expo Router
> If you don't use Expo Router and its `Stack` component, replace the Stack functionality in the code example below with your preferred view rendered (e.g. the `Stack` component from React Navigation's `createNativeStackNavigator` function)

### Query data from Sanity and render a page

With the components included and loaders set up, you can call `useQuery` with each page's query and render the data. For example:

**app/pages/\[page\_slug]**

```tsx
import { useQuery } from "@/hooks/useQueryStore";
import { useLocalSearchParams } from "expo-router";
import groq from "groq";
import { Text, View } from "react-native";

export default function SomePage() {
  const { page_slug } = useLocalSearchParams();
  const query = groq`*[_type == "some_type" && slug.current == $page_slug]{...}`;
  const { data } = useQuery(query, { page_slug });

  return (
    <View>
      {data?.map((document: YourDocumentType) => {
        const { _id, title } = document;
        return (
          <View key={_id}>
            <Text>{title}</Text>
          </View>
        );
      })}
    </View>
  );
}

```

### Click-to-Edit Overlays

#### Out of the Box

Enabling the `stega` option in your Sanity client config ensures that all text content will automatically have click-to-edit overlays. In this example, we configured stega to be `true` in our Sanity client (see above) when the runtime of our application is the web.

These overlays allow you to click on any component that renders a piece of Sanity content and automatically open that piece of content for editing in the visual editor's form sidebar.

Learn more about [Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays).

#### Data Attributes

To enable the same functionality for non-text fields (e.g. images), you can add a `data-sanity` attribute to the component that renders them.

To add a `data-sanity` attribute, we create it using a helper,  `createDataAttributeProp`, which is a React Native-specific helper that wraps for the Sanity `createDataAttribute` method, checking to ensure we are in the web app context and returning a prop that we can spread onto React Native components. Let's add this to our `/utils/preview.ts` file from earlier:

**/utils/preview.ts**

```
import { SANITY_DATASET, SANITY_PROJECT_ID, SANITY_STUDIO_URL } from '@/constants';
import { createDataAttribute, CreateDataAttributeProps } from '@sanity/visual-editing';
import { Platform } from "react-native";

export const isWeb = Platform.OS === 'web'

// Your Sanity configuration -- not technically required in Presentation mode, 
// but useful if you want to generate studio links in standalone preview implementations. 
const config = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  baseUrl: SANITY_STUDIO_URL,
}

export const createDataAttributeProp = (attr: CreateDataAttributeProps) => {
  if (isWeb) {
    const attribute = createDataAttribute({...config, ...attr})?.toString()
    if (attribute) {
      return {dataSet: {sanity: attribute}}
    }
  }
  return undefined
}
```

> \[!WARNING]
> Data Attributes in React Native
> React Native's components cannot directly use data attributes like `data-sanity` as props. Instead, they use the `dataSet` prop. The correct prop structure is generated using the `createDataAttributeProp` helper method outlined above.

Create the data attribute using the `createDataAttributeProp` util set up above, and spread that prop onto the React Native component. In this example, we are adding it to a react-native `Image` component, but it should work for any scalar React Native component that needs to render its underlying html tag with the  the `data-sanity` prop. In the example below, we add an attribute to the `SomePage` component we wrote earlier when learning to use `useQuery`:

```
import { useQuery } from "@/hooks/useQueryStore";
import { urlFor } from "@/utils/image_url";
import { createDataAttributeProp } from "@/utils/preview";
import { useLocalSearchParams } from "expo-router";
import groq from "groq";
import { Image, Text, View } from "react-native";

export default function SomePage() {
  const { page_slug } = useLocalSearchParams();
  const query = groq`*[_type == "some_type" && slug.current == $page_slug]{...}`;
  const { data } = useQuery(query, { page_slug });

  return (
    <View>
      {data?.map((document: YourDocumentType) => {
        const { _id, _type, title, hero_image } = document;

        const heroImageAttr = createDataAttributeProp({
          id: _id,
          type: _type,
          path: "hero_image",
        });
        return (
          <View key={_id}>
            <Image
              {...heroImageAttr}
              source={{ uri: urlFor(hero_image).url() }}
            />
            <Text>{title}</Text>
          </View>
        );
      })}
    </View>
  );
}
```

**Repeat this for any of your non-text components that need click-to-edit overlays.**

### Additional Presentation Mode Features

You can also:

- [Customize your overlays](https://www.sanity.io/docs/visual-editing/custom-overlay-components) (e.g. to change the style or add more contextual information from the source content)
- Enable [drag-and-drop reordering](https://www.sanity.io/docs/visual-editing/enabling-drag-and-drop) for arrays of content objects in your front end.
- [Customize the preview header/navigation](https://www.sanity.io/docs/visual-editing/customizing-preview-header-and-navigation)

These are out of the scope of this guide, but the examples in docs above are the same for React Native, with the exception of the fact that you must use the `dataSet` attribute in place of directly using `data-sanity` (as discussed above).

*The React Native Starter repo does have an example of drag-and-drop in the \[movie\_slug].tsx component*

## A Note on Private datasets

> \[!WARNING]
> Private Datasets
> The `useQuery` hook from `@sanity/react-loader` does not currently support a "token" parameter, so it does not currently support querying private data from the user-facing front end application outside of Presentation mode. Inside of Presentation mode, `useLiveMode` takes care of rendering whatever data matches the chosen Perspective in the Presentation UI.

**To query private data from user-facing applications**, create a private querying hook (call it `usePrivateQuery` or `useSanityQuery` or similar) that allows you to perform token-authorized queries. However, never add that token to the client side bundle/environment, **it is an API KEY**. Some example approaches for how to perform such queries:

1. Build an API that has custom auth (for however you authenticate your users) and returns a token for the Sanity client to use in calls to client.fetch. This is the simplest approach but has the negative side effect that it exposes the token to the client side, so any logged in user can take that token and take any action for which the token is authorized—usually at a minimum this means making ANY query to your data, but can also even include writing data, updating settings, etc depending on the token.
2. Have a proxy API that has custom auth and can make queries on your behalf from the server, which never exposes the token to client side users. This allows you to either allow arbitrary queries if all authorized users should be able to make any query or even allows you to lock down which queries can be made by exposing API routes for individual queries.

Once you have defined a private querying hook, decide at runtime whether to call the Sanity React Loader's `useQuery` or your own `usePrivateQuery/useSanityQuery/customQuery` depending on whether you are in Presentation mode. Determining whether you are likely in/not in Presentation mode can be done with a helper from `@sanity/presentation-comlink` called `isMaybePresentation`.

So an example conditional usage of the correct hook for the platform/context might be like:

```tsx
const { isMaybePresentation } = import "@sanity/presentation-comlink"
const usePrivateQuery = import "@/hooks/usePrivateQuery"
    
    <!-- In a real life example, put this "createQueryStore" call in its own module so that it is called ONLY once and imported into components where used -->

    const { useLiveMode, useQuery} = createQueryStore({ client, ssr:false })

    function SomeComponent {
        const { data } = isMaybePresentation() ? useQuery(query) : usePrivateQuery()

        return <div>...contents</div>
    }

```

## A Note About the Live Content API

The [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) can be used to receive and render real time updates in your application without refreshing the page, both:

- as used in Presentation mode in this guide -- immediately shows the latest data for whatever "Perspective" is currently chosen in that Presentation UI (Draft Perspective, Published Perspective, etc).
- in your \*user-facing \*production application outside Presentation mode -- shows the latest published data (without needing to reload the page).

**When you are in Presentation mode**, `useLiveMode` will use a cookie set by the Presentation plugin to authenticate live updates from the Live Content API and show you the latest content for whatever "Perspective" you choose in the Presentation UI itself. The most common Perspective used is "Drafts", because that will show you all edits to documents, rendered in your embedded front end, live and in real time. This is how we enable instantaneous "Visual Editing". However, you can also choose the "Published" perspective to see a view of all published changes.

The `useLiveMode` hook respects the user's role when determining which data/content types that user can access in Presentation mode (including Custom Roles).

**When you are not in Presentation mode**, you must implement a connection mechanism for it in your project in order to use the Live Content API. A package is in-progress for an out-of-the-box Live Content API connector for vanilla React and React Native and will be added to this example when available.

For example/starting point implementations in the meantime, check the [lcapi-examples Github Repo](https://github.com/sanity-io/lcapi-examples/tree/main).

## Visual Editing is Enabled!

With your front end application and Sanity Studio both running locally (or deployed) and configured using the appropriate environment variables and the code snippets from this guide, you should be able to open the Studio, click "Presentation", and see your front end application embedded as a click-to-edit view with automatic live content updates.

Once both the front end application and the Sanity Studio are deployed (and configured correctly in the Presentation plugin config in the Studio code), you will see the same functionality enabled for your deployed application.

If you don't see the page as expected, confirm the code snippets related to presentation are as expected, and take a look at the [Visual Editing Troubleshooting guide](https://www.sanity.io/docs/visual-editing/troubleshooting-visual-editing) (modifying data attributes to the dataSet format and making any other changes that are relevant to React Native or your application).

For additional support, join our [Discord server](https://discord.com/servers/sanity-1304483263171264613), where Sanity support engineers are regularly active and assisting our community!
