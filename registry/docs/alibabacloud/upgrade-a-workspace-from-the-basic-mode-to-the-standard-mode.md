If your workspace is in basic mode and you need to isolate the development environment from the production environment, you can upgrade it to standard mode. This topic describes how to upgrade the workspace mode.

## Before you begin

Before you upgrade the workspace mode, understand the following:

-   The differences between workspaces in basic and standard modes, including their structure and development flows. For more information, see [Differences between workspace modes](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b).
    
-   How to create data sources and attach them in Data Development. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/) and [Prepare for data development: Attach a computing resource or cluster](/help/en/dataworks/user-guide/associate-data-sources-in-datastudio).
    

## Limits

-   Only an Alibaba Cloud account can upgrade the workspace mode.
    
-   You cannot upgrade a workspace from basic mode to standard mode if the new version of Data Development is enabled for the workspace.
    

## Upgrade policy

After you upgrade the workspace mode, the platform creates a corresponding data source for the development environment based on the production environment data source from the original basic mode workspace. This process isolates the data sources between the two environments.

-   **MaxCompute data source**: The upgrade policy depends on whether a computing resource is attached to Data Development (DataStudio). 
    
    -   If a computing resource is not attached to Data Development
        
        -   Copy the data source from the production environment to the development environment. For the data source in the development environment, set **Default Access Identity** to **Executor**.
            
        -   If the **Default Access Identity** for the production environment data source in a basic mode workspace is **Task Owner**, the **Default Access Identity** for the production environment data source is updated to **Alibaba Cloud Account** after the upgrade.
            
    -   If a computing resource is attached to Data Development
        
        The platform copies the production environment data source to the development environment. The system automatically adds the `_dev` suffix to the name of the corresponding MaxCompute project for the development environment data source. If the production project name already contains the `_dev` suffix, another `_dev` suffix is added.
        
        For example, if the production MaxCompute project name is `test_dev`, the corresponding development project name becomes `test_dev_dev` after the upgrade.
        
-   **For data sources other than MaxCompute**: The platform copies the production environment data source to the development environment. As a result, the development and production environments operate on the same physical database.
    

**Note**

This topic focuses on the scenario where a basic mode workspace with a MaxCompute data source is upgraded to standard mode.

![模式升级](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3308849761/p499577.png)

**Category**

**Before the upgrade**

**After the upgrade**

Data Source

One

A data source for the development environment is added. You can use different data sources for the development and production environments.

**Note**

-   During the upgrade, the platform generates a development data source with the same configuration as the one in the original basic mode workspace (the production data source). This isolates the development and production data sources. After the upgrade, go to the data source configuration page to view the details. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb).
    
-   After the upgrade:
    
    -   The development data source is completely isolated from the production data source. Changes to the development data source configuration do not affect the production data source.
        
    -   No development tables are added to the corresponding MaxCompute project for the development data source. You must create development tables as needed. For more information about how to create tables, see [Create and use MaxCompute tables](/help/en/dataworks/user-guide/create-and-manage-maxcompute-tables).
        

## Upgrade the workspace mode

An Alibaba Cloud account can upgrade a workspace from basic mode to standard mode by performing the following steps.

**Note**

This upgrade is irreversible. Proceed with caution.

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  On the **Workspace** > **Basic Configuration** tab, click **Upgrade To Standard Mode** next to **Mode**.
    
    **Note**
    
    You cannot upgrade a workspace from basic mode to standard mode if the new version of Data Development is enabled for the workspace.
    
3.  In the **Upgrade To Standard Mode** dialog box, select **This Upgrade Is Irreversible. Confirm That You Want To Upgrade This Workspace.** and click **Start Upgrade**.
    

## Impacts of upgrading a MaxCompute basic mode workspace to standard mode

