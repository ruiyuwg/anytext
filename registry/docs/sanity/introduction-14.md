# Introduction

The Sanity Application Software Development Kit, or **App SDK** for short, is a robust set of tooling that will let you create fully custom apps that interface and interact with your Sanity content. It brings the powerful real-time capabilities and content management features you know from Sanity Studio to your own custom React applications. With a comprehensive set of React hooks and data stores, you can easily build applications that work seamlessly with your Sanity content across multiple projects and datasets.

In this introduction to the App SDK we will explore how to build applications that interact with your Sanity content in real-time. We'll cover the core concepts and patterns that make the App SDK powerful, demonstrate how to efficiently retrieve and manipulate documents, and show you how to create responsive user interfaces that stay in sync with your content.

By the end of this guide, you'll understand:

- How Document Handles enable efficient document operations.
- When to use different hooks for retrieving and updating content.
- Best practices for building performant real-time applications.
- How to work with content across multiple projects and datasets.

## What is the App SDK?

The App SDK is a toolkit for building custom React applications that interact with your Sanity content. It provides a set of React hooks and data stores that enable real-time content operations, seamlessly handling content from multiple projects and datasets, and with complete freedom to create your own interfaces and experiences.

### Purpose and Key Features

- Build fully custom applications that work with Sanity content.
- Enable real-time content operations and live updates.
- Work across multiple projects and datasets.
- Create tailored user experiences beyond what Studio offers.

### SDK apps and Sanity Studio

![An SDK app and a studio showing different ways to interact with the same content](https://cdn.sanity.io/images/3do82whm/next/34ec1da769de3803cffabb9eb01b0fe5c6dd70a0-600x306.png)

It's worthwhile to pause briefly to take a comparative look at Sanity Studio, and how it relates to the App SDK. Sanity Studio is a content management powerhouse, and for many Sanity users, Studio *is* Sanity. Or, in other words, their studio is the main interface through which they interact with the Sanity platform. The ambition of the App SDK is to enable you to build apps that work beyond the scope of a single studio, project, and dataset, unlocking opportunities for new content workflows and operations — all while allowing you complete freedom over your application’s UI and UX.

### Similarities

- Real-time content operations
- Live updates and collaboration features
- Access to Sanity's content platform
- Authentication and permissions handling

### Key Differences

- \*\*Multiple Projects and Datasets: \*\*While Studios can work with a single project and dataset at a time, SDK apps can be configured to work with as many of your organization’s projects and datasets as you like.
- **Complete UI Freedom**: Unlike Studio's structured interface, you control every aspect of the UI.
- **Custom Workflows**: Build exactly the workflow your users need.
- **Focused Feature Set**: No built-in validation or form building - bring your favourite UI components with you, and shape the functionality just as you want it.

## Technical Implementation

### Technology Stack

- [TypeScript](https://www.typescriptlang.org/) for type safety and developer experience
- [React](https://react.dev/) for application framework and hooks
- Built on modern React patterns including [Suspense](https://react.dev/reference/react/Suspense)

### Requirements

- React v19 or higher
- Node.js environment v20 or higher

## What's Included

- React hook based interface, taking advantage of modern React patterns like [Suspense](https://react.dev/reference/react/Suspense) and [Transitions](https://react.dev/reference/react/useTransition)
- Document retrieval and content rendering, all live by default
- Optimistic, local-first document editing, ready for collaborative interfaces
- Batchable document actions
- Permissions checking with detailed outputs
- Support for [Sanity Typegen](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen)

### Not Included

- UI components or design system- However, the App SDK pairs nicely with [Sanity UI](https://sanity.io/ui) for building applications that are visually consistent with other Sanity apps

- Router

- Form validation

- Schema validation

These aspects are left to your implementation, giving you complete control over the user experience while the SDK handles the complex data operations underneath.

### Limitations

During development, SDK apps may experience connection issues in the Safari browser. This is caused by the way Safari handles mixed content, and how Sanity loads your local app in the Dashboard. To get around this limitation, we suggest using another browser during development. **This does not affect deployed SDK applications.**

# Installation

The Sanity App Software Development Kit (App SDK) is distributed as two separate npm packages – the core TypeScript SDK, and a ready-to-go React implementation.

- [@sanity/sdk](https://reference.sanity.io/_sanity/sdk/)
- [@sanity/sdk-react](https://reference.sanity.io/_sanity/sdk-react/)

While the core SDK can be used on its own, its primary purpose is to enable the React SDK’s functionality, as well as to leave the door open for other framework-specific implementations in the future. For now, our React SDK is our primary focus, and it’s what we’ll be installing via the bootstrapping process described below.

## Prerequisites

- Some familiarity with JavaScript and/or TypeScript development
- A terminal
- Node.js v20
- An available project dataset. Many of our examples use the "Movies" template and data, which is selectable when initializing a new Studio. See the [Studio installation guide](https://www.sanity.io/docs/studio/installation).

## Bootstrapping a new app using the `sanity` CLI

Use the [sanity Command Line Interface (CLI)](https://www.sanity.io/docs/cli-reference/cli-config) to initialize a new application. A new React app with all the necessary dependencies and boilerplate will be created.

**CLI**

```sh
npx sanity@latest init --template app-quickstart
```

Your app will be bootstrapped and preconfigured with your organization ID. If you have ever worked on a Sanity Studio project locally, this should feel familiar.

Before running your app locally, you’ll need to add a small bit of configuration, which we’ll walk through in the next article.

#### Further reading

- Read the [App SDK Quickstart Guide](https://www.sanity.io/docs/app-sdk/sdk-quickstart) to get up and running quickly
- Read about the [Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli)
