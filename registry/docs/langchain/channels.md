# Channels

Source: https://docs.langchain.com/langsmith/fleet/channels

Configure channels to trigger your Fleet agents automatically.

Channels define when your agent starts running. Connect your agent to external events so it responds automatically to messages, emails, or other events.

To trigger an agent on a recurring basis, use [schedules](/langsmith/fleet/schedules).

## Add a channel

To add a channel:

```
Open your agent in the [Fleet](https://smith.langchain.com/agents) inbox.
Next to the agent name, click the  **Edit Agent** icon.



In the **Channels** section, click **+ Add** and select the channel you want to add.
```

## Add a Gmail channel

The Gmail channel activates your agent when new emails arrive in your inbox.

To add a Gmail channel:

1. In the **Channels** section, click **+ Add**.
2. Select the **Gmail** section and click **Connect Gmail Account**.
3. Enter the email address you want to monitor.
4. Click **Confirm**.
5. Authenticate with your Google account.
6. After completing authentication, click **I've completed authentication**.

Your agent will now activate when new emails arrive in your inbox. To let your agent read and respond to emails, add Gmail tools in the **Tools** section. Available Gmail tools include reading emails, sending replies, creating drafts, managing labels, and marking messages as read. See [Tool integrations](/langsmith/fleet/tools) for the full list.

The Gmail channel only monitors your primary inbox. The following emails do not activate the channel:

- **Alias emails**: Messages sent to an email alias rather than your primary address.
- **Mailing list emails**: Messages received through a mailing list or group.
- **Emails outside the inbox**: Messages that skip the inbox due to filters, or that land in spam, trash, or other folders.

## Add a Slack channel

The Slack channel activates your agent when messages are posted in a specific Slack channel.

For full setup instructions including OAuth authorization, bot invitation, and tool configuration, see [Integrate Slack with an agent](/langsmith/fleet/slack-app).

## Pause and resume channels

You can pause and resume channels without removing them. To pause all channels:

1. In the [Fleet](https://smith.langchain.com/agents) inbox, open your agent.
2. Next to the agent name, click the  **Edit Agent** icon.
3. In the **Channels** section, click  **Pause channels** button to pause all channels.

To resume all channels, click  **Resume channels** button.

## Thread behavior

How threads are marked depends on whether the agent uses channels:

- **Chat agents (no channel)**: Responses mark the thread as **unread**. Viewing the thread marks it as read.
- **Channel-based agents**: Responses keep the thread as **read** by default.

You can manually mark any thread as read or unread at any time.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/fleet/channels.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
