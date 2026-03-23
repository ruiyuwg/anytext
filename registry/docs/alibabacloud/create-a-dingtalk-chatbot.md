When Prometheus alert rules trigger, your team needs timely notifications to respond. Managed Service for Prometheus can send alert notifications to a DingTalk group through a chatbot. After you create a DingTalk chatbot and link it to a notification policy, alerts that match the policy are automatically sent to the specified DingTalk group.

## Prerequisites

Before you begin, make sure that you have:

-   A DingTalk group created on your DingTalk client to receive alert notifications
    
-   A custom chatbot created in that DingTalk group, and the webhook URL of the chatbot. For details, see [Obtain the webhook URL of a DingTalk chatbot](/help/en/prometheus/user-guide/obtain-the-webhook-url-of-a-dingtalk-chatbot#concept-106247-zh)
    

## Create the chatbot

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  Click the **DingTalk/Lark/WeCom** tab, then click **DingTalk**.
    
4.  In the **Create DingTalk Chatbot** panel, configure the following parameters and click **OK**.
    
    ****Parameter****
    
    ****Required****
    
    ****Description****
    
    Name
    
    Yes
    
    The name of the DingTalk chatbot.
    
    Signature Key
    
    No
    
    The signature key for DingTalk authentication. If left blank, a keyword whitelist is used instead. The default keyword is `alert`.
    
    Chatbot Webhook URL
    
    Yes
    
    The webhook URL obtained in the prerequisites.
    
    Whether the Chatbot Sends Daily Statistics
    
    No
    
    If selected, specify the times of day to receive a summary of total, solved, and unresolved alerts. Separate multiple times with commas (,). Format: `HH:SS`.
    
    Card Content Configuration
    
    No
    
    The custom style and content of the alert notification card.
    

## Handle alerts in a DingTalk group

After alerts arrive in the DingTalk group, your team can view and respond to them directly in the group chat. For details, see [Handle alerts in a group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## Edit or delete a chatbot

On the **DingTalk/Lark/WeCom** tab, you can manage existing notification objects:

****Operation****

****Steps****

Search

Enter a keyword in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.

Edit

Find the target notification object and click **Edit** in the **Actions** column. Modify the settings in the panel that appears and click **OK**.

Delete

Click **Delete** in the **Actions** column. In the confirmation dialog, click **OK**.
