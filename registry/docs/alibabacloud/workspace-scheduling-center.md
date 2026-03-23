Workspaces centralize compute resources and control member access across AI development workflows.

## **Limitations**

-   Workspace administrators and owners can modify workspace configurations.
    
-   Voice call, SMS, and email notifications are available in China (Hangzhou), China (Shanghai), and China (Ulanqab) regions only.
    

## **Prerequisites**

-   **Alibaba Cloud account**: Main account can perform all tasks without additional permissions.
    
-   **RAM user**: Grant the [AliyunPAIFullAccess](/help/en/pai/activate-and-grant-permissions-on-required-cloud-services/#1532fe2fe2cv0) permission to sub-accounts. **`**AliyunPAIFullAccess**` grants full access to all PAI resources. Assign with caution. Use your Alibaba Cloud account when possible.**
    

## **Create a workspace**

Open the [PAI workspace list](https://pai.console.alibabacloud.com/#/workspace/list) and click **Create Workspace**:

1.  Configure **Basic Information**.
    
    -   **Add Member**: Add members and assign workspace roles. You can add members after workspace creation. For more information, see [Configure members and roles](#78bcf5031ezck).
        
    -   **Workspace Default Storage**: Default storage location for workspace. Stores temporary data and models generated during model training and other tasks.
        
2.  Configure **Resource associations**.
    
    -   **Intelligent Computing Lingjun Resources**: High-performance computing resource groups for model development and training.
        
    -   **General Computing Resources**: Dedicated general computing resources for AI development and training. For more information, see [Create resource group and purchase general computing resources](/help/en/pai/user-guide/create-and-manage-general-training-resources/).
        
    -   **MaxCompute Resources**: CPU resources from MaxCompute for specific algorithms in [Designer](/help/en/pai/user-guide/machine-learning-designer-overview). For more information, see [MaxCompute resource quotas](/help/en/pai/user-guide/manage-maxcompute-resources).
        
    -   **Fully Managed Flink Resources**: Large-scale distributed model training in PAI. For more information, see [Fully managed Flink resource management](/help/en/pai/user-guide/flink-resource-management).
        
    
    For more information about AI computing resources, see [AI computing resources](/help/en/pai/user-guide/ai-computing-resource-management/).
    
3.  Confirm configuration and enter workspace.
    
    Access all PAI features across the AI lifecycle through the navigation pane. For more information, see [AI development](/help/en/pai/user-guide/model-training-2).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912249.png)
    

## **Manage a workspace**

Open the [Workspace Details](https://pai.console.alibabacloud.com/#/workspace/detail/base) page and click **Configure Workspace** in the upper-right corner:

#### **Configure computing resources**

View and associate computing resources.

**Note**

You cannot disassociate computing resources already associated with workspace. Contact your business manager to disassociate resources.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912398.png)

-   **Intelligent Computing Lingjun Resources**: High-performance computing resource groups for model development and training.
    
-   **General Computing Resources**: Dedicated general computing resources for AI development and training. For more information, see [Create resource group and purchase general computing resources](/help/en/pai/user-guide/create-and-manage-general-training-resources/).
    
-   **MaxCompute Resources**: CPU resources from MaxCompute for specific algorithms in [Designer](/help/en/pai/user-guide/machine-learning-designer-overview). For more information, see [MaxCompute resource quotas](/help/en/pai/user-guide/manage-maxcompute-resources).
    
-   **Fully Managed Flink Resources**: Large-scale distributed model training in PAI. For more information, see [Fully managed Flink resource management](/help/en/pai/user-guide/flink-resource-management).
    

For more information about AI computing resources, see [AI computing resources](/help/en/pai/user-guide/ai-computing-resource-management/).

#### **Configure members and roles**

Add members and assign roles when multiple users need workspace access. [View role-to-permission mapping](/help/en/pai/appendix-list-of-roles-and-permissions) to assign appropriate roles.

-   **Add members/roles**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912503.png)
    
    You can assign multiple roles to a single RAM user. Available roles:
    
    **Role type**
    
    **Description**
    
    **Workspace Member**
    
    Basic workspace roles:
    
    -   **Administrator**: Manage workspace members, resource groups, and workspace assets.
        
    -   **Algorithm Developer**: Perform development and model training.
        
    -   **Algorithm O&M Engineer**: Manage task priority, model deployment, and service monitoring.
        
    -   **Labeling Administrator**: Manage intelligent labeling operations.
        
    -   **Visitor**: View workspace assets (read-only).
        
    
    **MaxCompute development**
    
    MaxCompute development role (developer role in DataWorks). Grants permissions for MaxCompute data development. Assign to RAM users who submit PAI tasks to MaxCompute.
    
    **Custom workspace role**
    
    Add a custom role:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912582.png)
    
    Permission levels:
    
    -   **No Permissions**: No access to product module.
        
    -   **Read-only**: View own resources and public resources in product module.
        
    -   **Modify/Execute**: Edit and run own resources in product module.
        
    -   **Full Access**: Manage all resources in product module.
        
    
