Vulnerabilities in your systems or applications can provide entry points for attackers. Promptly detecting and fixing these vulnerabilities is essential to securing your assets and reducing potential risks. Security Center detects various vulnerabilities across your assets, provides detailed information and remediation guidance, and supports one-click fixes for certain vulnerabilities to enable efficient risk management.

## **Vulnerability discovery and assessment**

Before you fix vulnerabilities, you must first accurately identify and assess the risks they pose to your assets.

### **View the overall vulnerability status**

1.  Go to the [Vulnerability Management page in the Security Center console](https://yundun.console.alibabacloud.com/?p=sas#/vulManage/cve/ap-southeast-1). In the upper-left corner of the page, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  **View the vulnerability overview**
    
    The top of the **Vulnerabilities** page provides overall vulnerability statistics to help you quickly understand your risk posture.
    
    -   **High-priority Vulnerabilities (CVE)**: Lists top-priority vulnerabilities based on severity and exploitability.
        
        **Note**
        
        If a server has multiple vulnerabilities, each is counted separately.
        
    -   **Vulnerable Servers**: The total number of servers with detected vulnerabilities. Click the number to go to the **Assets** > **Server** tab to view details of vulnerable server assets.
        
    -   **Fixing**: Click the statistic to view a list of vulnerabilities currently being fixed and their progress.
        
    -   **Total Handled Vulnerabilities**: The total number of vulnerabilities that have been fixed, ignored, or added to the whitelist. Hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5155353271/p827323.png) information icon to view the **Handled Vulnerabilities Today** count.
        
    -   **Disclosed Vulnerabilities**: Click the number. In the **Detectable Vulnerabilities** panel, you can view the vulnerabilities that Security Center supports for detection, along with details such as vulnerability ID, detection method, and release time.
        

### **Filter and identify critical vulnerabilities**

Efficient filtering is essential when managing numerous vulnerability alerts. Begin with the following three approaches:

-   **Enable the "****Show Only Exploitable Vulnerabilities****" filter for automatic denoising**
    
    This method automatically filters out low-priority vulnerabilities that pose only theoretical risk and are difficult to exploit in practice.
    
    -   **Feature description**:
        
        -   Uses the Alibaba Cloud vulnerability assessment model, which incorporates factors such as weakness score, time, environment, and asset importance. Combined with exploitability (PoC/EXP) and asset importance, this model automatically identifies vulnerabilities that pose a real threat.
            
        -   If the **Automatic Vulnerability Remediation** is also enabled, filtered low-risk vulnerabilities will not trigger automatic fix tasks. This prevents unnecessary consumption of fix resources (number of vulnerability fixes).
            
    -   **Instructions**: Turn on the **Show Only Exploitable Vulnerabilities** switch in the upper-right corner of the page.
        
-   **Use** **AI Analysis** **for in-depth investigation**
    
    -   **Feature description**: This feature uses an AI large model to provide an overview of the vulnerability, its external exploitation prevalence, attack path analysis, and contextual remediation advice to more accurately assess complex vulnerability risks. The procedure is as follows:
        
    -   **Instructions**:
        
        1.  Click the target **Vulnerability** name to go to the details page.
            
        2.  In the **Vulnerability Details** area, click **AI Analysis** next to the **CVE ID**.
            
-   **Filter precisely and locate quickly**
    
    Use the platform’s filtering and sorting features to quickly locate specific vulnerabilities or assets of interest.
    
    -   **Filter for AI application-related vulnerabilities:**
        
        -   **Feature description**: Security Center detects and centrally displays vulnerabilities in AI applications—such as models and frameworks—that could lead to data breaches or unauthorized model access.
            
        -   **Instructions:** On the **Vulnerabilities** page, on the **Application Vulnerability** tab, select **Display Only AI-related Vulnerabilities**.
            
    -   **Understanding the** **Affected Assets** **column**
        
        This column shows the number of assets affected by the vulnerability and uses colors to indicate the urgency of remediation.
        
        -   Red: Number of servers with **High** remediation urgency.
            
        -   Orange: Number of servers with **Medium** remediation urgency.
            
        -   Gray: Number of servers with **Low** vulnerability fix urgency.
            

### **View vulnerability details**

