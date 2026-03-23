After you create a WeCom chatbot for the alert management feature of Managed Service for Prometheus, you can specify a WeCom group to receive alert notifications in a notification policy. When a matching rule of the notification policy is triggered, the system automatically sends an alert notification to the WeCom group that you specify. Then, you can manage the alert in the WeCom group.

## Prerequisites

A WeCom group is created in the WeCom client to receive alert notifications.

## Step 1: Obtain the webhook URL of a WeCom chatbot

1.  Start and log on to the WeCom client.
    
2.  Click the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9659805461/p371939.png) icon in the upper-right corner of the WeCom group, and click the button for adding a group robot.
    
3.  On the page that appears, click the button for adding a robot. Then, click the add button.
    
4.  On the page that appears, enter the name of the chatbot and click the add button.
    
5.  Click the copy button to save the webhook URL of the WeCom chatbot.
    

## Step 2: Create a WeCom chatbot

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  Click the **DingTalk/Lark/WeCom** tab. On the DingTalk/Lark/WeCom tab, click **WeCom**.
    
3.  In the **Create WeCom Chatbot** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the WeCom chatbot.
    
    Chatbot Webhook URL
    
    The webhook URL of the WeCom chatbot.
    
    Whether the Chatbot Sends Daily Statistics
    
    If you select this option, you must enter the points in time at which the daily statistics are sent. Separate multiple points in time with commas (,). The points in time are in the `HH:SS` format. The alert management feature sends the total number of alerts generated within a day, the number of solved alerts, and the number of alerts to be solved at the specified points in time.
    
    Card Content Configuration
    
    The custom style and content of the alert notification card.
    

## Manage alerts in a WeCom group

After an alert notification is received in a WeCom group, you can view and manage the alert in the WeCom group. For more information, see [Handle alerts in the specified group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## What to do next

After you create a notification object, you can query, edit, or delete the notification object on the **DingTalk/Lark/WeCom** tab.

-   To search for a notification object, enter a keyword of the object name in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.
    
-   To edit a notification object, click **Edit** in the **Actions** column. In the dialog box that appears, modify the information and click **OK**.
    
-   To delete a notification object, click **Delete** in the **Actions** column. In the dialog box that appears, click **OK**.
