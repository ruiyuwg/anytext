After you add server assets to Security Center, you can manage them on the Servers tab of the Host Assets page. You can synchronize the latest asset information, view server details, manage server groups, and change the protection status of your servers. This topic describes how to manage servers.

## Synchronize latest assets

The Security Center console automatically synchronizes information about assets where the client is installed every minute. If you have just installed the client, you should synchronize your assets to ensure that the newly added servers appear in the asset list.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
3.  On the **Host** page, click the **Server** tab and then click **Synchronize Assets**.
    
    Security Center pulls the latest server asset information and refreshes the server list.
    
    **Note**
    
    The synchronization process takes about one minute to complete.
    

## Add multi-cloud assets

Security Center can protect and manage servers that are not deployed on Alibaba Cloud, such as third-party cloud servers and servers in data centers (IDCs). Before you can use Security Center to protect a server that is not deployed on Alibaba Cloud, you must add the server as an asset to Security Center. The following table describes the types of servers that you can add and the steps required.

**Server vendor or type**

**Procedure**

Tencent Cloud, Amazon Web Services, etc.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where the asset to protect is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  In the **Add Multi-cloud Asset** area, move the mouse pointer over the icon of the vendor that you want to add, and click **Add**.
    
4.  In the **Add Assets Outside Cloud** panel, complete the configurations. For more information, see [Add cloud assets using the AccessKey pair of a third-party account](/help/en/security-center/user-guide/use-multi-cloud-configuration-management/#section-jbt-gzi-2gr).
    

IDC

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where the asset to protect is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  In the **Add Multi-cloud Asset** area, move the mouse pointer over the ![IDC接入图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5990639661/p511589.png) icon, and click **Add**.
    
4.  In the **Add Assets Outside Cloud** panel, complete the configurations. For more information, see [Add third-party cloud assets](/help/en/security-center/user-guide/use-multi-cloud-configuration-management/#section-rdi-jjo-i79).
    

Servers outside Alibaba Cloud

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where the asset to protect is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  In the **Add Multi-cloud Asset** area, move the mouse pointer over the ![云外主机](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5990639661/p511595.png) icon, and click **Install Agent**.
    
4.  On the **Feature Settings** page, install the client. For more information, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent#section-qxq-hkv-ghb).
    

## View server information

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Host** page, click the **Server** tab to view server information.
    
    -   View information about a single server
        
        You can use the search bar above the server list to find a server by its **Instance Name**, **Public IP Address**, or **Private IP Address**.
        
        In the **Risk Status** column, you can view whether the server has security risks.
        
        Click **View** in the **Actions** column for a server to open its details page.
        
        **Tab**
        
        **Description**
        
        **Basic information**
        
        -   Details
            
            Displays the basic information about the server, such as the server ID, region, group, and operating system. You can also change the group of the server and perform quick diagnostics on the abnormal client on the server.
            
            **Note**
            
            If the basic information of the server, such as the MAC address or kernel version, is missing, you can return to the asset list, select the server, and then choose ****More Operations**** > ****Asset Collection**** below the list to collect the basic information about the server.
            
        -   Protection Status
            
            Displays the enabling status of client self-protection, malicious network behavior defense, web shell connection defense, and malicious host behavior defense.
            
        -   Vulnerability Scan
            
            Displays the vulnerability scan types. You can enable or disable different types of vulnerability scans for the server.
            
        -   Brute-force Attacks Protection
            
            Displays the brute-force attack protection rule that is applied to the server. You can modify the rule.
            
        -   Logon Security Settings
            
            Displays the common logon locations, logon IP addresses, logon time, and logon accounts that are added to the server. You can configure alerts for the server.
            
        
        **Vulnerability Details**
        
        Displays the vulnerability scan results of the server.
        
        **Alert**
        
        Displays the security alert information of the server.
        
        **Asset Fingerprints**
        
        Displays the detailed information about the server fingerprints.
        
        **Note**
        
        This tab is displayed only if your Security Center meets the following conditions.
        
        -   **Subscription**: **Enterprise** or **Ultimate** (you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center) if you are using a lower edition).
            
            **Note**
            
            The protection edition for the server must be set to **Enterprise** or **Ultimate**. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
            
        -   **Pay-as-you-go:** The pay-as-you-go billing method must be enabled for **Host and Container Security**. If this billing method is not enabled, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
            
            **Note**
            
            The server's protection level must be **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
            
        
        **Agentless Detection**
        
        Displays the vulnerability risks, baseline configurations, and security alerts that are detected on the server using the agentless detection feature.
        
        **CSPM**
        
        -   **Cloud Service Configuration Risk**: Displays the detailed information about the cloud product configuration risk checks for the server.
            
        -   **System Baseline Risks**: Displays the baseline risk check results of the server.
            
            **Note**
            
            This tab is displayed only for Security Center instances for which the baseline check feature is enabled. To enable the feature, see [Enable the baseline check feature](/help/en/security-center/user-guide/authorize-and-activate-cspm#015adc956bfcw).
            
        
        **O&M and Monitoring**
        
        -   Remote O&M
            
            Displays the list of commands, command execution results, and file sending results for remote O&M on the server through Cloud Assistant.
            
        -   Performance Monitoring
            
            Displays data such as the CPU utilization, memory usage, system load, inbound and outbound network traffic rate, and number of TCP connections of the server.
            
        
    -   View information about servers in the same category
        
        The **Server** tab provides categories such as **At Risk**, **Unprotected**, and **Exposed** to help you manage servers.
        
        **Category**
        
        **Description**
        
        **All Servers**
        
        You can view all servers that are protected by Security Center. This includes all Alibaba Cloud servers and non-Alibaba Cloud servers on which the Security Center client is installed.
        
        **At Risk**
        
        You can view servers that have security risks, such as vulnerabilities, CSPM risks, and security alerts.
        
        **Unprotected**
        
        You can view servers whose client status is **Offline** or **Paused**, and servers whose power state is **Running** or **Unknown**.
        
        **Important**
        
        Security Center cannot provide security protection for servers whose client status is **Offline** or **Paused**, or whose power state is **Running** or **Unknown**. If you want to enable protection for a server, see [Change the protection status of servers](#section-rge-30e-dur).
        
        **Unauthorized**
        
        You can view servers that use the **Free Edition** (for subscription) or are **Unprotected** (for pay-as-you-go Host and Container Security).
        
        **Shutdown**
        
        You can view servers that are shut down.
        
        **Exposed**
        
        You can view servers that are exposed to the Internet. These servers can communicate with the Internet. For more information about the exposure of your assets to the Internet, see [Asset exposure analysis](/help/en/security-center/user-guide/asset-exposure-analysis#task-2011667).
        
        **Note**
        
        This feature is available only if the protection edition or protection level that is bound to the server meets specific conditions. The conditions are as follows:
        
        -   **Subscription**: **Enterprise** or **Ultimate** (you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center) if you are using a lower edition).
            
            **Note**
            
            The protection edition for the server must be set to **Enterprise** or **Ultimate**. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
            
        -   **Pay-as-you-go:** The pay-as-you-go billing method must be enabled for **Host and Container Security**. If this billing method is not enabled, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
            
            **Note**
            
            The server's protection level must be **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
            
        
        If the preceding conditions are not met, Security Center cannot provide the number of exposed servers, and Unknown is displayed to the right of **Exposed**.
        
        **Add**
        
        You can view Alibaba Cloud ECS servers that you purchased in the last 15 days.
        
        **Server Group**
        
        You can view servers in each server group. You can click the name of a group to view the security status of the servers in the group.
        
        **Note**
        
        Security Center lets you manage and delete server groups. For more information, see [Manage server groups, importance, and tags](#section-9tv-hrx-ncn).
        
        **Server Region**
        
        You can view servers in each region. You can click the name of a region to view the security status of the servers in the region.
        
        **VPC**
        
        You can view servers in each VPC. You can click the name of a VPC to view the security status of the servers in the VPC.
        
        **Importance**
        
        You can view servers of each asset importance level. In the **Importance** section, click **Important**, **Normal**, or **Test** to view the security status of the servers with the corresponding importance level.
        
        **Note**
        
        Security Center lets you classify assets into three importance levels. You must classify the assets under your account into importance levels as needed. This helps you manage assets in batches from the dimension of asset importance.
        
        **Tag**
        
        You can view servers with each asset tag. You can click an asset tag that is added under **Tag** to view the security status of the servers with the tag.
        
        **Note**
        
        Security Center lets you manage and delete server tags. For more information, see [Manage server groups, importance, and tags](#section-9tv-hrx-ncn).
        
    -   View information about servers that match one or more search conditions
        
        Under categories such as **All Servers**, **At Risk**, and **Unprotected**, you can also set one or more search conditions to filter your servers.
        
        The following example describes how to set multiple search conditions to filter for servers that run the Linux operating system, have security alerts, and are in the China (Hangzhou) region.
        
        1.  On the Servers tab of the **Assets** page, click **Unprotected**.
            
        2.  From the search condition drop-down list, set **OS Type**, **Whether Alert Exists**, and **Region**.
            
            -   Set **OS Type** to Linux.
                
            -   Set **Whether Alert Exists** to Yes.
                
            -   Set **Region** to China (Hangzhou).
                
            
            **Note**
            
            For some search conditions, you cannot select a value from a list. In this case, you can select the filter condition and then enter the value in the input box.
            
            After you set the filter conditions, they are displayed above the server list.
            
        3.  Click AND or OR to the left of a search condition to switch the logical relationship between the conditions.
            
            -   **AND**: The logical relationship between multiple search conditions is AND.
                
            -   **OR**: The logical relationship between multiple search conditions is OR.
                
            
            After you complete the settings, the server list displays only the servers that meet all specified search conditions.![多条件筛选](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9709038571/p362775.png)
            
        4.  **Optional:** To save the current filter conditions for future use, click **Save** to the right of the search conditions.
            
            After you save the search conditions, you can use them to quickly find specific servers.
            
        
    

## Manage server groups, importance, and tags

The Host Assets page provides the server group, importance, and tag features to help you manage servers from different dimensions. Using these features to manage servers makes it easier to use other Security Center features.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located:**Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Host** page, click the **Server** tab to manage server groups, importance, and tags.
    
    -   **Manage server groups**
        
        When you use Security Center features such as anti-ransomware, web tamper proofing, baseline checks, and vulnerability scans, you can apply the features to specific server groups. This lets you quickly select multiple servers at once instead of selecting them one by one.
        
        On the **Server** tab, you can manage server groups in the **Server Group** section of the **Attribute** area to the left of the server list.
        
        -   Edit and delete groups
            
            Move the pointer over the group that you want to manage, click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463981.png) icon, and then modify the group name or add or remove servers in the **Group Management** dialog box.
            
            To delete a group, move the pointer over the group, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463964.png) icon, and then click **OK** in the **Note** dialog box.
            
            **Note**
            
            The default group **Ungrouped** cannot be deleted.
            
        -   Change groups
            
            In the **Server Group** section, click a group name to view the servers in that group. Select the servers whose group you want to change, click **Change Group** below the list, and then change the group in the **Change Group** dialog box.
            
            -   Move to an existing group
                
                Set Mode to **Move to Existing Group**, select a group name from the **New Group** drop-down list, and then click **OK**.
                
            -   Create a group
                
                Set Mode to **Create Group**, enter a group name in the input box to the right of **New Group**, and then click **OK**.
                
            
            You can also filter and select servers from the main server list and click **Change Group** below the list to change the group for the selected servers.
            
    -   **Manage server importance**
        
        The importance level that you set for a server determines the asset importance factor used to calculate the vulnerability fix priority score. A higher score indicates a higher priority. We recommend that you set the **Importance** of core servers to Important. Security Center prioritizes vulnerability alerts for important servers.
        
        The following table describes the relationship between server importance and the asset importance factor. For more information about vulnerability fix priorities, see [Vulnerability fix priorities](/help/en/security-center/user-guide/overview-4#section-dp8-1ts-qqu).
        
        **Importance level**
        
        **Asset importance factor**
        
        **Suggestion**
        
        Important
        
        1.5
        
        A server that runs your core services or stores core data. A malicious virus intrusion into this type of server has a great impact on the business system and causes major business losses.
        
        Normal
        
        1
        
        A server that runs general services and is highly replaceable. A malicious virus intrusion into this type of server has little impact on the entire system.
        
        Test
        
        0.5
        
        A server that is used for service function or performance testing, or other servers that have little impact on your business.
        
        On the **Server** tab, you can manage server importance in the **Importance** section to the left of the server list.
        
        -   Set server importance
            
            In the **Importance** section, click **Manage**. In the **Asset Importance Management** dialog box, select an importance level, select the servers that you want to include in this importance level, and then click **OK**.
            
        -   The importance of server management
            
            In the **Importance** section, move the pointer over an importance level, such as Important, Normal, or Test. Click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463981.png) icon, add or remove servers in the **Asset Importance Management** dialog box, and then click **OK**.
            
        -   The Importance of Single-Server Management
            
            In the server list, click the ![tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p464043.png) icon in the **Server Information** column for the target asset. In the dialog box that appears, select an importance level and click **OK**.
            
        
    -   **Manage server tags**
        
        You can use the **Tag** feature to add custom tags to servers to identify specific properties. This helps you filter for servers that share the same properties.
        
        On the **Server** tab, you can manage server tags in the **Tag** section to the left of the server list.
        
        -   Viewing target tags
            
            In the **Tag** section, click a tag name to view all servers with that tag.
            
        -   Create a tag
            
            In the **Tag** section, click **Manage** in the upper-right corner. In the **Tag Management** dialog box, enter a tag name, select the servers to which you want to add the tag, and then click **OK**.
            
        -   Edit and delete tags
            
            Move the pointer over the tag that you want to manage and click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463981.png) icon. In the **Tag Management** dialog box, you can modify the tag name or add or remove servers associated with the tag. Then, click **OK**.
            
            To delete a tag, move the pointer over the tag, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463964.png) icon, and then click **OK** in the **Message** dialog box.
            
        -   Manage the tags of a single server
            
            In the server list, click the ![Tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p464043.png) icon in the **Server Information** column for the target server. In the dialog box that appears, select a tag for the server and click **OK**.
            
            **Note**
            
            You can add multiple tags to a server.
            
            In the server list, in the **Server Information** column for the target server, click the ![Delete](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2011259561/p463964.png) icon next to the tag. In the **Prompt** dialog box, click **OK**.
            
        
    

## Change the protection status of servers

After you install the Security Center client on a server, Security Center automatically enables security protection for it. You can change the protection status of the server as needed.

After you install the Security Center agent on a server, the ![Online](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419829.jpg) icon is displayed in the **Agent** column for the server on the **Host** page. This icon indicates that the server is protected by Security Center. If the ![Offline](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419831.jpg) icon is displayed in the **Agent** column, the Security Center agent on the server is offline and Security Center cannot protect the server. We recommend that you troubleshoot the issue at the earliest opportunity. For more information, see [Troubleshoot why the Security Center agent is offline](/help/en/security-center/user-guide/troubleshoot-why-the-security-center-agent-is-offline#task-fkr-2lc-zdb).

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Host** page, click the **Server** tab to manage the protection status of servers.
    
    -   **Pause protection**
        
        **Important**
        
        Security Center cannot provide security protection, such as vulnerability scans and security alerts, for servers for which protection is paused. Proceed with caution.
        
        If you confirm that a server does not require protection from Security Center, you can disable protection for that server. Select one or more servers that have the ![Agent online](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419829.jpg) icon in the **Agent** column, click **More Operations** below the list, and in the **More Operations** menu, click **Disable Protection**.
        
        After protection is disabled, the icon in the **Agent** column for your server changes from ![Agent online](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419829.jpg) to ![Agent offline](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419831.jpg), which indicates that the server is no longer protected by Security Center.
        
    -   **Enable protection**
        
        Select one or more servers that have the ![Client offline](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419831.jpg) icon in the **Agent** column, click **More Operations** below the list, and from the **More Operations** menu, click **Enable Protection**.
        
        **Note**
        
        After you enable protection for a server, the ![Agent offline](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0093303661/p419831.jpg) icon may still be displayed in the **Agent** column. This can be caused by the following reasons:
        
        -   The Security Center client is not installed on the server. You must install the client on the server. After the client is installed, Security Center automatically enables protection for the server. For more information about how to install the client, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).
            
        -   The Security Center client on the server is offline. You must resolve the offline issue. For more information, see [Troubleshoot offline clients](/help/en/security-center/user-guide/troubleshoot-why-the-security-center-agent-is-offline#task-fkr-2lc-zdb).
            
        
    

## Detach servers not deployed on Alibaba Cloud

Security Center can protect servers that are not deployed on Alibaba Cloud. You can detach these servers as needed.

If a server that is not deployed on Alibaba Cloud is shut down and has pending vulnerabilities or alert events, you can detach the server from the asset list. This prevents the pending risks from affecting the overall security score of your account. If you are sure that you no longer require Security Center to protect the server, you can also uninstall the client directly. For more information, see [Uninstall the client](/help/en/security-center/user-guide/uninstall-the-security-center-agent#concept-cwf-hzc-zdb).

**Note**

-   You only need to detach servers that are not deployed on Alibaba Cloud. You do not need to detach Alibaba Cloud ECS servers. If you uninstall the client plug-in from an Alibaba Cloud ECS server, the server still appears in the asset list with an offline status and is not removed from the list.
    
-   After a server that is not deployed on Alibaba Cloud is detached, it no longer consumes your Security Center authorization quota. The authorization quota is then released and can be used to protect other servers.
    
-   If you [add cloud assets using the AccessKey pair of a third-party account](/help/en/security-center/user-guide/use-multi-cloud-configuration-management/#section-jbt-gzi-2gr), detaching the assets in the Security Center console triggers the client uninstallation process and removes the assets from Security Center. However, the assets are synchronized to Security Center again during the next asset synchronization. The client is not automatically reinstalled.
    

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located:**Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Host** page, click the **Server** tab, select the server that is not deployed on Alibaba Cloud that you want to detach, and then choose **More Operations** > **Unbind** below the list.
    
4.  In the **Note** dialog box, click **OK**.
    

After the server is detached, Security Center sends a command to uninstall the client, removes the server from the asset list, and stops providing security protection for the server.

If you uninstall the client directly, the client process and files are completely removed from your server. If you want to use Security Center to protect the server again in the future, you must reinstall the client. For more information, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).

## Clean up off-cloud host assets

Scheduled cleanup removes offline hosts from the server list to reclaim authorization quotas and prevent resource waste.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  In the **Add Multi-cloud Asset** section, move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6704103471/p931303.png) icon and click **Scheduled Cleanup**.
    
4.  In the **Scheduled Cleanup** dialog box, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6704103471/p931194.png) icon to enable the scheduled cleanup feature. Under Cleanup Rule, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6704103471/p931197.png) icon to set the number of offline days for hosts. The value must be an integer from 1 to 30. The system automatically reclaims authorization quotas for hosts that are offline longer than the specified period.
