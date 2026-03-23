Associate your OpenSearch Vector Search Edition instance as a computing resource in DataWorks to develop and manage offline sync tasks in Data Studio.

## **Prerequisites**

Before you begin, make sure that you have:

-   An [OpenSearch Vector Search Edition instance](/help/en/open-search/vector-search-edition/buy-opensearch-vector-retrieve-version-of-the-instance) in the same region as your DataWorks workspace
    
-   A [DataWorks workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm) with **Use Data Studio (New Version)** enabled
    
-   The RAM user performing the operation added to the workspace and assigned the **Workspace Administrator** role
    
-   A resource group attached to the workspace with network connectivity to the OpenSearch instance:
    
    -   [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups): Ensure connectivity between the OpenSearch computing resources and the Serverless resource group
        
    -   [Legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/): Ensure the exclusive resource group for scheduling can connect to the OpenSearch instance
        

## **Limitations**

**Constraint**

**Details**

**Supported instance type**

OpenSearch Vector Search Edition only

**Supported regions**

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Hong Kong), Singapore, Germany (Frankfurt)

**Required permissions:**

**Operator**

**Required permissions**

**Alibaba Cloud account**

No additional permissions required

**RAM user or RAM role**

**O&M** and **Workspace Administrator** roles, or the `AliyunDataWorksFullAccess` permission. See [Grant workspace administrator permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).

## **Step 1: Open the computing resource page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview).
    
2.  Switch to the destination region.
    
3.  In the left-side navigation pane, choose **More** > **Management Center**.
    
4.  Select your workspace and click **Go To Management Center**.
    
5.  In the left-side navigation pane, click **Computing Resource**.
    

## **Step 2: Associate the computing resource**

1.  Click **Associate Computing Resource**.
    
2.  Set the computing resource type to **OpenSearch**.
    
3.  Configure the parameters:
    
    **Parameter**
    
    **Description**
    
    **OpenSearch Instance**
    
    Select a purchased OpenSearch instance. To buy a new instance, click **Create** in the drop-down list. If the workspace uses separate production and development environments, select a different instance for each.
    
    **Username**
    
    The username configured during OpenSearch instance creation. View it on the [OpenSearch Instance Management](/help/en/open-search/vector-search-edition/instance-management-easy-to-use-edition/) page.
    
    **Password**
    
    The password configured during OpenSearch instance creation.
    
    **Computing Resource Instance Name**
    
    A custom name for the computing resource. At runtime, this name identifies the computing resource for a task.
    
4.  Select the resource group for running offline OpenSearch sync tasks.
    
5.  Click **Test Network Connectivity** to verify that the resource group can access the OpenSearch instance.
    
    If the test fails, see [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
6.  Click **OK**.
    

**Note**

The system automatically creates an OpenSearch data source with the same name in the **Data Sources** section of the workspace.

## **Next steps**

Create offline sync tasks in Data Studio using a **Data Integration** > **Offline Synchronization** node. See [Offline synchronization nodes](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio).
