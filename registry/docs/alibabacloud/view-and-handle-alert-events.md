Security Center generates security alerts when it detects asset intrusions, malware infections, or abnormal behaviors. Prompt and proper handling of these alerts is crucial for ensuring business stability and data security. This topic describes how to follow the emergency response process to quickly evaluate risks, eliminate threats, and harden your system.

## **Evaluate security alerts**

Before you handle a security event, assess the impact of the alert, analyze the attack, and identify false positives. This process helps prevent disruptions to your system. You can go to the alert details page to obtain information that helps you assess the situation.

### **Go to the alert details page**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**. In the upper-left corner of the console, select the region where your asset is deployed: **Chinese Mainland** or **Outside Chinese Mainland**.
    
    **Note**
    
    If you have activated the Agentic SOC service, the path in the navigation pane on the left changes to **Agentic SOC** > **Alert**.
    
3.  On the **CWPP** tab, find the target alert and click **Actions** in the **Details** column.
    
    **Important**
    
    -   You can enable alert notifications in **System Settings** > **Notification Settings**. This lets you quickly find a target alert based on the information in the notification, such as the alert name.
        
    -   The Ultimate Edition supports filtering alerts by asset type. Above the alert list, you can click All, Host, Container, K8s, or Cloud Product to view alerts for the corresponding asset type.
        
    

### **Understand alert details**

You can use the alert source tracing, **Description**, and other information to understand the basis for an alert, its occurrence count, and its possible causes. This information helps you determine whether the alert is a false positive and decide on an appropriate solution.

## **Alert description**

The alert description explains the detected abnormality, potential risks, and associated threats. It also provides handling suggestions.

**Example assessment:**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924447571/p988799.png) As shown in the preceding figure:

Potential risk: The relevant configuration file was modified to create a logon back door.

Recommended action: Confirm with the relevant business department whether this process is part of normal business operations. If not, prioritize terminating the process and then investigate the system for other threats.

#### Alert source tracing

Security Center provides an automated attack source tracing feature. It integrates logs from multiple cloud products and uses data analytics to generate a visual intrusion event chain diagram. It also supports raw data previews. This feature helps you quickly identify the cause of an intrusion and develop an emergency response policy.

**Note**

-   This feature is available only for servers that are protected by the **Enterprise**, **Ultimate**, **Host Protection**, or **Hosts and Container Protection**.
    
-   An automated attack source tracing chain is generated 10 minutes after a threat is detected. You can view this information 10 minutes after the alert is generated.
    
-   The automated attack source tracing information for a security alert is automatically purged three months after the alert is triggered. We recommend that you view this information promptly.
    

**Use case**:

Attack source tracing is suitable for emergency response and source tracing in cloud environments for use cases such as web intrusions, worm events, ransomware, and active connections to malicious download sources.

**Example assessment**:

-   In the source tracing area of the details page, **check whether the attack chain is complete and valid**. The more complete the attack chain, the more urgently you need to handle the alert.
    
    **How can you tell if a link is valid?**
    
    -   Invalid chain: The source tracing result shows only single-point scanning or probing behavior, such as an isolated port scan or an unsuccessful vulnerability exploit attempt. It does not trigger subsequent actions, such as establishing a connection, executing a command, or downloading a malicious file.
        
    -   Valid chain: The source tracing graph shows a clear intrusion path, for example: `exploit > Web shell write > internal network probe > malicious file download > lateral movement`.
        
    
-   Click a node in the source tracing graph. In the node details area on the left, **check whether the attack target was reached**. For example:
    
    -   Check endpoint behavior: The attacker executed commands on the server, such as `whoami` and `net user`.
        
    -   Check for data breaches: There are abnormal outbound connections, such as connections to a miner pool or C2 server, or sensitive files were read or uploaded.
        
    -   Check for persistence traces: A back door account, scheduled task, or malicious service was created.
        
