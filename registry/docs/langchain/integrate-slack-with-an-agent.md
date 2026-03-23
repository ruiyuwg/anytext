# Integrate Slack with an agent

Source: https://docs.langchain.com/langsmith/fleet/slack-app

Connect LangSmith Fleet to your Slack workspace to let your agents communicate with users in Slack.

With LangSmith Fleet, you can securely connect your agents to your Slack workspace to let your agents communicate with users in Slack.

After integrating, your agents will be able to:

- Receive messages directly from your Slack bot, starting a new run with the message content.
- Communicate back to your Slack workspace after processing the message.
- Obtain relevant context from Slack by reading thread messages and conversation history.

  The Slack integration with Fleet does not have any direct pricing. However, agent runs and traces are billed through the [LangSmith platform](https://smith.langchain.com) according to your organization's plan.

  For current pricing information, see the [LangSmith pricing page](https://www.langchain.com/pricing).

## Prerequisites

- An existing agent in Fleet (see [Quickstart](/langsmith/fleet/quickstart) to create one)
- Admin access to a Slack workspace or permission to install apps

## Create a Slack bot

```
1. Navigate to the **Integrations** page in Fleet.
2. Click **Add Slack App**.
3. Enter a name for the bot.
4. Click **Create Slack App**. You will be redirected to the Slack API site with a popup asking you to pick a workspace.


  Do not create a separate Slack app outside of this flow. The app must be created through this popup.




1. Choose the workspace where you want to install the bot.
2. Click **Next**.
3. Click **Create Bot**.



After creating the bot, you will receive your app credentials. Enter the following credentials in Fleet:

* App ID
* Client ID
* Client secret
* Signing secret


  Copy the full client secret and signing secret carefully to ensure a successful connection.




1. Click **Connect OAuth**.
2. Click **Allow** to give Fleet access to your app.



Link your Slack bot to an existing agent, or click **Finish** to link later.
```

## Link the Slack bot to an agent

You can link a Slack bot to an agent from the integrations page or from the agent editor. Each agent can only have one Slack app, and each Slack app can only be linked to one agent.

### Link from the integrations page

1. Navigate to the **Slack Apps** section on the **Integrations** page in Fleet.
2. Select the bot you want to link.
3. From the dropdown menu, choose the agent you want to link to.
4. Verify that \**\** appears next to the bot name.

### Link from the agent editor

1. Select your agent from **My Agents** in the left-hand navigation.

2. Click  **Edit Agent**.

3. Scroll to the **Channels** section.

   You may need to set the agent identity first. Click **Set Identity** in the top right corner.

4. Click **Slack**.

5. From the dropdown menu, select the Slack app you want to link.

You can also use the default LangSmith Slack bot instead of a custom app:

1. In the **Channels** section, click **LangSmith Bot**.
2. In Slack, invite the default app to an existing channel and copy the channel ID.
3. In the agent editor, click **Add Slack Channel** and paste the channel ID.
4. Send any message in the channel to start a run.

## Add Slack tools

Tools let your agent take actions. To respond in Slack, you need to add Slack tools.

You can also ask your agent to add these tools itself. In the agent chat, try: "Add the Slack tools so you can respond to messages."

1. In the agent editor, scroll to the **Tools** section.
2. Click **+ Add**.
3. Search for "Slack" and add the tools you need, if not already added:
   - **slack\_send\_channel\_message**—Post messages to a channel
   - **slack\_reply\_to\_message**—Reply in a thread
   - **slack\_write\_private\_message**—Send direct messages
   - **slack\_read\_channel\_history**—Read recent messages
   - **slack\_read\_thread\_messages**—Read thread replies
4. If prompted, click **Connect** to authorize the Slack tools.
5. Click **Save changes**.

## Invite the bot to your channel

1. In Slack, go to the channel where you want to use the bot.
2. Type `/invite @YourSlackBotName` to invite the bot.
3. Send a message mentioning the bot to verify it responds.

## Configure agent behavior (optional)

Your agent needs to know how to handle incoming Slack messages. Update its instructions by prompting it directly in the agent chat:

```
Update your instructions to handle the Slack Trigger and Slack Tools
for bidirectional communication
```

Adjust the instructions based on your use case—for example, you might want the agent to only respond to certain types of questions, or to pull information from specific sources before replying.

## Troubleshooting

### Agent does not respond

If your agent is not responding, you can try the following:

- Check the thread in Fleet for any approvals that need human input.
- Verify the bot was invited to the channel.
- Check the **Feed** tab for errors.
- Ensure the channel is not paused in the **Channels** section.
- Try reauthenticating with Slack to make sure Fleet has your most up-to-date Slack user ID stored.

### Not allowed to tag the bot

If you receive a private message saying you are not allowed to tag the bot, your Slack ID is not authorized for that agent. The agent's owner needs to share the agent with you—either by sharing run access with the whole workspace or with you individually.

## Next steps

```
Connect additional services to your agent



Set up email, schedule, or webhook channels



Start from a prebuilt agent template
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/fleet/slack-app.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
