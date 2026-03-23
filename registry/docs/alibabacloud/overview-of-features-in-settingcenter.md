The DataWorks Admin Center is a visual platform for configuring environments and managing resources. It provides management capabilities at two levels: at the tenant level, you can configure tenant-wide roles and alert rules; at the workspace level, it enables fine-grained configuration of dedicated compute engines, data sources, and members for each project.

## **Core concepts and system architecture**

Before you begin, it is important to understand the core architecture and entity relationships in DataWorks.

### **Core concept: Workspace**

A **Workspace** is the **fundamental logical unit** in DataWorks for project management, access control, and resource isolation. All activities, such as data development, task operations, and member management, take place within a Workspace.

-   **Isolation**: Workspaces provide **strong isolation**. Each workspace maintains complete independence in terms of tasks, resources, and members.
    
-   **Container**: A Workspace serves as a container that hosts functional modules such as Data Development and Data Integration, and connects to external entities including data sources, compute engines, and resource groups.
    

### **Architecture and entity relationships**

The following diagram shows the dependencies and relationships among the core entities in DataWorks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2138522771/CAEQUxiBgMC94K6s4BkiIDU1MWY2YzAxMGMwYjQ0ZDA5MDk4M2U3YjJhMGMyYmY55934619_20251204172958.809.svg)

1.  **Workspace**: Located at the center of the architecture, the Workspace is the base unit for all operations. Functions such as **Data Development**, **Data Integration**, and **O&M Center** run within a specific Workspace.
    
2.  **Resource Group**:
    
    **Note**
    
    A **Resource Group** in DataWorks provides compute resources for running tasks and is purchased separately. This is a different concept from the [resource group](/help/en/resource-management/resource-group/product-overview/resource-group-overview) in Alibaba Cloud Resource Management, which is used for resource isolation and permission management across your Alibaba Cloud account.
    
    -   **Definition**: An entity that provides **compute resources (CPU and memory)** for task execution. It exists independently of Workspaces.
        
    -   **Relationship**: **Binding is required**. As shown on the right side of the diagram, you must bind a Resource Group to one or more Workspaces so that **Data Integration** tasks and scheduled **Data Development** tasks can obtain the necessary compute resources at runtime.
        
3.  **Compute Engine**:
    
    -   **Definition**: An entity that provides the **syntax parsing, compilation, and execution environment** for the **Data Development** module. Examples include MaxCompute, Hologres, and EMR.
        
    -   **Relationship**: **Development dependency**. As indicated by the input arrows to the **Data Development** module, you must bind a compute engine to a Workspace. This allows developers to write, debug, and submit code (such as SQL or Spark) in the **Data Development** module.
        
4.  **Data Source**:
    
    -   **Definition**: A configuration of connection information used to access external data stores, such as MySQL, Oracle, or OSS.
        
    -   **Relationship**: **Integration dependency**. As indicated by the input arrows to the **Data Integration** module, the source and sink of a data integration task depend on the data sources pre-configured in the Workspace.
        
5.  **Custom Image**:
    
    -   **Definition**: A packaged environment containing a specific operating system, runtime environment, and third-party libraries.
        
    -   **Relationship**: **Bind as needed**. As shown on the left, when your development environment (Data Studio) or a specific type of **Data Development** node (like PyODPS) requires dependencies not found in the standard environment, you can bind a custom image. This is an advanced feature.
        
6.  **Cross-workspace global services**:
    
    -   As shown at the top of the diagram, modules like **Data Governance** and **Data Map** operate above the Workspace level. They provide **tenant-level** global data views and management capabilities. Their permission system is independent of individual Workspaces.
        

## **Before you begin**

-   **Permissions**: If you cannot view or perform certain operations, contact the owner of your Alibaba Cloud Account or an administrator to confirm you have the required permissions. For more information, see [Member permission management](/help/en/dataworks/user-guide/member-permission-management/).
    
-   **Region isolation**: DataWorks Workspaces and their associated resources are isolated by Region. Before performing any operation, select the correct Region in the top navigation bar of the console.
    

## **Get started**

If you are configuring DataWorks for the first time, follow this standard workflow to ensure your environment is complete and ready to use.

