# Lists

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/structure/lists.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Lists

There are three types of lists:

- Bulleted lists for unordered items
- Numbered lists for ordered items
- Embedded lists for items within a sentence

Here are some tips when creating lists:

- Keep list items parallel
- Start numbered lists with a command (imperative verb)
- Consistently punctuate by using appropriate sentence + punctuation within the list (periods for full sentences, etc.)

## Bullet points

Bullet points help the reader's eye focus on a list of important elements.

However, as with any other aspect of writing, they should be used mindfully. Below is a list of when you should and should not resort to bullet points.

| ❌ Do not use bullet points                                                       | ✅ Use bullet points |
| -------------------------------------------------------------------------------- | ------------------- |
| To outline **processes** (prefer numbered lists)                                 | To list **facts**   |
| To explain your reasoning (it is a blog post, not a list of system requirements) | To list **data**    |
| -                                                                               | To list **options** |

## Bulleted lists

Instructions should be numbered steps and not bullet points. See [steps/tasks/procedures](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/steps-tasks-procedures/) for additional information.

Do not punctuate bullet points unless each item is a full sentence.

If bullet point items are followed by a description, use a colon after the heading and capitalize the description. For example,

- **Item 1**: Description 1
- **Item 2**: Description 2

For bullet points, try to stick to the "six-pack" rule: no more than six bullets, each made up of six words or less.

Refer to [The best way to use bullet points ↗](https://thewritinghabit.blog/2016/08/22/best-way-to-use-bullet-points/) for additional guidance.

### Bulleted list checklist

When you find yourself creating a list of bullet points, go through this checklist:

1. Do all bullet points belong together?
   - Check that all the elements in the list are logically connected.
2. Do I have more three or more bullet points, but less than six?
   - Readers get lost when reading long lists; at the same time, if you have less than three elements to list, is it necessary to use bullet points?
3. Are all bullet points shorter than three lines of text?
   - Bullet points should not be used as section headers. If you have excessively long bullet points, consider breaking up the list into several subsections.
4. Is punctuation consistent?
   - End all elements of a bulleted list with a period if each element is a full sentence; do not add any punctuation if you are just listing nouns or parameters.
5. Do all bullet points start with the most important word we want the reader to remember?
   - Make sure the "head" of your bullet point is not hiding after a long circumlocution.
6. Do all bullet points start with the same part of speech?
   - If your bullet points start with verbs, make sure all verbs are in the same mood/tense.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/structure/","name":"Structure"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/formatting/structure/lists/","name":"Lists"}}]}
```
