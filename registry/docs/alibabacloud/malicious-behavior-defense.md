Malicious behavior defense identifies, blocks, and responds to malicious activities on your hosts through two layers of protection:

-   **System defense rules**: Built-in rules that include **Network Threat Prevention** (automatically blocks basic network attacks) and **Process Protection** (generates **Precise Defense** alerts for process-level threats).
    
-   **Custom defense rules**: User-defined rules that allow or block specific behaviors for your business scenarios.
    

**Important**

Custom defense rules have a higher priority than system defense rules.

## Edition requirements

**Edition**

**Available system defense rules**

Pro

Process defense

Enterprise

All system defense rules

Ultimate

All system defense rules

## System defense rules

System defense rules fall into two categories:

**Category**

**Behavior**

**Where to view**

**Network Threat Prevention**

Automatically blocks and handles basic network attacks

**Detection and Response** > **Alert** > **Network Defense Alert**

**Process Protection**

Generates **Precise Defense** alerts for process-level threats

**Detection and Response** > **Alerts**

### Enable or disable system defense rules

If a system defense rule is not suitable for your business scenario and affects the security score of your assets, you can disable the rule.

**Important**

After you disable a system defense rule, Security Center no longer detects or reports the corresponding security risks. Alert events related to the rule are no longer displayed in the alert list on the **Alert** page. Proceed with caution.

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the navigation pane on the left, select **Mitigation Settings** > **Host Protection** > **Host-specific Rule Management**.
    
3.  On the **Malicious Behavior Defense** tab, click the **System Defense Rule** subtab.
    
4.  Select one or more rules.
    
5.  Click **Batch Enable** or **Batch Disable** below the rule list.
    

### Manage hosts for a system defense rule

You can add or remove assets from a specific system defense rule to control which hosts the rule protects.

**Important**

After you remove an asset from a rule, the asset is no longer protected by the system defense rule. Proceed with caution.

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the navigation pane on the left, select **Mitigation Settings** > **Host Protection** > **Host-specific Rule Management**.
    
3.  On the **Malicious Behavior Defense** tab, on the **System Defense Rule** subtab, find the system defense rule that you want to manage and click **Manage Host** in the **Actions** column.
    
4.  In the **Host Management** panel, add or delete the assets that are protected by the rule, and then click **OK**.
    

## Custom defense rules

If Security Center generates false positive alerts for your normal business operations, you can create a custom defense rule to add the behavior to a whitelist. For example, you can add behavior related to command lines and process hashes to a whitelist to prevent false positive alerts.

### Supported rule types

You can add the following types of rules to a whitelist:

**Rule type**

Process hash

Command line

Process network

File read/write

Registry operation

Dynamic-link library loading

File rename

For configuration examples, see [Best practices for custom defense rules for malicious behavior defense](/help/en/security-center/use-cases/best-practices-for-configuring-custom-defense-rules-by-using-malicious-behavior-defense).

### Create a custom defense rule

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where the assets that you want to protect are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the navigation pane on the left, select **Mitigation Settings** > **Host Protection** > **Host-specific Rule Management**.
    
3.  On the **Malicious Behavior Defense** tab, click the **Custom Defense Rule** subtab, and then click **Create Rule**.
    
4.  In the Create Rule panel, select a **Rule Type**, configure the relevant parameters, set an **Action** for the rule, and then click **Next**.
    
5.  In the server list in the **Create Rule** panel, select the assets to which you want to apply the rule, and then click **Finish**.
    

A new custom rule is enabled by default. You can edit the rule and manage the servers on which the rule takes effect.

## View and handle security alerts

Security Center generates alerts and blocks attacks based on the configured rules. The alert type and handling method depend on the rule category.

### Process defense alerts

Security Center generates **Precise Defense** alerts based on **Process Protection** rules. To view and handle these alerts:

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the navigation pane on the left, select **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled **CTDR**, in the navigation pane on the left, select **CTDR** > **Alert**.
    
3.  On the **Alert** page, select the **CWPP** tab, and click the number under **Precise Defense**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2349236571/p870430.png)
    
4.  In the list of alert events, view the events that are generated for automatically blocked risks. If an alert event is a false positive, click **Details** in the **Actions** column to handle the event as described in the following steps.
    

### Handle a false positive process defense alert

The following example shows how to handle a false positive alert event for **Suspicious worm script behavior**.

1.  In the alert details panel, obtain and record the following information:
    
    -   The name of the system defense rule that detected and reported the alert event. In this example, the name is **Malicious Damage To Client Processes**.
        
    -   The **ATT&CK Phase** of the alert event. In this case, the phase is **Impact**.
        
    -   The names and IP addresses of the assets that are affected by the alert event.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6871123371/p870439.png)
    
2.  In the navigation pane on the left, select **Mitigation Settings** > **Host Protection** > **Host-specific Rule Management**.
    
3.  In the list of system defense rules, find the rule that triggered the alert event. You can locate the rule in either of the following ways:
    
    -   Enter **Suspicious worm script behavior** in the search box to find the system defense rule.
        
    -   Click **Impact** in the **ATT&CK Phase** menu on the left to filter the list.
        
4.  In the system defense rule list, locate the rule named **Suspicious worm script behavior** and choose one of the following actions:
    
    -   **Disable the rule**: If this system defense rule is not suitable for your business scenario and you no longer want Security Center to report the security alert events that it detects, click the ![Switch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2135778461/p410841.png) icon in the **Switch** column to disable the rule.
        
        **Important**
        
        If you disable a system defense rule, Security Center will no longer detect or report security risks associated with the rule to the alert list on the **Alert** page. Proceed with caution.
        
    -   **Remove the asset from the rule**: If you want to handle only this false positive security alert event, click **Manage Host** in the Actions column and remove the affected asset from the list of assets protected by the system rule. You can also locate and handle the false positive security alert on the **Alert** page. For more information, see [Analyze and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).
        
        **Important**
        
        If you want to handle only the current alert event but want the rule to continue protecting the asset, you can add the asset back to the rule's list of protected assets on the Malicious Behavior Defense page.
        

### Network defense alerts

Security Center uses **Network Threat Prevention** rules to automatically block and handle basic network attacks. Data about the attacks is displayed on the **Alert** > **Network Defense Alert** page. For more information, see [Network Threat Prevention Alerts (formerly Attack Analysis)](/help/en/security-center/user-guide/management-alarm-information).

**Important**

-   For newly purchased cloud products, you must wait for Security Center to automatically synchronize network attack data. Data synchronization takes about 3 hours. After the synchronization is complete, you can view the attack analysis information.
    
-   Defense alerts are the result of automatic blocking by Security Center. **No action is required.**
    

To view network defense alerts:

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where the assets that you want to protect are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  In the navigation pane on the left, select **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled **CTDR**, in the navigation pane on the left, select **CTDR** > **Alert**.
    
3.  On the **Alert** page, select the **CWPP** tab, and click the number under **Network Defense Alert** to view the relevant information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3924946571/p1001666.png)
