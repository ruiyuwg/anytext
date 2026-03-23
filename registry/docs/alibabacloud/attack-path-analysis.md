You can use the attack path analysis feature to scan for and analyze the access paths between Alibaba Cloud services in a comprehensive manner, such as an access path where a Resource Access Management (RAM) role assigned to an Elastic Compute Service (ECS) instance is used to control Object Storage Service (OSS) buckets. The feature provides visualized scan results to help you understand the security status of resource access in the cloud. This topic describes how to use the attack path analysis feature.

## **Feature description**

You can use the attack path analysis feature to understand the relations and potential risks between different cloud services. This helps you identify unnecessary direct access permissions and weak links that may be exploited. For example, excessively loose permission settings and unencrypted data transmission are weak links. Meanwhile, Security Center automatically generates security suggestions to help you adjust the resource permission settings. This reduces potential threats and enhances overall system security. The feature also helps you proactively identify and fix security vulnerabilities that may be exploited by attackers, and protects critical data and applications from attacks.

### **Supported assets**

The attack path analysis feature allows you to scan assets within your Alibaba Cloud account that meet the following requirements:

-   Entry points (**intruded assets**) in attack paths must be ECS instances, RAM roles, or AccessKey IDs.
    
-   Targets (**targeted assets**) in attack paths must be ECS instances, Alibaba Cloud accounts, RAM users, RAM policies, RAM user groups, RAM roles, or OSS buckets.
    

An **entry point** is reported as an alert in an attack path only if the entry point is involved in at least one of the following vulnerable scenarios:

-   An urgent vulnerability is detected on an ECS instance.
    
-   An ECS instance is exposed to the Internet and at least one risk is detected on the ECS instance.
    
-   An urgent alert is generated on an ECS instance and the alert is displayed on the **Assets** > **Host** page for the ECS instance.
    
-   An urgent alert is generated on the AccessKey pair of a RAM role. The alert must be of the **Cloud Workload Protect Platform (CWPP)** type.
    
-   A RAM role can be assumed across accounts.
    

### **Attack path types**

Security Center scans the assets that meet the requirements based on the attack path types and attack path scenarios, and reports alerts for assets that have attack paths. The attack path types are Abnormal AccessKey Pair, Sensitive Asset, Privilege Escalation by Role, and Privilege Escalation by User.

## Abnormal AccessKey Pair

-   The RAM user to which an abnormal AccessKey pair belongs can manage RAM.
    
-   The RAM user to which an abnormal AccessKey pair belongs has administrative rights.
    

## Sensitive Asset

The attack path analysis feature allows you to configure sensitive assets and specify them as the targeted assets of an attack path scan task. You can scan the assets to identify attack path scenarios.

-   The role that is assigned to an ECS instance can access sensitive assets.
    
-   The RAM user to which an abnormal AccessKey pair belongs can access sensitive assets.
    
-   A role can access sensitive assets and be assumed by other Alibaba Cloud accounts.
    

If you do not configure sensitive assets in an attack path scan, no **attack path** is detected after the scan is complete**.** For more information about how to configure sensitive assets, see the **_Configure sensitive assets_** section in this topic.

## Privilege Escalation by Role

-   An ECS instance can obtain administrative rights by using the RAM role that is assigned to the ECS instance.
    
-   The RAM role that is assigned to an ECS instance can manage RAM.
    
-   An ECS instance can escalate privileges by attaching policies to the role that is assigned to the ECS instance.
    
-   An ECS instance can escalate privileges by modifying policies attached to the role that is assigned to the ECS instance.
    
-   An ECS instance can escalate privileges by changing the default version of policies attached to the role that is assigned to the ECS instance.
    
-   An ECS instance can escalate privileges by changing the role that is assigned to the ECS instance.
    
-   An ECS instance can obtain long-term access credentials by creating AccessKey pairs.
    
-   An ECS instance can obtain long-term access credentials by enabling console logon for RAM users.
    
-   An ECS instance can enable console logon by modifying logon settings of a RAM user.
    
-   An ECS instance can escalate privileges by attaching policies to a RAM user.
    
-   An ECS instance can escalate privileges by modifying policies that are attached to a RAM user.
    
-   An ECS instance can escalate privileges by changing the user group to which a RAM user belongs.
    
-   An ECS instance can escalate privileges by attaching policies to the user group to which a RAM user belongs.
    
-   An ECS instance can escalate privileges by modifying policies attached to the user group to which a RAM user belongs.
    
-   An ECS instance can escalate privileges by modifying a high-risk trust policy.
    
-   An ECS instance can escalate privileges by modifying the policy attached to a role that can be assumed by a RAM user.
    
-   An ECS instance can escalate privileges by assuming the role that can be assumed by a RAM user.
    
-   An ECS instance can escalate privileges by assuming the role that can be assumed by the role assigned to the ECS instance.
    
