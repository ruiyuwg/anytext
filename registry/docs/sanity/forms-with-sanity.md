# Forms with Sanity

> \[!NOTE]
> This developer guide was contributed by Chris LaRocque (Senior Solution Architect).

How to manage forms for your front-end with Sanity

## The two types of form integration

Integrating a form service is no different than [integrating any external system with Sanity](https://www.sanity.io/docs/developer-guides/integrating-external-data). That being said, integrating an external form service with Sanity most commonly falls into two buckets, you either want to:

1. Author forms in an external service, then reference those forms by ID in your content (*”I want my-marketing-form from MailChimp to go here on my page”*), or…
2. Author forms inside Sanity, with the external service being used as a “bucket” for all the form submissions on your site (services like Netlify Forms or Formspree)

There are other form use cases Sanity can cover, you could even use Sanity to *collect* form submissions and manage user generated content (like we do on this site and <https://www.sanity.io/learn>), but this guide will cover the above two most common use cases.

## [@sanity/form-toolkit](https://www.npmjs.com/package/@sanity/form-toolkit)

The plugin @sanity/form-toolkit offers pre-built tooling for both types of form integrations if you’re looking to have something “out of the box”. This guide will dive into a more general look at how form-toolkit goes about creating these integrations.

form-toolkit currently has integrations for these services:

- MailChimp
- HubSpot

form-toolkit also exposes the `formSchema` plugin and `FormRendering` React component, which provides a pre-built form schema for your Studio and a component to render those forms respectively.

## Syncing external forms with Sanity

Syncing external forms with Sanity typically assumes that the service you’re syncing has some way to embed forms on your front-end that expects an ID to know which form to render. In such cases [@sanity/sanity-plugin-async-list](https://www.npmjs.com/package/@sanity/sanity-plugin-async-list) allows you to add a string field to your Sanity documents that fetches data from a remote source. Our [guide on syncing external data sources](https://www.sanity.io/docs/developer-guides/integrating-external-data) includes a section outlining this approach in detail.

## Authoring forms in Sanity

For basic form authoring, it may be preferred to author the form structure and fields in Sanity, pass that data to a component to render the form, and then use a ‘catch-all’ service for form submissions like Formspree or Netlify forms.

> \[!TIP]
> [@sanity/form-toolkit](https://www.npmjs.com/package/@sanity/form-toolkit) includes a package, `formSchema` for building and rendering forms from your Sanity Studio

If you’d prefer to build your own implementation instead of using form-toolkit, the process is the following:

1. Model a typical form in Sanity schemas, including 1. A `form` type containing an array of `formField` objects

2. A `formField` type with various props for the HTML `input` element like `type` , `placeholder` , `name`, `required` , `label` and others based on your needs

3. Additional properties on `form` or `formField` based on your needs, perhaps your forms need multiple sections or you want to control the form action from the CMS, all can be built into your schema

4. Create a component that renders your form in your front-end framework of choice 1. Take the `form` from a GROQ query, render a `<form>` element, passing the relevant props from your data

5. Take the `fields` array, and return an appropriate input for each provided field and its `type`

6. Optionally, use a form package like [TanStack Form](https://tanstack.com/form/latest/docs/overview) or [react-hook-form](https://react-hook-form.com/) for better error and state management

7. Create logic for how your form handles and sends submissions.1. With some platforms like Netlify forms this means adding data attributes to the `<form>` element

8. In other cases like Formspree its adding their URL as the `action` attribute on your form
