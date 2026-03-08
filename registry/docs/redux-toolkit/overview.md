On this page

**The Redux core docs site at [https://redux.js.org](https://redux.js.org) contains the primary tutorials for learning Redux**, including how to use Redux Toolkit and React-Redux together.

tip

To avoid duplicating explanations between the Redux core and Redux Toolkit documentation, we've focused on making the Redux core docs tutorials comprehensive, and point to them instead of having extended tutorials here in the Redux Toolkit docs.

See these linked tutorials to learn how to use Redux Toolkit effectively.

## Redux Toolkit Quick Starts[​](#redux-toolkit-quick-starts "Direct link to Redux Toolkit Quick Starts")

The [**Redux Toolkit Quick Start tutorial**](/tutorials/quick-start) briefly shows how to add and use Redux Toolkit in a React application.

**If you just want the fastest way to get a basic example running, read the Quick Start tutorial.**

We also have a [**TypeScript Quick Start tutorial**](/tutorials/typescript) that briefly shows how to set up and use TypeScript with Redux Toolkit and React-Redux.

If you are using Next.js we have a tutorial specific to using Redux Toolkit with Next.js [**Next.js tutorial**](/usage/nextjs).

## Redux Essentials: A Real-World Example[​](#redux-essentials-a-real-world-example "Direct link to Redux Essentials: A Real-World Example")

The [**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) teaches you "how to use Redux the right way", using Redux Toolkit as the standard approach for writing Redux logic.

It shows how to build a "real-world" style example application, and teaches Redux concepts along the way.

**If you've never used Redux before, and just want to know "how do I use this to build something useful?", start with the Redux Essentials tutorial.**

## Redux Fundamentals: Redux from the Ground Up[​](#redux-fundamentals-redux-from-the-ground-up "Direct link to Redux Fundamentals: Redux from the Ground Up")

The [**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) teaches "how Redux works, from the bottom up", by showing how to write Redux code by hand and why standard usage patterns exist. It then shows how Redux Toolkit simplifies those Redux usage patterns.

Since Redux Toolkit is an abstraction layer that wraps around the Redux core, it's helpful to know what RTK's APIs are actually doing for you under the hood. **If you want to understand how Redux really works and why RTK is the recommended approach, read the Redux Fundamentals tutorial.**

## Learn Modern Redux Livestream[​](#learn-modern-redux-livestream "Direct link to Learn Modern Redux Livestream")

Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with TypeScript, as well as the new RTK Query data fetching APIs.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

## Using Redux Toolkit[​](#using-redux-toolkit "Direct link to Using Redux Toolkit")

The RTK [**Usage Guide** docs page](/usage/usage-guide) explains the standard usage patterns for each of RTK's APIs. The [API Reference](/api/configureStore) section describes each API function and has additional usage examples.

The [Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) also shows how to use each of the APIs while building an application.

## RTK Query Video Course[​](#rtk-query-video-course "Direct link to RTK Query Video Course")

If you prefer a video course, you can [watch this RTK Query video course by Lenz Weber-Tronic, the creator of RTK Query, for free at Egghead](https://egghead.io/courses/rtk-query-basics-query-endpoints-data-flow-and-typescript-57ea3c43?af=7pnhj6) or take a look at the first lesson right here:

## Migrating Vanilla Redux to Redux Toolkit[​](#migrating-vanilla-redux-to-redux-toolkit "Direct link to Migrating Vanilla Redux to Redux Toolkit")

If you already know Redux and just want to know how to migrate an existing application to use Redux Toolkit, the [**"Modern Redux with Redux Toolkit" page in the Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux) shows how RTK's APIs simplify Redux usage patterns and how to handle that migration.

## Using Redux Toolkit with TypeScript[​](#using-redux-toolkit-with-typescript "Direct link to Using Redux Toolkit with TypeScript")

The RTK docs page on [**Usage with TypeScript**](/usage/usage-with-typescript) shows the basic pattern for setting up Redux Toolkit with TypeScript and React, and documents specific TS patterns for each of the RTK APIs.

In addition, the [Redux + TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with RTK already configured to use those TS patterns, and serves as a good example of how this should work.

## Legacy Redux Toolkit Tutorials[​](#legacy-redux-toolkit-tutorials "Direct link to Legacy Redux Toolkit Tutorials")

We previously had a set of "Basic/Intermediate/Advanced" tutorials directly in the Redux Toolkit docs. They were helpful, but we've removed them in favor of pointing to the "Essentials" and "Fundamentals" tutorials in the Redux core docs.

If you'd like to browse the old tutorials, you can see the content files in our repo's history:

[Redux Toolkit repo: legacy "Basic/Intermediate/Advanced" tutorial files](https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials)