This section describes the impacts of upgrading from basic mode to standard mode by detailing the upgrade procedure and providing examples. For more information, see [Data access and permissions in MaxCompute for workspaces in different modes](/help/en/dataworks/user-guide/data-access-behaviors-in-and-access-permissions-on-maxcompute-compute-engine-instances-of-workspaces-in-different-modes#task-2256116).

### Upgrade procedure

After a workspace is upgraded from basic mode to standard mode, DataWorks adds the members of the original workspace to the new MaxCompute development project and retains their original roles. However, the permissions of these members on the production project are revoked. Only the project owner retains permissions on the production project.

1.  The system generates a development environment project, with the project name in the format `projectname_dev`, and a corresponding development data source.
    
2.  Add members to the development environment project: The system adds the DataWorks workspace members to the development project at the engine layer using the `add user` command.![添加项目成员](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9779220761/p499603.png)
    
3.  Revoke production project permissions from original workspace members: In a basic mode workspace, a Resource Access Management (RAM) user has extensive permissions in the production environment. After the upgrade, these permissions are revoked. RAM users are only allowed to perform operations in the `_dev` project.
    

### Example scenario

For example, a company has a workspace named Workspace A in DataWorks. After an administrator clicks **Upgrade To Standard Mode**, a development environment workspace named A\_dev is created.

-   The members, roles, and resources from Workspace A are replicated in Workspace A\_dev.
    
-   Member A1 (Developer role) and Member B1 (O&M role) from Workspace A are also added to Workspace A\_dev, where their roles and permissions are retained.
    
-   Project A becomes the production project. The data permissions that users A1 and B1 had on Project A are revoked. By default, they do not have SELECT or DROP permissions on tables in the production project. This process protects the data in the production environment.
    
-   By default, the MaxCompute project used in DataStudio (Data Development) is A\_dev. To query data from the production environment in DataStudio, you must use the Project Name.Table Name format. You can only edit code for the A\_dev environment on the Data Development page. To update code in the production project (Project A), you must submit a node from A\_dev to the scheduling system and then publish it. The node publishing and approval process helps ensure the correctness of the code in the production environment.
    

**Note**

After the workspace mode is upgraded, you cannot directly access data in the production project. You must request the required permissions. By default, tables queried in DataStudio are from the development environment. To access tables in the production environment, you must first request the required permissions and then use the Project Name.Table Name format.

After the workspace is upgraded to standard mode, the previous permissions of RAM users on the production project are revoked. If your code contains hard-coded account credentials, such as an AccessKey, permission errors may occur.

### Example of behavior changes

Assume a basic mode workspace has an attached MaxCompute computing resource and is owned by an Alibaba Cloud account. After the upgrade to standard mode, the behavior of a RAM user changes as follows:

**Scenario**

**Original basic mode workspace**

**Current standard mode workspace**

Operate on resources (table/resource/function)

Direct operations succeed.

**Note**

In a basic mode workspace, tasks are executed directly with the permissions of the Alibaba Cloud account. Therefore, even when a RAM user performs an operation, the user has the same permissions as the Alibaba Cloud account. Because the Alibaba Cloud account has high-level permissions, the RAM user can directly operate on production data, which prevents effective access control.

-   Development environment resources: A RAM user can directly operate on development environment resources using commands in DataStudio.
    
-   Production environment resources: A RAM user cannot directly operate on production environment resources in DataStudio.
    
    **Note**
    
    By default, a RAM user in a standard mode workspace does not have permissions on the production environment. Permissions on production tables must be requested through an approval process in [Security Center](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute).
    

Environment access and accounts

Basic mode has only a production environment. All commands operate directly on the production environment.

-   Data Development: Uses the Alibaba Cloud account to access production resources.
    
-   Production Operation Center: Uses the Alibaba Cloud account to access production resources.
    

-   Data Development: Uses a RAM user or personal account to access resources. By default, it accesses and writes to development resources.
    
-   Production Operation Center: Uses a specified account to access and write to production resources.
    

Access resources in the corresponding environment

projectname.tablename/resource/function

-   Access development resources: projectname\_dev.tablename/resource/function
    
    **Note**
    
    The DataStudio interface accesses development resources by default. This means you can directly access a table, resource, or function in SQL without specifying the project name.
    
-   Access production resources: projectname.tablename/resource/function
    
    **Note**
    
    The production Operation Center accesses production resources by default. This means you can directly access a table, resource, or function in SQL without specifying the project name.
