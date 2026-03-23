When your application triggers an alert, you need your on-call team to know immediately. Application Real-Time Monitoring Service (ARMS) sends alert notifications to a DingTalk group through a chatbot, so your team can view and respond to incidents without leaving the conversation. To use a DingTalk chatbot, you create the chatbot in ARMS, then add it to a notification policy.

## Prerequisites

Before you begin, make sure that you have:

-   A DingTalk group created in your DingTalk client to receive alert notifications
    
-   The webhook URL of a custom chatbot in that DingTalk group. For details, see [Obtain the webhook URL of a DingTalk chatbot](/help/en/arms/alarm-operation-center/obtain-the-webhook-url-of-a-dingtalk-chatbot)
    

## Create a DingTalk chatbot in ARMS

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  On the **Notification Objects** page, click the **DingTalk/Lark/WeCom** tab, and then click **DingTalk**.
    
4.  In the **Create DingTalk Chatbot** panel, configure the following parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the DingTalk chatbot.
    
    Signature Key
    
    Optional. If you specify a signature key, DingTalk authentication is performed by using the signature key. If you do not specify a signature key, ARMS uses a whitelist with the keyword `Alert` for authentication by default.
    
    Chatbot Webhook URL
    
    The webhook URL that you obtained from the DingTalk chatbot.
    
    Whether DingTalk Chatbot Sends Daily Statistics
    
    Optional. If selected, specify the times at which daily statistics are sent. Separate multiple times with commas (,) in the `HH:SS` format. The daily statistics include the total number of alerts on the current day, the number of resolved alerts, and the number of alerts to be resolved.
    
    Card Content Configuration
    
    Customize the style and content of the alert notification card that appears in the DingTalk group.
    

## Add the chatbot to a notification policy

After you create a DingTalk chatbot, add it to a notification policy so that ARMS routes alerts to the DingTalk group. The notification policy defines which alerts trigger notifications and which notification objects receive them.

## Manage alerts in a DingTalk group

After alert notifications arrive in a DingTalk group, you can view and manage alerts directly in the group. For more information, see [Handle alerts in the specified group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## Edit, search, or delete a chatbot

On the **Notification Objects** page, click the **DingTalk/Lark/WeCom** tab to manage existing chatbots:

-   **Search**: Enter a keyword in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.
    
-   **Edit**: Click **Edit** in the **Actions** column. Modify the settings in the dialog box, and then click **OK**.
    
-   **Delete**: Click **Delete** in the **Actions** column. In the dialog box, click **OK**.
