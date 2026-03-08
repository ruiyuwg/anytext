# Create your own Sanity template

#### Ready to submit your template?

Click the button below to submit your template for review. Don't forget to join the #template-creators Slack channel to connect with others and share your work.
[Submit your template](https://community.sanity.tools/intent/create/type=contribution.starter;template=contribution.starter/)

[Sanity templates](https://www.sanity.io/templates) are reusable, pre-configured projects that come with an integrated, customizable front-end. They're a great way to streamline your development process, ensuring consistency across different projects, and reducing the time required to get a new project off the ground.

Creating a template for the Sanity community is a great way to share your expertise with other developers and make starting future Sanity projects a breeze.

This guide will walk you through how to create and submit a new Sanity template.

## 1) Clone the [template-kit](https://github.com/sanity-io/scaffolding-template) repository

The easiest way to get started creating a Sanity template is by using the official [Sanity Template Kit repository](https://github.com/sanity-io/scaffolding-template) as a starting point.

This repo provides all the necessary boilerplate for creating a template; including a generic studio configuration, a folder to generate your front-end framework of choice, and the `@sanity/template-validator` [GitHub action](https://docs.github.com/en/actions/writing-workflows/quickstart) to ensure your template meets our technical requirements.

Click the "Use this template" button in Github to create a new repository with the Sanity Template Kit as a base.

## 2) Initialize your frontend

After cloning the [template-kit repository](https://github.com/sanity-io/scaffolding-template), initialize your preferred front-end inside of a directory called `frontend`.

The following command will initialize a new app with Next.js, but you can use any front-end framework to build out your template.

```sh
npx create-next-app@latest frontend
```

> \[!TIP]
> Protip
> If you're prompted to initialize a new git repository for your project, say 'No' since you're initializing the front-end inside of an existing git repository.

## 3) Build out your template

Now, the fun part! After initializing your project, it's time to build out your template.

We *highly* recommend starting this process by familiarizing yourself with our [Opinionated Guide to Sanity Studio](https://www.sanity.io/docs/developer-guides/an-opinionated-guide-to-sanity-studio).

This guide provides best practices for:

- File organization for schemas and plugins
- Defining reusable and extensible content schemas
- Formatting GROQ queries for readability and performance

For advice on how to build out a front-end that works well with Sanity, we recommend taking a look at our official, framework-specific templates for [Next.js](https://www.sanity.io/templates/nextjs-sanity-clean), [Astro](https://www.sanity.work/templates/astro-sanity-clean), [Nuxt](https://www.sanity.io/templates/nuxt-sanity-clean), [Angular](https://www.sanity.io/templates/angular-sanity-clean), [SvelteKit](https://www.sanity.io/templates/sveltekit-sanity-clean), and [React Router](https://www.sanity.io/templates/remix-sanity-clean).

These templates show how to use advanced Sanity features like the [Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool) and the [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) to build powerful experiences into your template like:

- [Visual editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)
- [Drag-and-drop page building](https://www.sanity.io/docs/visual-editing/enabling-drag-and-drop)
- [Real-time content updates](https://www.sanity.io/docs/developer-guides/live-content-guide)

If you need help or inspiration, join the `#template-creators` channel in our [Slack community](https://slack.sanity.io/). We're here to help you build great stuff with Sanity!

## 4) Validate your template

Once you're ready to submit your Sanity template, you can validate it using the `@sanity/template-validator` package by running:

```sh
npm run validate
```

This script ensures your template complies with our technical requirements. You can find a full [list of validation rules here](https://github.com/sanity-io/template-validator#validation-rules), but in general the script checks for:

- A fully configured Sanity Studio.
- A functioning front-end project (e.g., Next.js, Astro, React Router, etc) with valid configuration files and TypeScript support
- A `README.md` file at the root of the project with an H2 titled "Getting Started" that includes a step-by-step setup guide for users.

See the [current list of featured templates](https://www.sanity.io/templates) for examples of well structured template projects.

#### Common Errors

```sh
Environment template in ${packageName} contains invalid environment variable syntax. Please see https://dotenvx.com/docs/env-file for proper formatting.
```

This error is usually do to having whitespace before or after and `=` in your `.env.[example | template | local]` file.

```sh
Invalid package.json file in ${packageName}
```

This error usually means you don't have any Sanity related dependencies in your `package.json` like `sanity`, `next-sanity`, or `@sanity/client`.

## 5) Submit your template

Once your template passes the validator, [submit your template for review](https://community.sanity.tools/intent/create/type=contribution.starter;template=contribution.starter/) in the Community Studio.

You'll need to provide:

- A title and description of your template
- A link to your template's Github repository (make sure it's public!)
- A 1200px x 750px image or screenshot of your template

Although optional, we **strongly suggest** you also provide a link to a deployed example application showing your template in action.

This will allow users to preview your template and see if it's a good fit for their use case.

The Sanity team will review your submission to ensure it meets our quality standards and provides value to the community. For reference, a good template is:

- **Purposeful**: Clearly communicates the use case (e.g., an e-commerce store with Sanity + Shopify or a documentation site with search powered by Algolia).
- **Configurable**: Includes sensible defaults but allows for customization.
- **Documented**: Provides clear setup instructions and a `README.md` with a correctly formatted "Getting Started" section. The template kit repository provides this for you out of the box.

If changes are needed, we will reach out to you with feedback on how to improve your template.

## Next steps

Congratulations! Once your template is approved, it will be listed in the official [Sanity templates gallery](https://www.sanity.io/templates) in Sanity Exchange. After approval, be sure to:

- **Promote your template**: Share your template with the Sanity community on [LinkedIn](https://www.linkedin.com/company/sanity-io/posts/?feedView=all), [X](https://x.com/sanity_io?lang=en), and [BlueSky](https://bsky.app/profile/sanity.io) and tag us @sanity.
- **Iterate and improve your template**: Address user feedback by checking in on your template in Sanity Exchange. Keep your template updated as dependencies and best practices evolve.
- **Contribute other templates**: Don't stop with just one! Build additional templates or join discussions in the `#template-creators` channel [on Slack](https://slack.sanity.io/).

By sharing your work, you’re empowering the community to create amazing projects with Sanity.

We can’t wait to see what you build!
