DataWorks allows you to add multiple objects, such as nodes, functions, resources, and components, to a deployment package at a time for unified deployment. This topic describes how to create a deployment package to deploy objects in the package across workspaces.

## **Scenarios**

Cross-workspace deployment is mainly used to deploy objects such as nodes, functions, resources, and components from one basic-mode workspace to another within the same Alibaba Cloud account and region. This feature also allows you to implement development and production environment isolation for basic-mode workspaces. For more information, see [Achieve environment isolation in basic mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#section-kgg-njx-68t).

**Note**

To ensure that tasks run properly and as expected after being published to the destination workspace, carefully read [Deployment logic](/help/en/dataworks/user-guide/deployment-center/#section-3qk-b23-3ln) and understand the mapping relationships between the source and destination workspaces before proceeding.

## Limits

### **Permissions**

-   **Create a deployment environment**: Only members with the **Workspace Administrator** role are allowed to create and configure a deployment environment.
    
-   **Deploy tasks to the production environment of the source workspace**: Members with the **O&M**, **Deploy**, or **Workspace Administrator** roles can deploy tasks to the production environment of the source workspace in DataStudio.
    
-   **Create a deployment package**: Only members with the **Development** role can create a deployment package in Deploy Center.
    
-   **Deploy the package**: Members with the **O&M**, **Deploy**, or **Workspace Administrator** roles in both the source and destination workspaces can deploy packages.
    

For information about how to add members to a workspace and grant permissions to the members, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).

### **Environments**

The following environment limits apply when you perform cross-workspace deployment from the source workspace to the destination workspace.

**Source workspace**

**Destination workspace**

**Workspace mode**

**DataStudio version**

**Basic mode**

**DataStudio (new version)**

**Basic mode**

**DataStudio (old version)**

**Standard mode**

**DataStudio (new version)**

**Standard mode**

**DataStudio (old version)**

Basic mode

[DataStudio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

[DataStudio (legacy version)](/help/en/dataworks/user-guide/overview-26/)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

Standard mode

\-

**Unsupported**

**Unsupported**

**Unsupported**

**Unsupported**

### **Others**

**Cross-workspace deployment** is used to deploy objects across workspaces within the same Alibaba Cloud account and in the same region. Cross-region deployment is not supported. If you need to deploy objects across regions, use [Deploy Center](/help/en/dataworks/user-guide/deployment-center/#9f2704fdc3xpj).

## **Deployment process**

The following figure shows the cross-workspace deployment process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1625815671/CAEQQRiBgMDQmOenvRkiIDkwY2VkM2U5YzEwMTRiNjA5NjZlNzNhNjFkN2Q0Y2Zl5138010_20250506134434.719.svg)

## **Procedures**

All cross-workspace deployment operations are performed in the source workspace.

### 1\. Create a deployment environment

When you deploy nodes from the source workspace to the destination workspace, the destination offers a completely new deployment environment. Therefore, you must map the source's engine instance, resource group, and dependencies to the destination environment. After the mapping is complete, you can deploy packages without additional configuration in the destination workspace. The system will automatically replace the environment configurations used for deploying nodes with the mapped environment information/configurations?.

**Note**

Only members with the **Workspace Administrator** role are allowed to create and configure deployment environments.

#### **Step 1:** Go to the Deploy Center

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the upper-left corner of the page that appears, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon and choose **All Products** > **More** > **Deploy Center**.
    

#### **Step 2:** Configure a deployment environment

1.  On the Deployment Center page, click **Deployment Environment Management** in the left-side navigation pane.
    
2.  Click **Create Deployment Environment** and configure the environment information as needed.
    
    1.  Configure the basic information about the deployment environment.
        
        **Parameter**
        
        **Description**
        
        **Environment Name**
        
        The name of the deployment environment.
        
        **Deployment Type**
        
        Choose **Cross-workspace deployment**.
        
        **Destination Workspace**
        
        Select the destination workspace for cross-workspace deployment.
        
        **Deployment Object Owner**
        
        Indicates the owner of each node in the destination workspace after the deployment package is successfully deployed across workspaces. Valid values:
        
        -   **Default**: DataWorks first attempts to assign the node owner from the source workspace as the primary owner. If the source node owner is not a member of the destination workspace, DataWorks automatically assigns the deployment executor (the user who deploys the package) as the node owner.
            
        -   **Deployment Package Creator**: DataWorks assigns the user who creates the deployment package as the node owner.
            
        -   **Deployment Package Executor**: DataWorks assigns the user who executes the deployment operation (the user who deploys the package) as the node owner.
            
        
    2.  Configure **Computing Resource Mappings**.
        
        Configure computing resource mappings between the source and destination workspaces. After the configuration, when you deploy a task, the system deploys the nodes, resources, functions, and components of the source computing resource to the destination computing resource based on the configured computing resource mappings.
        
        **Note**
        
        -   In the **Computing Resource Mapping** section, you must reserve at least one computing resource in source workspace and configure its mapping to a computing resource in the destination workspace.
            
        -   You can determine whether to map the source computing resource to the destination workspace based on your business requirements.
            
        
        **Parameter**
        
        **Description**
        
        **Computing Resource in Source Workspace**
        
        All computing resources bound to the source workspace.
        
        **Computing Resource Type**
        
        The type of the computing resources bound to the source workspace.
        
        **Computing Resource in Destination Workspace**
        
        Select the compute resources in the destination workspace that correspond to the compute resources in the source workspace.
        
        You can go to the **Deploy Center of the destination workspace, open the** \> **Deployment Environment Management** page, and click **View Workspace Environment Information** in the upper-right corner to check computing resource details.
        
        **Ignore Mapping**
        
        If this setting is enabled, the destination workspace's computing resources will not be mapped to those from the source workspace. As a result, nodes, resources, functions, and components associated with the source workspace's computing resources will not be included in the deployment package.
        
        If the nodes, resources, functions, or components under a specific engine instance in the source workspace do not need to be deployed, you can enable **Ignore Mapping** for that engine instance.
        
    3.  Configure **Resource Group Mappings**.
        
        In the Resource Group Mappings section, configure mappings between the resource groups in the source workspace and the resource groups in the destination workspace. After you configure a mapping, the system uses the destination resource group to run the task when you deploy the task.
        
        **Note**
        
        -   DataWorks allows you to configure only mappings between resource groups of the same type.
            
        -   When you configure a mapping between resource groups for Data Integration, make sure that the configurations of the destination resource group for Data Integration, such as the whitelist and network connectivity, are the same as the configurations of the source resource group for Data Integration. Otherwise, Data Integration tasks may be affected. For more information about how to configure network connectivity, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).
            
        
        **Parameter**
        
        **Description**
        
        **Resource Group in Source Workspace**
        
        The resource groups that are associated with the source workspace.
        
        **Resource Group Type**
        
        The type of the resource group bound to the source workspace.
        
        **Resource Group in Destination Workspace**
        
        The destination resource group that corresponds to the source workspace resource group for mapping.
        
        To view information about a resource group, go to the **Deployment Environment Management** page in **Deploy Center**. Then, click **View Workspace Environment Information**.
        
        **Ignore Mapping**
        
        If you turn on this switch, no destination resource group is mapped to the source resource group. The source resource group is used to deploy tasks.
        
        **Note**
        
        The **Ignore Mapping** parameter is not available for default resource groups and shared resource groups.
        
        If the number of resource groups in the source workspace exceeds that in the destination workspace, you can enable **Ignore Mapping** for the additional resource groups. If you turn on this switch, the source resource group is used to deploy tasks.
        
    4.  Configure **Dependency Mappings**.
        
        The Dependency Mappings section displays the names of the upstream projects for all cross-project dependencies in the source workspace. You can configure a mapping between a source project and a destination project. After you configure a dependency mapping, the system configures the destination project as the upstream project of the corresponding objects in the destination workspace. This way, new dependencies are generated.
        
        **Note**
        
        -   The information in the **Dependency Mappings** section is automatically updated with `a delay of one day`. If you want to view the latest dependencies, click **Refresh Dependencies**.
            
        -   If you configure a dependency mapping between projects, DataWorks modifies the node dependencies based on the mapping. Make sure that you can add dependencies to the destination workspace. For information about how to resolve the issue that you cannot add dependencies to the destination workspace, see [When I commit Node A, the system reports an error that the output name of the dependent ancestor node of Node A does not exist. What do I do?](/help/en/dataworks/user-guide/when-i-commit-node-a-the-system-reports-an-error-that-the-output-name-of-the-dependent-ancestor-node-of-node-a-does-not-exist-what-do-i-do#task-2042697)
            
        -   After you configure dependency mappings for a task of the MaxCompute engine type, such as an ODPS SQL or ODPS Spark task, the system automatically modifies the code of the task.
            
        
        **Parameter**
        
        **Description**
        
        **Source Project Name**
        
        The names of all cross-project dependencies in the source workspace.
        
        **Property**
        
        The project category.
        
        **Destination Project Name**
        
        The destination project to which the source project should be mapped.
        
        **Ignore Mapping**
        
        If you turn on this switch, the system ignores the mapping between the source project and the destination project. The dependencies of the corresponding nodes remain unchanged in the destination workspace.
        
    5.  Configure **Data Source Mappings**.
        
        In the Data Source Mappings section, configure mappings between source data sources and destination data sources. After you configure mappings, the destination data sources are used during task deployment.
        
        **Parameter**
        
        **Description**
        
        **The name of the source data source.**
        
        The data sources in the source workspace.
        
        **Datasource Type**
        
        The data source type.
        
        **Destination Name**
        
        The destination data source that the source data source should be mapped to.
        
        **Ignore Mapping**
        
        If you turn on the switch, the source data source is not mapped to a destination data source when you deploy tasks.
        
    6.  Configure **Parameter Mappings**
        
        Synchronizes the parameter configurations of a source workspace to a destination workspace. The system references the workflow parameters and scheduling parameters in the destination workspace when you deploy tasks. You can configure parameters for the destination workspace on the visualized UI or by using expressions. For more information, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters).
        
        **Note**
        
        Make sure that the parameter names are unique in each deployment task. Do not assign the same values to a parameter in different tasks.
        
    7.  Click **Create**.
        

### **2\. Deploy the task to the production environment of the source workspace**

Using a basic-mode workspace in [DataStudio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/) as an example, this step involves deploying tasks to the production environment of the current (source) workspace. After the deployment is complete, the system pushes the built deployment package to the **Nodes to Deploy** list in the Deploy Center, which will be used for subsequent cross-workspace deployment.

**Note**

-   Only members with the **O&M**, **Deploy**, or **Workspace Administrator** roles are allowed to perform deployment operations.
    
-   If you are using a basic-mode workspace in [DataStudio (legacy version)](/help/en/dataworks/user-guide/overview-26/), locate the nodes, functions, or other items to be deployed in the DataStudio module, and click the **Submit** button (![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p951755.png)) in the top toolbar.
    

1.  In DataStudio (new version), locate the nodes, functions, or other items to be deployed, and click the **Deploy** button in the top toolbar to enter the deployment process.
    
2.  In the deployment process, click **Start Deployment to Production Environment** to deploy the selected objects to the production environment of the source workspace.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p959708.png)
    

