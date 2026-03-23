Configure notifications to stay informed about security events across your cloud environment. Notification Settings let you define how Security Center alerts you to key security findings such as security alerts, vulnerability reports, and baseline risks. You can deliver these alerts through Email, Internal Message, or DingTalk Chatbot, so you can respond quickly when a threat is detected.

## Prepare to receive findings from Security Center

### **Email and internal message notifications**

#### **Step 1: Manage notification recipients**

Before configuring alerts, confirm that the recipient is your designated security contact. By default, alerts are sent to the Account Contact from account registration. In many cases, this is not the security team, so update the contact list if needed.

1.  Go to the [Message Center](https://notifications.console.alibabacloud.com/#/subscribeMsg). On the **Security message** tab, find **Security Notice** and click **Modify** in the Actions column. This action redirects you to the **Modify Message Receiving Configurations** page.
    
2.  On the **Contact** tab, you can manage notification recipients.
    
    -   **Select an existing contact**: In the dialog box that appears, select the checkbox next to each contact you want to receive notifications.
        
    -   **Add a new contact**: Click Manage Contacts. On the page, click **Add Receiver** in the upper-right corner. Enter a name and email address, and then click **OK**.
        
        **Note**
        
        A newly added email address **must be verified** before it can receive alerts. Check for the email from the system and follow the instructions to complete the verification. For more information, see [Manage basic message notifications](/help/en/account/basic-message-receiving-management).
        
    -   **Modify a contact**: Click **Manage Contacts**. On the **Manage Contacts** page, click **Modify** in the Actions column for the target contact. Edit the name or email address, and then click **OK**.
        
3.  After you select the contacts, click **OK**. The configuration takes effect immediately.
    

#### **Step 2: Configure** **notification rules**

Deliver security findings to your email and internal message inbox. These settings take effect immediately after you save them.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Notification Settings**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
3.  On the **Email/Internal Message** tab, find the notification item that you want to configure. Configure **Notification Time**, **Concerned Level**, and **Notification Method**.
    
    -   **Notification Time**:
        
        -   **24 hours**: Immediate alerts, 24/7. Recommended for critical or emergency events.
            
        -   **08:00–20:00**: Alerts only during this window.
            
        
        **Important**
        
        -   Alerts triggered outside this window may be delayed.
            
        -   The sending frequency is fixed and can't be adjusted. See [Quotas and limits](#79065e7a1dov9) for more about these limits.
            
        
    -   **Concerned Level**: Select the severity levels you want to be alerted for (e.g., Critical, High Risk).
        
    -   **Notification Method**: You can choose Email, Internal Message, or both.
        
        **Note**
        
        -   Some alert items support only specific notification methods. The options available in the console are the ones that are supported.
            
        -   If you select multiple notification methods, the system sends the same notification to all selected channels **simultaneously**.
            
        

### DingTalk notifications

Get real-time Security Center alerts in your DingTalk group chat. This allows your team to act on threats without logging in to the console.

**Prerequisites**

-   **Subscription**: **Enterprise** or **Ultimate** edition. [Upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center) if needed.
    
-   **Pay-as-you-go**: At least one [pay-as-you-go feature must be enabled](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    

**Procedure**

1.  **Get the webhook URL**
    
    -   **If you have not created a chatbot:**
        
        1.  In the DingTalk client, select the target group chat and click the **Group Settings** button in the upper-right corner.
            
        2.  Click **Bot** in the **Group Management** section. On the robot management page, click **Add Robot** and select **Custom**.
            
        3.  In the Security Settings area, set **Custom Keywords** to "Security Center" or **Security** based on the notification language.
            
        4.  Select the **I Acknowledge and Accept** **_DingTalk Custom Robot Service Terms of Service_** checkbox.
            
        5.  Click **Finished**. The webhook URL is displayed after the robot is added.
            
    -   **If you have already created a chatbot:**
        
        1.  In the DingTalk client, select the target group chat and click the **Group Settings** button in the upper-right corner.
            
        2.  Click **Bot** in the **Group Management** section. On the robot management page, click the target robot to view its webhook URL on the details page.
            
2.  **Add the chatbot in Security Center**
    
    1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
        
    2.  In the left-side navigation pane, choose **System Settings** > **Notification Settings**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
        
    3.  On the **DingTalk Chatbot** tab of the **Notification Settings** page, click **Add Chatbot**. In the **Add DingTalk Chatbot** panel, configure the parameters and click **Add**. The following table describes the important parameters.
        
        **Note**
        
        A newly created DingTalk Chatbot is **Enabled** by default.
        
        **Parameter**
        
        **Description**
        
        **Webhook URL**
        
        Copy and paste the Webhook URL you obtained in Step 1.
        
        **Important**
        
        Keep your Webhook URL confidential. Do not expose it on public websites. Leaking the Webhook URL may pose security risks.
        
        ****Asset Groups****
        
        Select an asset group created in the ****Assets**** page of the Security Center console. Alerts are sent for assets in these groups. For information about how to configure asset groups, see [Manage server groups](/help/en/security-center/user-guide/manage-servers#44949bd0f4gm9).
        
        ****Notify On****
        
        Select the alert types and risk levels for which you want to receive DingTalk Chatbot notifications.
        
        **Note**
        
        The notification items and levels are triggered based on an **OR** condition, meaning a notification is sent if any condition is met.
        
        **Notification Interval**
        
        The interval at which the DingTalk Chatbot sends notifications.
        
        **Important**
        
        Each DingTalk Chatbot webhook can receive up to 20 notifications per minute. For more information, see [DingTalk Chatbot frequency and rate limiting rules](#a68b4d10f8o97).
        
        **Language**
        
        The language of the notifications sent by the DingTalk Chatbot. You can select Chinese or English.
        
3.  **Test the notification (optional)**
    
    In the DingTalk Chatbot list, find the newly created chatbot and click **Test** in the **Actions** column to verify the connection to your DingTalk group.
    
    **Note**
    
    You can edit or delete DingTalk Chatbot notifications. After deleting a chatbot configuration, you will no longer receive related alerts via the DingTalk Chatbot, but this will not affect your existing email, or internal message notifications.
    

## **Disable notifications**

### **Disable** **email** **and internal message** **notifications**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the left-side navigation pane, choose **System Settings** > **Notification Settings**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
3.  On the **Email/Internal Message** tab, find the target notification item and deselect the channels you no longer wish to use in the **Notification Method** column.
    

### **Disable a DingTalk Chatbot**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the left-side navigation pane, choose **System Settings** > **Notification Settings**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
3.  On the **DingTalk Chatbot** tab, find the target chatbot and perform one of the following operations:
    
    **Goal**
    
    **Method**
    
    **Notes**
    
    **Temporarily disable**  
    (Temporarily disable all notifications)
    
    Turn off the switch in the **Enabling Status** column.
    
    The configuration is saved and can be re-enabled at any time.
    
    **Permanently delete**  
    (Stop using this chatbot)
    
    Click **Delete** in the **Actions** column.
    
    **This action is irreversible.** You must reconfigure the chatbot to use it again.
    
    **Filter notifications**  
    (Receive only specific alerts)
    
    1\. Click Edit in the **Actions** column.  
    2\. In the ****Notify On**** section, remove the alert types or levels for which you do not want to receive notifications.
    
    This lets you control the granularity of notifications and avoid information overload.
    

## Quotas and limits

### Notification frequency and rate limiting

To prevent disruption from excessive notifications, Security Center limits the frequency and quantity of various notifications. The detailed limits for each notification item are as follows:

-   **Defense alerts**
    
    **Type**
    
    **Frequency/Trigger condition**
    
    **Daily limit** **by channel**
    
    Precision defense
    
    Real-time
    
    Max 5 internal messages and 20 emails.
    
    Web tamper-proofing
    
    Max 5 notifications.
    
    Cloud honeypot alert
    
    Max 5 notifications.
    
    Application protection alert
    
    Max 10 emails and 10 internal messages.
    
    Malicious IP blocking alert
    
    Max 10 notifications.
    
-   **Detection alerts**
    
    **Type**
    
    **Frequency/Trigger condition**
    
    **Daily limit (Email/Internal Message)**
    
    Security alert
    
    Real-time
    
    -   Max 5 notifications per Alibaba Cloud account within 24 hours.
        
    -   Max 1 notification for the same server within 24 hours.
        
    
    New security events
    
    -   Only 1 notification per day for the same event (including new and updated).
        
    -   A cumulative maximum of 5 notifications per day for new and updated events.
        
    
    Updated security events
    
-   **Container security alerts**
    
    **Type**
    
    **Frequency/Trigger condition**
    
    **Daily limit (Email/Internal Message)**
    
    Container microsegmentation alert
    
    Real-time
    
    Max 100 emails per day (excess notifications will be delayed).
    
    Container microsegmentation proactive defense notification
    
    Max 100 emails per day (excess notifications will be delayed).
    
    Container image scan malicious alert
    
    Max 24 emails and 24 internal messages.
    
    Container image scan baseline risk notification
    
    Max 1 notification.
    
    Container image scan vulnerability risk notification
    
    Max 24 emails and 1 internal message.
    
    Container image scan sensitive file alert
    
    Max 24 internal messages.
    
-   **Agentless detection alerts**
    
    **Type**
    
    **Frequency/Trigger condition**
    
    **Daily limit (Email/Internal Message)**
    
    Agentless detection malicious sample notification
    
    Sent after the scan task is complete.
    
    Max 1 email and 1 internal message.
    
    Agentless detection vulnerability risk notification
    
    Agentless detection baseline risk notification
    
    Agentless detection sensitive file alert
    
-   **Periodic/Threshold-triggered notifications**
    
    **Type**
    
    **Frequency/Trigger condition**
    
    **Daily limit (Email/Internal Message)**
    
    Security weekly report
    
    Once every 7 days.
    
    None
    
    Baseline check
    
    Anti-ransomware task execution results
    
    Sent after the task is complete.
    
    Anti-ransomware storage capacity exceeded
    
    -   A notification is sent immediately when anti-ransomware capacity usage reaches 100% of the total purchased capacity.
        
    -   The system checks usage every 7 days and sends a notification if the used capacity exceeds the set threshold.
        
    
    Threat analysis hot data log storage exceeded alert
    
    Real-time.
    
    Threat analysis log ingestion traffic exceeded alert
    
    Log storage exceeded
    
    Once every 2 days.
    
    Virus scan notification
    
    Sent according to the configured virus scan cycle.
    

### DingTalk Chatbot frequency and rate limiting rules

-   **Notification frequency**: Can be set to 1 minute, 5 minutes, 10 minutes, 30 minutes, or No Limit.
    
-   **Rate Limiting for "No Limit" frequency**: If you select **No Limit**, a single webhook URL can receive up to 20 notifications per minute.
    

## **FAQ**

### **Contact and recipient management**

-   **How do I modify the contact (email address or mobile number) for receiving alerts?**
    
    Modify it in the Alibaba Cloud Message Center. For detailed steps, see [Step 1: Manage notification recipients](#49954a87b2f39).
    
-   **After I modify or add a contact, why are alerts still sent to the old contact, or why does the new contact not receive them?**
    
    Follow these steps to troubleshoot:
    
    1.  **Confirm the modification**: Ensure you have correctly modified or added the contact and completed the mobile number or email address **verification**. For detailed steps, see [Step 1: Manage notification recipients](#49954a87b2f39).
        
    2.  **Check other product configurations**: Check if other cloud products (such as CloudMonitor) have independent alert rules that still use the old contact information.
        
-   **How can I configure alert recipients in batches based on roles (such as O&M, developer)?**
    
    Batch configuration by role is not currently supported. However, you can add a "Position" tag when adding or modifying contacts to identify them.
    

### **Troubleshooting alert reception**

-   **Why am I not receiving alerts after configuring notifications?**
    
    Follow these steps to troubleshoot:
    
    1.  **Check recipients**: Confirm that the phone number or email address has been added and verified in [Step 1: Manage notification recipients](#49954a87b2f39).
        
    2.  **Check notification settings**: Ensure that the relevant notification item is enabled, the Concerned Level matches the alert level, and the Notification Time is set to 24 hours.
        
    3.  **Check spam folders**: Check your email's spam folder.
        
    4.  **Check rate limits**: Refer to the [Quotas and limits](#79065e7a1dov9) section to confirm if you have reached the daily sending limit.
        
    5.  **Check region**: Ensure that the region where you configured notifications, **China** or **Outside China**, matches the region where the asset generating the alert is located.
        
-   **Why did the DingTalk Chatbot receive an "Unusual Logon" notification even though I disabled that alert item?**
    
    **Reason**: The notification level for **Security alert** was set to **Suspicious**. The trigger rule for alerts is "Type" or "Level," so a notification is sent if either condition is met.
    
    **Solution:** Go to Notification Settings and deselect **Suspicious** from the level settings for **Security alert**.
    

## Appendix: Notification descriptions

-   **Periodic reports**
    
    **Type**
    
    **Description**
    
    Security weekly report
    
    Sends a notification with the subject **Alibaba Cloud Security Center Weekly Report**. The content includes the number of unhandled vulnerabilities, vulnerability fix suggestions, baseline risks, and alert information for your assets.
    
    **Note**
    
    The system does not send this report if your account has no running ECS instances.
    
    Baseline check
    
    Sends a notification with the subject Security Center - Weekly Report on Unhandled Baseline Risks. The content includes the number of unhandled baseline risks on your assets.
    
-   **Resources and capacity**
    
    **Type**
    
    **Description**
    
    Anti-ransomware storage capacity exceeded
    
    Notifications for exceeded anti-ransomware storage capacity are sent as follows:
    
    -   The system sends a real-time notification when the used anti-ransomware capacity exceeds the total purchased capacity (100% usage).
        
    -   Security Center regularly checks the anti-ransomware capacity usage. If the used capacity exceeds the set threshold, the system sends a notification. Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4776123961/p698175.png) icon in the **Insufficient Anti-ransomware Capacity** area to adjust the capacity usage threshold for sending notifications.
        
    
    Notification for excessive threat analysis hot data logs
    
    A notification about the usage of threat analysis log storage space.
    
    Notification for excessive threat analysis access log traffic
    
    When the "ingested log traffic" exceeds 80% of the "subscribed ingested log traffic," the system sends a notification reminding you to expand capacity.
    
    The log quota has been exceeded
    
    When the log storage volume exceeds the purchased log analysis capacity threshold, the system sends a log quota exceeded notification.
    
    In the **Excess Logs** area, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4776123961/p698175.png) icon to adjust the log capacity threshold for sending notifications.
    
-   **Feature alerts**
    
    **Type**
    
    **Description**
    
    Anti-ransomware task execution results
    
    During the configured notification period, when an anti-ransomware data backup or recovery task completes, the system sends a notification if the result (success or failure) matches your subscribed preference.
    
    New security events
    
    The system sends a notification when it discovers new, unhandled security events.
    
    Updated security events
    
    The system sends a notification when a security event with a "Pending" status has a new associated security alert.
    
    Security alert
    
    The system sends a notification when it detects a security alert.
    
    Precision defense
    
    The system sends a notification when it detects a precision defense alert.
    
    Web tamper-proofing
    
    The system sends a notification when it detects a web tamper-proofing alert.
    
    Malicious IP blocking alert
    
    The system sends a notification when it blocks a brute-force attack from a malicious IP.
    
    Virus scan notification
    
    After a virus scan completes, the system sends a results notification based on your configured scan cycle.
    
    Cloud honeypot alert
    
    The system sends a notification when it detects a cloud honeypot alert. Max 5 notifications are sent per day.
    
    Application protection alert
    
    The system sends a notification when it detects an application protection alert.
    
-   **Container security**
    
    **Type**
    
    **Description**
    
    Container microsegmentation abnormal alert
    
    The system sends a notification when it detects unauthorized network activity.
    
    Container microsegmentation proactive defense notification
    
    When unauthorized network activity is detected, the system proactively blocks it and sends a notification.
    
    Container image scan malicious alert
    
    After an image scan completes, the system sends a notification for any generated malicious sample alerts.
    
    Container image scan baseline risk notification
    
    After an image scan completes, the system sends a notification for any generated baseline risk alerts.
    
    Container image scan vulnerability risk notification
    
    After an image scan completes, the system sends a notification for any generated vulnerability risk alerts.
    
    Container image scan sensitive file alert
    
    After an image scan completes, the system sends a notification for any generated sensitive file alerts.
    
-   **Agentless detection**
    
    **Type**
    
    **Description**
    
    Agentless detection of malicious samples notification
    
    After a security scan completes, the system sends an alert for any malicious samples found.
    
    Agentless detection of vulnerability risks notification
    
    After a security scan completes, the system sends an alert for any vulnerability risks found.
    
    Agentless detection of baseline risks notification
    
    After a security scan completes, the system sends an alert for any baseline risks found.
    
    Agentless detection of sensitive files alert
    
    After a security scan completes, the system sends an alert for any sensitive files found.
