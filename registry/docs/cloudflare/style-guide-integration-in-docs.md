# Integration in docs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/how-we-video/integration-in-docs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Integration in docs

Our goal is to integrate video directly into the documentation so it accelerates the user experience and learning experience, not for videos to exist in a separate silo.

## Embed locations

- Doc pages: We embed videos directly in the relevant pages. This gives users a comprehensive learning experience with visual context and accurate technical details.
- [Video hub ↗](https://developers.cloudflare.com/videos/page): For learners who prefer a video-first experience, we maintain a dedicated page for videos.
- [Resources ↗](https://developers.cloudflare.com/resources/): Video is a core content type in our system. You can filter specifically for videos in the resources page.

## Chapters

We add time-stamped chapters to our videos to make relevant information more accessible by users and searchable by machines.

Chapters allow users to:

- **Skip ahead**: Jump directly to the specific information you need.
- **Find answers**: Search engines and LLMs can index these chapters, making it easier to retrieve specific visual segments when a user asks a technical question.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/how-we-video/","name":"How we video"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/how-we-docs/how-we-video/integration-in-docs/","name":"Integration in docs"}}]}
```
