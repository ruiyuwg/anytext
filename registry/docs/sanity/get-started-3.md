# Get started

Instead of navigating studio structure, writing queries, or asking developers for help, you describe what you need in plain language. The agent understands the shape of your content, follows references, and works within your permissions.

This guide will help you understand what the Content Agent is, how to access it, and how to use its key capabilities.

![AI assistant interface with a search prompt to find marketing campaigns targeting Millennials.](https://cdn.sanity.io/images/3do82whm/next/8e0ed7edb5bd311d8dd04af1e414c9dfafe8f721-810x305.png)

With the Content Agent, you can:

- **Find content** across your project — "Show me all product pages missing meta descriptions."
- **Analyze patterns** like tone inconsistencies, metadata gaps, or outdated terminology.
- **Create documents** that match your schema, from blog posts to product pages.
- **Update content** — rewrite, translate, or improve fields across one or many documents.
- **Generate and transform images** directly within your documents.
- **All of the above!** “For all articles, summarize cleared feedback items and create a blog post reporting on how community interaction have improved our content.”

> \[!NOTE]
> Is it safe?
> Absolutely. The Content Agent never makes changes without your approval. All proposed edits require your review, and you control whether to create drafts, add to a content release, or discard changes entirely.

## Requirements

- Access to the [Sanity Dashboard](https://www.sanity.io/docs/dashboard).
- [Sanity Studio](https://www.sanity.io/studio) v5.1.0 or later.- After upgrading to v5.1.0, visit your studio once to connect it to Content Agent

The agent uses your existing Sanity permissions. It can only see documents you can see and edit content where you have write access.

## The interface

The Content Agent is available from your organization’s dashboard across all your projects.

![An AI content agent interface showing articles with updated SEO titles, listed in a release management panel.](https://cdn.sanity.io/images/3do82whm/next/7c2bfdd14e4e3550fcdbacf58d7c9a36ce7f47a5-1833x1053.png)

### Find the agent and start a chat

1. **Agent panel** - The Content Agent lives in a dedicated side panel in the dashboard, which can be collapsed and expanded as needed
2. **Dashboard side menu** - You can toggle the agent sidebar by clicking the ✨ option in the dashboard side menu
3. **Dashboard chat input** – You can also start a chat from the top of the dashboard home page as well

![A Content Agent software dashboard showing options for finding, creating, and editing content, with AI assistant prompts and recent activity logs.](https://cdn.sanity.io/images/3do82whm/next/f700a812915183d2d688d016792c07dae72bdcda-1668x979.png)

### Agent panel

Your chat with the agent. Responses, document lists, and status updates appear here.

![A software interface showing a Content Agent processing a request to list AI Assist articles lacking SEO titles, with a related list of articles visible on the right.](https://cdn.sanity.io/images/3do82whm/next/f780ec54e481e5907e9149ffadda9902473a3469-1285x923.png)

The **input field** at the bottom shows your current context ([read more about context further on in the article](https://www.sanity.io/docs/content-agent/introduction)). Remove or change context anytime. This is also where you can review a log of the agent’s actions and reasoning.

### Results panel

The right-hand panel displays what the Content Agent has found or proposed changes for you to review. Toggle between two tabs:

**Searches** — View documents matching your query criteria. Select specific items using checkboxes to include them in your next action. This helps you narrow down exactly which content you want to work with and is also useful for testing your intended changes before applying them to large sets of documents. Once you’re happy with your plan, you can direct the agent to work on the whole set of documents by deselecting your subset.

![Content Agent AI content management interface, showing a list of five articles missing SEO titles and a selection panel with three articles chosen for an AI chat.](https://cdn.sanity.io/images/3do82whm/next/acc0515f539995874e38c575f8f873f293beba67-1348x923.png)

**Changes** — Pending edits awaiting approval.

The changes displayed here are prepared but not executed. At this stage, no drafts have been created, and no content has been modified in your project.

> \[!NOTE]
> No history?
> Content Agent operations are “shy” – they won’t appear in document history, content releases, or search results, but they can be accessed via API and are not considered private.

Once you're satisfied with the proposed changes, you can choose to:

- Confirm all changes to create drafts
- Add the changes to a content release
- Discard the changes if they don't meet your requirements

This preview step gives you full control to review exactly what the Content Agent will modify before any actual changes are made to your content.

![A user interface for a Content Agent application showing proposed SEO title changes and document updates.](https://cdn.sanity.io/images/3do82whm/next/a4f4987dad9d36e100fd9343c0f502bfaffac8bc-1348x923.png)

## Core concepts

### Searches, Changes, and Context

Content Agent usage is measured in two units:

**Searches** are read operations. When you ask the agent to find, search, analyze, or answer questions about your content, that's a search.

Examples:

- Find all blog posts from last month
- Which pages are missing meta descriptions?

![A Content Agent AI interface shows a list of five documentation articles missing SEO titles, with three articles selected in a side panel.](https://cdn.sanity.io/images/3do82whm/next/1d2586f7ae7febb465fc215b7d7d675dca02779d-1678x1135.png)

**Changes** are write operations. When the agent creates, updates, or generates content, that's a change.

Examples:

- Translate this article into Spanish
- Generate a hero image for this page

![A Content Agent user interface displays a conversation about adding SEO titles to articles, next to a list of 5 proposed document updates with 'Confirm all' and 'Discard all' options.](https://cdn.sanity.io/images/3do82whm/next/388ca513fc4bcc069f0db992148c60087077e8db-1678x1135.png)

Understanding this distinction helps you predict usage. Browsing and analyzing content consumes queries; making changes consumes actions.

#### How searches and changes affect cost

A search costs the same whether it returns 10 results or 10.000, a change incurs cost for each document changed. Having the agent do complex work across many documents can consume a lot of resources in a short timespan. The work is done in parallell with full knowledge of your schema using a clever model that can figure out what to do.

> \[!TIP]
> Do a test run
> Concerned about cost? Try your prompt on a few documents first by selecting them from the results before running it on a large set of documents.

Read more about [AI usage and billing](https://www.sanity.io/docs/platform-management/how-ai-credits-work) here.

### Context

The agent responds based on context. The current context is always shown in the chat input, and updates as you navigate your studio. The context is provided as a hint for the agent, but you can use natural language to instruct it how to use that information.

![A UI search bar with "Content Release API Cheat Sheet" selected.](https://cdn.sanity.io/images/3do82whm/next/01ff86e0b3dc3979d9515d2dae62dce180813b2b-578x151.png)

The agent understands context naturally throughout your conversation:

- When chatting about a document, the agent focuses on it automatically
- As you search or filter content, those results become your new context
- The agent can consider your entire project when no specific context is set
- You can always see what context the agent is using at the bottom of the chat input, and change it if needed

## A practical example

In this section, we’ll examine how a complete content operation assisted by the agent might play out. Assume a project with some common content types, such as articles and blog posts.

### Search

We’ll start by asking the agent to find articles that lack keywords.

![Content Agent AI interface showing 445 articles lacking keywords, with a chat suggesting to add them and a list of article titles.](https://cdn.sanity.io/images/3do82whm/next/4e9cb0fe12f3f6ab75542a80a629cb614d9dcf62-1462x995.png)

The agent has found a bunch of un-keyworded articles, and is helpfully pointing out that some of them are quite old. Since each document change incurs a cost (small, but a cost nonetheless), we don’t want to indiscriminately make changes to all 400+ matches. Let’s filter our results by telling the agent to focus on only articles from the last couple of months.

![Content Agent application interface showing a chat with filtered articles needing keywords on the left, and a list of SQL 2.0 articles with four selected on the right.](https://cdn.sanity.io/images/3do82whm/next/bd09c1dff5909e0dbba6eb77d44cd8e34d580361-1544x1031.png)

This narrowed our search down to 18 documents, which seems like a more manageable amount to work with. We can further reduce our number of documents by checking individual matches on or off in the results view.

![A user interface displaying a completed multi-step data retrieval process for articles, followed by a chat session on "All Articles Without Search Keywords."](https://cdn.sanity.io/images/3do82whm/next/f7a7e4e6991f5e668b451db56f2c953ad2044a5e-444x383.png)

If you’re curious about how the agent has reasoned when fetching your results, the expandable log modal labeled **Thinking process** found above your chat input might shed some light.

#### Change

Once happy with our result, we’ll ask the agent to apply one or more changes to the selected set – in our case: articles that need keywords.

![A software interface called "Content Agent" displays proposed keyword additions and updates for 18 SQL 2.0 related articles.](https://cdn.sanity.io/images/3do82whm/next/12eb02f1b7c47d9bea6726e00b5959c679d51083-1544x1031.png)

The agent will plan out the changes and report back in the **Changes** tab. Note that even at this point, these changes are still entirely hypothetical. All changes require your approval. When the agent proposes an edit, you review it before anything is applied.

![UI with "Discard all" and "Confirm all" buttons, with a dropdown showing "Create release" and "Create / overwrite drafts" options.](https://cdn.sanity.io/images/3do82whm/next/c49f85f1668aebc090044fe9f65076d741586c15-329x148.png)

When you are happy, click the **Confirm** button. Depending on your preferred workflow, select either to create drafts for the relevant documents or to put all the changes into a [content release](https://www.sanity.io/docs/studio/content-releases-configuration). You can now review the drafted changes and publish when ready.

![A Content Agent interface displays a task titled "Adds keywords to articles," showing 18 proposed changes to various articles listed on the right.](https://cdn.sanity.io/images/3do82whm/next/f7ba4d081db01060017f4547aade441741d25c73-1720x1064.png)

## What you can do

### Find content

Ask the agent to locate content using natural language:

- "Do we have any articles about eco-friendly packaging?"
- "Show me all product pages missing meta descriptions."
- "List all documents not updated in over a year."

The agent searches by meaning, not just keywords. Ask for "content about sustainability" and it finds relevant documents even if they don't use that exact word.

### Analyze and audit

The agent interprets tone, structure, and patterns across your content:

- "Analyze our blog posts for tone inconsistencies."
- "Find content that doesn't follow our style guide."

You can also ask operational questions: "How many articles did each author publish last month?"

### Create content

Generate new documents that match your schema:

- "Create a new blog post draft about our Content Agent feature."
- "Write a product description for our reusable water bottle."

The agent produces structured content with the right field types, not just free text.

### Update content

Propose edits to existing documents:

- "Rewrite this paragraph to be more concise."
- "Translate this article into Spanish."
- "Add missing alt text to all images in this document."

For bulk updates across multiple documents, the agent displays what it plans to change before applying any changes.

### Generate and transform images

Inside any document with an image field:

- "Generate a header image in a flat illustration style."
- "Remove the background from this product photo."

## Example workflow: Content audit

Scenario: You need to update product references after a SKU discontinuation.

1. Start with: "Find all articles referencing SKU-2023-XL5 (discontinued)"
2. The agent returns 73 results. Ask: "Which of these are still published?"
3. The agent filters to 41 published documents. Ask: "Rewrite the sections mentioning SKU-2023-XL5 to reference our new SKU-2024-XL7 model instead"
4. Review the 41 unique drafts created, each with updated product references ready for your approval.

What would have required manually searching and editing dozens of documents becomes a simple conversation that creates all the necessary drafts in minutes.

## Limitations

- \*\*Cannot work with local files. \*\*Only what’s in the dataset, or available on the web.

- **Cannot publish documents.** A human is needed for final review.

- **No rollback within the agent.** Use Studio's document history to revert changes.- All projected changes are kept separate from your document history until you review and accept them – no messy, half-implemented changes!

- **No deletion.** For safety, the agent cannot delete documents.

- **No Canvas or Media Library.** The agent works with Studio content only.

## FAQs

**Why didn't the agent find something?** Try rephrasing your request or adding more context. Check the **Thinking Process** log for misunderstandings. Confirm you have permission to view the document.

**Why didn't my document update?** The agent proposes changes but doesn't apply them automatically. Look for the review prompt and approve the update.

**Does the agent remember past conversations?** You can revisit past chats from the agent panel, but context doesn't carry over between sessions automatically.

**How is my content used?** Conversations may be stored for up to 30 days to improve the system. See our [Terms of Service](https://www.sanity.io/legal/tos) and [AI Terms of Service](https://www.sanity.io/legal/tos-ai) for details.

**Which Sanity AI tool should I use?**

- **Content Agent** — Conversational assistant in the Dashboard. Use for project-wide tasks: searching, auditing, analyzing patterns, and bulk updates.
- **AI Assist** — Studio plugin with inline AI help (✨). Use for quick, field-level tasks, such as rewriting a paragraph.
- **Agent Actions** — Developer APIs for running AI tasks automatically. Use for migrations, localization pipelines, or background automation.
