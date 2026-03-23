After creating a workspace, proper management is essential for its smooth and secure operation. This article explains how to perform core management tasks, including viewing configuration details, modifying basic information, adding a data source, and disabling or deleting the workspace.

## Permissions

-   Only an **Alibaba Cloud account** or a RAM user with the **AliyunDataWorksFullAccess** permission can delete or disable a workspace.
    
-   Only a **Workspace Administrator** can modify workspace information, add data sources, and associate compute engines.
    

## Create a workspace

You perform all development work in a workspace. Before you can develop tasks, you must [create a workspace](/help/en/dataworks/user-guide/create-a-workspace).

## Configure a workspace

### **Go to the workspace configuration page**

1.  Go to the [DataWorks workspace](https://dataworks.console.aliyun.com/workspace/list) page. From the top menu bar, select your region.
    
2.  Find the target workspace and click **Details** in the **Operation** column.
    
    > You can also click the **Manage** button to go to the **Management** **Center**. You can view and manage settings from either page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0487024671/p1014247.png)
    

### Configure basic information

1.  In the **General Configurations** section, view and configure the basic information for the workspace.
    
    **Parameter**
    
    **Description**
    
    **Workspace ID**
    
    The unique identifier for the workspace. This **cannot be modified** after creation.
    
    **Workspace Name**
    
    **Status**
    
    The status of the workspace. You can manually disable a workspace.
    
    -   **Normal**: The workspace is running correctly.
        
    -   **Disabled**: The workspace has been manually disabled.
        
    -   **Overdue**: The workspace has been suspended due to overdue payments.
        
    -   **Other statuses**: If you encounter an unexpected status, contact technical support.
        
        > If a workspace fails to be created, its status will be **Initialization Failed**. You can try creating the workspace again.
        
    
    **Display Name**
    
    The display name and description used to identify the workspace. Accounts with the **Workspace Administrator** role can modify this.
    
    **Description**
    
    **Mode**
    
    When you create a workspace, if you enable **Isolate Development and Production Environments**, the workspace uses **Standard Mode**. Otherwise, it uses **Basic Mode**.
    
    **Important**
    
    A **Basic Mode** workspace where the new Data Studio feature is not enabled can be upgraded to **Standard Mode**. The upgrade option is visible only to the Alibaba Cloud account. Workspaces with the new Data Studio feature enabled **cannot be upgraded** at this time. If you need to upgrade, contact technical support. For more information, see [Upgrade a workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).
    
    **Owner**
    
    The owner of the current workspace. The owner can delete or disable the workspace. This cannot be modified.
    
    **Schedule PAI Nodes**
    
    To schedule PAI algorithm tasks in Data Studio, you must enable this switch. Once enabled, it cannot be disabled.
    
    > If you select **Create AI Workspace with Same Name** when you create the workspace, this option is enabled by default.
    
2.  (Optional) In the **General Configurations** > **Individual Development Environment** section, configure the automatic shutdown policy for instances in the current workspace.
    
    **Important**
    
    This feature is available only in some regions. Check the console to confirm its availability in your region.
    
    You can configure this option only for workspaces where the **new Data Studio feature is enabled**. The system automatically shuts down any running personal development environment instance that meets the criteria of this policy. For more configuration details, see [Set a workspace-level automatic shutdown policy](/help/en/dataworks/user-guide/personal-development-environment/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8786530671/p1014282.png)
    
3.  In the **General Configurations** > **Security Settings** section, you can control basic security operations for the workspace.
    
    **Parameter**
    
    **Description**
    
    **Download SELECT Result**
    
    Specifies whether users can download data query results during development. If disabled, users cannot download the results of **SELECT** statements.
    
    **Change Node Owner by RAM User**
    
    Specifies whether RAM users can change the owners of their nodes.
    
    **Sandbox Whitelist (The whitelist contains IP addresses or domain names that can be accessed by Shell tasks.)**
    
    Specifies the IP addresses or domain names that a Shell task can directly access when it runs on a shared resource group.
    
    **Important**
    
    You must enter public IP addresses or domain names. For internal services, we recommend using an exclusive resource group to ensure network connectivity. For more information, see [DataWorks resource groups](/help/en/dataworks/dataworks-resource-group-overview).
    

### **Add a data source or associate a compute engine**

DataWorks supports adding various types of compute engines, such as MaxCompute, E-MapReduce, and Realtime Compute for Apache Flink. It also supports data synchronization between different compute engines. In addition, you can run compute tasks on MaxCompute, Hologres, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, and ClickHouse compute resources and manage data stored in data sources within Data Studio.

-   To run data synchronization tasks, you must [create a corresponding data source](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the workspace.
    
-   To run scheduled tasks, you must [associate a compute engine](/help/en/dataworks/user-guide/create-and-manage-compute-resources/) in the workspace.
    

### Configure workspace members and roles

In the **Workspace Members** section, you can add, modify, and delete workspace members and grant roles to them. In the **Workspace Roles** section, you can view and manage the roles within the current workspace.

1.  **Add workspace members**: When you add a RAM user to the current workspace, you need to assign them a workspace role. The user then gains the permissions associated with that role. For more information about authorization, see [Add workspace members and manage member role permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
    **Note**
    
    DataWorks allows you to grant RAM users custom or preset workspace-level roles. Custom roles must be defined by a Workspace Administrator in the **Workspace Roles** section. Different roles have different module permissions within the workspace. For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services).
    
2.  **Manage member roles**: You can view preset or custom roles in the workspace. If preset roles do not meet your business needs, you can create custom roles. You can configure a role's permissions for DataWorks workspace modules and also configure permission mappings to MaxCompute project roles. For more information about managing workspace role permissions, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services).
    
    **Note**
    
    Only an Alibaba Cloud account or a RAM user with the **Admin** or **Super\_Administrator** role for the MaxCompute project can configure permission mappings.
    
3.  **View the permission list**: On the **Permissions** tab, you can view the specific feature permissions for each preset workspace role. For more information, see [Appendix: List of permissions for preset roles (workspace level)](/help/en/dataworks/user-guide/permissions-of-built-in-workspace-level-roles).
    

## Delete or disable a workspace

In the **Workspaces** list of the [DataWorks Console](/help/en/dataworks/user-guide/overview-of-the-dataworks-console), click the ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7056933961/p421690.png) icon in the **Actions** column for the target workspace, and select **Delete Workspace** or **Disable Workspace**.

-   **Delete Workspace**: Deleting a workspace also deletes all its development assets, such as code. This action is irreversible. Proceed with caution.
    
    **Important**
    
    Before you delete a workspace, we recommend that you go to the Operation Center to suspend or delete related scheduled tasks. Also, go to DataService Studio to take offline and delete any deployed APIs. This prevents further billing after the workspace is deleted. If you are still being billed after deleting a workspace, [submit a ticket](https://smartservice.console.alibabacloud.com/) to contact technical support.
    
-   **Disable Workspace**:
    
    -   After a workspace is disabled, scheduled tasks within it will no longer generate instances. However, instances that were generated before the workspace was disabled will run automatically at their scheduled time. You cannot log in to the workspace to view their status.
        
    -   After a workspace is disabled, its associated compute engine services remain and may continue to incur storage fees. These fees are charged by the respective compute engine, not by DataWorks. For questions about storage billing, please contact the support team for the relevant Compute Engine.
        

## Next steps

After you activate DataWorks, you must also purchase resource groups for data synchronization, scheduled tasks, or DataService Studio. For more information, see [Manage resource groups](/help/en/dataworks/user-guide/resource-group-management/).
