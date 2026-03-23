This topic describes how to get started with the topic-based model in the Simple Message Queue (formerly MNS) console.

## Prerequisites

[Activate Simple Message Queue (formerly MNS) and grant permissions](/help/en/mns/getting-started/activate-message-service-and-grant-permissions#task234)

## Create a queue

1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Queue Model** > **Queues**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Queues** page, click **Create Queue**.
    
5.  In the **Create Queue** panel, configure the following parameters and click **OK**.
    
    -   **Name**: the name of the queue.
        
    -   **Maximum Message Length**: the maximum length of the message that is sent to the queue.
        
    -   **Long Polling Period**: the maximum duration for which long polling requests are held after the ReceiveMessage operation is called. The value 0 indicates that long polling is disabled.
        
    -   **Visibility Timeout Period**: the duration for which a message stays in the Inactive state after the message is received from the queue. For more information, see [Message visibility](/help/en/mns/developer-reference/visible-messages).
        
    -   **Message Retention Period**: the maximum duration for which a message exists in the queue. After the specified retention period, the message is deleted regardless of whether the message is received.
        
    -   **Message Delay Period**: the period after which all messages sent to the queue are consumed.
        
    -   **Enable Logging Feature**: specifies whether to enable the logging feature. If this feature is enabled, SMQ automatically pushes the operation logs of this queue to the specified Logstore. You can then view the message trace, delay, and other information from the logs. For more information, see [Log management](/help/en/mns/user-guide/mns-log-management).
        
    
    The queue is created and appears on the **Queues** page.
    

## Create a topic

1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Topic Model** > **Topics**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Topics** page, click **Create Topic**.
    
5.  In the **Create Topic** panel, configure the following parameters and click **OK**.
    
    -   **Name**: the name of the topic.
        
    -   **Maximum Message Length**: the maximum length of the message that is sent to the topic.
        
    -   **Enable Logging Feature**: specifies whether to enable the logging feature. If this feature is enabled, SMQ automatically pushes the operation logs of this topic to the specified Logstore. You can then view the message trace, delay, and other information from the logs. For more information, see [Log management](/help/en/mns/user-guide/mns-log-management).
        
    
    The system navigates to the **Topic Details** page for the topic.
    

## Create a subscription

You can create a subscription to push messages from a topic to a subscribed queue.

1.  On the **Topics** page, find the topic, and in the **Actions** column, click **View Subscriptions**.
    
2.  In the **View Subscriptions For Topic** panel, click the **Subscriptions** tab.
    
3.  On the **Subscriptions** page, click **Create Subscription**.
    
4.  In the **Create Subscription** panel, configure the following parameters and click **OK**.
    
    -   **Name**: The name of the subscription.
        
    -   **Subscription**: The push type for the subscription. The default is HTTP.
        
    -   **Receiver Endpoint**: The endpoint address for message delivery.
        
    -   **Optional:** **Message Filtering Tag**: Filters messages based on the specified tag.
        
    -   **Retry Policy**: The retry policy used when an error occurs while pushing a message to the endpoint.
        
        You can select one of the following retry policies:
        
        -   Backoff retry
            
        -   Exponential decay retry
            
        
    -   **Message Format**: The format of the message pushed to the endpoint.
        
        You can select one of the following message push formats:
        
        -   SIMPLIFIED
            
        -   JSON
            
        -   XML
            
        
    
    The subscription is created and appears on the **Subscriptions** page.
    

## Publish a message

You can publish a message to a topic from the console. The message is then pushed to the subscribed queue.

1.  On the **Topics** page, find the topic, and in the **Actions** column, click **Publish Message**.
    
2.  On the **Publish Message To Topic** page, configure the following parameters and click **Publish Message**.
    
    -   **Message Content**: The body of the message to publish.
        
    -   (Optional) **Message Tag**: The tag used for message filtering.
        
    -   **Subscription Type**: The type of subscription to which the message is pushed. This example uses a queue.
        
    
    A "Message sent successfully" message appears on the page.
    

## Receive a message

After a message is published, you can retrieve it from the queue to verify its content. This section describes how to receive a message from a queue in the console.

1.  On the **Queues** page, find the queue, and in the **Action** column, choose **More** > **Send Messages**.
    
2.  **Optional:** On the **Send/Receive Messages For Queue** page, in the **Receive Message** section, click **Edit Parameters of Receiving Messages**. In the **Edit Parameters of Receiving Messages** panel, configure **Receive Times** and **Polling Period**, and then click **OK**.
    
3.  On the **Send/Receive Messages For Queue** page, in the **Receive Message** section, click **Receive Message**.
    
    The message list for the queue appears in the **Receive Message** section.
    
4.  **Optional:** In the message list, find the message, and in the **Actions** column, click **Details**. In the **Message Details** dialog box, view the message body and other information.
    

## Delete the queue

1.  On the **Queues** page, find the queue, and in the **Actions** column, choose **More** > **Delete**.
    
2.  In the **Prompt** dialog box, read the information and click **OK**.
    
    The queue is deleted from the **Queues** page.
    

## Delete the topic

1.  On the **Topics** page, find the topic, and in the **Actions** column, choose **More** > **Delete**.
    
2.  In the **Prompt** dialog box, read the information and click **OK**.
    
    The topic is deleted from the **Topic List** page.
    
    **Warning**
    
    After a topic is deleted, its data cannot be restored.
