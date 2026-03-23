When Application Real-Time Monitoring Service (ARMS) detects an issue in your application, your team needs to act on it immediately. By integrating Jira with ARMS alert management through OAuth, alerts automatically create Jira issues, and status changes stay synchronized in both directions -- so your team can triage, assign, and resolve incidents from either platform without switching context.

This guide covers the end-to-end setup: generating OAuth credentials, configuring a Jira application link, connecting ARMS to Jira, and enabling bidirectional synchronization.

## Integration capabilities

After you complete the setup, the integration provides the following capabilities:

-   **Automatic issue creation:** ARMS alerts create Jira issues based on your notification policy.
    
-   **Priority mapping:** Alert severity levels (P1--P5) map to Jira issue priorities (Highest--Lowest).
    
-   **Bidirectional status sync:** Claim, comment, and resolve actions in ARMS sync to Jira. Assignee changes and comments in Jira sync back to ARMS.
    
-   **Flexible alert routing:** Push alerts to Jira through notification policies, the alert history page, or DingTalk alert cards.
    

## Prerequisites

Before you start, verify that you have the following:

**Requirement**

**Details**

**ARMS console access**

Permission to configure integrations under **Alert Management** > **Integrations**

**Jira administrator access**

Permission to create application links and webhooks in Jira

**OpenSSL**

Installed on your local machine for generating RSA key pairs

## Step 1: Generate RSA keys

Generate an RSA key pair for the OAuth trust relationship between ARMS and Jira. Run the following OpenSSL commands in a terminal.

**Note**

These commands create files in your current working directory.

1.  Generate a 1024-bit RSA private key:
    
    ```
    openssl genrsa -out jira_privatekey.pem 1024
    ```
    
2.  Create an X.509 certificate valid for 365 days:
    
    ```
    openssl req -newkey rsa:1024 -x509 -key jira_privatekey.pem -out jira_publickey.cer -days 365
    ```
    
3.  Convert the private key to PKCS#8 format:
    
    ```
    openssl pkcs8 -topk8 -nocrypt -in jira_privatekey.pem -out jira_privatekey.pcks8
    ```
    
4.  Extract the public key from the certificate:
    
    ```
    openssl x509 -pubkey -noout -in jira_publickey.cer > jira_publickey.pem
    ```
    

After you run these commands, four files are created:

**File**

**Used in**

`jira_privatekey.pem`

Intermediate file (not used directly in configuration)

`jira_publickey.cer`

Intermediate file (not used directly in configuration)

`jira_privatekey.pcks8`

Step 3 -- ARMS integration setup (private key)

`jira_publickey.pem`

Step 2 -- Jira application link (public key)

## Step 2: Create a Jira application link

Configure Jira to accept OAuth connections from ARMS by creating an application link.

1.  Log on to Jira, click the **Settings** icon in the upper-right corner, and then click **Applications**.
    
    ![Jira applications](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p354473.png)
    
2.  On the **Applications** tab, click **Application links**.
    
3.  In the **Configure Application Links** section, enter a URL and click **Create new link**.
    
    **Note**
    
    This URL is a placeholder and is not used for actual communication. Enter any valid URL, for example, `http://alerts.console.aliyun.com/`.
    
4.  In the **Configure Application URL** dialog box, ignore the warning and click **Continue**.
    
    ![Configure Application URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p352841.png)
    
5.  In the **Link applications** dialog box, configure the following settings and click **Continue**:
    
    **Field**
    
    **Value**
    
    Application Type
    
    Generic Application
    
    Consumer key
    
    AlertOauthKey
    
    Create incoming link
    
    Selected
    
    Specify other fields as needed.
    
    ![Link Applications](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p352910.png)
    
6.  In the next **Link applications** dialog box, configure the incoming link settings and click **Continue**:
    
    **Field**
    
    **Value**
    
    Consumer Key
    
    AlertOauthKey
    
    Consumer Name
    
    alertmanager
    
    Public Key
    
    The content of the jira\_publickey.pem file generated in Step 1
    
    ![Link application-02](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p352930.png)
    
    After the link is created, it appears on the **Configure Application Links** page.![Configure Application Links](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p353009.png)
    
