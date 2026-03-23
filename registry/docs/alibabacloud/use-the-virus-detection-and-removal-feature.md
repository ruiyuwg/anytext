When your servers are attacked by malware such as ransomware or cryptomining programs, your services can be paralyzed and you risk data loss. Virus Detection and Removal helps you find and remove malicious threats on your servers with deep scanning and precise cleanup to restore normal business operations.

## Feature overview

Virus Detection and Removal integrates Alibaba Cloud's machine learning virus detection engine and a virus database that is updated in real time. It effectively identifies and handles various threats by scanning key locations on your servers, such as persistence startup items, active processes, kernel modules, and sensitive directories.

### Core capabilities

-   **Detection scope**: Covers key scan items such as processes, startup items, scheduled tasks, and sensitive directories.
    
-   **Response methods**: Supports multiple response actions, including automatic isolation, Deep Cleanup, and whitelist management.
    
-   **Scan modes**: Offers immediate scan and periodic scan.
    

### Use cases

-   **Regular security checks**: Perform scheduled security inspections and threat cleanup.
    
-   **Incident response**: Use for rapid response and forensics after a security incident.
    
-   **Compliance and hardening**: Meet compliance audit requirements and strengthen system security.
    

**Important**

This service does not support real-time protection or full scans. Real-time protection automatically detects and blocks threats when files are created, modified, or accessed, or when programs are executed. A full scan performs a comprehensive security check of all system files.

### **Supported virus types and scan items**

-   **Virus types**: Ransomware, cryptomining program, DDoS trojan, trojan, backdoor, malicious programs, Potentially Unwanted Program (PUP), worm, suspicious programs, and self-mutating trojans.
    
-   **Scan items**: Active Process, hidden processes, Docker processes, kernel module, installed programs, dynamic library hijacking, services, scheduled task, boot-up startup items, and sensitive directories.
    

## **Usage notes**

-   **Subscription service**: Available for the **Anti-virus**, **Advanced**, **Enterprise**, or **Ultimate** edition. If your current edition is not supported, please [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz).
    
    **Note**
    
    You must configure your servers for the **Anti-virus**, **Advanced**, **Enterprise**, or **Ultimate** protection edition. For detailed instructions, see [Manage host and container security quotas](/help/en/security-center/user-guide/authorization-number-management).
    
