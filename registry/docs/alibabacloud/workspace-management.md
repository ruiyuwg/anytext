When your team collaborates on development in DataWorks, you may face challenges such as project isolation, permission allocation, and compute resource management. A workspace is the core unit that helps you solve these problems. It provides an independent environment where you can organize development tasks, assign roles to members, and attach the required compute engines. This ensures an orderly, secure, and efficient data development process.

## Workspace overview

A workspace is the **basic unit** in DataWorks for developing tasks and managing member permissions. All development work in DataWorks is performed within a workspace. A workspace can use multiple data sources to manage stored data. You can also attach multiple computing resources for operations such as task development and task scheduling. A workspace administrator adds members to the workspace and assigns them different roles. These roles can include Workspace Administrator, Data Analyst, Deployer, Developer, Data Governance Administrator, Model Designer, Visitor, O&M, Project Owner, and Security Administrator. This enables business scenarios that require multi-role collaboration.

## Select a workspace type

DataWorks provides two workspace modes: basic mode and **standard mode**. The two modes differ in development behavior and data security. For actual development, we recommend that you use a **standard mode** workspace. For more information, see [Workspace mode differences](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b) and [Upgrade a workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).

## Core workspace operations

**Core operation**

**Description**

**References**

**Lifecycle management**

**Create a workspace**

Plan and create workspaces for different business scenarios to implement business isolation.

> DataWorks has a built-in default workspace for new users to quickly try the service. Do not use this workspace for production task development. For more information about the differences between the default workspace and a custom workspace, see [Built-in default workspace](/help/en/dataworks/user-guide/create-a-workspace#4485f6f51f678).

[Plan a workspace](/help/en/dataworks/user-guide/plan-workspaces)

[Create a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-yid-23k-8wv)

**Delete a workspace**

If a workspace and its assets are no longer needed, delete the workspace. This completely cleans up resources and prevents potential billing or data residue.

[Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#task-2481177)

[Upgrade a workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb)

**Disable a workspace**

If you do not need a workspace temporarily but want to keep its code and configurations, disable the workspace. This pauses task scheduling but retains historical data so you can enable the workspace later.

**Configure workspace information**

View workspace configurations. You can also modify some configurations, such as upgrading the workspace mode.

**Resource configuration**

**Attach a computing resource**

Attach computing resources, such as MaxCompute, EMR Serverless Spark, and Hologres, to perform operations like task development and recurring scheduling in the workspace.

> When you attach a computing resource, the system automatically creates a corresponding data source.

[Manage computing resources](/help/en/dataworks/user-guide/create-and-manage-compute-resources/)

**Add a data source**

Add data sources, such as MaxCompute, E-MapReduce, and ClickHouse, to connect to various data storage services. These services act as the data source for task execution in DataWorks and provide the foundation for data synchronization and analysis.

**Important**

Before you create a data source, understand the [differences between workspace modes (basic mode vs. standard mode)](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b). The data development process and access control depend on the features of the mode you select.

[Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/)

**Attach a resource group**

A DataWorks resource group is a unit of computing power required to execute tasks. Attach a resource group to a workspace to manage computing power.

[Resource Group Management](/help/en/dataworks/user-guide/resource-group-management/)

**Team and permissions**

**Plan and assign member roles**

-   After you create a workspace, add Resource Access Management (RAM) users to it for collaborative development.
    
-   When you add members, you can grant them different roles at the workspace level to control access to specific features.
    

**Important**

Before you assign permissions, understand the DataWorks [workspace-level permission model](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).

[Add members to a workspace and manage their role permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3)

## Recommendations for production use

Follow these guidelines when you plan and create workspaces:

-   **Plan workspaces in advance**: Before you create a workspace, see [Plan a workspace](/help/en/dataworks/user-guide/plan-workspaces). Design a well-structured organization chart based on your line-of-business, project, or data domain to prevent future management issues.
    
-   **Name workspaces clearly**: Use names that have clear business meanings. For example, use `finance_tax_report` for a tax report project in the finance domain.
    
    > If a node is referenced across workspaces, include the workspace name abbreviation in the node name for quick identification.
    
-   **Workspace mode**: The standard mode supports physical isolation between the development and production environments. For actual development, we recommend that you use a **standard mode** workspace.
    
-   **Workspace permissions**: An Alibaba Cloud account should create the workspace and grant the **Workspace Administrator** role to RAM users. As a best practice, a user should not have both the **Developer** and **O&M** roles at the same time.
    
-   **Default workspace**: Do not use the default workspace for production task development.
    

## What to do next

After you create a workspace and assign roles to its members, you can perform operations such as [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/), [Data Development](/help/en/dataworks/user-guide/overview-new-data-studio/), and [Data Analysis](/help/en/dataworks/user-guide/data-analysis-overview/).