**Important**

Make sure you are using an Alibaba Cloud account or a Resource Access Management (RAM) user with the `**AliyunDataWorksFullAccess**` policy. Otherwise, contact an administrator to [grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

### **1\. Create a Workspace**

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the target **Region**. In the left-side navigation pane, click **Workspace**, and then click **Create Workspace**. Select a workspace mode based on your needs. We recommend using **Standard Mode** for full isolation between development, testing, and production environments.

> For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3474800671/p1014202.png)

### **2\. Configure and bind a Resource Group**

1.  **Create or purchase a Resource Group**: In the left-side navigation pane of the console, go to the **Resource Group** list. Purchase a suitable Resource Group based on your task workload, such as a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
2.  **Bind the Resource Group to your Workspace**: This step is a **prerequisite** for core features like [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/), task scheduling, and [DataService Studio](/help/en/dataworks/user-guide/data-services-overview/) to function.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1032412.png)
    

### **3\. Add members to the Workspace**

1.  In the workspace list, click **Details** in the Actions column of the target workspace to open its details page.
    
2.  Add your project team members (RAM users) and assign them appropriate workspace-level roles, such as **Workspace Administrator**, Developer, or O&M. This enables collaborative development and access control.
    
    > For more information, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1035699.png)
    

### **4\. Bind a Compute Engine**

On the workspace details page, navigate to the **Computing Resource** list and bind an existing compute engine instance, such as a MaxCompute project, to the current Workspace. **This step is a prerequisite for data development**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1035705.png)

### **5\. Add a Data Source**

On the workspace details page, navigate to **Data Sources** and click **Add Data Source**. Configure the connection information for the source or sink databases that you need for data synchronization, and then test the connectivity.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1035709.png)

After you complete these five steps, your DataWorks Workspace is ready for development and execution. You can now start Data Integration and Data Development tasks.

## **Overview of administrative features**

### **Overview and navigation**

The left-side navigation pane of the console is the entry point for all administrative features, including the workspace list, resource group list, Image Management, and Purchased Resources and Services. When you log on to the [DataWorks console](https://workbench.data.aliyun.com/console), the overview page is displayed by default. This page provides quick access to **core use cases**, your **frequently used Workspaces**, **product updates**, and other information.

### **Global configurations**

The following configurations are at the tenant level and apply to all Workspaces in the current Region.

1.  Go to the **Admin Center** by clicking **More** > **Admin Center** in the navigation pane, or by clicking the Manage button in the Actions column of a workspace.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1036273.png)
    
2.  View the tenant's **Alert Configuration**, **Tenant Members and Roles**, and **Extensions**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1035731.png)
    
    **Feature module**
    
    **Description and core actions**
    
    **Alert Configuration**
    
    View and configure information about DataWorks alert contacts and set alert quotas.
    
    • **Alert Resources**: View the usage of alert resources (SMS messages and phone calls) and set a daily alert limit. After the limit is reached, no more alerts are sent.  
    • **Alert Contacts**: Configure contacts to receive task alerts. You can synchronize contacts from RAM or add them manually. Contacts must be activated to receive alerts.
    
    > For more information, see [View and set alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
    
    **Tenant Members and Roles**
    
    • **Tenant Members**: Configure members who have permissions on global modules, such as Data Security Guard and Data Map.  
    • **Tenant Roles**: View or customize global roles and their permissions.
    
    > For more information, see [Global module permission control](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services).
    
    **Extensions**
    
    Enable or configure extension applications from the open platform to implement validation and control for development and O&M workflows.
    
    > For more information, see [Extensions](/help/en/dataworks/user-guide/extensions/).
    

### **Workspace-specific configurations**

The following configurations apply only to the current Workspace.

**Feature module**

**Description and core actions**

**Workspace Settings**

Manage basic workspace properties and security settings, such as whether to allow downloading the results of `SELECT` statements.

> For more information, see [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-i3t-45e-qp4).

**Data Source**

Centrally manage connection information for the sources and sinks used for data synchronization in the current Workspace.

> For more information, see [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).

**Computing Resource**

Bind and manage the compute engines used for data development in the Workspace, such as MaxCompute, Hologres, and AnalyticDB.

> For more information, see [Computing resource management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).

**Cluster Management**

Register and manage self-managed CDH/CDP and EMR clusters. Configure authentication files and account mappings. **This is visible only for Workspaces that do not use the new Data Studio.**

**Workspace Members and Roles**

View the permissions of predefined roles. You can customize new roles by configuring their functional permissions and role mappings for compute engines. You can also add or remove workspace members and assign them predefined or custom roles.

> For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services).

