As an administrator, you can view and manage end user sessions of cloud computers at any time. If necessary, you can also remotely assist end users.

## Background information

### **Limits**

The following items describe the limits of the session monitoring feature:

-   The feature supports only Adaptive Streaming Protocol (ASP)-based Windows cloud computers that run a system image of version 1.0.0 or later or a custom image that is created based on a system image of version 1.0.0 or later.
    
-   If you want to use the message sending feature, the cloud computer must be connected from a Windows client or macOS client of version 5.0.0 or later.
    
-   If you want to use the remote assistance feature, the cloud computer must be connected from a Windows client, macOS client, or Web client of version 5.0.0 or later.
    

### **Metrics of session monitoring**

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
    
-   Terminal Type: the type of the WUYING terminal that the user used.
    
-   Terminal IP: the IP address of the WUYING terminal.
    
-   Software Version: the version of the WUYING terminal.
    

## Prerequisites

You are granted the required permissions. For more information, see [Overview](/help/en/wuying-workspace/user-guide/overview-7#task-2225403).

## Procedure

To view information about an exclusive session or a shared session, perform the following steps:

1.  Log on to the [Elastic Desktop Service (EDS) console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring** > **Sessions**.
    
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
    
    After you send a message, the **Message sent.** message appears in the Elastic Desktop Service (Enterprise Edition) console. The cloud computer receives and displays the message that you sent.
    
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
