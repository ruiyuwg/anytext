A brute-force attack happens when attackers attempt to decrypt passwords or keys by trying all possible combinations. This topic introduces how to effectively safeguard your hosts using the defense against brute-force attack feature.

## **How it works**

You can create a defense rule against brute-force attacks. If the number of logon failures from an IP address to a server to which your defense rule is applied exceeds the specified limit during the specified statistical period, the defense rule is triggered, and an IP address blocking policy is automatically generated. Logon requests from the IP address to the server are blocked within the specified disablement period. You can view the IP address on the **System Rules** tab of the Defense Against Brute-force Attacks tab. The IP address blocking policy is automatically enabled and valid during the disablement period of the defense rule.

## **Create a defense rule against brute-force attacks**

You can create a defense rule to specify the conditions that trigger brute-force attack protection. You can also create multiple defense rules against brute-force attacks for servers based on different scenarios.

**Important**

To whitelist an IP address, you can click the number below **Approved Logon IP Address** and specify the IP address as an approved logon IP address. Defense rules against brute-force attacks do not block logon requests from approved logon IP addresses.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. The following regions are supported: **China** and **Outside China**.
    
2.  In the left-side navigation pane, navigate to **Protection Configuration** > **Host Protection** > **Host-specific Rule Management**.
    
3.  On the **Host-specific Rule Management** page, click the **Defense Against Brute-force Attacks** tab.
    
4.  If you have not authorized Security Center to access your cloud resources, click **Authorize Immediately**.
    
    For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
    
5.  On the Defense policy tab, click **Create Policy**. In the **Create Policy** panel, configure the parameters.
    
