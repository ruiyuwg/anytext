# Instruction ideas for AI Assist

Here, you will find instructions for common tasks that AI Assist can do. Use these as inspiration and a starting point for more specialized instructions.

> \[!NOTE]
> Paid feature
> This article is about a feature currently available for all projects on the [Growth plan](https://www.sanity.io/pricing) and up.

[Install and configure Sanity AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

[Create and run instructions with AI Assist](https://www.sanity.io/docs/user-guides/ai-assist-working-with-instructions)

[Content translation with AI Assist](https://www.sanity.io/docs/studio/ai-assist-content-translation)

## Good to know

Sanity AI Assist knows about your Studio's schema. When running instructions at the document level, for instance, you can still target specific fields by referring to them by title. E.g., *“Create a description based on title, then add a relevant callout to body. Do not add anything to any other fields.”Using explicit commands and clear language like “Important: ” can help guide the assistant in a certain direction if it’s being too creative.*

## Write more of a body

**Where**\*:\* `body` *–* Portable Text or plain text field

**Instruction**\*: \*

Given the `title` `body`, keep writing copy.

## Get started on an article

**Where**\*:\* document instruction

**Instruction**\*: \*

Given the following inspiration `User input (What should the article be about?)` Create an article.

## Summarize a field

**Where**\*:\* `summary` *–* Portable Text or plain text field

**Instruction**:

Summarize `body`

**Instruction variation**\* *(to suggest how the summary should be formatted when saving to a formatted text field)*:\*

Summarize `body`. Do not use lists, headlines, or quotes.

## List categories

**Where**: On an array field with strings

**Instruction**\*:\*

List the categories relevant to `body`

## Shorten a field

**Where**: On the field to shorten

**Instruction**\*:\*

Shorten `<the field itself>`

## Translate a field

**Where**: On the field where the translation should be stored

**Instruction**\*:\*

Translate `title` to Norwegian.

## Sentiment analysis

**Where**\*:\* On a text field where the sentiment should be stored

**Instruction**\*:\*

Classify the sentiment of the following text `body`

Determine if it is elated, happy, neutral, sad, or angry.

## Create a catchy title

**Where**\*:\* On the title field

**Instruction**\*:\*

Create a catchy and engaging headline about `User input: (What should the title be about)`

## “Smart” paste

**Where**\*:\* On any field or at the document level

**Instruction**:

Given the following User input:

`User input (Paste your stuff here)`

Format the User input so it aligns with the schema. Do not omit sections or paragraphs; use formatting, headings and lists as appropriate.

Infer item types based on context.
