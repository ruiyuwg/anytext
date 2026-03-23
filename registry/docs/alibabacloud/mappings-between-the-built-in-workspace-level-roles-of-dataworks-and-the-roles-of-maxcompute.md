This topic describes the mappings between the built-in workspace-level roles of DataWorks and the roles of MaxCompute, and the permissions of each role in the development environment and production environment. The table in this topic provides the details. For more information about MaxCompute permissions, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions) and [Manage permissions on data in a MaxCompute compute engine](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance).

**Note**

You cannot perform permission management on DataWorks workspaces that are in basic mode. The descriptions in the **Permission on data in the DataWorks development environment and the associated MaxCompute project and Permission on data in the DataWorks production environment and the associated MaxCompute project** columns in the following table are suitable only for workspaces that are in standard mode. For information about DataWorks workspace modes, see [Differences between workspaces in basic mode and workspaces in standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).

**Mapping**

**Permission description**

**DataWorks role or identity**

**MaxCompute role**

**Permission on data in the DataWorks development environment and the associated MaxCompute project**

**Permission on data in the DataWorks production environment and the associated MaxCompute project**

**Description of permissions in DataWorks**

Workspace Administrator

Role\_Project\_Admin

-   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has `Read` permissions on the `packages` in the project.
    
-   DataWorks: This role has permissions to perform data development operations and deploy tasks to the production environment.
    

No permissions by default. You must request the required permissions in Security Center.

A user with the Workspace Administrator role is the administrator of a workspace. The administrator has permissions to manage the basic properties, data sources, compute engine configurations, and members of the workspace and can assign the Workspace Administrator, Development, O&M, Deploy, or Visitor role to workspace members.

Development

Role\_Project\_Dev

-   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has `Read` permissions on the `packages` in the project.
    
-   DataWorks: This role has permissions to perform data development operations but does not have permissions to deploy tasks to the production environment.
    

No permissions by default. You must request the required permissions in Security Center.

A user with the Development role has permissions to create workflows, script files, resources, user-defined functions (UDFs), tables, and deployment tasks, and delete tables, but does not have permissions to perform deployment operations.

O&M

Role\_Project\_Pe

This role has all permissions on the project and the functions, resources, instances, and jobs in the project, Read permissions on the packages in the project, and Read and Describe permissions on the tables in the project.

**Note**

The O&M role has permissions on the MaxCompute compute engine but does not have permissions to run nodes in the DataWorks console.

No permissions by default. You must request the required permissions in Security Center.

The O&M role has deployment and online O&M permissions that are granted by the Workspace Administrator role but does not have permissions to perform data development operations.

Deploy

Role\_Project\_Deploy

No permissions by default.

No permissions by default. You must request the required permissions in Security Center.

The Deploy role has similar permissions to the O&M role, except for online O&M permissions.

Visitor

Role\_Project\_Guest

No permissions by default.

No permissions by default. You must request the required permissions in Security Center.

A user with the Visitor role has permissions to view data but does not have permissions to modify workflows or code.

Security Manager

Role\_Project\_Security

No permissions by default.

No permissions by default. You must request the required permissions in Security Center.

The Security Manager role can be used only in Data Security Guard and has permissions to configure sensitive data identification rules and audit data risks in Data Security Guard.

Data Analyst

Role\_Project\_Data\_Analyst

-   MaxCompute: This role has the `CreateInstance` and `CreateTable` permissions in the project.
    
-   DataWorks: This role has permissions to view models in [Data Modeling](/help/en/dataworks/user-guide/overview-15) and permissions to view and use the features in [DataAnalysis](/help/en/dataworks/user-guide/data-analysis-overview/).
    

No permissions by default. You must request the required permissions in Security Center.

This role has permissions only on [DataAnalysis](/help/en/dataworks/user-guide/data-analysis-overview/#concept-270168).

Model Designer

Pole\_Project\_Erd

No permissions by default.

No permissions by default. You must request the required permissions in Security Center.

This role has permissions to view models in [Data Modeling](/help/en/dataworks/user-guide/overview-15#concept-2090781) and modify parameter configurations in Data Warehouse Planning, Data Standard, Dimensional Modeling, and Data Metric. This role does not have permissions to publish models.

Data Governance Administrator

Role\_Project\_Data\_Governance

No permissions by default.

No permissions by default. You must request the required permissions in Security Center.

This role has permissions only on [Data Governance Center](/help/en/dataworks/user-guide/data-governance-center/). This role can be used to view and manage detected data governance issues, configure data governance plans, and enable check items. This role does not have permissions on operations such as data development and O&M.

Workspace owner (Alibaba Cloud account)

Project Owner

This identity is the owner of the project and has all permissions on the project.

The same permissions as in the development environment.

None.

None

Super\_Administrator

This role is the super administrator of the project and has management permissions on the project and all permissions on all types of resources in the project.

The same permissions as in the development environment.

None.

None

Admin

When you create a project, the system creates an Admin role for this project and grants the role permissions to access all objects in the project, manage users or roles, and grant permissions to users or roles. Compared with the Project Owner role, the Admin role does not have permissions to perform the following operations: assign the Admin role to users, configure security policies for the project, modify the authentication model for the project, and modify the permissions of the Admin role. The Project Owner role can assign the Admin role to a user and authorize the user to manage security configurations.

The same permissions as in the development environment.

None.

None

Role\_Project\_Scheduler

No permissions by default.

-   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has Read permissions on the packages in the project.
    
-   DataWorks: This role is used as the identity of committing tasks to the production environment for scheduling.
    
    **Note**
    
    If you specify a RAM user or RAM role as the **default access identity** when you add a MaxCompute project to a workspace in the production environment as a data source, the RAM user or RAM role is granted the permissions that are the same as those of the Role\_Project\_Scheduler role of the MaxCompute project. For information about how to specify the default access identity, see the [Add a data source](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb60400bb) section in Add a new MaxCompute data source.
    

The identity is used to schedule and run MaxCompute tasks in the production environment.
