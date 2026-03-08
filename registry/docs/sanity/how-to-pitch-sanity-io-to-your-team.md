# How to pitch Sanity.io to your team

Sanity.io is the platform for [structured content](https://www.sanity.io/structured-content-platform). It comes with an [open-source headless CMS called Sanity Studio](https://www.sanity.io/studio) that’s built with React, and that you can **customize**. You also get a [hosted real-time datastore](https://www.sanity.io/developer-experience) with powerful APIs. There are also [libraries and tools](https://www.sanity.io/docs/libraries) that **make it easier** to use structured content in the products and services that you’re building. And not the least, there’s a growing [friendly community of developers](https://snty.link/community) that will gladly help and learn with you.

## Sanity.io gives your team:

- \*\*Ultra-portable structured content. \*\*Your content is stored as plain JSON documents. That’s it. You can export all your documents from the backend with [one API request](https://www.sanity.io/docs/http-reference/export) or [CLI command](https://www.sanity.io/docs/cli-reference/dataset). And if you need to move them out of Sanity, it’s much easier to import these documents into another system, compared with some specific XML-export from a CMS littered with plugin-specific junk (looking at you WordPress). After all, portability is the hallmark of structured content.
- **A customizable editor environment**. With Sanity.io, you get a CMS that’s open-source and customizable with JavaScript and React. You only need a `name` and a `type` to make a new field, and when you’re ready for it, you can extend with custom [JavaScript validations](https://www.sanity.io/docs/studio/validation), [custom input components](https://www.sanity.io/docs/studio/intro-to-custom-studio-components), and [previews](https://www.sanity.io/docs/studio/studio-components) with React, [CSS-variable overrides](https://www.sanity.io/guides/how-to-brand-your-studio), and you can install [plugins and tools](https://www.sanity.io/docs/studio/installing-and-configuring-plugins) or make your own. You have access to all the APIs that the Studio uses.
- **Something that’s easy to set up**. You are probably way faster on a keyboard compared to dragging and dropping fields with your mouse. Creating a field in Sanity Studio is as easy as writing `{ name: ‘title’, type: ‘string’ } `and hitting “save”. With content models in code, you can create your own snippets, you can bootstrap config, commit them to git, or even publish on npm.
- **The joy of rapid iteration with GROQ**. Sanity.io offer [GROQ (Graph-Relation Object Queries)](https://www.sanity.io/docs/groq-reference) as a way to filter your dataset’s documents, join them, and project the data structures that you need for your project. Like GraphQL it gives you one endpoint for all your content, but it’s way more versatile in the way you can shape and wrangle your data. After a couple of minutes, you can learn enough GROQ to be productive. With GROQ there is no need to loop over your data on the client-side after querying, you can shape it how you want it right in the query. This saves both bandwidth and processing time. [GROQ is open source](https://www.sanity.io/blog/we-re-open-sourcing-groq-a-query-language-for-json-documents) and can be used elsewhere as well.
- \*\*Great APIs. \*\*In addition to GROQ, you can query your content with [GraphQL](https://www.sanity.io/docs/content-lake/graphql). If you want to change a deeply nested value or change running text, you can do so with the powerful [mutations API](https://www.sanity.io/docs/http-reference/mutation). The [listener API](https://www.sanity.io/docs/content-lake/realtime-updates) lets your apps subscribe to changes happening in your content in real-time. With the [Asset pipeline](https://www.sanity.io/docs/content-lake/assets), you can get on-demand image transforms. With the [History API](https://www.sanity.io/docs/http-reference/history), you can browse document revisions and see who did what. [Webhooks](https://www.sanity.io/docs/content-lake/webhooks) lets you integrate with other services.
- **The calm of no-ops**. We offer you a scalable backend, both in terms of the amount of data, but also traffic, security, and availability. [CDNs for assets and content delivery](https://www.sanity.io/docs/content-lake/api-cdn). Sanity Studio, the CMS, is a Single Page Application. We can host the HTML and the JavaScript file for you, or you can put it pretty much on any host. You can even deploy different studios connected to the same datastore if you want to build specialized editor experiences.
- **Flexible, transparent pricing**. You won't be forced to change tiers because of traffic or usage. [All tiers are pay-as-you-go with modestly priced overages](https://www.sanity.io/pricing). You can also add more datasets and users on all plans. The tiers differ on SLAs, support, and advanced features. There’s no hidden schemes or gotchas, it’s all on the website for you to scrutinize. We let you upgrade and downgrade whenever you want, and will prorate you for what you haven’t used if you downgrade before the month has ended. You don’t *have to* talk to sales ever (but we sure love to if you want).
- \*\*Privacy and GDPR. \*\*Sanity.io host your data in the heart of GDPR land: Brussels. Sanity.io is designed with GDPR in mind so that it is easy for you to stay compliant. None of your content is shared with third-party services (not even your images). We also offer custom edit history retention if your business requires that. If this isn’t enough, we also [blogged about how to run a GDPR compliant SaaS](https://www.sanity.io/blog/a-rough-guide-to-running-a-gdpr-compliant-saas-business)
- \*\*A content platform that has been in production since 2015. \*\*Although Sanity.io is a relatively new product on the market, it has been used in production by companies such as the renowned architecture firm [OMA](https://www.sanity.io/case-studies/oma), and one of Norway’s largest media companies, Amedia. Publicly launched in 2017. Sanity.io is now used by thousands of developers and companies including [Cornerstone OnDemand](https://www.sanity.io/case-studies/cornerstone-ondemand), [Eurostar](https://www.eurostar.com), [Condé Nast](https://www.thelovemagazine.co.uk), and [micro:bit](https://microbit.org/).
- **A tool for modern content strategy and design processes**. If you look at the conversations happening within content strategy, you’ll quickly find *structured content* as a frequent topic. No wonder, since it’s a pattern that prevents duplicated content and tries to connect your text and media to the goals of your team and users. Sanity.io also makes *content-first* approaches to design easier with rapid content modeling and having the content available instantly. This is perfect when you’re building component-based design systems. Which you should be doing!

# Not-profit plan

## The plan

The non-profit plan mirrors the [Growth plan](https://www.sanity.io/pricing), but we offer it for free (no credit card required) as long as you stay within the quotas. Additionally, we've added the following features to the plan:

- 25 users included free of charge, with $15 per additional user without limit
- 3 datasets (+1 from Growth plan)
- [SAML SSO add-on](https://www.sanity.io/docs/platform-management/growth-plan-add-ons) included

Note that additional [add-ons](https://www.sanity.io/docs/platform-management/growth-plan-add-ons) are not available, and you need to add a credit card to pay for additional overages and users.

## Who's eligible?

We offer the non-profit plan to:

- Small and mid-sized organizations that are “organized and operated for a collective, public or social benefit” and where the revenue exceeding expenses goes back into the cause
- Educational and academic institutions of smaller sizes and budgets
- Open-source projects that are based on sponsorships or voluntary effort (so not monetized)

## Who's \*not \*eligible?

- Organizations that qualify for our [Enterprise plan](https://www.sanity.io/pricing), including large non-profit organizations like global humanitarian operations, universities, etc.
- Organizations that can’t comply with our [Terms of Service](https://www.sanity.io/legal/tos).

## How to apply?

[Fill out the application form](https://forms.gle/xkQstGLFrujT2me39) and you'll hear back from us within 14 business days. Please note:

- If you don't provide a valid Sanity project ID, your application will be ignored.
- You'll receive an email when a decision has been made, but we're not able to provide technical support over email after this. Please join our community on Discord to get help.
