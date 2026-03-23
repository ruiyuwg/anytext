The terminal antivirus feature integrates the capabilities of the malicious file detection service of Alibaba Cloud. The feature automatically checks viruses against the latest virus engine versions recorded by Alibaba Cloud. This helps enterprises protect their terminals at the earliest opportunity to prevent significant business loss. This topic describes the supported check items and scan methods. This topic also describes how to configure a scan task, configure blacklists and whitelists of files, and view scan results.

## **Supported check items and scan methods**

**Category**

**Description**

Check items

Reverse shell, DDoS trojan, trojan downloader, engine test program, attacker tool, high-risk program, tainted basic software, malicious script, malicious program, mining program, proxy, ransomware, riskware, rootkit, password stealer, scanner, suspicious program, infectious virus, webshell, worm, cracking program, exploit, gametool, adware, and malicious document.

Scan methods

-   Quick scan
    
    Secure Access Service Edge (SASE) scans critical system paths, such as services, drivers, startup items, running processes, download directories, desktop directories, and document directories.
    
-   Custom scan
    
    SASE scans specific paths based on your business requirements.
    
-   Full disk scan
    
    SASE scans all files.
    
-   Real-time protection
    
    When the SASE client detects that a new document is stored on the disk or a new process is running, the system automatically starts real-time antivirus scans based on the configured check items.
    

## **Create a scan task and configure a handling method**

To use the terminal antivirus feature, you must create a scan task and configure the scan method, resource consumption, and handling method of malicious files. Then, SASE runs the scan task on terminals.

If you want to periodically scan terminals, you can create a scheduled scan task. If you want to immediately scan terminals, you can create an immediate scan task, which is valid for 24 hours. If a user does not log on to the SASE client within this period of time, the data on the terminal of the user cannot be scanned.

### Create a scheduled scan task

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). In the left-side navigation pane, choose **Terminal Protection** > **Antivirus**.
    
2.  On the **Terminal Antivirus** page, click **Configure Policy**.
    
3.  On the **Scheduled Scan** tab, click **Create Scheduled Task**.
    
4.  Configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Task Name**
    
    The name of the task.
    
    Antiviruspolicy\_test
    
    **Description**
    
    The description of the task.
    
    This task is used to perform antivirus scans on all enterprise terminals.
    
    **Priority**
    
    The priority of the task.
    
    Valid values: 1 to 10. A smaller value specifies a higher priority.
    
    1
    
    **Policy Status**
    
    The task takes effect only if the task is enabled.
    
    Enabled
    
    **Check Item**
    
    Reverse shell, DDoS trojan, trojan downloader, engine test program, attacker tool, high-risk program, tainted basic software, malicious script, malicious program, mining program, proxy, ransomware, riskware, rootkit, password stealer, scanner, suspicious program, infectious virus, webshell, and worm.
    
    Select All
    
    **Scan Mode**
    
    -   **Quick Scan**
        
        Scans critical system paths, such as services, drivers, startup items, running processes, download directories, desktop directories, and document directories.
        
    -   **Custom Scan**
        
        Scans specific paths based on your business requirements.
        
    -   **Full Disk Scan**
        
        Scans all files.
        
    
    Quick Scan
    
    **Frequency**
    
    The frequency at which the scan task is run.
    
    Every 3 Days, 00:00-24:00
    
    **Performance Preference**
    
    -   **Experience First**
        
        In this mode, resource consumption is minimized to maintain an optimal user experience. In specific cases, scan tasks may be suspended or canceled.
        
    -   **Balanced Mode**
        
        In this mode, resources are evenly allocated between system performance and security scanning to ensure that scan tasks are complete without affecting the user experience.
        
    -   **Security First**
        
        In this mode, scan tasks are preferentially run to ensure security but more resources are consumed.
        
    
    Experience First
    
    **Handling Method**
    
    Based on the file classification mechanism of the malicious file detection service of Alibaba Cloud, the system automatically assigns a risk level to each scanned file. You can configure the handling method of a file based on its risk level. The following list describes the risk levels and available handling methods.
    
    -   **High-risk**
        
        You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
        
    -   **Medium-risk**
        
        You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
        
    -   **Low-risk**
        
        You can select **Do Not Handle**, **Notify User**, or **Notify User and Quarantine Malicious Files**.
        
    
    -   High-risk
        
        Notify User and Quarantine Malicious Files
        
    -   Medium-risk
        
        Notify User and Quarantine Malicious Files
        
    -   Low-risk
        
        Notify User
        
    
    **Applicable User**
    
    The users to whom the task applies. You can select **All Users** or **Some Users**. If you select **Some Users**, you must select the user groups that you want to manage.
    
    All Users
    
    **Exception User**
    
    The users that are added to a whitelist. The task does not apply to the users in the whitelist.
    
    \-
    

