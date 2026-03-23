You can integrate WeCom with Application Real-Time Monitoring Service (ARMS)  for alert management. After creating a WeCom chatbot, you can configure notification policies to route alerts to designated WeCom groups. If any of the alert conditions for the notification policy are met, the system automatically alerts the WeCom group.

## Prerequisite

A WeCom group is created, where you'll receive alerts.

## **Precaution**

Due to WeCom's API licensing restrictions for third-party integrations, ARMS allows the calls of no more than 20 WeCom interfaces. We recommend that you restrict WeCom-based alert handling to critical responders.

## Step 1: Obtain the webhook URL of a WeCom chatbot

1.  Start and log on to the WeCom client.
2.  Click the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9659805461/p371939.png) icon in the upper-right corner of the WeCom group, and then click **Add Group Robot**.
3.  In the **Robot** message, click **Add Robot**.
4.  In the **Create Robot** dialog box, enter the name of the chatbot and click **Add Robot**.
5.  Click **Copy URL** to save the webhook URL of the WeCom chatbot.

## Step 2: Create a WeCom chatbot in the ARMS console

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
2.  Click the **DingTalk/Lark/WeCom** tab, and select **WeCom**.
    
3.  In the **Create DingTalk Chatbot** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the WeCom chatbot.
    
    Chatbot Webhook URL
    
    The webhook URL of the WeCom chatbot.
    
    Whether the Chatbot Sends Daily Statistics
    
    If you select this option, you must enter the time points in the `HH:mm` format. Separate multiple time points with commas (,). At the specified time points, ARMS automatically generates daily alert reports containing:
    
    -   Total triggered alerts
        
    -   Resolved alert count
        
    -   Pending alert backlog
        
    
    Card Content Configuration
    
    Customize the style and content of the alert notification card.
    

## Manage alerts in the WeCom group

After you receive an alert notification in the WeCom group, you can view and manage alerts directly in the WeCom group. For more information, see [Handle alerts in a group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## What to do next

After you create a notification object, you can query, edit, or delete the notification object on the **DingTalk/Lark/WeCom** tab.

-   To search for a notification object, enter a keyword of the object name in the search box and click the ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png) icon.
    
-   To edit a notification object, click **Edit** in the **Actions** column. In the dialog box that appears, modify the information and click **OK**.
    
-   To delete a notification object, click **Delete** in the **Actions** column. In the dialog box that appears, click **OK**.
