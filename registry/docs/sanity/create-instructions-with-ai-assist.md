# Create instructions with AI Assist

AI Assist is the official plugin for Sanity Studio that brings artificial intelligence features to the editorial experience. Beyond running simple text generation prompts, it can interact with your structured content in numerous ways.

This article covers the different capabilities and affordances that this plugin has once installed and configured in your Sanity Studio.

> \[!NOTE]
> Paid feature
> This article is about a feature currently available for all projects on the [Growth plan](https://www.sanity.io/pricing) and up.

[Install and configure AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

[Common instructions for AI Assist](https://www.sanity.io/docs/user-guides/ai-assist-cheat-sheet)

[Content translation with AI Assist](https://www.sanity.io/docs/studio/ai-assist-content-translation)

## Document- and field-level instructions

You might be familiar with the term *prompt;* it's called *instruction* for AI Assist. AI Assist is not a chat interface (like ChatGPT) but a way to describe tasks that the AI can do to your content. That being said, you can bring techniques and methodologies from prompt engineering and bring them in here, too.

AI Assist lets users of Sanity Studio add instructions for whole documents and specific fields. The instructions can be visible only to those who made them or shared with all users of the Studio.

### Creating document-level instructions

Once the plugin is successfully installed and activated, you will find a new button with a sparkle ✨ icon at the top of every document form (side by side with the ellipsis … button where you find options to inspect the document or review its history). If comments are enabled for your project, this is also where you’ll find the speech bubble 💬 button to open the comments panel.

Clicking the sparkly button will open the AI Instruction editor in a side panel to the right. The editor opens with the entire document as its “target” because it was opened from the root-level sparkle button in the top right corner of the editor.

Create a new instruction by clicking **+ Add item**. Give your instruction an appropriate and informative name, and if you wish, click the sparkle icon on the left to select a fitting icon.

From this view, you can name your instruction, decide whether or not to make it available to other users of this studio once you’re happy with it, and, of course, edit and run your instruction.

### Creating field-level instructions

To target a specific field, hover your cursor over the relevant field to reveal its very own dedicated sparkle button. Then click it to switch the context to that field. This opens up the same panel type as with the document-level instructions described above.

Note that not all field types are supported, as elaborated further in this article.

## Instruction editor

Instructions for AI Assist are written in a normal, human-readable style. These instructions can be enhanced by adding references to fields’ content from the current document, which the assistant can access in real time. You can also prompt the user for input or refer to reusable contextual documents – such as a style guide or a description of your target audience – to further inform the assistant about the expected output.

[Common instructions for AI Assist](https://www.sanity.io/docs/user-guides/ai-assist-cheat-sheet)

### Instruction contexts

AI Assist will include a description of your schema by default but not any content unless you explicitly include references to fields or other contexts in your instructions:

- Document fields: Add a placeholder for a field’s content. AI Assist will include the field name and its content, meaning that you can insert these anywhere in your instruction, inline or on separate lines.
- User input: Opens a box to which the user running the instruction can paste plain text. You can customize the title and instructions given to the user that triggers this box. Only the contents of what’s inserted in the box will be put into the instruction.
- AI Context: Includes the content of an AI Context document that you can also manage in the Studio. This is where you would typically include brand and style guides. Only the contents of what’s inserted in the box will be put into the instruction.

### Allowed fields

Below the instruction editor, there is a collapsed option for **Allowed fields.** This is relevant for document-, object-, and array-level instructions. By default, an instruction will run for all supported fields. But there might be cases where you want to prevent AI Assist from interacting with certain nested fields. You can uncheck field labels for which the AI Assist *should not* add content.

## Sharing instructions

When you create a new instruction, it will only be visible to you by default. Select the **Make visible to all Studio members** switch to share it with other Studio users.

Note that AI Assist runs with the same permissions as the user who runs the instruction. Someone with limited access might still be able to see and trigger an instruction, but it won’t successfully run if it assumes permissions they don’t have.

## Running instructions

There are two ways of running an instruction for AI Assist:

- Using the **Run instruction** button at the bottom of the instruction editor
- By clicking its name in the sparkle menu (✨) once the instruction is added

Once you have triggered AI Assist, it will run the instruction in a real-time collaborative mode as if it’s a user of the Studio. You are then free to continue working on the same document in real time or you can navigate away from the document. You will get a pop-up message telling you that AI Assist is done unless you have closed the Studio, which you can do without disrupting the AI.

How long it will take to run an instruction depends on many factors. AI Assist does quite a lot under the hood to bring your content model and other contexts into its tasks.

## Restricting access to AI instructions

You can control which users can create new AI instructions while preserving access to existing ones by combining [content permissions](https://www.sanity.io/docs/user-guides/roles) with role-based access control.

### Implementation

To restrict the creation of instructions, filter out the corresponding document type `sanity.assist.schemaType.annotations` in a [content resource](https://www.sanity.io/docs/user-guides/roles). This approach allows you to:

- Grant read-only access to existing AI instructions
- Prevent specific roles from creating new instructions
- Maintain workflow continuity for teams using established instructions

**Filter for content resource (in Sanity manage console -> roles)**

```
_type == "sanity.assist.schemaType.annotations"
```

Please be aware, that permissions are additive ([see gotcha for more](https://arc.net/l/quote/itnrlpxf)).

## Supported field types

AI Assist can use most fields in your schema as a context in an instruction.

These are the field types it can write content to, including custom schema types based on the following:

- String and text
- Objects and the fields within them
- Arrays with inline objects and references
- Portable Text, including default formatting and custom blocks, but **not** custom marks and annotations
- Image assets (and image fields)
- References (requires additional configuration)

### Conditionally hidden and read-only fields

Fields and field sets that are conditionally visible or read-only can have instructions and can be written to by an instruction, as long as the field is non-hidden when the instruction is initiated.

> \[!WARNING]
> Gotcha
> AI Assist will ignore any field that is hidden or in read-only mode when the instruction starts running. Changes to these conditions that occur **while the instruction is running** will **not** alter this behavior.

### Unsupported fields

There are some field types that AI Assist can use as context but not write content for:

- Geolocation
- Cross Dataset References
- File assets

## Working with images

AI Assist can generate image assets based on instructions and generate image descriptions from an uploaded image.

[Install and configure Sanity AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

### Generating images

There are two ways of working with image generation with AI Assist:

- Write an instruction, as with any other field
- Configure image generation from an “instruction field” (allowing AI-assisted image instruction generation)

> \[!WARNING]
> AI Assist cannot see and create images at the same time
> While AI assist can see images, and generate images, it can't do both together. For example, you can't write an instruction to use an image as the foundation for a new image. You may be able to use the description of an image instead.
> Alternatively, you can use the [Transform agent action](https://www.sanity.io/docs/agent-actions/introduction) alongside [custom field actions](https://www.sanity.io/docs/studio/ai-assist-field-actions) to create custom workflows.

### Generating image captions / alternative text

AI Assist can add image descriptions for image asset fields. This feature can typically be used to autogenerate alternative text or image captions.

A developer can enable this as part of [the schema configuration](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist). Note that that instruction will automatically run when an image is uploaded and/or replaced.

For images that were uploaded before it was enabled, there will also be a "Generate caption" instruction that you can find in the description field’s sparkle (✨) menu.

## Working with references

AI Assist can work on reference fields and pull in relevant articles based on an instruction. This feature requires configuration and works only on documents that have been included in an embeddings index.

It’s good to note that this feature relies on (vector) embeddings and not a regular string search or matching. This means that AI Assist will look for *semantic similarity* between your instruction and what’s indexed in your documents. This means that it also works across languages, which, in some cases, can be powerful but, in other cases, can lead to undesired results.

Preventing certain documents from being referenced can be solved either by adjusting what’s being included in the embeddings index or in content queries, the latter being less transparent for Studio users.

[Embeddings Index API](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview)

## Working with translations

You can use AI Assist to generate content translations. It’s built to be compatible with the localization content models used by the [Document Internationalization](https://github.com/sanity-io/document-internationalization) and [Internationalized Array Field](https://github.com/sanity-io/sanity-plugin-internationalized-array) plugins.

[Content translation with AI Assist](https://www.sanity.io/docs/studio/ai-assist-content-translation)

When the configuration for translation is enabled, users of the Studio will be able to trigger an AI-assisted translation depending on which approach is used:

- Document-level translations can be found in the document-level sparkle menu(✨)
- Field-level translations from the sparkle (✨) menu on localized fields that have AI translation enabled

## AI context documents

When the AI Assist plugin is enabled, it will add a document type called **AI Context** that can be found in the Structure tool (unless intentionally hidden). You can use these documents to centralize parts of instructions that you want to be consistent across your project.

Typical examples are, but not limited to:

- Style guide for text copy and images
- Brand guidelines
- Company descriptions
- Specific instruction tunings

## AI technologies powering AI Assist

AI Assist uses different AI technologies, largely Large Language Models (LLMs), under the hood and is built to be service- and model-agnostic. We will change the underlying models and services to improve and secure the performance of AI Assist.

Technologies we use:

- Models by OpenAI, like GPT and DALL·E
- Models by Google, like VertexAI
- Models by Anthropic, like Claude
