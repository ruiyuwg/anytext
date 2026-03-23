-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Google Cloud CCaaS](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
-   [User Guides](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

Send feedback

# Transfer a chat Stay organized with collections Save and categorize content based on your preferences.

This page explains how to transfer a chat.

This page assumes that you are signed into the Contact Center AI Platform (CCAI Platform) portal. For more information, see [Access the CCAI Platform portal](/contact-center/ccai-platform/docs/getting-started-for-agents#access-the-ccaip-portal).

## Warm and cold transfers

A chat transfer is considered _warm_ or _cold_ depending on whether you leave the chat before or after another agent joins:

-   **Warm transfer**: you leave a chat _after_ another agent joins the chat.
    
-   **Cold transfer**: you leave a chat after you add an agent or queue to the chat, but _before_ an agent actually joins the chat. Cold transfers are logged as such in reporting and session metadata.
    

## Transfer a chat to an agent or a queue

When you transfer a chat, you can add either an agent or a queue to the chat. If you add a queue, one of the agents from that queue is added to the chat.

### Add an agent to a chat

To add an agent to a chat, follow these steps:

1.  In the CCAI Platform portal, click chat\_bubble **Chat icon** to open the agent chat adapter.
    
2.  In the chat adapter, click the chat indicator for the chat that you want to transfer.
    
3.  Click shuffle**Transfer / Add**.
    
4.  Click the **Agent** tab.
    
5.  Optional: Search by name or keyword to narrow your choices.
    
6.  Optional: Click **Available** to display only available agents.
    
7.  Click shuffle**Transfer / Add** next to the agent that you want to add to the chat. A dialog displays that indicates that the transfer is in progress.
    
8.  Depending on your situation, do one of the following:
    
    -   While the transfer is in progress, leave the chat by clicking **Leave chat** (a chat bubble with an arrow pointing to the right). This is a cold transfer. The dismissal timer is paused and a cold transfer is logged in reporting and session metadata.
        
    -   When another agent joins the chat, completing the transfer, leave by clicking **End chat** (a chat bubble with an **X**). This is a warm transfer. Note that the **Leave chat** button turns into the **End chat** button when the transfer is complete.
        
    
    For more information, see [Warm and cold transfers](#warm-and-cold-transfers).
    

### Add a queue to a chat

To add a queue a chat, follow these steps:

1.  In the CCAI Platform portal, click chat\_bubble **Chat icon** to open the agent chat adapter.
    
2.  In the chat adapter, click the chat indicator for the chat that you want to transfer.
    
3.  Click shuffle**Transfer / Add**. The **Queue** tab is selected.
    
4.  Optional: Search by name to narrow your choices.
    
5.  Click shuffle**Transfer / Add** next to the queue that you want to add to the chat. A dialog displays that indicates that the transfer is in progress.
    
6.  Depending on your situation, do one of the following:
    
    -   While the transfer is in progress, leave the chat by clicking **Leave chat** (a chat bubble with an arrow pointing to the right). This is a cold transfer. The dismissal timer is paused and a cold transfer is logged in reporting and session metadata.
        
    -   When another agent joins the chat, completing the transfer, leave by clicking **End chat** (a chat bubble with an **X**). This is a warm transfer. Note that the **Leave chat** button turns into the **End chat** button when the transfer is complete.
        
    
    For more information, see [Warm and cold transfers](#warm-and-cold-transfers).
    

## Chat transfer behaviors

By default, you can transfer chats only to other agents with a status of **Available**. However, if your administrator has enabled chat transfers to all logged-in agents (whether they are available or not) then you can transfer a chat to any logged-in agent. For more information, see [Enable transfers to all logged in agents](/contact-center/ccai-platform/docs/agent-status).

Transferring a chat to a team is not supported. You can set up a team-specific queue and then transfer chats to that queue.

For information about routing behavior when transferring a chat to a queue with automatic redirection enabled, see [Automatic redirection](/contact-center/ccai-platform/docs/Call_Routing#automatic_redirection).

## What's next

-   [Getting started for agents](/contact-center/ccai-platform/docs/getting-started-for-agents)
    
-   [Handle a chat](/contact-center/ccai-platform/docs/handle-a-chat)
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