### **Create an immediate scan task**

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). In the left-side navigation pane, choose **Terminal Protection** > **Antivirus**.
    
2.  In the **Scan Task** section, click **Scan Now**.
    
3.  Configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Task Name**
    
    The name of the task.
    
    Antiviruspolicy\_test
    
    **Check Item**
    
    Reverse shell, DDoS trojan, trojan downloader, engine test program, attacker tool, high-risk program, tainted basic software, malicious script, malicious program, mining program, proxy, ransomware, riskware, rootkit, password stealer, scanner, suspicious program, infectious virus, webshell, and worm.
    
    Select All
    
    **Scan Mode**
    
    -   **Quick Scan**
        
        Scans critical system paths, such as services, drivers, startup items, running processes, download directories, desktop directories, and document directories.
        
    -   **Custom Scan**
        
        Scans specific paths based on your business requirements.
        
    -   **Full Disk Scan**
        
        Scans all files.
        
    
    Quick Scan
    
    **Performance Preference**
    
    -   **Experience First**
        
        In this mode, resource consumption is minimized to maintain an optimal user experience. In specific cases, scan tasks may be suspended or canceled.
        
    -   **Balanced Mode**
        
        In this mode, resources are evenly allocated between system performance and security scanning to ensure that scan tasks are complete without affecting the user experience.
        
    -   **Security First**
        
        In this mode, scan tasks are preferentially run to ensure security but more resources are consumed.
        
    
    Experience First
    
    **Handling Method**
    
    -   **High-risk**
        
        You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
        
    -   **Medium-risk**
        
        You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
        
    -   **Low-risk**
        
        You can select **Do Not Handle**, **Notify User**, or **Notify User and Quarantine Malicious Files**.
        
    
    -   High-risk
        
        Notify User and Quarantine Malicious Files
        
    -   Medium-risk
        
        Notify User and Quarantine Malicious Files
        
    -   Low-risk
        
        Notify User
        
    
    **Applicable User**
    
    The users to whom the task applies. You can select **Some Users** or **All Users**. If you select **Some Users**, you must select the user groups that you want to manage.**User Group**
    
    All Users
    
    **Exception User**
    
    The users that are added to a whitelist. The task does not apply to the users in the whitelist.
    
    \-
    

## **Configure real-time protection and a handling method**

When the SASE client detects that a new document is stored on the disk or a new process is running, the system starts real-time antivirus detection. The real-time monitoring mechanism helps quickly detect potential security threats or attacks and take immediate measures to block or alleviate the threats or attacks. This way, business loss can be minimized.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). In the left-side navigation pane, choose **Terminal Protection** > **Antivirus**.
    
2.  On the **Terminal Antivirus** page, click **Configure Policy**.
    
3.  On the **Real-time Protection** tab, click **Modify Configuration Item**, configure the parameters for real-time protection, and then click **OK**. The following table describes the parameters.
    

**Parameter**

**Description**

****Policy Status****

Click the switch icon to enable real-time protection.

**Check Item**

Select check items. You can select multiple check items.

Available check items include reverse shells, DDoS trojans, trojan downloaders, engine test programs, attacker tools, high-risk programs, tainted basic software, malicious scripts, malicious programs, mining programs, proxies, ransomware, riskware, rootkits, password stealers, scanners, suspicious programs, infectious viruses, webshells, worms, cracking programs, exploits, gametools, adware, and malicious documents.

**Handling Method**

