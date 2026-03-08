# How AI Credits work

Whether working with [Content Agent](https://www.sanity.io/docs/content-agent) or [Agent Actions](https://www.sanity.io/docs/agent-actions) Sanity AI tooling is measured and billed using AI Credits. This article examines what AI Credits are and how they work.

> \[!TIP]
> Free credits every month!
> Every organization receives **100 free AI credits per month!** Enough to explore these features without commitment.

## Credit pricing

Each AI credit costs **$0.05**. Credit consumption depends on the type and scope of interaction.

- **Query** (your message to Content Agent): **4 credits** ($0.20)
- **Action** (tool use by Content Agent): **2 credits** ($0.10)

**Queries** are messages you send to the Content Agent. Each request includes a 4-credit query cost.

**Actions** are operations the agent performs on your behalf: GROQ queries, web searches, document analysis, content creation, and image generation. Each tool execution costs 2 credits.

A single request may involve multiple tool executions depending on the complexity of the task. The number of executions depends on the amount and type of work required - it is not a fixed number per document.

### Example cost estimates

Costs vary based on document size, structure, and workflow complexity. The examples below are directional estimates and rounded up.

##### AI Credits cost examples

##### AI Credits cost examples

| Prompt | Estimated calculation | Estimated credits |
| --- | --- | --- |
| "Show Q3 blog posts" | 1 query (4) + small read (2) | ~6 credits |
| "Analyze 10 articles (~1 MB total)" | 1 query (4) + analysis (~2 credits per 100 KB) | ~24 credits |
| "Update 5 documents" | 1 query (4) + mutation (~6 credits per document) | ~34 credits |
| "Translate 3 documents into 2 languages" | 1 query (4) + translation (~12 credits per document per language) | ~76 credits |

For large bulk operations, the agent may request confirmation before proceeding if estimated usage is high. If your organization reaches its spending limit, AI operations pause until the next billing cycle or until the limit is increased.

## Controlling costs

Content Agent can easily operate on a large number of documents which can incur unexpected billing if used indiscriminately. To shield your organization from unintended costs you can set spending limits that will halt all AI operations once reached.

### Control usage

You can find detailed overviews of your AI usage by visiting sanity.io/manage and clicking the **Usage** tab in the top level navigation.

![An AI usage dashboard showing 6,826 total credits used, broken down by Agent Actions, Content Agent Queries, and Content Agent Actions, with a bar chart visualizing daily usage trends over 8 days.](https://cdn.sanity.io/images/3do82whm/next/498b3df2397fb1ad92f032114a0f3eb76aec0bf2-953x992.png)

The usage overview also shows which individuals in your organization are the most prolific users of AI features.

![Dashboard detailing AI usage by user, featuring a table of total usage and a stacked bar chart of daily usage over time.](https://cdn.sanity.io/images/3do82whm/next/364af7a3dc39983cf00722aa84dc4ba053f8b151-966x764.png)

#### Set spending limits for AI

You can set a monthly spending limit to prevent unexpected charges. When your organization reaches the cap, AI features pause until the next billing cycle or until you raise the limit. If an operation is started while credits are still available, it will run to completion even if it exceeds the remaining budget. Visit [sanity.io/manage](https://sanity.io/manage) and navigate to **Settings** to set or change your spending limits.

![AI usage dashboard showing $100 remaining and a $100 spending cap.](https://cdn.sanity.io/images/3do82whm/next/d14dba9878e5867eae73fc530116bb4823eb1eb3-1008x249.png)

### Tips for efficient usage

When working with large document sets, select a few documents first to refine your prompt before applying it to the entire set. This helps you optimize your queries and reduce unnecessary credit consumption.

# Activity Feed

The Activity Feed lets you investigate what happened in your Sanity projects. If you are uncertain how a scenario took place, you can use the Activity Feed to investigate what actually happened.

## What is an event?

An event is created when various actions are performed in the system. This can be by a user, by Sanity, or even by a robot token. An event contains information about what happened and when. Events differ by action, and each contains a unique ID.

### List of team events

- user creates team
- user changes team’s name
- user changes billing address
- user changes payment method
- user changes EU Representative
- user changes Data Protection Officer
- user changes user’s role
- user removes user
- user invite user(s)
- user joins team
- user revoked invitation

### List of project events

- user creates project
- user changes project’s name
- user changes project’s custom studio URL
- user changes project’s plan
- user adds CORS origin
- user removes CORS origin
- user adds webhook
- user removes webhook
- user adds API token
- user removes API token
- user changes user’s permissions
- user removes user
- user invites user(s)
- user joins project
- user revokes invitation
- user creates dataset
- user deletes dataset
- user edits dataset
- user duplicates dataset

## Exporting

Actions for projects and teams are available as a CSV export from the [manage dashboard](https://sanity.io/manage) for each project. The export can be customized by the date when created.

### Data provided in the export

- action
- actorEmail
- actorId
- actorName
- correlationId
- datasetName
- description
- documentId
- id
- metadata.email
- metadata.invitedBy
- metadata.role
- organizationDisplayName
- organizationId
- projectDisplayName
- projectId
- timestamp
- transactionId
- userEmail
- userId
- userName
- version