### **Workspace Management**

In the left-side navigation pane of the console, click **Workspaces** to view all Workspaces under the current tenant in a specific Region. You can manage the Workspaces you have joined or create new ones.

**Note**

A RAM user can view only the Workspaces they have joined. To allow a RAM user to view a Workspace, add the user as a workspace member. For more information, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them#task-2468428).

![控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6389503671/p481463.png)

**Area**

**Feature**

**Description**

**Related documentation**

**1**

**Select Region**

Switch the Region for DataWorks. The list of Workspaces changes based on the selected Region.

\-

**2**

**Create Workspace**

Create a new DataWorks Workspace.

[Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#task-2481177).

**3**

**View basic workspace information**

View basic information about the Workspace, such as its mode and administrator. Key information includes:

-   **Workspace Template**: Supports All Features and OpenLake workspaces.
    
-   **Mode**: The current mode of the Workspace. DataWorks supports Simple Mode and Standard Mode. We recommend using Standard Mode for production development.
    
-   **Administrator**: The administrator of the Workspace. On the **Admin Center** > **Workspaces** > **Workspace Members** page, the administrator can add RAM users to the Workspace.
    
-   **Resource Group ID**: The resource group to which your current Workspace is assigned. This is the **default resource group** you created in Alibaba Cloud [Resource Management](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb).
    
    **Important**
    
    The resource group displayed here is a mechanism for managing and grouping resources under your Alibaba Cloud account to simplify resource organization and authorization. It is a different concept from the resource group required for running tasks in DataWorks. For more information about Alibaba Cloud resource groups, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb).
    

-   For information about the differences between the two workspace modes, see [Basic mode vs. standard mode workspaces](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b).
    
-   You can upgrade a Simple Mode workspace to a Standard Mode workspace. For more information, see [Upgrade workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).
    