-   **Pay-as-you-go service**: You must enable the **Host and Container Security** service. If it is not enabled, proceed to [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    Your servers must be set to the **Anti-virus**, **Host Protection**, or **Host and Container Protection** level. For detailed instructions, see [Pay-as-you-go instances](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

## **Scan for viruses**

Virus scanning supports two methods: **Scan Now** and **periodic scan**.

1.  **Log on to the console**
    
    Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  **Authorize the service**
    
    If you are using this feature for the first time, the system may prompt you to authorize a Service-Linked Role for Security Center. Click **Authorize Now** and follow the on-screen instructions.
    
    **Note**
    
    After successful authorization, Security Center automatically creates the `AliyunServiceRoleForSas` service-linked role. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
    
3.  **Select a scan method**
    
    -   **Scan Now**: Click **Scan Now** or **Scan Again** for temporary, urgent scan tasks.
        
    -   **Periodic Scan** **(recommended)**: Click **Scan Settings** in the upper-right corner of the page to configure an automated scanning policy. This is recommended for routine automated inspections.
        
4.  **Configure parameters**
    
    Configure the scan parameters as described in the table below, then click **OK** or **Next** to start the task.
    
    **Parameter**
    
    **Description**
    
    **Scan Cycle**
    
    Used only for **periodic scans**. Sets the time interval and execution window for automated scans.
    
    **Scan Mode**
    
    Specify the mode of the scan task.
    
    -   **Quick Scan**: Automatically detects active processes, startup items, sensitive directories, and more.
        
    -   **Custom Directory Scan**: Scans directories you specify. You can enter multiple absolute paths, separated by newlines.
        
        **Important**
        
        -   A single task can scan a maximum of 30,000 files. Exceeding this limit may cause timeouts or prevent some files from being scanned.
            
        -   The maximum size for a single file is 10 MB.
            
        
    
    **Memory Check**
    
    Detects malicious file code and hidden processes in memory.
    
    **Note**
    
    This feature increases resource consumption and scan time. Enable it during off-peak hours or when you suspect advanced threats.
    
    **Scan Scope**
    
    Specify the scope for the scan task.
    
    -   **All Assets**: Scans all servers that meet the edition requirements.
        
    -   **By Asset**: Lets you specify individual assets.
        
    -   **By Group**: Scans all assets in the selected asset group. If new assets are added to the group, they are automatically included in the scan scope.
        
    -   **By VPC**: Scans all assets in the selected Virtual Private Cloud (VPC). If new assets are added to the VPC, they are automatically included in the scan scope.
        
    
5.  **View task progress**
    
    (Optional) On the **Virus Detection and Removal** page, click **Task Management** in the upper-right corner to view the status and progress of your scan tasks.
    

## **Handle virus alerts**

After a scan completes, handle any detected virus alerts promptly to ensure server security.

**Important**

Virus Detection and Removal synchronizes its generated alerts with the [security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events) module. You can handle alerts in either module, and the status will be synced in both directions.

### Pre-handling checklist

Before choosing a response method, we recommend logging on to the server to confirm basic information about the suspicious file and assess its impact on your business.

1.  **File information confirmation**: To avoid false positives on system or business files, verify if the file is a virus by checking its path, signature, and hash value.
    
2.  **Process and ownership check**: Check if the file is being used by critical services (such as `nginx` or `mysql` related components).
    
3.  **Business impact assessment**: Confirm whether the file is part of a business application and if deleting it will affect services.
    

### Choose a response method

In the alert list, find the alert you need to handle and click **Handle**. Then, choose an action based on your assessment. You can click the drop-down icon to the left of an alert to view details such as the virus file path.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5158325571/p996050.png)

**Response method**

**Use case**

**Deep Cleanup**

The file is confirmed to be a virus, especially a persistent one like ransomware or a cryptomining program.

**Add to Whitelist**

The alert is confirmed to be a false positive, and you want to prevent similar alerts in the future.

**Warning**

After adding an item to the whitelist, no new alerts will be generated for it. Use this option with caution.

**Ignore**

The alert is confirmed to be a false positive or an acceptable risk (e.g., authorized penetration testing, unusual behavior during a maintenance window).

**Manually Handled**

You have already logged on to the server and manually removed the threat using other methods.

## **Deep Cleanup** **(Recommended)**

**Deep Cleanup** is a specialized removal tool developed by Security Center's security experts based on in-depth analysis and testing of persistent and stubborn viruses.

-   **Process:**
    
    -   **Kill malicious virus processes**: Blocks running malicious virus processes to prevent further business disruption.
        
    -   **Isolate malicious files**: Security Center moves virus files to quarantine, where you can [manage quarantined files](#57f1afbee7htj).
        
    -   **Remove virus persistence mechanisms**: Provides specialized analysis and removal capabilities for persistence methods like crontab entries and malicious download sources, enhanced by AI-powered learning to continuously improve security defenses.
        
-   **Result:**
    
    -   **Status update**: The alert's status changes to "Handled".
        
    -   **Snapshot creation**: If you choose **Automatically Create Snapshot and Fix Risk**, Security Center creates a snapshot of the server's system disk for data backup.
        
        **Important**
        
        -   Creating and retaining snapshots will incur charges from the Snapshot service, which uses a pay-as-you-go (postpaid) model by default. For pricing details, consult your sales manager.
            
        -   If you choose to **Fix directly without creating a snapshot**, you risk service interruptions due to accidental deletion of business files, and you will not be able to restore them from a snapshot.
            
        

## **Add to Whitelist**

-   **Result**:
    
    -   **Status update**: The current alert's status is updated to "Whitelisted".
        
    -   **Subsequent impact**: If the same alert occurs again, the system does not generate a new alert. Instead, it updates the last occurrence time of the existing one.
        
        **What is a "same alert"?**
        
        A "same alert" refers to a security threat with highly consistent characteristics. For example:
        
        -   For virus alerts: same asset + same virus file path + same virus file MD5.
            
        -   For unusual logons: same asset + same logon IP.
            
        
-   **Risk notice**:
    
    Adding a file to the whitelist removes it from security monitoring. Please use this option with caution. To remove an item from the whitelist, see [Whitelist and ignore questions](#d92022f5dfv7a).
    

## **Ignore**

-   **Result**:
    
    -   **Status update**: The current alert's status is updated to "Ignored".
        
    -   **Subsequent impact**: This action does not affect future detections. If the same threat reappears, the system will generate a new alert.
        
-   **Risk notice:**
    
    -   "Ignore" is only an alert status management action and does not resolve the underlying security issue that triggered the alert.
        
    -   Please perform this action only after confirming that the alert is a false positive or after assessing and accepting the associated risks, to avoid overlooking real attacks.
        

## **Manually Handled**

-   **Result**:
    
    -   **Status update**: The current alert's status is updated to "Handled".
        
    -   **Subsequent impact**: This action does not affect future detections. If the threat has not been completely removed, the system may generate a new alert.
        
-   **Risk notice:**
    
    -   **Manually Handled** is only an alert status management action used to close out a security event.
        
    -   Before performing this action, ensure you have completed all necessary remediation and hardening measures; otherwise, the threat may recur.
        

## **Manage quarantined files**

You can restore or download files isolated by ****Deep Cleanup**** for analysis for up to 30 days. After this period, the system automatically deletes them.

1.  On the **Virus Detection and Removal** page, click **Quarantined Files** in the upper-right corner.
    
2.  Find the target file and click **Restore** or **Download** in the **Actions** column.
    
    -   **Restore**: Restores the file to its original path. Perform this action only if you are certain the file was quarantined by mistake.
        
    -   **Download**: Downloads the file to your local machine for further analysis.
        

## Apply in production

### **Enable alert notifications**

On the **System Settings** > **Notification Settings** page, configure alert notifications to ensure the system immediately notifies the responsible personnel via email, SMS, or DingTalk when high-risk threats are discovered. For detailed instructions, see [Notification settings](/help/en/security-center/user-guide/use-the-notification-feature#task-vlx-khr-dhb).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2986198961/p724160.png)

### Performance optimization and incident response

-   **Performance optimization**:
    
    -   For low-specification servers (e.g., `1-core CPU, 1 GB memory`), run **Quick Scan** during off-peak hours and disable **Memory Check**.
        
    -   For large-scale scan tasks, execute them in batches or exclude large log and backup directories in the **Scan Settings** to reduce scan time.
        
-   **Incident Response process**:
    
    1.  **Isolate**: Upon discovering a high-risk threat, immediately isolate the infected server using a security group or by disconnecting it from the network.
        
    2.  **Forensics**: Create a snapshot of the server and back up critical logs.
        
    3.  **Eradicate**: Use **Deep Cleanup** and manually check if all persistence mechanisms have been thoroughly removed.
        
    4.  **Harden**: Patch vulnerabilities, change weak passwords, and tighten security group access policies.
        
    5.  **Monitor**: Continuously observe the server's status to confirm the threat has not recurred.
        

### **Security hardening recommendations**

To prevent future virus attacks, harden your servers. This increases the cost and difficulty for attackers to breach your defenses.

-   **Enable** **Malicious Host Behavior Prevention**
    
    Enable this feature on the **Protection Configuration** > **Host Protection** > **Malicious Host Behavior Prevention** page. For detailed instructions, see [Malicious Host Behavior Prevention](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#entry-p65-6u9-0sw). It proactively blocks the malicious behavior of mainstream viruses (such as Trojans, ransomware, cryptomining programs, and DDoS Trojans), providing active defense capabilities.
    
-   **Server security hardening**
    
    -   **Upgrade your Security Center edition**
        
        The Enterprise and Ultimate editions support automatic virus isolation (automatic virus removal), providing you with precise defense capabilities and a wider range of security checks.
        
    -   **Tighten access control**
        
        Open only necessary business ports (e.g., 80, 443) and configure strict IP whitelist policies for management ports (e.g., 22, 3389) and database ports (e.g., 3306).
        
        **Note**
        
        If you use Alibaba Cloud Elastic Compute Service (ECS) servers, see [Manage security groups](/help/en/ecs/user-guide/manage-security-groups) for instructions.
        
    -   **Set complex server passwords**
        
        Use complex passwords containing uppercase and lowercase letters, numbers, and special symbols for your servers and applications.
        
    -   **Upgrade software**
        
        Keep your application software updated to the latest official versions. Avoid using old versions that are no longer maintained or have known security vulnerabilities.
        
    -   **Perform regular backups**
        
        Create a periodic snapshot policy for important data and server system disks.
        
        **Note**
        
        If you use Alibaba Cloud ECS servers, see [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1) for instructions.
        
    -   **Fix vulnerabilities promptly**
        
        Regularly use the [Vulnerability Fix](/help/en/security-center/user-guide/view-and-handle-vulnerabilities) feature in Security Center to patch high-risk system and application vulnerabilities in a timely manner.
        
    -   **Reset the server system (use with caution)**
        
        If a virus deeply infiltrates the system, we strongly recommend backing up important data before resetting the operating system. The steps are as follows:
        
        1.  Create a snapshot to back up important data on the server. For instructions, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
            
        2.  Re-initialize the server's operating system. For instructions, see [Re-initialize a system disk (reset the operating system)](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb).
            
        3.  Create a cloud disk from the snapshot. For instructions, see [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).
            
        4.  Mount the cloud disk to the server after reinstalling the system. For instructions, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk).
            

## **Quotas and limits**

-   **Real-time protection:** This feature does not automatically detect and block threats when a file is created, modified, or executed. To enable active defense, [enable this feature on the Host Protection Settings tab](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#entry-p65-6u9-0sw).
    
-   **No full-disk scan support**: To reduce the impact on server resources, scans are limited to high-risk areas of the system.
    
-   **File count limit**: In **Custom Directory Scan** mode, a single task can scan a maximum of 30,000 files. Exceeding this limit may cause timeouts or prevent some files from being scanned.
    
-   **Scan time limit**: A single task has a default timeout of 2 hours. Any files beyond this limit will be skipped.
    
-   **File size limit**: The maximum size for a single file is 10 MB.
    

## **Tutorials**

-   [Best practices for handling mining programs](/help/en/security-center/use-cases/best-practices-for-handling-mining-programs)
    
-   [Scan and remove Trojans from Linux systems](/help/en/security-center/use-cases/detect-and-remove-trojans-in-a-linux-operating-system)
    
-   [Best practices for preventing trojan attacks](/help/en/security-center/use-cases/best-practices-for-defense-against-trojan-attacks)
    

## **FAQ**

### **Whitelist and ignore questions**

-   **How do I remove an item from the whitelist?**
    
    The virus detection and removal module does not support removing items from the whitelist. Navigate to **Detection and Response** > **Alert**. In the list of handled alerts, you can remove items from the whitelist. For more information, see [Remove an alert from the whitelist](/help/en/security-center/user-guide/view-and-handle-alert-events#f340682d818t0).
    
    **Note**
    
    If you have purchased Agentic SOC, navigate to **Agentic SOC** > **Alert** in the left-side navigation pane**.**
    
-   **What is the difference between adding to a whitelist and ignoring?**
    
    **Method**
    
    **Use Case**
    
    **Impact Scope**
    
    **Whitelist**
    
    For permanent exceptions.
    
    Future identical alerts will not be reported.
    
    **Ignore**
    
    For temporary or occasional false positives or known issues.
    
    Affects only the current alert and has no impact on future alerts.
    

### **Virus detection and alert handling questions**

-   **What is the difference between Virus Detection and Removal and Security Alerts?**
    
    -   **Virus Detection and Removal** is a functional module focused on detecting and handling malicious files on servers, providing deep scanning and specialized handling capabilities.
        
    -   **Alert** is a unified alert center that consolidates all security events, including viruses, unusual logons, network attacks, and vulnerabilities.
        
    
    **Important**
    
    -   A single task can scan a maximum of 30,000 files. Exceeding this limit may cause timeouts or prevent some files from being scanned.
        
    -   The maximum size for a single file is 10 MB.
        
    
-   **Why do viruses reappear after being handled?**
    
    A virus might reappear for several reasons:
    
    -   **Root cause not resolved**: The server has weak passwords or unpatched high-risk vulnerabilities, allowing attackers to re-invade.
        
    -   **Incomplete cleanup**: The initial handling failed to remove all hidden backdoors or persistence items.
        
    -   **Contaminated data source**: Data was restored from a backup or image that contained the virus.
        
    
    **Solution:**
    
    -   Follow the [Security hardening recommendations](#4e0ffcec28nck) to harden your security.
        
    -   After handling a virus, we recommend restarting the server and its applications to terminate any malicious processes that may be lingering in memory.
        
        **Warning**
        
        -   Restarting a server will cause a **brief service interruption**. During this time, websites, applications, and other services that depend on the server will be inaccessible, which may affect user experience or business process continuity. Perform this operation during off-peak hours.
            
        -   Some applications deployed on the server may require **manual restart** because they are not configured for automatic startup or depend on specific environment variables. This could lead to service unavailability. Evaluate your restart plan in advance, for example, for specific versions of message queues.
            
        
    
-   **How do I handle multiple alerts (batch handling)?**
    
    -   Virus alerts generated by the **Protection Configuration** > **Host Protection** > **Virus Detection and Removal** module support batch handling.
        
        1.  Go to the Virus Detection and Removal list page, and select the alerts you want to handle by checking the boxes on the left.
            
        2.  Click the **Batch Handle** button in the lower-left corner and choose the appropriate response method.
            
    -   The **Detection and Response** > **Alert** module supports batch whitelisting and batch ignoring.
        
        1.  Go to the Security Alerts list, and select the alerts you want to handle by checking the boxes on the left.
            
        2.  Click the **Ignore Once** or **Add to Whitelist** button in the lower-left corner.
            
-   **What should I do if an alert says "file does not exist"?**
    
    This may happen because the virus was removed by another method or it cleaned up its own traces. You can click "Ignore" or "Manually Handled" in the alert list to clear this alert.
    

### **Scan and task execution questions**

-   **What should I do if a scan task fails or times out?**
    
    -   **Task timeout**: This is usually caused by a custom scan directory being too large. To resolve this:
        
        -   Try breaking down a large-scale scan into several smaller **Custom Directory Scan** tasks, paying special attention to high-risk directories like `/tmp`, `/var/tmp`, and `/root`.
            
        -   Exclude large log or data directories in the scan configuration.
            
        -   Run scans during off-peak business hours.
            
    -   **Task failure**:
        
        1.  **Check agent status**: Ensure the Security Center Agent process (`AliYunDun`) on the server is running and online.
            
        2.  **Check network connectivity**: Test whether the server can access the Security Center service endpoint.
            
        3.  **Check system resources**: Ensure there is sufficient disk space in directories like `/tmp` (at least 1 GB is recommended) and that CPU and memory resources are not exhausted.
            
        4.  **View agent logs**: The log path on Linux is `/usr/local/aegis/aegis_client/aegis_10_*/log/aegis.log`.
            
-   **What should I do if virus removal fails?**
    
    Refresh the page and try again. If it still fails, click "Manually Handled" and then try to delete the file manually. If the file cannot be deleted (Operation not permitted), it may have the immutable `i` attribute set. You can unlock it with the command `chattr -i <file>` before deleting it.
    

### **System compatibility and tool configuration questions**

-   **Where can I see the virus database version?**
    
    You can view the virus database update time on the Overview page. The cloud-based virus database is updated automatically in real time, requiring no manual action.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5158325571/p993534.png)
    
-   **Can I install third-party antivirus software?**
    
    Yes, but be aware of potential compatibility issues. We recommend adding the Security Center agent's core processes and directories to the third-party software's whitelist to prevent them from being mistakenly blocked. For details, see [Processes of the Security Center agent](/help/en/security-center/user-guide/security-center-agent-processes).