Click the name of a **Vulnerability** to expand the details panel and view vulnerability information and the list of affected assets. For more information, see [Appendix: Vulnerability details page parameter description](#section-et0-hpu-esn).

-   Vulnerability Details: Includes a description of the vulnerability, its CVSS impact score (0.1–3.9 is **Low**, 4.0–6.9 is **Medium**, 7.0–8.9 is **High**, and 9.0–10.0 is **Critical**), affected component versions, and more.
    
-   **List of vulnerabilities to be handled**: Lists all servers where this vulnerability was detected. In this list, you can view the **Status** of the vulnerability on each server. The statuses are described as follows:
    
    **Note**
    
    If multiple processes on a single server match the vulnerability, the list shows multiple entries.
    
    **Handled**
    
    **Status**
    
    **Description**
    
    **Handled**
    
    Fixed
    
    The vulnerability is fixed.
    
    Fix failed
    
    The vulnerability fix failed. This may be because the vulnerability file was modified or no longer exists.
    
    Ignored
    
    The vulnerability has had the **Ignore** operation performed on it. Security Center will no longer generate alerts for this vulnerability.
    
    Vulnerability expired
    
    The vulnerability was not detected again within a specified period. The expiration periods for different vulnerability types are as follows:
    
    -   Linux software vulnerabilities and Windows system vulnerabilities: 3 days
        
    -   Web-CMS vulnerabilities: 7 days
        
    -   Application vulnerabilities: 30 days
        
    -   Emergency vulnerabilities: 90 days
        
    
    **Unhandled**
    
    Not fixed
    
    The vulnerability is waiting to be fixed.
    
    Verifying
    
    After you manually fix the vulnerability, click **Verify** in the **Actions** column of the target vulnerability. The **Unfixed** status changes to **Verifying**. This action verifies whether the vulnerability is fixed.
    

## **Handle vulnerabilities**

### **Fix vulnerabilities**

##### **Step 1: Choose a fixing method**

-   **One-click fix:** Security Center provides a one-click fix feature in the console to automate vulnerability remediation without requiring manual server logins. This feature is supported for the following editions and vulnerability types:
    
    **Important**
    
    **Application Vulnerability** and **Urgent Vulnerability** are not supported by the one-click repair feature.
    
    **Service Model**
    
    **Service Edition / Protection Level**
    
    **Description**
    
    **Subscription**
    
    **Enterprise** and **Ultimate**
    
    Supports fixing **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**.
    
    **Advanced**
    
    Supports fixing **Linux Software Vulnerability** and **Windows System Vulnerability**.
    
    **Basic**, **Value-added Plan**, and **Anti-virus**
    
    **Important**
    
    To enable the one-click remediation feature, you must purchase the **Vulnerability Fix** value-added service. For instructions, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).
    
    Supports fixing **Linux Software Vulnerability** and **Windows System Vulnerability**.
    
    **Pay-as-you-go**
    
    **All protection levels**
    
-   **Auto-fix:** You can turn on the **Automatic Vulnerability Remediation** and configure auto-fix tasks to periodically remediate newly discovered vulnerabilities at a specified time.
    
    **Important**
    
    -   Automatic fixing tasks depend on the **one-click fix** feature. If the current edition and vulnerability type do not support **one-click fix**, automatic fixing is also not supported.
        
    -   **Automatic fix** is supported only for non-kernel Linux system vulnerabilities. It is not supported for other vulnerabilities.
        
    
-   **Manual fix:** If the current version or vulnerability does not support one-click fixes, or if the **Vulnerability Fix** feature is not enabled, you must log on to the server and manually apply the fix based on the remediation suggestions provided in the vulnerability details.
    

##### **Step 2: Perform the fix**

### **One-click fix**