-   An ECS instance can escalate privileges by obtaining the high-risk permissions of the role that is assigned to another ECS instance.
    
-   A role has administrative rights and can be assumed by other Alibaba Cloud accounts.
    
-   A role can manage RAM and be assumed by other Alibaba Cloud accounts.
    
-   A role is granted high-risk permissions and can be assumed by other Alibaba Cloud accounts.
    
-   A role can escalate privileges by attaching policies to itself and can be assumed by other Alibaba Cloud accounts.
    
-   A role can escalate privileges by modifying policies attached to itself and be assumed by other Alibaba Cloud accounts.
    

## Privilege Escalation by User

-   A RAM user can escalate privileges by attaching policies to itself.
    
-   A RAM user can escalate privileges by modifying policies attached to itself.
    
-   A RAM user can escalate privileges by attaching policies to the user group to which the RAM user belongs.
    
-   A RAM user can escalate privileges by modifying policies attached to the user group to which the RAM user belongs.
    
-   A RAM user can escalate privileges by modifying the trust policy of a role and assuming the role.
    
-   A RAM user can escalate privileges by running commands on an ECS instance to obtain the permissions of a role.
    
-   A RAM user can escalate privileges by sending files from an ECS instance to obtain the permissions of a role.
    
-   A RAM user can escalate privileges by starting a session in the web shell console of an ECS instance to obtain high-risk permissions of a role.
    
-   A RAM user can escalate privileges by resetting the password of an ECS instance to obtain high-risk permissions of a role.
    
-   A RAM user can escalate privileges by binding an SSH key pair to an Linx server to obtain high-risk permissions of a role.
    
-   A RAM user can escalate privileges by creating an instance and assigning the role of the instance to the RAM user to obtain high-risk permissions of a role.
    
-   A RAM user can escalate privileges by modifying the role binding configuration of an instance to obtain high-risk permissions of a role.
    

## **Enable** the **attack path analysis** feature

After you purchase the CSPM feature by using the subscription or pay-as-you-go billing method, you can use the attack path analysis feature. The attack path analysis feature **does not consume the quota for the CSPM feature.** For more information about how to purchase the CSPM feature, see [Authorization and purchase](/help/en/security-center/user-guide/cspm#2e6b7c8826cun).

## **Statistics**

The statistics on the attack path analysis feature are automatically refreshed on a daily basis. The statistics are displayed on the **Attack Path** tab of the **Cloud Security Posture Management** page. The statistics provide the details of attack paths on vulnerable assets and the asset information. The following table describes the statistical items.

**Statistical item**

**Description**

High-priority Attack Paths

The total number of attack paths that have a high priority.

At-risk Assets

The total number of vulnerable assets that involve attack paths.

Attack path information

The list of alerts triggered by attack paths. The alert information includes attack path names, path types, intruded assets, and targeted assets.

## **Manage attack path scan settings**

### Configure **sensitive assets**

An attack path scan task is run to scan for attack paths on sensitive assets. Therefore, you must configure sensitive assets. If you do not configure sensitive assets, no **attack path** is detected after the scan task is complete**.**

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select **China** as the region of the asset that you want to manage.
    
2.  In the left-side navigation pane, choose **Risk Governance** > **Cloud Security Posture Management**.
    
3.  On the **Attack Path** tab of the **Cloud Security Posture Management** page, click **Policy Management** in the upper-right corner or click **Scan Configuration** in the **Attack Path** section.
    
4.  On the left side of the **Sensitive Asset to Scan** tab, click an asset type. On the right side of the tab, select the required assets.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p843758.png)
    
5.  Click **OK**.
    

### Configure a **whitelist rule**

If you do not want to scan for specific attack paths between specific entry points and targets, you can add the attack paths to a whitelist rule. Security Center does not report information about the attack paths from the assets that are added to the whitelist rule.

1.  On the **Attack Path** tab of the **Cloud Security Posture Management** page, click **Policy Management** in the upper-right corner or click **Scan Configuration** in the **Attack Path** section.
    
2.  On the **Whitelist Rule** tab, click the **By Attack Path** tab.
    
3.  On the By Attack Path tab, click **Create Whitelist Rule**. In the panel that appears, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Whitelist Name
    
    Enter a name for the whitelist rule. The name can contain letters, digits, and underscores (\_).
    
    Attack Path Type
    
    Select the type of the attack path that you want to add to the whitelist rule. Valid values: Abnormal AccessKey Pair, Sensitive Asset, Privilege Escalation by Role, and Privilege Escalation by User.
    
    Attack Path
    
    Select an attack path of the type that you specify for the **Attack Path Type** parameter.
    
    Asset Scope
    
    Select the assets on which you want to apply the whitelist rule. Valid values: **All Assets** and **Specific Assets**.
    
    If you select **Specific Assets**, you must also select assets in the **Entry Point** and **Target** sections.
    