-   Click a node in the source tracing graph. In the node details area on the left, check whether the **raw logs are verifiable**, such as WAF block records, host process creation logs, or network connection logs.
    
    -   Verifiable: Underlying logs exist to support the evidence, such as WAF block records or host process logs for executing malicious commands. This proves that the attack actually occurred. If the attack was blocked, you can mark the alert as "Handled" and you do not need to take further action. If the attack was not blocked, handle the alert as soon as possible.
        
    -   Not verifiable: No supporting logs exist. This could be because the logs were deleted or the detection was bypassed. Be highly vigilant in this use case because it may be a sign of an advanced attack.
        

#### **Sandbox detection**

Security Center provides a sandbox detection feature. By running files in a secure and isolated environment, Security Center analyzes static and dynamic file behavioral data to safely analyze suspicious applications and detect malicious behavior. If security alerts are generated, you can handle malicious programs based on the sandbox detection results.

**Note**

Not all malware alerts support the sandbox detection feature. The page indicates which alerts are supported.

1.  In the security alert list, find the alert that you want to manage and click **Actions** in the **Details** column.
    
2.  In the **Sandbox** section, view the sandbox detection results.
    

**Example assessment**:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924447571/p1000263.png)

-   **Behavior Tag**: This section tags the features of malicious files and highlights the high-risk operations they perform. Red indicates the intrusion behaviors that require the most attention.
    
-   **ATT&CK Matrix**: This section shows the runtime process flow of the sandbox detection and highlights the high-risk operations performed by the malicious file. Red indicates the intrusion behaviors that require the most attention.
    

## **Quick guide for handling alerts**

**Important**

