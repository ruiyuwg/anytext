Learn how to associate a MaxCompute project with your DataWorks workspace as a compute resource. This enables you to synchronize, develop, and analyze data using MaxCompute's powerful computing capabilities.

## Usage notes

-   **Supported regions**: This feature is available in China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia).
    
-   The MaxCompute project must be in the same region and belong to the same Alibaba Cloud account as your DataWorks workspace.
    
-   **Required permissions**:
    
    **Product**
    
    **Operator**
    
    **Permission requirements**
    
    **DataWorks side**
    
    **Alibaba Cloud account**
    
    No additional permissions required.
    
    **RAM User/RAM Role**
    
    Workspace members must have one of the following: the **O&M** role, the **Workspace Administrator** role, or the `AliyunDataWorksFullAccess` permission.
    
    **MaxCompute side**
    
    **RAM User/RAM Role**
    
    **To associate compute resources:** You need the [odps:ListProjects](/help/en/maxcompute/user-guide/ram-permissions) permission on MaxCompute and the [Super\_Administrator](/help/en/maxcompute/user-guide/role-planning#section-fxq-ziv-7by) permission on the target MaxCompute project.
    
    **To serve as the default access identity:** You need the admin or super\_administrator permission for the MaxCompute project. Once the compute resource is bound, this account or role is automatically added to the MaxCompute production project with the [Role\_Project\_Scheduler](/help/en/dataworks/user-guide/mappings-between-the-built-in-workspace-level-roles-of-dataworks-and-the-roles-of-maxcompute) role.
    
    Production data is owned by the default access identity configured for the production environment. Other accounts that need to access or modify production tables must request permissions through [Security Center](/help/en/dataworks/user-guide/security-center-1/).
    

## **Prerequisites**

-   [MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#34249b30f60px) is activated in the same region as DataWorks, and you have created at least one MaxCompute project.
    
-   You have [created a DataWorks workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm), and your RAM user account is a workspace member with the **Workspace Administrator** role.
    
    **Note**
    
    DataWorks offers two workspace modes: Simple mode and Standard mode. Make sure you understand the [differences between Simple mode and Standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b) before creating your workspace.
    
-   You have associated a resource group with your workspace and verified network connectivity.
    
    -   If you are [using serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups), verify that the MaxCompute compute resource can connect to the serverless resource group.
        
    -   If you are [using a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), verify that the MaxCompute compute resource can connect to the corresponding **exclusive resource group for scheduling**.
        

## **Associate in Data Studio (new version)**

Follow these steps to associate a MaxCompute compute resource with a **Use Data Studio (New Version)** workspace.

### **Access the compute resource list**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select your region. In the left navigation pane, choose **More** > **Management Center**. Select your workspace and click **Go to Management Center**.
    
2.  In the left navigation pane, click **Compute Resource**.
    

### **Associate a MaxCompute resource**

On the [Compute Resource list page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure your MaxCompute compute resource as follows:

1.  Select the type of compute resource you want to associate.
    
    1.  Click **Associate Computing Resource**.
        
    2.  In the dialog box, select **MaxCompute**.
        
2.  Configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **MaxCompute Project**
    
    Select the MaxCompute project you want to associate. If you don't have a project yet, you can create an [internal](/help/en/maxcompute/getting-started/create-a-maxcompute-project) or [external](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#1d1f481d5aore) project.
    
    **Note**
    
    -   For workspaces in Standard mode, you must select different MaxCompute projects for the production and development environments. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace).
        
    -   MaxCompute's [Billable items and billing methods](/help/en/maxcompute/product-overview/overview-1/).
        
    -   If the target MaxCompute project is not listed, grant the **Super\_Administrator** permission for that project to your current account.
        
    
    **Default Access Identity**
    
    Specifies the identity used to access the MaxCompute project from this workspace.
    
    -   **Development Environment**: Only **Executor** access is supported.
        
    -   **Production Environment**: Supports access via **Alibaba Cloud Account**, **RAM User**, and **RAM Role**.
        
    
    **Note**
    
    -   Only the Alibaba Cloud account owner and users or roles with the **AdministratorAccess** permission can select all available access identities.
        
    -   Production data is owned by the default access identity specified for the production environment. If other accounts need to access or modify production tables, they must request permissions through **Security Center**. For more information, see [MaxCompute data access control](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910) and [Overview](/help/en/dataworks/approval-center-overview#concept-2095438).
        
    
    **Endpoint**
    
    The endpoint that DataWorks uses to access the MaxCompute project. This includes the Tunnel service address for data transfer. Available options:
    
    -   **Auto Fit**: DataWorks automatically selects the optimal endpoint. This is the recommended option.
        
    -   **Custom Configuration**: Manually specify the MaxCompute Endpoint and Tunnel Endpoint. Note that [Endpoint](/help/en/maxcompute/user-guide/endpoints) vary by region.
        
    
    **Compute Resource Instance Name**
    
    A custom name to identify this compute resource in your workspace.
    
3.  Test the network connectivity.
    
    In the connection configuration section, select the resource group that DataWorks will use to run MaxCompute tasks, and then click **Test Network Connectivity** to verify that the resource group can access the MaxCompute project. For more information, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
    **Note**
    
    If no resource group is available, you can [add and associate a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) with your workspace first, and then return here to test connectivity.
    
4.  Click **Confirm** to complete the association.
    
    **Note**
    
    -   After the association is complete, a MaxCompute data source with the same name is automatically created in the **Data Source** section of your workspace.
        
    -   After the compute resource is successfully bound, the system performs access identity authorization automatically. This process adds the access identity account to the MaxCompute project and grants the appropriate permissions. During this process, connectivity tests may temporarily return a "no permission" error. If this happens, save the compute resource configuration and wait a few moments for the authorization to complete.
        
    

## **Associate in Data Studio (legacy version)**

Follow these steps to associate a MaxCompute compute resource with a workspace that has **not** been upgraded to **Use Data Studio (New Version)**.

### **Access the compute resource list**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to go to the **Computing Resource** list page.
    

### **Associate a MaxCompute resource**

Configure the MaxCompute compute resource association as follows:

1.  Select the type of compute resource you want to associate.
    
    1.  Click **Create Computing Resource**.
        
    2.  In the dialog box, select **MaxCompute**.
        
2.  Configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Authentication Method**
    
    New compute resources only support authentication via Alibaba Cloud account or RAM role.
    
    **Alibaba Cloud Account**
    
    You can only associate MaxCompute projects that belong to your **Current Alibaba Cloud Account**.
    
    **MaxCompute Project Name**
    
    Select the MaxCompute project you want to associate. If you don't have a target project, you need to [create one](/help/en/maxcompute/getting-started/create-a-maxcompute-project).
    
    **Note**
    
    -   For workspaces in Standard mode, you must select different MaxCompute projects for the production and development environments. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace).
        
    -   MaxCompute's [Billable items and billing methods](/help/en/maxcompute/product-overview/overview-1/).
        
    -   If the target MaxCompute project is not listed, grant the **Super\_Administrator** permission for that project to your current account.
        
    
    **Region**
    
    Select the region where your MaxCompute project is located. You cannot associate MaxCompute projects from different regions.
    
    **Default Access Identity**
    
    Specifies the identity used to access the compute resource within your workspace.
    
    -   **Development Environment**: Only **Executor** access is currently supported.
        
    -   **Production Environment**: Supports access via Alibaba Cloud account, RAM user, and RAM role.
        
        **Note**
        
        -   Only the Alibaba Cloud account owner and users or roles with the **AdministratorAccess** permission can select all available access identities.
            
        -   Production data is owned by the default access identity specified for the production environment. If other accounts need to access or modify production tables, they must request permissions through **Security Center**. For more information, see [MaxCompute data access control](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910) and [Overview](/help/en/dataworks/approval-center-overview#concept-2095438).
            
        
    
    **Endpoint**
    
    Specifies the endpoint address that DataWorks uses to access the MaxCompute project. This includes both the MaxCompute service endpoint and the Tunnel service address for uploading and downloading data. Two configuration options are available:
    
    -   **Auto Fit**: DataWorks automatically selects the optimal endpoint based on your configuration. This is the recommended option.
        
    -   **Custom Configuration**: Manually specify the MaxCompute Endpoint and Tunnel Endpoint. Note that [Endpoint](/help/en/maxcompute/user-guide/endpoints) vary by region.
        
    
3.  Test the network connectivity.
    
    In the connection configuration section, select the resource group that DataWorks will use to run MaxCompute tasks, and then click **Test Network Connectivity** to verify that the resource group can access the MaxCompute project. For more information, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
    **Note**
    
    If no resource group is available, you can [add and associate a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) with your workspace first, and then return here to test connectivity.
    
4.  Click **Create and Associate Computing Resource with DataStudio** to complete the association.
    
    **Note**
    
    -   After the association is complete, a MaxCompute data source with the same name is automatically created in the **Data Source** section of your workspace.
        
    -   After the compute resource is successfully bound, the system performs access identity authorization automatically. This process adds the access identity account to the MaxCompute project and grants the appropriate permissions. During this process, connectivity tests may temporarily return a "no permission" error. If this happens, save the compute resource configuration and wait a few moments for the authorization to complete.
        
    

## **Next steps**

After the MaxCompute compute resource is associated, a MaxCompute data source is automatically created for your workspace. You can use this data source in [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/), as well as in [Database Node (New Data Studio)](/help/en/dataworks/user-guide/new-studio-database-node) or [Database Node (Legacy Data Studio)](/help/en/dataworks/user-guide/database/).

## **FAQ**

-   **Problem**: The error ``connect timed out, the possible reason is that the endpoint `http://service.odps.aliyun.com/api` is wrong, please check your endpoint`` occurs when running MaxCompute tasks.
    
    **Solution**: Check your Endpoint configuration. Make sure you have entered the [VPC Endpoint](/help/en/maxcompute/user-guide/endpoints#section-oit-45y-23z) for the same region as your resource group.
    
-   **Problem**: When testing compute resource connectivity, the error `You have NO privilege 'odps:Read' on {acs:odps:*:projects/xxx}` occurs.
    
    **Solution**: Check the status of your MaxCompute project. If the project is frozen or in a service suspended state, you can restore it in the [MaxCompute console](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list).
