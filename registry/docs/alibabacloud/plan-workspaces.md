This topic describes workspace creation plans for different scenarios in DataWorks.

## Workspace permission models

The following table describes how permissions on the main services of DataWorks are isolated among workspaces.

 

Service

Permission model

Workspace management

Permissions on workspace management are completely isolated among workspaces.

You can specify administrators and members for each workspace based on your business requirements. The role settings of members and parameters for a compute engine instance are independent among workspaces.

**Note** Only an Alibaba Cloud account can be the owner of a workspace.

DataStudio

Permissions on data development are completely isolated among workspaces.

-   Workflows and nodes in different workspaces are separately developed.
-   In a workspace:
    -   Only a workspace member that is assigned the Development or Workspace Manager role has the permissions to create, edit, or delete a node.
    -   Only a workspace member that is assigned the Development, O&M, or Workspace Manager role has the permissions to commit a node.
    -   Only a workspace member that is assigned the O&M, Deploy, or Workspace Manager role has the permissions to deploy a node to the production environment.

**Note** A node in a workspace can depend on nodes in another workspace.

Operation Center

Permissions on the Operation Center service are partially isolated among workspaces.

-   O&M of real-time nodes, auto triggered nodes, and manually triggered nodes: O&M of the nodes is isolated among workspaces. Only a workspace member that is assigned the Development, O&M, or Workspace Manager role in the workspace has the permissions to manage the nodes in the workspace.
-   On the Overview page, the O&M statistics about nodes are isolated among workspaces. You can view the running status of nodes on this page.
-   Alarm: Permissions on this feature are not isolated among workspaces. You can use a baseline to monitor nodes from different workspaces. Only an Alibaba Cloud account or a workspace member that is assigned the Workspace Manager role has the permissions to create a baseline.

Data Map

Permissions on the Data Map service are shared by all workspaces of a tenant.

In Data Map, you can search for and view the metadata of all workspaces of the tenant in the current region.

**Note** Only the metadata that is displayed in Data Map is shared by all workspaces of a tenant. The read and write permissions on data are isolated among workspaces of a tenant. In most cases, the read and write permissions on data in the development environment are shared by members that are assigned the Development role in all workspaces. Only the tenant account has the permissions to manage data in the production environment.

Data Quality

Permissions on the Data Quality service are completely isolated among workspaces.

Only a workspace member that is assigned the Development, O&M, or Workspace Manager role has the permissions to configure data quality monitoring rules in the workspace.

DataService Studio

Permissions on the DataService Studio service are partially isolated among workspaces.

Workspaces share the definition of API groups. However, the APIs that are registered or published in a workspace are visible only in the workspace.

Data Security Guard

Permissions on the Data Security Guard service are shared by all workspaces.

Workspaces share a set of data security rules and a set of data security levels for sensitive data. If you select Safe for the Access Mode parameter, only a workspace member that is assigned the Safety Manager role has the permissions to perform operations in Data Security Guard.

## Practice of workspace creation plans

You can create a workspace from dimensions such as department, business project, and data layer. You can also create a workspace from a combination of the dimensions.

   

Dimension

Department

Business project

Data layer

Workspace creation plan basis

You can create a workspace based on the organizational structure of an enterprise.

For example, you can create workspaces for departments such as the production department, marketing department, human resources department, and finance department. The workspace that is created for a specific department can be used to develop data and manage tables for the department.

You can create a workspace based on the planning of business projects.

For example, you can create workspaces for business projects such as the Quarterly Sales Sprint project, the Production Security Inspection in Spring project, and the Executives Cockpit Report project. Each business project involves multiple departments. In this case, each workspace ingests data from multiple business systems, and processes and aggregates the ingested data to support each business project.

You can create one or more workspaces for each data layer.

For example, you can create workspaces for data layers such as the data access layer, operational data store (ODS) layer, and data warehouse summary (DWS) layer.

Scenarios

You can create a workspace from this dimension if the following conditions are met: The department business requirements are simple. The department staff are skilled developers. The demand for data sharing among departments is less. A single department can perform end-to-end business development.

You can create a workspace from this dimension for an enterprise in which business projects have a higher priority or collaborative efforts are required among multiple departments for the business projects.

You can create a workspace from this dimension for large-sized data warehouses, common layers of enterprises, and data mid-end.

Advantages

Workspace members are added based on the organizational structure of an enterprise. A workspace created from this dimension maximizes the stability of human resources and data security. In addition, the computing and storage costs are easy to calculate for different departments.