### **3\. Create a deployment package**

**Note**

Members with the **Develop** role can create deployment packages in the Deploy Center. If you are assigned the **Workspace Administrator** role, you do not need to manually create a package. After you select the objects to be deployed, the system automatically generates a package.

1.  Log on to the Deploy Center of the source workspace as a member with the **Development** role.
    
    To enter the Deploy Center, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon in the upper-left corner, then choose **All Products** > **More** > **Deploy Center**.
    
2.  In the left-side navigation pane, click **Nodes to Deploy** to view the packages to be deployed. You can click **Add to Deployment Package** in the **Actions** column. After the packages are added, the number of packages to be deployed is displayed in the **View Package to Deploy** section.
    
    **Note**
    
    -   You can also select multiple objects and click **Batch Add to Deployment Package** in the lower part of the page.
        
    -   If you use DataStudio (new version) and click **Terminate Deployment** in the deployment process, the corresponding package to be deployed will no longer be displayed here.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p959752.png)
    
3.  After the objects are added to the deployment package, click **View Packages** to verify the objects to be deployed in the package. You can click **Remove** to remove the unnecessary package.
    
    **Note**
    
    Currently, you can only view objects in DataStudio (old version).
    
4.  On the **Deployment Package** page, click **Create Deployment Package** and follow the instructions to complete the creation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p959185.png)
    
    **Note**
    
    If you are assigned the **Workspace Administrator** role, click **Deploy All** to directly deploy the objects.
    

