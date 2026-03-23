DataWorks provides workspaces in basic mode and in standard mode. This topic describes the characteristics of permission management for data in MaxCompute compute engines associated with workspaces in different modes. This topic also describes the differences between the data access behaviors in MaxCompute compute engines in the development and production environments.

## Prerequisites

-   You are familiar with the [differences between a workspace in basic mode and a workspace in standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b).
    
-   You are familiar with the details of [permission management for MaxCompute](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance#task-2256464).
    

## Usage notes

**Item**

**Description**

**References**

Characteristics of permission management for MaxCompute compute engines associated with workspaces in different modes

If you associate a MaxCompute compute engine with workspaces in different modes, the environments in which the MaxCompute compute engine is used vary based on the workspace mode. Therefore, data access behaviors, required access permissions, and data security levels in workspaces in different modes vary.

[Differences on permission management for MaxCompute compute engines associated with workspaces in different modes](#section-j8b-tey-v2k)

Data access behaviors in MaxCompute compute engines associated with workspaces in different modes

Workspaces in different modes have different numbers of MaxCompute compute engines and provide different environments. Therefore, resources that are accessed in different environments by default and the methods that can be used to access the resources vary.

[Differences on data access behaviors in MaxCompute compute engines associated with workspaces in different modes](#section-mf5-e5z-i70)

Naming formats of tables in MaxCompute compute engines associated with workspaces in different modes

Naming formats of tables in MaxCompute compute engines associated with workspaces in different modes must be distinguished to prevent misoperations in the production environment.

[Naming formats of tables in MaxCompute projects associated with workspaces in basic mode and standard mode](#section-yfa-xni-n2p)

## Differences on permission management for MaxCompute compute engines associated with workspaces in different modes

In different workspace modes, the environments in which a MaxCompute compute engine is used are different. MaxCompute compute engines associated with workspaces in different modes have different permission management characteristics, and workspaces in different modes have different benefits and risks. The following table describes the details.

**Item**

**Basic mode**

**Standard mode**

Permissions

In a workspace in basic mode, the Develop role of the workspace is mapped to the Role\_Project\_Dev role of the associated MaxCompute compute engine.

-   The Develop role of the workspace can be used to read all data in the MaxCompute compute engine.
    
-   Workspaces in basic mode provide only the production environment. Therefore, after the Develop role of a workspace is mapped to the Role\_Project\_Dev role of the MaxCompute compute engine, the Develop role is granted management permissions on data in the MaxCompute compute engine in the production environment.
    

In a workspace in standard mode, the Develop role of the DataWorks workspace is mapped to the Role\_Project\_Dev role of the associated MaxCompute compute engine in the development environment.

-   The Develop role of the workspace can be used to read all data in the MaxCompute compute engine in the development environment.
    
-   The Develop role of the workspace is not mapped to a role of the associated MaxCompute compute engine in the production environment. Therefore, the Develop role of the DataWorks workspace cannot be used to access the data in the MaxCompute compute engine in the production environment.
    

Benefits

Workspaces in basic mode are simple and easy to use.

You need to only assign the Develop role to development engineers to complete all data warehouse development operations.

Workspaces in standard mode are secure and standardized.

-   Workspaces in standard mode provide a secure and standardized process to help you deploy and manage nodes, including features such as code review and code check by using the diff command. This ensures the stability of the production environment and prevents unexpected outcomes such as dirty data spreading and node errors caused by illogical code.
    
-   Data-related activities are effectively managed, and data security is ensured.
    

Risks

Workspaces in basic mode impose risks on stability and security.

-   The Develop role of a workspace in basic mode can be used to create, modify, or commit a node to the scheduling system without obtaining approval. This makes the production environment unstable.
    
-   If a MaxCompute compute engine is associated with a workspace in basic mode, the Develop role of the workspace is automatically granted the read and write permissions on all tables of the MaxCompute compute engine and can be used to create, delete, or modify tables. This imposes risks on data security.
    

The data development and production process is complex. In most cases, the process involves more than one developer.

## Differences on data access behaviors in MaxCompute compute engines associated with workspaces in different modes

MaxCompute allows you to access resources across projects. Users that are assigned the Develop role can directly access resources in a MaxCompute compute engine in the production environment from DataStudio (the development environment). Workspaces in different modes have different numbers of MaxCompute compute engines and provide different environments. Behaviors of access to resources in MaxCompute compute engines in the development environment and those in the production environment are different. The following table describes the differences.

**Item**

**Workspace mode**

**DataStudio**

**Operation Center**

Accounts or roles that can be used to perform operations

Standard mode

Current logon user

Accounts or roles that are specified to perform operations for the scheduling engine

Basic mode

Accounts or roles that are specified to perform operations for the scheduling engine

**Note**

In a workspace in basic mode, if an Alibaba Cloud account is specified to perform operations for the scheduling engine, the Alibaba Cloud account is used to run tasks, regardless of whether the Alibaba Cloud account is the current logon user that performs operations.

Environment in which resources reside

Standard mode

projectname\_dev.tablename/function/resource

projectname.tablename/function/resource

Basic mode

projectname.tablename/function/resource

Accounts used to access resources

Standard mode

Statement 1: `select col1 from tablename`

-   Use your personal account to access the
    
-   projectname\_dev.tablename table in the development environment.
    

Statement 2: `select col1 from projectname.tablename`

-   Use your personal account to access the
    
-   projectname.tablename table in the production environment.
    

**Note**

By default, RAM users that are not specified to perform operations for the scheduling engine do not have permissions to access the data in the production environment. If you want to access the data as a RAM user, you must request permissions to access tables in the production environment in Security Center for the RAM user.

Statement used for the access: `select col1 from tablename`

-   Use an account or role specified to perform operations for the scheduling engine to access
    
-   the projectname.tablename table in the production environment.
    

Basic mode

Statement used for the access: select col1 from tablename

-   Use an account or role specified to perform operations for the scheduling engine to access
    
-   the projectname.tablename table in the production environment.
    

**Note**

In a workspace in basic mode, if an Alibaba Cloud account is specified to perform operations for the scheduling engine, the Alibaba Cloud account is used to access resources, regardless of whether the Alibaba Cloud account is the current logon user that performs operations.

Permissions required to access resources

Standard mode

Permissions that are granted to personal accounts

Permissions granted to the accounts or roles that are specified to perform operations for the scheduling engine

Basic mode

Permissions granted to the accounts or roles that are specified to perform operations for the scheduling engine

**Note**

An Alibaba Cloud account has full permissions on its resources. For security purposes, we recommend that you do not specify an Alibaba Cloud account to perform operations for the scheduling engine in a workspace in basic mode.

## Naming formats of tables in MaxCompute compute engines associated with workspaces in different modes

A workspace in basic mode provides only the production environment. Therefore, a MaxCompute compute engine that is associated with the workspace is used only in the production environment. A workspace in standard mode provides the development environment and production environment. The two environments are isolated from each other. In this case, the naming formats of tables in the MaxCompute compute engines that are associated with the workspace differ in the two environments. If you want to access tables in the production environment from the development environment, you must use the appropriate naming format in the production environment to prevent misoperations. The following table describes the naming formats of tables in the two environments.

**Environment**

**Standard mode**

**Example**

Development environment

Project name\_dev.Table name

If you want to create a table named user\_info in the projectA project, the table name is displayed as projectA\_dev.user\_info.

Production environment

Project name.Table name

If you want to create a table named user\_info in the projectA project, the table name is displayed as projectA.user\_info.
