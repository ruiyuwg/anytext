The core file monitoring feature monitors access to core files on servers in real time. The feature can monitor file operations such as access, modify, delete, and rename operations in real time and generate alerts on suspicious operations. You can use the feature to check whether your core files are stolen or tampered with. This topic describes how to use the core file monitoring feature to monitor access to core files on servers.

## **Limits**

-   Only the Enterprise and Ultimate editions of Security Center support this feature. For more information about how to purchase and upgrade Security Center, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb) and [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).
    
-   The feature supports only servers on which the Security Center agent is online. The ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8552539961/p724609.png) icon indicates that the agent is online. The operating system and kernel version of the server must be supported by the AliWebGuard file. For more information, see [Supported operating systems and kernel versions of the AliWebGuard file](/help/en/security-center/user-guide/overview-of-the-security-center-agent#section-kz1-wxr-jkq).
    

## **Step 1: Create a rule**

### **Rule validation logic**

Before the core file monitoring feature works, you must create rules to specify the monitoring scope of server files. We recommend that you understand the rule validation logic before you create a rule.

-   During the monitoring of access to files on a server, Security Center generates an alert or allows a request only if the request matches **all** the following items in the rule that you specify:
    
    -   Process path
        
    -   File path
        
    -   File operation
        
-   Security Center preferentially matches requests against the rules in which the Handling Method parameter is set to Release. This type of rule is referred to as an allow rule. If a request does not match an allow rule, Security Center matches the request against the rules in which the Handling Method parameter is set to Alert. This type of rule is referred to as an alert rule.
    

### **Configuration suggestions and examples**

We recommend that you configure monitoring rules for core system files and important configuration files. For more information on rule configuration standards and examples, see [Best Practices for configuring the core file monitoring feature](/help/en/security-center/use-cases/core-file-monitoring-configuration-best-practices).

Before you create a rule, you must determine the files to monitor and the scope of processes that are allowed to access the files.

For core business files, you must configure an alert rule for all processes and multiple allow rules for allowed processes. This helps ensure that all access operations on the files are monitored and unnecessary alerts are not generated.

For example, the path of the core files that you want to monitor is /etc/sysctl.conf, and the allowed process is systemd. To monitor the file path /etc/sysctl.conf, you must configure two rules.

-   Rule 1: Set the Handling Method parameter to Alert, set the Process Path parameter to an asterisk (`*`), set the File Path parameter to `/etc/sysctl.conf`, and select all options for the File operation parameter. The asterisk (\*) specifies all processes.
    
-   Rule 2: Set the Handling Method parameter to Release, set the Process Path parameter to `/usr/lib/systemd/systemd`, set the File Path parameter to `/etc/sysctl.conf`, and select all options for the File operation parameter.
    

If you want to monitor core files on multiple servers, you can specify the file paths on all servers in an alert rule and set the Process Path parameter to an asterisk (\*). Then, configure multiple allow rules for different process paths that you want to allow on different servers.

**Important**

-   If you do not configure an alert rule for all processes, you cannot monitor the access operations performed by processes that are beyond the scope of the specified process path. All out-of-scope processes can bypass the monitoring of Security Center.
    
-   When you configure an allow rule, we recommend that you do not use a wildcard character to specify a process path. If you use a wildcard character to specify a process path, attackers can exploit the allow rule to access your server files after bypassing the monitoring of Security Center.
    

### **Procedure**

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. The following regions are supported: **China** and **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Core File Monitoring**.
    
3.  If you use Security Center Advanced or a lower edition, click **Buy Now** to purchase Security Center Enterprise or Ultimate.
    
4.  On the **Core File Monitoring** page, click the **Monitoring Rule** tab and click **Create Whitelist Rule**.
    
5.  In the **Create Whitelist Rule** panel, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the rule.
    
    **Handling Method**
    
    Select an action for Security Center to perform when the rule is hit. Valid values:
    
    -   **Alert**: Security Center generates an alert and records an event.
        
    -   **Allow**: Security Center allows the request. Security Center does not generate an alert or record an event.
        
    
    **Alert Level**
    
    This parameter is required only if you set the Handling Method parameter to **Alert**.
    
    Select the severity for the alert that is generated when the rule is hit.
    
    **OS Type**
    
    Select the operating system type of the server to be monitored.
    
    **Status**
    
    Specify whether to enable the rule after the rule is created. You can enable a maximum of 100 rules.
    
    **Process Path**
    
    Enter the path of the processes to monitor.
    
    -   **Configuration instructions**
        
        -   To monitor a single process, specify the exact process path. For example, if you configure the path as `/usr/bin/bash`, it will monitor the `/usr/bin/bash` process.
            
        -   To monitor all processes in a specific directory, use a wildcard. For example, if you configure the path as `/etc/*`, it will monitor all processes under the `/etc` directory.
            
            **Note**
            
            If you configure the process path as `/etc/`, it will only monitor the process path `/etc/` and not all processes under this directory.
            
    -   **Configuration limits**
        
        -   The length of a single process path must be between 1 and 128 English characters. Multiple process paths should be entered on separate lines, with support for up to 20 process paths.
            
    
    **File Path**
    
    Enter the path of the files to monitor.
    
    -   **Configuration instructions**
        
        -   To monitor a single file, specify the exact file path. For example, configuring the path as `/etc/passwd` will monitor the `/etc/passwd` file.
            
        -   To monitor all files in a specific directory, use a wildcard. For instance, configuring the path as `/etc/*` will monitor all files under the `/etc` directory.
            
            **Note**
            
            Configuring the file path as `/etc/` will monitor only the specific file `/etc/`, not all files under this directory.
            
    -   **Configuration limits**
        
        -   The length of a single file path must be between 1 and 128 English characters. Multiple file paths should be entered on separate lines, with support for up to 20 file paths.
            
    
    **File Operation**
    
    Select the file operations that you want to monitor.
    
    **Note**
    
    **Change Permissions** option is not supported by Windows system.
    
    **Rule Scope**
    
    Select the servers to which you want to apply the rule.
    

If you want to modify, delete, enable, or disable the rule after you create the rule, we recommend that you find the entry point in the Status or Actions column of the rule. The first time you enable a rule for a server, it requires up to 5 minutes for the rule to take effect. If you modify a rule, it requires up to 1 minute for the rule to take effect. After the rule takes effect, existing alerts and recorded events are not affected.

## **Step 2: View and handle alerts**

1.  On the **Core File Monitoring** page, click the **Alert Event** tab. Then, you can view the alerts that are generated by Security Center on file access.
    
2.  Find the alert that you want to view and click **Details** in the Actions column to view the details of file access.
    
    **Note**
    
    -   If a Python script is used to access a file, Security Center cannot obtain detailed CLI information.
        
    -   If a Shell built-in command is used to access a file, Security Center cannot obtain detailed CLI information. For example, if the command is `echo "new content" >> /etc/nginx/nginx.conf`, `["-bash"]` is displayed as the collected CLI information on the alert details page. This is because the command is a Shell built-in command, which appends content to the nginx.conf file.
        
    -   Security Center collects CLI information after Shell parsing and displays the collected CLI information in JSON arrays on the alert details page. The command that is displayed may be different from the original user-specified command.
        
        -   Example 1: A user-specified command is `mkdir "1 2"`, which is equivalent to the `mkdir 1\ 2` command. Both the commands create a directory named 1 2. After Shell parsing, the user-specified command becomes `mkdir` and `1 2`, and the display result on the alert details page is `["mkdir", "1 2"]`.
            
        -   Example 2: A user-specified command is `rm -rf *`. After Shell parsing, `*` is replaced by all files and subdirectories in the specified directory. In this example, Security Center collects and displays the following CLI information: `rm`, `-rf`, and the list of all files and subdirectories in the current directory.
            
    
3.  Check whether an abnormal event is recorded based on the details of file access.
    
    The follow-up solution varies based on your check results.
    
    -   If an abnormal event is recorded, we recommend that you manually block the related processes and quarantine the related files after you confirm that your business is affected.
        
    -   If the event records normal file access, you can add the alert to the whitelist to handle the alert.
        
    -   If the event is considered not affecting your files and you do not need to add the alert to the whitelist, you can ignore the alert.
        
4.  After you examine and handle the alert, find the alert and click **Handle** in the Actions column. Then, select a handling method and click **OK**.
    
    -   Whitelist: After you add the alert to the whitelist, Security Center automatically generates a whitelist rule that allows the behavior detected by the alert. If you select this option, you must configure the Whitelist Rule Name, Process Path, File Path, File operation, and Rule Scope parameters. Then, click **OK**.
        
    -   Ignore: If you ignore the alert, the status of the alert changes to Ignored. If the same alert is detected later, Security Center generates a new alert.
        
    -   Handle manually: If you have handled the abnormal event, you can select this option.
        

**Note**

The core file monitoring feature only supports [Configure notification settings on the DingTalk Chatbot tab](/help/en/security-center/user-guide/use-the-notification-feature#section-img-ak8-bue). After the configuration, you can receive real-time alerts identified by the Security Center through a DingTalk group.

## **FAQ**

### **What are the differences between web tamper proofing and core file monitoring?**

Web tamper proofing is a different feature that Security Center provides to protect files. Web tamper proofing and core file monitoring differ in the following items.

**Item**

**Web tamper proofing**

**Core file monitoring**

Scenario

You need to protect assets such as websites that are vulnerable to attacks and sensitive to file tampering.

-   You need to monitor access operations on core files to prevent content theft.
    
-   You need to monitor the changes on important files to avoid file tampering. The changes include modify, delete, and rename operations.
    

Protection scope

The feature can protect most Linux and Windows servers.

The feature can protect most Linux and Windows servers.

Billing

The feature is a value-added service provided by Security Center. You must purchase the feature to use it.

The feature is available only in Security Center Enterprise and Ultimate.

Capability

The feature supports identification of abnormal file changes. The feature can also block the related processes or generate alerts.

The feature supports monitoring of abnormal access to files, including read, modify, and delete operations. The feature can also generate alerts.

### **If I enable both web tamper proofing and core file monitoring,** **which feature preferentially takes effect?**

If web tamper proofing and core file monitoring are both enabled for a server, web tamper proofing preferentially takes effect. If Security Center cannot match a request against the rules of web tamper proofing, Security Center matches the request against the rules of core file monitoring. The process whitelist rules of web tamper proofing take effect only when the web tamper proofing feature works. The allow rules of core file monitoring take effect only when the core file monitoring feature works.