-   [Add and manage workspace members and their role permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

**4**

**Workspace operations**

View key metrics for the current Workspace, quickly access specific modules, or perform workspace-related operations.

-   **Details**: View data about instance runs, governance issues, models, and metrics from the previous business date.
    
-   **Quick Access**: Quickly navigate to functional modules related to the current Workspace.
    
-   **Manage**: Quickly navigate to the Admin Center to configure the workspace and manage members, roles, data sources, clusters, and extensions.
    
-   **Create Data Source**: Quickly create a data source for subsequent tasks like data integration and data development.
    
-   **Bind Compute Engine**: Bind a compute engine to the Workspace for subsequent big data development tasks.
    
-   **Delete Workspace**: Delete a workspace. A deleted workspace cannot be restored.
    
-   **Disable Workspace**: If you no longer need DataWorks, you can disable a workspace. Once disabled, tasks in the workspace are no longer automatically scheduled. However, associated engine resources may remain active and continue to incur fees.
    

-   [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#task-2481177)
    
-   [Overview](#)
    
-   [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/)
    
-   [Computing resource management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/)
    
-   [Stop billing](/help/en/dataworks/disable-auto-renewal-for-subscription-resources)
    

**5**

**Edition Upgrade**

Upgrade your current DataWorks edition.

-   Higher editions provide more features. The available features vary by edition.
    
-   Editions are activated at the Region level. After you purchase an edition, all Workspaces in the current Region can use its features.
    

For more information about the differences between editions, see [Feature details by DataWorks edition](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).

**Purchase exclusive resource group**

You can purchase a Serverless resource group. After purchase, you can click **Resource Groups** in the left-side navigation pane to view its details.

[Resource group management](/help/en/dataworks/user-guide/resource-group-management/)

### **Resource Groups**

In the left-side navigation pane, click **Resource Groups**. You can purchase required resources or view details of purchased resources in the corresponding Region and perform management operations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9999503671/p873545.png)

**Area**

**Feature**

**Description**

**Related documentation**

**1**

**Create resource group**

Create a new Serverless resource group.

[Resource group management](/help/en/dataworks/user-guide/resource-group-management/)

**2**

**View basic resource group information**

View basic information about a resource group, such as its running status, expiration time, and usage.

-   **Area 2**, resource group **Status**
    
    -   **Starting**: The resource group is starting up after purchase. Please wait.
        
    -   **Running**: The resource group is running normally and can execute tasks.
        
    -   **Updating**: The resource group is undergoing a change, such as scaling.
        
        **Note**
        
        The update process takes some time. Please wait.
        
    -   **Expired**: If a Subscription resource group is not renewed upon expiration, its status changes to Expired and it can no longer be used. If it is not renewed within the grace period, the resource group is deleted from the console.
        
    -   **Frozen**: A Pay-as-you-go resource group is automatically frozen if it remains unused for seven consecutive days.
        
-   **Area 3, resource group usage**: If resource group usage is too high, task performance may be degraded. Check the resource consumption of specific tasks and optimize any that are using resources inefficiently.
    

-   [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups)
    
-   [Manage renewals for Subscription products](/help/en/dataworks/disable-auto-renewal-for-subscription-resources#task-2183790)
    
-   [Overdue payments](/help/en/dataworks/deduction-and-overdue-payments#concept-2210046)
    
-   [Expiration and renewal](/help/en/dataworks/expiration-and-renewal#task-2209905)
    

**3**

**4**

**Basic resource group operations**

View detailed information about a resource group and perform related change operations.

-   **Details**: View basic information, resource usage, scheduling concurrency usage, and its usage across modules such as Data Integration, Data Analytics, Data Service, Data Scheduling, and individual development environments.
    
-   **Network Settings**: If you need to access a special network environment, you must configure the network for the resource group. Before configuration, select a network connectivity solution and refer to its documentation for instructions.
    
-   **Associate with Workspace**: After you purchase a resource group, you must bind it to a specific Workspace before it can be used.
    
    You must have the **ModifyResourceGroup** permission to change the associated workspace. For information about granting permissions, see [Fine-grained console access control: Custom policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#section-b8n-ckp-aii).
    
-   **More** operations: You can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8730105371/p873566.png) to perform operations like **Scale Out**, **Scale In**, **Renew**, **Unsubscribe**, **Quota Management**, **Change Billing Method**, and **Change Concurrency Limit for Data Scheduling** on the resource group.
    

**Note**

Changes to a resource group take some time to process. Please wait.

-   [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups)
    
-   [Manage renewals for Subscription products](/help/en/dataworks/disable-auto-renewal-for-subscription-resources#task-2183790)
    
-   [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity)
    

### **LLM services**

In the left-side navigation pane, click **LLM Management** to go to the LLM service page. The LLM service provides a one-stop solution for efficient deployment, secure communication, and easy model invocation. You can easily deploy models by using DataWorks Serverless resource groups and directly call LLMs in data integration and data development tasks. For more information, see [Manage large model services](/help/en/dataworks/user-guide/llm-service-management/).

### **Image Management**

In the left-side navigation pane, click **Image Management** to view official DataWorks images. If a task requires a specific development environment (such as third-party libraries), create a custom image with the necessary dependencies. You can then select this image as the runtime environment when running the task on a Serverless resource group. For more information, see [Custom images](/help/en/dataworks/user-guide/custom-image).

### **Purchased Resources and Services**

In the left-side navigation pane, click **Purchased Resources and Services** to view details of your purchased Subscription and Pay-as-you-go DataWorks services and resource groups. You can view the corresponding Bills and Billing Rules, or perform operations such as **Renew**, **Upgrade**, **Downgrade**, and **Unsubscribe**. For related documentation, see [Viewing bills](/help/en/dataworks/view-bill-details#concept-1813811) and [Overview](/help/en/dataworks/billing-overview#concept-2210183).
