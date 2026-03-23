Elastic Desktop Service (EDS) Enterprise offers comprehensive logging, audit, and monitoring features. You can access detailed logs for administrator actions, end user activities, and file transfers anytime. The screen recording audit feature allows you to monitor and review cloud computer sessions. Additionally, the real-time monitoring dashboard and metric graphs provide insights into system performance.

## 01 Operation logs

Operation logs help you monitor and audit the operations performed by administrators and end users. Administrator operation logs record the behavior when administrators access and use cloud computers in the EDS Enterprise console or call the EDS API. End user operation logs record the behavior when end users start, stop, reset, connect to, and disconnect from cloud computers. Operation logs can be used to analyze security risks, trace resource change behavior, and audit behavior compliance.

### **1.1 Administrator operation logs**

Administrator operation logs are generated based on Alibaba Cloud ActionTrail to monitor and record the activities performed by using Alibaba Cloud accounts. You can use the administrator logs to analyze security risks, trace resource changes, and audit behavior compliance.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View administrator operation logs](/help/en/wuying-workspace/user-guide/view-operation-logs-2#sc-query-admin-log)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Administrator Operation Logs** tab, specify a query condition and period of time and click the icon to query logs.
    
    -   Query conditions: You can query events by read/write type, resource type, sensitive operation, event name, or operator.
        
    -   Time range: By default, the operation logs of the previous 7 days before the current point in time are displayed. You can specify a time range.
        
5.  View the information about an event.
    
    -   Each event records the occurrence time, operator, event name, and related resource.
        
    -   Click **View Event Details** in the **Actions** column to view details, including API request ID, event source, event source IP address, and more. In the **Event Record** section, you can view event details in JSON format. For more information about the fields of an event, see [Management event structure](/help/en/actiontrail/user-guide/management-event-structure#concept-28819-zh).
        

### **1.2 User operation logs**

Operations performed by end users on cloud computers, such as connecting to, starting, and stopping cloud computers, are recorded in user operation logs. You can check end user operation logs to audit for any abnormal operations.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View end user operation logs](/help/en/wuying-workspace/user-guide/view-operation-logs-2#sc-query-user-log)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **User Operation Logs** tab, select or enter a query condition, value, or time to filter logs.
    
    End user operation logs that meet the filtering conditions are displayed. Each end user operation log includes the following information:
    
    -   Event: event ID, event type, and occurrence time.
        
    -   User: username of the end user related to an event.
        
    -   Cloud computer: cloud computer ID and name, cloud computer pool ID and name, and office network ID and name.
        
    -   Client: client OS, client version, and client IP address.
        
    
    **Note**
    
    If you want to export logs in the query result, click **Export** in the upper-right corner of the tab. Events are exported in an Excel file, and you can download the file to your local device.
    

### 1.3 Ship user operation logs to Logstores

EDS Enterprise enables you to ship end user operation logs to Simple Log Service (SLS) Logstores. This allows for auditing and monitoring of user activities through SLS. Additionally, you can set up alerts for suspicious operations to prevent data leaks and enhance business security.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: Shipping end user operation logs from EDS Enterprise to SLS Logstores is free. However, this feature relies on SLS, and once the logs are stored in SLS, standard SLS storage fees apply. For more information, see [Billing overview](/help/en/sls/billing-overview#concept-2086667).
    
-   Dependent services: SLS
    
-   Conditions: none
    
-   References: [Deliver user operation logs to Logstores](/help/en/wuying-workspace/user-guide/ship-user-operation-logs)
    

Configuration or usage

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  Click the **User Operation Logs** tab and click **Deliver to Logstore** in the upper-right corner.
    
4.  (Conditional) If this is the first time you use this feature, click **OK** in the **Elastic Desktop Service Service-linked Role** dialog box.
    
5.  In the **Deliver to Logstore** panel, specify a Logstore. You can create a Logstore or select an existing Logstore. Click **OK**.
    

### **1.4 File transfer logs**

File transfer logs track the file transfer activities of end users. EDS Enterprise allows end users to transfer files between cloud computers and on-premises devices by using clipboards and the file transfer feature. You can check file transfer logs to audit for any abnormal operations.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View file transfer logs](/help/en/wuying-workspace/user-guide/view-operation-logs-2#sc-view-file-transfer-log)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **File Transfer Log** tab, select or enter a query condition, value, or time to filter logs.
    
    File transfer logs that meet the filtering conditions are displayed. Each file transfer log includes details such as the username, cloud computer name or ID, and operation type.
    

## **02 Screen recording audit**

### **2.1 Screen recording audit policy**

You may need to audit operations that are performed on cloud computers to meet security audit requirements of your enterprise. The rules rely on the screen recording audit feature that is in public preview. You can record the operations performed by end users on cloud computers, and then play back the recording files for auditing anytime.

**Important**

Screen recording might capture private data of end users. Make sure that related permissions are obtained from the end users.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost:
    
    -   This feature is a valued-added feature and is in public preview. You can use the feature free of charge during the public preview. After the public preview ends, you are charged for using the feature. An announcement that includes the billing rules will be released in advance.
        
    -   Screen recording files are stored in an Object Storage Service (OSS) bucket that is automatically created for you. You are charged for using the bucket. For information about the billing of OSS, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
        
-   Dependent services: none
    
-   Conditions:
    
    The screen recording audit feature applies to cloud computers that only meet the following conditions:
    
    -   Use the Adaptive Streaming Protocol (ASP). For more information, see [Adaptive Streaming Protocol (ASP)](/help/en/wuying-workspace/product-overview/asp).
        
    -   Run Windows or Linux (Linux Ubuntu 20.04).
        
    -   Use system images whose versions are V0.1.0 or later, or custom images that are created based on the system images.
        
    
    Screen recording files are stored in OSS buckets in the region where cloud computers are created. If end users use VPN software on cloud computers, make sure that `*.aliyuncs.com` is added to the whitelist. This prevents failures of uploading screen recording files to the buckets.
    
-   References: [Audit-related rules](/help/en/wuying-workspace/user-guide/audit-related-rules)
    

Configuration or usage

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

In the **Screen Recording Audit** section, turn on **Screen Recording Audit**, read the **Usage Notes on Screen Recording Audit**, click **I have read and agree to enable the feature**, and then configure the following parameters.

**Parameter**

**Description**

**Type**

Select a screen recording type. Valid values:

-   **Whole-process**: A recording immediately starts when end users connect to cloud computers and ends when the end users disconnect from the cloud computers.
    
-   **Interval-based**: A recording starts and ends within a specific period of time when end users connect to cloud computers. If the end users disconnect from the cloud computers before the specified period of time for recording is reached, the recording ends. If you select this option, you must also configure the **Interval** parameter.
    
-   **Operation-triggered**: A recording is triggered when the system detects specific operations in the following conditions. If you select this option, you must also configure the **Operation-triggered** parameter. Valid values:
    
    -   **File Upload/Download-triggered**: The recording starts when end users download or upload files between cloud computers and local computers.
        
    -   **Command-triggered**: The recording starts when end users enter commands by using input devices such as keyboards, mouses, or tablets.
        
    
    **Note**
    
    After you specify operations that can trigger screen recording, the system starts screen recording when specified operations are detected. When the system does not detect the specified operations, the recording ends 10 minutes later. If the system no longer detects the specified operations within the 10 minutes, the screen recording ends when the 10 minutes elapse. If the system detects the specified operations within the 10 minutes, the time of the recording is extended by another 10 minutes.
    
-   **Session Lifecycle Listening**: A recording starts when a session is created and ends when the session is closed. We recommend that you select this option for robotic process automation (RPA) scenarios.
    
    **Note**
    
    If you select Whole-process, a recording ends when an end user disconnects from a cloud computer. If you select Session Lifecycle Listening, a recording ends when a session of a cloud computer is closed. To close the session, the end user must stop the cloud computer, or the specified keep-active duration is reached after the end user disconnects from the cloud computer.
    

**Audio**

Specifies whether to record audio generated on cloud computers during screen recording. Valid values: **Video** and **Video and Audio**.

**Frame Rate**

The frame rate. Valid values: 2 fps, 5 fps, 10 fps, and 15 fps.

Larger frame rates ensure smoother recording but require more storage space. You can specify a frame rate based on your business requirements and storage space.

**File Length**

The length of a recording file. Valid values: 10 minutes, 20 minutes, 30 minutes, and 60 minutes. The screen recording files are automatically split and uploaded to an OSS bucket based on the specified length. If the file size reaches 300 MB but the specified length is not reached, EDS preferentially uploads the first 300 MB data.

**Save To**

The location to which a recording file is stored. By default, screen recording files of a cloud computer are stored in an OSS bucket that is in the same region as the cloud computer. You are charged for using OSS buckets to store the files. For more information, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).

**Important**

If end users use VPN software on cloud computers, make sure that `*.aliyuncs.com` is added to the whitelist to prevent failures of uploading screen recording files to the buckets.

After screen recording is complete, you can view or download the screen recording files in the console. For more information, see [Play back or download screen recordings](/help/en/wuying-workspace/user-guide/play-back-or-download-screen-recordings#task-2206912).

**Retention Period**

By default, screen recording files are retained in an OSS bucket for 15 days. Valid values: 1 to 180. Unit: day.

**Warning**

The system stores screen recording files in OSS buckets for a period of time. When the period of time elapses, the files are permanently deleted from the buckets and the **Screen Recordings** page in the EDS console.

## 03 Monitoring and alerting

Monitoring and alerting track cloud computer distribution, resource usage, session connections, and network health. These features provide visibility into resource health, enabling timely issue detection and resolution to maintain seamless business operations.

### 3.1 Configure alert rules

Monitoring provides insights into cloud computer resource usage and session connection status. Alerting notifies you of issues based on monitoring metrics, enabling quick problem resolution to maintain smooth operations.

An alert rule specifies the conditions for triggering an alert, its severity, and its effective duration.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Configure alert rules](/help/en/wuying-workspace/user-guide/use-the-alert-feature#sc-configure-rule)
    

Configuration or usage

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Alerts**.
    
2.  On the **Alert Rules** tab, click **Create Alert Rule**.
    
3.  In the **Create Alert Rule** panel, configure parameters based on your business requirements and click **Confirm**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Rule Name
    
    The name of the alert rule.
    
    CPU usage alert
    
    Alert Source
    
    The source of the alert information. Default value: Cloud Computer.
    
    Cloud Computer
    
    Monitoring Scope
    
    -   All Resources: The rule takes effect for all cloud computers.
        
    -   Cloud Computer: The rule takes effect for the selected cloud computers.
        
    
    All Resources
    
    Metric Type
    
    -   Single Metric: Only one metric is monitored, but you can create alert rules with varying severity levels for the metric.
        
    -   Multiple Metrics: You can monitor multiple metrics simultaneously and create alert rules at the same severity level for each. You must define the triggering conditions for the alerts.
        
    
    Single Metric
    
    Effective Period
    
    The duration for which the alert rule is active.
    
    08:00-09:59
    
    Mute Period
    
    The duration for which alerts are muted when the alert rule is repeatedly triggered. Once the mute period expires, the system resumes sending alerts if the rule is still triggered.
    
    30 Minutes
    
    Alert Contact Group
    
    The alert recipient group.
    
    O&M Group
    
    Parameters when **Metric Type** is set to **Single Metric**
    
    Metric
    
    The metric that you want to monitor.
    
    CPU Used by Current User Space (%)
    
    Severity and Rule
    
    The trigger conditions for each severity level. You must specify at least one condition.
    
    Info
    
    The average value over three consecutive periods exceeds 80%.
    
    Parameters when **Metric Type** is set to **Multiple Metrics**
    
    Severity
    
    Alert severity levels determine the methods used for sending alert notifications.
    
    -   Critical: Phone+SMS+Email+DingTalk
        
    -   Warning: SMS+Email+DingTalk
        
    -   Info: Email+DingTalk
        
    
    Info: Email+DingTalk
    
    Severity and Rule
    
    The trigger conditions for different severity levels. You can configure up to 10 trigger conditions.
    
    -   The average disk usage exceeds 80%.
        
    -   The average memory usage exceeds 60%.
        
    
    Metric Relationship
    
    -   Trigger the alert when all conditions are met: An alert is triggered when every condition for the metrics, in a logical AND relationship, is satisfied.
        
    -   Trigger alert when any condition is met: An alert is triggered when one of the conditions for the metrics, in a logical OR relationship, is satisfied.
        
    
    Trigger alert when any condition is met
    
    Trigger Condition
    
    The number of consecutive periods required for conditions to be met before an alert is triggered.
    
    In 3 consecutive periods
    

### **3.2 Monitoring dashboard**

The monitoring dashboard displays metrics related to cloud computers, providing a global view on cloud computer usage, distribution, and health status.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View Dashboard](/help/en/wuying-workspace/user-guide/overview-7#section-kae-zgt-r2x)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Dashboard**.
    
3.  On the **Monitoring** page, view metrics such as the total number, status, logon duration, and network latency of cloud computers.
    
    **Note**
    
    You can click the ![小喇叭..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9208984861/p638175.png) icon or the ![小警报..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0308984861/p638177.png) icon in the upper-right corner of the **Monitoring** page to view the alert information. In the upper-right corner of the **Alerts** card, you can click **Show More Alerts** to go to the **Alert History** page and view the alert details.
    

### 3.3 Session monitoring

Alibaba Cloud Workspace offers the session monitoring feature, allowing administrators to view and manage end user sessions on cloud computers anytime and provide remote assistance to end users when needed.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View monitoring information about sessions](/help/en/wuying-workspace/user-guide/view-session-monitoring-information)
    

Configuration or usage

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Session Monitoring**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Sessions** page, view the session monitoring information and use the following features as needed.
    
    **Feature**
    
    **Description**
    
    **Operation**
    
    Export
    
    Exports session records as an .xlsx file.
    
    In the upper-right corner of the page, click **Export**.
    
    Disconnect
    
    Disconnects sessions. After a session is disconnected, an end user can resume the session as soon as the end user reconnects to the cloud computer.
    
    Select one or more sessions and click **Disconnect** below the session list. In the message that appears, click **Confirm**.
    
    Session Logoff
    
    Closes sessions. After a session is closed, unsaved data in the session is deleted. When the end user reconnects to the cloud computer, a new session is created.
    
    Select one or more users and click **Session Logoff** below the session list. In the message that appears, click **Confirm**.
    
    Send Message
    
    Sends a message to end users in a session.
    
    Select one or more users and click **Send Message** below the session list. In the Send Message dialog box, specify the **Subject** and **Messages** parameters and click **Confirm**.
    
    After you send a message, the **Message sent** message appears in the EDS Enterprise console. The cloud computer receives and displays the message that you sent.
    
    Apps
    
    Displays and manages applications and processes of end users.
    
    Find the session that you want to view and click **Apps** in the **Actions** column to view all applications that end users run on the cloud computer, including the application names and status.
    
    To close an application or process, click **End App** in the **Actions** column of the application or click **Terminate Process** in the **Actions** column of the process in the **Apps** panel.
    
    Remote Assistance
    
    Allows you to remotely perform operations on a cloud computer to troubleshoot issues. Both an administrator and an end user can initiate remote assistance. For more information, see [Stream collaboration (public preview)](/help/en/wuying-workspace/user-guide/collaboration-related-rules).
    
    -   Initiate remote assistance as an administrator
        
        Click **Remote Assistance** in the **Actions** column of the end user that you want to assist and wait for the end user to accept.
        
    -   Initiate remote assistance as an end user
        
        When an end user initiates a remote assistance request, you can see the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3697984861/p638392.png) icon in the **User Request History** column of the corresponding session. In this case, you need to click **Remote Assistance** in the **Actions** column to accept the request and complete the assistance as prompted.
        
    
    **Note**
    
    For data security and regulatory compliance purposes, the operations of both the facilitator and the assisted user during the assistance are recorded in logs for audits. For more information about how to view audit logs, see [View operations logs](/help/en/wuying-workspace/user-guide/view-operation-logs-2#task-2183901).
    

The following items describe the metrics that are displayed on the Sessions page:

-   Connected Users: the name of the end user connected to a session of the cloud computer.
    
-   Session Status: the session status. Valid values: Connected and Disconnected.
    
-   Last Connected At: the time when the user last connected to the cloud computer.
    
-   User Request History: records of the user initiating remote assistance requests from clients.
    
-   Last Connection Duration: the duration from when the user last connected to the cloud computer to when the user disconnected from the cloud computer.
    
-   Total Idle Duration: the cumulative duration of inactivity of a session within the time range that you selected. Duration of inactivity refers to the duration when no keyboard or mouse input is detected.
    
-   Total Connection Duration: the cumulative connected duration in a session that occurred in the specified time range.
    
-   Cloud Computer ID/Name: the ID and name of the cloud computer associated with the session.
    
-   Billing Method: the billing method of the cloud computer, including pay-as-you-go and monthly subscription. The monthly subscription billing method supports computing plans of 120 running hours per month, 150 running hours per month, and unlimited running hours.
    
-   Office Network ID/Name: the ID and name of the office network to which the cloud computer belongs.
    
-   Operating System: the operating system of the cloud computer.
    
-   Terminal Type: the type of the Alibaba Cloud Workspace terminal that the user used.
    
-   Terminal IP: the IP address of the Alibaba Cloud Workspace terminal.
    
-   Software Version: the version of the Alibaba Cloud Workspace terminal.
    

### 3.4 Real-time monitoring

**Note**

**Alibaba Cloud Workspace provides the real-time monitoring feature** to track end user activities on cloud computers. This feature displays key metrics, such as the number of users online, top ten active users, average logon time, and network delay distribution. It also issues fault alerts, **helping you** quickly identify and resolve issues caused by resource constraints, network problems, or external operations to minimize potential downtime and losses.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View Real-time Monitoring](/help/en/wuying-workspace/user-guide/overview-7#section-kna-elw-tpf)
    

Configuration or usage

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Real-time Monitoring**.
    
2.  On the **Real-time Monitoring** page, view the logon information, network latency, and fault summaries of end users.
    

### 3.5 Cloud computer monitoring

Metric graphs visually display the metric changes of cloud computers within specific time intervals.

**Note**

Alibaba Cloud Workspace offers metric graphs to help you track and analyze metric changes as needed.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [View cloud computer metrics](/help/en/wuying-workspace/user-guide/view-cloud-computer-monitoring-information)
    

Configuration or usage

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Cloud Computer Monitoring**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Computer Monitoring** page, click the **Cloud Computers**, **Cloud Computer Pools**, or **Top 50 Resources** tab and find the cloud computer whose metric information you want to view. Then, click **Graphs** in the **Actions** column.
    
5.  On the **Monitoring Details** page, select a time interval or specify a custom time interval to view the graphs of metrics such as CPU Usage, Memory Usage, and System Disk Usage during the time interval.
