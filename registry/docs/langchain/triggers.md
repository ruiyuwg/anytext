# Triggers

Source: https://docs.langchain.com/langsmith/agent-builder-triggers

Configure triggers to start your Agent Builder agents automatically.

Triggers define when your agent starts running. Connect your agent to external events or time-based schedules so it responds automatically to messages, emails, or recurring tasks.

## Add a trigger

To add a trigger:

```
Open your agent in the [Agent Builder](https://smith.langchain.com/agents) inbox.
Next to the agent name, click the  **Edit Agent** icon.



In the **Triggers** section, click **+ Add** and select the trigger you want to add.
```

## Add a Gmail trigger

The Gmail trigger activates your agent when new emails arrive in your inbox.

To add a Gmail trigger:

1. In the **Triggers** section, click **+ Add**.
2. Select the **Gmail** section and click **Connect Gmail Account**.
3. Enter the email address you want to monitor.
4. Click **Confirm**.
5. Authenticate with your Google account.
6. After completing authentication, click **I've completed authentication**.

Your agent will now activate when new emails arrive in your inbox. To let your agent read and respond to emails, add Gmail tools in the **Tools** section. Available Gmail tools include reading emails, sending replies, creating drafts, managing labels, and marking messages as read. See [Tool integrations](/langsmith/agent-builder-tools) for the full list.

The Gmail trigger only monitors your primary inbox. The following emails do not activate the trigger:

- **Alias emails**: Messages sent to an email alias rather than your primary address.
- **Mailing list emails**: Messages received through a mailing list or group.
- **Emails outside the inbox**: Messages that skip the inbox due to filters, or that land in spam, trash, or other folders.

## Add a Slack trigger

The Slack trigger activates your agent when messages are posted in a specific Slack channel.

For full setup instructions including OAuth authorization, bot invitation, and tool configuration, see [Integrate Slack with an agent](/langsmith/agent-builder-slack-app).

## Add a cron trigger

Cron triggers run your agent on a recurring time-based schedule, such as daily reports or weekly summaries. To add a cron trigger:

1. In the **Triggers** section, click **+ Add**.

2. Select the **Schedule** section and click **+ Create new schedule**.

3. Choose when to run your agent.

   Cron schedules are in UTC. Convert your desired execution time to UTC when configuring the schedule.

4. Click **Confirm**.

## Pause and resume triggers

You can pause and resume triggers without removing them. To pause all triggers:

1. In the [Agent Builder](https://smith.langchain.com/agents) inbox, open your agent.
2. Next to the agent name, click the  **Edit Agent** icon.
3. In the **Triggers** section, click  **Pause triggers** button to pause all triggers.

To resume all triggers, click  **Resume triggers** button.

## Thread behavior

How threads are marked depends on whether the agent uses triggers:

- **Chat agents (no trigger)**: Responses mark the thread as **unread**. Viewing the thread marks it as read.
- **Trigger-based agents**: Responses keep the thread as **read** by default.

You can manually mark any thread as read or unread at any time.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/agent-builder-triggers.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