7.  Click the ![Pencil](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459805461/p353010.png) icon in the **Actions** column of the application link. In the **Configure alertmanager** dialog box, click **Incoming Authentication**.
    
    ![configure alertmanager](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559805461/p353012.png)
    
8.  If the Status field displays Not Configured, enter the Consumer Key, Consumer Name, and Public Key values, and then click **Save**.
    
9.  Click **Cancel** to close the dialog box.
    

## Step 3: Connect ARMS to Jira

Configure the Jira integration in the ARMS console and complete the OAuth authorization flow.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Integrations**.
    
3.  On the **Integrations** page, click the **Notification Integration** tab and then click **JIRA**.
    
4.  In the **Add Integration** wizard, configure the **Basic Information** page with the following settings, and then click **Obtain Verification Code**:
    
    **Parameter**
    
    **Value**
    
    Name
    
    A name for the Jira integration
    
    Description
    
    A description of the Jira integration
    
    URL
    
    The URL of your Jira instance
    
    Verification
    
    Oauth
    
    Consumer key
    
    AlertOauthKey
    
    Private key
    
    The content of the jira\_privatekey.pcks8 file generated in Step 1
    
    You are automatically redirected to the Jira authorization page.
    
5.  On the **Welcome to JIRA** page, click **Allow** to grant ARMS access to your Jira instance.
    
    ![Welcome to Jira](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559805461/p353015.png)
    
6.  On the **Access Approved** page, copy the verification code.
    
    ![Access Approved](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559805461/p353016.png)
    
7.  Return to the **Add Integration** wizard in ARMS, paste the verification code into the Verification Code field, and then click **Obtain Access Token**.
    
    ![Obtain an access token](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559805461/p353017.png)
    
8.  After the message "The access token is obtained." appears, click **Next**.
    
9.  On the **Alert Source Configuration** page, configure the following settings and click **Save**:
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Project
    
    The Jira project where ARMS creates issues for alerts.
    
    Integrated monitoring, management, and control project
    
    Type
    
    The Jira issue type. Valid values: Task, Subtask, Improvement, New feature, Bug, Epic, Story.
    
    Bug
    
    The status of the issue when the alert is disabled.
    
    The Jira issue status that ARMS treats as resolved. When an issue reaches this status, ARMS stops syncing alert operations to the issue. Valid values: To Do, In Progress, In Review, Done.
    
    Done
    
    Priority
    
    Maps ARMS alert severity levels to Jira issue priorities.
    
    P1: Highest, P2: High, P3: Medium, P4: Low, P5: Lowest
    
    **Important**
    
    -   If you do not map a severity level to an issue priority, alerts of that severity level are not synchronized to Jira.
        
    -   The severity-to-priority mapping applies only when ARMS first pushes an alert to Jira. Subsequent changes to the severity level alone are not synced.
        
    -   Set the resolved status to **Done**. If you select a different status and the issue later changes to **Done**, ARMS continues to sync operations to the issue.
        
    

After you save the configuration, the Jira integration appears on the **Ticket Integration** tab of the **Integrations** page.

![Jira integration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p306371.png)

## Step 4: Push alerts to Jira

After you set up the integration, push alerts to Jira in one of the following ways.

### Method 1: Notification policy

Create or update a notification policy to automatically create a Jira issue when an alert fires.

1.  In the left-side navigation pane, choose **Alert Management** > **Notification policy**.
    
2.  Click **Create Notification Policy**, or edit an existing policy.
    
3.  In the **When an alert is triggered** section, select at least one contact or contact group for the Contacts parameter.
    
    **Important**
    
    -   Jira matches the first contact in the policy to a Jira user by email address or username, and assigns that user as the issue assignee.
        
    -   If Jira cannot find a matching user, the alert is not pushed to Jira.
        
    
