Application Real-Time Monitoring Service (ARMS) supports bidirectional integration with Jira. When an alert fires in ARMS, the integration automatically creates a Jira issue in the project you specify. Alert operations such as claiming, commenting, and resolving sync to the linked Jira issue. Jira operations such as reassignment and comments sync back to ARMS through a webhook.

With this integration, you can:

-   Automatically create Jira issues from ARMS alerts with severity-to-priority mapping.
    
-   Sync alert lifecycle operations (claim, comment, resolve) from ARMS to Jira.
    
-   Sync Jira issue updates (reassign, comment) back to ARMS through a webhook.
    

**Note**

ARMS also supports OAuth-based Jira integration. This topic covers the Jira account method only.

## How it works

ARMS Alert Management connects to a Jira instance through a Jira account. When an alert fires, ARMS creates an issue in the specified Jira project and maps alert severity levels to Jira priorities.

Each sync direction requires its own setup:

-   **ARMS to Jira** -- Configured during integration setup. Alert operations (claim, comment, resolve) automatically sync to linked Jira issues.
    
-   **Jira to ARMS** -- Requires a Jira webhook that sends issue updates (reassignment, comments) back to ARMS.
    

**User matching:** ARMS matches users between the two systems by email address or username. If no matching Jira user is found, the alert cannot be pushed to Jira.

## Prerequisites

Before you begin, make sure that you have:

-   Access to the ARMS console with Alert Management permissions
    
-   A Jira instance URL, username, and password with permissions to create issues
    

## Step 1: Create the Jira integration

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Alert Management** > **Integrations**.
    
2.  On the **Integrations** page, click the **Notification Integrations** tab, and then click **JIRA**.
    
3.  In the **Add Integration** wizard, complete the following steps:
    
    1.  In the **Basic Information** step, configure the connection:
        
        -   Enter the integration name and Jira instance URL.
            
        -   Set Verification Method to Log On with Jira Account.
            
        -   Enter the username and password of the Jira instance.
            
        -   (Optional) Add a description.
            
        -   Click **Test Connection**.
            
    2.  After the Connection Succeeded message appears, click **Next**.
        
        **Note**
        
        If the connection fails, verify the URL, username, and password, then click **Test Connection** again.
        
    3.  In the **Alert Source Configuration** step, configure the alert-to-issue mapping:
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        Project
        
        The Jira project where ARMS creates issues for alerts.
        
        Monitoring Project
        
        Type
        
        The Jira issue type. Valid values: Task, Subtask, Improvement, New feature, Bug, Epic, Story.
        
        Bug
        
        Issue status when the alert is disabled
        
        The Jira status that marks an issue as resolved. When a Jira issue reaches this status, ARMS stops syncing further alert operations to the issue. Valid values: To Do, In Progress, In Review, Done.
        
        Done
        
        Priority
        
        Maps ARMS alert severity levels to Jira issue priorities.
        
        P1: Highest, P2: High, P3: Medium, P4: Low, P5: Lowest
        
        **Important**
        
        -   If an alert severity level is not mapped to a Jira priority, alerts at that level are not pushed to Jira.
            
        -   Severity-to-priority mapping is applied only on the first push. Subsequent changes to alert severity alone do not update the Jira issue priority.
            
        -   We recommend selecting Done as the resolved status. If you select a different value and the issue later transitions to Done, ARMS continues syncing alert operations to the issue.
            
        
    4.  Click **Save**.
        

The new Jira integration appears on the **Notification Integrations** tab.

![Jira integration on the Notification Integrations tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p306371.png)

## Step 2: Push alerts to Jira

After you create the integration, push alerts to Jira in any of the following ways.

### Option A: Automatic push through a notification policy

Set up a notification policy to automatically create a Jira issue whenever a matching alert fires.

1.  In the left-side navigation pane, choose **Alert Management** > **Notification Policies**.
    
2.  On the **Notification Policy** page, click **Create Notification Policy**, or edit an existing policy.
    
