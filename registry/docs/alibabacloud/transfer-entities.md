DataWorks provides automatic transfer and manual transfer mechanisms that you can use to transfer the entities of modules in your workspace to a specific entity receiver. The entities include resources and functions. The two mechanisms are implemented based on the default transfer rule that is provided by DataWorks or a custom workspace-level transfer rule that you configure. This topic describes how to configure an entity transfer rule, use the rule to transfer entities, and view transfer logs.

## Background information

The most common scenario where entity transfer needs to be performed is employee resignation. Entity transfer guarantees security and stability of DataWorks services when employees resign. This prevents impacts of employee resignation on your business.

After an employee resigns, the Alibaba Cloud account used by the employee may or may not be deleted. For entity transfer in the two scenarios, DataWorks provides the automatic and manual transfer mechanisms. DataWorks provides a default transfer rule. DataWorks also allows you to configure a custom workspace-level or tenant-level transfer rule on the Transfer configuration tab of the Entity transfer page.

## Limits

You can use only the tenant security administrator role or tenant administrator role to configure entity transfer settings on the Entity transfer page. For more information about permission management for tenants, see [Manage permissions on global-level services](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services#task-2173738).

## Entity transfer logic

If you configure a custom transfer rule and enable the rule, the entities that you want to transfer are preferentially transferred to the entity receiver that you specify in the rule. If the entity receiver that you specify in the rule does not exist or is removed from the workspace, the system performs the transfer based on the default transfer rule.

![转交逻辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4514983561/p358163.png)

-   **Trigger condition for automatic resource transfer at the tenant level**: If a RAM user is deleted, the automatic transfer mechanism is triggered. The desired receivers to which entities are transferred are determined in the order of **primary responsible person** > **secondary responsible person** > **tertiary responsible person**.
    
-   **Trigger condition for automatic transfer at the workspace level**: If a RAM user is deleted or removed from a workspace, the automatic transfer mechanism is triggered.
    
    -   If no **custom** **responsible person** is configured for the workspace, the transfer is performed based on the default transfer rule after the RAM user is removed from the workspace. By default, the entities that belong to the RAM user are transferred to another RAM user to which the workspace administrator role is assigned in the workspace. If no RAM users in the workspace are assigned the workspace administrator role, the entities are transferred to the Alibaba Cloud account to which the RAM user belongs.
        
    -   If you configure a custom transfer rule for the workspace and specify an entity receiver that is a member of the workspace in the rule, the transfer is performed based on the rule that you configure.
        
-   **Trigger condition for manual transfer**: If a RAM user is not deleted and remains a member of a workspace, you can go to the **Entity transfer** page to click [Immediate execution of referral](#title-kql-mse-e1l) to start an entity transfer task to perform entity transfer at the **tenant level** or **workspace level**.
    
    -   If no custom transfer rule is configured for the workspace, the transfer is performed based on the default transfer rule after the RAM user is removed from the workspace or is deleted.
        
    -   If you configure a custom transfer rule for the workspace and specify an entity receiver that is a member of the workspace in the rule, the transfer is performed based on the rule that you configure.
        
    
    For more information about how to configure a custom workspace-level or tenant-level transfer rule, see the [Configure a workspace-level entity transfer rule](#section-buz-v1r-eac) or "Configure a tenant-level entity transfer rule" section in this topic.
    

**Note**

-   If the entity receiver that you specify in a custom transfer rule is the access identity of a MaxCompute compute engine, the access identity of the MaxCompute compute engine is changed to the entity receiver after the transfer is performed based on the rule. For information about the identities that can be used to access a MaxCompute compute engine, see [Manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-qxa-30s-zlr).
    
-   DataWorks allows you to configure a custom transfer rule for entities in a single workspace.
    

## Go to the Entity transfer page

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select a desired region. In the left-side navigation pane, choose **Data Governance** > **Security Center**. On the page that appears, click **Go to Security Center**.
    
2.  In the left-side navigation pane of the Security Center page, choose **Security policy** > **Entity transfer** to go to the Entity transfer page.
    

## View the entities that can be transferred

On the Transfer configuration tab, you can view the entity resources that can be transferred, the modules to which entity resources belong, and transfer descriptions.![使用说明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125034471/p355967.png)

## Perform immediate entity transfer

In the **Entity Resources** section of the **Transfer configuration** tab on the **Entity transfer** page, you can manually transfer entity resources of **RAM users that are not deleted** in the workspace to specified personnel.

1.  If a RAM user is not deleted and remains a member of the workspace, go to the **Transfer configuration** tab of the **Entity transfer** page and click **Immediate execution of referral** to transfer the entities that belong to the RAM user.
    
    ![立即执行转交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125034471/p356876.png)
    
2.  In the **Immediate execution of referral** dialog box, configure the **Original Responsible Person** and **Transfer To Target Responsible Person** parameters and click **Confirm referral**. Then, **tenant-level and workspace-level entity resources of the** ****original responsible person**** **are all transferred to the desired responsible person**.
    
    **Note**
    
    If specified personnel do not exist or are removed from the workspace, entities are transferred based on the default transfer rule.
    
    ![执行转交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5234347471/p357006.png)
    

## **Configure a tenant-level entity transfer rule**

In the **Tenant-level entity to target responsible person** section, you can configure a tenant-level automatic entity transfer process when a RAM user is deleted. Desired responsible persons to which entities are transferred are determined in the order of **primary responsible person** > **secondary responsible person** > **tertiary responsible person**. You can click **Revised** in the Transfer to target responsible person column to specify entity receivers for different levels of responsible persons.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8740587471/p955169.png)

In the **Tenant-level entity to target responsible person** section, click **Revised** in the **Transfer to target responsible person** column. In the Select the target responsible person dialog box, specify entity receivers for different levels of responsible persons.

-   **Primary responsible person**: left empty by default. You must manually specify an entity receiver.
    
-   **Secondary responsible person**: the tenant administrator, which cannot be an Alibaba Cloud account.
    
-   **Tertiary responsible person**: your Alibaba Cloud account by default.
    

## Configure a workspace-level entity transfer rule

In the **Workspace-level entity to target owner** section, you can specify **responsible persons** to which workspace-level entities are transferred when a RAM user is deleted, a member is removed from the workspace, or immediate workspace-level entity transfer is performed. If you do not configure a specified **responsible person**, responsible persons to which entities are transferred are determined in the order of **secondary responsible person** > **tertiary responsible person** > **fourth responsible person** based on the system default rule.

-   **Primary responsible person**: a specified person.
    
-   **Secondary responsible person**: the workspace administrator by default.
    
-   **Tertiary responsible person**: the tenant administrator by default. Your Alibaba Cloud account cannot be the tertiary responsible person.
    
-   **Fourth responsible person**: your Alibaba Cloud account by default.
    

**Note**

If multiple responsible persons exist, select the member who is first added to the workspace.

1.  In the Workspace-level entity to target owner section, search for the desired workspace.
    
    ![搜索](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125034471/p366871.png)
    
2.  Configure an entity receiver.
    
    1.  In the **Workspace-level entity to target owner** section, configure a custom workspace-level entity transfer rule. Transfer rules are classified into the default transfer rule and custom transfer rules. Find the workspace that you want to manage and click **Revised** in the **Transfer to target responsible person** column. In the **Select the target responsible person** dialog box, select a responsible person. When the transfer condition is triggered, the system performs the transfer based on the custom transfer rule that you configure. If the rule is disabled for the workspace, or the entity receiver that you specify does not exist or is removed from the workspace, the system performs the transfer based on the default transfer rule.
        
        ![配置实体转交规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125034471/p367110.png)
        
        -   **Default transfer rule**: The default transfer rule is enabled by default and cannot be disabled. The default transfer rule takes effect if no entity receiver is specified for the workspace whose entities you want to transfer or the entity receiver specified for the workspace is invalid.
            
            **Note**
            
            If the entity receiver is removed from the workspace before the transfer, the entity receiver is considered invalid.
            
        -   **Custom workspace-level transfer rule**: Custom workspace-level transfer rules are disabled by default. If you need to specify an entity receiver, you can select a member in a workspace as the entity receiver. You can also enable or disable a custom transfer rule based on your business requirements. If you enable a custom transfer rule, the rule takes effect when entities are transferred.
            
            **Note**
            
            If you enable a custom transfer rule, the entities that you want to transfer are preferentially transferred to the entity receiver that you specify in the rule. If the entity receiver that you specify in the rule does not exist or is removed from the workspace, the system performs the transfer based on the default transfer rule.
            
    2.  Turn on or off the switch in the Operation column that corresponds to the workspace to enable or disable the custom transfer rule.
        
        -   **Turn on the switch**: The entities that you want to transfer are transferred to the entity receiver that you specify. If the entity receiver that you specify does not exist or is removed from the workspace, the entities are transferred to the entity receiver specified in the default transfer rule.
            
        -   **Turn off the switch**: The entities that you want to transfer are transferred to the entity receiver specified in the default transfer rule.
            

## View transfer logs

On the **Transfer log** tab of the Entity transfer page, you can view information such as **Time of submission**, **Transfer method**, and **Transfer status**. You can also click **Download log** in the Operation column that corresponds to a log to view entity transfer details.

**Note**

Logs are retained for 183 days after the time specified by the **Time of submission** parameter. The logs that are generated for more than 183 days cannot be downloaded.

![查看转交日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125034471/p355998.png)