4.  For the Ticket system parameter, select the Jira integration you created.
    
    Configure other parameters as needed. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies).
    
5.  Click the ![Check](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p306427.png) icon in the upper-right corner to save the policy.
    

Alerts that match this policy are automatically pushed to Jira.

### Method 2: Alert history page

Manually push a specific alert to Jira from the alert history page.

1.  In the left-side navigation pane, choose **Alert Management** > **Alarm Sending History**.
    
2.  In the upper-right corner, select the operator and click the alert name. The operator becomes the assignee of the Jira issue.
    
    **Important**
    
    -   The operator is a contact whose mobile phone number is associated with the alert cards of a DingTalk group. For more information, see [Handle alerts](/help/en/arms/alarm-operation-center/view-historical-alerts).
        
    -   Jira matches the operator to a Jira user by email address or username. If no match is found, the alert is not pushed.
        
    
3.  On the alert details page, click the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3685889661/p355051.png) icon in the upper-right corner and select **Push to Ticket System**.
    
4.  In the **Push Alert to Ticket System** dialog box, select the Jira integration from the **Ticket System** drop-down list and click **OK**.
    

After the alert is pushed, a link to the Jira issue appears on the alert details page.

### Method 3: DingTalk alert card

Push an alert directly from a DingTalk alert card to create a Jira issue.

**Important**

-   The operator who pushes the alert becomes the assignee of the Jira issue.
    
-   The operator is a contact whose mobile phone number is associated with the alert cards of a DingTalk group. For more information, see [Handle alerts](/help/en/arms/alarm-operation-center/view-historical-alerts).
    
-   Jira matches the operator to a Jira user by email address or username. If no match is found, the alert is not pushed.
    

Push an alert from a DingTalk card in one of the following ways:

-   In the alert card, click **Push Alert** and select the Jira integration.
    
-   Click the alert name to open the details panel. Click **Settings**, click **Push Ticket**, and select the Jira integration.
    

After the alert is pushed, a link to the Jira issue appears on the alert details page.

## Synchronization behavior

After the setup is complete, certain operations sync automatically between ARMS and Jira.

### ARMS to Jira

The following operations on the **Alarm Sending History** page sync to the corresponding Jira issue:

**ARMS operation**

**Jira result**

Claim an alert

The claimant becomes the issue assignee. The claimant must have a matching Jira user account.

Comment on an alert

The comment is added to the Jira issue.

Resolve an alert

The solution is added as a comment on the Jira issue.

The following operation on DingTalk alert cards syncs to Jira:

**ARMS operation**

**Jira result**

Claim an alert

The claimant becomes the issue assignee. The claimant must have a matching Jira user account.

### Jira to ARMS

To sync Jira operations back to ARMS, create a webhook in Jira.

1.  In Jira, click the **Settings** icon in the upper-right corner and click **System**.
    
    ![Jira settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307549.png)
    
2.  Enter the administrator password and click **OK**.
    
3.  In the left-side navigation pane, choose **Advanced** > **WebHooks**.
    
4.  Click **\+ Create a WebHook**.
    
    ![Create a webhook in Jira](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307635.png)
    
5.  Set the **URL** to the following value:
    
    ```
    http://alerts.console.aliyun.com/api/jira/receiver/{token}/${project.key}/${issue.key}
    ```
    
    Replace `{token}` with the integration key from ARMS. To find this key, go to the **Integrations** page in the ARMS console and click the **Ticket Integration** tab.
    
    ![Integration key of Jira](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307032.png)
    
    ![Create a webhook in Jira](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8339805461/p307034.png)
    
6.  Configure other webhook parameters as needed. For more information, see the [Jira webhook documentation](https://developer.atlassian.com/server/jira/platform/webhooks/#webhooks).
    
7.  Click **Create**.
    

After the webhook is active, the following Jira operations sync to ARMS:

**Jira operation**

**ARMS result**

Modify the issue assignee

The handler of the corresponding alert is updated.

Comment on an issue

The comment is added to the corresponding alert.