3.  In the **When an alert is triggered,** section, specify at least one contact or contact group for the Contacts parameter.
    
    **Important**
    
    -   ARMS matches the first contact in the policy to a Jira user by email address or username, and assigns that user as the issue handler.
        
    -   If no matching Jira user is found, the alert is not pushed to Jira.
        
    
4.  Select the Jira integration you created for Ticket System. Configure other parameters as needed. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
    
5.  Click **Save**.
    
    Alerts that match the notification policy are now automatically pushed to Jira.
    

### Option B: Manual push from the alert sending history page

Push an individual alert to Jira from its detail page.

1.  In the left-side navigation pane, choose **Alert Management** > **Alert Sending History**.
    
2.  On the **Alert Sending History** page, in the upper-right corner, associate a handler with the alert, then click the alert name.
    
    **Important**
    
    -   ARMS matches the operator to a Jira user by email address or username, and assigns that user as the issue handler.
        
    -   If no matching Jira user is found, the alert is not pushed to Jira.
        
    
3.  On the alert details page, click the ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3685889661/p355051.png) icon in the upper-right corner, then click **Push Alerts**.
    
4.  In the dialog box, select the Jira integration from the Ticket System drop-down list, and click **OK**.
    

After the alert is pushed, a link to the corresponding Jira issue appears on the alert details page.

### Option C: Push from a DingTalk alert card

Push an alert to Jira directly from a DingTalk group alert card.

**Important**

-   The operator who pushes the alert becomes the handler of the Jira issue.
    
-   The operator is the contact whose mobile number is bound in the DingTalk group alert card. For more information, see the Handle alerts section of the [View historical alerts](/help/en/arms/alarm-operation-center/view-historical-alerts#section-ola-2ig-nc7) topic.
    
-   ARMS matches the operator to a Jira user by email address or username. If no match is found, the alert is not pushed.
    

Use either of the following methods:

-   On the alert card, click **Push Alerts** and select the Jira integration.
    
-   Click the alert name on the card. In the details panel, click **Settings** > **Push Alerts**, and select the Jira integration.
    

After the alert is pushed, a link to the corresponding Jira issue appears on the alert details page.

## Operations synced from ARMS to Jira

After you push an alert to Jira, the following ARMS operations automatically sync to the linked issue:

**ARMS operation**

**Jira result**

**Source**

Claim an alert

The claimant becomes the issue handler

Alert Sending History page or DingTalk alert card

Comment on an alert

The comment is added to the Jira issue

Alert Sending History page

Resolve an alert

The resolution is added as a comment on the Jira issue

Alert Sending History page

**Note**

The claimant must have a matching user account in Jira.

## Step 3: Set up Jira-to-ARMS sync

To sync Jira issue updates (reassignment, comments) back to ARMS, create a webhook in Jira.

1.  On the **Integrations** page in ARMS, click the **Notification Integrations** tab and copy the integration key for the Jira integration.
    
    ![Jira integration key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307032.png)
    
2.  Log on to your Jira instance. In the upper-right corner, click the Settings icon, then click **System**.
    
    ![Jira settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307549.png)
    
3.  Enter the administrator password and click **OK**.
    
4.  In the left-side navigation pane of the **System** page, click **Webhooks**.
    
5.  Click **\+ Create a webhook**.
    
    ![Create a Jira webhook](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307635.png)
    
6.  Set the URL to the following value, replacing `{token}` with the integration key you copied in [step 1](#step-tp1-4y7-l9l):
    
    `http://alerts.aliyuncs.com/api/jira/receiver/{token}/${project.key}/${issue.key}`
    
    ![Jira webhook URL configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307034.png)
    
7.  Configure other webhook parameters as needed. For details, see the [Jira webhooks documentation](https://developer.atlassian.com/server/jira/platform/webhooks/#webhooks). Click **Create**.
    

After the webhook is active, the following Jira operations sync to ARMS:

**Jira operation**

**ARMS result**

Reassign the issue handler

The corresponding alert handler is updated

Add a comment to the issue

The comment is added to the corresponding alert