Select a handling method. Based on the file classification mechanism of the malicious file detection service of Alibaba Cloud, the system automatically assigns a risk level to each scanned file. You can configure the handling method of a file based on its risk level. The following list describes the risk levels and available handling methods.

-   **High-risk**
    
    You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
    
-   **Medium-risk**
    
    You can select **Notify User** or **Notify User and Quarantine Malicious Files**.
    
-   **Low-risk**
    
    You can select **Do Not Handle**, **Notify User**, or **Notify User and Quarantine Malicious Files**.
    

**Applicable User**

Select the users to whom real-time protection applies.

-   **Some Users**: If you select this option, you must select the user groups to which real-time protection applies.
    
-   **All Users**: If you select this option, the devices of all users are checked.
    

**Exception User**

Add users to a whitelist. Real-time protection does not apply to the users in the whitelist.

## **Configure blacklists and whitelists of files**

The terminal antivirus feature allows you to configure a blacklist or whitelist for a specific type of file. For example, if you do not want to scan .exe files in the Windows operating system, you can add this file type to a whitelist. If you want to prohibit a specific file type on user terminals, you can add the file type to a blacklist. After you add the file type to a blacklist, the SASE client notifies users when the file type is detected or automatically quarantines all detected malicious files based on the scan task that you configured.

1.  On the **Terminal Antivirus** page, click **Configure Policy**.
    
2.  On the **Blacklist/Whitelist** tab, configure the following parameters.
    
    You can configure blacklists and whitelists in Windows and macOS:
    
    -   **File Name Extensions**: the string that appears after the last period (.) in a file name.
        
        For example, the extension of the scan\_file.exe file is exe.
        
    -   **File Name**: the full name of the file, including the file name extension.
        
        For example, the full name of the scan\_file.exe file is scan\_file.exe.
        
    -   **Folder Path**: the absolute path to the folder.
        
        For example, the absolute path to the scan\_dir folder is C:\\scan\_dir.
        
    -   **File Path**: the absolute path to the file.
        
        For example, the absolute path to the scan\_file.exe file is C:\\scan\_dir\\scan\_file.exe.
        
    -   **File MD5 Hash Value**: the MD5 hash value of the file content.
        
        For example, the MD5 hash value of the scan\_file.exe file is 56486982bc352eb0e29efd54f7f0\*\*\*\*.
        
    

## **View virus statistics**

After you configure terminal antivirus settings and allow terminals to run for a specific period of time, you can check the protection status of terminals on the **Terminal Antivirus** page.

By default, the **Terminal Antivirus** page displays the statistics and distribution of viruses in the previous 30 days.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2635511471/p924192.png)

**Section**

**Description**

1

-   **High-risk Virus**: the number of detected malicious files that contain high-risk viruses and are not quarantined. The files are detected by using the malicious file detection service of Alibaba Cloud.
    
    You can click the number of malicious files to display information about all malicious files in Section 5.
    
-   **Quarantined File**: the malicious files that are quarantined based on the specified handling method.
    
    You can click the number of quarantined files to view information about all quarantined files. You can click **Add to Whitelist** to restore the quarantined files.
    

2

-   **Scan Task**: allows you to create an immediate scan task and view all created tasks. You can also view the details of an ongoing scan task.
    
-   **Antivirus Engine Version**: the latest antivirus engine version of the malicious file detection service of Alibaba Cloud and the update time.
    

3

-   **Type Distribution**: the numbers of viruses of different types in the scan results.
    
-   **Level Distribution**: the numbers of viruses of different security levels in the scan results.
    

4

This section displays the top 5 terminals and the top 5 users with the highest number of viruses detected.

To view the number of viruses detected for each terminal and user, you can click **Details**.

5

-   **Pending**: the malicious files that contain high-risk viruses and are not quarantined.
    
    You can add the files to a whitelist or quarantine the files based on your business requirements.
    
-   **Handled**: the malicious files that are quarantined, added to a whitelist, or failed to be handled.
    
    -   If you want to restore a quarantined file, you can click **Add to Whitelist**.
        
    -   If you want SASE to scan a file in a whitelist, you can click **Remove from Whitelist**.
        
    -   If you want to restore a file that failed to be handled, you can click **Ignore** after you confirm that the file is risk-free.