### **4\. Deploy the deployment package**

**Note**

The member performing this operation must have the **O&M**, **Deploy**, or **Workspace Administrator** role in both the source and destination workspaces.

1.  Log on to the Deploy Center of the source workspace as a member with one of the required roles.
    
    To enter Deploy Center, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon in the upper-left corner, then choose **All Products** > **More** > **Deploy Center**.
    
2.  In the left-side navigation pane, click **Deployment Packages** to view the generated package.
    
3.  Click **Deploy** in the Actions column of the package and follow the on-screen instructions to deploy it.
    
    **Note**
    
    -   During cross-workspace deployment, members with the **O&M**, **Deploy**, or **Workspace Administrator** roles can edit and modify the resource group to be used when the deployed task runs in the destination workspace.
        
    -   For a node whose instance generation mode is `Next Day`, the deployment takes effect based on the following rules:
        
        -   If you deploy the node before 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the next day.
            
        -   If you deploy the node after 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the third day.
            
    -   For a node whose instance generation mode is Immediately After Deployment, the deployment takes effect based on the following rules:
        
        -   If the scheduling time of the node is at least 10 minutes after the node is deployed, the updated instance is generated as scheduled.
            
        -   If the scheduling time of the node is within 10 minutes after the node is deployed, or you deploy the node after 23:30 on the current day, the updated instance is generated on the third day.
            
    

### **Step 5: View the deployment result**

1.  After a deployment package is created and deployed, you can go to the **Deployment Packages** page of the current workspace to [view deployment packages](/help/en/dataworks/user-guide/view-deployment-tasks).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p959813.png)
    
2.  If the deployment is successful, you can go to the [Operation Center](/help/en/dataworks/user-guide/operation-center-1/) of the destination workspace to view the deployed tasks.