1.  Go to [Security Center console - Risk Governance - Vulnerability Management](https://yundun.console.alibabacloud.com/?p=sas#/vulManage/cve/ap-southeast-1). In the upper-left corner of the page, select the region where your assets reside: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  On the **Linux Software Vulnerability**, **Windows System Vulnerability**, or **Web-CMS Vulnerability** tab, click the name of the target **Vulnerability** or the **Fix** button in the **Actions** column.
    
3.  In the **Unhandled Vulnerabilities** area, click **Fix** in the **Actions** column of the target server.
    
    **Note**
    
    You can also select multiple servers and click **Fix** below the list to batch repair vulnerabilities on the selected servers.
    
4.  In the fix dialog box, select a fix method: **Automatically Create Snapshot and Fix Risk** or **Skip Snapshot and Fix**.
    
    **Important**
    
    Fixing vulnerabilities may involve upgrading the system kernel or software versions, which poses a business compatibility risk. We recommend performing this operation during off-peak hours and selecting the **Automatically Create Snapshot and Fix Risk** option to allow quick rollback if an issue occurs.
    
5.  Click **Fix Now**. The system starts the repair task, and the vulnerability status changes to **Fixing**. Upon success, the status changes to **Fixed**.
    

### **Automatic fix**

##### **Procedure**

1.  On the **Vulnerabilities** page, click **Vulnerability Auto-remediation Settings** in the upper-right corner, and turn on **Automatic Vulnerability Remediation**.
    
2.  **Configure the vulnerability auto-fix policy**
    
    -   **Vulnerability Auto-Fix Schedule**
        
        **Important**
        
        Fixing vulnerabilities carries certain risks. Perform fixes during off-peak hours to minimize business impact.
        
        -   **Task Type**: You can select **One-time** (executes only once) or **Cycle** (executes periodically).
            
        -   **Execution Date** : This parameter is required only when **Task Type** is set to **One-time**.
            
        -   **Execution Cycle**: This parameter is required only when **Task Type** is set to **Cycle**. You can select **Every Day** or **Every Week**.
            
        -   **Execution Time:** This parameter is required only when **Task Type** is set to **Cycle**.
            
    -   **Vulnerability Fix Configuration**
        
        -   **Vulnerability Level**: Filter vulnerabilities that require remediation by **Vulnerability Level**.
            
        -   **Select Manually**: Filter vulnerabilities to fix based on the selected **Vulnerability**.
            
    -   **Snapshot Configuration**
        
        **Warning**
        
        If you enable the snapshot switch, additional snapshot fees are incurred when the vulnerability fixing task is executed. **Creating and retaining snapshots incurs fees**, which are charged by the snapshot product. The pay-as-you-go (post-paid) mode is used by default.
        
        -   **Snapshot Configuration**: If you enable this switch, the system creates a snapshot backup when a repair task is executed. This ensures that if an issue occurs, you can use the snapshot to roll back the system and quickly recover your services.
            
        -   **Snapshot Name**: Set an identifiable name, for example, vulnerability fix snapshot.
            
        -   **Storage Period**: Set the storage duration for the snapshot.
            
3.  **Configure** **Auto-Repair Asset**
    
    -   **All Assets**: Fixes all assets for which fixable vulnerabilities are detected.
        
        **Important**
        
        Fixing consumes vulnerability fix quotas. To avoid waste, select this option with caution.
        
    -   **By Asset**: Specify the assets on which automatic repair tasks can be run.
        
4.  After you complete the configuration, click **Save**.
    

##### **View automatic fixing tasks**

The system periodically retrieves server vulnerabilities and performs fixing operations based on the configured automatic fixing task cycle. You can obtain the execution results as follows:

1.  On the **Vulnerabilities** page, click **Task Management** in the upper-right corner.
    
2.  On the **Auto Repair Task** tab, you can view the execution statistics for repair tasks.
    
    **Note**
    
    A record is generated each time a periodic task is executed.
    
    -   **Status**: The execution status of the task.
        
    -   **Progress**: The progress of the task execution.
        
    -   **Vulnerability Statistics**: The number of successful and failed fixes.
        
    -   **Host Statistics**: The number of affected hosts.
        
3.  You can click **Details** in the **Actions** column of the target task to view the vulnerability execution details.
    
4.  You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6912495671/p1032560.png) icon before the Target Server column to expand the details of all fixed vulnerabilities, such as **CVE ID**, **Handled At**, and **Status**.
    

## **Manual fix**

1.  **Obtain the remediation solution**
    
    In the vulnerability announcement list on the corresponding tab, click the name of the target announcement.
    
    -   **Application Vulnerability**: On the **Vulnerability Details** tab, view the affected scope and the **Fixing Suggestions**.
        
    -   **Linux Software Vulnerability**/**Windows System Vulnerability**/**Web-CMS Vulnerability**:
        
        1.  In the **Vulnerability Details** area, click **Fixing Suggestions** in the **Actions** column for the vulnerability.
            
        2.  In the **Solution Suggestions** section of the Alibaba Cloud Vulnerability Database, view the remediation plan for the vulnerability. Follow the plan to log on to the server and fix the vulnerability.
            
2.  **Execute the remediation solution**
    
    1.  Before you make changes, create a manual snapshot backup for the server.
        
        **Warning**
        
        Fixing vulnerabilities carries certain risks. Back up your server data before you fix a vulnerability. If the server with the vulnerability is an Alibaba Cloud ECS instance, you can create a snapshot to back up data. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
        
    2.  Log on to the server using a method such as SSH or Remote Desktop.
        
    3.  Execute the corresponding commands based on the obtained remediation solution, such as updating software packages or modifying configurations.
        