-   If you verify the alert information and determine that it is normal behavior or does not need to be handled, you can choose to ignore or [add the alert to a whitelist](#2f81663c90jl2).
    
-   If you encounter a persistent virus threat or the same alert repeatedly, handle it in the console and then perform security hardening by following the instructions in [Security hardening and attack prevention](#07567a07e548i).
    

**Alert type**

**Alert name**

**Recommended action**

Malware

Mining program

[Virus scan](#dcfac5c686xyy)

DDoS Trojan

Trojan program

Malicious program

Exploit program

Suspicious PowerShell command

Back door program

Reverse shell back door

Infectious virus

[Deep scan](#673630e53ftn4)

Unusual logon

Malicious IP logon

[Block](#e03e402958axi)

Successful brute-force attack on ECS

Logon from an uncommon account to an ECS instance

Logon from an uncommon location to an ECS instance

Back door account logon

Web shell

Web shell file detected

[Quarantine](#7af55a561bbd2)

Log or image file that contains web shell code

Trojan or hotlinking back door file detected

Arbitrary file write back door detected

Abnormal process behavior

Abnormal command execution in Java application

[End process](#99c6d09a0b34o)

Suspicious process path

Network proxy forwarding behavior

Suspicious PowerShell command

Persistence back door creation behavior

SSH back door

Suspicious encoded command

Suspicious command execution

Malicious script

Malicious script code execution

[End process](#52f103336dpou)

Precise Defense

Bypassing security software

[Deep scan](#673630e53ftn4)

Cloud product threat detection

RAM user logon from an uncommon location

1.  Change the account password or [restrict user access by IP address through RAM](/help/en/ram/use-cases/use-ram-to-limit-the-ip-addresses-that-are-allowed-to-access-alibaba-cloud-resources).
    
2.  Change the alert status to [Manually Handled](#a9c31e4794jy1).
    

Hacking tool using an AccessKey

1.  [Delete the AccessKey of a RAM user](/help/en/ram/user-guide/delete-an-accesskey-pair-of-a-ram-user) or [disable the AccessKey of a RAM user](/help/en/ram/user-guide/disable-an-accesskey-pair-of-a-ram-user).
    
2.  Change the alert status to [Manually Handled](#a9c31e4794jy1).
    

Abnormal role permission traversal behavior

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/) as a RAM administrator and modify the **RAM user permissions.**
    
2.  Change the alert status to [Manually Handled](#a9c31e4794jy1).
    

RAM user logs on to the console and performs sensitive operations

Other

Security Center agent is abnormally offline

[Troubleshooting](#8c411d2027en8)

## Manually handle alerts

**Important**

If you handle an event that is aggregated from Security Center alerts using the [security event handling](/help/en/security-center/user-guide/handling-security-events) feature, Security Center automatically updates the status of the related alerts on the **CWPP** tab. You do not need to manually update the alert status.

### **Procedure**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**. In the upper-left corner of the console, select the region where your asset is deployed: **Chinese Mainland** or **Outside Chinese Mainland**.
    
    **Note**
    
    If you have activated the Agentic SOC service, the path in the navigation pane on the left changes to **Agentic SOC** > **Alert**.
    
3.  On the **Alert** page, on the **CWPP** tab, find the target alert. In the Actions column, click **Handle**, select a handling method for the alert, and then click **Handle Now**.
    
    **Note**
    
    -   The handling methods vary based on the alert type. The methods displayed in the console are the ones available for use.
        
    -   You can add remarks as needed. The remarks can include the reason for handling the alert and the name of the operator. This helps you manage handled alerts.
        
    

### **Handling methods**

The handling methods are categorized as follows:

-   **Threat removal**: Directly removes and blocks known security threats, repairs infections, prevents new attacks, and blocks threat sources to protect assets.
    
-   **Alert suppression:** Used to handle false positives or known and acceptable risks. You can use methods such as whitelisting and ignoring to mark the current alert as invalid or not requiring action. You can also control whether subsequent alerts are generated.
    
-   **Troubleshooting**: Troubleshoots abnormalities in the Security Center agent for auxiliary diagnosis.
    

## **Threat removal**

### **Virus Detection and Removal**

-   **Common use cases**
    
    -   **Confirm malicious activity**: This method is used when Security Center detects a malicious process, such as a virus, trojan, or ransomware, and you need to immediately stop it from damaging the system.
        
    -   **Emergency response**: This method is used when you need to quickly contain the spread of a virus or the risk of a data breach to prevent the threat from spreading to other servers.
        
-   **Pre-check**
    
    A virus scan may cause service interruptions. To prevent disruptions to normal business operations, check the source file before you handle the alert. Common checks include the following:
    
    -   Verify file properties: Confirm whether the file is a virus by checking its file path, signature, and hash value. This helps prevent you from accidentally terminating system or business files.
        
    -   Assess business dependencies: Check whether the file is called by critical services, such as `nginx` and `mysql` related components.
        
-   **Description**
    
    -   **Immediately terminate the virus process and move the virus file to the quarantine area**. Quarantined files cannot be executed, accessed, or spread.
        
        **Warning**
        
        -   Ending a process may cause services that depend on it to become abnormal. For example, this can happen if the virus is disguised as a legitimate process.
            
        -   If the quarantined file is a business file into which malicious code is injected, such as a core application component, quarantining the file may cause a service interruption.
            
        
    -   A successfully quarantined file can be restored with one click within 30 days. The restored file reappears in the security alert list, and Security Center continues to monitor it. For more information about how to restore files, see [View and restore quarantined files](/help/en/security-center/user-guide/management-alarm-information#7bb6d5e026luw).
        
        **Note**
        
        Files that are not restored within 30 days are automatically purged and cannot be recovered.
        
-   **Follow-up actions**
    
    Review the quarantine area on a regular basis. Confirm the nature of the files within 30 days to avoid being unable to recover them after they are accidentally deleted. For more information about how to view files in the quarantine area, see [View and restore quarantined files](/help/en/security-center/user-guide/management-alarm-information#7bb6d5e026luw).
    

### **Deep Cleanup**

**Deep Cleanup** is a specialized scanning feature developed by the Security Center security expert team for persistent and stubborn viruses.

-   **Common use cases**
    
    A deep scan is a specialized solution for **stubborn and infectious viruses**. These viruses have the following characteristics:
    
    -   **Infecting host files:** The virus infects system files, application files, or personal documents by injecting malicious code into them.
        
    -   **Difficult to eradicate:** A normal virus scan may only delete the parent virus but fail to repair infected files, causing the problem to recur.
        
    
    **Note**
    
    If you are not dealing with this type of virus, use the regular "Virus scan" feature first.
    
-   **Pre-check**
    
    A **Deep Cleanup** may pose risks such as **accidental file deletion, service interruption, and data integrity issues**. To prevent disruptions to normal business operations, check the source file before you handle the alert. Common checks include the following:
    
    -   Verify file properties: Confirm whether the file is a virus by checking its file path, signature, and hash value. This helps prevent you from accidentally terminating system or business files.
        
    -   Assess business dependencies: Check whether the file is called by critical services, such as `nginx` and `mysql` related components.
        
-   **Description**
    
    -   It cleans up stubborn viruses by terminating malicious virus processes, quarantining malicious files, and clearing the persistence mechanisms of virus trojans.
        
    -   It also provides a snapshot creation feature. You can create snapshots to back up data so that if useful data is accidentally cleared during a deep scan, you can restore it from the snapshot.
        
        **Important**
        
        **Creating and retaining snapshots incurs fees**. The fees are charged by the snapshot product. The default billing method is pay-as-you-go. For more information about the fees, contact pre-sales support.
        
-   **Follow-up actions**
    
    Review the quarantine area on a regular basis. Confirm the nature of the files within 30 days to avoid being unable to recover them after they are accidentally deleted. For more information about how to view files in the quarantine area, see [View and restore quarantined files](/help/en/security-center/user-guide/management-alarm-information#7bb6d5e026luw).
    

### **Quarantine**

-   **Common use cases**
    
    This method is used when you confirm that a file is a malicious file, such as a back door program or virus, and you need to immediately stop it from running.
    
-   **Description**
    
    -   The system **moves the suspicious file to the quarantine area**. Quarantined files cannot be executed, accessed, or spread.
        
        **Warning**
        
        If the quarantined file is a business file into which malicious code is injected, such as a core application component, quarantining the file may cause a service interruption.
        
    -   A successfully quarantined file can be restored with one click within 30 days. The restored file reappears in the security alert list, and Security Center continues to monitor it. For more information about how to restore files, see [View and restore quarantined files](/help/en/security-center/user-guide/management-alarm-information#7bb6d5e026luw).
        
        **Note**
        
        Files that are not restored within 30 days are automatically purged and cannot be recovered.
        
-   **Follow-up actions**
    
    Review the quarantine area on a regular basis. Confirm the nature of the files within 30 days to avoid being unable to recover them after they are accidentally deleted. For more information about how to view files in the quarantine area, see [View and restore quarantined files](/help/en/security-center/user-guide/management-alarm-information#7bb6d5e026luw).
    

### **End Process**

-   **Common use cases**
    
    This method is primarily used to handle alerts related to **abnormal process behavior**, such as MySQL executing abnormal commands or a web vulnerability exploit leading to abnormal command execution.
    
-   **Description**
    
    Security Center attempts to end the process. If it fails, you can try to manually terminate the process with the `kill [process ID]` command, and then select the "**Manually Handled**" option.
    
    **Note**
    
    You can find the process ID on the alert details page under More Information.
    

### **Block**

-   **Common use cases**
    
    This method is primarily used for IP-based attack use cases, such as unusual logons and brute-force attacks.
    
-   **Description**
    
    -   A security group defense rule is generated to block access from the malicious IP address.
        
        -   You can click **Details** to view the basic information of the generated defense rule, such as **Assets**, **Rule Direction**, **Port Range**, and **Rule Direction**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924447571/p996306.png)
            
        -   Security Center automatically selects a blocking mechanism based on the client installation status. The supported blocking mechanisms are as follows:
            
            -   **Security Center**: This interception mechanism uses the AliNet plug-in. If you use the Advanced, Enterprise or Ultimate edition of Security Center and enable the **Malicious Network Behavior Prevention** feature, Security center automatically uses the AliNet plug-in to block logons. For more information about how to enable the **Malicious Network Behavior Prevention** feature, see [Proactive Defense](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#section-8ad-fnl-sb4).
                
            -   **ECS Security Group**: When you enable a system rule, a security group rule is automatically created. If the system rule expires or is disabled, the security group rule is automatically deleted.
                
    -   The **Rule Validity Period** is the effective time of the blocking rule. The default validity period is 6 hours and cannot be changed.
        
    -   The generated blocking rule can be viewed in **Protection Configuration** > **Host Protection** > **Host-specific Rule Management** on the **Defense Against Brute-force Attacks** tab under System Rules.
        
        **Note**
        
        To terminate the blocking policy early, you can turn off the enable switch in the system rules.
        

## **Alert suppression**

Security Center provides the **Add to Whitelist** and **Ignore** methods to suppress alerts**.** For specific alerts, it also supports **Do Not Intercept Rule**, **Defense Without Notification**, and **Manually Handled**.

### **Differences**

**Difference**

**Add to Whitelist**

**Ignore**

Use case

Permanent exception issues

Suitable for temporary, occasional false positives or known issues.

Scope of impact

-   When a file with the same MD5 as the current alert appears in the same file path on the same host asset.
    
-   If other whitelist rules are set, subsequent alerts that match the whitelist rules will also not be notified.
    

Only handles the current alert and has no effect on subsequent alerts.

### **Add to Whitelist**

**Warning**

After you add an alert to the whitelist, you will no longer be notified of the same alert or alerts that match the whitelist rule. Use this option with caution.

-   **Common use cases**
    
    The current alert is a false positive, or you need to add a permanent exception rule. For example, if a suspicious process with abnormal outbound TCP packets is actually a normal business interaction, or if suspicious scanning behavior is actually normal network detection, you need to set a whitelist rule to avoid such false positives.
    
-   **Result description**
    
    -   **For the current alert**
        
        -   This alert is marked as "Handled", and the alert status changes to **Manually Add to Whitelist**.
            
        -   When the same alert occurs again, no new alert data is generated, but the latest occurrence time of this alert is updated.
            
            **What is the same alert?**
            
            The same alert refers to a security threat with highly consistent characteristics. For example:
            
            -   Virus-type alerts: Same asset + same virus file path + same virus file MD5.
                
            -   Unusual logon: Same asset + same logon IP address.
                
            
    -   **For subsequent alerts**
        
        If a specific whitelist rule is set, when an alert that matches the custom whitelist rule occurs again, the alert is automatically moved to the handled list with the status **Automatically Add to Whitelist**, and no alert notification is sent.
        
-   **Set a specific whitelist rule (optional)**
    
    In the alert handling dialog box, click the **Add to Whitelist** tab. Click **Create Rule** to add a new rule. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924447571/p988573.png) to delete a rule.
    
    **Important**
    
    -   If you set multiple rules, the relationship between them is "OR". The rule takes effect if any one of the conditions is met.
        
    -   Ensure **precision** when you configure rules to avoid an overly broad scope. For example, setting "Path contains: /data/" might mistakenly whitelist other sensitive subdirectories and increase security risks.
        
    
    Each rule has four configuration boxes from left to right, as described below:
    
    1.  **Alert information field**: On the details page, under **More Information**, you can see which alert information fields are supported for the current alert.
        
    2.  **Condition type**: Supports operations such as regular expression matching, greater than, equal to, less than, and contains. Some rules are described as follows:
        
        -   **Regular expression**: You can use regular expressions to accurately match specific patterns. For example, to whitelist all content in the "/data/app/logs/" folder, you can set the rule "Path matches regex: ^/data/app/logs/.\*". This matches all files or processes in that folder and its subdirectories.
            
        -   **Contains keyword**: Set a rule "Path contains: D:\\programs\\test\\". All events whose path contains this folder are whitelisted.
            
    3.  **Condition value**: Supports constants and regular expressions.
        
    4.  **Applicable assets**:
        
        -   All assets: Takes effect for new assets and all existing assets.
            
        -   Only for the current asset: Takes effect only for the asset that is involved in the current alert.
            
-   **Cancel whitelisting**
    
    -   **Cancel an automatic whitelist rule**
        
        **Important**
        
        -   This action affects only subsequently generated alerts. Alerts that match the whitelist rule are no longer automatically whitelisted.
            
        -   This has no effect on already handled alerts. The alert status remains unchanged.
            
        
        1.  Log on to the . In the navigation pane on the left, choose **Detection and Response** > **Alert**.
            
            **Note**
            
            If you have purchased the Agentic SOC service, in the navigation pane on the left, choose **Agentic SOC** > **Alert**.
            
        2.  In the upper-right corner of the **CWPP** tab, click **Cloud Workload Alert Management** and select **Alert Settings**.
            
        3.  On the **Alert Settings** page, in the **Alert Handling Rule** section, set Handling Method to **Automatically Add to Whitelist**.
            
        4.  Find the target rule and click Delete in the Actions column to cancel the automatic whitelist rule.
            
    -   **Cancel whitelisting for an alert**
        
        **Important**
        
        After you cancel the whitelisting, the alert reappears in the **Unhandled** alert list. You must re-evaluate and handle the alert.
        
        1.  Log on to the . In the navigation pane on the left, choose **Detection and Response** > **Alert**.
            
            **Note**
            
            If you have purchased the Agentic SOC service, in the navigation pane on the left, choose **Agentic SOC** > **Alert**.
            
        2.  On the **CWPP** tab, set the **Handled or Not** filter to **Handled**.
            
        3.  Find the alert data that you want to remove from the whitelist and click the **Remove from Whitelist** button in the Actions column to cancel the whitelisting for the current alert.
            
            **Note**
            
            You can also select multiple alert data items and click the **Remove from Whitelist** button at the bottom of the list to perform a batch cancellation.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924447571/p986432.png)
        

### **Ignore**

**Important**

-   "Ignore" is only a status management operation. It does not resolve the underlying security problem that triggered the alert.
    
-   Use this option only after you fully confirm that the alert is a false positive or a known and accepted risk to avoid masking real attacks.
    
-   We recommend that you periodically review the list of "Ignored" alerts, for example, on a weekly or monthly basis.
    

-   **Common use cases**
    
    -   **Confirmed as a false positive or low priority.**
        
    -   **Temporary/Known issue**: The issue to which the alert points exists but is a known and accepted risk, or it is a temporary, non-malicious state, such as an authorized internal penetration test or abnormal behavior during a specific maintenance window. You do not intend or are unable to fix the root cause immediately but need to clear the current alert list.
        
    -   **Test or debug environment**: In a non-production environment, such as a development or testing environment, expected and non-security-affecting alerts frequently appear. These alerts interfere with normal monitoring and need to be temporarily silenced.
        
-   **Result description**
    
    -   **For the current alert**: This alert is marked as "Handled", and the alert status changes to **Ignored**.
        
    -   **For subsequent alerts**: This operation has no effect. Security Center will generate a new alert if the same type of event occurs again.
        
-   **Cancel ignore**
    
    1.  Log on to the . In the navigation pane on the left, choose **Detection and Response** > **Alert**.
        
        **Note**
        
        If you have purchased the Agentic SOC service, in the navigation pane on the left, choose **Agentic SOC** > **Alert**.
        
    2.  On the **CWPP** tab, set the **Handled or Not** filter to **Handled**.
        
    3.  Find the alert data that you want to stop ignoring and click the **Cancel Ignore** button in the Actions column to cancel the ignore status for the current alert.
        
        **Note**
        
        You can also select multiple alert data items and click the **Cancel Ignore** button at the bottom of the list to perform a batch cancellation.
        

### **Do Not Intercept Rule**

-   **Use case**
    
    This method currently supports only handling alerts that are generated by the **Adaptive WebShell Communication Block** rule. You can find the rule in **Protection Configuration** > **Host Protection** > **Host-specific Rule Management** under **Malicious Behavior Defense** > **System Defense Rule**.
    
-   **Description**
    
    The system does not block requests to the corresponding URI and no longer generates alerts.
    

### **Defense Without Notification**

**Warning**

You will not be separately notified of subsequent identical alerts. Use this option with caution.

-   **Use case**
    
    This method is used for alerts of the Precise Defense type. These alerts are generated by rules in **Protection Configuration** > **Host Protection** > **Host-specific Rule Management** under **Malicious Behavior Defense**.
    
-   **Description**
    
    -   **Current alert:** This alert is marked as "Handled".
        
    -   **Subsequent alerts**: When the same defense rule is hit again, the generated alert event is automatically moved to the handled list, and no alert notification is sent.
        
-   **Cancel the Defend without notification rule**
    
    1.  Log on to the . In the navigation pane on the left, choose **Detection and Response** > **Alert**.
        
        **Note**
        
        If you have purchased the Agentic SOC service, in the navigation pane on the left, choose **Agentic SOC** > **Alert**.
        
    2.  In the upper-right corner of the **CWPP** tab, click **Cloud Workload Alert Management** and select **Alert Settings**.
        
    3.  On the **Alert Settings** page, in the **Alert Handling Rule** section, set Handling Method to **Defense Without Notification**.
        
    4.  Find the target rule and click Delete in the Actions column to cancel the automatic whitelist rule.
        

### **Manually Handled**

If you have manually handled the alert, select **Manually Handled**. The status of the current alert is updated to **Manually Handled**.

### **Troubleshooting**

**Use case**

This method only supports handling the **Security Center agent is abnormally offline** alert.

**Description**

The client diagnostic program of Security Center collects data related to the client on the local machine, such as network, process, and log data, and reports the data to Security Center for analysis.

**Important**

This check consumes a certain amount of CPU and memory resources. Use this feature only after careful evaluation.

-   Select a diagnostic mode:
    
    -   **Standard Mode**
        
        This mode collects client-related log data and reports the data to Security Center for analysis.
        
    -   **Enhancement Mode**
        
        This mode collects client-related data, such as network, process, and log data, and reports the data to Security Center for analysis.
        
-   After you click **Handle Now**, a diagnostic task is generated. You can view the diagnostic task result and progress in **Assets** > **Host** in the upper-right corner under **Agent Task Management**. For more information, see [Client troubleshooting](/help/en/security-center/user-guide/use-the-agent-troubleshooting-feature#info-x4t-s6z-ss9).
    
    **Note**
    
    -   If a solution is provided in the **Result** column, follow the recommended solution.
        
    -   If no solution is provided in the **Result** column, click **Download Diagnostic Logs** in the **Actions** column. Provide the exported diagnostic log and your Alibaba Cloud account ID to technical support for further analysis.
        
    

## **Tutorials on how to handle common virus alerts**

-   [Best practices for handling mining programs](/help/en/security-center/use-cases/best-practices-for-handling-mining-programs)
    
-   [Scan and remove Trojans from Linux systems](/help/en/security-center/use-cases/detect-and-remove-trojans-in-a-linux-operating-system)
    
-   [Best practices for preventing trojan attacks](/help/en/security-center/use-cases/best-practices-for-defense-against-trojan-attacks)
    

## **Security hardening and attack prevention**

-   **Upgrade Security Center**: The Enterprise and Ultimate editions support automatic virus isolation, which provides precise defense and more security check items.
    
-   **Tighten access control**: Open only necessary service ports, such as 80 and 443. Configure strict IP address whitelists for management ports, such as 22 and 3389, and database ports, such as 3306.
    
    **Note**
    
    For Alibaba Cloud ECS servers, see [Manage security groups](/help/en/ecs/user-guide/manage-security-groups).
    
-   **Set complex server passwords**: Create complex passwords that contain uppercase letters, lowercase letters, digits, and special characters for your servers and applications.
    
-   **Upgrade software**: Promptly update your applications to the latest official versions. Avoid using old versions that are no longer maintained or that have known security vulnerabilities.
    
-   **Perform regular backups**: Create an automatic snapshot policy for important data and system disks.
    
    **Note**
    
    If you use an Alibaba Cloud ECS server, see [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1).
    
-   **Fix vulnerabilities promptly**: Regularly use the [Vulnerability Fix](/help/en/security-center/user-guide/view-and-handle-vulnerabilities) feature in Security Center to fix important system and application vulnerabilities promptly.
    
-   **Reset the server system (use with caution)**.
    
    If a virus deeply infects the system and compromises underlying system components, back up important data and then reset the server system. Perform the following steps:
    
    1.  Create a snapshot to back up important data on the server. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
        
    2.  Reinitialize the operating system of the server. For more information, see [Reinitialize a system disk](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb).
        
    3.  Create a disk from the snapshot. For more information, see [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).
        
    4.  Attach the disk to the server on which you reinstalled the operating system. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        

## **FAQ**

### **Alert handling issues**

-   **What should I do if an alert recurs after being handled (repeatedly infected with the same virus)?**
    
    -   The issue may recur for the following reasons:
        
        -   **Weak password:** The SSH, RDP, or database password is too simple.
            
        -   **Unpatched vulnerabilities:** Applications such as Redis, XXL-JOB, and WebLogic have high-risk vulnerabilities.
            
        -   **Latent back door:** The initial cleanup was not thorough and left a hidden back door.
            
        -   **Data contamination:** A backup or snapshot that contains the virus was restored.
            
    -   Solutions:
        
        -   Perform security hardening by following the instructions in [Security hardening and attack prevention](#07567a07e548i).
            
        -   After you handle the virus, we recommend that you **back up data** and then **restart the server and applications**.
            
            **Warning**
            
            -   Restarting the server causes a **brief service interruption**. During this time, websites, applications, and other services that run on the server are inaccessible. This may affect user experience or business process continuity. Perform this operation during off-peak hours.
                
            -   Some applications that are deployed on the server do not have an automatic startup mechanism or depend on specific environment variables. They usually need to be **manually restarted**. Otherwise, the application service becomes unavailable. For example, this applies to specific versions of message queues. Evaluate the restart plan in advance.
                
            
        -   If the issue persists after the restart, **back up the data** and then **reset the server system**.
            
            **How do I reset the server system?**
            
            1.  Create a snapshot to back up important data on the server. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
                
            2.  Reinitialize the operating system of the server. For more information, see [Reinitialize a system disk](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb).
                
            3.  Create a disk from the snapshot. For more information, see [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).
                
            4.  Attach the disk to the server on which you reinstalled the operating system. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
                
            
-   **Why can't I delete a virus file (trojan, mining)?**
    
    The file and its parent directory have been assigned hidden permissions. You must use the `chattr -i` command to remove the 'i' permission from the file and its parent directory before you can delete the file.
    
-   **My server has a DDoS trojan alert. I have manually deleted the file, but the alert persists. Why?**
    
    The file was not completely deleted. You can use the following solution:
    
    1.  If you are using the Free Edition of Security Center, you can activate a [7-day free trial of the Enterprise or Ultimate Edition](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center). You can also refer to [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center) and upgrade to the Anti-virus or Enterprise Edition.
        
    2.  After the activation, go to the security alert handling interface, find the DDoS Trojan alert, click the Handle button, and select Virus scan. The system automatically ends the trojan process and quarantines the file. For more information, see [Virus scan](#dcfac5c686xyy).
        

### **Console feature issues**

-   **What should I do if an alert shows that a file does not exist?**
    
    This may occur because the virus was removed by another method or it cleared its own traces. You can click Ignore or Manually Handled in the alert list to clear this alert.
    
-   **I received a security alert, but there is no related data in the console. Why?**
    
    1.  Check your current Security Center edition. The Free Edition has limited features. We recommend that you refer to [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center) and upgrade to the Anti-virus or Enterprise Edition.
        
    2.  Use the [virus scan](/help/en/security-center/user-guide/use-the-virus-detection-and-removal-feature) feature to scan and handle the alert.
        
-   **How do I handle multiple alerts (batch handle alerts)?**
    
    Currently, Security Center supports batch handling of security alerts only for the following actions: whitelisting, ignoring, removing from whitelist, and canceling ignore.
    
    1.  In the navigation pane on the left, choose **Detection and Response** > **Alert**. In the upper-left corner of the console, select the region where your asset is deployed: **Chinese Mainland** or **Outside Chinese Mainland**. Go to the security alert list and select the alerts that you want to handle in a batch.
        
    2.  Click the **Ignore Once**, **Add to Whitelist**, **Remove from Whitelist**, or **Cancel Ignore** button.
        
-   **Why is the security alert handle button grayed out?**
    
    -   Check your current Security Center edition. The Free Edition does not support handling security alerts. You can [activate a 7-day free trial](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center#section-1v3-x7c-v5s%EF%BC%8C) or upgrade to the Anti-virus or Enterprise Edition. For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).
        
    -   The types of security alerts that are supported by each edition vary. For more information, see [Security alert types](/help/en/security-center/user-guide/overview-6#78714452af57p).