## **Automatically scan for attack paths**

Security Center automatically scans for the supported attack path types on supported assets once on a daily basis.

-   If you do not configure sensitive assets, no attack path is detected after the scan is complete.
    
-   If you configure whitelist rules for specific attack paths, Security Center does not scan for the attack paths between the entry points and targets or generate alerts for the attack paths.
    

### **Manually run an attack path scan task**

On the **Attack Path** tab of the **Cloud Security Posture Management** page, click **Quick Scan** in the **Attack Path Scan** section.

### **View scan task information**

By default, the **Task Management** panel displays the records of automatic and manual scan tasks that run in the previous seven days.

1.  In the upper-right corner of the **Cloud Security Posture Management** page, click **Task Management**
    
2.  In the **Attack Path** panel, you can view the following information: **Task ID**, **Task Type**, **Start Time/End Time**, **Status**, and Progress. The Status values include Started, Complete, Timed Out, Handling, and Failed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p844167.png)
    
3.  Find a task and click **Details** in the Actions column to view the details of the scanned assets, including the number of vulnerable assets, number of attack paths, number of assets on which the task is successfully run, number of assets on which the task fails, and list of assets.
    
    You can query and view the results of a scan task on a specific asset by task status, asset type, and asset ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p844172.png)
    

## **View attack path details**

1.  On the **Attack Path** tab of the **Cloud Security Posture Management** page, view the attack paths that are detected based on the settings of attack path scans. The following table describes the attack path details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p843990.png)
    
    **Alert metric**
    
    **Description**
    
    Severity
    
    The priority of the attack path. The priorities are Urgent, Suspicious, and Notice, which are in red, orange, and gray respectively.
    
    Attack Path Name
    
    The name of the attack path.
    
    Path Type
    
    The type of the attack path. Valid values: Abnormal AccessKey Pair, Sensitive Asset, Privilege Escalation by Role, and Privilege Escalation by User.
    
    Intruded Asset and Targeted Asset
    
    The entry point and target between which the attack path is detected.
    
    Last Occurred At
    
    The time when the attack path was last detected.
    
2.  Find an attack path and click **Details** in the Actions column to view the following information: Basic Information, Attack Path Information, Solution, and Attack Diagram.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p843989.png)
    
    -   **Basic Information**: displays the priority of the attack path, the attack path type, the time when the path was first detected, and the time when the path was last detected.
        
    -   **Intruded Asset and Asset Type** and **Targeted Asset and Asset Type**: display the instance IDs and types of the intruded assets and targeted assets. You can click an instance ID to go to the details page of the related asset in the **Assets** module.
        
    -   **Attack Path Information**: displays the logic of detecting the attack path.
        
    -   **Solution**: provides suggestions and instructions on how to remediate the attack path.
        
    -   **Attack Path Graph**: displays the relationship between the assets affected by the attack path.
        
        -   Red lines that connect nodes indicate that risks exist. You can click a red line to view suggestions on how to fix the risks.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p844042.png)
            
        -   You can click a node to view the basic information of the node and the vulnerabilities related to the node.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p844034.png)
            
        -   You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4625800371/p848816.png) icon in the upper-right corner of the attack path graph to view the node icons and their descriptions.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p850734.png)
            
        -   You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4625800371/p850257.png) icon in the upper-right corner of the attack path graph to configure the arrangement mode of the graph.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3540422371/p850735.png)
            
        -   You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4625800371/p850305.png) icon in the upper-right corner of the attack path graph to download the graph. You can share the attack path graph with relevant security administrators to improve the traceability and analysis efficiency of the targeted asset.
            

## **Add an attack path to the whitelist**

If a detected attack path can be ignored in subsequent scans, you can configure a whitelist rule for the attack path.

1.  On the **Attack Path** tab of the **Cloud Security Posture Management** page, find an attack path and click **Add to Whitelist** in the Actions column.
    
2.  In the dialog box that appears, enter a name in the **Whitelist Name** field and select an asset scope for the whitelist rule. Valid values of the asset scope:
    
    -   **All Assets**: The system no longer detects the attack path or generates alerts on all assets including new assets.
        
    -   **Current Asset**: The system no longer detects the attack path or generates alerts on the current intruded asset and targeted asset.
        
3.  Click **OK**.
    

To view information about existing whitelist rules, go to the **By Attack Path** tab on the **Whitelist Rule** tab of the **Policy Management** panel.

## **References**

-   If you want to handle vulnerabilities that are detected in assets, refer to the following topics:
    
    -   [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities)
        
    -   [Fix vulnerabilities](/help/en/security-center/use-cases/fix-vulnerabilities)
        
-   If you want to handle urgent alerts generated on assets, see [View and handle alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).
