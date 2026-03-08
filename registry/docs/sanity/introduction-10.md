# Introduction

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Agent Actions let you programmatically run schema-aware AI instructions to create and modify Sanity documents. You can run instructions from anywhere you can execute code, such as Sanity Functions, custom components, webhook listeners, CI/CD pipelines, migration scripts, and more.

- Add AI-assisted content suggestions.
- Generate draft documents with new content.
- Generate images based on fields within your document.
- Translate documents automatically or on demand.
- See live AI presence so your editors know when the Instruct API works on a document.

You can create powerful AI-driven workflows, by combining Agent Actions with Functions, Content Releases, the Actions API, and the rest of Content Lake's APIs.

#### Get started with the actions

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart)

[Prompt quick start](https://www.sanity.io/docs/agent-actions/prompt-quickstart)

[Patch quick start](https://www.sanity.io/docs/agent-actions/patch-quickstart)

## Requirements

- You'll need a place to execute code, such as a custom component, cloud functions, a webhook listener, or any service that can run the JavaScript client or initiate HTTP requests.
- Sanity client (`@sanity/client`) version 7.1.0 or later and API version vX.

### Presence support

Install and [enable the AI Assist plugin](https://www.sanity.io/docs/ai-assist) for Sanity Studio to enable presence support.

### Image and reference support

Some Agent Actions, like Generate, can create images and connect references. To enable automation for image and reference fields, further setup is required.

[Create images with Agent Actions](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)

[Enable references in Generate](https://www.sanity.io/docs/agent-actions/generate-add-references)

## Core Concepts

### Get to know the actions

Agent Actions all share the same core, but are specialized for different uses.

#### Generate

When you want to create brand new content, you want Generate. It excels at creating new content based on the information you pull in from your existing Sanity documents.

Generate is additive only—it creates new content but does not replace or remove existing content. When working with arrays, Generate adds new items but will not replace existing items in the array.

- Create full, structured documents in a single command.
- Reference multiple documents to use as the source for new documents.
- Generate images and make reference connections to existing documents.

[Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Generate cheat sheet](https://www.sanity.io/docs/agent-actions/generate-cheatsheet)

#### Transform

When you need to modify existing documents, Transform can walk through your document fields and make changes. It keeps the formatting and style, while only making the changes you tell it to make.

Transform only edits existing content—it does not create new fields or add new items to arrays. It modifies what is already present in the document.

- Change a document's tone.
- Rename a product across your entire site.

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Transform cheat sheet](https://www.sanity.io/docs/agent-actions/transform-cheatsheet)

#### Translate

A specialized version of Transform, Translate is designed with internationalization in mind. It supports both document-level translation and field-level translation. It's a fast way to translate documents into multiple languages.

[Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart)

[Translate cheat sheet](https://www.sanity.io/docs/agent-actions/translate-cheatsheet)

#### Prompt

Need to make prompts to an LLM without reaching for another service? Prompt allows you to use your content in Sanity to make requests, then process that information however you like.

[Prompt quick start](https://www.sanity.io/docs/agent-actions/prompt-quickstart)

#### Patch

Agent Actions are schema-aware, which lets them validate and safely modify your documents. Now you can use this same approach with Patch. No LLMs involved.

[Patch quick start](https://www.sanity.io/docs/agent-actions/patch-quickstart)

### Operations

Should an action create a new document? Should it edit an existing one? Operations tell each Action Action how to act on your data.

[Operations](https://www.sanity.io/docs/agent-actions/operations)

### Instructions

Agent Actions use the concept of instructions to describe what tasks you want them to perform. These are combined with each action's configuration.

[Creating instructions](https://www.sanity.io/docs/agent-actions/instructions)

### Actions understand your schema

Actions know about your content model, which allow them to map content accurately to your documents and fields. However, you must deploy an up-to-date schema version to make this work.

If you're already hosting Studio at Sanity, you're all set. Run `sanity deploy` from your project to ensure the latest schema is uploaded. If you're hosting Studio elsewhere, you can manually deploy the schema.

Refer to any of the [quick start guides](https://www.sanity.io/docs/agent-actions/generate-quickstart) for instructions on deploying your schema.

### How Agent Actions compare to AI Assist

[AI Assist](https://www.sanity.io/docs/ai-assist) is a plugin for Sanity Studio. It allows content editors to create AI commands directly in Studio.

Agent Actions let you trigger, or invoke, AI workflows from anywhere you can make an API call or run the Sanity client. They also allow you to supply additional contextual information beyond what lives in a single Sanity document or field.

You can combine the two by [creating custom field actions](https://www.sanity.io/docs/studio/ai-assist-field-actions) that invoke Agent Action workflows.

## Usage and spending limits

Agent Actions usage is shared across the organization. For details on your plan's limits, see the [pricing page](https://www.sanity.io/pricing).

You can set spending limits and view your remaining budget in your Organization's settings in Manage.

1. Navigate to [Manage](https://sanity.io/manage), or run `sanity manage` from the CLI.
2. Select your Organization.
3. Navigate to Settings, then Spending Limits.

![The spending limits settings page located in your Organization settings.](https://cdn.sanity.io/images/3do82whm/next/a1b82171bdfda2cce6213e02166a38d9929c9f15-2576x1120.png)

## Limitations

The following field types are not supported:

- [File](https://www.sanity.io/docs/file-type)

The following field types are supported, but with limitations:

- [Slug](https://www.sanity.io/docs/slug-type): Agent Actions don't perform uniqueness validation to check if the slug conflicts with others.
- [URL](https://www.sanity.io/docs/url-type): Agent Actions only write to this field type if the instruction includes links.

The following types require additional setup:

- [Image](https://www.sanity.io/docs/image-type) ([See the configuration guide](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation))
- [Reference](https://www.sanity.io/docs/reference-type) ([See the configuration guide](https://www.sanity.io/docs/agent-actions/generate-add-references). Requires the [Embeddings API](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview))
- [Date](https://www.sanity.io/docs/date-type) and [Datetime](https://www.sanity.io/docs/datetime-type): To enable these fields, use the `localeSettings` in the request. [Learn more in the configuration guide](https://www.sanity.io/docs/agent-actions/agent-actions-date-support).

Agent Actions won't write to explicitly hidden or readOnly fields. These are fields with `readOnly: true` and `hidden: true` defined in the schema. They do support conditionally readOnly or hidden fields. See the [common patterns guide](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet) for more details.

Agent Actions Generate and Transform can create images, but won't save new images to Media Library. They only save images to the project that contains the target document.

Agent Actions Generate cannot create annotations, custom marks, or inline blocks in Portable Text fields. It can generate content into existing elements if provided with the full path, but cannot create these elements otherwise.

## Third-party sub-processors

A list of third-party sub-processors, as well as details on the terms of use for our AI products are [available here](https://www.sanity.io/legal/tos-ai).