In a workspace created from this dimension, the business requirements are specific, the data link is clear, and data O&M operations are easy to perform. You can adjust the responsibilities of workspace members based on business requirements.

The data architecture is clear, data sharing is convenient, less development skills are required, and resources can be allocated based on the characteristics of each data layer.

Disadvantages

The data of different departments tends to be siloed. Data may be repeatedly computed and stored. Data dependencies across different workspaces are complex and resources tend to be preempted among different workspaces.

The data architecture is unclear and different workspaces implement different business logic. The members of a workspace may come from different departments, which increases risks in data security.

The development cycle and the O&M link are long because mutually dependent nodes may be developed in different workspaces. In a workspace in standard mode, if the code of a node is modified and deployed, the code of the nodes that have dependency relationships with the current node and are deployed in other workspaces also needs to be modified before the nodes are deployed.

Architecture stability

★★★★★

★☆☆☆☆

★★★★★

Flexibility in human resource management

★☆☆☆☆

★★★★★

★★★★☆

Business complexity

★★☆☆☆

★★★★☆

★★★☆☆

Data security

★★★★★

★★☆☆☆

★★★☆☆

Maintainability

★★☆☆☆

★★★★★

★★☆☆☆

Data sharing

★★★☆☆

★☆☆☆☆

★★★★★

You can create a workspace from a combination of the dimensions to utilize their advantages. One of the commonly used policies is to create workspaces by data layer as a general idea, and create multiple workspaces for a specific data layer based on your business requirements.

-   Data access layer: You can create workspaces for application systems such as stg\_Marketing system and stg\_Production management system at this data layer.
    -   Nodes: Only Data Integration nodes are created.
    -   Tables: Only tables that store raw data and have short time to live (TTL) are created.
    -   Workspace members: In a workspace created for an application system, the database administrator (DBA) in the application system is added as a member of the workspace.
    -   Resources that are first allocated in this scenario: resource groups for Data Integration and storage resources.
-   ODS layer: You can create workspaces for departments such as ods\_Human resources department and ods\_Production department at this data layer. The data in workspaces created for the departments is standardized, and sensitive data is filtered out.
    -   Nodes: Only SQL nodes that have a single ancestor node and a single descendant node are created.
    -   Tables: Only tables at the ODS layer are created.
    -   Workspace members: In a workspace created for a department, the data cleansing personnel in the department are added as members of the workspace.
    -   Resources that are first allocated in this scenario: resource groups for scheduling that are used to run nodes scheduled to run in the period of time from 00:00 to 02:00 and computing resources of compute engine instances.
-   Data warehouse summary (DWS) layer: You can create one workspace for this data layer or create multiple workspaces for business domains such as dw\_Customer domain and dw\_Commodity domain at this data layer.
    -   Nodes: Only SQL nodes that have multiple ancestor nodes and a single descendant node are created.
    -   Tables: Only fact tables and dimension tables at the DWS layer are created.
    -   Workspace members: In a workspace created for a business domain at a common layer such as the DWS layer, professional developers for the business domain are added as members of the workspace.
    -   Resources that are first allocated in this scenario: resource groups for scheduling that are used to run nodes scheduled to run in the period of time from 02:00 to 05:00, computing resources of compute engine instances, and storage resources. The allocated storage resources are used to deal with data expansion.
-   Tag data model (TDM) layer: You can create one workspace for this data layer or create multiple workspaces for business objects at this data layer.
    -   Nodes: Only SQL nodes that have multiple ancestor nodes and a single descendant node are created.
    -   Tables: Only tag tables are created.
    -   Workspace members: In a workspace created for a business object at a common layer such as the TDM layer, professional developers for the business object are added as members of the workspace.
    -   Resources that are first allocated in this scenario: resource groups for scheduling that are used to run nodes scheduled to run in the period of time from 05:00 to 07:00, computing resources of compute engine instances, and storage resources. The allocated storage resources are used to deal with data expansion.
-   Application data store (ADS) layer: You can create workspaces for business projects at this data layer.
    -   Nodes: SQL nodes and Data Integration nodes are created.
    -   Tables: Tables for specific business projects are first created.
    -   Workspace members: In a workspace created for a business project, members of the business project are added as members of the workspace.
    -   Resources that are first allocated in this scenario: resource groups for scheduling that are used to run nodes scheduled to run in the period of time from 07:00 to 09:00, computing resources of compute engine instances, and resource groups for Data Integration.