3.  **View the fix result**
    
    After a manual fix, the vulnerability status is not immediately updated. It needs to be confirmed by another scan from Security Center.
    
    1.  After the vulnerability is fixed, return to the Security Center console.
        
    2.  Click the name of the vulnerability announcement to expand the vulnerability details panel. In the **Unhandled Vulnerabilities** list on the panel, locate the server where you just fixed the vulnerability.
        
    3.  Click **Verify** in its **Actions** column to check if the vulnerability is fixed. After the vulnerability is fixed, its status changes to **Fixed**.
        
        **Note**
        
        If the status does not update for a long time, it may be due to network latency or cache. You can refresh the page later to check.
        

##### **Step 3: Verify results and troubleshoot failures**

If the status of a vulnerability is **Fixing Failed** or verification fails after a manual fix, you can troubleshoot the issue by following the steps below:

-   **One-click fix failure**: This is usually due to an abnormal environment for the fix script, such as a modified target file, insufficient disk space, or permission issues. You can view the failure reason in the task details and then try to fix it manually.
    
    **Warning**
    
    After a **one-click fix**, restart the server. If the fix fails, the vulnerability fix quota is not consumed.
    
-   **Verification failure after manual fix**:
    
    1.  **Confirm the fix operation is correct**: Check whether the commands or operations performed on the server are exactly the same as the remediation advice.
        
    2.  **Confirm the component version**: Check whether the version of the relevant software or component has been upgraded to the version required by the remediation solution.
        
    3.  **Wait for scan synchronization**: The vulnerability status update depends on the scan results, and there may be a delay.
        

##### **Step 4 (Optional): Roll back a fix**

If a business exception occurs after a vulnerability fix and you have created a snapshot beforehand, you can perform a rollback in the console. The steps are as follows:

1.  On the **Vulnerabilities** page, click the number below **Total Handled Vulnerabilities**.
    
2.  In the **Total Handled Vulnerabilities** panel, for Status, select **Fixed**, and click **Roll Back** in the Actions column of the target vulnerability announcement.
    
3.  Select the snapshot that you want to roll back to, and click **OK**.
    

### **Postpone fix (****Ignore****/****Add to Whitelist****)**

When you confirm that a vulnerability does not need to be fixed, you can choose to ignore it or add it to a whitelist to avoid repeated alerts.

-   **Add to Whitelist**: This operation suppresses alerts for a specific type of vulnerability within the configured scope (the default scope is all Assets). This may cause related security risks to be overlooked. Please use with caution.
    
-   **Ignore**: The Ignore operation is effective only for the current process. If the application restarts or a new process starts, the vulnerability may be detected again.
    

**Feature**

**Ignore**

**Add to Whitelist**

**Scope**

Applies to a **single vulnerability instance** on a **single asset**.

-   Applies to a class of vulnerabilities (such as a CVE ID).
    
-   The default scope is **All Assets**, and you can change the applicable scope by **Hosts** or **By Asset Group**.
    

**Persistence**

Temporary. An alert may be triggered again after the process restarts.

Persists until the whitelist rule is manually deleted.

**Use cases**

-   You have confirmed that a specific vulnerability is not a risk.
    
-   You are temporarily accepting the risk and will handle it later.
    

-   You have confirmed that a class of vulnerabilities is a false positive.
    
-   You are accepting the risk of a class of vulnerabilities for business reasons and do not plan to fix them.
    

## **Ignore**

#### **Procedure**

1.  On the **Vulnerabilities** page, on a vulnerability tab such as **Linux Software Vulnerability**, locate the target vulnerability announcement.
    
2.  Click the announcement name to go to the vulnerability announcement details page. In the **Unhandled Vulnerabilities** section, select one or more servers for which to ignore vulnerabilities.
    
3.  Click **Ignore** below the list, enter remarks, and click **OK**.
    
    **Note**
    
    You can also click **Ignore** under the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6912495671/p1032925.png) in the Actions column for an individual vulnerability.
    

#### **View and cancel ignore**

1.  Return to the **Vulnerabilities** page and click the number below **Total Handled Vulnerabilities**.
    
2.  In the **Total Handled Vulnerabilities** panel, set Status to **Ignored** to view a list of all ignored vulnerabilities.
    
3.  Click **Cancel Ignore** in the Actions column of the target vulnerability bulletin.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9872576071/p754636.png)

## **Add to Whitelist**

#### **Procedure**

-   **Method 1**:
    
    1.  On the **Vulnerabilities** page, on a vulnerability tab such as **Linux Software Vulnerability**, select one or more vulnerability announcements to process.
        
    2.  Click **Add to Whitelist** in the lower-left corner of the list.
        
        **Important**
        
        This method applies to **All Assets** by default.
        