6.  Security Center provides the following default settings in the Create Rule panel: If the number of logon failures from an IP address to the same server reaches 80 within 10 minutes, the IP address is blocked for 6 hours. If you want to retain the default settings, you can directly select servers. If you want to create a custom rule, you can configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    Enter a name for the defense rule.
    
    **Defense Rule:**
    
    Specify a trigger condition for the defense rule. If the number of logon failures from an IP address to a server to which the defense rule is applied exceeds the limit during the statistical period, the defense rule blocks the IP address for the disablement period. For example, if the number of logon failures from an IP address exceeds 3 within 1 minute, the IP address is blocked for 30 minutes.
    
    **Protection Scenario**
    
    -   Mandatory: **RDP Brute-force Attack** and **SSH Brute-force Attack**.
        
    -   Optional: **SQL Server Brute-force Attack**, which is crucial for enhancing database security and safeguarding sensitive data.
        
        **Important**
        
        The logon logging feature must be enabled in SQL Server before this protection scenario can take effect. For more instructions, see [Enable logon logging feature in SQL Server](#c6f09df605nko).
        
    
    **Set as Default Policy**
    
    Determine whether to specify the defense rule as a default defense rule. If you select Set As Default Policy, servers that are not protected by defense rules use the defense rule.
    
    **Note**
    
    If you select **Set as Default Policy**, the defense rule takes effect on all servers that are not protected by defense rules, regardless of whether you select the servers in the **Select Server(s):** section.
    
    **Select Server(s):**
    
    Select the servers that you want the defense rule to protect. You can select servers from the server list or search for servers by server name or server IP address.
    
7.  Click **OK**.
    
    **Important**
    
    You can create only one defense rule against brute-force attacks for each server.
    
    -   If a selected server is not protected by a defense rule, the defense rule that you create takes effect.
        
    -   If a selected server is protected by a defense rule and you want to apply the defense rule that you create to the server, read and confirm the information in the **Confirm Changes** message, and click **OK**.
        
    -   If you create a rule for a server to which an existing defense rule is applied, the number of servers to which the existing defense rule is applied decreases.
        
    

## **Manage a system rule**

A system rule refers to an IP address blocking policy that is automatically generated after a defense rule against brute-force attacks is triggered. You can perform the following operations to view, enable, and disable a system rule:

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. The following regions are supported: **China** and **Outside China**. In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Host-specific Rule Management**.
    
2.  On the **Host-specific Rule Management** page, click the **Brute-force attacks protection** tab.
    
3.  On the **System Rules** tab, perform the following operations:
    
    -   View the information about a system rule
        
        You can view the following information: blocked IP address, port, effective servers, rule name, interception mode, validity period, and status. An effective server refers to a server to which a rule is applied. Security Center enables different interception mechanisms based on whether the AliNet plug-in is installed. The following list describes the interception mechanisms:
        
        -   **Security Center**: This interception mechanism uses the AliNet plug-in. If you use the Advanced, Enterprise or Ultimate edition of Security Center and enable the **Malicious Network Behavior Prevention** feature, Security center automatically uses the AliNet plug-in to block logons. For more information about how to enable the **Malicious Network Behavior Prevention** feature, see [Proactive Defense](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#section-8ad-fnl-sb4).
            
        -   **ECS Security Group**: When you enable a system rule, a security group rule is automatically created. If the system rule expires or is disabled, the security group rule is automatically deleted.
            
    -   Enable a system rule
        
        If a system rule is disabled, you can turn on the switch in the **Status** column to enable the system rule. Then, Security Center continues to block logons from the IP address that is specified in the system rule. The rule is valid for 2 hours after it is enabled.
        
    -   Disable a system rule
        
        If a system rule is enabled and you confirm that the blocking of the IP address specified in the system rule is a false positive, you can disable the rule to allow logons from the IP address. To disable the rule, turn off the switch in the **Status** column. After approximately 1 minute, logon attempts from the IP address are allowed.
        
    

## **Manage a custom rule**

You can create custom IP address blocking policies to block access from malicious IP addresses to your cloud assets. To manage a custom IP address blocking policy, perform the following operations:

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. The following regions are supported: **China** and **Outside China**.
    
2.  In the left-side navigation pane, navigate to **Protection Configuration** > **Host Protection** > **Host-specific Rule Management**.
    
3.  On the **Host-specific Rule Management** page, click the **Brute-force attacks protection** tab.
    
4.  On the **Custom Rules** tab, perform the following operations:
    
    -   Create a custom IP address blocking policy
        
        1.  If you have not authorized Security Center to access your cloud resources, click **Authorize Immediately**.
            
            For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
            
        2.  Click **Create Whitelist Rule**. In the **Create IP Address Blocking Policy** panel, configure the parameters and click **OK**. The following table describes the parameters.
            
            **Parameter**
            
            **Description**
            
            **Intercepted Object**
            
            The IP address that you want to block.
            
            **All Assets**
            
            The server on which you want the IP address blocking policy to take effect. You can select multiple servers. You can also enter a server name or server IP address in the search box to search for the server.
            
            **Rule Direction**
            
            The direction of the traffic that you want to block. Valid values: **Inbound** and **Outbound**.
            
            **Security Group**
            
            The security group that is associated with the IP address blocking policy. Default value: **Cloud Security Center Block Group**. When you enable the policy, a blocking rule is automatically created in the security group. If the policy expires or is disabled, the rule in the security group is automatically deleted.
            
            **Expiration Time**
            
            The expiration time of the policy. After the policy expires, the status of the policy changes to **Disabled**.
            
            By default, a new IP address blocking policy is in the **Disabled** state. You must manually enable the policy.
            
    -   View custom IP address blocking policies and the details of a custom IP address blocking policy
        
        On the **Custom Rules** tab, you can view the following information about each custom IP address blocking policy: blocked IP address, effective servers, expiration time, rule direction, and status. You can also click Details in the Actions column of a policy to go to the Effective Server(s) panel. In this panel, you can view the servers on which the policy takes effect. You can filter servers by status, such as Disabled, Enabled, Enabling, and Enable Rule.
        
    -   Edit a custom IP address blocking policy
        
        Find the IP address blocking policy that you want to edit and click **Edit** in the **Actions** column. In the **Edit IP Address Blocking Policy** panel, modify the All Assets and Expire Date parameters and click OK. After modification, Security Center blocks access requests from IP addresses based on the new settings of the policy.
        
        You can edit a policy only if the policy is in the Disabled state. If you want to edit a policy that is in the Enabled state, you must disable the policy.
        
    -   Enable or disable an IP address blocking policy
        
        You can configure an IP address blocking policy for an IP address that is likely used to launch brute-force attacks. If normal traffic is blocked by the policy, you can disable the policy. After you disable the policy, Security Center no longer blocks requests from the IP address.
        
        -   **Enable**: To enable an IP address blocking policy, turn on the switch in the **Status** column. In the **Enable IP Policies** message, click **OK**. Then, the policy takes effect, and the status of the policy changes to **Enabling**. The amount of time during which the policy is in the Enabling state increases with the number of effective servers. Security Center blocks malicious traffic based on the policy. After you enable the policy, the policy may be in one of the following states:
            
            -   **Enable Rule**: The IP address blocking policy does not take effect on all selected servers.
                
            -   **Partially Successful**: The IP address blocking policy takes effect only on several selected servers.
                
            
            To view the details of effective servers, click **Details** in the Actions column. In the **Effective Server** panel, find a server that is in the Enable Rule state and click **Retry** in the **Actions** column to enable the policy.
            
            **Note**
            
            If you enable a custom IP address blocking policy and the policy expires, the policy is valid for 2 hours after the point in time when you enable the policy. If you want to change the validity period of the policy, we recommend that you modify the policy before you enable the policy.
            
        -   **Disable**: To disable an IP address blocking policy, turn off the switch in the **Status** column. In the **Disable IP Policies** message, click **OK**. Then, the policy becomes invalid, and the status of the policy changes to **Disabled**. Security Center no longer blocks requests from the IP address that is specified in the policy.
            
    -   Delete a custom IP address blocking policy
        
        You can delete an IP address blocking policy that is in the **Disabled** state. To delete a policy, click **Delete** in the Actions column. In the message that appears, click **OK**.
        

## Enable logon logging feature in SQL Server

To protect against SQL Server brute-force attacks, you must first enable the logon logging feature in SQL Server to record both successful and failed authentication attempts, which are essential for detecting and confirming password guessing attacks. To enable logon logging, follow the steps below:

1.  Open SQL Server Management Studio and connect to your SQL Server instance using your credentials.
    
2.  In the **Object Explorer** window on the left, right-click the target SQL Server instance you want to configure and select **Properties**.
    
3.  In the left menu of the **Properties** dialog, click Security.
    
4.  In the **Security** > **Login Auditing** section, if you want to enable the protect strategy against SQL Server brute-force attacks, select **Both Failed and Successful Logins**.
    
5.  Click **OK** and restart your SQL Server instance for the changes to take effect.
