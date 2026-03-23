When you start a new data project, you need to isolate code, resources, and team members to prevent project disorganization and security risks. DataWorks workspaces are designed for this purpose. A workspace provides an independent, project-based container that lets you manage development tasks, computing resources, and member permissions in a structured way. This promotes secure, orderly, and efficient team collaboration.

**Note**

For more information, see [Workspace Overview](/help/en/dataworks/user-guide/workspace-management/).

## **Example**

For experienced users, follow these steps to quickly create a standard workspace for a production environment:

1.  Go to the [DataWorks workspace list](https://dataworks.console.aliyun.com/workspace/list) and confirm that the correct region is selected at the top of the page. **The region cannot be changed after the workspace is created.** Click **Create Workspace**.
    
2.  On the creation page, set the following key parameters:
    
    -   **Workspace Name**: Enter a unique name that follows your team's naming conventions.
        
    -   **Isolate Development and Production Environments**: Enable this option. This creates a standard mode workspace, which ensures that the development and production environments are isolated.
        
    -   **Use the new Data Studio**: Enable this option. Using the new Data Studio is recommended.
        
        > If this option is not visible, it is enabled by default.
        
3.  Click **Create Workspace**.
    

After the workspace is created, see [Attach computing resources](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).

## Permissions

The account used to create the workspace must meet one of the following conditions:

-   It is an Alibaba Cloud account.
    
-   It is a Resource Access Management (RAM) user that has been granted the `AliyunDataWorksFullAccess` or `CreateWorkspace` access policy. For more information, see [Grant permissions to a RAM user](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#section-l7c-l71-hfv).
    

## Pre-creation planning

Before you create a workspace, plan its configuration and choose a suitable mode.

**Action**

**Description**

**Reference**

**Plan the workspace**

A workspace is the largest unit for business division in DataWorks. Before using workspaces, create a division plan based on your requirements for different scenarios.

[Plan a workspace](/help/en/dataworks/user-guide/plan-workspaces#task-2046656)

**Choose a workspace mode**

DataWorks workspaces have two modes: basic mode and standard mode.

-   **Standard mode** provides separate development and production environments. It is the best choice for ensuring data security and process compliance.
    
-   **Basic mode** has only a production environment. It is suitable for individual testing or quick validation scenarios.
    

**Standard mode is strongly recommended for all production projects.**

[Comparison of basic mode and standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b)

## **Create a workspace**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3474800671/p1014202.png)

### **Step 1: Switch the region and confirm the time zone**

Workspaces are region-specific. Switch to the region where your business data is located before you create the workspace.

1.  Go to the [DataWorks workspace list](https://dataworks.console.aliyun.com/workspace/list).
    
2.  In the top menu bar of the console, switch to the desired region.
    
    **Important**
    
    Before selecting a region, confirm the following information. The region cannot be changed after the workspace is created.
    
    -   **Relationship between region and time zone**:
        
        -   **Default scheduling time zone**: The scheduling time zone of a workspace is the same as its region's time zone by default. For example, the default scheduling time zone for **China (Beijing)** is **UTC+8**. If the default time zone does not meet your needs, refer to the next point about multi-time zone support.
            
        -   **Multi-time zone support**: Some regions support manually switching to other scheduling time zones. To check whether your selected region supports this feature and which time zones are available, see [Switch scheduling time zone](/help/en/dataworks/user-guide/change-the-time-zone-for-scheduling#task-2316189).
            
    -   **Daylight saving time impact**: If your selected region observes daylight saving time (DST), such as Germany (Frankfurt) or US (Virginia), see [Scenario: Impact of daylight saving time changes on scheduled tasks](/help/en/dataworks/user-guide/impacts-exerted-by-the-switching-of-daylight-saving-time-on-the-running-of-nodes#task-2320514) beforehand. This helps prevent unexpected effects on recurring scheduled tasks.
        
    

### **Step 2: Create the workspace**

> The system includes a built-in default workspace named `default_workspace_xxxx`. This workspace is intended for quick trials only and must not be used in production. It is a basic mode workspace with open permissions and no environment isolation. For more information, see [System-built-in default workspace](#4485f6f51f678).

1.  On the **Workspace List** page, click **Create Workspace**.
    
2.  On the creation page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Workspace Name**
    
    The unique identifier for the workspace. It cannot be changed after creation.
    
    **Display Name**
    
    Name the workspace based on its business purpose for easy identification.
    
    **Core Mode & Features**
    
    **Isolate Development And Production Environments**
    
    Defines the [workspace mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode), which specifies whether to isolate the production and development environments.
    
    -   **Enable**: Isolates the production and development environments. This creates a **standard mode** workspace.
        
    -   **Disable**: Does not isolate the environments. This creates a **basic mode** workspace.
        
    
    **Enabling this option is recommended for production environments.**
    
    **Use the new Data Studio**
    
    Enable this option to experience the latest features of [Data Studio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/). If this option is disabled, [DataStudio (legacy version)](/help/en/dataworks/user-guide/overview-26/) is used.
    
    **Important**
    
    If you do not see this option on the interface, the new Data Studio is enabled for your workspace by default.
    
    **Workspace Template**
    
    A workspace template defines the tools, resources, and features available in a DataWorks workspace.
    
    After selecting a template, add computing resources and data sources as needed. For more information, see [Workspace template overview](#f448edd25by7l).
    
    **Advanced Configuration**
    
    **Workspace Administrator**
    
    Defines the administrator for the workspace. By default, the current logon account is the administrator. Other RAM users can be added as administrators to co-manage the workspace. The workspace administrator role has extensive permissions. Grant this role with caution. For more information, see [Workspace administrator responsibilities](/help/en/dataworks/user-guide/work-as-a-workspace-administrator).
    
    **Create An AI Workspace With The Same Name**
    
    Specifies whether to create an AI workspace with the same name. This option is enabled by default. The AI workspace lets you schedule algorithm tasks on [PAI](/help/en/dataworks/user-guide/create-a-machine-learning-node).
    
    **Default DataWorks Resource Group**
    
    The default [DataWorks resource group](/help/en/dataworks/user-guide/resource-group-management/) used when tasks run in the workspace. This can be changed later in the workspace configuration.
    
    **Alibaba Cloud Resource Group**
    
    Select a resource group created in Alibaba Cloud [Resource Management](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb). The **Default Resource Group** is selected by default.
    
    If you have purchased multiple types of Alibaba Cloud resources, use [Resource Management](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb) to create resource groups. This lets you group your cloud resources. You can then set administrators for the resource groups to manage all resources within each group independently.
    
    **Important**
    
    The resource group selected here is a mechanism for managing resources under an Alibaba Cloud account. It helps simplify resource grouping and authorization management within a single account. This concept is different from the DataWorks resource group required to run tasks. Note the distinction.
    

### **Step 3: Bind computing resources**

After creating the workspace, attach a computing resource, such as MaxCompute, to it. This lets you perform big data development tasks.

-   If you enabled **Use the new Data Studio**, you are automatically taken to the page for attaching computing resources. For instructions, see [Attach computing resources](/help/en/dataworks/user-guide/create-and-manage-compute-resources/#eab4cc8d1fljq).
    
    > If a computing resource is not ready, you can click Close after creating the workspace. You can attach a computing resource later.
    
-   If you did not enable **Use the new Data Studio**, you are returned to the workspace list page. You can view workspace information. For more information, see [Manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-i3t-45e-qp4). After the workspace is created, you must [attach a computing resource](/help/en/dataworks/user-guide/create-and-manage-compute-resources/#b76966076al67) to it. You can begin data development only after the resource is created or registered.
    

## **Recommendations for production use**

-   **Mode selection**: Use **standard mode** to isolate development and production environments.
    
-   **Naming convention**: Establish a unified convention. Use names with clear business meanings, such as `finance_tax_report` (finance domain - tax report project).
    
-   **Time zone confirmation**: For teams with multinational operations, confirm the scheduling time zone policy before creation.
    

## More operations

-   After creating the workspace, [add members to the workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   To view, modify, delete, or disable a workspace, see [Manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/).
    

## **Appendix**

### **Workspace template overview**

**Workspace Name**

**Scenarios**

**Features**

**Supported regions**

**DataWorks workspace**

Suitable for a wide range of business scenarios. Lets you configure computing resources and data sources as needed.

Based on DataWorks version features, supports a fully configurable workspace mode.

All regions where DataWorks is deployed.

**OpenLake workspace**

A workspace for the **big data, search, and AI integrated** solution, designed for building open and controllable data lakehouses.

-   A big data, search, and AI integrated solution built on an open and controllable data lakehouse.
    
-   Manages structured, semi-structured, and unstructured data through DLF. Supports secure access and I/O acceleration for lakehouse tables and files.
    
-   Features multi-engine integration and equitable collaborative computing capabilities. Relies on DataWorks for unified development and large-scale task scheduling.
    

Only the China (Hangzhou), China (Shanghai), China (Beijing), and China (Shenzhen) regions support the creation of OpenLake workspaces.

### **Built-in default workspace**

When you use DataWorks for the first time or activate the DataWorks service in a new region, DataWorks automatically performs the following operations to simplify the setup process and allow you to quickly start development.

1.  **Automatically generates a default workspace** (name starts with default\_workspace\_).
    
2.  **Automatically generates a default pay-as-you-go resource group** (named dataworks\_default\_resource\_group).
    
3.  **Automatically creates a MaxCompute project and attaches it as a computing resource** (name starts with default\_datasource\_).
    
4.  **Automatically attaches new resource groups to the default workspace upon purchase.**
    

**Important**

The default workspace is not recommended for developing production tasks.

#### **Basic properties: Default vs. custom workspace**

The following table compares the properties of a default workspace and a custom workspace.

**Property**

**Default workspace**

**Custom workspace**

**Workspace name**

The name starts with **default\_workspace\_** and is followed by a four-digit random code. The name cannot be changed.

Custom. Cannot be changed after creation.

**Display name**

The default display name is "Default workspace", which can be changed.

Custom. Can be changed after creation.

**Workspace mode**

The workspace is in basic mode. If the new Data Studio is enabled, the workspace **cannot** be upgraded to standard mode. If this feature is not enabled, you can upgrade the workspace.

Can be created as a basic mode or standard mode workspace.

**Workspace administrator**

Depends on the identity of the user who activates DataWorks:

-   If an Alibaba Cloud account activates DataWorks, the default administrator is the Alibaba Cloud account.
    
-   If a RAM user activates DataWorks, the default administrators are the Alibaba Cloud account and that RAM user.
    

Same as the default workspace.

**Scheduling time zone**

The scheduling time zone defaults to the local time zone of the region. To adjust the time zone, see [Switch scheduling time zone](/help/en/dataworks/user-guide/change-the-time-zone-for-scheduling).

Same as the default workspace.

#### **Visibility: Default vs. custom workspace**

**Feature**

**Default workspace**

**Custom workspace**

**Core logic**

Open / Default access mode

Invitation-based / Whitelist mode

**Visibility**

**Global visibility**: Visible to all members of the current tenant.

**Restricted visibility**: Visible only to members who are explicitly added to the workspace.

**Access method**

Any member of the tenant can enter by clicking.

Members must be manually added by a workspace administrator to gain access.

**Role logic**

**Automatic grant**: When a member enters for the first time, the system automatically grants the **Guest** role.

**Explicit assignment**: When a member is added, their role is explicitly assigned by the workspace administrator.