-   **Modify member roles**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912594.png)
    
    Member and role rules:
    
    -   Each member must have at least one role.
        
    -   You cannot delete the **Owner** role. The Alibaba Cloud account or RAM user that creates the workspace automatically becomes **Owner** and can manage workspace members, resource groups, and workspace assets.
        
    -   PAI and DataWorks workspaces are interconnected. Administrator, Visitor, and Developer roles are shared between them. When you remove a member's Administrator, Visitor, or Developer role in PAI and it is their last role in the corresponding DataWorks workspace, DataWorks automatically removes the member. This may trigger an [entity transfer](/help/en/dataworks/user-guide/transfer-entities).
        

#### **Configure resource scheduling**

PAI provides workspace-level resource management and scheduling. Administrators can configure resource scheduling based on business requirements. For more information, see [Configure resource policies](/help/en/pai/user-guide/scheduling-configuration).

#### **Configure event notifications**

Configure event notifications to monitor **DLC Jobs**, **Pipeline Jobs**, and **DSW instances** status, or trigger downstream operations when **Model** status changes. For more information, see [Event notification configuration](/help/en/pai/user-guide/event-notification-configuration).

#### **Configure storage path**

Configure default storage path for workspace.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912408.png)

-   Default storage location for workspace. Stores temporary data and models generated during model training and other tasks.
    
-   When **Workflow Data Storage** path is set in Designer, that path takes precedence when a pipeline runs.
    

#### **Configure SLS**

Configure log forwarding for DSW instances and DLC jobs to Log Service (SLS) for custom analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912468.png)

**Parameter**

**Description**

SLS Project

Resource management unit in Log Service (SLS) for resource isolation and control. [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) if none are available.

LogStore

Unit for collecting, storing, and querying log data in SLS. [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb) if none are available.

Modules for log forwarding to SLS

Supports log forwarding for DSW instances and DLC jobs.

#### **General configurations**

General configuration options for workspace. **Restart instances after toggling a switch.**

**DLC configuration**:

-   **Access node containers**: Controls whether users can enter compute node containers of DLC jobs for debugging or troubleshooting. When enabled, authorized users can access containers through a terminal.
    

**DSW configurations**:

-   **Log on to instances from public network using SSH**: Whether users can connect to DSW instances over internet through SSH.
    
-   **Open instances from public network**: Whether users can access DSW instances over internet.
    
-   **Limit public network access speed**: Whether to limit network speed when DSW instances access internet through a dedicated NAT gateway. Prevents individual instances from consuming excessive bandwidth and maintains stability of shared resources.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2950331671/p1019559.png)

## **FAQ**

### **Why does "name already exists" error occur when creating a workspace?**

A workspace with the same name already exists in DataWorks, even when it does not appear in your PAI workspace list. PAI and DataWorks workspaces are interconnected. Choose a unique name for your workspace.

### Why is the list page empty when setting up SLS log forwarding?

**Error message**: `denied by sts or ram, action: log:ListProject, resource: acs:log.....`

**Cause**: User lacks read permission for SLS Logstore.

**Solution**: Grant Logstore permissions to user in the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/overview).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6602724671/p1028593.png)

Set authorized entity to a RAM user or RAM role, then select the `AliyunLogFullAccess` policy.

For granular SLS permissions, open the [Simple Log Service console](https://sls.console.alibabacloud.com). In the project requiring authorization, use Permission Assistant to generate a custom RAM policy.  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6602724671/p1028598.png)  
  
  
  
  
  
  
  

### Why does the request fail when setting up SLS log forwarding?

**Error message**: `Modify configuration failed [SLS] cannot init client for sis service: com.alibaba.pai.workspace.common.exception.ServiceExceptionV2: No Privilege error: {0}`

**Cause**: User lacks permission to enable or disable SLS Logstore forwarding.

**Solution**: Grant Logstore forwarding permissions to user in the [RAM console](https://ram.console.alibabacloud.com/overview) by configuring a custom authorization policy:

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "log:GetProductDataCollection",
                "log:CloseProductDataCollection",
                "log:OpenProductDataCollection"
            ],
            "Resource": "*"
        }
    ]
}
```

For granular control, modify the `Resource` section to specify resources.

### **Why do some EAS services appear in multiple workspaces?**

**Cause**: EAS services are bound to the workspace where they were created. Services may appear in multiple workspaces if:

-   You have permissions across multiple workspaces and the services were created with shared access.
    
-   Services created before workspace isolation was enforced may not have workspace binding.
    

**Solution**:

-   When creating EAS services, ensure you select the correct workspace in the deployment configuration to maintain resource isolation.
    
-   To isolate EAS services by project, create separate workspaces for each project and deploy services within their respective workspace. For more information about workspace permissions, see [Use workspaces to manage permissions](/help/en/pai/manage-permissions-through-workspaces).
