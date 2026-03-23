# Content Agent for Slack

## Install the Slack app

Add the Content Agent to your Slack workspace:

[Install Sanity for Slack](https://api.sanity.io/v1/agent/integrations/slack/install)

This installs the **Sanity** app into your workspace. A workspace admin may need to approve the installation.

### Requirements

- A Sanity account with at least one project
- A Slack workspace (Free, Pro, Business+, or Enterprise
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio) v5.1.0 or later with a [deployed schema](https://www.sanity.io/docs/apis-and-sdks/schema-deployment)

> \[!NOTE]
> Schema deployment
> The agent needs your [deployed schema](https://www.sanity.io/docs/apis-and-sdks/schema-deployment) to understand your content model. If you haven't deployed your schema, the agent can't discover your studio.

Deploy your schema using one of these methods:

- Run `npx sanity deploy` (deploys both the studio and schema)
- Run `npx sanity deploy --external` (registers the studio URL without hosting it on Sanity)
- Visit your deployed studio at least once (this broadcasts the schema automatically)

## Connect your Sanity account

After installation, each team member connects their own Sanity account. The agent uses your individual permissions, so it can only see and edit content you have access to.

1. Open a conversation with the **Sanity** app in Slack (find it in your Apps sidebar), or @mention it in any channel
2. The app prompts you to **Connect Sanity Account**
3. Click the link to authorize with your Sanity credentials

To check your connection status or disconnect, use the **Account Settings** shortcut (search "Account Settings" in Slack's shortcuts menu).

## Start a conversation

There are three ways to talk to the Content Agent in Slack:

### Assistant threads

Open the **Sanity** assistant from Slack's AI sidebar. This gives you a dedicated thread with suggested prompts to get started:

- "Show me all campaigns targeting a 'Millennials' audience that are still in draft."
- "Draft three distinct blog post outlines about the impact of remote work on company culture."
- "Translate our ten most popular blog posts into German, but keep our company name and product names untranslated."

### Direct messages

Send a message directly to the Sanity app in your Apps sidebar. This works the same as an assistant thread.

### @mentions in channels

Mention **@Sanity** in any channel or thread where the app has been added. The agent responds in-thread to keep the conversation organized.

**Multi-person threads:** When a second person joins a thread the agent is active in, the agent steps back and only responds to direct @mentions. This keeps group conversations clean.

## Choose a studio

When you start your first conversation, the agent asks which Sanity studio to use. Your choice determines which project and dataset the agent works with.

If your organization has multiple studios, you can tell the agent which one to use at any time. Say something like *"Switch to my marketing studio"* or *"Use the production dataset."*

## What you can do

The Content Agent for Slack has the same capabilities as the [Dashboard Content Agent](https://www.sanity.io/docs/content-agent). Describe what you need in plain language.

### Find content

- *"Show me all product pages missing meta descriptions."*
- *"Do we have any articles about eco-friendly packaging?"*

The agent searches by meaning, not just keywords. Ask for *"content about sustainability"* and it can find relevant documents even if they don't use that exact word.

### Create content

- *"Create a new blog post draft about our Content Agent feature."*
- *"Write a product description for our reusable water bottle."*

The agent produces structured content that matches your schema, not just free text.

### Update content

- *"Rewrite this paragraph to be more concise."*
- *"Translate this article into Spanish."*
- *"Add missing alt text to all images in this document."*

All proposed edits require your review. The agent never makes changes without approval.

### Analyze and audit

- *"Analyze our blog posts for tone inconsistencies."*
- *"How many articles did each author publish last month?"*

## Feedback

After each response, the agent shows 👍 and 👎 buttons. Use these to help improve the agent's responses over time.

## Limitations

- **Cannot publish documents.** The agent creates drafts. A human reviews and publishes.
- **Cannot delete documents.** For safety, deletion isn't supported.
- **No local files.** The agent only works with content in your Sanity dataset or available on the web.
- **No Canvas or Media Library.** The agent works with Studio content only.
- **No rollback within the agent.** Use the Studio's document history to revert changes.
- **One organization per session.** Your connection is scoped to a single Sanity organization. To work with projects in a different organization, disconnect and reconnect with the other org.
- **Actions are attributed to you.** Any content the agent creates or edits appears under your name in the document history.

## Troubleshooting

**The app isn't responding**
Check that your Sanity account is connected. Open the **Account Settings** shortcut to verify. If you recently connected, try sending a new message.

**"Connect your account" keeps appearing**
Your session may have expired. Click the authorization link again to reconnect.

**The agent can't find my content**
Make sure you've selected the correct studio. The agent only searches within the project and dataset tied to your chosen studio. Also verify you have permission to view the documents you're looking for.

**The app doesn't respond to messages in a channel**
The Sanity app must be added to the channel first. Mention **@Sanity** to invite it, or add it through Slack's channel settings.

**No studios available**
The agent can only discover studios with a [deployed schema](https://www.sanity.io/docs/apis-and-sdks/schema-deployment). Run `npx sanity deploy` or visit your deployed studio to broadcast the schema.

#### Related articles

[Content Agent](https://www.sanity.io/docs/content-agent)

[How AI Credits work](https://www.sanity.io/docs/platform-management/how-ai-credits-work)

[Schema Deployment](https://www.sanity.io/docs/apis-and-sdks/schema-deployment)

[Join the community](https://snty.link/community)
