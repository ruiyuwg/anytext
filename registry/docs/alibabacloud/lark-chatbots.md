The Alert Management sub-service of Application Real-Time Monitoring Service (ARMS) allows you to create a Lark chatbot and specify the corresponding Lark group chat in a notification policy to send alert notifications. When the matching rules of the notification policy are triggered, the system automatically sends alert notifications to the group chat. Then, you can directly manage the alert in the group chat.

## Step 1: Create a Lark chatbot and obtain the webhook URL

1.  Open and log on to the Lark.
    
2.  **Optional.** Click the **+** icon and then click **New group** to create a Lark group chat.
    
3.  Choose **![设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011857171/p420149.png)** > **Settings** icon on the right side of the group chat, and then click **BOTs**.
    
4.  On the **BOTs** tab, click **Add Bot** and select Custom Bot.
    
5.  Enter the bot name and description, and then click **Add**.
    
6.  Copy the webhook URL, select **Set keywords**, and enter the keyword `alarm`.
    
    ![飞书-Webhook](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201577.png)
    
7.  Click **Finish**.
    

## Step 2: Configure the chatbot in the ARMS console

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
2.  Click the **DingTalk/Lark/WeCom** tab, and then click **Lark**.
    
3.  In the Create Lark Chatbot panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Name
    
    Enter the name of the Lark chatbot.
    
    Chatbot Webhook URL
    
    Enter the webhook URL of the chatbot.
    
    Whether the Chatbot Sends Daily Statistics
    
    If you select this option, you must enter the points in time at which the daily statistics are sent. Separate multiple points in time with commas (,). Specify the points in time in the `HH:SS` format. The information that ARMS sends at the specified points in time includes the total number of alerts generated on the current day, the number of resolved alerts, and the number of alerts to be resolved.
    
    Card Content Configuration
    
    Customize the style and content of the alert notification card.
    

## Step 3: Create a notification policy

Create or modify a notification policy. In the Notification Objects step, set the **Notification Objects** parameter to DingTalk/Lark/WeCom and select the Lark chatbot. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).

## Manage alerts in the group chat

After you receive an alert notification in the group chat, you can view and manage the corresponding alert. For more information, see [Handle alerts in a group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## What to do next

After you create a notification object, you can query, edit, or delete the notification object on the **DingTalk/Lark/WeCom** tab.

-   To search for a notification object, enter a keyword of the object name in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.
-   To edit a notification object, find the notification object and click **Edit** in the **Actions** column. In the panel that appears, modify the information and click **OK**.
-   To delete a notification object, click **Delete** in the **Actions** column of the notification object. In the message that appears, click **OK**.