-   **Method 2**:
    
    1.  On the **Vulnerabilities** page, click **Vulnerability Settings** in the upper-right corner.
        
    2.  On the **Vulnerability Whitelist Settings** tab, click **Create Rule**.
        
    3.  After you configure the settings as described below, click **OK**.
        
        1.  **Select Vulnerability**: Select one or more vulnerability announcements to add to the allowlist.
            
        2.  **Applied Assets**: Set the effective scope of the whitelist. If you select **Asset Group** or **Hosts**, you must select the corresponding target data.
            

#### **View and manage the whitelist**

1.  On the **Vulnerabilities** page, click **Vulnerability Settings** in the upper-right corner.
    
2.  On the **Vulnerability Whitelist Settings** tab, you can view the whitelists that are set for all channels.
    
3.  Modify/Delete: Click **Delete**/**Edit** in the Actions column of the whitelist.
    
    1.  **Delete**: After you delete the vulnerability, it will be detected again.
        
    2.  **Edit**: You can only modify the **Applied Assets** (whitelist scope) and notes.
        

## **Billing**

Using the vulnerability fixing feature may involve the following fees:

-   **Vulnerability fixing service (pay-as-you-go)**: Enable this service to use the one-click fix feature. It is billed at USD 0.3/time on a daily basis. The rules for calculating the number of vulnerability fixes are as follows:
    
    -   **Minimum unit:** Successfully fixing one Security Notice on one server counts as one fix.
        
        **Important**
        
        A single Security Notice may contain multiple related CVEs. Fixing the notice counts as only 1 fix, regardless of how many CVEs it includes.
        
    -   **Number of vulnerability fixes** = Σ (Number of Security Notices with the "Fixed" status on each server)
        
        **Important**
        
        A fix is counted only after the server restarts and its status changes to "Fixed". Failed fixes are not counted.
        
    -   **Example:**
        
        If you use Security Center to successfully fix 10 different Security Notices on each of 5 servers:
        
        Total vulnerability fixes = 5 servers × 10 Security Notices = 50 fixes
        
-   **Snapshot backup costs**: When you perform a one-click repair, we recommend that you select **Automatically Create Snapshot and Fix Risk**. This operation creates a snapshot backup of the server disk so that you can quickly roll back if an unexpected issue occurs during the repair. Creating and retaining snapshots incurs costs, which are charged by the ECS Snapshot service. For example, creating a snapshot for a 40 GB system disk and retaining it for one day costs approximately CNY 0.15.
    

## **Going live**

### **Recommended vulnerability fixing procedure**

1.  **Before fixing**
    
    -   **Asset confirmation:** Verify the server assets and confirm that the software versions related to the vulnerability actually exist.
        
    -   **Risk assessment:** Assess the business impact and determine the urgency and necessity of the fix. Not all vulnerabilities need to be fixed immediately.
        
    -   **Thorough testing:** Deploy the patch in a staging environment, fully verify its compatibility and security, and produce a detailed test report.
        
    -   **Data backup:** Perform a full backup of the server, such as creating an ECS snapshot, to ensure a quick rollback is possible after an operational error.
        
    -   **Choose the right time:** Perform the operation during off-peak hours to minimize the impact on your business.
        
2.  **During fixing**
    
    -   **Two-person operation:** At least two professional personnel must be present. One person performs the operation, and the other reviews and records it to prevent mistakes.
        
    -   **Fix one by one:** Strictly follow the predetermined vulnerability list and remediation plan, and fix them one by one.
        
3.  **After fixing**
    
    -   **Result verification:** Confirm that the vulnerability has been successfully fixed and that the system functions and business applications are running normally.
        
    -   **Document archiving:** Write and archive the final vulnerability fix report, recording the complete operation process.
        

* * *

### **Key risk avoidance measures**

-   **Develop a detailed plan:** You must develop a feasible remediation plan that has been demonstrated and tested, and strictly follow the steps.
    
-   **Test in a simulated environment:** Establish a simulated test environment that is identical to the production environment (system, application, data) to fully verify the remediation plan.
    
-   **Complete system backup:** Select the **Automatically Create Snapshot and Fix Risk** option to perform a full system backup (system, application, and data) and verify its recoverability to ensure that you can quickly restore services in case of an abnormality.
    

## **FAQ**

### **Fixing limitations and principles**

-   **Why is the Fix button grayed out when I try to fix a vulnerability?**
    
    -   **Product edition limitations**
        
        -   **Edition is too low**: The Basic and Anti-virus editions do not support one-click fix.
            
        -   **Solution**: Purchase the "Vulnerability Fixing" value-added service, or upgrade to the Enterprise or Ultimate Edition.
            
    -   **Server issues**
        
        ## **Linux**
        
        -   **Operating system is no longer maintained**: The vendor no longer provides patches. You need to manually upgrade the operating system version. Currently, vulnerabilities in the following operating systems need to be fixed by upgrading the OS.
            
            -   Red Hat 5, Red Hat 6, Red Hat 7, Red Hat 8
                
            -   CentOS 5
                
            -   Ubuntu 12
                
            -   Debian 8, 9, 10
                
        -   **Insufficient disk space**: The free space is less than 3 GB. Clean up or expand the disk.
            
        -   **Process is busy**: The `apt` or `yum` process is running. Wait for it to finish and then retry, or manually stop the process.
            
        -   **Insufficient permissions**: The user executing the fix command does not have enough permissions. Make sure the file owner is the `root` user and set reasonable permissions, such as `755`.
            
        
        ## **Windows**
        
        -   **Insufficient disk space**: The free space is less than 500 MB. Clean up or expand the disk.
            
        -   **Windows Update service is abnormal**: The service is disabled or running.
            
            -   Disabled: Go to the system service manager of the server, enable the Windows Update Service, and then try to fix the vulnerability again.
                
            -   Running: If it is running, wait for it to finish or manually end the Wusa process on the server, and then try to fix the vulnerability again.
                
        
-   **What is the difference between application vulnerabilities and system vulnerabilities? Why does one-click fix not support application vulnerabilities?**
    
    -   System vulnerabilities, such as Linux software vulnerabilities and Windows system vulnerabilities, are vulnerabilities in the operating system or its components. Their remediation paths are standardized, so one-click fix is supported.
        
    -   Application vulnerabilities exist in self-deployed applications, such as website code or third-party software. Their remediation methods are closely related to business logic and code implementation. They cannot be automatically fixed without understanding the business, so they need to be handled manually.
        
-   **Why are there so many vulnerabilities on my server?**
    
    Vulnerabilities are continuously discovered in older software versions because new attack methods are always emerging. Therefore, regular scanning and patching are ongoing security tasks. You can turn on the **Show Only Exploitable Vulnerabilities** switch to focus on critical risks.
    

### **Fixing operations**

-   **What should I do if I get a "Permission acquisition failed, please check permissions and retry" message when executing a fix command?**
    
    -   **Cause:** The user who owns the file required for the fix operation is not `root`, resulting in insufficient permissions.
        
    -   **Solution:**
        
        1.  **Locate the file**:
            
            In Security Center, view the vulnerability details to confirm the specific file and its path that need to be fixed.
            
        2.  **Modify permissions**:
            
            Log on to the server and run the following command to change the file owner to `root`.
            
        3.  **Retry the fix**:
            
            Return to the Security Center console and perform the fix operation on the vulnerability again.
            
-   **When fixing vulnerabilities in a batch, in what order are they fixed?**
    
    Linux software vulnerabilities and Web-CMS vulnerabilities are fixed in a batch in the order they appear in the vulnerability list in the console. Fixing some Windows system vulnerabilities requires installing prerequisite patches first. When fixing Windows system vulnerabilities in a batch, these types of vulnerabilities are fixed first. The remaining vulnerabilities are fixed in the order they appear in the vulnerability list in the console.
    
-   **Why is restarting ineffective after fixing an Ubuntu kernel patch vulnerability?**
    
    -   **Symptom:** After using the one-click fix in Security Center for a kernel vulnerability on an Ubuntu server, although it prompts "Fixed, pending restart", the vulnerability alert still exists after restarting the server. The system has not enabled the newly installed kernel.
        
    -   **Cause:** This is usually because **the default boot order of the GRUB boot menu was manually modified before**. In this case, the system fix script cannot automatically set the newly installed kernel as the default boot item.
        
    -   **Solution:**
        
        ## **Solution 1: Automatically configure the new kernel**
        
        This solution abandons the original custom GRUB configuration and lets the system automatically apply the default settings for the new kernel.
        
        **Procedure:**
        
        1.  **Before executing the vulnerability fix**, log on to your Ubuntu server.
            
        2.  Run the following command to set the environment variable:
            
            ```
            <BASH>
            
            export DEBIAN_FRONTEND=noninteractive
            ```
            
        3.  Return to the Security Center console and perform a **one-click fix** on the vulnerability.
            
        4.  After the fix is complete, restart the server as prompted. The system will automatically enable the latest kernel.
            
        
        ## **Solution 2: Manually modify the boot order**
        
        To keep the original GRUB configuration, you can choose this solution.
        
        **Procedure:**
        
        1.  In the Security Center console, perform a normal **one-click fix** and restart the server as prompted.
            
        2.  After the fix and restart, log on to your Ubuntu server.
            
        3.  **Manually modify the GRUB boot order** to set the newly installed kernel version as the default boot item.
            
            **Note**
            
            The specific operation usually involves modifying the `/etc/default/grub` file and running the `update-grub` command. For related operations, see [Modify the kernel boot order for ECS Linux CentOS](/help/en/ecs/support/how-to-modify-the-boot-sequence-of-the-linux-kernel).
            
        4.  Restart the server again to make the new boot order take effect.
            
        
-   **Do I need to restart the system after fixing a vulnerability?**
    
    -   **Windows**: **A restart is required.**
        
    -   **Linux Software Vulnerability**: A restart is required if **any** of the following conditions are met:
        
        -   A kernel vulnerability was fixed.
            
        -   On the **Linux Software Vulnerability** tab of the **Risk Governance** > **Vulnerabilities** page in the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), the announcement for the vulnerability has a **Restart Required** tag.
            
            ![需要重启的Linux内核漏洞](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5694000161/p110086.png)
            
-   **Why does a vulnerability rollback operation fail?**
    
    When a vulnerability rollback operation fails, you can troubleshoot along the following paths:
    
    1.  **Check the client (Agent) status**
        
        The rollback operation depends on the Security Center Agent being online. If the Agent is offline, the command cannot be delivered. You need to troubleshoot and resolve its offline issue first.
        
    2.  **Confirm the backup snapshot is valid**
        
        The rollback feature is based on the backup snapshot created before the fix. If the snapshot has expired or been manually deleted, the rollback cannot be performed.
        
-   **Why does creating a snapshot fail when fixing a vulnerability?**
    
    Creating a snapshot when fixing a vulnerability may fail for the following reasons:
    
    -   **The current operation is performed by a RAM user**: If you are currently using a RAM user and that user does not have permission to create snapshots, the console will prompt you that snapshot creation failed. We recommend that you use an Alibaba Cloud account for the operation. For more information about RAM users, see [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users#concept-662669).
        
    -   **The server is not an Alibaba Cloud server**: Non-Alibaba Cloud servers do not support creating snapshots to fix vulnerabilities.
        

### **Post-fix status and verification**

-   **The vulnerability has been fixed, but Security Center still reports it. What should I do?**
    
    -   **Cause**: This happens because some vulnerabilities, namely Linux kernel vulnerabilities, require a server restart after being fixed.
        
    -   **Solution**: On the vulnerability details page, click **Restart**. After the restart is complete, click **Verify**. If 'Repaired' is displayed, the vulnerability is successfully fixed.
        
-   **The host has not installed the corresponding patch. Why does it show that the Windows vulnerability was fixed successfully?**
    
    This is a normal phenomenon caused by the Windows update mechanism. You only need to ensure that the latest cumulative update is installed to fix all historical vulnerabilities it contains. You do not need to install old patches one by one.
    
    **Note**
    
    You can visit the official Microsoft patch website, search for the latest installed patch (usually identified by its KB number), and check its "Package Details" to confirm whether it has covered the old vulnerability you are concerned about.
    
    -   **Cause: Windows cumulative update mechanism**
        
        Windows security updates use a "cumulative" model. This means that the latest monthly security patch is a collection package that, by default, includes all security fixes from previous months up to the release date.
        
    -   **Solution:** When Security Center detects that the system has installed the latest cumulative update, it marks all the old vulnerabilities it covers as "Fixed". Therefore, you do not need to install a separate patch for each historical vulnerability.
        
-   **After fixing a vulnerability, why does it still show "Not fixed" in the console?**
    
    Possible reasons are as follows:
    
    1.  **Verification delay**: After a manual fix, you need to click the **Verify** button to trigger an instant scan. The status update takes a few minutes.
        
    2.  **Cache issue**: The console page may have a cache. Try to force-refresh the page or wait a few minutes.
        
    3.  **Incomplete fix**: The fix operation may not have been completely successful, or there may be multiple vulnerability paths and only one was fixed. Please recheck the fix steps.
        
-   **Fixed and Pending Restarted** **state vulnerabilities: Can Security Center automatically verify them?**
    
    **No.** You need to restart the server from the Security Center console or manually restart the server. After the restart is complete, click **Verify** to confirm whether the vulnerability has been successfully fixed.
    
    **Important**
    
    If you do not actively verify, Security Center will automatically check during subsequent periodic scans. After the system does not detect the vulnerability in the first scan, it will retain the vulnerability information for 3 days (to prevent misjudgment due to network or other reasons). If it is not detected for 3 consecutive days, the system will clear the vulnerability record.
    
-   **Why is there no response when I manually verify after fixing a vulnerability?**
    
    After manually fixing a vulnerability on a server, if the "Verify" function in the Security Center console cannot update the vulnerability status to "Fixed", it is usually due to the following two reasons:
    
    -   **Incomplete vulnerability scan level configuration**
        
        -   **Cause**: Security Center only scans and updates the risk levels that are selected in **Vulnerability Settings**. If the risk level of a target vulnerability (for example, important or medium) is not selected, the system does not update the status of vulnerabilities at that level.
            
        -   **Solution**: Verify that the scan levels in **Vulnerability Settings** cover the risk level of the target vulnerability.
            
    -   **Security Center client (Agent) is offline**
        
        -   **Cause**: The "Verify" function relies on real-time communication between the console and the client on the server. If the client is offline, the console cannot deliver the verification command or receive the result.
            
        -   **Solution**: Troubleshoot and resolve the client offline issue. After it is back online, perform the verification operation again.
            

## **Appendix: Parameter description for the vulnerability details page**

**Vulnerability details**

**Description**

**CVE ID**

The CVE ID of a vulnerability. The Common Vulnerabilities and Exposures (CVE) system provides a reference method for publicly known information security vulnerabilities and exposures. You can use CVE IDs, such as CVE-2018-1123, to query relevant information about vulnerability fixes in databases that are compatible with CVE. This helps you resolve security issues.

**Impact Score**

The Common Vulnerability Scoring System (CVSS) score of a vulnerability. A CVSS score follows the widely accepted industry standard and is calculated using a formula that depends on several attributes of the vulnerability. The score is used to quantify the severity of the vulnerability. You can use the score to determine the urgency and importance of fixing the vulnerability.

The following list describes the severity rating scale in the CVSS scoring system:

-   0: None
    
-   0.1 to 3.9: Low
    
    -   Vulnerabilities that can cause local denial-of-service (DoS) attacks.
        
    -   Other vulnerabilities with low impact.
        
-   4.0 to 6.9: Medium
    
    -   Vulnerabilities that require user interaction to affect users.
        
    -   Vulnerabilities that can lead to normal privilege escalation.
        
    -   Vulnerabilities that can be further exploited after local configuration changes or information gathering.
        
-   7.0 to 8.9: High
    
    -   Vulnerabilities that can be used to indirectly obtain normal permissions on servers and application systems.
        
    -   Vulnerabilities that can lead to arbitrary file reading, downloading, writing, or deletion.
        
    -   Vulnerabilities that can lead to sensitive information leakage.
        
    -   Vulnerabilities that can directly cause business interruption or remote DoS attacks.
        
-   9.0 to 10.0: Critical
    
    -   Vulnerabilities that can be used to directly obtain server system permissions.
        
    -   Vulnerabilities that can be used to directly obtain important sensitive information, leading to data breaches.
        
    -   Vulnerabilities that can directly lead to unauthorized access to sensitive information.
        
    -   Other vulnerabilities that can have a wide-ranging impact.
        

**Affected Assets**

Information about the server assets that have the vulnerability, including the public or private IP addresses of the assets.

**Severity**

The severity level of the vulnerability is calculated based on its CVSS score, asset importance, and other factors. It includes:

-   Urgency level **High**: High-risk vulnerability. You should fix it as soon as possible.
    
-   Urgency **Medium**: Medium-risk vulnerability. You can fix it as soon as possible or postpone the fix based on your business needs.
    
-   Severity **Low**: Low-risk vulnerability. You can fix it as soon as possible or choose not to fix it based on your business needs.
    

**Details**

Go to the **Vulnerabilities** page and click the name of the target vulnerability in the **Vulnerability** column. On the **Unhandled Vulnerabilities** tab, click **Details** in the **Actions** column of the vulnerability to view information such as affected assets, remediation commands, and impact descriptions.

-   **Fixing Command**: You can execute this command to fix the corresponding vulnerability.
    
    **Note**
    
    The Basic Edition does not support viewing this information.
    
-   **Impact Description**:
    
    -   **Software**: The version of the software on the server that has the vulnerability, as detected by Security Center. The following figure is an example to show that the version of mariadb-libs on the server is 5.5.52-1.el7.
        
    -   **Hit**: The reason why the vulnerability is detected, which is typically because the current software version is earlier than a specific version. For example, in the figure below, the vulnerability is detected because the version of mariadb-libs is earlier than 5.5.56-2.el7.
        
    -   **Path**: The path to the vulnerable program on your server, as detected by Security Center. In the example below, the path of mariadb-libs is _/_etc/ld.so.conf.d/mariadb-x86\_64.con.
        
-   **Caution (Read Before Further Operations)**: Risk alerts for the vulnerability, additional remediation suggestions, and references.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6912495671/p834406.png)
    

、
