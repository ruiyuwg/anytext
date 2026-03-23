Application Real-Time Monitoring Service (ARMS) delivers alert notifications to DingTalk, Lark, and WeCom group chats. From the alert card, you can claim, clear, follow, push, or block alerts without switching to the ARMS console.

**Workflow:**

1.  **Set up** -- Verify your mobile number and associate contacts with the group chat.
    
2.  **Receive alerts** -- Alert cards appear in the group chat when alerts fire.
    
3.  **Handle alerts** -- Claim, clear, follow, push, or block alerts from the card or the alert details page.
    
4.  **Review trends** -- Check alert statistics and browse all alerts on the homepage.
    

## Set up your group chat

Before you handle alerts in a group chat, complete the following one-time setup.

### Verify your mobile number

1.  In the group chat, click the alert name in an alert card.
    
2.  In the **Verify Mobile Phone Number** dialog box, enter your mobile number and click **Send Verification Code**.
    
3.  Enter the received code and click **OK**.
    

**Note**

If the system indicates that the mobile number is not registered, create a contact in the ARMS console and add the mobile number. For more information, see [Contacts](/help/en/arms/alarm-operation-center/contacts).

### Associate a contact with the group chat

After association, the system sends alert notifications to the group chat and @-mentions the contact when an alert fires.

1.  Make sure the contact's mobile number has been verified in the group chat. For more information, see [Contacts](/help/en/arms/alarm-operation-center/contacts#concept-42953-zh).
    
2.  In a notification policy, set the contact, contact groups or schedules containing the contact, and the corresponding DingTalk chatbot, Lark bot, and WeCom bot as notification objects. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
    

**Note**

The contact must be a member of the group chat. To verify the association, log on to the [ARMS console](https://arms-intl.console.aliyun.com/), choose **Alert Management** > **Notification Objects**, and open the **Contacts** tab. A DingTalk or WeCom icon appears next to the mobile number of an associated contact.

## Handle alerts from the alert card

Alert cards in group chats display basic alert information. To customize the card content, edit the alert notification template in a notification policy. For more information, see [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates#task-2082508).

The following table lists the available actions.

**Action**

**Description**

**Claim Alerts**

Set yourself as the alert handler.

**Disable Alerts**

Open the **Edit Solution** dialog box, specify a solution, and click **OK** to mark the alert as Resolved.

**Follow Alerts**

Subscribe to alert status changes. The system sends you an SMS message when the status changes.

**Push Alerts**

Open the **Ticket System** section. Select an integrated ticket system and click **OK** to create a ticket.

**Block Alerts**

Open the **Blocking Period** section. Select a time period during which alert notifications are not sent.

**Unresolved Alerts**

Go to the **Alerts** tab where you can filter and view unhandled alerts in the current group chat. For more information, see the [View all alerts on the homepage](#section-b5v-vop-nvt) section.

**Note**

To integrate a ticket system for the **Push Alerts** action, see [Use a Jira account to integrate Jira with ARMS](/help/en/arms/alarm-operation-center/use-a-jira-account-to-integrate-jira-with-arms#task-2104721) or [Use OAuth to integrate Jira with ARMS](/help/en/arms/alarm-operation-center/use-oauth-to-integrate-jira-with-arms#task-2104721).

## Handle alerts from the alert details page

Click the alert name in an alert card to open the alert details page. This page provides full alert context and additional actions.

### Quick actions

**Action**

**Availability**

![Comment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0329805461/p371930.png) Comment

Available at any time.

**Claim it**

Available when the alert is not yet claimed.

**Solve it now**

Available when the alert is not claimed or is being handled. Sets the status to Resolved.

**Statistics** (lower-left corner)

Available at any time. Opens the [alert statistics](#section-50d-z5e-tij) page.

**Home** (lower-left corner)

Available at any time. Opens the [alert homepage](#section-b5v-vop-nvt).

### Details tab

The **Details** tab shows the alert name, severity, content, status, handler, notification objects, and the object that triggered the alert.

Click **Settings** in the upper-right corner to open the **Select Operation** dialog box, where you can:

-   **Assign a handler** -- Select a handler whose mobile number has been verified in the group chat.
    
    **Note**
    
    Handlers must be group chat members who have verified their mobile numbers through alert cards. Alert cards are sent based on the notification policies associated with your Alibaba Cloud account.
    
-   **Change the severity** -- Valid values: Default (lowest), P4, P3, P2, and P1 (highest).
    
-   **Push a ticket** -- Select an integrated ticket system to create a ticket for the alert. For ticket system integration, see [Use a Jira account to integrate Jira with ARMS](/help/en/arms/alarm-operation-center/use-a-jira-account-to-integrate-jira-with-arms#task-2104721) or [Use OAuth to integrate Jira with ARMS](/help/en/arms/alarm-operation-center/use-oauth-to-integrate-jira-with-arms#task-2104721).
    

Additional actions on the **Details** tab:

-   Click ![Follow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0329805461/p371931.png) to follow the alert. The system sends you an SMS message when the alert status changes.
    
-   Click ![Block](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0329805461/p371932.png) to block the alert for a specified time period. Alert notifications are not sent during the blocking period.
    

### Event tab

The **Event** tab lists all alert events associated with the alert and the status of each event. Click an event to view its basic information, monitoring data, and extended fields.

### Activity tab

The **Activity** tab shows the notification records and handling records for the alert. Click **Filter** to search records by the following criteria:

**Filter**

**Description**

**Log content**

Search by alert notification content.

**Log object**

Search by contact or alert handler.

To find a specific record, enter a keyword and press Enter.

## View alert statistics

The statistics page provides aggregated data for all alerts whose notifications are sent to the group chat:

-   Number of alerts triggered today
    
-   Handlers who handled alerts today
    
-   Alert count trend over the past 7 days
    
-   Average handling time over the past 7 days
    

Select a specific point in time on a trend chart to view the alert count or average handling time at that point in time.

Click **Return to Home** to go to the alert homepage.

## View all alerts on the homepage

The homepage lists all alerts whose notifications are sent to the group chat.

### Filter alerts

Use the tabs at the top to switch views:

**Tab**

**Alerts shown**

**My**

Alerts claimed by your account

**Follow**

Alerts followed by your account

**Alerts**

All alerts

Use the search box to find alerts by keyword, or apply the following filters:

**Filter**

**Options**

**Status**

Resolved, Processing, To Be Claimed

**Contact**

Filter by contact or handler. Only group chat members who have verified their mobile numbers through alert cards are listed. Alert cards are sent based on the notification policies that belong to your Alibaba Cloud account.

**History**

1 day, 3 days, 7 days

### Next steps

-   Click an alert to open its details page.
    
-   Click **Statistics** to open the alert statistics page.
