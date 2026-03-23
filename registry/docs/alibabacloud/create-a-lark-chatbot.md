When your infrastructure triggers a Prometheus alert, you need the right people to see it immediately. Managed Service for Prometheus integrates with Lark to deliver alert notifications directly to a group chat, so your team can triage and resolve issues without switching tools.

After you complete this setup, you can:

-   Receive real-time Prometheus alert notifications in a Lark group
    
-   View daily alert statistics at scheduled times
    
-   Manage and resolve alerts directly from the group chat
    
-   Customize the alert notification card layout and content
    

## Prerequisites

Before you begin, make sure that:

-   The Application Real-Time Monitoring Service (ARMS) Intelligent Alerting application is added to your Lark organization's application directory. If it has not been added, members of the Lark organization can send a request to the administrator to obtain the application.
    
-   You have access to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home)
    

## Step 1: Create a Lark chatbot and obtain the webhook URL

Set up a custom bot in a Lark group chat and copy its webhook URL. Managed Service for Prometheus uses this URL to send notifications to your Lark group.

1.  Open and log on to Lark.
    
2.  **(Optional)** Click the **+** icon and then click **New group** to create a group chat. Skip this step if you already have a Lark group for alert notifications.
    
3.  In the group chat, click the settings icon ![Settings icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011857171/p420149.png) on the right side and then click **BOTs**.
    
4.  On the **BOTs** tab, click **Add Bot** and select **Custom Bot**.
    
5.  Enter a bot name and description, and then click **Add**.
    
6.  Copy the webhook URL. Under security settings, select **Set keywords** and enter the keyword `alert`.
    
    **Important**
    
    Save the webhook URL before closing this dialog. You need it in the next step.
    
    ![Lark webhook URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201577.png)
    
7.  Click **OK**.
    

## Step 2: Configure the chatbot in the Managed Service for Prometheus console

Add the Lark chatbot webhook URL to the Managed Service for Prometheus console so the service can send alert notifications to your Lark group.

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  Click the **DingTalk/Lark/WeCom** tab, and then click **Lark**.
    
4.  In the **Create Lark Chatbot** panel, configure the following parameters and click **OK**.
    
    ****Parameter****
    
    ****Description****
    
    **Name**
    
    A descriptive name for the Lark chatbot, such as `prod-alerts-lark`.
    
    **Chatbot Webhook URL**
    
    The webhook URL copied from Step 1.
    
    **Whether the Chatbot Sends Daily Statistics**
    
    Turn on to receive a daily alert summary at specified times. Enter one or more times in `HH:SS` format, separated by commas. The summary includes the total number of alerts for the day, the number of resolved alerts, and the number of unresolved alerts.
    
    **Card Content Configuration**
    
    Customize the style and content of the alert notification card.
    

## Step 3: Link the chatbot to a notification policy

A notification policy defines which alerts are sent to which notification objects. To route alerts to your Lark group, link the chatbot you created to a notification policy.

1.  Create or modify a notification policy. For detailed instructions, see [Create and manage a notification policy](/help/en/prometheus/user-guide/create-a-notification-policy#concept-rr3-55h-hhb).
    
2.  In the **Notification Objects** step, set the notification object type to **DingTalk/Lark/WeCom** and select the Lark chatbot you created in Step 2.
    

## Verify the integration

After you link the chatbot to a notification policy, wait for an alert to fire and confirm that the notification card appears in your Lark group. If no notification arrives, verify the following:

-   The webhook URL is correct and the security keyword `alert` is set.
    
-   The notification policy matching rules cover the expected alert.
    
-   The ARMS Intelligent Alerting application is active in your Lark organization.
    

## Manage alerts in the group chat

After alerts start arriving in the Lark group, team members can view and manage alerts directly from the chat. For more information, see [Handle alerts in a group chat](/help/en/arms/alarm-operation-center/handle-alerts-in-group-chats#task-2081495).

## Manage notification objects

After you create a notification object, you can search, edit, or delete it on the **DingTalk/Lark/WeCom** tab:

-   **Search**: Enter a keyword in the search box and click the search icon ![Search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2988805461/p371925.png).
    
-   **Edit**: Find the notification object and click **Edit** in the **Actions** column. Modify the settings and click **OK**.
    
-   **Delete**: Click **Delete** in the **Actions** column of the notification object. Click **OK** to confirm.
